let Assign = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
    }
    return t
}

let a, s, c = "0123456789abcdefghijklmnopqrstuvwxyz", u = new Array;
{
    for (a = "0".charCodeAt(0),
        s = 0; s <= 9; ++s)
        u[a++] = s;
    for (a = "a".charCodeAt(0),
        s = 10; s < 36; ++s)
        u[a++] = s;
    for (a = "A".charCodeAt(0),
        s = 10; s < 36; ++s)
        u[a++] = s;
}

let m, v, M, w = 256;
function b() {
    !function (t) {
        v[M++] ^= 255 & t,
            v[M++] ^= t >> 8 & 255,
            v[M++] ^= t >> 16 & 255,
            v[M++] ^= t >> 24 & 255,
            M >= w && (M -= w)
    }((new Date).getTime())
}
{
    if (null == v) {
        var N;
        if (v = new Array,
            M = 0,
            window.crypto && window.crypto.getRandomValues) {
            var C = new Uint8Array(32);
            for (window.crypto.getRandomValues(C),
                N = 0; N < 32; ++N)
                v[M++] = C[N]
        }
        if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random) {
            var T = window.crypto.random(32);
            for (N = 0; N < T.length; ++N)
                v[M++] = 255 & T.charCodeAt(N)
        }
        for (; M < w;)
            N = Math.floor(65536 * Math.random()),
                v[M++] = N >>> 8,
                v[M++] = 255 & N;
        M = 0,
            b()
    }
}

function r() {
    return new I(null)
}
function l(t) {
    return c.charAt(t)
}

function p(t) {
    var e = r();
    return e.fromInt(t),
        e
}

function d(t) {
    var e, n = 1;
    return 0 != (e = t >>> 16) && (t = e,
        n += 16),
        0 != (e = t >> 8) && (t = e,
            n += 8),
        0 != (e = t >> 4) && (t = e,
            n += 4),
        0 != (e = t >> 2) && (t = e,
            n += 2),
        0 != (e = t >> 1) && (t = e,
            n += 1),
        n
}


function f(t, e) {
    var n = u[t.charCodeAt(e)];
    return null == n ? -1 : n
}

function i() {
    if (null == m) {
        for (b(),
            (m = new Y).init(v),
            M = 0; M < v.length; ++M)
            v[M] = 0;
        M = 0
    }
    return m.next()
}

class J {
    nextBytes = function (t) {
        var e;
        for (e = 0; e < t.length; ++e)
            t[e] = i()
    }
}

class H {
    constructor(t) {
        this.m = t
    }
}

class Y {
    constructor() {
        this.i = 0,
            this.j = 0,
            this.S = new Array
    };
    init = function (t) {
        var e, n, o;
        for (e = 0; e < 256; ++e)
            this.S[e] = e;
        for (n = 0,
            e = 0; e < 256; ++e)
            n = n + this.S[e] + t[e % t.length] & 255,
                o = this.S[e],
                this.S[e] = this.S[n],
                this.S[n] = o;
        this.i = 0,
            this.j = 0
    };
    next = function () {
        var t;
        return this.i = this.i + 1 & 255,
            this.j = this.j + this.S[this.i] & 255,
            t = this.S[this.i],
            this.S[this.i] = this.S[this.j],
            this.S[this.j] = t,
            this.S[t + this.S[this.i] & 255]
    }
}
class G {
    constructor(t) {
        this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t
    }
    convert = function (t) {
        var e = r();
        return t.abs().dlShiftTo(this.m.t, e),
            e.divRemTo(this.m, null, e),
            t.s < 0 && e.compareTo(I.ZERO) > 0 && this.m.subTo(e, e),
            e
    }
    revert = function (t) {
        var e = r();
        return t.copyTo(e),
            this.reduce(e),
            e
    }
    reduce = function (t) {
        for (; t.t <= this.mt2;)
            t[t.t++] = 0;
        for (var e = 0; e < this.m.t; ++e) {
            var n = 32767 & t[e]
                , o = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
            for (t[n = e + this.m.t] += this.m.am(0, o, t, e, 0, this.m.t); t[n] >= t.DV;)
                t[n] -= t.DV,
                    t[++n]++
        }
        t.clamp(),
            t.drShiftTo(this.m.t, t),
            t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
    }
    mulTo = function (t, e, n) {
        t.multiplyTo(e, n),
            this.reduce(n)
    }
    sqrTo = function (t, e) {
        t.squareTo(e),
            this.reduce(e)
    }
}

