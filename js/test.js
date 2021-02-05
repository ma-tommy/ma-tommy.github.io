var queryParam = window.location.search.substr(1).split("=");
console.log("key : " + queryParam[0]);
console.log("value : " + queryParam[1]);
var loginHeader = $("#loginHeader").text();
console.log("loginHeader : " + loginHeader);

if (loginHeader == "1") {
	kzs("setCustomVariable", "isLogin", loginHeader);
}

if (window.location.href.match("/complete")) {
	kzs("trackClickGoals", "35258");
}

if (window.location.href.match("/confirm.html")) {
	kzs("setCustomVariable", "isLogin", loginHeader);
}
