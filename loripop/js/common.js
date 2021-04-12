/* 補完 */
String.prototype.trim = function () {
	if (!this) return this;
	return this.replace(/^\s+|\s+$/g, "");
};

if (!Array.indexOf) {
	Array.prototype.indexOf = function (e) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == e) return i;
		}
		return -1;
	};
}

/* cookie有効確認 */
function checkCookie() {
	document.cookie = "sanjose=sa";
	cookieInfo = document.cookie + ";";
	start = cookieInfo.indexOf("sanjose=");
	if (start != -1) {
		end = cookieInfo.indexOf(";", start);
		obj = unescape(cookieInfo.substring(start + 8, end));
		if (obj == "sa") {
			return true;
		}
	}
	return false;
}

/** 以下jQuery利用 **/
/* ボタン活性制御 */
function setDisabled(id, flg) {
	flg === true
		? $("#" + id).prop("disabled", true)
		: $("#" + id).prop("disabled", false);
}

/* 必須項目class制御 */
function setReqCls(slc) {
	return $(slc)
		.focus(function () {
			$(this).removeClass("reqEntry");
		})
		.blur(function () {
			if (!$(this).val()) $(this).addClass("reqEntry");
		});
}

/* add easing */
jQuery.extend(jQuery.easing, {
	easeOutExpo: function (x, t, b, c, d) {
		return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	},
});

/* scrollLink */
function scrLink(elm, speed, type) {
	var scSpeed = speed ? speed : 500;
	var scType = type ? type : "";
	$("html,body").animate({ scrollTop: $(elm).offset().top }, speed, type);
}

$(function () {
	/* PageTopLink */
	$(".toPageTop a").click(function () {
		$(this).blur();
		$("html,body").animate({ scrollTop: 0 }, 600, "easeOutExpo");
		return false;
	});
});
