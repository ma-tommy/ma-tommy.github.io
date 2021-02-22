(() => {
	$(".first-section > div:eq(1)").after('<div id="simulation"></div>');

	const makeHtml = (function () {
		return `
		<div class="container">    
            <span class="block_header">所得控除額 わくわく電卓</span>
            <div class="grid_container">
            
            
                <span class="grid_age_label">年齢</span>
                <select class="grid_age_value">
                    <option selected disabled hidden>
                    年齢を選択してください
                    </option>
                </select>
            
                <span class="grid_job_label">職業</span>
                <select class="grid_job_value">
                    <option value="1">自営業(個人事業主)</option>
                    <option value="2">公務員</option>
                    <option value="3">会社員(企業型DCなし、確定給付企業年金(DB)なし) </option>
                    <option value="4">会社員(企業型DCあり、確定給付企業年金(DB)なし)</option>
                    <option value="5">会社員(企業型DCなし、確定給付企業年金(DB)あり) </option>
                    <option value="6">会社員(企業型DCあり、確定給付企業年金(DB)あり) </option>
                </select>
            
                <span class="grid_annual_income_label">年収</span>
                <input type="number" value='0' class="grid_annual_income_value" step="10000"></input>
            
                <span class='grid_insurance_label'>あなたの毎月の掛金上限はこちら↓</span>
                <input type="text" disabled class="grid_insurance_value" value="23,000円/月">
                <span class="grid_insurance_caution">※職業によって、掛金上限額は異なります。</span>
            
                
                <span class="grid_insurance_input_label">毎月の掛金予定額を入力ください</span>
                <input type="number" class="grid_insurance_input_value" value="0" step="1000" >
                <span class="grid_insurance_input_error_limmt">※掛け金の上限を超えています</span>
                <span></span><span class="grid_insurance_input_caution">※iDeCoの掛金は5,000円以上1,000円刻みです。</span>
            </div>
            <div>
                <p class="yazirusi">⬇️</p>
                <div>
                    <span class="yaer_deduction_label">iDeCoを活用することで、</span><br>
                </div>
                <div class="yaer_deduction_value">
                    年間
                    <span id="yaer_deduction">0</span><span>円
                </div>
                <span class="sum_deduction_label">60歳まで活用した場合、</span><br>
                <div class="sum_deduction_value">
                    合計
                    <span id="sum_deduction">0</span>
                    円の
                </div>
                <div>
                    所得税が控除されます。
                </div>
                <div>
                    専業主婦(夫)の場合、所得自体がないため「所得控除」はありません。運用益、受取り時の節税メリットのみです。
                </div>
                <div class="bottom_message">
                    <p>※あくまでも簡易シミュレーションです。　節税金額を示唆・保証するものではありません。</p>
                    
                    <p>※課税所得は年収から必要経費や保険料等の各種控除を差し引いた金額であり、個人によってその額は大きく異なってきます。あくまで一例としてご参考ください。</p>
                    <p>※税率は2020年12月8日現在の税率にて試算しています。税率が変更となった場合には結果も異なります。</p>
                    <p>※復興特別所得税、配偶者控除（配偶者特別控除）は考慮していません。</p>
                </div>
        </div>
		`;
	})();
	$("#simulation").append(makeHtml);

	var s = `
	.container {
		margin: 30px;
		text-align: center;
	}
	
	 .block_header {
		padding: 1% 20% 1% 20%;
		background: rgb(246, 156, 85);
		border: 1px red solid;
		border-radius: 10px;
		
	 }
	 .container_table {
		 display: table;
		 table-layout:fixed;
	 }
	 .table_row {
		display: table-row;
	 }
	 .table_cell {
		display: table-cell;

	 }
	.grid_container {
		margin: 2em;
		display: grid;
		grid-template-columns: 30% 60%;
		place-items: center;
		justify-items: left;
		column-gap: 2em;
		row-gap: 1em;
		
	}
	.grid_age_label {
		grid-column: 1;
		grid-row: 1;
		width: 100%;
		text-align: end;
	}

	.grid_age_input {
		grid-column: 2;
		grid-row: 1;
	}

	.grid_job_label {
		grid-column: 1;
		grid-row: 2;
		width: 100%;
		text-align: end;
	}

	.grid_job_input {
		grid-column: 2;
		grid-row: 2;
	}

	.grid_annual_income_label {
		grid-column: 1;
		grid-row: 3;
		width: 100%;
		text-align: end;
	}

	.grid_annual_income_value {
		grid-column: 2;
		grid-row: 3;
		text-align: end;
	}

	.grid_annual_income_input {
		grid-column: 2;
		grid-row: 3;
	}

	.grid_insurance_label {
		grid-column: 1/3;
		grid-row: 4;
		width: 100%;
	}

	.grid_insurance_value {
		grid-column: 2/3;
		grid-row: 5;
		text-align: center;
	}

	.grid_insurance_caution {
		grid-column: 2/3;
		grid-row: 6;
	}

	.grid_insurance_input_label {
		grid-column: 2/3;
		grid-row: 7;
	}

	.grid_insurance_input_value {
		grid-column: 2/3;
		grid-row: 8;
		text-align: end;
	}

	.grid_insurance_input_error_limmt {
		grid-column: 2/3;
		grid-row: 9;
	}

	.grid_insurance_input_caution {
		grid-column: 2/3;
		grid-row: 10;
	}

	.yazirusi {
		text-align: center;
	}

	.yaer_deduction_label {
		
	}

	.yaer_deduction_value {
	 
	}

	.yaer_deduction_value #yaer_deduction {
		color: red;
		font: bold;
	}

	.sum_deduction_label {
	 
	}

	.sum_deduction_value {
	 
	}

	.sum_deduction_value #sum_deduction {
		color: red;
		font: bold;
	}

	.bottom_message {
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
