$(".first-section > div:eq(1)").after('<div id="simulation"></div>');

const makeHtml = (function () {
	return `
		<div id="kzs_container">    
            <span id="kzs_block_header">所得控除額 わくわく電卓</span>
            <div id="kzs_grid_container">
                <span id="kzs_grid_age_label">年齢</span>
                <select id="kzs_grid_age_value">
                </select>
            
                <span id="kzs_grid_job_label">職業</span>
                <select id="kzs_grid_job_value">
                </select>
            
                <span id="kzs_grid_annual_income_label">年収</span>
                <input type="number" value='0' id="kzs_grid_annual_income_value" step="10000"></input>
            
                <span id='kzs_grid_insurance_limit_label'>あなたの毎月の掛金上限はこちら↓</span>
                <input type="text" disabled id="kzs_grid_insurance_limit_value" value="23,000円/月">
                <span id="kzs_grid_insurance_limit_caution">※職業によって、掛金上限額は異なります。</span>
            
                
                <span id="kzs_grid_insurance_input_label">毎月の掛金予定額を入力ください</span>
                <input type="number" id="kzs_grid_insurance_input_value" value="0" step="1000" >
                <span id="kzs_grid_insurance_input_error_limmt">※掛け金の上限を超えています</span>
                <span></span><span id="kzs_grid_insurance_input_caution">※iDeCoの掛金は5,000円以上1,000円刻みです。</span>
            </div>
            <div>
                <p id="#kzs_yazirusi">⬇️</p>
                <div>
                    <span id="kzs_yaer_deduction_label">iDeCoを活用することで、</span><br>
                </div>
                <div id="kzs_yaer_deduction_value">
                    年間
                    <span id="kzs_yaer_deduction">0</span><span>円
                </div>
                <span id="kzs_sum_deduction_label">60歳まで活用した場合、</span><br>
                <div id="kzs_sum_deduction_value">
                    合計
                    <span id="kzs_sum_deduction">0</span>
                    円の
                </div>
                <div>
                    所得税が控除されます。
                </div>
                <div>
                    専業主婦(夫)の場合、所得自体がないため「所得控除」はありません。運用益、受取り時の節税メリットのみです。
                </div>
                <div id="kzs_bottom_message">
                    <p>※あくまでも簡易シミュレーションです。　節税金額を示唆・保証するものではありません。</p>
                    
                    <p>※課税所得は年収から必要経費や保険料等の各種控除を差し引いた金額であり、個人によってその額は大きく異なってきます。あくまで一例としてご参考ください。</p>
                    <p>※税率は2020年12月8日現在の税率にて試算しています。税率が変更となった場合には結果も異なります。</p>
                    <p>※復興特別所得税、配偶者控除（配偶者特別控除）は考慮していません。</p>
                </div>
        </div>
		`;
})();
$("#simulation").append(makeHtml);

// セレクトボックスの初期化
// 年齢
const AGE_RANGE = { MIN: 20, MAX: 59 };
// 掛け金上限の単位
const INSURANCE_LIMIT_ADD_UNIT = "円/月";
// 職業
const JOB_LIST = [
	{ label: "自営業(個人事業主)", value: 0, money: 68000 },
	{ label: "専業主婦（夫）", value: 1, money: 23000 },
	{
		label: "会社員(企業型DCなし、確定給付企業年金(DB)なし)",
		value: 2,
		money: 23000,
	},
	{
		label: "会社員(企業型DCあり、確定給付企業年金(DB)なし)",
		value: 3,
		money: 20000,
	},
	{
		label: "会社員(企業型DCなし、確定給付企業年金(DB)あり)",
		value: 4,
		money: 12000,
	},
	{
		label: "会社員(企業型DCあり、確定給付企業年金(DB)あり)",
		value: 5,
		money: 12000,
	},
	{ label: "公務員", value: 6, money: 12000 },
];

for (let i = AGE_RANGE.MIN; i <= AGE_RANGE.MAX; i++) {
	$("#kzs_grid_age_value").append($("<option>").text(i).val(i));
}

for (let i = 0; i < JOB_LIST.length; i++) {
	$("#kzs_grid_job_value").append(
		$("<option>").text(JOB_LIST[i].label).val(JOB_LIST[i].value)
	);
}

// 各項目のChangeイベントの追加
(function () {
	// 年齢の変更
	$("#kzs_grid_age_value").on("change", function (event) {
		const taxSaving = window.kzCalc.getTaxSaving(
			event.currentTarget.value,
			$("#kzs_grid_job_value").val(),
			$("#kzs_grid_annual_income_value").val(),
			window.kzUtil
				.removeComma($("#kzs_grid_insurance_limit_value").val())
				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
			$("#kzs_grid_insurance_input_value").val()
		);
		// 年間の節税金額
		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
		// 節税金額の合計
		$("#kzs_sum_deduction").text(
			(
				taxSaving *
				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
			).toLocaleString()
		);
	});
	// 職業の変更
	$("#kzs_grid_job_value").on("change", function (event) {
		// 掛け金上限の変更
		$("#kzs_grid_insurance_value").val(
			JOB_LIST[event.currentTarget.value].money.toLocaleString() +
				INSURANCE_LIMIT_ADD_UNIT
		);
		const taxSaving = window.kzCalc.getTaxSaving(
			$("#kzs_grid_age_value").val(),
			event.currentTarget.value,
			$("#kzs_grid_annual_income_value").val(),
			window.kzUtil
				.removeComma($("#kzs_grid_insurance_limit_value").val())
				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
			$("#kzs_grid_insurance_input_value").val()
		);
		// 年間の節税金額
		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
		// 節税金額の合計
		$("#kzs_sum_deduction").text(
			(
				taxSaving *
				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
			).toLocaleString()
		);
	});
	// 年収の変更
	$("#kzs_grid_annual_income_value").on("change", function (event) {
		const taxSaving = window.kzCalc.getTaxSaving(
			$("#kzs_grid_age_value").val(),
			$("#kzs_grid_job_value").val(),
			event.currentTarget.value,
			window.kzUtil
				.removeComma($("#kzs_grid_insurance_limit_value").val())
				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
			$("#kzs_grid_insurance_input_value").val()
		);
		// 年間の節税金額
		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
		// 節税金額の合計
		$("#kzs_sum_deduction").text(
			(
				taxSaving *
				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
			).toLocaleString()
		);
	});
	// 毎月の掛け金の変更
	$("#kzs_grid_insurance_input_value").on("change", function (event) {
		const taxSaving = window.kzCalc.getTaxSaving(
			$("#kzs_grid_age_value").val(),
			$("#kzs_grid_job_value").val(),
			$("#kzs_grid_annual_income_value").val(),
			window.kzUtil
				.removeComma($("#kzs_grid_insurance_limit_value").val())
				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
			event.currentTarget.value
		);
		// 年間の節税金額
		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
		// 節税金額の合計
		$("#kzs_sum_deduction").text(
			(
				taxSaving *
				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
			).toLocaleString()
		);
	});
})();
