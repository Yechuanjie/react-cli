/**
 * [description]
 * create-react-app（以下简称cra），
 * 使用react-app-rewired插件可以暴露出webpack
 * 但是！react-app-rewired2.x以后，不再支持injectBabelPlugin的方式，需要安装customize-cra。
 * 所以新建config-overrides.js可以读取到该文件
 */

const { override, addPostcssPlugins, addWebpackAlias, fixBabelImports } = require('customize-cra')
const path = require('path')

module.exports = override(
  /**
   * [description]
   * 温馨提示： remUnit这个配置项的数值是多少呢？？？ 通常我们是根据设计图来定这个值，原因很简单，便于开发。
   * 假如设计图给的宽度是750，我们通常就会把remUnit设置为75，这样我们写样式时，可以直接按照设计图标注的宽高来1:1还原开发。
   * 那为什么你在这里写成了37.5呢？？？那我们后面专门来讲！
   * PS: 如果引用了像antd这样的第三方UI框架，由于第三方框架没有兼容px2rem ，
   * 所以需要将remUnit的值设置为设计图宽度（这里为750px）75的一半，那么我们必须在写样式时，也将值改为设计图的一半，
   * 即可以1:1还原antd的组件，否则会样式会有变化，例如按钮会变小。
   */
  addPostcssPlugins([require('postcss-px2rem')({ remUnit: 75 })]),
  /* 别名设置 */
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
)
