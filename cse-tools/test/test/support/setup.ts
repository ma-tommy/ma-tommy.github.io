import * as _chai from "chai";
// use require instead of import to avoid typescript's "implicitly has any type" error
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chaiAsPromised = require("test/support/chai-as-promised");
_chai.use(chaiAsPromised);

export const chai = _chai;
export const expect = chai.expect;

export const waitKzsLoaded: Promise<void> = new Promise((resolve) => {
  const tid = setInterval(() => {
    if (!window.kzs) {
      return;
    }
    resolve();
    clearInterval(tid);
  }, 200);
});

import { kzs } from "@kaizenplatform/cse-tools";
export const waitLogSent = (res: kzs.KzsRes): Promise<void> => {
  return new Promise((resolve) => {
    const tid = setInterval(() => {
      if (res._result.error === undefined) {
        return;
      }
      resolve();
      clearInterval(tid);
    }, 200);
  });
};
