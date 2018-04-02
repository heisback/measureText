var measureText = function(font) {
	let canvas = document.createElement('canvas');
	this.ctx = canvas.getContext('2d');
	this.ctx.font = font;
}
measureText.prototype.setFont = function(font){
	this.font = font;
}
measureText.prototype.width = function(text){
	return this.ctx.measureText(text).width;
}
module.exports = measureText;
