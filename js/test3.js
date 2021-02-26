(() => {
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
            
                <span id='kzs_grid_insurance_label'>あなたの毎月の掛金上限はこちら↓</span>
                <input type="text" disabled id="kzs_grid_insurance_value" value="23,000円/月">
                <span id="kzs_grid_insurance_caution">※職業によって、掛金上限額は異なります。</span>
            
                
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

	const Util = function () {
		this.init.apply(this, arguments);
	};

	Util.prototype = {
		init: function () {},
		convertInt: function (value) {
			return value ? parseInt(value) : 0;
		},
		convertFloat: function (value) {
			return value ? parseFloat(value) : 0;
		},
		roundDown: function (value, digit) {
			return Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit);
		},
	};

	const Calc = function () {
		this.init.apply(this, arguments);
	};
	// 計算クラス
	Calc.prototype = {
		init: function () {
			this.Util = new Util();
			// 給与所得控除率, 固定控除額
			this.salaryIncomeDeductionRateIncome = [
				{ annualIncome: 162.5, rate: 0, money: 55 },
				{ annualIncome: 180.0, rate: 0.4, money: -10 },
				{ annualIncome: 360.0, rate: 0.3, money: 8 },
				{ annualIncome: 660.0, rate: 0.2, money: 44 },
				{ annualIncome: 850.0, rate: 0.1, money: 110 },
				{ annualIncome: -1, rate: 0, money: 195 },
			];
			// 社会保険料控除率
			this.socialInsuranceDeductionRate = [
				{ insurance: "health", rate: 0.0494 },
				{ insurance: "welfarePension ", rate: 0.0915 },
				{ insurance: "employment", rate: 0.003 },
				{ insurance: "care", rate: 0.0079 },
			];
			// 所得税率, 所得税固定控除（円）
			this.incomeTaxRateFixedDeduction = [
				{ taxableIncome: 195, rate: 0.05105, money: 0 },
				{ taxableIncome: 330, rate: 0.1021, money: 97500 },
				{ taxableIncome: 695, rate: 0.2042, money: 427500 },
				{ taxableIncome: 900, rate: 0.23483, money: 636000 },
				{ taxableIncome: 1800, rate: 0.33693, money: 1536000 },
				{ taxableIncome: 4000, rate: 0.4084, money: 2796000 },
				{ taxableIncome: -1, rate: 0.45945, money: 4796000 },
			];
			// 住民税率
			this.RESIDENT_TAX_RATE = 0.1;
			// 介護保険加入年齢
			this.CARE_INSURANCE_AGE = 40;
			// 基礎控除(万円)
			this.BASIC_DEDUCTION = 38;
		},

		// 年間の積立金額
		getYearInsurance: function () {
			// 毎月の掛け金 * 12 /10000
			return (
				(this.Util.convertInt($("#kzs_grid_insurance_input_value").val()) *
					12) /
				10000
			);
		},
		// 節税額
		getTaxSaving: function () {
			// 毎月の掛金金額 <= 掛金上限の場合は計算, それ以外は'-'
			const insuranceInputValue = this.Util.convertInt(
				$("#kzs_grid_insurance_input_value")
			);
			const insuranceValue = this.Util.convertInt(
				$("#kzs_grid_insurance_value")
			);

			if (insuranceInputValue <= insuranceValue) {
				// TODO: 計算をした値を返却
				return "";
			}
			return "-";
		},

		// 年収から給与所得控除率, 控除額を取得
		getSalaryIncomeDeduction: function () {
			const annualIncome = this.Util.convertFloat(
				$("#kzs_grid_annual_income_value").val()
			);
			const result = this.salaryIncomeDeductionRateIncome.find(function (x) {
				return annualIncome <= x.annualIncome;
			});
			return (
				result ??
				this.salaryIncomeDeductionRateIncome[
					this.salaryIncomeDeductionRateIncome.length - 1
				]
			);
		},
		// 給与所得控除率
		getSalaryIncomeDeductionRate: function () {
			return this.getSalaryIncomeDeduction().rate;
		},
		// 固定控除額
		getFixedDeductionAmount: function () {
			return this.getSalaryIncomeDeduction().money;
		},
		// 社会保険控除率
		getSocialInsuranceDeductionRate: function () {
			const sumRate = this.socialInsuranceDeductionRate.reduce(function (s, e) {
				return s + e.rate;
			}, 0);

			// 40才以下は介護保険控除を減算
			if ($("#kzs_grid_age_value").val() < this.CARE_INSURANCE_AGE) {
				return (
					sumRate -
					this.socialInsuranceDeductionRate.find(function (x) {
						return x.insurance == "care";
					}).rate
				);
			}
			return sumRate;
		},
		// 課税所得
		getTaxableIncome: function () {
			// 年収
			const annualIncome = this.Util.convertFloat(
				$("#kzs_grid_annual_income_value").val()
			);
			// 少数第2位を切り捨て(年収-(年収*給与所得控除率+固定控除額)-年収*社会保険控除率-基礎控除)
			const result = this.Util.roundDown(
				annualIncome -
					(annualIncome * this.getSalaryIncomeDeductionRate() +
						this.getFixedDeductionAmount()) -
					annualIncome * this.getSocialInsuranceDeductionRate() -
					this.BASIC_DEDUCTION,
				1
			);
			return result > 0 ? result : 0;
		},
		// iDeCo前課税所得
		getIdecoBeforeTaxableIncome: function () {
			// 個人事業主なら年収、個人事業主以外は課税所得
			if ($("#kzs_grid_job_value").val() == JOB_LIST[0].value) {
				return this.Util.convertFloat($("#kzs_grid_annual_income_value").val());
			}
			return this.getTaxableIncome();
		},
		// 年収から給与所得控除率, 控除額を取得
		getIncomeTaxRateFixedDeduction: function (taxableIncome) {
			// 課税所得がどの所得税率になるか算出
			const result = this.incomeTaxRateFixedDeduction.find(function (x) {
				return taxableIncome <= x.taxableIncome;
			});

			return result === undefined
				? this.incomeTaxRateFixedDeduction[
						this.incomeTaxRateFixedDeduction.length - 1
				  ]
				: result;
		},
		// iDeCo前所得税率
		getIdecoBeforeIncomeTaxRate: function () {
			return this.getIncomeTaxRateFixedDeduction(
				this.getIdecoBeforeTaxableIncome()
			).rate;
		},
		// iDeCo前所得税額
		getIdecoBeforeIncomeTax: function () {
			// ROUNDDOWN(iDeCo前課税所得 * iDeCo前所得税率 * 10000, -2) - 給与所得控除額
			return (
				this.Util.roundDown(
					this.getIdecoBeforeTaxableIncome() *
						this.getIdecoBeforeIncomeTaxRate() *
						10000,
					-2
				) -
				this.getIncomeTaxRateFixedDeduction(this.getIdecoBeforeTaxableIncome())
					.money
			);
		},
		// iDeCo前住民税額
		getIdecoBeforeResidentTax: function () {
			// iDeCo前課税所得 * iDeCo前住民税率 * 10000
			return (
				this.getIdecoBeforeTaxableIncome() * this.RESIDENT_TAX_RATE * 10000
			);
		},

		// iDeCo前合計税額
		getIdecoBeforeSumTaxSaving: function () {
			// iDeCo前所得税額 + iDeCo前住民税額
			return this.getIdecoBeforeIncomeTax() + this.getIdecoBeforeResidentTax();
		},

		// iDeCo後課税所得
		getIdecoafterTaxableIncome: function () {
			if ($("#kzs_grid_job_value").val() == JOB_LIST[0].value) {
				// 自営業の場合(年収 - 年間の積立金額)
				return (
					$("#kzs_grid_annual_income_value").val() - this.getYearInsurance()
				);
			}
			// 自営業以外の場合(iDeCo前課税所得 - 年間の積立金額)
			return $("#kzs_grid_annual_income_value").val() - this.getYearInsurance();
		},
		// iDeCo後所得税率
		getIdecoAfterIncomeTaxRate: function () {
			return this.getIncomeTaxRateFixedDeduction(
				this.getIdecoafterTaxableIncome()
			).rate;
		},
		// iDeCo後所得税額
		getIdecoAfterIncomeTax: function () {
			// =ROUNDDOWN(iDeCo後課税所得 * iDeCo後所得税率 * 10000, -2) - 所得税固定控除)
			return (
				this.Util.roundDown(
					this.getIdecoafterTaxableIncome() *
						this.getIdecoAfterIncomeTaxRate() *
						10000,
					-2
				) -
				this.getIncomeTaxRateFixedDeduction(this.getIdecoafterTaxableIncome())
					.money
			);
		},
		// iDeCo後住民税額
		getIdecoAfterResidentTax: function () {
			// iDeCo後課税所得 * iDeCo後住民税率 * 10000
			return this.getIdecoafterTaxableIncome() * this.RESIDENT_TAX_RATE * 10000;
		},

		// iDeCo後合計税額
		getIdecoAfterSumTax: function () {
			// iDeCo後所得税額 + iDeCo後住民税額
			return this.getIdecoAfterIncomeTax() + this.getIdecoAfterResidentTax();
		},

		// 年間節税額
		getYearTaxSaving: function () {
			// iDeCo前合計税額 - iDeCo後合計税額
			return this.getIdecoBeforeSumTaxSaving() - this.getIdecoAfterSumTax();
		},
	};

	const calc = new Calc();
	// 各項目のChangeイベントの追加
	(function () {
		// 年齢の変更
		$("#kzs_grid_age_value").on("change", function (event) {
			console.log("年間の積み立て = " + calc.getYearInsurance());
			console.log("社会保険控除率 = " + calc.getSocialInsuranceDeductionRate());
			console.log("課税所得 = " + calc.getTaxableIncome());
			console.log("iDeCo前課税所得 = " + calc.getIdecoBeforeTaxableIncome());
			console.log("iDeCo前所得税率 = " + calc.getIdecoBeforeIncomeTaxRate());
			console.log("iDeCo前所得税額 = " + calc.getIdecoBeforeIncomeTax());
			console.log("iDeCo前住民税額 = " + calc.getIdecoBeforeResidentTax());
			console.log("iDeCo前合計税額 = " + calc.getIdecoBeforeSumTaxSaving());
			console.log("iDeCo後課税所得 = " + calc.getIdecoafterTaxableIncome());
			console.log("iDeCo後所得税額 = " + calc.getIdecoAfterIncomeTax());
			console.log("iDeCo後住民税額 = " + calc.getIdecoAfterResidentTax());
			console.log("iDeCo後合計税額 = " + calc.getIdecoAfterSumTax());
			console.log("年間節税額 = " + calc.getYearTaxSaving());
		});
		// 職業の変更
		$("#kzs_grid_job_value").on("change", function (event) {
			// 掛け金の変更 TODO: カンマ編集
			$("#kzs_grid_insurance_value").val(
				JOB_LIST[event.currentTarget.value].money + "円/月"
			);
			// TODO：表示関連の部分は計算部分の検証より優先順位が低いので後回し
			console.log(
				"getSalaryIncomeDeductionRate = " + calc.getSalaryIncomeDeductionRate()
			);
			console.log(
				"getFixedDeductionAmount = " + calc.getFixedDeductionAmount()
			);
		});
		// 年収の変更
		$("#kzs_grid_annual_income_value").on("change", function (event) {
			console.log("課税所得 = " + calc.getTaxableIncome());
		});
	})();

	var s = `
	#kzs_container {
		margin: 30px;
		text-align: center;
	}
	
	#kzs_block_header {
		padding: 1% 20% 1% 20%;
		background: rgb(246, 156, 85);
		border: 1px red solid;
		border-radius: 10px;
		
	 }
	 #kzs_container_table {
		 display: table;
		 table-layout:fixed;
	 }
	 #kzs_table_row {
		display: table-row;
	 }
	 #kzs_table_cell {
		display: table-cell;

	 }
	 #kzs_grid_container {
		margin: 2em;
		display: grid;
		grid-template-columns: 30% 60%;
		place-items: center;
		justify-items: left;
		column-gap: 2em;
		row-gap: 1em;
		
	}
	#kzs_grid_age_label {
		grid-column: 1;
		grid-row: 1;
		width: 100%;
		text-align: end;
	}

	#kzs_grid_age_input {
		grid-column: 2;
		grid-row: 1;
		text-align: center;
	}

	#kzs_grid_job_label {
		grid-column: 1;
		grid-row: 2;
		width: 100%;
		text-align: end;
	}

	#kzs_grid_job_input {
		grid-column: 2;
		grid-row: 2;
	}

	#kzs_grid_annual_income_label {
		grid-column: 1;
		grid-row: 3;
		width: 100%;
		text-align: end;
	}

	#kzs_grid_annual_income_value {
		grid-column: 2;
		grid-row: 3;
		text-align: end;
	}

	#kzs_grid_annual_income_input {
		grid-column: 2;
		grid-row: 3;
	}

	#kzs_grid_insurance_label {
		grid-column: 1/3;
		grid-row: 4;
		width: 100%;
	}

	#kzs_grid_insurance_value {
		grid-column: 2/3;
		grid-row: 5;
		text-align: center;
	}

	#kzs_grid_insurance_caution {
		grid-column: 2/3;
		grid-row: 6;
	}

	#kzs_grid_insurance_input_label {
		grid-column: 2/3;
		grid-row: 7;
	}

	#kzs_grid_insurance_input_value {
		grid-column: 2/3;
		grid-row: 8;
		text-align: end;
	}

	#kzs_grid_insurance_input_error_limmt {
		grid-column: 2/3;
		grid-row: 9;
	}

	#kzs_grid_insurance_input_caution {
		grid-column: 2/3;
		grid-row: 10;
	}

	#kzs_yazirusi {
		text-align: center;
		margin-bottom: 1em;
	}

	#kzs_yaer_deduction_label {
		margin-bottom: 1em;
	}

	#kzs_yaer_deduction_value {
		margin-bottom: 1em;
	}

	#kzs_yaer_deduction_value #yaer_deduction {
		color: red;
		font: bold;
	}

	#kzs_sum_deduction_label {
		margin-bottom: 1em;
	}

	#kzs_sum_deduction_value {
		margin-bottom: 1em;
	}

	#kzs_sum_deduction_value #sum_deduction {
		color: red;
		font: bold;
	}

	#kzs_bottom_message {
		background-color: gray;
	}
  `;

	var st = $('<style type="text/css"></style>');
	var ss = st.prop("styleSheet");
	var st = $('<style type="text/css"></style>');
	var ss = st.prop("styleSheet");
	if (ss) ss.cssText = s;
	else st.html(s);
	$("head").append(st);
})();
