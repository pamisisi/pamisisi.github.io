---
layout:		post
title:  	"Linuxmint 安装 PHP"
category: 	linuxmint
tags:		[linuxmint, php]
---

### 安装php
> sudo apt-get install php5 libapache2-mod-php5

重启apache2
> sudo /etc/init.d/apache2 restart

编写一个php测试脚本
> sudo gedit /var/www/testphp.php

	<?php phpinfo(); ?>
	
测试 http://localhost/testphp.php


### 安装 phpmysqladmin 
> sudo apt-get install libapache2-mod-auth-mysql php5-mysql phpmyadmin

使用mysql.so模块
> gksudo gedit /etc/php5/apache2/php.ini

	extension=mysql.so #去掉;

> sudo gedit /etc/apache2/apache2.conf

	Include /etc/phpmyadmin/apache.conf

> sudo /etc/init.d/apache2 restart