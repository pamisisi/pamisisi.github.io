---
layout:		post
title:  	"maven 安装"
category: 	maven
tags:		[java, maven]
---

解压
> tar -xvzf apache-maven-*-bin.tar.gz

创建软连接
> ln -s apache-maven-3.1.0 apache-maven

添加 maven 环境变量
> vim /home/alex/.bashrc

	#################################################
	# Environment Variables
	#################################################
	# apache-maven
	export MAVEN_HOME=/home/alex/.software/apache-maven
	export PATH=$PATH:$MAVEN_HOME/bin
	
> mvn help:system

复制 settings.xml
> cp $MAVEN_HOME/conf/settings.xml ~/.m2

### 设置代理

	<settings>
	  <proxies>
		<proxy>
		  <id>my-proxy</id>
		  <active>true</active>
		  <protocol>http</protocol>
		  <username>proxyuser</username>
		  <password>proxypass</password>
		  <host>proxy.host.net</host>
		  <port>80</port>
		  <nonProxyHosts>local.net|some.host.com</nonProxyHosts>
		</proxy>
	  </proxies>
	</settings>

### 设置 eclipse 使用本机 maven