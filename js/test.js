var queryParam = window.location.search.substr(1).split("=");
console.log("key : " + queryParam[0]);
console.log("value : " + queryParam[1]);
var loginHeader = $("#loginHeader").text();
console.log("loginHeader : " + loginHeader);
console.log("deploy3");

if (loginHeader == "1") {
	kzs("setCustomVariable", "isLogin", loginHeader);
}

if (window.location.href.match("/complete")) {
	kzs("trackClickGoals", "35258");
}

if (window.location.href.match("/confirm.html")) {
	console.log("productName1" + $("#productName1").text());
	console.log("productNum1" + $("#productNum1").text());
	console.log("money1" + $("#money1").text());
	console.log("productName2" + $("#productName2").text());
	console.log("productNum2" + $("#productNum2").text());
	console.log("money2" + $("#money2").text());
	document.cookie = "productName1=" + $("#productName1").text();
	document.cookie = "productNum1=" + $("#productNum1").text();
	document.cookie = "money1=" + $("#money1").text();
	document.cookie = "productName2=" + $("#productName2").text();
	document.cookie = "productNum2=" + $("#productNum2").text();
	document.cookie = "money2=" + $("#money2").text();
}

if (window.location.href.match("/buyComp.html")) {
	console.log(document.cookie);
	const cookieValue = document.cookie.split("; ");
	const find = (str) =>
		cookieValue.find((row) => row.startsWith(str)).split("=")[1];
	const productNum1 = find("productNum1");
	const money1 = find("money1");
	const productNum2 = find("productNum2");
	const money2 = find("money2");
	const total = productNum1 * money1 + productNum2 * money2;
	console.log("total = " + total);
	document.cookie = "total_amount=" + total;
}
