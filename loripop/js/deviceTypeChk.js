//スマートフォン判定
function isSmt(ua) {
	if (
		ua.search(/iPhone/) != -1 ||
		(ua.search(/Android/) != -1 && ua.search(/Mobile/) != -1) ||
		ua.search(/Windows Phone/) != -1
	) {
		return true;
	} else {
		return false;
	}
}

//タブレット判定
function isTablet(ua) {
	if (
		ua.search(/iPad/) != -1 ||
		(ua.search(/Android/) != -1 && ua.search(/Mobile/) == -1)
	) {
		return true;
	} else {
		return false;
	}
}

//OS判定
function typeOfOS(ua) {
	var osType = "";
	if (ua.search(/iPhone/) != -1 || ua.search(/iPad/) != -1) {
		osType = "iOS";
	} else if (ua.search(/Android/) != -1) {
		osType = "Android";
	} else {
		osType = "others";
	}
	return osType;
}
