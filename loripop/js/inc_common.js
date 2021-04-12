//サブミットパラメータ定義(__type, __fid, B_ID, __ngid, NextPId)
var commonParameter = new Array();
//追加パラメータ定義([key,value],[key,value])
var addParameter = new Array();
//普通預金取引明細照会
commonParameter["a0001"] = ["0023", "NBG23061", "1", "", ""];
//残高照会
commonParameter["a0002"] = ["0023", "NBG23050", "1", "", ""];
//お客さま口座情報照会
commonParameter["a0003"] = ["0023", "NBG13010", "1", "", ""];
//ログインID設定・変更
commonParameter["d0013"] = ["0023", "NBG13210", "1", "", ""];
//振り込み
commonParameter["a0101"] = ["0003", "NBPG2212", "", "NBG21060G15", ""];
//振込・送金明細照会
commonParameter["a0004"] = ["0023", "NBG23200", "1", "", ""];
//振込予約取消
commonParameter["a0102"] = ["0023", "NBG22060", "1", "", ""];
//振込先口座の登録
commonParameter["a0103"] = ["0003", "NBPG2212", "", "NBG23085G15", ""];
//登録口座の照会・変更
commonParameter["a0104"] = ["0023", "NBG23080", "5", "NBG23080G12", ""];
//登録先削除
commonParameter["a0105"] = ["0003", "NBPG2212", "", "NBG21060G1F", ""];
//組戻（資金返却）依頼・回答受付
commonParameter["a0106"] = ["0003", "NBPG2212", "", "NBG6A110G10", ""];
//自動振込サービス
commonParameter["a0201"] = ["0023", "NBG22180", "11", "", ""];
//JNB-J振
commonParameter["a0202"] = ["0023", "NBG12360", "1", "", ""];
//WEB一括振込
commonParameter["a0203"] = ["0003", "NBPG2212", "", "NBG21680G1Z", ""];
//振込専用口座
commonParameter["a0204"] = ["0023", "NBG12230", "1", "", ""];
//ゆうちょ銀行へ送金
commonParameter["a0301"] = ["0023", "NBPG9702G11001", "1", "", ""];
//ゆうちょ銀行から送金
commonParameter["a0302"] = ["0023", "NBPG9700", "1", "", ""];
//WEB総振取引
commonParameter["a0401"] = ["0023", "NBGWS202", "17", "", ""];
//WEB総振解約
commonParameter["a0402"] = ["0023", "NBGWS201", "4", "", ""];
//口座自動振替契約申込
commonParameter["a0501"] = ["0003", "NBPG2212", "", "NBG27103G1Z", ""];
//口座自動振替契約照会
commonParameter["a0502"] = ["0023", "NBG27101", "1", "", ""];
//口座自動振替申込確認
commonParameter["a0503"] = ["0023", "NBG27A02", "1", "", ""];
//Pay-easy（ペイジー）でのお支払い
commonParameter["a0601"] = ["0023", "NBGPE101", "1", "", ""];
//定額自動入金サービス利用申込
commonParameter["a0701"] = ["0023", "NBG12400", "1", "", ""];
//契約内容照会／入金額変更／解約
commonParameter["a0702"] = ["0023", "NBG12420", "1", "", ""];
//ネットキャッシング審査申し込み
commonParameter["b0101"] = ["0023", "NBG52224G11001", "1", "", ""];
//画像アップロード
commonParameter["b0122"] = ["0023", "NBG52700", "2", "", ""];
//極度型ローンメニュー
commonParameter["b0102"] = ["0023", "NBG53372", "1", "", ""];
//増額審査申し込み（ネットキャッシング、借り入れおまとめローン）
commonParameter["b0103"] = ["0023", "NBG52540", "1", "", ""];
addParameter["b0103"] = [["MotoFid", "NBG13130"]];
//目的型ローン・フリーローン審査申し込み
commonParameter["b0104"] = ["0023", "NBG82052G11001", "1", "", ""];
//目的型ローン・フリーローンメニュー
commonParameter["b0105"] = ["0023", "NBG83090", "1", "", ""];
//返済額試算照会
commonParameter["b0106"] = ["0023", "NBG83070G11001", "1", "", ""];
//極度型ローン解約証明書発行
commonParameter["b0107"] = ["0023", "NBG52600", "1", "", ""];
//極度型ローン借入
commonParameter["b0108"] = ["0023", "NBG51212G11001", "1", "", ""];
//極度型ローン契約内容照会
commonParameter["b0109"] = ["0023", "NBG53213", "1", "", ""];
//極度型ローン契約内容変更（自動融資、約定返済日、返済方式）
commonParameter["b0110"] = ["0023", "NBG52412G11001", "1", "", ""];
//極度型ローン取引明細照会
commonParameter["b0111"] = ["0023", "NBG53233", "1", "", ""];
//極度型ローン返済
commonParameter["b0112"] = ["0023", "NBG51222G11001", "1", "", ""];
//極度型ローン全額返済照会
commonParameter["b0113"] = ["0023", "NBG52232G11001", "1", "", ""];
//極度型ローン解約
commonParameter["b0114"] = ["0023", "NBG52530G11001", "1", "", ""];
//増額審査申し込み（ネットキャッシング、借り入れおまとめローン）[タブメニュー]
commonParameter["b0115"] = ["0023", "NBG52540", "1", "", ""];
addParameter["b0115"] = [["MotoFid", "NBG53372"]];
//カード番号発行
commonParameter["b0602"] = ["0023", "NBGCD202", "1", "", ""];
//カード番号変更／一覧
commonParameter["b0603"] = ["0023", "NBGCD301", "1", "", ""];
//ご利用明細一覧
commonParameter["b0604"] = ["0023", "NBGCD302", "1", "", ""];
//ご利用限度額変更
commonParameter["b0605"] = ["0023", "NBGCD223", "1", "", ""];
//Visaデビット暗証番号（PIN）照会
commonParameter["b0606"] = ["0023", "NBGCD308", "1", "", ""];
//Visaデビット暗証番号（PIN）変更
commonParameter["b0607"] = ["0023", "NBG12540", "4", "", ""];
//新約
commonParameter["b0001"] = ["0023", "NBG41011G11001", "1", "", ""];
//契約内容照会
commonParameter["b0002"] = ["0023", "NBG49110", "2", "", "NBG43010"];
//取引明細照会
commonParameter["b0003"] = ["0023", "NBG43020", "1", "", ""];
//満期取扱変更
commonParameter["b0004"] = ["0023", "NBG49110", "2", "", "NBG42010"];
//解約
commonParameter["b0005"] = ["0023", "NBG49110", "2", "", "NBG41040"];
//解約利息試算
commonParameter["b0006"] = ["0023", "NBG49110", "2", "", "NBG43040"];
//FX（一般タイプ）口座開設
commonParameter["b0301"] = ["0023", "NBGFX251", "1", "", ""];
//FX（初級タイプ）口座開設
commonParameter["b0302"] = ["0023", "NBGFX251", "1", "", ""];
addParameter["b0302"] = [["FxplusFlg", "1"]];
//FX（一般タイプ）取引
commonParameter["b0303"] = ["0023", "NBGFX351", "1", "", ""];
//FX（初級タイプ）取引
commonParameter["b0304"] = ["0023", "NBGFX351", "1", "", ""];
addParameter["b0304"] = [["FxplusFlg", "1"]];
//FX口座情報
commonParameter["b0305"] = ["0023", "NBGFX302", "1", "", ""];
//FXお届け事項の変更
commonParameter["b0307"] = ["0023", "NBGFD203", "1", "", ""];
addParameter["b0307"] = [["Link", "2"]];
//FX口座解約
commonParameter["b0306"] = ["0023", "NBGFX252", "1", "", ""];
//投信・NISA口座開設
commonParameter["b0507"] = ["0023", "NBGFD212", "1", "", ""];
//JNB投資信託取引
commonParameter["b0502"] = ["0023", "NBGFD301", "1", "", ""];
//JNB投資信託口座情報
commonParameter["b0503"] = ["0023", "NBGFD302", "1", "", ""];
//JNB投資信託お届け事項の変更
commonParameter["b0504"] = ["0023", "NBGFD203", "1", "", ""];
addParameter["b0504"] = [["Link", "1"]];
//JNB投資信託口座解約
commonParameter["b0505"] = ["0023", "NBGFD202", "1", "", ""];
//宝くじ ナンバーズ購入
commonParameter["b0702"] = ["0023", "NBGTK102", "1", "", ""];
addParameter["b0702"] = [["HidSmtFlg", smtFlg]];
//宝くじ ナンバーズ定期購入
commonParameter["b0704"] = ["0023", "NBGTK106", "1", "", ""];
addParameter["b0704"] = [["HidSmtFlg", smtFlg]];
//宝くじ ナンバーズ当せん照会・ 購入履歴照会
commonParameter["b0705"] = ["0023", "NBGTK105", "1", "", ""];
addParameter["b0705"] = [["HidSmtFlg", smtFlg]];
//宝くじ ナンバーズ定期購入照会・解約
commonParameter["b0706"] = ["0023", "NBGTK107", "1", "", ""];
addParameter["b0706"] = [["HidSmtFlg", smtFlg]];
//宝くじ  トークン設定照会・変更
commonParameter["b0707"] = ["0023", "NBGTK104", "1", "", ""];
addParameter["b0707"] = [["HidSmtFlg", smtFlg]];
//宝くじ ロト購入
commonParameter["b0711"] = ["0023", "NBGTK108", "1", "", ""];
addParameter["b0711"] = [["HidSmtFlg", smtFlg]];
//宝くじ ロト定期購入
commonParameter["b0712"] = ["0023", "NBGTK111", "1", "", ""];
addParameter["b0712"] = [["HidSmtFlg", smtFlg]];
//宝くじ ロト当せん照会・ 購入履歴照会
commonParameter["b0715"] = ["0023", "NBGTK110", "1", "", ""];
addParameter["b0715"] = [["HidSmtFlg", smtFlg]];
//宝くじ ロト定期購入照会・解約
commonParameter["b0716"] = ["0023", "NBGTK114", "1", "", ""];
addParameter["b0716"] = [["HidSmtFlg", smtFlg]];
//JNB-toto会員登録
commonParameter["b0401"] = ["0023", "NBGTT101", "1", "", ""];
//JNB-totoくじ購入
commonParameter["b0402"] = ["0023", "NBGTT201", "1", "", ""];
//当せん照会・購入履歴
commonParameter["b0405"] = ["0023", "NBGTT211", "1", "", ""];
//BIG予約購入 予約・照会
commonParameter["b0403"] = ["0023", "NBGTT251", "1", "", ""];
//JNB-totoトークンレス購入登録申込・解除
commonParameter["b0404"] = ["0023", "NBGTT212", "1", "", ""];
//公営競技会員登録（口座自動振替契約）
commonParameter["b0201"] = ["0003", "NBPG2212", "", "NBPG1G02G14", ""];
//エントリー／JNBスター交換申込
commonParameter["c0001"] = ["0023", "NBGCA130", "1", "", ""];
//エントリー履歴
commonParameter["c0002"] = ["0023", "NBGCA140", "1", "", ""];
//JNBスター獲得・交換履歴
commonParameter["c0010"] = ["0023", "NBGCA170", "1", "", ""];
//JNBスター交換申込
commonParameter["c0011"] = ["0023", "NBGCA180001", "1", "", ""];
//JNB VISAカード
commonParameter["c0004"] = ["0023", "NBGCA200002", "2", "", ""];
addParameter["c0004"] = [["CampaignId", "2015000030"]];
//JNB JCBカード
commonParameter["c0005"] = ["0023", "NBGCA200002", "2", "", ""];
addParameter["c0005"] = [["CampaignId", "2014000031"]];
//JNB VISA（三井住友カード） direct
commonParameter["c0012"] = ["0002", "NBPG2201", "", "", ""];
addParameter["c0012"] = [
	["L_flag", ""],
	["Y_flag", ""],
];
//JNB JCB（セディナ） direct
commonParameter["c0013"] = ["0002", "NBPG2201", "", "", ""];
addParameter["c0013"] = [
	["L_flag", ""],
	["Y_flag", ""],
];
//Account-Gate（ニッセイ保険）
commonParameter["c0006"] = ["0003", "NBPG2212", "", "NBPG9501G12", ""];
//海外旅行保険（代理店）
commonParameter["c0007"] = ["0002", "NBPG2201", "", "", ""];
addParameter["c0007"] = [
	["L_flag", ""],
	["Y_flag", ""],
];
//JNB クラブオフ
commonParameter["c0008"] = ["0023", "NBPGA010", "1", "", ""];
addParameter["c0008"] = [
	["L_flag", "1"],
	["Teikei_code", "1001"],
	["Teikei_name", "JNBクラブオフ"],
];
//証券口座開設申込
commonParameter["c0009"] = ["0023", "NBPGA010", "1", "", ""];
addParameter["c0009"] = [
	["Teikei_code", "0006"],
	["Teikei_name", "証券口座開設申込"],
];
//問い合わせフォーム
commonParameter["c0014"] = ["", "", "", "", ""];
//チャットフォーム
commonParameter["c0015"] = ["0023", "ChatFormG11", "", "", ""];
//連絡先照会フォーム
commonParameter["c0016"] = ["", "", "", "InquiryFormG13", ""];
//ATM出金限度額変更
commonParameter["d0001"] = ["0023", "NBPG1E01", "6", "", ""];
//J-Debit利用限度額変更
commonParameter["d0002"] = ["0023", "NBPG1E01", "1", "", ""];
//振込・送金限度額照会 変更
commonParameter["d0003"] = ["0023", "NBG6B101", "7", "", ""];
//ログインパスワード変更
commonParameter["d0005"] = ["0023", "NBG12190", "1", "", ""];
//暗証番号変更
commonParameter["d0006"] = ["0023", "NBG12570", "1", "", ""];
//仮暗証番号発行
commonParameter["d0007"] = ["0023", "NBG12520", "1", "", ""];
addParameter["d0007"] = [["ShikiCode", "1000"]];
//キャッシュカード・トークン取引停止・再開
commonParameter["d0008"] = ["0023", "NBG00100", "1", "", ""];
//キャッシュカード・トークン再発行、IDカード停止解除
commonParameter["d0009"] = ["0023", "NBG12530", "1", "", ""];
//カード型トークン切替登録
commonParameter["d0010"] = ["0023", "NBGR2011", "20", "", ""];
//トークンアプリ登録申請
commonParameter["d0028"] = ["0023", "NBGR2011", "30", "", ""];
//トークン時刻補正
commonParameter["d0011"] = ["0023", "NBGR2021", "1", "", ""];
//トークン追加発行
commonParameter["d0012"] = ["0023", "NBG13210", "1", "", ""];
//サービス別使用トークン変更
commonParameter["d0014"] = ["0023", "NBG12750", "1", "", ""];
//IDカード切替用トークン申込
commonParameter["d0022"] = ["0023", "NBGR2060", "1", "", ""];
//BA-PLUS申込
commonParameter["d0101"] = ["0023", "NBGBA228", "1", "", ""];
//BA-PLUS口座取込依頼
commonParameter["d0102"] = ["0023", "NBGBA207", "1", "", ""];
//追加法人口座申し込み
commonParameter["d0103"] = ["0023", "NBG12641", "1", "", ""];
//メール配信の登録・解除
commonParameter["d0015"] = ["0023", "NBG12430", "1", "", ""];
//お客さま情報の変更
commonParameter["d0016"] = ["0023", "NBG12051", "1", "", ""];
//お名前・取引目的の変更
commonParameter["d0017"] = ["0023", "NBG12330", "1", "", ""];
//ご利用明細送付サービス申込
commonParameter["d0018"] = ["0023", "NBG12051", "6", "", ""];
//残高証明書申込・照会
commonParameter["d0019"] = ["0023", "NBPGA300", "1", "NBPGA300G11", ""];
//普通預金種別の切り替え
commonParameter["d0020"] = ["0003", "NBPG2212", "", "NBG12440G11", ""];
//口座解約
commonParameter["d0021"] = ["0003", "NBPG2212", "", "NBG11080G14", ""];
//Welcome Page
commonParameter["ln0001"] = ["0023", "NBG13130", "1", "", ""];
//ログアウト
commonParameter["ln0002"] = ["0002", "NBPG2201", "", "", ""];
//取引明細郵送依頼
commonParameter["ln0003"] = ["0023", "NBG22080", "1", "", ""];
//外貨預金口座開設
commonParameter["b0801"] = ["0023", "NBGFC201", "1", "", ""];
//外貨預金取引
commonParameter["b0802"] = ["0023", "NBGFC302", "1", "", ""];
//外貨預金口座情報
commonParameter["b0803"] = ["0023", "NBGFC301", "1", "", ""];
//外貨預金口座解約
commonParameter["b0804"] = ["0023", "NBGFC202", "1", "", ""];
//ファミマTカード（VISAデビット）申込 VISAデビット付キャッシュカード申込
commonParameter["d0023"] = ["0023", "NBG12540", "5", "", ""];
//メールアドレスの変更・削除
commonParameter["d0024"] = ["0023", "NBG12930", "1", "", ""];
//カード型トークン切替申込
commonParameter["d0026"] = ["0023", "NBGR2070", "1", "", ""];
//Banking API連携サービス一覧・解除
commonParameter["d0027"] = ["0023", "NBGWA105", "1", "", ""];
//極度型ビジネスローン 借入
commonParameter["b0116"] = ["0023", "NBGBL101", "1", "", ""];
//極度型ビジネスローン 契約内容／ご利用状況照会
commonParameter["b0117"] = ["0023", "NBGBL104", "1", "", ""];
//極度型ビジネスローン 取引明細照会
commonParameter["b0118"] = ["0023", "NBGBL106", "1", "", ""];
//極度型ビジネスローン 繰り上げ返済
commonParameter["b0119"] = ["0023", "NBGBL102", "1", "", ""];
//極度型ビジネスローン 返済額照会(一括返済)
commonParameter["b0120"] = ["0023", "NBGBL103", "1", "", ""];
//極度型ビジネスローン 延滞状況照会
commonParameter["b0121"] = ["0023", "NBGBL105", "1", "", ""];
//極度型ビジネスローン 自動融資設定／照会
commonParameter["b0123"] = ["0023", "NBGBL108", "1", "", ""];
//住宅ローン 契約内容照会
commonParameter["b0131"] = ["0023", "NBGJL103", "1", "", ""];
//住宅ローン 返済予定明細照会
commonParameter["b0132"] = ["0023", "NBGJL104", "1", "", ""];
//住宅ローン 金利タイプ変更
commonParameter["b0133"] = ["0023", "NBGJL102", "1", "", ""];
//住宅ローン 一部繰上返済
commonParameter["b0134"] = ["0023", "NBGJL101", "1", "", ""];
//住宅ローン 延滞明細照会
commonParameter["b0135"] = ["0023", "NBGJL105", "1", "", ""];
//住宅ローン 返済履歴明細照会
commonParameter["b0136"] = ["0023", "NBGJL106", "1", "", ""];
//PayForex
commonParameter["a0801"] = ["0023", "NBPG1G02", "1", "", ""];
addParameter["a0801"] = [["Y_flag", "0"]];

