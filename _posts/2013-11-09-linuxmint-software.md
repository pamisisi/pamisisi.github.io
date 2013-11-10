---
layout:		post
title:  	"Linuxmint 常用软件"
category: 	linuxmint
tags:		[linuxmint]
---

#### 五笔输入法
> sudo apt-get install ibus ibus-table-wubi

#### 拼音输入法
> sudo apt-get install ibus ibus-pinyin

然后到Menu->System Tool->System settings->Language Support中把Keyboard input method system改为ibus， 重启电脑后顶部状态栏处有一个键盘，点击Preferences->input method， 选择刚才安装的中文输入法就OK了。

#### google-chrome
For the 64 bit version of Chrome

    sudo apt-get install libcurl3 libnspr4-0d libxss1
    wget -O g-chrome-NoobsLab64.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
    sudo dpkg -i g-chrome-NoobsLab64.deb && rm g-chrome-NoobsLab64.deb


#### avant-window-navigator
> sudo add-apt-repository ppa:nilarimogard/webupd8  
> sudo apt-get update  
> sudo apt-get install avant-window-navigator  


### gedit 中文乱码
>  gconf-editor  

展开左边的树节点，找到 /apps/gedit-2/preferences/encodings 节点并单击它。
 双击右边的 auto_detected 键，打开“编辑键”对话框。
增加 GB18030  (2)

#### 词典
> sudo apt-get stardict

去掉自带的TTS发音
> cd /usr/lib/stardict/plugins  
> mv stardict_espeak.so stardict_espeak.so.bak

	find ~/.voice/voice/ | grep -i '\/%s\.' | xargs play &

#### vim
> sudo apt-get vim

#### skype
> sudo apt-get skype

不能启动  
~/.bin 创建一个 skype bash脚本声明 LD_PRELOAD 环境变量。  

> gedit ~/.bin/skype

    #!/bin/bash
    export LD_PRELOAD=/usr/lib/i386-linux-gnu/mesa/libGL.so.1
    exec /usr/bin/skype


> chmod 755 ~/.bin/skype


#### virtualbox
> sudo apt-get install virtualbox-dkms --reinstall
> sudo apt-get install virtualbox


#### 视频录制
> sudo apt-get install kazam  
> sudo apt-get install gtk-recordmydesktop  


#### mp3-tag 转换
> sudo apt-get install easytag  


#### osd-lyrics 
> sudo add-apt-repository ppa:osd-lyrics/ppa  
> sudo apt-get update  
> sudo apt-get install osdlyrics  

sudo add-apt-repository -r ppa:osd-lyrics/dists/ubuntu  


#### PCB
> sudo apt-get install eagle
