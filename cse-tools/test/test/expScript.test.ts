import { expect } from "test/support/setup";
import expScript from "src/expScript";

describe("expScript", function () {
  const $ = window.kzs.$;
  const target = $(`<h1 class="main_title">Entry</h1>`);
  let testDiv: JQuery<HTMLElement>;
  before(() => {
    window.history.pushState(null, "2", "?_kz_void=1");
    testDiv = $('<div style="padding:20px" id="testArea"></div>').appendTo(
      $("body")
    );
    target.appendTo(testDiv);
    $("title").text("SAMPLE PAGE");
  });
  after(() => {
    testDiv.remove();
  });
  describe("constructor", () => {
    it("set title", async () => {
      await expScript({
        variation: { round: { project: { id: "123" } }, isOriginal: false },
      });
      expect($("h1.main_title").text()).to.equal("Hello World");
    });
  });
});
