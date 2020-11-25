function setRem() {
  const baseFontSize = 50 // 换算基数 （px2rem中的remUnit）
  const designWidth = 375 // 设计稿宽度
  // 当前页面宽度相对于 设计稿宽度 的缩放比例，可根据自己需要修改。
  const fontSize = (document.documentElement.clientWidth / designWidth) * baseFontSize
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = fontSize + 'px'
}
// 初始化
setRem()

// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

export default setRem
