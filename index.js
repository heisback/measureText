var measureText = function(font) {
  var canvas = document.createElement('canvas')
  this.ctx = canvas.getContext('2d')
  this.ctx.font = font
}
measureText.prototype.setFont = function(font) {
  this.ctx.font = font
}
measureText.prototype.width = function(text) {
  return this.ctx.measureText(text).width
}
/**
 *text (string), aimwidth (number), [ellipsis] (string)
 */
measureText.prototype.cutByWidth = function(text, aimwidth, ellipsis) {
  if (!text || !aimwidth || aimwidth <= 0) {
    return ''
  }
  var w = this.width(text)
  var ellipsisw = this.width(ellipsis || '')
  var cutw = aimwidth - ellipsisw
  var avgw = w / text.length
  var len = parseInt(cutw / avgw)
  var overflow = this.width(text.substring(0, len)) > cutw
  if (overflow) {
    while (this.width(text.substring(0, --len)) > cutw) {}
  } else {
    while (this.width(text.substring(0, -len)) > cutw) {}
  }
  return text.substring(0, len) + ellipsis
}
/**
 *text (string), aimwidth (number), [ellipsis] (string)
 */
measureText.prototype.calcFontSize = function(text, aimwidth, fontObj) {
  if (!text || !aimwidth || aimwidth <= 0) {
    return 0
  }
  let ret = fontObj.fontSize
  let font = `${fontObj.fontSize}px ${fontObj.fontFamily}`
  this.setFont(font)
  while (this.width(text) > aimwidth) {
    fontObj.fontSize = fontObj.fontSize - 1
    if (fontObj.fontSize < 9) {
      break
    }
    font = `${fontObj.fontSize}px ${fontObj.fontFamily}`
    console.log('font:', font)
    this.setFont(font)
  }
  ret = fontObj.fontSize
  return ret
}
let tm = new measureText('13px PingFangSC-Regular')
console.log(
  'res:',
  tm.calcFontSize('999999999', 15, {
    fontSize: 14,
    fontFamily: 'PingFangSC-Regular'
  })
)
module.exports = measureText
