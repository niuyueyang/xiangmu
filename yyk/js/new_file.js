window.onload=function(){
	var designWidth=375;/*定义尺寸大小*/
	function fontsize(){
		var CW=document.documentElement.clientWidth;/*设备尺寸*/
		var size=CW/designWidth*50+"px";
		document.querySelector("html").style.fontSize=size;/*设置html的font-size*/
	}
	fontsize();
	window.onresize=fontsize;/*监测窗口发生改变*/
}
