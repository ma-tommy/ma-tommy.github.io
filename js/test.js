"use strict";
// exp script template (Promise が不要な施策用)
// basic-with-promise.js と特徴は同じ
var _ver = "20191115-1"; // ①code 更新毎に手動で値を変更すべし
var _pid = "trackUserSegment"; // ②ここを施策内容を表すラベルに変更
var _exp = this;
var _expId = (((_exp.variation || {}).round || {}).project || {}).id;
var _el = "exp#" + (_expId || "none"); // console log 用 prefix label

(function () {
	try {
		var $ = kzs.$;
		kzs.console.log("%s begin %s %s", _el, _pid, _ver);

		// safari bfcache 対策 http://bit.ly/2W8EYC1
		if (_expId != undefined) {
			if (kzs[_expId])
				return kzs.console.log("%s run in bfcache, skipping", _el);
			kzs[_expId] = 1;
		}

		// editor or preview mode では何もしない: 施策要件次第では要削除
		if (kzs.utils.isNotInEditorOrPreviewMode() == false) {
			kzs.console.log("%s in editor||preview mode, do nothing", _el);
			return;
		}

		// オリジナル案ならば何もしない: 施策要件次第では要削除
		if ((_exp.variation || {}).isOriginal == true) {
			kzs.console.log("%s is original, do nothing", _el);
			return;
		}

		// ここから施策 code 実行
		$(function () {
			$(".h1").attr("data-kz-track", "outbound");
			$(".link-list.type-local-navi li:nth-child(1) a").attr(
				"data-kz-track-on-click",
				"35275"
			);

			$(".link-list.type-local-navi li:nth-child(2) a").attr(
				"data-kz-track-on-click",
				"35275"
			);

			$(".link-list.type-local-navi li:nth-child(3) a").attr(
				"data-kz-track-on-click",
				"35275"
			);
		});

		kzs.console.log("%s end", _el);
	} catch (e) {
		kzs.console.error(_el, e);
		kzs("trackCustomEvent", {
			category: _pid + "-" + _el,
			action: "exception",
			label: e + "",
		});
	}
})();
