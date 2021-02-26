<html lang="ja">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=Shift_JIS" />

		<meta http-equiv="Content-Script-Type" content="text/javascript" />
		<meta http-equiv="Content-Style-Type" content="text/css" />
		<meta name="title" content="NTT WEST Official Web site" />
		<meta
			name="copyright"
			content="Copyright (C) NIPPON TELEGRAPH AND TELEPHONE WEST CORPORATION"
		/>

		<script
			type="text/javascript"
			async=""
			src="https://www.google-analytics.com/analytics.js"
		></script>
		<script
			async=""
			src="https://www.googletagmanager.com/gtm.js?id=GTM-TKSQHQM"
		></script>
		<script
			type="text/javascript"
			src="https://www.west-frc.com/adds/jsp/common/js/common.js"
		></script>

		<script language="JavaScript">
			function resetParam(form) {
				form.adr_flg.value = "";
				form.jso_cd.value = "";
				form.jso_cd_oya.value = "";
				form.oya_flg.value = "";
				form.n_adr_flg.value = "";
				form.new_jso_cd.value = "";
				form.abol.value = "";
				form.post1.value = "";
				form.post2.value = "";
				form.post.value = "";
				form.tod_flg.value = "1";
				form.tod_gn_flg.value = "";
				form.jso_cd_tod.value = "16";
				form.ent_tod.value = "富山県";
				form.sel_tod.value = "富山県";
				form.shi_flg.value = "";
				form.shi_gn_flg.value = "";
				form.jso_cd_shi.value = "";
				form.ent_shi.value = "";
				form.sel_shi.value = "";
				form.ooa_flg.value = "";
				form.ooa_gn_flg.value = "";
				form.jso_cd_ooa.value = "";
				form.ent_ooa.value = "";
				form.sel_ooa.value = "";
				form.aza_flg.value = "";
				form.aza_gn_flg.value = "";
				form.jso_cd_aza.value = "";
				form.ent_aza.value = "";
				form.sel_aza.value = "";
				form.ad_r_code.value = "";
				form.adr1_flg.value = "";
				form.adr1_gn_flg.value = "";
				form.ent_adr1.value = "";
				form.sel_adr1.value = "";
				form.adr2_flg.value = "";
				form.adr2_gn_flg.value = "";
				form.ent_adr2.value = "";
				form.sel_adr2.value = "";
				form.adr3_flg.value = "";
				form.adr3_gn_flg.value = "";
				form.ent_adr3.value = "";
				form.sel_adr3.value = "";
				form.bld1_flg.value = "";
				form.bld1_gn_flg.value = "";
				form.ent_bld1.value = "";
				form.sel_bld1.value = "";
				form.src_bld.value = "";
				form.src_bld_input.value = "";
				form.scr_hist.value = "";
				form.act_id.value = "";

				form.p_mansion.value = "";

				form.cp.value = "00171109";
				form.cp1.value = "";
				form.cp2.value = "";
				form.wlid.value = "";

				form.etc_data.value = "";
				form.cmn.value = "";
				form.seq_no.value = "19922745";
				form.s_id.value =
					"p16BZ9ltME46taRP3ylCqhx0e1c8255957c8e511fd3e4a63c2d3129";
				form.adr_omit_from.value = "";
				form.bld_ovl_flg.value = "";
				form.ovl_flg.value = "";

				form.research_adr_flg.value = "";
			}
		</script>

		<script language="JavaScript">
			var page_lock_flag = "0";

			function setPageLock() {
				if (page_lock_flag == "0") {
					page_lock_flag = "1";
					return true;
				} else {
					return false;
				}
			}

			function setPageUnLock() {
				page_lock_flag = "0";
			}
		</script>

		<link
			rel="stylesheet"
			href="https://www.west-frc.com/adds/jsp/common/css/style.css"
			type="text/css"
		/>
		<link
			rel="stylesheet"
			href="https://www.west-frc.com/adds/jsp/common/css/style.css/jsp/common/css/class.css"
			type="text/css"
		/>

		<title>フレッツ光公式｜NTT西日本｜サービス提供エリア確認</title>

		<script language="JavaScript">
			function selectPresentAdd(form, actId) {
				if (setPageLock() == false) {
					return false;
				}
				resetParam(form);

				form.act_id.value = actId;

				var sf7Flg = display_waiting();
				form.action = "https://www.west-frc.com/adds/A10201S";
				if (sf7Flg == true) {
					setTimeout(doSubmit, 100, form);
				} else {
					form.submit();
				}
			}

			function selectShi(form, shiNm, shiCd) {
				if (setPageLock() == false) {
					return false;
				}
				resetParam(form);

				form.act_id.value = "AC0103";

				form.sel_shi.value = shiNm;

				form.ent_shi.value = shiNm;

				form.jso_cd_shi.value = shiCd;

				form.shi_flg.value = "1";

				var sf7Flg = display_waiting();
				form.action = "https://www.west-frc.com/adds/A10201S";
				if (sf7Flg == true) {
					setTimeout(doSubmit, 100, form);
				} else {
					form.submit();
				}
			}

			function dispAll(form) {
				if (setPageLock() == false) {
					return false;
				}

				document.getElementById("lineNo1").style.display = "block";
				document.getElementById("lineNo2").style.display = "block";
				document.getElementById("lineNo3").style.display = "block";
				document.getElementById("lineNo4").style.display = "block";
				document.getElementById("lineNo5").style.display = "block";
				document.getElementById("lineNo6").style.display = "block";
				document.getElementById("lineNo7").style.display = "block";
				document.getElementById("lineNo8").style.display = "block";
				document.getElementById("lineNo9").style.display = "block";
				document.getElementById("lineNo10").style.display = "block";
				document.getElementById("index1").style.display = "block";
				document.getElementById("index2").style.display = "block";
				document.getElementById("index3").style.display = "block";
				document.getElementById("index4").style.display = "block";
				document.getElementById("index5").style.display = "block";
				document.getElementById("index6").style.display = "block";
				document.getElementById("index7").style.display = "block";
				document.getElementById("index8").style.display = "block";
				document.getElementById("index9").style.display = "block";
				document.getElementById("index10").style.display = "block";

				document.getElementById("all_noSel").style.display = "none";
				document.getElementById("all_selected").style.display = "block";

				if (document.getElementById("a_noSel") != undefined) {
					document.getElementById("a_noSel").style.display = "block";
					document.getElementById("a_selected").style.display = "none";
				}
				if (document.getElementById("ka_noSel") != undefined) {
					document.getElementById("ka_noSel").style.display = "block";
					document.getElementById("ka_selected").style.display = "none";
				}
				if (document.getElementById("sa_noSel") != undefined) {
					document.getElementById("sa_noSel").style.display = "block";
					document.getElementById("sa_selected").style.display = "none";
				}
				if (document.getElementById("ta_noSel") != undefined) {
					document.getElementById("ta_noSel").style.display = "block";
					document.getElementById("ta_selected").style.display = "none";
				}
				if (document.getElementById("na_noSel") != undefined) {
					document.getElementById("na_noSel").style.display = "block";
					document.getElementById("na_selected").style.display = "none";
				}
				if (document.getElementById("ha_noSel") != undefined) {
					document.getElementById("ha_noSel").style.display = "block";
					document.getElementById("ha_selected").style.display = "none";
				}
				if (document.getElementById("ma_noSel") != undefined) {
					document.getElementById("ma_noSel").style.display = "block";
					document.getElementById("ma_selected").style.display = "none";
				}
				if (document.getElementById("ya_noSel") != undefined) {
					document.getElementById("ya_noSel").style.display = "block";
					document.getElementById("ya_selected").style.display = "none";
				}
				if (document.getElementById("ra_noSel") != undefined) {
					document.getElementById("ra_noSel").style.display = "block";
					document.getElementById("ra_selected").style.display = "none";
				}
				if (document.getElementById("wa_noSel") != undefined) {
					document.getElementById("wa_noSel").style.display = "block";
					document.getElementById("wa_selected").style.display = "none";
				}

				document.getElementById("list-box").scrollTop = "0";
				setPageUnLock();
				return;
			}

			function selectLine(form, btnId) {
				if (setPageLock() == false) {
					return false;
				}

				document.getElementById("lineNo1").style.display = "none";
				document.getElementById("lineNo2").style.display = "none";
				document.getElementById("lineNo3").style.display = "none";
				document.getElementById("lineNo4").style.display = "none";
				document.getElementById("lineNo5").style.display = "none";
				document.getElementById("lineNo6").style.display = "none";
				document.getElementById("lineNo7").style.display = "none";
				document.getElementById("lineNo8").style.display = "none";
				document.getElementById("lineNo9").style.display = "none";
				document.getElementById("lineNo10").style.display = "none";
				document.getElementById("index1").style.display = "none";
				document.getElementById("index2").style.display = "none";
				document.getElementById("index3").style.display = "none";
				document.getElementById("index4").style.display = "none";
				document.getElementById("index5").style.display = "none";
				document.getElementById("index6").style.display = "none";
				document.getElementById("index7").style.display = "none";
				document.getElementById("index8").style.display = "none";
				document.getElementById("index9").style.display = "none";
				document.getElementById("index10").style.display = "none";

				document.getElementById("lineNo" + btnId).style.display = "block";

				var lineName;

				if (btnId == 1) {
					lineName = "a";
				} else if (btnId == 2) {
					lineName = "ka";
				} else if (btnId == 3) {
					lineName = "sa";
				} else if (btnId == 4) {
					lineName = "ta";
				} else if (btnId == 5) {
					lineName = "na";
				} else if (btnId == 6) {
					lineName = "ha";
				} else if (btnId == 7) {
					lineName = "ma";
				} else if (btnId == 8) {
					lineName = "ya";
				} else if (btnId == 9) {
					lineName = "ra";
				} else if (btnId == 10) {
					lineName = "wa";
				}

				switchDisp(form, "a", "0");
				switchDisp(form, "ka", "0");
				switchDisp(form, "sa", "0");
				switchDisp(form, "ta", "0");
				switchDisp(form, "na", "0");
				switchDisp(form, "ha", "0");
				switchDisp(form, "ma", "0");
				switchDisp(form, "ya", "0");
				switchDisp(form, "ra", "0");
				switchDisp(form, "wa", "0");

				switchDisp(form, lineName, "1");

				document.getElementById("list-box").scrollTop = "0px";
				setPageUnLock();
				return;
			}

			function switchDisp(form, objNm, select) {
				var targetNoSel = objNm + "_noSel";
				var targetSelected = objNm + "_selected";
				var noSelVal = "";
				var selectedVal = "";
				if (select == "1") {
					noSelVal = "none";
					selectedVal = "block";
				} else {
					noSelVal = "block";
					selectedVal = "none";
				}

				if (document.getElementById(targetNoSel) != undefined) {
					document.getElementById(targetNoSel).style.display = noSelVal;
					document.getElementById("all_noSel").style.display = "block";
					document.getElementById("all_selected").style.display = "none";
				}
				if (document.getElementById(targetNoSel) != undefined) {
					document.getElementById(targetSelected).style.display = selectedVal;
					document.getElementById("all_noSel").style.display = "block";
					document.getElementById("all_selected").style.display = "none";
				}
			}

			function selectNone(form) {
				if (setPageLock() == false) {
					return false;
				}
				resetParam(form);

				form.act_id.value = "AC0301";

				form.jso_cd_shi.value = "000";

				form.shi_gn_flg.value = "1";

				form.shi_flg.value = "1";

				var sf7Flg = display_waiting();
				form.action = "https://www.west-frc.com/adds/A10201S";
				if (sf7Flg == true) {
					setTimeout(doSubmit, 100, form);
				} else {
					form.submit();
				}
			}

			function goBack(form) {
				if (setPageLock() == false) {
					return false;
				}
				resetParam(form);

				form.act_id.value = "AC0501";

				var sf7Flg = display_waiting();
				form.action = "https://www.west-frc.com/adds/A10201S";
				if (sf7Flg == true) {
					setTimeout(doSubmit, 100, form);
				} else {
					form.submit();
				}
			}

			function dispLoad() {
				document.getElementById("dispLoad").style.display = "block";
				document.getElementById("dispLoad2").style.display = "block";
			}
		</script>

		<script>
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != "dataLayer" ? "&l=" + l : "";
				j.async = true;
				j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, "script", "dataLayer", "GTM-TKSQHQM");
		</script>
	</head>

	<body
		onload="dispLoad()"
		style="text-align: center"
		virtual-page-id="fwd_redirect_area"
	>
		<a name="top"></a>

		<noscript
			><iframe
				src="https://www.googletagmanager.com/ns.html?id=GTM-TKSQHQM"
				height="0"
				width="0"
				style="display: none; visibility: hidden"
			></iframe
		></noscript>

		<div id="wrapper">
			<div id="header">
				<img
					src="https://www.west-frc.com/adds/jsp/common/img/popup_logo_flets.gif"
					alt="フレッツ"
					class="fleft"
				/>
			</div>

			<div id="step">
				<ul>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-area.gif"
							alt="提供エリア検索"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-hantei.gif"
							alt="提供判定結果"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-select.gif"
							alt="お申し込みサービスの選択"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-yakkan.gif"
							alt="約款ご確認"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-moushikomi.gif"
							alt="お客さま情報の入力"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-moushikomi2.gif"
							alt="その他情報の入力"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-naiyou.gif"
							alt="お申し込み内容のご確認"
						/>
					</li>
					<li>
						<img
							src="https://www.west-frc.com/adds/jsp/common/img/step-kanryou.gif"
							alt="お申し込み完了"
						/>
					</li>
				</ul>
			</div>

			<div id="dispLoad" style="display: block">
				<div id="contentsbox">
					<div id="main-inner">
						<div id="contents-caption">
							<table>
								<tbody>
									<tr>
										<td class="add-left">選択した住所</td>
										<td class="add-center">
											<ul style="line-height: 105%">
												<li>
													<a
														href="javascript:void(0);"
														onclick="javascript:selectPresentAdd(document.cmnForm,'AC0402');return false;"
														>富山県</a
													>
												</li>

												<li
													style="
														background: url(jsp/common/img/blue-line.gif)
															no-repeat left bottom;
														width: 35px;
														padding-left: 35px;
													"
												>
													　
												</li>
											</ul>
										</td>

										<td class="add-right">
											<img
												src="jsp/common/img/icon_home.gif"
												alt="戸建て"
												height="40"
												width="124"
											/>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div id="title-area" class="clearfix">
							<p class="icon-right">五十音選択</p>
							<ul class="fright on-btn">
								<li id="all_selected" style="display: block">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:dispAll(document.cmnForm);return false;"
										id="on-all"
										><span>すべて</span></a
									>
								</li>
								<li id="all_noSel" style="display: none">
									<a
										href="javascript:void(0);"
										onclick="javascript:dispAll(document.cmnForm);return false;"
										id="on-all"
										><span>すべて</span></a
									>
								</li>

								<li id="a_noSel" style="display: block">
									<a
										href="javascript:void(0);"
										onclick="javascript:selectLine(document.cmnForm,'1');return false;"
										id="on-a"
										><span>あ</span></a
									>
								</li>
								<li id="a_selected" style="display: none">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:selectLine(document.cmnForm,'1');return false;"
										id="on-a"
										><span>あ</span></a
									>
								</li>

								<li id="ka_noSel" style="display: block">
									<a
										href="javascript:void(0);"
										onclick="javascript:selectLine(document.cmnForm,'2');return false;"
										id="on-ka"
										><span>か</span></a
									>
								</li>
								<li id="ka_selected" style="display: none">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:selectLine(document.cmnForm,'2');return false;"
										id="on-ka"
										><span>か</span></a
									>
								</li>

								<li id="sa_noSel" style="display: block">
									<a
										href="javascript:void(0);"
										onclick="javascript:selectLine(document.cmnForm,'3');return false;"
										id="on-sa"
										><span>さ</span></a
									>
								</li>
								<li id="sa_selected" style="display: none">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:selectLine(document.cmnForm,'3');return false;"
										id="on-sa"
										><span>さ</span></a
									>
								</li>

								<li id="ta_noSel" style="display: block">
									<a
										href="javascript:void(0);"
										onclick="javascript:selectLine(document.cmnForm,'4');return false;"
										id="on-ta"
										><span>た</span></a
									>
								</li>
								<li id="ta_selected" style="display: none">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:selectLine(document.cmnForm,'4');return false;"
										id="on-ta"
										><span>た</span></a
									>
								</li>

								<li id="na_noSel" style="display: block">
									<a
										href="javascript:void(0);"
										onclick="javascript:selectLine(document.cmnForm,'5');return false;"
										id="on-na"
										><span>な</span></a
									>
								</li>
								<li id="na_selected" style="display: none">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:selectLine(document.cmnForm,'5');return false;"
										id="on-na"
										><span>な</span></a
									>
								</li>

								<li id="ha_noSel" style="display: block">
									<a
										href="javascript:void(0);"
										onclick="javascript:selectLine(document.cmnForm,'6');return false;"
										id="on-ha"
										><span>は</span></a
									>
								</li>
								<li id="ha_selected" style="display: none">
									<a
										href="javascript:void(0);"
										class="selected"
										onclick="javascript:selectLine(document.cmnForm,'6');return false;"
										id="on-ha"
										><span>は</span></a
									>
								</li>

								<li>
									<a name="#" class="disabled" id="on-ma"><span>ま</span></a>
								</li>

								<li>
									<a name="#" class="disabled" id="on-ya"><span>や</span></a>
								</li>

								<li>
									<a name="#" class="disabled" id="on-ra"><span>ら</span></a>
								</li>

								<li>
									<a name="#" class="disabled" id="on-wa"><span>わ</span></a>
								</li>
							</ul>
						</div>

						<div id="list-box">
							<div id="lineNo1">
								<div id="index1" style="text-align: left">
									<p class="range-label fw-bold"><b>あ行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left">
									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'射水市','211');return false;"
											>射水市</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'魚津市','204');return false;"
											>魚津市</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'小矢部市','209');return false;"
											>小矢部市</a
										>
									</li>
								</ul>
							</div>

							<div id="lineNo2">
								<div id="index2" style="text-align: left">
									<p class="range-label fw-bold"><b>か行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left">
									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'黒部市','207');return false;"
											>黒部市</a
										>
									</li>
								</ul>
							</div>

							<div id="lineNo3">
								<div id="index3" style="text-align: left">
									<p class="range-label fw-bold"><b>さ行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left">
									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'下新川郡朝日町','343');return false;"
											>下新川郡朝日町</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'下新川郡入善町','342');return false;"
											>下新川郡入善町</a
										>
									</li>
								</ul>
							</div>

							<div id="lineNo4">
								<div id="index4" style="text-align: left">
									<p class="range-label fw-bold"><b>た行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left">
									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'高岡市','202');return false;"
											>高岡市</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'砺波市','208');return false;"
											>砺波市</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'富山市','201');return false;"
											>富山市</a
										>
									</li>
								</ul>
							</div>

							<div id="lineNo5">
								<div id="index5" style="text-align: left">
									<p class="range-label fw-bold"><b>な行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left">
									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'中新川郡上市町','322');return false;"
											>中新川郡上市町</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'中新川郡立山町','323');return false;"
											>中新川郡立山町</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'中新川郡舟橋村','321');return false;"
											>中新川郡舟橋村</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'滑川市','206');return false;"
											>滑川市</a
										>
									</li>

									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'南砺市','210');return false;"
											>南砺市</a
										>
									</li>
								</ul>
							</div>

							<div id="lineNo6">
								<div id="index6" style="text-align: left">
									<p class="range-label fw-bold"><b>は行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left">
									<li style="width: 33%">
										<a
											href="javascript:void(0);"
											onclick="
					javascript:selectShi(document.cmnForm,'氷見市','205');return false;"
											>氷見市</a
										>
									</li>
								</ul>
							</div>

							<div id="lineNo7">
								<div id="index7" style="text-align: left">
									<p class="range-label fw-bold"><b>ま行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left"></ul>
							</div>

							<div id="lineNo8">
								<div id="index8" style="text-align: left">
									<p class="range-label fw-bold"><b>や行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left"></ul>
							</div>

							<div id="lineNo9">
								<div id="index9" style="text-align: left">
									<p class="range-label fw-bold"><b>ら行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left"></ul>
							</div>

							<div id="lineNo10">
								<div id="index10" style="text-align: left">
									<p class="range-label fw-bold"><b>わ行</b></p>
								</div>

								<ul class="city-ilst clearfix" style="text-align: left"></ul>
							</div>
						</div>

						<p id="select-none">
							<a
								href="javascript:void(0);"
								onclick="javascript:selectNone(document.cmnForm); return false"
								;=""
								class="icon-arrow-right"
								>該当する住所がない方はこちら</a
							>
						</p>

						<form name="cmnForm" method="post">
							<input type="hidden" name="adr_flg" value="" />
							<input type="hidden" name="jso_cd" value="" />
							<input type="hidden" name="jso_cd_oya" value="" />
							<input type="hidden" name="oya_flg" value="" />
							<input type="hidden" name="n_adr_flg" value="" />
							<input type="hidden" name="new_jso_cd" value="" />
							<input type="hidden" name="abol" value="" />
							<input type="hidden" name="post1" value="" />
							<input type="hidden" name="post2" value="" />
							<input type="hidden" name="post" value="" />
							<input type="hidden" name="tod_flg" value="1" />
							<input type="hidden" name="tod_gn_flg" value="" />
							<input type="hidden" name="jso_cd_tod" value="16" />
							<input type="hidden" name="ent_tod" value="富山県" />
							<input type="hidden" name="sel_tod" value="富山県" />
							<input type="hidden" name="shi_flg" value="" />
							<input type="hidden" name="shi_gn_flg" value="" />
							<input type="hidden" name="jso_cd_shi" value="" />
							<input type="hidden" name="ent_shi" value="" />
							<input type="hidden" name="sel_shi" value="" />
							<input type="hidden" name="ooa_flg" value="" />
							<input type="hidden" name="ooa_gn_flg" value="" />
							<input type="hidden" name="jso_cd_ooa" value="" />
							<input type="hidden" name="ent_ooa" value="" />
							<input type="hidden" name="sel_ooa" value="" />
							<input type="hidden" name="aza_flg" value="" />
							<input type="hidden" name="aza_gn_flg" value="" />
							<input type="hidden" name="jso_cd_aza" value="" />
							<input type="hidden" name="ent_aza" value="" />
							<input type="hidden" name="sel_aza" value="" />
							<input type="hidden" name="ad_r_code" value="" />
							<input type="hidden" name="adr1_flg" value="" />
							<input type="hidden" name="adr1_gn_flg" value="" />
							<input type="hidden" name="ent_adr1" value="" />
							<input type="hidden" name="sel_adr1" value="" />
							<input type="hidden" name="adr2_flg" value="" />
							<input type="hidden" name="adr2_gn_flg" value="" />
							<input type="hidden" name="ent_adr2" value="" />
							<input type="hidden" name="sel_adr2" value="" />
							<input type="hidden" name="adr3_flg" value="" />
							<input type="hidden" name="adr3_gn_flg" value="" />
							<input type="hidden" name="ent_adr3" value="" />
							<input type="hidden" name="sel_adr3" value="" />
							<input type="hidden" name="bld1_flg" value="" />
							<input type="hidden" name="bld1_gn_flg" value="" />
							<input type="hidden" name="ent_bld1" value="" />
							<input type="hidden" name="sel_bld1" value="" />
							<input type="hidden" name="src_bld" value="" />
							<input type="hidden" name="src_bld_input" value="" />
							<input type="hidden" name="scr_hist" value="" />
							<input type="hidden" name="act_id" value="" />

							<input type="hidden" name="seq_no" value="19922745" />
							<input
								type="hidden"
								name="s_id"
								value="p16BZ9ltME46taRP3ylCqhx0e1c8255957c8e511fd3e4a63c2d3129"
							/>
							<input type="hidden" name="adr_omit_from" value="" />
							<input type="hidden" name="bld_ovl_flg" value="" />
							<input type="hidden" name="ovl_flg" value="" />

							<input type="hidden" name="skip_adr2" value="" />
							<input type="hidden" name="skip_adr3" value="" />
							<input type="hidden" name="adr_fix_act" value="" />

							<input type="hidden" name="cmn" value="" />
							<input type="hidden" name="sbs_sbt" value="" />
							<input type="hidden" name="msk_level" value="1" />
							<input type="hidden" name="sel_level" value="4f2ef03c3f8a196c" />
							<input type="hidden" name="topsite" value="1" />

							<input
								type="hidden"
								name="g_url"
								value="0da3b68d5c36f5d263fa649ced1227520bf007876aeb47088b521c08ea2bd0063ebcb3662e5806401a5e86390e3866ba0ae3844fd9cfbdc6d2e90214910844a5d9003f446dddf1666b74d184f2af7732906cb9bdfdeef032996c8eccc7974eae"
							/>
							<input
								type="hidden"
								name="r_url"
								value="0da3b68d5c36f5d263fa649ced1227520bf007876aeb4708d9bb011bd6fa34adc4bedb8c0a2ea5de6231eb66537cab120a0d596ccfb572e7dfe0492503c9b7870be3617f7fc4081da8ce673243413903553df98932f55d60a3158a2d7745f1cf"
							/>
							<input type="hidden" name="etc_data" value="" />
							<input
								type="hidden"
								name="etc_data_kks"
								value="decde1b2305b7f58461df27602c2734db7b5f2fac5d8cb50280af09323aeead8394596c0edb4b796580879175327ec301fc856c7f1e3b5469f0799579684f3723a451c3b18bd2cd1515b6947480e4c823db227e7ae881910"
							/>
							<input type="hidden" name="mode" value="f" />

							<input type="hidden" name="fuken" value="16" />
							<input type="hidden" name="alpha1" value="" />
							<input type="hidden" name="alpha2" value="" />
							<input type="hidden" name="alpha3" value="" />
							<input type="hidden" name="p_mansion" value="" />
							<input type="hidden" name="cp" value="00171109" />
							<input type="hidden" name="cp1" value="" />
							<input type="hidden" name="cp2" value="" />
							<input type="hidden" name="wlid" value="" />
							<input type="hidden" name="sbt" value="" />
							<input type="hidden" name="jso_cd_cnw" value="" />

							<input type="hidden" name="pst_cd" value="" />
							<input type="hidden" name="ken_cd" value="" />
							<input type="hidden" name="stb_jso_shikchsn" value="" />
							<input type="hidden" name="stb_jso_oaza" value="" />
							<input type="hidden" name="stb_jso_cyome" value="" />
							<input type="hidden" name="stb_bnt_1" value="" />
							<input type="hidden" name="stb_bnt_2" value="" />
							<input type="hidden" name="stb_bnt_3" value="" />
							<input type="hidden" name="stb_tate_1_cnw" value="" />
							<input type="hidden" name="stb_jso_sama" value="" />
							<input type="hidden" name="l_id" value="" />
							<input type="hidden" name="caf_id" value="" />
							<input type="hidden" name="mem_id" value="" />
							<input type="hidden" name="kyk_mei_knj" value="" />
							<input type="hidden" name="kyk_mei_kna" value="" />
							<input type="hidden" name="email_ad" value="" />

							<input type="hidden" name="seqcd" value="" />

							<input type="hidden" name="research_adr_flg" value="" />
						</form>
					</div>
				</div>
			</div>
		</div>
		<div id="footer">
			<div id="dispLoad2" style="display: block">
				<div id="backbtn">
					<a
						href="javascript:void(0);"
						onclick="javascript:goBack(document.cmnForm);return false;"
						><span>一つ前に戻る</span></a
					>
				</div>

				<div id="copyright">
					<p>
						<img
							src="jsp/common/img/popup_copyright.gif"
							alt="Copyright © 1999-2021 西日本電信電話株式会社"
							height="10"
							width="222"
						/>
					</p>
				</div>
			</div>

			<script type="text/javascript">
				function display_waiting() {
					img_h = 116;
					img_w = 116;

					var sf7Flg = false;
					var userAgent = navigator.userAgent.toLowerCase();

					var changeVersion = 7;

					if (userAgent.indexOf("safari") != -1) {
						var array = /version\/([\d\.]+)/.exec(userAgent);
						var version = array ? array[1] : "";
						if (parseInt(version, 10) >= changeVersion) {
							sf7Flg = true;
							img_h = 190;
							img_w = 420;
						}
					}

					win_height =
						document.documentElement.clientHeight || document.body.clientHeight;
					win_scroll_top =
						document.documentElement.scrollTop || document.body.scrollTop;
					win_set_pos_h = win_height / 2 + win_scroll_top - img_h / 2 - 40;
					if (
						win_height > document.body.clientHeight &&
						document.body.clientHeight > 0
					) {
						win_height = document.body.clientHeight;
					}

					win_width =
						document.documentElement.clientWidth || document.body.clientWidth;
					win_scroll_left =
						document.documentElement.scrollLeft || document.body.scrollLeft;
					win_set_pos_w = win_width / 2 + win_scroll_left - img_w / 2;
					if (
						win_width > document.body.clientWidth &&
						document.body.clientWidth > 0
					) {
						win_width = document.body.clientWidth;
					}

					if (win_height <= 0) {
						win_set_pos_h = win_scroll_top;
					}
					if (win_width <= 0) {
						win_set_pos_w = win_scroll_left;
					}

					var waitScr = document.getElementById("waitescreen");

					waitScr.style.top = win_set_pos_h + "px";
					waitScr.style.left = win_set_pos_w + "px";

					var screenFrm = document.getElementById("screenframe");

					screenFrm.style.height = img_h + "px";
					screenFrm.style.width = img_w + "px";

					waitScr.style.display = "block";

					if (sf7Flg == false) {
						frames.screenframe.document.location.reload(true);
					}

					return sf7Flg;
				}
			</script>
			<div id="waitescreen" style="position: absolute; display: none">
				<iframe
					id="screenframe"
					name="screenframe"
					scrolling="no"
					width="0"
					height="0"
					border="0"
					framespacing="0"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					tabindex="-1"
					src="jsp/common/img/waiting_def.gif"
				>
				</iframe>
			</div>
		</div>
		<img
			src="https://www.west-frc.com/adds/jsp/common/img/waiting_def_sf7.gif"
			width="0"
			height="0 "
		/>
		<script type="text/javascript">
			var userAgent = navigator.userAgent.toLowerCase();
			<!-- //

			var changeVersion = 7;

			if (userAgent.indexOf("safari") != -1) {
				var array = /version\/([\d\.]+)/.exec(userAgent);
				var version = array ? array[1] : "";
				if (parseInt(version, 10) >= changeVersion) {
					document.getElementById("screenframe").src =
						"https://www.west-frc.com/adds/jsp/common/img/waiting_def_sf7.gif";
				}
			}

			function doSubmit(form) {
				form.submit();
			}

			//-->
		</script>
	</body>
</html>
