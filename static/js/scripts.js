!(function (e, t) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.AOS = t()) : (e.AOS = t());
})(this, function () {
    return (function (e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = (n[o] = { exports: {}, id: o, loaded: !1 });
            return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports;
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
    })([
        function (e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            var i =
                    Object.assign ||
                    function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    },
                r = n(1),
                a = (o(r), n(6)),
                u = o(a),
                c = n(7),
                f = o(c),
                s = n(8),
                d = o(s),
                l = n(9),
                p = o(l),
                m = n(10),
                b = o(m),
                v = n(11),
                y = o(v),
                g = n(14),
                h = o(g),
                w = [],
                k = !1,
                x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
                j = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if ((e && (k = !0), k)) return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w;
                },
                O = function () {
                    (w = (0, h.default)()), j();
                },
                _ = function () {
                    w.forEach(function (e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                    });
                },
                S = function (e) {
                    return e === !0 || ("mobile" === e && p.default.mobile()) || ("phone" === e && p.default.phone()) || ("tablet" === e && p.default.tablet()) || ("function" == typeof e && e() === !0);
                },
                z = function (e) {
                    (x = i(x, e)), (w = (0, h.default)());
                    var t = document.all && !window.atob;
                    return S(x.disable) || t
                        ? _()
                        : (document.querySelector("body").setAttribute("data-aos-easing", x.easing),
                          document.querySelector("body").setAttribute("data-aos-duration", x.duration),
                          document.querySelector("body").setAttribute("data-aos-delay", x.delay),
                          "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                              ? j(!0)
                              : "load" === x.startEvent
                              ? window.addEventListener(x.startEvent, function () {
                                    j(!0);
                                })
                              : document.addEventListener(x.startEvent, function () {
                                    j(!0);
                                }),
                          window.addEventListener("resize", (0, f.default)(j, x.debounceDelay, !0)),
                          window.addEventListener("orientationchange", (0, f.default)(j, x.debounceDelay, !0)),
                          window.addEventListener(
                              "scroll",
                              (0, u.default)(function () {
                                  (0, b.default)(w, x.once);
                              }, x.throttleDelay)
                          ),
                          x.disableMutationObserver || (0, d.default)("[data-aos]", O),
                          w);
                };
            e.exports = { init: z, refresh: j, refreshHard: O };
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        function (e, t) {
            (function (t) {
                "use strict";
                function n(e, t, n) {
                    function o(t) {
                        var n = b,
                            o = v;
                        return (b = v = void 0), (k = t), (g = e.apply(o, n));
                    }
                    function r(e) {
                        return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g;
                    }
                    function a(e) {
                        var n = e - w,
                            o = e - k,
                            i = t - n;
                        return S ? j(i, y - o) : i;
                    }
                    function c(e) {
                        var n = e - w,
                            o = e - k;
                        return void 0 === w || n >= t || n < 0 || (S && o >= y);
                    }
                    function s() {
                        var e = O();
                        return c(e) ? d(e) : void (h = setTimeout(s, a(e)));
                    }
                    function d(e) {
                        return (h = void 0), z && b ? o(e) : ((b = v = void 0), g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0);
                    }
                    function p() {
                        return void 0 === h ? g : d(O());
                    }
                    function m() {
                        var e = O(),
                            n = c(e);
                        if (((b = arguments), (v = this), (w = e), n)) {
                            if (void 0 === h) return r(w);
                            if (S) return (h = setTimeout(s, t)), o(w);
                        }
                        return void 0 === h && (h = setTimeout(s, t)), g;
                    }
                    var b,
                        v,
                        y,
                        g,
                        h,
                        w,
                        k = 0,
                        _ = !1,
                        S = !1,
                        z = !0;
                    if ("function" != typeof e) throw new TypeError(f);
                    return (t = u(t) || 0), i(n) && ((_ = !!n.leading), (S = "maxWait" in n), (y = S ? x(u(n.maxWait) || 0, t) : y), (z = "trailing" in n ? !!n.trailing : z)), (m.cancel = l), (m.flush = p), m;
                }
                function o(e, t, o) {
                    var r = !0,
                        a = !0;
                    if ("function" != typeof e) throw new TypeError(f);
                    return i(o) && ((r = "leading" in o ? !!o.leading : r), (a = "trailing" in o ? !!o.trailing : a)), n(e, t, { leading: r, maxWait: t, trailing: a });
                }
                function i(e) {
                    var t = "undefined" == typeof e ? "undefined" : c(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function r(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
                }
                function a(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || (r(e) && k.call(e) == d);
                }
                function u(e) {
                    if ("number" == typeof e) return e;
                    if (a(e)) return s;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(l, "");
                    var n = m.test(e);
                    return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e;
                }
                var c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              },
                    f = "Expected a function",
                    s = NaN,
                    d = "[object Symbol]",
                    l = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    m = /^0b[01]+$/i,
                    b = /^0o[0-7]+$/i,
                    v = parseInt,
                    y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                    g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                    h = y || g || Function("return this")(),
                    w = Object.prototype,
                    k = w.toString,
                    x = Math.max,
                    j = Math.min,
                    O = function () {
                        return h.Date.now();
                    };
                e.exports = o;
            }.call(
                t,
                (function () {
                    return this;
                })()
            ));
        },
        function (e, t) {
            (function (t) {
                "use strict";
                function n(e, t, n) {
                    function i(t) {
                        var n = b,
                            o = v;
                        return (b = v = void 0), (O = t), (g = e.apply(o, n));
                    }
                    function r(e) {
                        return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g;
                    }
                    function u(e) {
                        var n = e - w,
                            o = e - O,
                            i = t - n;
                        return S ? x(i, y - o) : i;
                    }
                    function f(e) {
                        var n = e - w,
                            o = e - O;
                        return void 0 === w || n >= t || n < 0 || (S && o >= y);
                    }
                    function s() {
                        var e = j();
                        return f(e) ? d(e) : void (h = setTimeout(s, u(e)));
                    }
                    function d(e) {
                        return (h = void 0), z && b ? i(e) : ((b = v = void 0), g);
                    }
                    function l() {
                        void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0);
                    }
                    function p() {
                        return void 0 === h ? g : d(j());
                    }
                    function m() {
                        var e = j(),
                            n = f(e);
                        if (((b = arguments), (v = this), (w = e), n)) {
                            if (void 0 === h) return r(w);
                            if (S) return (h = setTimeout(s, t)), i(w);
                        }
                        return void 0 === h && (h = setTimeout(s, t)), g;
                    }
                    var b,
                        v,
                        y,
                        g,
                        h,
                        w,
                        O = 0,
                        _ = !1,
                        S = !1,
                        z = !0;
                    if ("function" != typeof e) throw new TypeError(c);
                    return (t = a(t) || 0), o(n) && ((_ = !!n.leading), (S = "maxWait" in n), (y = S ? k(a(n.maxWait) || 0, t) : y), (z = "trailing" in n ? !!n.trailing : z)), (m.cancel = l), (m.flush = p), m;
                }
                function o(e) {
                    var t = "undefined" == typeof e ? "undefined" : u(e);
                    return !!e && ("object" == t || "function" == t);
                }
                function i(e) {
                    return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
                }
                function r(e) {
                    return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || (i(e) && w.call(e) == s);
                }
                function a(e) {
                    if ("number" == typeof e) return e;
                    if (r(e)) return f;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t;
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var n = p.test(e);
                    return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e;
                }
                var u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              },
                    c = "Expected a function",
                    f = NaN,
                    s = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    l = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    m = /^0o[0-7]+$/i,
                    b = parseInt,
                    v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                    y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                    g = v || y || Function("return this")(),
                    h = Object.prototype,
                    w = h.toString,
                    k = Math.max,
                    x = Math.min,
                    j = function () {
                        return g.Date.now();
                    };
                e.exports = n;
            }.call(
                t,
                (function () {
                    return this;
                })()
            ));
        },
        function (e, t) {
            "use strict";
            function n(e) {
                var t = void 0,
                    o = void 0,
                    i = void 0;
                for (t = 0; t < e.length; t += 1) {
                    if (((o = e[t]), o.dataset && o.dataset.aos)) return !0;
                    if ((i = o.children && n(o.children))) return !0;
                }
                return !1;
            }
            function o(e, t) {
                var n = window.document,
                    o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                    a = new o(i);
                (r = t), a.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
            }
            function i(e) {
                e &&
                    e.forEach(function (e) {
                        var t = Array.prototype.slice.call(e.addedNodes),
                            o = Array.prototype.slice.call(e.removedNodes),
                            i = t.concat(o);
                        if (n(i)) return r();
                    });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = function () {};
            t.default = o;
        },
        function (e, t) {
            "use strict";
            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                        }
                    }
                    return function (t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t;
                    };
                })(),
                r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                f = (function () {
                    function e() {
                        n(this, e);
                    }
                    return (
                        i(e, [
                            {
                                key: "phone",
                                value: function () {
                                    var e = o();
                                    return !(!r.test(e) && !a.test(e.substr(0, 4)));
                                },
                            },
                            {
                                key: "mobile",
                                value: function () {
                                    var e = o();
                                    return !(!u.test(e) && !c.test(e.substr(0, 4)));
                                },
                            },
                            {
                                key: "tablet",
                                value: function () {
                                    return this.mobile() && !this.phone();
                                },
                            },
                        ]),
                        e
                    );
                })();
            t.default = new f();
        },
        function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e, t, n) {
                    var o = e.node.getAttribute("data-aos-once");
                    t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || (!n && "true" !== o)) && e.node.classList.remove("aos-animate");
                },
                o = function (e, t) {
                    var o = window.pageYOffset,
                        i = window.innerHeight;
                    e.forEach(function (e, r) {
                        n(e, i + o, t);
                    });
                };
            t.default = o;
        },
        function (e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(12),
                r = o(i),
                a = function (e, t) {
                    return (
                        e.forEach(function (e, n) {
                            e.node.classList.add("aos-init"), (e.position = (0, r.default)(e.node, t.offset));
                        }),
                        e
                    );
                };
            t.default = a;
        },
        function (e, t, n) {
            "use strict";
            function o(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(13),
                r = o(i),
                a = function (e, t) {
                    var n = 0,
                        o = 0,
                        i = window.innerHeight,
                        a = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                    switch ((a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), (n = (0, r.default)(e).top), a.anchorPlacement)) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            n += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            n += e.offsetHeight;
                            break;
                        case "top-center":
                            n += i / 2;
                            break;
                        case "bottom-center":
                            n += i / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            n += i / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            n += i;
                            break;
                        case "bottom-top":
                            n += e.offsetHeight + i;
                            break;
                        case "center-top":
                            n += e.offsetHeight / 2 + i;
                    }
                    return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
                };
            t.default = a;
        },
        function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
                for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
                return { top: n, left: t };
            };
            t.default = n;
        },
        function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
                return (
                    (e = e || document.querySelectorAll("[data-aos]")),
                    Array.prototype.map.call(e, function (e) {
                        return { node: e };
                    })
                );
            };
            t.default = n;
        },
    ]);
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!(function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? (module.exports = a(require("jquery"))) : a(jQuery);
})(function (a) {
    "use strict";
    var b = window.Slick || {};
    (b = (function () {
        function c(c, d) {
            var f,
                e = this;
            (e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (e.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                a.extend(e, e.initials),
                (e.activeBreakpoint = null),
                (e.animType = null),
                (e.animProp = null),
                (e.breakpoints = []),
                (e.breakpointSettings = []),
                (e.cssTransitions = !1),
                (e.focussed = !1),
                (e.interrupted = !1),
                (e.hidden = "hidden"),
                (e.paused = !0),
                (e.positionProp = null),
                (e.respondTo = null),
                (e.rowCount = 1),
                (e.shouldClick = !0),
                (e.$slider = a(c)),
                (e.$slidesCache = null),
                (e.transformType = null),
                (e.transitionType = null),
                (e.visibilityChange = "visibilitychange"),
                (e.windowWidth = 0),
                (e.windowTimer = null),
                (f = a(c).data("slick") || {}),
                (e.options = a.extend({}, e.defaults, d, f)),
                (e.currentSlide = e.options.initialSlide),
                (e.originalSettings = e.options),
                "undefined" != typeof document.mozHidden
                    ? ((e.hidden = "mozHidden"), (e.visibilityChange = "mozvisibilitychange"))
                    : "undefined" != typeof document.webkitHidden && ((e.hidden = "webkitHidden"), (e.visibilityChange = "webkitvisibilitychange")),
                (e.autoPlay = a.proxy(e.autoPlay, e)),
                (e.autoPlayClear = a.proxy(e.autoPlayClear, e)),
                (e.autoPlayIterator = a.proxy(e.autoPlayIterator, e)),
                (e.changeSlide = a.proxy(e.changeSlide, e)),
                (e.clickHandler = a.proxy(e.clickHandler, e)),
                (e.selectHandler = a.proxy(e.selectHandler, e)),
                (e.setPosition = a.proxy(e.setPosition, e)),
                (e.swipeHandler = a.proxy(e.swipeHandler, e)),
                (e.dragHandler = a.proxy(e.dragHandler, e)),
                (e.keyHandler = a.proxy(e.keyHandler, e)),
                (e.instanceUid = b++),
                (e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                e.registerBreakpoints(),
                e.init(!0);
        }
        var b = 0;
        return c;
    })()),
        (b.prototype.activateADA = function () {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
        }),
        (b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
            var e = this;
            if ("boolean" == typeof c) (d = c), (c = null);
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(),
                "number" == typeof c
                    ? 0 === c && 0 === e.$slides.length
                        ? a(b).appendTo(e.$slideTrack)
                        : d
                        ? a(b).insertBefore(e.$slides.eq(c))
                        : a(b).insertAfter(e.$slides.eq(c))
                    : d === !0
                    ? a(b).prependTo(e.$slideTrack)
                    : a(b).appendTo(e.$slideTrack),
                (e.$slides = e.$slideTrack.children(this.options.slide)),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slideTrack.append(e.$slides),
                e.$slides.each(function (b, c) {
                    a(c).attr("data-slick-index", b);
                }),
                (e.$slidesCache = e.$slides),
                e.reinit();
        }),
        (b.prototype.animateHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.animate({ height: b }, a.options.speed);
            }
        }),
        (b.prototype.animateSlide = function (b, c) {
            var d = {},
                e = this;
            e.animateHeight(),
                e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
                e.transformsEnabled === !1
                    ? e.options.vertical === !1
                        ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c)
                        : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c)
                    : e.cssTransitions === !1
                    ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft),
                      a({ animStart: e.currentLeft }).animate(
                          { animStart: b },
                          {
                              duration: e.options.speed,
                              easing: e.options.easing,
                              step: function (a) {
                                  (a = Math.ceil(a)), e.options.vertical === !1 ? ((d[e.animType] = "translate(" + a + "px, 0px)"), e.$slideTrack.css(d)) : ((d[e.animType] = "translate(0px," + a + "px)"), e.$slideTrack.css(d));
                              },
                              complete: function () {
                                  c && c.call();
                              },
                          }
                      ))
                    : (e.applyTransition(),
                      (b = Math.ceil(b)),
                      e.options.vertical === !1 ? (d[e.animType] = "translate3d(" + b + "px, 0px, 0px)") : (d[e.animType] = "translate3d(0px," + b + "px, 0px)"),
                      e.$slideTrack.css(d),
                      c &&
                          setTimeout(function () {
                              e.disableTransition(), c.call();
                          }, e.options.speed));
        }),
        (b.prototype.getNavTarget = function () {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c;
        }),
        (b.prototype.asNavFor = function (b) {
            var c = this,
                d = c.getNavTarget();
            null !== d &&
                "object" == typeof d &&
                d.each(function () {
                    var c = a(this).slick("getSlick");
                    c.unslicked || c.slideHandler(b, !0);
                });
        }),
        (b.prototype.applyTransition = function (a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? (c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase) : (c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase),
                b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }),
        (b.prototype.autoPlay = function () {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
        }),
        (b.prototype.autoPlayClear = function () {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer);
        }),
        (b.prototype.autoPlayIterator = function () {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused ||
                a.interrupted ||
                a.focussed ||
                (a.options.infinite === !1 &&
                    (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? (a.direction = 0) : 0 === a.direction && ((b = a.currentSlide - a.options.slidesToScroll), a.currentSlide - 1 === 0 && (a.direction = 1))),
                a.slideHandler(b));
        }),
        (b.prototype.buildArrows = function () {
            var b = this;
            b.options.arrows === !0 &&
                ((b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow")),
                (b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow")),
                b.slideCount > b.options.slidesToShow
                    ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                      b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                      b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows),
                      b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows),
                      b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                    : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (b.prototype.buildDots = function () {
            var c,
                d,
                b = this;
            if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
                for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
                (b.$dots = d.appendTo(b.options.appendDots)), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
            }
        }),
        (b.prototype.buildOut = function () {
            var b = this;
            (b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                (b.slideCount = b.$slides.length),
                b.$slides.each(function (b, c) {
                    a(c)
                        .attr("data-slick-index", b)
                        .data("originalStyling", a(c).attr("style") || "");
                }),
                b.$slider.addClass("slick-slider"),
                (b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
                b.$slideTrack.css("opacity", 0),
                (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1),
                a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
                b.setupInfinite(),
                b.buildArrows(),
                b.buildDots(),
                b.updateDots(),
                b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                b.options.draggable === !0 && b.$list.addClass("draggable");
        }),
        (b.prototype.buildRows = function () {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                a = this;
            if (((e = document.createDocumentFragment()), (g = a.$slider.children()), a.options.rows > 1)) {
                for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                    var i = document.createElement("div");
                    for (c = 0; c < a.options.rows; c++) {
                        var j = document.createElement("div");
                        for (d = 0; d < a.options.slidesPerRow; d++) {
                            var k = b * h + (c * a.options.slidesPerRow + d);
                            g.get(k) && j.appendChild(g.get(k));
                        }
                        i.appendChild(j);
                    }
                    e.appendChild(i);
                }
                a.$slider.empty().append(e),
                    a.$slider
                        .children()
                        .children()
                        .children()
                        .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
            }
        }),
        (b.prototype.checkResponsive = function (b, c) {
            var e,
                f,
                g,
                d = this,
                h = !1,
                i = d.$slider.width(),
                j = window.innerWidth || a(window).width();
            if (("window" === d.respondTo ? (g = j) : "slider" === d.respondTo ? (g = i) : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive)) {
                f = null;
                for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
                null !== f
                    ? null !== d.activeBreakpoint
                        ? (f !== d.activeBreakpoint || c) &&
                          ((d.activeBreakpoint = f),
                          "unslick" === d.breakpointSettings[f] ? d.unslick(f) : ((d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f])), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)),
                          (h = f))
                        : ((d.activeBreakpoint = f),
                          "unslick" === d.breakpointSettings[f] ? d.unslick(f) : ((d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f])), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)),
                          (h = f))
                    : null !== d.activeBreakpoint && ((d.activeBreakpoint = null), (d.options = d.originalSettings), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), (h = f)),
                    b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
            }
        }),
        (b.prototype.changeSlide = function (b, c) {
            var f,
                g,
                h,
                d = this,
                e = a(b.currentTarget);
            switch ((e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), (h = d.slideCount % d.options.slidesToScroll !== 0), (f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll), b.data.message)) {
                case "previous":
                    (g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f), d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                    break;
                case "next":
                    (g = 0 === f ? d.options.slidesToScroll : f), d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                    d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (b.prototype.checkNavigable = function (a) {
            var c,
                d,
                b = this;
            if (((c = b.getNavigableIndexes()), (d = 0), a > c[c.length - 1])) a = c[c.length - 1];
            else
                for (var e in c) {
                    if (a < c[e]) {
                        a = d;
                        break;
                    }
                    d = c[e];
                }
            return a;
        }),
        (b.prototype.cleanUpEvents = function () {
            var b = this;
            b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)),
                b.$slider.off("focus.slick blur.slick"),
                b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)),
                b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler),
                b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler),
                b.$list.off("touchend.slick mouseup.slick", b.swipeHandler),
                b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler),
                b.$list.off("click.slick", b.clickHandler),
                a(document).off(b.visibilityChange, b.visibility),
                b.cleanUpSlideEvents(),
                b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler),
                b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler),
                a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange),
                a(window).off("resize.slick.slick-" + b.instanceUid, b.resize),
                a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault),
                a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition),
                a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }),
        (b.prototype.cleanUpSlideEvents = function () {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }),
        (b.prototype.cleanUpRows = function () {
            var b,
                a = this;
            a.options.rows > 1 && ((b = a.$slides.children().children()), b.removeAttr("style"), a.$slider.empty().append(b));
        }),
        (b.prototype.clickHandler = function (a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
        }),
        (b.prototype.destroy = function (b) {
            var c = this;
            c.autoPlayClear(),
                (c.touchObject = {}),
                c.cleanUpEvents(),
                a(".slick-cloned", c.$slider).detach(),
                c.$dots && c.$dots.remove(),
                c.$prevArrow &&
                    c.$prevArrow.length &&
                    (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()),
                c.$nextArrow &&
                    c.$nextArrow.length &&
                    (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()),
                c.$slides &&
                    (c.$slides
                        .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            a(this).attr("style", a(this).data("originalStyling"));
                        }),
                    c.$slideTrack.children(this.options.slide).detach(),
                    c.$slideTrack.detach(),
                    c.$list.detach(),
                    c.$slider.append(c.$slides)),
                c.cleanUpRows(),
                c.$slider.removeClass("slick-slider"),
                c.$slider.removeClass("slick-initialized"),
                c.$slider.removeClass("slick-dotted"),
                (c.unslicked = !0),
                b || c.$slider.trigger("destroy", [c]);
        }),
        (b.prototype.disableTransition = function (a) {
            var b = this,
                c = {};
            (c[b.transitionType] = ""), b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
        }),
        (b.prototype.fadeSlide = function (a, b) {
            var c = this;
            c.cssTransitions === !1
                ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b))
                : (c.applyTransition(a),
                  c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }),
                  b &&
                      setTimeout(function () {
                          c.disableTransition(a), b.call();
                      }, c.options.speed));
        }),
        (b.prototype.fadeSlideOut = function (a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
        }),
        (b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
            var b = this;
            null !== a && ((b.$slidesCache = b.$slides), b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
        }),
        (b.prototype.focusHandler = function () {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function () {
                    b.options.pauseOnFocus && ((b.focussed = d.is(":focus")), b.autoPlay());
                }, 0);
            });
        }),
        (b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
            var a = this;
            return a.currentSlide;
        }),
        (b.prototype.getDotCount = function () {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0) for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
            else if (a.options.centerMode === !0) d = a.slideCount;
            else if (a.options.asNavFor) for (; b < a.slideCount; ) ++d, (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
            else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1;
        }),
        (b.prototype.getLeft = function (a) {
            var c,
                d,
                f,
                b = this,
                e = 0;
            return (
                (b.slideOffset = 0),
                (d = b.$slides.first().outerHeight(!0)),
                b.options.infinite === !0
                    ? (b.slideCount > b.options.slidesToShow && ((b.slideOffset = b.slideWidth * b.options.slidesToShow * -1), (e = d * b.options.slidesToShow * -1)),
                      b.slideCount % b.options.slidesToScroll !== 0 &&
                          a + b.options.slidesToScroll > b.slideCount &&
                          b.slideCount > b.options.slidesToShow &&
                          (a > b.slideCount
                              ? ((b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1), (e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1))
                              : ((b.slideOffset = (b.slideCount % b.options.slidesToScroll) * b.slideWidth * -1), (e = (b.slideCount % b.options.slidesToScroll) * d * -1))))
                    : a + b.options.slidesToShow > b.slideCount && ((b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth), (e = (a + b.options.slidesToShow - b.slideCount) * d)),
                b.slideCount <= b.options.slidesToShow && ((b.slideOffset = 0), (e = 0)),
                b.options.centerMode === !0 && b.options.infinite === !0
                    ? (b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth)
                    : b.options.centerMode === !0 && ((b.slideOffset = 0), (b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2))),
                (c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e),
                b.options.variableWidth === !0 &&
                    ((f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow)),
                    (c = b.options.rtl === !0 ? (f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0) : f[0] ? -1 * f[0].offsetLeft : 0),
                    b.options.centerMode === !0 &&
                        ((f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1)),
                        (c = b.options.rtl === !0 ? (f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0) : f[0] ? -1 * f[0].offsetLeft : 0),
                        (c += (b.$list.width() - f.outerWidth()) / 2))),
                c
            );
        }),
        (b.prototype.getOption = b.prototype.slickGetOption = function (a) {
            var b = this;
            return b.options[a];
        }),
        (b.prototype.getNavigableIndexes = function () {
            var e,
                a = this,
                b = 0,
                c = 0,
                d = [];
            for (a.options.infinite === !1 ? (e = a.slideCount) : ((b = -1 * a.options.slidesToScroll), (c = -1 * a.options.slidesToScroll), (e = 2 * a.slideCount)); e > b; )
                d.push(b), (b = c + a.options.slidesToScroll), (c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow);
            return d;
        }),
        (b.prototype.getSlick = function () {
            return this;
        }),
        (b.prototype.getSlideCount = function () {
            var c,
                d,
                e,
                b = this;
            return (
                (e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0),
                b.options.swipeToSlide === !0
                    ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
                          return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? ((d = f), !1) : void 0;
                      }),
                      (c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1))
                    : b.options.slidesToScroll
            );
        }),
        (b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
            var c = this;
            c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
        }),
        (b.prototype.init = function (b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") ||
                (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()),
                b && c.$slider.trigger("init", [c]),
                c.options.accessibility === !0 && c.initADA(),
                c.options.autoplay && ((c.paused = !1), c.autoPlay());
        }),
        (b.prototype.initADA = function () {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                b.$slideTrack.attr("role", "listbox"),
                b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
                    a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
                }),
                null !== b.$dots &&
                    b.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (c) {
                            a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
                        })
                        .first()
                        .attr("aria-selected", "true")
                        .end()
                        .find("button")
                        .attr("role", "button")
                        .end()
                        .closest("div")
                        .attr("role", "toolbar"),
                b.activateADA();
        }),
        (b.prototype.initArrowEvents = function () {
            var a = this;
            a.options.arrows === !0 &&
                a.slideCount > a.options.slidesToShow &&
                (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
        }),
        (b.prototype.initDotEvents = function () {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide),
                b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
        }),
        (b.prototype.initSlideEvents = function () {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
        }),
        (b.prototype.initializeEvents = function () {
            var b = this;
            b.initArrowEvents(),
                b.initDotEvents(),
                b.initSlideEvents(),
                b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler),
                b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler),
                b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler),
                b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler),
                b.$list.on("click.slick", b.clickHandler),
                a(document).on(b.visibilityChange, a.proxy(b.visibility, b)),
                b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
                b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)),
                a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)),
                a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault),
                a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
                a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
        }),
        (b.prototype.initUI = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
        }),
        (b.prototype.keyHandler = function (a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === a.keyCode && b.options.accessibility === !0
                    ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } })
                    : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
        }),
        (b.prototype.lazyLoad = function () {
            function g(c) {
                a("img[data-lazy]", c).each(function () {
                    var c = a(this),
                        d = a(this).attr("data-lazy"),
                        e = document.createElement("img");
                    (e.onload = function () {
                        c.animate({ opacity: 0 }, 100, function () {
                            c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                                c.removeAttr("data-lazy").removeClass("slick-loading");
                            }),
                                b.$slider.trigger("lazyLoaded", [b, c, d]);
                        });
                    }),
                        (e.onerror = function () {
                            c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
                        }),
                        (e.src = d);
                });
            }
            var c,
                d,
                e,
                f,
                b = this;
            b.options.centerMode === !0
                ? b.options.infinite === !0
                    ? ((e = b.currentSlide + (b.options.slidesToShow / 2 + 1)), (f = e + b.options.slidesToShow + 2))
                    : ((e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1))), (f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide))
                : ((e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide), (f = Math.ceil(e + b.options.slidesToShow)), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)),
                (c = b.$slider.find(".slick-slide").slice(e, f)),
                g(c),
                b.slideCount <= b.options.slidesToShow
                    ? ((d = b.$slider.find(".slick-slide")), g(d))
                    : b.currentSlide >= b.slideCount - b.options.slidesToShow
                    ? ((d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow)), g(d))
                    : 0 === b.currentSlide && ((d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow)), g(d));
        }),
        (b.prototype.loadSlider = function () {
            var a = this;
            a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
        }),
        (b.prototype.next = b.prototype.slickNext = function () {
            var a = this;
            a.changeSlide({ data: { message: "next" } });
        }),
        (b.prototype.orientationChange = function () {
            var a = this;
            a.checkResponsive(), a.setPosition();
        }),
        (b.prototype.pause = b.prototype.slickPause = function () {
            var a = this;
            a.autoPlayClear(), (a.paused = !0);
        }),
        (b.prototype.play = b.prototype.slickPlay = function () {
            var a = this;
            a.autoPlay(), (a.options.autoplay = !0), (a.paused = !1), (a.focussed = !1), (a.interrupted = !1);
        }),
        (b.prototype.postSlide = function (a) {
            var b = this;
            b.unslicked || (b.$slider.trigger("afterChange", [b, a]), (b.animating = !1), b.setPosition(), (b.swipeLeft = null), b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
        }),
        (b.prototype.prev = b.prototype.slickPrev = function () {
            var a = this;
            a.changeSlide({ data: { message: "previous" } });
        }),
        (b.prototype.preventDefault = function (a) {
            a.preventDefault();
        }),
        (b.prototype.progressiveLazyLoad = function (b) {
            b = b || 1;
            var e,
                f,
                g,
                c = this,
                d = a("img[data-lazy]", c.$slider);
            d.length
                ? ((e = d.first()),
                  (f = e.attr("data-lazy")),
                  (g = document.createElement("img")),
                  (g.onload = function () {
                      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
                  }),
                  (g.onerror = function () {
                      3 > b
                          ? setTimeout(function () {
                                c.progressiveLazyLoad(b + 1);
                            }, 500)
                          : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
                  }),
                  (g.src = f))
                : c.$slider.trigger("allImagesLoaded", [c]);
        }),
        (b.prototype.refresh = function (b) {
            var d,
                e,
                c = this;
            (e = c.slideCount - c.options.slidesToShow),
                !c.options.infinite && c.currentSlide > e && (c.currentSlide = e),
                c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0),
                (d = c.currentSlide),
                c.destroy(!0),
                a.extend(c, c.initials, { currentSlide: d }),
                c.init(),
                b || c.changeSlide({ data: { message: "index", index: d } }, !1);
        }),
        (b.prototype.registerBreakpoints = function () {
            var c,
                d,
                e,
                b = this,
                f = b.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                b.respondTo = b.options.respondTo || "window";
                for (c in f)
                    if (((e = b.breakpoints.length - 1), (d = f[c].breakpoint), f.hasOwnProperty(c))) {
                        for (; e >= 0; ) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                        b.breakpoints.push(d), (b.breakpointSettings[d] = f[c].settings);
                    }
                b.breakpoints.sort(function (a, c) {
                    return b.options.mobileFirst ? a - c : c - a;
                });
            }
        }),
        (b.prototype.reinit = function () {
            var b = this;
            (b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide")),
                (b.slideCount = b.$slides.length),
                b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
                b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0),
                b.registerBreakpoints(),
                b.setProps(),
                b.setupInfinite(),
                b.buildArrows(),
                b.updateArrows(),
                b.initArrowEvents(),
                b.buildDots(),
                b.updateDots(),
                b.initDotEvents(),
                b.cleanUpSlideEvents(),
                b.initSlideEvents(),
                b.checkResponsive(!1, !0),
                b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler),
                b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0),
                b.setPosition(),
                b.focusHandler(),
                (b.paused = !b.options.autoplay),
                b.autoPlay(),
                b.$slider.trigger("reInit", [b]);
        }),
        (b.prototype.resize = function () {
            var b = this;
            a(window).width() !== b.windowWidth &&
                (clearTimeout(b.windowDelay),
                (b.windowDelay = window.setTimeout(function () {
                    (b.windowWidth = a(window).width()), b.checkResponsive(), b.unslicked || b.setPosition();
                }, 50)));
        }),
        (b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
            var d = this;
            return (
                "boolean" == typeof a ? ((b = a), (a = b === !0 ? 0 : d.slideCount - 1)) : (a = b === !0 ? --a : a),
                d.slideCount < 1 || 0 > a || a > d.slideCount - 1
                    ? !1
                    : (d.unload(),
                      c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(),
                      (d.$slides = d.$slideTrack.children(this.options.slide)),
                      d.$slideTrack.children(this.options.slide).detach(),
                      d.$slideTrack.append(d.$slides),
                      (d.$slidesCache = d.$slides),
                      void d.reinit())
            );
        }),
        (b.prototype.setCSS = function (a) {
            var d,
                e,
                b = this,
                c = {};
            b.options.rtl === !0 && (a = -a),
                (d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
                (e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px"),
                (c[b.positionProp] = a),
                b.transformsEnabled === !1
                    ? b.$slideTrack.css(c)
                    : ((c = {}), b.cssTransitions === !1 ? ((c[b.animType] = "translate(" + d + ", " + e + ")"), b.$slideTrack.css(c)) : ((c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)"), b.$slideTrack.css(c)));
        }),
        (b.prototype.setDimensions = function () {
            var a = this;
            a.options.vertical === !1
                ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding })
                : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })),
                (a.listWidth = a.$list.width()),
                (a.listHeight = a.$list.height()),
                a.options.vertical === !1 && a.options.variableWidth === !1
                    ? ((a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow)), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)))
                    : a.options.variableWidth === !0
                    ? a.$slideTrack.width(5e3 * a.slideCount)
                    : ((a.slideWidth = Math.ceil(a.listWidth)), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
        }),
        (b.prototype.setFade = function () {
            var c,
                b = this;
            b.$slides.each(function (d, e) {
                (c = b.slideWidth * d * -1),
                    b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
            }),
                b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
        }),
        (b.prototype.setHeight = function () {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b);
            }
        }),
        (b.prototype.setOption = b.prototype.slickSetOption = function () {
            var c,
                d,
                e,
                f,
                h,
                b = this,
                g = !1;
            if (
                ("object" === a.type(arguments[0])
                    ? ((e = arguments[0]), (g = arguments[1]), (h = "multiple"))
                    : "string" === a.type(arguments[0]) &&
                      ((e = arguments[0]), (f = arguments[1]), (g = arguments[2]), "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? (h = "responsive") : "undefined" != typeof arguments[1] && (h = "single")),
                "single" === h)
            )
                b.options[e] = f;
            else if ("multiple" === h)
                a.each(e, function (a, c) {
                    b.options[a] = c;
                });
            else if ("responsive" === h)
                for (d in f)
                    if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                    else {
                        for (c = b.options.responsive.length - 1; c >= 0; ) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                        b.options.responsive.push(f[d]);
                    }
            g && (b.unload(), b.reinit());
        }),
        (b.prototype.setPosition = function () {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
        }),
        (b.prototype.setProps = function () {
            var a = this,
                b = document.body.style;
            (a.positionProp = a.options.vertical === !0 ? "top" : "left"),
                "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"),
                (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
                a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : (a.options.zIndex = a.defaults.zIndex)),
                void 0 !== b.OTransform && ((a.animType = "OTransform"), (a.transformType = "-o-transform"), (a.transitionType = "OTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                void 0 !== b.MozTransform && ((a.animType = "MozTransform"), (a.transformType = "-moz-transform"), (a.transitionType = "MozTransition"), void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
                void 0 !== b.webkitTransform &&
                    ((a.animType = "webkitTransform"), (a.transformType = "-webkit-transform"), (a.transitionType = "webkitTransition"), void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
                void 0 !== b.msTransform && ((a.animType = "msTransform"), (a.transformType = "-ms-transform"), (a.transitionType = "msTransition"), void 0 === b.msTransform && (a.animType = !1)),
                void 0 !== b.transform && a.animType !== !1 && ((a.animType = "transform"), (a.transformType = "transform"), (a.transitionType = "transition")),
                (a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1);
        }),
        (b.prototype.setSlideClasses = function (a) {
            var c,
                d,
                e,
                f,
                b = this;
            (d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")),
                b.$slides.eq(a).addClass("slick-current"),
                b.options.centerMode === !0
                    ? ((c = Math.floor(b.options.slidesToShow / 2)),
                      b.options.infinite === !0 &&
                          (a >= c && a <= b.slideCount - 1 - c
                              ? b.$slides
                                    .slice(a - c, a + c + 1)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : ((e = b.options.slidesToShow + a),
                                d
                                    .slice(e - c + 1, e + c + 2)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")),
                          0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")),
                      b.$slides.eq(a).addClass("slick-center"))
                    : a >= 0 && a <= b.slideCount - b.options.slidesToShow
                    ? b.$slides
                          .slice(a, a + b.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : d.length <= b.options.slidesToShow
                    ? d.addClass("slick-active").attr("aria-hidden", "false")
                    : ((f = b.slideCount % b.options.slidesToShow),
                      (e = b.options.infinite === !0 ? b.options.slidesToShow + a : a),
                      b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow
                          ? d
                                .slice(e - (b.options.slidesToShow - f), e + f)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : d
                                .slice(e, e + b.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")),
                "ondemand" === b.options.lazyLoad && b.lazyLoad();
        }),
        (b.prototype.setupInfinite = function () {
            var c,
                d,
                e,
                b = this;
            if ((b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && ((d = null), b.slideCount > b.options.slidesToShow))) {
                for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)
                    (d = c - 1),
                        a(b.$slides[d])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", d - b.slideCount)
                            .prependTo(b.$slideTrack)
                            .addClass("slick-cloned");
                for (c = 0; e > c; c += 1)
                    (d = c),
                        a(b.$slides[d])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", d + b.slideCount)
                            .appendTo(b.$slideTrack)
                            .addClass("slick-cloned");
                b.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        a(this).attr("id", "");
                    });
            }
        }),
        (b.prototype.interrupt = function (a) {
            var b = this;
            a || b.autoPlay(), (b.interrupted = a);
        }),
        (b.prototype.selectHandler = function (b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
        }),
        (b.prototype.slideHandler = function (a, b, c) {
            var d,
                e,
                f,
                g,
                j,
                h = null,
                i = this;
            return (
                (b = b || !1),
                (i.animating === !0 && i.options.waitForAnimate === !0) || (i.options.fade === !0 && i.currentSlide === a) || i.slideCount <= i.options.slidesToShow
                    ? void 0
                    : (b === !1 && i.asNavFor(a),
                      (d = a),
                      (h = i.getLeft(d)),
                      (g = i.getLeft(i.currentSlide)),
                      (i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft),
                      i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll)
                          ? void (
                                i.options.fade === !1 &&
                                ((d = i.currentSlide),
                                c !== !0
                                    ? i.animateSlide(g, function () {
                                          i.postSlide(d);
                                      })
                                    : i.postSlide(d))
                            )
                          : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll)
                          ? void (
                                i.options.fade === !1 &&
                                ((d = i.currentSlide),
                                c !== !0
                                    ? i.animateSlide(g, function () {
                                          i.postSlide(d);
                                      })
                                    : i.postSlide(d))
                            )
                          : (i.options.autoplay && clearInterval(i.autoPlayTimer),
                            (e =
                                0 > d
                                    ? i.slideCount % i.options.slidesToScroll !== 0
                                        ? i.slideCount - (i.slideCount % i.options.slidesToScroll)
                                        : i.slideCount + d
                                    : d >= i.slideCount
                                    ? i.slideCount % i.options.slidesToScroll !== 0
                                        ? 0
                                        : d - i.slideCount
                                    : d),
                            (i.animating = !0),
                            i.$slider.trigger("beforeChange", [i, i.currentSlide, e]),
                            (f = i.currentSlide),
                            (i.currentSlide = e),
                            i.setSlideClasses(i.currentSlide),
                            i.options.asNavFor && ((j = i.getNavTarget()), (j = j.slick("getSlick")), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)),
                            i.updateDots(),
                            i.updateArrows(),
                            i.options.fade === !0
                                ? (c !== !0
                                      ? (i.fadeSlideOut(f),
                                        i.fadeSlide(e, function () {
                                            i.postSlide(e);
                                        }))
                                      : i.postSlide(e),
                                  void i.animateHeight())
                                : void (c !== !0
                                      ? i.animateSlide(h, function () {
                                            i.postSlide(e);
                                        })
                                      : i.postSlide(e))))
            );
        }),
        (b.prototype.startLoad = function () {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()),
                a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
                a.$slider.addClass("slick-loading");
        }),
        (b.prototype.swipeDirection = function () {
            var a,
                b,
                c,
                d,
                e = this;
            return (
                (a = e.touchObject.startX - e.touchObject.curX),
                (b = e.touchObject.startY - e.touchObject.curY),
                (c = Math.atan2(b, a)),
                (d = Math.round((180 * c) / Math.PI)),
                0 > d && (d = 360 - Math.abs(d)),
                45 >= d && d >= 0
                    ? e.options.rtl === !1
                        ? "left"
                        : "right"
                    : 360 >= d && d >= 315
                    ? e.options.rtl === !1
                        ? "left"
                        : "right"
                    : d >= 135 && 225 >= d
                    ? e.options.rtl === !1
                        ? "right"
                        : "left"
                    : e.options.verticalSwiping === !0
                    ? d >= 35 && 135 >= d
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (b.prototype.swipeEnd = function (a) {
            var c,
                d,
                b = this;
            if (((b.dragging = !1), (b.interrupted = !1), (b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0), void 0 === b.touchObject.curX)) return !1;
            if ((b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe)) {
                switch ((d = b.swipeDirection())) {
                    case "left":
                    case "down":
                        (c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount()), (b.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount()), (b.currentDirection = 1);
                }
                "vertical" != d && (b.slideHandler(c), (b.touchObject = {}), b.$slider.trigger("swipe", [b, d]));
            } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), (b.touchObject = {}));
        }),
        (b.prototype.swipeHandler = function (a) {
            var b = this;
            if (!(b.options.swipe === !1 || ("ontouchend" in document && b.options.swipe === !1) || (b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))))
                switch (
                    ((b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1),
                    (b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold),
                    b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold),
                    a.data.action)
                ) {
                    case "start":
                        b.swipeStart(a);
                        break;
                    case "move":
                        b.swipeMove(a);
                        break;
                    case "end":
                        b.swipeEnd(a);
                }
        }),
        (b.prototype.swipeMove = function (a) {
            var d,
                e,
                f,
                g,
                h,
                b = this;
            return (
                (h = void 0 !== a.originalEvent ? a.originalEvent.touches : null),
                !b.dragging || (h && 1 !== h.length)
                    ? !1
                    : ((d = b.getLeft(b.currentSlide)),
                      (b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX),
                      (b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY),
                      (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2)))),
                      b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))),
                      (e = b.swipeDirection()),
                      "vertical" !== e
                          ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(),
                            (g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1)),
                            b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1),
                            (f = b.touchObject.swipeLength),
                            (b.touchObject.edgeHit = !1),
                            b.options.infinite === !1 &&
                                ((0 === b.currentSlide && "right" === e) || (b.currentSlide >= b.getDotCount() && "left" === e)) &&
                                ((f = b.touchObject.swipeLength * b.options.edgeFriction), (b.touchObject.edgeHit = !0)),
                            b.options.vertical === !1 ? (b.swipeLeft = d + f * g) : (b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g),
                            b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g),
                            b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? ((b.swipeLeft = null), !1) : void b.setCSS(b.swipeLeft))
                          : void 0)
            );
        }),
        (b.prototype.swipeStart = function (a) {
            var c,
                b = this;
            return (
                (b.interrupted = !0),
                1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow
                    ? ((b.touchObject = {}), !1)
                    : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]),
                      (b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX),
                      (b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY),
                      void (b.dragging = !0))
            );
        }),
        (b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
        }),
        (b.prototype.unload = function () {
            var b = this;
            a(".slick-cloned", b.$slider).remove(),
                b.$dots && b.$dots.remove(),
                b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(),
                b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(),
                b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }),
        (b.prototype.unslick = function (a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy();
        }),
        (b.prototype.updateArrows = function () {
            var b,
                a = this;
            (b = Math.floor(a.options.slidesToShow / 2)),
                a.options.arrows === !0 &&
                    a.slideCount > a.options.slidesToShow &&
                    !a.options.infinite &&
                    (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === a.currentSlide
                        ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1
                        ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : a.currentSlide >= a.slideCount - 1 &&
                          a.options.centerMode === !0 &&
                          (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }),
        (b.prototype.updateDots = function () {
            var a = this;
            null !== a.$dots &&
                (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
                a.$dots
                    .find("li")
                    .eq(Math.floor(a.currentSlide / a.options.slidesToScroll))
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        }),
        (b.prototype.visibility = function () {
            var a = this;
            a.options.autoplay && (document[a.hidden] ? (a.interrupted = !0) : (a.interrupted = !1));
        }),
        (a.fn.slick = function () {
            var f,
                g,
                a = this,
                c = arguments[0],
                d = Array.prototype.slice.call(arguments, 1),
                e = a.length;
            for (f = 0; e > f; f++) if (("object" == typeof c || "undefined" == typeof c ? (a[f].slick = new b(a[f], c)) : (g = a[f].slick[c].apply(a[f].slick, d)), "undefined" != typeof g)) return g;
            return a;
        });
});
/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(root.jQuery);
    }
})(this, function ($) {
    "use strict";

    // init flags & variables
    var debug = false;

    var browser = {
        data: {
            index: 0,
            name: "scrollbar",
        },
        macosx: /mac/i.test(navigator.platform),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent),
    };

    browser.scrolls.add = function (instance) {
        this.remove(instance).push(instance);
    };
    browser.scrolls.remove = function (instance) {
        while ($.inArray(instance, this) >= 0) {
            this.splice($.inArray(instance, this), 1);
        }
        return this;
    };

    var defaults = {
        autoScrollSize: true, // automatically calculate scrollsize
        autoUpdate: true, // update scrollbar if content/container size changed
        debug: false, // debug mode
        disableBodyScroll: false, // disable body scroll if mouse over container
        duration: 200, // scroll animate duration in ms
        ignoreMobile: false, // ignore mobile devices
        ignoreOverlay: false, // ignore browsers with overlay scrollbars (mobile, MacOS)
        scrollStep: 30, // scroll step for scrollbar arrows
        showArrows: false, // add class to show arrows
        stepScrolling: true, // when scrolling to scrollbar mousedown position

        scrollx: null, // horizontal scroll element
        scrolly: null, // vertical scroll element

        onDestroy: null, // callback function on destroy,
        onInit: null, // callback function on first initialization
        onScroll: null, // callback function on content scrolling
        onUpdate: null, // callback function on init/resize (before scrollbar size calculation)
    };

    var BaseScrollbar = function (container) {
        if (!browser.scroll) {
            browser.overlay = isScrollOverlaysContent();
            browser.scroll = getBrowserScrollSize();
            updateScrollbars();

            $(window).resize(function () {
                var forceUpdate = false;
                if (browser.scroll && (browser.scroll.height || browser.scroll.width)) {
                    var scroll = getBrowserScrollSize();
                    if (scroll.height !== browser.scroll.height || scroll.width !== browser.scroll.width) {
                        browser.scroll = scroll;
                        forceUpdate = true; // handle page zoom
                    }
                }
                updateScrollbars(forceUpdate);
            });
        }

        this.container = container;
        this.namespace = ".scrollbar_" + browser.data.index++;
        this.options = $.extend({}, defaults, window.jQueryScrollbarOptions || {});
        this.scrollTo = null;
        this.scrollx = {};
        this.scrolly = {};

        container.data(browser.data.name, this);
        browser.scrolls.add(this);
    };

    BaseScrollbar.prototype = {
        destroy: function () {
            if (!this.wrapper) {
                return;
            }

            this.container.removeData(browser.data.name);
            browser.scrolls.remove(this);

            // init variables
            var scrollLeft = this.container.scrollLeft();
            var scrollTop = this.container.scrollTop();

            this.container
                .insertBefore(this.wrapper)
                .css({
                    height: "",
                    margin: "",
                    "max-height": "",
                })
                .removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible")
                .off(this.namespace)
                .scrollLeft(scrollLeft)
                .scrollTop(scrollTop);

            this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace);
            this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace);

            this.wrapper.remove();

            $(document).add("body").off(this.namespace);

            if ($.isFunction(this.options.onDestroy)) {
                this.options.onDestroy.apply(this, [this.container]);
            }
        },
        init: function (options) {
            // init variables
            var S = this,
                c = this.container,
                cw = this.containerWrapper || c,
                namespace = this.namespace,
                o = $.extend(this.options, options || {}),
                s = { x: this.scrollx, y: this.scrolly },
                w = this.wrapper;

            var initScroll = {
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
            };

            // do not init if in ignorable browser
            if (
                (browser.mobile && o.ignoreMobile) ||
                (browser.overlay && o.ignoreOverlay) ||
                (browser.macosx && !browser.webkit) // still required to ignore nonWebKit browsers on Mac
            ) {
                return false;
            }

            // init scroll container
            if (!w) {
                this.wrapper = w = $("<div>")
                    .addClass("scroll-wrapper")
                    .addClass(c.attr("class"))
                    .css("position", c.css("position") == "absolute" ? "absolute" : "relative")
                    .insertBefore(c)
                    .append(c);

                if (c.is("textarea")) {
                    this.containerWrapper = cw = $("<div>").insertBefore(c).append(c);
                    w.addClass("scroll-textarea");
                }

                cw.addClass("scroll-content").css({
                    height: "auto",
                    "margin-bottom": browser.scroll.height * -1 + "px",
                    "margin-right": browser.scroll.width * -1 + "px",
                    "max-height": "",
                });

                c.on("scroll" + namespace, function (event) {
                    if ($.isFunction(o.onScroll)) {
                        o.onScroll.call(
                            S,
                            {
                                maxScroll: s.y.maxScrollOffset,
                                scroll: c.scrollTop(),
                                size: s.y.size,
                                visible: s.y.visible,
                            },
                            {
                                maxScroll: s.x.maxScrollOffset,
                                scroll: c.scrollLeft(),
                                size: s.x.size,
                                visible: s.x.visible,
                            }
                        );
                    }
                    s.x.isVisible && s.x.scroll.bar.css("left", c.scrollLeft() * s.x.kx + "px");
                    s.y.isVisible && s.y.scroll.bar.css("top", c.scrollTop() * s.y.kx + "px");
                });

                /* prevent native scrollbars to be visible on #anchor click */
                w.on("scroll" + namespace, function () {
                    w.scrollTop(0).scrollLeft(0);
                });

                if (o.disableBodyScroll) {
                    var handleMouseScroll = function (event) {
                        isVerticalScroll(event) ? s.y.isVisible && s.y.mousewheel(event) : s.x.isVisible && s.x.mousewheel(event);
                    };
                    w.on("MozMousePixelScroll" + namespace, handleMouseScroll);
                    w.on("mousewheel" + namespace, handleMouseScroll);

                    if (browser.mobile) {
                        w.on("touchstart" + namespace, function (event) {
                            var touch = (event.originalEvent.touches && event.originalEvent.touches[0]) || event;
                            var originalTouch = {
                                pageX: touch.pageX,
                                pageY: touch.pageY,
                            };
                            var originalScroll = {
                                left: c.scrollLeft(),
                                top: c.scrollTop(),
                            };
                            $(document).on("touchmove" + namespace, function (event) {
                                var touch = (event.originalEvent.targetTouches && event.originalEvent.targetTouches[0]) || event;
                                c.scrollLeft(originalScroll.left + originalTouch.pageX - touch.pageX);
                                c.scrollTop(originalScroll.top + originalTouch.pageY - touch.pageY);
                                event.preventDefault();
                            });
                            $(document).on("touchend" + namespace, function () {
                                $(document).off(namespace);
                            });
                        });
                    }
                }
                if ($.isFunction(o.onInit)) {
                    o.onInit.apply(this, [c]);
                }
            } else {
                cw.css({
                    height: "auto",
                    "margin-bottom": browser.scroll.height * -1 + "px",
                    "margin-right": browser.scroll.width * -1 + "px",
                    "max-height": "",
                });
            }

            // init scrollbars & recalculate sizes
            $.each(s, function (d, scrollx) {
                var scrollCallback = null;
                var scrollForward = 1;
                var scrollOffset = d === "x" ? "scrollLeft" : "scrollTop";
                var scrollStep = o.scrollStep;
                var scrollTo = function () {
                    var currentOffset = c[scrollOffset]();
                    c[scrollOffset](currentOffset + scrollStep);
                    if (scrollForward == 1 && currentOffset + scrollStep >= scrollToValue) currentOffset = c[scrollOffset]();
                    if (scrollForward == -1 && currentOffset + scrollStep <= scrollToValue) currentOffset = c[scrollOffset]();
                    if (c[scrollOffset]() == currentOffset && scrollCallback) {
                        scrollCallback();
                    }
                };
                var scrollToValue = 0;

                if (!scrollx.scroll) {
                    scrollx.scroll = S._getScroll(o["scroll" + d]).addClass("scroll-" + d);

                    if (o.showArrows) {
                        scrollx.scroll.addClass("scroll-element_arrows_visible");
                    }

                    scrollx.mousewheel = function (event) {
                        if (!scrollx.isVisible || (d === "x" && isVerticalScroll(event))) {
                            return true;
                        }
                        if (d === "y" && !isVerticalScroll(event)) {
                            s.x.mousewheel(event);
                            return true;
                        }

                        var delta = event.originalEvent.wheelDelta * -1 || event.originalEvent.detail;
                        var maxScrollValue = scrollx.size - scrollx.visible - scrollx.offset;

                        if ((delta > 0 && scrollToValue < maxScrollValue) || (delta < 0 && scrollToValue > 0)) {
                            scrollToValue = scrollToValue + delta;
                            if (scrollToValue < 0) scrollToValue = 0;
                            if (scrollToValue > maxScrollValue) scrollToValue = maxScrollValue;

                            S.scrollTo = S.scrollTo || {};
                            S.scrollTo[scrollOffset] = scrollToValue;
                            setTimeout(function () {
                                if (S.scrollTo) {
                                    c.stop().animate(S.scrollTo, 240, "linear", function () {
                                        scrollToValue = c[scrollOffset]();
                                    });
                                    S.scrollTo = null;
                                }
                            }, 1);
                        }

                        event.preventDefault();
                        return false;
                    };

                    scrollx.scroll
                        .on("MozMousePixelScroll" + namespace, scrollx.mousewheel)
                        .on("mousewheel" + namespace, scrollx.mousewheel)
                        .on("mouseenter" + namespace, function () {
                            scrollToValue = c[scrollOffset]();
                        });

                    // handle arrows & scroll inner mousedown event
                    scrollx.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + namespace, function (event) {
                        if (event.which != 1)
                            // lmb
                            return true;

                        scrollForward = 1;

                        var data = {
                            eventOffset: event[d === "x" ? "pageX" : "pageY"],
                            maxScrollValue: scrollx.size - scrollx.visible - scrollx.offset,
                            scrollbarOffset: scrollx.scroll.bar.offset()[d === "x" ? "left" : "top"],
                            scrollbarSize: scrollx.scroll.bar[d === "x" ? "outerWidth" : "outerHeight"](),
                        };
                        var timeout = 0,
                            timer = 0;

                        if ($(this).hasClass("scroll-arrow")) {
                            scrollForward = $(this).hasClass("scroll-arrow_more") ? 1 : -1;
                            scrollStep = o.scrollStep * scrollForward;
                            scrollToValue = scrollForward > 0 ? data.maxScrollValue : 0;
                        } else {
                            scrollForward = data.eventOffset > data.scrollbarOffset + data.scrollbarSize ? 1 : data.eventOffset < data.scrollbarOffset ? -1 : 0;
                            scrollStep = Math.round(scrollx.visible * 0.75) * scrollForward;
                            scrollToValue = data.eventOffset - data.scrollbarOffset - (o.stepScrolling ? (scrollForward == 1 ? data.scrollbarSize : 0) : Math.round(data.scrollbarSize / 2));
                            scrollToValue = c[scrollOffset]() + scrollToValue / scrollx.kx;
                        }

                        S.scrollTo = S.scrollTo || {};
                        S.scrollTo[scrollOffset] = o.stepScrolling ? c[scrollOffset]() + scrollStep : scrollToValue;

                        if (o.stepScrolling) {
                            scrollCallback = function () {
                                scrollToValue = c[scrollOffset]();
                                clearInterval(timer);
                                clearTimeout(timeout);
                                timeout = 0;
                                timer = 0;
                            };
                            timeout = setTimeout(function () {
                                timer = setInterval(scrollTo, 40);
                            }, o.duration + 100);
                        }

                        setTimeout(function () {
                            if (S.scrollTo) {
                                c.animate(S.scrollTo, o.duration);
                                S.scrollTo = null;
                            }
                        }, 1);

                        return S._handleMouseDown(scrollCallback, event);
                    });

                    // handle scrollbar drag'n'drop
                    scrollx.scroll.bar.on("mousedown" + namespace, function (event) {
                        if (event.which != 1)
                            // lmb
                            return true;

                        var eventPosition = event[d === "x" ? "pageX" : "pageY"];
                        var initOffset = c[scrollOffset]();

                        scrollx.scroll.addClass("scroll-draggable");

                        $(document).on("mousemove" + namespace, function (event) {
                            var diff = parseInt((event[d === "x" ? "pageX" : "pageY"] - eventPosition) / scrollx.kx, 10);
                            c[scrollOffset](initOffset + diff);
                        });

                        return S._handleMouseDown(function () {
                            scrollx.scroll.removeClass("scroll-draggable");
                            scrollToValue = c[scrollOffset]();
                        }, event);
                    });
                }
            });

            // remove classes & reset applied styles
            $.each(s, function (d, scrollx) {
                var scrollClass = "scroll-scroll" + d + "_visible";
                var scrolly = d == "x" ? s.y : s.x;

                scrollx.scroll.removeClass(scrollClass);
                scrolly.scroll.removeClass(scrollClass);
                cw.removeClass(scrollClass);
            });

            // calculate init sizes
            $.each(s, function (d, scrollx) {
                $.extend(
                    scrollx,
                    d == "x"
                        ? {
                              offset: parseInt(c.css("left"), 10) || 0,
                              size: c.prop("scrollWidth"),
                              visible: w.width(),
                          }
                        : {
                              offset: parseInt(c.css("top"), 10) || 0,
                              size: c.prop("scrollHeight"),
                              visible: w.height(),
                          }
                );
            });

            // update scrollbar visibility/dimensions
            this._updateScroll("x", this.scrollx);
            this._updateScroll("y", this.scrolly);

            if ($.isFunction(o.onUpdate)) {
                o.onUpdate.apply(this, [c]);
            }

            // calculate scroll size
            $.each(s, function (d, scrollx) {
                var cssOffset = d === "x" ? "left" : "top";
                var cssFullSize = d === "x" ? "outerWidth" : "outerHeight";
                var cssSize = d === "x" ? "width" : "height";
                var offset = parseInt(c.css(cssOffset), 10) || 0;

                var AreaSize = scrollx.size;
                var AreaVisible = scrollx.visible + offset;

                var scrollSize = scrollx.scroll.size[cssFullSize]() + (parseInt(scrollx.scroll.size.css(cssOffset), 10) || 0);

                if (o.autoScrollSize) {
                    scrollx.scrollbarSize = parseInt((scrollSize * AreaVisible) / AreaSize, 10);
                    scrollx.scroll.bar.css(cssSize, scrollx.scrollbarSize + "px");
                }

                scrollx.scrollbarSize = scrollx.scroll.bar[cssFullSize]();
                scrollx.kx = (scrollSize - scrollx.scrollbarSize) / (AreaSize - AreaVisible) || 1;
                scrollx.maxScrollOffset = AreaSize - AreaVisible;
            });

            c.scrollLeft(initScroll.scrollLeft).scrollTop(initScroll.scrollTop).trigger("scroll");
        },

        /**
         * Get scrollx/scrolly object
         *
         * @param {Mixed} scroll
         * @returns {jQuery} scroll object
         */
        _getScroll: function (scroll) {
            var types = {
                advanced: [
                    '<div class="scroll-element">',
                    '<div class="scroll-element_corner"></div>',
                    '<div class="scroll-arrow scroll-arrow_less"></div>',
                    '<div class="scroll-arrow scroll-arrow_more"></div>',
                    '<div class="scroll-element_outer">',
                    '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
                    '<div class="scroll-element_inner-wrapper">',
                    '<div class="scroll-element_inner scroll-element_track">', // used for handling scrollbar click
                    '<div class="scroll-element_inner-bottom"></div>',
                    "</div>",
                    "</div>",
                    '<div class="scroll-bar">', // required
                    '<div class="scroll-bar_body">',
                    '<div class="scroll-bar_body-inner"></div>',
                    "</div>",
                    '<div class="scroll-bar_bottom"></div>',
                    '<div class="scroll-bar_center"></div>',
                    "</div>",
                    "</div>",
                    "</div>",
                ].join(""),
                simple: [
                    '<div class="scroll-element">',
                    '<div class="scroll-element_outer">',
                    '<div class="scroll-element_size"></div>', // required! used for scrollbar size calculation !
                    '<div class="scroll-element_track"></div>', // used for handling scrollbar click
                    '<div class="scroll-bar"></div>', // required
                    "</div>",
                    "</div>",
                ].join(""),
            };
            if (types[scroll]) {
                scroll = types[scroll];
            }
            if (!scroll) {
                scroll = types["simple"];
            }
            if (typeof scroll == "string") {
                scroll = $(scroll).appendTo(this.wrapper);
            } else {
                scroll = $(scroll);
            }
            $.extend(scroll, {
                bar: scroll.find(".scroll-bar"),
                size: scroll.find(".scroll-element_size"),
                track: scroll.find(".scroll-element_track"),
            });
            return scroll;
        },

        _handleMouseDown: function (callback, event) {
            var namespace = this.namespace;

            $(document).on("blur" + namespace, function () {
                $(document).add("body").off(namespace);
                callback && callback();
            });
            $(document).on("dragstart" + namespace, function (event) {
                event.preventDefault();
                return false;
            });
            $(document).on("mouseup" + namespace, function () {
                $(document).add("body").off(namespace);
                callback && callback();
            });
            $("body").on("selectstart" + namespace, function (event) {
                event.preventDefault();
                return false;
            });

            event && event.preventDefault();
            return false;
        },

        _updateScroll: function (d, scrollx) {
            var container = this.container,
                containerWrapper = this.containerWrapper || container,
                scrollClass = "scroll-scroll" + d + "_visible",
                scrolly = d === "x" ? this.scrolly : this.scrollx,
                offset = parseInt(this.container.css(d === "x" ? "left" : "top"), 10) || 0,
                wrapper = this.wrapper;

            var AreaSize = scrollx.size;
            var AreaVisible = scrollx.visible + offset;

            scrollx.isVisible = AreaSize - AreaVisible > 1; // bug in IE9/11 with 1px diff
            if (scrollx.isVisible) {
                scrollx.scroll.addClass(scrollClass);
                scrolly.scroll.addClass(scrollClass);
                containerWrapper.addClass(scrollClass);
            } else {
                scrollx.scroll.removeClass(scrollClass);
                scrolly.scroll.removeClass(scrollClass);
                containerWrapper.removeClass(scrollClass);
            }

            if (d === "y") {
                if (container.is("textarea") || AreaSize < AreaVisible) {
                    containerWrapper.css({
                        height: AreaVisible + browser.scroll.height + "px",
                        "max-height": "none",
                    });
                } else {
                    containerWrapper.css({
                        //"height": "auto", // do not reset height value: issue with height:100%!
                        "max-height": AreaVisible + browser.scroll.height + "px",
                    });
                }
            }

            if (
                scrollx.size != container.prop("scrollWidth") ||
                scrolly.size != container.prop("scrollHeight") ||
                scrollx.visible != wrapper.width() ||
                scrolly.visible != wrapper.height() ||
                scrollx.offset != (parseInt(container.css("left"), 10) || 0) ||
                scrolly.offset != (parseInt(container.css("top"), 10) || 0)
            ) {
                $.extend(this.scrollx, {
                    offset: parseInt(container.css("left"), 10) || 0,
                    size: container.prop("scrollWidth"),
                    visible: wrapper.width(),
                });
                $.extend(this.scrolly, {
                    offset: parseInt(container.css("top"), 10) || 0,
                    size: this.container.prop("scrollHeight"),
                    visible: wrapper.height(),
                });
                this._updateScroll(d === "x" ? "y" : "x", scrolly);
            }
        },
    };

    var CustomScrollbar = BaseScrollbar;

    /*
     * Extend jQuery as plugin
     *
     * @param {Mixed} command to execute
     * @param {Mixed} arguments as Array
     * @return {jQuery}
     */
    $.fn.scrollbar = function (command, args) {
        if (typeof command !== "string") {
            args = command;
            command = "init";
        }
        if (typeof args === "undefined") {
            args = [];
        }
        if (!$.isArray(args)) {
            args = [args];
        }
        this.not("body, .scroll-wrapper").each(function () {
            var element = $(this),
                instance = element.data(browser.data.name);
            if (instance || command === "init") {
                if (!instance) {
                    instance = new CustomScrollbar(element);
                }
                if (instance[command]) {
                    instance[command].apply(instance, args);
                }
            }
        });
        return this;
    };

    /**
     * Connect default options to global object
     */
    $.fn.scrollbar.options = defaults;

    /**
     * Check if scroll content/container size is changed
     */

    var updateScrollbars = (function () {
        var timer = 0,
            timerCounter = 0;

        return function (force) {
            var i, container, options, scroll, wrapper, scrollx, scrolly;
            for (i = 0; i < browser.scrolls.length; i++) {
                scroll = browser.scrolls[i];
                container = scroll.container;
                options = scroll.options;
                wrapper = scroll.wrapper;
                scrollx = scroll.scrollx;
                scrolly = scroll.scrolly;
                if (
                    force ||
                    (options.autoUpdate &&
                        wrapper &&
                        wrapper.is(":visible") &&
                        (container.prop("scrollWidth") != scrollx.size || container.prop("scrollHeight") != scrolly.size || wrapper.width() != scrollx.visible || wrapper.height() != scrolly.visible))
                ) {
                    scroll.init();

                    if (options.debug) {
                        window.console &&
                            console.log(
                                {
                                    scrollHeight: container.prop("scrollHeight") + ":" + scroll.scrolly.size,
                                    scrollWidth: container.prop("scrollWidth") + ":" + scroll.scrollx.size,
                                    visibleHeight: wrapper.height() + ":" + scroll.scrolly.visible,
                                    visibleWidth: wrapper.width() + ":" + scroll.scrollx.visible,
                                },
                                true
                            );
                        timerCounter++;
                    }
                }
            }
            if (debug && timerCounter > 10) {
                window.console && console.log("Scroll updates exceed 10");
                updateScrollbars = function () {};
            } else {
                clearTimeout(timer);
                timer = setTimeout(updateScrollbars, 300);
            }
        };
    })();

    /* ADDITIONAL FUNCTIONS */
    /**
     * Get native browser scrollbar size (height/width)
     *
     * @param {Boolean} actual size or CSS size, default - CSS size
     * @returns {Object} with height, width
     */
    function getBrowserScrollSize(actualSize) {
        if (browser.webkit && !actualSize) {
            return {
                height: 0,
                width: 0,
            };
        }

        if (!browser.data.outer) {
            var css = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px",
            };
            browser.data.inner = $("<div>").css($.extend({}, css));
            browser.data.outer = $("<div>")
                .css(
                    $.extend(
                        {
                            left: "-1000px",
                            overflow: "scroll",
                            position: "absolute",
                            top: "-1000px",
                        },
                        css
                    )
                )
                .append(browser.data.inner)
                .appendTo("body");
        }

        browser.data.outer.scrollLeft(1000).scrollTop(1000);

        return {
            height: Math.ceil(browser.data.outer.offset().top - browser.data.inner.offset().top || 0),
            width: Math.ceil(browser.data.outer.offset().left - browser.data.inner.offset().left || 0),
        };
    }

    /**
     * Check if native browser scrollbars overlay content
     *
     * @returns {Boolean}
     */
    function isScrollOverlaysContent() {
        var scrollSize = getBrowserScrollSize(true);
        return !(scrollSize.height || scrollSize.width);
    }

    function isVerticalScroll(event) {
        var e = event.originalEvent;
        if (e.axis && e.axis === e.HORIZONTAL_AXIS) return false;
        if (e.wheelDeltaX) return false;
        return true;
    }

    /**
     * Extend AngularJS as UI directive
     * and expose a provider for override default config
     *
     */
    if (window.angular) {
        (function (angular) {
            angular
                .module("jQueryScrollbar", [])
                .provider("jQueryScrollbar", function () {
                    var defaultOptions = defaults;
                    return {
                        setOptions: function (options) {
                            angular.extend(defaultOptions, options);
                        },
                        $get: function () {
                            return {
                                options: angular.copy(defaultOptions),
                            };
                        },
                    };
                })
                .directive("jqueryScrollbar", [
                    "jQueryScrollbar",
                    "$parse",
                    function (jQueryScrollbar, $parse) {
                        return {
                            restrict: "AC",
                            link: function (scope, element, attrs) {
                                var model = $parse(attrs.jqueryScrollbar),
                                    options = model(scope);
                                element.scrollbar(options || jQueryScrollbar.options).on("$destroy", function () {
                                    element.scrollbar("destroy");
                                });
                            },
                        };
                    },
                ]);
        })(window.angular);
    }
});

