var openAccordion = function () {
	$(".accordionContents").each(function () {
		var $accordion = $(this);
		var id = $accordion.parent().attr("id");
		if (id == "detail" || id == "faq") return;

		$accordion.show();
	});
};

var overWriteGendoLink = function () {
	var w$ = kzWindow.$;
	var eventTid = setInterval(function () {
		var $gendoButton = w$("#gendo_button");
		var events = w$._data($gendoButton.get(0), "events") || {};
		if (Object.keys(events).length == 0) return;

		clearInterval(eventTid);
		$gendoButton.off("click");

		$gendoButton.on("click", function () {
			var $target = $("#gendo");
			if (!$target.is(":visible")) {
				w$("#gendo_btn img").attr("src", "imgs/sp_riyu_accobtn01.jpg");
				$target.parents(".accordionContents").show();
			}
		});
	}, 200);
};

var makeAccordion = function () {
	$("#cont02, #cont03 .aco__wrap, #scene, #age, #cont04, #faq").each(
		function () {
			$(this)
				.find(
					".caution_bottom, .left_border:contains('当行口座をお持ちの方は'), .check_list:contains('ご入力項目が少ない'), .check_bottom:contains('口座によっては'), .left_border:contains('口座をお持ちの場合でも'), .check_list:contains('当行にお届けのお名前'), .check_bottom:contains('お申し込みにあたってのご注意')"
				)
				.wrapAll(
					"<div class='kz_wrapper'><div class='kz_accordion'></div></div>"
				);
		}
	);
	$(".kz_accordion").before("<p class='kz_accordion_toggle'>ご注意事項</p>");

	$(".kz_accordion_toggle").on("click", function () {
		var $toggle = $(this);
		$toggle.toggleClass("open");
		$toggle.next(".kz_accordion").slideToggle();
	});
};

var waitFvImg = function () {
	return new Promise(function (resolve) {
		var tid = setInterval(function () {
			var $target = $("#cont02 .btn_wrap img[src*='imgs/sp_btn']");
			var visibleFlg = 0;
			$target.each(function () {
				if ($(this).css("opacity") < 1) return;
				visibleFlg++;
			});
			if ($target.length < 2 || visibleFlg < 2) return;

			clearInterval(tid);
			resolve();
		}, 200);
	});
};

var addApplySentence = function () {
	$(".chk_normal").before("<p class='kz_apply'>お申し込みはこちら</p>");
};

var cloneApplyButton = function () {
	var $nomalClone = $("#cont02 .chk_normal").clone();
	var $maintenanceClone = $("#cont02 .chk_maintenance").clone();
	$("#main").append("<div class='kz_floating'></div>");
	$(".kz_floating").append($nomalClone, $maintenanceClone);
	$(".kz_floating .hedgetxt").remove();
};

var adjustBottom = function () {
	var floatingHeight = $(".kz_floating").outerHeight();
	$("body").css("margin-bottom", floatingHeight);
};

var addEvent = function () {
	$(kzWindow).on("scroll", function () {
		var targetPosition = 650;
		$("#cont02 [class^='chk_']").each(function () {
			var $v = $(this);
			if ($v.is(":visible")) {
				targetPosition = $v.offset().top + $v.outerHeight();
			}
		});
		var scrollPosition = $(this).scrollTop();
		if (targetPosition <= scrollPosition) {
			$(".kz_floating").fadeIn();
		} else {
			$(".kz_floating").fadeOut();
		}
	});
};

var replaceImages = function () {
	var imgTimer = setInterval(function () {
		//画像を書き換える処理 元画像が遅延読み込みでいつ読み込まれるかわからないので interval を停止するタイミングは なしです
		$("img.lazy").each(function () {
			var $img = $(this);
			var src = $img.attr("src") || "";
			if (
				src.indexOf("spacer") > -1 ||
				src.indexOf("sp_detail_accobtn01") > -1 ||
				src.indexOf("sp_faq_accobtn01") > -1 ||
				$img.hasClass("kz_changed")
			)
				return;

			var newSrc = "";
			if (src == "imgs/sp_btn_ari.png") {
				//あり の新しい画像に変える
				newSrc =
					"https://cdn.kaizenplatform.net/v2/attachments/000/353/673/0640f9083e3ca72dcb32fc650f419a1a25bdd21b.png";
			} else if (src == "imgs/sp_btn_nashi.png") {
				//なし の新しい画像に変える
				newSrc =
					"https://cdn.kaizenplatform.net/v2/attachments/000/353/674/808cb5461ff9eb94839eab2679ab753bdb535bc9.png";
			} else if (src.indexOf("_on") > -1) {
				if ($img.parent("h3").next(".accordionContents").is(":visible")) {
					newSrc = src.replace("_on", "");
				}
			} else if (src == "imgs/sp_scene_accobtn.png") {
				//バンクイックは どんな時に使える？ ここだけ画像の_onが他と逆
				if ($img.parent("h3").next(".accordionContents").is(":visible")) {
					newSrc = "imgs/sp_scene_accobtn_on.png";
				}
			} else {
				return;
			}
			$img.attr("src", newSrc);
			$img.addClass("kz_changed");
		});
	}, 200);
};

Promise.resolve()
	.then(openAccordion)
	.then(overWriteGendoLink)
	.then(makeAccordion)
	.then(waitFvImg)
	.then(addApplySentence)
	.then(cloneApplyButton)
	.then(adjustBottom)
	.then(addEvent)
	.then(replaceImages)
	.catch(function (e) {
		console.error("variation exception", e);
	});

// KAIZEN Customer Support
$("#main #topBanner").html(
	'<div style="padding:100% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/512827998?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>'
);
