function run() {
	// このタイミングでは userData は empty object (== {})
	kzs.console.log("%s initial", project1, kzs.current.userData);

	var tid = setInterval(function () {
		if (!kzs.current.executedActions || kzs.current.executedActions.length == 0)
			return;
		// ここ以降は期待通り userData が load されている
		clearInterval(tid);
		kzs.console.log("%s after userdata load", project1, kzs.current.userData);
	}, 200);
}

var queryParam = window.location.search.substr(1).split("=");
console.log("key : " + queryParam[0]);
console.log("value : " + queryParam[1]);
var loginHeader = $("#loginHeader").text();
console.log("loginHeader : " + loginHeader);
console.log("deploy7");

if (loginHeader == "1") {
	kzs("setCustomVariable", "isLogin", loginHeader);
}

if (window.location.href.match("/complete")) {
	kzs("trackClickGoals", "35258");
}

if (window.location.href.match("/confirm.html")) {
	const strage = {
		productName1: $("#productName1").text(),
		productNum1: $("#productNum1").text(),
		money1: $("#money1").text(),
		productName2: $("#productName2").text(),
		productNum2: $("#productNum2").text(),
		money2: $("#money2").text(),
	};
	sessionStorage.setItem("buy", JSON.stringify(strage));
}

if (window.location.href.match("/buyComp.html")) {
	const buyObj = JSON.parse(sessionStorage.getItem("buy"));
	console.log(buyObj);
	const productName1 = buyObj.productName1;
	const productNum1 = buyObj.productNum1;
	const money1 = buyObj.money1;
	const productName2 = buyObj.productName2;
	const productNum2 = buyObj.productNum2;
	const money2 = buyObj.money2;
	const total = productNum1 * money1 + productNum2 * money2;
	console.log("total = " + total);

	var kzsGoalId = 35300;
	kzs(
		"trackTransaction",
		kzsGoalId,
		{
			total_amount: total,
			unique_id: "49E-355469",
		},
		{
			transaction_id: "",
			transaction_details: [
				{
					product_name: productName1,
					price: money1,
					quantity: productNum1,
					total_amount: productNum1 * money1,
				},
				{
					product_name: productName2,
					price: money2,
					quantity: productNum2,
					total_amount: productNum2 * money2,
				},
			],
			other_data: "something",
		}
	);
	sessionStorage.removeItem("buy");
	//
	kzs("setUserData", {
		buyCount:
			kzs.current.userData.buyCount === null
				? 1
				: kzs.current.userData.buyCount + 1,
	});
}
