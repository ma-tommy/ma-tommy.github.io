import { helloWorld } from "src/module/sample";
import { kzs as _kzs } from "@kaizenplatform/cse-tools";
const kzs = window.kzs;

const expScript = (context: _kzs.precedingJsContext): Promise<void> => {
  kzs.console.log(context);
  // const $ = kzs.$;
  const Promise = kzs.Promise;

  return Promise.resolve().then(() => {
    // ここに本番コードを書きます。
    // 以下２行はサンプルコードです。削除してね
    const title = helloWorld();
    kzs.console.log("title", title);
  });
};

export default expScript;
