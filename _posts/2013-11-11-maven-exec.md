---
layout:		post
title:  	"maven exec 插件"
category: 	maven
tags:		[java, maven]
---

	<build>
		<plugins>
			<plugin>
				<groupId>org.codehaus.mojo</groupId>
				<artifactId>exec-maven-plugin</artifactId>
				<version>1.2.1</version>
				<configuration>
					<executable>java</executable> <!-- executable指的是要执行什么样的命令 -->
					<arguments>
						<argument>-DsystemProperty1=value1</argument> <!-- 这是一个系统属性参数 -->
						<argument>-DsystemProperty2=value2</argument> <!-- 这是一个系统属性参数 -->
						<argument>-XX:MaxPermSize=256m</argument> <!-- 这是一个JVM参数 -->
						<!--automatically creates the classpath using all project dependencies, 
							also adding the project build directory -->
						<argument>-classpath</argument> <!-- 这是classpath属性，其值就是下面的<classpath/> -->
						<classpath /> <!-- 这是exec插件最有价值的地方，关于工程的classpath并不需要手动指定，它将由exec自动计算得出 -->
						<argument>com.yourcompany.app.Main</argument>
						<argument>arg1</argument>
					</arguments>
				</configuration>
			</plugin>

			<plugin>  
				<groupId>org.codehaus.mojo</groupId>  
				<artifactId>exec-maven-plugin</artifactId>  
				<version>1.2.1</version>  
				<executions>  
					<execution>  
						<goals>
						    <goal>java</goal>
						</goals>
					</execution>  
				</executions>  
				<configuration>
					<mainClass>com.yourcompany.app.Main</mainClass>
				</configuration>
			</plugin>
			
		</plugins>
	</build>

先编译啦
> mvn compile

无参数运行：
> mvn exec:java -Dexec.mainClass="com.foo.bar"

有参数运行：
> mvn exec:java -Dexec.mainClass="com.foo.bar" -Dexec.args="arg0 arg1 arg2"

依赖于classpath的运行：
> mvn exec:java -Dexec.mainClass="com.foo.bar" -Dexec.classpathScope=runtime


> mvn exec:help -Ddetail=true -Dgoal=java