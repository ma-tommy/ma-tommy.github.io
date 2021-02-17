//次へボタンのクリックイベント定義
$(".btn_submit").click(function () {
	//エラー表示を消去
	$("dd p.input").removeClass("error");
	$("dd p.select").removeClass("error");
	$(".input").removeClass("error");

	//ご利用中のフレッツアクセスサービスが存在していて未選択の時
	if ($("#sbs_sbt").size() > 0 && $("#sbs_sbt").val() === "---") {
		//ご利用中のフレッツアクセスサービスの背景色をエラー色に変更する
		$("#selectedFletsService .input").addClass("error");
		//アラートを表示する
		alert("サービスを選択してください");
		//チェックNGの為、終了する
		return false;
	}

	//お住まいのタイプが存在していて、かつ、未選択状態の時
	if (
		$('input[name="f_p_mansion"]').size() > 0 &&
		typeof $('input[name="f_p_mansion"]:checked').attr("id") === "undefined"
	) {
		//お住まいのタイプの背景色をエラー色に変更する
		$("#residence .input").addClass("error");
		//アラートを表示する
		alert("お住まいのタイプをお選びください");
		//チェックNGの為、終了する
		return false;
	}

	//府県で検索の次へボタンがクリックされた時
	if ($(this).hasClass("btn_area_todoufuken")) {
		//府県選択が未選択の時
		if ($("#fuken").val() === "") {
			//府県選択の背景色をエラー色に変更する
			$(".todouhuken p.select").addClass("error");
			//アラートを表示する
			alert("府県が選択されていません");
			//チェックNGの為、終了する
			return false;
		}
		//送信項目（郵便番号情報、電話番号（市外局番）、電話番号（市内局番）、電話番号（加入者番号））をクリアする
		$(
			'input[name="post"], input[name="alpha1"], input[name="alpha2"], input[name="alpha3"]'
		).val("");
		//送信項目の検索モードを府県検索に設定
		$('input[name="mode"]').val("f");
		//送信項目の府県情報を設定
		$('input[name="fuken"]').val($("#fuken").val());
	}
	//郵便番号で検索の次へボタンがクリックされた時
	else if ($(this).hasClass("btn_area_zip")) {
		//郵便番号が正しく入力されていない時
		if (
			$("#zip1")
				.val()
				.search(/^\d{3}$/) === -1 ||
			$("#zip2")
				.val()
				.search(/^\d{4}$/) === -1
		) {
			//郵便番号の背景色をエラー色に変更する
			$(".zip p.input").addClass("error");
			//アラートを表示する
			alert("郵便番号が正しく入力されていません");
			//チェックNGの為、終了する
			return false;
		}
		//送信項目（府県情報、電話番号（市外局番）、電話番号（市内局番）、電話番号（加入者番号））をクリアする
		$(
			'input[name="fuken"], input[name="alpha1"], input[name="alpha2"], input[name="alpha3"]'
		).val("");
		//送信項目の検索モードを郵便番号検索に設定
		$('input[name="mode"]').val("u");
		//送信項目の郵便番号情報に入力された郵便番号を結合して設定
		$('input[name="post"]').val($("#zip1").val() + $("#zip2").val());
	}
	//電話番号で検索の次へボタンがクリックされた時
	else if ($(this).hasClass("btn_area_tel")) {
		//電話番号が半角数字で入力されていない時
		var str_alpha =
			$("#alpha1").val() + $("#alpha2").val() + $("#alpha3").val();
		if (str_alpha.search(/^\d*$/) === -1) {
			//電話番号の背景色をエラー色に変更する
			$(".tel p.input").addClass("error");
			//アラートを表示する
			alert("電話番号は半角数字で入力してください");
			//チェックNGの為、終了する
			return false;
		}
		//電話番号が正しく入力されていない時
		else if (
			str_alpha.search(/^\d{10}$/) === -1 ||
			$("#alpha1")
				.val()
				.search(/^0\d{1,5}$/) === -1 ||
			$("#alpha2")
				.val()
				.search(/^\d{1,4}$/) === -1 ||
			$("#alpha3")
				.val()
				.search(/^\d{4}$/) === -1
		) {
			//電話番号の背景色をエラー色に変更する
			$(".tel p.input").addClass("error");
			//アラートを表示する
			alert("電話番号が正しく入力されていません");
			//チェックNGの為、終了する
			return false;
		}
		//送信項目（郵便番号情報、府県情報）をクリアする
		$('input[name="post"], input[name="fuken"]').val("");
		//送信項目の検索モードを電話番号検索に設定
		$('input[name="mode"]').val("t");
		//送信項目の電話番号（市外局番）を設定
		$('input[name="alpha1"]').val($("#alpha1").val());
		//送信項目の電話番号（市内局番）を設定
		$('input[name="alpha2"]').val($("#alpha2").val());
		//送信項目の電話番号（加入者番号）を設定
		$('input[name="alpha3"]').val($("#alpha3").val());
	}

	//ご利用中のフレッツアクセスサービスが存在している時、送信項目のフレッツサービス種別にご利用中のフレッツアクセスサービスの選択内容を設定
	if ($("#sbs_sbt").size() > 0)
		$('input[name="sbs_sbt"]').val($("#sbs_sbt").val());

	//お住まいのタイプが存在している時、送信項目の集合住宅情報にお住まいのタイプの選択内容を設定
	if ($('input[name="f_p_mansion"]').size() > 0)
		$('input[name="p_mansion"]').val(
			$('input[name="f_p_mansion"]:checked').val()
		);

	//利用中他事業者コードが存在している時
	if ($('input[name="etc_al[f_kky_tajigyo]"]').size() > 0) {
		//集合住宅情報が 0:戸建て かつ、その他の回線、または光ファイバー回線は利用している時
		if (
			$('input[name="p_mansion"]').val() === "" &&
			$('input[name="etc_al[f_kky_tajigyo]"]:checked').size() > 0 &&
			$('input[name="etc_al[f_kky_tajigyo]"]:checked').val() !== ""
		) {
			//送信項目のサービス利用に 1:利用している を設定
			$('input[name="etc_al[kky_svc_riyo]"]').val("1");
			//送信項目の利用中事業者に 9:その他 を設定
			$('input[name="etc_al[kky_jigyo]"]').val("9");
			//送信項目の利用中他事業者コードに選択内容を設定
			$('input[name="etc_al[kky_tajigyo]"]').val(
				$('input[name="etc_al[f_kky_tajigyo]"]:checked').val()
			);
		}
		//集合住宅情報が 1:集合住宅 または、その他の回線、または光ファイバー回線は利用していない時
		else {
			//送信項目のサービス利用に 0:利用していない を設定
			$('input[name="etc_al[kky_svc_riyo]"]').val("0");
			//送信項目の利用中事業者に 空文字 を設定
			$('input[name="etc_al[kky_jigyo]"]').val("");
			//送信項目の利用中他事業者コードに 空文字 を設定
			$('input[name="etc_al[kky_tajigyo]"]').val("");
		}
	}
	// かいものかごに戻ってくるURLにga用のパラメータを追加してみる
	if (typeof ga !== "undefined" && typeof ga.getAll !== "undefined") {
		var _ga = ga.getAll()[0].get("linkerParam");
		$('input[name="g_url"]').val($('input[name="g_url"]').val() + "?" + _ga);
		$('input[name="r_url"]').val($('input[name="r_url"]').val() + "?" + _ga);
	}
	//フォームの送信処理
	$("#form1").submit();
	//終了する
	return false;
});
