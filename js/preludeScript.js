const run = (exec) => {
	const project1 = "test";
	// このタイミングでは userData は empty object (== {})
	kzs.console.log("%s initial", project1, kzs.current.userData);

	var tid = setInterval(function () {
		if (!kzs.current.executedActions || kzs.current.executedActions.length == 0)
			return;
		// ここ以降は期待通り userData が load されている
		clearInterval(tid);
		exec();
		kzs.console.log("%s after userdata load", project1, kzs.current.userData);
	}, 200);
};

var queryParam = window.location.search.substr(1).split("=");
console.log("key : " + queryParam[0]);
console.log("value : " + queryParam[1]);
var loginHeader = $("#loginHeader").text();
console.log("loginHeader : " + loginHeader);
console.log("deploy5");

// カスタム変数のやり方
if (loginHeader == "1") {
	kzs("setCustomVariable", "isLogin", loginHeader);
}

if (window.location.href.match("/complete")) {
	kzs("trackClickGoals", "35258");
}

if (window.location.href.match("/indexA.html")) {
	kzs.console.log("index Aが呼ばれたよ");
}

// 新規お申し込み・提供エリア確認のIndex画面
if (window.location.pathname.match("^/cart/index.php")) {
	kzs.console.log("プレリュード実行");
	// フレッツ光クロス
	// エリア検索
	$("div.c-col.cross_box")
		.find("a.btn.btn--secondary.arrow")
		.on("click", function () {
			console.log("1番目実行");
			kzs("setUserData", {
				actionTypeButton: "crossAreaSearchBtn",
			});
		});
	// お申し込み
	$("div.c-col.cross_box")
		.find("a.btn.btn--primary__inquiry.arrow")
		.on("click", function () {
			console.log("2番目実行");
			kzs("setUserData", {
				actionTypeButton: "crossRequestBtn",
			});
		});
	// フレッツ光ネクスト、ライト
	// エリア検索
	$("div.c-col.next-light_box.pl12._sp_pl0")
		.find("a.btn.btn--secondary.arrow.button2")
		.on("click", function () {
			console.log("3番目実行");
			kzs("setUserData", {
				actionTypeButton: "nextOrLightAreaSearchBtn",
			});
		});
	// 簡単お申し込み
	$("div.c-col.next-light_box.pl12._sp_pl0")
		.find("a.btn.btn--base.arrow.button1")
		.on("click", function () {
			console.log("4番目実行");
			kzs("setUserData", {
				actionTypeButton: "nextOrLightRequestBtn",
			});
		});
	// 通常お申し込み
	$("div.c-col.next-light_box.pl12._sp_pl0")
		.find("a.btn.btn--primary__inquiry.arrow.button2")
		.on("click", function () {
			console.log("5番目実行");
			kzs("setUserData", {
				actionTypeButton: "nextOrLightRequestBtn",
			});
		});
}

// 提供判定結果画面
if (window.location.pathname.match("^/arean/servlet/Action1Servletc")) {
	// フレッツXXの商品タイプの判定
	kzs.console.log("提供判定結果画面");
	// フレッツXXの商品タイプの判定
	var type = $("#tab_wrap span").textContent || "";
	kzs("setUserData", {
		fletsProductType: type.indexOf("光ネクスト") == -1 ? "light" : "next",
	});
	kzs.console.log(type.indexOf("光ネクスト") == -1 ? "light" : "next");
}

if (window.location.href.match("/indexD.html")) {
	kzs.console.log("index Dが呼ばれたよ");
	$("#index-d-faild").on("click", function () {
		kzs.console.log("bbbbbbbbbbbbbbb");
	});
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
	console.log("aaaaaaa");
	$("span:contains(外国株取引口座を開設する)").addClass(
		"kzs_open_foreign_stock_trading_account"
	);
	console.log("bbbbbb");
}

if (window.location.href.match("/buyComp.html")) {
	console.log("user Data = " + kzs.current.userData.buyCount);
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
	// user Dataの設定
	const userDataExec = () => {
		kzs("setUserData", {
			buyCount: kzs.current.userData.buyCount
				? kzs.current.userData.buyCount + 1
				: 1,
		});
	};

	run(userDataExec);
}

// 施策: iDeCoの同時申し込み数の計測
var project6 = "iDecoSubscribe";
if (isDev) project2 += "Dev";
(function () {
	// ① CSE 検証用
	var runDev = function () {
		$(function () {
			// 入力ページ
			if (window.location.pathname.match("^/aoacs031")) {
				$("#submit").on("click", function () {
					kzs("setUserData", {
						idecoApply:
							$('input[name="ideco_apply"]:checked').val() == 1 ? "1" : "0",
					});
				});
			}
			// 入力ページ（修正）
			if (window.location.pathname.match("^/aoacs032")) {
				$("#submit").on("click", function () {
					kzs("setUserData", {
						idecoApply:
							$('input[name="ideco_apply"]:checked').val() == 1 ? "1" : "0",
					});
				});
			}

			// 完了ページ
			if (window.location.pathname.match("^/aosts051")) {
				var kzsGoalId = 36610;
				kzs("trackTransaction", kzsGoalId, {
					total_amount: kzs.current.userData.idecoApply,
					unique_id: "49E-355444",
				});
			}
		});
	};

	// ②本番用
	var run = function () {};

	// main
	try {
		kzs.console.log("%s run", project2);
		if (isDev) runDev();
		else run();
		kzs.console.log("%s done", project2);
	} catch (e) {
		kzs.console.log("exception: %s", project2, e);
		kzs("trackCustomEvent", {
			category: project2,
			action: "exception",
			label: "exception: " + e,
		});
	}
})();
