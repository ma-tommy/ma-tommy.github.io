const kzs = window.kzs;
const $ = kzs.$;
import { kzs as _kzs } from "@cse-js/cse-tools";
import FormValidator, {
  ValidateRes,
  validateErrorsDiff,
  ValidateErrorsDiffRes,
} from "src/module/form-validator";
export type StepChangeFunction = (
  currentStep: number,
  fromStep?: number
) => Promise<void>;
export type CurrentValidateErrorsChangeFunction = (
  currentStep?: number,
  validateErrors?: ValidateRes[],
  diff?: ValidateErrorsDiffRes
) => Promise<void>;
export type CallBacks = {
  onStepChange: StepChangeFunction[];
  onCurrentValidateErrorsChange: CurrentValidateErrorsChangeFunction[];
};
export type Steps = StepItems[];
export type StepItems = JQuery<HTMLElement>[];
export type GotoState = { error?: string; stepTo?: number };

export default abstract class FormStep {
  public currentStep = 0;
  public currentValidateErrors?: ValidateRes[] = undefined;
  public name: string;
  public steps: Steps;
  public stepLength: number; // 複数ページにまたがる場合に全体のステップ数を指定
  public stepStart: number; // 複数ページにまたがる場合は、該当ページの開始ステップを指定
  public slides: JQuery<HTMLElement>[] = [];
  public context: _kzs.precedingJsContext | undefined;
  public $scrollTopItem: JQuery<HTMLElement> | undefined;
  public $steps: JQuery<HTMLElement> | undefined;
  public $indicater: JQuery<HTMLElement> | undefined;
  public $pager: JQuery<HTMLElement> | undefined;
  public validator: FormValidator;
  public stepChanging = true;
  public windowHeight = 640;
  constructor(
    name: string,
    steps: Steps,
    validator: FormValidator,
    context: _kzs.precedingJsContext | undefined,
    stepLength?: number,
    stepStart = 1
  ) {
    this.name = name;
    this.context = context;

    this.steps = steps;
    this.validator = validator;
    this.stepLength = stepLength || steps.length;
    this.stepStart = stepStart;

    window.kzInvalidSetStepHeight = false;
  }

