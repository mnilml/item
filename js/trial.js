// 大众体验师切换
		$(".ul1 li:first").click(function() {
			$(this).addClass("active").siblings().removeClass("active");
			$(".dzsy").show();
			$(".tyszx").hide();
		});
		$(".ul1 li:last").click(function() {
			$(this).addClass("active").siblings().removeClass("active");
			$(".tyszx").show();
			$(".dzsy").hide();
		});
		// 使用状态切换
		$(".ul2 li:first").click(function() {
			$(this).addClass("li1").siblings().removeClass("li1");
			$(".dzsy-neir").show().nextAll().hide();
		});
		$(".ul2 li:eq(1)").click(function() {
			$(this).addClass("li1").siblings().removeClass("li1");
			$(".neir-sqz").show();
			$(".dzsy-neir").hide();
			$(".neir-syz").hide();
			$(".neir-yjs").hide();
		})
		$(".ul2 li:eq(2)").click(function() {
			$(this).addClass("li1").siblings().removeClass("li1");
			$(".neir-sqz").hide();
			$(".dzsy-neir").hide();
			$(".neir-syz").show();
			$(".neir-yjs").hide();
		});
		$(".ul2 li:eq(3)").click(function() {
			$(this).addClass("li1").siblings().removeClass("li1");
			$(".neir-sqz").hide();
			$(".dzsy-neir").hide();
			$(".neir-syz").hide();
			$(".neir-yjs").show();
		});
		// 体验师专享
		$(".ul3 li:first").click(function() {
			$(this).addClass("li2").siblings().removeClass("li2");
			$(".tyszx-neir").show().nextAll().hide();
		});
		$(".ul3 li:eq(1)").click(function() {
			$(this).addClass("li2").siblings().removeClass("li2");
			$(".tyszx-sqz").show();
			$(".tyszx-neir").hide();
			$(".tyszx-syz").hide();
			$(".tyszx-yjs").hide();
		})
		$(".ul3 li:eq(2)").click(function() {
			$(this).addClass("li2").siblings().removeClass("li2");
			$(".tyszx-sqz").hide();
			$(".tyszx-neir").hide();
			$(".tyszx-syz").show();
			$(".tyszx-yjs").hide();
		})
		$(".ul3 li:eq(3)").click(function() {
			$(this).addClass("li2").siblings().removeClass("li2");
			$(".tyszx-sqz").hide();
			$(".tyszx-neir").hide();
			$(".tyszx-syz").hide();
			$(".tyszx-yjs").show();
		})
		var dzsyneir = document.querySelector('.dzsy-neir')
		var neirsqz = document.querySelector('.neir-sqz')
		var neirsyz = document.querySelector('.neir-syz')
		var neiryjs = document.querySelector('.neir-yjs')
		
		var tyszxneir = document.querySelector('.tyszx-neir')
		var tyszxsqz = document.querySelector('.tyszx-sqz')
		var tyszxsyz = document.querySelector('.tyszx-syz')
		var tyszxyjs = document.querySelector('.tyszx-yjs')
		$.ajax({
			url: "http://192.168.1.94:3000/useing/public",
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				console.log(data)
					for (var i = 0; i < data.length; i++) {
						dzsyneir.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						neirsqz.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						neirsyz.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						neiryjs.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						
						tyszxneir.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						tyszxsqz.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						tyszxsyz.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';
						tyszxyjs.innerHTML += '<span class="neir-span" style="background:url(' + data[i].img + ')">' +
							'<div class="div">' + data[i].info_ty + '</div>' + '<span class="span1">' + data[i].text + '</span>' +
							'<div class="div1">' + data[i].totalnum + '</div>' + '<div class="div2">' + data[i].num + '台</div>' +
							'<div class="div3"><span>' + data[i].apply + '</span>&nbsp;申请</div>'
						'+<div class="div4">报告数量：' + 8 + '</div>' + '</span>';

				}
				
				/* <span class="neir-span">
					<div class="div">首发</div>
					<span class="span1">巴慕达The Toaster烤面包机</span>
					<div class="div1">2032</div>
					<div class="div2">20台</div>
					<div class="div3"><span>1392</span>&nbsp;申请</div>
					<div class="div4">报告数量：8</div>
				</span> */
			}
		});