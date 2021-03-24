// var observer = new MutationObserver(function(){
//   /** DOMの変化が起こった時の処理 */
//   console.log('DOMが変化しました');
// });

// /** 監視対象の要素オブジェクト */
// const elem = document.getElementsByClassName('contentsBodyInr');

// /** 監視時のオプション */
// const config = {
//   attributes: true,
//   childList: true,
//   characterData: true
// };

// /** 要素の変化監視をスタート */
// observer.observe(elem[0], config);

var observer = new MutationObserver(function () {
	/** DOMの変化が起こった時の処理 */
	console.log("DOMが変化しました");
});

/** 監視対象の要素オブジェクト */
const elem = $(".contentsBodyInr")[0];

/** 監視時のオプション */
const config = {
	attributes: true,
	childList: true,
	characterData: true,
};

/** 要素の変化監視をスタート */
observer.observe(elem, { subtree: true, childList: true });
