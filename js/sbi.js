(() => {
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
			<p id="kzs_grid_insurance_input_error_limmt">※掛け金の上限を超えています</p>
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
		if (i == AGE_RANGE.MIN) {
			$("#kzs_grid_age_value").append(
				$("<option>").text("年齢を選択してください").val(-1)
			);
		}
		$("#kzs_grid_age_value").append($("<option>").text(i).val(i));
	}

	for (let i = 0; i < JOB_LIST.length; i++) {
		if (i == 0) {
			$("#kzs_grid_job_value").append(
				$("<option>").text("職業を選択してください").val(-1)
			);
		}
		$("#kzs_grid_job_value").append(
			$("<option>").text(JOB_LIST[i].label).val(JOB_LIST[i].value)
		);
	}

	// 掛け金上限の初期化
	$("#kzs_grid_insurance_limit_value").val(0 + INSURANCE_LIMIT_ADD_UNIT);

	// 簡易UnitTest
	const assert = (message, expect) => {
		console.log(message + expect ? "OK" : "NG");
	};

	class Util {
		convertInt(value) {
			return value ? parseInt(value) : 0;
		}
		convertFloat(value) {
			return value ? parseFloat(value) : 0;
		}
		roundDown(value, digit) {
			return Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit);
		}
		removeComma(number) {
			return number.replace(/,/g, "");
		}
	}

	const util = new Util();
	assert("convertInt target empty = ", util.convertInt() === 0);
	assert('convertInt target "1" = ', util.convertInt("1") === 1);
	assert('convertInt target "A" = ', !isNaN(util.convertInt("A")));
	assert("convertFloat target empty = ", util.convertFloat() === 0);
	assert('convertFloat target "1.2" = ', util.convertFloat("1.2") === 1.2);
	assert('convertFloat target "A" = ', !isNaN(util.convertFloat("A")));
	assert(util.roundDown(1.2345, 1) === 1.2);
	assert(util.removeComma("1,000") === "1000");

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
		removeComma: function (number) {
			return number.replace(/,/g, "");
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

		/**
		 * 節税額を取得
		 * @param age 年齢
		 * @param job 職業
		 * @param annualIncome 年収
		 * @param insuranceLimit 掛け金上限
		 * @param insurance 掛け金
		 */
		getTaxSaving: function (
			age,
			job,
			annualIncome,
			insuranceLimit,
			insurance,
			jobList
		) {
			// 年齢
			this.age = this.Util.convertInt(age);
			// 職業
			this.job = job;
			// 年収
			this.annualIncome = this.Util.convertFloat(annualIncome);
			// 掛け金上限
			this.insuranceLimit = insuranceLimit;
			// 毎月の掛け金
			this.insurance = this.Util.convertInt(insurance);
			// 職業リスト
			this.jobList = jobList;

			if (!this.age || !this.job || !this.annualIncome || !this.insurance) {
				console.log(
					`年齢：${this.age} 職業： ${this.job} 年収：${this.annualIncome} 毎月の掛け金：${this.insurance}`
				);
				return 0;
			}
			console.log("年齢 = " + this.age);
			console.log("職業 = " + this.job);
			console.log("年収 = " + this.annualIncome);
			console.log("掛け金上限 = " + this.insuranceLimit);
			console.log("毎月の掛け金 = " + this.insurance);
			console.log("年間の積み立て = " + this._getYearInsurance());

			console.log("給与所得控除率 = " + this._getSalaryIncomeDeductionRate());
			console.log("固定控除額 = " + this._getFixedDeductionAmount());
			console.log(
				"社会保険控除率 = " + this._getSocialInsuranceDeductionRate()
			);
			console.log("課税所得 = " + this._getTaxableIncome());
			console.log("iDeCo前課税所得 = " + this._getIdecoBeforeTaxableIncome());
			console.log("iDeCo前所得税率 = " + this._getIdecoBeforeIncomeTaxRate());
			console.log("iDeCo前所得税額 = " + this._getIdecoBeforeIncomeTax());
			console.log("iDeCo前住民税額 = " + this._getIdecoBeforeResidentTax());
			console.log("iDeCo前合計税額 = " + this._getIdecoBeforeSumTaxSaving());
			console.log("iDeCo後課税所得 = " + this._getIdecoafterTaxableIncome());
			console.log("iDeCo後所得税率 = " + this._getIdecoAfterIncomeTaxRate());
			console.log("iDeCo後所得税額 = " + this._getIdecoAfterIncomeTax());
			console.log("iDeCo後住民税額 = " + this._getIdecoAfterResidentTax());
			console.log("iDeCo後合計税額 = " + this._getIdecoAfterSumTax());
			console.log("年間節税額 = " + this._getYearTaxSaving());

			// 毎月の積立金額 <= 掛金上限（メッセージを出すので画面側)
			// if (this.insurance <= this.insuranceLimit) {
			// 	const result = this._getYearTaxSaving();
			// 	console.log("毎月の積立金額 <= 掛金上限 = " + result);
			// 	// return this._getYearTaxSaving();
			// 	return result;
			// }
			return this._getYearTaxSaving();
		},

		// 年間の積立金額
		_getYearInsurance: function () {
			// 毎月の掛け金 * 12 /10000
			return (
				(this.Util.convertInt($("#kzs_grid_insurance_input_value").val()) *
					12) /
				10000
			);
		},

		// 年収から給与所得控除率, 控除額を取得
		_getSalaryIncomeDeduction: function () {
			const that = this;
			const result = this.salaryIncomeDeductionRateIncome.find(function (x) {
				return that.annualIncome <= x.annualIncome;
			});
			return (
				result ??
				this.salaryIncomeDeductionRateIncome[
					this.salaryIncomeDeductionRateIncome.length - 1
				]
			);
		},
		// 給与所得控除率
		_getSalaryIncomeDeductionRate: function () {
			return this._getSalaryIncomeDeduction().rate;
		},
		// 固定控除額
		_getFixedDeductionAmount: function () {
			return this._getSalaryIncomeDeduction().money;
		},
		// 社会保険控除率
		_getSocialInsuranceDeductionRate: function () {
			const sumRate = this.socialInsuranceDeductionRate.reduce(function (s, e) {
				return s + e.rate;
			}, 0);

			// 40才以下は介護保険控除を減算
			if (this.age < this.CARE_INSURANCE_AGE) {
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
		_getTaxableIncome: function () {
			// 少数第2位を切り捨て(年収-(年収*給与所得控除率+固定控除額)-年収*社会保険控除率-基礎控除)
			const result = this.Util.roundDown(
				this.annualIncome -
					(this.annualIncome * this._getSalaryIncomeDeductionRate() +
						this._getFixedDeductionAmount()) -
					this.annualIncome * this._getSocialInsuranceDeductionRate() -
					this.BASIC_DEDUCTION,
				1
			);
			return result > 0 ? result : 0;
		},
		// iDeCo前課税所得
		_getIdecoBeforeTaxableIncome: function () {
			// 個人事業主なら年収、個人事業主以外は課税所得
			if (this.job == this.jobList[0].value) {
				return this.annualIncome;
			}
			return this._getTaxableIncome();
		},
		// 年収から給与所得控除率, 控除額を取得
		_getIncomeTaxRateFixedDeduction: function (taxableIncome) {
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
		_getIdecoBeforeIncomeTaxRate: function () {
			return this._getIncomeTaxRateFixedDeduction(
				this._getIdecoBeforeTaxableIncome()
			).rate;
		},
		// iDeCo前所得税額
		_getIdecoBeforeIncomeTax: function () {
			// ROUNDDOWN(iDeCo前課税所得 * iDeCo前所得税率 * 10000, -2) - 給与所得控除額
			return (
				this.Util.roundDown(
					this._getIdecoBeforeTaxableIncome() *
						this._getIdecoBeforeIncomeTaxRate() *
						10000,
					-2
				) -
				this._getIncomeTaxRateFixedDeduction(
					this._getIdecoBeforeTaxableIncome()
				).money
			);
		},
		// iDeCo前住民税額
		_getIdecoBeforeResidentTax: function () {
			// iDeCo前課税所得 * iDeCo前住民税率 * 10000
			return (
				this._getIdecoBeforeTaxableIncome() * this.RESIDENT_TAX_RATE * 10000
			);
		},

		// iDeCo前合計税額
		_getIdecoBeforeSumTaxSaving: function () {
			// iDeCo前所得税額 + iDeCo前住民税額
			return (
				this._getIdecoBeforeIncomeTax() + this._getIdecoBeforeResidentTax()
			);
		},

		// iDeCo後課税所得
		_getIdecoafterTaxableIncome: function () {
			if (this.job == this.jobList[0].value) {
				// 自営業の場合(年収 - 年間の積立金額)
				return this.annualIncome - this._getYearInsurance();
			}
			// 自営業以外の場合(iDeCo前課税所得 - 年間の積立金額)
			return this._getIdecoBeforeTaxableIncome() - this._getYearInsurance();
		},
		// iDeCo後所得税率
		_getIdecoAfterIncomeTaxRate: function () {
			return this._getIncomeTaxRateFixedDeduction(
				this._getIdecoafterTaxableIncome()
			).rate;
		},
		// iDeCo後所得税額
		_getIdecoAfterIncomeTax: function () {
			// =ROUNDDOWN(iDeCo後課税所得 * iDeCo後所得税率 * 10000, -2) - 所得税固定控除)
			return (
				this.Util.roundDown(
					this._getIdecoafterTaxableIncome() *
						this._getIdecoAfterIncomeTaxRate() *
						10000,
					-2
				) -
				this._getIncomeTaxRateFixedDeduction(this._getIdecoafterTaxableIncome())
					.money
			);
		},
		// iDeCo後住民税額
		_getIdecoAfterResidentTax: function () {
			// iDeCo後課税所得 * iDeCo後住民税率 * 10000
			return (
				this._getIdecoafterTaxableIncome() * this.RESIDENT_TAX_RATE * 10000
			);
		},

		// iDeCo後合計税額
		_getIdecoAfterSumTax: function () {
			// iDeCo後所得税額 + iDeCo後住民税額
			return this._getIdecoAfterIncomeTax() + this._getIdecoAfterResidentTax();
		},

		// 年間節税額
		_getYearTaxSaving: function () {
			// iDeCo前合計税額 - iDeCo後合計税額
			return this._getIdecoBeforeSumTaxSaving() - this._getIdecoAfterSumTax();
		},
	};

	window.kzsCalc = new Calc();
	window.kzsUtil = new Util();

	// 各項目のChangeイベントの追加
	(function () {
		const getInsuranceLimit = function (value) {
			return window.kzsUtil.convertInt(
				window.kzsUtil.removeComma(value).replace(INSURANCE_LIMIT_ADD_UNIT, "")
			);
		};

		const calcTaxSaving = function (age, job, annualIncome, insurance) {
			const taxSaving = window.kzsCalc.getTaxSaving(
				age ?? $("#kzs_grid_age_value").val(),
				job ?? $("#kzs_grid_job_value").val(),
				annualIncome ?? $("#kzs_grid_annual_income_value").val(),
				getInsuranceLimit($("#kzs_grid_insurance_limit_value").val()),
				insurance ?? $("#kzs_grid_insurance_input_value").val(),
				JOB_LIST
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
					: JOB_LIST[event.currentTarget.value].money.toLocaleString()) +
					INSURANCE_LIMIT_ADD_UNIT
			);
			// 各のメッセージを変更
			$("#kzs_grid_annual_income_caution_message").text("");
			$("#kzs_grid_annual_income_value").prop("disabled", false);
			$("#kzs_housewife_message").hide();
			if (event.currentTarget.value == JOB_LIST[0].value) {
				// 自営業の場合
				$("#kzs_grid_annual_income_caution_message").text(
					"自営業(個人事業主)の場合、課税所得額を入力ください。"
				);
			} else if (event.currentTarget.value == JOB_LIST[1].value) {
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
			// 上限を超えた設定の場合
			if (
				getInsuranceLimit($("#kzs_grid_insurance_limit_value").val()) <
				event.currentTarget.value
			) {
				$("#kzs_grid_insurance_input_error_limmt").show();
				// 年間の節税金額
				$("#kzs_yaer_deduction").text(0);
				// 節税金額の合計
				$("#kzs_sum_deduction").text(0);
			} else {
				$("#kzs_grid_insurance_input_error_limmt").hide();
				calcTaxSaving(null, null, null, null, event.currentTarget.value);
			}
		});
	})();

	var s = `
	#kzs_simulation {
		color: black;
	}
	#kzs_container {
		margin: 30px;
		text-align: center;
	}
	
	#kzs_block_header {
		padding: 1% 40% 1% 40%;
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

	#kzs_grid_insurance_limit_value {
		margin-bottom: 1em;
		text-align: center;
	}

	#kzs_grid_insurance_input_value {
		margin-bottom: 1em;
		text-align: right;
	}

	#kzs_yaer_deduction_value {
		margin-bottom: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
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
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#kzs_sum_deduction_caption, #kzs_yaer_deduction_caption {
		margin-right: 10px;
	}

	#kzs_sum_deduction_unit, #kzs_yaer_deduction_unit {
		margin-left: 10px;
	}
	#kzs_yaer_deduction, #kzs_sum_deduction {
		color: red;
		font-size: 25px;
	}
	
	#kzs_grid_insurance_input_error_limmt {
		color: red;
		display: none;
	}

	#kzs_bottom_message {
		background-color: gray;
		padding: 30px;
	}

	#kzs_bottom_message p {
		text-align: left;
	}

	p {
		text-align: center;
		margin-bottom: 1em;
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
