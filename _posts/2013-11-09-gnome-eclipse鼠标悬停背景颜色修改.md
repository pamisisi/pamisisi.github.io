---
layout:		post
title:  	"gnome eclipse 鼠标悬停背景颜色修改"
category: 	eclipse
tags:		[eclipse]
---

> vim ~/.themes/{主题名}/gtk-2.0/gtkrc

修改 (背景色)tooltip_bg_color 跟 tooltip_fg_color

	tooltip_bg_color:#f2edbc
	tooltip_fg_color:#000000

相同的方法修改gtk-3.0/settings.ini:


解决Eclipse自身遗留下的提示背景黑色：

在eclipse里直接可以设置，修改该颜色的配置选项位于：

菜单栏 Window-> preferences -> Java -> Editor 项目中的 Appearance color options 里面的 Source hover background 选项，取消勾选System Default，选择喜欢的颜色即可。