var maxAmountLoan = false;
function extremeLoanSubmit(submitNo) {
	maxAmountLoan = true;
	commonSubmit(submitNo);
}

var logoutTimeoutMs = 140000;

function commonSubmit(submitNo) {
	makeIncCommonForm();
	var flg;
	switch (submitNo) {
		case "b0303":
		case "b0304":
		case "b0502":
		case "b0802":
			// FX（一般タイプ）取引
			// FX（初級タイプ）取引
			// JNB投資信託取引
			// 外貨預金取引
			document.IncCommon.menubar = "yes";
			document.IncCommon.target = "_blank";
			commonSubmitProcess(submitNo);
			window.opener = null;
			setTimeout("window.close()", 5000);
			break;
		case "c0006":
			// Account-Gate（ニッセイ保険）
			document.IncCommon.action = "NBPA2101.do";
			document.IncCommon.target = "_top";
			commonSubmitProcess(submitNo);
			break;
		case "c0007":
			// 海外旅行保険（代理店）
			flg = confirm("ログアウトして注意画面に移動します");
			if (flg == true) {
				$.ajax({
					type: "POST",
					url: "NBCW2101.do",
					data: createLogoutParameters(submitNo),
					timeout: logoutTimeoutMs,
					complete: function () {
						location.href =
							"http://www.japannetbank.co.jp/save/nissaydowa01.html";
					},
				});
			}
			break;
		case "c0012":
			// JNB VISA（三井住友カード） direct
			flg = confirm("ログアウトして提携先サイトへ移動します。");
			if (flg == true) {
				$.ajax({
					type: "POST",
					url: "NBCW2101.do",
					data: createLogoutParameters(submitNo),
					timeout: logoutTimeoutMs,
					complete: function () {
						location.href =
							"http://www.smbc-card.com/nyukai/affiliate/jnb/index.jsp";
					},
				});
			}
			break;
		case "c0013":
			// JNB JCB（セディナ） direct
			flg = confirm("ログアウトして提携先サイトへ移動します。");
			if (flg == true) {
				$.ajax({
					type: "POST",
					url: "NBCW2101.do",
					data: createLogoutParameters(submitNo),
					timeout: logoutTimeoutMs,
					complete: function () {
						location.href = "http://www.cedyna.co.jp/card/jnbjcbcard/";
					},
				});
			}
			break;
		case "c0014":
		case "c0016":
			// 問い合わせフォーム
			// 連絡先照会受付フォーム
			document.IncCommon.action = "InquiryFormG11.do";
			document.IncCommon.target = "inquiryForm";
			commonSubmitProcess(submitNo);
			document.IncCommon.action = "NBCW2101.do";
			document.IncCommon.target = "_self";
			break;
		case "c0015":
			// チャットフォーム
			document.IncCommon.action = "ChatFormG11.do";
			commonSubmitProcess(submitNo);
			document.IncCommon.action = "NBCW2101.do";
			break;
		case "ln0002":
			// ログアウト
			flg = confirm("ログアウトしますか？");
			if (flg == true) {
				if ($("form[name='HOST'] input[name=SmartPhoneKbn]").val() == "1") {
					$("<input>", {
						type: "hidden",
						name: "SmartPhoneKbn",
						value: "1",
					}).appendTo("form[name='IncCommon']");
				}
				commonSubmitProcess(submitNo);
			}
			break;
		case "a0001":
			// 普通預金取引明細照会
			if (document.IncCommon.__gid.value == "NBG23061G11") {
				document.IncCommon.__gid.value = "NBG13130G12";
			}
			commonSubmitProcess(submitNo);
			break;
		case "b0108":
			// 極度型ローン 借入
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0109":
			// 極度型ローン 契約内容照会
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0110":
			// 極度型ローン 契約内容変更
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0111":
			// 極度型ローン 取引明細照会
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0112":
			// 極度型ローン 返済
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0113":
			// 極度型ローン 全額返済照会
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0114":
			// 極度型ローン 解約
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "b0115":
			// 増額審査申し込み（ネットキャッシング、借り入れおまとめローン）[タブメニュー]
			document.IncCommon.__gid.value = "NBG53372G11";
			commonSubmitProcess(submitNo);
			break;
		case "a0801":
			$("form#IncCommon").append(
				$('<input type="hidden" name="SEC_ID10" value="0003003025" />')
			);
			commonSubmitProcess(submitNo);
			break;
		default:
			commonSubmitProcess(submitNo);
			break;
	}
}