class I {
    constructor(t, e, n) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
    };
    o = 28
    DB = this.o;
    DM = (1 << this.o) - 1;
    DV = 1 << this.o;
    FV = Math.pow(2, 52);
    F1 = 52 - this.o;
    F2 = 2 * this.o - 52;
    copyTo = function (t) {
        for (var e = this.t - 1; e >= 0; --e)
            t[e] = this[e];
        t.t = this.t,
            t.s = this.s
    }
    am = function (t, e, n, o, i, r) {
        for (var a = 16383 & e, s = e >> 14; --r >= 0;) {
            var c = 16383 & this[t]
                , u = this[t++] >> 14
                , l = s * c + u * a;
            i = ((c = a * c + ((16383 & l) << 14) + n[o] + i) >> 28) + (l >> 14) + s * u,
                n[o++] = 268435455 & c
        }
        return i
    }
    fromInt = function (t) {
        this.t = 1,
            this.s = t < 0 ? -1 : 0,
            t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
    }
    fromString = function (t, e) {
        var n;
        if (16 == e)
            n = 4;
        else if (8 == e)
            n = 3;
        else if (256 == e)
            n = 8;
        else if (2 == e)
            n = 1;
        else if (32 == e)
            n = 5;
        else {
            if (4 != e)
                return void this.fromRadix(t, e);
            n = 2
        }
        this.t = 0,
            this.s = 0;
        for (var o = t.length, r = !1, a = 0; --o >= 0;) {
            var s = 8 == n ? 255 & t[o] : f(t, o);
            s < 0 ? "-" == t.charAt(o) && (r = !0) : (r = !1,
                0 == a ? this[this.t++] = s : a + n > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - a) - 1) << a,
                    this[this.t++] = s >> this.DB - a) : this[this.t - 1] |= s << a,
                (a += n) >= this.DB && (a -= this.DB))
        }
        8 == n && 0 != (128 & t[0]) && (this.s = -1,
            a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a)),
            this.clamp(),
            r && I.ZERO.subTo(this, this)
    }
    clamp = function () {
        for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;)
            --this.t
    }
    dlShiftTo = function (t, e) {
        var n;
        for (n = this.t - 1; n >= 0; --n)
            e[n + t] = this[n];
        for (n = t - 1; n >= 0; --n)
            e[n] = 0;
        e.t = this.t + t,
            e.s = this.s
    }
    drShiftTo = function (t, e) {
        for (var n = t; n < this.t; ++n)
            e[n - t] = this[n];
        e.t = Math.max(this.t - t, 0),
            e.s = this.s
    }
    lShiftTo = function (t, e) {
        var n, o = t % this.DB, i = this.DB - o, r = (1 << i) - 1, a = Math.floor(t / this.DB), s = this.s << o & this.DM;
        for (n = this.t - 1; n >= 0; --n)
            e[n + a + 1] = this[n] >> i | s,
                s = (this[n] & r) << o;
        for (n = a - 1; n >= 0; --n)
            e[n] = 0;
        e[a] = s,
            e.t = this.t + a + 1,
            e.s = this.s,
            e.clamp()
    };
    rShiftTo = function (t, e) {
        e.s = this.s;
        var n = Math.floor(t / this.DB);
        if (n >= this.t)
            e.t = 0;
        else {
            var o = t % this.DB
                , i = this.DB - o
                , r = (1 << o) - 1;
            e[0] = this[n] >> o;
            for (var a = n + 1; a < this.t; ++a)
                e[a - n - 1] |= (this[a] & r) << i,
                    e[a - n] = this[a] >> o;
            o > 0 && (e[this.t - n - 1] |= (this.s & r) << i),
                e.t = this.t - n,
                e.clamp()
        }
    };
    subTo = function (t, e) {
        for (var n = 0, o = 0, i = Math.min(t.t, this.t); n < i;)
            o += this[n] - t[n],
                e[n++] = o & this.DM,
                o >>= this.DB;
        if (t.t < this.t) {
            for (o -= t.s; n < this.t;)
                o += this[n],
                    e[n++] = o & this.DM,
                    o >>= this.DB;
            o += this.s
        } else {
            for (o += this.s; n < t.t;)
                o -= t[n],
                    e[n++] = o & this.DM,
                    o >>= this.DB;
            o -= t.s
        }
        e.s = o < 0 ? -1 : 0,
            o < -1 ? e[n++] = this.DV + o : o > 0 && (e[n++] = o),
            e.t = n,
            e.clamp()
    };
    multiplyTo = function (t, e) {
        var n = this.abs()
            , o = t.abs()
            , r = n.t;
        for (e.t = r + o.t; --r >= 0;)
            e[r] = 0;
        for (r = 0; r < o.t; ++r)
            e[r + n.t] = n.am(0, o[r], e, r, 0, n.t);
        e.s = 0,
            e.clamp(),
            this.s != t.s && I.ZERO.subTo(e, e)
    };
    squareTo = function (t) {
        for (var e = this.abs(), n = t.t = 2 * e.t; --n >= 0;)
            t[n] = 0;
        for (n = 0; n < e.t - 1; ++n) {
            var o = e.am(n, e[n], t, 2 * n, 0, 1);
            (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, o, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                t[n + e.t + 1] = 1)
        }
        t.t > 0 && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
            t.s = 0,
            t.clamp()
    };
    divRemTo = function (t, e, n) {
        var o = t.abs();
        if (!(o.t <= 0)) {
            var a = this.abs();
            if (a.t < o.t)
                return null != e && e.fromInt(0),
                    void (null != n && this.copyTo(n));
            null == n && (n = r());
            var s = r()
                , c = this.s
                , u = t.s
                , l = this.DB - d(o[o.t - 1]);
            l > 0 ? (o.lShiftTo(l, s),
                a.lShiftTo(l, n)) : (o.copyTo(s),
                    a.copyTo(n));
            var f = s.t
                , p = s[f - 1];
            if (0 != p) {
                var h = p * (1 << this.F1) + (f > 1 ? s[f - 2] >> this.F2 : 0)
                    , g = this.FV / h
                    , y = (1 << this.F1) / h
                    , m = 1 << this.F2
                    , v = n.t
                    , M = v - f
                    , w = null == e ? r() : e;
                for (s.dlShiftTo(M, w),
                    n.compareTo(w) >= 0 && (n[n.t++] = 1,
                        n.subTo(w, n)),
                    this.dlShiftTo(f, w),
                    w.subTo(s, s); s.t < f;)
                    s[s.t++] = 0;
                for (; --M >= 0;) {
                    var b = n[--v] == p ? this.DM : Math.floor(n[v] * g + (n[v - 1] + m) * y);
                    if ((n[v] += s.am(0, b, n, M, 0, f)) < b)
                        for (s.dlShiftTo(M, w),
                            n.subTo(w, n); n[v] < --b;)
                            n.subTo(w, n)
                }
                null != e && (n.drShiftTo(f, e),
                    c != u && I.ZERO.subTo(e, e)),
                    n.t = f,
                    n.clamp(),
                    l > 0 && n.rShiftTo(l, n),
                    c < 0 && I.ZERO.subTo(n, n)
            }
        }
    };
    invDigit = function () {
        if (this.t < 1)
            return 0;
        var t = this[0];
        if (0 == (1 & t))
            return 0;
        var e = 3 & t;
        return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
    };
    isEven = function () {
        return 0 == (this.t > 0 ? 1 & this[0] : this.s)
    };
    exp = function (t, e) {
        if (t > 4294967295 || t < 1)
            return I.ONE;
        var n = r()
            , o = r()
            , a = e.convert(this)
            , s = d(t) - 1;
        for (a.copyTo(n); --s >= 0;)
            if (e.sqrTo(n, o),
                (t & 1 << s) > 0)
                e.mulTo(o, a, n);
            else {
                var c = n;
                n = o,
                    o = c
            }
        return e.revert(n)
    };
    toString = function (t) {
        if (this.s < 0)
            return "-" + this.negate().toString(t);
        var e;
        if (16 == t)
            e = 4;
        else if (8 == t)
            e = 3;
        else if (2 == t)
            e = 1;
        else if (32 == t)
            e = 5;
        else {
            if (4 != t)
                return this.toRadix(t);
            e = 2
        }
        var n, o = (1 << e) - 1, i = !1, r = "", a = this.t, s = this.DB - a * this.DB % e;
        if (a-- > 0)
            for (s < this.DB && (n = this[a] >> s) > 0 && (i = !0,
                r = l(n)); a >= 0;)
                s < e ? (n = (this[a] & (1 << s) - 1) << e - s,
                    n |= this[--a] >> (s += this.DB - e)) : (n = this[a] >> (s -= e) & o,
                        s <= 0 && (s += this.DB,
                            --a)),
                    n > 0 && (i = !0),
                    i && (r += l(n));
        return i ? r : "0"
    };
    negate = function () {
        var t = r();
        return I.ZERO.subTo(this, t),
            t
    };
    abs = function () {
        return this.s < 0 ? this.negate() : this
    };
    compareTo = function (t) {
        var e = this.s - t.s;
        if (0 != e)
            return e;
        var n = this.t;
        if (0 != (e = n - t.t))
            return this.s < 0 ? -e : e;
        for (; --n >= 0;)
            if (0 != (e = this[n] - t[n]))
                return e;
        return 0
    };
    bitLength = function () {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + d(this[this.t - 1] ^ this.s & this.DM)
    };
    mod = function (t) {
        var e = r();
        return this.abs().divRemTo(t, null, e),
            this.s < 0 && e.compareTo(I.ZERO) > 0 && t.subTo(e, e),
            e
    };
    modPowInt = function (t, e) {
        var n;
        return n = t < 256 || e.isEven() ? new H(e) : new G(e),
            this.exp(t, n)
    };
    // ZERO = p(0);
    // ONE = p(1);
}

