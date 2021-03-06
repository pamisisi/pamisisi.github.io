---
layout:		post
title:  	"Ext.Store"
category: 	extjs
tags:		[extjs, store]
---

Ext.data 包是加载和保存您应用程序中的所有的数据 ,它包括了 41 个类, 但有 3 个类比其它类更重要这 3 个类分别是 Model, Store 和 Ext.data.proxy.Proxy. 几乎每个应用程序都使用它与它的子类.

_官方E文路径: ExtJS -> guide -> concepts -> The Data Package_

#### Models 和 Stores
Ext.data 包的核心是 Ext.data.Model. 一个 Model 表示应用程序中数据的某种类型, 例如: 一个电子商务应用程序可能有 用户, 产品和订单模型. 简单的说模型就是一组字段和它的数据. 我们去看看模型 4 个重要的组成部分 Fields(字段), Proxies(代理), Associations(关联) 和 Validations(校验).

_Ext.data.Model 数据模型 它的前身是 3.x 或之前版本中的 Ext.data.Record 类._

![Ext.data.Model][img-model]

让我们来看看如何创建一个Model：

	{% highlight javascript linenos %}
	Ext.define('User', {			//定义一个 Model 实体类,类名 User
		extend: 'Ext.data.Model', 	//继承
		fields: [ 					//定义2个字段 id 跟 name 字段类型分别为 int, string
		    { name: 'id', type: 'int' },
		    { name: 'name', type: 'string' }
		]
	});
	{% endhighlight %}

Model 通常用于 Store, 它基本上是一个集合 Model 的实例. 建立一个 Store 和加载其数据很简单：

	{% highlight javascript linenos %}
	Ext.create('Ext.data.Store', { //创建一个 Store:
		model: 'User',	// 关联 User Model类
		proxy: {
		    type: 'ajax',
		    url : 'users.json',
		    reader: 'json'
		},
		autoLoad: true
	});
	{% endhighlight %}

我们配置的 Store 使用了 Ajax 代理, 告诉它 URL 路径 `users.json` 并指定了 JSON 阅读器. 
在这种情况下我们的服务器返回 JSON , 因为我们已经指定了一个 JSON 阅读器读取响应,　所以 Store
会自动从 `users.json` 加载 User 模型的实例. `users.json` URL应该返回一个JSON字符串,
它看起来像这样：

	{% highlight javascript linenos %}
	{
		success: true,
		users: [
		    { id: 1, name: 'Ed' },
		    { id: 2, name: 'Tommy' }
		]
	}
	{% endhighlight %}


Store 也可以使用内嵌数据(直接将数据指定在 Store 内部):

	{% highlight javascript linenos %}
	Ext.create('Ext.data.Store', {
		model: 'User',
		data: [
		    { firstName: 'Ed',    lastName: 'Spencer' },
		    { firstName: 'Tommy', lastName: 'Maintz' },
		    { firstName: 'Aaron', lastName: 'Conran' },
		    { firstName: 'Jamie', lastName: 'Avins' }
		]
	});
	{% endhighlight %}

### 排序和分组
Stores 可以在本地进行排序, 过滤和分组,以及支持远程排序,过滤和分组:

	{% highlight javascript linenos %}
	Ext.create('Ext.data.Store', {
		model: 'User',

		sorters: ['name', 'id'],
		filters: {
			property: 'name',
			value   : 'Ed'
		},
		groupField: 'age',
		groupDir: 'DESC'
	});
	{% endhighlight %}



