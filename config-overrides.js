/**
 * 非eject方式暴露所有配置
 * 使用react-app-rewired插件可以暴露出webpack配置
 * 结合customize-cra(自定义create-react-app)自定义webpack配置
 */

const { override, addPostcssPlugins, addWebpackAlias, fixBabelImports } = require('customize-cra')
const path = require('path')

module.exports = override(
  /**
   * 假如设计图给的宽度是750，remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
   * PS: 如果引用了某些没有兼容px2rem第三方UI框架，
   * 需要将remUnit的值设置为设计图宽度（这里为750px）75的一半，那么我们必须在写样式时，也将值改为设计图的一半，
   * 即可以1:1还原组件，否则会样式会有变化，例如按钮会变小。
   */
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 75 })]),
  /* 别名设置 */
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  /* 按需引入antd-mobile */
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
