import { expect } from "test/support/setup";
import { helloWorld } from "src/module/sample";

const $ = window.kzs.$;

describe("helloWorld", function () {
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

  it("set h1", () => {
    const title = helloWorld(testDiv);

    expect(title).to.equal("SAMPLE PAGE");
    expect(target.text()).to.equal("Hello World");
  });
});
