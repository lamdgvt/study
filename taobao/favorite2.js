!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i)
                    return i(g, !0);
                if (f)
                    return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND",
                j
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++)
        e(d[g]);
    return e
}({
    1: [function (a, b) {
        function c() { }
        var d = b.exports = {};
        d.nextTick = function () {
            var a = "undefined" != typeof window && window.setImmediate
                , b = "undefined" != typeof window && window.postMessage && window.addEventListener;
            if (a)
                return function (a) {
                    return window.setImmediate(a)
                }
                    ;
            if (b) {
                var c = [];
                return window.addEventListener("message", function (a) {
                    var b = a.source;
                    if ((b === window || null === b) && "process-tick" === a.data && (a.stopPropagation(),
                        c.length > 0)) {
                        var d = c.shift();
                        d()
                    }
                }, !0),
                    function (a) {
                        c.push(a),
                            window.postMessage("process-tick", "*")
                    }
            }
            return function (a) {
                setTimeout(a, 0)
            }
        }(),
            d.title = "browser",
            d.browser = !0,
            d.env = {},
            d.argv = [],
            d.on = c,
            d.addListener = c,
            d.once = c,
            d.off = c,
            d.removeListener = c,
            d.removeAllListeners = c,
            d.emit = c,
            d.binding = function () {
                throw new Error("process.binding is not supported")
            }
            ,
            d.cwd = function () {
                return "/"
            }
            ,
            d.chdir = function () {
                throw new Error("process.chdir is not supported")
            }
    }
        , {}],
    2: [function (a, b) {
        "use strict";
        function c(a) {
            function b(a) {
                return null === i ? void k.push(a) : void f(function () {
                    var b = i ? a.onFulfilled : a.onRejected;
                    if (null === b)
                        return void (i ? a.resolve : a.reject)(j);
                    var c;
                    try {
                        c = b(j)
                    } catch (d) {
                        return void a.reject(d)
                    }
                    a.resolve(c)
                })
            }
            function c(a) {
                try {
                    if (a === l)
                        throw new TypeError("A promise cannot be resolved with itself.");
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var b = a.then;
                        if ("function" == typeof b)
                            return void e(b.bind(a), c, g)
                    }
                    i = !0,
                        j = a,
                        h()
                } catch (d) {
                    g(d)
                }
            }
            function g(a) {
                i = !1,
                    j = a,
                    h()
            }
            function h() {
                for (var a = 0, c = k.length; c > a; a++)
                    b(k[a]);
                k = null
            }
            if ("object" != typeof this)
                throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof a)
                throw new TypeError("not a function");
            var i = null
                , j = null
                , k = []
                , l = this;
            this.then = function (a, c) {
                return new l.constructor(function (e, f) {
                    b(new d(a, c, e, f))
                }
                )
            }
                ,
                e(a, c, g)
        }
        function d(a, b, c, d) {
            this.onFulfilled = "function" == typeof a ? a : null,
                this.onRejected = "function" == typeof b ? b : null,
                this.resolve = c,
                this.reject = d
        }
        function e(a, b, c) {
            var d = !1;
            try {
                a(function (a) {
                    d || (d = !0,
                        b(a))
                }, function (a) {
                    d || (d = !0,
                        c(a))
                })
            } catch (e) {
                if (d)
                    return;
                d = !0,
                    c(e)
            }
        }
        var f = a("asap");
        b.exports = c
    }
        , {
        asap: 4
    }],
    3: [function (a, b) {
        "use strict";
        function c(a) {
            this.then = function (b) {
                return "function" != typeof b ? this : new d(function (c, d) {
                    e(function () {
                        try {
                            c(b(a))
                        } catch (e) {
                            d(e)
                        }
                    })
                }
                )
            }
        }
        var d = a("./core.js")
            , e = a("asap");
        b.exports = d,
            c.prototype = d.prototype;
        var f = new c(!0)
            , g = new c(!1)
            , h = new c(null)
            , i = new c(void 0)
            , j = new c(0)
            , k = new c("");
        d.resolve = function (a) {
            if (a instanceof d)
                return a;
            if (null === a)
                return h;
            if (void 0 === a)
                return i;
            if (a === !0)
                return f;
            if (a === !1)
                return g;
            if (0 === a)
                return j;
            if ("" === a)
                return k;
            if ("object" == typeof a || "function" == typeof a)
                try {
                    var b = a.then;
                    if ("function" == typeof b)
                        return new d(b.bind(a))
                } catch (e) {
                    return new d(function (a, b) {
                        b(e)
                    }
                    )
                }
            return new c(a)
        }
            ,
            d.all = function (a) {
                var b = Array.prototype.slice.call(a);
                return new d(function (a, c) {
                    function d(f, g) {
                        try {
                            if (g && ("object" == typeof g || "function" == typeof g)) {
                                var h = g.then;
                                if ("function" == typeof h)
                                    return void h.call(g, function (a) {
                                        d(f, a)
                                    }, c)
                            }
                            b[f] = g,
                                0 === --e && a(b)
                        } catch (i) {
                            c(i)
                        }
                    }
                    if (0 === b.length)
                        return a([]);
                    for (var e = b.length, f = 0; f < b.length; f++)
                        d(f, b[f])
                }
                )
            }
            ,
            d.reject = function (a) {
                return new d(function (b, c) {
                    c(a)
                }
                )
            }
            ,
            d.race = function (a) {
                return new d(function (b, c) {
                    a.forEach(function (a) {
                        d.resolve(a).then(b, c)
                    })
                }
                )
            }
            ,
            d.prototype["catch"] = function (a) {
                return this.then(null, a)
            }
    }
        , {
        "./core.js": 2,
        asap: 4
    }],
    4: [function (a, b) {
        (function (a) {
            function c() {
                for (; e.next;) {
                    e = e.next;
                    var a = e.task;
                    e.task = void 0;
                    var b = e.domain;
                    b && (e.domain = void 0,
                        b.enter());
                    try {
                        a()
                    } catch (d) {
                        if (i)
                            throw b && b.exit(),
                            setTimeout(c, 0),
                            b && b.enter(),
                            d;
                        setTimeout(function () {
                            throw d
                        }, 0)
                    }
                    b && b.exit()
                }
                g = !1
            }
            function d(b) {
                f = f.next = {
                    task: b,
                    domain: i && a.domain,
                    next: null
                },
                    g || (g = !0,
                        h())
            }
            var e = {
                task: void 0,
                next: null
            }
                , f = e
                , g = !1
                , h = void 0
                , i = !1;
            if ("undefined" != typeof a && a.nextTick)
                i = !0,
                    h = function () {
                        a.nextTick(c)
                    }
                    ;
            else if ("function" == typeof setImmediate)
                h = "undefined" != typeof window ? setImmediate.bind(window, c) : function () {
                    setImmediate(c)
                }
                    ;
            else if ("undefined" != typeof MessageChannel) {
                var j = new MessageChannel;
                j.port1.onmessage = c,
                    h = function () {
                        j.port2.postMessage(0)
                    }
            } else
                h = function () {
                    setTimeout(c, 0)
                }
                    ;
            b.exports = d
        }
        ).call(this, a("_process"))
    }
        , {
        _process: 1
    }],
    5: [function () {
        "function" != typeof Promise.prototype.done && (Promise.prototype.done = function () {
            var a = arguments.length ? this.then.apply(this, arguments) : this;
            a.then(null, function (a) {
                setTimeout(function () {
                    throw a
                }, 0)
            })
        }
        )
    }
        , {}],
    6: [function (a) {
        a("asap");
        "undefined" == typeof Promise && (Promise = a("./lib/core.js"),
            a("./lib/es6-extensions.js")),
            a("./polyfill-done.js")
    }
        , {
        "./lib/core.js": 2,
        "./lib/es6-extensions.js": 3,
        "./polyfill-done.js": 5,
        asap: 4
    }]
}, {}, [6]);
!function (a, b) {
    function c() {
        var a = {}
            , b = new o(function (b, c) {
                a.resolve = b,
                    a.reject = c
            }
            );
        return a.promise = b,
            a
    }
    function d(a, b) {
        for (var c in b)
            void 0 === a[c] && (a[c] = b[c]);
        return a
    }
    function e(a) {
        var b = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
        b.appendChild(a)
    }
    function f(a) {
        var b = [];
        for (var c in a)
            a[c] && b.push(c + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
    function g(a) {
        return a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1)
    }
    function h(a) {
        function b(a, b) {
            return a << b | a >>> 32 - b
        }
        function c(a, b) {
            var c, d, e, f, g;
            return e = 2147483648 & a,
                f = 2147483648 & b,
                c = 1073741824 & a,
                d = 1073741824 & b,
                g = (1073741823 & a) + (1073741823 & b),
                c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f
        }
        function d(a, b, c) {
            return a & b | ~a & c
        }
        function e(a, b, c) {
            return a & c | b & ~c
        }
        function f(a, b, c) {
            return a ^ b ^ c
        }
        function g(a, b, c) {
            return b ^ (a | ~c)
        }
        function h(a, e, f, g, h, i, j) {
            return a = c(a, c(c(d(e, f, g), h), j)),
                c(b(a, i), e)
        }
        function i(a, d, f, g, h, i, j) {
            return a = c(a, c(c(e(d, f, g), h), j)),
                c(b(a, i), d)
        }
        function j(a, d, e, g, h, i, j) {
            return a = c(a, c(c(f(d, e, g), h), j)),
                c(b(a, i), d)
        }
        function k(a, d, e, f, h, i, j) {
            return a = c(a, c(c(g(d, e, f), h), j)),
                c(b(a, i), d)
        }
        function l(a) {
            for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)
                b = (i - i % 4) / 4,
                    h = i % 4 * 8,
                    g[b] = g[b] | a.charCodeAt(i) << h,
                    i++;
            return b = (i - i % 4) / 4,
                h = i % 4 * 8,
                g[b] = g[b] | 128 << h,
                g[f - 2] = c << 3,
                g[f - 1] = c >>> 29,
                g
        }
        function m(a) {
            var b, c, d = "", e = "";
            for (c = 0; 3 >= c; c++)
                b = a >>> 8 * c & 255,
                    e = "0" + b.toString(16),
                    d += e.substr(e.length - 2, 2);
            return d
        }
        function n(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                    b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                        b += String.fromCharCode(d >> 6 & 63 | 128),
                        b += String.fromCharCode(63 & d | 128))
            }
            return b
        }
        var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21;
        for (a = n(a),
            x = l(a),
            t = 1732584193,
            u = 4023233417,
            v = 2562383102,
            w = 271733878,
            o = 0; o < x.length; o += 16)
            p = t,
                q = u,
                r = v,
                s = w,
                t = h(t, u, v, w, x[o + 0], y, 3614090360),
                w = h(w, t, u, v, x[o + 1], z, 3905402710),
                v = h(v, w, t, u, x[o + 2], A, 606105819),
                u = h(u, v, w, t, x[o + 3], B, 3250441966),
                t = h(t, u, v, w, x[o + 4], y, 4118548399),
                w = h(w, t, u, v, x[o + 5], z, 1200080426),
                v = h(v, w, t, u, x[o + 6], A, 2821735955),
                u = h(u, v, w, t, x[o + 7], B, 4249261313),
                t = h(t, u, v, w, x[o + 8], y, 1770035416),
                w = h(w, t, u, v, x[o + 9], z, 2336552879),
                v = h(v, w, t, u, x[o + 10], A, 4294925233),
                u = h(u, v, w, t, x[o + 11], B, 2304563134),
                t = h(t, u, v, w, x[o + 12], y, 1804603682),
                w = h(w, t, u, v, x[o + 13], z, 4254626195),
                v = h(v, w, t, u, x[o + 14], A, 2792965006),
                u = h(u, v, w, t, x[o + 15], B, 1236535329),
                t = i(t, u, v, w, x[o + 1], C, 4129170786),
                w = i(w, t, u, v, x[o + 6], D, 3225465664),
                v = i(v, w, t, u, x[o + 11], E, 643717713),
                u = i(u, v, w, t, x[o + 0], F, 3921069994),
                t = i(t, u, v, w, x[o + 5], C, 3593408605),
                w = i(w, t, u, v, x[o + 10], D, 38016083),
                v = i(v, w, t, u, x[o + 15], E, 3634488961),
                u = i(u, v, w, t, x[o + 4], F, 3889429448),
                t = i(t, u, v, w, x[o + 9], C, 568446438),
                w = i(w, t, u, v, x[o + 14], D, 3275163606),
                v = i(v, w, t, u, x[o + 3], E, 4107603335),
                u = i(u, v, w, t, x[o + 8], F, 1163531501),
                t = i(t, u, v, w, x[o + 13], C, 2850285829),
                w = i(w, t, u, v, x[o + 2], D, 4243563512),
                v = i(v, w, t, u, x[o + 7], E, 1735328473),
                u = i(u, v, w, t, x[o + 12], F, 2368359562),
                t = j(t, u, v, w, x[o + 5], G, 4294588738),
                w = j(w, t, u, v, x[o + 8], H, 2272392833),
                v = j(v, w, t, u, x[o + 11], I, 1839030562),
                u = j(u, v, w, t, x[o + 14], J, 4259657740),
                t = j(t, u, v, w, x[o + 1], G, 2763975236),
                w = j(w, t, u, v, x[o + 4], H, 1272893353),
                v = j(v, w, t, u, x[o + 7], I, 4139469664),
                u = j(u, v, w, t, x[o + 10], J, 3200236656),
                t = j(t, u, v, w, x[o + 13], G, 681279174),
                w = j(w, t, u, v, x[o + 0], H, 3936430074),
                v = j(v, w, t, u, x[o + 3], I, 3572445317),
                u = j(u, v, w, t, x[o + 6], J, 76029189),
                t = j(t, u, v, w, x[o + 9], G, 3654602809),
                w = j(w, t, u, v, x[o + 12], H, 3873151461),
                v = j(v, w, t, u, x[o + 15], I, 530742520),
                u = j(u, v, w, t, x[o + 2], J, 3299628645),
                t = k(t, u, v, w, x[o + 0], K, 4096336452),
                w = k(w, t, u, v, x[o + 7], L, 1126891415),
                v = k(v, w, t, u, x[o + 14], M, 2878612391),
                u = k(u, v, w, t, x[o + 5], N, 4237533241),
                t = k(t, u, v, w, x[o + 12], K, 1700485571),
                w = k(w, t, u, v, x[o + 3], L, 2399980690),
                v = k(v, w, t, u, x[o + 10], M, 4293915773),
                u = k(u, v, w, t, x[o + 1], N, 2240044497),
                t = k(t, u, v, w, x[o + 8], K, 1873313359),
                w = k(w, t, u, v, x[o + 15], L, 4264355552),
                v = k(v, w, t, u, x[o + 6], M, 2734768916),
                u = k(u, v, w, t, x[o + 13], N, 1309151649),
                t = k(t, u, v, w, x[o + 4], K, 4149444226),
                w = k(w, t, u, v, x[o + 11], L, 3174756917),
                v = k(v, w, t, u, x[o + 2], M, 718787259),
                u = k(u, v, w, t, x[o + 9], N, 3951481745),
                t = c(t, p),
                u = c(u, q),
                v = c(v, r),
                w = c(w, s);
        var O = m(t) + m(u) + m(v) + m(w);
        return O.toLowerCase()
    }
    function i(a, b, c) {
        var d = c || {};
        document.cookie = a.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d.domain ? ";domain=" + d.domain : "") + (d.path ? ";path=" + d.path : "") + (d.secure ? ";secure" : "") + (d.httponly ? ";HttpOnly" : "")
    }
    function j(a) {
        var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
        return b ? b[1] : void 0
    }
    function k(a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() - 864e5);
        var e = "/";
        document.cookie = a + "=;path=" + e + ";domain=." + b + ";expires=" + d.toGMTString(),
            document.cookie = a + "=;path=" + e + ";domain=." + c + "." + b + ";expires=" + d.toGMTString()
    }
    function l() {
        var b = a.location.hostname;
        if (!b) {
            var c = a.parent.location.hostname;
            c && ~c.indexOf("zebra.alibaba-inc.com") && (b = c)
        }
        var d = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "etao.com", "alibaba-inc.com"]
            , e = new RegExp("([^.]*?)\\.?((?:" + d.join(")|(?:").replace(/\./g, "\\.") + "))", "i")
            , f = b.match(e) || []
            , g = f[2] || "taobao.com"
            , h = f[1] || "m";
        "taobao.net" !== g || "x" !== h && "waptest" !== h && "daily" !== h ? "taobao.net" === g && "demo" === h ? h = "demo" : "alibaba-inc.com" === g && "zebra" === h ? h = "zebra" : "waptest" !== h && "wapa" !== h && "m" !== h && (h = "m") : h = "waptest";
        var i = "etao.com" === g ? "apie" : "api";
        i = "taobao.com" === g ? "acs" : i,
            t.mainDomain = g,
            t.subDomain = h,
            t.prefix = i
    }
    function m() {
        var b = a.navigator.userAgent
            , c = b.match(/WindVane[\/\s]([\d\.\_]+)/);
        c && (t.WindVaneVersion = c[1]);
        var d = b.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
        d && (t.AliAppName = d[1],
            t.AliAppVersion = d[2])
    }
    function n(a) {
        this.id = ++w,
            this.params = d(a || {}, {
                v: "*",
                data: {},
                type: "get",
                dataType: "jsonp"
            }),
            this.params.type = this.params.type.toLowerCase(),
            "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)),
            this.middlewares = u.slice(0)
    }
    var o = a.Promise;
    if (!o) {
        var p = "褰撳墠娴忚鍣ㄤ笉鏀寔Promise锛岃鍦╳indows瀵硅薄涓婃寕杞絇romise瀵硅薄鍙弬鑰冿紙http://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/master锛変腑鐨勮В鍐虫柟妗�";
        throw b.mtop = {
            ERROR: p
        },
        new Error(p)
    }
    String.prototype.trim || (String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    );
    var q, r = o.resolve();
    try {
        q = a.localStorage,
            q.setItem("@private", "false")
    } catch (s) {
        q = !1
    }
    var t = {
        useAlipayJSBridge: !1
    }
        , u = []
        , v = {
            ERROR: -1,
            SUCCESS: 0,
            TOKEN_EXPIRED: 1,
            SESSION_EXPIRED: 2
        };
    l(),
        m();
    var w = 0;
    n.prototype.use = function (a) {
        if (!a)
            throw new Error("middleware is undefined");
        return this.middlewares.push(a),
            this
    }
        ,
        n.prototype.__processRequestMethod = function (a) {
            var b = this.params
                , c = this.options;
            "get" === b.type && "jsonp" === b.dataType ? c.getJSONP = !0 : "get" === b.type && "originaljsonp" === b.dataType ? c.getOriginalJSONP = !0 : "get" === b.type && "json" === b.dataType ? c.getJSON = !0 : "post" === b.type && (c.postJSON = !0),
                a()
        }
        ,
        n.prototype.__processRequestType = function (a) {
            var c = this
                , d = this.options;
            if (t.H5Request === !0 && (d.H5Request = !0),
                t.WindVaneRequest === !0 && (d.WindVaneRequest = !0),
                d.H5Request === !1 && d.WindVaneRequest === !0) {
                if (!b.windvane || parseFloat(d.WindVaneVersion) < 5.4)
                    throw new Error("WINDVANE_NOT_FOUND::缂哄皯WindVane鐜")
            } else
                d.H5Request === !0 ? d.WindVaneRequest = !1 : "undefined" == typeof d.WindVaneRequest && "undefined" == typeof d.H5Request && (b.windvane && parseFloat(d.WindVaneVersion) >= 5.4 ? d.WindVaneRequest = !0 : d.H5Request = !0);
            return a ? a().then(function () {
                var a = d.retJson.ret;
                return a instanceof Array && (a = a.join(",")),
                    d.WindVaneRequest === !0 && (!a || a.indexOf("HY_FAILED") > -1 || a.indexOf("HY_NO_HANDLER") > -1 || a.indexOf("HY_CLOSED") > -1 || a.indexOf("HY_EXCEPTION") > -1 || a.indexOf("HY_NO_PERMISSION") > -1) ? (t.H5Request = !0,
                        c.__sequence([c.__processRequestType, c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])) : void 0
            }) : void 0
        }
        ;
    var x = "_m_h5_c"
        , y = "_m_h5_tk"
        , z = "_m_h5_tk_enc";
    n.prototype.__getTokenFromAlipay = function () {
        var b = c()
            , d = this.options
            , e = (a.navigator.userAgent,
                !!location.protocol.match(/^https?\:$/))
            , f = "AP" === d.AliAppName && parseFloat(d.AliAppVersion) >= 8.2;
        return d.useAlipayJSBridge === !0 && !e && f && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function (a) {
            a && a.token && (d.token = a.token),
                b.resolve()
        }, function () {
            b.resolve()
        }) : b.resolve(),
            b.promise
    }
        ,
        n.prototype.__getTokenFromCookie = function () {
            var a = this.options;
            return a.token = a.token || j(y),
                a.token && (a.token = a.token.split("_")[0]),
                o.resolve()
        }
        ,
        n.prototype.__processToken = function (a) {
            var b = this
                , c = this.options;
            this.params;
            return c.token && delete c.token,
                c.WindVaneRequest !== !0 ? r.then(function () {
                    return b.__getTokenFromAlipay()
                }).then(function () {
                    return b.__getTokenFromCookie()
                }).then(a).then(function () {
                    var a = c.retJson
                        , d = a.ret;
                    if (d instanceof Array && (d = d.join(",")),
                        d.indexOf("TOKEN_EMPTY") > -1 || c.CDR === !0 && d.indexOf("ILLEGAL_ACCESS") > -1 || d.indexOf("TOKEN_EXOIRED") > -1) {
                        if (c.maxRetryTimes = c.maxRetryTimes || 5,
                            c.failTimes = c.failTimes || 0,
                            c.H5Request && ++c.failTimes < c.maxRetryTimes)
                            return b.__sequence([b.__processToken, b.__processRequestUrl, b.__processUnitPrefix, b.middlewares, b.__processRequest]);
                        c.maxRetryTimes > 0 && (k(x, c.pageDomain, "*"),
                            k(y, c.mainDomain, c.subDomain),
                            k(z, c.mainDomain, c.subDomain)),
                            a.retType = v.TOKEN_EXPIRED
                    }
                }) : void a()
        }
        ,
        n.prototype.__processRequestUrl = function (a) {
            var b = this.params
                , c = this.options;
            if (c.H5Request === !0) {
                var d = "//" + (c.prefix ? c.prefix + "." : "") + (c.subDomain ? c.subDomain + "." : "") + c.mainDomain + "/h5/" + b.api.toLowerCase() + "/" + b.v.toLowerCase() + "/"
                    , e = b.appKey || ("waptest" === c.subDomain ? "4272" : "12574478")
                    , f = (new Date).getTime()
                    , g = h(c.token + "&" + f + "&" + e + "&" + b.data)
                    , i = {
                        appKey: e,
                        t: f,
                        sign: g
                    }
                    , j = {
                        data: b.data,
                        ua: b.ua
                    };
                
                    console.log(g)
                Object.keys(b).forEach(function (a) {
                    "undefined" == typeof i[a] && "undefined" == typeof j[a] && (i[a] = b[a])
                }),
                    c.getJSONP ? i.type = "jsonp" : c.getOriginalJSONP ? i.type = "originaljsonp" : (c.getJSON || c.postJSON) && (i.type = "originaljson"),
                    c.querystring = i,
                    c.postdata = j,
                    c.path = d
            }
            a()
        }
        ,
        n.prototype.__processUnitPrefix = function (b) {
            var c = this.params
                , d = this.options;
            if (d.disabledUnit === !0)
                return void b();
            if (q && d.H5Request === !0) {
                var f = c.api
                    , g = !1
                    , h = j("_m_user_unitinfo_")
                    , i = q.getItem("unitinfo");
                h && h.split("|")[0].indexOf("center") < 0 && i && i.indexOf(f.toLowerCase()) >= 0 && (g = h.split("|")[1]),
                    d.h5UnitPrefix ? d.path = d.path.replace(/^\/\//, "//" + d.h5UnitPrefix) : g && d.path && (d.useAcsUnit === !0 || d.path.indexOf("taobao.com") > -1 && "acs" === d.prefix ? d.path = d.path.replace(/^\/\//, "//" + g) : d.path = d.path.replace(/^\/\//, "//" + g + ".")),
                    b().then(function () {
                        if (q) {
                            var b = j("_m_unitapi_v_")
                                , c = q.getItem("unitinfo");
                            if (b) {
                                var f = c ? JSON.parse(c) : {};
                                if (!c || b !== f.version) {
                                    var g = !1
                                        , h = "//h5." + d.subDomain + ".taobao.com/js/mtop/unit/" + b + "/unitApi.js"
                                        , i = document.createElement("script");
                                    i.src = h,
                                        i.async = !0;
                                    var k = function () {
                                        g || (g = !0,
                                            i.onload = i.onerror = null,
                                            i.parentNode && i.parentNode.removeChild(i))
                                    };
                                    i.onerror = function () {
                                        k()
                                    }
                                        ,
                                        a.jsonp_unitapi || (a.jsonp_unitapi = function (a) {
                                            k(),
                                                q.setItem("unitinfo", JSON.stringify(a))
                                        }
                                        ),
                                        e(i)
                                }
                            }
                        }
                    })
            } else
                b()
        }
        ;
    var A = 0;
    n.prototype.__requestJSONP = function (a) {
        function b(a) {
            if (k && clearTimeout(k),
                l.parentNode && l.parentNode.removeChild(l),
                "TIMEOUT" === a)
                window[j] = function () {
                    window[j] = void 0;
                    try {
                        delete window[j]
                    } catch (a) { }
                }
                    ;
            else {
                window[j] = void 0;
                try {
                    delete window[j]
                } catch (b) { }
            }
        }
        var d = c()
            , g = this.params
            , h = this.options
            , i = g.timeout || 2e4
            , j = "mtopjsonp" + ++A
            , k = setTimeout(function () {
                a("TIMEOUT::鎺ュ彛瓒呮椂"),
                    b("TIMEOUT")
            }, i);
        h.querystring.callback = j;
        var l = document.createElement("script");
        return l.src = h.path + "?" + f(h.querystring) + "&" + f(h.postdata),
            l.async = !0,
            l.onerror = function () {
                b("ABORT"),
                    a("ABORT::鎺ュ彛寮傚父閫€鍑�")
            }
            ,
            window[j] = function () {
                h.results = Array.prototype.slice.call(arguments),
                    b(),
                    d.resolve()
            }
            ,
            e(l),
            d.promise
    }
        ,
        n.prototype.__requestJSON = function (b) {
            function d(a) {
                m && clearTimeout(m),
                    "TIMEOUT" === a && k.abort()
            }
            var e = c()
                , h = this.params
                , i = this.options
                , k = new a.XMLHttpRequest
                , l = h.timeout || 2e4
                , m = setTimeout(function () {
                    b("TIMEOUT::鎺ュ彛瓒呮椂"),
                        d("TIMEOUT")
                }, l);
            i.pageDomain = i.pageDomain || g(a.location.hostname),
                i.mainDomain != i.pageDomain && (i.maxRetryTimes = 3,
                    i.CDR = !0,
                    j(x) && (i.querystring.c = decodeURIComponent(j(x)))),
                k.onreadystatechange = function () {
                    if (4 == k.readyState) {
                        var a, c, f = k.status;
                        if (f >= 200 && 300 > f || 304 == f) {
                            d(),
                                a = k.responseText,
                                c = k.getAllResponseHeaders() || "";
                            try {
                                a = /^\s*$/.test(a) ? {} : JSON.parse(a),
                                    a.responseHeaders = c,
                                    i.results = [a],
                                    e.resolve()
                            } catch (g) {
                                b("PARSE_JSON_ERROR::瑙ｆ瀽JSON澶辫触")
                            }
                        } else
                            d("ABORT"),
                                b("ABORT::鎺ュ彛寮傚父閫€鍑�")
                    }
                }
                ;
            var n, o, p = i.path + "?" + f(i.querystring);
            if (i.getJSON ? (n = "GET",
                p += "&" + f(i.postdata)) : i.postJSON && (n = "POST",
                    o = f(i.postdata)),
                k.open(n, p, !0),
                k.withCredentials = !0,
                k.setRequestHeader("Accept", "application/json"),
                k.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                h.headers)
                for (var q in h.headers)
                    k.setRequestHeader(q, h.headers[q]);
            return k.send(o),
                e.promise
        }
        ,
        n.prototype.__requestWindVane = function (a) {
            function d(a) {
                j.results = [a],
                    h.resolve()
            }
            var e, f, g, h = c(), i = this.params, j = this.options, k = i.data, l = i.api, m = i.v, n = j.postJSON ? 1 : 0, o = j.getJSON || j.postJSON ? "originaljson" : "", p = "https" === location.protocol ? 1 : 0, q = i.isSec || 0, r = i.sessionOption || "AutoLoginOnly";
            if ("undefined" == typeof i.ecode)
                throw new Error("UNEXCEPT_PARAM_ECODE::缂哄皯ecode鍙傛暟");
            return e = parseInt(i.ecode),
                g = "undefined" != typeof i.timer ? parseInt(i.timer) : "undefined" != typeof i.timeout ? parseInt(i.timeout) : 2e4,
                f = 2 * g,
                i.needLogin === !0 && "undefined" == typeof i.sessionOption && (r = "AutoLoginAndManualLogin"),
                "undefined" != typeof i.secType && "undefined" == typeof i.isSec && (q = i.secType),
                b.windvane.call("MtopWVPlugin", "send", {
                    api: l,
                    v: m,
                    post: String(n),
                    type: o,
                    isHttps: String(p),
                    ecode: String(e),
                    isSec: String(q),
                    param: JSON.parse(k),
                    timer: g,
                    sessionOption: r,
                    ext_headers: {
                        referer: location.href
                    }
                }, d, d, f),
                h.promise
        }
        ,
        n.prototype.__processRequest = function (a, b) {
            var c = this;
            return r.then(function () {
                var a = c.options;
                if (a.H5Request && (a.getJSONP || a.getOriginalJSONP))
                    return c.__requestJSONP(b);
                if (a.H5Request && (a.getJSON || a.postJSON))
                    return c.__requestJSON(b);
                if (a.WindVaneRequest)
                    return c.__requestWindVane(b);
                throw new Error("UNEXCEPT_REQUEST::閿欒鐨勮姹傜被鍨�")
            }).then(a).then(function () {
                var a = c.options
                    , b = (c.params,
                        a.results[0])
                    , d = b && b.ret || [];
                b.ret = d,
                    d instanceof Array && (d = d.join(","));
                var e = b.c;
                if (a.CDR && e) {
                    var f = e.split(";");
                    i(x, e, {
                        domain: a.pageDomain,
                        path: "/"
                    }),
                        i(y, f[0], {
                            domain: a.pageDomain,
                            path: "/"
                        })
                }
                d.indexOf("SUCCESS") > -1 ? b.retType = v.SUCCESS : b.retType = v.ERROR,
                    a.retJson = b
            })
        }
        ,
        n.prototype.__sequence = function (a) {
            function b(a) {
                if (a instanceof Array)
                    a.forEach(b);
                else {
                    var g, h = c(), i = c();
                    e.push(function () {
                        return h = c(),
                            g = a.call(d, function (a) {
                                return h.resolve(a),
                                    i.promise
                            }, function (a) {
                                return h.reject(a),
                                    i.promise
                            }),
                            g && (g = g["catch"](function (a) {
                                h.reject(a)
                            })),
                            h.promise
                    }),
                        f.push(function (a) {
                            return i.resolve(a),
                                g
                        })
                }
            }
            var d = this
                , e = []
                , f = [];
            a.forEach(b);
            for (var g, h = r; g = e.shift();)
                h = h.then(g);
            for (; g = f.pop();)
                h = h.then(g);
            return h
        }
        ;
    var B = function (a) {
        a()
    }
        , C = function (a) {
            a()
        };
    n.prototype.request = function (a) {
        var b = this;
        this.options = d(a || {}, t);
        var c = o.resolve([B, C]).then(function (a) {
            var c = a[0]
                , d = a[1];
            return b.__sequence([c, b.__processRequestMethod, b.__processRequestType, b.__processToken, b.__processRequestUrl, b.__processUnitPrefix, b.middlewares, b.__processRequest, d])
        }).then(function () {
            var a = b.options.retJson;
            return a.retType !== v.SUCCESS ? o.reject(a) : b.options.successCallback ? void b.options.successCallback(a) : o.resolve(a)
        })["catch"](function (a) {
            var c;
            return a instanceof Error ? (console.error(a.stack),
                c = {
                    ret: [a.message],
                    stack: [a.stack],
                    retJson: v.ERROR
                }) : c = "string" == typeof a ? {
                    ret: [a],
                    retJson: v.ERROR
                } : void 0 !== a ? a : b.options.retJson,
                b.options.failureCallback ? void b.options.failureCallback(c) : o.reject(c)
        });
        return this.__processRequestType(),
            b.options.H5Request && (b.constructor.__firstProcessor || (b.constructor.__firstProcessor = c),
                B = function (a) {
                    b.constructor.__firstProcessor.then(a)["catch"](a)
                }
            ),
            c
    }
        ,
        b.mtop = function (a) {
            return new n(a)
        }
        ,
        b.mtop.request = function (a, b, c) {
            var d = {
                H5Request: a.H5Request,
                WindVaneRequest: a.WindVaneRequest,
                LoginRequest: a.LoginRequest,
                AntiCreep: a.AntiCreep,
                AntiFlood: a.AntiFlood,
                successCallback: b,
                failureCallback: c || b
            };
            return new n(a).request(d)
        }
        ,
        b.mtop.H5Request = function (a, b, c) {
            var d = {
                H5Request: !0,
                successCallback: b,
                failureCallback: c || b
            };
            return new n(a).request(d)
        }
        ,
        b.mtop.middlewares = u,
        b.mtop.config = t,
        b.mtop.RESPONSE_TYPE = v,
        b.mtop.CLASS = n
}(window, window.lib || (window.lib = {})),
    function (a, b) {
        function c(a) {
            return a.preventDefault(),
                !1
        }
        function d(b, d) {
            var e = this
                , f = a.dpr || 1
                , g = document.createElement("div")
                , h = document.documentElement.getBoundingClientRect()
                , i = Math.max(h.width, window.innerWidth) / f
                , j = Math.max(h.height, window.innerHeight) / f;
            g.style.cssText = ["-webkit-transform:scale(" + f + ") translateZ(0)", "-ms-transform:scale(" + f + ") translateZ(0)", "transform:scale(" + f + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + i + "px", "height:" + j + "px", "z-index:999999", "position:absolute", "left:0", "top:0px", "background:#FFF", "display:none"].join(";");
            var k = document.createElement("div");
            k.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"),
                k.innerText = b;
            var l = document.createElement("a");
            l.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"),
                l.innerText = "鍏抽棴";
            var m = document.createElement("iframe");
            m.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"),
                k.appendChild(l),
                g.appendChild(k),
                g.appendChild(m),
                document.body.appendChild(g),
                m.src = d,
                l.addEventListener("click", function () {
                    e.hide();
                    var a = document.createEvent("HTMLEvents");
                    a.initEvent("close", !1, !1),
                        g.dispatchEvent(a)
                }, !1),
                this.addEventListener = function () {
                    g.addEventListener.apply(g, arguments)
                }
                ,
                this.removeEventListener = function () {
                    g.removeEventListener.apply(g, arguments)
                }
                ,
                this.show = function () {
                    document.addEventListener("touchmove", c, !1),
                        g.style.display = "block",
                        window.scrollTo(0, 0)
                }
                ,
                this.hide = function () {
                    document.removeEventListener("touchmove", c),
                        window.scrollTo(0, -h.top),
                        g.parentNode && g.parentNode.removeChild(g)
                }
        }
        function e(a) {
            var c = this
                , d = this.options
                , e = this.params;
            return a().then(function () {
                var a = d.retJson
                    , f = a.ret;
                if (f instanceof Array && (f = f.join(",")),
                    (f.indexOf("SESSION_EXPIRED") > -1 || f.indexOf("SID_INVALID") > -1 || f.indexOf("AUTH_REJECT") > -1 || f.indexOf("NEED_LOGIN") > -1) && (a.retType = k.SESSION_EXPIRED,
                        !d.WindVaneRequest && (j.LoginRequest === !0 || d.LoginRequest === !0 || e.needLogin === !0))) {
                    if (!b.login)
                        throw new Error("LOGIN_NOT_FOUND::缂哄皯lib.login");
                    if (d.CDR !== !0)
                        return b.login.goLoginAsync().then(function (a) {
                            return c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])
                        })["catch"](function (a) {
                            throw "CANCEL" === a ? new Error("LOGIN_CANCEL::鐢ㄦ埛鍙栨秷鐧诲綍") : new Error("LOGIN_FAILURE::鐢ㄦ埛鐧诲綍澶辫触")
                        });
                    b.login.goLogin()
                }
            })
        }
        function f(a) {
            var b = this.options;
            this.params;
            return b.H5Request !== !0 || j.AntiFlood !== !0 && b.AntiFlood !== !0 ? void a() : a().then(function () {
                var a = b.retJson
                    , c = a.ret;
                c instanceof Array && (c = c.join(",")),
                    c.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && a.data.url && (b.AntiFloodReferer ? location.href = a.data.url.replace(/(http_referer=).+/, "$1" + b.AntiFloodReferer) : location.href = a.data.url)
            })
        }
        function g(b) {
            var c = this
                , e = this.options
                , f = this.params;
            return f.forceAntiCreep !== !0 && (e.AliAppName || e.AliAppVersion) || j.AntiCreep !== !0 && e.AntiCreep !== !0 ? void b() : b().then(function () {
                var b = e.retJson
                    , g = b.ret;
                return g instanceof Array && (g = g.join(",")),
                    g.indexOf("RGV587_ERROR::SM") > -1 && b.data.url ? new h(function (e, g) {
                        function h() {
                            k.removeEventListener("close", h),
                                a.removeEventListener("message", i),
                                g("USER_INPUT_CANCEL::鐢ㄦ埛鍙栨秷杈撳叆")
                        }
                        function i(b) {
                            var d;
                            try {
                                d = JSON.parse(b.data) || {}
                            } catch (j) { }
                            if (d && "child" === d.type) {
                                k.removeEventListener("close", h),
                                    a.removeEventListener("message", i),
                                    k.hide();
                                var l;
                                try {
                                    l = JSON.parse(decodeURIComponent(d.content)),
                                        "string" == typeof l && (l = JSON.parse(l));
                                    for (var m in l)
                                        f[m] = l[m];
                                    c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]).then(e)
                                } catch (j) {
                                    g("USER_INPUT_FAILURE::鐢ㄦ埛杈撳叆澶辫触")
                                }
                            }
                        }
                        var j = b.data.url
                            , k = new d("", j);
                        k.addEventListener("close", h, !1),
                            a.addEventListener("message", i, !1),
                            k.show()
                    }
                    ) : void 0
            })
        }
        if (!b || !b.mtop || b.mtop.ERROR)
            throw new Error("Mtop 鍒濆鍖栧け璐ワ紒璇峰弬鑰僊top鏂囨。http://gitlab.alibaba-inc.com/mtb/lib-mtop");
        var h = a.Promise
            , i = b.mtop.CLASS
            , j = b.mtop.config
            , k = b.mtop.RESPONSE_TYPE;
        b.mtop.middlewares.push(e),
            b.mtop.loginRequest = function (a, b, c) {
                var d = {
                    LoginRequest: !0,
                    H5Request: !0,
                    successCallback: b,
                    failureCallback: c || b
                };
                return new i(a).request(d)
            }
            ,
            b.mtop.antiFloodRequest = function (a, b, c) {
                var d = {
                    AntiFlood: !0,
                    successCallback: b,
                    failureCallback: c || b
                };
                return new i(a).request(d)
            }
            ,
            b.mtop.middlewares.push(f),
            b.mtop.antiCreepRequest = function (a, b, c) {
                var d = {
                    AntiCreep: !0,
                    successCallback: b,
                    failureCallback: c || b
                };
                return new i(a).request(d)
            }
            ,
            b.mtop.middlewares.push(g)
    }(window, window.lib || (window.lib = {}));