!(function (a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        (b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this), (b.ProgressBar = a());
    }
})(function () {
    var a;
    return (function () {
        function a(b, c, d) {
            function e(g, h) {
                if (!c[g]) {
                    if (!b[g]) {
                        var i = "function" == typeof require && require;
                        if (!h && i) return i(g, !0);
                        if (f) return f(g, !0);
                        var j = new Error("Cannot find module '" + g + "'");
                        throw ((j.code = "MODULE_NOT_FOUND"), j);
                    }
                    var k = (c[g] = { exports: {} });
                    b[g][0].call(
                        k.exports,
                        function (a) {
                            return e(b[g][1][a] || a);
                        },
                        k,
                        k.exports,
                        a,
                        b,
                        c,
                        d
                    );
                }
                return c[g].exports;
            }
            for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
            return e;
        }
        return a;
    })()(
        {
            1: [
                function (b, c, d) {
                    !(function (b, e) {
                        "object" == typeof d && "object" == typeof c ? (c.exports = e()) : "function" == typeof a && a.amd ? a("shifty", [], e) : "object" == typeof d ? (d.shifty = e()) : (b.shifty = e());
                    })(window, function () {
                        return (function (a) {
                            function b(d) {
                                if (c[d]) return c[d].exports;
                                var e = (c[d] = { i: d, l: !1, exports: {} });
                                return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
                            }
                            var c = {};
                            return (
                                (b.m = a),
                                (b.c = c),
                                (b.d = function (a, c, d) {
                                    b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
                                }),
                                (b.r = function (a) {
                                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
                                }),
                                (b.t = function (a, c) {
                                    if ((1 & c && (a = b(a)), 8 & c)) return a;
                                    if (4 & c && "object" == typeof a && a && a.__esModule) return a;
                                    var d = Object.create(null);
                                    if ((b.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: a }), 2 & c && "string" != typeof a))
                                        for (var e in a)
                                            b.d(
                                                d,
                                                e,
                                                function (b) {
                                                    return a[b];
                                                }.bind(null, e)
                                            );
                                    return d;
                                }),
                                (b.n = function (a) {
                                    var c =
                                        a && a.__esModule
                                            ? function () {
                                                  return a.default;
                                              }
                                            : function () {
                                                  return a;
                                              };
                                    return b.d(c, "a", c), c;
                                }),
                                (b.o = function (a, b) {
                                    return Object.prototype.hasOwnProperty.call(a, b);
                                }),
                                (b.p = ""),
                                b((b.s = 3))
                            );
                        })([
                            function (a, b, c) {
                                "use strict";
                                (function (a) {
                                    function d(a, b) {
                                        for (var c = 0; c < b.length; c++) {
                                            var d = b[c];
                                            (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
                                        }
                                    }
                                    function e(a) {
                                        return (e =
                                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                                ? function (a) {
                                                      return typeof a;
                                                  }
                                                : function (a) {
                                                      return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
                                                  })(a);
                                    }
                                    function f(a, b) {
                                        var c = Object.keys(a);
                                        if (Object.getOwnPropertySymbols) {
                                            var d = Object.getOwnPropertySymbols(a);
                                            b &&
                                                (d = d.filter(function (b) {
                                                    return Object.getOwnPropertyDescriptor(a, b).enumerable;
                                                })),
                                                c.push.apply(c, d);
                                        }
                                        return c;
                                    }
                                    function g(a) {
                                        for (var b = 1; b < arguments.length; b++) {
                                            var c = null != arguments[b] ? arguments[b] : {};
                                            b % 2
                                                ? f(Object(c), !0).forEach(function (b) {
                                                      h(a, b, c[b]);
                                                  })
                                                : Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                                : f(Object(c)).forEach(function (b) {
                                                      Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
                                                  });
                                        }
                                        return a;
                                    }
                                    function h(a, b, c) {
                                        return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (a[b] = c), a;
                                    }
                                    function i() {
                                        var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            b = new v(),
                                            c = b.tween(a);
                                        return (c.tweenable = b), c;
                                    }
                                    c.d(b, "e", function () {
                                        return q;
                                    }),
                                        c.d(b, "c", function () {
                                            return s;
                                        }),
                                        c.d(b, "b", function () {
                                            return t;
                                        }),
                                        c.d(b, "a", function () {
                                            return v;
                                        }),
                                        c.d(b, "d", function () {
                                            return i;
                                        });
                                    var j = c(1),
                                        k = "undefined" != typeof window ? window : a,
                                        l = k.requestAnimationFrame || k.webkitRequestAnimationFrame || k.oRequestAnimationFrame || k.msRequestAnimationFrame || (k.mozCancelRequestAnimationFrame && k.mozRequestAnimationFrame) || setTimeout,
                                        m = function () {},
                                        n = null,
                                        o = null,
                                        p = g({}, j),
                                        q = function (a, b, c, d, e, f, g) {
                                            var h = a < f ? 0 : (a - f) / e;
                                            for (var i in b) {
                                                var j = g[i],
                                                    k = j.call ? j : p[j],
                                                    l = c[i];
                                                b[i] = l + (d[i] - l) * k(h);
                                            }
                                            return b;
                                        },
                                        r = function (a, b) {
                                            var c = a._attachment,
                                                d = a._currentState,
                                                e = a._delay,
                                                f = a._easing,
                                                g = a._originalState,
                                                h = a._duration,
                                                i = a._step,
                                                j = a._targetState,
                                                k = a._timestamp,
                                                l = k + e + h,
                                                m = b > l ? l : b,
                                                n = h - (l - m);
                                            m >= l ? (i(j, c, n), a.stop(!0)) : (a._applyFilter("beforeTween"), m < k + e ? ((m = 1), (h = 1), (k = 1)) : (k += e), q(m, d, g, j, h, k, f), a._applyFilter("afterTween"), i(d, c, n));
                                        },
                                        s = function () {
                                            for (var a = v.now(), b = n; b; ) {
                                                var c = b._next;
                                                r(b, a), (b = c);
                                            }
                                        },
                                        t = function (a) {
                                            var b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "linear",
                                                c = {},
                                                d = e(b);
                                            if ("string" === d || "function" === d) for (var f in a) c[f] = b;
                                            else for (var g in a) c[g] = b[g] || "linear";
                                            return c;
                                        },
                                        u = function (a) {
                                            if (a === n) (n = a._next) ? (n._previous = null) : (o = null);
                                            else if (a === o) (o = a._previous) ? (o._next = null) : (n = null);
                                            else {
                                                var b = a._previous,
                                                    c = a._next;
                                                (b._next = c), (c._previous = b);
                                            }
                                            a._previous = a._next = null;
                                        },
                                        v = (function () {
                                            function a() {
                                                var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                                                !(function (a, b) {
                                                    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                                                })(this, a),
                                                    (this._currentState = b),
                                                    (this._configured = !1),
                                                    (this._filters = []),
                                                    (this._timestamp = null),
                                                    (this._next = null),
                                                    (this._previous = null),
                                                    c && this.setConfig(c);
                                            }
                                            var b, c, e;
                                            return (
                                                (b = a),
                                                (c = [
                                                    {
                                                        key: "_applyFilter",
                                                        value: function (a) {
                                                            var b = !0,
                                                                c = !1,
                                                                d = void 0;
                                                            try {
                                                                for (var e, f = this._filters[Symbol.iterator](); !(b = (e = f.next()).done); b = !0) {
                                                                    var g = e.value[a];
                                                                    g && g(this);
                                                                }
                                                            } catch (a) {
                                                                (c = !0), (d = a);
                                                            } finally {
                                                                try {
                                                                    b || null == f.return || f.return();
                                                                } finally {
                                                                    if (c) throw d;
                                                                }
                                                            }
                                                        },
                                                    },
                                                    {
                                                        key: "tween",
                                                        value: function () {
                                                            var b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                                                c = this._attachment,
                                                                d = this._configured;
                                                            return (!b && d) || this.setConfig(b), (this._pausedAtTime = null), (this._timestamp = a.now()), this._start(this.get(), c), this.resume();
                                                        },
                                                    },
                                                    {
                                                        key: "setConfig",
                                                        value: function () {
                                                            var b = this,
                                                                c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                                d = c.attachment,
                                                                e = c.delay,
                                                                f = void 0 === e ? 0 : e,
                                                                h = c.duration,
                                                                i = void 0 === h ? 500 : h,
                                                                j = c.easing,
                                                                k = c.from,
                                                                l = c.promise,
                                                                n = void 0 === l ? Promise : l,
                                                                o = c.start,
                                                                p = void 0 === o ? m : o,
                                                                q = c.step,
                                                                r = void 0 === q ? m : q,
                                                                s = c.to;
                                                            (this._configured = !0),
                                                                (this._attachment = d),
                                                                (this._isPlaying = !1),
                                                                (this._pausedAtTime = null),
                                                                (this._scheduleId = null),
                                                                (this._delay = f),
                                                                (this._start = p),
                                                                (this._step = r),
                                                                (this._duration = i),
                                                                (this._currentState = g({}, k || this.get())),
                                                                (this._originalState = this.get()),
                                                                (this._targetState = g({}, s || this.get()));
                                                            var u = this._currentState;
                                                            (this._targetState = g({}, u, {}, this._targetState)), (this._easing = t(u, j));
                                                            var v = a.filters;
                                                            for (var w in ((this._filters.length = 0), v)) v[w].doesApply(this) && this._filters.push(v[w]);
                                                            return (
                                                                this._applyFilter("tweenCreated"),
                                                                (this._promise = new n(function (a, c) {
                                                                    (b._resolve = a), (b._reject = c);
                                                                })),
                                                                this._promise.catch(m),
                                                                this
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "get",
                                                        value: function () {
                                                            return g({}, this._currentState);
                                                        },
                                                    },
                                                    {
                                                        key: "set",
                                                        value: function (a) {
                                                            this._currentState = a;
                                                        },
                                                    },
                                                    {
                                                        key: "pause",
                                                        value: function () {
                                                            if (this._isPlaying) return (this._pausedAtTime = a.now()), (this._isPlaying = !1), u(this), this;
                                                        },
                                                    },
                                                    {
                                                        key: "resume",
                                                        value: function () {
                                                            if (null === this._timestamp) return this.tween();
                                                            if (this._isPlaying) return this._promise;
                                                            var b = a.now();
                                                            return (
                                                                this._pausedAtTime && ((this._timestamp += b - this._pausedAtTime), (this._pausedAtTime = null)),
                                                                (this._isPlaying = !0),
                                                                null === n
                                                                    ? ((n = this),
                                                                      (o = this),
                                                                      (function a() {
                                                                          n && (l.call(k, a, 1e3 / 60), s());
                                                                      })())
                                                                    : ((this._previous = o), (o._next = this), (o = this)),
                                                                this._promise
                                                            );
                                                        },
                                                    },
                                                    {
                                                        key: "seek",
                                                        value: function (b) {
                                                            b = Math.max(b, 0);
                                                            var c = a.now();
                                                            return this._timestamp + b === 0 ? this : ((this._timestamp = c - b), this._isPlaying || r(this, c), this);
                                                        },
                                                    },
                                                    {
                                                        key: "stop",
                                                        value: function () {
                                                            var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                                                b = this._attachment,
                                                                c = this._currentState,
                                                                d = this._easing,
                                                                e = this._originalState,
                                                                f = this._targetState;
                                                            if (this._isPlaying)
                                                                return (
                                                                    (this._isPlaying = !1),
                                                                    u(this),
                                                                    a
                                                                        ? (this._applyFilter("beforeTween"), q(1, c, e, f, 1, 0, d), this._applyFilter("afterTween"), this._applyFilter("afterTweenEnd"), this._resolve(c, b))
                                                                        : this._reject(c, b),
                                                                    this
                                                                );
                                                        },
                                                    },
                                                    {
                                                        key: "isPlaying",
                                                        value: function () {
                                                            return this._isPlaying;
                                                        },
                                                    },
                                                    {
                                                        key: "setScheduleFunction",
                                                        value: function (b) {
                                                            a.setScheduleFunction(b);
                                                        },
                                                    },
                                                    {
                                                        key: "dispose",
                                                        value: function () {
                                                            for (var a in this) delete this[a];
                                                        },
                                                    },
                                                ]) && d(b.prototype, c),
                                                e && d(b, e),
                                                a
                                            );
                                        })();
                                    (v.setScheduleFunction = function (a) {
                                        return (l = a);
                                    }),
                                        (v.formulas = p),
                                        (v.filters = {}),
                                        (v.now =
                                            Date.now ||
                                            function () {
                                                return +new Date();
                                            });
                                }.call(this, c(2)));
                            },
                            function (a, b, c) {
                                "use strict";
                                c.r(b),
                                    c.d(b, "linear", function () {
                                        return d;
                                    }),
                                    c.d(b, "easeInQuad", function () {
                                        return e;
                                    }),
                                    c.d(b, "easeOutQuad", function () {
                                        return f;
                                    }),
                                    c.d(b, "easeInOutQuad", function () {
                                        return g;
                                    }),
                                    c.d(b, "easeInCubic", function () {
                                        return h;
                                    }),
                                    c.d(b, "easeOutCubic", function () {
                                        return i;
                                    }),
                                    c.d(b, "easeInOutCubic", function () {
                                        return j;
                                    }),
                                    c.d(b, "easeInQuart", function () {
                                        return k;
                                    }),
                                    c.d(b, "easeOutQuart", function () {
                                        return l;
                                    }),
                                    c.d(b, "easeInOutQuart", function () {
                                        return m;
                                    }),
                                    c.d(b, "easeInQuint", function () {
                                        return n;
                                    }),
                                    c.d(b, "easeOutQuint", function () {
                                        return o;
                                    }),
                                    c.d(b, "easeInOutQuint", function () {
                                        return p;
                                    }),
                                    c.d(b, "easeInSine", function () {
                                        return q;
                                    }),
                                    c.d(b, "easeOutSine", function () {
                                        return r;
                                    }),
                                    c.d(b, "easeInOutSine", function () {
                                        return s;
                                    }),
                                    c.d(b, "easeInExpo", function () {
                                        return t;
                                    }),
                                    c.d(b, "easeOutExpo", function () {
                                        return u;
                                    }),
                                    c.d(b, "easeInOutExpo", function () {
                                        return v;
                                    }),
                                    c.d(b, "easeInCirc", function () {
                                        return w;
                                    }),
                                    c.d(b, "easeOutCirc", function () {
                                        return x;
                                    }),
                                    c.d(b, "easeInOutCirc", function () {
                                        return y;
                                    }),
                                    c.d(b, "easeOutBounce", function () {
                                        return z;
                                    }),
                                    c.d(b, "easeInBack", function () {
                                        return A;
                                    }),
                                    c.d(b, "easeOutBack", function () {
                                        return B;
                                    }),
                                    c.d(b, "easeInOutBack", function () {
                                        return C;
                                    }),
                                    c.d(b, "elastic", function () {
                                        return D;
                                    }),
                                    c.d(b, "swingFromTo", function () {
                                        return E;
                                    }),
                                    c.d(b, "swingFrom", function () {
                                        return F;
                                    }),
                                    c.d(b, "swingTo", function () {
                                        return G;
                                    }),
                                    c.d(b, "bounce", function () {
                                        return H;
                                    }),
                                    c.d(b, "bouncePast", function () {
                                        return I;
                                    }),
                                    c.d(b, "easeFromTo", function () {
                                        return J;
                                    }),
                                    c.d(b, "easeFrom", function () {
                                        return K;
                                    }),
                                    c.d(b, "easeTo", function () {
                                        return L;
                                    });
                                var d = function (a) {
                                        return a;
                                    },
                                    e = function (a) {
                                        return Math.pow(a, 2);
                                    },
                                    f = function (a) {
                                        return -(Math.pow(a - 1, 2) - 1);
                                    },
                                    g = function (a) {
                                        return (a /= 0.5) < 1 ? 0.5 * Math.pow(a, 2) : -0.5 * ((a -= 2) * a - 2);
                                    },
                                    h = function (a) {
                                        return Math.pow(a, 3);
                                    },
                                    i = function (a) {
                                        return Math.pow(a - 1, 3) + 1;
                                    },
                                    j = function (a) {
                                        return (a /= 0.5) < 1 ? 0.5 * Math.pow(a, 3) : 0.5 * (Math.pow(a - 2, 3) + 2);
                                    },
                                    k = function (a) {
                                        return Math.pow(a, 4);
                                    },
                                    l = function (a) {
                                        return -(Math.pow(a - 1, 4) - 1);
                                    },
                                    m = function (a) {
                                        return (a /= 0.5) < 1 ? 0.5 * Math.pow(a, 4) : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
                                    },
                                    n = function (a) {
                                        return Math.pow(a, 5);
                                    },
                                    o = function (a) {
                                        return Math.pow(a - 1, 5) + 1;
                                    },
                                    p = function (a) {
                                        return (a /= 0.5) < 1 ? 0.5 * Math.pow(a, 5) : 0.5 * (Math.pow(a - 2, 5) + 2);
                                    },
                                    q = function (a) {
                                        return 1 - Math.cos(a * (Math.PI / 2));
                                    },
                                    r = function (a) {
                                        return Math.sin(a * (Math.PI / 2));
                                    },
                                    s = function (a) {
                                        return -0.5 * (Math.cos(Math.PI * a) - 1);
                                    },
                                    t = function (a) {
                                        return 0 === a ? 0 : Math.pow(2, 10 * (a - 1));
                                    },
                                    u = function (a) {
                                        return 1 === a ? 1 : 1 - Math.pow(2, -10 * a);
                                    },
                                    v = function (a) {
                                        return 0 === a ? 0 : 1 === a ? 1 : (a /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * --a));
                                    },
                                    w = function (a) {
                                        return -(Math.sqrt(1 - a * a) - 1);
                                    },
                                    x = function (a) {
                                        return Math.sqrt(1 - Math.pow(a - 1, 2));
                                    },
                                    y = function (a) {
                                        return (a /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
                                    },
                                    z = function (a) {
                                        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                                    },
                                    A = function (a) {
                                        var b = 1.70158;
                                        return a * a * ((b + 1) * a - b);
                                    },
                                    B = function (a) {
                                        var b = 1.70158;
                                        return (a -= 1) * a * ((b + 1) * a + b) + 1;
                                    },
                                    C = function (a) {
                                        var b = 1.70158;
                                        return (a /= 0.5) < 1 ? a * a * ((1 + (b *= 1.525)) * a - b) * 0.5 : 0.5 * ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2);
                                    },
                                    D = function (a) {
                                        return -1 * Math.pow(4, -8 * a) * Math.sin(((6 * a - 1) * (2 * Math.PI)) / 2) + 1;
                                    },
                                    E = function (a) {
                                        var b = 1.70158;
                                        return (a /= 0.5) < 1 ? a * a * ((1 + (b *= 1.525)) * a - b) * 0.5 : 0.5 * ((a -= 2) * a * ((1 + (b *= 1.525)) * a + b) + 2);
                                    },
                                    F = function (a) {
                                        var b = 1.70158;
                                        return a * a * ((b + 1) * a - b);
                                    },
                                    G = function (a) {
                                        var b = 1.70158;
                                        return (a -= 1) * a * ((b + 1) * a + b) + 1;
                                    },
                                    H = function (a) {
                                        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                                    },
                                    I = function (a) {
                                        return a < 1 / 2.75
                                            ? 7.5625 * a * a
                                            : a < 2 / 2.75
                                            ? 2 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                                            : a < 2.5 / 2.75
                                            ? 2 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                                            : 2 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
                                    },
                                    J = function (a) {
                                        return (a /= 0.5) < 1 ? 0.5 * Math.pow(a, 4) : -0.5 * ((a -= 2) * Math.pow(a, 3) - 2);
                                    },
                                    K = function (a) {
                                        return Math.pow(a, 4);
                                    },
                                    L = function (a) {
                                        return Math.pow(a, 0.25);
                                    };
                            },
                            function (a, b) {
                                var c;
                                c = (function () {
                                    return this;
                                })();
                                try {
                                    c = c || new Function("return this")();
                                } catch (a) {
                                    "object" == typeof window && (c = window);
                                }
                                a.exports = c;
                            },
                            function (a, b, c) {
                                "use strict";
                                function d(a) {
                                    return parseInt(a, 16);
                                }
                                function e(a) {
                                    var b = a._currentState;
                                    [b, a._originalState, a._targetState].forEach(B), (a._tokenData = E(b));
                                }
                                function f(a) {
                                    var b = a._currentState,
                                        c = a._originalState,
                                        d = a._targetState,
                                        e = a._easing,
                                        f = a._tokenData;
                                    K(e, f),
                                        [b, c, d].forEach(function (a) {
                                            return F(a, f);
                                        });
                                }
                                function g(a) {
                                    var b = a._currentState,
                                        c = a._originalState,
                                        d = a._targetState,
                                        e = a._easing,
                                        f = a._tokenData;
                                    [b, c, d].forEach(function (a) {
                                        return J(a, f);
                                    }),
                                        L(e, f);
                                }
                                function h(a, b) {
                                    var c = Object.keys(a);
                                    if (Object.getOwnPropertySymbols) {
                                        var d = Object.getOwnPropertySymbols(a);
                                        b &&
                                            (d = d.filter(function (b) {
                                                return Object.getOwnPropertyDescriptor(a, b).enumerable;
                                            })),
                                            c.push.apply(c, d);
                                    }
                                    return c;
                                }
                                function i(a) {
                                    for (var b = 1; b < arguments.length; b++) {
                                        var c = null != arguments[b] ? arguments[b] : {};
                                        b % 2
                                            ? h(Object(c), !0).forEach(function (b) {
                                                  j(a, b, c[b]);
                                              })
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                                            : h(Object(c)).forEach(function (b) {
                                                  Object.defineProperty(a, b, Object.getOwnPropertyDescriptor(c, b));
                                              });
                                    }
                                    return a;
                                }
                                function j(a, b, c) {
                                    return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : (a[b] = c), a;
                                }
                                function k(a) {
                                    return (
                                        (function (a) {
                                            if (Array.isArray(a)) {
                                                for (var b = 0, c = new Array(a.length); b < a.length; b++) c[b] = a[b];
                                                return c;
                                            }
                                        })(a) ||
                                        (function (a) {
                                            if (Symbol.iterator in Object(a) || "[object Arguments]" === Object.prototype.toString.call(a)) return Array.from(a);
                                        })(a) ||
                                        (function () {
                                            throw new TypeError("Invalid attempt to spread non-iterable instance");
                                        })()
                                    );
                                }
                                function l(a, b) {
                                    for (var c = 0; c < b.length; c++) {
                                        var d = b[c];
                                        (d.enumerable = d.enumerable || !1), (d.configurable = !0), "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d);
                                    }
                                }
                                function m(a, b) {
                                    var c = b.get(a);
                                    if (!c) throw new TypeError("attempted to get private field on non-instance");
                                    return c.get ? c.get.call(a) : c.value;
                                }
                                function n(a, b, c, d, e, f) {
                                    var g,
                                        h,
                                        i = 0,
                                        j = 0,
                                        k = 0,
                                        l = 0,
                                        m = 0,
                                        n = 0,
                                        o = function (a) {
                                            return ((i * a + j) * a + k) * a;
                                        },
                                        p = function (a) {
                                            return (3 * i * a + 2 * j) * a + k;
                                        },
                                        q = function (a) {
                                            return a >= 0 ? a : 0 - a;
                                        };
                                    return (
                                        (i = 1 - (k = 3 * b) - (j = 3 * (d - b) - k)),
                                        (l = 1 - (n = 3 * c) - (m = 3 * (e - c) - n)),
                                        (g = a),
                                        (h = (function (a) {
                                            return 1 / (200 * a);
                                        })(f)),
                                        (function (a) {
                                            return ((l * a + m) * a + n) * a;
                                        })(
                                            (function (a, b) {
                                                var c, d, e, f, g, h;
                                                for (e = a, h = 0; h < 8; h++) {
                                                    if (((f = o(e) - a), q(f) < b)) return e;
                                                    if (((g = p(e)), q(g) < 1e-6)) break;
                                                    e -= f / g;
                                                }
                                                if ((e = a) < (c = 0)) return c;
                                                if (e > (d = 1)) return d;
                                                for (; c < d; ) {
                                                    if (((f = o(e)), q(f - a) < b)) return e;
                                                    a > f ? (c = e) : (d = e), (e = 0.5 * (d - c) + c);
                                                }
                                                return e;
                                            })(g, h)
                                        )
                                    );
                                }
                                c.r(b);
                                var o = {};
                                c.r(o),
                                    c.d(o, "doesApply", function () {
                                        return M;
                                    }),
                                    c.d(o, "tweenCreated", function () {
                                        return e;
                                    }),
                                    c.d(o, "beforeTween", function () {
                                        return f;
                                    }),
                                    c.d(o, "afterTween", function () {
                                        return g;
                                    });
                                var p,
                                    q,
                                    r = c(0),
                                    s = /(\d|-|\.)/,
                                    t = /([^\-0-9.]+)/g,
                                    u = /[0-9.-]+/g,
                                    v = ((p = u.source), (q = /,\s*/.source), new RegExp("rgb\\(".concat(p).concat(q).concat(p).concat(q).concat(p, "\\)"), "g")),
                                    w = /^.*\(/,
                                    x = /#([0-9]|[a-f]){3,6}/gi,
                                    y = function (a, b) {
                                        return a.map(function (a, c) {
                                            return "_".concat(b, "_").concat(c);
                                        });
                                    },
                                    z = function (a) {
                                        return "rgb(".concat(
                                            ((b = a), 3 === (b = b.replace(/#/, "")).length && (b = (b = b.split(""))[0] + b[0] + b[1] + b[1] + b[2] + b[2]), [d(b.substr(0, 2)), d(b.substr(2, 2)), d(b.substr(4, 2))]).join(","),
                                            ")"
                                        );
                                        var b;
                                    },
                                    A = function (a, b, c) {
                                        var d = b.match(a),
                                            e = b.replace(a, "VAL");
                                        return (
                                            d &&
                                                d.forEach(function (a) {
                                                    return (e = e.replace("VAL", c(a)));
                                                }),
                                            e
                                        );
                                    },
                                    B = function (a) {
                                        for (var b in a) {
                                            var c = a[b];
                                            "string" == typeof c && c.match(x) && (a[b] = A(x, c, z));
                                        }
                                    },
                                    C = function (a) {
                                        var b = a.match(u).map(Math.floor);
                                        return "".concat(a.match(w)[0]).concat(b.join(","), ")");
                                    },
                                    D = function (a) {
                                        return a.match(u);
                                    },
                                    E = function (a) {
                                        var b,
                                            c,
                                            d = {};
                                        for (var e in a) {
                                            var f = a[e];
                                            "string" == typeof f &&
                                                (d[e] = { formatString: ((b = f), (c = void 0), (c = b.match(t)), c ? (1 === c.length || b.charAt(0).match(s)) && c.unshift("") : (c = ["", ""]), c.join("VAL")), chunkNames: y(D(f), e) });
                                        }
                                        return d;
                                    },
                                    F = function (a, b) {
                                        var c = function (c) {
                                            D(a[c]).forEach(function (d, e) {
                                                return (a[b[c].chunkNames[e]] = +d);
                                            }),
                                                delete a[c];
                                        };
                                        for (var d in b) c(d);
                                    },
                                    G = function (a, b) {
                                        var c = {};
                                        return (
                                            b.forEach(function (b) {
                                                (c[b] = a[b]), delete a[b];
                                            }),
                                            c
                                        );
                                    },
                                    H = function (a, b) {
                                        return b.map(function (b) {
                                            return a[b];
                                        });
                                    },
                                    I = function (a, b) {
                                        return (
                                            b.forEach(function (b) {
                                                return (a = a.replace("VAL", +b.toFixed(4)));
                                            }),
                                            a
                                        );
                                    },
                                    J = function (a, b) {
                                        for (var c in b) {
                                            var d = b[c],
                                                e = d.chunkNames,
                                                f = d.formatString,
                                                g = I(f, H(G(a, e), e));
                                            a[c] = A(v, g, C);
                                        }
                                    },
                                    K = function (a, b) {
                                        var c = function (c) {
                                            var d = b[c].chunkNames,
                                                e = a[c];
                                            if ("string" == typeof e) {
                                                var f = e.split(" "),
                                                    g = f[f.length - 1];
                                                d.forEach(function (b, c) {
                                                    return (a[b] = f[c] || g);
                                                });
                                            } else
                                                d.forEach(function (b) {
                                                    return (a[b] = e);
                                                });
                                            delete a[c];
                                        };
                                        for (var d in b) c(d);
                                    },
                                    L = function (a, b) {
                                        for (var c in b) {
                                            var d = b[c].chunkNames,
                                                e = a[d[0]];
                                            a[c] =
                                                "string" == typeof e
                                                    ? d
                                                          .map(function (b) {
                                                              var c = a[b];
                                                              return delete a[b], c;
                                                          })
                                                          .join(" ")
                                                    : e;
                                        }
                                    },
                                    M = function (a) {
                                        var b = a._currentState;
                                        return Object.keys(b).some(function (a) {
                                            return "string" == typeof b[a];
                                        });
                                    },
                                    N = new r.a(),
                                    O = r.a.filters,
                                    P = function (a, b, c, d) {
                                        var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                            f = i({}, a),
                                            g = Object(r.b)(a, d);
                                        for (var h in ((N._filters.length = 0), N.set({}), (N._currentState = f), (N._originalState = a), (N._targetState = b), (N._easing = g), O)) O[h].doesApply(N) && N._filters.push(O[h]);
                                        N._applyFilter("tweenCreated"), N._applyFilter("beforeTween");
                                        var j = Object(r.e)(c, f, a, b, 1, e, g);
                                        return N._applyFilter("afterTween"), j;
                                    },
                                    Q = (function () {
                                        function a() {
                                            !(function (a, b) {
                                                if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function");
                                            })(this, a),
                                                R.set(this, { writable: !0, value: [] });
                                            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                                            c.forEach(this.add.bind(this));
                                        }
                                        var b, c, d;
                                        return (
                                            (b = a),
                                            (c = [
                                                {
                                                    key: "add",
                                                    value: function (a) {
                                                        return m(this, R).push(a), a;
                                                    },
                                                },
                                                {
                                                    key: "remove",
                                                    value: function (a) {
                                                        var b = m(this, R).indexOf(a);
                                                        return ~b && m(this, R).splice(b, 1), a;
                                                    },
                                                },
                                                {
                                                    key: "empty",
                                                    value: function () {
                                                        return this.tweenables.map(this.remove.bind(this));
                                                    },
                                                },
                                                {
                                                    key: "isPlaying",
                                                    value: function () {
                                                        return m(this, R).some(function (a) {
                                                            return a.isPlaying();
                                                        });
                                                    },
                                                },
                                                {
                                                    key: "play",
                                                    value: function () {
                                                        return (
                                                            m(this, R).forEach(function (a) {
                                                                return a.tween();
                                                            }),
                                                            this
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "pause",
                                                    value: function () {
                                                        return (
                                                            m(this, R).forEach(function (a) {
                                                                return a.pause();
                                                            }),
                                                            this
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "resume",
                                                    value: function () {
                                                        return (
                                                            m(this, R).forEach(function (a) {
                                                                return a.resume();
                                                            }),
                                                            this
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "stop",
                                                    value: function (a) {
                                                        return (
                                                            m(this, R).forEach(function (b) {
                                                                return b.stop(a);
                                                            }),
                                                            this
                                                        );
                                                    },
                                                },
                                                {
                                                    key: "tweenables",
                                                    get: function () {
                                                        return k(m(this, R));
                                                    },
                                                },
                                                {
                                                    key: "promises",
                                                    get: function () {
                                                        return m(this, R).map(function (a) {
                                                            return a._promise;
                                                        });
                                                    },
                                                },
                                            ]) && l(b.prototype, c),
                                            d && l(b, d),
                                            a
                                        );
                                    })(),
                                    R = new WeakMap(),
                                    S = function (a, b, c, d, e) {
                                        var f = (function (a, b, c, d) {
                                            return function (e) {
                                                return n(e, a, b, c, d, 1);
                                            };
                                        })(b, c, d, e);
                                        return (f.displayName = a), (f.x1 = b), (f.y1 = c), (f.x2 = d), (f.y2 = e), (r.a.formulas[a] = f);
                                    },
                                    T = function (a) {
                                        return delete r.a.formulas[a];
                                    };
                                c.d(b, "processTweens", function () {
                                    return r.c;
                                }),
                                    c.d(b, "Tweenable", function () {
                                        return r.a;
                                    }),
                                    c.d(b, "tween", function () {
                                        return r.d;
                                    }),
                                    c.d(b, "interpolate", function () {
                                        return P;
                                    }),
                                    c.d(b, "Scene", function () {
                                        return Q;
                                    }),
                                    c.d(b, "setBezierFunction", function () {
                                        return S;
                                    }),
                                    c.d(b, "unsetBezierFunction", function () {
                                        return T;
                                    }),
                                    (r.a.filters.token = o);
                            },
                        ]);
                    });
                },
                {},
            ],
            2: [
                function (a, b, c) {
                    var d = a("./shape"),
                        e = a("./utils"),
                        f = function (a, b) {
                            (this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"), (this.containerAspectRatio = 1), d.apply(this, arguments);
                        };
                    (f.prototype = new d()),
                        (f.prototype.constructor = f),
                        (f.prototype._pathString = function (a) {
                            var b = a.strokeWidth;
                            a.trailWidth && a.trailWidth > a.strokeWidth && (b = a.trailWidth);
                            var c = 50 - b / 2;
                            return e.render(this._pathTemplate, { radius: c, "2radius": 2 * c });
                        }),
                        (f.prototype._trailString = function (a) {
                            return this._pathString(a);
                        }),
                        (b.exports = f);
                },
                { "./shape": 7, "./utils": 9 },
            ],
            3: [
                function (a, b, c) {
                    var d = a("./shape"),
                        e = a("./utils"),
                        f = function (a, b) {
                            (this._pathTemplate = b.vertical ? "M {center},100 L {center},0" : "M 0,{center} L 100,{center}"), d.apply(this, arguments);
                        };
                    (f.prototype = new d()),
                        (f.prototype.constructor = f),
                        (f.prototype._initializeSvg = function (a, b) {
                            var c = b.vertical ? "0 0 " + b.strokeWidth + " 100" : "0 0 100 " + b.strokeWidth;
                            a.setAttribute("viewBox", c), a.setAttribute("preserveAspectRatio", "none");
                        }),
                        (f.prototype._pathString = function (a) {
                            return e.render(this._pathTemplate, { center: a.strokeWidth / 2 });
                        }),
                        (f.prototype._trailString = function (a) {
                            return this._pathString(a);
                        }),
                        (b.exports = f);
                },
                { "./shape": 7, "./utils": 9 },
            ],
            4: [
                function (a, b, c) {
                    b.exports = { Line: a("./line"), Circle: a("./circle"), SemiCircle: a("./semicircle"), Square: a("./square"), Path: a("./path"), Shape: a("./shape"), utils: a("./utils") };
                },
                { "./circle": 2, "./line": 3, "./path": 5, "./semicircle": 6, "./shape": 7, "./square": 8, "./utils": 9 },
            ],
            5: [
                function (a, b, c) {
                    var d = a("shifty"),
                        e = a("./utils"),
                        f = d.Tweenable,
                        g = { easeIn: "easeInCubic", easeOut: "easeOutCubic", easeInOut: "easeInOutCubic" },
                        h = function a(b, c) {
                            if (!(this instanceof a)) throw new Error("Constructor was called without new keyword");
                            c = e.extend({ delay: 0, duration: 800, easing: "linear", from: {}, to: {}, step: function () {} }, c);
                            var d;
                            (d = e.isString(b) ? document.querySelector(b) : b), (this.path = d), (this._opts = c), (this._tweenable = null);
                            var f = this.path.getTotalLength();
                            (this.path.style.strokeDasharray = f + " " + f), this.set(0);
                        };
                    (h.prototype.value = function () {
                        var a = this._getComputedDashOffset(),
                            b = this.path.getTotalLength(),
                            c = 1 - a / b;
                        return parseFloat(c.toFixed(6), 10);
                    }),
                        (h.prototype.set = function (a) {
                            this.stop(), (this.path.style.strokeDashoffset = this._progressToOffset(a));
                            var b = this._opts.step;
                            if (e.isFunction(b)) {
                                var c = this._easing(this._opts.easing);
                                b(this._calculateTo(a, c), this._opts.shape || this, this._opts.attachment);
                            }
                        }),
                        (h.prototype.stop = function () {
                            this._stopTween(), (this.path.style.strokeDashoffset = this._getComputedDashOffset());
                        }),
                        (h.prototype.animate = function (a, b, c) {
                            (b = b || {}), e.isFunction(b) && ((c = b), (b = {}));
                            var d = e.extend({}, b),
                                g = e.extend({}, this._opts);
                            b = e.extend(g, b);
                            var h = this._easing(b.easing),
                                i = this._resolveFromAndTo(a, h, d);
                            this.stop(), this.path.getBoundingClientRect();
                            var j = this._getComputedDashOffset(),
                                k = this._progressToOffset(a),
                                l = this;
                            (this._tweenable = new f()),
                                this._tweenable
                                    .tween({
                                        from: e.extend({ offset: j }, i.from),
                                        to: e.extend({ offset: k }, i.to),
                                        duration: b.duration,
                                        delay: b.delay,
                                        easing: h,
                                        step: function (a) {
                                            l.path.style.strokeDashoffset = a.offset;
                                            var c = b.shape || l;
                                            b.step(a, c, b.attachment);
                                        },
                                    })
                                    .then(function (a) {
                                        e.isFunction(c) && c();
                                    })
                                    .catch(function (a) {
                                        throw (console.error("Error in tweening:", a), a);
                                    });
                        }),
                        (h.prototype._getComputedDashOffset = function () {
                            var a = window.getComputedStyle(this.path, null);
                            return parseFloat(a.getPropertyValue("stroke-dashoffset"), 10);
                        }),
                        (h.prototype._progressToOffset = function (a) {
                            var b = this.path.getTotalLength();
                            return b - a * b;
                        }),
                        (h.prototype._resolveFromAndTo = function (a, b, c) {
                            return c.from && c.to ? { from: c.from, to: c.to } : { from: this._calculateFrom(b), to: this._calculateTo(a, b) };
                        }),
                        (h.prototype._calculateFrom = function (a) {
                            return d.interpolate(this._opts.from, this._opts.to, this.value(), a);
                        }),
                        (h.prototype._calculateTo = function (a, b) {
                            return d.interpolate(this._opts.from, this._opts.to, a, b);
                        }),
                        (h.prototype._stopTween = function () {
                            null !== this._tweenable && (this._tweenable.stop(!0), (this._tweenable = null));
                        }),
                        (h.prototype._easing = function (a) {
                            return g.hasOwnProperty(a) ? g[a] : a;
                        }),
                        (b.exports = h);
                },
                { "./utils": 9, shifty: 1 },
            ],
            6: [
                function (a, b, c) {
                    var d = a("./shape"),
                        e = a("./circle"),
                        f = a("./utils"),
                        g = function (a, b) {
                            (this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"), (this.containerAspectRatio = 2), d.apply(this, arguments);
                        };
                    (g.prototype = new d()),
                        (g.prototype.constructor = g),
                        (g.prototype._initializeSvg = function (a, b) {
                            a.setAttribute("viewBox", "0 0 100 50");
                        }),
                        (g.prototype._initializeTextContainer = function (a, b, c) {
                            a.text.style && ((c.style.top = "auto"), (c.style.bottom = "0"), a.text.alignToBottom ? f.setStyle(c, "transform", "translate(-50%, 0)") : f.setStyle(c, "transform", "translate(-50%, 50%)"));
                        }),
                        (g.prototype._pathString = e.prototype._pathString),
                        (g.prototype._trailString = e.prototype._trailString),
                        (b.exports = g);
                },
                { "./circle": 2, "./shape": 7, "./utils": 9 },
            ],
            7: [
                function (a, b, c) {
                    var d = a("./path"),
                        e = a("./utils"),
                        f = "Object is destroyed",
                        g = function a(b, c) {
                            if (!(this instanceof a)) throw new Error("Constructor was called without new keyword");
                            if (0 !== arguments.length) {
                                (this._opts = e.extend(
                                    {
                                        color: "#555",
                                        strokeWidth: 1,
                                        trailColor: null,
                                        trailWidth: null,
                                        fill: null,
                                        text: {
                                            style: { color: null, position: "absolute", left: "50%", top: "50%", padding: 0, margin: 0, transform: { prefix: !0, value: "translate(-50%, -50%)" } },
                                            autoStyleContainer: !0,
                                            alignToBottom: !0,
                                            value: null,
                                            className: "progressbar-text",
                                        },
                                        svgStyle: { display: "block", width: "100%" },
                                        warnings: !1,
                                    },
                                    c,
                                    !0
                                )),
                                    e.isObject(c) && void 0 !== c.svgStyle && (this._opts.svgStyle = c.svgStyle),
                                    e.isObject(c) && e.isObject(c.text) && void 0 !== c.text.style && (this._opts.text.style = c.text.style);
                                var f,
                                    g = this._createSvgView(this._opts);
                                if (!(f = e.isString(b) ? document.querySelector(b) : b)) throw new Error("Container does not exist: " + b);
                                (this._container = f),
                                    this._container.appendChild(g.svg),
                                    this._opts.warnings && this._warnContainerAspectRatio(this._container),
                                    this._opts.svgStyle && e.setStyles(g.svg, this._opts.svgStyle),
                                    (this.svg = g.svg),
                                    (this.path = g.path),
                                    (this.trail = g.trail),
                                    (this.text = null);
                                var h = e.extend({ attachment: void 0, shape: this }, this._opts);
                                (this._progressPath = new d(g.path, h)), e.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value);
                            }
                        };
                    (g.prototype.animate = function (a, b, c) {
                        if (null === this._progressPath) throw new Error(f);
                        this._progressPath.animate(a, b, c);
                    }),
                        (g.prototype.stop = function () {
                            if (null === this._progressPath) throw new Error(f);
                            void 0 !== this._progressPath && this._progressPath.stop();
                        }),
                        (g.prototype.pause = function () {
                            if (null === this._progressPath) throw new Error(f);
                            void 0 !== this._progressPath && this._progressPath._tweenable && this._progressPath._tweenable.pause();
                        }),
                        (g.prototype.resume = function () {
                            if (null === this._progressPath) throw new Error(f);
                            void 0 !== this._progressPath && this._progressPath._tweenable && this._progressPath._tweenable.resume();
                        }),
                        (g.prototype.destroy = function () {
                            if (null === this._progressPath) throw new Error(f);
                            this.stop(),
                                this.svg.parentNode.removeChild(this.svg),
                                (this.svg = null),
                                (this.path = null),
                                (this.trail = null),
                                (this._progressPath = null),
                                null !== this.text && (this.text.parentNode.removeChild(this.text), (this.text = null));
                        }),
                        (g.prototype.set = function (a) {
                            if (null === this._progressPath) throw new Error(f);
                            this._progressPath.set(a);
                        }),
                        (g.prototype.value = function () {
                            if (null === this._progressPath) throw new Error(f);
                            return void 0 === this._progressPath ? 0 : this._progressPath.value();
                        }),
                        (g.prototype.setText = function (a) {
                            if (null === this._progressPath) throw new Error(f);
                            null === this.text && ((this.text = this._createTextContainer(this._opts, this._container)), this._container.appendChild(this.text)),
                                e.isObject(a) ? (e.removeChildren(this.text), this.text.appendChild(a)) : (this.text.innerHTML = a);
                        }),
                        (g.prototype._createSvgView = function (a) {
                            var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            this._initializeSvg(b, a);
                            var c = null;
                            (a.trailColor || a.trailWidth) && ((c = this._createTrail(a)), b.appendChild(c));
                            var d = this._createPath(a);
                            return b.appendChild(d), { svg: b, path: d, trail: c };
                        }),
                        (g.prototype._initializeSvg = function (a, b) {
                            a.setAttribute("viewBox", "0 0 100 100");
                        }),
                        (g.prototype._createPath = function (a) {
                            var b = this._pathString(a);
                            return this._createPathElement(b, a);
                        }),
                        (g.prototype._createTrail = function (a) {
                            var b = this._trailString(a),
                                c = e.extend({}, a);
                            return c.trailColor || (c.trailColor = "#eee"), c.trailWidth || (c.trailWidth = c.strokeWidth), (c.color = c.trailColor), (c.strokeWidth = c.trailWidth), (c.fill = null), this._createPathElement(b, c);
                        }),
                        (g.prototype._createPathElement = function (a, b) {
                            var c = document.createElementNS("http://www.w3.org/2000/svg", "path");
                            return c.setAttribute("d", a), c.setAttribute("stroke", b.color), c.setAttribute("stroke-width", b.strokeWidth), b.fill ? c.setAttribute("fill", b.fill) : c.setAttribute("fill-opacity", "0"), c;
                        }),
                        (g.prototype._createTextContainer = function (a, b) {
                            var c = document.createElement("div");
                            c.className = a.text.className;
                            var d = a.text.style;
                            return d && (a.text.autoStyleContainer && (b.style.position = "relative"), e.setStyles(c, d), d.color || (c.style.color = a.color)), this._initializeTextContainer(a, b, c), c;
                        }),
                        (g.prototype._initializeTextContainer = function (a, b, c) {}),
                        (g.prototype._pathString = function (a) {
                            throw new Error("Override this function for each progress bar");
                        }),
                        (g.prototype._trailString = function (a) {
                            throw new Error("Override this function for each progress bar");
                        }),
                        (g.prototype._warnContainerAspectRatio = function (a) {
                            if (this.containerAspectRatio) {
                                var b = window.getComputedStyle(a, null),
                                    c = parseFloat(b.getPropertyValue("width"), 10),
                                    d = parseFloat(b.getPropertyValue("height"), 10);
                                e.floatEquals(this.containerAspectRatio, c / d) ||
                                    (console.warn("Incorrect aspect ratio of container", "#" + a.id, "detected:", b.getPropertyValue("width") + "(width)", "/", b.getPropertyValue("height") + "(height)", "=", c / d),
                                    console.warn("Aspect ratio of should be", this.containerAspectRatio));
                            }
                        }),
                        (b.exports = g);
                },
                { "./path": 5, "./utils": 9 },
            ],
            8: [
                function (a, b, c) {
                    var d = a("./shape"),
                        e = a("./utils"),
                        f = function (a, b) {
                            (this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
                                (this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
                                d.apply(this, arguments);
                        };
                    (f.prototype = new d()),
                        (f.prototype.constructor = f),
                        (f.prototype._pathString = function (a) {
                            var b = 100 - a.strokeWidth / 2;
                            return e.render(this._pathTemplate, { width: b, strokeWidth: a.strokeWidth, halfOfStrokeWidth: a.strokeWidth / 2 });
                        }),
                        (f.prototype._trailString = function (a) {
                            var b = 100 - a.strokeWidth / 2;
                            return e.render(this._trailTemplate, { width: b, strokeWidth: a.strokeWidth, halfOfStrokeWidth: a.strokeWidth / 2, startMargin: a.strokeWidth / 2 - a.trailWidth / 2 });
                        }),
                        (b.exports = f);
                },
                { "./shape": 7, "./utils": 9 },
            ],
            9: [
                function (a, b, c) {
                    function d(a, b, c) {
                        (a = a || {}), (b = b || {}), (c = c || !1);
                        for (var e in b)
                            if (b.hasOwnProperty(e)) {
                                var f = a[e],
                                    g = b[e];
                                c && l(f) && l(g) ? (a[e] = d(f, g, c)) : (a[e] = g);
                            }
                        return a;
                    }
                    function e(a, b) {
                        var c = a;
                        for (var d in b)
                            if (b.hasOwnProperty(d)) {
                                var e = b[d],
                                    f = "\\{" + d + "\\}",
                                    g = new RegExp(f, "g");
                                c = c.replace(g, e);
                            }
                        return c;
                    }
                    function f(a, b, c) {
                        for (var d = a.style, e = 0; e < p.length; ++e) {
                            d[p[e] + h(b)] = c;
                        }
                        d[b] = c;
                    }
                    function g(a, b) {
                        m(b, function (b, c) {
                            null !== b && void 0 !== b && (l(b) && !0 === b.prefix ? f(a, c, b.value) : (a.style[c] = b));
                        });
                    }
                    function h(a) {
                        return a.charAt(0).toUpperCase() + a.slice(1);
                    }
                    function i(a) {
                        return "string" == typeof a || a instanceof String;
                    }
                    function j(a) {
                        return "function" == typeof a;
                    }
                    function k(a) {
                        return "[object Array]" === Object.prototype.toString.call(a);
                    }
                    function l(a) {
                        return !k(a) && "object" == typeof a && !!a;
                    }
                    function m(a, b) {
                        for (var c in a)
                            if (a.hasOwnProperty(c)) {
                                var d = a[c];
                                b(d, c);
                            }
                    }
                    function n(a, b) {
                        return Math.abs(a - b) < q;
                    }
                    function o(a) {
                        for (; a.firstChild; ) a.removeChild(a.firstChild);
                    }
                    var p = "Webkit Moz O ms".split(" "),
                        q = 0.001;
                    b.exports = { extend: d, render: e, setStyle: f, setStyles: g, capitalize: h, isString: i, isFunction: j, isObject: l, forEachObject: m, floatEquals: n, removeChildren: o };
                },
                {},
            ],
        },
        {},
        [4]
    )(4);
});
//# sourceMappingURL=progressbar.min.js.map
/*! nouislider - 14.6.0 - 6/27/2020 */
!(function (t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (module.exports = t()) : (window.noUiSlider = t());
})(function () {
    "use strict";
    var lt = "14.6.0";
    function ut(t) {
        t.parentElement.removeChild(t);
    }
    function a(t) {
        return null != t;
    }
    function ct(t) {
        t.preventDefault();
    }
    function o(t) {
        return "number" == typeof t && !isNaN(t) && isFinite(t);
    }
    function pt(t, e, r) {
        0 < r &&
            (ht(t, e),
            setTimeout(function () {
                mt(t, e);
            }, r));
    }
    function ft(t) {
        return Math.max(Math.min(t, 100), 0);
    }
    function dt(t) {
        return Array.isArray(t) ? t : [t];
    }
    function e(t) {
        var e = (t = String(t)).split(".");
        return 1 < e.length ? e[1].length : 0;
    }
    function ht(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.add(e) : (t.className += " " + e);
    }
    function mt(t, e) {
        t.classList && !/\s/.test(e) ? t.classList.remove(e) : (t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }
    function gt(t) {
        var e = void 0 !== window.pageXOffset,
            r = "CSS1Compat" === (t.compatMode || "");
        return { x: e ? window.pageXOffset : r ? t.documentElement.scrollLeft : t.body.scrollLeft, y: e ? window.pageYOffset : r ? t.documentElement.scrollTop : t.body.scrollTop };
    }
    function c(t, e) {
        return 100 / (e - t);
    }
    function p(t, e, r) {
        return (100 * e) / (t[r + 1] - t[r]);
    }
    function f(t, e) {
        for (var r = 1; t >= e[r]; ) r += 1;
        return r;
    }
    function r(t, e, r) {
        if (r >= t.slice(-1)[0]) return 100;
        var n,
            i,
            o = f(r, t),
            s = t[o - 1],
            a = t[o],
            l = e[o - 1],
            u = e[o];
        return l + ((i = r), p((n = [s, a]), n[0] < 0 ? i + Math.abs(n[0]) : i - n[0], 0) / c(l, u));
    }
    function n(t, e, r, n) {
        if (100 === n) return n;
        var i,
            o,
            s = f(n, t),
            a = t[s - 1],
            l = t[s];
        return r ? ((l - a) / 2 < n - a ? l : a) : e[s - 1] ? t[s - 1] + ((i = n - t[s - 1]), (o = e[s - 1]), Math.round(i / o) * o) : n;
    }
    function s(t, e, r) {
        var n;
        if (("number" == typeof e && (e = [e]), !Array.isArray(e))) throw new Error("noUiSlider (" + lt + "): 'range' contains invalid value.");
        if (!o((n = "min" === t ? 0 : "max" === t ? 100 : parseFloat(t))) || !o(e[0])) throw new Error("noUiSlider (" + lt + "): 'range' value isn't numeric.");
        r.xPct.push(n), r.xVal.push(e[0]), n ? r.xSteps.push(!isNaN(e[1]) && e[1]) : isNaN(e[1]) || (r.xSteps[0] = e[1]), r.xHighestCompleteStep.push(0);
    }
    function l(t, e, r) {
        if (e)
            if (r.xVal[t] !== r.xVal[t + 1]) {
                r.xSteps[t] = p([r.xVal[t], r.xVal[t + 1]], e, 0) / c(r.xPct[t], r.xPct[t + 1]);
                var n = (r.xVal[t + 1] - r.xVal[t]) / r.xNumSteps[t],
                    i = Math.ceil(Number(n.toFixed(3)) - 1),
                    o = r.xVal[t] + r.xNumSteps[t] * i;
                r.xHighestCompleteStep[t] = o;
            } else r.xSteps[t] = r.xHighestCompleteStep[t] = r.xVal[t];
    }
    function i(t, e, r) {
        var n;
        (this.xPct = []), (this.xVal = []), (this.xSteps = [r || !1]), (this.xNumSteps = [!1]), (this.xHighestCompleteStep = []), (this.snap = e);
        var i = [];
        for (n in t) t.hasOwnProperty(n) && i.push([t[n], n]);
        for (
            i.length && "object" == typeof i[0][0]
                ? i.sort(function (t, e) {
                      return t[0][0] - e[0][0];
                  })
                : i.sort(function (t, e) {
                      return t[0] - e[0];
                  }),
                n = 0;
            n < i.length;
            n++
        )
            s(i[n][1], i[n][0], this);
        for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) l(n, this.xNumSteps[n], this);
    }
    (i.prototype.getDistance = function (t) {
        var e,
            r = [];
        for (e = 0; e < this.xNumSteps.length - 1; e++) {
            var n = this.xNumSteps[e];
            if (n && (t / n) % 1 != 0) throw new Error("noUiSlider (" + lt + "): 'limit', 'margin' and 'padding' of " + this.xPct[e] + "% range must be divisible by step.");
            r[e] = p(this.xVal, t, e);
        }
        return r;
    }),
        (i.prototype.getAbsoluteDistance = function (t, e, r) {
            var n,
                i = 0;
            if (t < this.xPct[this.xPct.length - 1]) for (; t > this.xPct[i + 1]; ) i++;
            else t === this.xPct[this.xPct.length - 1] && (i = this.xPct.length - 2);
            r || t !== this.xPct[i + 1] || i++;
            var o = 1,
                s = e[i],
                a = 0,
                l = 0,
                u = 0,
                c = 0;
            for (n = r ? (t - this.xPct[i]) / (this.xPct[i + 1] - this.xPct[i]) : (this.xPct[i + 1] - t) / (this.xPct[i + 1] - this.xPct[i]); 0 < s; )
                (a = this.xPct[i + 1 + c] - this.xPct[i + c]),
                    100 < e[i + c] * o + 100 - 100 * n ? ((l = a * n), (o = (s - 100 * n) / e[i + c]), (n = 1)) : ((l = ((e[i + c] * a) / 100) * o), (o = 0)),
                    r ? ((u -= l), 1 <= this.xPct.length + c && c--) : ((u += l), 1 <= this.xPct.length - c && c++),
                    (s = e[i + c] * o);
            return t + u;
        }),
        (i.prototype.toStepping = function (t) {
            return (t = r(this.xVal, this.xPct, t));
        }),
        (i.prototype.fromStepping = function (t) {
            return (function (t, e, r) {
                if (100 <= r) return t.slice(-1)[0];
                var n,
                    i = f(r, e),
                    o = t[i - 1],
                    s = t[i],
                    a = e[i - 1],
                    l = e[i];
                return (n = [o, s]), ((r - a) * c(a, l) * (n[1] - n[0])) / 100 + n[0];
            })(this.xVal, this.xPct, t);
        }),
        (i.prototype.getStep = function (t) {
            return (t = n(this.xPct, this.xSteps, this.snap, t));
        }),
        (i.prototype.getDefaultStep = function (t, e, r) {
            var n = f(t, this.xPct);
            return (100 === t || (e && t === this.xPct[n - 1])) && (n = Math.max(n - 1, 1)), (this.xVal[n] - this.xVal[n - 1]) / r;
        }),
        (i.prototype.getNearbySteps = function (t) {
            var e = f(t, this.xPct);
            return {
                stepBefore: { startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2] },
                thisStep: { startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1] },
                stepAfter: { startValue: this.xVal[e], step: this.xNumSteps[e], highestStep: this.xHighestCompleteStep[e] },
            };
        }),
        (i.prototype.countStepDecimals = function () {
            var t = this.xNumSteps.map(e);
            return Math.max.apply(null, t);
        }),
        (i.prototype.convert = function (t) {
            return this.getStep(this.toStepping(t));
        });
    var u = {
            to: function (t) {
                return void 0 !== t && t.toFixed(2);
            },
            from: Number,
        },
        d = {
            target: "target",
            base: "base",
            origin: "origin",
            handle: "handle",
            handleLower: "handle-lower",
            handleUpper: "handle-upper",
            touchArea: "touch-area",
            horizontal: "horizontal",
            vertical: "vertical",
            background: "background",
            connect: "connect",
            connects: "connects",
            ltr: "ltr",
            rtl: "rtl",
            textDirectionLtr: "txt-dir-ltr",
            textDirectionRtl: "txt-dir-rtl",
            draggable: "draggable",
            drag: "state-drag",
            tap: "state-tap",
            active: "active",
            tooltip: "tooltip",
            pips: "pips",
            pipsHorizontal: "pips-horizontal",
            pipsVertical: "pips-vertical",
            marker: "marker",
            markerHorizontal: "marker-horizontal",
            markerVertical: "marker-vertical",
            markerNormal: "marker-normal",
            markerLarge: "marker-large",
            markerSub: "marker-sub",
            value: "value",
            valueHorizontal: "value-horizontal",
            valueVertical: "value-vertical",
            valueNormal: "value-normal",
            valueLarge: "value-large",
            valueSub: "value-sub",
        };
    function h(t) {
        if ("object" == typeof (e = t) && "function" == typeof e.to && "function" == typeof e.from) return !0;
        var e;
        throw new Error("noUiSlider (" + lt + "): 'format' requires 'to' and 'from' methods.");
    }
    function m(t, e) {
        if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'step' is not numeric.");
        t.singleStep = e;
    }
    function g(t, e) {
        if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'keyboardPageMultiplier' is not numeric.");
        t.keyboardPageMultiplier = e;
    }
    function v(t, e) {
        if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'keyboardDefaultStep' is not numeric.");
        t.keyboardDefaultStep = e;
    }
    function b(t, e) {
        if ("object" != typeof e || Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'range' is not an object.");
        if (void 0 === e.min || void 0 === e.max) throw new Error("noUiSlider (" + lt + "): Missing 'min' or 'max' in 'range'.");
        if (e.min === e.max) throw new Error("noUiSlider (" + lt + "): 'range' 'min' and 'max' cannot be equal.");
        t.spectrum = new i(e, t.snap, t.singleStep);
    }
    function x(t, e) {
        if (((e = dt(e)), !Array.isArray(e) || !e.length)) throw new Error("noUiSlider (" + lt + "): 'start' option is incorrect.");
        (t.handles = e.length), (t.start = e);
    }
    function S(t, e) {
        if ("boolean" != typeof (t.snap = e)) throw new Error("noUiSlider (" + lt + "): 'snap' option must be a boolean.");
    }
    function w(t, e) {
        if ("boolean" != typeof (t.animate = e)) throw new Error("noUiSlider (" + lt + "): 'animate' option must be a boolean.");
    }
    function y(t, e) {
        if ("number" != typeof (t.animationDuration = e)) throw new Error("noUiSlider (" + lt + "): 'animationDuration' option must be a number.");
    }
    function E(t, e) {
        var r,
            n = [!1];
        if (("lower" === e ? (e = [!0, !1]) : "upper" === e && (e = [!1, !0]), !0 === e || !1 === e)) {
            for (r = 1; r < t.handles; r++) n.push(e);
            n.push(!1);
        } else {
            if (!Array.isArray(e) || !e.length || e.length !== t.handles + 1) throw new Error("noUiSlider (" + lt + "): 'connect' option doesn't match handle count.");
            n = e;
        }
        t.connect = n;
    }
    function C(t, e) {
        switch (e) {
            case "horizontal":
                t.ort = 0;
                break;
            case "vertical":
                t.ort = 1;
                break;
            default:
                throw new Error("noUiSlider (" + lt + "): 'orientation' option is invalid.");
        }
    }
    function P(t, e) {
        if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'margin' option must be numeric.");
        0 !== e && (t.margin = t.spectrum.getDistance(e));
    }
    function N(t, e) {
        if (!o(e)) throw new Error("noUiSlider (" + lt + "): 'limit' option must be numeric.");
        if (((t.limit = t.spectrum.getDistance(e)), !t.limit || t.handles < 2)) throw new Error("noUiSlider (" + lt + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
    }
    function k(t, e) {
        var r;
        if (!o(e) && !Array.isArray(e)) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (Array.isArray(e) && 2 !== e.length && !o(e[0]) && !o(e[1])) throw new Error("noUiSlider (" + lt + "): 'padding' option must be numeric or array of exactly 2 numbers.");
        if (0 !== e) {
            for (Array.isArray(e) || (e = [e, e]), t.padding = [t.spectrum.getDistance(e[0]), t.spectrum.getDistance(e[1])], r = 0; r < t.spectrum.xNumSteps.length - 1; r++)
                if (t.padding[0][r] < 0 || t.padding[1][r] < 0) throw new Error("noUiSlider (" + lt + "): 'padding' option must be a positive number(s).");
            var n = e[0] + e[1],
                i = t.spectrum.xVal[0];
            if (1 < n / (t.spectrum.xVal[t.spectrum.xVal.length - 1] - i)) throw new Error("noUiSlider (" + lt + "): 'padding' option must not exceed 100% of the range.");
        }
    }
    function U(t, e) {
        switch (e) {
            case "ltr":
                t.dir = 0;
                break;
            case "rtl":
                t.dir = 1;
                break;
            default:
                throw new Error("noUiSlider (" + lt + "): 'direction' option was not recognized.");
        }
    }
    function A(t, e) {
        if ("string" != typeof e) throw new Error("noUiSlider (" + lt + "): 'behaviour' must be a string containing options.");
        var r = 0 <= e.indexOf("tap"),
            n = 0 <= e.indexOf("drag"),
            i = 0 <= e.indexOf("fixed"),
            o = 0 <= e.indexOf("snap"),
            s = 0 <= e.indexOf("hover"),
            a = 0 <= e.indexOf("unconstrained");
        if (i) {
            if (2 !== t.handles) throw new Error("noUiSlider (" + lt + "): 'fixed' behaviour must be used with 2 handles");
            P(t, t.start[1] - t.start[0]);
        }
        if (a && (t.margin || t.limit)) throw new Error("noUiSlider (" + lt + "): 'unconstrained' behaviour cannot be used with margin or limit");
        t.events = { tap: r || o, drag: n, fixed: i, snap: o, hover: s, unconstrained: a };
    }
    function V(t, e) {
        if (!1 !== e)
            if (!0 === e) {
                t.tooltips = [];
                for (var r = 0; r < t.handles; r++) t.tooltips.push(!0);
            } else {
                if (((t.tooltips = dt(e)), t.tooltips.length !== t.handles)) throw new Error("noUiSlider (" + lt + "): must pass a formatter for all handles.");
                t.tooltips.forEach(function (t) {
                    if ("boolean" != typeof t && ("object" != typeof t || "function" != typeof t.to)) throw new Error("noUiSlider (" + lt + "): 'tooltips' must be passed a formatter or 'false'.");
                });
            }
    }
    function D(t, e) {
        h((t.ariaFormat = e));
    }
    function M(t, e) {
        h((t.format = e));
    }
    function O(t, e) {
        if ("boolean" != typeof (t.keyboardSupport = e)) throw new Error("noUiSlider (" + lt + "): 'keyboardSupport' option must be a boolean.");
    }
    function L(t, e) {
        t.documentElement = e;
    }
    function z(t, e) {
        if ("string" != typeof e && !1 !== e) throw new Error("noUiSlider (" + lt + "): 'cssPrefix' must be a string or `false`.");
        t.cssPrefix = e;
    }
    function H(t, e) {
        if ("object" != typeof e) throw new Error("noUiSlider (" + lt + "): 'cssClasses' must be an object.");
        if ("string" == typeof t.cssPrefix) for (var r in ((t.cssClasses = {}), e)) e.hasOwnProperty(r) && (t.cssClasses[r] = t.cssPrefix + e[r]);
        else t.cssClasses = e;
    }
    function vt(e) {
        var r = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: u, format: u },
            n = {
                step: { r: !1, t: m },
                keyboardPageMultiplier: { r: !1, t: g },
                keyboardDefaultStep: { r: !1, t: v },
                start: { r: !0, t: x },
                connect: { r: !0, t: E },
                direction: { r: !0, t: U },
                snap: { r: !1, t: S },
                animate: { r: !1, t: w },
                animationDuration: { r: !1, t: y },
                range: { r: !0, t: b },
                orientation: { r: !1, t: C },
                margin: { r: !1, t: P },
                limit: { r: !1, t: N },
                padding: { r: !1, t: k },
                behaviour: { r: !0, t: A },
                ariaFormat: { r: !1, t: D },
                format: { r: !1, t: M },
                tooltips: { r: !1, t: V },
                keyboardSupport: { r: !0, t: O },
                documentElement: { r: !1, t: L },
                cssPrefix: { r: !0, t: z },
                cssClasses: { r: !0, t: H },
            },
            i = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", keyboardSupport: !0, cssPrefix: "noUi-", cssClasses: d, keyboardPageMultiplier: 5, keyboardDefaultStep: 10 };
        e.format && !e.ariaFormat && (e.ariaFormat = e.format),
            Object.keys(n).forEach(function (t) {
                if (!a(e[t]) && void 0 === i[t]) {
                    if (n[t].r) throw new Error("noUiSlider (" + lt + "): '" + t + "' is required.");
                    return !0;
                }
                n[t].t(r, a(e[t]) ? e[t] : i[t]);
            }),
            (r.pips = e.pips);
        var t = document.createElement("div"),
            o = void 0 !== t.style.msTransform,
            s = void 0 !== t.style.transform;
        r.transformRule = s ? "transform" : o ? "msTransform" : "webkitTransform";
        return (
            (r.style = [
                ["left", "top"],
                ["right", "bottom"],
            ][r.dir][r.ort]),
            r
        );
    }
    function j(t, b, o) {
        var l,
            u,
            s,
            c,
            i,
            a,
            e,
            p,
            f = window.navigator.pointerEnabled
                ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                : window.navigator.msPointerEnabled
                ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
            d =
                window.CSS &&
                CSS.supports &&
                CSS.supports("touch-action", "none") &&
                (function () {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0;
                            },
                        });
                        window.addEventListener("test", null, e);
                    } catch (t) {}
                    return t;
                })(),
            h = t,
            y = b.spectrum,
            x = [],
            S = [],
            m = [],
            g = 0,
            v = {},
            w = t.ownerDocument,
            E = b.documentElement || w.documentElement,
            C = w.body,
            P = -1,
            N = 0,
            k = 1,
            U = 2,
            A = "rtl" === w.dir || 1 === b.ort ? 0 : 100;
        function V(t, e) {
            var r = w.createElement("div");
            return e && ht(r, e), t.appendChild(r), r;
        }
        function D(t, e) {
            var r = V(t, b.cssClasses.origin),
                n = V(r, b.cssClasses.handle);
            return (
                V(n, b.cssClasses.touchArea),
                n.setAttribute("data-handle", e),
                b.keyboardSupport &&
                    (n.setAttribute("tabindex", "0"),
                    n.addEventListener("keydown", function (t) {
                        return (function (t, e) {
                            if (O() || L(e)) return !1;
                            var r = ["Left", "Right"],
                                n = ["Down", "Up"],
                                i = ["PageDown", "PageUp"],
                                o = ["Home", "End"];
                            b.dir && !b.ort ? r.reverse() : b.ort && !b.dir && (n.reverse(), i.reverse());
                            var s,
                                a = t.key.replace("Arrow", ""),
                                l = a === i[0],
                                u = a === i[1],
                                c = a === n[0] || a === r[0] || l,
                                p = a === n[1] || a === r[1] || u,
                                f = a === o[0],
                                d = a === o[1];
                            if (!(c || p || f || d)) return !0;
                            if ((t.preventDefault(), p || c)) {
                                var h = b.keyboardPageMultiplier,
                                    m = c ? 0 : 1,
                                    g = at(e),
                                    v = g[m];
                                if (null === v) return !1;
                                !1 === v && (v = y.getDefaultStep(S[e], c, b.keyboardDefaultStep)), (u || l) && (v *= h), (v = Math.max(v, 1e-7)), (v *= c ? -1 : 1), (s = x[e] + v);
                            } else s = d ? b.spectrum.xVal[b.spectrum.xVal.length - 1] : b.spectrum.xVal[0];
                            return rt(e, y.toStepping(s), !0, !0), J("slide", e), J("update", e), J("change", e), J("set", e), !1;
                        })(t, e);
                    })),
                n.setAttribute("role", "slider"),
                n.setAttribute("aria-orientation", b.ort ? "vertical" : "horizontal"),
                0 === e ? ht(n, b.cssClasses.handleLower) : e === b.handles - 1 && ht(n, b.cssClasses.handleUpper),
                r
            );
        }
        function M(t, e) {
            return !!e && V(t, b.cssClasses.connect);
        }
        function r(t, e) {
            return !!b.tooltips[e] && V(t.firstChild, b.cssClasses.tooltip);
        }
        function O() {
            return h.hasAttribute("disabled");
        }
        function L(t) {
            return u[t].hasAttribute("disabled");
        }
        function z() {
            i &&
                (G("update.tooltips"),
                i.forEach(function (t) {
                    t && ut(t);
                }),
                (i = null));
        }
        function H() {
            z(),
                (i = u.map(r)),
                $("update.tooltips", function (t, e, r) {
                    if (i[e]) {
                        var n = t[e];
                        !0 !== b.tooltips[e] && (n = b.tooltips[e].to(r[e])), (i[e].innerHTML = n);
                    }
                });
        }
        function j(e, i, o) {
            var s = w.createElement("div"),
                a = [];
            (a[N] = b.cssClasses.valueNormal), (a[k] = b.cssClasses.valueLarge), (a[U] = b.cssClasses.valueSub);
            var l = [];
            (l[N] = b.cssClasses.markerNormal), (l[k] = b.cssClasses.markerLarge), (l[U] = b.cssClasses.markerSub);
            var u = [b.cssClasses.valueHorizontal, b.cssClasses.valueVertical],
                c = [b.cssClasses.markerHorizontal, b.cssClasses.markerVertical];
            function p(t, e) {
                var r = e === b.cssClasses.value,
                    n = r ? a : l;
                return e + " " + (r ? u : c)[b.ort] + " " + n[t];
            }
            return (
                ht(s, b.cssClasses.pips),
                ht(s, 0 === b.ort ? b.cssClasses.pipsHorizontal : b.cssClasses.pipsVertical),
                Object.keys(e).forEach(function (t) {
                    !(function (t, e, r) {
                        if ((r = i ? i(e, r) : r) !== P) {
                            var n = V(s, !1);
                            (n.className = p(r, b.cssClasses.marker)),
                                (n.style[b.style] = t + "%"),
                                N < r && (((n = V(s, !1)).className = p(r, b.cssClasses.value)), n.setAttribute("data-value", e), (n.style[b.style] = t + "%"), (n.innerHTML = o.to(e)));
                        }
                    })(t, e[t][0], e[t][1]);
                }),
                s
            );
        }
        function F() {
            c && (ut(c), (c = null));
        }
        function R(t) {
            F();
            var m,
                g,
                v,
                b,
                e,
                r,
                x,
                S,
                w,
                n = t.mode,
                i = t.density || 1,
                o = t.filter || !1,
                s = (function (t, e, r) {
                    if ("range" === t || "steps" === t) return y.xVal;
                    if ("count" === t) {
                        if (e < 2) throw new Error("noUiSlider (" + lt + "): 'values' (>= 2) required for mode 'count'.");
                        var n = e - 1,
                            i = 100 / n;
                        for (e = []; n--; ) e[n] = n * i;
                        e.push(100), (t = "positions");
                    }
                    return "positions" === t
                        ? e.map(function (t) {
                              return y.fromStepping(r ? y.getStep(t) : t);
                          })
                        : "values" === t
                        ? r
                            ? e.map(function (t) {
                                  return y.fromStepping(y.getStep(y.toStepping(t)));
                              })
                            : e
                        : void 0;
                })(n, t.values || !1, t.stepped || !1),
                a =
                    ((m = i),
                    (g = n),
                    (v = s),
                    (b = {}),
                    (e = y.xVal[0]),
                    (r = y.xVal[y.xVal.length - 1]),
                    (S = x = !1),
                    (w = 0),
                    (v = v
                        .slice()
                        .sort(function (t, e) {
                            return t - e;
                        })
                        .filter(function (t) {
                            return !this[t] && (this[t] = !0);
                        }, {}))[0] !== e && (v.unshift(e), (x = !0)),
                    v[v.length - 1] !== r && (v.push(r), (S = !0)),
                    v.forEach(function (t, e) {
                        var r,
                            n,
                            i,
                            o,
                            s,
                            a,
                            l,
                            u,
                            c,
                            p,
                            f = t,
                            d = v[e + 1],
                            h = "steps" === g;
                        if ((h && (r = y.xNumSteps[e]), r || (r = d - f), !1 !== f && void 0 !== d))
                            for (r = Math.max(r, 1e-7), n = f; n <= d; n = (n + r).toFixed(7) / 1) {
                                for (u = (s = (o = y.toStepping(n)) - w) / m, p = s / (c = Math.round(u)), i = 1; i <= c; i += 1) b[(a = w + i * p).toFixed(5)] = [y.fromStepping(a), 0];
                                (l = -1 < v.indexOf(n) ? k : h ? U : N), !e && x && n !== d && (l = 0), (n === d && S) || (b[o.toFixed(5)] = [n, l]), (w = o);
                            }
                    }),
                    b),
                l = t.format || { to: Math.round };
            return (c = h.appendChild(j(a, o, l)));
        }
        function T() {
            var t = l.getBoundingClientRect(),
                e = "offset" + ["Width", "Height"][b.ort];
            return 0 === b.ort ? t.width || l[e] : t.height || l[e];
        }
        function B(n, i, o, s) {
            var e = function (t) {
                    return (
                        !!(t = (function (t, e, r) {
                            var n,
                                i,
                                o = 0 === t.type.indexOf("touch"),
                                s = 0 === t.type.indexOf("mouse"),
                                a = 0 === t.type.indexOf("pointer");
                            0 === t.type.indexOf("MSPointer") && (a = !0);
                            if (o) {
                                var l = function (t) {
                                    return t.target === r || r.contains(t.target) || (t.target.shadowRoot && t.target.shadowRoot.contains(r));
                                };
                                if ("touchstart" === t.type) {
                                    var u = Array.prototype.filter.call(t.touches, l);
                                    if (1 < u.length) return !1;
                                    (n = u[0].pageX), (i = u[0].pageY);
                                } else {
                                    var c = Array.prototype.find.call(t.changedTouches, l);
                                    if (!c) return !1;
                                    (n = c.pageX), (i = c.pageY);
                                }
                            }
                            (e = e || gt(w)), (s || a) && ((n = t.clientX + e.x), (i = t.clientY + e.y));
                            return (t.pageOffset = e), (t.points = [n, i]), (t.cursor = s || a), t;
                        })(t, s.pageOffset, s.target || i)) &&
                        !(O() && !s.doNotReject) &&
                        ((e = h),
                        (r = b.cssClasses.tap),
                        !((e.classList ? e.classList.contains(r) : new RegExp("\\b" + r + "\\b").test(e.className)) && !s.doNotReject) &&
                            !(n === f.start && void 0 !== t.buttons && 1 < t.buttons) &&
                            (!s.hover || !t.buttons) &&
                            (d || t.preventDefault(), (t.calcPoint = t.points[b.ort]), void o(t, s)))
                    );
                    var e, r;
                },
                r = [];
            return (
                n.split(" ").forEach(function (t) {
                    i.addEventListener(t, e, !!d && { passive: !0 }), r.push([t, e]);
                }),
                r
            );
        }
        function q(t) {
            var e,
                r,
                n,
                i,
                o,
                s,
                a =
                    (100 *
                        (t -
                            ((e = l),
                            (r = b.ort),
                            (n = e.getBoundingClientRect()),
                            (i = e.ownerDocument),
                            (o = i.documentElement),
                            (s = gt(i)),
                            /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (s.x = 0),
                            r ? n.top + s.y - o.clientTop : n.left + s.x - o.clientLeft))) /
                    T();
            return (a = ft(a)), b.dir ? 100 - a : a;
        }
        function X(t, e) {
            "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && _(t, e);
        }
        function Y(t, e) {
            if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return _(t, e);
            var r = (b.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
            Z(0 < r, (100 * r) / e.baseSize, e.locations, e.handleNumbers);
        }
        function _(t, e) {
            e.handle && (mt(e.handle, b.cssClasses.active), (g -= 1)),
                e.listeners.forEach(function (t) {
                    E.removeEventListener(t[0], t[1]);
                }),
                0 === g && (mt(h, b.cssClasses.drag), et(), t.cursor && ((C.style.cursor = ""), C.removeEventListener("selectstart", ct))),
                e.handleNumbers.forEach(function (t) {
                    J("change", t), J("set", t), J("end", t);
                });
        }
        function I(t, e) {
            if (e.handleNumbers.some(L)) return !1;
            var r;
            1 === e.handleNumbers.length && ((r = u[e.handleNumbers[0]].children[0]), (g += 1), ht(r, b.cssClasses.active));
            t.stopPropagation();
            var n = [],
                i = B(f.move, E, Y, { target: t.target, handle: r, listeners: n, startCalcPoint: t.calcPoint, baseSize: T(), pageOffset: t.pageOffset, handleNumbers: e.handleNumbers, buttonsProperty: t.buttons, locations: S.slice() }),
                o = B(f.end, E, _, { target: t.target, handle: r, listeners: n, doNotReject: !0, handleNumbers: e.handleNumbers }),
                s = B("mouseout", E, X, { target: t.target, handle: r, listeners: n, doNotReject: !0, handleNumbers: e.handleNumbers });
            n.push.apply(n, i.concat(o, s)),
                t.cursor && ((C.style.cursor = getComputedStyle(t.target).cursor), 1 < u.length && ht(h, b.cssClasses.drag), C.addEventListener("selectstart", ct, !1)),
                e.handleNumbers.forEach(function (t) {
                    J("start", t);
                });
        }
        function n(t) {
            if (!t.buttons && !t.touches) return !1;
            t.stopPropagation();
            var i,
                o,
                s,
                e = q(t.calcPoint),
                r =
                    ((i = e),
                    (s = !(o = 100)),
                    u.forEach(function (t, e) {
                        if (!L(e)) {
                            var r = S[e],
                                n = Math.abs(r - i);
                            (n < o || (n <= o && r < i) || (100 === n && 100 === o)) && ((s = e), (o = n));
                        }
                    }),
                    s);
            if (!1 === r) return !1;
            b.events.snap || pt(h, b.cssClasses.tap, b.animationDuration), rt(r, e, !0, !0), et(), J("slide", r, !0), J("update", r, !0), J("change", r, !0), J("set", r, !0), b.events.snap && I(t, { handleNumbers: [r] });
        }
        function W(t) {
            var e = q(t.calcPoint),
                r = y.getStep(e),
                n = y.fromStepping(r);
            Object.keys(v).forEach(function (t) {
                "hover" === t.split(".")[0] &&
                    v[t].forEach(function (t) {
                        t.call(a, n);
                    });
            });
        }
        function $(t, e) {
            (v[t] = v[t] || []),
                v[t].push(e),
                "update" === t.split(".")[0] &&
                    u.forEach(function (t, e) {
                        J("update", e);
                    });
        }
        function G(t) {
            var n = t && t.split(".")[0],
                i = n && t.substring(n.length);
            Object.keys(v).forEach(function (t) {
                var e = t.split(".")[0],
                    r = t.substring(e.length);
                (n && n !== e) || (i && i !== r) || delete v[t];
            });
        }
        function J(r, n, i) {
            Object.keys(v).forEach(function (t) {
                var e = t.split(".")[0];
                r === e &&
                    v[t].forEach(function (t) {
                        t.call(a, x.map(b.format.to), n, x.slice(), i || !1, S.slice(), a);
                    });
            });
        }
        function K(t, e, r, n, i, o) {
            var s;
            return (
                1 < u.length &&
                    !b.events.unconstrained &&
                    (n && 0 < e && ((s = y.getAbsoluteDistance(t[e - 1], b.margin, 0)), (r = Math.max(r, s))), i && e < u.length - 1 && ((s = y.getAbsoluteDistance(t[e + 1], b.margin, 1)), (r = Math.min(r, s)))),
                1 < u.length && b.limit && (n && 0 < e && ((s = y.getAbsoluteDistance(t[e - 1], b.limit, 0)), (r = Math.min(r, s))), i && e < u.length - 1 && ((s = y.getAbsoluteDistance(t[e + 1], b.limit, 1)), (r = Math.max(r, s)))),
                b.padding && (0 === e && ((s = y.getAbsoluteDistance(0, b.padding[0], 0)), (r = Math.max(r, s))), e === u.length - 1 && ((s = y.getAbsoluteDistance(100, b.padding[1], 1)), (r = Math.min(r, s)))),
                !((r = ft((r = y.getStep(r)))) === t[e] && !o) && r
            );
        }
        function Q(t, e) {
            var r = b.ort;
            return (r ? e : t) + ", " + (r ? t : e);
        }
        function Z(t, n, r, e) {
            var i = r.slice(),
                o = [!t, t],
                s = [t, !t];
            (e = e.slice()),
                t && e.reverse(),
                1 < e.length
                    ? e.forEach(function (t, e) {
                          var r = K(i, t, i[t] + n, o[e], s[e], !1);
                          !1 === r ? (n = 0) : ((n = r - i[t]), (i[t] = r));
                      })
                    : (o = s = [!0]);
            var a = !1;
            e.forEach(function (t, e) {
                a = rt(t, r[t] + n, o[e], s[e]) || a;
            }),
                a &&
                    e.forEach(function (t) {
                        J("update", t), J("slide", t);
                    });
        }
        function tt(t, e) {
            return b.dir ? 100 - t - e : t;
        }
        function et() {
            m.forEach(function (t) {
                var e = 50 < S[t] ? -1 : 1,
                    r = 3 + (u.length + e * t);
                u[t].style.zIndex = r;
            });
        }
        function rt(t, e, r, n) {
            return (
                !1 !== (e = K(S, t, e, r, n, !1)) &&
                ((function (t, e) {
                    (S[t] = e), (x[t] = y.fromStepping(e));
                    var r = "translate(" + Q(10 * (tt(e, 0) - A) + "%", "0") + ")";
                    (u[t].style[b.transformRule] = r), nt(t), nt(t + 1);
                })(t, e),
                !0)
            );
        }
        function nt(t) {
            if (s[t]) {
                var e = 0,
                    r = 100;
                0 !== t && (e = S[t - 1]), t !== s.length - 1 && (r = S[t]);
                var n = r - e,
                    i = "translate(" + Q(tt(e, n) + "%", "0") + ")",
                    o = "scale(" + Q(n / 100, "1") + ")";
                s[t].style[b.transformRule] = i + " " + o;
            }
        }
        function it(t, e) {
            return null === t || !1 === t || void 0 === t ? S[e] : ("number" == typeof t && (t = String(t)), (t = b.format.from(t)), !1 === (t = y.toStepping(t)) || isNaN(t) ? S[e] : t);
        }
        function ot(t, e) {
            var r = dt(t),
                n = void 0 === S[0];
            (e = void 0 === e || !!e),
                b.animate && !n && pt(h, b.cssClasses.tap, b.animationDuration),
                m.forEach(function (t) {
                    rt(t, it(r[t], t), !0, !1);
                });
            for (var i = 1 === m.length ? 0 : 1; i < m.length; ++i)
                m.forEach(function (t) {
                    rt(t, S[t], !0, !0);
                });
            et(),
                m.forEach(function (t) {
                    J("update", t), null !== r[t] && e && J("set", t);
                });
        }
        function st() {
            var t = x.map(b.format.to);
            return 1 === t.length ? t[0] : t;
        }
        function at(t) {
            var e = S[t],
                r = y.getNearbySteps(e),
                n = x[t],
                i = r.thisStep.step,
                o = null;
            if (b.snap) return [n - r.stepBefore.startValue || null, r.stepAfter.startValue - n || null];
            !1 !== i && n + i > r.stepAfter.startValue && (i = r.stepAfter.startValue - n),
                (o = n > r.thisStep.startValue ? r.thisStep.step : !1 !== r.stepBefore.step && n - r.stepBefore.highestStep),
                100 === e ? (i = null) : 0 === e && (o = null);
            var s = y.countStepDecimals();
            return null !== i && !1 !== i && (i = Number(i.toFixed(s))), null !== o && !1 !== o && (o = Number(o.toFixed(s))), [o, i];
        }
        return (
            ht((e = h), b.cssClasses.target),
            0 === b.dir ? ht(e, b.cssClasses.ltr) : ht(e, b.cssClasses.rtl),
            0 === b.ort ? ht(e, b.cssClasses.horizontal) : ht(e, b.cssClasses.vertical),
            ht(e, "rtl" === getComputedStyle(e).direction ? b.cssClasses.textDirectionRtl : b.cssClasses.textDirectionLtr),
            (l = V(e, b.cssClasses.base)),
            (function (t, e) {
                var r = V(e, b.cssClasses.connects);
                (u = []), (s = []).push(M(r, t[0]));
                for (var n = 0; n < b.handles; n++) u.push(D(e, n)), (m[n] = n), s.push(M(r, t[n + 1]));
            })(b.connect, l),
            (p = b.events).fixed ||
                u.forEach(function (t, e) {
                    B(f.start, t.children[0], I, { handleNumbers: [e] });
                }),
            p.tap && B(f.start, l, n, {}),
            p.hover && B(f.move, l, W, { hover: !0 }),
            p.drag &&
                s.forEach(function (t, e) {
                    if (!1 !== t && 0 !== e && e !== s.length - 1) {
                        var r = u[e - 1],
                            n = u[e],
                            i = [t];
                        ht(t, b.cssClasses.draggable),
                            p.fixed && (i.push(r.children[0]), i.push(n.children[0])),
                            i.forEach(function (t) {
                                B(f.start, t, I, { handles: [r, n], handleNumbers: [e - 1, e] });
                            });
                    }
                }),
            ot(b.start),
            b.pips && R(b.pips),
            b.tooltips && H(),
            $("update", function (t, e, s, r, a) {
                m.forEach(function (t) {
                    var e = u[t],
                        r = K(S, t, 0, !0, !0, !0),
                        n = K(S, t, 100, !0, !0, !0),
                        i = a[t],
                        o = b.ariaFormat.to(s[t]);
                    (r = y.fromStepping(r).toFixed(1)),
                        (n = y.fromStepping(n).toFixed(1)),
                        (i = y.fromStepping(i).toFixed(1)),
                        e.children[0].setAttribute("aria-valuemin", r),
                        e.children[0].setAttribute("aria-valuemax", n),
                        e.children[0].setAttribute("aria-valuenow", i),
                        e.children[0].setAttribute("aria-valuetext", o);
                });
            }),
            (a = {
                destroy: function () {
                    for (var t in b.cssClasses) b.cssClasses.hasOwnProperty(t) && mt(h, b.cssClasses[t]);
                    for (; h.firstChild; ) h.removeChild(h.firstChild);
                    delete h.noUiSlider;
                },
                steps: function () {
                    return m.map(at);
                },
                on: $,
                off: G,
                get: st,
                set: ot,
                setHandle: function (t, e, r) {
                    if (!(0 <= (t = Number(t)) && t < m.length)) throw new Error("noUiSlider (" + lt + "): invalid handle number, got: " + t);
                    rt(t, it(e, t), !0, !0), J("update", t), r && J("set", t);
                },
                reset: function (t) {
                    ot(b.start, t);
                },
                __moveHandles: function (t, e, r) {
                    Z(t, e, S, r);
                },
                options: o,
                updateOptions: function (e, t) {
                    var r = st(),
                        n = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"];
                    n.forEach(function (t) {
                        void 0 !== e[t] && (o[t] = e[t]);
                    });
                    var i = vt(o);
                    n.forEach(function (t) {
                        void 0 !== e[t] && (b[t] = i[t]);
                    }),
                        (y = i.spectrum),
                        (b.margin = i.margin),
                        (b.limit = i.limit),
                        (b.padding = i.padding),
                        b.pips ? R(b.pips) : F(),
                        b.tooltips ? H() : z(),
                        (S = []),
                        ot(e.start || r, t);
                },
                target: h,
                removePips: F,
                removeTooltips: z,
                getTooltips: function () {
                    return i;
                },
                getOrigins: function () {
                    return u;
                },
                pips: R,
            })
        );
    }
    return {
        __spectrum: i,
        version: lt,
        cssClasses: d,
        create: function (t, e) {
            if (!t || !t.nodeName) throw new Error("noUiSlider (" + lt + "): create requires a single element, got: " + t);
            if (t.noUiSlider) throw new Error("noUiSlider (" + lt + "): Slider was already initialized.");
            var r = j(t, vt(e), e);
            return (t.noUiSlider = r);
        },
    };
});
$(function () {}),
    $(document).ready(function () {
        setTimeout(function () {
            AOS.init();
        }, 600),
            window.addEventListener("load", AOS.refresh),
            $(".main-slider,.payment-slider").slick({
                infinite: !0,
                arrows: !0,
                dots: !1,
                fade: !0,
                nextArrow:
                    '<button class="slick-arrow slick-next"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#owm32)"><path d="M10.8333 19.5L16.9502 13.3831C17.1618 13.1715 17.1618 12.8285 16.9502 12.6169L10.8333 6.5" stroke="white" stroke-width="2" stroke-linecap="round"/></g><defs><clipPath id="owm32"><rect width="26" height="26" fill="white" transform="matrix(4.37114e-08 1 1 -4.37114e-08 0 0)"/></clipPath></defs></svg></button>',
                prevArrow:
                    '<button class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 13.5L6.2652 9.2652C6.11872 9.11872 6.11872 8.88128 6.2652 8.7348L10.5 4.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg></button>',
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: !1,
                autoplaySpeed: 1e4,
                speed: 300,
                swipe: !1,
                responsive: [{ breakpoint: 768, settings: { adaptiveHeight: !0 } }],
            }),
            $(".main-slider").on("init", function (e, a) {
                AOS.init();
            }),
            $(".main-slider").on("afterChange", function (e, t, i, s) {
                $(".main-slide__2").hasClass("slick-active")
                    ? $(".header").addClass("header-hide")
                    : $(".main-slide__3").hasClass("slick-active")
                    ? (setTimeout(function () {
                          a.animate(0.68);
                      }, 200),
                      $(".header").removeClass("header-hide"))
                    : $(".header").removeClass("header-hide");
            }),
            $(".status").length &&
                setTimeout(function () {
                    a.animate(0.68);
                }, 200),
            $(window).width() <= 768 && $("html,body").css("min-height", $(window).height() + "px"),
            $(window).resize(function () {
                $(window).width() <= 768 && $("html,body").css("min-height", $(window).height() + "px");
            }),
            $(".main-social__wrap").on("click", function (e) {
                $(window).width() <= 768 && ($(this).hasClass("active") ? $(".main-social__wrap").removeClass("active") : ($(".main-social__wrap").removeClass("active"), $(this).addClass("active")));
            }),
            $(".main-social__wrap").hover(
                function () {
                    $(window).width() >= 768 && $(this).addClass("active");
                },
                function () {
                    $(window).width() >= 768 && $(this).removeClass("active");
                }
            ),
            $(".scrollbar-outer, .networks-main__wrap,.main-social__info-wrap").scrollbar(),
            $(window).width() <= 768 && $(".main-row").scrollbar(),
            $(".select").on("click", function (e) {
                if ($(this).hasClass("active")) {
                    var a = e.target,
                        t = $(this).find(".select-text"),
                        i = $(this).find(".select-value");
                    "LI" == a.tagName ? ($(t).text($(a).text()), $(i).val($(a).text())) : "A" == a.tagName && ($(t).html($(a).html()), $(i).val($(a).text())), $(this).removeClass("active");
                } else $(".select").removeClass("active"), $(this).addClass("active");
            }),
            $(document).on("click", function (e) {
                var a = $(".select");
                a.is(e.target) || 0 !== a.has(e.target).length || $(".select").removeClass("active");
            });
        var e = $(".arrow-top");
        if (
            ($(window).scroll(function () {
                $(this).scrollTop() > $(this).height() ? $(e).addClass("arrow-active") : $(e).removeClass("arrow-active");
            }),
            $(e).on("click", function () {
                $("html, body").stop().animate({ scrollTop: 0 }, "slow", "swing");
            }),
            $(".header-bar").on("click", function () {
                $(".header").toggleClass("header-active"), $(".header").hasClass("header-mob") ? $(".panel").toggleClass("active") : $(".header-menu").slideToggle();
            }),
            $(window).on("scroll", function () {
                $(this).scrollTop() > 0 ? $(".header").addClass("header-fixed") : $(".header").removeClass("header-fixed");
            }),
            $(".tab-list li a").on("click", function (e) {
                e.preventDefault(), $(".tab-list li a").removeClass("active"), $(".tab").removeClass("tab-active");
                var a = $(this).attr("href");
                $(a).addClass("tab-active"), $(this).addClass("active"), $(this).parents(".service-wrap").addClass("service-active");
            }),
            $(".service-tabs li a").on("click", function (e) {
                e.preventDefault(), $(".service-tabs li a").removeClass("active"), $(".service-col").removeClass("tab-active");
                var a = $(this).attr("href");
                $(a).addClass("tab-active"), $(this).addClass("active");
            }),
            $(".service-back").on("click", function () {
                $(this).parents(".service-wrap").removeClass("service-active");
            }),
            $(".accordeon .accordeon-block")
                .hide()
                .prev()
                .click(function () {
                    $(this).parents(".accordeon").hasClass("accordeon-active")
                        ? $(".accordeon").removeClass("accordeon-active")
                        : ($(".accordeon").removeClass("accordeon-active"), $(this).parents(".accordeon").addClass("accordeon-active")),
                        $(this).parents().find(".accordeon-block").not(this).slideUp().prev(),
                        $(this).next().not(":visible").slideDown().prev().parents();
                }),
            $(".payment-accordeon.accordeon-active").find(".payment-accordeon__block").slideDown(),
            $(".payment-accordeon__top").on("click", function () {
                $(this).parents(".payment-accordeon").hasClass("accordeon-active")
                    ? $(this).parents(".payment-accordeon__parents").find(".payment-accordeon").removeClass("accordeon-active").find(".payment-accordeon__block").slideUp()
                    : ($(this).parents(".payment-accordeon__parents").find(".payment-accordeon").removeClass("accordeon-active").find(".payment-accordeon__block").slideUp(),
                      $(this).parents(".payment-accordeon").addClass("accordeon-active").find(".payment-accordeon__block").slideDown());
            }),
            $("#statistics").length)
        ) {
            var a = new ProgressBar.SemiCircle(statistics, {
                color: "#aaa",
                strokeWidth: 4,
                trailWidth: 4,
                easing: "easeInOut",
                duration: 1400,
                text: { autoStyleContainer: !1 },
                from: { color: "#EAEAEA", width: 4 },
                to: { color: "#2945FF", width: 4 },
                step: function (e, a) {
                    a.path.setAttribute("stroke", e.color), a.path.setAttribute("stroke-width", e.width);
                    var t = Math.round(100 * a.value());
                    0 === t ? a.setText("") : a.setText(t + "<span>%</span>");
                },
            });
            a.text.style.fontFamily = '"Gilroy", Helvetica, sans-serif';
        }
        
        if (
            ($(".main-social").scroll(function () {
                console.log($(".main-social").scrollLeft());
            }),
            $("#slider1").length)
        ) {
            var t = $(".main-social").children().length,
                i = $(".main-social .main-social__col").width() + 1,
                s = $(".main-social").width(),
                o = i * t;
                n = o / t;
             /*
                t - кол-во внутренних блоков
                i - ширина одного внутреннего блока
                s - ширина обертки
                o - ширина всех внутренних блоков 
                n - 
             */ 
            
                
        
                noUiSlider.create(slider1, { 
                    start: 0, 
                    step: 0, 
                    animate: !1, 
                    connect: "lower", 
                    range: { min: 0, max: o }, 
                    decimals: 0 
                }),
                slider1.noUiSlider.on("slide", function (e, a) {
                    $(".main-social").animate({ scrollLeft: e }, 0);
                });

                
        }       
        $(".main-social").scrollbar({
            onScroll: function (e, a) {
                var mainSocialSlider = document.querySelector('.main-social');
                var sliderWidth = mainSocialSlider.scrollWidth;
                var lineWidth = document.querySelector('.noUi-connects').offsetWidth;
                var sliderStepPercent =  mainSocialSlider.scrollLeft / sliderWidth * 38
                var sliderStepPX = sliderStepPercent *   lineWidth / 100 
                slider1.noUiSlider.set(sliderStepPX);
                console.log(sliderWidth, mainSocialSlider.scrollLeft / sliderWidth )
            },
        });
        // $(document).ready(function () {
        //     $(".main-social-new").slick({
        //         infinite: false,
        //         arrows: false,
        //         dots: true,
        //         variableWidth: true,
        //     })
        // })
    });

    function modalControls(e){
        var body = document.querySelector('body');
        if (e.target.classList.contains('modal_btn')) {
            event.preventDefault()
            var modal = document.getElementById(e.target.getAttribute('data-target'));
            var text = e.target.getAttribute('data-comment');

            app.comment = text.replace(/(?:\r\n|\r|\n)/g, ' | ')
            modal.classList.add('active');
            body.classList.add('overlay');
        }
        if (e.target.classList.contains('overlay') || e.target.classList.contains('close')) {
            var modal = document.querySelector('.modal-new.active');
            modal.classList.remove('active');
            body.classList.remove('overlay');
        }
    } 
    document.addEventListener('click', modalControls)