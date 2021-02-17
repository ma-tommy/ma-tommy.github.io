console.log("ok");
/*入力1*/

if ($(".step5 li:eq(0)").hasClass("here")) {
	$("body").addClass("np-1");
	var $mainArea = $("#mainArea");
	var $blk_step = $mainArea.find("ul.step").parent();
	var title =
		'<div class="kaizen_box">\n    <h1 class="kaizen_title">\u5165\u529B1 \u304A\u5BA2\u69D8\u60C5\u5831\u306E\u5165\u529B</h1>\n    <p class="kaizen_txt">\u53E3\u5EA7\u958B\u8A2D\u306E\u304A\u7533\u8FBC\u307F\u306B\u5FC5\u8981\u306A\u304A\u5BA2\u69D8\u306E\u57FA\u672C\u60C5\u5831\u3092\u5165\u529B\u304F\u3060\u3055\u3044\u3002</p>\n</div>';
	var $boxQ1 = $("#boxQ1");
	var $tableInvInfo = $boxQ1.children("table.tableInvInfo");
	var address = $tableInvInfo.find("th:contains(自宅住所)").next().html();
	var nisa = $(
		"<p class='kaizen_title_under'>投資信託の売却益や分配金にかかる税金が一定の範囲まで非課税になるためオススメです。</p>"
	);
	var $address = $("<p class='kaizen_title_under'/>").html(address);
	var $boxQ1__title = $boxQ1.children("div.blkTitle");
	var $boxQ2 = $("#boxQ2");
	var $boxQ2__title = $boxQ2.children("div.blkTitle");
	var $q21 = $boxQ2.find("label[for='q21']");
	var $q22 = $boxQ2.find("label[for='q22']");
	var $boxQ3 = $("#boxQ3");
	var $q31 = $boxQ3.find("label[for='q31']");
	var $q32 = $boxQ3.find("label[for='q32']");
	var $appIc = $boxQ3.find("span.appIc");
	var $mailIc = $boxQ3.find("span.mailIc");
	var $boxQ3__title = $boxQ3.children("div.blkTitle");
	var app_img = "<div class='kaizen_app_img'/></div>";
	var $txtR__a = $boxQ2.find("p.txtR a");
	var $modal = $(
		'<div class="kaizen_modal kaizen_--close">\n    <div class=\'kaizen_modal__inner kaizen_section\'>\n        <div id="contents">\n            <div class="sec01">\n                <h1 class="title02">NISA\u3068\u306F</h1>\n                <div class="box01">\n                    <p>NISA\uFF08\u30CB\u30FC\u30B5\uFF09\u3068\u306F\u3001\u6BCE\u5E74\u6C7A\u307E\u3063\u305F\u6295\u8CC7\u67A0\u5185\u3067\u3001\u4E0A\u5834\u682A\u5F0F\u3084\u6295\u8CC7\u4FE1\u8A17\u306E\u914D\u5F53\u91D1\u3084\u5024\u4E0A\u304C\u308A\u76CA\u3092\u975E\u8AB2\u7A0E\u306B\u3059\u308B\u5236\u5EA6\u306E\u3053\u3068\u3067\u3059\u3002\u5225\u540D\u3067\u300C\u5C11\u984D\u6295\u8CC7\u975E\u8AB2\u7A0E\u5236\u5EA6\u300D\u3068\u3082\u547C\u3070\u308C\u307E\u3059\u3002</p>\n                    <p class="mt10 mb20">\u7279\u5B9A\u53E3\u5EA7\u3084\u4E00\u822C\u53E3\u5EA7\u3067\u682A\u5F0F\u6295\u8CC7\u4FE1\u8A17\u7B49\u3092\u8CFC\u5165\u3059\u308B\u3068\u3001\u53CE\u76CA\uFF08\u666E\u901A\u5206\u914D\u91D1\u3001\u5024\u4E0A\u304C\u308A\u76CA\uFF09\u306B\u5BFE\u305720.315\uFF05\u8AB2\u7A0E\u3055\u308C\u307E\u3059\u304C\u3001NISA\u53E3\u5EA7\u3092\u6D3B\u7528\u3059\u308B\u3068\u3001\u5E74\u9593120\u4E07\u5186\u307E\u3067\u306E\u6295\u8CC7\u304B\u3089\u5F97\u3089\u308C\u308B\u53CE\u76CA\u304C5\u5E74\u9593\u975E\u8AB2\u7A0E\u3068\u306A\u308A\u307E\u3059\u3002</p>\n                    <div class="boxCol02 fL isaAccount">\n                        <p class="caption txtL">\u7279\u5B9A\u53E3\u5EA7\u30FB\u4E00\u822C\u53E3\u5EA7</p>\n                        <p class="txtL">\u7A0E\u7387<span class="isaNum">20.315</span>\uFF05<span class="txtS">\uFF08\u6CE8\uFF09</span></p>\n                        <p class="notice03">\uFF08\u6CE8\uFF09\u5FA9\u8208\u7279\u5225\u6240\u5F97\u7A0E\u3092\u542B\u307F\u307E\u3059\u3002</p>\n                        <!--/boxCol02-->\n                    </div>\n                    <div class="boxCol02 fR isaAccount">\n                        <p class="captionBlue txtL">NISA\u53E3\u5EA7</p>\n                        <p class="txtL">\u7A0E\u7387<span class="isaNum txtRed">0</span>\uFF05</p>\n                        <p class="txtL">\uFF08\u7A0E\u91D1\u304C\u304B\u304B\u308A\u307E\u305B\u3093\uFF09</p>\n                        <!--/boxCol02-->\n                    </div>\n                    <!--/box01-->\n                </div>\n                <h2 class="title03 clear">NISA\u306E\u30DD\u30A4\u30F3\u30C8</h2>\n                <div class="box01">\n                    <div class="boxColor01">\n                        <ul class="list01">\n                            <li>\u65E5\u672C\u306B\u4F4F\u308020\u6B73\u4EE5\u4E0A\u306E\u65B9\u304C\u4F7F\u3048\u308B</li>\n                            <li>\u6295\u8CC7\u4FE1\u8A17\u306A\u3069\u306E\u5229\u76CA\u306B\u304B\u304B\u308B\u7A0E\u91D1\u304C\u975E\u8AB2\u7A0E\u306B</li>\n                            <li>\u975E\u8AB2\u7A0E\u306B\u306A\u308B\u6295\u8CC7\u67A0\u306F\u5E74\u9593120\u4E07\u5186\u307E\u3067</li>\n                            <li>NISA\u53E3\u5EA7\u306E\u975E\u8AB2\u7A0E\u671F\u9593\u306F\u3001\u6295\u8CC7\u3057\u305F\u5E74\u304B\u3089\u6700\u95775\u5E74\u9593</li>\n                            <li>\u53E3\u5EA7\u958B\u8A2D\u671F\u9593\u306F\u30012014\u5E74\u304B\u30892023\u5E74\u307E\u3067</li>\n                        </ul>\n                        <!--/boxColor01-->\n                    </div>\n                    <div class="forPCTB">\n                        <p class="captionBlue02 mt30">\u56F3\u89E3\uFF01\u3000\u975E\u8AB2\u7A0E\u30A4\u30E1\u30FC\u30B8</p>\n                        <p><img src="/investment/trust/images/isa_img001.png" alt="" width="732" height="286"></p>\n                        <!--/forPCTB-->\n                    </div>\n                    <p>\u5206\u914D\u91D1\u306B\u306F\u3001\u904B\u7528\u76CA\u304B\u3089\u652F\u6255\u308F\u308C\u308B\u300C\u666E\u901A\u5206\u914D\u91D1\u300D\u3068\u3001\u5143\u672C\u3092\u53D6\u308A\u5D29\u3057\u3066\u652F\u6255\u308F\u308C\u308B\u300C\u5143\u672C\u6255\u623B\u91D1\uFF08\u7279\u5225\u5206\u914D\u91D1\uFF09\u300D\u306E2\u7A2E\u985E\u304C\u3042\u308A\u307E\u3059\u3002\u5143\u672C\u6255\u623B\u91D1\uFF08\u7279\u5225\u5206\u914D\u91D1\uFF09\u306F\u305D\u3082\u305D\u3082\u975E\u8AB2\u7A0E\u306E\u305F\u3081\u3001NISA\u306E\u6069\u6075\uFF08\u975E\u8AB2\u7A0E\u30E1\u30EA\u30C3\u30C8\uFF09\u3092\u53D7\u3051\u3089\u308C\u307E\u305B\u3093\u304C\u3001\u901A\u5E38\u8AB2\u7A0E\u5BFE\u8C61\u3067\u3042\u308B\u666E\u901A\u5206\u914D\u91D1\u304CNISA\u3067\u306F\u975E\u8AB2\u7A0E\u3068\u306A\u308A\u307E\u3059\u3002</p>\n                    <p class="captionBlue02 mt20">\u975E\u8AB2\u7A0E\u306B\u306A\u308B\u5177\u4F53\u4F8B</p>\n                    <p>\u4EEE\u306B\u666E\u901A\u5206\u914D\u91D1\u3068\u5024\u4E0A\u304C\u308A\u76CA\u306E\u5408\u8A08\u304C40\u4E07\u5186\uFF08\u7A0E\u5F15\u524D\uFF09\u306E\u5834\u5408\u3001NISA\u53E3\u5EA7\u3092\u6D3B\u7528\u3059\u308C\u3070\u3001\u7D048\u4E07\u5186\u306E\u7BC0\u7A0E\u52B9\u679C\u304C\u5F97\u3089\u308C\u308B\u3053\u3068\u3068\u306A\u308A\u307E\u3059\u3002</p>\n                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="table01 mt10">\n                        <colgroup>\n                            <col width="26%">\n                            <col width="40%">\n                            <col width="34%">\n                        </colgroup>\n                        <tbody>\n                            <tr>\n                                <th>&nbsp;</th>\n                                <th>\u7279\u5B9A\u53E3\u5EA7\u307E\u305F\u306F\u4E00\u822C\u53E3\u5EA7</th>\n                                <th>NISA\u53E3\u5EA7</th>\n                            </tr>\n                            <tr>\n                                <th>\u7A0E\u5F15\u524D\u5229\u76CA</th>\n                                <td>400,000\u5186</td>\n                                <td>400,000\u5186</td>\n                            </tr>\n                            <tr>\n                                <th>\u7A0E\u91D1</th>\n                                <td><span class="isaNum">81,260</span>\u5186<p>\uFF08\uFF1D400,000\u5186\u00D720.315\uFF05\uFF09</p>\n                                </td>\n                                <td><span class="isaNum txtRed">0</span>\u5186</td>\n                            </tr>\n                            <tr>\n                                <th>\u7A0E\u5F15\u5F8C\u5229\u76CA</th>\n                                <td>318,740\u5186</td>\n                                <td>400,000\u5186</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <div class="forPCTB">\n                        <p class="captionBlue02 mt20">\u56F3\u89E3\uFF01\u3000NISA\u6D3B\u7528\u30A4\u30E1\u30FC\u30B8</p>\n                        <p><img src="/investment/trust/images/isa_img002.png" alt="" width="732" height="346"></p>\n                        <!--/forPCTB-->\n                    </div>\n                    <!--/box01-->\n                </div>\n                <p class="mt10"><a href="https://www.japannetbank.co.jp/investment/trust/isa/detail.html" class="ic_txtLink" target="_blank">NISA\u5546\u54C1\u8981\u9805</a></p>\n                <!--/sec01-->\n            </div>\n\n            <div class="attention">\n                <dl>\n                    <dt>\u3054\u6CE8\u610F</dt>\n                    <dd>\u4ECA\u5F8C\u306E\u7A0E\u5236\u6539\u6B63\u7B49\u306B\u3088\u308A\u3001\u5185\u5BB9\u304C\u5909\u66F4\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002</dd>\n                    <dd>\u6700\u65B0\u60C5\u5831\u3084\u8A73\u7D30\u3001\u304A\u5BA2\u3055\u307E\u500B\u5225\u306E\u3054\u76F8\u8AC7\u306B\u3064\u3044\u3066\u306F\u3001\u56FD\u7A0E\u5E81\u3001\u91D1\u878D\u5E81\u3001\u65E5\u672C\u8A3C\u5238\u696D\u5354\u4F1A\u306A\u3069\u306E\u60C5\u5831\u3092\u3054\u53C2\u7167\u3044\u305F\u3060\u304F\u304B\u3001\u304A\u8FD1\u304F\u306E\u7A0E\u52D9\u7F72\u3001\u7A0E\u7406\u58EB\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002</dd>\n                    <dd>\u78BA\u5B9A\u7533\u544A\u3092\u884C\u3063\u305F\u7D50\u679C\u3001\u793E\u4F1A\u4FDD\u967A\u6599\u306A\u3069\u306E\u53D6\u308A\u6271\u3044\u306B\u5F71\u97FF\u304C\u751F\u3058\u3001\u8CA0\u62C5\u304C\u5897\u52A0\u3059\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002\u8A73\u3057\u304F\u306F\u3001\u5404\u5E02\u753A\u6751\u7B49\u306B\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002</dd>\n                    <dd>\u6295\u8CC7\u4FE1\u8A17\u306E\u304A\u53D6\u5F15\u306B\u306F\u3001\u7A0E\u91D1\u4EE5\u5916\u306B\u3001\u6240\u5B9A\u306E\u624B\u6570\u6599\u304C\u304B\u304B\u308A\u307E\u3059\u3002</dd>\n                    <dd>\u4E0A\u8A18\u306E\u5185\u5BB9\u306F\u5C45\u4F4F\u8005\u306E\u65B9\u3092\u5BFE\u8C61\u306B\u3057\u3066\u3044\u307E\u3059\u3002\u975E\u5C45\u4F4F\u8005\u306E\u65B9\u306F\u7A0E\u5236\u306E\u53D6\u308A\u6271\u3044\u304C\u7570\u306A\u308A\u307E\u3059\u306E\u3067\u3054\u6CE8\u610F\u304F\u3060\u3055\u3044\u3002</dd>\n                </dl>\n                <!--/attention-->\n            </div>\n\n            <!-- /contents -->\n        </div>\n    </div>\n</div>'
	);
	var $html_body = $("html,body");
	var run = function () {
		$modal.is(".kaizen_modal--after_rendering") ||
			$modal.addClass("kaizen_modal--after_rendering");
		$html_body.addClass("kaizen_--overflow_hidden");
		$modal.addClass("kaizen_modal--fade");
	};
	// 非表示
	$modal.on({
		click: function (event) {
			if ($(event.target).is(".kaizen_--close")) {
				$modal.removeClass("kaizen_modal--fade").scrollTop(0);
				$html_body.removeClass("kaizen_--overflow_hidden");
			}
		},
	});
	//  h1等追加
	$blk_step.after(title);
	// 自宅住所を見出しの下に表示
	$boxQ1__title.after($address);
	// #boxQ1の見出し文言変更
	$boxQ1__title.children().text("ご登録住所の変更");
	// .tableInvInfoを非表示
	$tableInvInfo.addClass("kaizen_--hide");
	// #boxQ2の見出し文言変更
	$boxQ2__title.children().text("NISAの選択");
	// #boxQ2の見出しの下に説明文追加
	$boxQ2__title.after(nisa);
	// #boxQ2のli並び替え
	$boxQ2.find("ul.ansSelectWrap").append(function () {
		return $(this).children().first();
	});
	// #boxQ2のlabelの文言変更
	$q21.text("NISAに申し込まない");
	$q22.html(
		"<span class='kaizen_label_row'><span class='kaizen_label_row__item'>NISAに申し込む</span><span class='kaizen_label_row__item kaizen_label_row__item--bold'>オススメ</span></span>"
	);
	// modal
	$("body").append($modal);
	$txtR__a.on({
		click: function () {
			// 表示
			run();
			return false;
		},
	});
	// #boxQ3の見出しの下に画像表示
	$boxQ3__title.after(app_img);
	// #boxQ3のlabelの文言変更
	$appIc.text("");
	$mailIc.text("");
	$q31.append(
		"<span class='kaizen_label_row'><span class='kaizen_label_row__item'>書類送信アプリ<br>で送る</span><span class='kaizen_label_row__item kaizen_label_row__item--bold'>オススメ</span></span>"
	);
	$q32.append("書類で必要書類を送る");
}

