var measureText = function(font) {
	let canvas = document.createElement('canvas');
	this.ctx = canvas.getContext('2d');
	this.ctx.font = font;
}
measureText.prototype.setFont = function(font){
	this.ctx.font = font;
}
measureText.prototype.width = function(text){
	return this.ctx.measureText(text).width;
}
/**
*text (string), aimwidth (number), [ellipsis] (string)
*/
measureText.prototype.cutByWidth = function(text, aimwidth, ellipsis){
	if(!text || !aimwidth || aimwidth <= 0 ){
		return '';
	}
	let w = this.width(text);
	let ellipsisw = this.width(ellipsis||'');
	let cutw = aimwidth - ellipsisw;
	let avgw = w/text.length;
	let len = parseInt(cutw / avgw);
	let overflow = this.width( text.substring(0, len) ) > cutw; 
	if(overflow){
		while(this.width( text.substring(0, --len) ) > cutw){};		
	}else{
		while(this.width( text.substring(0, -len) ) > cutw){};		
	}
	return `${text.substring(0,len)}${ellipsis}`;
}
module.exports = measureText;