class D {
    constructor() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null
    };
    setPublic(t, e) {
        null != t && null != e && t.length > 0 && e.length > 0 ? (this.n = function (t, e) {
            return new I(t, e)
        }(t, 16),
            this.e = parseInt(e, 16)) : alert("Invalid RSA public key")
    };
    encrypt(t) {
        var e = function (t, e) {
            if (e < t.length + 11)
                return alert("Message too long for RSA"),
                    null;
            for (var n = new Array, o = t.length - 1; o >= 0 && e > 0;) {
                var r = t.charCodeAt(o--);
                r < 128 ? n[--e] = r : r > 127 && r < 2048 ? (n[--e] = 63 & r | 128,
                    n[--e] = r >> 6 | 192) : (n[--e] = 63 & r | 128,
                        n[--e] = r >> 6 & 63 | 128,
                        n[--e] = r >> 12 | 224)
            }
            n[--e] = 0;
            for (var a = new J, s = new Array; e > 2;) {
                for (s[0] = 0; 0 == s[0];)
                    a.nextBytes(s);
                n[--e] = s[0]
            }

            return n[--e] = 2,
                n[--e] = 0,
                new I(n)
        }(t, this.n.bitLength() + 7 >> 3);

        if (null == e)
            return null;
        var n = this.doPublic(e);
        if (null == n)
            return null;
        var o = n.toString(16);
        return 0 == (1 & o.length) ? o : "0" + o
    };
    doPublic = function (t) {
        return t.modPowInt(this.e, this.n)
    }
}


class Um {
    constructor() {
        this.config = Assign({}, window.viewConfig, {
            countryList: window.viewData.countryAreaConfig ? window.viewData.countryAreaConfig.countryList : [],
            hotCountryList: window.viewData.countryAreaConfig ? window.viewData.countryAreaConfig.hotCountryList : []
        })
    };
    rsaPassword(t) {
        let e = new D;
        return e.setPublic(this.config.rsaModulus, this.config.rsaExponent),
            e.encrypt(t)
    };
}


