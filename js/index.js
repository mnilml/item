// 倒计时
// function timer() {
//     var future = new Date('2021/1/1 00:00:00')
//     var now = new Date
//     var times = (future - now) / 1000;
//     var days = parseInt(times / 86400);
//     var hours = parseInt((times / 3600) % 24);
//     var minutes = parseInt((times / 60) % 60);
//     var seconds = parseInt(times % 60);
//     var datetime = '申请时间剩余：' + days + ' 天 '
//     datetime += hours + ' 小时 '
//     datetime += minutes + ' 分钟 '
//     datetime += seconds + ' 秒 '
//     document.getElementById("timeOut").innerHTML = datetime;
// }
// timer();
// setInterval(timer, 1000);

// 轮播图
var mySwiper = new Swiper('.swiper-container', {
    autoplay: true, //可选选项，自动滑动
})

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
new Swiper('.swiper-container')
var mySwiper = document.querySelector('.swiper-container').swiper
mySwiper.slideNext();
var hotPrev = document.querySelector('.hot_prev');
var hotNext = document.querySelector('.hot_next');
hotNext.addEventListener('click', function() {
    mySwiper.slideNext()
})
hotPrev.addEventListener('click', function() {
    mySwiper.slidePrev()
})

var a = document.querySelector('.reports_select ul')
		var guide = document.querySelector(".guide ul");
		var coldplay = document.querySelector(".coldplay ul");
		$.ajax({
			url: "http://192.168.1.94:3000/play/new",
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				for (var i = 0; i < 1; i++) {
					for (var n = 0; n < 8; n++) {
						// a.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
						// 	'</span>' + '<div class="r_s1">' +
						// 	'<span>● 苏苏</span>' +
						// 	'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
						// 	'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
						// 	'</div>' + '</li>';
						// guide.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
						// 	'</span>' + '<div class="r_s1">' +
						// 	'<span>● 苏苏</span>' +
						// 	'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
						// 	'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
						// 	'</div>' + '</li>';
						coldplay.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
							'</span>' + '<div class="r_s1">' +
							'<span>● 苏苏</span>' +
							'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
							'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
							'</div>' + '</li>';
					}

				}
			}
		});
		$('.jz').click(function() {
			$('.jz span').css('display','none');
			$('.jz img').css('display','block');
			setTimeout(function() {
			$.ajax({
				url: "http://192.168.1.94:3000/play/new",
				type: 'GET',
				dataType: 'json',
				success: function(data) {
						for (var i = 1; i < 2; i++) {
							for (var n = 0; n < 8; n++) {
								coldplay.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
									'</span>' + '<div class="r_s1">' +
									'<span>' + data[0][i].price + '</span>' +
									'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
									'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
									'</div>' + '</li>';
								// hot.innerHTML += ('<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
								// 	'</span>' + '<div class="r_s1">' +
								// 	'<span>' + data[0][i].price + '</span>' +
								// 	'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
								// 	'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
								// 	'</div>' + '</li>');
							}
					}
				}
			})
			}, 2000)
			$('.jz span').css('display','block');
			$('.jz img').css('display','none');
		})
		//登录
		var btn = document.querySelectorAll("button");
		    var shadow = document.querySelector(".shadow");
		    var imgBox = document.querySelector("#big");
		    // var close = document.querySelector(".close");
		    // var imgs = document.querySelectorAll("img");
		    // 弹遮罩
		    btn[1].onclick = function() {
		        shadow.style.display = "block";
		        imgBox.style.display = "block";
		    };
		
		    // 关遮罩
		    close.onclick = closeShadow;
		    shadow.onclick = closeShadow;
		
		    function closeShadow() {
		        shadow.style.display = "none";
		        imgBox.style.display = "none";
		    };
			$('.x').click(function(){
				shadow.style.display = "none";
		        imgBox.style.display = "none";
			})