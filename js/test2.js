/**
 * 1.random生成されているパラメータを削除する
 */
const deleteParam = () => {};

/**
 * 2.不要ファイル、HTMLタグを削除
 */
const deleteUnNeccesaryFile = () => {};

/**
 * 3.必要なファイル、タグの追加
 */
const addNeccesaryFileAndTag = () => {};

/**
 * 相対パスを絶対パスへ変更する
 */
const changePath = () => {};

/**
 * HTMLファイルとして保存する
 */
const saveToHtmlFile = () => {};

function main(workbook: ExcelScript.Workbook) {
	// Your code here
	let activeSheet = workbook.getActiveWorksheet();
	activeSheet.getRange("A1").setValue("1");
	activeSheet.getRange("B1").setValue("1");

	// 1.random生成されているパラメータを削除する
	deleteParam();
	// 2.不要ファイル、HTMLタグを削除
	deleteUnNeccesaryFile();
	// 3.必要なファイル、タグの追加
	addNeccesaryFileAndTag();
	// 4.相対パスを絶対パスへ変更する
	changePath();
	// 5.HTMLファイルとして保存する
	saveToHtmlFile();
}
