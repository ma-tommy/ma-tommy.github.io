(function (h) {
	if (!h.MunchkinTracker) {
		var l = h.document,
			q = l.location,
			D = encodeURIComponent,
			A = !1,
			u = null,
			t = null,
			E = !1,
			x = null,
			F = [],
			v = function (b, a, c, d) {
				try {
					var f = function () {
						try {
							c.apply(this, arguments);
						} catch (a) {}
					};
					b.addEventListener
						? b.addEventListener(a, f, d || !1)
						: b.attachEvent && b.attachEvent("on" + a, f);
					F.push([b, a, f, d]);
				} catch (k) {}
			},
			V = function (b, a, c, d) {
				try {
					b.removeEventListener
						? b.removeEventListener(a, c, d || !1)
						: b.detachEvent && b.detachEvent("on" + a, c);
				} catch (f) {}
			},
			f = function (b) {
				return "undefined" !== typeof b && null !== b;
			},
			G = function (b, a) {
				return b.className.match(RegExp("(\\s|^)" + a + "(\\s|$)"));
			},
			W = f(h.XMLHttpRequest) && f(new h.XMLHttpRequest().withCredentials),
			r = function (b) {
				var a = null,
					c;
				if (f(b))
					if (0 === b.length) a = "";
					else
						try {
							a = decodeURIComponent(b);
						} catch (d) {
							c = b.indexOf("?");
							if (-1 !== c)
								try {
									a = decodeURIComponent(b.substr(0, c)) + b.substr(c);
								} catch (g) {}
							f(a) || (a = String(b));
						}
				return a;
			},
			H = function (b, a) {
				var c = {},
					d = f(a) ? a : "=",
					g = b.split("&"),
					k = g.length,
					e,
					n,
					l;
				for (e = 0; e < k; e += 1)
					(n = g[e].split(d)),
						f(n) &&
							1 < n.length &&
							((l = n.shift()), (n = n.join(d)), (c[r(l)] = r(n)));
				return c;
			},
			I = function (b) {
				try {
					var a = l.createElement("a");
					a.href = b;
					return H(a.search.substr(1));
				} catch (c) {
					return null;
				}
			},
			J = function (b, a) {
				var c = null,
					d = [];
				if (f(b))
					for (c in b)
						b.hasOwnProperty(c) &&
							"function" !== typeof b[c] &&
							null !== b[c] &&
							d.push(D(c) + (f(a) ? a : "=") + D(b[c]));
				return d.join("&");
			},
			K = function (b, a) {
				var c = null;
				if (f(a) && f(b))
					for (c in b) b.hasOwnProperty(c) && f(a[c]) && (b[c] = a[c]);
			},
			L = function (b, a, c) {
				var d = b.split("."),
					g = d.length,
					e = 2;
				if (f(a)) e = a;
				else if (f(c) && c)
					"com" !== d[g - 1] &&
						((a = RegExp(
							"^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"
						)),
						4 === g && a.test(b)
							? (e = 4)
							: 2 === d[g - 1].length && 1 < g && "co" === d[g - 2] && (e = 3));
				else if (2 < d[g - 1].length) e = 2;
				else if (2 === d[g - 1].length) e = 3;
				else return b;
				for (; d.length > e && 2 < d.length; ) d.shift();
				return d.join(".");
			},
			y = function (b) {
				var a = l.cookie,
					c,
					d,
					g = { id: null, token: null };
				b = D(b);
				g.store = function (a, c, d, f) {
					var g = b + "=" + J(this, ":"),
						e = new Date();
					0 < a
						? e.setTime(e.getTime() + 864e5 * a)
						: e.setTime(e.getTime() - 1);
					g += "; expires=" + e.toGMTString();
					c && (g += "; path=" + c);
					d && -1 !== d.indexOf(".") && (g += "; domain=" + d);
					f && (g += "; secure");
					l.cookie = g;
				};
				if ("" !== a)
					for (a = a.split(";"), c = 0; c < a.length; c += 1)
						if (
							((d = a[c].replace(/^\s+|\s+$/g, "")), 0 === d.indexOf(b + "="))
						) {
							a = d.substring(b.length + 1);
							c = H(a);
							f(c.id) && f(c.token) ? K(g, c) : K(g, H(a, ":"));
							break;
						}
				return g;
			},
			e = {
				customName: null,
				notifyPrefix: null,
				wsInfo: null,
				altIds: [],
				visitorToken: null,
				cookieLifeDays: 730,
				clickTime: 350,
				cookieAnon: !0,
				mkt_tok: null,
				domainLevel: null,
				domainSelectorV2: !1,
				replayDetectLimit: 5e3,
				httpsOnly: !1,
				asyncOnly: !1,
				useBeaconAPI: !1,
				anonymizeIP: !1,
				apiOnly: !1,
				externalSource: null,
				orgId: null,
				_ecid: null,
				_itpMitigationForAll: !1,
			},
			m = null,
			p = null,
			X =
				h.navigator.cookieEnabled ||
				(l.hasOwnProperty("cookie") &&
					(0 < l.cookie.length ||
						-1 <
							(l.cookie = "testcookie=test; max-age=10000").indexOf.call(
								l.cookie,
								"testcookie=test;"
							))),
			B = !1,
			C = [],
			M = null,
			Y = function (b, a, c) {
				var d = new h.XMLHttpRequest();
				d.open("GET", b, !0 !== a);
				d.onreadystatechange = function () {
					2 <= d.readyState && d.abort();
				};
				if (a)
					try {
						d.timeout = c;
					} catch (f) {}
				try {
					d.send();
				} catch (e) {}
			},
			Q = function (b, a, c, d, f) {
				b = b + a + "&" + J(c) + "&" + J(d);
				e.useBeaconAPI && window.navigator && window.navigator.sendBeacon
					? window.navigator.sendBeacon(b)
					: ((c = new Date().getTime()),
					  (f = !f && !e.asyncOnly),
					  0 === a.indexOf("webevents/visitWebPage?") && (f = !1),
					  W ? Y(b, f, e.clickTime) : (new h.Image(1, 1).src = b),
					  (M = c + e.clickTime));
			},
			Z = (function () {
				var b;
				return function (a, c) {
					var d = {
						x: a.clientX,
						y: a.clientY,
						el: c,
						time: new Date().getTime(),
					};
					if (
						f(b) &&
						d.x === b.x &&
						d.y === b.y &&
						d.el === b.el &&
						d.time < b.time + e.replayDetectLimit
					)
						return !0;
					b = d;
					return !1;
				};
			})(),
			R = function () {
				var b = l.getElementsByName("_mkt_trk"),
					a = 0,
					c = "";
				f(p) && (c = "id:" + p.id + "&token:" + p.token);
				for (a = 0; a < b.length; a += 1)
					"hidden" === b[a].type && (b[a].value = c);
			},
			w = function (b, a, c, d) {
				var g = null,
					k;
				k = q.hostname;
				var l = q.protocol,
					n = "webevents/" + b;
				if (B) {
					var h;
					if ((h = window.navigator))
						a: {
							h = window.navigator.userAgent;
							if ("string" === typeof h && h) {
								if (
									0 <= h.indexOf("AdsBot") ||
									0 <= h.indexOf("Wget") ||
									0 <= h.indexOf("msnbot")
								) {
									h = !0;
									break a;
								}
								if (
									0 <= h.indexOf("Mozilla") &&
									(0 <= h.indexOf("slurp") || 0 <= h.indexOf("bot"))
								) {
									h = !0;
									break a;
								}
							}
							h = !1;
						}
					if (
						!h &&
						f(p) &&
						((a._mchId = p.id),
						(a._mchTk = p.token),
						f(e.mkt_tok) && (a.mkt_tok = e.mkt_tok),
						f(e.wsInfo) && (a._mchWs = e.wsInfo),
						"clickLink" === b &&
							(a._mchCn = f(e.customName) ? e.customName : ""),
						(a._mchHo = k),
						(a._mchPo = q.port),
						f(a._mchRu) || (a._mchRu = r(q.pathname)),
						(a._mchPc = l),
						(a._mchVr = "159"),
						f(k) && 0 !== k.length && "file:" !== l)
					)
						for (g in (e.anonymizeIP && (a.aip = 1),
						f(e.externalSource) && (a._mchEs = e.externalSource),
						f(x) && (a._mchEcid = x),
						(n += "?_mchNc=" + new Date().getTime()),
						Q(e.notifyPrefix, n, a, c, d),
						e.altIds))
							e.altIds.hasOwnProperty(g) &&
								((k = e.altIds[g]),
								(a._mchId = k),
								Q(
									e.notifyPrefix.replace(
										/\w{3}\-\w{3}\-\w{3}\.mktoresp\.com/i,
										k + ".mktoresp.com"
									),
									n,
									a,
									c,
									d
								));
				} else C.push(["post", arguments]);
			},
			S = function (b) {
				var a = b || h.event,
					c = a.target || a.srcElement,
					d = {},
					e;
				e = a.which;
				var k = a.button;
				e =
					(f(e) && (1 === e || 2 === e)) ||
					(f(k) && (0 === k || 1 === k || 4 === k))
						? !0
						: !1;
				if (e && !a._mchDone) {
					a._mchDone = !0;
					a = c;
					e = q.href || q;
					for (
						-1 < e.indexOf("#") && (e = e.substring(0, e.indexOf("#")));
						"A" !== a.tagName && "AREA" !== a.tagName && f(a.parentNode);

					)
						a = a.parentNode;
					a === l || a === h || ("A" !== a.tagName && "AREA" !== a.tagName)
						? (a = null)
						: ((c = a.href.replace(/^\s+|\s+$/g, "")),
						  (a =
								f(c) &&
								0 < c.length &&
								0 !== c.indexOf("#") &&
								0 !== c.indexOf(e + "#") &&
								0 !== c.indexOf("javascript") &&
								0 !== c.indexOf("mailto") &&
								!G(a, "mchNoDecorate")
									? a
									: null));
					f(a) && !Z(b, a) && ((d._mchHr = r(a.href)), w("clickLink", d));
				}
			},
			z = function (b) {
				if (B) {
					if (null !== p) return p;
					var a = L(q.hostname, e.domainLevel, e.domainSelectorV2),
						c = y("_mkto_trk"),
						d = !1 !== e.httpsOnly;
					if (f(c.id) || e.cookieAnon || b) {
						if (
							((c.id = m),
							f(c.token) ||
								(f(e.visitorToken) &&
								"VISITOR_MKTTOK_REPLACE" !== e.visitorToken
									? (c.token = e.visitorToken)
									: (c.token =
											"_mch-" +
											a +
											"-" +
											new Date().getTime() +
											"-" +
											(Math.floor(9e4 * Math.random()) + 1e4))),
							c.store(e.cookieLifeDays, "/", a, d),
							d && (c = y("_mkto_trk")),
							!d || f(c.id))
						)
							return (p = c), R(), c;
					} else return null;
				} else C.push(["createTrackingCookie", arguments]);
			},
			T = function () {
				z(!0);
			},
			$ = function (b) {
				var a = b.onclick;
				b.onclick =
					"function" === typeof a
						? function () {
								T.apply(b, arguments);
								return a.apply(b, arguments);
						  }
						: T;
			},
			N = function (b) {
				var a = L(q.hostname, e.domainLevel, e.domainSelectorV2),
					c = y("mkto_opt_out"),
					d = !1 !== e.httpsOnly;
				b
					? ((c.id = !0),
					  c.store(730, "/", a, d),
					  (b = y("_mkto_trk")),
					  b.id && b.store(0, "/", a, d))
					: c.store(0, "/", a, d);
			},
			U = function () {
				A && f(t) && E
					? window
							.fetch(
								"https://" + t + "/getCookie?_mchId=" + m + "&_mchTd=" + u,
								{ credentials: "include" }
							)
							.then(function (b) {
								if (b.ok) return b.body;
								throw Error("status ${response.status}");
							})
							["catch"](function (b) {
								window.console.warn("getCookie failed - ", b);
								window.localStorage.removeItem("_mktoLpDomain_" + m + "_" + u);
								window.localStorage.removeItem("_mktoSecureLp_" + m);
								t = null;
							})
							["finally"](O)
					: O();
			},
			O = function () {
				if (!B) {
					B = !0;
					var b = z(f(e.mkt_tok)),
						a,
						c;
					c = {};
					for (var d = {}; 0 < C.length; )
						switch (((a = C.shift()), a[0])) {
							case "createTrackingCookie":
								b = z.apply(l, a[1]);
								break;
							case "post":
								w.apply(l, a[1]);
						}
					if (f(e._ecid)) x = e._ecid;
					else
						a: {
							a = e.orgId;
							if (f(window.Visitor) && f(a))
								try {
									var g = window.Visitor.getInstance(a);
									if (f(g)) {
										x =
											a +
											":" +
											g.getLocationHint() +
											":" +
											g.getMarketingCloudVisitorID();
										break a;
									}
								} catch (k) {}
							for (
								var g = RegExp("AMCV_([A-Za-z0-9]+%40AdobeOrg)=([^;]+)", "g"),
									m,
									n = [];
								null !== (m = g.exec(l.cookie));

							) {
								var p = decodeURIComponent(m[1]),
									s;
								(f(a) && p !== a) ||
									null === (s = /MCMID%7C([^%]+)/.exec(m[2])) ||
									((m = /MCAAMLH-[^%]+%7C([0-9]+)/.exec(m[2])),
									n.push(p + ":" + (f(m) ? m[1] : "") + ":" + s[1]));
							}
							x = n.join(";");
						}
					if (f(b))
						e.apiOnly ||
							((c._mchCn = f(e.customName) ? e.customName : ""),
							(d._mchHa = r(q.hash)),
							(d._mchRe = r(l.referrer)),
							(d._mchQp = r(q.search.substr(1).replace(/&/g, "__-__"))),
							w("visitWebPage", c, d, !0));
					else if (!(e.cookieAnon || (f(h.Mkto) && f(h.Mkto.formSubmit)))) {
						b = [];
						c = l.forms;
						d = c.length;
						for (s = 0; s < d; s += 1)
							if (G(c[s], "lpeRegForm"))
								for (g = c[s].elements, n = g.length, a = 0; a < n; a += 1)
									"submit" !== g[a].type ||
										G(g[a], "mchNoDecorate") ||
										b.push(g[a]);
						for (c = 0; c < b.length; c += 1) $(b[c]);
					}
				}
			},
			P = {
				ASSOCIATE_LEAD: "associateLead",
				CLICK_LINK: "clickLink",
				VISIT_WEB_PAGE: "visitWebPage",
				init: function (b, a) {
					if (X && f(b) && 0 !== b.length) {
						m = b;
						m = m.toUpperCase();
						var c = "",
							d,
							g,
							k;
						d = I(h.location.toString());
						var p = null;
						e.notifyPrefix = q.protocol + "//" + m + ".mktoresp.com/";
						f(a) &&
							(window.console.debug('Munchkin.init("%s") options:', b, a),
							K(e, a));
						f(d) &&
							(f(d.mkt_tok) && (e.mkt_tok = d.mkt_tok),
							f(d.lpview) && (c = d.lpview),
							f(d.marketo_opt_out) && (p = d.marketo_opt_out));
						if (!f(e.mkt_tok))
							if (((d = I(l.referrer)), f(d.mkt_tok))) e.mkt_tok = d.mkt_tok;
							else if (f(d.enid) && f(d.type))
								for (k in d)
									d.hasOwnProperty(k) &&
										"enid" !== k &&
										"type" !== k &&
										(-1 < k.indexOf("mkt_tok") ||
											-1 < d[k].indexOf("mkt_tok")) &&
										((g = I(k + "=" + d[k])),
										f(g.mkt_tok) && (e.mkt_tok = g.mkt_tok));
						if ("preview" !== c || !/\/lpeditor\/preview$/.test(q.pathname)) {
							if (null === p) {
								if (((c = y("mkto_opt_out")), f(c.id))) {
									N(!0);
									return;
								}
							} else {
								if ("true" === p) {
									N(!0);
									return;
								}
								"false" === p && N(!1);
							}
							k = window.navigator.userAgent.toLowerCase();
							c = -1 < k.indexOf("safari");
							k = / version\/([0-9]+.[0-9]+)/.exec(k);
							A =
								(c && k && 12.1 <= parseFloat(k[1])) || e._itpMitigationForAll;
							u = L(q.hostname, e.domainLevel, e.domainSelectorV2);
							t = window.localStorage.getItem("_mktoLpDomain_" + m + "_" + u);
							f(t) && -1 < l.cookie.indexOf("_mkto_trk=") && (A = !1);
							A && window.fetch
								? ((E =
										"true" ===
										window.localStorage.getItem("_mktoSecureLp_" + m)),
								  f(t)
										? U()
										: window
												.fetch(
													q.protocol +
														"//" +
														m +
														".mktoutil.com/mktoutil/lpDomain?_mchId=" +
														m +
														"&_mchTd=" +
														u
												)
												.then(function (a) {
													if (a.ok) return a.json();
													throw Error("status ${response.status}");
												})
												["catch"](function (a) {
													window.console.warn("getLpDomain failed - ", a);
												})
												.then(function (a) {
													f(a) &&
														f(a.domain) &&
														(window.localStorage.setItem(
															"_mktoLpDomain_" + m + "_" + u,
															(t = a.domain)
														),
														window.localStorage.setItem(
															"_mktoSecureLp_" + m,
															(E = a.isSecure)
														));
												})
												["finally"](U))
								: O();
						}
					}
				},
				munchkinFunction: function (b, a, c) {
					var d = {},
						e = {},
						k = null;
					f(c) && (d._mchKy = c);
					switch (b) {
						case "associateLead":
							for (k in a) a.hasOwnProperty(k) && (d["_mchAt" + k] = a[k]);
							z(!0);
							w("associateLead", d);
							window.console.warn(
								"The Munchkin Associate Lead Method is being deprecated and will be removed in a future release. For more information, visit https://developers.marketo.com/?p=7696"
							);
							break;
						case "clickLink":
							f(a.href) && ((d._mchHr = d._mchLr = a.href), w("clickLink", d));
							break;
						case "visitWebPage":
							f(a.url) && (d._mchRu = a.url),
								f(a.params) && (d._mchQp = a.params),
								f(a.name) && (d._mchCn = a.name),
								(e._mchRe = r(l.referrer)),
								w("visitWebPage", d, e);
					}
				},
				createTrackingCookie: function (b) {
					z(b);
				},
			};
		Date.prototype.getTimeAlias = Date.prototype.getTime;
		v(h, "beforeunload", function () {
			for (var b; 0 < F.length; ) (b = F.shift()), V.apply(this, b);
			if (f(M)) {
				do b = new Date();
				while (b.getTimeAlias() < M);
			}
		});
		v(l, "click", S, !0);
		(function (b) {
			var a = !1,
				c = !0,
				d = l.documentElement,
				e = function (c) {
					("readystatechange" === c.type && "complete" !== l.readyState) ||
						a ||
						((a = !0), b.call(h, c.type || c));
				},
				f = null,
				f = function () {
					try {
						d.doScroll("left");
					} catch (a) {
						h.setTimeout(f, 50);
						return;
					}
					e("poll");
				};
			if ("complete" === l.readyState) b.call(h, "lazy");
			else {
				if (l.createEventObject && d.doScroll) {
					try {
						c = !h.frameElement;
					} catch (m) {}
					c && f();
				}
				v(l, "DOMContentLoaded", e);
				v(l, "readystatechange", e);
				v(h, "load", e);
			}
		})(function () {
			R();
			var b = 0;
			if (f(l.links))
				for (b = 0; b < l.links.length; b += 1) v(l.links[b], "click", S, !0);
		});
		h.MunchkinTracker = h.Munchkin = P;
		h.mktoMunchkin = P.init;
		h.mktoMunchkinFunction = P.munchkinFunction;
	}
})(window);
