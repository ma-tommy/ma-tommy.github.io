let workbook: ExcelScript.Workbook = null;
const START_CELL = "A4";
const COLUMN = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

const getEditEndRow = () => {};

/**
 * 1.random生成されているパラメータを削除する
 * @param workbook book情報
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
const saveToHtmlFile = () => {
	// 範囲選択
	var selectedSheet = workbook.getWorksheet("original");
	// 最終行の算出
	let sheet = workbook.getActiveWorksheet();
	let usedRange = sheet.getUsedRange();
	let intRange = usedRange.getIntersection("A:Z");
	let lastRange = intRange.getLastCell();
	// 最終行
	const lastRow = lastRange.getRowIndex() + 1 + "";
	// 最終列
	const lastColumStr = COLUMN[lastRange.getColumnIndex()];
	// 範囲選択
	const rangeValue = selectedSheet
		.getRange(START_CELL.concat(":").concat(lastColumStr.concat(lastRow)))
		.getValues();
	// change sheetを選択
	selectedSheet = workbook.getWorksheet("change");
	// A4を選択し貼り付け
	selectedSheet
		.getRange(START_CELL)
		.getResizedRange(rangeValue.length - 1, rangeValue[0].length - 1)
		.setValues(rangeValue);
};

function main(wk: ExcelScript.Workbook) {
	workbook = wk;
	workbook.getWorksheet("change").delete();
	workbook.addWorksheet("change");
	//activeSheet.getRange("A1").setValue("1");

	// 1.random生成されているパラメータを削除する
	//deleteParam();
	// 2.不要ファイル、HTMLタグを削除
	//deleteUnNeccesaryFile();
	// 3.必要なファイル、タグの追加
	//addNeccesaryFileAndTag();
	// 4.相対パスを絶対パスへ変更する
	//changePath();
	// 5.HTMLファイルとして保存する
	saveToHtmlFile();
}
