var observer = new MutationObserver(function () {
	
    /** DOM変化の監視を一時停止 */
    observer.disconnect();
    
    /** DOMの変化が起こった時の処理 */
	$("<span>あああ</span>").appendTo(".tosv");
    
    /** DOM変化の監視を再開 */
    observer.observe(elem, config);
});

/** 監視対象の要素オブジェクト */
const elem = $(".contentsBodyInr")[0];

/** 要素の変化監視をスタート */
observer.observe(elem, { subtree: true, childList: true });
