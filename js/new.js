	//
	(function(){
		$(function(){
		
			//
			var a = document.querySelector('.new')
			var hot = document.querySelector('.hot')
			$.ajax({
				url: "http://192.168.1.24:3000/play/new",
				type: 'GET',
				dataType: 'json',
				success: function(data) {
					console.log(data)
					for (var i = 0; i < 1; i++) {
						for (var n = 0; n < 8; n++) {
							a.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
								'</span>' + '<div class="r_s1">' +
								'<span>' + data[0][i].price + '</span>' +
								'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
								'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
								'</div>' + '</li>';
							hot.innerHTML += ('<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
								'</span>' + '<div class="r_s1">' +
								'<span>' + data[0][i].price + '</span>' +
								'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
								'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
								'</div>' + '</li>');
						}
			
					}
				}
			});
			
			// var xux = document.querySelector(".xux");
			
			// $.ajax({
			// 	url: "http://192.168.1.24:3000/play/category",
			// 	type: 'GET',
			// 	dataType: 'json',
			// 	success: function(data) {
			// 		console.log(data)
			// 		for (var i = 0; i < data.live.length; i++) {
			// 			xux.innerHTML += '<a>' + data.live[i].productName + '（' + data.live[i].nums + '）' + '</a>'
			// 		}
			// 	}
			// });
			
			
			$('.jz').click(function() {
				$('.jz span').css('display', 'none');
				$('.jz img').css('display', 'block');
				setTimeout(function() {
					$.ajax({
						url: "http://192.168.1.24:3000/play/new",
						type: 'GET',
						dataType: 'json',
						success: function(data) {
							console.log(data)
							for (var i = 1; i < 4; i++) {
								for (var n = 0; n < 8; n++) {
									a.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
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
				$('.jz span').css('display', 'block');
				$('.jz img').css('display', 'none');
			})
		})
			
		$(".title li").click(function(index) {
			var index = $(this).index();
			$(this).prop('class', 'active').siblings('li').prop('class', '')
			$(this).parents(".title").siblings('.content').children('.cot').eq(index).css('display', 'block').siblings('.cot')
				.css('display', 'none')
		})
<<<<<<< HEAD
		//
		var a = document.querySelector('.new')
		var hot = document.querySelector('.hot')
		$.ajax({
			url: "http://192.168.1.24:3000/play/new",
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				console.log(data)
				for (var i = 0; i < 1; i++) {
					for (var n = 0; n < 8; n++) {
						a.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
							'</span>' + '<div class="r_s1">' +
							'<span>' + data[0][i].price + '</span>' +
							'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
							'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
							'</div>' + '</li>';
						hot.innerHTML += ('<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
							'</span>' + '<div class="r_s1">' +
							'<span>' + data[0][i].price + '</span>' +
							'<span class="reports_pl"><img src="../images/reply.png">' + data[i][n].like + '</span>' +
							'<span class="reports_pl"><img src="../images/use5.png">' + data[i][n].words + '</span>' +
							'</div>' + '</li>');
					}

				}
			}
		});

		var xux = document.querySelector(".xux");

		$.ajax({
			url: "http://192.168.1.94:3000/play/category",
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				console.log(data)
				for (var i = 0; i < data.live.length; i++) {
					xux.innerHTML += '<a>' + data.live[i].productName + '（' + data.live[i].nums + '）' + '</a>'
				}
			}
		});


		$('.jz').click(function() {
			$('.jz span').css('display', 'none');
			$('.jz img').css('display', 'block');
			setTimeout(function() {
				$.ajax({
					url: "http://192.168.1.94:3000/play/new",
					type: 'GET',
					dataType: 'json',
					success: function(data) {
						console.log(data)
						for (var i = 1; i < 4; i++) {
							for (var n = 0; n < 8; n++) {
								a.innerHTML += '<li>' + '<img src =' + data[i][n].img + '>' + '<span class="reports_t">' + data[i][n].text +
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
			$('.jz span').css('display', 'block');
			$('.jz img').css('display', 'none');
		})
=======
		
	})(window)
		
>>>>>>> ca5ba2341fdbd4afd47ccbd0e96516ba711fda24
