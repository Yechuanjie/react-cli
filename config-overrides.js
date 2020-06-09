/**
 * 非eject方式暴露webpack配置
 * 使用customize-cra自定义webpack配置
 */

const { override, addPostcssPlugins, addWebpackAlias, fixBabelImports } = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

// 引用 antd 后设置按需引入后，在打包的时候会生成很多 .map 文件
process.env.GENERATE_SOURCEMAP = 'false'

module.exports = override(
  /**
   * 假如设计图给的宽度是750，remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
   * PS: 如果引用了某些没有兼容px2rem第三方UI框架，有的 1rem = 100px（antd-mobile）， 有的 1rem = 75px
   * 需要将remUnit的值设置为像素对应的一半（即50），即可以1:1还原组件，否则会样式会有变化，例如按钮会变小。
   */
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 50 })]),
  /* 别名设置 */
  addWebpackAlias({
    '@/': resolve('src'),
    '@/components': resolve('./src/components'),
    '@/utils': resolve('./src/utils'),
    '@/pages': resolve('./src/pages'),
    '@/store': resolve('./src/store'),
    '@/api': resolve('./src/api'),
    '@/router': resolve('./src/router'),
    '@/assets': resolve('./src/assets'),
    '@/reducer': resolve('./src/reducer'),
    '@/action': resolve('./src/action'),
    '@/constants': resolve('./src/constants'),
    '@/config': resolve('./src/config')
  }),
  /* 按需引入antd-mobile */
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
