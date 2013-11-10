---
layout:		post
title:  	"maven tomcat7 插件"
category: 	maven
tags:		[java, maven, tomcat]
---

> vim $TOMCAT_PATH%/conf/tomcat-users.xml

	<tomcat-users>
		<role rolename="manager-gui"/>
		<role rolename="manager-script"/>
		<user username="tomcat" password="linuxmint" roles="manager-gui,manager-script"/>
	</tomcat-users>

> vim ~/.m2/settings.xml

	<server>
		<id>tomcat7</id>
		<username>tomcat</username>
		<password>linuxmint</password>
	</server>

### {project} pom.xml 基本配置

build > plugins

	<plugins>
    	<plugin>
            <groupId>org.apache.tomcat.maven</groupId>  
            <artifactId>tomcat7-maven-plugin</artifactId>  
            <version>2.1</version>
            <configuration>
          		<server>tomcat7</server>
       		</configuration>
        </plugin>  
    </plugins>

### {project} pom.xml 配置

	build > plugins
	<plugins>
    	<plugin>
            <groupId>org.apache.tomcat.maven</groupId>
            <artifactId>tomcat7-maven-plugin</artifactId>
            <version>2.1</version>
            <configuration>
            	<url>http://alex.gov:8080/manager/text</url>
            	<path>/${project.build.finalName}</path>
            	<server>tomcat7</server>
            	<username>tomcat</username> 
                <password>linuxmint</password>
       		</configuration>
        </plugin>
    </plugins>


maven-tomcat7 默认 path

	/${project.artifactId}

部署的 URL

	tomcat6	http://localhost:8080/manager/html
	tomcat7 http://localhost:8080/manager/text

部署
> mvn tomcat7:deploy

重新部署
> mvn tomcat7:redeploy
