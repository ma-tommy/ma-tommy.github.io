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

	const Util = function () {
		this.init.apply(this, arguments);
	};

	Util.prototype = {
		init: function () {},
		convertInt: function (value) {
			return parseInt(Number(value));
		},
		convertFloat: function (value) {
			return parseFloat(Number(value));
		},
		roundDown: function (value, digit) {
			return Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit);
		},
		removeComma: function (value) {
			return value ? `${value}`.replace(/,/g, "") : value;
		},
	};

	const Calc = function () {
		this.init.apply(this, arguments);
	};
	// 計算クラス
	Calc.prototype = {
		// 年齢
		AGE_RANGE: { MIN: 20, MAX: 59 },
		// 掛け金上限の単位
		INSURANCE_LIMIT_ADD_UNIT: "円/月",
		// 職業
		JOB_LIST: [
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
		],

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
				{ insurance: "health", rate: 0.04935 },
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
			// 計算済み制御フラグ
			this.calcFlg = false;
			// 年齢
			this.age = null;
			// 職業
			this.job = null;
			// 年収
			this.annualIncome = null;
			// 毎月の掛け金
			this.insurance = null;
			// message
			this.errorMesage = {
				require: {
					age: "年齢を選択してください",
					job: "職業を選択してください",
					annualIncome: "年収に金額を入力してください",
					insurance: "毎月の掛金には5,000以上を入力してください",
				},
				annualIncomeNotNumber: "年収には半角数値を入力してください",
				insuranceNotNumber: "毎月の掛金には半角数値を入力してください",
				insuranceLimitOver: "※掛け金の上限を超えています",
			};
		},

		/**
		 * 節税額を取得
		 * @param age 年齢
		 * @param job 職業
		 * @param annualIncome 年収
		 * @param insuranceLimit 掛け金上限
		 * @param insurance 掛金
		 */
		getTaxSaving: function (age, job, annualIncome, insuranceLimit, insurance) {
			kzs.console.log("----INPUT（無加工）-----");
			kzs.console.log("年齢： " + age);
			kzs.console.log("職業： " + job);
			kzs.console.log("年収： " + annualIncome);
			kzs.console.log("毎月の掛け金： " + insurance);
			kzs.console.log("毎月のLimit掛け金： " + insuranceLimit);
			// 掛け金上限
			this.insuranceLimit = this.Util.convertInt(
				`${this.Util.removeComma(insuranceLimit)}`.replace(
					kzsCalc.INSURANCE_LIMIT_ADD_UNIT,
					""
				)
			);
			// 返却値
			const result = {
				errorList: [
					{ itemName: "age", message: "" },
					{ itemName: "job", message: "" },
					{ itemName: "annual_income", message: "" },
					{ itemName: "insurance", message: "" },
				],
				isDoProc: false,
				yearTaxSaving: 0,
				sumDeduction: 0,
			};
			// 入力項目チェック
			const isValidate = this._validate(
				result,
				age,
				job,
				annualIncome,
				insurance
			);

			if (!isValidate) {
				kzs.console.log("validateNG： " + JSON.stringify(result.errorList));
				return result;
			}

			result.yearTaxSaving = this._getYearTaxSaving();
			result.sumDeduction =
				result.yearTaxSaving * (this.AGE_RANGE.MAX + 1 - age);

			kzs.console.log("合計節税額： " + result.sumDeduction);
			return result;
		},

		/**
		 * 処理前チェック
		 * @param resultJson 返却JSON
		 * @param age 年齢
		 * @param job 職業
		 * @param annualIncome 年収
		 * @param insurance 掛金
		 */
		_validate: function (resultJson, age, job, annualIncome, insurance) {
			let isError = false;
			// 年齢
			const _age = this.Util.convertInt(age);
			// 職業
			const _job = this.Util.convertInt(job);
			// 年収
			const _annualIncome = this.Util.convertFloat(
				this.Util.removeComma(annualIncome)
			);
			// 毎月の掛け金
			const _insurance = this.Util.convertInt(this.Util.removeComma(insurance));
			kzs.console.log("----INPUT（型やカンマ等を除去後)-----");
			kzs.console.log("年齢： " + _age);
			kzs.console.log("職業： " + _job);
			kzs.console.log("年収： " + _annualIncome);
			kzs.console.log("毎月の掛け金： " + _insurance);
			kzs.console.log("毎月のLimit掛け金： " + this.insuranceLimit);
			// 各項目が未入力の（=計算が行える状態に一度もなっていない)場合は弾く
			if (
				(this.age == null && (_age < 0 || _age == null)) ||
				(this.job == null && (_job < 0 || _job == null)) ||
				(this.annualIncome == null &&
					_job != this.JOB_LIST[1].value &&
					_annualIncome == 0) ||
				(this.insurance == null && _insurance == 0)
			) {
				kzs.console.log(
					`Input項目が揃っていない：年齢：${this.age} 職業： ${this.job} 年収：${this.annualIncome} 毎月の掛け金：${this.insurance}`
				);
				return false;
			}

			// 計算が行える状態となっているのでisDoProcをtrueに更新
			resultJson.isDoProc = true;

			const setErrorMessage = function (itemName, message) {
				const index = resultJson.errorList.findIndex(function (x) {
					return x.itemName == itemName;
				});
				resultJson.errorList[index].message = message;
				isError = true;
			};
			// 年齢
			if (this.age >= 0 && _age < 0) {
				setErrorMessage("age", this.errorMesage.require.age);
			}

			// 職業
			if (this.job >= 0 && _job < 0) {
				setErrorMessage("job", this.errorMesage.require.job);
			}

			if (
				(this.annualIncome >= 0 || this.annualIncome == null) &&
				_job != this.JOB_LIST[1].value &&
				_job >= 0 &&
				_annualIncome == 0
			) {
				// 年収(職業が1（専業主婦（夫）且 未選択)以外の場合)
				setErrorMessage("annual_income", this.errorMesage.require.annualIncome);
			} else if (isNaN(_annualIncome)) {
				setErrorMessage(
					"annual_income",
					this.errorMesage.annualIncomeNotNumber
				);
			}

			// 毎月の掛け金
			if (this.insurance >= 0 && _insurance < 5000) {
				setErrorMessage("insurance", this.errorMesage.require.insurance);
			} else if (_insurance > this.insuranceLimit && job >= 0) {
				setErrorMessage("insurance", this.errorMesage.insuranceLimitOver);
			} else if (isNaN(_insurance)) {
				setErrorMessage("insurance", this.errorMesage.insuranceNotNumber);
			}

			// エラーの場合
			if (isError) {
				kzs.console.log(
					`チェックエラー：年齢：${this.age} 職業： ${this.job} 年収：${this.annualIncome} 毎月の掛け金：${this.insurance}`
				);
				return false;
			}

			// 年齢
			this.age = _age;
			// 職業
			this.job = _job;
			// 年収
			this.annualIncome = _annualIncome;
			// 毎月の掛け金
			this.insurance = _insurance;
			kzs.console.log("年齢: " + this.age);
			kzs.console.log("職業: " + this.job);
			kzs.console.log("年収: " + this.annualIncome);
			kzs.console.log("毎月の掛け金: " + this.insurance);

			return true;
		},

		// 年間の積立金額
		_getYearInsurance: function () {
			// 毎月の掛け金 * 12 /10000
			const result = (this.insurance * 12) / 10000;
			kzs.console.log("年間の積み立て: " + result);
			return result;
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
			const result = this._getSalaryIncomeDeduction().rate;
			kzs.console.log("給与所得控除率: " + result);
			return result;
		},
		// 固定控除額
		_getFixedDeductionAmount: function () {
			const result = this._getSalaryIncomeDeduction().money;
			kzs.console.log("固定控除額:" + result);
			return result;
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
			kzs.console.log("社会保険控除率:" + sumRate);
			return sumRate;
		},
		// 課税所得
		_getTaxableIncome: function () {
			// =IF(ROUNDDOWN(180-(180*0.4+-10)-180*0.1439-38,1)>0,ROUNDDOWN(180-(180*0.4+-10)-180*0.1439-38,1),0)
			// 少数第2位を切り捨て(年収-(年収*給与所得控除率+固定控除額)-年収*社会保険控除率-基礎控除)
			const calcResult = this.Util.roundDown(
				this.annualIncome -
					(this.annualIncome * this._getSalaryIncomeDeductionRate() +
						this._getFixedDeductionAmount()) -
					this.annualIncome * this._getSocialInsuranceDeductionRate() -
					this.BASIC_DEDUCTION,
				1
			);
			const result = calcResult > 0 ? calcResult : 0;
			kzs.console.log("課税所得: " + result);
			return result;
		},
		// iDeCo前課税所得
		_getIdecoBeforeTaxableIncome: function () {
			let result = 0;
			// 個人事業主なら年収、個人事業主以外は課税所得
			if (this.job == this.JOB_LIST[0].value) {
				result = this.annualIncome;
			} else {
				result = this._getTaxableIncome();
			}
			kzs.console.log("iDeCo前課税所得: " + result);
			return result;
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
			const result = this._getIncomeTaxRateFixedDeduction(
				this._getIdecoBeforeTaxableIncome()
			).rate;
			kzs.console.log("iDeCo前所得税率: " + result);
			return result;
		},
		// iDeCo前所得税額
		_getIdecoBeforeIncomeTax: function () {
			// ROUNDDOWN(iDeCo前課税所得 * iDeCo前所得税率 * 10000, -2) - 給与所得控除額
			const result =
				this.Util.roundDown(
					this._getIdecoBeforeTaxableIncome() *
						this._getIdecoBeforeIncomeTaxRate() *
						10000,
					-2
				) -
				this._getIncomeTaxRateFixedDeduction(
					this._getIdecoBeforeTaxableIncome()
				).money;
			kzs.console.log("iDeCo前所得税額: " + result);
			return result;
		},
		// iDeCo前住民税額
		_getIdecoBeforeResidentTax: function () {
			// iDeCo前課税所得 * iDeCo前住民税率 * 10000
			// jsは整数＊小数だと誤差が出るので、先に税率*10000を行う(計算的にはどちらでも問題ないので)
			const result =
				this._getIdecoBeforeTaxableIncome() * (this.RESIDENT_TAX_RATE * 10000);

			kzs.console.log("iDeCo前住民税額: " + result);
			return result;
		},

		// iDeCo前合計税額
		_getIdecoBeforeSumTaxSaving: function () {
			// iDeCo前所得税額 + iDeCo前住民税額
			const result =
				this._getIdecoBeforeIncomeTax() + this._getIdecoBeforeResidentTax();
			kzs.console.log("iDeCo前合計税額: " + result);
			return result;
		},

		// iDeCo後課税所得
		_getIdecoafterTaxableIncome: function () {
			let calc = 0;
			if (this.job == this.JOB_LIST[0].value) {
				// 自営業の場合(年収 - 年間の積立金額)
				calc = this.annualIncome - this._getYearInsurance();
			} else {
				// 自営業以外の場合(iDeCo前課税所得 - 年間の積立金額)
				calc = this._getIdecoBeforeTaxableIncome() - this._getYearInsurance();
			}
			const result = calc > 0 ? calc : 0;
			kzs.console.log("iDeCo後課税所得: " + result);
			return result;
		},
		// iDeCo後所得税率
		_getIdecoAfterIncomeTaxRate: function () {
			const result = this._getIncomeTaxRateFixedDeduction(
				this._getIdecoafterTaxableIncome()
			).rate;
			kzs.console.log(
				"iDeCo後所得税率(_getIdecoAfterIncomeTaxRate): " + result
			);
			return result;
		},
		// iDeCo後所得税額
		_getIdecoAfterIncomeTax: function () {
			// =ROUNDDOWN(iDeCo後課税所得 * iDeCo後所得税率 * 10000, -2) - 所得税固定控除)
			const result =
				this.Util.roundDown(
					this._getIdecoafterTaxableIncome() *
						this._getIdecoAfterIncomeTaxRate() *
						10000,
					-2
				) -
				this._getIncomeTaxRateFixedDeduction(this._getIdecoafterTaxableIncome())
					.money;
			kzs.console.log("iDeCo後所得税額: " + result);
			return result;
		},
		// iDeCo後住民税額
		_getIdecoAfterResidentTax: function () {
			// iDeCo後課税所得 * iDeCo後住民税率 * 10000
			// jsは整数＊小数だと誤差が出るので、先に税率*10000を行う(計算的にはどちらでも問題ないので)
			const result =
				this._getIdecoafterTaxableIncome() * (this.RESIDENT_TAX_RATE * 10000);
			kzs.console.log("iDeCo後住民税額: " + result);
			return result;
		},

		// iDeCo後合計税額
		_getIdecoAfterSumTax: function () {
			// iDeCo後所得税額 + iDeCo後住民税額
			const result =
				this._getIdecoAfterIncomeTax() + this._getIdecoAfterResidentTax();
			kzs.console.log("iDeCo後合計税額: " + result);
			return result;
		},

		// 年間節税額
		_getYearTaxSaving: function () {
			// iDeCo前合計税額 - iDeCo後合計税額
			const result =
				this._getIdecoBeforeSumTaxSaving() - this._getIdecoAfterSumTax();
			kzs.console.log("年間節税額： " + result);
			return result;
		},
	};

	window.kzsCalc = new Calc();
	window.kzsUtil = new Util();

	// 各項目のChangeイベントの追加
	(function () {
		const getInsuranceLimit = function (value) {
			return kzsUtil.convertInt(
				`${kzsUtil.removeComma(value)}`.replace(
					kzsCalc.INSURANCE_LIMIT_ADD_UNIT,
					""
				)
			);
		};

		const calcTaxSaving = function (age, job, annualIncome, insurance) {
			const result = kzsCalc.getTaxSaving(
				age ?? $("#kzs_grid_age_value").val(),
				job ?? $("#kzs_grid_job_value").val(),
				annualIncome ?? $("#kzs_grid_annual_income_value").val(),
				getInsuranceLimit($("#kzs_grid_insurance_limit_value").val()),
				insurance ?? $("#kzs_grid_insurance_input_value").val()
				// annualIncome ??
				// 	$("#kzs_grid_annual_income_value").val().toLocaleString(),
				// $("#kzs_grid_insurance_limit_value").val(),
				// insurance ?? $("#kzs_grid_insurance_input_value").val().toLocaleString()
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
					: kzsCalc.JOB_LIST[
							event.currentTarget.value
					  ].money.toLocaleString()) + kzsCalc.INSURANCE_LIMIT_ADD_UNIT
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
			$("<option>")
				.text(kzsCalc.JOB_LIST[i].label)
				.val(kzsCalc.JOB_LIST[i].value)
		);
	}

	// 掛け金上限の初期化
	$("#kzs_grid_insurance_limit_value").val(
		0 + kzsCalc.INSURANCE_LIMIT_ADD_UNIT
	);

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
	
	#kzs_grid_error_message {
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
