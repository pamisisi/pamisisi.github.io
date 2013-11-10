---
layout:		post
title:  	"Maven 第3方库 Tag"
category: 	maven
tags:		[java, maven]
---

### junit

	<dependency>
		<groupId>junit</groupId>
		<artifactId>junit</artifactId>
		<version>4.11</version>
		<scope>test</scope>
	</dependency>

### Spring

	<dependency>
	    <groupId>org.springframework</groupId>
	    <artifactId>spring-context</artifactId>
	    <version>3.2.4.RELEASE</version>
	</dependency>

### Struts2
	
	<!-- struts2 核心 库 -->
	<dependency>
      <groupId>org.apache.struts</groupId>
      <artifactId>struts2-core</artifactId>
      <version>2.3.15.2</version>
    </dependency>
    
    <!-- struts2 零配置(注解) 库 -->
    <dependency>
		<groupId>org.apache.struts</groupId>
		<artifactId>struts2-convention-plugin</artifactId>
		<version>2.3.15.2</version>
	</dependency>
	
	<!-- JSON -->
    <dependency>
		<groupId>org.apache.struts</groupId>
		<artifactId>struts2-json-plugin</artifactId>
		<version>2.3.15.2</version>
	</dependency>

### Hibernate

    <dependency>
      <groupId>org.hibernate</groupId>
      <artifactId>hibernate-core</artifactId>
      <version>4.2.7.Final</version>
    </dependency>
    
### MySQL

	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<version>5.1.26</version>
	</dependency>

