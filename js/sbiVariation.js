$(".offer").after('<div id="kzs_simulation"></div>');

const makeHtml = (function () {
	return `
		<div id="kzs_container">    
			<span id="kzs_block_header">所得控除額 わくわく電卓</span>
			<div id="kzs_grid_container">
				<span id="kzs_grid_age_label">年齢</span>
				<select id="kzs_grid_age_value">
					<option selected disabled hidden>
                    年齢を選択してください
                    </option>
				</select>
			
				<span id="kzs_grid_job_label">職業</span>
				<select id="kzs_grid_job_value">
					<option selected disabled hidden>
                        職業を選択してください
                    </option>
				</select>
			
				<span id="kzs_grid_annual_income_label">年収</span>
				<input type="number" value='0' id="kzs_grid_annual_income_value" step="1" min="0"></input>
			</div>
			<p id='kzs_grid_annual_income_caution_message'></p>

			<p id='kzs_grid_insurance_limit_label'>あなたの毎月の掛金上限はこちら↓</p>
			<input type="text" disabled id="kzs_grid_insurance_limit_value" value="">
			<p id="kzs_grid_insurance_limit_caution">※職業によって、掛金上限額は異なります。</p>
				
			<p id="kzs_grid_insurance_input_label">毎月の掛金予定額を入力ください</p>
			<input type="number" id="kzs_grid_insurance_input_value" value="0" step="1000" min="0">
			<p id='kzs_grid_error_message'></p>
			<p id="kzs_grid_insurance_input_caution">※iDeCoの掛金は5,000円以上1,000円刻みです。</p>
			
			<p>⬇️</p>
			<p>iDeCoを活用することで、</p>
			
			<div id="kzs_yaer_deduction_value">
				<span id="kzs_yaer_deduction_caption">年間</span>
				<span id="kzs_yaer_deduction">0</span><span>
				<span id="kzs_yaer_deduction_unit">円</span>
			</div>
			<p id="kzs_sum_deduction_label">60歳まで活用した場合、</p>
			<div id="kzs_sum_deduction_value">
				<span id="kzs_sum_deduction_caption">合計</span>
				<span id="kzs_sum_deduction">0</span>
				<span id="kzs_sum_deduction_unit">円の</span>
			</div>
			<p>所得税が控除されます。</p>
			<p id='kzs_housewife_message'></p>
			<div id="kzs_bottom_message">
				<p>※あくまでも簡易シミュレーションです。　節税金額を示唆・保証するものではありません。</p>
				<p>※課税所得は年収から必要経費や保険料等の各種控除を差し引いた金額であり、個人によってその額は大きく異なってきます。あくまで一例としてご参考ください。</p>
				<p>※税率は2020年12月8日現在の税率にて試算しています。税率が変更となった場合には結果も異なります。</p>
				<p>※復興特別所得税、配偶者控除（配偶者特別控除）は考慮していません。</p>
			</div>
		</div>
		`;
})();
$("#kzs_simulation").append(makeHtml);

// セレクトボックスの初期化
for (let i = kzsCalc.AGE_RANGE.MIN; i <= kzsCalc.AGE_RANGE.MAX; i++) {
	if (i == kzsCalc.AGE_RANGE.MIN) {
		$("#kzs_grid_age_value").append(
			$("<option>").text("年齢を選択してください").val(-1)
		);
	}
	$("#kzs_grid_age_value").append($("<option>").text(i).val(i));
}

for (let i = 0; i < kzsCalc.JOB_LIST.length; i++) {
	if (i == 0) {
		$("#kzs_grid_job_value").append(
			$("<option>").text("職業を選択してください").val(-1)
		);
	}
	$("#kzs_grid_job_value").append(
		$("<option>").text(kzsCalc.JOB_LIST[i].label).val(kzsCalc.JOB_LIST[i].value)
	);
}

// 掛け金上限の初期化
$("#kzs_grid_insurance_limit_value").val(0 + kzsCalc.INSURANCE_LIMIT_ADD_UNIT);

// 各項目のChangeイベントの追加
(function () {
	const calcTaxSaving = function (age, job, annualIncome, insurance) {
		const result = kzsCalc.getTaxSaving(
			age ?? $("#kzs_grid_age_value").val(),
			job ?? $("#kzs_grid_job_value").val(),
			annualIncome ?? $("#kzs_grid_annual_income_value").val().toLocaleString(),
			$("#kzs_grid_insurance_limit_value").val(),
			insurance ?? $("#kzs_grid_insurance_input_value").val().toLocaleString()
		);
		// エラーメッセージ暫定対応
		// show error message
		$("#kzs_grid_error_message").text("");
		result.errorList.forEach(function (x) {
			if (x.message != "") {
				$("#kzs_grid_error_message").text(x.message);
			}
		});
		$("#kzs_grid_error_message").text() == ""
			? $("#kzs_grid_error_message").hide()
			: $("#kzs_grid_error_message").show();

		// 年間の節税金額
		$("#kzs_yaer_deduction").text(result.yearTaxSaving.toLocaleString());
		// 節税金額の合計
		$("#kzs_sum_deduction").text(result.sumDeduction.toLocaleString());
	};

	// 年齢の変更
	$("#kzs_grid_age_value").on("change", function (event) {
		calcTaxSaving(event.currentTarget.value);
	});
	// 職業の変更
	$("#kzs_grid_job_value").on("change", function (event) {
		// 掛け金上限の変更
		$("#kzs_grid_insurance_limit_value").val(
			(event.currentTarget.value == -1
				? 0
				: kzsCalc.JOB_LIST[event.currentTarget.value].money.toLocaleString()) +
				kzsCalc.INSURANCE_LIMIT_ADD_UNIT
		);
		// 各のメッセージを変更
		$("#kzs_grid_annual_income_caution_message").text("");
		$("#kzs_grid_annual_income_value").prop("disabled", false);
		$("#kzs_housewife_message").hide();
		if (event.currentTarget.value == kzsCalc.JOB_LIST[0].value) {
			// 自営業の場合
			$("#kzs_grid_annual_income_caution_message").text(
				"自営業(個人事業主)の場合、課税所得額を入力ください。"
			);
		} else if (event.currentTarget.value == kzsCalc.JOB_LIST[1].value) {
			// 専業主婦(夫)の場合
			$("#kzs_grid_annual_income_caution_message").text(
				"専業主婦(夫)の場合、所得自体がないため年収入力はできません。"
			);
			$("#kzs_housewife_message").show();
			$("#kzs_grid_annual_income_value").prop("disabled", true);
			$("#kzs_grid_annual_income_value").val(0);
		}

		calcTaxSaving(null, event.currentTarget.value);
	});
	// 年収の変更
	$("#kzs_grid_annual_income_value").on("change", function (event) {
		calcTaxSaving(null, null, event.currentTarget.value);
	});
	// 毎月の掛け金の変更
	$("#kzs_grid_insurance_input_value").on("change", function (event) {
		calcTaxSaving(null, null, null, null, event.currentTarget.value);
	});
})();
