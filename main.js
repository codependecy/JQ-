// 			中间的图片给一个center类名
			// 			left为0
			// 			z-index 1
			// 			
			// 			每次图片移动到中间的时候,给定一个定时器,让他在动画结束的时候
			// 			清除所有的动画类名,只留center类名

			var $btn = $('.button1')
			var $img = $('.img')
			var $BTN = $('.button2')
			var $Btn = $('.button3')
			$('img:nth-child(1)').addClass('center')
			var Timer = null;
			var index = 0;
			var i = 0;
			setInterval(function() {
				if (index > 2) {
					index = 1
				} else {
					++index
				}
				if (i == 3) {
					i = 1
				} else {
					i = index + 1
				}
				console.log(index, i)
				$('img:nth-child(' + index + ')').addClass('move')
				$('img:nth-child(' + i + ')').addClass('left move')
				setTimeout(function() {
					$('img:nth-child(' + index + ')').removeClass('move center')
					$('img:nth-child(' + i + ')').removeClass('left move')
					$('img:nth-child(' + i + ')').addClass('center')
				},1000)
			},2000)
			// 			$btn.on('click',)
			// 			$BTN.on('click',function(){
			// 				$('img:nth-child(2)').addClass('move')
			// 				$('img:nth-child(3)').addClass('left move')
			// 				setTimeout(function(){
			// 					$('img:nth-child(2)').removeClass('move center')
			// 					$('img:nth-child(3)').removeClass('left move')
			// 					$('img:nth-child(3)').addClass('center')
			// 				},2000)
			// 			})
			// 			$Btn.on('click',function(){
			// 				$('img:nth-child(3)').addClass('move')
			// 				$('img:nth-child(1)').addClass('left move')
			// 				setTimeout(function(){
			// 					$('img:nth-child(3)').removeClass('move center')
			// 					$('img:nth-child(1)').removeClass('left move')
			// 					$('img:nth-child(1)').addClass('center')
			// 				},2000)
			// 			})
