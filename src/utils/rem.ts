function setRem() {
  const baseSize = 75 // 换算基数 （px2rem中的remUnit）
  const designWidth = 750 // 设计稿宽度
  // 当前页面宽度相对于 设计稿宽度 的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / designWidth
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()

// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

export default setRem
