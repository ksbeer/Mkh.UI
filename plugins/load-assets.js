const path = require('path')
const fs = require('fs')
const fse = require('fs-extra')
const output = path.resolve('public/assets')

//模块前缀
const modPrefix = 'mkh-mod-'

/**
 * 复制mkh-ui中的资源目录
 * 如果是mkh-ui项目本身，则从package目录中复制，如果是模块，则从node_modules目录中复制
 */
const copyUIAssets = (packageObj, mode) => {
  let sourceDir = ''
  if (mode == 'lib') return

  //mkh-ui项目本身
  if (packageObj.name === 'mkh-ui') {
    sourceDir = path.resolve('package/assets')
  } else {
    sourceDir = path.resolve('node_modules/mkh-ui/lib/assets')
  }
  console.log(`复制框架(mkh-ui)中的静态资源`)
  fse.copy(sourceDir, path.resolve(output, 'mkh'))
}

/**
 * 复制依赖模块中的资源
 */
const copyModAssets = mode => {
  if (mode == 'lib') return

  fse.readdir(path.resolve('node_modules'), (err, dirs) => {
    dirs.forEach(m => {
      if (m.startsWith(modPrefix)) {
        const assetsPath = path.resolve(`node_modules/${m}/lib/assets`)
        fse.pathExists(assetsPath, (err, exists) => {
          if (exists) {
            console.log(`复制模块(${m})中的静态资源`)
            fse.copy(assetsPath, path.resolve(output, m.replace(modPrefix, '')))
          }
        })
      }
    })
  })
}

/**
 * 复制当前模块中的资源
 */
const currentModAssets = (packageObj, mode) => {
  if (mode == 'lib') return

  if (packageObj.name !== 'mkh-ui') {
    const assetsPath = path.resolve(`src/assets`)
    fse.pathExists(assetsPath, (err, exists) => {
      if (exists) {
        console.log(`复制模块(${packageObj.name})中的静态资源`)
        fse.copy(assetsPath, path.resolve(output, packageObj.name.replace(modPrefix, '')))
      }
    })
  }
}

export default function ({ mode }) {
  return {
    name: 'mkh-load-assets',
    buildStart() {
      const packageObj = fse.readJSONSync(path.resolve('./package.json'))
      //复制框架中的资源
      copyUIAssets(packageObj, mode)

      //复制当前模块中的资源
      currentModAssets(packageObj, mode)

      //复制依赖模块中的资源
      copyModAssets(mode)
    },
    writeBundle(bundle) {
      if (mode == 'lib') {
        //如果是库模式，需要在打包结束后复制资源目录到输出目录
        const packageObj = fse.readJSONSync(path.resolve('./package.json'))
        let output = path.resolve('lib/assets')
        if (packageObj.name === 'mkh-ui') {
          fse.copy(path.resolve('package/assets'), output)
        } else {
          let assetsPath = path.resolve('src/assets')
          fse.pathExists(assetsPath, (err, exists) => {
            if (exists) {
              fse.copy(assetsPath, output)
            }
          })
        }

        //在生成的入口文件中添加导入样式的代码
        let styleFilePath = path.resolve(bundle.dir, 'style.css')
        fse.pathExists(styleFilePath, (err, exists) => {
          if (exists) {
            let entryFilePath = path.resolve(bundle.dir, bundle.entryFileNames)
            fs.appendFile(entryFilePath, "import './style.css';", () => {})
          }
        })
      }
    },
  }
}
