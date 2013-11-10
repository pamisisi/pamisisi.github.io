---
layout:		post
title:  	"Maven 创建项目骨架"
category: 	maven
tags:		[java, maven]
---

1. 首先生成一个项目
> mvn archetype:generate

2. 修改成想生成的样式

3. 创建骨架
> mvn archetype:create-from-project

4. 进入生成骨架的目录
> cd target/generated-sources/archetype/

5. 安装到本地库中
> mvn install

6. 使用
> mvn archetype:generate -DarchetypeCatalog=local