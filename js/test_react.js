(() => {
	$(".first-section > div:eq(1)").after('<div id="simulation"></div>');

	const makeHtml = (function () {
		return `
		<div id="root">
			<div class="MuiContainer-root makeStyles-container-1 MuiContainer-maxWidthMd">
				<div class="MuiGrid-root makeStyles-root-11 MuiGrid-container">
					<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
						<div class="MuiChip-root makeStyles-chipHeader-2">
							<span class="MuiChip-label">所得控除額 わくわく電卓</span>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5">
							<span
								class="MuiTypography-root makeStyles-gridItemCaption-4 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>年齢</span
							>
						</div>
						<div
							class="MuiGrid-root makeStyles-gridItemValue-5 MuiGrid-item MuiGrid-grid-xs-5"
						>
							<div class="MuiFormControl-root makeStyles-formControl-10">
								<div
									class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"
								>
									<div
										class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input"
										tabindex="0"
										role="button"
										aria-haspopup="listbox"
										aria-labelledby="demo-simple-select-placeholder-label-label demo-simple-select-placeholder-label"
										id="demo-simple-select-placeholder-label"
									>
										１０歳
									</div>
									<input
										aria-hidden="true"
										tabindex="-1"
										class="MuiSelect-nativeInput"
										value="10"
									/><svg
										class="MuiSvgIcon-root MuiSelect-icon"
										focusable="false"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M7 10l5 5 5-5z"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5">
							<span
								class="MuiTypography-root makeStyles-gridItemCaption-4 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>職業</span
							>
						</div>
						<div
							class="MuiGrid-root makeStyles-gridItemValue-5 MuiGrid-item MuiGrid-grid-xs-5"
						>
							<div class="MuiFormControl-root makeStyles-formControl-10">
								<div
									class="MuiInputBase-root MuiInput-root MuiInput-underline makeStyles-selectBox-9 MuiInputBase-formControl MuiInput-formControl"
								>
									<div
										class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input"
										tabindex="0"
										role="button"
										aria-haspopup="listbox"
										aria-labelledby="demo-simple-select-placeholder-label-label demo-simple-select-placeholder-label"
										id="demo-simple-select-placeholder-label"
									>
										自営業
									</div>
									<input
										aria-hidden="true"
										tabindex="-1"
										class="MuiSelect-nativeInput"
										value="10"
									/><svg
										class="MuiSvgIcon-root MuiSelect-icon"
										focusable="false"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M7 10l5 5 5-5z"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>※企業型DCとは、勤め先の企業が拠出している企業年金制度です。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>※確定給付企業年金(DB)とは、お勤め先の企業が給付している企業年金制度です。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-5">
							<span
								class="MuiTypography-root makeStyles-gridItemCaption-4 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>年収</span
							>
						</div>
						<div
							class="MuiGrid-root makeStyles-gridItemValue-5 MuiGrid-item MuiGrid-grid-xs-5"
						>
							<div class="MuiFormControl-root makeStyles-formControl-10">
								<div
									class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd"
								>
									<input
										aria-invalid="false"
										id="outlined-adornment-weight"
										type="number"
										step="1"
										min="0"
										class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
										value=""
										style="text-align: right"
									/>
									<div class="MuiInputAdornment-root MuiInputAdornment-positionEnd">
										<p
											class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
										>
											万円
										</p>
									</div>
									<fieldset
										aria-hidden="true"
										class="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
										style="padding-left: 8px"
									>
										<legend
											class="PrivateNotchedOutline-legend-14"
											style="width: 0.01px"
										>
											<span>&#8203;</span>
										</legend>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>専業主婦(夫)の場合、所得自体がないため年収入力はできません。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>自営業(個人事業主)の場合、課税所得額を入力ください。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>あなたの毎月の掛金上限はこちら↓</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<div
								class="MuiFormControl-root MuiTextField-root makeStyles-gridItemDisabled-7"
							>
								<div
									class="MuiInputBase-root MuiOutlinedInput-root Mui-disabled Mui-disabled MuiInputBase-formControl"
								>
									<input
										aria-invalid="false"
										disabled=""
										id="outlined-basic"
										type="text"
										class="MuiInputBase-input MuiOutlinedInput-input Mui-disabled Mui-disabled"
										value="68,000円/月"
									/>
									<fieldset
										aria-hidden="true"
										class="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
										style="padding-left: 8px"
									>
										<legend
											class="PrivateNotchedOutline-legend-14"
											style="width: 0.01px"
										>
											<span>&#8203;</span>
										</legend>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>※職業によって、掛金上限額は異なります。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>毎月の掛金予定額を入力ください</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<div class="MuiFormControl-root makeStyles-formControl-10">
								<div
									class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd"
								>
									<input
										aria-invalid="false"
										id="outlined-adornment-weight"
										type="number"
										step="1000"
										min="0"
										class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
										value=""
										style="text-align: right"
									/>
									<div class="MuiInputAdornment-root MuiInputAdornment-positionEnd">
										<p
											class="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextSecondary"
										>
											円
										</p>
									</div>
									<fieldset
										aria-hidden="true"
										class="PrivateNotchedOutline-root-13 MuiOutlinedInput-notchedOutline"
										style="padding-left: 8px"
									>
										<legend
											class="PrivateNotchedOutline-legend-14"
											style="width: 0.01px"
										>
											<span>&#8203;</span>
										</legend>
									</fieldset>
								</div>
							</div>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>※掛金の上限を超えています</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>※iDeCoの掛金は5,000円以上1,000円刻みです。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<h4
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-h4 MuiTypography-gutterBottom MuiTypography-displayBlock"
							>
								↓
							</h4>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>iDeCoを活用することで、</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom"
								>年間</span
							>
						</div>
						<div class="MuiGrid-root MuiGrid-item">
							<h4
								class="MuiTypography-root makeStyles-gridItemMessage-6 makeStyles-typoBoldColor-8 MuiTypography-h4"
							>
								3,300
							</h4>
						</div>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom"
								>円</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>60歳まで活用した場合、</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom"
								>合計</span
							>
						</div>
						<div class="MuiGrid-root MuiGrid-item">
							<h4
								class="MuiTypography-root makeStyles-gridItemMessage-6 makeStyles-typoBoldColor-8 MuiTypography-h4"
							>
								144,300
							</h4>
						</div>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom"
								>円の</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<span
								class="MuiTypography-root makeStyles-gridItemMessage-6 MuiTypography-button MuiTypography-gutterBottom MuiTypography-displayBlock"
								>所得税が控除されます。</span
							>
						</div>
					</div>
					<div
						class="MuiGrid-root makeStyles-gridRow-3 MuiGrid-container MuiGrid-align-items-xs-center"
					>
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<h4
								class="MuiTypography-root makeStyles-gridItemMessage-6 makeStyles-typoBoldColor-8 MuiTypography-h4"
							>
								専業主婦(夫)の場合、所得自体がないため「所得控除」はありません。運用益、受取り時の節税メリットのみです。
							</h4>
						</div>
					</div>
					<div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center">
						<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
							<div
								class="MuiPaper-root makeStyles-cautionPaper-12 MuiPaper-elevation1 MuiPaper-rounded"
							>
								※あくまでも簡易シミュレーションです。　節税金額を示唆・保証するものではありません。<br /><br />※課税所得は年収から必要経費や保険料等の各種控除を差し引いた金額であり、個人によってその額は大きく異なってきます。あくまで一例としてご参考ください。<br />※税率は2020年12月8日現在の税率にて試算しています。税率が変更となった場合には結果も異なります。<br />※復興特別所得税、配偶者控除（配偶者特別控除）は考慮していません。
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
	})();
	$("#simulation").append(makeHtml);

	// // セレクトボックスの初期化
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
	// 掛け金上限の初期化
	$("#kzs_grid_insurance_limit_value").val(
		JOB_LIST[0].money.toLocaleString() + INSURANCE_LIMIT_ADD_UNIT
	);

	// const Util = function () {
	// 	this.init.apply(this, arguments);
	// };

	// Util.prototype = {
	// 	init: function () {},
	// 	convertInt: function (value) {
	// 		return value ? parseInt(value) : 0;
	// 	},
	// 	convertFloat: function (value) {
	// 		return value ? parseFloat(value) : 0;
	// 	},
	// 	roundDown: function (value, digit) {
	// 		return Math.floor(value * Math.pow(10, digit)) / Math.pow(10, digit);
	// 	},
	// 	removeComma: function (number) {
	// 		return number.replace(/,/g, "");
	// 	},
	// };

	// const Calc = function () {
	// 	this.init.apply(this, arguments);
	// };
	// // 計算クラス
	// Calc.prototype = {
	// 	init: function () {
	// 		this.Util = new Util();
	// 		// 給与所得控除率, 固定控除額
	// 		this.salaryIncomeDeductionRateIncome = [
	// 			{ annualIncome: 162.5, rate: 0, money: 55 },
	// 			{ annualIncome: 180.0, rate: 0.4, money: -10 },
	// 			{ annualIncome: 360.0, rate: 0.3, money: 8 },
	// 			{ annualIncome: 660.0, rate: 0.2, money: 44 },
	// 			{ annualIncome: 850.0, rate: 0.1, money: 110 },
	// 			{ annualIncome: -1, rate: 0, money: 195 },
	// 		];
	// 		// 社会保険料控除率
	// 		this.socialInsuranceDeductionRate = [
	// 			{ insurance: "health", rate: 0.0494 },
	// 			{ insurance: "welfarePension ", rate: 0.0915 },
	// 			{ insurance: "employment", rate: 0.003 },
	// 			{ insurance: "care", rate: 0.0079 },
	// 		];
	// 		// 所得税率, 所得税固定控除（円）
	// 		this.incomeTaxRateFixedDeduction = [
	// 			{ taxableIncome: 195, rate: 0.05105, money: 0 },
	// 			{ taxableIncome: 330, rate: 0.1021, money: 97500 },
	// 			{ taxableIncome: 695, rate: 0.2042, money: 427500 },
	// 			{ taxableIncome: 900, rate: 0.23483, money: 636000 },
	// 			{ taxableIncome: 1800, rate: 0.33693, money: 1536000 },
	// 			{ taxableIncome: 4000, rate: 0.4084, money: 2796000 },
	// 			{ taxableIncome: -1, rate: 0.45945, money: 4796000 },
	// 		];
	// 		// 住民税率
	// 		this.RESIDENT_TAX_RATE = 0.1;
	// 		// 介護保険加入年齢
	// 		this.CARE_INSURANCE_AGE = 40;
	// 		// 基礎控除(万円)
	// 		this.BASIC_DEDUCTION = 38;
	// 	},

	// 	/**
	// 	 * 節税額を取得
	// 	 * @param age 年齢
	// 	 * @param job 職業
	// 	 * @param annualIncome 年収
	// 	 * @param insuranceLimit 掛け金上限
	// 	 * @param insurance 掛け金
	// 	 */
	// 	getTaxSaving: function (age, job, annualIncome, insuranceLimit, insurance) {
	// 		// 年齢
	// 		this.age = age;
	// 		// 職業
	// 		this.job = job;
	// 		// 年収
	// 		this.annualIncome = this.Util.convertFloat(annualIncome);
	// 		// 掛け金上限
	// 		this.insuranceLimit = insuranceLimit;
	// 		// 毎月の掛け金
	// 		this.insurance = this.Util.convertInt(insurance);

	// 		if (!this.annualIncome || !this.insurance) {
	// 			console.log(
	// 				`年収：${this.annualIncome} 毎月の掛け金：${this.insurance}`
	// 			);
	// 			return 0;
	// 		}
	// 		console.log("年齢 = " + this.age);
	// 		console.log("職業 = " + this.job);
	// 		console.log("年収 = " + this.annualIncome);
	// 		console.log("掛け金上限 = " + this.insuranceLimit);
	// 		console.log("毎月の掛け金 = " + this.insurance);
	// 		console.log("年間の積み立て = " + calc._getYearInsurance());

	// 		console.log("給与所得控除率 = " + calc._getSalaryIncomeDeductionRate());
	// 		console.log("固定控除額 = " + calc._getFixedDeductionAmount());
	// 		console.log(
	// 			"社会保険控除率 = " + calc._getSocialInsuranceDeductionRate()
	// 		);
	// 		console.log("課税所得 = " + calc._getTaxableIncome());
	// 		console.log("iDeCo前課税所得 = " + calc._getIdecoBeforeTaxableIncome());
	// 		console.log("iDeCo前所得税率 = " + calc._getIdecoBeforeIncomeTaxRate());
	// 		console.log("iDeCo前所得税額 = " + calc._getIdecoBeforeIncomeTax());
	// 		console.log("iDeCo前住民税額 = " + calc._getIdecoBeforeResidentTax());
	// 		console.log("iDeCo前合計税額 = " + calc._getIdecoBeforeSumTaxSaving());
	// 		console.log("iDeCo後課税所得 = " + calc._getIdecoafterTaxableIncome());
	// 		console.log("iDeCo後所得税率 = " + calc._getIdecoAfterIncomeTaxRate());
	// 		console.log("iDeCo後所得税額 = " + calc._getIdecoAfterIncomeTax());
	// 		console.log("iDeCo後住民税額 = " + calc._getIdecoAfterResidentTax());
	// 		console.log("iDeCo後合計税額 = " + calc._getIdecoAfterSumTax());
	// 		console.log("年間節税額 = " + calc._getYearTaxSaving());

	// 		// 毎月の積立金額 <= 掛金上限
	// 		if (this.insurance <= this.insuranceLimit) {
	// 			console.log("毎月の積立金額 <= 掛金上限");
	// 			return this._getYearTaxSaving();
	// 		}

	// 		return "-";
	// 	},

	// 	// 年間の積立金額
	// 	_getYearInsurance: function () {
	// 		// 毎月の掛け金 * 12 /10000
	// 		return (
	// 			(this.Util.convertInt($("#kzs_grid_insurance_input_value").val()) *
	// 				12) /
	// 			10000
	// 		);
	// 	},

	// 	// 年収から給与所得控除率, 控除額を取得
	// 	_getSalaryIncomeDeduction: function () {
	// 		const that = this;
	// 		const result = this.salaryIncomeDeductionRateIncome.find(function (x) {
	// 			return that.annualIncome <= x.annualIncome;
	// 		});
	// 		return (
	// 			result ??
	// 			this.salaryIncomeDeductionRateIncome[
	// 				this.salaryIncomeDeductionRateIncome.length - 1
	// 			]
	// 		);
	// 	},
	// 	// 給与所得控除率
	// 	_getSalaryIncomeDeductionRate: function () {
	// 		return this._getSalaryIncomeDeduction().rate;
	// 	},
	// 	// 固定控除額
	// 	_getFixedDeductionAmount: function () {
	// 		return this._getSalaryIncomeDeduction().money;
	// 	},
	// 	// 社会保険控除率
	// 	_getSocialInsuranceDeductionRate: function () {
	// 		const sumRate = this.socialInsuranceDeductionRate.reduce(function (s, e) {
	// 			return s + e.rate;
	// 		}, 0);

	// 		// 40才以下は介護保険控除を減算
	// 		if (this.age < this.CARE_INSURANCE_AGE) {
	// 			return (
	// 				sumRate -
	// 				this.socialInsuranceDeductionRate.find(function (x) {
	// 					return x.insurance == "care";
	// 				}).rate
	// 			);
	// 		}
	// 		return sumRate;
	// 	},
	// 	// 課税所得
	// 	_getTaxableIncome: function () {
	// 		// 少数第2位を切り捨て(年収-(年収*給与所得控除率+固定控除額)-年収*社会保険控除率-基礎控除)
	// 		const result = this.Util.roundDown(
	// 			this.annualIncome -
	// 				(this.annualIncome * this._getSalaryIncomeDeductionRate() +
	// 					this._getFixedDeductionAmount()) -
	// 				this.annualIncome * this._getSocialInsuranceDeductionRate() -
	// 				this.BASIC_DEDUCTION,
	// 			1
	// 		);
	// 		return result > 0 ? result : 0;
	// 	},
	// 	// iDeCo前課税所得
	// 	_getIdecoBeforeTaxableIncome: function () {
	// 		// 個人事業主なら年収、個人事業主以外は課税所得
	// 		if (this.job == JOB_LIST[0].value) {
	// 			return this.annualIncome;
	// 		}
	// 		return this._getTaxableIncome();
	// 	},
	// 	// 年収から給与所得控除率, 控除額を取得
	// 	_getIncomeTaxRateFixedDeduction: function (taxableIncome) {
	// 		// 課税所得がどの所得税率になるか算出
	// 		const result = this.incomeTaxRateFixedDeduction.find(function (x) {
	// 			return taxableIncome <= x.taxableIncome;
	// 		});

	// 		return result === undefined
	// 			? this.incomeTaxRateFixedDeduction[
	// 					this.incomeTaxRateFixedDeduction.length - 1
	// 			  ]
	// 			: result;
	// 	},
	// 	// iDeCo前所得税率
	// 	_getIdecoBeforeIncomeTaxRate: function () {
	// 		return this._getIncomeTaxRateFixedDeduction(
	// 			this._getIdecoBeforeTaxableIncome()
	// 		).rate;
	// 	},
	// 	// iDeCo前所得税額
	// 	_getIdecoBeforeIncomeTax: function () {
	// 		// ROUNDDOWN(iDeCo前課税所得 * iDeCo前所得税率 * 10000, -2) - 給与所得控除額
	// 		return (
	// 			this.Util.roundDown(
	// 				this._getIdecoBeforeTaxableIncome() *
	// 					this._getIdecoBeforeIncomeTaxRate() *
	// 					10000,
	// 				-2
	// 			) -
	// 			this._getIncomeTaxRateFixedDeduction(
	// 				this._getIdecoBeforeTaxableIncome()
	// 			).money
	// 		);
	// 	},
	// 	// iDeCo前住民税額
	// 	_getIdecoBeforeResidentTax: function () {
	// 		// iDeCo前課税所得 * iDeCo前住民税率 * 10000
	// 		return (
	// 			this._getIdecoBeforeTaxableIncome() * this.RESIDENT_TAX_RATE * 10000
	// 		);
	// 	},

	// 	// iDeCo前合計税額
	// 	_getIdecoBeforeSumTaxSaving: function () {
	// 		// iDeCo前所得税額 + iDeCo前住民税額
	// 		return (
	// 			this._getIdecoBeforeIncomeTax() + this._getIdecoBeforeResidentTax()
	// 		);
	// 	},

	// 	// iDeCo後課税所得
	// 	_getIdecoafterTaxableIncome: function () {
	// 		if (this.job == JOB_LIST[0].value) {
	// 			// 自営業の場合(年収 - 年間の積立金額)
	// 			return this.annualIncome - this._getYearInsurance();
	// 		}
	// 		// 自営業以外の場合(iDeCo前課税所得 - 年間の積立金額)
	// 		return this._getIdecoBeforeTaxableIncome() - this._getYearInsurance();
	// 	},
	// 	// iDeCo後所得税率
	// 	_getIdecoAfterIncomeTaxRate: function () {
	// 		return this._getIncomeTaxRateFixedDeduction(
	// 			this._getIdecoafterTaxableIncome()
	// 		).rate;
	// 	},
	// 	// iDeCo後所得税額
	// 	_getIdecoAfterIncomeTax: function () {
	// 		// =ROUNDDOWN(iDeCo後課税所得 * iDeCo後所得税率 * 10000, -2) - 所得税固定控除)
	// 		return (
	// 			this.Util.roundDown(
	// 				this._getIdecoafterTaxableIncome() *
	// 					this._getIdecoAfterIncomeTaxRate() *
	// 					10000,
	// 				-2
	// 			) -
	// 			this._getIncomeTaxRateFixedDeduction(this._getIdecoafterTaxableIncome())
	// 				.money
	// 		);
	// 	},
	// 	// iDeCo後住民税額
	// 	_getIdecoAfterResidentTax: function () {
	// 		// iDeCo後課税所得 * iDeCo後住民税率 * 10000
	// 		return (
	// 			this._getIdecoafterTaxableIncome() * this.RESIDENT_TAX_RATE * 10000
	// 		);
	// 	},

	// 	// iDeCo後合計税額
	// 	_getIdecoAfterSumTax: function () {
	// 		// iDeCo後所得税額 + iDeCo後住民税額
	// 		return this._getIdecoAfterIncomeTax() + this._getIdecoAfterResidentTax();
	// 	},

	// 	// 年間節税額
	// 	_getYearTaxSaving: function () {
	// 		// iDeCo前合計税額 - iDeCo後合計税額
	// 		return this._getIdecoBeforeSumTaxSaving() - this._getIdecoAfterSumTax();
	// 	},
	// };

	// const calc = new Calc();
	// const util = new Util();
	// // 各項目のChangeイベントの追加
	// (function () {
	// 	// 年齢の変更
	// 	$("#kzs_grid_age_value").on("change", function (event) {
	// 		const taxSaving = calc.getTaxSaving(
	// 			event.currentTarget.value,
	// 			$("#kzs_grid_job_value").val(),
	// 			$("#kzs_grid_annual_income_value").val(),
	// 			util
	// 				.removeComma($("#kzs_grid_insurance_limit_value").val())
	// 				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
	// 			$("#kzs_grid_insurance_input_value").val()
	// 		);
	// 		// 年間の節税金額
	// 		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
	// 		// 節税金額の合計
	// 		$("#kzs_sum_deduction").text(
	// 			(
	// 				taxSaving *
	// 				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
	// 			).toLocaleString()
	// 		);
	// 	});
	// 	// 職業の変更
	// 	$("#kzs_grid_job_value").on("change", function (event) {
	// 		// 掛け金上限の変更
	// 		$("#kzs_grid_insurance_limit_value").val(
	// 			JOB_LIST[event.currentTarget.value].money.toLocaleString() +
	// 				INSURANCE_LIMIT_ADD_UNIT
	// 		);
	// 		const taxSaving = calc.getTaxSaving(
	// 			$("#kzs_grid_age_value").val(),
	// 			event.currentTarget.value,
	// 			$("#kzs_grid_annual_income_value").val(),
	// 			util
	// 				.removeComma($("#kzs_grid_insurance_limit_value").val())
	// 				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
	// 			$("#kzs_grid_insurance_input_value").val()
	// 		);
	// 		// 年間の節税金額
	// 		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
	// 		// 節税金額の合計
	// 		$("#kzs_sum_deduction").text(
	// 			(
	// 				taxSaving *
	// 				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
	// 			).toLocaleString()
	// 		);
	// 	});
	// 	// 年収の変更
	// 	$("#kzs_grid_annual_income_value").on("change", function (event) {
	// 		const taxSaving = calc.getTaxSaving(
	// 			$("#kzs_grid_age_value").val(),
	// 			$("#kzs_grid_job_value").val(),
	// 			event.currentTarget.value,
	// 			util
	// 				.removeComma($("#kzs_grid_insurance_limit_value").val())
	// 				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
	// 			$("#kzs_grid_insurance_input_value").val()
	// 		);
	// 		// 年間の節税金額
	// 		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
	// 		// 節税金額の合計
	// 		$("#kzs_sum_deduction").text(
	// 			(
	// 				taxSaving *
	// 				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
	// 			).toLocaleString()
	// 		);
	// 	});
	// 	// 毎月の掛け金の変更
	// 	$("#kzs_grid_insurance_input_value").on("change", function (event) {
	// 		const taxSaving = calc.getTaxSaving(
	// 			$("#kzs_grid_age_value").val(),
	// 			$("#kzs_grid_job_value").val(),
	// 			$("#kzs_grid_annual_income_value").val(),
	// 			util
	// 				.removeComma($("#kzs_grid_insurance_limit_value").val())
	// 				.replace(INSURANCE_LIMIT_ADD_UNIT, ""),
	// 			event.currentTarget.value
	// 		);
	// 		// 年間の節税金額
	// 		$("#kzs_yaer_deduction").text(taxSaving.toLocaleString());
	// 		// 節税金額の合計
	// 		$("#kzs_sum_deduction").text(
	// 			(
	// 				taxSaving *
	// 				(AGE_RANGE.MAX + 1 - $("#kzs_grid_age_value").val())
	// 			).toLocaleString()
	// 		);
	// 	});
	// })();

	var s = `
	.MuiGrid-container {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
	  }
	  .MuiGrid-item {
		margin: 0;
		box-sizing: border-box;
	  }
	  .MuiGrid-zeroMinWidth {
		min-width: 0;
	  }
	  .MuiGrid-direction-xs-column {
		flex-direction: column;
	  }
	  .MuiGrid-direction-xs-column-reverse {
		flex-direction: column-reverse;
	  }
	  .MuiGrid-direction-xs-row-reverse {
		flex-direction: row-reverse;
	  }
	  .MuiGrid-wrap-xs-nowrap {
		flex-wrap: nowrap;
	  }
	  .MuiGrid-wrap-xs-wrap-reverse {
		flex-wrap: wrap-reverse;
	  }
	  .MuiGrid-align-items-xs-center {
		align-items: center;
	  }
	  .MuiGrid-align-items-xs-flex-start {
		align-items: flex-start;
	  }
	  .MuiGrid-align-items-xs-flex-end {
		align-items: flex-end;
	  }
	  .MuiGrid-align-items-xs-baseline {
		align-items: baseline;
	  }
	  .MuiGrid-align-content-xs-center {
		align-content: center;
	  }
	  .MuiGrid-align-content-xs-flex-start {
		align-content: flex-start;
	  }
	  .MuiGrid-align-content-xs-flex-end {
		align-content: flex-end;
	  }
	  .MuiGrid-align-content-xs-space-between {
		align-content: space-between;
	  }
	  .MuiGrid-align-content-xs-space-around {
		align-content: space-around;
	  }
	  .MuiGrid-justify-xs-center {
		justify-content: center;
	  }
	  .MuiGrid-justify-xs-flex-end {
		justify-content: flex-end;
	  }
	  .MuiGrid-justify-xs-space-between {
		justify-content: space-between;
	  }
	  .MuiGrid-justify-xs-space-around {
		justify-content: space-around;
	  }
	  .MuiGrid-justify-xs-space-evenly {
		justify-content: space-evenly;
	  }
	  .MuiGrid-spacing-xs-1 {
		width: calc(100% + 8px);
		margin: -4px;
	  }
	  .MuiGrid-spacing-xs-1 > .MuiGrid-item {
		padding: 4px;
	  }
	  .MuiGrid-spacing-xs-2 {
		width: calc(100% + 16px);
		margin: -8px;
	  }
	  .MuiGrid-spacing-xs-2 > .MuiGrid-item {
		padding: 8px;
	  }
	  .MuiGrid-spacing-xs-3 {
		width: calc(100% + 24px);
		margin: -12px;
	  }
	  .MuiGrid-spacing-xs-3 > .MuiGrid-item {
		padding: 12px;
	  }
	  .MuiGrid-spacing-xs-4 {
		width: calc(100% + 32px);
		margin: -16px;
	  }
	  .MuiGrid-spacing-xs-4 > .MuiGrid-item {
		padding: 16px;
	  }
	  .MuiGrid-spacing-xs-5 {
		width: calc(100% + 40px);
		margin: -20px;
	  }
	  .MuiGrid-spacing-xs-5 > .MuiGrid-item {
		padding: 20px;
	  }
	  .MuiGrid-spacing-xs-6 {
		width: calc(100% + 48px);
		margin: -24px;
	  }
	  .MuiGrid-spacing-xs-6 > .MuiGrid-item {
		padding: 24px;
	  }
	  .MuiGrid-spacing-xs-7 {
		width: calc(100% + 56px);
		margin: -28px;
	  }
	  .MuiGrid-spacing-xs-7 > .MuiGrid-item {
		padding: 28px;
	  }
	  .MuiGrid-spacing-xs-8 {
		width: calc(100% + 64px);
		margin: -32px;
	  }
	  .MuiGrid-spacing-xs-8 > .MuiGrid-item {
		padding: 32px;
	  }
	  .MuiGrid-spacing-xs-9 {
		width: calc(100% + 72px);
		margin: -36px;
	  }
	  .MuiGrid-spacing-xs-9 > .MuiGrid-item {
		padding: 36px;
	  }
	  .MuiGrid-spacing-xs-10 {
		width: calc(100% + 80px);
		margin: -40px;
	  }
	  .MuiGrid-spacing-xs-10 > .MuiGrid-item {
		padding: 40px;
	  }
	  .MuiGrid-grid-xs-auto {
		flex-grow: 0;
		max-width: none;
		flex-basis: auto;
	  }
	  .MuiGrid-grid-xs-true {
		flex-grow: 1;
		max-width: 100%;
		flex-basis: 0;
	  }
	  .MuiGrid-grid-xs-1 {
		flex-grow: 0;
		max-width: 8.333333%;
		flex-basis: 8.333333%;
	  }
	  .MuiGrid-grid-xs-2 {
		flex-grow: 0;
		max-width: 16.666667%;
		flex-basis: 16.666667%;
	  }
	  .MuiGrid-grid-xs-3 {
		flex-grow: 0;
		max-width: 25%;
		flex-basis: 25%;
	  }
	  .MuiGrid-grid-xs-4 {
		flex-grow: 0;
		max-width: 33.333333%;
		flex-basis: 33.333333%;
	  }
	  .MuiGrid-grid-xs-5 {
		flex-grow: 0;
		max-width: 41.666667%;
		flex-basis: 41.666667%;
	  }
	  .MuiGrid-grid-xs-6 {
		flex-grow: 0;
		max-width: 50%;
		flex-basis: 50%;
	  }
	  .MuiGrid-grid-xs-7 {
		flex-grow: 0;
		max-width: 58.333333%;
		flex-basis: 58.333333%;
	  }
	  .MuiGrid-grid-xs-8 {
		flex-grow: 0;
		max-width: 66.666667%;
		flex-basis: 66.666667%;
	  }
	  .MuiGrid-grid-xs-9 {
		flex-grow: 0;
		max-width: 75%;
		flex-basis: 75%;
	  }
	  .MuiGrid-grid-xs-10 {
		flex-grow: 0;
		max-width: 83.333333%;
		flex-basis: 83.333333%;
	  }
	  .MuiGrid-grid-xs-11 {
		flex-grow: 0;
		max-width: 91.666667%;
		flex-basis: 91.666667%;
	  }
	  .MuiGrid-grid-xs-12 {
		flex-grow: 0;
		max-width: 100%;
		flex-basis: 100%;
	  }
	  @media (min-width:600px) {
		.MuiGrid-grid-sm-auto {
		  flex-grow: 0;
		  max-width: none;
		  flex-basis: auto;
		}
		.MuiGrid-grid-sm-true {
		  flex-grow: 1;
		  max-width: 100%;
		  flex-basis: 0;
		}
		.MuiGrid-grid-sm-1 {
		  flex-grow: 0;
		  max-width: 8.333333%;
		  flex-basis: 8.333333%;
		}
		.MuiGrid-grid-sm-2 {
		  flex-grow: 0;
		  max-width: 16.666667%;
		  flex-basis: 16.666667%;
		}
		.MuiGrid-grid-sm-3 {
		  flex-grow: 0;
		  max-width: 25%;
		  flex-basis: 25%;
		}
		.MuiGrid-grid-sm-4 {
		  flex-grow: 0;
		  max-width: 33.333333%;
		  flex-basis: 33.333333%;
		}
		.MuiGrid-grid-sm-5 {
		  flex-grow: 0;
		  max-width: 41.666667%;
		  flex-basis: 41.666667%;
		}
		.MuiGrid-grid-sm-6 {
		  flex-grow: 0;
		  max-width: 50%;
		  flex-basis: 50%;
		}
		.MuiGrid-grid-sm-7 {
		  flex-grow: 0;
		  max-width: 58.333333%;
		  flex-basis: 58.333333%;
		}
		.MuiGrid-grid-sm-8 {
		  flex-grow: 0;
		  max-width: 66.666667%;
		  flex-basis: 66.666667%;
		}
		.MuiGrid-grid-sm-9 {
		  flex-grow: 0;
		  max-width: 75%;
		  flex-basis: 75%;
		}
		.MuiGrid-grid-sm-10 {
		  flex-grow: 0;
		  max-width: 83.333333%;
		  flex-basis: 83.333333%;
		}
		.MuiGrid-grid-sm-11 {
		  flex-grow: 0;
		  max-width: 91.666667%;
		  flex-basis: 91.666667%;
		}
		.MuiGrid-grid-sm-12 {
		  flex-grow: 0;
		  max-width: 100%;
		  flex-basis: 100%;
		}
	  }
	  @media (min-width:960px) {
		.MuiGrid-grid-md-auto {
		  flex-grow: 0;
		  max-width: none;
		  flex-basis: auto;
		}
		.MuiGrid-grid-md-true {
		  flex-grow: 1;
		  max-width: 100%;
		  flex-basis: 0;
		}
		.MuiGrid-grid-md-1 {
		  flex-grow: 0;
		  max-width: 8.333333%;
		  flex-basis: 8.333333%;
		}
		.MuiGrid-grid-md-2 {
		  flex-grow: 0;
		  max-width: 16.666667%;
		  flex-basis: 16.666667%;
		}
		.MuiGrid-grid-md-3 {
		  flex-grow: 0;
		  max-width: 25%;
		  flex-basis: 25%;
		}
		.MuiGrid-grid-md-4 {
		  flex-grow: 0;
		  max-width: 33.333333%;
		  flex-basis: 33.333333%;
		}
		.MuiGrid-grid-md-5 {
		  flex-grow: 0;
		  max-width: 41.666667%;
		  flex-basis: 41.666667%;
		}
		.MuiGrid-grid-md-6 {
		  flex-grow: 0;
		  max-width: 50%;
		  flex-basis: 50%;
		}
		.MuiGrid-grid-md-7 {
		  flex-grow: 0;
		  max-width: 58.333333%;
		  flex-basis: 58.333333%;
		}
		.MuiGrid-grid-md-8 {
		  flex-grow: 0;
		  max-width: 66.666667%;
		  flex-basis: 66.666667%;
		}
		.MuiGrid-grid-md-9 {
		  flex-grow: 0;
		  max-width: 75%;
		  flex-basis: 75%;
		}
		.MuiGrid-grid-md-10 {
		  flex-grow: 0;
		  max-width: 83.333333%;
		  flex-basis: 83.333333%;
		}
		.MuiGrid-grid-md-11 {
		  flex-grow: 0;
		  max-width: 91.666667%;
		  flex-basis: 91.666667%;
		}
		.MuiGrid-grid-md-12 {
		  flex-grow: 0;
		  max-width: 100%;
		  flex-basis: 100%;
		}
	  }
	  @media (min-width:1280px) {
		.MuiGrid-grid-lg-auto {
		  flex-grow: 0;
		  max-width: none;
		  flex-basis: auto;
		}
		.MuiGrid-grid-lg-true {
		  flex-grow: 1;
		  max-width: 100%;
		  flex-basis: 0;
		}
		.MuiGrid-grid-lg-1 {
		  flex-grow: 0;
		  max-width: 8.333333%;
		  flex-basis: 8.333333%;
		}
		.MuiGrid-grid-lg-2 {
		  flex-grow: 0;
		  max-width: 16.666667%;
		  flex-basis: 16.666667%;
		}
		.MuiGrid-grid-lg-3 {
		  flex-grow: 0;
		  max-width: 25%;
		  flex-basis: 25%;
		}
		.MuiGrid-grid-lg-4 {
		  flex-grow: 0;
		  max-width: 33.333333%;
		  flex-basis: 33.333333%;
		}
		.MuiGrid-grid-lg-5 {
		  flex-grow: 0;
		  max-width: 41.666667%;
		  flex-basis: 41.666667%;
		}
		.MuiGrid-grid-lg-6 {
		  flex-grow: 0;
		  max-width: 50%;
		  flex-basis: 50%;
		}
		.MuiGrid-grid-lg-7 {
		  flex-grow: 0;
		  max-width: 58.333333%;
		  flex-basis: 58.333333%;
		}
		.MuiGrid-grid-lg-8 {
		  flex-grow: 0;
		  max-width: 66.666667%;
		  flex-basis: 66.666667%;
		}
		.MuiGrid-grid-lg-9 {
		  flex-grow: 0;
		  max-width: 75%;
		  flex-basis: 75%;
		}
		.MuiGrid-grid-lg-10 {
		  flex-grow: 0;
		  max-width: 83.333333%;
		  flex-basis: 83.333333%;
		}
		.MuiGrid-grid-lg-11 {
		  flex-grow: 0;
		  max-width: 91.666667%;
		  flex-basis: 91.666667%;
		}
		.MuiGrid-grid-lg-12 {
		  flex-grow: 0;
		  max-width: 100%;
		  flex-basis: 100%;
		}
	  }
	  @media (min-width:1920px) {
		.MuiGrid-grid-xl-auto {
		  flex-grow: 0;
		  max-width: none;
		  flex-basis: auto;
		}
		.MuiGrid-grid-xl-true {
		  flex-grow: 1;
		  max-width: 100%;
		  flex-basis: 0;
		}
		.MuiGrid-grid-xl-1 {
		  flex-grow: 0;
		  max-width: 8.333333%;
		  flex-basis: 8.333333%;
		}
		.MuiGrid-grid-xl-2 {
		  flex-grow: 0;
		  max-width: 16.666667%;
		  flex-basis: 16.666667%;
		}
		.MuiGrid-grid-xl-3 {
		  flex-grow: 0;
		  max-width: 25%;
		  flex-basis: 25%;
		}
		.MuiGrid-grid-xl-4 {
		  flex-grow: 0;
		  max-width: 33.333333%;
		  flex-basis: 33.333333%;
		}
		.MuiGrid-grid-xl-5 {
		  flex-grow: 0;
		  max-width: 41.666667%;
		  flex-basis: 41.666667%;
		}
		.MuiGrid-grid-xl-6 {
		  flex-grow: 0;
		  max-width: 50%;
		  flex-basis: 50%;
		}
		.MuiGrid-grid-xl-7 {
		  flex-grow: 0;
		  max-width: 58.333333%;
		  flex-basis: 58.333333%;
		}
		.MuiGrid-grid-xl-8 {
		  flex-grow: 0;
		  max-width: 66.666667%;
		  flex-basis: 66.666667%;
		}
		.MuiGrid-grid-xl-9 {
		  flex-grow: 0;
		  max-width: 75%;
		  flex-basis: 75%;
		}
		.MuiGrid-grid-xl-10 {
		  flex-grow: 0;
		  max-width: 83.333333%;
		  flex-basis: 83.333333%;
		}
		.MuiGrid-grid-xl-11 {
		  flex-grow: 0;
		  max-width: 91.666667%;
		  flex-basis: 91.666667%;
		}
		.MuiGrid-grid-xl-12 {
		  flex-grow: 0;
		  max-width: 100%;
		  flex-basis: 100%;
		}
	  }
	  
	  .MuiPaper-root {
		color: rgba(0, 0, 0, 0.87);
		transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		background-color: #fff;
	  }
	  .MuiPaper-rounded {
		border-radius: 4px;
	  }
	  .MuiPaper-outlined {
		border: 1px solid rgba(0, 0, 0, 0.12);
	  }
	  .MuiPaper-elevation0 {
		box-shadow: none;
	  }
	  .MuiPaper-elevation1 {
		box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation2 {
		box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation3 {
		box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation4 {
		box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation5 {
		box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation6 {
		box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation7 {
		box-shadow: 0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation8 {
		box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation9 {
		box-shadow: 0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation10 {
		box-shadow: 0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation11 {
		box-shadow: 0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation12 {
		box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation13 {
		box-shadow: 0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation14 {
		box-shadow: 0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation15 {
		box-shadow: 0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation16 {
		box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation17 {
		box-shadow: 0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation18 {
		box-shadow: 0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation19 {
		box-shadow: 0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation20 {
		box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation21 {
		box-shadow: 0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation22 {
		box-shadow: 0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation23 {
		box-shadow: 0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12);
	  }
	  .MuiPaper-elevation24 {
		box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
	  }
	  
	  .MuiSvgIcon-root {
		fill: currentColor;
		width: 1em;
		height: 1em;
		display: inline-block;
		font-size: 1.5rem;
		transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		flex-shrink: 0;
		user-select: none;
	  }
	  .MuiSvgIcon-colorPrimary {
		color: #3f51b5;
	  }
	  .MuiSvgIcon-colorSecondary {
		color: #f50057;
	  }
	  .MuiSvgIcon-colorAction {
		color: rgba(0, 0, 0, 0.54);
	  }
	  .MuiSvgIcon-colorError {
		color: #f44336;
	  }
	  .MuiSvgIcon-colorDisabled {
		color: rgba(0, 0, 0, 0.26);
	  }
	  .MuiSvgIcon-fontSizeInherit {
		font-size: inherit;
	  }
	  .MuiSvgIcon-fontSizeSmall {
		font-size: 1.25rem;
	  }
	  .MuiSvgIcon-fontSizeLarge {
		font-size: 2.1875rem;
	  }
	  </style><style data-jss="" data-meta="MuiTypography">
	  .MuiTypography-root {
		margin: 0;
	  }
	  .MuiTypography-body2 {
		font-size: 0.875rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.43;
		letter-spacing: 0.01071em;
	  }
	  .MuiTypography-body1 {
		font-size: 1rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.5;
		letter-spacing: 0.00938em;
	  }
	  .MuiTypography-caption {
		font-size: 0.75rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.66;
		letter-spacing: 0.03333em;
	  }
	  .MuiTypography-button {
		font-size: 0.875rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 500;
		line-height: 1.75;
		letter-spacing: 0.02857em;
		text-transform: uppercase;
	  }
	  .MuiTypography-h1 {
		font-size: 6rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 300;
		line-height: 1.167;
		letter-spacing: -0.01562em;
	  }
	  .MuiTypography-h2 {
		font-size: 3.75rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 300;
		line-height: 1.2;
		letter-spacing: -0.00833em;
	  }
	  .MuiTypography-h3 {
		font-size: 3rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.167;
		letter-spacing: 0em;
	  }
	  .MuiTypography-h4 {
		font-size: 2.125rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.235;
		letter-spacing: 0.00735em;
	  }
	  .MuiTypography-h5 {
		font-size: 1.5rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.334;
		letter-spacing: 0em;
	  }
	  .MuiTypography-h6 {
		font-size: 1.25rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 500;
		line-height: 1.6;
		letter-spacing: 0.0075em;
	  }
	  .MuiTypography-subtitle1 {
		font-size: 1rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.75;
		letter-spacing: 0.00938em;
	  }
	  .MuiTypography-subtitle2 {
		font-size: 0.875rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 500;
		line-height: 1.57;
		letter-spacing: 0.00714em;
	  }
	  .MuiTypography-overline {
		font-size: 0.75rem;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 2.66;
		letter-spacing: 0.08333em;
		text-transform: uppercase;
	  }
	  .MuiTypography-srOnly {
		width: 1px;
		height: 1px;
		overflow: hidden;
		position: absolute;
	  }
	  .MuiTypography-alignLeft {
		text-align: left;
	  }
	  .MuiTypography-alignCenter {
		text-align: center;
	  }
	  .MuiTypography-alignRight {
		text-align: right;
	  }
	  .MuiTypography-alignJustify {
		text-align: justify;
	  }
	  .MuiTypography-noWrap {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	  }
	  .MuiTypography-gutterBottom {
		margin-bottom: 0.35em;
	  }
	  .MuiTypography-paragraph {
		margin-bottom: 16px;
	  }
	  .MuiTypography-colorInherit {
		color: inherit;
	  }
	  .MuiTypography-colorPrimary {
		color: #3f51b5;
	  }
	  .MuiTypography-colorSecondary {
		color: #f50057;
	  }
	  .MuiTypography-colorTextPrimary {
		color: rgba(0, 0, 0, 0.87);
	  }
	  .MuiTypography-colorTextSecondary {
		color: rgba(0, 0, 0, 0.54);
	  }
	  .MuiTypography-colorError {
		color: #f44336;
	  }
	  .MuiTypography-displayInline {
		display: inline;
	  }
	  .MuiTypography-displayBlock {
		display: block;
	  }
	  
	  .MuiChip-root {
		color: rgba(0, 0, 0, 0.87);
		border: none;
		cursor: default;
		height: 32px;
		display: inline-flex;
		outline: 0;
		padding: 0;
		font-size: 0.8125rem;
		box-sizing: border-box;
		transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		align-items: center;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		white-space: nowrap;
		border-radius: 16px;
		vertical-align: middle;
		justify-content: center;
		text-decoration: none;
		background-color: #e0e0e0;
	  }
	  .MuiChip-root.Mui-disabled {
		opacity: 0.5;
		pointer-events: none;
	  }
	  .MuiChip-root .MuiChip-avatar {
		color: #616161;
		width: 24px;
		height: 24px;
		font-size: 0.75rem;
		margin-left: 5px;
		margin-right: -6px;
	  }
	  .MuiChip-root .MuiChip-avatarColorPrimary {
		color: #fff;
		background-color: #303f9f;
	  }
	  .MuiChip-root .MuiChip-avatarColorSecondary {
		color: #fff;
		background-color: #c51162;
	  }
	  .MuiChip-root .MuiChip-avatarSmall {
		width: 18px;
		height: 18px;
		font-size: 0.625rem;
		margin-left: 4px;
		margin-right: -4px;
	  }
	  .MuiChip-sizeSmall {
		height: 24px;
	  }
	  .MuiChip-colorPrimary {
		color: #fff;
		background-color: #3f51b5;
	  }
	  .MuiChip-colorSecondary {
		color: #fff;
		background-color: #f50057;
	  }
	  .MuiChip-clickable {
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
	  }
	  .MuiChip-clickable:hover, .MuiChip-clickable:focus {
		background-color: rgb(206, 206, 206);
	  }
	  .MuiChip-clickable:active {
		box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
	  }
	  .MuiChip-clickableColorPrimary:hover, .MuiChip-clickableColorPrimary:focus {
		background-color: rgb(78, 94, 186);
	  }
	  .MuiChip-clickableColorSecondary:hover, .MuiChip-clickableColorSecondary:focus {
		background-color: rgb(245, 20, 100);
	  }
	  .MuiChip-deletable:focus {
		background-color: rgb(206, 206, 206);
	  }
	  .MuiChip-deletableColorPrimary:focus {
		background-color: rgb(101, 115, 195);
	  }
	  .MuiChip-deletableColorSecondary:focus {
		background-color: rgb(247, 51, 120);
	  }
	  .MuiChip-outlined {
		border: 1px solid rgba(0, 0, 0, 0.23);
		background-color: transparent;
	  }
	  .MuiChip-clickable.MuiChip-outlined:hover, .MuiChip-clickable.MuiChip-outlined:focus, .MuiChip-deletable.MuiChip-outlined:focus {
		background-color: rgba(0, 0, 0, 0.04);
	  }
	  .MuiChip-outlined .MuiChip-avatar {
		margin-left: 4px;
	  }
	  .MuiChip-outlined .MuiChip-avatarSmall {
		margin-left: 2px;
	  }
	  .MuiChip-outlined .MuiChip-icon {
		margin-left: 4px;
	  }
	  .MuiChip-outlined .MuiChip-iconSmall {
		margin-left: 2px;
	  }
	  .MuiChip-outlined .MuiChip-deleteIcon {
		margin-right: 5px;
	  }
	  .MuiChip-outlined .MuiChip-deleteIconSmall {
		margin-right: 3px;
	  }
	  .MuiChip-outlinedPrimary {
		color: #3f51b5;
		border: 1px solid #3f51b5;
	  }
	  .MuiChip-clickable.MuiChip-outlinedPrimary:hover, .MuiChip-clickable.MuiChip-outlinedPrimary:focus, .MuiChip-deletable.MuiChip-outlinedPrimary:focus {
		background-color: rgba(63, 81, 181, 0.04);
	  }
	  .MuiChip-outlinedSecondary {
		color: #f50057;
		border: 1px solid #f50057;
	  }
	  .MuiChip-clickable.MuiChip-outlinedSecondary:hover, .MuiChip-clickable.MuiChip-outlinedSecondary:focus, .MuiChip-deletable.MuiChip-outlinedSecondary:focus {
		background-color: rgba(245, 0, 87, 0.04);
	  }
	  .MuiChip-icon {
		color: #616161;
		margin-left: 5px;
		margin-right: -6px;
	  }
	  .MuiChip-iconSmall {
		width: 18px;
		height: 18px;
		margin-left: 4px;
		margin-right: -4px;
	  }
	  .MuiChip-iconColorPrimary {
		color: inherit;
	  }
	  .MuiChip-iconColorSecondary {
		color: inherit;
	  }
	  .MuiChip-label {
		overflow: hidden;
		white-space: nowrap;
		padding-left: 12px;
		padding-right: 12px;
		text-overflow: ellipsis;
	  }
	  .MuiChip-labelSmall {
		padding-left: 8px;
		padding-right: 8px;
	  }
	  .MuiChip-deleteIcon {
		color: rgba(0, 0, 0, 0.26);
		width: 22px;
		cursor: pointer;
		height: 22px;
		margin: 0 5px 0 -6px;
		-webkit-tap-highlight-color: transparent;
	  }
	  .MuiChip-deleteIcon:hover {
		color: rgba(0, 0, 0, 0.4);
	  }
	  .MuiChip-deleteIconSmall {
		width: 16px;
		height: 16px;
		margin-left: -4px;
		margin-right: 4px;
	  }
	  .MuiChip-deleteIconColorPrimary {
		color: rgba(255, 255, 255, 0.7);
	  }
	  .MuiChip-deleteIconColorPrimary:hover, .MuiChip-deleteIconColorPrimary:active {
		color: #fff;
	  }
	  .MuiChip-deleteIconColorSecondary {
		color: rgba(255, 255, 255, 0.7);
	  }
	  .MuiChip-deleteIconColorSecondary:hover, .MuiChip-deleteIconColorSecondary:active {
		color: #fff;
	  }
	  .MuiChip-deleteIconOutlinedColorPrimary {
		color: rgba(63, 81, 181, 0.7);
	  }
	  .MuiChip-deleteIconOutlinedColorPrimary:hover, .MuiChip-deleteIconOutlinedColorPrimary:active {
		color: #3f51b5;
	  }
	  .MuiChip-deleteIconOutlinedColorSecondary {
		color: rgba(245, 0, 87, 0.7);
	  }
	  .MuiChip-deleteIconOutlinedColorSecondary:hover, .MuiChip-deleteIconOutlinedColorSecondary:active {
		color: #f50057;
	  }
	  
	  .MuiContainer-root {
		width: 100%;
		display: block;
		box-sizing: border-box;
		margin-left: auto;
		margin-right: auto;
		padding-left: 16px;
		padding-right: 16px;
	  }
	  @media (min-width:600px) {
		.MuiContainer-root {
		  padding-left: 24px;
		  padding-right: 24px;
		}
	  }
	  .MuiContainer-disableGutters {
		padding-left: 0;
		padding-right: 0;
	  }
	  @media (min-width:600px) {
		.MuiContainer-fixed {
		  max-width: 600px;
		}
	  }
	  @media (min-width:960px) {
		.MuiContainer-fixed {
		  max-width: 960px;
		}
	  }
	  @media (min-width:1280px) {
		.MuiContainer-fixed {
		  max-width: 1280px;
		}
	  }
	  @media (min-width:1920px) {
		.MuiContainer-fixed {
		  max-width: 1920px;
		}
	  }
	  @media (min-width:0px) {
		.MuiContainer-maxWidthXs {
		  max-width: 444px;
		}
	  }
	  @media (min-width:600px) {
		.MuiContainer-maxWidthSm {
		  max-width: 600px;
		}
	  }
	  @media (min-width:960px) {
		.MuiContainer-maxWidthMd {
		  max-width: 960px;
		}
	  }
	  @media (min-width:1280px) {
		.MuiContainer-maxWidthLg {
		  max-width: 1280px;
		}
	  }
	  @media (min-width:1920px) {
		.MuiContainer-maxWidthXl {
		  max-width: 1920px;
		}
	  }
	  
	  @-webkit-keyframes mui-auto-fill {}
	  @-webkit-keyframes mui-auto-fill-cancel {}
	  .MuiInputBase-root {
		color: rgba(0, 0, 0, 0.87);
		cursor: text;
		display: inline-flex;
		position: relative;
		font-size: 1rem;
		box-sizing: border-box;
		align-items: center;
		font-family: "Roboto", "Helvetica", "Arial", sans-serif;
		font-weight: 400;
		line-height: 1.1876em;
		letter-spacing: 0.00938em;
	  }
	  .MuiInputBase-root.Mui-disabled {
		color: rgba(0, 0, 0, 0.38);
		cursor: default;
	  }
	  .MuiInputBase-multiline {
		padding: 6px 0 7px;
	  }
	  .MuiInputBase-multiline.MuiInputBase-marginDense {
		padding-top: 3px;
	  }
	  .MuiInputBase-fullWidth {
		width: 100%;
	  }
	  .MuiInputBase-input {
		font: inherit;
		color: currentColor;
		width: 100%;
		border: 0;
		height: 1.1876em;
		margin: 0;
		display: block;
		padding: 6px 0 7px;
		min-width: 0;
		background: none;
		box-sizing: content-box;
		animation-name: mui-auto-fill-cancel;
		letter-spacing: inherit;
		animation-duration: 10ms;
		-webkit-tap-highlight-color: transparent;
	  }
	  .MuiInputBase-input::-webkit-input-placeholder {
		color: currentColor;
		opacity: 0.42;
		transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	  }
	  .MuiInputBase-input::-moz-placeholder {
		color: currentColor;
		opacity: 0.42;
		transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	  }
	  .MuiInputBase-input:-ms-input-placeholder {
		color: currentColor;
		opacity: 0.42;
		transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	  }
	  .MuiInputBase-input::-ms-input-placeholder {
		color: currentColor;
		opacity: 0.42;
		transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	  }
	  .MuiInputBase-input:focus {
		outline: 0;
	  }
	  .MuiInputBase-input:invalid {
		box-shadow: none;
	  }
	  .MuiInputBase-input::-webkit-search-decoration {
		-webkit-appearance: none;
	  }
	  .MuiInputBase-input.Mui-disabled {
		opacity: 1;
	  }
	  .MuiInputBase-input:-webkit-autofill {
		animation-name: mui-auto-fill;
		animation-duration: 5000s;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder {
		opacity: 0 !important;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder {
		opacity: 0 !important;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder {
		opacity: 0 !important;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder {
		opacity: 0 !important;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-webkit-input-placeholder {
		opacity: 0.42;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-moz-placeholder {
		opacity: 0.42;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus:-ms-input-placeholder {
		opacity: 0.42;
	  }
	  label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:focus::-ms-input-placeholder {
		opacity: 0.42;
	  }
	  .MuiInputBase-inputMarginDense {
		padding-top: 3px;
	  }
	  .MuiInputBase-inputMultiline {
		height: auto;
		resize: none;
		padding: 0;
	  }
	  .MuiInputBase-inputTypeSearch {
		-moz-appearance: textfield;
		-webkit-appearance: textfield;
	  }
	  
	  .MuiFormControl-root {
		border: 0;
		margin: 0;
		display: inline-flex;
		padding: 0;
		position: relative;
		min-width: 0;
		flex-direction: column;
		vertical-align: top;
	  }
	  .MuiFormControl-marginNormal {
		margin-top: 16px;
		margin-bottom: 8px;
	  }
	  .MuiFormControl-marginDense {
		margin-top: 8px;
		margin-bottom: 4px;
	  }
	  .MuiFormControl-fullWidth {
		width: 100%;
	  }
	  
	  .MuiInput-root {
		position: relative;
	  }
	  label + .MuiInput-formControl {
		margin-top: 16px;
	  }
	  .MuiInput-colorSecondary.MuiInput-underline:after {
		border-bottom-color: #f50057;
	  }
	  .MuiInput-underline:after {
		left: 0;
		right: 0;
		bottom: 0;
		content: "";
		position: absolute;
		transform: scaleX(0);
		transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
		border-bottom: 2px solid #3f51b5;
		pointer-events: none;
	  }
	  .MuiInput-underline.Mui-focused:after {
		transform: scaleX(1);
	  }
	  .MuiInput-underline.Mui-error:after {
		transform: scaleX(1);
		border-bottom-color: #f44336;
	  }
	  .MuiInput-underline:before {
		left: 0;
		right: 0;
		bottom: 0;
		content: "\\00a0";
		position: absolute;
		transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		border-bottom: 1px solid rgba(0, 0, 0, 0.42);
		pointer-events: none;
	  }
	  .MuiInput-underline:hover:not(.Mui-disabled):before {
		border-bottom: 2px solid rgba(0, 0, 0, 0.87);
	  }
	  .MuiInput-underline.Mui-disabled:before {
		border-bottom-style: dotted;
	  }
	  @media (hover: none) {
		.MuiInput-underline:hover:not(.Mui-disabled):before {
		  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
		}
	  }
	  
	  .MuiInputAdornment-root {
		height: 0.01em;
		display: flex;
		max-height: 2em;
		align-items: center;
		white-space: nowrap;
	  }
	  .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel) {
		margin-top: 16px;
	  }
	  .MuiInputAdornment-positionStart {
		margin-right: 8px;
	  }
	  .MuiInputAdornment-positionEnd {
		margin-left: 8px;
	  }
	  .MuiInputAdornment-disablePointerEvents {
		pointer-events: none;
	  }
	  
	  .MuiPopover-paper {
		outline: 0;
		position: absolute;
		max-width: calc(100% - 32px);
		min-width: 16px;
		max-height: calc(100% - 32px);
		min-height: 16px;
		overflow-x: hidden;
		overflow-y: auto;
	  }
	  
	  .MuiMenu-paper {
		max-height: calc(100% - 96px);
		-webkit-overflow-scrolling: touch;
	  }
	  .MuiMenu-list {
		outline: 0;
	  }
	  
	  .PrivateNotchedOutline-root-13 {
		top: -5px;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0;
		padding: 0 8px;
		overflow: hidden;
		position: absolute;
		border-style: solid;
		border-width: 1px;
		border-radius: inherit;
		pointer-events: none;
	  }
	  .PrivateNotchedOutline-legend-14 {
		padding: 0;
		text-align: left;
		transition: width 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
		line-height: 11px;
	  }
	  .PrivateNotchedOutline-legendLabelled-15 {
		width: auto;
		height: 11px;
		display: block;
		padding: 0;
		font-size: 0.75em;
		max-width: 0.01px;
		text-align: left;
		transition: max-width 50ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
		visibility: hidden;
	  }
	  .PrivateNotchedOutline-legendLabelled-15 > span {
		display: inline-block;
		padding-left: 5px;
		padding-right: 5px;
	  }
	  .PrivateNotchedOutline-legendNotched-16 {
		max-width: 1000px;
		transition: max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms;
	  }
	  
	  .MuiOutlinedInput-root {
		position: relative;
		border-radius: 4px;
	  }
	  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
		border-color: rgba(0, 0, 0, 0.87);
	  }
	  @media (hover: none) {
		.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
		  border-color: rgba(0, 0, 0, 0.23);
		}
	  }
	  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: #3f51b5;
		border-width: 2px;
	  }
	  .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
		border-color: #f44336;
	  }
	  .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline {
		border-color: rgba(0, 0, 0, 0.26);
	  }
	  .MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: #f50057;
	  }
	  .MuiOutlinedInput-adornedStart {
		padding-left: 14px;
	  }
	  .MuiOutlinedInput-adornedEnd {
		padding-right: 14px;
	  }
	  .MuiOutlinedInput-multiline {
		padding: 18.5px 14px;
	  }
	  .MuiOutlinedInput-multiline.MuiOutlinedInput-marginDense {
		padding-top: 10.5px;
		padding-bottom: 10.5px;
	  }
	  .MuiOutlinedInput-notchedOutline {
		border-color: rgba(0, 0, 0, 0.23);
	  }
	  .MuiOutlinedInput-input {
		padding: 18.5px 14px;
	  }
	  .MuiOutlinedInput-input:-webkit-autofill {
		border-radius: inherit;
	  }
	  .MuiOutlinedInput-inputMarginDense {
		padding-top: 10.5px;
		padding-bottom: 10.5px;
	  }
	  .MuiOutlinedInput-inputMultiline {
		padding: 0;
	  }
	  .MuiOutlinedInput-inputAdornedStart {
		padding-left: 0;
	  }
	  .MuiOutlinedInput-inputAdornedEnd {
		padding-right: 0;
	  }
	  
	  .MuiSelect-select {
		cursor: pointer;
		min-width: 16px;
		user-select: none;
		border-radius: 0;
		-moz-appearance: none;
		-webkit-appearance: none;
	  }
	  .MuiSelect-select:focus {
		border-radius: 0;
		background-color: rgba(0, 0, 0, 0.05);
	  }
	  .MuiSelect-select::-ms-expand {
		display: none;
	  }
	  .MuiSelect-select.Mui-disabled {
		cursor: default;
	  }
	  .MuiSelect-select[multiple] {
		height: auto;
	  }
	  .MuiSelect-select:not([multiple]) option, .MuiSelect-select:not([multiple]) optgroup {
		background-color: #fff;
	  }
	  .MuiSelect-select.MuiSelect-select {
		padding-right: 24px;
	  }
	  .MuiSelect-filled.MuiSelect-filled {
		padding-right: 32px;
	  }
	  .MuiSelect-outlined {
		border-radius: 4px;
	  }
	  .MuiSelect-outlined.MuiSelect-outlined {
		padding-right: 32px;
	  }
	  .MuiSelect-selectMenu {
		height: auto;
		overflow: hidden;
		min-height: 1.1876em;
		white-space: nowrap;
		text-overflow: ellipsis;
	  }
	  .MuiSelect-icon {
		top: calc(50% - 12px);
		color: rgba(0, 0, 0, 0.54);
		right: 0;
		position: absolute;
		pointer-events: none;
	  }
	  .MuiSelect-icon.Mui-disabled {
		color: rgba(0, 0, 0, 0.26);
	  }
	  .MuiSelect-iconOpen {
		transform: rotate(180deg);
	  }
	  .MuiSelect-iconFilled {
		right: 7px;
	  }
	  .MuiSelect-iconOutlined {
		right: 7px;
	  }
	  .MuiSelect-nativeInput {
		left: 0;
		width: 100%;
		bottom: 0;
		opacity: 0;
		position: absolute;
		pointer-events: none;
	  }
	  
	  .makeStyles-container-1 {
		text-align: center;
	  }
	  .makeStyles-chipHeader-2 {
		width: 100%;
		border: 1px red solid;
		background-color: #ff9800;
	  }
	  .makeStyles-gridRow-3 {
		margin-bottom: 10px;
	  }
	  .makeStyles-gridItemCaption-4 {
		text-align: right;
	  }
	  .makeStyles-gridItemValue-5 {
		text-align: left;
	  }
	  .makeStyles-gridItemMessage-6 {
		text-align: center;
	  }
	  .makeStyles-gridItemDisabled-7 {
		background-color: #aaaaaa;
	  }
	  .makeStyles-typoBoldColor-8 {
		color: #ff0000;
	  }
	  .makeStyles-selectBox-9 {
		width: 100%;
	  }
	  .makeStyles-formControl-10 {
		margin: 8px;
		max-width: 200px;
		min-width: 200px;
	  }
	  .makeStyles-root-11 {
		flex-grow: 1;
		margin-left: auto;
		margin-right: auto;
	  }
	  .makeStyles-cautionPaper-12 {
		margin-left: auto;
		margin-right: auto;
		background-color: #aaaaaa;
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
