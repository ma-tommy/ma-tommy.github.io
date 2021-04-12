// IP除外判定
var rejectIpsJudge = function () {
	return new Promise(function (resolve, reject) {
		kzs.console.log("start rejectIpJudge");
		var rejectIps = /^60\.132\.75\.54/; //ここに除外したいIPアドレスを正規表現で記述する
		kzs.console.log("除外対象IP = " + rejectIps);
		var judge = function (ip) {
			if (ip.match(rejectIps)) {
				reject();
			} else {
				resolve();
			}
		};
		var ip = kzs.cookies.get("ip");
		kzs.console.log("対象IP = " + ip);
		if (ip) {
			judge(ip);
		} else {
			kzs.utils.xjson
				.get("https://ip.kaizenplatform.net/me/ip", {
					callback: "kzs_cb",
					timeout: 1000,
					credentials: false,
				})
				.then(function (res) {
					kzs.cookies.set("ip", res.ip, { expire: 3600 });
					judge(res.ip);
				})
				.catch(function (err) {
					reject(); // IPアドレス取得失敗時は除外する (IPアドレス取得失敗時に除外しない場合は resolve() にする)
				});
		}
	});
};

return kzs.Promise.resolve()
	.then(rejectIpsJudge)
	.catch(function (e) {
		if (e instanceof Error) logException(e);
		else kzs.console.warn("%s rejected:", _el, e);
		return Promise.reject();
	});
