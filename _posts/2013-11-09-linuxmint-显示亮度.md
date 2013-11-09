---
layout:		post
title:  	"Linuxmint 显示亮度"
category: 	linuxmint
tags:		[linuxmint]
---

查看本机最大亮度值
> cat /sys/class/backlight/acpi_video0/max_brightness

如果是双显卡，则/sys/class/backlight/下还有video1和intel_backlight目录，各自里面都有max_brightness和actual_brightness，表示最大亮度和实际亮度。默认一般使用video0下面的。

> sudo apt-get install laptop-mode-tools

> sudo vim /etc/laptop-mode/laptop-mode.conf

	#
	# Enable laptop mode when on AC power.
	#
	ENABLE_LAPTOP_MODE_ON_AC=1


> sudo vim /etc/laptop-mode/conf.d/lcd-brightness.conf

	#
	# Should laptop mode tools control LCD brightness?
	# 设为1，启用
	CONTROL_BRIGHTNESS=1

	# Commands to execute to set the brightness on your LCD
	# “echo 4” 就是要将亮度值4 写入 BRIGHTNESS_OUTPUT文件中，亮度值根据自己的情况进行取值。
	BATT_BRIGHTNESS_COMMAND="echo 4"
	LM_AC_BRIGHTNESS_COMMAND="echo 4"
	NOLM_AC_BRIGHTNESS_COMMAND="echo 4"
	BRIGHTNESS_OUTPUT="/sys/class/backlight/acpi_video1/brightness"



