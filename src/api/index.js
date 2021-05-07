import menus from './menus'
import avatar from '../assets/avatar.png'
/**
 * @description 登录接口
 */
const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    if (username === 'admin' && password === '17mkh') {
      resolve({
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        refreshToken: '',
      })
    } else {
      reject(new Error('用户名或密码错误'))
    }
  })
}

/**
 * @description 获取验证码
 */
const verifyCodeImages = [
  'data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
  'data:image/png;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=',
]
let t = true
const getVerifyCode = () => {
  return new Promise(resolve => {
    const base64String = verifyCodeImages[t ? 0 : 1]
    t = !t
    resolve({
      id: '123',
      base64String,
    })
  })
}

const setMenusId = (children, parent) => {
  children.forEach((sub, index) => {
    if (parent) {
      sub.id = parent.id + '-' + index
    } else {
      sub.id = index + ''
    }
    if (sub.children && sub.children.length > 0) {
      setMenusId(sub.children, sub)
    }
  })
}
/**
 * @description 获取账户信息
 */
const getAccountInfo = () => {
  setMenusId(menus)

  return new Promise(resolve => {
    resolve({
      /**编号 */
      id: '10001',
      /**用户名 */
      username: 'oldli',
      /**昵称 */
      nickname: 'OLDLI',
      /**头像 */
      avatar,
      /** 菜单列表 */
      menus,
      /** 权限列表 */
      permissions: [],
      /** 按钮列表 */
      buttons: [],
      /** 皮肤设置 */
      skin: {
        /** 名称 */
        name: 'brief',
        /** 主题 */
        theme: '',
        /** 尺寸 */
        size: 'small',
      },
    })
  })
}

export default {
  login,
  getVerifyCode,
  getAccountInfo,
}