function makeIncCommonForm() {
	var gid = $("form[name='HOST'] input[name=__gid]").val();
	var sid = $("form[name='HOST'] input[name=__sid]").val();
	var uid = $("form[name='HOST'] input[name=__uid]").val();
	var tenNo = "";
	var kozaNo = "";
	var loginId = "";
	var tokenRiyoFlg = "";
	if ($("form[name='HOST'] input[name=TenNo]").val()) {
		tenNo = $("form[name='HOST'] input[name=TenNo]").val();
	} else {
		if (uid != null && uid.length >= 10) {
			tenNo = uid.substring(0, 3);
		}
	}
	if ($("form[name='HOST'] input[name=KozaNo]").val()) {
		kozaNo = $("form[name='HOST'] input[name=KozaNo]").val();
	} else {
		if (uid != null && uid.length >= 10) {
			kozaNo = uid.substring(3, 10);
		}
	}
	if ($("form[name='HOST'] input[name=LoginId]").val()) {
		loginId = $("form[name='HOST'] input[name=LoginId]").val();
	}
	if ($("form[name='HOST'] input[name=TokenRiyoFlg]").val()) {
		tokenRiyoFlg = $("form[name='HOST'] input[name=TokenRiyoFlg]").val();
	}
	if ($("form#IncCommon").html() != null) {
		$("form#IncCommon").remove();
	}

	var form = $(
		'<form method="post" action="NBCW2101.do" id="IncCommon" name="IncCommon" target="_self" />'
	)
		.append($('<input type="hidden" name="__type" />').attr({ value: "0023" }))
		.append($('<input type="hidden" name="__sid" />').attr({ value: sid }))
		.append($('<input type="hidden" name="__gid" />').attr({ value: gid }))
		.append($('<input type="hidden" name="__fid" />'))
		.append($('<input type="hidden" name="__uid" />').attr({ value: uid }))
		.append($('<input type="hidden" name="B_ID" />'))
		.append($('<input type="hidden" name="RCODE" />').attr({ value: "" }))
		.append($('<input type="hidden" name="__ngid" />'))
		.append($('<input type="hidden" name="NextPId" />'))
		.append($('<input type="hidden" name="ShikiCode" />'))
		.append($('<input type="hidden" name="TenNo" />').attr({ value: tenNo }))
		.append($('<input type="hidden" name="KozaNo" />').attr({ value: kozaNo }))
		.append($('<input type="hidden" name="n_gid" />'))
		.append($('<input type="hidden" name="ShoriFlg" />'))
		.append($('<input type="hidden" name="MsShiteiKbn" />'))
		.append(
			$('<input type="hidden" name="LoginId" />').attr({ value: loginId })
		)
		.append($('<input type="hidden" name="L_flag" />').attr({ value: "0" }))
		.append($('<input type="hidden" name="Teikei_code" />'))
		.append($('<input type="hidden" name="Teikei_name" />'))
		.append($('<input type="hidden" name="FtNextGid" />'))
		.append($('<input type="hidden" name="LoanNextGid" />'))
		.append($('<input type="hidden" name="Y_flag" />').attr({ value: "0" }))
		.append(
			$('<input type="hidden" name="Keiro" />').attr({
				value: "ビジネスアカウント",
			})
		)
		.append($('<input type="hidden" name="MotoFid" />'))
		.append(appendMaxAmountLoan())
		.append(appendAccountHash())
		.append(appendJinkakuCode())
		.append($('<input type="hidden" name="Link" />'))
		.append($('<input type="hidden" name="Fx_flag" />').attr({ value: "2" }))
		.append($('<input type="hidden" name="FxplusFlg" />'))
		.append($('<input type="hidden" name="StSikibetuId" />'))
		.append($('<input type="hidden" name="CampaignId" />'))
		.append($('<input type="hidden" name="HidSmtFlg" />'))
		.append($('<input type="hidden" name="HidGameType" />'))
		.append(
			$('<input type="hidden" name="TokenRiyoFlg" />').attr({
				value: tokenRiyoFlg,
			})
		)
		.append($('<input type="hidden" name="NISAMoshikomiKbn" />'));
	form.appendTo(document.body);
}

