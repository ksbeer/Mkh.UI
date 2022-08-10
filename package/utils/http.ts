import type { App } from 'vue'
import type { HttpClient } from '@/types/http'
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { ElNotification } from 'element-plus'
import { i18n } from '../locales'
import { useTokenStore } from '../store/modules/token'
import { useConfigStore } from '../store/modules/config'
import dayjs from 'dayjs'
import { BootstrapOptions, HttpOptions, Module } from '@/types/mkh'

export class Http implements HttpClient {
  axios: AxiosInstance

  constructor(options) {
    const mkh = window.mkh
    const _axios = axios.create(options)
    const tokenStore = useTokenStore()
    const configStore = useConfigStore()

    _axios.defaults.headers.post['Content-Type'] = 'application/json'
    _axios.defaults.headers.put['Content-Type'] = 'application/json'

    //请求前拦截器，附加令牌
    _axios.interceptors.request.use(
      (config) => {
        if (tokenStore.accessToken) {
          config.headers.Authorization = 'Bearer ' + tokenStore.accessToken
        }
        return config
      },
      (error) => {
        console.error(error)
        return Promise.reject(error)
      }
    )

    // 响应前拦截器
    _axios.interceptors.response.use(
      (response) => {
        const { config } = response
        if (config.responseType && config.responseType === 'blob') {
          const url = window.URL.createObjectURL(response.data)

          //预览模式直接返回
          if (response.config.headers['mkh_preview']) return url

          let fileName = ''
          let cd = response.headers['content-disposition']
          if (cd) {
            fileName = decodeURI(cd.split("''")[1])
          }
          //如果文件名不存在，则使用时间戳
          if (!fileName) {
            fileName = dayjs().format('YYYYMMDDHHMMSSS')
          }

          //通过模拟a标签点击事件下载文件
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', fileName)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          return
        } else if (response.data.successful) {
          return response.data.data
        } else if (!response.data.successful && !config.notShowErrorMsg) {
          //noErrorMsg表示不显示错误信息，有时候希望在业务中根据返回的code自行进行信息提醒时可用
          ElNotification({
            type: 'error',
            title: i18n.global.t('mkh.http_error_title'),
            message: response.data.msg,
            showClose: true,
            duration: 1500,
          })
          return Promise.reject(response.data.msg)
        } else {
          return response.data
        }
      },
      (error) => {
        if (error && error.response) {
          switch (error.response.status) {
            case 401:
              const refreshTokenAction = configStore.actions.refreshToken
              if (tokenStore.refreshToken && refreshTokenAction) {
                //尝试刷新令牌
                return refreshTokenAction({
                  accountId: tokenStore.accountId,
                  platform: 0,
                  refreshToken: tokenStore.refreshToken,
                })
                  .then((data) => {
                    tokenStore.login(data)
                    //重新发一起一次上次的的请求
                    error.config.headers.Authorization = 'Bearer ' + data.accessToken
                    return _axios.request(error.config)
                  })
                  .catch((e) => {
                    tokenStore.logout()
                  })
              } else {
                tokenStore.logout()
              }
              break
            case 403:
              mkh.router.push('/error/403')
              break
            default:
              console.error(error.response.data.msg)
              mkh.router.push('/error/500')
              break
          }

          return
        }
        return Promise.reject(i18n.global.t('mkh.http_error'))
      }
    )

    this.axios = _axios
  }
  post(url: string, params?: object, config?: AxiosRequestConfig) {
    return this.axios.post(url, params, config)
  }
  get(url: string, params?: object, config?: AxiosRequestConfig) {
    const config_ = Object.assign({}, config, {
      // 参数
      params,
      // 修改参数序列化方法
      paramsSerializer: (p) => {
        // 使用逗号分隔参数
        return qs.stringify(p, {
          allowDots: true,
        })
      },
    })
    return this.axios.get(url, config_)
  }
  delete(url: string, params?: object, config?: AxiosRequestConfig) {
    const config_ = Object.assign({}, config, {
      // 参数
      params,
      // 修改参数序列化方法
      paramsSerializer: (p) => {
        // 使用逗号分隔参数
        return qs.stringify(p, {
          allowDots: true,
        })
      },
    })
    return this.axios.delete(url, config_)
  }
  put(url: string, params?: object, config?: AxiosRequestConfig) {
    return this.axios.put(url, params, config)
  }
  download(url: string, params?: object, config?: AxiosRequestConfig) {
    return this.axios.post(url, params, Object.assign({ responseType: 'blob' }, config))
  }
  preview(url: string, params?: object, config?: AxiosRequestConfig) {
    const config_ = Object.assign({ responseType: 'blob', headers: { mkh_preview: true } }, config, {
      // 参数
      params,
      // 修改参数序列化方法
      paramsSerializer: (p) => {
        // 使用逗号分隔参数
        return qs.stringify(p, {
          allowDots: true,
        })
      },
    })
    return this.axios.get(url, config_)
  }
  getUrl(url: string): string {
    return this.axios.defaults.baseURL + url
  }
}

//通用的增删改查方法
const crud = (http, root) => {
  return {
    query(params) {
      return http.get(`${root}/query`, params)
    },
    add(params) {
      return http.post(`${root}/add`, params)
    },
    remove(id) {
      return http.delete(`${root}/delete`, { id })
    },
    edit(id) {
      return http.get(`${root}/edit`, { id })
    },
    update(params) {
      return http.post(`${root}/update`, params)
    },
  }
}

/**
 * 为模块创建HTTP实例
 */
export const createHttp = (options: BootstrapOptions, mod: Module): HttpClient => {
  if (options.http) {
    const http = options.http
    let httpOptions: HttpOptions = Object.assign({}, http.global)

    if (http.modules && http.modules[mod.code]) {
      httpOptions = http.modules[mod.code]
    }
    if (httpOptions.baseURL) {
      httpOptions.baseURL = `${httpOptions.baseURL}${httpOptions.baseURL.endsWith('/') ? '' : '/'}${mod.code}/`
    }
    //创建模块的Http实例
    return new Http(httpOptions)
  }

  return new Http({})
}
