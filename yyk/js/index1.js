/*
* @Author: Administrator
* @Date:   2017-04-01 13:40:54
* @Last Modified by:   Administrator
* @Last Modified time: 2017-04-01 17:33:37
*/

'use strict';

window.onload=function(){
    var designWidth = 1080;
    function fontSize(){
	var CW =document.documentElement.clientWidth;
	var size=CW/designWidth*100+"px";
    document.querySelector("html").style.fontSize = size;
}
    fontSize();
    window.onresize = fontSize; 
}