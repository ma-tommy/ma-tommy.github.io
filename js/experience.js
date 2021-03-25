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
	getTaxSaving: function (age, job, annualIncome, insuranceLimit, insurance) {
		// 年齢
		this.age = age;
		// 職業
		this.job = job;
		// 年収
		this.annualIncome = this.Util.convertFloat(annualIncome);
		// 掛け金上限
		this.insuranceLimit = insuranceLimit;
		// 毎月の掛け金
		this.insurance = this.Util.convertInt(insurance);

		if (!this.age || !this.job || !this.annualIncome || !this.insurance) {
			kzs.console.log(
				`年齢：${this.age} 職業： ${this.job} 年収：${this.annualIncome} 毎月の掛け金：${this.insurance}`
			);
			return 0;
		}
		kzs.console.log("年齢 = " + this.age);
		kzs.console.log("職業 = " + this.job);
		kzs.console.log("年収 = " + this.annualIncome);
		kzs.console.log("掛け金上限 = " + this.insuranceLimit);
		kzs.console.log("毎月の掛け金 = " + this.insurance);
		kzs.console.log("年間の積み立て = " + this._getYearInsurance());

		kzs.console.log("給与所得控除率 = " + this._getSalaryIncomeDeductionRate());
		kzs.console.log("固定控除額 = " + this._getFixedDeductionAmount());
		kzs.console.log(
			"社会保険控除率 = " + this._getSocialInsuranceDeductionRate()
		);
		kzs.console.log("課税所得 = " + this._getTaxableIncome());
		kzs.console.log("iDeCo前課税所得 = " + this._getIdecoBeforeTaxableIncome());
		kzs.console.log("iDeCo前所得税率 = " + this._getIdecoBeforeIncomeTaxRate());
		kzs.console.log("iDeCo前所得税額 = " + this._getIdecoBeforeIncomeTax());
		kzs.console.log("iDeCo前住民税額 = " + this._getIdecoBeforeResidentTax());
		kzs.console.log("iDeCo前合計税額 = " + this._getIdecoBeforeSumTaxSaving());
		kzs.console.log("iDeCo後課税所得 = " + this._getIdecoafterTaxableIncome());
		kzs.console.log("iDeCo後所得税率 = " + this._getIdecoAfterIncomeTaxRate());
		kzs.console.log("iDeCo後所得税額 = " + this._getIdecoAfterIncomeTax());
		kzs.console.log("iDeCo後住民税額 = " + this._getIdecoAfterResidentTax());
		kzs.console.log("iDeCo後合計税額 = " + this._getIdecoAfterSumTax());
		kzs.console.log("年間節税額 = " + this._getYearTaxSaving());

		// 毎月の積立金額 <= 掛金上限（メッセージを出すので画面側)
		// if (this.insurance <= this.insuranceLimit) {
		// 	const result = this._getYearTaxSaving();
		// 	kzs.console.log("毎月の積立金額 <= 掛金上限 = " + result);
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
		if (this.job == JOB_LIST[0].value) {
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
		if (this.job == JOB_LIST[0].value) {
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