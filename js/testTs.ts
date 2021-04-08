const kzs = window.kzs;
const $ = kzs.$;
// import { ApplyCss } from "src/module/utils";

interface ICircleIndicator {
  addCircleIndicator: (dom: string) => void,
  currentStep: number,
  stepLength: number,
  strokeStepStartColor: string | CanvasGradient | CanvasPattern,
  strokeStepEndColor: string | CanvasGradient | CanvasPattern,
  endAdornment: string,
  css: string | undefined,
}

export const CircleIndicator = ({
  addCircleIndicator,
  currentStep,
  stepLength,
  strokeStepStartColor,
  strokeStepEndColor,
  endAdornment = '%完了',
  css = undefined,
}: ICircleIndicator) =>
{

  const setCss = ():void => {
    const _css = `.kzHeaderNavi {
      width: 100%;
      padding: 2px;
      border-top: #e1e1e1 solid 2px;
    }
    .kzIndicaterWrapper {
      height: 80px;
      display: table;
    }
    #kzIndicaterCanvas {
      display: table-cell;
    }
    .kzHeaderMsgWrapper {
      display: table-cell;
      vertical-align: middle;
      padding-left: 17px;
      font-weight: bold;
      font-size: 1.2em;
    }
    #kzHeaderMsgTitle {
      margin-bottom: 5px;
    }
    `;

    ApplyCss(css ?? _css); 
  }

  const setIndicator = (): void => {
    kzs.console.log("updateIndicator", currentStep);
    const canvas = document.getElementById(
      "kzIndicaterCanvas"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    const start = -Math.PI / 2;
    const val = start + 2 * Math.PI * (currentStep / stepLength);
    const end = Math.PI * 1.5;
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      // ctx.strokeStyle = "#EE0000";
      ctx.strokeStyle = strokeStepStartColor;
      ctx.lineWidth = 12;
      ctx.arc(40, 40, 33, start, val);
      ctx.stroke();
      ctx.closePath();
      
      ctx.beginPath();
      // ctx.strokeStyle = "#B7B7B7";
      ctx.strokeStyle = strokeStepEndColor;
      ctx.lineWidth = 12;
      ctx.arc(40, 40, 33, val, end);
      ctx.stroke();
      ctx.closePath();
    }
    const persentStr = `${Math.ceil(
      (currentStep / stepLength) * 100
    )}${endAdornment}`;

    $("#kzHeaderMsg").text(persentStr);
  }

  const makeIndicator = ():void => {
    setCss();
    
    const dom = `<div class="kzHeaderNavi">
    <div class="kzIndicaterWrapper">
      <canvas id="kzIndicaterCanvas" width="80px" height="80px"></canvas>
      <div class="kzHeaderMsgWrapper">
        <div id="kzHeaderMsgTitle"></div>
        <div id="kzHeaderMsg"></div>
      </div>
    </div>
  </div>`;
    addCircleIndicator(dom);
  setIndicator();
  } 

  return makeIndicator();
}

export default CircleIndicator;