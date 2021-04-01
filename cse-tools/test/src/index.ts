/*
  このソースは、変更しないでください。
  exp script本体のコードは expScriptに書きます
*/
import expScript from "src/expScript";
import { kzs as _kzs } from "@kaizenplatform/cse-tools";

const pid = process.env.PID;
if (!pid) throw new Error("PID is not set.");
const kzExternalExpScript = (context: _kzs.precedingJsContext) => {
  return expScript(context);
};
if (!window.kzExternalExpScripts) window.kzExternalExpScripts = {};
if (window.kzExternalExpScripts[pid]) {
  throw new Error(`kzExternalExpScripts[${pid}] Aleady Loaded`);
} else {
  window.kzExternalExpScripts[pid] = kzExternalExpScript;
  window.kzExternalExpScript = kzExternalExpScript;
  window.kzs.console.log(`kzExternalExpScripts[${pid}] Loaded`);
}
