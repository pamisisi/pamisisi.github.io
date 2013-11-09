$(document).ready(function() {

	// 文档加载后，资源加载前，隐藏图片
	$('.content_item img').hide();

	// 当图片加载后
	$('.content_item img').load(function() {

		// 缩小图片
		$('.content_item img').each(function() {

			// 指定最大的图片大小
			var x = 710;
			// var y = 710;
			// 获取图片大小
			w = $(this).width();
			h = $(this).height();
			//console.log("width: " + w + ", height: " + h);

			// 当宽度大于指定宽度时
			if(w > x) {

				var scale = w/h;		// 计算图片比例
				//console.log(scale);

				// 获得新的高度
				var new_heigth = Math.round(x/scale);
				$(this).attr({width:x, heigth:new_heigth});
				//console.log(new_heigth);
			}

		});

		// 淡出显示图片
		$('.content_item img').each(function(index, el) {
			$(this).fadeIn(3000);
		});

	});
	
});
