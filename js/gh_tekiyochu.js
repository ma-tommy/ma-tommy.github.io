var $ = kzs.$;
let idNcSpcCountBefore = 0;
let idNcSpcCountAfter = 0;
let idNcSpcCountDelay = 0;
const DELAY_COUNT = 3;
var id = setInterval(function () {
	idNcSpcCountBefore = $("[id*='NC_spc_']").length;

	// NC_spcのIDが全部展開しているかを判定する（念のため速度の都合でカウントが増えてない可能性もあるので０.６秒待つ)
	if (
		idNcSpcCountBefore == idNcSpcCountAfter &&
		idNcSpcCountDelay < DELAY_COUNT
	) {
		idNcSpcCountDelay++;
		return;
	}

	if (
		idNcSpcCountBefore == idNcSpcCountAfter &&
		idNcSpcCountDelay >= DELAY_COUNT
	) {
		clearInterval(id);
		var $gnavi = $("#gnavi")
			.attr("style", "margin-top:10px !important;")
			.detach();
		var $login_btn = $("#log-btn").detach();
		var $menu_head_1 = $(
			"<h5 class='kaizen__menu__head'><p><span>メニューを</span><span></span></p></h5>"
		);
		var $menu_body_1 = $gnavi
			.add($login_btn)
			.wrapAll("<div class='kaizen__menu__body'/>")
			.parent();
		var $menu = $menu_head_1
			.add($menu_body_1)
			.wrapAll("<div class='kaizen__menu'/>")
			.parent();
		var $login_area = $("#login-area");
		var $base = $("#base");
		var $right_column = $("#right-column");
		var $right_column__h2 = $right_column.children("h2");
		var $h2__offer = $right_column__h2.has("img[alt='お申込']");
		var $h2_recommend_service = $right_column__h2.has(
			"img[alt='おすすめサービス']"
		);
		var $h2_recommend_service__next = $h2_recommend_service.next();
		var $h2_recommend_card = $right_column__h2.has("img[alt='おすすめカード']");
		var $ClaimInfo = $("#ClaimInfo");
		var $ClaimInfo__parent = $ClaimInfo.parent();
		var $ClaimInfo__h2 = $ClaimInfo.children("h2");
		var $h2_smile = $ClaimInfo__h2.has("img[alt='暮らスマイル情報']");
		var $bg_dot = $h2_smile.prev(".bg-dot");
		var $table_news = $base
			.find("img[alt='お知らせ']")
			.closest("table")
			.nextAll()
			.addBack();
		var $banner_orico_point = $right_column
			.find("img[alt='たまる！つかえる！オリコポイント']")
			.closest("div.box1");
		var $table__campaign__first = $base
			.find("img[alt='キャンペーン']")
			.closest("table");
		var $table_campaign = $table__campaign__first
			.nextUntil("img + table")
			.addBack();
		var $img_close = $base.find("img[alt='閉じる']");
		var toggleClassName_1 = function (head) {
			var class_name = "kaizen__--open";
			head.is("." + class_name)
				? head.removeClass(class_name)
				: head.addClass(class_name);
		};
		$login_area.before($menu);
		$menu_head_1.children().on({
			click: function () {
				$menu_body_1.slideToggle(function () {
					toggleClassName_1($menu_head_1);
				});
			},
		});
		$h2__offer.add($h2_recommend_card).each(function () {
			$(this).next().addBack().addClass("kaizen_--display_none");
		});
		$h2_recommend_service.addClass("kaizen_head").html("おすすめ");
		$h2_recommend_service__next.addClass("kaizen_banner");
		$h2_recommend_service__next
			.children()
			.first()
			.after("<a href='https://www.oricomall.com/sp/' tagrget='_blank'></a>");
		$(".kaizen_banner").children("a").wrap($("<p/>"));
		$h2_recommend_service__next.find(".box1").addClass("kaizen_--display_none");
		if ($bg_dot.length) {
			var $div = $ClaimInfo.find("div.align-center");
			var $div__children = $div.children();
			var $a = $div__children.eq(1).remove().end();
			var $recommend = $h2_recommend_service.add($(".kaizen_banner"));
			$a.first().html(
				"<span><span class='kaizen_icon kaizen_icon--smile'></span><span class='kaizen_btn_text'>スマイルの<br>照会・交換</span></span>"
			);
			$a.last().html(
				"<span><span class='kaizen_icon kaizen_icon--smail_to_oricopoint'></span><span class='kaizen_btn_text'>オリコポイントへ<br>移行する</span></span>"
			);
			$a.wrap("<p/>");
			$div.addClass("kaizen_row");
			$bg_dot.addClass("kaizen_--display_none");
			$bg_dot.after("<h2 class='kaizen_head'>ポイント交換</h2>");
			$div.before(
				"<p class='kaizen_attention'>※暮らスマイルはオリコポイントに変換が可能です</p>"
			);
			$bg_dot.before([$table_campaign, $recommend]);
		} else {
			$h2_recommend_service.before($table_campaign);
		}
		if ($img_close.length) {
			var $h2_usage = $ClaimInfo__h2.has("img[alt='ご利用状況']");
			var $h2_usage__next = $h2_usage.next();
			var $date = $ClaimInfo.find("th.bg-gray:contains(当月ご請求)").next();
			if ($date.length == 0) {
				$date = $ClaimInfo.find("th.bg-gray:contains(最近のご利用)").next();
			}
			var data_txt = $date.text();
			var $billing_link = $date.next().children();
			var billing_link_href = $billing_link.attr("href");
			var $use_unfixed = $ClaimInfo.find(".text-s > a");
			var use_unfixed_href = $use_unfixed.attr("href");
			var $date_table = $date.closest("table");
			var $date_table_other = $date_table
				.nextUntil("span.text-s + table + table")
				.addBack();
			var $web_detail_apply = $ClaimInfo
				.find("img[alt='Web明細のお申込']")
				.parent();
			var web_detail_apply_href = $web_detail_apply.attr("href");
			var $revo_apply = $ClaimInfo.find("img[alt='あとリボ']").parent();
			var revo_apply_href = $revo_apply.attr("href");
			var $revo_status = $ClaimInfo
				.find("img[alt='あとリボお申込状況']")
				.parent();
			var revo_status_href = $revo_status.attr("href");
			var $pass_apply = $ClaimInfo.find("img[alt='支払PASS']").parent();
			var pass_apply_href = $pass_apply.attr("href");
			var $is_pass = $ClaimInfo.find("a:contains(支払PASSとは？)");
			var is_pass_href = $is_pass.attr("href");
			var payment_group =
				'<h2 class="kaizen_head">\u304A\u652F\u6255\u3044\u5185\u5BB9</h2>\n<table class="kaizen_table">\n    <tbody>\n        <tr>\n            <th>\u304A\u652F\u6255\u3044\u65E5</th>\n            <td>' +
				data_txt +
				'</td>\n        </tr>\n        <tr>\n            <th>\u5F53\u6708\u3054\u8ACB\u6C42</th>\n            <td>\u3054\u8ACB\u6C42\u91D1\u984D\u306F<a href="' +
				billing_link_href +
				'">\u3053\u3061\u3089</a></td>\n        </tr>\n    </tbody>\n</table>\n<div class="kaizen_row">\n    <p><a class="kaizen_btn--solid" href="' +
				billing_link_href +
				'">\u3054\u5229\u7528\u78BA\u5B9A\u5206\u3092<br>\u78BA\u8A8D\u3059\u308B</a></p>\n    <p><a class="kaizen_btn--solid" href="' +
				use_unfixed_href +
				'">\u3054\u5229\u7528\u672A\u78BA\u5B9A\u5206\u3092<br>\u78BA\u8A8D\u3059\u308B</a></p>\n</div>';
			var support =
				'<div class="section">\n    <h3 class="section__head">\u304A\u652F\u6255\u3044\u30B5\u30DD\u30FC\u30C8</h3>\n    <div class="section__body sub_section">\n        <h4 class="sub_section__head">\u30AD\u30E3\u30C3\u30B7\u30F3\u30B0</h4>\n        <div class="sub_section__body group">\n            <p class="group__txt">\u632F\u8FBC\u624B\u6570\u6599\u306F\u7121\u6599\u3067\u3001\u6700\u77ED30\u5206\u4EE5\u5185\u3067\u304A\u632F\u8FBC\u3044\u305F\u3057\u307E\u3059\u3002</p>\n            <p class="group__btn btn">\n                <a class="btn__item" href="KAL1C10000.do" target="_blank">\u30AD\u30E3\u30C3\u30B7\u30F3\u30B0\u3092\u7533\u3057\u8FBC\u3080</a>\n            </p>\n        </div>\n    </div>\n    <div class="section__body sub_section">\n        <h4 class="sub_section__head">\u3042\u3068\u30EA\u30DC</h4>\n        <div class="sub_section__body group">\n            <p class="group__txt">\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u3084\u30AD\u30E3\u30C3\u30B7\u30F3\u30B0\u306E\u3054\u5229\u7528\u5206\u3092\u3001\u3042\u3068\u304B\u3089\u30EA\u30DC\u6255\u3044\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002</p>\n            <p class="group__btn btn">\n                <a class="btn__item" href="' +
				revo_apply_href +
				'" target="_blank">\u3042\u3068\u30EA\u30DC\u3092\u7533\u3057\u8FBC\u3080</a>\n                <a class="btn__item btn__item--small" href="' +
				revo_status_href +
				'" target="_blank">\u3042\u3068\u30EA\u30DC\u304A\u7533\u8FBC\u307F\u72B6\u6CC1\u3092\u78BA\u8A8D</a>\n            </p>\n            <p class="group__link link">\n                <a class="link__item" href="http://www.orico.co.jp/use/basic/atorevo.html" target="_blank"><img src="https://teorico.orico.co.jp/eorico/common/image/arrow_link.gif" alt="" width="12" height="9" border="0" class="v-middle">\u3042\u3068\u30EA\u30DC\u3068\u306F\uFF1F</a>\n            </p>\n        </div>\n    </div>\n    <div class="section__body sub_section">\n        <h4 class="sub_section__head">\u652F\u6255PASS</h4>\n        <div class="sub_section__body group">\n            <p class="group__txt">\u4ECA\u6708\u5206\u306E\u652F\u6255\u3044\u3092\u7FCC\u6708\u4EE5\u964D\u306E\u30EA\u30DC\u6255\u3044\u306B\u5909\u66F4\u3067\u304D\u307E\u3059\u3002</p>\n            <p class="group__btn btn">\n                <a class="btn__item" href="' +
				pass_apply_href +
				'" target="_blank">\u652F\u6255PASS\u3092\u7533\u3057\u8FBC\u3080</a>\n            </p>\n            <p class="group__link link">\n                <a class="link__item" href="' +
				is_pass_href +
				'" target="_blank"><img src="https://teorico.orico.co.jp/eorico/common/image/arrow_link.gif" alt="" width="12" height="9" border="0" class="v-middle">\u652F\u6255\u3044PASS\u3068\u306F\uFF1F</a>\n            </p>\n        </div>\n    </div>\n</div>';
			var web =
				'<div class="section section--web">\n    <h3 class="section__head section__head--web">WEB\u660E\u7D30\u306E\u304A\u7533\u8FBC</h3>\n    <div class="section__body sub_section">\n        <div class="sub_section__body group">\n            <p class="group__txt">\uFF62\u3054\u5229\u7528\u4EE3\u91D1\u660E\u7D30\u66F8\uFF63\u306E\u90F5\u9001\u3092\u505C\u6B62\u3057\u3001\uFF45\u30AA\u30EA\u30B3\u4E0A\u3067\u3054\u78BA\u8A8D\u3044\u305F\u3060\u304F\u30B5\u30FC\u30D3\u30B9\u3067\u3059\u3002</p>\n            <p class="group__btn btn btn--single"><a class="btn__item btn__item--web" href="" target="_blank">WEB\u660E\u7D30\u3092\u7533\u3057\u8FBC\u3080</a></p>\n            <p class="group__link link"><a class="link__item" href="http://www.orico.co.jp/use/eorico/statement.html" target="_blank"><img src="https://teorico.orico.co.jp/eorico/common/image/arrow_link.gif" alt="" width="12" height="9" border="0" class="v-middle">Web\u660E\u7D30\u3068\u306F\uFF1F</a></p>\n        </div>\n    </div>\n</div>';
			$h2_usage.add($h2_usage__next).addClass("kaizen_--display_none");
			$date_table_other.attr("style", "display:none !important;");
			$ClaimInfo__parent.addClass("kaizen_--style");
			$ClaimInfo.before([payment_group, support, web]);
		}
		$banner_orico_point.prepend("<p class='kaizen_img--oricopoint'></p>");
		$banner_orico_point
			.children("a")
			.html(
				"<span><span class='kaizen_icon kaizen_icon--oricopoint'></span><span class='kaizen_btn_text'>オリコポイントを交換する</span></span>"
			)
			.wrap("<p class='kaizen_long'/>");
		$("#footer").before($table_news).before($banner_orico_point);
		var s =
			"#bg02 .kaizen__menu__head {\n    text-align: right;\n  }\n  #bg02 .kaizen__menu__head p {\n    display: -webkit-inline-box;\n    display: -webkit-inline-flex;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-align-items: center;\n            align-items: center;\n    padding: 4px 8px !important;\n    border: 1px solid #b3b3b3;\n    border-radius: 5px;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ece7e7)) !important;\n    background-image: -webkit-linear-gradient(top, #fff 0%, #ece7e7 100%) !important;\n    background-image: linear-gradient(to bottom, #fff 0%, #ece7e7 100%) !important;\n    cursor: pointer;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n  }\n  #bg02 .kaizen__menu__head p span {\n    line-height: 1.3 !important;\n  }\n  #bg02 .kaizen__menu__head p span:first-child:after {\n    content: '\u958B\u304F';\n  }\n  #bg02 .kaizen__menu__head p span:last-child:after {\n    display: inline-block;\n    position: relative;\n    top: 3px;\n    width: 0;\n    margin: 0 0 0 8px;\n    border: solid 5px transparent;\n    border-top: solid 7px #ff8c04;\n    content: '';\n  }\n  #bg02 .kaizen__menu__body {\n    display: none;\n  }\n  #bg02 .kaizen__--open p span:first-child:after {\n    content: '\u9589\u3058\u308B';\n  }\n  #bg02 .kaizen__--open p span:last-child:after {\n    display: inline-block;\n    position: relative;\n    top: -3px;\n    width: 0;\n    margin: 0 0 0 8px;\n    border: solid 5px transparent;\n    border-bottom: solid 7px #ff8c04;\n    content: '';\n  }\n  #bg02 .kaizen_head {\n    position: relative !important;\n    overflow: auto;\n    height: auto;\n    margin-top: 18px !important;\n    padding: 9px 8px 9px 20px !important;\n    border-bottom: 1px solid #c3c3c3;\n    background-color: #fff !important;\n    font-size: 16px;\n    line-height: 1.4;\n  }\n  #bg02 .kaizen_head:before {\n    display: block;\n    position: absolute;\n    top: 20%;\n    left: 5px;\n    width: 5px;\n    height: 60%;\n    border-radius: 3px;\n    background: #f8b002;\n    content: '';\n  }\n  #bg02 .kaizen_--display_none {\n    display: none;\n  }\n  #bg02 .kaizen_table {\n    display: table;\n    max-width: 100% !important;\n    margin-top: 12px !important;\n    border-top: 1px solid #c3c3c3;\n    border-left: 1px solid #c3c3c3;\n  }\n  #bg02 .kaizen_table tbody {\n    display: table-row-group;\n  }\n  #bg02 .kaizen_table tr {\n    display: table-row;\n  }\n  #bg02 .kaizen_table th,\n  #bg02 .kaizen_table td {\n    display: table-cell;\n    padding: 7px 8px !important;\n    border-right: 1px solid #c3c3c3;\n    border-bottom: 1px solid #c3c3c3;\n  }\n  #bg02 .kaizen_table th {\n    width: 39% !important;\n    background-color: #f5f5f5;\n  }\n  #bg02 .kaizen_table + .kaizen_row {\n    margin-top: 10px !important;\n  }\n  #bg02 .kaizen_row {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 7px !important;\n    margin-bottom: 18px !important;\n  }\n  #bg02 .kaizen_row p {\n    -webkit-flex-grow: 1;\n            flex-grow: 1;\n    width: 0% !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n  }\n  #bg02 .kaizen_row p:last-child {\n    margin-left: 10px !important;\n  }\n  #bg02 .kaizen_row p a {\n    display: block;\n    position: relative !important;\n    padding: 10px !important;\n    padding-right: 17px !important;\n    border: 1px solid #c3c3c3;\n    border-radius: 3px;\n    color: #ff7004;\n    color: #000;\n    font-weight: bold;\n    line-height: 1.3 !important;\n    text-align: center;\n    text-decoration: none;\n  }\n  #bg02 .kaizen_row p a.kaizen_btn--solid {\n    -webkit-box-shadow: 0 2px 0 0 #bbb;\n            box-shadow: 0 2px 0 0 #bbb;\n    background-color: #f8f8f8;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), color-stop(39%, #fff), to(#ece7e7)) !important;\n    background-image: -webkit-linear-gradient(top, #fff 0%, #fff 39%, #ece7e7 100%) !important;\n    background-image: linear-gradient(to bottom, #fff 0%, #fff 39%, #ece7e7 100%) !important;\n  }\n  #bg02 .kaizen_row p a:after {\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    width: 5px;\n    height: 5px;\n    margin: auto 0;\n    border-top: 1px solid #c3c3c3;\n    border-right: 1px solid #c3c3c3;\n    content: '';\n  }\n  #bg02 .kaizen_banner {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    margin-top: 12px !important;\n    margin-bottom: 0 !important;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n  }\n  #bg02 .kaizen_banner p {\n    -webkit-flex-grow: 1 !important;\n            flex-grow: 1 !important;\n    width: 0% !important;\n    margin-top: 0 !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n    -webkit-box-flex: 1 !important;\n        -ms-flex-positive: 1 !important;\n  }\n  #bg02 .kaizen_banner p:first-child a {\n    display: block;\n  }\n  #bg02 .kaizen_banner p:first-child a img {\n    width: 100% !important;\n    height: auto;\n    padding: 0 !important;\n  }\n  #bg02 .kaizen_banner p:nth-child(2) {\n    margin-left: 10px !important;\n  }\n  #bg02 .kaizen_banner p:nth-child(2) a {\n    display: block !important;\n    width: 100% !important;\n    height: 0;\n    padding-top: 35.16483516483517%;\n    background: url(\"https://cdn.kaizenplatform.net/v2/attachments/000/356/989/ab61918e3f40e1dc1bbeeed8177182e92a0c6620.png\") no-repeat 0 0 transparent;\n    background-size: contain;\n  }\n  #bg02 .kaizen_icon {\n    display: block;\n    height: 28px;\n  }\n  #bg02 .kaizen_icon--smile {\n    width: 28px;\n    background: url(\"https://cdn.kaizenplatform.net/v2/attachments/000/357/550/758d4c057021ec69722265fe08366d934079f6ca.png\") no-repeat center 0 transparent;\n    background-size: contain;\n  }\n  #bg02 .kaizen_icon--smail_to_oricopoint {\n    width: 28px;\n    background: url(\"https://cdn.kaizenplatform.net/v2/attachments/000/357/551/5a9c2e2f9cae9e73b68721785a50eb2b1c6d15bc.png\") no-repeat center 0 transparent;\n    background-size: contain;\n  }\n  #bg02 .kaizen_img--oricopoint {\n    width: 166px !important;\n    margin-top: 13px !important;\n    padding-right: 10px !important;\n    padding-left: 10px !important;\n  }\n  #bg02 .kaizen_img--oricopoint:before {\n    display: block;\n    width: 100%;\n    height: 0;\n    padding-top: 22.48062015503876%;\n    background: url(\"https://cdn.kaizenplatform.net/v2/attachments/000/357/553/1fe3b52a6a50c8ff51f5842b27d841f8745cdd9f.gif\") no-repeat 0 0 transparent;\n    background-size: contain;\n    content: '';\n  }\n  #bg02 .kaizen_btn_text {\n    display: block;\n    margin-top: 5px !important;\n    line-height: 1.3;\n    text-align: center;\n  }\n  #bg02 .kaizen_long {\n    margin-top: 13px !important;\n    margin-bottom: 19px !important;\n  }\n  #bg02 .kaizen_long a {\n    display: block;\n    position: relative !important;\n    width: 77% !important;\n    margin: 0 auto !important;\n    padding: 10px !important;\n    padding-right: 17px !important;\n    border: 1px solid #c3c3c3 !important;\n    border-radius: 3px;\n    color: #000;\n    font-weight: bold;\n    line-height: 1.3 !important;\n    text-align: center;\n    text-decoration: none;\n  }\n  #bg02 .kaizen_long a > span {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n  }\n  #bg02 .kaizen_long a .kaizen_icon {\n    display: inline-block;\n  }\n  #bg02 .kaizen_long a .kaizen_icon--oricopoint {\n    width: 28px !important;\n    background: url(\"https://cdn.kaizenplatform.net/v2/attachments/000/357/552/03a2d2aee62df847e7758cbf369a68b46427d574.png\") no-repeat center 0 transparent;\n    background-size: contain;\n  }\n  #bg02 .kaizen_long a .kaizen_btn_text {\n    display: inline-block !important;\n    margin-top: 0 !important;\n    margin-left: 5px !important;\n    line-height: 1 !important;\n    text-align: left;\n  }\n  #bg02 .kaizen_long a:after {\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    width: 5px;\n    height: 5px;\n    margin: auto 0;\n    border-top: 1px solid #c3c3c3;\n    border-right: 1px solid #c3c3c3;\n    content: '';\n  }\n  #bg02 .kaizen_attention {\n    margin-top: 2px !important;\n    padding-top: 0 !important;\n    padding-bottom: 0 !important;\n  }\n  #bg02 .section {\n    margin-top: 18px !important;\n  }\n  #bg02 .section__head {\n    position: relative !important;\n    padding: 9px 8px 9px 20px !important;\n    border-bottom: 1px solid #c3c3c3;\n    font-size: 16px;\n    line-height: 1.4;\n  }\n  #bg02 .section__head:before {\n    display: block;\n    position: absolute;\n    top: 20%;\n    left: 5px;\n    width: 5px;\n    height: 60%;\n    border-radius: 3px;\n    background: #f8b002;\n    content: '';\n  }\n  #bg02 .section__head--web:before {\n    background-color: #7bd20b;\n  }\n  #bg02 .section__body {\n    margin-top: 12px !important;\n  }\n  #bg02 .group {\n    padding-top: 14px;\n    padding-bottom: 14px;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 0 0 1px #ece6e6;\n            box-shadow: 0 0 0 1px #ece6e6;\n    background-color: #fff;\n  }\n  #bg02 .sub_section {\n    padding: 5px !important;\n    border-radius: 2px;\n    background-color: #f5f5f5;\n  }\n  #bg02 .sub_section__head {\n    position: static !important;\n    margin-top: 5px !important;\n    margin-bottom: 10px !important;\n    padding-left: 5px !important;\n    padding-left: 15px !important;\n    color: #000;\n    font-size: 14px;\n    line-height: 1;\n  }\n  #bg02 .group--web {\n    background-color: #f8f8f8;\n  }\n  #bg02 .group__txt {\n    margin-bottom: 14px !important;\n    padding: 0 15px !important;\n    font-size: 13px !important;\n    line-height: 1.4 !important;\n  }\n  #bg02 .group__link {\n    margin-top: 14px !important;\n    padding: 0 18px 2px 0 !important;\n  }\n  #bg02 .group__list {\n    margin-top: 20px !important;\n    padding: 0 18px !important;\n  }\n  #bg02 .group__btn {\n    padding-top: 0 !important;\n    padding-bottom: 4px !important;\n  }\n  #bg02 .btn {\n    padding-bottom: 2px;\n    text-align: center;\n  }\n  #bg02 .btn--single {\n    padding-bottom: 4px;\n  }\n  #bg02 .btn__item {\n    display: inline-block;\n    width: 77% !important;\n    height: 33px;\n    padding: 0 10px !important;\n    border: none;\n    border-radius: 5px;\n    border-radius: 3px;\n    -webkit-box-shadow: 0 4px 0 0 #de7903;\n            box-shadow: 0 4px 0 0 #de7903;\n    background-color: #ff8c04;\n    color: #fff;\n    font-size: 14px;\n    line-height: 33px;\n    text-align: center;\n    text-decoration: none;\n  }\n  #bg02 .btn__item:nth-child(2) {\n    margin-top: 20px !important;\n  }\n  #bg02 .btn__item--small {\n    width: 62% !important;\n    height: 26px;\n    border: 1px solid #bfc4ca;\n    -webkit-box-shadow: 0 2px 0 0 #bbb;\n            box-shadow: 0 2px 0 0 #bbb;\n    background-color: #f8f8f8;\n    color: #584613;\n    font-size: 11px;\n    line-height: 25px;\n  }\n  #bg02 .btn__item--web {\n    -webkit-box-shadow: 0 4px 0 0 #0c9824;\n            box-shadow: 0 4px 0 0 #0c9824;\n    background-color: #13b82f;\n  }\n  #bg02 .link {\n    text-align: right;\n  }\n  #bg02 .link__item {\n    display: inline-block;\n  }\n  #bg02 .list__item {\n    line-height: 1.4 !important;\n  }\n  #bg02 .list__item:nth-child(n+2) {\n    margin-top: 2px !important;\n  }\n  #bg02 #base .kaizen_--style {\n    padding: 0 !important;\n  }\n  #bg02 #base #ClaimInfo table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_campaign-info_top.gif'] td {\n    padding: 0 !important;\n  }\n  #bg02 #base #ClaimInfo table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_campaign-info.gif'] td {\n    padding: 0 10px !important;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] {\n    background-repeat: no-repeat !important;\n    background-position: 0 bottom;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td {\n    vertical-align: bottom;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:first-child img {\n    height: 40px;\n    vertical-align: bottom;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:nth-child(2) {\n    padding-bottom: 5px;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:nth-child(2) img,\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:nth-child(2) br {\n    display: none;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:nth-child(2) span.text-red a {\n    font-size: 11px;\n    white-space: nowrap !important;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:last-child {\n    width: 70px !important;\n    padding-bottom: 5px;\n  }\n  #bg02 #base table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_your-info_top.gif'] td:last-child a {\n    display: inline-block;\n    padding-right: 5px !important;\n  }\n  #bg02 table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_campaign-info.gif'] td {\n    padding: 0 10px !important;\n  }\n  #bg02 table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_campaign-info.gif'] td p {\n    padding: 7px 0 !important;\n  }\n  #bg02 table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_campaign-info_top.gif'] {\n    margin-top: 27px !important;\n  }\n  #bg02 table[background='https://teorico.orico.co.jp/eorico/KAL11100/image/bg_campaign-info_top.gif'] h2 {\n    border-bottom: none;\n    background-color: transparent;\n  }\n  #bg02 img + .box1 .kaizen_img--oricopoint {\n    margin-top: 25px !important;\n    margin-left: -10px !important;\n  }";
		var st = $("<style type='text/css' id='kz_variation_style'></style>");
		var ss = st.prop("styleSheet");
		if (ss) ss.cssText = s;
		else st.html(s);
		$("head").append(st);
		// このスタイルが適用されていないので再適用（上のソースを解析るのがコストが高いので）
		$("td:nth-child(2)").css("padding-bottom", "5px");
		$("td:nth-child(2) span.text-red").css("vertical-align", "bottom");
		$("td:nth-child(2) span.text-red a").css("font-size", "11px");
	}
	idNcSpcCountAfter = $("[id*='NC_spc_']").length;
	if (idNcSpcCountBefore != idNcSpcCountAfter) {
		idNcSpcCountDelay = 0;
	}
}, 200);
