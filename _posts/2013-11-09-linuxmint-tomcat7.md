---
layout:		post
title:  	"Linuxmint 安装 Tomcat 7"
category: 	linuxmint
tags:		[linuxmint, tomcat]
---

$CATALINA_BASE
$JAVA_HOME

### 安装
> sudo apt-get install tomcat7 tomcat7-admin
文档
> sudo apt-get install tomcat7-docs
示例
> sudo apt-get installtomcat7-examples


启动
> sudo /etc/init.d/tomcat7 start

测试 http://alex.gov:8080/

tomcat webapps 目录 `/var/lib/tomcat7/webapps`
