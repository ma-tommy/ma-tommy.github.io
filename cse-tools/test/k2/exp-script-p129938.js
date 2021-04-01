"use strict";
var config = {
  updatedAt: "2021-03-30T18:08:50+09:00",
  deployedAt: "2021-03-30T18:08:50+09:00",
  ver: "noVer",
  gcpBucketName: "kaizen-cse-public",
  externalExpScriptUrl: {
    dev: "//localhost:8080/bundle.dev.js",
  },
  doNotingInEdiotrOrPreview: false,
  doNotingInOriginal: false,
  k2ExpScriptFileOutPath:
    "/Users/masahiko_nakatomi/dev/my/ma-tommy.github.io/cse-tools/test/k2/exp-script-p129938.js",
  expIds: {
    prd: "129938",
  },
  pid: "@cse-tools/test",
  gcpPrefix: "cse-tools/test",
  gcsDir: "https://storage.googleapis.com/kaizen-cse-public/cse-tools/test/",
};
var _ver = ([config.updated] || []).concat(config.ver).join("-");
var _templateVer = "20201023-1";
var _pid = config.pid;
var _exp = this;
var _expId = (((_exp.variation || {}).round || {}).project || {}).id;
var _el = "exp#" + (_expId || "none"); // console log 用 prefix label

var logException = function (e) {
  // exception が起きたら log 送る
  kzs("trackCustomEvent", {
    category: _pid + "-" + _el,
    action: "exception",
    label: e + "",
  });
};

/*
 _kz_expverを指定することで、特定の versionの scriptを実行できる。 expid  or pidごとに指定可能
 例: https://www.bk.mufg.jp/banquic/?_kz_expver=128236:ebae69019e8cd83785b7&_kz_debug=1
 _kz_expver=0 で全て削除できる
 _kz_expver=(expid|pid):0 で、特定の expid or pidのexpverを expscriptにセットされている(config/ver)バージョンにする
 */
var getKzExpVer = function () {
  var kzExpverParamText =
    (window.location.search.match(/_kz_expver=([^#&]+)/) || [])[1] || "";
  if (kzExpverParamText === "0") kzs.cookies.remove("_kzExpvers");
  var kzExpverParams = kzExpverParamText
    .split(",")
    .reduce(function (ret, param) {
      var p = param.split(":");
      ret[p[0]] = p[1];
      return ret;
    }, {});
  var kzExpver = kzExpverParams[_expId] || kzExpverParams[_pid];
  var kzExpvers = kzs.cookies.get("_kzExpvers") || {};
  if (kzExpver) {
    kzExpvers[_pid] = kzExpver;
    kzs.cookies.set("_kzExpvers", kzExpvers);
  } else {
    kzExpver = kzExpvers[_pid] || config.ver;
  }
  if (kzExpver === "0") kzExpver = config.ver;
  return kzExpver;
};

var _jsUrl = function (kzExpver) {
  return kzExpver === "dev"
    ? config.externalExpScriptUrl.dev
    : config.gcsDir + "bundle." + kzExpver + ".js";
};

var loadScript = function (src) {
  if (!window.kzExternalExpScripts) window.kzExternalExpScripts = {};
  return new Promise(function (resolve, reject) {
    var tid;
    const handler = function (ev) {
      if (ev.message === "Script error.") {
        const msg = "Script error. " + src;
        kzs.console.error("%s " + msg, _el, ev);
        clearInterval(tid);
        window.removeEventListener("error", handler);
        reject(new Error(msg));
      } else {
        kzs.console.error("%s Error " + src, _el, ev);
      }
    };
    // Syntax Errorは script.onerrorでは拾えないので、このハンドラでうける
    window.addEventListener("error", handler);

    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("charset", "UTF-8");
    script.setAttribute("src", src);
    script.onload = function () {
      tid = setInterval(function () {
        if (window.kzExternalExpScripts[_pid]) {
          clearInterval(tid);
          kzs.console.log("%s Target Function Loaded " + src, _el);
          window.removeEventListener("error", handler);
          resolve();
        }
      }, 200);
    };
    script.onerror = function () {
      const msg = "loading failed " + src;
      kzs.console.error("%s " + msg, _el);
      window.removeEventListener("error", handler);
      reject(new Error(msg));
    };
    kzs.console.log("%s Start loading " + src, _el);
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};
var runExternalExpScript = function () {
  var kzExpver = getKzExpVer();
  if (kzExpver == "noVer") {
    kzs.console.log(
      "%s kzExpver is `noVer`. skip exp script load, so do nothing",
      _el
    );
    return Promise.resolve();
  } else {
    kzs.console.log(
      "%s kzExpver:",
      _el,
      kzExpver,
      kzExpver === config.ver ? "(product ver)" : "(set at cookie)"
    );
    return loadScript(_jsUrl(kzExpver)).then(function () {
      return window.kzExternalExpScripts[_pid](_exp);
    });
  }
};

// console で実行したい場合は return を /*return*/ に変更すれば OK
return (function () {
  try {
    var Promise = kzs.Promise; // console 実行時に kaizen の Promise を使う為 (browser 搭載 Promise と挙動異なる)
    kzs.console.log("%s begin %s %s", _el, _pid, _ver);
    kzs.console.log("%s templateVer %s", _el, _templateVer);
    // ここから main scope: code 追加は最低限に抑えるべし
    // safari bfcache 対策 http://bit.ly/2W8EYC1
    if (_expId != undefined) {
      if (kzs[_expId]) return Promise.reject("run in bfcache, skipping");
      kzs[_expId] = 1;
    }

    // editor or preview mode では何もしない:
    if (
      config.doNotingInEdiotrOrPreview &&
      kzs.utils.isNotInEditorOrPreviewMode() == false
    ) {
      kzs.console.log("%s in editor||preview mode, do nothing", _el);
      return;
    }

    // オリジナル案ならば何もしない:
    if (
      config.doNotingInOriginal &&
      (_exp.variation || {}).isOriginal == true
    ) {
      kzs.console.log("%s is original, do nothing", _el);
      return;
    }

    // variation js 内で kzs.console.log 出来るようにする
    window.kzConsole = kzs.console;

    // ⑤ここから施策 code 実行
    return Promise.resolve()
      .then(runExternalExpScript)
      .then(function () {
        kzs.console.log("%s reolved(end)", _el);
      })
      .catch(function (e) {
        if (e instanceof Error) {
          logException(e);
          kzs.console.error("%s rejected:", _el, e);
        } else {
          kzs.console.warn("%s rejected:", _el, e);
        }
        return Promise.reject();
      });
  } catch (e) {
    logException(e);
    kzs.console.error("%s rejected:", _el, e);
    return Promise.reject();
  }
})();
