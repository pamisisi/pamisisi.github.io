---
layout:		post
title:  	"Linuxmint apt-get 命令"
category: 	linuxmint
tags:		[linuxmint]
---

### apt-get

	sudo apt-get update 更新源
	sudo apt-get upgrade 更新已安装的包

	sudo apt-get dist-upgrade 升级系统
	sudo apt-get dselect-upgrade 使用 dselect 升级

	sudo apt-get install package 安装包
	sudo apt-get install package --reinstall 重新安装包
	sudo apt-get -f install 修复安装"-f = ——fix-missing"

	sudo apt-get remove package 删除包
	sudo apt-get purge package 移除软件包和配置文件
	sudo apt-get autoremove - 自动移除所有未使用的软件包

	sudo apt-get source package 下载该包的源代码
	sudo apt-get download package 下载的二进制包到当前目录
	sudo apt-get build-dep package 安装相关的编译环境

	sudo apt-get clean 清理下载的软件包
	sudo apt-get autoclean 清理无用的包
	sudo apt-get check 检查有没有破损的依赖关系

### apt-cache

	apt-cache search package 搜索包
	apt-cache show package 获取包的相关信息，如说明、大小、版本等
	apt-cache depends package 了解使用依赖
	apt-cache rdepends package 是查看该包被哪些包依赖

### dpkg

	dpkg -i package 安装软件包
	dpkg -r package	删除包
	dpkg -P package	删除包（包括配置文件）
	dpkg -L package	列出与该包关联的文件
	dpkg -l package	显示该包的版本
	dpkg –unpack package.deb	解开 deb 包的内容
	dpkg -S keyword	搜索所属的包内容
	dpkg -l	列出当前已安装的包
	dpkg -c package.deb	列出 deb 包的内容
	dpkg –configure package	配置包

### apt-get 下载包的缓存目录

	/var/cache/apt/archives

备份deb软件包	
> tar cizvf backup.tar.gz /var/cache/apt/archives --exclude=/var/cache/apt/archives/partial/* --exclude=/var/cache/apt/archives/lock

还原deb软件包
> sudo apt-get update && sudo tar xzvf backup.tar.gz -C /

清理
> sudo apt-get clean 

