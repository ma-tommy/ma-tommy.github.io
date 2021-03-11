(function () {
	$(
		".order-35549 > .contents_wrapper > div:eq(0) > .box-order-net > a:eq(0) > img:eq(0)"
	).attr({
		src:
			"https://cdn.kaizenplatform.net/v2/attachments/000/357/763/cf1fe63ddaa1617dd89fb75294def14c6e781366.png",
		alt: "インターネットで簡単お申し込み",
	});
	$(
		".order-35549 > .contents_wrapper > div:eq(0) > .box-order-done > a:eq(0) > img:eq(0)"
	).attr({
		src:
			"https://cdn.kaizenplatform.net/v2/attachments/000/357/766/e5f825d10140070f6419fe319c4c4e4bb6e70cf6.png",
		alt: "ドコモ光をご契約中のお客さま",
	});
	$(
		".order-35549 > .contents_wrapper > div:eq(0) > p:eq(2) > a:eq(0) > img:eq(0)"
	).removeAttr("width height");
	$(
		".order-35549 > .contents_wrapper > div:eq(0) > p:eq(2) > a:eq(0) > img:eq(0)"
	).attr({
		src:
			"https://cdn.kaizenplatform.net/v2/attachments/000/357/765/0f5420a298a365fe668410b250d29e3947e0f3fe.png",
		alt: "電話で相談する",
	});

	$(
		".order-35549 > .contents_wrapper > div:eq(0) > .box-order-net"
	).insertAfter(
		".order-35549 > .contents_wrapper > div:eq(0) > .box-order-done"
	);

	$(".order-35549").append(
		'<p class="kz-remote"><img src="https://cdn.kaizenplatform.net/v2/attachments/000/357/752/a0b59c3a062298dfb6acf166add2f210b9f155c5.png" alt="高品質インターネットでサクサク快適！"></p>'
	);

	$("body > div:eq(11)").attr({ class: "contents_wrapper", id: "kz-04" });
	$("body > div:eq(8)").attr({ class: "contents_wrapper", id: "kz-03" });
	$("body > div:eq(6)").attr({ class: "contents_wrapper", id: "kz-05" });
	$("body > div:eq(10)").attr({ class: "contents_wrapper", id: "kz-01" });
	$(".common-box01").attr({ class: "common-box01 common-box02", id: "kz-02" });

	$(".featureBox_content > ul > li:eq(0)").append(
		'<p><a href="#kz-01" class="kz-link">詳細を見る</a></p>'
	);
	$(".featureBox_content > ul > li:eq(1)").append(
		'<p><a href="#kz-02" class="kz-link">詳細を見る</a></p>'
	);
	$(".featureBox_content > ul > li:eq(2)").append(
		'<p><a href="#kz-03" class="kz-link">速度を確認する</a></p>'
	);
	$(".featureBox_content > ul > li:eq(3)").append(
		'<p><a href="#kz-04" class="kz-link">詳細を見る</a></p>'
	);
	$(".featureBox_content > ul > li:eq(4)").append(
		'<p><a href="#kz-05" class="kz-link">特典を見る</a></p>'
	);

	$(".kz-link").click(function (e) {
		//ヘッダの高さ
		var headerHight =
			$(".header_wrapper").height() +
			$(".gmoGroupHeader.gmoGroupHeader-keepdistance").height();
		var href = $(this).attr("href");
		console.log("href = " + href);
		var target = $(href == "#" || href == "" ? "html" : href);
		console.log("target = " + target.offset().top);
		var position = target.offset().top - headerHight; //ヘッダの高さ分位置をずらす
		console.log("position = " + position);
		$.when(
			$("html, body").animate({ scrollTop: position }, 550, "swing"),
			e.preventDefault()
		).done(function () {
			var diff = target.offset().top - headerHight;
			if (diff === position) {
			} else {
				$("html, body").animate(
					{
						scrollTop: diff,
					},
					10,
					"swing"
				);
			}
		});

		return false;
	});

	var s = `
	.kz-remote { text-align:center;}
        .kz-link {    
        display: block;
        padding: 8px 36px;
        background: #1e2a58 url(https://cdn.kaizenplatform.net/v2/attachments/000/357/748/26279ec03c787bdc94f2eb1884e7b04b230987ab.png)no-repeat right 24px center;
        background-size:12px;
        text-align: center;
        color: #fff;
        font-weight: bold;}
        
        /*slider*/
        #mainVisual .slick-dots,
        #mainVisual .slick-cloned,
        #mainVisual .slick-arrow { display:none!important;}
        #mainVisual .slick-slider .slick-track, 
        #mainVisual .slick-slider .slick-list {
        width: 100% !important;
        transform: none !important;
        text-align: center;
        }
        #mainVisual .slider li { margin-bottom:20px;width:49%!important;}
        #mainVisual .slider li:nth-child(even) { margin-right:2%;}
        #mainVisual .slider li img { width:100%!important;}

        /*buttons*/
        .order-35549 .box-order>p {
            line-height: 1.5;
            padding-top: 0;
        }
        .order-35549 .box-order.box-order--25620 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-bottom:50px;
        }
        .box-order__link-list,
        .box-order__note { width:100%;}

        .order-35549 .box-order-done,
        .order-35549 .box-order-net,
        .order-35549 .box-order_tel_btn { width:32%;}

        body .order-35549 .box-order p a img { width:80%!important;height:auto!important;}
        body .order-35549 .box-order > p > a {
            height: auto!important;
            width: 100% !important;
            padding:10px 0;
        }
  `;

	var st = $('<style type="text/css"></style>');
	var ss = st.prop("styleSheet");
	var st = $('<style type="text/css"></style>');
	var ss = st.prop("styleSheet");
	if (ss) ss.cssText = s;
	else st.html(s);
	$("head").append(st);
})();
