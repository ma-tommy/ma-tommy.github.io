interface ISteps {
  itemName: string,
  parentTag: string
}

// 抜き出したいDomの塊をページ単位で定義するイメージ
export const steps = (): Steps => {
  const createItem = (itemName: string, parentTag = 'tr') => {
    return {itemName, parentTag} as ISteps;
  }
  const stepParts = [
    // 名前（姓名：カナ名）
    [createItem("#family_name")],
    // 生年月日、満年齢、性別、ご家族、同居家族
    [
      createItem("#birthday\\[year\\]"),
      createItem(".gp-al-middle"),
      createItem("#sex1"),
      createItem("#family1"),
      createItem("#family_together1"),
    ],
    // 扶養家族、お住まい(種類、入居年・月)
    [createItem("#dependant"), createItem("#home_kind")],
    // ご自宅住所（郵便番号、都道府県・市町村区、丁目・番地、マンション名・アパート名、フリガナ
    [createItem("#home_zip")],
    // 電話番号、Eメールアドレス
    [createItem("#has_mobile_phone1"), createItem("#email")],
    // 金融機関からのお借入、お借入状況、ご職業文言1, ご職業文言2, ご職業
    [
      createItem("#caching_bank1"),
      createItem("#caching_iyo"),
      createItem(".block .heading_title:eq(2)", 'div'),
      createItem("ul.list-note:eq(7)", ''),
      createItem("#work"),
    ],
    // お勤め先住所
    [createItem("#office_zip"]),
    // お勤め先電話番号、お勤め先名（屋号）、フリガナ、業種、資本金
    [
      createItem("#office_phone\\[1\\]"),
      createItem("#company_name"),
      createItem("#company_name_kana"),
      createItem("#industry_type"),
      createItem("#capital"),
    ],
    // 国家資格、雇用形態、派遣先、給与携帯、健康保険の種類
    [
      createItem("#has_national_qualifications1"),
      createItem("#employment_system"),
      createItem("#work_place"),
      createItem("#salary_kind"),
      createItem("#health_insurance_card_kind"),
    ],
    // 入社年月、税込み年収
    [createItem("#enter_company_year"), createItem("#income")],
    // お借入希望日、金利の種類、お使い道
    [createItem("#karikibo\\[year\\]"), createItem("#interest_rate_type5"), createItem("#use")],
    // お申し込み額、ボーナス返済、お借入期間、返済日
    [createItem("#money"), createItem("#has_bonus_repay1"), createItem("#term_year"), createItem("#repayment_day")],
    // 結果連絡方法、正式手続き方法、申込みのきっかけ
    [createItem("#contact_kind2"), createItem("#procedure1"), createItem("#opportunity")],
  ];

  
  return stepParts.map((pageItemSelectors) => {
    return pageItemSelectors.map((itemName, parentTag) => {
      const $table = $(s).closest("tr");
      console.log($table);
      return $table;
    });
  });
};