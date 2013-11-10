---
layout:		post
title:  	"Linuxmint 安装 Oracle JDK"
category: 	oracle
tags:		[oracle, jdk]
---

	sudo add-apt-repository ppa:webupd8team/java
	sudo apt-get update
	sudo apt-get install oracle-java7-installer

查看当前 java 版本
> java -version

选择 java 7 oracle 版本
> sudo update-java-alternatives -s java-7-oracle
	
> sudo update-alternatives --config java


> vim ~/.bashrc
	
	export JAVA_HOME=/usr/lib/jvm/java-7-oracle
	export JRE_HOME=${JAVA_HOME}/jre

