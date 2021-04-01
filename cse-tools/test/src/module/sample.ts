const $ = window.kzs.$;
const kzs = window.kzs;

// 単体テストがやりやすいように、 eを引数で渡す. 省略すると $("html")
export const helloWorld = (e: JQuery<HTMLElement> = $("html")): string => {
  kzs.console.log("Hello World");
  const title = $("title").text();
  e.find("h1.main_title").text("Hello World");
  return title;
};