/*入力2ここから＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊*/
if ($(".step5 li:eq(1)").hasClass("here")) {
	$("#title").remove();
	var step =
		'<div id="kzj-step">\
<ul class="step-ul">\
<li><span>入力1</span></li>\
<li class="he"><span>入力2</span></li>\
<li><span>確認</span></li>\
<li><span>資料提出</span></li>\
<li class="stepFin"><span>完了</span></li>\
</ul>\
<div class="kzj-Indicator">\
<label for="progressbar">残り<span class="pp">90</span>%です</label>\
<progress id="progressbar" max="100" value="10"></progress></div>\
</div>';
	$(".contents.trustOpen").prepend(step);
	$("#kzj-step + div").remove();

	$("#container").prepend(
		'<div id="kzj-count"><p>残り必須項目<span class="num">12</span></p></div>'
	);
	$("#kzj-step").addClass("isActive");

	kzWindow.on("scroll", function () {
		if (kzWindow.scrollTop() > 300) {
			$("#kzj-step").addClass("isActive");
		} else {
			$("#kzj-step").removeClass("isActive");
		}
	});

	$("#boxQ1").prepend(
		'<h2 id="h2-1" class="k2title">入力2　口座開設情報の入力</h2><p>口座開設に必要な情報をご入力ください</p>'
	);
	$("#h2-1 + p").after(
		'<h3 class="k3title">納税方法の選択</h3><p>投資信託の売却益は申告分離課税となり、原則確定申告が必要です。3パターンの納税方法から選択できます。</p>'
	);
	$("#boxQ1 .h201").remove();
	$("#boxQ1 .blkTitle").remove();

	$("#boxQ1.boxQuestion .ansSelectWrap li:eq(0)").html(
		'<li class="kzlabel"><input type="radio" name="toku_yn_r" value="1" id="q11"><label for="q11">ジャパンネット銀行にお任せ<br><span>特定口座開設する　源泉徴収あり</span></label><div class="k-tips"><p><b>ややこしい手続きは面倒・・・という方にオススメ</b><p>納税までをJNBが自動的に行うので<br>面倒な計算や手間が軽減されます</p></div><p class="absolute">オススメ</p></li>'
	);

	var headerHight = 0; //$('#kzj-step').outerHeight(true);

	$(".note p span a").addClass("kz-btn-a");
	$("#boxQ1.boxQuestion .ansSelectWrap + p").addClass("kz-btn");
	$("#boxQ1 input").each(function () {
		$("#boxQ1 input").on("change", function () {
			if ($(this).prop("checked") == true) {
				$("#progressbar").attr("value", "5");
				$(".pp").text("95");
				$(".num").text("12");
				$("#boxQ2").show();
				$("html,body").animate(
					{ scrollTop: $("#boxQ2").offset().top - headerHight },
					200,
					""
				);
			}
		});
	});

	$("#boxQ2").prepend(
		'<h2 id="h2-2" class="k3title">本年1月1日時点居住地の確認</h2>'
	);
	$("#boxQ2 .h201").remove();
	$("#boxQ2 .blkTitle").remove();
	$("#boxQ2 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "10");
			$(".pp").text("90");
			$(".num").text("11");
			$("#boxQ3").show();
			$("#boxQ5").hide();
			$("html,body").animate(
				{ scrollTop: $("#boxQ3").offset().top - headerHight },
				200,
				""
			);
		}
		if ($("#q22").prop("checked") == true) {
			$("#progressbar").attr("value", "15");
			$(".pp").text("85");
			$(".num").text("10");
			$("#todofukenSEL").show();
			$("#boxQ3").show();
			$("#boxQ5").hide();
		}
	});

	$("#boxQ3 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "20");
			$(".pp").text("80");
			$(".num").text("9");
			$("#boxQ4").show();
			$("#boxQ5").hide();
			$("html,body").animate(
				{ scrollTop: $("#boxQ4").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ4 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "25");
			$(".pp").text("75");
			$(".num").text("8");
			$("#boxQ5").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ5").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ5").prepend(
		'<h2 id="h2-3" class="k3title">投資目的・意向の確認</h2>'
	);
	$("#boxQ5 .h201").remove();
	$("#boxQ5 .blkTitle").remove();
	$("#boxQ5 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "30");
			$(".pp").text("70");
			$(".num").text("7");
			$("#boxQ8").show();
			$("#boxQ6").hide();
			$("html,body").animate(
				{ scrollTop: $("#boxQ8").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ8").prepend('<h2 id="h2-6" class="k3title">ご職業</h2>');
	$("#boxQ8 .h201").remove();
	$("#boxQ8 .blkTitle").remove();
	$("#boxQ8 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "40");
			$(".pp").text("60");
			$(".num").text("6");
			$("#boxQ9").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ9").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ9").prepend('<h2 id="h2-7" class="k3title">定期的な収入の有無</h2>');
	$("#boxQ9 .h201").remove();
	$("#boxQ9 .blkTitle").remove();
	$("#boxQ9 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "50");
			$(".pp").text("50");
			$(".num").text("5");
			$("#boxQ10").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ10").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ10").prepend('<h2 id="h2-8" class="k3title">主な収入の形態</h2>');
	$("#boxQ10 .h201").remove();
	$("#boxQ10 .blkTitle").remove();
	$("#boxQ10 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "60");
			$(".pp").text("40");
			$(".num").text("4");
			$("#boxQ11").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ11").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ11").prepend('<h2 id="h2-9" class="k3title">金融資産</h2>');
	$("#boxQ11 .h201").remove();
	$("#boxQ11 .blkTitle").remove();
	$("#boxQ11 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "70");
			$(".pp").text("30");
			$(".num").text("3");
			$("#boxQ12").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ12").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ12").prepend('<h2 id="h2-10" class="k3title">投資に使う資金</h2>');
	$("#boxQ12 .h201").remove();
	$("#boxQ12 .blkTitle").remove();
	$("#boxQ12 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "80");
			$(".pp").text("20");
			$(".num").text("2");
			$("#boxQ13").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ13").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ13").prepend(
		'<h2 id="h2-11" class="k3title">ジャパンネット銀行の投資信託を知ったきっかけ</h2>'
	);
	$("#boxQ13 .h201").remove();
	$("#boxQ13 .blkTitle").remove();
	$("#boxQ13 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "90");
			$(".pp").text("10");
			$(".num").text("1");
			$("#boxQ6").show();
			$("#boxQ7").show();
			$("#boxQ14").show();
			$("html,body").animate(
				{ scrollTop: $("#boxQ6").offset().top - headerHight },
				200,
				""
			);
		}
	});

	$("#boxQ6").prepend(
		'<h2 id="h2-4" class="k3title open">投資知識の確認（複数選択可）<span class="nini">任意</span></h2>'
	);
	$("#boxQ6 .h201").remove();
	$("#boxQ6 .blkTitle").remove();
	$("#boxQ6 .txtR").remove();
	$("#boxQ6 .note").remove();
	$("#boxQ6 .blkCont").hide();
	$("#boxQ6 .open").on("click", function () {
		$("#boxQ6 .blkCont").toggle();
	});
	$("#boxQ6 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "95");
			$(".pp").text("5");
			$(".num").text("1");
			$("#toQ7").trigger("click");
			$("#boxQ7").show();
		}
	});

	$("#boxQ7").prepend(
		'<h2 id="h2-5" class="k3title open">投資経験の確認（複数選択可）<span class="nini">任意</span></h2>'
	);
	$("#boxQ7 .h201").remove();
	$("#boxQ7 .blkTitle").remove();
	$("#boxQ7 .txtR").remove();
	$("#boxQ7 .note").remove();
	$("#boxQ7 .blkCont").hide();
	$("#boxQ7 .open").on("click", function () {
		$("#boxQ7 .blkCont").toggle();
	});
	$("#boxQ7 input").on("change", function () {
		if ($(this).prop("checked") == true) {
			$("#progressbar").attr("value", "95");
			$(".pp").text("5");
			$(".num").text("1");
			$("#toQ8").trigger("click");
		}
	});

	$("#boxQ14").prepend(
		'<h2 id="h2-12" class="k3title">各種規約などの確認・同意事項</h2>'
	);
	$("#boxQ14 .h201").remove();
	$("#boxQ14 .blkTitle").remove();

	$("#regWrapTtl").prepend(
		'<h2 id="h2-12" class="k3title">約款・規定、契約締結前交付書面等の確認</h2>'
	);
	$("#regWrapTtl .h201").remove();
	$("#regWrapTtl .blkTitle").remove();
	$(".regulation.boxWrap01").addClass("on");
	$("#boxQ14 .showAll .arw, #boxQ14 .hideAll .arw").remove();

	$("#boxQ6").insertAfter("#boxQ13");
	$("#boxQ7").insertAfter("#boxQ6");

	$("#boxQ14").append(
		'<p class="kz-agree"><label id="kzok"><input type="checkbox" id="kzok-input" disabled value="1">上記規約に同意の上、口座開設を申し込みます</label></p>'
	);
	$("#kzok-input").on("change", function () {
		$('input[name="DouiCheck3"]').prop("checked", true);
		$("#DouiCheck3").removeClass("reqEntryLight");
		$('input[name="DouiCheck5"]').prop("checked", true);
		$("#DouiCheck5").removeClass("reqEntryLight");
		if ($(".kz-agree input").prop("checked") == true) {
			$("#progressbar").attr("value", "100");
			$(".pp").text("0");
			$(".num").text("0");
			$("#confirmNext").prop("disabled", false);
		}
	});
	$("#kzok-input").on("change", function () {
		if ($(".kz-agree input").prop("checked") == false) {
			$('input[name="DouiCheck3"]').prop("checked", false);
			$("#DouiCheck3").addClass("reqEntryLight");
			$('input[name="DouiCheck5"]').prop("checked", false);
			$("#DouiCheck5").addClass("reqEntryLight");
			$("#progressbar").attr("value", "95");
			$(".pp").text("5");
			$(".num").text("1");
			$("#confirmNext").prop("disabled", true);
		}
	});

	var yakkanA = $(".boxAgreement:eq(0)").html();
	var yakkanA2 = $(".boxAgreement:eq(1)").html();
	var yakkanB = $("#regWrap").html();

	var newagreearea =
		'<div id="newagree">' + yakkanA + yakkanA2 + yakkanB + "</div>";

	$("#boxQ14 h2").after(
		'<p class="atentiontxt">下部を最後までスクロールして「個人情報の同意、約款等の交付方法の同意、各種約款」を確認してください。</p><div id="scroll-area"><p class="icoscroll"><img src="https://cdn.kaizenplatform.net/v2/attachments/000/356/875/da824b376754618515235ad650fcbfe84b0197f6.png"></p>' +
			newagreearea +
			"</div>"
	);

	$(function () {
		$("#newagree .sec00").each(function (i) {
			$(this).addClass("number" + (i + 1));
		});
	});

	$(".number1").before('<h1 class="title01-c o1">投資信託総合取引約款</h1>');
	$(".number2").before(
		'<h1 class="title01-c o2">投資信託受益権振替決済口座管理約款</h1>'
	);
	$(".number3").before('<h1 class="title01-c o3">投資信託積立取引約款</h1>');
	$(".number4").before('<h1 class="title01-c o4">投資信託特定口座約款</h1>');
	$(".number5").before(
		'<h1 class="title01-c o5">非課税上場株式等管理および非課税累積投資に関する約款</h1>'
	);
	$(".number6").before(
		'<h1 class="title01-c o6">投資信託契約締結前交付書面</h1>'
	);
	$(".number7").before(
		'<h1 class="title01-c o7">口座開設およびお取引に関するご確認・ご注意事項</h1>'
	);
	$(".number8").before(
		'<h1 class="title01-c o8">断定的判断の提供等による勧誘を受けていないことのご確認・ご注意事項</h1>'
	);

	$(".o1").on("click", function () {
		$(this).hide();
		$(".number1").show();
	});
	$(".o2").on("click", function () {
		$(this).hide();
		$(".number2").show();
	});
	$(".o3").on("click", function () {
		$(this).hide();
		$(".number3").show();
	});
	$(".o4").on("click", function () {
		$(this).hide();
		$(".number4").show();
	});
	$(".o5").on("click", function () {
		$(this).hide();
		$(".number5").show();
	});
	$(".o6").on("click", function () {
		$(this).hide();
		$(".number6").show();
	});
	$(".o7").on("click", function () {
		$(this).hide();
		$(".number7").show();
	});
	$(".o8").on("click", function () {
		$(this).hide();
		$(".number8").show();
	});

	$("#scroll-area").on("scroll", function () {
		setTimeout(function () {
			$(".icoscroll").fadeOut(200);
		}, 2000);
	});

	$("#scroll-area").on("scroll", function () {
		var doch = $("#newagree").innerHeight(); //ページ全体の高さ
		var winh = kzWindow.innerHeight(); //ウィンドウの高さ
		var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
		if (bottom <= kzWindow.scrollTop()) {
			//一番下までスクロールした時に実行
			$("#kzok-input").prop("disabled", false);
		}
	});

	/*ここからモーダル注意事項展開*/

	var btn1modal =
		'<div id="contents" class="KZ1 MK">\
<h1 class="title01">特定口座とは</h1>\
<div class="sec01">\
	<ul class="boxMenu">\
	<li><strong>特定口座とは</strong></li>\
	<li><a href="/investment/trust/specific04.html">特定口座のお手続きについて</a></li>\
	</ul>\
<!--/sec01--></div>\
<div class="sec01">\
	<h2 class="title02">特定口座とは</h2>\
	<p class="title04">ややこしい手続きは面倒……という方は、特定口座で確定申告のお手続きを簡単に</p>\
	<div class="box01">\
	<p class="mt15">投資信託の売却益は申告分離課税となり、原則確定申告が必要です。特定口座なら申告のための面倒な計算や手間が軽減されます。</p>\
	<!--/box01--></div>\
	<p class="captionGray mt15">特定口座のメリット</p>\
	<div class="box01 cfx">\
	<div class="boxCol02 fL">\
		<dl class="spMerit">\
		<dt>年間取引報告書で申告が簡単</dt>\
		<dd>ジャパンネット銀行がお客さまに代わって譲渡損益等を計算し、申告に使える「特定口座年間取引報告書」を作成します。</dd>\
		</dl>\
	<!--/boxCol02--></div>\
	<div class="boxCol02 fR">\
		<dl class="spMerit">\
		<dt>確定申告は不要</dt>\
		<dd>「源泉徴収あり」を選択した場合、ジャパンネット銀行が源泉徴収し、納税するため原則確定申告は不要です。</dd>\
		</dl>\
	<!--/boxCol02--></div>\
	<!--/box01--></div>\
	<p class="captionGray mt15">特定口座のイメージ</p>\
	<div class="box01">\
	<p class="tC"><img src="/investment/trust/images/specific_img001.png" alt="特定口座のイメージ" width="575" height="308"></p>\
	<dl class="numList">\
	<dt>1</dt>\
	<dd>\
		<p>「特定口座」または「一般口座」のどちらかを選択。</p>\
	</dd>\
	<dt>2</dt>\
	<dd>\
		<p>「源泉徴収あり」または「源泉徴収なし」のどちらかを選択。</p>\
		<p class="notice01">※源泉徴収区分（源泉徴収を行う／行わない）の変更は可能ですが、翌年からの適用となりますので、ご注意ください。</p>\
	</dd>\
	<dt>3</dt>\
	<dd>\
		<p>「源泉徴収あり」の場合は、確定申告は不要です。</p>\
		<p class="notice02">（注1）「源泉徴収あり」の場合でも、他の証券会社等の特定口座や一般口座との損益通算、譲渡損失の繰越控除を行う場合等は、確定申告が必要です。</p>\
	</dd>\
	<dt>4</dt>\
	<dd>\
		<p>「源泉徴収なし」の場合は、確定申告が必要です。</p>\
	</dd>\
	</dl>\
	<ul class="lnkList cfx mt15">\
	<li><a href="#WithholdingTax" class="ic_txtLink">特定口座「源泉徴収あり」について</a></li>\
	<li><a href="#noWithholdingTax" class="ic_txtLink">特定口座「源泉徴収なし」について</a></li>\
	</ul>\
	<!--/box01--></div>\
<!--/sec01--></div>\
<div id="WithholdingTax" class="sec01 anchorTBSP02">\
	<h3 class="title03">特定口座「源泉徴収あり」について</h3>\
	<div class="box01">\
	<p>投資信託の売却の際、譲渡益がある場合はジャパンネット銀行が源泉徴収をし、お客さまに代わって税務署に納付しますので、原則、お客さま自身による確定申告は不要です。<br>\
	また、特定口座「源泉徴収あり」では、譲渡損失と配当等との損益通算が可能です。</p>\
	<ul class="list01 mt15">\
	<li>申告不要とした場合、特定口座内の売却益は配偶者控除や扶養控除等の判定対象となる合計所得金額には含まれず、その適用には影響しません。</li>\
	<li>確定申告が必要な場合でも、「特定口座年間取引報告書」を用いて申告が可能です。</li>\
	<li>源泉徴収税率は「<a href="/investment/trust/point1.html">証券税制について</a>」をご覧ください。</li>\
	<li>損益通算により源泉税の還付が発生する場合、譲渡益税に係る還付金・配当課税に係る還付金のいずれも「投信譲渡益税・配当課税還付金」として普通預金取引明細照会の摘要に記載されます。</li>\
	</ul>\
	<p class="mt15"><a href="/investment/trust/speci_tradereport.html" class="ic_txtLink">特定口座年間取引報告書について</a></p>\
	<!--/box01--></div>\
	<p class="caption mt30">特定口座への上場株式等の配当等の受け入れについて</p>\
	<div class="box01">\
	<p>2010年1月1日からは、上場株式等に係る配当についても特定口座（源泉徴収あり）をご利用いただくことが可能となりました。</p>\
	<p class="notice01 mt15">※2010年1月1日からは、上場株式等の配当等のうち、特定口座内に受け入れた上場株式等の配当等について、他の配当等と区分して計算することができるようになりました。この場合、特定口座内に受け入れた配当等に係る源泉徴収税額は、上場株式等に係る譲渡損失の金額と損益通算を行ったうえで、源泉徴収または還付を行うことになります。</p>\
	<p class="notice01">※JNB投資信託の特定口座「源泉徴収あり」は、上場株式等の配当等「受け入れあり」となりますのでご注意ください。なお、配当等の受け入れを希望しない場合には「源泉徴収なし」口座への変更が必要です。</p>\
	<!--/box01--></div>\
	<p class="captionGray mt30">特定口座「源泉徴収あり」での損益通算のしくみ</p>\
	<div class="box01">\
	<p>投資信託のお取引のたびに年初からの譲渡損益などを計算し、利益であれば源泉徴収を行い損失であればすでに徴収している税額を限度に還付を行います。</p>\
	<p class="mt10">2010年1月より、特定口座「源泉徴収あり」内で譲渡損と普通分配金との損益通算が可能となりました。譲渡損と普通分配金との損益通算は年1回まとめて行います。年間累計で譲渡損がある場合は損益通算を行い、分配金受取時に徴収した税額から翌年初に還付を行います。</p>\
	<p class="captionGray02 mt15">例</p>\
	<p class="tC"><img src="/investment/trust/images/specific_img002.png" alt="" width="645" height="232"></p>\
	<p class="mt15">1回目の売却で譲渡損益が＋10万円となり2万円源泉徴収されました。2回目の売却で譲渡損が-30万円となったため、1回目の取引と損益通算され2万円が還付されました。この場合、年間の譲渡損益は-20万円となります。<br>\
	また、普通分配金を年間30万円受け取ったため、6万円源泉徴収されました。翌年年初に年間譲渡損益の-20万円と普通分配金30万円が損益通算されます。本来の納税額は2万円［（30万円-20万円）×20％］ですが、すでに普通分配金で6万円が源泉徴収されているので、差額の4万円が還付されます。</p>\
	<p class="notice01">※この例は、損益通算のしくみを分かりやすくするため、税率20％で計算しています。実際に源泉徴収される税率は、20.315％（所得税15.315％、住民税5％）となります。（2016年1月1日現在）</p>\
	<p class="notice01">※法令改正などがあった場合、内容が変更となる可能性があります。</p>\
	<p class="notice01">※譲渡損と普通分配金との損益通算を希望されない場合は、特定口座「源泉徴収なし」への変更が必要です。</p>\
	<!--/box01--></div>\
<!--/sec01--></div>\
<div class="attention mb50">\
	<dl>\
	<dt>以下の場合には、確定申告が必要となります。</dt>\
	<dd>他証券会社等の特定口座と損益通算をする場合</dd>\
	<dd>年間の上場株式等に係る譲渡損失の繰越控除を行う場合</dd>\
	<dd>年の途中に特定口座を開設しており、特定口座開設前の取引で上場株式等に係る譲渡益がある場合</dd>\
	</dl>\
<!--/attention--></div>\
<div id="noWithholdingTax" class="sec01 anchorTBSP02">\
	<h3 class="title03">特定口座「源泉徴収なし」について</h3>\
	<div class="box01">\
	<p>投資信託の年間の売買損益等が記載された「特定口座年間取引報告書」を、ジャパンネット銀行が作成します。年間取引報告書は、確定申告の添付資料として使用できますので、確定申告のお手続きが簡単になります。（複数の口座がある場合には合計表を添付する必要があります）</p>\
	<p class="notice01 mt15">※確定申告をする場合、譲渡所得が合計所得金額に含まれるため、配偶者控除や扶養控除等の税制上の優遇規定の適用判定に影響を及ぼすことがあります。</p>\
	<!--/box01--></div>\
<!--/sec01--></div>\
<div class="sec01">\
	<h3 class="title03">特定口座の注意事項</h3>\
	<div class="box01">\
	<ul class="list01">\
	<li>特定口座の開設は、1金融機関に1口座のみとなります。</li>\
	<li>特定口座の開設は、国内にお住まいの個人のお客さまのみとなります。</li>\
	<li>特定口座に組み入れる投資信託は、国内公募株式投資信託が対象となります。</li>\
	<li>特定口座へ組み入れる公募株式投資信託の取得日は、原則として受渡日になります。</li>\
	<li>特定口座での譲渡損益計算や税額計算の基準日は、受渡日が基準となります（お申込日ではありません）。1年間の対象となるお取引は、年初第1営業日（土曜日・日曜日・祝日を除く）から年末の最終営業日（土曜日・日曜日・祝日を除く）が受渡日になるお取引となります。</li>\
	<li>特定口座を開設する前に行われた投資信託の解約・買取のお取引につきましては、特定口座としての譲渡損益計算や税額計算の対象とすることはできません。</li>\
	<li>特定口座開設後の公募株式投資信託購入・募集のお取引は、原則としてすべて特定口座を通じて行います。</li>\
	<li>投資信託口座開設後、特定口座、一般口座の選択の変更をする場合は、いったん投資信託口座を解約していただく必要がございます。</li>\
	<li>特定口座を廃止された後、同じ年に再度特定口座を開設することはできません。</li>\
	<li>特定口座を選択され、源泉徴収区分（源泉徴収を行う／行わない）の変更をする場合、翌年からの適用となります。</li>\
	<li>税法上、同一銘柄の上場株式等でも、譲渡・配当の区分毎に、特定口座（源泉徴収あり）かその他の口座を選択することができますが、ジャパンネット銀行では、譲渡・配当ともに同一口座を選択していただくことになります。</li>\
	</ul>\
	<!--/box01--></div>\
<!--/sec01--></div>\
<div class="attention">\
	<dl>\
	<dt>税制に関する留意点</dt>\
	<dd>今後の税制改正等により、内容が変更される場合があります。</dd>\
	<dd>最新情報や詳細、お客さま個別のご相談については、国税庁、金融庁、日本証券業協会などの情報をご参照いただくか、お近くの税務署、税理士にお問い合わせください。</dd>\
	<dd>確定申告を行った結果、社会保険料などの取り扱いに影響が生じ、負担が増加する場合があります。詳しくは、各市町村等にお問い合わせください。</dd>\
	<dd>投資信託のお取引には、税金以外に、所定の手数料がかかります。</dd>\
	<dd>上記の内容は居住者の方を対象にしています。非居住者の方は税制の取り扱いが異なりますのでご注意ください。</dd>\
	</dl>\
<!--/attention--></div>\
<!-- /contents --></div>';

	var btn2modal =
		'<div id="contents" class="KZ2 MK">\
		<p class="title01">サービス・商品要項</p>\
		<div class="sec01">\
			<ul class="boxMenu">\
			<li><a href="/investment/trust/detail.html">投資信託</a></li>\
			<li><a href="/investment/trust/accumu/detail.html">投信積立</a></li>\
			<li><a href="/investment/trust/isa/detail.html">NISA・つみたてNISA</a></li>\
			<li><strong>口座開設基準</strong></li>\
			<li><a href="/investment/trust/tax.html">税制</a></li>\
			</ul>\
		<!--/sec01--></div>\
		<div class="sec01">\
			<h1 class="title02">口座開設基準</h1>\
			<div class="box01">\
			<p>JNB投資信託は元本損失が生ずる恐れのある金融商品です。<br>当社でJNB投資信託口座を開設していただくにあたっては、原則として次の要件を満たしていただく必要があります。</p>\
			<table width="100%" border="0" cellspacing="0" cellpadding="0" class="table02 mt15">\
			<colgroup>\
			<col width="6%">\
			<col width="94%">\
			</colgroup>\
			<tbody><tr>\
				<th>1</th>\
				<td>当社に普通預金口座を開設していること</td>\
			</tr>\
			<tr>\
				<th>2</th>\
				<td>本取引の仕組み、リスクについて十分理解し、お客さまの判断と責任においてお客さまの資金によりお客さまのためにお取引いただけること</td>\
			</tr>\
			<tr>\
				<th>3</th>\
				<td>本取引に関する約款・取引ルール並びに当社の関連する他の約款の内容を承諾いただけること</td>\
			</tr>\
			<tr>\
				<th>4</th>\
				<td>当社から電話および電子メールで常時連絡が取れること</td>\
			</tr>\
			<tr>\
				<th>5</th>\
				<td>インターネットをご利用いただけること</td>\
			</tr>\
			<tr>\
				<th>6</th>\
				<td>お客さまご自身の電子メールアドレスをお持ちであること</td>\
			</tr>\
			<tr>\
				<th>7</th>\
				<td>本取引にかかる報告書面の電子交付に同意いただけること</td>\
			</tr>\
			<tr>\
				<th>8</th>\
				<td>日本国内に居住する20歳以上90歳未満の行為能力を有する個人であること</td>\
			</tr>\
			<tr>\
				<th>9</th>\
				<td>お客さまの投資信託決済口座は当社普通預金口座であり、円貨のみの取り扱いであることに同意いただけること</td>\
			</tr>\
			<tr>\
				<th>10</th>\
				<td>お客さまの知識や経験、財産および投資の目的において当社が定める基準を満たしていること</td>\
			</tr>\
			<tr>\
				<th>11</th>\
				<td>前各号ほか当社が定める要件に同意いただけること</td>\
			</tr>\
			</tbody></table>\
			<p class="mt10">なお、JNB投資信託の口座開設をお断りした場合、理由は開示しておりません。</p>\
			<!--/box01--></div>\
		<!--/sec01--></div>\
		<!-- /contents --></div>';

	var btn3modal =
		'<div id="contents" class="KZ3 MK">\
			<p class="title01">JNB投資信託の重要事項について<span class="txtAttention">必ずお読みください</span></p>\
			<div class="sec01">\
				<ul class="boxMenu">\
					<li><a href="#att01">投資信託の重要事項</a></li>\
					<li><a href="#att02">分配金の重要事項</a></li>\
					<li><a href="#att03">通貨選択型ファンドの重要事項</a></li>\
				</ul>\
			<!--/sec01--></div>\
			<div id="att01" class="anchorTBSP02">\
			<div class="sec01">\
				<h1 class="title02">投資信託の重要事項</h1>\
				<h2 class="title03">投資信託のリスク</h2>\
				<div class="box01">\
				<ul class="list01">\
					<li>投資信託は、預金と異なり、投資元本および利回りの保証された商品ではありません。</li>\
					<li>投資信託は、国内外の株式や債券、不動産投資信託証券（REIT）等に投資しますので、組み入れた株式や債券、不動産投資信託証券（REIT）等の価格変動や金利・為替相場の変動、発行者の信用状況等の経営・財務状況、およびそれらに関する外部評価に影響を受けます。これらの影響により基準価額が変動すること、また投資元本を割り込むリスクやその他のリスクは、投資信託をご購入のお客さまが負うことになります。</li>\
					<li>投資信託の基準価額は、価格変動リスク（金融商品市場等における相場、為替、金利、その他の指標に係る変動により、組み入れる有価証券等の価格が下落するリスク）やカントリーリスク、信用リスク（組み入れる有価証券の発行者等が債務を履行できなくなるリスク）、繰上げ償還リスク、その他（流動性等）のリスク（組み入れる有価証券等が現金化できない、その他不測の事態等が発生するリスク）の影響を受けて変動するため、投資元本を割り込む恐れがあります。また、リスクの内容は、投資信託毎に異なります。ご購入の際に、各ファンドの「目論見書（投資信託説明書）」および一体となっている「目論見書補完書面」で内容をご確認ください。</li>\
				</ul>\
				</div>\
			<!--/sec01--></div>\
			<!--/att01--></div>\
			<div class="sec01">\
				<h2 class="title03">投資信託の手数料等</h2>\
				<div class="box01">\
				<ul class="list01">\
					<li>投資信託のご購入、解約にあたっては各種手数料等（購入時手数料、解約手数料、信託財産留保額等）が必要です。また、これらの手数料等とは別に信託報酬、監査報酬その他費用等を信託財産を通じてご負担いただきます。これらの手数料等は各投資信託および購入金額等により異なるため、具体的な金額・計算方法を記載することができません。各投資信託の手数料等の詳細は、目論見書等でご確認ください。</li>\
				</ul>\
				</div>\
			<!--/sec01--></div>\
			<div class="sec01">\
				<h2 class="title03">その他重要事項</h2>\
				<div class="box01">\
				<ul class="list01">\
					<li>投資信託は、預金保険、保険契約者保護機構の対象ではありません。</li>\
					<li>当社で取り扱う投資信託は、投資者保護基金の対象ではありません。</li>\
					<li>投資信託の取引に関しては、金融商品取引法第37条の6の規定（いわゆるクーリングオフ）は適用されません。</li>\
					<li>JNB投資信託の口座開設は、20歳以上90歳未満のお客さまに限ります。</li>\
					<li>JNB投資信託での取引は、20歳以上のお客さまに限ります。なお、一定年齢以上のお客さまには、投資信託のリスク等のご認識について確認をさせていただいた結果、当社の総合的判断により、お客さまの取引を制限させていただくことがございますので、ご了承ください。</li>\
					<li>注文のお申し込みは、インターネットのみでの受け付けとなります。お電話では一切注文のお申し込みを受け付けいたしませんので、ご了承ください。</li>\
					<li>クローズド期間（解約禁止期間）のある投資信託については、原則として当該期間中の解約注文はお受けできません。</li>\
					<li>当社は、お客さまが当社で購入された投資信託について、他の金融機関の口座への移し変え（移管）依頼をお受けできません。</li>\
					<li>お客さまは、当社で購入された投資信託を当社以外の第三者に譲渡することはできません。</li>\
					<li>お客さまは、当社に保管を委託された投資信託を質入することはできません。</li>\
					<li>借入金など余裕資金以外でのお取引を固くお断りいたします。</li>\
					<li>海外の取引所の急な休場等により運用会社が注文の受け付けを一時的に停止することを決定した場合、停止を決定する前に受け付けた注文（購入、積み立ての購入、売却）を取り消しさせていただきます。購入注文の取り消しにあたっては、取消対象となった購入注文の代金を普通預金口座に返金いたします。</li>\
				</ul>\
				<p class="mt20"><a href="/regulation/index.html" class="ic_txtLink">投資信託にかかる約款等</a></p>\
				</div>\
			<!--/sec01--></div>\
			<div id="att02" class="sec01 anchorTBSP02">\
				<h2 class="title02">分配金の重要事項</h2>\
				<h2 class="title03">毎月分配型ファンドの特徴について</h2>\
				<div class="box01">\
				<p>毎月分配型ファンドは、1ヶ月ごとに決算を行い、収益等の一部を収益分配金（分配金）として毎月分配する運用方針になっています。このような運用方針であるため、「投資信託の運用を続けながら、運用成果だけは毎月こまめに受け取りたい」というような投資家のニーズに合った商品といえます。</p>\
				<p>ただし、分配金については、毎月の分配や分配金額が保証されているものではありません。毎月分配型ファンドへの投資にあたっては、分配金の仕組みを正しく理解することが重要です。</p>\
				</div>\
			<!--/sec01--></div>\
			<div id="payment" class="sec01 anchorTBSP02">\
				<h2 class="title03">分配金の支払いについて</h2>\
				<div class="box01">\
				<ul class="list01">\
					<li>投資信託の分配金は、預貯金の利息とは異なり、投資信託の純資産の中から支払われますので、分配金が支払われると、その金額相当分、基準価額は下がります。</li>\
					<li>分配金の額は、投資信託の運用状況に応じて変動し、受け取れる分配金の総額は、「1万口当たり○○円」と決定され、お客さまごとの保有口数に応じて計算されます。</li>\
					<li>分配金を受け取るには、決算日の前営業日までに約定し、決算日当日に対象ファンドを保有していることが条件となります。</li>\
					<li>主に海外の資産に投資するファンドでは、購入申込日の翌営業日の基準価額が適用され、受益者となるのは購入申込日の翌々営業日です。そのため、決算日の2営業日前までに購入の申し込みをする必要があります。\
						<p class="notice01">※JNB投資信託では、2営業日前の14時までの申し込みが必要です。（14時を過ぎた申し込みは、翌営業日申込分とさせていただきますのでご注意ください。）また、決算日が海外休業日となる場合、決算日は翌営業日となります。</p>\
						<div class="attBox">\
							<p>＜翌営業日約定のファンドの場合＞</p>\
							<p class="mt10"><img src="/investment/trust/images/attention_d_img001.png" alt="" width="488" height="118"></p>\
						</div>\
					</li>\
				</ul>\
				</div>\
			<!--/sec01--></div>\
			<div class="sec01">\
				<h2 class="title03">普通分配金・元本払戻金（特別分配金）について</h2>\
				<div class="box01">\
				<p class="ic_circle">投資信託の分配金には、以下の2種類があります。</p>\
				<table width="100%" border="0" cellspacing="0" cellpadding="0" class="table02 mt15">\
				<colgroup>\
					<col width="20%">\
					<col width="80%">\
				</colgroup>\
					<tbody><tr>\
						<th>普通分配金</th>\
						<td>個別元本<span class="txtS">（※）</span>を上回る部分からの分配金です。<br>\
						普通分配金は投資信託の元本の運用により生じた収益から支払われ、利益として課税対象となります。</td>\
					</tr>\
					<tr>\
						<th class="nowrap">元本払戻金<br>（特別分配金）</th>\
						<td>個別元本を下回る部分からの分配金です。<br>\
						元本払戻金（特別分配金）は、「投資した元本の一部払戻し」に当たるため、非課税となります。また、元本払戻金（特別分配金）の額だけ個別元本は減少します。</td>\
					</tr>\
				</tbody></table>\
				<p class="notice01 mt15">※個別元本とは、追加型投資信託における受益者毎の課税上の購入価額（手数料等は含まれません）をいいます。「個別元本＝受益者が投資信託を購入した時の基準価額」となり、同じ投資信託を複数回購入した場合や元本払戻金（特別分配金）を受け取った場合等に修正されます。</p>\
				</div>\
			<!--/sec01--></div>\
			<div class="sec01">\
				<h2 class="title03">分配金に関する留意事項</h2>\
				<div class="box01">\
				<p class="ic_circle">分配金は、分配方針に基づき、以下の分配対象額から支払われます。</p>\
				<div class="boxFrame02 mt15">\
					<p>【分配対象額】</p>\
					<p>（1）配当等収益（経費控除後）、（2）有価証券売買益・評価益（経費控除後）、（3）分配準備積立金<span class="txtS">（注1）</span>、（4）収益調整金<span class="txtS">（注2）</span></p>\
				</div>\
				<p class="notice02 mt15">（注1）分配準備積立金とは、上記（1）・（2）のうち、当期の分配金に充当されなかった残りの金額をいいます。信託財産に留保し積み立てられ、次期以降の分配金に充当できる分配対象額となります。</p>\
				<p class="notice02">（注2）収益調整金とは、追加型投資信託において、追加設定により、既存受益者への分配可能額が減らないよう調整する（公平性を保つ）ために設けられているものです（追加信託の際、追加設定した価額から元本を差し引いた差額分）。<br>\
				前期までの収益調整金の残高に、日々の設定・解約による収益調整金を加減したものが、当期末の分配対象額となります。</p>\
				<ul class="list01">\
					<li>分配金については、あらかじめ一定の額の分配を約束されたものではなく、運用状況等によっては分配金が支払われない場合もあります。</li>\
					<li>分配金は、計算期間中に発生した収益（上記（1）および（2））を超えて支払われる場合があります。その場合、当期決算日の基準価額は前期決算日と比べて下落することになります。また、分配金の水準は、必ずしも計算期間における投資信託の収益率を示すものではありません。</li>\
					<li>投資信託の収益については、分配金だけに注目するのではなく、「分配金の受取額」と「投資信託の基準価額の騰落額」の合計額で判断することが重要です。</li>\
				</ul>\
				</div>\
			<!--/sec01--></div>\
			<div class="sec01">\
				<h2 class="title03">毎月分配型ファンドのメリット・デメリット</h2>\
				<div class="box01">\
				<table width="100%" border="0" cellspacing="0" cellpadding="0" class="table02 mt15">\
				<colgroup>\
					<col width="50%">\
					<col width="50%">\
				</colgroup>\
					<tbody><tr>\
						<th>メリット</th>\
						<th>デメリット</th>\
					</tr>\
					<tr>\
						<td valign="top">\
							<p>投資信託を売却せず、運用を続けながら、その運用成果を毎月こまめに受け取ることができます。</p>\
							<dl class="trustMerit">\
								<dt>活用例：</dt>\
								<dd>年金の足しにする、毎月の生活費やお小遣いの一部に充当する、等</dd>\
							</dl>\
						</td>\
						<td valign="top">毎月の分配金には税金がかかるため、控除される税金の分だけ再投資額が少なくなり、投資の効率が悪くなります。</td>\
					</tr>\
				</tbody></table>\
				</div>\
			<!--/sec01--></div>\
			<div id="att03" class="sec01 anchorTBSP02">\
				<h2 class="title02">通貨選択型ファンドの重要事項</h2>\
				<h2 class="title03">通貨選択型ファンドの特徴について</h2>\
				<div class="box01">\
				<ul class="list01">\
					<li>通貨選択型ファンドは、株式や債券などといった投資対象資産に加えて、為替取引の対象となる円以外の通貨も選択することができるよう設計された投資信託です。</li>\
					<li>通貨選択型ファンドの収益源としては、以下の3つの要素が挙げられます。なお、これらの収益源に相応してリスクが内在していることについて注意が必要です。</li>\
				</ul>\
				<table width="100%" border="0" cellspacing="0" cellpadding="0" class="table02 mt15">\
				<colgroup>\
					<col width="27%">\
					<col width="73%">\
				</colgroup>\
					<tbody><tr>\
						<th>投資対象資産による収益</th>\
						<td>投資対象資産が値上がりした場合や利子・配当が支払われた場合には、収益を得ることができます。<br>\
						逆に、投資対象資産が値下がりした場合には、期待した収益が得られず、基準価額の下落要因となります。</td>\
					</tr>\
					<tr>\
						<th>為替取引によるプレミアム（金利差相当分の収益）</th>\
						<td>\
							<p>「選択した通貨」（コース）の短期金利が、投資信託の「投資対象資産の通貨」の短期金利よりも高い場合は、その金利差による「為替取引によるプレミアム（金利差相当分の収益）」が期待できます。<br>\
							逆に、選択した通貨（コース）の短期金利のほうが低い場合には、「為替取引によるコスト（金利差相当分の費用）」が生じます。<br>\
							なお、「選択した通貨」と「投資対象資産の通貨」が同一通貨の場合、為替取引によるプレミアム（金利差相当分の収益）や為替取引によるコスト（金利差相当分の費用）は発生しません。</p>\
							<p class="notice01">※新興国通貨の場合などは、金利差がそのまま反映されない場合があります。</p></td>\
					</tr>\
					<tr>\
						<th>為替変動による収益</th>\
						<td>選択した通貨（円を除く）の対円レートが上昇（円安）した場合は為替差益を得ることができます。<br>\
						逆に、「選択した通貨」の対円レートが下落（円高）した場合は為替差損が発生します。</td>\
					</tr>\
				</tbody></table>\
				<p class="forPCTB mt20"><img src="/investment/trust/images/attention_c_img001.png" alt="" width="732" height="378" class="winImgSize"></p>\
				</div>\
			<!--/sec01--></div>\
			<div class="sec01">\
				<h2 class="title03">主な投資対象資産について</h2>\
				<div class="box01">\
				<ul class="list01">\
					<li>通貨選択型の投資信託が実質的に投資を行う「ハイ・イールド債」や「新興国債券」については、格付の高い債券に比べて相対的に利回りが高い一方、価格が大きく変動する可能性（価格変動リスク）や組入債券の元利金の支払遅延および債務不履行（信用リスク）などが生じる可能性が高いといえます。</li>\
				</ul>\
				<table width="100%" border="0" cellspacing="0" cellpadding="0" class="table02 mt15">\
				<colgroup>\
					<col width="27%">\
					<col width="73%">\
				</colgroup>\
					<tbody><tr>\
						<th>ハイ・イールド債</th>\
						<td>ハイ・イールド債（High Yield Bond）とは、一般的に高利回りの債券を指します。なお、ハイ・イールド債は格付の低い債券で、BB格相当以下の格付（投機的格付）が付与されている場合が多く、信用リスクが相対的に高いという面があります。</td>\
					</tr>\
					<tr>\
						<th class="nowrap">新興国債券</th>\
						<td>新興国債券とは、いわゆる新興国の政府および政府機関等の発行する債券を指します。一般的に、新興国の金利は高い経済成長率等を背景として高水準であり、それに伴って新興国債券の利回りについても高く設定されています。一方で、先進国と比べて経済状況が脆弱であること等から、新興国債券の信用リスクは相対的に高くなっていることや、市場規模が小さいため流動性が低くなっていることがあります。</td>\
					</tr>\
				</tbody></table>\
				</div>\
			<!--/sec01--></div>\
		<!-- /contents --></div>';

	$("body").append(
		'<div id="KZmodal"><div id="ccmodal" class="ar1">' +
			btn1modal +
			btn2modal +
			btn3modal +
			'<p class="closebtn"><img src="https://cdn.kaizenplatform.net/v2/attachments/000/356/965/31d7777149c0c57be3a2a464b8dac08ddc90fc70.png" width="20px"></p></div></div>'
	);

	$("#boxQ5 span").addClass("m-openk");
	$(".txtR.kz-btn").html("<a>特定口座について詳しくはこちら</a>");
	$("#boxQ5 .note .m-openk:eq(0)").html(
		'<a class="kz-btn-a op1">JNB投資信託の口座開設基準</a>'
	);
	$("#boxQ5 .note .m-openk:eq(1)").html(
		'<a class="kz-btn-a op2">JNB投資信託の重要事項</a>',
		""
	);

	$("#boxQ1 .kz-btn").on("click", function () {
		$("#KZmodal").addClass("isShow");
		$("#mainArea").hide();
		$(".KZ1").show();
		$(".KZ2").hide();
		$(".KZ3").hide();
	});
	$("#boxQ5 .op1").on("click", function () {
		$("#KZmodal").addClass("isShow");
		$("#mainArea").hide();
		$(".KZ2").show();
		$(".KZ1").hide();
		$(".KZ3").hide();
	});
	$("#boxQ5 .op2").on("click", function () {
		$("#KZmodal").addClass("isShow");
		$("#mainArea").hide();
		$(".KZ3").show();
		$(".KZ2").hide();
		$(".KZ1").hide();
	});

	$(".closebtn").on("click", function () {
		$("#mainArea").show();
		$("#KZmodal").removeClass("isShow");
		$(".KZ1,.KZ2,.KZ3").hide();
	});

	$(".closebtn").on("click", function () {
		$("#mainArea").show();
		$("#KZmodal").hide();
		$(".KZ1,.KZ2,.KZ3").hide();
		var positionop1 = $("#boxQ8").offset().top - 100;
		$("html,body").animate(
			{
				scrollTop: positionop1,
			},
			{
				queue: false,
			}
		);
	});
}
