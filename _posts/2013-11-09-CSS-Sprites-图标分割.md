---
layout:		post
title:  	"CSS Sprites 图标分割"
category: 	css
tags:		[css, sprites]
---
### 第一种方法

	.icon1 {
		width: 16px;
		height: 16px;
		background: url(sprites.png) -0px -0px;
	}

	barckground url x y;
	x y 坐标对应图标左上角 width 跟 height 对应 图标大小.

	<div class="icon1"></div>

### 第二种方法

	<style type="text/css">
	div {
		background: url('result.png');
	}
	</style>
	  
	<div style="background-position: -0px -0px; width: 16px; height: 16px">&nbsp;</div>
	<div style="background-position: -0px -26px; width: 16px; height: 16px">&nbsp;</div>



---------------------------------------
<center>Author: [Pamisisi](mailto:pamisisi@live.com)</center>