function commonSubmitProcess(submitNo) {
	document.IncCommon.__type.value = commonParameter[submitNo][0];
	document.IncCommon.__fid.value = commonParameter[submitNo][1];
	document.IncCommon.B_ID.value = commonParameter[submitNo][2];
	document.IncCommon.__ngid.value = commonParameter[submitNo][3];
	document.IncCommon.NextPId.value = commonParameter[submitNo][4];
	var params = addParameter[submitNo];
	if (params != null) {
		var i;
		for (i = 0; i < params.length; i++) {
			var key = params[i][0];
			var val = params[i][1];
			$("form#IncCommon input:hidden[name='" + key + "']").val(val);
		}
	}
	document.IncCommon.submit();
}

function createLogoutParameters(submitNo) {
	var params = addParameter[submitNo];
	var logoutParameters = {
		__type: "0002",
		__fid: "NBPG2201",
		B_ID: "",
		__sid: $("form[name='HOST'] input[name=__sid]").val(),
		__gid: $("form[name='HOST'] input[name=__gid]").val(),
		__uid: $("form[name='HOST'] input[name=__uid]").val(),
	};
	if (params != null) {
		for (var i = 0; i < params.length; i++) {
			var key = params[i][0];
			var val = params[i][1];
			logoutParameters[key] = val;
		}
	}
	return logoutParameters;
}

function appendMaxAmountLoan() {
	if (maxAmountLoan == true) {
		var keiNo = "";
		if (document.getElementById("tabMenu_KeiNo")) {
			keiNo = document.getElementById("tabMenu_KeiNo").innerHTML;
		}
		return '<input type="hidden" name="KeiNo" value="' + keiNo + '" />';
	} else {
		return "";
	}
}

function appendAccountHash() {
	var accountHashElement = document.getElementById("tabMenu_Accounthash");
	if (accountHashElement) {
		var accountHash = accountHashElement.innerHTML;
		return (
			'<input type="hidden" name="accountHash" value="' + accountHash + '" />'
		);
	} else {
		return "";
	}
}

function appendJinkakuCode() {
	var jinkakuCodeElement = document.getElementById("tabMenu_JinkakuCode");
	if (jinkakuCodeElement) {
		var jinkakuCode = jinkakuCodeElement.innerHTML;
		return (
			'<input type="hidden" name="inquiryJinkakuCode" value="' +
			jinkakuCode +
			'" />'
		);
	} else {
		return "";
	}
}
