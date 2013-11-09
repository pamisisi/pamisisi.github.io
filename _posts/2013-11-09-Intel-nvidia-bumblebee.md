---
layout:		post
title:  	"Linuxmint 禁用独立显卡"
category: 	linuxmint
tags:		[linuxmint, nvidia, bumblebee]
---
Intel SB (Sandy Bridge) 平台有两个显卡，核心显卡跟独立显卡。Linux 下默认两个都会使用，但独立
显卡开启会增加功耗，产生热量(在某些本本中以满功耗运行)。再说 Linux 下没有大型的 3D 软件，核显足
以应付。 禁用独立显卡很有必要。

	{% highlight bash %}
	sudo add-apt-repository ppa:bumblebee/stable
	sudo apt-get update
	sudo apt-get install bumblebee bumblebee-nvidia

	lspci | grep VGA
	{% endhighlight %}
	
运行后会显示如下内容:
![bumblebee-nvidia]({{ site.url }}/resources/images/bumblebee-nvidia.png)
第一条是Intel核芯显卡的信息，第二条是Nvidia独显的信息，括号中的(rev ff)表示该显卡处于关闭状态。现在你的笔记本电脑风扇不会呼呼狂转了吧。


打开Nvidia的设置程序，测试NV驱动是否安装成功，在终端中运行如下命令：

>sudo optirun nvidia-settings -c :8

![nvidiaXserver-setting]({{ site.url }}/resources/images/nvidiaXserver-setting.png)

### 设置屏幕亮度
为Intel核芯显卡设置亮度。在终端中依次运行如下命令：

sudo echo 300 > /sys/class/backlight/intel_backlight/brightness（这个300是亮度值，可以设置为其他数值，越大越亮）
其次，编辑/boot/grub/grub.cfg，在内核后面加上acpi_backlight=vendor参数，重启后即可使用Fn快捷键调节亮度了。

### 以GPU运行程序
> sudo optirun google-chrome

参考:
http://forums.linuxmint.com/viewtopic.php?t=135283&f=49
http://www.mintos.org/hardware/ubuntu-nvidia-driver.html