  //SPキーボードの「開く」でSTEPが戻ってしまうのを制御
  public keypressAjust = (): void => {
    $("body").on("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();

        // 現在フォーカスしている入力欄からフォーカスを外すことで、キーボードを強制的に閉じる
        //document.activeElement.blur();
        $("input").blur();
      }
    });
  };

  //safariの自動入力で別STEPのFieldに投入されてしまう現象を阻止する
  public resetDesnabledItems = (): void => {
    $(
      ".kzSteps input:not([type='button'], [type='hidden'], [id='state']), .kzSteps select"
    ).removeAttr("readonly");
    kzs.console.log("remove readonly done");
  };

  public desnableOtherStepItems = async (
    currentStep: number
  ): Promise<void> => {
    kzs.console.log("desnableOtherStepItems", currentStep);
    this.resetDesnabledItems();
    $(
      ".kzSteps input:not([type='button'], [type='hidden']), .kzSteps select"
    ).each((_, v) => {
      const $v = $(v);
      if ($v.attr("disabled")) {
        return;
      }
      if ($v.parents(".kzSteps__" + currentStep).length == 0) {
        $v.prop("readonly", true);
      }
    });
  };

  //tabで次のSTEPの項目に移動してしまうのを制御
  //カスタマイズが必要な場合はremoveTabindexごと上書きしてください
  public removeTabindex = async (currentStep: number): Promise<void> => {
    kzs.console.log("removeTabindex", currentStep);
    const currentStepClassSelector = `[class^='kzSteps__${currentStep}']`;
    setTimeout(() => {
      $("input, select, a").attr({ tabindex: "-1" });
      $(
        `${currentStepClassSelector} input, ${currentStepClassSelector} select, ${currentStepClassSelector} a`
      ).removeAttr("tabindex");
      kzs.console.log(
        "currentStepClassSelector",
        `${currentStepClassSelector} input, ${currentStepClassSelector} select, ${currentStepClassSelector} a`
      );
    }, 700);
  };
  abstract getStepMinHeight(currentStep?: number): number;
  public setStepHeight = async (
    currentStep = this.currentStep
  ): Promise<void> => {
    kzs.console.log("setStepHeight", currentStep);
    const mimHeight = this.getStepMinHeight(currentStep);

    let stepHeight = $(".kzSteps__" + currentStep).outerHeight(true);
    //console.log("HEIGHT", stepHeight, mimHeight);
    if (!stepHeight || stepHeight < mimHeight) stepHeight = mimHeight;
    $(".kzSteps").height(stepHeight);
    //$(".kzSteps").animate({ height: stepHeight }, { duration: 100 });
    //$(".kzSteps").css("overflow-y", "hidden");
    //$(".kzSteps").scrollTop(0);
  };

  updateButtonJustInCase(): void {
    if (!this.stepChanging) {
      kzs.console.warn(
        "when Button Clicked, `StepChanging` is",
        this.stepChanging
      );
      this.stepChanging = false; // ボタンupdateButtonDisnabledがされないことを想定して念のため
      this.updateButtonDisnabled();
    }
  }
  createButtons(): JQuery<HTMLElement> {
    //ボタン追加
    const pager = $("<div class='kzButtonWrapper'></div>");
    const prevButton = $(
      `<a href="javascript:void(0)" class="kzPrevStep kzPrevStepButton kzNavButton disabled not-active"><span class="title">前のステップへ</span></a>`
    ).appendTo(pager);
    const nextButton = $(
      `<a href="javascript:void(0)" class="kzNextStep kzNextStepButton kzNavButton disabled not-active"><span class="title">次のステップへ</span></a>`
    ).appendTo(pager);

    //次のSTEPへ
    nextButton.on("click", () => {
      this.updateButtonJustInCase();
      if ($(".kzNextStep").hasClass("disabled")) return;
      setTimeout(() => {
        if (!this.goNextStep().stepTo) return; // goNextStep は次ページの存在、バリデーションして移動できたら移動する
      }, 200);
    });

    //前のSTEPへ
    prevButton.on("click", () => {
      this.updateButtonJustInCase();
      if ($(".kzPrevStep").hasClass("disabled")) return;
      setTimeout(() => {
        if (!this.goPrevStep().stepTo) return;
      }, 200);
    });

    return pager;
  }

  //インジゲーターまでスクロールする
  scrollToStep(animate = false, top?: number): void {
    if (top === undefined)
      top = (this.$scrollTopItem || this.$indicater)?.offset()?.top || 0;
    if (animate)
      $("html,body").animate({
        scrollTop: top,
      });
    else $("html,body").scrollTop(top);
  }

  public setHeightAjuster = (): void => {
    // 項目のサイズが変わったら、高さを設定し直す
    $("body, input, select, a").on("click focus", () => {
      setTimeout(() => {
        this.setStepHeight();
      }, 100);
    });
  };

  // Custom log送信
  public sendChangeCurrentStepLog = async (
    currentStep: number,
    from?: number
  ): Promise<void> => {
    kzs.console.log("sendChangeCurrentStepLog currentStep:", currentStep, from);
    const logData = {
      category: "form-step",
      action: "changeStep",
      exp: this.context?.variation?.round.project.id,
      data: { name: this.name, step: currentStep, from: from },
    };
    kzs.console.log("sendChangeCurrentStepLog logData:", logData);
    kzs("trackCustomEvent", logData);
    kzs("setCustomData", logData);
  };

  public updateSlide = async (
    currentStep: number,
    from?: number
  ): Promise<void> => {
    kzs.console.log("updateSlide", currentStep);
    if (
      currentStep < this.stepStart ||
      this.steps.length + this.stepStart <= currentStep
    ) {
      // 複数ページの場合前後のページに遷移が必要
      this.updateSlidePageUrl(currentStep, from);
    } else {
      this.scrollToStep(); // 縦方向でインジケータの上部までスクロール
      this.steps.forEach((_, i) => {
        const id = i + this.stepStart;
        $(`.kzSteps__${id}`).animate(
          { left: `${(id - currentStep) * 100}%` },
          { duration: 200 }
        );
      }); // 横方向のスライド
      this.updateButtonDisnabled();
    }
  };

  abstract updateSlidePageUrl(currentStep: number, from?: number): void;

  public callbacks: CallBacks = {
    onStepChange: [
      this.removeTabindex,
      this.desnableOtherStepItems,
      this.setStepHeight,
      this.updateSlide,
      this.updateIndicator,
      this.sendChangeCurrentStepLog, // safari9のときに稀に、この処理が失敗して、先に進まないことがあった（不確かな情報だけど、念のため発火順を後ろにしておく）
    ],
    onCurrentValidateErrorsChange: [this.updateButtonDisnabled.bind(this)],
  };

  async updateIndicator(currentStep: number): Promise<void> {
    kzs.console.log("updateIndicator", currentStep);
    $("[class^='kzIndicater__'").removeClass("kzCurrentStep");
    [...Array(currentStep)].forEach((_, i) => {
      $(`.kzIndicater__${i + 1}`).addClass("kzCurrentStep"); // インジケータ
    });
  }

  // バリデーション関連 exp scriptと接続
  async updateButtonDisnabled(): Promise<void> {
    kzs.console.log("FormStep.updateButtonDisnabled", this.currentStep, this);
    if (this.canGoNextStep().error) {
      $(".kzNextStep").addClass("disabled not-active");
    } else {
      $(".kzNextStep").removeClass("disabled not-active");
    }
    if (this.canGoPrevStep().error) {
      $(".kzPrevStep").addClass("disabled not-active");
    } else {
      $(".kzPrevStep").removeClass("disabled not-active");
    }
    $(".kzNextStep").css(
      "visibility",
      this.hasNextStep() ? "inherit" : "hidden"
    );
    if (this.currentStep === this.stepLength) {
      $(".kzNextStep span.title").text("確認画面へ");
    } else {
      $(".kzNextStep span.title").text("次のステップへ");
    }
    $(".kzPrevStep").css(
      "visibility",
      this.hasPrevStep() ? "inherit" : "hidden"
    );
  }

  initialStep(): number {
    /*
    サブクラスで、最初のStep番号を返す。通常は1の場合が多いが、リファラーやクエリに基づいて、開始Stepを
    決定できる
    0をリターンすると、ステップ式の反映は実行されない
    ```
    switch (window.location.pathname) {
      case "/sample/40.do": // (1)
        ret = this.stepStart;
        this.form.formDataStore.removeFormData();  // STEP式開始前に実施したい処理もここでできる
        break;
      case "/sample/32.do": // (1)
        stepParam = window.location.search.match(/_kzStep=(\d+)/);
        if (stepParam && window.document.referrer.match(/(33)\.do/)) {
          ret = parseInt(stepParam[1]);
        } else {
          ret = 0;
        }
        break;
      case "/sample/33.do": // (2)
        stepParam = window.location.search.match(/_kzStep=(\d+)/);
        if (stepParam) {
          ret = parseInt(stepParam[1]);
        } else {
          if (window.document.referrer.match(/(32|40)\.do/)) {
            ret = this.stepStart;
          } else {
            ret = 0;
          }
        }
        break;
      case "/sample/37.do": // (1)
      case "/sample/39.do": // (2)
      default:
        ret = 0;
    }
    return ret;
    ```
   */
    return this.stepStart;
  }

  applyUniversal(): void {
    /* Step式の実行に関係なく、実施する処理はサブクラスでここに書く
    /* cssが必要な場合はここでApply 
    ```
    const css = require("src/variation/form-step.css").toString();
    ApplyCss(css);
    // 例:inputmode 暗証番号は、数字に変えたい
    $("[name=pinNumberKakunin]").attr("inputmode", "numeric");
    $("[name=pinNumber]").attr("inputmode", "numeric");
    ```
    */
  }

  applyStep(): void {
    /* ここで、
      this.makeStep(step);
      this.createButtons();
      this.makeIndicater();
      で生成された domを、実際のformに接続する
     */
  }

  run(): void {
    this.stepChanging = true;
    this.windowHeight = window.innerHeight;
    //const step = this._run();

    const step = this.initialStep();
    this.applyUniversal();

    if (step <= 0) {
      kzs.console.log("run step canceled", step);
      return;
    } else {
      kzs.console.log("run initialStep:", step);
      // step式のパーツ作成(Stepの配列＋前後移動ボタン＋現在ページを示すインジケーター)
      this.$steps = this.makeStep(step);
      this.$pager = this.createButtons();
      this.$indicater = this.makeIndicater();

      // 上記で作成したstepのパーツを実際のフォームと接続する
      this.applyStep();

      this.setupAjusters();
      this.setCurrentStep(step);
      this.validateCurrentStep();

      // 定期的に、必須項目の状態を確認する。on change をトリガーにすると、画面の変更が間に合ってない場合があるため。
      kzs.console.log("validateCurrentStep Interval run");
      setInterval(() => {
        if (!this.stepChanging) this.validateCurrentStep();
      }, 200);
      this.setStepHeight();
      kzs.console.log("run step", step);
    }
  }

  /*
   * makeStepを実行することで、Fromに Step式UIを当てる
   */
  makeStep(initialStep = 1): JQuery<HTMLElement> {
    kzs.console.log("makeStep", initialStep);
    initialStep = initialStep > this.stepLength ? this.stepLength : initialStep;
    this.$steps = $("<div class='kzSteps'></div>");
    const $slides = $("<div class='kzSlides'></div>");
    this.$steps.append($slides);

    this.steps.forEach((step, i) => {
      const id = i + this.stepStart;
      const $slide = $(
        `<div class='kzSteps__${id}' style='left: ${
          (id - initialStep) * 100
        }%;'></div>`
      );
      step.forEach((item) => {
        const pageItem = $("<div class='kzPageItem'></div>");
        item.appendTo(pageItem);
        pageItem.appendTo($slide);
      });
      this.slides.push($slide);
      $slides.append($slide);
    });

    return this.$steps;
  }

  makeIndicater(): JQuery<HTMLElement> {
    const length = this.stepLength;
    const list = [...Array(length)]
      .map((_, i) => {
        const pos = i + 1;
        return `<li class="kzIndicater__${pos}"></li>`;
      })
      .join("");
    // console.log("LIST", length, list);
    this.$indicater = $(
      `<div class='kzIndicaterWrapper'><div class='kzIndicater'><ul>${list}</ul></div></div>`
    );
    this.$indicater
      .find('li[class^="kzIndicater__"]')
      .css("width", `${100 / length}%`);
    return this.$indicater;
  }

  setupAjusters(): void {
    this.keypressAjust();
    this.setHeightAjuster();
  }

  onStepChange(fn: StepChangeFunction, prepend?: boolean): void {
    if (fn)
      prepend
        ? this.callbacks.onStepChange.unshift(fn)
        : this.callbacks.onStepChange.push(fn);
  }

  onCurrentValidateErrorsChange(fn: CurrentValidateErrorsChangeFunction): void {
    if (fn) this.callbacks.onCurrentValidateErrorsChange.push(fn);
  }

  async currentStepChange(to: number, from: number): Promise<void> {
    kzs.console.log(`change step to ${to} from ${from}`);
    return this.callbacks.onStepChange.forEach((fn) => {
      fn.call(this, to, from);
    });
  }

  async currentValidateErrorsChange(
    errorDiff: ValidateErrorsDiffRes
  ): Promise<void> {
    kzs.console.log(`change currentValidateErrors`);
    return this.callbacks.onCurrentValidateErrorsChange.forEach((fn) => {
      fn.call(this, this.currentStep, this.currentValidateErrors, errorDiff);
    });
  }

  setCurrentValidateErrors(validateErrors: ValidateRes[]): void {
    const errorDiff = validateErrorsDiff(
      validateErrors,
      this.currentValidateErrors || []
    );
    if (errorDiff.diff.length > 0) {
      kzs.console.log(
        "currentValidateErrors",
        validateErrors,
        "errorDiff",
        errorDiff
      );
      this.currentValidateErrors = validateErrors || [];
      this.currentValidateErrorsChange(errorDiff);
    }
  }
  // ページング
  setCurrentStep(step: number): void {
    if (this.currentStep != step) {
      this.stepChanging = true;
      const from = this.currentStep;
      this.currentStep = step;
      this.currentStepChange(step, from);
      this.stepChanging = false;
    }
  }

  canGoStepTo(step: number, force: boolean): GotoState {
    const validationFailed = force ? [] : this.currentValidateErrors || [];
    if (!force && validationFailed.length > 0) {
      return { error: "not varidated required field exist" };
    } else {
      if (step >= 1 && step <= this.stepLength + 1) {
        return { stepTo: step };
      } else {
        return { error: "step " + step + " dose not exist." };
      }
    }
  }

  goStepTo(step: number, force: boolean): GotoState {
    const ret = this.canGoStepTo(step, force);
    if (ret.stepTo) {
      this.setCurrentStep(ret.stepTo);
    }
    return ret;
  }

  // バリデーションの結果に関係なく、次ページまたは、前ページがあるかどうかを判定する
  hasNextStep(): boolean {
    return this.stepLength >= this.currentStep;
  }

  hasPrevStep(): boolean {
    return this.currentStep > 1;
  }

  // バリデーションの結果を考慮して、次または、前ページに移動できるかどうかを判定する
  canGoNextStep(): GotoState {
    return this.canGoStepTo(this.currentStep + 1, false);
  }
  canGoPrevStep(): GotoState {
    return this.canGoStepTo(this.currentStep - 1, true);
  }
  goNextStep(): GotoState {
    return this.goStepTo(this.currentStep + 1, false);
  }
  goPrevStep(): GotoState {
    return this.goStepTo(this.currentStep - 1, true); // 戻るボタンはバリデーションなしで戻れる
  }

  // エラーがあるフィールドを返す
  validate(stepItems: StepItems): ValidateRes[][] {
    return stepItems.map((stepItem) => this.validator.validate(stepItem));
  }

  // エラーがあるフィールドを返す
  validateCurrentStep(): ValidateRes[] {
    const validateResList = this.validate(
      this.currentStep == 0 ? [] : this.steps[this.currentStep - this.stepStart]
    );
    if (this.validator.validateGlobalErrorPath) {
      const stepGlobalName = `kzSteps__${this.currentStep}`;
      const stepGlobalError =
        $(`.${stepGlobalName}`)
          .find(this.validator.validateGlobalErrorPath)
          .not("[type=radio]").length > 0
          ? { msg: "required" }
          : undefined;
      validateResList.push([
        { name: stepGlobalName, title: "", error: stepGlobalError },
      ]);
    }
    // kzs.console.log("validateResList", validateResList);
    const validateErrors: ValidateRes[] = validateResList
      .reduce((acc, v) => acc.concat(v), [])
      .filter((res) => {
        return res.error !== undefined && res.name !== undefined;
      });
    // kzs.console.log("validateErrors", validateErrors);
    this.setCurrentValidateErrors(validateErrors);
    return validateErrors;
  }
}

export const fieldSetVal = (name: string, value: string | string[]): void => {
  const field = $(`[name="${name}"]`);
  if (field.length == 0) return;
  if (field.attr("type") == "radio") {
    $(`[name=${name}][value='${value}']`).prop("checked", true);
  } else if (field.attr("type") == "checkbox") {
    $(`input[name="${name}"]`).each((i, e) => {
      $(e).prop(
        "checked",
        value.includes($(e).attr("value")?.toString() || "")
      );
    });
  } else {
    field.val(value); // radio以外のinput, select
  }
  if (window.$) {
    // オリジナルに設置されている、ハンドラをキック。高さの変更等で使われる場合がある
    window.$(`[name="${name}"]`).trigger("change");
  }
};
export const fieldVal = (name: string): string | string[] => {
  const field = $(`[name="${name}"]`);
  if (field.attr("type") == "radio") {
    return $(`input:checked[name="${name}"]`).val()?.toString() || "";
  } else if (field.attr("type") == "checkbox") {
    return $(`input[name=${name}]:checked`)
      .map((i, v) => $(v).val()?.toString() || "")
      .toArray();
  } else {
    return field.val()?.toString() || ""; // radio以外のinput, select
  }
};
