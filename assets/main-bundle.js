(()=>{
    "use strict";
    var e = {
        21: (n,t,e)=>{
            e.d(t, {
                o: ()=>function(n) {
                    "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(n, 1) : document.addEventListener("DOMContentLoaded", n)
                }
                ,
                P: ()=>function(n) {
                    function l(n, t) {
                        return n << t | n >>> 32 - t
                    }
                    function s(n, t) {
                        var e = 2147483648 & n
                          , o = 2147483648 & t
                          , r = 1073741824 & n
                          , i = 1073741824 & t
                          , t = (1073741823 & n) + (1073741823 & t);
                        return r & i ? 2147483648 ^ t ^ e ^ o : r | i ? 1073741824 & t ? 3221225472 ^ t ^ e ^ o : 1073741824 ^ t ^ e ^ o : t ^ e ^ o
                    }
                    function t(n, t, e, o, r, i, a) {
                        return n = s(n, s(s(t & e | ~t & o, r), a)),
                        s(l(n, i), t)
                    }
                    function e(n, t, e, o, r, i, a) {
                        return n = s(n, s(s(t & o | e & ~o, r), a)),
                        s(l(n, i), t)
                    }
                    function o(n, t, e, o, r, i, a) {
                        return n = s(n, s(s(t ^ e ^ o, r), a)),
                        s(l(n, i), t)
                    }
                    function r(n, t, e, o, r, i, a) {
                        return n = s(n, s(s(e ^ (t | ~o), r), a)),
                        s(l(n, i), t)
                    }
                    function i(n) {
                        for (var t = "", e = "", o = 0; o <= 3; o++)
                            t += (e = "0" + (n >>> 8 * o & 255).toString(16)).substr(e.length - 2, 2);
                        return t
                    }
                    var a, d, c, A, p, m, C, g, u, b = Array();
                    for (n = function(n) {
                        n = n.replace(/\r\n/g, "\n");
                        for (var t = "", e = 0; e < n.length; e++) {
                            var o = n.charCodeAt(e);
                            o < 128 ? t += String.fromCharCode(o) : (127 < o && o < 2048 ? t += String.fromCharCode(o >> 6 | 192) : (t += String.fromCharCode(o >> 12 | 224),
                            t += String.fromCharCode(o >> 6 & 63 | 128)),
                            t += String.fromCharCode(63 & o | 128))
                        }
                        return t
                    }(n),
                    b = function(n) {
                        for (var t, e = n.length, o = 16 * (1 + ((o = e + 8) - o % 64) / 64), r = Array(o - 1), i = 0, a = 0; a < e; )
                            i = a % 4 * 8,
                            r[t = (a - a % 4) / 4] = r[t] | n.charCodeAt(a) << i,
                            a++;
                        return r[t = (a - a % 4) / 4] = r[t] | 128 << (i = a % 4 * 8),
                        r[o - 2] = e << 3,
                        r[o - 1] = e >>> 29,
                        r
                    }(n),
                    m = 1732584193,
                    C = 4023233417,
                    g = 2562383102,
                    u = 271733878,
                    a = 0; a < b.length; a += 16)
                        m = t(d = m, c = C, A = g, p = u, b[a + 0], 7, 3614090360),
                        u = t(u, m, C, g, b[a + 1], 12, 3905402710),
                        g = t(g, u, m, C, b[a + 2], 17, 606105819),
                        C = t(C, g, u, m, b[a + 3], 22, 3250441966),
                        m = t(m, C, g, u, b[a + 4], 7, 4118548399),
                        u = t(u, m, C, g, b[a + 5], 12, 1200080426),
                        g = t(g, u, m, C, b[a + 6], 17, 2821735955),
                        C = t(C, g, u, m, b[a + 7], 22, 4249261313),
                        m = t(m, C, g, u, b[a + 8], 7, 1770035416),
                        u = t(u, m, C, g, b[a + 9], 12, 2336552879),
                        g = t(g, u, m, C, b[a + 10], 17, 4294925233),
                        C = t(C, g, u, m, b[a + 11], 22, 2304563134),
                        m = t(m, C, g, u, b[a + 12], 7, 1804603682),
                        u = t(u, m, C, g, b[a + 13], 12, 4254626195),
                        g = t(g, u, m, C, b[a + 14], 17, 2792965006),
                        C = t(C, g, u, m, b[a + 15], 22, 1236535329),
                        m = e(m, C, g, u, b[a + 1], 5, 4129170786),
                        u = e(u, m, C, g, b[a + 6], 9, 3225465664),
                        g = e(g, u, m, C, b[a + 11], 14, 643717713),
                        C = e(C, g, u, m, b[a + 0], 20, 3921069994),
                        m = e(m, C, g, u, b[a + 5], 5, 3593408605),
                        u = e(u, m, C, g, b[a + 10], 9, 38016083),
                        g = e(g, u, m, C, b[a + 15], 14, 3634488961),
                        C = e(C, g, u, m, b[a + 4], 20, 3889429448),
                        m = e(m, C, g, u, b[a + 9], 5, 568446438),
                        u = e(u, m, C, g, b[a + 14], 9, 3275163606),
                        g = e(g, u, m, C, b[a + 3], 14, 4107603335),
                        C = e(C, g, u, m, b[a + 8], 20, 1163531501),
                        m = e(m, C, g, u, b[a + 13], 5, 2850285829),
                        u = e(u, m, C, g, b[a + 2], 9, 4243563512),
                        g = e(g, u, m, C, b[a + 7], 14, 1735328473),
                        C = e(C, g, u, m, b[a + 12], 20, 2368359562),
                        m = o(m, C, g, u, b[a + 5], 4, 4294588738),
                        u = o(u, m, C, g, b[a + 8], 11, 2272392833),
                        g = o(g, u, m, C, b[a + 11], 16, 1839030562),
                        C = o(C, g, u, m, b[a + 14], 23, 4259657740),
                        m = o(m, C, g, u, b[a + 1], 4, 2763975236),
                        u = o(u, m, C, g, b[a + 4], 11, 1272893353),
                        g = o(g, u, m, C, b[a + 7], 16, 4139469664),
                        C = o(C, g, u, m, b[a + 10], 23, 3200236656),
                        m = o(m, C, g, u, b[a + 13], 4, 681279174),
                        u = o(u, m, C, g, b[a + 0], 11, 3936430074),
                        g = o(g, u, m, C, b[a + 3], 16, 3572445317),
                        C = o(C, g, u, m, b[a + 6], 23, 76029189),
                        m = o(m, C, g, u, b[a + 9], 4, 3654602809),
                        u = o(u, m, C, g, b[a + 12], 11, 3873151461),
                        g = o(g, u, m, C, b[a + 15], 16, 530742520),
                        C = o(C, g, u, m, b[a + 2], 23, 3299628645),
                        m = r(m, C, g, u, b[a + 0], 6, 4096336452),
                        u = r(u, m, C, g, b[a + 7], 10, 1126891415),
                        g = r(g, u, m, C, b[a + 14], 15, 2878612391),
                        C = r(C, g, u, m, b[a + 5], 21, 4237533241),
                        m = r(m, C, g, u, b[a + 12], 6, 1700485571),
                        u = r(u, m, C, g, b[a + 3], 10, 2399980690),
                        g = r(g, u, m, C, b[a + 10], 15, 4293915773),
                        C = r(C, g, u, m, b[a + 1], 21, 2240044497),
                        m = r(m, C, g, u, b[a + 8], 6, 1873313359),
                        u = r(u, m, C, g, b[a + 15], 10, 4264355552),
                        g = r(g, u, m, C, b[a + 6], 15, 2734768916),
                        C = r(C, g, u, m, b[a + 13], 21, 1309151649),
                        m = r(m, C, g, u, b[a + 4], 6, 4149444226),
                        u = r(u, m, C, g, b[a + 11], 10, 3174756917),
                        g = r(g, u, m, C, b[a + 2], 15, 718787259),
                        C = r(C, g, u, m, b[a + 9], 21, 3951481745),
                        m = s(m, d),
                        C = s(C, c),
                        g = s(g, A),
                        u = s(u, p);
                    return (i(m) + i(C) + i(g) + i(u)).toLowerCase()
                }
            })
        }
        ,
        894: (n,t,e)=>{
            e.r(t);
            var t = e(21)
              , o = e(169);
            function r(n) {
                var t, e = "top-nav-collapse";
                n.classList.contains("navbar-hidden-top") && (50 < {
                    top: (t = (t = n).getBoundingClientRect()).top + window.scrollY,
                    left: t.left + window.scrollX
                }.top ? n.classList.add(e) : n.classList.remove(e))
            }
            (0,
            t.o)(()=>{
                const t = document.getElementById("navbar");
                var n = document.getElementsByClassName("nav-link");
                const e = document.getElementById("navbar-main-collapse");
                document.addEventListener("scroll", ()=>r(t)),
                document.getElementById("navbar").addEventListener("show.bs.collapse", n=>{
                    t.classList.add("is-expanded")
                }
                ),
                document.getElementById("navbar").addEventListener("hide.bs.collapse", n=>{
                    t.classList.remove("is-expanded")
                }
                ),
                [...n].forEach(n=>{
                    n.addEventListener("click", n=>{
                        const t = new o.UO(e,{
                            toggle: !1
                        });
                        t.hide()
                    }
                    )
                }
                )
            }
            )
        }
        ,
        855: (n,t,e)=>{
            e.r(t);
            var m = e(169)
              , l = e(21);
            async function C(n, t, e, o, r, i) {
                for (var a = 0; a < n.elements.length; a++)
                    if ("" === n.elements[a].value && n.elements[a].hasAttribute("required"))
                        return !1;
                if (t.innerHTML = s("info", "<strong>Just a sec!</strong> We're saving your details."),
                jekyll_globals.use_rsvp_code && (0,
                l.P)(e.value) !== jekyll_globals.rsvp_code_md5)
                    t.innerHTML = s("danger", "<strong>Sorry!</strong> The code you entered is incorrect.");
                else {
                    e = function(n) {
                        const t = function(n) {
                            const t = new FormData(n);
                            return [...t.entries()].reduce((n,[t,e])=>({
                                ...n,
                                [t]: e
                            }), {})
                        }(n);
                        return {
                            names: [t.name1, t.name2, t.name3, t.name4].filter(Boolean),
                            phone: t.phone,
                            songs: t.song,
                            attending: "yes" === t.rsvpRadio,
                            message: t.message,
                            code: t.invite_code
                        }
                    }(n);
                    try {
                        await async function(n) {
                            n = await fetch(jekyll_globals.rsvp_post_address, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "text/plain;charset=utf-8",
                                },
                                redirect: "follow",
                                body: JSON.stringify(n)
                            });
                            if (!n.ok)
                                throw new Error(`Error making RSVP POST: ${n.status} ${n.statusText}`)
                        }(e),
                        t.innerHTML = "",
                        o.hide(),
                        (e.attending ? r : i).show()
                    } catch (n) {
                        t.innerHTML = s("danger", "<strong>Sorry!</strong> There is some issue with the server."),
                        console.error(n)
                    }
                }
            }
            function s(n, t) {
                return '<div class="alert alert-' + n + '" role="alert">' + t + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            }
            (0,
            l.o)(()=>{
                const n = new m.UO(document.getElementById("guest-names-collapse"),{
                    toggle: !1
                })
                  , t = document.getElementById("primary-guest")
                  , e = new m.UO(document.getElementById("rsvp-warning-text"),{
                    toggle: !1
                })
                  , o = document.getElementById("rsvp-help-toggle")
                  , r = new m.UO(document.getElementById("rsvp-code-help-text"),{
                    toggle: !1
                })
                  , i = document.getElementById("rsvp-form")
                  , a = document.getElementById("phone-input")
                  , l = new m.UO(document.getElementById("phone-help"),{
                    toggle: !1
                })
                  , s = document.getElementById("alert-wrapper")
                  , d = document.getElementById("invite-code")
                  , c = new m.u_(document.getElementById("rsvp-modal"),{
                    keyboard: !0
                })
                  , A = new m.u_(document.getElementById("rsvp-yes-modal"),{
                    keyboard: !0
                })
                  , p = new m.u_(document.getElementById("rsvp-no-modal"),{
                    keyboard: !0
                });
                t.onblur = ()=>{
                    t.value || (n.hide(),
                    e.hide())
                }
                ,
                o.onclick = ()=>{
                    r.toggle()
                }
                ,
                i.onsubmit = n=>{
                    n.preventDefault(),
                    n.stopImmediatePropagation(),
                    C(i, s, d, c, A, p)
                }
            }
            )
        }
        ,
        169: (n,t,e)=>{
            e.d(t, {
                UO: ()=>Pt,
                u_: ()=>Ue
            });
            var r = {};
            e.r(r),
            e.d(r, {
                afterMain: ()=>c,
                afterRead: ()=>a,
                afterWrite: ()=>b,
                applyStyles: ()=>x,
                arrow: ()=>P,
                auto: ()=>_,
                basePlacements: ()=>z,
                beforeMain: ()=>l,
                beforeRead: ()=>o,
                beforeWrite: ()=>g,
                bottom: ()=>y,
                clippingParents: ()=>A,
                computeStyles: ()=>nn,
                createPopper: ()=>_n,
                createPopperBase: ()=>Fn,
                createPopperLite: ()=>zn,
                detectOverflow: ()=>bn,
                end: ()=>d,
                eventListeners: ()=>en,
                flip: ()=>fn,
                hide: ()=>vn,
                left: ()=>F,
                main: ()=>s,
                modifierPhases: ()=>f,
                offset: ()=>wn,
                placements: ()=>j,
                popper: ()=>m,
                popperGenerator: ()=>In,
                popperOffsets: ()=>$n,
                preventOverflow: ()=>xn,
                read: ()=>i,
                reference: ()=>C,
                right: ()=>I,
                start: ()=>S,
                top: ()=>D,
                variationPlacements: ()=>q,
                viewport: ()=>p,
                write: ()=>u
            });
            var D = "top"
              , y = "bottom"
              , I = "right"
              , F = "left"
              , _ = "auto"
              , z = [D, y, I, F]
              , S = "start"
              , d = "end"
              , A = "clippingParents"
              , p = "viewport"
              , m = "popper"
              , C = "reference"
              , q = z.reduce(function(n, t) {
                return n.concat([t + "-" + S, t + "-" + d])
            }, [])
              , j = [].concat(z, [_]).reduce(function(n, t) {
                return n.concat([t, t + "-" + S, t + "-" + d])
            }, [])
              , o = "beforeRead"
              , i = "read"
              , a = "afterRead"
              , l = "beforeMain"
              , s = "main"
              , c = "afterMain"
              , g = "beforeWrite"
              , u = "write"
              , b = "afterWrite"
              , f = [o, i, a, l, s, c, g, u, b];
            function h(n) {
                return n ? (n.nodeName || "").toLowerCase() : null
            }
            function B(n) {
                if (null == n)
                    return window;
                if ("[object Window]" === n.toString())
                    return n;
                n = n.ownerDocument;
                return n && n.defaultView || window
            }
            function v(n) {
                return n instanceof B(n).Element || n instanceof Element
            }
            function w(n) {
                return n instanceof B(n).HTMLElement || n instanceof HTMLElement
            }
            function $(n) {
                return "undefined" != typeof ShadowRoot && (n instanceof B(n).ShadowRoot || n instanceof ShadowRoot)
            }
            const x = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(n) {
                    var r = n.state;
                    Object.keys(r.elements).forEach(function(n) {
                        var t = r.styles[n] || {}
                          , e = r.attributes[n] || {}
                          , o = r.elements[n];
                        w(o) && h(o) && (Object.assign(o.style, t),
                        Object.keys(e).forEach(function(n) {
                            var t = e[n];
                            !1 === t ? o.removeAttribute(n) : o.setAttribute(n, !0 === t ? "" : t)
                        }))
                    })
                },
                effect: function(n) {
                    var o = n.state
                      , r = {
                        popper: {
                            position: o.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                    return Object.assign(o.elements.popper.style, r.popper),
                    o.styles = r,
                    o.elements.arrow && Object.assign(o.elements.arrow.style, r.arrow),
                    function() {
                        Object.keys(o.elements).forEach(function(n) {
                            var t = o.elements[n]
                              , e = o.attributes[n] || {}
                              , n = Object.keys((o.styles.hasOwnProperty(n) ? o.styles : r)[n]).reduce(function(n, t) {
                                return n[t] = "",
                                n
                            }, {});
                            w(t) && h(t) && (Object.assign(t.style, n),
                            Object.keys(e).forEach(function(n) {
                                t.removeAttribute(n)
                            }))
                        })
                    }
                },
                requires: ["computeStyles"]
            };
            function U(n) {
                return n.split("-")[0]
            }
            function E(n) {
                n = n.getBoundingClientRect();
                return {
                    width: n.width,
                    height: n.height,
                    top: n.top,
                    right: n.right,
                    bottom: n.bottom,
                    left: n.left,
                    x: n.left,
                    y: n.top
                }
            }
            function k(n) {
                var t = E(n)
                  , e = n.offsetWidth
                  , o = n.offsetHeight;
                return Math.abs(t.width - e) <= 1 && (e = t.width),
                Math.abs(t.height - o) <= 1 && (o = t.height),
                {
                    x: n.offsetLeft,
                    y: n.offsetTop,
                    width: e,
                    height: o
                }
            }
            function W(n, t) {
                var e = t.getRootNode && t.getRootNode();
                if (n.contains(t))
                    return !0;
                if (e && $(e)) {
                    var o = t;
                    do {
                        if (o && n.isSameNode(o))
                            return !0
                    } while (o = o.parentNode || o.host)
                }
                return !1
            }
            function M(n) {
                return B(n).getComputedStyle(n)
            }
            function O(n) {
                return ((v(n) ? n.ownerDocument : n.document) || window.document).documentElement
            }
            function L(n) {
                return "html" === h(n) ? n : n.assignedSlot || n.parentNode || ($(n) ? n.host : null) || O(n)
            }
            function G(n) {
                return w(n) && "fixed" !== M(n).position ? n.offsetParent : null
            }
            function T(n) {
                for (var t, e = B(n), o = G(n); o && (t = o,
                0 <= ["table", "td", "th"].indexOf(h(t))) && "static" === M(o).position; )
                    o = G(o);
                return (!o || "html" !== h(o) && ("body" !== h(o) || "static" !== M(o).position)) && (o || function(n) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox")
                      , e = -1 !== navigator.userAgent.indexOf("Trident");
                    if (e && w(n) && "fixed" === M(n).position)
                        return null;
                    for (var o = L(n); w(o) && ["html", "body"].indexOf(h(o)) < 0; ) {
                        var r = M(o);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter)
                            return o;
                        o = o.parentNode
                    }
                    return null
                }(n)) || e
            }
            function H(n) {
                return 0 <= ["top", "bottom"].indexOf(n) ? "x" : "y"
            }
            var N = Math.max
              , Y = Math.min
              , J = Math.round;
            function Q(n, t, e) {
                return N(n, Y(t, e))
            }
            function X() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }
            function R(n) {
                return Object.assign({}, X(), n)
            }
            function K(e, n) {
                return n.reduce(function(n, t) {
                    return n[t] = e,
                    n
                }, {})
            }
            const P = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(n) {
                    var t, e, o = n.state, r = n.name, i = n.options, a = o.elements.arrow, l = o.modifiersData.popperOffsets, s = U(o.placement), d = H(s), c = 0 <= [F, I].indexOf(s) ? "height" : "width";
                    a && l && (t = i.padding,
                    e = o,
                    n = R("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : K(t, z)),
                    s = k(a),
                    i = "y" === d ? D : F,
                    e = "y" === d ? y : I,
                    t = o.rects.reference[c] + o.rects.reference[d] - l[d] - o.rects.popper[c],
                    l = l[d] - o.rects.reference[d],
                    a = (a = T(a)) ? "y" === d ? a.clientHeight || 0 : a.clientWidth || 0 : 0,
                    i = n[i],
                    e = a - s[c] - n[e],
                    e = Q(i, l = a / 2 - s[c] / 2 + (t / 2 - l / 2), e),
                    o.modifiersData[r] = ((r = {})[d] = e,
                    r.centerOffset = e - l,
                    r))
                },
                effect: function(n) {
                    var t = n.state;
                    null != (n = void 0 === (n = n.options.element) ? "[data-popper-arrow]" : n) && ("string" != typeof n || (n = t.elements.popper.querySelector(n))) && W(t.elements.popper, n) && (t.elements.arrow = n)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };
            var V = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };
            function Z(n) {
                var t = n.popper
                  , e = n.popperRect
                  , o = n.placement
                  , r = n.offsets
                  , i = n.position
                  , a = n.gpuAcceleration
                  , l = n.adaptive
                  , s = n.roundOffsets
                  , d = !0 === s ? (m = (g = r).x,
                C = g.y,
                g = window.devicePixelRatio || 1,
                {
                    x: J(J(m * g) / g) || 0,
                    y: J(J(C * g) / g) || 0
                }) : "function" == typeof s ? s(r) : r
                  , c = d.x
                  , A = void 0 === c ? 0 : c
                  , p = d.y
                  , n = void 0 === p ? 0 : p
                  , m = r.hasOwnProperty("x")
                  , C = r.hasOwnProperty("y")
                  , g = F
                  , s = D
                  , c = window;
                l && (d = "clientHeight",
                p = "clientWidth",
                (r = T(t)) === B(t) && "static" !== M(r = O(t)).position && (d = "scrollHeight",
                p = "scrollWidth"),
                o === D && (s = y,
                n -= r[d] - e.height,
                n *= a ? 1 : -1),
                o === F && (g = I,
                A -= r[p] - e.width,
                A *= a ? 1 : -1));
                var l = Object.assign({
                    position: i
                }, l && V);
                return a ? Object.assign({}, l, ((a = {})[s] = C ? "0" : "",
                a[g] = m ? "0" : "",
                a.transform = (c.devicePixelRatio || 1) < 2 ? "translate(" + A + "px, " + n + "px)" : "translate3d(" + A + "px, " + n + "px, 0)",
                a)) : Object.assign({}, l, ((l = {})[s] = C ? n + "px" : "",
                l[g] = m ? A + "px" : "",
                l.transform = "",
                l))
            }
            const nn = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(n) {
                    var t = n.state
                      , e = n.options
                      , n = void 0 === (o = e.gpuAcceleration) || o
                      , o = void 0 === (o = e.adaptive) || o
                      , e = void 0 === (e = e.roundOffsets) || e
                      , n = {
                        placement: U(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: n
                    };
                    null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Z(Object.assign({}, n, {
                        offsets: t.modifiersData.popperOffsets,
                        position: t.options.strategy,
                        adaptive: o,
                        roundOffsets: e
                    })))),
                    null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Z(Object.assign({}, n, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: e
                    })))),
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-placement": t.placement
                    })
                },
                data: {}
            };
            var tn = {
                passive: !0
            };
            const en = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(n) {
                    var t = n.state
                      , e = n.instance
                      , o = n.options
                      , r = void 0 === (n = o.scroll) || n
                      , i = void 0 === (o = o.resize) || o
                      , a = B(t.elements.popper)
                      , l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return r && l.forEach(function(n) {
                        n.addEventListener("scroll", e.update, tn)
                    }),
                    i && a.addEventListener("resize", e.update, tn),
                    function() {
                        r && l.forEach(function(n) {
                            n.removeEventListener("scroll", e.update, tn)
                        }),
                        i && a.removeEventListener("resize", e.update, tn)
                    }
                },
                data: {}
            };
            var on = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            function rn(n) {
                return n.replace(/left|right|bottom|top/g, function(n) {
                    return on[n]
                })
            }
            var an = {
                start: "end",
                end: "start"
            };
            function ln(n) {
                return n.replace(/start|end/g, function(n) {
                    return an[n]
                })
            }
            function sn(n) {
                n = B(n);
                return {
                    scrollLeft: n.pageXOffset,
                    scrollTop: n.pageYOffset
                }
            }
            function dn(n) {
                return E(O(n)).left + sn(n).scrollLeft
            }
            function cn(n) {
                var t = M(n)
                  , e = t.overflow
                  , n = t.overflowX
                  , t = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(e + t + n)
            }
            function An(n, t) {
                void 0 === t && (t = []);
                var e = function n(t) {
                    return 0 <= ["html", "body", "#document"].indexOf(h(t)) ? t.ownerDocument.body : w(t) && cn(t) ? t : n(L(t))
                }(n)
                  , n = e === (null == (o = n.ownerDocument) ? void 0 : o.body)
                  , o = B(e)
                  , e = n ? [o].concat(o.visualViewport || [], cn(e) ? e : []) : e
                  , t = t.concat(e);
                return n ? t : t.concat(An(L(e)))
            }
            function pn(n) {
                return Object.assign({}, n, {
                    left: n.x,
                    top: n.y,
                    right: n.x + n.width,
                    bottom: n.y + n.height
                })
            }
            function mn(n, t) {
                return t === p ? pn((i = B(r = n),
                a = O(r),
                l = i.visualViewport,
                s = a.clientWidth,
                d = a.clientHeight,
                a = i = 0,
                l && (s = l.width,
                d = l.height,
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = l.offsetLeft,
                a = l.offsetTop)),
                {
                    width: s,
                    height: d,
                    x: i + dn(r),
                    y: a
                })) : w(t) ? ((o = E(e = t)).top = o.top + e.clientTop,
                o.left = o.left + e.clientLeft,
                o.bottom = o.top + e.clientHeight,
                o.right = o.left + e.clientWidth,
                o.width = e.clientWidth,
                o.height = e.clientHeight,
                o.x = o.left,
                o.y = o.top,
                o) : pn((r = O(n),
                a = O(r),
                t = sn(r),
                o = null == (e = r.ownerDocument) ? void 0 : e.body,
                n = N(a.scrollWidth, a.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                e = N(a.scrollHeight, a.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                r = -t.scrollLeft + dn(r),
                t = -t.scrollTop,
                "rtl" === M(o || a).direction && (r += N(a.clientWidth, o ? o.clientWidth : 0) - n),
                {
                    width: n,
                    height: e,
                    x: r,
                    y: t
                }));
                var e, o, r, i, a, l, s, d
            }
            function Cn(e, n, t) {
                var o, r, i, n = "clippingParents" === n ? (r = An(L(o = e)),
                v(i = 0 <= ["absolute", "fixed"].indexOf(M(o).position) && w(o) ? T(o) : o) ? r.filter(function(n) {
                    return v(n) && W(n, i) && "body" !== h(n)
                }) : []) : [].concat(n), n = [].concat(n, [t]), t = n[0], t = n.reduce(function(n, t) {
                    t = mn(e, t);
                    return n.top = N(t.top, n.top),
                    n.right = Y(t.right, n.right),
                    n.bottom = Y(t.bottom, n.bottom),
                    n.left = N(t.left, n.left),
                    n
                }, mn(e, t));
                return t.width = t.right - t.left,
                t.height = t.bottom - t.top,
                t.x = t.left,
                t.y = t.top,
                t
            }
            function gn(n) {
                return n.split("-")[1]
            }
            function un(n) {
                var t, e = n.reference, o = n.element, r = n.placement, n = r ? U(r) : null, r = r ? gn(r) : null, i = e.x + e.width / 2 - o.width / 2, a = e.y + e.height / 2 - o.height / 2;
                switch (n) {
                case D:
                    t = {
                        x: i,
                        y: e.y - o.height
                    };
                    break;
                case y:
                    t = {
                        x: i,
                        y: e.y + e.height
                    };
                    break;
                case I:
                    t = {
                        x: e.x + e.width,
                        y: a
                    };
                    break;
                case F:
                    t = {
                        x: e.x - o.width,
                        y: a
                    };
                    break;
                default:
                    t = {
                        x: e.x,
                        y: e.y
                    }
                }
                var l = n ? H(n) : null;
                if (null != l) {
                    var s = "y" === l ? "height" : "width";
                    switch (r) {
                    case S:
                        t[l] = t[l] - (e[s] / 2 - o[s] / 2);
                        break;
                    case d:
                        t[l] = t[l] + (e[s] / 2 - o[s] / 2)
                    }
                }
                return t
            }
            function bn(n, t) {
                var o, e = t = void 0 === t ? {} : t, r = e.placement, i = void 0 === r ? n.placement : r, a = e.boundary, l = void 0 === a ? A : a, s = e.rootBoundary, d = void 0 === s ? p : s, t = e.elementContext, r = void 0 === t ? m : t, a = e.altBoundary, s = void 0 !== a && a, t = e.padding, a = void 0 === t ? 0 : t, e = R("number" != typeof a ? a : K(a, z)), t = n.elements.reference, a = n.rects.popper, s = n.elements[s ? r === m ? C : m : r], l = Cn(v(s) ? s : s.contextElement || O(n.elements.popper), l, d), d = E(t), t = un({
                    reference: d,
                    element: a,
                    strategy: "absolute",
                    placement: i
                }), t = pn(Object.assign({}, a, t)), d = r === m ? t : d, c = {
                    top: l.top - d.top + e.top,
                    bottom: d.bottom - l.bottom + e.bottom,
                    left: l.left - d.left + e.left,
                    right: d.right - l.right + e.right
                }, n = n.modifiersData.offset;
                return r === m && n && (o = n[i],
                Object.keys(c).forEach(function(n) {
                    var t = 0 <= [I, y].indexOf(n) ? 1 : -1
                      , e = 0 <= [D, y].indexOf(n) ? "y" : "x";
                    c[n] += o[e] * t
                })),
                c
            }
            const fn = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(n) {
                    var A = n.state
                      , t = n.options
                      , e = n.name;
                    if (!A.modifiersData[e]._skip) {
                        for (var o = t.mainAxis, r = void 0 === o || o, n = t.altAxis, i = void 0 === n || n, o = t.fallbackPlacements, p = t.padding, m = t.boundary, C = t.rootBoundary, a = t.altBoundary, n = t.flipVariations, g = void 0 === n || n, u = t.allowedAutoPlacements, n = A.options.placement, t = U(n), t = o || (t === n || !g ? [rn(n)] : function(n) {
                            if (U(n) === _)
                                return [];
                            var t = rn(n);
                            return [ln(n), t, ln(t)]
                        }(n)), l = [n].concat(t).reduce(function(n, t) {
                            return n.concat(U(t) === _ ? (e = A,
                            r = o = void 0 === (o = {
                                placement: t,
                                boundary: m,
                                rootBoundary: C,
                                padding: p,
                                flipVariations: g,
                                allowedAutoPlacements: u
                            }) ? {} : o,
                            n = r.placement,
                            i = r.boundary,
                            a = r.rootBoundary,
                            l = r.padding,
                            o = r.flipVariations,
                            s = void 0 === (r = r.allowedAutoPlacements) ? j : r,
                            d = gn(n),
                            n = d ? o ? q : q.filter(function(n) {
                                return gn(n) === d
                            }) : z,
                            c = (o = 0 === (o = n.filter(function(n) {
                                return 0 <= s.indexOf(n)
                            })).length ? n : o).reduce(function(n, t) {
                                return n[t] = bn(e, {
                                    placement: t,
                                    boundary: i,
                                    rootBoundary: a,
                                    padding: l
                                })[U(t)],
                                n
                            }, {}),
                            Object.keys(c).sort(function(n, t) {
                                return c[n] - c[t]
                            })) : t);
                            var e, o, r, i, a, l, s, d, c
                        }, []), s = A.rects.reference, d = A.rects.popper, c = new Map, b = !0, f = l[0], h = 0; h < l.length; h++) {
                            var B = l[h]
                              , v = U(B)
                              , w = gn(B) === S
                              , $ = 0 <= [D, y].indexOf(v)
                              , x = $ ? "width" : "height"
                              , E = bn(A, {
                                placement: B,
                                boundary: m,
                                rootBoundary: C,
                                altBoundary: a,
                                padding: p
                            })
                              , $ = $ ? w ? I : F : w ? y : D;
                            s[x] > d[x] && ($ = rn($));
                            w = rn($),
                            x = [];
                            if (r && x.push(E[v] <= 0),
                            i && x.push(E[$] <= 0, E[w] <= 0),
                            x.every(function(n) {
                                return n
                            })) {
                                f = B,
                                b = !1;
                                break
                            }
                            c.set(B, x)
                        }
                        if (b)
                            for (var k = g ? 3 : 1; 0 < k; k--)
                                if ("break" === function(t) {
                                    var n = l.find(function(n) {
                                        n = c.get(n);
                                        if (n)
                                            return n.slice(0, t).every(function(n) {
                                                return n
                                            })
                                    });
                                    if (n)
                                        return f = n,
                                        "break"
                                }(k))
                                    break;
                        A.placement !== f && (A.modifiersData[e]._skip = !0,
                        A.placement = f,
                        A.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            };
            function hn(n, t, e) {
                return {
                    top: n.top - t.height - (e = void 0 === e ? {
                        x: 0,
                        y: 0
                    } : e).y,
                    right: n.right - t.width + e.x,
                    bottom: n.bottom - t.height + e.y,
                    left: n.left - t.width - e.x
                }
            }
            function Bn(t) {
                return [D, I, y, F].some(function(n) {
                    return 0 <= t[n]
                })
            }
            const vn = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(n) {
                    var t = n.state
                      , e = n.name
                      , o = t.rects.reference
                      , r = t.rects.popper
                      , i = t.modifiersData.preventOverflow
                      , a = bn(t, {
                        elementContext: "reference"
                    })
                      , n = bn(t, {
                        altBoundary: !0
                    })
                      , o = hn(a, o)
                      , n = hn(n, r, i)
                      , r = Bn(o)
                      , i = Bn(n);
                    t.modifiersData[e] = {
                        referenceClippingOffsets: o,
                        popperEscapeOffsets: n,
                        isReferenceHidden: r,
                        hasPopperEscaped: i
                    },
                    t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": r,
                        "data-popper-escaped": i
                    })
                }
            };
            const wn = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(n) {
                    var a = n.state
                      , t = n.options
                      , e = n.name
                      , l = void 0 === (o = t.offset) ? [0, 0] : o
                      , n = j.reduce(function(n, t) {
                        var e, o, r, i;
                        return n[t] = (e = t,
                        o = a.rects,
                        r = l,
                        i = U(e),
                        t = 0 <= [F, D].indexOf(i) ? -1 : 1,
                        r = (r = (e = "function" == typeof r ? r(Object.assign({}, o, {
                            placement: e
                        })) : r)[0]) || 0,
                        e = ((e = e[1]) || 0) * t,
                        0 <= [F, I].indexOf(i) ? {
                            x: e,
                            y: r
                        } : {
                            x: r,
                            y: e
                        }),
                        n
                    }, {})
                      , o = (t = n[a.placement]).x
                      , t = t.y;
                    null != a.modifiersData.popperOffsets && (a.modifiersData.popperOffsets.x += o,
                    a.modifiersData.popperOffsets.y += t),
                    a.modifiersData[e] = n
                }
            };
            const $n = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(n) {
                    var t = n.state
                      , n = n.name;
                    t.modifiersData[n] = un({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            };
            const xn = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(n) {
                    var t = n.state
                      , e = n.options
                      , o = n.name
                      , r = void 0 === (w = e.mainAxis) || w
                      , i = void 0 !== ($ = e.altAxis) && $
                      , a = e.boundary
                      , l = e.rootBoundary
                      , s = e.altBoundary
                      , d = e.padding
                      , c = e.tether
                      , A = void 0 === c || c
                      , p = e.tetherOffset
                      , m = void 0 === p ? 0 : p
                      , C = bn(t, {
                        boundary: a,
                        rootBoundary: l,
                        padding: d,
                        altBoundary: s
                    })
                      , g = U(t.placement)
                      , u = gn(t.placement)
                      , b = !u
                      , f = H(g)
                      , h = "x" === f ? "y" : "x"
                      , B = t.modifiersData.popperOffsets
                      , v = t.rects.reference
                      , n = t.rects.popper
                      , w = "function" == typeof m ? m(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : m
                      , $ = {
                        x: 0,
                        y: 0
                    };
                    B && ((r || i) && (c = "y" === f ? "height" : "width",
                    e = B[f],
                    a = B[f] + C[p = "y" === f ? D : F],
                    d = B[f] - C[l = "y" === f ? y : I],
                    s = A ? -n[c] / 2 : 0,
                    g = (u === S ? v : n)[c],
                    m = u === S ? -n[c] : -v[c],
                    u = t.elements.arrow,
                    n = A && u ? k(u) : {
                        width: 0,
                        height: 0
                    },
                    p = (u = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : X())[p],
                    l = u[l],
                    n = Q(0, v[c], n[c]),
                    p = b ? v[c] / 2 - s - n - p - w : g - n - p - w,
                    n = b ? -v[c] / 2 + s + n + l + w : m + n + l + w,
                    w = (l = t.elements.arrow && T(t.elements.arrow)) ? "y" === f ? l.clientTop || 0 : l.clientLeft || 0 : 0,
                    l = t.modifiersData.offset ? t.modifiersData.offset[t.placement][f] : 0,
                    w = B[f] + p - l - w,
                    l = B[f] + n - l,
                    r && (d = Q(A ? Y(a, w) : a, e, A ? N(d, l) : d),
                    B[f] = d,
                    $[f] = d - e),
                    i && (i = (e = B[h]) + C["x" === f ? D : F],
                    f = e - C["x" === f ? y : I],
                    f = Q(A ? Y(i, w) : i, e, A ? N(f, l) : f),
                    B[h] = f,
                    $[h] = f - e)),
                    t.modifiersData[o] = $)
                },
                requiresIfExists: ["offset"]
            };
            function En(n, t, e) {
                void 0 === e && (e = !1);
                var o = O(t)
                  , r = E(n)
                  , i = w(t)
                  , a = {
                    scrollLeft: 0,
                    scrollTop: 0
                }
                  , n = {
                    x: 0,
                    y: 0
                };
                return !i && e || ("body" === h(t) && !cn(o) || (a = (e = t) !== B(e) && w(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : sn(e)),
                w(t) ? ((n = E(t)).x += t.clientLeft,
                n.y += t.clientTop) : o && (n.x = dn(o))),
                {
                    x: r.left + a.scrollLeft - n.x,
                    y: r.top + a.scrollTop - n.y,
                    width: r.width,
                    height: r.height
                }
            }
            function kn(n) {
                var e = new Map
                  , o = new Set
                  , r = [];
                return n.forEach(function(n) {
                    e.set(n.name, n)
                }),
                n.forEach(function(n) {
                    o.has(n.name) || !function t(n) {
                        o.add(n.name),
                        [].concat(n.requires || [], n.requiresIfExists || []).forEach(function(n) {
                            o.has(n) || (n = e.get(n)) && t(n)
                        }),
                        r.push(n)
                    }(n)
                }),
                r
            }
            var Dn = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };
            function yn() {
                for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
                    t[e] = arguments[e];
                return !t.some(function(n) {
                    return !(n && "function" == typeof n.getBoundingClientRect)
                })
            }
            function In(n) {
                var t = n = void 0 === n ? {} : n
                  , n = t.defaultModifiers
                  , A = void 0 === n ? [] : n
                  , t = t.defaultOptions
                  , p = void 0 === t ? Dn : t;
                return function(o, r, t) {
                    void 0 === t && (t = p);
                    var e, i, a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, Dn, p),
                        modifiersData: {},
                        elements: {
                            reference: o,
                            popper: r
                        },
                        attributes: {},
                        styles: {}
                    }, l = [], s = !1, d = {
                        state: a,
                        setOptions: function(n) {
                            c(),
                            a.options = Object.assign({}, p, a.options, n),
                            a.scrollParents = {
                                reference: v(o) ? An(o) : o.contextElement ? An(o.contextElement) : [],
                                popper: An(r)
                            };
                            var e, t, n = (n = [].concat(A, a.options.modifiers),
                            t = n.reduce(function(n, t) {
                                var e = n[t.name];
                                return n[t.name] = e ? Object.assign({}, e, t, {
                                    options: Object.assign({}, e.options, t.options),
                                    data: Object.assign({}, e.data, t.data)
                                }) : t,
                                n
                            }, {}),
                            n = Object.keys(t).map(function(n) {
                                return t[n]
                            }),
                            e = kn(n),
                            f.reduce(function(n, t) {
                                return n.concat(e.filter(function(n) {
                                    return n.phase === t
                                }))
                            }, []));
                            return a.orderedModifiers = n.filter(function(n) {
                                return n.enabled
                            }),
                            a.orderedModifiers.forEach(function(n) {
                                var t = n.name
                                  , e = n.options
                                  , n = n.effect;
                                "function" == typeof n && (e = n({
                                    state: a,
                                    name: t,
                                    instance: d,
                                    options: void 0 === e ? {} : e
                                }),
                                l.push(e || function() {}
                                ))
                            }),
                            d.update()
                        },
                        forceUpdate: function() {
                            if (!s) {
                                var n = a.elements
                                  , t = n.reference
                                  , n = n.popper;
                                if (yn(t, n)) {
                                    a.rects = {
                                        reference: En(t, T(n), "fixed" === a.options.strategy),
                                        popper: k(n)
                                    },
                                    a.reset = !1,
                                    a.placement = a.options.placement,
                                    a.orderedModifiers.forEach(function(n) {
                                        return a.modifiersData[n.name] = Object.assign({}, n.data)
                                    });
                                    for (var e, o, r, i = 0; i < a.orderedModifiers.length; i++)
                                        0,
                                        !0 !== a.reset ? (e = (r = a.orderedModifiers[i]).fn,
                                        o = r.options,
                                        r = r.name,
                                        "function" == typeof e && (a = e({
                                            state: a,
                                            options: void 0 === o ? {} : o,
                                            name: r,
                                            instance: d
                                        }) || a)) : (a.reset = !1,
                                        i = -1)
                                }
                            }
                        },
                        update: (e = function() {
                            return new Promise(function(n) {
                                d.forceUpdate(),
                                n(a)
                            }
                            )
                        }
                        ,
                        function() {
                            return i = i || new Promise(function(n) {
                                Promise.resolve().then(function() {
                                    i = void 0,
                                    n(e())
                                })
                            }
                            )
                        }
                        ),
                        destroy: function() {
                            c(),
                            s = !0
                        }
                    };
                    return yn(o, r) && d.setOptions(t).then(function(n) {
                        !s && t.onFirstUpdate && t.onFirstUpdate(n)
                    }),
                    d;
                    function c() {
                        l.forEach(function(n) {
                            return n()
                        }),
                        l = []
                    }
                }
            }
            var Fn = In()
              , _n = In({
                defaultModifiers: [en, $n, nn, x, wn, fn, xn, P, vn]
            })
              , zn = In({
                defaultModifiers: [en, $n, nn, x]
            });
            /*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
            const Sn = {
                find(n, t=document.documentElement) {
                    return [].concat(...Element.prototype.querySelectorAll.call(t, n))
                },
                findOne(n, t=document.documentElement) {
                    return Element.prototype.querySelector.call(t, n)
                },
                children(n, t) {
                    return [].concat(...n.children).filter(n=>n.matches(t))
                },
                parents(n, t) {
                    const e = [];
                    let o = n.parentNode;
                    for (; o && o.nodeType === Node.ELEMENT_NODE && 3 !== o.nodeType; )
                        o.matches(t) && e.push(o),
                        o = o.parentNode;
                    return e
                },
                prev(n, t) {
                    let e = n.previousElementSibling;
                    for (; e; ) {
                        if (e.matches(t))
                            return [e];
                        e = e.previousElementSibling
                    }
                    return []
                },
                next(n, t) {
                    let e = n.nextElementSibling;
                    for (; e; ) {
                        if (e.matches(t))
                            return [e];
                        e = e.nextElementSibling
                    }
                    return []
                }
            }
              , qn = 1e3
              , jn = "transitionend"
              , Un = n=>{
                for (; n += Math.floor(1e6 * Math.random()),
                document.getElementById(n); )
                    ;
                return n
            }
              , Wn = t=>{
                let e = t.getAttribute("data-bs-target");
                if (!e || "#" === e) {
                    let n = t.getAttribute("href");
                    if (!n || !n.includes("#") && !n.startsWith("."))
                        return null;
                    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
                    e = n && "#" !== n ? n.trim() : null
                }
                return e
            }
              , Mn = n=>{
                n = Wn(n);
                return n && document.querySelector(n) ? n : null
            }
              , On = n=>{
                n = Wn(n);
                return n ? document.querySelector(n) : null
            }
              , Ln = n=>{
                n.dispatchEvent(new Event(jn))
            }
              , Gn = n=>!(!n || "object" != typeof n) && void 0 !== (n = void 0 !== n.jquery ? n[0] : n).nodeType
              , Tn = n=>Gn(n) ? n.jquery ? n[0] : n : "string" == typeof n && 0 < n.length ? Sn.findOne(n) : null
              , Hn = (r,i,a)=>{
                Object.keys(a).forEach(n=>{
                    var t, e = a[n], o = i[n], t = o && Gn(o) ? "element" : null == (t = o) ? `${t}` : {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(e).test(t))
                        throw new TypeError(`${r.toUpperCase()}: Option "${n}" provided type "${t}" but expected type "${e}".`)
                }
                )
            }
              , Nn = n=>!(!Gn(n) || 0 === n.getClientRects().length) && "visible" === getComputedStyle(n).getPropertyValue("visibility")
              , Yn = n=>!n || n.nodeType !== Node.ELEMENT_NODE || (!!n.classList.contains("disabled") || (void 0 !== n.disabled ? n.disabled : n.hasAttribute("disabled") && "false" !== n.getAttribute("disabled")))
              , Jn = n=>{
                if (!document.documentElement.attachShadow)
                    return null;
                if ("function" != typeof n.getRootNode)
                    return n instanceof ShadowRoot ? n : n.parentNode ? Jn(n.parentNode) : null;
                n = n.getRootNode();
                return n instanceof ShadowRoot ? n : null
            }
              , Qn = ()=>{}
              , Xn = n=>n.offsetHeight
              , Rn = ()=>{
                var n = window["jQuery"];
                return n && !document.body.hasAttribute("data-bs-no-jquery") ? n : null
            }
              , Kn = []
              , Pn = ()=>"rtl" === document.documentElement.dir;
            var Vn = o=>{
                var n;
                n = ()=>{
                    const n = Rn();
                    if (n) {
                        const t = o.NAME
                          , e = n.fn[t];
                        n.fn[t] = o.jQueryInterface,
                        n.fn[t].Constructor = o,
                        n.fn[t].noConflict = ()=>(n.fn[t] = e,
                        o.jQueryInterface)
                    }
                }
                ,
                "loading" === document.readyState ? (Kn.length || document.addEventListener("DOMContentLoaded", ()=>{
                    Kn.forEach(n=>n())
                }
                ),
                Kn.push(n)) : n()
            }
            ;
            const Zn = n=>{
                "function" == typeof n && n()
            }
              , nt = (e,o,n=!0)=>{
                if (n) {
                    n = (n=>{
                        if (!n)
                            return 0;
                        let {transitionDuration: t, transitionDelay: e} = window.getComputedStyle(n);
                        var o = Number.parseFloat(t)
                          , n = Number.parseFloat(e);
                        return o || n ? (t = t.split(",")[0],
                        e = e.split(",")[0],
                        (Number.parseFloat(t) + Number.parseFloat(e)) * qn) : 0
                    }
                    )(o) + 5;
                    let t = !1;
                    const r = ({target: n})=>{
                        n === o && (t = !0,
                        o.removeEventListener(jn, r),
                        Zn(e))
                    }
                    ;
                    o.addEventListener(jn, r),
                    setTimeout(()=>{
                        t || Ln(o)
                    }
                    , n)
                } else
                    Zn(e)
            }
              , tt = (n,t,e,o)=>{
                let r = n.indexOf(t);
                if (-1 === r)
                    return n[!e && o ? n.length - 1 : 0];
                t = n.length;
                return r += e ? 1 : -1,
                o && (r = (r + t) % t),
                n[Math.max(0, Math.min(r, t - 1))]
            }
              , et = /[^.]*(?=\..*)\.|.*/
              , ot = /\..*/
              , rt = /::\d+$/
              , it = {};
            let at = 1;
            const lt = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }
              , st = /^(mouseenter|mouseleave)/i
              , dt = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
            function ct(n, t) {
                return t && `${t}::${at++}` || n.uidEvent || at++
            }
            function At(n) {
                var t = ct(n);
                return n.uidEvent = t,
                it[t] = it[t] || {},
                it[t]
            }
            function pt(e, o, r=null) {
                var i = Object.keys(e);
                for (let n = 0, t = i.length; n < t; n++) {
                    var a = e[i[n]];
                    if (a.originalHandler === o && a.delegationSelector === r)
                        return a
                }
                return null
            }
            function mt(n, t, e) {
                var o = "string" == typeof t
                  , t = o ? e : t;
                let r = ut(n);
                return dt.has(r) || (r = n),
                [o, t, r]
            }
            function Ct(n, t, e, o, r) {
                if ("string" == typeof t && n) {
                    e || (e = o,
                    o = null),
                    st.test(t) && (l = t=>function(n) {
                        if (!n.relatedTarget || n.relatedTarget !== n.delegateTarget && !n.delegateTarget.contains(n.relatedTarget))
                            return t.call(this, n)
                    }
                    ,
                    o ? o = l(o) : e = l(e));
                    var [i,a,l] = mt(t, e, o);
                    const m = At(n)
                      , C = m[l] || (m[l] = {})
                      , g = pt(C, a, i ? e : null);
                    if (g)
                        g.oneOff = g.oneOff && r;
                    else {
                        var s, d, c, A, p, t = ct(a, t.replace(et, ""));
                        const u = i ? (c = n,
                        A = e,
                        p = o,
                        function e(o) {
                            var r = c.querySelectorAll(A);
                            for (let t = o["target"]; t && t !== this; t = t.parentNode)
                                for (let n = r.length; n--; )
                                    if (r[n] === t)
                                        return o.delegateTarget = t,
                                        e.oneOff && bt.off(c, o.type, A, p),
                                        p.apply(t, [o]);
                            return null
                        }
                        ) : (s = n,
                        d = e,
                        function n(t) {
                            return t.delegateTarget = s,
                            n.oneOff && bt.off(s, t.type, d),
                            d.apply(s, [t])
                        }
                        );
                        u.delegationSelector = i ? e : null,
                        u.originalHandler = a,
                        u.oneOff = r,
                        u.uidEvent = t,
                        C[t] = u,
                        n.addEventListener(l, u, i)
                    }
                }
            }
            function gt(n, t, e, o, r) {
                o = pt(t[e], o, r);
                o && (n.removeEventListener(e, o, Boolean(r)),
                delete t[e][o.uidEvent])
            }
            function ut(n) {
                return n = n.replace(ot, ""),
                lt[n] || n
            }
            const bt = {
                on(n, t, e, o) {
                    Ct(n, t, e, o, !1)
                },
                one(n, t, e, o) {
                    Ct(n, t, e, o, !0)
                },
                off(e, o, n, t) {
                    if ("string" == typeof o && e) {
                        const [r,i,a] = mt(o, n, t)
                          , l = a !== o
                          , s = At(e);
                        t = o.startsWith(".");
                        if (void 0 !== i)
                            return s && s[a] ? void gt(e, s, a, i, r ? n : null) : void 0;
                        t && Object.keys(s).forEach(n=>{
                            !function(t, e, o, r) {
                                const i = e[o] || {};
                                Object.keys(i).forEach(n=>{
                                    n.includes(r) && (n = i[n],
                                    gt(t, e, o, n.originalHandler, n.delegationSelector))
                                }
                                )
                            }(e, s, n, o.slice(1))
                        }
                        );
                        const d = s[a] || {};
                        Object.keys(d).forEach(n=>{
                            var t = n.replace(rt, "");
                            l && !o.includes(t) || (n = d[n],
                            gt(e, s, a, n.originalHandler, n.delegationSelector))
                        }
                        )
                    }
                },
                trigger(n, t, e) {
                    if ("string" != typeof t || !n)
                        return null;
                    const o = Rn();
                    var r = ut(t)
                      , i = t !== r
                      , a = dt.has(r);
                    let l, s = !0, d = !0, c = !1, A = null;
                    return i && o && (l = o.Event(t, e),
                    o(n).trigger(l),
                    s = !l.isPropagationStopped(),
                    d = !l.isImmediatePropagationStopped(),
                    c = l.isDefaultPrevented()),
                    a ? (A = document.createEvent("HTMLEvents"),
                    A.initEvent(r, s, !0)) : A = new CustomEvent(t,{
                        bubbles: s,
                        cancelable: !0
                    }),
                    void 0 !== e && Object.keys(e).forEach(n=>{
                        Object.defineProperty(A, n, {
                            get() {
                                return e[n]
                            }
                        })
                    }
                    ),
                    c && A.preventDefault(),
                    d && n.dispatchEvent(A),
                    A.defaultPrevented && void 0 !== l && l.preventDefault(),
                    A
                }
            }
              , ft = new Map;
            var ht = function(n, t, e) {
                ft.has(n) || ft.set(n, new Map);
                const o = ft.get(n);
                o.has(t) || 0 === o.size ? o.set(t, e) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`)
            }
              , Bt = function(n, t) {
                return ft.has(n) && ft.get(n).get(t) || null
            }
              , vt = function(n, t) {
                if (ft.has(n)) {
                    const e = ft.get(n);
                    e.delete(t),
                    0 === e.size && ft.delete(n)
                }
            };
            class wt {
                constructor(n) {
                    (n = Tn(n)) && (this._element = n,
                    ht(this._element, this.constructor.DATA_KEY, this))
                }
                dispose() {
                    vt(this._element, this.constructor.DATA_KEY),
                    bt.off(this._element, this.constructor.EVENT_KEY),
                    Object.getOwnPropertyNames(this).forEach(n=>{
                        this[n] = null
                    }
                    )
                }
                _queueCallback(n, t, e=!0) {
                    nt(n, t, e)
                }
                static getInstance(n) {
                    return Bt(n, this.DATA_KEY)
                }
                static getOrCreateInstance(n, t={}) {
                    return this.getInstance(n) || new this(n,"object" == typeof t ? t : null)
                }
                static get VERSION() {
                    return "5.0.2"
                }
                static get NAME() {
                    throw new Error('You have to implement the static method "NAME", for each component!')
                }
                static get DATA_KEY() {
                    return `bs.${this.NAME}`
                }
                static get EVENT_KEY() {
                    return `.${this.DATA_KEY}`
                }
            }
            class $t extends wt {
                static get NAME() {
                    return "alert"
                }
                close(n) {
                    var t = n ? this._getRootElement(n) : this._element
                      , n = this._triggerCloseEvent(t);
                    null === n || n.defaultPrevented || this._removeElement(t)
                }
                _getRootElement(n) {
                    return On(n) || n.closest(".alert")
                }
                _triggerCloseEvent(n) {
                    return bt.trigger(n, "close.bs.alert")
                }
                _removeElement(n) {
                    n.classList.remove("show");
                    var t = n.classList.contains("fade");
                    this._queueCallback(()=>this._destroyElement(n), n, t)
                }
                _destroyElement(n) {
                    n.remove(),
                    bt.trigger(n, "closed.bs.alert")
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = $t.getOrCreateInstance(this);
                        "close" === t && n[t](this)
                    })
                }
                static handleDismiss(t) {
                    return function(n) {
                        n && n.preventDefault(),
                        t.close(this)
                    }
                }
            }
            bt.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', $t.handleDismiss(new $t)),
            Vn($t);
            const xt = '[data-bs-toggle="button"]';
            class Et extends wt {
                static get NAME() {
                    return "button"
                }
                toggle() {
                    this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = Et.getOrCreateInstance(this);
                        "toggle" === t && n[t]()
                    })
                }
            }
            function kt(n) {
                return "true" === n || "false" !== n && (n === Number(n).toString() ? Number(n) : "" === n || "null" === n ? null : n)
            }
            function Dt(n) {
                return n.replace(/[A-Z]/g, n=>`-${n.toLowerCase()}`)
            }
            bt.on(document, "click.bs.button.data-api", xt, n=>{
                n.preventDefault();
                n = n.target.closest(xt);
                const t = Et.getOrCreateInstance(n);
                t.toggle()
            }
            ),
            Vn(Et);
            const yt = {
                setDataAttribute(n, t, e) {
                    n.setAttribute(`data-bs-${Dt(t)}`, e)
                },
                removeDataAttribute(n, t) {
                    n.removeAttribute(`data-bs-${Dt(t)}`)
                },
                getDataAttributes(e) {
                    if (!e)
                        return {};
                    const o = {};
                    return Object.keys(e.dataset).filter(n=>n.startsWith("bs")).forEach(n=>{
                        let t = n.replace(/^bs/, "");
                        t = t.charAt(0).toLowerCase() + t.slice(1, t.length),
                        o[t] = kt(e.dataset[n])
                    }
                    ),
                    o
                },
                getDataAttribute(n, t) {
                    return kt(n.getAttribute(`data-bs-${Dt(t)}`))
                },
                offset(n) {
                    n = n.getBoundingClientRect();
                    return {
                        top: n.top + document.body.scrollTop,
                        left: n.left + document.body.scrollLeft
                    }
                },
                position(n) {
                    return {
                        top: n.offsetTop,
                        left: n.offsetLeft
                    }
                }
            }
              , It = "carousel";
            var Ft = ".bs.carousel"
              , t = ".data-api";
            const _t = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0
            }
              , zt = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            }
              , St = "next"
              , qt = "prev"
              , jt = "left"
              , Ut = "right"
              , Wt = {
                ArrowLeft: Ut,
                ArrowRight: jt
            }
              , Mt = `slid${Ft}`;
            const Ot = "active"
              , Lt = ".active.carousel-item";
            class Gt extends wt {
                constructor(n, t) {
                    super(n),
                    this._items = null,
                    this._interval = null,
                    this._activeElement = null,
                    this._isPaused = !1,
                    this._isSliding = !1,
                    this.touchTimeout = null,
                    this.touchStartX = 0,
                    this.touchDeltaX = 0,
                    this._config = this._getConfig(t),
                    this._indicatorsElement = Sn.findOne(".carousel-indicators", this._element),
                    this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
                    this._pointerEvent = Boolean(window.PointerEvent),
                    this._addEventListeners()
                }
                static get Default() {
                    return _t
                }
                static get NAME() {
                    return It
                }
                next() {
                    this._slide(St)
                }
                nextWhenVisible() {
                    !document.hidden && Nn(this._element) && this.next()
                }
                prev() {
                    this._slide(qt)
                }
                pause(n) {
                    n || (this._isPaused = !0),
                    Sn.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Ln(this._element),
                    this.cycle(!0)),
                    clearInterval(this._interval),
                    this._interval = null
                }
                cycle(n) {
                    n || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval),
                    this._interval = null),
                    this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }
                to(n) {
                    this._activeElement = Sn.findOne(Lt, this._element);
                    var t = this._getItemIndex(this._activeElement);
                    if (!(n > this._items.length - 1 || n < 0))
                        if (this._isSliding)
                            bt.one(this._element, Mt, ()=>this.to(n));
                        else {
                            if (t === n)
                                return this.pause(),
                                void this.cycle();
                            t = t < n ? St : qt;
                            this._slide(t, this._items[n])
                        }
                }
                _getConfig(n) {
                    return n = {
                        ..._t,
                        ...yt.getDataAttributes(this._element),
                        ..."object" == typeof n ? n : {}
                    },
                    Hn(It, n, zt),
                    n
                }
                _handleSwipe() {
                    var n = Math.abs(this.touchDeltaX);
                    n <= 40 || (n = n / this.touchDeltaX,
                    this.touchDeltaX = 0,
                    n && this._slide(0 < n ? Ut : jt))
                }
                _addEventListeners() {
                    this._config.keyboard && bt.on(this._element, "keydown.bs.carousel", n=>this._keydown(n)),
                    "hover" === this._config.pause && (bt.on(this._element, "mouseenter.bs.carousel", n=>this.pause(n)),
                    bt.on(this._element, "mouseleave.bs.carousel", n=>this.cycle(n))),
                    this._config.touch && this._touchSupported && this._addTouchEventListeners()
                }
                _addTouchEventListeners() {
                    const t = n=>{
                        !this._pointerEvent || "pen" !== n.pointerType && "touch" !== n.pointerType ? this._pointerEvent || (this.touchStartX = n.touches[0].clientX) : this.touchStartX = n.clientX
                    }
                      , e = n=>{
                        this.touchDeltaX = n.touches && 1 < n.touches.length ? 0 : n.touches[0].clientX - this.touchStartX
                    }
                      , o = n=>{
                        !this._pointerEvent || "pen" !== n.pointerType && "touch" !== n.pointerType || (this.touchDeltaX = n.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause && (this.pause(),
                        this.touchTimeout && clearTimeout(this.touchTimeout),
                        this.touchTimeout = setTimeout(n=>this.cycle(n), 500 + this._config.interval))
                    }
                    ;
                    Sn.find(".carousel-item img", this._element).forEach(n=>{
                        bt.on(n, "dragstart.bs.carousel", n=>n.preventDefault())
                    }
                    ),
                    this._pointerEvent ? (bt.on(this._element, "pointerdown.bs.carousel", n=>t(n)),
                    bt.on(this._element, "pointerup.bs.carousel", n=>o(n)),
                    this._element.classList.add("pointer-event")) : (bt.on(this._element, "touchstart.bs.carousel", n=>t(n)),
                    bt.on(this._element, "touchmove.bs.carousel", n=>e(n)),
                    bt.on(this._element, "touchend.bs.carousel", n=>o(n)))
                }
                _keydown(n) {
                    var t;
                    /input|textarea/i.test(n.target.tagName) || (t = Wt[n.key]) && (n.preventDefault(),
                    this._slide(t))
                }
                _getItemIndex(n) {
                    return this._items = n && n.parentNode ? Sn.find(".carousel-item", n.parentNode) : [],
                    this._items.indexOf(n)
                }
                _getItemByOrder(n, t) {
                    n = n === St;
                    return tt(this._items, t, n, this._config.wrap)
                }
                _triggerSlideEvent(n, t) {
                    var e = this._getItemIndex(n)
                      , o = this._getItemIndex(Sn.findOne(Lt, this._element));
                    return bt.trigger(this._element, "slide.bs.carousel", {
                        relatedTarget: n,
                        direction: t,
                        from: o,
                        to: e
                    })
                }
                _setActiveIndicatorElement(t) {
                    if (this._indicatorsElement) {
                        const n = Sn.findOne(".active", this._indicatorsElement);
                        n.classList.remove(Ot),
                        n.removeAttribute("aria-current");
                        const e = Sn.find("[data-bs-target]", this._indicatorsElement);
                        for (let n = 0; n < e.length; n++)
                            if (Number.parseInt(e[n].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                                e[n].classList.add(Ot),
                                e[n].setAttribute("aria-current", "true");
                                break
                            }
                    }
                }
                _updateInterval() {
                    const n = this._activeElement || Sn.findOne(Lt, this._element);
                    var t;
                    n && ((t = Number.parseInt(n.getAttribute("data-bs-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval)
                }
                _slide(n, t) {
                    var e = this._directionToOrder(n);
                    const o = Sn.findOne(Lt, this._element)
                      , r = this._getItemIndex(o)
                      , i = t || this._getItemByOrder(e, o)
                      , a = this._getItemIndex(i);
                    n = Boolean(this._interval),
                    t = e === St;
                    const l = t ? "carousel-item-start" : "carousel-item-end"
                      , s = t ? "carousel-item-next" : "carousel-item-prev"
                      , d = this._orderToDirection(e);
                    if (i && i.classList.contains(Ot))
                        this._isSliding = !1;
                    else if (!this._isSliding) {
                        e = this._triggerSlideEvent(i, d);
                        if (!e.defaultPrevented && o && i) {
                            this._isSliding = !0,
                            n && this.pause(),
                            this._setActiveIndicatorElement(i),
                            this._activeElement = i;
                            const c = ()=>{
                                bt.trigger(this._element, Mt, {
                                    relatedTarget: i,
                                    direction: d,
                                    from: r,
                                    to: a
                                })
                            }
                            ;
                            this._element.classList.contains("slide") ? (i.classList.add(s),
                            Xn(i),
                            o.classList.add(l),
                            i.classList.add(l),
                            this._queueCallback(()=>{
                                i.classList.remove(l, s),
                                i.classList.add(Ot),
                                o.classList.remove(Ot, s, l),
                                this._isSliding = !1,
                                setTimeout(c, 0)
                            }
                            , o, !0)) : (o.classList.remove(Ot),
                            i.classList.add(Ot),
                            this._isSliding = !1,
                            c()),
                            n && this.cycle()
                        }
                    }
                }
                _directionToOrder(n) {
                    return [Ut, jt].includes(n) ? Pn() ? n === jt ? qt : St : n === jt ? St : qt : n
                }
                _orderToDirection(n) {
                    return [St, qt].includes(n) ? Pn() ? n === qt ? jt : Ut : n === qt ? Ut : jt : n
                }
                static carouselInterface(n, t) {
                    const e = Gt.getOrCreateInstance(n, t);
                    let o = e["_config"];
                    "object" == typeof t && (o = {
                        ...o,
                        ...t
                    });
                    n = "string" == typeof t ? t : o.slide;
                    if ("number" == typeof t)
                        e.to(t);
                    else if ("string" == typeof n) {
                        if (void 0 === e[n])
                            throw new TypeError(`No method named "${n}"`);
                        e[n]()
                    } else
                        o.interval && o.ride && (e.pause(),
                        e.cycle())
                }
                static jQueryInterface(n) {
                    return this.each(function() {
                        Gt.carouselInterface(this, n)
                    })
                }
                static dataApiClickHandler(n) {
                    const t = On(this);
                    if (t && t.classList.contains("carousel")) {
                        const o = {
                            ...yt.getDataAttributes(t),
                            ...yt.getDataAttributes(this)
                        };
                        var e = this.getAttribute("data-bs-slide-to");
                        e && (o.interval = !1),
                        Gt.carouselInterface(t, o),
                        e && Gt.getInstance(t).to(e),
                        n.preventDefault()
                    }
                }
            }
            bt.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Gt.dataApiClickHandler),
            bt.on(window, "load.bs.carousel.data-api", ()=>{
                var e = Sn.find('[data-bs-ride="carousel"]');
                for (let n = 0, t = e.length; n < t; n++)
                    Gt.carouselInterface(e[n], Gt.getInstance(e[n]))
            }
            ),
            Vn(Gt);
            const Tt = "collapse"
              , Ht = "bs.collapse";
            e = `.${Ht}`;
            const Nt = {
                toggle: !0,
                parent: ""
            }
              , Yt = {
                toggle: "boolean",
                parent: "(string|element)"
            };
            const Jt = "show"
              , Qt = "collapse"
              , Xt = "collapsing"
              , Rt = "collapsed"
              , Kt = '[data-bs-toggle="collapse"]';
            class Pt extends wt {
                constructor(n, t) {
                    super(n),
                    this._isTransitioning = !1,
                    this._config = this._getConfig(t),
                    this._triggerArray = Sn.find(`${Kt}[href="#${this._element.id}"],` + `${Kt}[data-bs-target="#${this._element.id}"]`);
                    var e = Sn.find(Kt);
                    for (let n = 0, t = e.length; n < t; n++) {
                        var o = e[n]
                          , r = Mn(o)
                          , i = Sn.find(r).filter(n=>n === this._element);
                        null !== r && i.length && (this._selector = r,
                        this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null,
                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                    this._config.toggle && this.toggle()
                }
                static get Default() {
                    return Nt
                }
                static get NAME() {
                    return Tt
                }
                toggle() {
                    this._element.classList.contains(Jt) ? this.hide() : this.show()
                }
                show() {
                    if (!this._isTransitioning && !this._element.classList.contains(Jt)) {
                        let n, t;
                        this._parent && (n = Sn.find(".show, .collapsing", this._parent).filter(n=>"string" == typeof this._config.parent ? n.getAttribute("data-bs-parent") === this._config.parent : n.classList.contains(Qt)),
                        0 === n.length && (n = null));
                        const o = Sn.findOne(this._selector);
                        if (n) {
                            var e = n.find(n=>o !== n);
                            if (t = e ? Pt.getInstance(e) : null,
                            t && t._isTransitioning)
                                return
                        }
                        if (!bt.trigger(this._element, "show.bs.collapse").defaultPrevented) {
                            n && n.forEach(n=>{
                                o !== n && Pt.collapseInterface(n, "hide"),
                                t || ht(n, Ht, null)
                            }
                            );
                            const r = this._getDimension();
                            this._element.classList.remove(Qt),
                            this._element.classList.add(Xt),
                            this._element.style[r] = 0,
                            this._triggerArray.length && this._triggerArray.forEach(n=>{
                                n.classList.remove(Rt),
                                n.setAttribute("aria-expanded", !0)
                            }
                            ),
                            this.setTransitioning(!0);
                            e = `scroll${r[0].toUpperCase() + r.slice(1)}`;
                            this._queueCallback(()=>{
                                this._element.classList.remove(Xt),
                                this._element.classList.add(Qt, Jt),
                                this._element.style[r] = "",
                                this.setTransitioning(!1),
                                bt.trigger(this._element, "shown.bs.collapse")
                            }
                            , this._element, !0),
                            this._element.style[r] = `${this._element[e]}px`
                        }
                    }
                }
                hide() {
                    if (!this._isTransitioning && this._element.classList.contains(Jt) && !bt.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
                        var n = this._getDimension();
                        this._element.style[n] = `${this._element.getBoundingClientRect()[n]}px`,
                        Xn(this._element),
                        this._element.classList.add(Xt),
                        this._element.classList.remove(Qt, Jt);
                        var t = this._triggerArray.length;
                        if (0 < t)
                            for (let n = 0; n < t; n++) {
                                const e = this._triggerArray[n]
                                  , o = On(e);
                                o && !o.classList.contains(Jt) && (e.classList.add(Rt),
                                e.setAttribute("aria-expanded", !1))
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "",
                        this._queueCallback(()=>{
                            this.setTransitioning(!1),
                            this._element.classList.remove(Xt),
                            this._element.classList.add(Qt),
                            bt.trigger(this._element, "hidden.bs.collapse")
                        }
                        , this._element, !0)
                    }
                }
                setTransitioning(n) {
                    this._isTransitioning = n
                }
                _getConfig(n) {
                    return (n = {
                        ...Nt,
                        ...n
                    }).toggle = Boolean(n.toggle),
                    Hn(Tt, n, Yt),
                    n
                }
                _getDimension() {
                    return this._element.classList.contains("width") ? "width" : "height"
                }
                _getParent() {
                    var n = this._config["parent"]
                      , n = Tn(n)
                      , t = `${Kt}[data-bs-parent="${n}"]`;
                    return Sn.find(t, n).forEach(n=>{
                        var t = On(n);
                        this._addAriaAndCollapsedClass(t, [n])
                    }
                    ),
                    n
                }
                _addAriaAndCollapsedClass(n, t) {
                    if (n && t.length) {
                        const e = n.classList.contains(Jt);
                        t.forEach(n=>{
                            e ? n.classList.remove(Rt) : n.classList.add(Rt),
                            n.setAttribute("aria-expanded", e)
                        }
                        )
                    }
                }
                static collapseInterface(n, t) {
                    let e = Pt.getInstance(n);
                    const o = {
                        ...Nt,
                        ...yt.getDataAttributes(n),
                        ..."object" == typeof t && t ? t : {}
                    };
                    if (!e && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1),
                    e = e || new Pt(n,o),
                    "string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }
                static jQueryInterface(n) {
                    return this.each(function() {
                        Pt.collapseInterface(this, n)
                    })
                }
            }
            bt.on(document, "click.bs.collapse.data-api", Kt, function(n) {
                ("A" === n.target.tagName || n.delegateTarget && "A" === n.delegateTarget.tagName) && n.preventDefault();
                const o = yt.getDataAttributes(this);
                n = Mn(this);
                const t = Sn.find(n);
                t.forEach(n=>{
                    const t = Pt.getInstance(n);
                    let e;
                    e = t ? (null === t._parent && "string" == typeof o.parent && (t._config.parent = o.parent,
                    t._parent = t._getParent()),
                    "toggle") : o,
                    Pt.collapseInterface(n, e)
                }
                )
            }),
            Vn(Pt);
            const Vt = "dropdown";
            var Zt = ".bs.dropdown"
              , Ft = ".data-api";
            const ne = "Escape"
              , te = "ArrowUp"
              , ee = "ArrowDown"
              , oe = new RegExp(`${te}|${ee}|${ne}`);
            t = `click${Zt}${Ft}`,
            e = `keydown${Zt}${Ft}`;
            const re = "show"
              , ie = '[data-bs-toggle="dropdown"]'
              , ae = ".dropdown-menu"
              , le = Pn() ? "top-end" : "top-start"
              , se = Pn() ? "top-start" : "top-end"
              , de = Pn() ? "bottom-end" : "bottom-start"
              , ce = Pn() ? "bottom-start" : "bottom-end"
              , Ae = Pn() ? "left-start" : "right-start"
              , pe = Pn() ? "right-start" : "left-start"
              , me = {
                offset: [0, 2],
                boundary: "clippingParents",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null,
                autoClose: !0
            }
              , Ce = {
                offset: "(array|string|function)",
                boundary: "(string|element)",
                reference: "(string|element|object)",
                display: "string",
                popperConfig: "(null|object|function)",
                autoClose: "(boolean|string)"
            };
            class ge extends wt {
                constructor(n, t) {
                    super(n),
                    this._popper = null,
                    this._config = this._getConfig(t),
                    this._menu = this._getMenuElement(),
                    this._inNavbar = this._detectNavbar(),
                    this._addEventListeners()
                }
                static get Default() {
                    return me
                }
                static get DefaultType() {
                    return Ce
                }
                static get NAME() {
                    return Vt
                }
                toggle() {
                    Yn(this._element) || (this._element.classList.contains(re) ? this.hide() : this.show())
                }
                show() {
                    if (!Yn(this._element) && !this._menu.classList.contains(re)) {
                        const e = ge.getParentFromElement(this._element);
                        var n = {
                            relatedTarget: this._element
                        };
                        if (!bt.trigger(this._element, "show.bs.dropdown", n).defaultPrevented) {
                            if (this._inNavbar)
                                yt.setDataAttribute(this._menu, "popper", "none");
                            else {
                                if (void 0 === r)
                                    throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                let n = this._element;
                                "parent" === this._config.reference ? n = e : Gn(this._config.reference) ? n = Tn(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
                                const o = this._getPopperConfig();
                                var t = o.modifiers.find(n=>"applyStyles" === n.name && !1 === n.enabled);
                                this._popper = _n(n, this._menu, o),
                                t && yt.setDataAttribute(this._menu, "popper", "static")
                            }
                            "ontouchstart"in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach(n=>bt.on(n, "mouseover", Qn)),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            this._menu.classList.toggle(re),
                            this._element.classList.toggle(re),
                            bt.trigger(this._element, "shown.bs.dropdown", n)
                        }
                    }
                }
                hide() {
                    var n;
                    !Yn(this._element) && this._menu.classList.contains(re) && (n = {
                        relatedTarget: this._element
                    },
                    this._completeHide(n))
                }
                dispose() {
                    this._popper && this._popper.destroy(),
                    super.dispose()
                }
                update() {
                    this._inNavbar = this._detectNavbar(),
                    this._popper && this._popper.update()
                }
                _addEventListeners() {
                    bt.on(this._element, "click.bs.dropdown", n=>{
                        n.preventDefault(),
                        this.toggle()
                    }
                    )
                }
                _completeHide(n) {
                    bt.trigger(this._element, "hide.bs.dropdown", n).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(n=>bt.off(n, "mouseover", Qn)),
                    this._popper && this._popper.destroy(),
                    this._menu.classList.remove(re),
                    this._element.classList.remove(re),
                    this._element.setAttribute("aria-expanded", "false"),
                    yt.removeDataAttribute(this._menu, "popper"),
                    bt.trigger(this._element, "hidden.bs.dropdown", n))
                }
                _getConfig(n) {
                    if (n = {
                        ...this.constructor.Default,
                        ...yt.getDataAttributes(this._element),
                        ...n
                    },
                    Hn(Vt, n, this.constructor.DefaultType),
                    "object" == typeof n.reference && !Gn(n.reference) && "function" != typeof n.reference.getBoundingClientRect)
                        throw new TypeError(`${Vt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                    return n
                }
                _getMenuElement() {
                    return Sn.next(this._element, ae)[0]
                }
                _getPlacement() {
                    const n = this._element.parentNode;
                    if (n.classList.contains("dropend"))
                        return Ae;
                    if (n.classList.contains("dropstart"))
                        return pe;
                    var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                    return n.classList.contains("dropup") ? t ? se : le : t ? ce : de
                }
                _detectNavbar() {
                    return null !== this._element.closest(".navbar")
                }
                _getOffset() {
                    const t = this._config["offset"];
                    return "string" == typeof t ? t.split(",").map(n=>Number.parseInt(n, 10)) : "function" == typeof t ? n=>t(n, this._element) : t
                }
                _getPopperConfig() {
                    const n = {
                        placement: this._getPlacement(),
                        modifiers: [{
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }]
                    };
                    return "static" === this._config.display && (n.modifiers = [{
                        name: "applyStyles",
                        enabled: !1
                    }]),
                    {
                        ...n,
                        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(n) : this._config.popperConfig
                    }
                }
                _selectMenuItem({key: n, target: t}) {
                    const e = Sn.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(Nn);
                    e.length && tt(e, t, n === ee, !e.includes(t)).focus()
                }
                static dropdownInterface(n, t) {
                    const e = ge.getOrCreateInstance(n, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                }
                static jQueryInterface(n) {
                    return this.each(function() {
                        ge.dropdownInterface(this, n)
                    })
                }
                static clearMenus(e) {
                    if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key)) {
                        var o = Sn.find(ie);
                        for (let n = 0, t = o.length; n < t; n++) {
                            const i = ge.getInstance(o[n]);
                            if (i && !1 !== i._config.autoClose && i._element.classList.contains(re)) {
                                const a = {
                                    relatedTarget: i._element
                                };
                                if (e) {
                                    const l = e.composedPath();
                                    var r = l.includes(i._menu);
                                    if (l.includes(i._element) || "inside" === i._config.autoClose && !r || "outside" === i._config.autoClose && r)
                                        continue;
                                    if (i._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName)))
                                        continue;
                                    "click" === e.type && (a.clickEvent = e)
                                }
                                i._completeHide(a)
                            }
                        }
                    }
                }
                static getParentFromElement(n) {
                    return On(n) || n.parentNode
                }
                static dataApiKeydownHandler(n) {
                    if (/input|textarea/i.test(n.target.tagName) ? !("Space" === n.key || n.key !== ne && (n.key !== ee && n.key !== te || n.target.closest(ae))) : oe.test(n.key)) {
                        var t = this.classList.contains(re);
                        if ((t || n.key !== ne) && (n.preventDefault(),
                        n.stopPropagation(),
                        !Yn(this))) {
                            var e = ()=>this.matches(ie) ? this : Sn.prev(this, ie)[0];
                            return n.key === ne ? (e().focus(),
                            void ge.clearMenus()) : n.key === te || n.key === ee ? (t || e().click(),
                            void ge.getInstance(e())._selectMenuItem(n)) : void (t && "Space" !== n.key || ge.clearMenus())
                        }
                    }
                }
            }
            bt.on(document, e, ie, ge.dataApiKeydownHandler),
            bt.on(document, e, ae, ge.dataApiKeydownHandler),
            bt.on(document, t, ge.clearMenus),
            bt.on(document, "keyup.bs.dropdown.data-api", ge.clearMenus),
            bt.on(document, t, ie, function(n) {
                n.preventDefault(),
                ge.dropdownInterface(this)
            }),
            Vn(ge);
            const ue = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
              , be = ".sticky-top";
            class fe {
                constructor() {
                    this._element = document.body
                }
                getWidth() {
                    var n = document.documentElement.clientWidth;
                    return Math.abs(window.innerWidth - n)
                }
                hide() {
                    const t = this.getWidth();
                    this._disableOverFlow(),
                    this._setElementAttributes(this._element, "paddingRight", n=>n + t),
                    this._setElementAttributes(ue, "paddingRight", n=>n + t),
                    this._setElementAttributes(be, "marginRight", n=>n - t)
                }
                _disableOverFlow() {
                    this._saveInitialAttribute(this._element, "overflow"),
                    this._element.style.overflow = "hidden"
                }
                _setElementAttributes(n, e, o) {
                    const r = this.getWidth();
                    this._applyManipulationCallback(n, n=>{
                        var t;
                        n !== this._element && window.innerWidth > n.clientWidth + r || (this._saveInitialAttribute(n, e),
                        t = window.getComputedStyle(n)[e],
                        n.style[e] = `${o(Number.parseFloat(t))}px`)
                    }
                    )
                }
                reset() {
                    this._resetElementAttributes(this._element, "overflow"),
                    this._resetElementAttributes(this._element, "paddingRight"),
                    this._resetElementAttributes(ue, "paddingRight"),
                    this._resetElementAttributes(be, "marginRight")
                }
                _saveInitialAttribute(n, t) {
                    var e = n.style[t];
                    e && yt.setDataAttribute(n, t, e)
                }
                _resetElementAttributes(n, e) {
                    this._applyManipulationCallback(n, n=>{
                        var t = yt.getDataAttribute(n, e);
                        void 0 === t ? n.style.removeProperty(e) : (yt.removeDataAttribute(n, e),
                        n.style[e] = t)
                    }
                    )
                }
                _applyManipulationCallback(n, t) {
                    Gn(n) ? t(n) : Sn.find(n, this._element).forEach(t)
                }
                isOverflowing() {
                    return 0 < this.getWidth()
                }
            }
            const he = {
                isVisible: !0,
                isAnimated: !1,
                rootElement: "body",
                clickCallback: null
            }
              , Be = {
                isVisible: "boolean",
                isAnimated: "boolean",
                rootElement: "(element|string)",
                clickCallback: "(function|null)"
            }
              , ve = "backdrop"
              , we = `mousedown.bs.${ve}`;
            class $e {
                constructor(n) {
                    this._config = this._getConfig(n),
                    this._isAppended = !1,
                    this._element = null
                }
                show(n) {
                    this._config.isVisible ? (this._append(),
                    this._config.isAnimated && Xn(this._getElement()),
                    this._getElement().classList.add("show"),
                    this._emulateAnimation(()=>{
                        Zn(n)
                    }
                    )) : Zn(n)
                }
                hide(n) {
                    this._config.isVisible ? (this._getElement().classList.remove("show"),
                    this._emulateAnimation(()=>{
                        this.dispose(),
                        Zn(n)
                    }
                    )) : Zn(n)
                }
                _getElement() {
                    if (!this._element) {
                        const n = document.createElement("div");
                        n.className = "modal-backdrop",
                        this._config.isAnimated && n.classList.add("fade"),
                        this._element = n
                    }
                    return this._element
                }
                _getConfig(n) {
                    return (n = {
                        ...he,
                        ..."object" == typeof n ? n : {}
                    }).rootElement = Tn(n.rootElement),
                    Hn(ve, n, Be),
                    n
                }
                _append() {
                    this._isAppended || (this._config.rootElement.appendChild(this._getElement()),
                    bt.on(this._getElement(), we, ()=>{
                        Zn(this._config.clickCallback)
                    }
                    ),
                    this._isAppended = !0)
                }
                dispose() {
                    this._isAppended && (bt.off(this._element, we),
                    this._element.remove(),
                    this._isAppended = !1)
                }
                _emulateAnimation(n) {
                    nt(n, this._getElement(), this._config.isAnimated)
                }
            }
            const xe = ".bs.modal";
            const Ee = {
                backdrop: !0,
                keyboard: !0,
                focus: !0
            }
              , ke = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean"
            }
              , De = (xe,
            xe,
            `hidden${xe}`)
              , ye = `show${xe}`
              , Ie = (xe,
            `focusin${xe}`)
              , Fe = `resize${xe}`
              , _e = `click.dismiss${xe}`
              , ze = `keydown.dismiss${xe}`
              , Se = (xe,
            `mousedown.dismiss${xe}`);
            xe;
            const qe = "modal-open"
              , je = "modal-static";
            class Ue extends wt {
                constructor(n, t) {
                    super(n),
                    this._config = this._getConfig(t),
                    this._dialog = Sn.findOne(".modal-dialog", this._element),
                    this._backdrop = this._initializeBackDrop(),
                    this._isShown = !1,
                    this._ignoreBackdropClick = !1,
                    this._isTransitioning = !1,
                    this._scrollBar = new fe
                }
                static get Default() {
                    return Ee
                }
                static get NAME() {
                    return "modal"
                }
                toggle(n) {
                    return this._isShown ? this.hide() : this.show(n)
                }
                show(n) {
                    this._isShown || this._isTransitioning || bt.trigger(this._element, ye, {
                        relatedTarget: n
                    }).defaultPrevented || (this._isShown = !0,
                    this._isAnimated() && (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(qe),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    bt.on(this._element, _e, '[data-bs-dismiss="modal"]', n=>this.hide(n)),
                    bt.on(this._dialog, Se, ()=>{
                        bt.one(this._element, "mouseup.dismiss.bs.modal", n=>{
                            n.target === this._element && (this._ignoreBackdropClick = !0)
                        }
                        )
                    }
                    ),
                    this._showBackdrop(()=>this._showElement(n)))
                }
                hide(n) {
                    n && ["A", "AREA"].includes(n.target.tagName) && n.preventDefault(),
                    this._isShown && !this._isTransitioning && (bt.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1,
                    (n = this._isAnimated()) && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    bt.off(document, Ie),
                    this._element.classList.remove("show"),
                    bt.off(this._element, _e),
                    bt.off(this._dialog, Se),
                    this._queueCallback(()=>this._hideModal(), this._element, n)))
                }
                dispose() {
                    [window, this._dialog].forEach(n=>bt.off(n, xe)),
                    this._backdrop.dispose(),
                    super.dispose(),
                    bt.off(document, Ie)
                }
                handleUpdate() {
                    this._adjustDialog()
                }
                _initializeBackDrop() {
                    return new $e({
                        isVisible: Boolean(this._config.backdrop),
                        isAnimated: this._isAnimated()
                    })
                }
                _getConfig(n) {
                    return n = {
                        ...Ee,
                        ...yt.getDataAttributes(this._element),
                        ..."object" == typeof n ? n : {}
                    },
                    Hn("modal", n, ke),
                    n
                }
                _showElement(n) {
                    var t = this._isAnimated();
                    const e = Sn.findOne(".modal-body", this._dialog);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                    this._element.style.display = "block",
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.scrollTop = 0,
                    e && (e.scrollTop = 0),
                    t && Xn(this._element),
                    this._element.classList.add("show"),
                    this._config.focus && this._enforceFocus();
                    this._queueCallback(()=>{
                        this._config.focus && this._element.focus(),
                        this._isTransitioning = !1,
                        bt.trigger(this._element, "shown.bs.modal", {
                            relatedTarget: n
                        })
                    }
                    , this._dialog, t)
                }
                _enforceFocus() {
                    bt.off(document, Ie),
                    bt.on(document, Ie, n=>{
                        document === n.target || this._element === n.target || this._element.contains(n.target) || this._element.focus()
                    }
                    )
                }
                _setEscapeEvent() {
                    this._isShown ? bt.on(this._element, ze, n=>{
                        this._config.keyboard && "Escape" === n.key ? (n.preventDefault(),
                        this.hide()) : this._config.keyboard || "Escape" !== n.key || this._triggerBackdropTransition()
                    }
                    ) : bt.off(this._element, ze)
                }
                _setResizeEvent() {
                    this._isShown ? bt.on(window, Fe, ()=>this._adjustDialog()) : bt.off(window, Fe)
                }
                _hideModal() {
                    this._element.style.display = "none",
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    this._isTransitioning = !1,
                    this._backdrop.hide(()=>{
                        document.body.classList.remove(qe),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        bt.trigger(this._element, De)
                    }
                    )
                }
                _showBackdrop(n) {
                    bt.on(this._element, _e, n=>{
                        this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : n.target === n.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                    }
                    ),
                    this._backdrop.show(n)
                }
                _isAnimated() {
                    return this._element.classList.contains("fade")
                }
                _triggerBackdropTransition() {
                    if (!bt.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
                        const {classList: n, scrollHeight: t, style: e} = this._element
                          , o = t > document.documentElement.clientHeight;
                        !o && "hidden" === e.overflowY || n.contains(je) || (o || (e.overflowY = "hidden"),
                        n.add(je),
                        this._queueCallback(()=>{
                            n.remove(je),
                            o || this._queueCallback(()=>{
                                e.overflowY = ""
                            }
                            , this._dialog)
                        }
                        , this._dialog),
                        this._element.focus())
                    }
                }
                _adjustDialog() {
                    var n = this._element.scrollHeight > document.documentElement.clientHeight
                      , t = this._scrollBar.getWidth()
                      , e = 0 < t;
                    (!e && n && !Pn() || e && !n && Pn()) && (this._element.style.paddingLeft = `${t}px`),
                    (e && !n && !Pn() || !e && n && Pn()) && (this._element.style.paddingRight = `${t}px`)
                }
                _resetAdjustments() {
                    this._element.style.paddingLeft = "",
                    this._element.style.paddingRight = ""
                }
                static jQueryInterface(t, e) {
                    return this.each(function() {
                        const n = Ue.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t](e)
                        }
                    })
                }
            }
            bt.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(n) {
                const t = On(this);
                ["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                bt.one(t, ye, n=>{
                    n.defaultPrevented || bt.one(t, De, ()=>{
                        Nn(this) && this.focus()
                    }
                    )
                }
                );
                const e = Ue.getOrCreateInstance(t);
                e.toggle(this)
            }),
            Vn(Ue);
            const We = "offcanvas";
            e = ".bs.offcanvas",
            t = ".data-api";
            const Me = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            }
              , Oe = {
                backdrop: "boolean",
                keyboard: "boolean",
                scroll: "boolean"
            }
              , Le = ".offcanvas.show"
              , Ge = `hidden${e}`
              , Te = `focusin${e}`;
            class He extends wt {
                constructor(n, t) {
                    super(n),
                    this._config = this._getConfig(t),
                    this._isShown = !1,
                    this._backdrop = this._initializeBackDrop(),
                    this._addEventListeners()
                }
                static get NAME() {
                    return We
                }
                static get Default() {
                    return Me
                }
                toggle(n) {
                    return this._isShown ? this.hide() : this.show(n)
                }
                show(n) {
                    this._isShown || bt.trigger(this._element, "show.bs.offcanvas", {
                        relatedTarget: n
                    }).defaultPrevented || (this._isShown = !0,
                    this._element.style.visibility = "visible",
                    this._backdrop.show(),
                    this._config.scroll || ((new fe).hide(),
                    this._enforceFocusOnElement(this._element)),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add("show"),
                    this._queueCallback(()=>{
                        bt.trigger(this._element, "shown.bs.offcanvas", {
                            relatedTarget: n
                        })
                    }
                    , this._element, !0))
                }
                hide() {
                    this._isShown && (bt.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (bt.off(document, Te),
                    this._element.blur(),
                    this._isShown = !1,
                    this._element.classList.remove("show"),
                    this._backdrop.hide(),
                    this._queueCallback(()=>{
                        this._element.setAttribute("aria-hidden", !0),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._element.style.visibility = "hidden",
                        this._config.scroll || (new fe).reset(),
                        bt.trigger(this._element, Ge)
                    }
                    , this._element, !0)))
                }
                dispose() {
                    this._backdrop.dispose(),
                    super.dispose(),
                    bt.off(document, Te)
                }
                _getConfig(n) {
                    return n = {
                        ...Me,
                        ...yt.getDataAttributes(this._element),
                        ..."object" == typeof n ? n : {}
                    },
                    Hn(We, n, Oe),
                    n
                }
                _initializeBackDrop() {
                    return new $e({
                        isVisible: this._config.backdrop,
                        isAnimated: !0,
                        rootElement: this._element.parentNode,
                        clickCallback: ()=>this.hide()
                    })
                }
                _enforceFocusOnElement(t) {
                    bt.off(document, Te),
                    bt.on(document, Te, n=>{
                        document === n.target || t === n.target || t.contains(n.target) || t.focus()
                    }
                    ),
                    t.focus()
                }
                _addEventListeners() {
                    bt.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', ()=>this.hide()),
                    bt.on(this._element, "keydown.dismiss.bs.offcanvas", n=>{
                        this._config.keyboard && "Escape" === n.key && this.hide()
                    }
                    )
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = He.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t] || t.startsWith("_") || "constructor" === t)
                                throw new TypeError(`No method named "${t}"`);
                            n[t](this)
                        }
                    })
                }
            }
            bt.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(n) {
                var t = On(this);
                if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                !Yn(this)) {
                    bt.one(t, Ge, ()=>{
                        Nn(this) && this.focus()
                    }
                    );
                    n = Sn.findOne(Le);
                    n && n !== t && He.getInstance(n).hide();
                    const e = He.getOrCreateInstance(t);
                    e.toggle(this)
                }
            }),
            bt.on(window, "load.bs.offcanvas.data-api", ()=>Sn.find(Le).forEach(n=>He.getOrCreateInstance(n).show())),
            Vn(He);
            const Ne = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
            const Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
              , Je = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
            t = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            };
            function Qe(n, e, t) {
                if (!n.length)
                    return n;
                if (t && "function" == typeof t)
                    return t(n);
                const o = new window.DOMParser
                  , r = o.parseFromString(n, "text/html")
                  , i = Object.keys(e);
                var a = [].concat(...r.body.querySelectorAll("*"));
                for (let n = 0, t = a.length; n < t; n++) {
                    const s = a[n];
                    var l = s.nodeName.toLowerCase();
                    if (i.includes(l)) {
                        const d = [].concat(...s.attributes)
                          , c = [].concat(e["*"] || [], e[l] || []);
                        d.forEach(n=>{
                            ((n,t)=>{
                                var e = n.nodeName.toLowerCase();
                                if (t.includes(e))
                                    return !Ne.has(e) || Boolean(Ye.test(n.nodeValue) || Je.test(n.nodeValue));
                                const o = t.filter(n=>n instanceof RegExp);
                                for (let n = 0, t = o.length; n < t; n++)
                                    if (o[n].test(e))
                                        return !0;
                                return !1
                            }
                            )(n, c) || s.removeAttribute(n.nodeName)
                        }
                        )
                    } else
                        s.remove()
                }
                return r.body.innerHTML
            }
            const Xe = "tooltip";
            e = ".bs.tooltip";
            const Re = "bs-tooltip"
              , Ke = new RegExp(`(^|\\s)${Re}\\S+`,"g")
              , Pe = new Set(["sanitize", "allowList", "sanitizeFn"])
              , Ve = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)"
            }
              , Ze = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: Pn() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: Pn() ? "right" : "left"
            }
              , no = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: t,
                popperConfig: null
            }
              , to = {
                HIDE: `hide${e}`,
                HIDDEN: `hidden${e}`,
                SHOW: `show${e}`,
                SHOWN: `shown${e}`,
                INSERTED: `inserted${e}`,
                CLICK: `click${e}`,
                FOCUSIN: `focusin${e}`,
                FOCUSOUT: `focusout${e}`,
                MOUSEENTER: `mouseenter${e}`,
                MOUSELEAVE: `mouseleave${e}`
            }
              , eo = "fade"
              , oo = "show"
              , ro = "show"
              , io = "hover"
              , ao = "focus";
            class lo extends wt {
                constructor(n, t) {
                    if (void 0 === r)
                        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    super(n),
                    this._isEnabled = !0,
                    this._timeout = 0,
                    this._hoverState = "",
                    this._activeTrigger = {},
                    this._popper = null,
                    this._config = this._getConfig(t),
                    this.tip = null,
                    this._setListeners()
                }
                static get Default() {
                    return no
                }
                static get NAME() {
                    return Xe
                }
                static get Event() {
                    return to
                }
                static get DefaultType() {
                    return Ve
                }
                enable() {
                    this._isEnabled = !0
                }
                disable() {
                    this._isEnabled = !1
                }
                toggleEnabled() {
                    this._isEnabled = !this._isEnabled
                }
                toggle(n) {
                    if (this._isEnabled)
                        if (n) {
                            const t = this._initializeOnDelegatedTarget(n);
                            t._activeTrigger.click = !t._activeTrigger.click,
                            t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                        } else
                            this.getTipElement().classList.contains(oo) ? this._leave(null, this) : this._enter(null, this)
                }
                dispose() {
                    clearTimeout(this._timeout),
                    bt.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                    this.tip && this.tip.remove(),
                    this._popper && this._popper.destroy(),
                    super.dispose()
                }
                show() {
                    if ("none" === this._element.style.display)
                        throw new Error("Please use show on visible elements");
                    if (this.isWithContent() && this._isEnabled) {
                        var n = bt.trigger(this._element, this.constructor.Event.SHOW);
                        const e = Jn(this._element);
                        var t = (null === e ? this._element.ownerDocument.documentElement : e).contains(this._element);
                        if (!n.defaultPrevented && t) {
                            const o = this.getTipElement();
                            t = Un(this.constructor.NAME);
                            o.setAttribute("id", t),
                            this._element.setAttribute("aria-describedby", t),
                            this.setContent(),
                            this._config.animation && o.classList.add(eo);
                            t = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
                            t = this._getAttachment(t);
                            this._addAttachmentClass(t);
                            const r = this._config["container"];
                            ht(o, this.constructor.DATA_KEY, this),
                            this._element.ownerDocument.documentElement.contains(this.tip) || (r.appendChild(o),
                            bt.trigger(this._element, this.constructor.Event.INSERTED)),
                            this._popper ? this._popper.update() : this._popper = _n(this._element, o, this._getPopperConfig(t)),
                            o.classList.add(oo);
                            const i = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
                            i && o.classList.add(...i.split(" ")),
                            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(n=>{
                                bt.on(n, "mouseover", Qn)
                            }
                            );
                            t = this.tip.classList.contains(eo);
                            this._queueCallback(()=>{
                                var n = this._hoverState;
                                this._hoverState = null,
                                bt.trigger(this._element, this.constructor.Event.SHOWN),
                                "out" === n && this._leave(null, this)
                            }
                            , this.tip, t)
                        }
                    }
                }
                hide() {
                    if (this._popper) {
                        const t = this.getTipElement();
                        var n;
                        bt.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented || (t.classList.remove(oo),
                        "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(n=>bt.off(n, "mouseover", Qn)),
                        this._activeTrigger.click = !1,
                        this._activeTrigger[ao] = !1,
                        this._activeTrigger[io] = !1,
                        n = this.tip.classList.contains(eo),
                        this._queueCallback(()=>{
                            this._isWithActiveTrigger() || (this._hoverState !== ro && t.remove(),
                            this._cleanTipClass(),
                            this._element.removeAttribute("aria-describedby"),
                            bt.trigger(this._element, this.constructor.Event.HIDDEN),
                            this._popper && (this._popper.destroy(),
                            this._popper = null))
                        }
                        , this.tip, n),
                        this._hoverState = "")
                    }
                }
                update() {
                    null !== this._popper && this._popper.update()
                }
                isWithContent() {
                    return Boolean(this.getTitle())
                }
                getTipElement() {
                    if (this.tip)
                        return this.tip;
                    const n = document.createElement("div");
                    return n.innerHTML = this._config.template,
                    this.tip = n.children[0],
                    this.tip
                }
                setContent() {
                    const n = this.getTipElement();
                    this.setElementContent(Sn.findOne(".tooltip-inner", n), this.getTitle()),
                    n.classList.remove(eo, oo)
                }
                setElementContent(n, t) {
                    if (null !== n)
                        return Gn(t) ? (t = Tn(t),
                        void (this._config.html ? t.parentNode !== n && (n.innerHTML = "",
                        n.appendChild(t)) : n.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = Qe(t, this._config.allowList, this._config.sanitizeFn)),
                        n.innerHTML = t) : n.textContent = t)
                }
                getTitle() {
                    let n = this._element.getAttribute("data-bs-original-title");
                    return n = n || ("function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title),
                    n
                }
                updateAttachment(n) {
                    return "right" === n ? "end" : "left" === n ? "start" : n
                }
                _initializeOnDelegatedTarget(n, t) {
                    var e = this.constructor.DATA_KEY;
                    return (t = t || Bt(n.delegateTarget, e)) || (t = new this.constructor(n.delegateTarget,this._getDelegateConfig()),
                    ht(n.delegateTarget, e, t)),
                    t
                }
                _getOffset() {
                    const t = this._config["offset"];
                    return "string" == typeof t ? t.split(",").map(n=>Number.parseInt(n, 10)) : "function" == typeof t ? n=>t(n, this._element) : t
                }
                _getPopperConfig(n) {
                    n = {
                        placement: n,
                        modifiers: [{
                            name: "flip",
                            options: {
                                fallbackPlacements: this._config.fallbackPlacements
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: this._getOffset()
                            }
                        }, {
                            name: "preventOverflow",
                            options: {
                                boundary: this._config.boundary
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`
                            }
                        }, {
                            name: "onChange",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: n=>this._handlePopperPlacementChange(n)
                        }],
                        onFirstUpdate: n=>{
                            n.options.placement !== n.placement && this._handlePopperPlacementChange(n)
                        }
                    };
                    return {
                        ...n,
                        ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(n) : this._config.popperConfig
                    }
                }
                _addAttachmentClass(n) {
                    this.getTipElement().classList.add(`${Re}-${this.updateAttachment(n)}`)
                }
                _getAttachment(n) {
                    return Ze[n.toUpperCase()]
                }
                _setListeners() {
                    const n = this._config.trigger.split(" ");
                    n.forEach(n=>{
                        var t;
                        "click" === n ? bt.on(this._element, this.constructor.Event.CLICK, this._config.selector, n=>this.toggle(n)) : "manual" !== n && (t = n === io ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                        n = n === io ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT,
                        bt.on(this._element, t, this._config.selector, n=>this._enter(n)),
                        bt.on(this._element, n, this._config.selector, n=>this._leave(n)))
                    }
                    ),
                    this._hideModalHandler = ()=>{
                        this._element && this.hide()
                    }
                    ,
                    bt.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
                    this._config.selector ? this._config = {
                        ...this._config,
                        trigger: "manual",
                        selector: ""
                    } : this._fixTitle()
                }
                _fixTitle() {
                    var n = this._element.getAttribute("title")
                      , t = typeof this._element.getAttribute("data-bs-original-title");
                    !n && "string" == t || (this._element.setAttribute("data-bs-original-title", n || ""),
                    !n || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", n),
                    this._element.setAttribute("title", ""))
                }
                _enter(n, t) {
                    t = this._initializeOnDelegatedTarget(n, t),
                    n && (t._activeTrigger["focusin" === n.type ? ao : io] = !0),
                    t.getTipElement().classList.contains(oo) || t._hoverState === ro ? t._hoverState = ro : (clearTimeout(t._timeout),
                    t._hoverState = ro,
                    t._config.delay && t._config.delay.show ? t._timeout = setTimeout(()=>{
                        t._hoverState === ro && t.show()
                    }
                    , t._config.delay.show) : t.show())
                }
                _leave(n, t) {
                    t = this._initializeOnDelegatedTarget(n, t),
                    n && (t._activeTrigger["focusout" === n.type ? ao : io] = t._element.contains(n.relatedTarget)),
                    t._isWithActiveTrigger() || (clearTimeout(t._timeout),
                    t._hoverState = "out",
                    t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(()=>{
                        "out" === t._hoverState && t.hide()
                    }
                    , t._config.delay.hide) : t.hide())
                }
                _isWithActiveTrigger() {
                    for (const n in this._activeTrigger)
                        if (this._activeTrigger[n])
                            return !0;
                    return !1
                }
                _getConfig(n) {
                    const t = yt.getDataAttributes(this._element);
                    return Object.keys(t).forEach(n=>{
                        Pe.has(n) && delete t[n]
                    }
                    ),
                    (n = {
                        ...this.constructor.Default,
                        ...t,
                        ..."object" == typeof n && n ? n : {}
                    }).container = !1 === n.container ? document.body : Tn(n.container),
                    "number" == typeof n.delay && (n.delay = {
                        show: n.delay,
                        hide: n.delay
                    }),
                    "number" == typeof n.title && (n.title = n.title.toString()),
                    "number" == typeof n.content && (n.content = n.content.toString()),
                    Hn(Xe, n, this.constructor.DefaultType),
                    n.sanitize && (n.template = Qe(n.template, n.allowList, n.sanitizeFn)),
                    n
                }
                _getDelegateConfig() {
                    const n = {};
                    if (this._config)
                        for (const t in this._config)
                            this.constructor.Default[t] !== this._config[t] && (n[t] = this._config[t]);
                    return n
                }
                _cleanTipClass() {
                    const t = this.getTipElement()
                      , n = t.getAttribute("class").match(Ke);
                    null !== n && 0 < n.length && n.map(n=>n.trim()).forEach(n=>t.classList.remove(n))
                }
                _handlePopperPlacementChange(n) {
                    var n = n["state"];
                    n && (this.tip = n.elements.popper,
                    this._cleanTipClass(),
                    this._addAttachmentClass(this._getAttachment(n.placement)))
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = lo.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t]()
                        }
                    })
                }
            }
            Vn(lo);
            e = ".bs.popover";
            const so = "bs-popover"
              , co = new RegExp(`(^|\\s)${so}\\S+`,"g")
              , Ao = {
                ...lo.Default,
                placement: "right",
                offset: [0, 8],
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }
              , po = {
                ...lo.DefaultType,
                content: "(string|element|function)"
            }
              , mo = {
                HIDE: `hide${e}`,
                HIDDEN: `hidden${e}`,
                SHOW: `show${e}`,
                SHOWN: `shown${e}`,
                INSERTED: `inserted${e}`,
                CLICK: `click${e}`,
                FOCUSIN: `focusin${e}`,
                FOCUSOUT: `focusout${e}`,
                MOUSEENTER: `mouseenter${e}`,
                MOUSELEAVE: `mouseleave${e}`
            }
              , Co = ".popover-header"
              , go = ".popover-body";
            class uo extends lo {
                static get Default() {
                    return Ao
                }
                static get NAME() {
                    return "popover"
                }
                static get Event() {
                    return mo
                }
                static get DefaultType() {
                    return po
                }
                isWithContent() {
                    return this.getTitle() || this._getContent()
                }
                getTipElement() {
                    return this.tip || (this.tip = super.getTipElement(),
                    this.getTitle() || Sn.findOne(Co, this.tip).remove(),
                    this._getContent() || Sn.findOne(go, this.tip).remove(),
                    this.tip)
                }
                setContent() {
                    const n = this.getTipElement();
                    this.setElementContent(Sn.findOne(Co, n), this.getTitle());
                    let t = this._getContent();
                    "function" == typeof t && (t = t.call(this._element)),
                    this.setElementContent(Sn.findOne(go, n), t),
                    n.classList.remove("fade", "show")
                }
                _addAttachmentClass(n) {
                    this.getTipElement().classList.add(`${so}-${this.updateAttachment(n)}`)
                }
                _getContent() {
                    return this._element.getAttribute("data-bs-content") || this._config.content
                }
                _cleanTipClass() {
                    const t = this.getTipElement()
                      , n = t.getAttribute("class").match(co);
                    null !== n && 0 < n.length && n.map(n=>n.trim()).forEach(n=>t.classList.remove(n))
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = uo.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t]()
                        }
                    })
                }
            }
            Vn(uo);
            const bo = "scrollspy";
            const fo = ".bs.scrollspy";
            const ho = {
                offset: 10,
                method: "auto",
                target: ""
            }
              , Bo = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            };
            fo,
            fo;
            fo;
            const vo = "dropdown-item"
              , wo = "active"
              , $o = ".nav-link"
              , xo = ".list-group-item"
              , Eo = "position";
            class ko extends wt {
                constructor(n, t) {
                    super(n),
                    this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
                    this._config = this._getConfig(t),
                    this._selector = `${this._config.target} ${$o}, ${this._config.target} ${xo}, ${this._config.target} .${vo}`,
                    this._offsets = [],
                    this._targets = [],
                    this._activeTarget = null,
                    this._scrollHeight = 0,
                    bt.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()),
                    this.refresh(),
                    this._process()
                }
                static get Default() {
                    return ho
                }
                static get NAME() {
                    return bo
                }
                refresh() {
                    var n = this._scrollElement === this._scrollElement.window ? "offset" : Eo;
                    const o = "auto" === this._config.method ? n : this._config.method
                      , r = o === Eo ? this._getScrollTop() : 0;
                    this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight();
                    const t = Sn.find(this._selector);
                    t.map(n=>{
                        var t = Mn(n);
                        const e = t ? Sn.findOne(t) : null;
                        if (e) {
                            n = e.getBoundingClientRect();
                            if (n.width || n.height)
                                return [yt[o](e).top + r, t]
                        }
                        return null
                    }
                    ).filter(n=>n).sort((n,t)=>n[0] - t[0]).forEach(n=>{
                        this._offsets.push(n[0]),
                        this._targets.push(n[1])
                    }
                    )
                }
                dispose() {
                    bt.off(this._scrollElement, fo),
                    super.dispose()
                }
                _getConfig(t) {
                    if ("string" != typeof (t = {
                        ...ho,
                        ...yt.getDataAttributes(this._element),
                        ..."object" == typeof t && t ? t : {}
                    }).target && Gn(t.target)) {
                        let n = t.target["id"];
                        n || (n = Un(bo),
                        t.target.id = n),
                        t.target = `#${n}`
                    }
                    return Hn(bo, t, Bo),
                    t
                }
                _getScrollTop() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }
                _getScrollHeight() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
                _getOffsetHeight() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }
                _process() {
                    var t = this._getScrollTop() + this._config.offset
                      , n = this._getScrollHeight()
                      , e = this._config.offset + n - this._getOffsetHeight();
                    if (this._scrollHeight !== n && this.refresh(),
                    e <= t) {
                        e = this._targets[this._targets.length - 1];
                        this._activeTarget !== e && this._activate(e)
                    } else {
                        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                            return this._activeTarget = null,
                            void this._clear();
                        for (let n = this._offsets.length; n--; )
                            this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
                    }
                }
                _activate(t) {
                    this._activeTarget = t,
                    this._clear();
                    const n = this._selector.split(",").map(n=>`${n}[data-bs-target="${t}"],${n}[href="${t}"]`)
                      , e = Sn.findOne(n.join(","));
                    e.classList.contains(vo) ? (Sn.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(wo),
                    e.classList.add(wo)) : (e.classList.add(wo),
                    Sn.parents(e, ".nav, .list-group").forEach(n=>{
                        Sn.prev(n, `${$o}, ${xo}`).forEach(n=>n.classList.add(wo)),
                        Sn.prev(n, ".nav-item").forEach(n=>{
                            Sn.children(n, $o).forEach(n=>n.classList.add(wo))
                        }
                        )
                    }
                    )),
                    bt.trigger(this._scrollElement, "activate.bs.scrollspy", {
                        relatedTarget: t
                    })
                }
                _clear() {
                    Sn.find(this._selector).filter(n=>n.classList.contains(wo)).forEach(n=>n.classList.remove(wo))
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = ko.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t]()
                        }
                    })
                }
            }
            bt.on(window, "load.bs.scrollspy.data-api", ()=>{
                Sn.find('[data-bs-spy="scroll"]').forEach(n=>new ko(n))
            }
            ),
            Vn(ko);
            e = ".bs.tab";
            const Do = "active"
              , yo = ".active"
              , Io = ":scope > li > .active";
            class Fo extends wt {
                static get NAME() {
                    return "tab"
                }
                show() {
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !this._element.classList.contains(Do)) {
                        let n;
                        var t = On(this._element)
                          , e = this._element.closest(".nav, .list-group");
                        e && (o = "UL" === e.nodeName || "OL" === e.nodeName ? Io : yo,
                        n = Sn.find(o, e),
                        n = n[n.length - 1]);
                        var o = n ? bt.trigger(n, "hide.bs.tab", {
                            relatedTarget: this._element
                        }) : null;
                        bt.trigger(this._element, "show.bs.tab", {
                            relatedTarget: n
                        }).defaultPrevented || null !== o && o.defaultPrevented || (this._activate(this._element, e),
                        e = ()=>{
                            bt.trigger(n, "hidden.bs.tab", {
                                relatedTarget: this._element
                            }),
                            bt.trigger(this._element, "shown.bs.tab", {
                                relatedTarget: n
                            })
                        }
                        ,
                        t ? this._activate(t, t.parentNode, e) : e())
                    }
                }
                _activate(n, t, e) {
                    const o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? Sn.children(t, yo) : Sn.find(Io, t))[0];
                    var r = e && o && o.classList.contains("fade")
                      , t = ()=>this._transitionComplete(n, o, e);
                    o && r ? (o.classList.remove("show"),
                    this._queueCallback(t, n, !0)) : t()
                }
                _transitionComplete(n, t, e) {
                    if (t) {
                        t.classList.remove(Do);
                        const r = Sn.findOne(":scope > .dropdown-menu .active", t.parentNode);
                        r && r.classList.remove(Do),
                        "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                    }
                    n.classList.add(Do),
                    "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0),
                    Xn(n),
                    n.classList.contains("fade") && n.classList.add("show");
                    let o = n.parentNode;
                    o && "LI" === o.nodeName && (o = o.parentNode),
                    o && o.classList.contains("dropdown-menu") && ((t = n.closest(".dropdown")) && Sn.find(".dropdown-toggle", t).forEach(n=>n.classList.add(Do)),
                    n.setAttribute("aria-expanded", !0)),
                    e && e()
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = Fo.getOrCreateInstance(this);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t]()
                        }
                    })
                }
            }
            bt.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(n) {
                if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
                !Yn(this)) {
                    const t = Fo.getOrCreateInstance(this);
                    t.show()
                }
            }),
            Vn(Fo);
            e = ".bs.toast";
            const _o = "show"
              , zo = "showing"
              , So = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            }
              , qo = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
            class jo extends wt {
                constructor(n, t) {
                    super(n),
                    this._config = this._getConfig(t),
                    this._timeout = null,
                    this._hasMouseInteraction = !1,
                    this._hasKeyboardInteraction = !1,
                    this._setListeners()
                }
                static get DefaultType() {
                    return So
                }
                static get Default() {
                    return qo
                }
                static get NAME() {
                    return "toast"
                }
                show() {
                    bt.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
                    this._config.animation && this._element.classList.add("fade"),
                    this._element.classList.remove("hide"),
                    Xn(this._element),
                    this._element.classList.add(zo),
                    this._queueCallback(()=>{
                        this._element.classList.remove(zo),
                        this._element.classList.add(_o),
                        bt.trigger(this._element, "shown.bs.toast"),
                        this._maybeScheduleHide()
                    }
                    , this._element, this._config.animation))
                }
                hide() {
                    this._element.classList.contains(_o) && (bt.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove(_o),
                    this._queueCallback(()=>{
                        this._element.classList.add("hide"),
                        bt.trigger(this._element, "hidden.bs.toast")
                    }
                    , this._element, this._config.animation)))
                }
                dispose() {
                    this._clearTimeout(),
                    this._element.classList.contains(_o) && this._element.classList.remove(_o),
                    super.dispose()
                }
                _getConfig(n) {
                    return n = {
                        ...qo,
                        ...yt.getDataAttributes(this._element),
                        ..."object" == typeof n && n ? n : {}
                    },
                    Hn("toast", n, this.constructor.DefaultType),
                    n
                }
                _maybeScheduleHide() {
                    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                        this.hide()
                    }
                    , this._config.delay)))
                }
                _onInteraction(n, t) {
                    switch (n.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t
                    }
                    t ? this._clearTimeout() : (n = n.relatedTarget,
                    this._element === n || this._element.contains(n) || this._maybeScheduleHide())
                }
                _setListeners() {
                    bt.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', ()=>this.hide()),
                    bt.on(this._element, "mouseover.bs.toast", n=>this._onInteraction(n, !0)),
                    bt.on(this._element, "mouseout.bs.toast", n=>this._onInteraction(n, !1)),
                    bt.on(this._element, "focusin.bs.toast", n=>this._onInteraction(n, !0)),
                    bt.on(this._element, "focusout.bs.toast", n=>this._onInteraction(n, !1))
                }
                _clearTimeout() {
                    clearTimeout(this._timeout),
                    this._timeout = null
                }
                static jQueryInterface(t) {
                    return this.each(function() {
                        const n = jo.getOrCreateInstance(this, t);
                        if ("string" == typeof t) {
                            if (void 0 === n[t])
                                throw new TypeError(`No method named "${t}"`);
                            n[t](this)
                        }
                    })
                }
            }
            Vn(jo)
        }
        ,
        788: (n,t,e)=>{
            e.d(t, {
                Z: ()=>B
            });
            var o = e(15)
              , r = e.n(o)
              , i = e(645)
              , a = e.n(i)
              , l = e(667)
              , s = e.n(l)
              , d = new URL(e(872),e.b)
              , c = new URL(e(98),e.b)
              , A = new URL(e(585),e.b)
              , p = new URL(e(161),e.b)
              , m = new URL(e(285),e.b)
              , C = new URL(e(902),e.b)
              , g = new URL(e(646),e.b)
              , u = new URL(e(615),e.b)
              , b = new URL(e(774),e.b)
              , f = new URL(e(801),e.b)
              , h = new URL(e(629),e.b)
              , t = new URL(e(636),e.b)
              , o = new URL(e(931),e.b)
              , i = new URL(e(483),e.b)
              , l = new URL(e(719),e.b)
              , e = new URL(e(407),e.b)
              , r = a()(r())
              , d = s()(d)
              , c = s()(c)
              , A = s()(A)
              , p = s()(p)
              , m = s()(m)
              , C = s()(C)
              , g = s()(g)
              , u = s()(u)
              , b = s()(b)
              , f = s()(f)
              , h = s()(h)
              , t = s()(t)
              , o = s()(o)
              , i = s()(i)
              , l = s()(l)
              , e = s()(e);
            r.push([n.id, '/*!\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--bs-gradient: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0))}*,*::before,*::after{box-sizing:border-box}@media (prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + .9vw)}@media (min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + .6vw)}@media (min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + .3vw)}@media (min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title],abbr[data-bs-original-title]{text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:.875em}mark,.mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr /* rtl:ignore */;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role="button"]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type="search"]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:"\\2014\\00A0"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-sm,.container-md,.container-lg,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x, .75rem);padding-left:var(--bs-gutter-x, .75rem);margin-right:auto;margin-left:auto}@media (min-width: 576px){.container,.container-sm{max-width:540px}}@media (min-width: 768px){.container,.container-sm,.container-md{max-width:720px}}@media (min-width: 992px){.container,.container-sm,.container-md,.container-lg{max-width:960px}}@media (min-width: 1200px){.container,.container-sm,.container-md,.container-lg,.container-xl{max-width:1140px}}@media (min-width: 1400px){.container,.container-sm,.container-md,.container-lg,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) * -.5);margin-left:calc(var(--bs-gutter-x) * -.5)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.33333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.66667%}@media (min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.33333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.66667%}}@media (min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.33333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.66667%}}@media (min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.33333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.66667%}}@media (min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.33333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.66667%}}@media (min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.33333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.66667%}}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333%}.col-2{flex:0 0 auto;width:16.66667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333%}.col-5{flex:0 0 auto;width:41.66667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333%}.col-8{flex:0 0 auto;width:66.66667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333%}.col-11{flex:0 0 auto;width:91.66667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333%}.offset-2{margin-left:16.66667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333%}.offset-5{margin-left:41.66667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333%}.offset-8{margin-left:66.66667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333%}.offset-11{margin-left:91.66667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: .25rem}.g-1,.gy-1{--bs-gutter-y: .25rem}.g-2,.gx-2{--bs-gutter-x: .5rem}.g-2,.gy-2{--bs-gutter-y: .5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media (min-width: 576px){.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333%}.col-sm-2{flex:0 0 auto;width:16.66667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333%}.col-sm-5{flex:0 0 auto;width:41.66667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333%}.col-sm-8{flex:0 0 auto;width:66.66667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333%}.col-sm-11{flex:0 0 auto;width:91.66667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333%}.offset-sm-2{margin-left:16.66667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333%}.offset-sm-5{margin-left:41.66667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333%}.offset-sm-8{margin-left:66.66667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333%}.offset-sm-11{margin-left:91.66667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: .25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: .25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: .5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: .5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media (min-width: 768px){.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333%}.col-md-2{flex:0 0 auto;width:16.66667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333%}.col-md-5{flex:0 0 auto;width:41.66667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333%}.col-md-8{flex:0 0 auto;width:66.66667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333%}.col-md-11{flex:0 0 auto;width:91.66667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}.offset-md-2{margin-left:16.66667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333%}.offset-md-5{margin-left:41.66667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333%}.offset-md-8{margin-left:66.66667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333%}.offset-md-11{margin-left:91.66667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: .25rem}.g-md-1,.gy-md-1{--bs-gutter-y: .25rem}.g-md-2,.gx-md-2{--bs-gutter-x: .5rem}.g-md-2,.gy-md-2{--bs-gutter-y: .5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media (min-width: 992px){.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333%}.col-lg-2{flex:0 0 auto;width:16.66667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333%}.col-lg-5{flex:0 0 auto;width:41.66667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333%}.col-lg-8{flex:0 0 auto;width:66.66667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333%}.col-lg-11{flex:0 0 auto;width:91.66667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333%}.offset-lg-2{margin-left:16.66667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333%}.offset-lg-5{margin-left:41.66667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333%}.offset-lg-8{margin-left:66.66667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333%}.offset-lg-11{margin-left:91.66667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: .25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: .25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: .5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: .5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media (min-width: 1200px){.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333%}.col-xl-2{flex:0 0 auto;width:16.66667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333%}.col-xl-5{flex:0 0 auto;width:41.66667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333%}.col-xl-8{flex:0 0 auto;width:66.66667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333%}.col-xl-11{flex:0 0 auto;width:91.66667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333%}.offset-xl-2{margin-left:16.66667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333%}.offset-xl-5{margin-left:41.66667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333%}.offset-xl-8{margin-left:66.66667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333%}.offset-xl-11{margin-left:91.66667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: .25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: .25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: .5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: .5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media (min-width: 1400px){.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333%}.col-xxl-2{flex:0 0 auto;width:16.66667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333%}.col-xxl-5{flex:0 0 auto;width:41.66667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333%}.col-xxl-8{flex:0 0 auto;width:66.66667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333%}.col-xxl-11{flex:0 0 auto;width:91.66667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333%}.offset-xxl-2{margin-left:16.66667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333%}.offset-xxl-5{margin-left:41.66667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333%}.offset-xxl-8{margin-left:66.66667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333%}.offset-xxl-11{margin-left:91.66667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: .25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: .25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: .5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: .5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-bg: rgba(0,0,0,0);--bs-table-accent-bg: rgba(0,0,0,0);--bs-table-striped-color: #212529;--bs-table-striped-bg: rgba(0,0,0,0.05);--bs-table-active-color: #212529;--bs-table-active-bg: rgba(0,0,0,0.1);--bs-table-hover-color: #212529;--bs-table-hover-bg: rgba(0,0,0,0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg: #cfe2ff;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg: #e2e3e5;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg: #d1e7dd;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg: #cff4fc;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg: #fff3cd;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg: #f8d7da;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg: #f8f9fa;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg: #212529;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type="file"]{overflow:hidden}.form-control[type="file"]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-control::-webkit-file-upload-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + (.5rem + 2px));padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + (1rem + 2px));padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + (.75rem + 2px))}textarea.form-control-sm{min-height:calc(1.5em + (.5rem + 2px))}textarea.form-control-lg{min-height:calc(1.5em + (1rem + 2px))}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(' + d + ');background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.form-select[multiple],.form-select[size]:not([size="1"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,0.25);appearance:none;color-adjust:exact}.form-check-input[type="checkbox"]{border-radius:.25em}.form-check-input[type="radio"]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type="checkbox"]{background-image:url(' + c + ')}.form-check-input:checked[type="radio"]{background-image:url(' + A + ')}.form-check-input[type="checkbox"]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(' + p + ")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled] ~ .form-check-label,.form-check-input:disabled ~ .form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(" + m + ");background-position:left center;border-radius:2em;transition:background-position 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(" + C + ")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(" + g + ")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,0.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,0.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;appearance:none}@media (prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity 0.1s ease-in-out,transform 0.1s ease-in-out}@media (prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus ~ label,.form-floating>.form-control:not(:placeholder-shown) ~ label,.form-floating>.form-select ~ label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill ~ label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,0.9);border-radius:.25rem}.was-validated :valid ~ .valid-feedback,.was-validated :valid ~ .valid-tooltip,.is-valid ~ .valid-feedback,.is-valid ~ .valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url(" + u + ');background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,0.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size="1"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url(' + d + "),url(" + u + ");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,0.25)}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.25)}.was-validated .form-check-input:valid ~ .form-check-label,.form-check-input.is-valid ~ .form-check-label{color:#198754}.form-check-inline .form-check-input ~ .valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,0.9);border-radius:.25rem}.was-validated :invalid ~ .invalid-feedback,.was-validated :invalid ~ .invalid-tooltip,.is-invalid ~ .invalid-feedback,.is-invalid ~ .invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(" + b + ');background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,0.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size="1"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size="1"]{padding-right:4.125rem;background-image:url(' + d + "),url(" + b + ');background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,0.25)}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.25)}.was-validated .form-check-input:invalid ~ .form-check-label,.form-check-input.is-invalid ~ .form-check-label{color:#dc3545}.form-check-inline .form-check-input ~ .invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,0.5)}.btn-check:checked+.btn-primary,.btn-check:active+.btn-primary,.btn-primary:active,.btn-primary.active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:checked+.btn-primary:focus,.btn-check:active+.btn-primary:focus,.btn-primary:active:focus,.btn-primary.active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,0.5)}.btn-primary:disabled,.btn-primary.disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,0.5)}.btn-check:checked+.btn-secondary,.btn-check:active+.btn-secondary,.btn-secondary:active,.btn-secondary.active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:checked+.btn-secondary:focus,.btn-check:active+.btn-secondary:focus,.btn-secondary:active:focus,.btn-secondary.active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,0.5)}.btn-secondary:disabled,.btn-secondary.disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,0.5)}.btn-check:checked+.btn-success,.btn-check:active+.btn-success,.btn-success:active,.btn-success.active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:checked+.btn-success:focus,.btn-check:active+.btn-success:focus,.btn-success:active:focus,.btn-success.active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,0.5)}.btn-success:disabled,.btn-success.disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,0.5)}.btn-check:checked+.btn-info,.btn-check:active+.btn-info,.btn-info:active,.btn-info.active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:checked+.btn-info:focus,.btn-check:active+.btn-info:focus,.btn-info:active:focus,.btn-info.active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,0.5)}.btn-info:disabled,.btn-info.disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,0.5)}.btn-check:checked+.btn-warning,.btn-check:active+.btn-warning,.btn-warning:active,.btn-warning.active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:checked+.btn-warning:focus,.btn-check:active+.btn-warning:focus,.btn-warning:active:focus,.btn-warning.active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,0.5)}.btn-warning:disabled,.btn-warning.disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,0.5)}.btn-check:checked+.btn-danger,.btn-check:active+.btn-danger,.btn-danger:active,.btn-danger.active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:checked+.btn-danger:focus,.btn-check:active+.btn-danger:focus,.btn-danger:active:focus,.btn-danger.active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,0.5)}.btn-danger:disabled,.btn-danger.disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,0.5)}.btn-check:checked+.btn-light,.btn-check:active+.btn-light,.btn-light:active,.btn-light.active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:checked+.btn-light:focus,.btn-check:active+.btn-light:focus,.btn-light:active:focus,.btn-light.active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,0.5)}.btn-light:disabled,.btn-light.disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,0.5)}.btn-check:checked+.btn-dark,.btn-check:active+.btn-dark,.btn-dark:active,.btn-dark.active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:checked+.btn-dark:focus,.btn-check:active+.btn-dark:focus,.btn-dark:active:focus,.btn-dark.active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,0.5)}.btn-dark:disabled,.btn-dark.disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,0.5)}.btn-check:checked+.btn-outline-primary,.btn-check:active+.btn-outline-primary,.btn-outline-primary:active,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:checked+.btn-outline-primary:focus,.btn-check:active+.btn-outline-primary:focus,.btn-outline-primary:active:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,0.5)}.btn-outline-primary:disabled,.btn-outline-primary.disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,0.5)}.btn-check:checked+.btn-outline-secondary,.btn-check:active+.btn-outline-secondary,.btn-outline-secondary:active,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:checked+.btn-outline-secondary:focus,.btn-check:active+.btn-outline-secondary:focus,.btn-outline-secondary:active:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,0.5)}.btn-outline-secondary:disabled,.btn-outline-secondary.disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.5)}.btn-check:checked+.btn-outline-success,.btn-check:active+.btn-outline-success,.btn-outline-success:active,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show{color:#fff;background-color:#198754;border-color:#198754}.btn-check:checked+.btn-outline-success:focus,.btn-check:active+.btn-outline-success:focus,.btn-outline-success:active:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,0.5)}.btn-outline-success:disabled,.btn-outline-success.disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,0.5)}.btn-check:checked+.btn-outline-info,.btn-check:active+.btn-outline-info,.btn-outline-info:active,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:checked+.btn-outline-info:focus,.btn-check:active+.btn-outline-info:focus,.btn-outline-info:active:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,0.5)}.btn-outline-info:disabled,.btn-outline-info.disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,0.5)}.btn-check:checked+.btn-outline-warning,.btn-check:active+.btn-outline-warning,.btn-outline-warning:active,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:checked+.btn-outline-warning:focus,.btn-check:active+.btn-outline-warning:focus,.btn-outline-warning:active:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,0.5)}.btn-outline-warning:disabled,.btn-outline-warning.disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.5)}.btn-check:checked+.btn-outline-danger,.btn-check:active+.btn-outline-danger,.btn-outline-danger:active,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:checked+.btn-outline-danger:focus,.btn-check:active+.btn-outline-danger:focus,.btn-outline-danger:active:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,0.5)}.btn-outline-danger:disabled,.btn-outline-danger.disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,0.5)}.btn-check:checked+.btn-outline-light,.btn-check:active+.btn-outline-light,.btn-outline-light:active,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:checked+.btn-outline-light:focus,.btn-check:active+.btn-outline-light:focus,.btn-outline-light:active:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,0.5)}.btn-outline-light:disabled,.btn-outline-light.disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,0.5)}.btn-check:checked+.btn-outline-dark,.btn-check:active+.btn-outline-dark,.btn-outline-dark:active,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show{color:#fff;background-color:#212529;border-color:#212529}.btn-check:checked+.btn-outline-dark:focus,.btn-check:active+.btn-outline-dark:focus,.btn-outline-dark:active:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,0.5)}.btn-outline-dark:disabled,.btn-outline-dark.disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link:disabled,.btn-link.disabled{color:#6c757d}.btn-lg,.btn-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-sm,.btn-group-sm>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity 0.15s linear}@media (prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height 0.75s ease}@media (prefers-reduced-motion: reduce){.collapsing{transition:none}}.dropup,.dropend,.dropdown,.dropstart{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.15);border-radius:.25rem}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:.125rem}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:""}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,0.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:hover,.dropdown-item:focus{color:#1e2125;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,0.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:hover,.dropdown-menu-dark .dropdown-item:focus{color:#fff;background-color:rgba(255,255,255,0.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,0.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn ~ .btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link:hover,.nav-link:focus{color:#0a58ca}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background:none;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:none;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media (min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,0.9)}.navbar-light .navbar-brand:hover,.navbar-light .navbar-brand:focus{color:rgba(0,0,0,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,0.55)}.navbar-light .navbar-nav .nav-link:hover,.navbar-light .navbar-nav .nav-link:focus{color:rgba(0,0,0,0.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,0.3)}.navbar-light .navbar-nav .show>.nav-link,.navbar-light .navbar-nav .nav-link.active{color:rgba(0,0,0,0.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,0.55);border-color:rgba(0,0,0,0.1)}.navbar-light .navbar-toggler-icon{background-image:url(' + f + ")}.navbar-light .navbar-text{color:rgba(0,0,0,0.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:hover,.navbar-light .navbar-text a:focus{color:rgba(0,0,0,0.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-brand:focus{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,0.55)}.navbar-dark .navbar-nav .nav-link:hover,.navbar-dark .navbar-nav .nav-link:focus{color:rgba(255,255,255,0.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,0.25)}.navbar-dark .navbar-nav .show>.nav-link,.navbar-dark .navbar-nav .nav-link.active{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,0.55);border-color:rgba(255,255,255,0.1)}.navbar-dark .navbar-toggler-icon{background-image:url(" + h + ")}.navbar-dark .navbar-text{color:rgba(255,255,255,0.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:hover,.navbar-dark .navbar-text a:focus{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,0.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,0.03);border-bottom:1px solid rgba(0,0,0,0.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,0.03);border-top:1px solid rgba(0,0,0,0.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;text-align:left;background-color:#fff;border:0;border-radius:0;overflow-anchor:none;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease}@media (prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,0.125)}.accordion-button:not(.collapsed)::after{background-image:url(" + t + ');transform:rotate(-180deg)}.accordion-button::after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:"";background-image:url(' + o + ');background-repeat:no-repeat;background-size:1.25rem;transition:transform 0.2s ease-in-out}@media (prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.accordion-item:first-of-type{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, "/") /* rtl: var(--bs-breadcrumb-divider, "/") */}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out}@media (prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width 0.6s ease}@media (prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent);background-size:1rem 1rem}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>li::before{content:counters(section, ".") ". ";counter-increment:section}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;color:#212529;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,0.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(' + i + ') center/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,0.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border:1px solid rgba(0,0,0,0.1);box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15);border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,0.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,0.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal{position:fixed;top:0;left:0;z-index:1060;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform 0.3s ease-out;transform:translate(0, -50px)}@media (prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}@media (min-width: 576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width: 992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width: 1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{position:absolute;z-index:1080;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-top,.bs-tooltip-auto[data-popper-placement^="top"]{padding:.4rem 0}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^="top"] .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-end,.bs-tooltip-auto[data-popper-placement^="right"]{padding:0 .4rem}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^="right"] .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-bottom,.bs-tooltip-auto[data-popper-placement^="bottom"]{padding:.4rem 0}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^="bottom"] .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-start,.bs-tooltip-auto[data-popper-placement^="left"]{padding:0 .4rem}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^="left"] .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0 /* rtl:ignore */;z-index:1070;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,0.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^="top"]>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^="top"]>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,0.25)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^="top"]>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^="right"]>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^="right"]>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,0.25)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^="right"]>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^="bottom"]>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^="bottom"]>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,0.25)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^="bottom"]>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^="bottom"] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f0f0f0}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^="left"]>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^="left"]>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,0.25)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^="left"]>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,0.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:""}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity 0.15s ease}@media (prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(' + l + ")}.carousel-control-next-icon{background-image:url(" + e + ')}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity 0.6s ease}@media (prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{animation-duration:1.5s}}.offcanvas{position:fixed;bottom:0;z-index:1050;display:flex;flex-direction:column;max-width:100%;visibility:hidden;background-color:#fff;background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion: reduce){.offcanvas{transition:none}}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1rem}.offcanvas-header .btn-close{padding:.5rem .5rem;margin-top:-.5rem;margin-right:-.5rem;margin-bottom:-.5rem}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:1rem 1rem;overflow-y:auto}.offcanvas-start{top:0;left:0;width:400px;border-right:1px solid rgba(0,0,0,0.2);transform:translateX(-100%)}.offcanvas-end{top:0;right:0;width:400px;border-left:1px solid rgba(0,0,0,0.2);transform:translateX(100%)}.offcanvas-top{top:0;right:0;left:0;height:30vh;max-height:100%;border-bottom:1px solid rgba(0,0,0,0.2);transform:translateY(-100%)}.offcanvas-bottom{right:0;left:0;height:30vh;max-height:100%;border-top:1px solid rgba(0,0,0,0.2);transform:translateY(100%)}.offcanvas.show{transform:none}.clearfix::after{display:block;clear:both;content:""}.link-primary{color:#0d6efd}.link-primary:hover,.link-primary:focus{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:hover,.link-secondary:focus{color:#565e64}.link-success{color:#198754}.link-success:hover,.link-success:focus{color:#146c43}.link-info{color:#0dcaf0}.link-info:hover,.link-info:focus{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:hover,.link-warning:focus{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:hover,.link-danger:focus{color:#b02a37}.link-light{color:#f8f9fa}.link-light:hover,.link-light:focus{color:#f9fafb}.link-dark{color:#212529}.link-dark:hover,.link-dark:focus{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:""}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: calc(3 / 4 * 100%)}.ratio-16x9{--bs-aspect-ratio: calc(9 / 16 * 100%)}.ratio-21x9{--bs-aspect-ratio: calc(9 / 21 * 100%)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}@media (min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}}@media (min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}}@media (min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}}@media (min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}}@media (min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:""}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important}.shadow-sm{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:1px solid #dee2e6 !important}.border-0{border:0 !important}.border-top{border-top:1px solid #dee2e6 !important}.border-top-0{border-top:0 !important}.border-end{border-right:1px solid #dee2e6 !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:1px solid #dee2e6 !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:1px solid #dee2e6 !important}.border-start-0{border-left:0 !important}.border-primary{border-color:#0d6efd !important}.border-secondary{border-color:#6c757d !important}.border-success{border-color:#198754 !important}.border-info{border-color:#0dcaf0 !important}.border-warning{border-color:#ffc107 !important}.border-danger{border-color:#dc3545 !important}.border-light{border-color:#f8f9fa !important}.border-dark{border-color:#212529 !important}.border-white{border-color:#fff !important}.border-1{border-width:1px !important}.border-2{border-width:2px !important}.border-3{border-width:3px !important}.border-4{border-width:4px !important}.border-5{border-width:5px !important}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + .9vw) !important}.fs-3{font-size:calc(1.3rem + .6vw) !important}.fs-4{font-size:calc(1.275rem + .3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-bolder{font-weight:bolder !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.text-primary{color:#0d6efd !important}.text-secondary{color:#6c757d !important}.text-success{color:#198754 !important}.text-info{color:#0dcaf0 !important}.text-warning{color:#ffc107 !important}.text-danger{color:#dc3545 !important}.text-light{color:#f8f9fa !important}.text-dark{color:#212529 !important}.text-white{color:#fff !important}.text-body{color:#212529 !important}.text-muted{color:#6c757d !important}.text-black-50{color:rgba(0,0,0,0.5) !important}.text-white-50{color:rgba(255,255,255,0.5) !important}.text-reset{color:inherit !important}.bg-primary{background-color:#0d6efd !important}.bg-secondary{background-color:#6c757d !important}.bg-success{background-color:#198754 !important}.bg-info{background-color:#0dcaf0 !important}.bg-warning{background-color:#ffc107 !important}.bg-danger{background-color:#dc3545 !important}.bg-light{background-color:#f8f9fa !important}.bg-dark{background-color:#212529 !important}.bg-body{background-color:#fff !important}.bg-white{background-color:#fff !important}.bg-transparent{background-color:rgba(0,0,0,0) !important}.bg-gradient{background-image:var(--bs-gradient) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:.25rem !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:.2rem !important}.rounded-2{border-radius:.25rem !important}.rounded-3{border-radius:.3rem !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:50rem !important}.rounded-top{border-top-left-radius:.25rem !important;border-top-right-radius:.25rem !important}.rounded-end{border-top-right-radius:.25rem !important;border-bottom-right-radius:.25rem !important}.rounded-bottom{border-bottom-right-radius:.25rem !important;border-bottom-left-radius:.25rem !important}.rounded-start{border-bottom-left-radius:.25rem !important;border-top-left-radius:.25rem !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media (min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media (min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media (min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media (min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media (min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media (min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}body{width:100%;height:100%;font-family:Cardo, "Helvetica Neue", Helvetica, Arial, sans-serif;color:var(--text-color);background-color:var(--background-color);display:flex;flex-direction:column;webkit-tap-highlight-color:rgba(255,255,255,0.2)}.content-wrapper{flex:1 0 auto}html{width:100%;height:100%}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{text-transform:uppercase;font-family:Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:700;letter-spacing:1px}a{color:var(--secondary-color);-webkit-transition:all 0.2s ease-in-out;-moz-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}a:hover,a:focus{text-decoration:none;color:var(--secondary-color-darkest)}@-webkit-keyframes pulse{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes pulse{0%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.2);transform:scale(1.2)}100%{-moz-transform:scale(1);transform:scale(1)}}.content-section{padding-top:50px;padding-bottom:50px}.content-section h2 small,.content-section .h2 small,.content-section h2 .small,.content-section .h2 .small{white-space:nowrap}.map{width:100%;height:400px;margin-bottom:50px}@media (min-width: 767px){.map{height:600px}}.btn{text-transform:uppercase;font-family:Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:400;-webkit-transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.btn-default{border:1px solid var(--secondary-color);color:var(--secondary-color);background-color:transparent}.btn-default:hover,.btn-default:focus{outline:0;color:var(--secondary-text-color);background-color:var(--secondary-color)}.btn-primary{color:var(--primary-text-color);background-color:var(--primary-color);border-color:var(--primary-color-darker)}.btn-primary:hover{color:var(--primary-text-color-darkest);background-color:var(--primary-color-darkest);border-color:var(--primary-color-darker)}dd{white-space:pre-line}.thumbnail.thumbnail-hotel{padding:0;border-radius:0}.thumbnail.thumbnail-hotel .caption{padding-top:35px}.thumbnail.thumbnail-hotel .caption h4,.thumbnail.thumbnail-hotel .caption .h4{margin-bottom:0}.thumbnail.thumbnail-portrait .caption h4,.thumbnail.thumbnail-portrait .caption .h4{margin-top:10px;margin-bottom:10px}.thumbnail.thumbnail-portrait{padding:0;border:none;margin-bottom:0}.thumbnail.thumbnail-portrait img{height:500px;object-fit:cover}.billboard{display:table;width:100%;height:300px;text-align:center;color:#fff;text-shadow:black 2px 2px 10px;background-color:#000000;background-repeat:no-repeat;background-position:top center;-webkit-background-size:cover;-moz-background-size:cover;background-size:cover;-o-background-size:cover;position:relative}.billboard-header{margin-top:52px;height:175px}.billboard-text{position:absolute;top:50%;margin-top:-0.5em;height:1em;text-align:center;width:100%;letter-spacing:0.1em;font-size:40px}@media (min-width: 767px){.billboard{height:400px}.billboard-header{height:300px}.billboard-text{font-size:80px}}@media (min-width: 992px){.billboard{background-attachment:fixed}.billboard-header{background-attachment:scroll}}@media (min-width: 767px){.billboard-wall{background-position:center -170px}.billboard-bridge-walk{background-position:center -160px}.billboard-stairs{background-position:center -185px}.billboard-ramp-walk{background-position:center -190px}.floating-info{position:fixed;bottom:40px;right:40px}.floating-button{display:block;background:white;width:40px;height:40px;line-height:40px;border-radius:50%;text-align:center;color:#aaa;font-family:Raleway;box-shadow:#777 1px 1px 4px;opacity:0.3}.floating-button:hover{opacity:1}.navbar-custom.top-nav-collapse .modal-link.notify a{color:#8d5f9e}.modal-link .modal-link--icon{display:none}.modal-link.notify .modal-link--icon{display:block;position:absolute;top:10px;right:2px}}.rsvp-form .input-group{padding:10px}.rsvp-form .help-text{opacity:.8}.portraits-container{display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px}.portraits-container .portrait{padding:20px;flex:1 1 0px}.polaroid{border:1px solid var(--text-color-lighter);border-radius:0.25rem;padding:20px;margin-bottom:20px;display:flex;flex-direction:column;gap:20px;margin:10px;background-color:var(--background-color-lighter)}.polaroid .img-thumbnail{border:none;background-color:transparent;object-fit:cover;flex-grow:1}.polaroid img{border-radius:0.9rem;max-height:66vh}.polaroid .caption h4,.polaroid .caption .h4,.polaroid .caption h5,.polaroid .caption .h5{font-size:1.2em;margin-bottom:0}.add-to-calendar-checkbox{border:1px solid #bfb9b9;border-radius:3px;padding:5px;box-shadow:#e4e4e4 2px 2px 2px;cursor:pointer}.wrap-whitespace{white-space:normal !important}.page-content{text-align:left}.live-stream-container{width:100%;height:44vh}.under-construction-container{height:100vh;width:100vw;display:flex;justify-content:center;align-items:center}.under-construction-content{padding:6rem;background:#bfbfbf80;border-radius:11px;background:radial-gradient(ellipse, rgba(255,239,239,0.91) 0%, rgba(255,255,255,0.63) 42%, rgba(0,0,0,0) 100%);display:flex;flex-direction:column;align-items:center}.under-construction-content h1,.under-construction-content .h1{font-size:5rem}.navbar-custom{margin-bottom:0;border-bottom:1px solid var(--secondary-color);text-transform:uppercase;font-family:Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;background-color:var(--primary-color)}.navbar-custom .navbar-brand{font-weight:700}.navbar-custom .navbar-brand:focus{outline:0}.navbar-custom .navbar-brand .navbar-toggler{padding:4px 6px;font-size:16px;color:#fff}.navbar-custom .navbar-brand .navbar-toggler:focus,.navbar-custom .navbar-brand .navbar-toggler:active{outline:0}.navbar-custom .navbar-toggler{margin-top:5px;margin-bottom:5px;color:#fff}.navbar-custom.top-nav-collapse .navbar-toggler{color:var(--primary-text-color)}.navbar-custom a{color:#fff}.navbar-custom ul{font-size:14px}.navbar-custom.top-nav-collapse .nav li.active,.navbar-custom.is-expanded .nav li.active{outline:none;background-color:var(--primary-color)}.navbar-custom .nav li a{transition:background 0.5s ease-in-out;font-weight:600}.navbar-custom .nav li a:hover,.navbar-custom .nav li a:focus,.navbar-custom .nav li a.active{outline:0;color:#fff;opacity:.6}.navbar-custom.top-nav-collapse .nav li a:hover,.navbar-custom.top-nav-collapse .nav li a:focus,.navbar-custom.top-nav-collapse .nav li a.active{outline:0;color:var(--primary-text-color)}.navbar-custom{border-bottom:3px solid var(--accent-color);box-shadow:#888 0px 1px 10px}.navbar{border-bottom:0;box-shadow:none;letter-spacing:1px;background:0 0;transition:background 0.5s ease-in-out, padding 0.5s ease-in-out}.navbar-custom.is-expanded,.top-nav-collapse{padding:0;background-color:var(--primary-color)}.navbar-custom.is-expanded a,.navbar-custom.top-nav-collapse a,.navbar-custom.is-expanded .navbar-toggler{color:var(--primary-text-color)}.navbar a{color:#fff}.navbar-custom.top-nav-collapse{border-bottom:3px solid var(--secondary-color);box-shadow:#888 0px 1px 10px}.intro{display:table;width:100%;height:100vh;text-align:center;color:#fff;text-shadow:black 2px 2px 10px;background:var(--intro-background);background-color:#000000;background-position:var(--intro-background-position);background-size:cover;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover}@media (min-width: 992px){.intro{background-attachment:fixed}}.intro .intro-body{display:table-cell;vertical-align:middle}.brand-heading{font-size:40px;letter-spacing:0.025em}.intro-text{font-size:18px}@media (min-width: 767px){.intro{padding:0}.brand-heading{font-size:100px}.intro-text{font-size:25px}}.faq-question{margin-bottom:.5rem}.faq-answer{margin-bottom:2rem}.date-subheader{font-size:.6em}.people-grid{display:grid;grid-template-columns:repeat(2, minmax(100px, 1fr));grid-template-rows:auto;justify-content:space-evenly}@media (max-width: 992px){.people-grid{grid-template-columns:repeat(1, 100%)}}footer{padding:50px 0}footer p{margin:0}.footer-wrapper{flex-shrink:0}footer.site-footer{padding:5px 10px;background-color:var(--secondary-color);color:var(--secondary-color-text);left:0;bottom:0;width:100%;text-align:right}footer.site-footer p{font-size:clamp(0.65rem, 2.5vw, 0.8rem)}footer.site-footer a{color:var(--secondary-color-text)}.banner-container{position:fixed;top:45px;left:0;right:0;margin:0 20px;display:flex;flex-direction:column;z-index:999}.banner-container .banner{display:flex;justify-content:space-between;flex-direction:row-reverse;align-items:stretch;background-color:var(--accent-color);margin-top:20px;color:var(--accent-text-color);border-radius:10px;min-height:80px}.banner-container .banner a{color:var(--accent-text-color);font-weight:bolder}.banner-container .banner .close-button{top:0;right:0;padding:10px}.banner-container .banner .close-button button.btn-close{color:var(--accent-text-color)}.banner-container .banner.hidden{transition:all 1s;opacity:0}.banner-container .banner.closed{display:none}.banner-container .banner .banner-content{margin:10px 0 10px 20px;display:flex;align-items:center}.banner-container .banner .banner-content p{margin:0}\n', "", {
                version: 3,
                sources: ["webpack://./node_modules/bootstrap/scss/bootstrap.scss", "webpack://./_webpack/main.scss", "webpack://./node_modules/bootstrap/scss/_root.scss", "webpack://./node_modules/bootstrap/scss/_reboot.scss", "webpack://./node_modules/bootstrap/scss/_variables.scss", "webpack://./node_modules/bootstrap/scss/vendor/_rfs.scss", "webpack://./node_modules/bootstrap/scss/_functions.scss", "webpack://./node_modules/bootstrap/scss/mixins/_border-radius.scss", "webpack://./node_modules/bootstrap/scss/_type.scss", "webpack://./node_modules/bootstrap/scss/mixins/_lists.scss", "webpack://./node_modules/bootstrap/scss/mixins/_image.scss", "webpack://./node_modules/bootstrap/scss/_images.scss", "webpack://./node_modules/bootstrap/scss/mixins/_container.scss", "webpack://./node_modules/bootstrap/scss/mixins/_breakpoints.scss", "webpack://./node_modules/bootstrap/scss/_containers.scss", "webpack://./node_modules/bootstrap/scss/_grid.scss", "webpack://./node_modules/bootstrap/scss/mixins/_grid.scss", "webpack://./node_modules/bootstrap/scss/_tables.scss", "webpack://./node_modules/bootstrap/scss/mixins/_table-variants.scss", "webpack://./node_modules/bootstrap/scss/forms/_labels.scss", "webpack://./node_modules/bootstrap/scss/forms/_form-text.scss", "webpack://./node_modules/bootstrap/scss/forms/_form-control.scss", "webpack://./node_modules/bootstrap/scss/mixins/_transition.scss", "webpack://./node_modules/bootstrap/scss/mixins/_gradients.scss", "webpack://./node_modules/bootstrap/scss/forms/_form-select.scss", "webpack://./node_modules/bootstrap/scss/forms/_form-check.scss", "webpack://./node_modules/bootstrap/scss/forms/_form-range.scss", "webpack://./node_modules/bootstrap/scss/forms/_floating-labels.scss", "webpack://./node_modules/bootstrap/scss/forms/_input-group.scss", "webpack://./node_modules/bootstrap/scss/mixins/_forms.scss", "webpack://./node_modules/bootstrap/scss/_buttons.scss", "webpack://./node_modules/bootstrap/scss/mixins/_buttons.scss", "webpack://./node_modules/bootstrap/scss/_transitions.scss", "webpack://./_webpack/scss/bootstrap-overrides.scss", "webpack://./node_modules/bootstrap/scss/_dropdown.scss", "webpack://./node_modules/bootstrap/scss/mixins/_caret.scss", "webpack://./node_modules/bootstrap/scss/_button-group.scss", "webpack://./node_modules/bootstrap/scss/_nav.scss", "webpack://./node_modules/bootstrap/scss/_navbar.scss", "webpack://./node_modules/bootstrap/scss/_card.scss", "webpack://./node_modules/bootstrap/scss/_accordion.scss", "webpack://./node_modules/bootstrap/scss/_breadcrumb.scss", "webpack://./node_modules/bootstrap/scss/_pagination.scss", "webpack://./node_modules/bootstrap/scss/mixins/_pagination.scss", "webpack://./node_modules/bootstrap/scss/_badge.scss", "webpack://./node_modules/bootstrap/scss/_alert.scss", "webpack://./node_modules/bootstrap/scss/mixins/_alert.scss", "webpack://./node_modules/bootstrap/scss/_progress.scss", "webpack://./node_modules/bootstrap/scss/_list-group.scss", "webpack://./node_modules/bootstrap/scss/mixins/_list-group.scss", "webpack://./node_modules/bootstrap/scss/_close.scss", "webpack://./node_modules/bootstrap/scss/_toasts.scss", "webpack://./node_modules/bootstrap/scss/_modal.scss", "webpack://./node_modules/bootstrap/scss/_tooltip.scss", "webpack://./node_modules/bootstrap/scss/mixins/_reset-text.scss", "webpack://./node_modules/bootstrap/scss/_popover.scss", "webpack://./node_modules/bootstrap/scss/_carousel.scss", "webpack://./node_modules/bootstrap/scss/mixins/_clearfix.scss", "webpack://./node_modules/bootstrap/scss/_spinners.scss", "webpack://./node_modules/bootstrap/scss/_offcanvas.scss", "webpack://./node_modules/bootstrap/scss/helpers/_colored-links.scss", "webpack://./node_modules/bootstrap/scss/helpers/_ratio.scss", "webpack://./node_modules/bootstrap/scss/helpers/_position.scss", "webpack://./node_modules/bootstrap/scss/helpers/_visually-hidden.scss", "webpack://./node_modules/bootstrap/scss/mixins/_visually-hidden.scss", "webpack://./node_modules/bootstrap/scss/helpers/_stretched-link.scss", "webpack://./node_modules/bootstrap/scss/mixins/_text-truncate.scss", "webpack://./node_modules/bootstrap/scss/mixins/_utilities.scss", "webpack://./node_modules/bootstrap/scss/utilities/_api.scss", "webpack://./_webpack/scss/misc.scss", "webpack://./_webpack/scss/under_construction.scss", "webpack://./_webpack/scss/navbar.scss", "webpack://./_webpack/scss/intro.scss", "webpack://./_webpack/scss/faq.scss", "webpack://./_webpack/scss/celebrations.scss", "webpack://./_webpack/scss/people.scss", "webpack://./_webpack/scss/footer.scss", "webpack://./_webpack/scss/banner.scss"],
                names: [],
                mappings: "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CAClC,CJxED,6BIqEA,qBACE,eAAgB,CAChB,gCAAiC,CAClC,CJxED,8BIqEA,qBACE,eAAgB,CAChB,gCAAiC,CAClC,CJxED,8BIqEA,sBACE,eAAgB,CAChB,gCAAiC,CAClC,CEhJL,YACE,mBf0pB2C,CerpB5C,gBAKC,+BbgL8D,Ca/K9D,kCb+K8D,Ca9K9D,eAAgB,CdoRZ,iBAvE+B,CczMnC,efka+B,CehahC,mBAGC,6BbqK8D,CapK9D,gCboK8D,CDsG1D,iBAvE+B,CcjMpC,mBAGC,8Bb+J8D,Ca9J9D,iCb8J8D,CDsG1D,iBAvE+B,Cc3LpC,WC9BC,iBhBkpB4C,CClXxC,gBAvE+B,CerNnC,ahBKgB,CgBJjB,cCLC,aAAc,CACd,UAAW,CACX,sBjBmkBkC,CCrS9B,cAvE+B,CgBpNnC,ejBua+B,CiBta/B,ejB4a+B,CiB3a/B,ajBKgB,CiBJhB,qBjBLa,CiBMb,2BAA4B,CAC5B,wBjBHgB,CiBIhB,eAAgB,CdGd,oBHkWgC,CkBrW9B,sElBssB4F,CkBlsB5F,wCDhBN,cCiBQ,eAAgB,CD2FvB,CA5GD,2BAqBI,eAAgB,CArBpB,0DAwBM,cAAe,CAxBrB,oBA8BI,ajBjBc,CiBkBd,qBjB3BW,CiB4BX,oBfuHiC,CetHjC,SAAU,CAKR,6CjBJW,CiBlCjB,2CA+CI,YAAmE,CA/CvE,2BAoDI,ajB1Cc,CiB4Cd,SAAU,CAtDd,+CAgEI,wBjB1Dc,CiB6Dd,SAAU,CAnEd,oCAwEI,sBjB8fgC,CiB7fhC,uBjB6fgC,CiB5fhC,wBjB4fgC,CiB3fhC,ajB9Dc,CmBbhB,wBnBMgB,CiBuEd,mBAAoB,CACpB,oBAAqB,CACrB,kBAAmB,CACnB,cAAe,CACf,2BjBmR6B,CiBlR7B,eAAgB,CCtEd,iIlBunB6I,CkBnnB7I,wCDhBN,oCCiBQ,eAAgB,CDmErB,CApFH,yEAuFI,wBfqEiC,Ce5JrC,0CA2FI,sBjB2egC,CiB1ehC,uBjB0egC,CiBzehC,wBjByegC,CiBxehC,ajBjFc,CmBbhB,wBnBMgB,CiB0Fd,mBAAoB,CACpB,oBAAqB,CACrB,kBAAmB,CACnB,cAAe,CACf,2BjBgQ6B,CiB/P7B,eAAgB,CCzFd,iIlBunB6I,CkBnnB7I,wCDhBN,0CCiBQ,eAAgB,CDsFrB,CAvGH,+EA0GI,wBfkDiC,CejDlC,wBASD,aAAc,CACd,UAAW,CACX,iBAA2B,CAC3B,eAAgB,CAChB,ejB2T+B,CiB1T/B,ajB5GgB,CiB6GhB,4BAA6B,CAC7B,wBAAyB,CACzB,kBAAmC,CATrC,gFAaI,eAAgB,CAChB,cAAe,CAChB,iBAWD,sCf8C8D,Ce7C9D,oBjBociC,CCjT7B,iBAvE+B,CE3MjC,mBHmW+B,CiBtOnC,uCAOI,oBjB+b+B,CiB9b/B,qBjB8b+B,CiB7b/B,uBjB6b+B,CiBtcnC,6CAaI,oBjByb+B,CiBxb/B,qBjBwb+B,CiBvb/B,uBjBub+B,CiBtbhC,iBAID,qCf2B8D,Ce1B9D,kBjBqbgC,CCrT5B,iBAvE+B,CE3MjC,mBHoW+B,CiBpNnC,uCAOI,kBjBgb8B,CiB/a9B,mBjB+a8B,CiB9a9B,sBjB8a8B,CiBvblC,6CAaI,kBjB0a8B,CiBza9B,mBjBya8B,CiBxa9B,sBjBwa8B,CiBva/B,sBAQC,uCfI4D,CeNhE,yBAMI,sCfA4D,CeNhE,yBAUI,qCfJ4D,CeK7D,oBAKD,cAAe,CACf,WAAY,CACZ,ejB8XmC,CiBjYrC,mDAMI,cAAe,CANnB,uCAUI,YAAmE,Cd/LnE,oBHkWgC,CiB7KpC,0CAeI,YAAmE,CdpMnE,oBHkWgC,CiB5JjC,aGnND,aAAc,CACd,UAAW,CACX,sCpBkkBkC,CoBhkBlC,qClBiN8D,CD0E1D,cAvE+B,CmBjNnC,epBoa+B,CoBna/B,epBya+B,CoBxa/B,apBEgB,CoBDhB,qBpBRa,CoBSb,wDlBmEgF,CkBlEhF,2BAA4B,CAC5B,uCpBgxBqE,CoB/wBrE,yBpBgxB2C,CoB/wB3C,wBpBTgB,CGOd,oBHkWgC,CkBrW9B,sElBssB4F,CoB7rBhG,eAAgB,CFLZ,wCEfN,aFgBQ,eAAgB,CEkCvB,CAlDD,mBAuBI,oBlB+HiC,CkB9HjC,SAAU,CAKR,6CpBIW,CoBjCjB,0DAmCI,oBpBkiBgC,CoBjiBhC,qBAAsB,CApC1B,sBAyCI,wBpBpCc,CoBLlB,4BA+CI,iBAAkB,CAClB,yBpBpCc,CoBqCf,gBAID,kBpB2hBkC,CoB1hBlC,qBpB0hBkC,CoBzhBlC,kBpB0hBiC,CCjT7B,iBAvE+B,CmBhKpC,gBAGC,iBpBwhBiC,CoBvhBjC,oBpBuhBiC,CoBthBjC,iBpBuhBgC,CCrT5B,iBAvE+B,CmBzJpC,YChEC,aAAc,CACd,iBrBqtB2E,CqBptB3E,kBrBqtBsE,CqBptBtE,qBrBqtB+C,CqBztBjD,8BAOI,UAAW,CACX,kBAA2C,CAC5C,kBAID,SrBysB2C,CqBxsB3C,UrBwsB2C,CqBvsB3C,gBAA8D,CAC9D,kBAAmB,CACnB,qBrBba,CqBcb,2BAA4B,CAC5B,0BAA2B,CAC3B,uBAAwB,CACxB,iCrBPa,CqBQb,eAAgB,CAChB,kBAAmB,CAXrB,mClBGI,mBHmtB2C,CqBttB/C,gCAoBI,iBrBmsByC,CqBvtB7C,yBAwBI,sBrB0rBqD,CqBltBzD,wBA4BI,oBnB+GiC,CmB9GjC,SAAU,CACV,6CrBRa,CqBtBjB,0BAkCI,wBrBZa,CqBab,oBrBba,CqBtBjB,2CAyCQ,wDnB2B0E,CmBpElF,wCAiDQ,wDnBmB0E,CmBpElF,iDAuDI,wBrBjCa,CqBkCb,oBrBlCa,CqBuCX,wDnBO4E,CmBpElF,2BAkEI,mBAAoB,CACpB,WAAY,CACZ,UrBkqByC,CqBtuB7C,+FA4EM,UrB0pBuC,CqBzpBxC,aAcH,kBrBqpByD,CqBtpB3D,+BAII,SrBipBiC,CqBhpBjC,kBAA4C,CAC5C,wDnB5B8E,CmB6B9E,+BAAgC,ClB9FhC,iBH4uBiC,CkB/uB/B,gDlBmvBgE,CkB/uBhE,wCGsFN,+BHrFQ,eAAgB,CG6GrB,CAxBH,qCAYM,wDnBlC4E,CmBsBlF,uCAgBM,gCrBgpBwC,CqB3oBtC,wDnB3C0E,CmB6C7E,mBAKH,oBAAqB,CACrB,iBrBmnBoC,CqBlnBrC,WAGC,iBAAkB,CAClB,qBAAsB,CACtB,mBAAoB,CAHtB,mDAQM,mBAAoB,CACpB,WAAY,CACZ,WrBue2B,CqBte5B,YC9IH,UAAW,CACX,apB4K2B,CoB3K3B,SAAU,CACV,4BAA6B,CAC7B,eAAgB,CALlB,kBAQI,SAAU,CARd,wCAY8B,4DtBoBb,CsBhCjB,oCAa8B,4DtBmBb,CsBhCjB,8BAiBI,QAAS,CAjBb,kCAqBI,UtB6yB2C,CsB5yB3C,WtB4yB2C,CsB3yB3C,kBAAsE,CHzBxE,wBnBkCe,CsBPb,QtB4yBwC,CGxzBxC,kBHyzB2C,CkB5zBzC,yGlBk0BkI,CsB/yBpI,eAAgB,CJfd,wCIdN,kCJeQ,eAAgB,CImBrB,CAlCH,yCHFE,wBjBuJmC,CoBrJrC,2CAqCI,UtBsxBkC,CsBrxBlC,YtBsxBmC,CsBrxBnC,iBAAkB,CAClB,ctBqxBqC,CsBpxBrC,wBtBpCc,CsBqCd,wBAAyB,CnB7BzB,kBHkzBkC,CsB/zBtC,8BAgDI,UtBkxB2C,CsBjxB3C,WtBixB2C,CmBp0B7C,wBnBkCe,CsBmBb,QtBkxBwC,CGxzBxC,kBHyzB2C,CkB5zBzC,yGlBk0BkI,CsBrxBpI,eAAgB,CJzCd,wCIdN,8BJeQ,eAAgB,CI6CrB,CA5DH,qCHFE,wBjBuJmC,CoBrJrC,8BA+DI,UtB4vBkC,CsB3vBlC,YtB4vBmC,CsB3vBnC,iBAAkB,CAClB,ctB2vBqC,CsB1vBrC,wBtB9Dc,CsB+Dd,wBAAyB,CnBvDzB,kBHkzBkC,CsB/zBtC,qBA0EI,mBAAoB,CA1ExB,2CA6EM,wBtBtEY,CsBPlB,uCAiFM,wBtB1EY,CsB2Eb,eCvFH,iBAAkB,CADpB,yDAKI,yBrB0L4D,CqBzL5D,gBvBu1BkC,CuB71BtC,qBAUI,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,WAAY,CACZ,mBvB4jBgC,CuB3jBhC,mBAAoB,CACpB,4BAA6C,CAC7C,oBAAqB,CLDnB,8DlBo1B8E,CkBh1B9E,wCKpBN,qBLqBQ,eAAgB,CKFrB,CAnBH,6BAuBI,mBvBmjBgC,CuB1kBpC,0CA0BM,iBAAkB,CA1BxB,wFA+BM,oBvBi0BoC,CuBh0BpC,sBvBi0BmC,CuBj2BzC,8CAoCM,oBvB4zBoC,CuB3zBpC,sBvB4zBmC,CuBj2BzC,4BA0CI,oBvBszBsC,CuBrzBtC,sBvBszBqC,CuBj2BzC,4IAkDM,WvBgzB+B,CuB/yB/B,6DvBgzB4E,CuBn2BlF,sDAyDM,WvByyB+B,CuBxyB/B,6DvByyB4E,CuBxyB7E,aCtDH,iBAAkB,CAClB,YAAa,CACb,cAAe,CACf,mBAAoB,CACpB,UAAW,CALb,qDASI,iBAAkB,CAClB,aAAc,CACd,QAAS,CACT,WAAY,CAZhB,iEAkBI,SAAU,CAlBd,kBAyBI,iBAAkB,CAClB,SAAU,CA1Bd,wBA6BM,SAAU,CACX,kBAWH,YAAa,CACb,kBAAmB,CACnB,sBxB2hBkC,CCrS9B,cAvE+B,CuB7KnC,exBgY+B,CwB/X/B,exBqY+B,CwBpY/B,axBlCgB,CwBmChB,iBAAkB,CAClB,kBAAmB,CACnB,wBxB5CgB,CwB6ChB,wBxB3CgB,CGOd,oBHkWgC,CwB5TnC,kHAYC,kBxBqhBgC,CCrT5B,iBAvE+B,CE3MjC,mBHoW+B,CwB/SlC,kHAMC,oBxBwgBiC,CCjT7B,iBAvE+B,CE3MjC,mBHmW+B,CwBrSlC,0DAIC,kBAAsE,CACvE,qKrBnDG,yBqBiE8B,CrBhE9B,4BqBgE8B,CAJlC,4JrB7DI,yBqBwE8B,CrBvE9B,4BqBuE8B,CAXlC,0IAqBI,gBxBmP6B,CGvT7B,wBqBqE8B,CrBpE9B,2BqBoE8B,CAF4B,gBC1F1D,YAAa,CACb,UAAW,CACX,iBzB2nB0C,CClXxC,gBAvE+B,CwB/LjC,azBca,CyBbd,eAGC,iBAAkB,CAClB,QAAS,CACT,SAAU,CACV,YAAa,CACb,cAAe,CACf,oBzBmlC4C,CyBllC5C,gBAAiB,CxB4Pf,iBAvE+B,CwBlLjC,UzBpCW,CyBqCX,oCzBAa,CG1Bb,oBHkWgC,CyB/WhC,sIA8CE,aAAc,CA9ChB,0DAoDE,oBzBbW,CyBgBT,kCvBkIwD,CuBjIxD,wDvBsB0E,CuBrB1E,2BAA4B,CAC5B,wDAA6D,CAC7D,2DvB8HwD,CuBzL5D,sEA+DI,oBzBxBS,CyByBT,4CzBzBS,CyBvCb,0EAyEI,kCvBgHwD,CuB/GxD,6EvB+GwD,CuBzL5D,wDAiFE,oBzB1CW,CyBvCb,4NAsFM,sBzB4sB2F,CyB3sB3F,gGvBTwE,CuBUxE,4DzB6rBoD,CyB5rBpD,qEvBgGsD,CuBzL5D,oEA8FI,oBzBvDS,CyBwDT,4CzBxDS,CyBvCb,kEAsGE,oBzB/DW,CyBvCb,kFAyGI,wBzBlES,CyBvCb,8EA6GI,4CzBtES,CyBvCb,0GAiHI,azB1ES,CyB2EV,uDAKD,gBAAiB,CAvHnB,sKA+HI,SAAU,CA/Hd,8LAoII,SAAU,CACX,kBAjHH,YAAa,CACb,UAAW,CACX,iBzB2nB0C,CClXxC,gBAvE+B,CwB/LjC,azBWa,CyBVd,iBAGC,iBAAkB,CAClB,QAAS,CACT,SAAU,CACV,YAAa,CACb,cAAe,CACf,oBzBmlC4C,CyBllC5C,gBAAiB,CxB4Pf,iBAvE+B,CwBlLjC,UzBpCW,CyBqCX,oCzBHa,CGvBb,oBHkWgC,CyB/WhC,sJA8CE,aAAc,CA9ChB,8DAoDE,oBzBhBW,CyBmBT,kCvBkIwD,CuBjIxD,wDvBsB0E,CuBrB1E,2BAA4B,CAC5B,wDAA6D,CAC7D,2DvB8HwD,CuBzL5D,0EA+DI,oBzB3BS,CyB4BT,4CzB5BS,CyBpCb,8EAyEI,kCvBgHwD,CuB/GxD,6EvB+GwD,CuBzL5D,4DAiFE,oBzB7CW,CyBpCb,oOAsFM,sBzB4sB2F,CyB3sB3F,gGvBTwE,CuBUxE,4DzB6rBoD,CyB5rBpD,qEvBgGsD,CuBzL5D,wEA8FI,oBzB1DS,CyB2DT,4CzB3DS,CyBpCb,sEAsGE,oBzBlEW,CyBpCb,sFAyGI,wBzBrES,CyBpCb,kFA6GI,4CzBzES,CyBpCb,8GAiHI,azB7ES,CyB8EV,yDAKD,gBAAiB,CAvHnB,8KAiII,SAAU,CAjId,sMAoII,SAAU,CACX,KCtIL,oBAAqB,CAErB,e1B0a+B,C0Bza/B,e1B+a+B,C0B9a/B,a1BQgB,C0BPhB,iBAAkB,CAClB,oBAAwD,CAExD,qBAAsB,CACtB,cAA2C,CAC3C,gBAAiB,CACjB,4BAA6B,CAC7B,4BAA2C,CC8G3C,sB3B2ckC,CCrS9B,cAvE+B,CE3MjC,oBHkWgC,CkBrW9B,iIlBunB6I,CkBnnB7I,wCQhBN,KRiBQ,eAAgB,CQ6BvB,CA9CD,WAkBI,a1BLc,C0BOf,iCAIC,SAAU,CACV,6C1BSa,C0BlCjB,mDA0CI,mBAAoB,CACpB,W1B4kB6B,C0B1kB9B,aC7BD,U3BZa,CmBJb,wBnBkCe,C2BhBf,oB3BgBe,C2Bbf,mBACE,U3BlBW,CmBJb,wBjB4JmC,CyBpIjC,oBzBoIiC,CyBnIlC,iDAIC,U3BzBW,CmBJb,wBjB4JmC,CyB7HjC,oBzB6HiC,CyBxH/B,4CAAiE,CAEpE,0IAOC,U3BzCW,C2B0CX,wBzB8GiC,CyB3GjC,oBzB2GiC,CyBpHnC,wKAgBM,4CAAiE,CAEpE,4CAKD,U3B3DW,C2B4DX,wB3B9Ba,C2BiCb,oB3BjCa,C2BkCd,eApDD,U3BZa,CmBJb,wBnBUgB,C2BQhB,oB3BRgB,C2BWhB,qBACE,U3BlBW,CmBJb,wBjB4JmC,CyBpIjC,oBzBoIiC,CyBnIlC,qDAIC,U3BzBW,CmBJb,wBjB4JmC,CyB7HjC,oBzB6HiC,CyBxH/B,6CAAiE,CAEpE,oJAOC,U3BzCW,C2B0CX,wBzB8GiC,CyB3GjC,oBzB2GiC,CyBpHnC,kLAgBM,6CAAiE,CAEpE,gDAKD,U3B3DW,C2B4DX,wB3BtDc,C2ByDd,oB3BzDc,C2B0Df,aApDD,U3BZa,CmBJb,wBnByCe,C2BvBf,oB3BuBe,C2BpBf,mBACE,U3BlBW,CmBJb,wBjB4JmC,CyBpIjC,oBzBoIiC,CyBnIlC,iDAIC,U3BzBW,CmBJb,wBjB4JmC,CyB7HjC,oBzB6HiC,CyBxH/B,4CAAiE,CAEpE,0IAOC,U3BzCW,C2B0CX,wBzB8GiC,CyB3GjC,oBzB2GiC,CyBpHnC,wKAgBM,4CAAiE,CAEpE,4CAKD,U3B3DW,C2B4DX,wB3BvBa,C2B0Bb,oB3B1Ba,C2B2Bd,UApDD,U3BFa,CmBdb,wBnB2Ce,C2BzBf,oB3ByBe,C2BtBf,gBACE,U3BRW,CmBdb,wBjBuJmC,CyB/HjC,oBzB+HiC,CyB9HlC,2CAIC,U3BfW,CmBdb,wBjBuJmC,CyBxHjC,oBzBwHiC,CyBnH/B,4CAAiE,CAEpE,2HAOC,U3B/BW,C2BgCX,wBzByGiC,CyBtGjC,oBzBsGiC,CyB/GnC,yJAgBM,4CAAiE,CAEpE,sCAKD,U3BjDW,C2BkDX,wB3BrBa,C2BwBb,oB3BxBa,C2ByBd,aApDD,U3BFa,CmBdb,wBnBwCe,C2BtBf,oB3BsBe,C2BnBf,mBACE,U3BRW,CmBdb,wBjBuJmC,CyB/HjC,oBzB+HiC,CyB9HlC,iDAIC,U3BfW,CmBdb,wBjBuJmC,CyBxHjC,oBzBwHiC,CyBnH/B,2CAAiE,CAEpE,0IAOC,U3B/BW,C2BgCX,wBzByGiC,CyBtGjC,oBzBsGiC,CyB/GnC,wKAgBM,2CAAiE,CAEpE,4CAKD,U3BjDW,C2BkDX,wB3BxBa,C2B2Bb,oB3B3Ba,C2B4Bd,YApDD,U3BZa,CmBJb,wBnBsCe,C2BpBf,oB3BoBe,C2BjBf,kBACE,U3BlBW,CmBJb,wBjB4JmC,CyBpIjC,oBzBoIiC,CyBnIlC,+CAIC,U3BzBW,CmBJb,wBjB4JmC,CyB7HjC,oBzB6HiC,CyBxH/B,2CAAiE,CAEpE,qIAOC,U3BzCW,C2B0CX,wBzB8GiC,CyB3GjC,oBzB2GiC,CyBpHnC,mKAgBM,2CAAiE,CAEpE,0CAKD,U3B3DW,C2B4DX,wB3B1Ba,C2B6Bb,oB3B7Ba,C2B8Bd,WApDD,U3BFa,CmBdb,wBnBKgB,C2BahB,oB3BbgB,C2BgBhB,iBACE,U3BRW,CmBdb,wBjBuJmC,CyB/HjC,oBzB+HiC,CyB9HlC,6CAIC,U3BfW,CmBdb,wBjBuJmC,CyBxHjC,oBzBwHiC,CyBnH/B,6CAAiE,CAEpE,gIAOC,U3B/BW,C2BgCX,wBzByGiC,CyBtGjC,oBzBsGiC,CyB/GnC,8JAgBM,6CAAiE,CAEpE,wCAKD,U3BjDW,C2BkDX,wB3B3Dc,C2B8Dd,oB3B9Dc,C2B+Df,UApDD,U3BZa,CmBJb,wBnBagB,C2BKhB,oB3BLgB,C2BQhB,gBACE,U3BlBW,CmBJb,wBjB4JmC,CyBpIjC,oBzBoIiC,CyBnIlC,2CAIC,U3BzBW,CmBJb,wBjB4JmC,CyB7HjC,oBzB6HiC,CyBxH/B,0CAAiE,CAEpE,2HAOC,U3BzCW,C2B0CX,wBzB8GiC,CyB3GjC,oBzB2GiC,CyBpHnC,yJAgBM,0CAAiE,CAEpE,sCAKD,U3B3DW,C2B4DX,wB3BnDc,C2BsDd,oB3BtDc,C2BuDf,qBAYD,a3B9Ce,C2B+Cf,oB3B/Ce,C2BiDf,2BACE,U3BhFW,C2BiFX,wB3BnDa,C2BoDb,oB3BpDa,C2BqDd,iEAIC,4C3BzDa,C2B0Dd,iLAOC,U3B/FW,C2BgGX,wB3BlEa,C2BmEb,oB3BnEa,C2B4Df,+MAcM,4C3B1ES,C2B4EZ,4DAKD,a3BjFa,C2BkFb,4BAA6B,CAC9B,uBArCD,a3BtEgB,C2BuEhB,oB3BvEgB,C2ByEhB,6BACE,U3BhFW,C2BiFX,wB3B3Ec,C2B4Ed,oB3B5Ec,C2B6Ef,qEAIC,6C3BjFc,C2BkFf,2LAOC,U3B/FW,C2BgGX,wB3B1Fc,C2B2Fd,oB3B3Fc,C2BoFhB,yNAcM,6C3BlGU,C2BoGb,gEAKD,a3BzGc,C2B0Gd,4BAA6B,CAC9B,qBArCD,a3BvCe,C2BwCf,oB3BxCe,C2B0Cf,2BACE,U3BhFW,C2BiFX,wB3B5Ca,C2B6Cb,oB3B7Ca,C2B8Cd,iEAIC,2C3BlDa,C2BmDd,iLAOC,U3B/FW,C2BgGX,wB3B3Da,C2B4Db,oB3B5Da,C2BqDf,+MAcM,2C3BnES,C2BqEZ,4DAKD,a3B1Ea,C2B2Eb,4BAA6B,CAC9B,kBArCD,a3BrCe,C2BsCf,oB3BtCe,C2BwCf,wBACE,U3BtEW,C2BuEX,wB3B1Ca,C2B2Cb,oB3B3Ca,C2B4Cd,2DAIC,4C3BhDa,C2BiDd,kKAOC,U3BrFW,C2BsFX,wB3BzDa,C2B0Db,oB3B1Da,C2BmDf,gMAcM,4C3BjES,C2BmEZ,sDAKD,a3BxEa,C2ByEb,4BAA6B,CAC9B,qBArCD,a3BxCe,C2ByCf,oB3BzCe,C2B2Cf,2BACE,U3BtEW,C2BuEX,wB3B7Ca,C2B8Cb,oB3B9Ca,C2B+Cd,iEAIC,2C3BnDa,C2BoDd,iLAOC,U3BrFW,C2BsFX,wB3B5Da,C2B6Db,oB3B7Da,C2BsDf,+MAcM,2C3BpES,C2BsEZ,4DAKD,a3B3Ea,C2B4Eb,4BAA6B,CAC9B,oBArCD,a3B1Ce,C2B2Cf,oB3B3Ce,C2B6Cf,0BACE,U3BhFW,C2BiFX,wB3B/Ca,C2BgDb,oB3BhDa,C2BiDd,+DAIC,2C3BrDa,C2BsDd,4KAOC,U3B/FW,C2BgGX,wB3B9Da,C2B+Db,oB3B/Da,C2BwDf,0MAcM,2C3BtES,C2BwEZ,0DAKD,a3B7Ea,C2B8Eb,4BAA6B,CAC9B,mBArCD,a3B3EgB,C2B4EhB,oB3B5EgB,C2B8EhB,yBACE,U3BtEW,C2BuEX,wB3BhFc,C2BiFd,oB3BjFc,C2BkFf,6DAIC,6C3BtFc,C2BuFf,uKAOC,U3BrFW,C2BsFX,wB3B/Fc,C2BgGd,oB3BhGc,C2ByFhB,qMAcM,6C3BvGU,C2ByGb,wDAKD,a3B9Gc,C2B+Gd,4BAA6B,CAC9B,kBArCD,a3BnEgB,C2BoEhB,oB3BpEgB,C2BsEhB,wBACE,U3BhFW,C2BiFX,wB3BxEc,C2ByEd,oB3BzEc,C2B0Ef,2DAIC,0C3B9Ec,C2B+Ef,kKAOC,U3B/FW,C2BgGX,wB3BvFc,C2BwFd,oB3BxFc,C2BiFhB,gMAcM,0C3B/FU,C2BiGb,sDAKD,a3BtGc,C2BuGd,4BAA6B,CAC9B,UD3CD,e1BmW+B,C0BlW/B,a1BzCe,C0B0Cf,yB1BgNiD,C0BnNnD,gBAMI,axB6EiC,CwBnFrC,sCAgBI,a1B/Ec,C0BgFf,2BCiCD,kB3B2dgC,CCrT5B,iBAvE+B,CE3MjC,mBHoW+B,C0B7QlC,2BCqBC,oB3BudiC,CCjT7B,iBAvE+B,CE3MjC,mBHmW+B,C0BxQlC,MR9FK,+BlB4X2C,CkBxX3C,wCUpBN,MVqBQ,eAAgB,CUfvB,CAND,iBAII,SAAU,CACX,qBAMC,YAAa,CACd,YAID,QAAS,CACT,eAAgB,CVDZ,4BWhBgC,CXoBhC,wCULN,YVMQ,eAAgB,CUFvB,CElBD,sCAIE,iBAAkB,CN6FG,iBMzFrB,kBAAmB,CCqBjB,wBACE,oBAAqB,CACrB,kB/BwW0C,C+BvW1C,qB/BsW0C,C+BrW1C,UAAW,CAhCf,qBAA8B,CAC9B,mCAA4C,CAC5C,eAAgB,CAChB,kCAA2C,CAqCxC,8BAiBC,aAAc,CACf,eD3CH,iBAAkB,CAClB,Y9Bu3BsC,C8Bt3BtC,YAAa,CACb,e9B48BuC,C8B38BvC,e9B48BmC,C8B38BnC,QAAS,C7B+QL,cAvE+B,C6BtMnC,a9BPgB,C8BQhB,eAAgB,CAChB,eAAgB,CAChB,qB9BnBa,C8BoBb,2BAA4B,CAC5B,iC9BXa,CGCX,oBHkWgC,C8BrWpC,+BAkBI,QAAS,CACT,MAAO,CACP,kB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BA4BI,aAAc,CACd,apCskC6C,CoCrkC7C,cpCqkC6C,CoCpkC7C,gBAAiB,CACjB,UAAW,CACX,yDlC+C8E,CkC9C9E,2BAA4B,CAC5B,uBpCgkC6C,CkBvlC3C,qClB0lC6D,CkBtlC7D,wCkBhBN,yBlBiBQ,eAAgB,CkBoBrB,CArCH,wBAwCI,SAAU,CAxCd,wBA4CI,SAAU,CACV,oBlC0GiC,CkCzGjC,SAAU,CACV,6CpCba,CoCcd,kBAID,eAAgB,CACjB,gBAGC,qBpCpDa,CoCqDb,kCpC3Ca,CoCyCf,8BjC/BI,6BHyVgC,CGxVhC,8BHwVgC,CoC1TpC,gDjC/BI,yCD+L4D,CC9L5D,0CD8L4D,CkChKhE,oCAaI,YAAa,CAbjB,6BjCjBI,iCH2UgC,CG1UhC,gCH0UgC,CoC1TpC,yDjCjBI,6CDiL4D,CChL5D,4CDgL4D,CkChKhE,iDjCjBI,iCH2UgC,CG1UhC,gCH0UgC,CoC9R/B,gBAKH,oBpCq/B+C,CoCp/BhD,qCASG,cAAe,CAFnB,iCAMI,cAAe,CACf,aAAc,CjCxFd,eiCyFwB,CAR5B,6CAUoB,YAAa,CAVjC,4CAWmB,eAAgB,CAXnC,mDjCjFI,eiC+F0B,CACzB,YClHH,YAAa,CACb,cAAe,CACf,WrC40CmC,CqC30CnC,kBrC60CsC,CqC30CtC,eAAgB,CAGjB,kCAKG,kBrCk0CqC,CqCr0CzC,0CAMM,UAAW,CACX,mBrC8zCmC,CqC7zCnC,arCLY,CqCMZ,wCAAS,EAAkG,2CAAuH,CAAO,CAT/O,wBAcI,arCXc,CqCYf,YCzBD,YAAa,CjCGb,cAAe,CACf,eAAgB,CiCFjB,WAGC,iBAAkB,CAClB,aAAc,CACd,atC8Be,CsC7Bf,oBAAwD,CACxD,qBtCFa,CsCGb,wBtCAgB,CkBKZ,iIlBiiCoJ,CkB7hCpJ,wCoBfN,WpBgBQ,eAAgB,CoBQvB,CAxBD,iBAUI,SAAU,CACV,apCgJiC,CoC9IjC,wBtCRc,CsCSd,oBtCRc,CsCNlB,iBAkBI,SAAU,CACV,apCwIiC,CoCvIjC,wBtCfc,CsCgBd,StCygCiC,CsCxgCjC,6CtCWa,CsCVd,wCAKC,gBtCuU6B,CsCzUjC,6BAMI,SAAU,CACV,UtC9BW,CmBJb,wBnBkCe,CsCEb,oBtCFa,CsCPjB,+BAaI,atC9Bc,CsC+Bd,mBAAoB,CACpB,qBtCtCW,CsCuCX,oBtCpCc,CsCNlB,WCAI,sBvC8gCsC,CuC5gCvC,kCpC0CC,6BHoUgC,CGnUhC,gCHmUgC,CuC5WlC,iCpC0BE,8BHkVgC,CGjVhC,iCHiVgC,CuCjXlC,0BACE,qBvCkhCsC,CClvBpC,iBAvE+B,CsCvNlC,iDpC0CC,4BHsU+B,CGrU/B,+BHqU+B,CuCzW1B,gDpCqBL,6BHoV+B,CGnV/B,gCHmV+B,CuCnXjC,0BACE,oBvCghCqC,CChvBnC,iBAvE+B,CsCvNlC,iDpC0CC,4BHqU+B,CGpU/B,+BHoU+B,CuCxW1B,gDpCqBL,6BHmV+B,CGlV/B,gCHkV+B,CuClW1B,OCdP,oBAAqB,CACrB,mBxCgsCuC,CCl6BnC,eAvE+B,CuCrNnC,exCya+B,CwCxa/B,aAAc,CACd,UxCHa,CwCIb,iBAAkB,CAClB,kBAAmB,CACnB,uBAAwB,CrCKtB,oBHkWgC,CwChXpC,aAeI,YAAa,CACd,YAKD,iBAAkB,CAClB,QAAS,CACV,OCvBC,iBAAkB,CAClB,iBzCmPW,CyClPX,kBzCuvCkC,CyCtvClC,4BAA6C,CtCW3C,oBHkWgC,CyC3WnC,eAKC,aAAc,CACf,YAIC,ezC8Z+B,CyC7ZhC,mBAQC,kBzCwuCkD,CyCzuCpD,8BAKI,iBAAkB,CAClB,KAAM,CACN,OAAQ,CACR,SzCkQuC,CyCjQvC,oBzCoNS,CyCnNV,eCpCD,axC8JmC,CiB5JnC,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,2BACE,axCyJiC,CwCxJlC,iBAND,axC8JmC,CiB5JnC,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,6BACE,axCyJiC,CwCxJlC,eAND,axC8JmC,CiB5JnC,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,2BACE,axCyJiC,CwCxJlC,YAND,aDgDuF,CtB9CvF,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,wBACE,axCyJiC,CwCxJlC,eAND,aDgDuF,CtB9CvF,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,2BACE,axCyJiC,CwCxJlC,cAND,axC8JmC,CiB5JnC,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,0BACE,axCyJiC,CwCxJlC,aAND,aDgDuF,CtB9CvF,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,yBACE,axCyJiC,CwCxJlC,YAND,axC8JmC,CiB5JnC,wBjBuJmC,CwCvJnC,oBxCuJmC,CwCrJnC,wBACE,axCyJiC,CwCxJlC,gCCHC,GAAK,0B3CuwC+B,CAAA,C2ClwCxC,UACE,YAAa,CACb,W3CgwCsC,C2C/vCtC,eAAgB,C1CwRZ,gBAvE+B,C0C/MnC,wB3CLgB,CGSd,oBHkWgC,C2CnWnC,cAGC,YAAa,CACb,qBAAsB,CACtB,sBAAuB,CACvB,eAAgB,CAChB,U3CjBa,C2CkBb,iBAAkB,CAClB,kBAAmB,CACnB,wB3CUe,CkBtBX,0BlBowC4C,CkBhwC5C,wCyBAN,czBCQ,eAAgB,CyBSvB,CAED,sBxBYE,2LAA6I,CwBV7I,yB3C0uCsC,C2CzuCvC,uBAIG,iDAA8D,CAG5D,wCAJJ,uBAKM,cAAe,CAGpB,CC1CH,YACE,YAAa,CACb,qBAAsB,CAGtB,cAAe,CACf,eAAgB,CzCSd,oBHkWgC,C4CzWnC,qBAGC,oBAAqB,CACrB,qBAAsB,CAFxB,gCAMI,mCAAoC,CACpC,yBAA0B,CAC3B,wBAUD,UAAW,CACX,a5ClBgB,C4CmBhB,kBAAmB,CAHrB,4DAQI,SAAU,CACV,a5CzBc,C4C0Bd,oBAAqB,CACrB,wB5CjCc,C4CsBlB,+BAeI,a5C7Bc,C4C8Bd,wB5CrCc,C4CsCf,iBASD,iBAAkB,CAClB,aAAc,CACd,kB5C8LW,C4C7LX,a5C3CgB,C4C4ChB,oBAAwD,CACxD,qB5CtDa,C4CuDb,kC5C7Ca,C4CsCf,6BzC5BI,8ByCsCkC,CzCrClC,+ByCqCkC,CAVtC,4BzCdI,kCyC4BqC,CzC3BrC,iCyC2BqC,CAdzC,oDAmBI,a5C7Dc,C4C8Dd,mBAAoB,CACpB,qB5CrEW,C4CgDf,wBA0BI,SAAU,CACV,U5C3EW,C4C4EX,wB5C9Ca,C4C+Cb,oB5C/Ca,C4CkBjB,kCAiCI,kBAAmB,CAjCvB,yCAoCM,e5C4Q2B,C4C3Q3B,oB5C2Q2B,C4C1Q5B,uBAcC,kBAAmB,CADrB,oDzCjCA,gCH2SgC,CGvThC,yByCmDsC,CANtC,mDzC7CA,8BHuTgC,CG3ShC,2ByC4C2C,CAX3C,+CAeM,YAAa,CAfnB,yDAmBM,oB5C0OuB,C4CzOvB,mBAAoB,CApB1B,gEAuBQ,gB5CsOqB,C4CrOrB,qB5CqOqB,CSzS7B,0BmC4CA,0BACE,kBAAmB,CADrB,uDzCjCA,gCH2SgC,CGvThC,yByCmDsC,CANtC,sDzC7CA,8BHuTgC,CG3ShC,2ByC4C2C,CAX3C,kDAeM,YAAa,CAfnB,4DAmBM,oB5C0OuB,C4CzOvB,mBAAoB,CApB1B,mEAuBQ,gB5CsOqB,C4CrOrB,qB5CqOqB,C4CpOtB,CnCrEP,0BmC4CA,0BACE,kBAAmB,CADrB,uDzCjCA,gCH2SgC,CGvThC,yByCmDsC,CANtC,sDzC7CA,8BHuTgC,CG3ShC,2ByC4C2C,CAX3C,kDAeM,YAAa,CAfnB,4DAmBM,oB5C0OuB,C4CzOvB,mBAAoB,CApB1B,mEAuBQ,gB5CsOqB,C4CrOrB,qB5CqOqB,C4CpOtB,CnCrEP,0BmC4CA,0BACE,kBAAmB,CADrB,uDzCjCA,gCH2SgC,CGvThC,yByCmDsC,CANtC,sDzC7CA,8BHuTgC,CG3ShC,2ByC4C2C,CAX3C,kDAeM,YAAa,CAfnB,4DAmBM,oB5C0OuB,C4CzOvB,mBAAoB,CApB1B,mEAuBQ,gB5CsOqB,C4CrOrB,qB5CqOqB,C4CpOtB,CnCrEP,2BmC4CA,0BACE,kBAAmB,CADrB,uDzCjCA,gCH2SgC,CGvThC,yByCmDsC,CANtC,sDzC7CA,8BHuTgC,CG3ShC,2ByC4C2C,CAX3C,kDAeM,YAAa,CAfnB,4DAmBM,oB5C0OuB,C4CzOvB,mBAAoB,CApB1B,mEAuBQ,gB5CsOqB,C4CrOrB,qB5CqOqB,C4CpOtB,CnCrEP,2BmC4CA,2BACE,kBAAmB,CADrB,wDzCjCA,gCH2SgC,CGvThC,yByCmDsC,CANtC,uDzC7CA,8BHuTgC,CG3ShC,2ByC4C2C,CAX3C,mDAeM,YAAa,CAfnB,6DAmBM,oB5C0OuB,C4CzOvB,mBAAoB,CApB1B,oEAuBQ,gB5CsOqB,C4CrOrB,qB5CqOqB,C4CpOtB,CAaX,kBzC9HI,eyC+HsB,CAD1B,mCAII,oB5CmN6B,C4CvNjC,8CAOM,qBAAsB,CCpJ1B,yBACE,a3C2JiC,C2C1JjC,wB3CqJiC,C2CvJnC,4GAOM,a3CqJ6B,C2CpJ7B,wB3CoJ6B,C2C5JnC,uDAYM,U7CRO,C6CSP,wB3C+I6B,C2C9I7B,oB3C8I6B,C2C5JnC,2BACE,a3C2JiC,C2C1JjC,wB3CqJiC,C2CvJnC,gHAOM,a3CqJ6B,C2CpJ7B,wB3CoJ6B,C2C5JnC,yDAYM,U7CRO,C6CSP,wB3C+I6B,C2C9I7B,oB3C8I6B,C2C5JnC,yBACE,a3C2JiC,C2C1JjC,wB3CqJiC,C2CvJnC,4GAOM,a3CqJ6B,C2CpJ7B,wB3CoJ6B,C2C5JnC,uDAYM,U7CRO,C6CSP,wB3C+I6B,C2C9I7B,oB3C8I6B,C2C5JnC,sBACE,aDmKiH,CClKjH,wB3CqJiC,C2CvJnC,sGAOM,aD6J6G,CC5J7G,wB3CoJ6B,C2C5JnC,oDAYM,U7CRO,C6CSP,wBDuJ6G,CCtJ7G,oBDsJ6G,CCpKnH,yBACE,aDmKiH,CClKjH,wB3CqJiC,C2CvJnC,4GAOM,aD6J6G,CC5J7G,wB3CoJ6B,C2C5JnC,uDAYM,U7CRO,C6CSP,wBDuJ6G,CCtJ7G,oBDsJ6G,CCpKnH,wBACE,a3C2JiC,C2C1JjC,wB3CqJiC,C2CvJnC,0GAOM,a3CqJ6B,C2CpJ7B,wB3CoJ6B,C2C5JnC,sDAYM,U7CRO,C6CSP,wB3C+I6B,C2C9I7B,oB3C8I6B,C2C5JnC,uBACE,aDmKiH,CClKjH,wB3CqJiC,C2CvJnC,wGAOM,aD6J6G,CC5J7G,wB3CoJ6B,C2C5JnC,qDAYM,U7CRO,C6CSP,wBDuJ6G,CCtJ7G,oBDsJ6G,CCpKnH,sBACE,a3C2JiC,C2C1JjC,wB3CqJiC,C2CvJnC,sGAOM,a3CqJ6B,C2CpJ7B,wB3CoJ6B,C2C5JnC,oDAYM,U7CRO,C6CSP,wB3C+I6B,C2C9I7B,oB3C8I6B,C2C7I9B,WCbL,sBAAuB,CACvB,S9C04C8B,C8Cz4C9B,U9Cy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",
                sourcesContent: ['/*!\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\n * Copyright 2011-2021 The Bootstrap Authors\n * Copyright 2011-2021 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */\n\n// scss-docs-start import-stack\n// Configuration\n@import "functions";\n@import "variables";\n@import "mixins";\n@import "utilities";\n\n// Layout & components\n@import "root";\n@import "reboot";\n@import "type";\n@import "images";\n@import "containers";\n@import "grid";\n@import "tables";\n@import "forms";\n@import "buttons";\n@import "transitions";\n@import "dropdown";\n@import "button-group";\n@import "nav";\n@import "navbar";\n@import "card";\n@import "accordion";\n@import "breadcrumb";\n@import "pagination";\n@import "badge";\n@import "alert";\n@import "progress";\n@import "list-group";\n@import "close";\n@import "toasts";\n@import "modal";\n@import "tooltip";\n@import "popover";\n@import "carousel";\n@import "spinners";\n@import "offcanvas";\n\n// Helpers\n@import "helpers";\n\n// Utilities\n@import "utilities/api";\n// scss-docs-end import-stack\n', "@import \"scss/bootstrap-overrides\";\n@import '~bootstrap/scss/bootstrap';\n\n@import 'scss/variables';\n@import 'scss/misc';\n@import 'scss/under_construction';\n@import 'scss/navbar';\n@import 'scss/intro';\n@import 'scss/faq';\n@import 'scss/celebrations';\n@import 'scss/people';\n@import 'scss/footer';\n@import 'scss/banner';\n", ":root {\n  // Custom variable values only support SassScript inside `#{}`.\n  @each $color, $value in $colors {\n    --#{$variable-prefix}#{$color}: #{$value};\n  }\n\n  @each $color, $value in $theme-colors {\n    --#{$variable-prefix}#{$color}: #{$value};\n  }\n\n  // Use `inspect` for lists so that quoted items keep the quotes.\n  // See https://github.com/sass/sass/issues/2383#issuecomment-336349172\n  --#{$variable-prefix}font-sans-serif: #{inspect($font-family-sans-serif)};\n  --#{$variable-prefix}font-monospace: #{inspect($font-family-monospace)};\n  --#{$variable-prefix}gradient: #{$gradient};\n}\n", '// stylelint-disable declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix\n\n\n// Reboot\n//\n// Normalization of HTML elements, manually forked from Normalize.css to remove\n// styles targeting irrelevant browsers while applying new styles.\n//\n// Normalize is licensed MIT. https://github.com/necolas/normalize.css\n\n\n// Document\n//\n// Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n\n// Root\n//\n// Ability to the value of the root font sizes, affecting the value of `rem`.\n// null by default, thus nothing is generated.\n\n:root {\n  font-size: $font-size-root;\n\n  @if $enable-smooth-scroll {\n    @media (prefers-reduced-motion: no-preference) {\n      scroll-behavior: smooth;\n    }\n  }\n}\n\n\n// Body\n//\n// 1. Remove the margin in all browsers.\n// 2. As a best practice, apply a default `background-color`.\n// 3. Prevent adjustments of font size after orientation changes in iOS.\n// 4. Change the default tap highlight to be completely transparent in iOS.\n\nbody {\n  margin: 0; // 1\n  font-family: $font-family-base;\n  @include font-size($font-size-base);\n  font-weight: $font-weight-base;\n  line-height: $line-height-base;\n  color: $body-color;\n  text-align: $body-text-align;\n  background-color: $body-bg; // 2\n  -webkit-text-size-adjust: 100%; // 3\n  -webkit-tap-highlight-color: rgba($black, 0); // 4\n}\n\n\n// Content grouping\n//\n// 1. Reset Firefox\'s gray color\n// 2. Set correct height and prevent the `size` attribute to make the `hr` look like an input field\n\nhr {\n  margin: $hr-margin-y 0;\n  color: $hr-color; // 1\n  background-color: currentColor;\n  border: 0;\n  opacity: $hr-opacity;\n}\n\nhr:not([size]) {\n  height: $hr-height; // 2\n}\n\n\n// Typography\n//\n// 1. Remove top margins from headings\n//    By default, `<h1>`-`<h6>` all receive top and bottom margins. We nuke the top\n//    margin for easier control within type scales as it avoids margin collapsing.\n\n%heading {\n  margin-top: 0; // 1\n  margin-bottom: $headings-margin-bottom;\n  font-family: $headings-font-family;\n  font-style: $headings-font-style;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n}\n\nh1 {\n  @extend %heading;\n  @include font-size($h1-font-size);\n}\n\nh2 {\n  @extend %heading;\n  @include font-size($h2-font-size);\n}\n\nh3 {\n  @extend %heading;\n  @include font-size($h3-font-size);\n}\n\nh4 {\n  @extend %heading;\n  @include font-size($h4-font-size);\n}\n\nh5 {\n  @extend %heading;\n  @include font-size($h5-font-size);\n}\n\nh6 {\n  @extend %heading;\n  @include font-size($h6-font-size);\n}\n\n\n// Reset margins on paragraphs\n//\n// Similarly, the top margin on `<p>`s get reset. However, we also reset the\n// bottom margin to use `rem` units instead of `em`.\n\np {\n  margin-top: 0;\n  margin-bottom: $paragraph-margin-bottom;\n}\n\n\n// Abbreviations\n//\n// 1. Duplicate behavior to the data-bs-* attribute for our tooltip plugin\n// 2. Add the correct text decoration in Chrome, Edge, Opera, and Safari.\n// 3. Add explicit cursor to indicate changed behavior.\n// 4. Prevent the text-decoration to be skipped.\n\nabbr[title],\nabbr[data-bs-original-title] { // 1\n  text-decoration: underline dotted; // 2\n  cursor: help; // 3\n  text-decoration-skip-ink: none; // 4\n}\n\n\n// Address\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\n\n// Lists\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: $dt-font-weight;\n}\n\n// 1. Undo browser default\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; // 1\n}\n\n\n// Blockquote\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\n\n// Strong\n//\n// Add the correct font weight in Chrome, Edge, and Safari\n\nb,\nstrong {\n  font-weight: $font-weight-bolder;\n}\n\n\n// Small\n//\n// Add the correct font size in all browsers\n\nsmall {\n  @include font-size($small-font-size);\n}\n\n\n// Mark\n\nmark {\n  padding: $mark-padding;\n  background-color: $mark-bg;\n}\n\n\n// Sub and Sup\n//\n// Prevent `sub` and `sup` elements from affecting the line height in\n// all browsers.\n\nsub,\nsup {\n  position: relative;\n  @include font-size($sub-sup-font-size);\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub { bottom: -.25em; }\nsup { top: -.5em; }\n\n\n// Links\n\na {\n  color: $link-color;\n  text-decoration: $link-decoration;\n\n  &:hover {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n}\n\n// And undo these styles for placeholder links/named anchors (without href).\n// It would be more straightforward to just use a[href] in previous block, but that\n// causes specificity issues in many other styles that are too complex to fix.\n// See https://github.com/twbs/bootstrap/issues/19402\n\na:not([href]):not([class]) {\n  &,\n  &:hover {\n    color: inherit;\n    text-decoration: none;\n  }\n}\n\n\n// Code\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: $font-family-code;\n  @include font-size(1em); // Correct the odd `em` font sizing in all browsers.\n  direction: ltr #{"/* rtl:ignore */"};\n  unicode-bidi: bidi-override;\n}\n\n// 1. Remove browser default top margin\n// 2. Reset browser default of `1em` to use `rem`s\n// 3. Don\'t allow content to break outside\n\npre {\n  display: block;\n  margin-top: 0; // 1\n  margin-bottom: 1rem; // 2\n  overflow: auto; // 3\n  @include font-size($code-font-size);\n  color: $pre-color;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    @include font-size(inherit);\n    color: inherit;\n    word-break: normal;\n  }\n}\n\ncode {\n  @include font-size($code-font-size);\n  color: $code-color;\n  word-wrap: break-word;\n\n  // Streamline the style when inside anchors to avoid broken underline and more\n  a > & {\n    color: inherit;\n  }\n}\n\nkbd {\n  padding: $kbd-padding-y $kbd-padding-x;\n  @include font-size($kbd-font-size);\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  @include border-radius($border-radius-sm);\n\n  kbd {\n    padding: 0;\n    @include font-size(1em);\n    font-weight: $nested-kbd-font-weight;\n  }\n}\n\n\n// Figures\n//\n// Apply a consistent margin strategy (matches our type styles).\n\nfigure {\n  margin: 0 0 1rem;\n}\n\n\n// Images and content\n\nimg,\nsvg {\n  vertical-align: middle;\n}\n\n\n// Tables\n//\n// Prevent double borders\n\ntable {\n  caption-side: bottom;\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: $table-cell-padding-y;\n  padding-bottom: $table-cell-padding-y;\n  color: $table-caption-color;\n  text-align: left;\n}\n\n// 1. Removes font-weight bold by inheriting\n// 2. Matches default `<td>` alignment by inheriting `text-align`.\n// 3. Fix alignment for Safari\n\nth {\n  font-weight: $table-th-font-weight; // 1\n  text-align: inherit; // 2\n  text-align: -webkit-match-parent; // 3\n}\n\nthead,\ntbody,\ntfoot,\ntr,\ntd,\nth {\n  border-color: inherit;\n  border-style: solid;\n  border-width: 0;\n}\n\n\n// Forms\n//\n// 1. Allow labels to use `margin` for spacing.\n\nlabel {\n  display: inline-block; // 1\n}\n\n// Remove the default `border-radius` that macOS Chrome adds.\n// See https://github.com/twbs/bootstrap/issues/24093\n\nbutton {\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 0;\n}\n\n// Explicitly remove focus outline in Chromium when it shouldn\'t be\n// visible (e.g. as result of mouse click or touch tap). It already\n// should be doing this automatically, but seems to currently be\n// confused and applies its very visible two-tone outline anyway.\n\nbutton:focus:not(:focus-visible) {\n  outline: 0;\n}\n\n// 1. Remove the margin in Firefox and Safari\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0; // 1\n  font-family: inherit;\n  @include font-size(inherit);\n  line-height: inherit;\n}\n\n// Remove the inheritance of text transform in Firefox\nbutton,\nselect {\n  text-transform: none;\n}\n// Set the cursor for non-`<button>` buttons\n//\n// Details at https://github.com/twbs/bootstrap/pull/30562\n[role="button"] {\n  cursor: pointer;\n}\n\nselect {\n  // Remove the inheritance of word-wrap in Safari.\n  // See https://github.com/twbs/bootstrap/issues/24990\n  word-wrap: normal;\n\n  // Undo the opacity change from Chrome\n  &:disabled {\n    opacity: 1;\n  }\n}\n\n// Remove the dropdown arrow in Chrome from inputs built with datalists.\n// See https://stackoverflow.com/a/54997118\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\n// 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n//    controls in Android 4.\n// 2. Correct the inability to style clickable types in iOS and Safari.\n// 3. Opinionated: add "hand" cursor to non-disabled button elements.\n\nbutton,\n[type="button"], // 1\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button; // 2\n\n  @if $enable-button-pointers {\n    &:not(:disabled) {\n      cursor: pointer; // 3\n    }\n  }\n}\n\n// Remove inner border and padding from Firefox, but don\'t restore the outline like Normalize.\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\n// 1. Textareas should really only resize vertically so they don\'t break their (horizontal) containers.\n\ntextarea {\n  resize: vertical; // 1\n}\n\n// 1. Browsers set a default `min-width: min-content;` on fieldsets,\n//    unlike e.g. `<div>`s, which have `min-width: 0;` by default.\n//    So we reset that to ensure fieldsets behave more like a standard block element.\n//    See https://github.com/twbs/bootstrap/issues/12359\n//    and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements\n// 2. Reset the default outline behavior of fieldsets so they don\'t affect page layout.\n\nfieldset {\n  min-width: 0; // 1\n  padding: 0; // 2\n  margin: 0; // 2\n  border: 0; // 2\n}\n\n// 1. By using `float: left`, the legend will behave like a block element.\n//    This way the border of a fieldset wraps around the legend if present.\n// 2. Fix wrapping bug.\n//    See https://github.com/twbs/bootstrap/issues/29712\n\nlegend {\n  float: left; // 1\n  width: 100%;\n  padding: 0;\n  margin-bottom: $legend-margin-bottom;\n  @include font-size($legend-font-size);\n  font-weight: $legend-font-weight;\n  line-height: inherit;\n\n  + * {\n    clear: left; // 2\n  }\n}\n\n// Fix height of inputs with a type of datetime-local, date, month, week, or time\n// See https://github.com/twbs/bootstrap/issues/18842\n\n::-webkit-datetime-edit-fields-wrapper,\n::-webkit-datetime-edit-text,\n::-webkit-datetime-edit-minute,\n::-webkit-datetime-edit-hour-field,\n::-webkit-datetime-edit-day-field,\n::-webkit-datetime-edit-month-field,\n::-webkit-datetime-edit-year-field {\n  padding: 0;\n}\n\n::-webkit-inner-spin-button {\n  height: auto;\n}\n\n// 1. Correct the outline style in Safari.\n// 2. This overrides the extra rounded corners on search inputs in iOS so that our\n//    `.form-control` class can properly style them. Note that this cannot simply\n//    be added to `.form-control` as it\'s not specific enough. For details, see\n//    https://github.com/twbs/bootstrap/issues/11586.\n\n[type="search"] {\n  outline-offset: -2px; // 1\n  -webkit-appearance: textfield; // 2\n}\n\n// 1. A few input types should stay LTR\n// See https://rtlstyling.com/posts/rtl-styling#form-inputs\n// 2. RTL only output\n// See https://rtlcss.com/learn/usage-guide/control-directives/#raw\n\n/* rtl:raw:\n[type="tel"],\n[type="url"],\n[type="email"],\n[type="number"] {\n  direction: ltr;\n}\n*/\n\n// Remove the inner padding in Chrome and Safari on macOS.\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n// Remove padding around color pickers in webkit browsers\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n\n// Inherit font family and line height for file input buttons\n\n::file-selector-button {\n  font: inherit;\n}\n\n// 1. Change font properties to `inherit`\n// 2. Correct the inability to style clickable types in iOS and Safari.\n\n::-webkit-file-upload-button {\n  font: inherit; // 1\n  -webkit-appearance: button; // 2\n}\n\n// Correct element displays\n\noutput {\n  display: inline-block;\n}\n\n// Remove border from iframe\n\niframe {\n  border: 0;\n}\n\n// Summary\n//\n// 1. Add the correct display in all browsers\n\nsummary {\n  display: list-item; // 1\n  cursor: pointer;\n}\n\n\n// Progress\n//\n// Add the correct vertical alignment in Chrome, Firefox, and Opera.\n\nprogress {\n  vertical-align: baseline;\n}\n\n\n// Hidden attribute\n//\n// Always hide an element with the `hidden` HTML attribute.\n\n[hidden] {\n  display: none !important;\n}\n', "// Variables\n//\n// Variables should follow the `$component-state-property-size` formula for\n// consistent naming. Ex: $nav-link-disabled-color and $modal-content-box-shadow-xs.\n\n// Color system\n\n// scss-docs-start gray-color-variables\n$white:    #fff !default;\n$gray-100: #f8f9fa !default;\n$gray-200: #e9ecef !default;\n$gray-300: #dee2e6 !default;\n$gray-400: #ced4da !default;\n$gray-500: #adb5bd !default;\n$gray-600: #6c757d !default;\n$gray-700: #495057 !default;\n$gray-800: #343a40 !default;\n$gray-900: #212529 !default;\n$black:    #000 !default;\n// scss-docs-end gray-color-variables\n\n// fusv-disable\n// scss-docs-start gray-colors-map\n$grays: (\n  \"100\": $gray-100,\n  \"200\": $gray-200,\n  \"300\": $gray-300,\n  \"400\": $gray-400,\n  \"500\": $gray-500,\n  \"600\": $gray-600,\n  \"700\": $gray-700,\n  \"800\": $gray-800,\n  \"900\": $gray-900\n) !default;\n// scss-docs-end gray-colors-map\n// fusv-enable\n\n// scss-docs-start color-variables\n$blue:    #0d6efd !default;\n$indigo:  #6610f2 !default;\n$purple:  #6f42c1 !default;\n$pink:    #d63384 !default;\n$red:     #dc3545 !default;\n$orange:  #fd7e14 !default;\n$yellow:  #ffc107 !default;\n$green:   #198754 !default;\n$teal:    #20c997 !default;\n$cyan:    #0dcaf0 !default;\n// scss-docs-end color-variables\n\n// scss-docs-start colors-map\n$colors: (\n  \"blue\":       $blue,\n  \"indigo\":     $indigo,\n  \"purple\":     $purple,\n  \"pink\":       $pink,\n  \"red\":        $red,\n  \"orange\":     $orange,\n  \"yellow\":     $yellow,\n  \"green\":      $green,\n  \"teal\":       $teal,\n  \"cyan\":       $cyan,\n  \"white\":      $white,\n  \"gray\":       $gray-600,\n  \"gray-dark\":  $gray-800\n) !default;\n// scss-docs-end colors-map\n\n// scss-docs-start theme-color-variables\n$primary:       $blue !default;\n$secondary:     $gray-600 !default;\n$success:       $green !default;\n$info:          $cyan !default;\n$warning:       $yellow !default;\n$danger:        $red !default;\n$light:         $gray-100 !default;\n$dark:          $gray-900 !default;\n// scss-docs-end theme-color-variables\n\n// scss-docs-start theme-colors-map\n$theme-colors: (\n  \"primary\":    $primary,\n  \"secondary\":  $secondary,\n  \"success\":    $success,\n  \"info\":       $info,\n  \"warning\":    $warning,\n  \"danger\":     $danger,\n  \"light\":      $light,\n  \"dark\":       $dark\n) !default;\n// scss-docs-end theme-colors-map\n\n// The contrast ratio to reach against white, to determine if color changes from \"light\" to \"dark\". Acceptable values for WCAG 2.0 are 3, 4.5 and 7.\n// See https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast\n$min-contrast-ratio:   4.5 !default;\n\n// Customize the light and dark text colors for use in our color contrast function.\n$color-contrast-dark:      $black !default;\n$color-contrast-light:     $white !default;\n\n// fusv-disable\n$blue-100: tint-color($blue, 80%) !default;\n$blue-200: tint-color($blue, 60%) !default;\n$blue-300: tint-color($blue, 40%) !default;\n$blue-400: tint-color($blue, 20%) !default;\n$blue-500: $blue !default;\n$blue-600: shade-color($blue, 20%) !default;\n$blue-700: shade-color($blue, 40%) !default;\n$blue-800: shade-color($blue, 60%) !default;\n$blue-900: shade-color($blue, 80%) !default;\n\n$indigo-100: tint-color($indigo, 80%) !default;\n$indigo-200: tint-color($indigo, 60%) !default;\n$indigo-300: tint-color($indigo, 40%) !default;\n$indigo-400: tint-color($indigo, 20%) !default;\n$indigo-500: $indigo !default;\n$indigo-600: shade-color($indigo, 20%) !default;\n$indigo-700: shade-color($indigo, 40%) !default;\n$indigo-800: shade-color($indigo, 60%) !default;\n$indigo-900: shade-color($indigo, 80%) !default;\n\n$purple-100: tint-color($purple, 80%) !default;\n$purple-200: tint-color($purple, 60%) !default;\n$purple-300: tint-color($purple, 40%) !default;\n$purple-400: tint-color($purple, 20%) !default;\n$purple-500: $purple !default;\n$purple-600: shade-color($purple, 20%) !default;\n$purple-700: shade-color($purple, 40%) !default;\n$purple-800: shade-color($purple, 60%) !default;\n$purple-900: shade-color($purple, 80%) !default;\n\n$pink-100: tint-color($pink, 80%) !default;\n$pink-200: tint-color($pink, 60%) !default;\n$pink-300: tint-color($pink, 40%) !default;\n$pink-400: tint-color($pink, 20%) !default;\n$pink-500: $pink !default;\n$pink-600: shade-color($pink, 20%) !default;\n$pink-700: shade-color($pink, 40%) !default;\n$pink-800: shade-color($pink, 60%) !default;\n$pink-900: shade-color($pink, 80%) !default;\n\n$red-100: tint-color($red, 80%) !default;\n$red-200: tint-color($red, 60%) !default;\n$red-300: tint-color($red, 40%) !default;\n$red-400: tint-color($red, 20%) !default;\n$red-500: $red !default;\n$red-600: shade-color($red, 20%) !default;\n$red-700: shade-color($red, 40%) !default;\n$red-800: shade-color($red, 60%) !default;\n$red-900: shade-color($red, 80%) !default;\n\n$orange-100: tint-color($orange, 80%) !default;\n$orange-200: tint-color($orange, 60%) !default;\n$orange-300: tint-color($orange, 40%) !default;\n$orange-400: tint-color($orange, 20%) !default;\n$orange-500: $orange !default;\n$orange-600: shade-color($orange, 20%) !default;\n$orange-700: shade-color($orange, 40%) !default;\n$orange-800: shade-color($orange, 60%) !default;\n$orange-900: shade-color($orange, 80%) !default;\n\n$yellow-100: tint-color($yellow, 80%) !default;\n$yellow-200: tint-color($yellow, 60%) !default;\n$yellow-300: tint-color($yellow, 40%) !default;\n$yellow-400: tint-color($yellow, 20%) !default;\n$yellow-500: $yellow !default;\n$yellow-600: shade-color($yellow, 20%) !default;\n$yellow-700: shade-color($yellow, 40%) !default;\n$yellow-800: shade-color($yellow, 60%) !default;\n$yellow-900: shade-color($yellow, 80%) !default;\n\n$green-100: tint-color($green, 80%) !default;\n$green-200: tint-color($green, 60%) !default;\n$green-300: tint-color($green, 40%) !default;\n$green-400: tint-color($green, 20%) !default;\n$green-500: $green !default;\n$green-600: shade-color($green, 20%) !default;\n$green-700: shade-color($green, 40%) !default;\n$green-800: shade-color($green, 60%) !default;\n$green-900: shade-color($green, 80%) !default;\n\n$teal-100: tint-color($teal, 80%) !default;\n$teal-200: tint-color($teal, 60%) !default;\n$teal-300: tint-color($teal, 40%) !default;\n$teal-400: tint-color($teal, 20%) !default;\n$teal-500: $teal !default;\n$teal-600: shade-color($teal, 20%) !default;\n$teal-700: shade-color($teal, 40%) !default;\n$teal-800: shade-color($teal, 60%) !default;\n$teal-900: shade-color($teal, 80%) !default;\n\n$cyan-100: tint-color($cyan, 80%) !default;\n$cyan-200: tint-color($cyan, 60%) !default;\n$cyan-300: tint-color($cyan, 40%) !default;\n$cyan-400: tint-color($cyan, 20%) !default;\n$cyan-500: $cyan !default;\n$cyan-600: shade-color($cyan, 20%) !default;\n$cyan-700: shade-color($cyan, 40%) !default;\n$cyan-800: shade-color($cyan, 60%) !default;\n$cyan-900: shade-color($cyan, 80%) !default;\n// fusv-enable\n\n// Characters which are escaped by the escape-svg function\n$escaped-characters: (\n  (\"<\", \"%3c\"),\n  (\">\", \"%3e\"),\n  (\"#\", \"%23\"),\n  (\"(\", \"%28\"),\n  (\")\", \"%29\"),\n) !default;\n\n// Options\n//\n// Quickly modify global styling by enabling or disabling optional features.\n\n$enable-caret:                true !default;\n$enable-rounded:              true !default;\n$enable-shadows:              false !default;\n$enable-gradients:            false !default;\n$enable-transitions:          true !default;\n$enable-reduced-motion:       true !default;\n$enable-smooth-scroll:        true !default;\n$enable-grid-classes:         true !default;\n$enable-button-pointers:      true !default;\n$enable-rfs:                  true !default;\n$enable-validation-icons:     true !default;\n$enable-negative-margins:     false !default;\n$enable-deprecation-messages: true !default;\n$enable-important-utilities:  true !default;\n\n// Prefix for :root CSS variables\n\n$variable-prefix:             bs- !default;\n\n// Gradient\n//\n// The gradient which is added to components if `$enable-gradients` is `true`\n// This gradient is also added to elements with `.bg-gradient`\n// scss-docs-start variable-gradient\n$gradient: linear-gradient(180deg, rgba($white, .15), rgba($white, 0)) !default;\n// scss-docs-end variable-gradient\n\n// Spacing\n//\n// Control the default styling of most Bootstrap elements by modifying these\n// variables. Mostly focused on spacing.\n// You can add more entries to the $spacers map, should you need more variation.\n\n// scss-docs-start spacer-variables-maps\n$spacer: 1rem !default;\n$spacers: (\n  0: 0,\n  1: $spacer * .25,\n  2: $spacer * .5,\n  3: $spacer,\n  4: $spacer * 1.5,\n  5: $spacer * 3,\n) !default;\n\n$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null) !default;\n// scss-docs-end spacer-variables-maps\n\n// Position\n//\n// Define the edge positioning anchors of the position utilities.\n\n// scss-docs-start position-map\n$position-values: (\n  0: 0,\n  50: 50%,\n  100: 100%\n) !default;\n// scss-docs-end position-map\n\n// Body\n//\n// Settings for the `<body>` element.\n\n$body-bg:                   $white !default;\n$body-color:                $gray-900 !default;\n$body-text-align:           null !default;\n\n\n// Links\n//\n// Style anchor elements.\n\n$link-color:                              $primary !default;\n$link-decoration:                         underline !default;\n$link-shade-percentage:                   20% !default;\n$link-hover-color:                        shift-color($link-color, $link-shade-percentage) !default;\n$link-hover-decoration:                   null !default;\n\n$stretched-link-pseudo-element:           after !default;\n$stretched-link-z-index:                  1 !default;\n\n// Paragraphs\n//\n// Style p element.\n\n$paragraph-margin-bottom:   1rem !default;\n\n\n// Grid breakpoints\n//\n// Define the minimum dimensions at which your layout will change,\n// adapting to different screen sizes, for use in media queries.\n\n// scss-docs-start grid-breakpoints\n$grid-breakpoints: (\n  xs: 0,\n  sm: 576px,\n  md: 768px,\n  lg: 992px,\n  xl: 1200px,\n  xxl: 1400px\n) !default;\n// scss-docs-end grid-breakpoints\n\n@include _assert-ascending($grid-breakpoints, \"$grid-breakpoints\");\n@include _assert-starts-at-zero($grid-breakpoints, \"$grid-breakpoints\");\n\n\n// Grid containers\n//\n// Define the maximum width of `.container` for different screen sizes.\n\n// scss-docs-start container-max-widths\n$container-max-widths: (\n  sm: 540px,\n  md: 720px,\n  lg: 960px,\n  xl: 1140px,\n  xxl: 1320px\n) !default;\n// scss-docs-end container-max-widths\n\n@include _assert-ascending($container-max-widths, \"$container-max-widths\");\n\n\n// Grid columns\n//\n// Set the number of columns and specify the width of the gutters.\n\n$grid-columns:                12 !default;\n$grid-gutter-width:           1.5rem !default;\n$grid-row-columns:            6 !default;\n\n$gutters: $spacers !default;\n\n// Container padding\n\n$container-padding-x: $grid-gutter-width * .5 !default;\n\n\n// Components\n//\n// Define common padding and border radius sizes and more.\n\n// scss-docs-start border-variables\n$border-width:                1px !default;\n$border-widths: (\n  1: 1px,\n  2: 2px,\n  3: 3px,\n  4: 4px,\n  5: 5px\n) !default;\n\n$border-color:                $gray-300 !default;\n// scss-docs-end border-variables\n\n// scss-docs-start border-radius-variables\n$border-radius:               .25rem !default;\n$border-radius-sm:            .2rem !default;\n$border-radius-lg:            .3rem !default;\n$border-radius-pill:          50rem !default;\n// scss-docs-end border-radius-variables\n\n// scss-docs-start box-shadow-variables\n$box-shadow:                  0 .5rem 1rem rgba($black, .15) !default;\n$box-shadow-sm:               0 .125rem .25rem rgba($black, .075) !default;\n$box-shadow-lg:               0 1rem 3rem rgba($black, .175) !default;\n$box-shadow-inset:            inset 0 1px 2px rgba($black, .075) !default;\n// scss-docs-end box-shadow-variables\n\n$component-active-color:      $white !default;\n$component-active-bg:         $primary !default;\n\n// scss-docs-start caret-variables\n$caret-width:                 .3em !default;\n$caret-vertical-align:        $caret-width * .85 !default;\n$caret-spacing:               $caret-width * .85 !default;\n// scss-docs-end caret-variables\n\n$transition-base:             all .2s ease-in-out !default;\n$transition-fade:             opacity .15s linear !default;\n// scss-docs-start collapse-transition\n$transition-collapse:         height .35s ease !default;\n// scss-docs-end collapse-transition\n\n// stylelint-disable function-disallowed-list\n// scss-docs-start aspect-ratios\n$aspect-ratios: (\n  \"1x1\": 100%,\n  \"4x3\": calc(3 / 4 * 100%),\n  \"16x9\": calc(9 / 16 * 100%),\n  \"21x9\": calc(9 / 21 * 100%)\n) !default;\n// scss-docs-end aspect-ratios\n// stylelint-enable function-disallowed-list\n\n// Typography\n//\n// Font, line-height, and color for body text, headings, and more.\n\n// scss-docs-start font-variables\n// stylelint-disable value-keyword-case\n$font-family-sans-serif:      system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\" !default;\n$font-family-monospace:       SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace !default;\n// stylelint-enable value-keyword-case\n$font-family-base:            var(--#{$variable-prefix}font-sans-serif) !default;\n$font-family-code:            var(--#{$variable-prefix}font-monospace) !default;\n\n// $font-size-root affects the value of `rem`, which is used for as well font sizes, paddings, and margins\n// $font-size-base affects the font size of the body text\n$font-size-root:              null !default;\n$font-size-base:              1rem !default; // Assumes the browser default, typically `16px`\n$font-size-sm:                $font-size-base * .875 !default;\n$font-size-lg:                $font-size-base * 1.25 !default;\n\n$font-weight-lighter:         lighter !default;\n$font-weight-light:           300 !default;\n$font-weight-normal:          400 !default;\n$font-weight-bold:            700 !default;\n$font-weight-bolder:          bolder !default;\n\n$font-weight-base:            $font-weight-normal !default;\n\n$line-height-base:            1.5 !default;\n$line-height-sm:              1.25 !default;\n$line-height-lg:              2 !default;\n\n$h1-font-size:                $font-size-base * 2.5 !default;\n$h2-font-size:                $font-size-base * 2 !default;\n$h3-font-size:                $font-size-base * 1.75 !default;\n$h4-font-size:                $font-size-base * 1.5 !default;\n$h5-font-size:                $font-size-base * 1.25 !default;\n$h6-font-size:                $font-size-base !default;\n// scss-docs-end font-variables\n\n// scss-docs-start font-sizes\n$font-sizes: (\n  1: $h1-font-size,\n  2: $h2-font-size,\n  3: $h3-font-size,\n  4: $h4-font-size,\n  5: $h5-font-size,\n  6: $h6-font-size\n) !default;\n// scss-docs-end font-sizes\n\n// scss-docs-start headings-variables\n$headings-margin-bottom:      $spacer * .5 !default;\n$headings-font-family:        null !default;\n$headings-font-style:         null !default;\n$headings-font-weight:        500 !default;\n$headings-line-height:        1.2 !default;\n$headings-color:              null !default;\n// scss-docs-end headings-variables\n\n// scss-docs-start display-headings\n$display-font-sizes: (\n  1: 5rem,\n  2: 4.5rem,\n  3: 4rem,\n  4: 3.5rem,\n  5: 3rem,\n  6: 2.5rem\n) !default;\n\n$display-font-weight: 300 !default;\n$display-line-height: $headings-line-height !default;\n// scss-docs-end display-headings\n\n// scss-docs-start type-variables\n$lead-font-size:              $font-size-base * 1.25 !default;\n$lead-font-weight:            300 !default;\n\n$small-font-size:             .875em !default;\n\n$sub-sup-font-size:           .75em !default;\n\n$text-muted:                  $gray-600 !default;\n\n$initialism-font-size:        $small-font-size !default;\n\n$blockquote-margin-y:         $spacer !default;\n$blockquote-font-size:        $font-size-base * 1.25 !default;\n$blockquote-footer-color:     $gray-600 !default;\n$blockquote-footer-font-size: $small-font-size !default;\n\n$hr-margin-y:                 $spacer !default;\n$hr-color:                    inherit !default;\n$hr-height:                   $border-width !default;\n$hr-opacity:                  .25 !default;\n\n$legend-margin-bottom:        .5rem !default;\n$legend-font-size:            1.5rem !default;\n$legend-font-weight:          null !default;\n\n$mark-padding:                .2em !default;\n\n$dt-font-weight:              $font-weight-bold !default;\n\n$nested-kbd-font-weight:      $font-weight-bold !default;\n\n$list-inline-padding:         .5rem !default;\n\n$mark-bg:                     #fcf8e3 !default;\n// scss-docs-end type-variables\n\n\n// Tables\n//\n// Customizes the `.table` component with basic values, each used across all table variations.\n\n// scss-docs-start table-variables\n$table-cell-padding-y:        .5rem !default;\n$table-cell-padding-x:        .5rem !default;\n$table-cell-padding-y-sm:     .25rem !default;\n$table-cell-padding-x-sm:     .25rem !default;\n\n$table-cell-vertical-align:   top !default;\n\n$table-color:                 $body-color !default;\n$table-bg:                    transparent !default;\n$table-accent-bg:             transparent !default;\n\n$table-th-font-weight:        null !default;\n\n$table-striped-color:         $table-color !default;\n$table-striped-bg-factor:     .05 !default;\n$table-striped-bg:            rgba($black, $table-striped-bg-factor) !default;\n\n$table-active-color:          $table-color !default;\n$table-active-bg-factor:      .1 !default;\n$table-active-bg:             rgba($black, $table-active-bg-factor) !default;\n\n$table-hover-color:           $table-color !default;\n$table-hover-bg-factor:       .075 !default;\n$table-hover-bg:              rgba($black, $table-hover-bg-factor) !default;\n\n$table-border-factor:         .1 !default;\n$table-border-width:          $border-width !default;\n$table-border-color:          $border-color !default;\n\n$table-striped-order:         odd !default;\n\n$table-group-separator-color: currentColor !default;\n\n$table-caption-color:         $text-muted !default;\n\n$table-bg-scale:              -80% !default;\n// scss-docs-end table-variables\n\n// scss-docs-start table-loop\n$table-variants: (\n  \"primary\":    shift-color($primary, $table-bg-scale),\n  \"secondary\":  shift-color($secondary, $table-bg-scale),\n  \"success\":    shift-color($success, $table-bg-scale),\n  \"info\":       shift-color($info, $table-bg-scale),\n  \"warning\":    shift-color($warning, $table-bg-scale),\n  \"danger\":     shift-color($danger, $table-bg-scale),\n  \"light\":      $light,\n  \"dark\":       $dark,\n) !default;\n// scss-docs-end table-loop\n\n\n// Buttons + Forms\n//\n// Shared variables that are reassigned to `$input-` and `$btn-` specific variables.\n\n// scss-docs-start input-btn-variables\n$input-btn-padding-y:         .375rem !default;\n$input-btn-padding-x:         .75rem !default;\n$input-btn-font-family:       null !default;\n$input-btn-font-size:         $font-size-base !default;\n$input-btn-line-height:       $line-height-base !default;\n\n$input-btn-focus-width:         .25rem !default;\n$input-btn-focus-color-opacity: .25 !default;\n$input-btn-focus-color:         rgba($component-active-bg, $input-btn-focus-color-opacity) !default;\n$input-btn-focus-blur:          0 !default;\n$input-btn-focus-box-shadow:    0 0 $input-btn-focus-blur $input-btn-focus-width $input-btn-focus-color !default;\n\n$input-btn-padding-y-sm:      .25rem !default;\n$input-btn-padding-x-sm:      .5rem !default;\n$input-btn-font-size-sm:      $font-size-sm !default;\n\n$input-btn-padding-y-lg:      .5rem !default;\n$input-btn-padding-x-lg:      1rem !default;\n$input-btn-font-size-lg:      $font-size-lg !default;\n\n$input-btn-border-width:      $border-width !default;\n// scss-docs-end input-btn-variables\n\n\n// Buttons\n//\n// For each of Bootstrap's buttons, define text, background, and border color.\n\n// scss-docs-start btn-variables\n$btn-padding-y:               $input-btn-padding-y !default;\n$btn-padding-x:               $input-btn-padding-x !default;\n$btn-font-family:             $input-btn-font-family !default;\n$btn-font-size:               $input-btn-font-size !default;\n$btn-line-height:             $input-btn-line-height !default;\n$btn-white-space:             null !default; // Set to `nowrap` to prevent text wrapping\n\n$btn-padding-y-sm:            $input-btn-padding-y-sm !default;\n$btn-padding-x-sm:            $input-btn-padding-x-sm !default;\n$btn-font-size-sm:            $input-btn-font-size-sm !default;\n\n$btn-padding-y-lg:            $input-btn-padding-y-lg !default;\n$btn-padding-x-lg:            $input-btn-padding-x-lg !default;\n$btn-font-size-lg:            $input-btn-font-size-lg !default;\n\n$btn-border-width:            $input-btn-border-width !default;\n\n$btn-font-weight:             $font-weight-normal !default;\n$btn-box-shadow:              inset 0 1px 0 rgba($white, .15), 0 1px 1px rgba($black, .075) !default;\n$btn-focus-width:             $input-btn-focus-width !default;\n$btn-focus-box-shadow:        $input-btn-focus-box-shadow !default;\n$btn-disabled-opacity:        .65 !default;\n$btn-active-box-shadow:       inset 0 3px 5px rgba($black, .125) !default;\n\n$btn-link-color:              $link-color !default;\n$btn-link-hover-color:        $link-hover-color !default;\n$btn-link-disabled-color:     $gray-600 !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius:           $border-radius !default;\n$btn-border-radius-sm:        $border-radius-sm !default;\n$btn-border-radius-lg:        $border-radius-lg !default;\n\n$btn-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$btn-hover-bg-shade-amount:       15% !default;\n$btn-hover-bg-tint-amount:        15% !default;\n$btn-hover-border-shade-amount:   20% !default;\n$btn-hover-border-tint-amount:    10% !default;\n$btn-active-bg-shade-amount:      20% !default;\n$btn-active-bg-tint-amount:       20% !default;\n$btn-active-border-shade-amount:  25% !default;\n$btn-active-border-tint-amount:   10% !default;\n// scss-docs-end btn-variables\n\n\n// Forms\n\n// scss-docs-start form-text-variables\n$form-text-margin-top:                  .25rem !default;\n$form-text-font-size:                   $small-font-size !default;\n$form-text-font-style:                  null !default;\n$form-text-font-weight:                 null !default;\n$form-text-color:                       $text-muted !default;\n// scss-docs-end form-text-variables\n\n// scss-docs-start form-label-variables\n$form-label-margin-bottom:              .5rem !default;\n$form-label-font-size:                  null !default;\n$form-label-font-style:                 null !default;\n$form-label-font-weight:                null !default;\n$form-label-color:                      null !default;\n// scss-docs-end form-label-variables\n\n// scss-docs-start form-input-variables\n$input-padding-y:                       $input-btn-padding-y !default;\n$input-padding-x:                       $input-btn-padding-x !default;\n$input-font-family:                     $input-btn-font-family !default;\n$input-font-size:                       $input-btn-font-size !default;\n$input-font-weight:                     $font-weight-base !default;\n$input-line-height:                     $input-btn-line-height !default;\n\n$input-padding-y-sm:                    $input-btn-padding-y-sm !default;\n$input-padding-x-sm:                    $input-btn-padding-x-sm !default;\n$input-font-size-sm:                    $input-btn-font-size-sm !default;\n\n$input-padding-y-lg:                    $input-btn-padding-y-lg !default;\n$input-padding-x-lg:                    $input-btn-padding-x-lg !default;\n$input-font-size-lg:                    $input-btn-font-size-lg !default;\n\n$input-bg:                              $white !default;\n$input-disabled-bg:                     $gray-200 !default;\n$input-disabled-border-color:           null !default;\n\n$input-color:                           $body-color !default;\n$input-border-color:                    $gray-400 !default;\n$input-border-width:                    $input-btn-border-width !default;\n$input-box-shadow:                      $box-shadow-inset !default;\n\n$input-border-radius:                   $border-radius !default;\n$input-border-radius-sm:                $border-radius-sm !default;\n$input-border-radius-lg:                $border-radius-lg !default;\n\n$input-focus-bg:                        $input-bg !default;\n$input-focus-border-color:              tint-color($component-active-bg, 50%) !default;\n$input-focus-color:                     $input-color !default;\n$input-focus-width:                     $input-btn-focus-width !default;\n$input-focus-box-shadow:                $input-btn-focus-box-shadow !default;\n\n$input-placeholder-color:               $gray-600 !default;\n$input-plaintext-color:                 $body-color !default;\n\n$input-height-border:                   $input-border-width * 2 !default;\n\n$input-height-inner:                    add($input-line-height * 1em, $input-padding-y * 2) !default;\n$input-height-inner-half:               add($input-line-height * .5em, $input-padding-y) !default;\n$input-height-inner-quarter:            add($input-line-height * .25em, $input-padding-y * .5) !default;\n\n$input-height:                          add($input-line-height * 1em, add($input-padding-y * 2, $input-height-border, false)) !default;\n$input-height-sm:                       add($input-line-height * 1em, add($input-padding-y-sm * 2, $input-height-border, false)) !default;\n$input-height-lg:                       add($input-line-height * 1em, add($input-padding-y-lg * 2, $input-height-border, false)) !default;\n\n$input-transition:                      border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n// scss-docs-end form-input-variables\n\n// scss-docs-start form-check-variables\n$form-check-input-width:                  1em !default;\n$form-check-min-height:                   $font-size-base * $line-height-base !default;\n$form-check-padding-start:                $form-check-input-width + .5em !default;\n$form-check-margin-bottom:                .125rem !default;\n$form-check-label-color:                  null !default;\n$form-check-label-cursor:                 null !default;\n$form-check-transition:                   null !default;\n\n$form-check-input-active-filter:          brightness(90%) !default;\n\n$form-check-input-bg:                     $input-bg !default;\n$form-check-input-border:                 1px solid rgba($black, .25) !default;\n$form-check-input-border-radius:          .25em !default;\n$form-check-radio-border-radius:          50% !default;\n$form-check-input-focus-border:           $input-focus-border-color !default;\n$form-check-input-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n\n$form-check-input-checked-color:          $component-active-color !default;\n$form-check-input-checked-bg-color:       $component-active-bg !default;\n$form-check-input-checked-border-color:   $form-check-input-checked-bg-color !default;\n$form-check-input-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-checked-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>\") !default;\n$form-check-radio-checked-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='#{$form-check-input-checked-color}'/></svg>\") !default;\n\n$form-check-input-indeterminate-color:          $component-active-color !default;\n$form-check-input-indeterminate-bg-color:       $component-active-bg !default;\n$form-check-input-indeterminate-border-color:   $form-check-input-indeterminate-bg-color !default;\n$form-check-input-indeterminate-bg-image:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='#{$form-check-input-indeterminate-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>\") !default;\n\n$form-check-input-disabled-opacity:        .5 !default;\n$form-check-label-disabled-opacity:        $form-check-input-disabled-opacity !default;\n$form-check-btn-check-disabled-opacity:    $btn-disabled-opacity !default;\n\n$form-check-inline-margin-end:    1rem !default;\n// scss-docs-end form-check-variables\n\n// scss-docs-start form-switch-variables\n$form-switch-color:               rgba(0, 0, 0, .25) !default;\n$form-switch-width:               2em !default;\n$form-switch-padding-start:       $form-switch-width + .5em !default;\n$form-switch-bg-image:            url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-color}'/></svg>\") !default;\n$form-switch-border-radius:       $form-switch-width !default;\n$form-switch-transition:          background-position .15s ease-in-out !default;\n\n$form-switch-focus-color:         $input-focus-border-color !default;\n$form-switch-focus-bg-image:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-focus-color}'/></svg>\") !default;\n\n$form-switch-checked-color:       $component-active-color !default;\n$form-switch-checked-bg-image:    url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='#{$form-switch-checked-color}'/></svg>\") !default;\n$form-switch-checked-bg-position: right center !default;\n// scss-docs-end form-switch-variables\n\n// scss-docs-start input-group-variables\n$input-group-addon-padding-y:           $input-padding-y !default;\n$input-group-addon-padding-x:           $input-padding-x !default;\n$input-group-addon-font-weight:         $input-font-weight !default;\n$input-group-addon-color:               $input-color !default;\n$input-group-addon-bg:                  $gray-200 !default;\n$input-group-addon-border-color:        $input-border-color !default;\n// scss-docs-end input-group-variables\n\n// scss-docs-start form-select-variables\n$form-select-padding-y:             $input-padding-y !default;\n$form-select-padding-x:             $input-padding-x !default;\n$form-select-font-family:           $input-font-family !default;\n$form-select-font-size:             $input-font-size !default;\n$form-select-indicator-padding:     $form-select-padding-x * 3 !default; // Extra padding for background-image\n$form-select-font-weight:           $input-font-weight !default;\n$form-select-line-height:           $input-line-height !default;\n$form-select-color:                 $input-color !default;\n$form-select-bg:                    $input-bg !default;\n$form-select-disabled-color:        null !default;\n$form-select-disabled-bg:           $gray-200 !default;\n$form-select-disabled-border-color: $input-disabled-border-color !default;\n$form-select-bg-position:           right $form-select-padding-x center !default;\n$form-select-bg-size:               16px 12px !default; // In pixels because image dimensions\n$form-select-indicator-color:       $gray-800 !default;\n$form-select-indicator:             url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='#{$form-select-indicator-color}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>\") !default;\n\n$form-select-feedback-icon-padding-end: $form-select-padding-x * 2.5 + $form-select-indicator-padding !default;\n$form-select-feedback-icon-position:    center right $form-select-indicator-padding !default;\n$form-select-feedback-icon-size:        $input-height-inner-half $input-height-inner-half !default;\n\n$form-select-border-width:        $input-border-width !default;\n$form-select-border-color:        $input-border-color !default;\n$form-select-border-radius:       $border-radius !default;\n$form-select-box-shadow:          $box-shadow-inset !default;\n\n$form-select-focus-border-color:  $input-focus-border-color !default;\n$form-select-focus-width:         $input-focus-width !default;\n$form-select-focus-box-shadow:    0 0 0 $form-select-focus-width $input-btn-focus-color !default;\n\n$form-select-padding-y-sm:        $input-padding-y-sm !default;\n$form-select-padding-x-sm:        $input-padding-x-sm !default;\n$form-select-font-size-sm:        $input-font-size-sm !default;\n\n$form-select-padding-y-lg:        $input-padding-y-lg !default;\n$form-select-padding-x-lg:        $input-padding-x-lg !default;\n$form-select-font-size-lg:        $input-font-size-lg !default;\n\n$form-select-transition:          $input-transition !default;\n// scss-docs-end form-select-variables\n\n// scss-docs-start form-range-variables\n$form-range-track-width:          100% !default;\n$form-range-track-height:         .5rem !default;\n$form-range-track-cursor:         pointer !default;\n$form-range-track-bg:             $gray-300 !default;\n$form-range-track-border-radius:  1rem !default;\n$form-range-track-box-shadow:     $box-shadow-inset !default;\n\n$form-range-thumb-width:                   1rem !default;\n$form-range-thumb-height:                  $form-range-thumb-width !default;\n$form-range-thumb-bg:                      $component-active-bg !default;\n$form-range-thumb-border:                  0 !default;\n$form-range-thumb-border-radius:           1rem !default;\n$form-range-thumb-box-shadow:              0 .1rem .25rem rgba($black, .1) !default;\n$form-range-thumb-focus-box-shadow:        0 0 0 1px $body-bg, $input-focus-box-shadow !default;\n$form-range-thumb-focus-box-shadow-width:  $input-focus-width !default; // For focus box shadow issue in Edge\n$form-range-thumb-active-bg:               tint-color($component-active-bg, 70%) !default;\n$form-range-thumb-disabled-bg:             $gray-500 !default;\n$form-range-thumb-transition:              background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n// scss-docs-end form-range-variables\n\n// scss-docs-start form-file-variables\n$form-file-button-color:          $input-color !default;\n$form-file-button-bg:             $input-group-addon-bg !default;\n$form-file-button-hover-bg:       shade-color($form-file-button-bg, 5%) !default;\n// scss-docs-end form-file-variables\n\n// scss-docs-start form-floating-variables\n$form-floating-height:            add(3.5rem, $input-height-border) !default;\n$form-floating-line-height:       1.25 !default;\n$form-floating-padding-x:         $input-padding-x !default;\n$form-floating-padding-y:         1rem !default;\n$form-floating-input-padding-t:   1.625rem !default;\n$form-floating-input-padding-b:   .625rem !default;\n$form-floating-label-opacity:     .65 !default;\n$form-floating-label-transform:   scale(.85) translateY(-.5rem) translateX(.15rem) !default;\n$form-floating-transition:        opacity .1s ease-in-out, transform .1s ease-in-out !default;\n// scss-docs-end form-floating-variables\n\n// Form validation\n\n// scss-docs-start form-feedback-variables\n$form-feedback-margin-top:          $form-text-margin-top !default;\n$form-feedback-font-size:           $form-text-font-size !default;\n$form-feedback-font-style:          $form-text-font-style !default;\n$form-feedback-valid-color:         $success !default;\n$form-feedback-invalid-color:       $danger !default;\n\n$form-feedback-icon-valid-color:    $form-feedback-valid-color !default;\n$form-feedback-icon-valid:          url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='#{$form-feedback-icon-valid-color}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>\") !default;\n$form-feedback-icon-invalid-color:  $form-feedback-invalid-color !default;\n$form-feedback-icon-invalid:        url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='#{$form-feedback-icon-invalid-color}'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='#{$form-feedback-icon-invalid-color}' stroke='none'/></svg>\") !default;\n// scss-docs-end form-feedback-variables\n\n// scss-docs-start form-validation-states\n$form-validation-states: (\n  \"valid\": (\n    \"color\": $form-feedback-valid-color,\n    \"icon\": $form-feedback-icon-valid\n  ),\n  \"invalid\": (\n    \"color\": $form-feedback-invalid-color,\n    \"icon\": $form-feedback-icon-invalid\n  )\n) !default;\n// scss-docs-end form-validation-states\n\n// Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n\n// scss-docs-start zindex-stack\n$zindex-dropdown:                   1000 !default;\n$zindex-sticky:                     1020 !default;\n$zindex-fixed:                      1030 !default;\n$zindex-modal-backdrop:             1040 !default;\n$zindex-offcanvas:                  1050 !default;\n$zindex-modal:                      1060 !default;\n$zindex-popover:                    1070 !default;\n$zindex-tooltip:                    1080 !default;\n// scss-docs-end zindex-stack\n\n\n// Navs\n\n// scss-docs-start nav-variables\n$nav-link-padding-y:                .5rem !default;\n$nav-link-padding-x:                1rem !default;\n$nav-link-font-size:                null !default;\n$nav-link-font-weight:              null !default;\n$nav-link-color:                    $link-color !default;\n$nav-link-hover-color:              $link-hover-color !default;\n$nav-link-transition:               color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out !default;\n$nav-link-disabled-color:           $gray-600 !default;\n\n$nav-tabs-border-color:             $gray-300 !default;\n$nav-tabs-border-width:             $border-width !default;\n$nav-tabs-border-radius:            $border-radius !default;\n$nav-tabs-link-hover-border-color:  $gray-200 $gray-200 $nav-tabs-border-color !default;\n$nav-tabs-link-active-color:        $gray-700 !default;\n$nav-tabs-link-active-bg:           $body-bg !default;\n$nav-tabs-link-active-border-color: $gray-300 $gray-300 $nav-tabs-link-active-bg !default;\n\n$nav-pills-border-radius:           $border-radius !default;\n$nav-pills-link-active-color:       $component-active-color !default;\n$nav-pills-link-active-bg:          $component-active-bg !default;\n// scss-docs-end nav-variables\n\n\n// Navbar\n\n// scss-docs-start navbar-variables\n$navbar-padding-y:                  $spacer * .5 !default;\n$navbar-padding-x:                  null !default;\n\n$navbar-nav-link-padding-x:         .5rem !default;\n\n$navbar-brand-font-size:            $font-size-lg !default;\n// Compute the navbar-brand padding-y so the navbar-brand will have the same height as navbar-text and nav-link\n$nav-link-height:                   $font-size-base * $line-height-base + $nav-link-padding-y * 2 !default;\n$navbar-brand-height:               $navbar-brand-font-size * $line-height-base !default;\n$navbar-brand-padding-y:            ($nav-link-height - $navbar-brand-height) * .5 !default;\n$navbar-brand-margin-end:           1rem !default;\n\n$navbar-toggler-padding-y:          .25rem !default;\n$navbar-toggler-padding-x:          .75rem !default;\n$navbar-toggler-font-size:          $font-size-lg !default;\n$navbar-toggler-border-radius:      $btn-border-radius !default;\n$navbar-toggler-focus-width:        $btn-focus-width !default;\n$navbar-toggler-transition:         box-shadow .15s ease-in-out !default;\n// scss-docs-end navbar-variables\n\n// scss-docs-start navbar-theme-variables\n$navbar-dark-color:                 rgba($white, .55) !default;\n$navbar-dark-hover-color:           rgba($white, .75) !default;\n$navbar-dark-active-color:          $white !default;\n$navbar-dark-disabled-color:        rgba($white, .25) !default;\n$navbar-dark-toggler-icon-bg:       url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-dark-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-dark-toggler-border-color:  rgba($white, .1) !default;\n\n$navbar-light-color:                rgba($black, .55) !default;\n$navbar-light-hover-color:          rgba($black, .7) !default;\n$navbar-light-active-color:         rgba($black, .9) !default;\n$navbar-light-disabled-color:       rgba($black, .3) !default;\n$navbar-light-toggler-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='#{$navbar-light-color}' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>\") !default;\n$navbar-light-toggler-border-color: rgba($black, .1) !default;\n\n$navbar-light-brand-color:                $navbar-light-active-color !default;\n$navbar-light-brand-hover-color:          $navbar-light-active-color !default;\n$navbar-dark-brand-color:                 $navbar-dark-active-color !default;\n$navbar-dark-brand-hover-color:           $navbar-dark-active-color !default;\n// scss-docs-end navbar-theme-variables\n\n\n// Dropdowns\n//\n// Dropdown menu container and contents.\n\n// scss-docs-start dropdown-variables\n$dropdown-min-width:                10rem !default;\n$dropdown-padding-x:                0 !default;\n$dropdown-padding-y:                .5rem !default;\n$dropdown-spacer:                   .125rem !default;\n$dropdown-font-size:                $font-size-base !default;\n$dropdown-color:                    $body-color !default;\n$dropdown-bg:                       $white !default;\n$dropdown-border-color:             rgba($black, .15) !default;\n$dropdown-border-radius:            $border-radius !default;\n$dropdown-border-width:             $border-width !default;\n$dropdown-inner-border-radius:      subtract($dropdown-border-radius, $dropdown-border-width) !default;\n$dropdown-divider-bg:               $dropdown-border-color !default;\n$dropdown-divider-margin-y:         $spacer * .5 !default;\n$dropdown-box-shadow:               $box-shadow !default;\n\n$dropdown-link-color:               $gray-900 !default;\n$dropdown-link-hover-color:         shade-color($gray-900, 10%) !default;\n$dropdown-link-hover-bg:            $gray-200 !default;\n\n$dropdown-link-active-color:        $component-active-color !default;\n$dropdown-link-active-bg:           $component-active-bg !default;\n\n$dropdown-link-disabled-color:      $gray-500 !default;\n\n$dropdown-item-padding-y:           $spacer * .25 !default;\n$dropdown-item-padding-x:           $spacer !default;\n\n$dropdown-header-color:             $gray-600 !default;\n$dropdown-header-padding:           $dropdown-padding-y $dropdown-item-padding-x !default;\n// scss-docs-end dropdown-variables\n\n// scss-docs-start dropdown-dark-variables\n$dropdown-dark-color:               $gray-300 !default;\n$dropdown-dark-bg:                  $gray-800 !default;\n$dropdown-dark-border-color:        $dropdown-border-color !default;\n$dropdown-dark-divider-bg:          $dropdown-divider-bg !default;\n$dropdown-dark-box-shadow:          null !default;\n$dropdown-dark-link-color:          $dropdown-dark-color !default;\n$dropdown-dark-link-hover-color:    $white !default;\n$dropdown-dark-link-hover-bg:       rgba($white, .15) !default;\n$dropdown-dark-link-active-color:   $dropdown-link-active-color !default;\n$dropdown-dark-link-active-bg:      $dropdown-link-active-bg !default;\n$dropdown-dark-link-disabled-color: $gray-500 !default;\n$dropdown-dark-header-color:        $gray-500 !default;\n// scss-docs-end dropdown-dark-variables\n\n\n// Pagination\n\n// scss-docs-start pagination-variables\n$pagination-padding-y:              .375rem !default;\n$pagination-padding-x:              .75rem !default;\n$pagination-padding-y-sm:           .25rem !default;\n$pagination-padding-x-sm:           .5rem !default;\n$pagination-padding-y-lg:           .75rem !default;\n$pagination-padding-x-lg:           1.5rem !default;\n\n$pagination-color:                  $link-color !default;\n$pagination-bg:                     $white !default;\n$pagination-border-width:           $border-width !default;\n$pagination-border-radius:          $border-radius !default;\n$pagination-margin-start:           -$pagination-border-width !default;\n$pagination-border-color:           $gray-300 !default;\n\n$pagination-focus-color:            $link-hover-color !default;\n$pagination-focus-bg:               $gray-200 !default;\n$pagination-focus-box-shadow:       $input-btn-focus-box-shadow !default;\n$pagination-focus-outline:          0 !default;\n\n$pagination-hover-color:            $link-hover-color !default;\n$pagination-hover-bg:               $gray-200 !default;\n$pagination-hover-border-color:     $gray-300 !default;\n\n$pagination-active-color:           $component-active-color !default;\n$pagination-active-bg:              $component-active-bg !default;\n$pagination-active-border-color:    $pagination-active-bg !default;\n\n$pagination-disabled-color:         $gray-600 !default;\n$pagination-disabled-bg:            $white !default;\n$pagination-disabled-border-color:  $gray-300 !default;\n\n$pagination-transition:              color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out !default;\n\n$pagination-border-radius-sm:       $border-radius-sm !default;\n$pagination-border-radius-lg:       $border-radius-lg !default;\n// scss-docs-end pagination-variables\n\n\n// Cards\n\n// scss-docs-start card-variables\n$card-spacer-y:                     $spacer !default;\n$card-spacer-x:                     $spacer !default;\n$card-title-spacer-y:               $spacer * .5 !default;\n$card-border-width:                 $border-width !default;\n$card-border-radius:                $border-radius !default;\n$card-border-color:                 rgba($black, .125) !default;\n$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;\n$card-cap-padding-y:                $card-spacer-y * .5 !default;\n$card-cap-padding-x:                $card-spacer-x !default;\n$card-cap-bg:                       rgba($black, .03) !default;\n$card-cap-color:                    null !default;\n$card-height:                       null !default;\n$card-color:                        null !default;\n$card-bg:                           $white !default;\n$card-img-overlay-padding:          $spacer !default;\n$card-group-margin:                 $grid-gutter-width * .5 !default;\n// scss-docs-end card-variables\n\n// Accordion\n\n// scss-docs-start accordion-variables\n$accordion-padding-y:                     1rem !default;\n$accordion-padding-x:                     1.25rem !default;\n$accordion-color:                         $body-color !default;\n$accordion-bg:                            $body-bg !default;\n$accordion-border-width:                  $border-width !default;\n$accordion-border-color:                  rgba($black, .125) !default;\n$accordion-border-radius:                 $border-radius !default;\n$accordion-inner-border-radius:           subtract($accordion-border-radius, $accordion-border-width) !default;\n\n$accordion-body-padding-y:                $accordion-padding-y !default;\n$accordion-body-padding-x:                $accordion-padding-x !default;\n\n$accordion-button-padding-y:              $accordion-padding-y !default;\n$accordion-button-padding-x:              $accordion-padding-x !default;\n$accordion-button-color:                  $accordion-color !default;\n$accordion-button-bg:                     $accordion-bg !default;\n$accordion-transition:                    $btn-transition, border-radius .15s ease !default;\n$accordion-button-active-bg:              tint-color($component-active-bg, 90%) !default;\n$accordion-button-active-color:           shade-color($primary, 10%) !default;\n\n$accordion-button-focus-border-color:     $input-focus-border-color !default;\n$accordion-button-focus-box-shadow:       $btn-focus-box-shadow !default;\n\n$accordion-icon-width:                    1.25rem !default;\n$accordion-icon-color:                    $accordion-color !default;\n$accordion-icon-active-color:             $accordion-button-active-color !default;\n$accordion-icon-transition:               transform .2s ease-in-out !default;\n$accordion-icon-transform:                rotate(-180deg) !default;\n\n$accordion-button-icon:         url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n$accordion-button-active-icon:  url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$accordion-icon-active-color}'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n// scss-docs-end accordion-variables\n\n// Tooltips\n\n// scss-docs-start tooltip-variables\n$tooltip-font-size:                 $font-size-sm !default;\n$tooltip-max-width:                 200px !default;\n$tooltip-color:                     $white !default;\n$tooltip-bg:                        $black !default;\n$tooltip-border-radius:             $border-radius !default;\n$tooltip-opacity:                   .9 !default;\n$tooltip-padding-y:                 $spacer * .25 !default;\n$tooltip-padding-x:                 $spacer * .5 !default;\n$tooltip-margin:                    0 !default;\n\n$tooltip-arrow-width:               .8rem !default;\n$tooltip-arrow-height:              .4rem !default;\n$tooltip-arrow-color:               $tooltip-bg !default;\n// scss-docs-end tooltip-variables\n\n// Form tooltips must come after regular tooltips\n// scss-docs-start tooltip-feedback-variables\n$form-feedback-tooltip-padding-y:     $tooltip-padding-y !default;\n$form-feedback-tooltip-padding-x:     $tooltip-padding-x !default;\n$form-feedback-tooltip-font-size:     $tooltip-font-size !default;\n$form-feedback-tooltip-line-height:   null !default;\n$form-feedback-tooltip-opacity:       $tooltip-opacity !default;\n$form-feedback-tooltip-border-radius: $tooltip-border-radius !default;\n// scss-docs-end tooltip-feedback-variables\n\n\n// Popovers\n\n// scss-docs-start popover-variables\n$popover-font-size:                 $font-size-sm !default;\n$popover-bg:                        $white !default;\n$popover-max-width:                 276px !default;\n$popover-border-width:              $border-width !default;\n$popover-border-color:              rgba($black, .2) !default;\n$popover-border-radius:             $border-radius-lg !default;\n$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;\n$popover-box-shadow:                $box-shadow !default;\n\n$popover-header-bg:                 shade-color($popover-bg, 6%) !default;\n$popover-header-color:              $headings-color !default;\n$popover-header-padding-y:          .5rem !default;\n$popover-header-padding-x:          $spacer !default;\n\n$popover-body-color:                $body-color !default;\n$popover-body-padding-y:            $spacer !default;\n$popover-body-padding-x:            $spacer !default;\n\n$popover-arrow-width:               1rem !default;\n$popover-arrow-height:              .5rem !default;\n$popover-arrow-color:               $popover-bg !default;\n\n$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;\n// scss-docs-end popover-variables\n\n\n// Toasts\n\n// scss-docs-start toast-variables\n$toast-max-width:                   350px !default;\n$toast-padding-x:                   .75rem !default;\n$toast-padding-y:                   .5rem !default;\n$toast-font-size:                   .875rem !default;\n$toast-color:                       null !default;\n$toast-background-color:            rgba($white, .85) !default;\n$toast-border-width:                1px !default;\n$toast-border-color:                rgba(0, 0, 0, .1) !default;\n$toast-border-radius:               $border-radius !default;\n$toast-box-shadow:                  $box-shadow !default;\n$toast-spacing:                     $container-padding-x !default;\n\n$toast-header-color:                $gray-600 !default;\n$toast-header-background-color:     rgba($white, .85) !default;\n$toast-header-border-color:         rgba(0, 0, 0, .05) !default;\n// scss-docs-end toast-variables\n\n\n// Badges\n\n// scss-docs-start badge-variables\n$badge-font-size:                   .75em !default;\n$badge-font-weight:                 $font-weight-bold !default;\n$badge-color:                       $white !default;\n$badge-padding-y:                   .35em !default;\n$badge-padding-x:                   .65em !default;\n$badge-border-radius:               $border-radius !default;\n// scss-docs-end badge-variables\n\n\n// Modals\n\n// scss-docs-start modal-variables\n$modal-inner-padding:               $spacer !default;\n\n$modal-footer-margin-between:       .5rem !default;\n\n$modal-dialog-margin:               .5rem !default;\n$modal-dialog-margin-y-sm-up:       1.75rem !default;\n\n$modal-title-line-height:           $line-height-base !default;\n\n$modal-content-color:               null !default;\n$modal-content-bg:                  $white !default;\n$modal-content-border-color:        rgba($black, .2) !default;\n$modal-content-border-width:        $border-width !default;\n$modal-content-border-radius:       $border-radius-lg !default;\n$modal-content-inner-border-radius: subtract($modal-content-border-radius, $modal-content-border-width) !default;\n$modal-content-box-shadow-xs:       $box-shadow-sm !default;\n$modal-content-box-shadow-sm-up:    $box-shadow !default;\n\n$modal-backdrop-bg:                 $black !default;\n$modal-backdrop-opacity:            .5 !default;\n$modal-header-border-color:         $border-color !default;\n$modal-footer-border-color:         $modal-header-border-color !default;\n$modal-header-border-width:         $modal-content-border-width !default;\n$modal-footer-border-width:         $modal-header-border-width !default;\n$modal-header-padding-y:            $modal-inner-padding !default;\n$modal-header-padding-x:            $modal-inner-padding !default;\n$modal-header-padding:              $modal-header-padding-y $modal-header-padding-x !default; // Keep this for backwards compatibility\n\n$modal-sm:                          300px !default;\n$modal-md:                          500px !default;\n$modal-lg:                          800px !default;\n$modal-xl:                          1140px !default;\n\n$modal-fade-transform:              translate(0, -50px) !default;\n$modal-show-transform:              none !default;\n$modal-transition:                  transform .3s ease-out !default;\n$modal-scale-transform:             scale(1.02) !default;\n// scss-docs-end modal-variables\n\n\n// Alerts\n//\n// Define alert colors, border radius, and padding.\n\n// scss-docs-start alert-variables\n$alert-padding-y:               $spacer !default;\n$alert-padding-x:               $spacer !default;\n$alert-margin-bottom:           1rem !default;\n$alert-border-radius:           $border-radius !default;\n$alert-link-font-weight:        $font-weight-bold !default;\n$alert-border-width:            $border-width !default;\n$alert-bg-scale:                -80% !default;\n$alert-border-scale:            -70% !default;\n$alert-color-scale:             40% !default;\n$alert-dismissible-padding-r:   $alert-padding-x * 3 !default; // 3x covers width of x plus default padding on either side\n// scss-docs-end alert-variables\n\n\n// Progress bars\n\n// scss-docs-start progress-variables\n$progress-height:                   1rem !default;\n$progress-font-size:                $font-size-base * .75 !default;\n$progress-bg:                       $gray-200 !default;\n$progress-border-radius:            $border-radius !default;\n$progress-box-shadow:               $box-shadow-inset !default;\n$progress-bar-color:                $white !default;\n$progress-bar-bg:                   $primary !default;\n$progress-bar-animation-timing:     1s linear infinite !default;\n$progress-bar-transition:           width .6s ease !default;\n// scss-docs-end progress-variables\n\n\n// List group\n\n// scss-docs-start list-group-variables\n$list-group-color:                  $gray-900 !default;\n$list-group-bg:                     $white !default;\n$list-group-border-color:           rgba($black, .125) !default;\n$list-group-border-width:           $border-width !default;\n$list-group-border-radius:          $border-radius !default;\n\n$list-group-item-padding-y:         $spacer * .5 !default;\n$list-group-item-padding-x:         $spacer !default;\n$list-group-item-bg-scale:          -80% !default;\n$list-group-item-color-scale:       40% !default;\n\n$list-group-hover-bg:               $gray-100 !default;\n$list-group-active-color:           $component-active-color !default;\n$list-group-active-bg:              $component-active-bg !default;\n$list-group-active-border-color:    $list-group-active-bg !default;\n\n$list-group-disabled-color:         $gray-600 !default;\n$list-group-disabled-bg:            $list-group-bg !default;\n\n$list-group-action-color:           $gray-700 !default;\n$list-group-action-hover-color:     $list-group-action-color !default;\n\n$list-group-action-active-color:    $body-color !default;\n$list-group-action-active-bg:       $gray-200 !default;\n// scss-docs-end list-group-variables\n\n\n// Image thumbnails\n\n// scss-docs-start thumbnail-variables\n$thumbnail-padding:                 .25rem !default;\n$thumbnail-bg:                      $body-bg !default;\n$thumbnail-border-width:            $border-width !default;\n$thumbnail-border-color:            $gray-300 !default;\n$thumbnail-border-radius:           $border-radius !default;\n$thumbnail-box-shadow:              $box-shadow-sm !default;\n// scss-docs-end thumbnail-variables\n\n\n// Figures\n\n// scss-docs-start figure-variables\n$figure-caption-font-size:          $small-font-size !default;\n$figure-caption-color:              $gray-600 !default;\n// scss-docs-end figure-variables\n\n\n// Breadcrumbs\n\n// scss-docs-start breadcrumb-variables\n$breadcrumb-font-size:              null !default;\n$breadcrumb-padding-y:              0 !default;\n$breadcrumb-padding-x:              0 !default;\n$breadcrumb-item-padding-x:         .5rem !default;\n$breadcrumb-margin-bottom:          1rem !default;\n$breadcrumb-bg:                     null !default;\n$breadcrumb-divider-color:          $gray-600 !default;\n$breadcrumb-active-color:           $gray-600 !default;\n$breadcrumb-divider:                quote(\"/\") !default;\n$breadcrumb-divider-flipped:        $breadcrumb-divider !default;\n$breadcrumb-border-radius:          null !default;\n// scss-docs-end breadcrumb-variables\n\n// Carousel\n\n// scss-docs-start carousel-variables\n$carousel-control-color:             $white !default;\n$carousel-control-width:             15% !default;\n$carousel-control-opacity:           .5 !default;\n$carousel-control-hover-opacity:     .9 !default;\n$carousel-control-transition:        opacity .15s ease !default;\n\n$carousel-indicator-width:           30px !default;\n$carousel-indicator-height:          3px !default;\n$carousel-indicator-hit-area-height: 10px !default;\n$carousel-indicator-spacer:          3px !default;\n$carousel-indicator-opacity:         .5 !default;\n$carousel-indicator-active-bg:       $white !default;\n$carousel-indicator-active-opacity:  1 !default;\n$carousel-indicator-transition:      opacity .6s ease !default;\n\n$carousel-caption-width:             70% !default;\n$carousel-caption-color:             $white !default;\n$carousel-caption-padding-y:         1.25rem !default;\n$carousel-caption-spacer:            1.25rem !default;\n\n$carousel-control-icon-width:        2rem !default;\n\n$carousel-control-prev-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg>\") !default;\n$carousel-control-next-icon-bg:      url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$carousel-control-color}'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg>\") !default;\n\n$carousel-transition-duration:       .6s !default;\n$carousel-transition:                transform $carousel-transition-duration ease-in-out !default; // Define transform transition first if using multiple transitions (e.g., `transform 2s ease, opacity .5s ease-out`)\n\n$carousel-dark-indicator-active-bg:  $black !default;\n$carousel-dark-caption-color:        $black !default;\n$carousel-dark-control-icon-filter:  invert(1) grayscale(100) !default;\n// scss-docs-end carousel-variables\n\n\n// Spinners\n\n// scss-docs-start spinner-variables\n$spinner-width:           2rem !default;\n$spinner-height:          $spinner-width !default;\n$spinner-vertical-align:  -.125em !default;\n$spinner-border-width:    .25em !default;\n$spinner-animation-speed: .75s !default;\n\n$spinner-width-sm:        1rem !default;\n$spinner-height-sm:       $spinner-width-sm !default;\n$spinner-border-width-sm: .2em !default;\n// scss-docs-end spinner-variables\n\n\n// Close\n\n// scss-docs-start close-variables\n$btn-close-width:            1em !default;\n$btn-close-height:           $btn-close-width !default;\n$btn-close-padding-x:        .25em !default;\n$btn-close-padding-y:        $btn-close-padding-x !default;\n$btn-close-color:            $black !default;\n$btn-close-bg:               url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#{$btn-close-color}'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>\") !default;\n$btn-close-focus-shadow:     $input-btn-focus-box-shadow !default;\n$btn-close-opacity:          .5 !default;\n$btn-close-hover-opacity:    .75 !default;\n$btn-close-focus-opacity:    1 !default;\n$btn-close-disabled-opacity: .25 !default;\n$btn-close-white-filter:     invert(1) grayscale(100%) brightness(200%) !default;\n// scss-docs-end close-variables\n\n\n// Offcanvas\n\n// scss-docs-start offcanvas-variables\n$offcanvas-padding-y:               $modal-inner-padding !default;\n$offcanvas-padding-x:               $modal-inner-padding !default;\n$offcanvas-horizontal-width:        400px !default;\n$offcanvas-vertical-height:         30vh !default;\n$offcanvas-transition-duration:     .3s !default;\n$offcanvas-border-color:            $modal-content-border-color !default;\n$offcanvas-border-width:            $modal-content-border-width !default;\n$offcanvas-title-line-height:       $modal-title-line-height !default;\n$offcanvas-bg-color:                $modal-content-bg !default;\n$offcanvas-color:                   $modal-content-color !default;\n$offcanvas-box-shadow:              $modal-content-box-shadow-xs !default;\n// scss-docs-end offcanvas-variables\n\n// Code\n\n$code-font-size:                    $small-font-size !default;\n$code-color:                        $pink !default;\n\n$kbd-padding-y:                     .2rem !default;\n$kbd-padding-x:                     .4rem !default;\n$kbd-font-size:                     $code-font-size !default;\n$kbd-color:                         $white !default;\n$kbd-bg:                            $gray-900 !default;\n\n$pre-color:                         null !default;\n", '// stylelint-disable property-blacklist, scss/dollar-variable-default\n\n// SCSS RFS mixin\n//\n// Automated responsive values for font sizes, paddings, margins and much more\n//\n// Licensed under MIT (https://github.com/twbs/rfs/blob/main/LICENSE)\n\n// Configuration\n\n// Base value\n$rfs-base-value: 1.25rem !default;\n$rfs-unit: rem !default;\n\n@if $rfs-unit != rem and $rfs-unit != px {\n  @error "`#{$rfs-unit}` is not a valid unit for $rfs-unit. Use `px` or `rem`.";\n}\n\n// Breakpoint at where values start decreasing if screen width is smaller\n$rfs-breakpoint: 1200px !default;\n$rfs-breakpoint-unit: px !default;\n\n@if $rfs-breakpoint-unit != px and $rfs-breakpoint-unit != em and $rfs-breakpoint-unit != rem {\n  @error "`#{$rfs-breakpoint-unit}` is not a valid unit for $rfs-breakpoint-unit. Use `px`, `em` or `rem`.";\n}\n\n// Resize values based on screen height and width\n$rfs-two-dimensional: false !default;\n\n// Factor of decrease\n$rfs-factor: 10 !default;\n\n@if type-of($rfs-factor) != number or $rfs-factor <= 1 {\n  @error "`#{$rfs-factor}` is not a valid  $rfs-factor, it must be greater than 1.";\n}\n\n// Mode. Possibilities: "min-media-query", "max-media-query"\n$rfs-mode: min-media-query !default;\n\n// Generate enable or disable classes. Possibilities: false, "enable" or "disable"\n$rfs-class: false !default;\n\n// 1 rem = $rfs-rem-value px\n$rfs-rem-value: 16 !default;\n\n// Safari iframe resize bug: https://github.com/twbs/rfs/issues/14\n$rfs-safari-iframe-resize-bug-fix: false !default;\n\n// Disable RFS by setting $enable-rfs to false\n$enable-rfs: true !default;\n\n// Cache $rfs-base-value unit\n$rfs-base-value-unit: unit($rfs-base-value);\n\n@function divide($dividend, $divisor, $precision: 10) {\n  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);\n  $dividend: abs($dividend);\n  $divisor: abs($divisor);\n  @if $dividend == 0 {\n    @return 0;\n  }\n  @if $divisor == 0 {\n    @error "Cannot divide by 0";\n  }\n  $remainder: $dividend;\n  $result: 0;\n  $factor: 10;\n  @while ($remainder > 0 and $precision >= 0) {\n    $quotient: 0;\n    @while ($remainder >= $divisor) {\n      $remainder: $remainder - $divisor;\n      $quotient: $quotient + 1;\n    }\n    $result: $result * 10 + $quotient;\n    $factor: $factor * .1;\n    $remainder: $remainder * 10;\n    $precision: $precision - 1;\n    @if ($precision < 0 and $remainder >= $divisor * 5) {\n      $result: $result + 1;\n    }\n  }\n  $result: $result * $factor * $sign;\n  $dividend-unit: unit($dividend);\n  $divisor-unit: unit($divisor);\n  $unit-map: (\n    "px": 1px,\n    "rem": 1rem,\n    "em": 1em,\n    "%": 1%\n  );\n  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {\n    $result: $result * map-get($unit-map, $dividend-unit);\n  }\n  @return $result;\n}\n\n// Remove px-unit from $rfs-base-value for calculations\n@if $rfs-base-value-unit == px {\n  $rfs-base-value: divide($rfs-base-value, $rfs-base-value * 0 + 1);\n}\n@else if $rfs-base-value-unit == rem {\n  $rfs-base-value: divide($rfs-base-value, divide($rfs-base-value * 0 + 1, $rfs-rem-value));\n}\n\n// Cache $rfs-breakpoint unit to prevent multiple calls\n$rfs-breakpoint-unit-cache: unit($rfs-breakpoint);\n\n// Remove unit from $rfs-breakpoint for calculations\n@if $rfs-breakpoint-unit-cache == px {\n  $rfs-breakpoint: divide($rfs-breakpoint, $rfs-breakpoint * 0 + 1);\n}\n@else if $rfs-breakpoint-unit-cache == rem or $rfs-breakpoint-unit-cache == "em" {\n  $rfs-breakpoint: divide($rfs-breakpoint, divide($rfs-breakpoint * 0 + 1, $rfs-rem-value));\n}\n\n// Calculate the media query value\n$rfs-mq-value: if($rfs-breakpoint-unit == px, #{$rfs-breakpoint}px, #{divide($rfs-breakpoint, $rfs-rem-value)}#{$rfs-breakpoint-unit});\n$rfs-mq-property-width: if($rfs-mode == max-media-query, max-width, min-width);\n$rfs-mq-property-height: if($rfs-mode == max-media-query, max-height, min-height);\n\n// Internal mixin used to determine which media query needs to be used\n@mixin _rfs-media-query {\n  @if $rfs-two-dimensional {\n    @if $rfs-mode == max-media-query {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}), (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n    @else {\n      @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) and (#{$rfs-mq-property-height}: #{$rfs-mq-value}) {\n        @content;\n      }\n    }\n  }\n  @else {\n    @media (#{$rfs-mq-property-width}: #{$rfs-mq-value}) {\n      @content;\n    }\n  }\n}\n\n// Internal mixin that adds disable classes to the selector if needed.\n@mixin _rfs-rule {\n  @if $rfs-class == disable and $rfs-mode == max-media-query {\n    // Adding an extra class increases specificity, which prevents the media query to override the property\n    &,\n    .disable-rfs &,\n    &.disable-rfs {\n      @content;\n    }\n  }\n  @else if $rfs-class == enable and $rfs-mode == min-media-query {\n    .enable-rfs &,\n    &.enable-rfs {\n      @content;\n    }\n  }\n  @else {\n    @content;\n  }\n}\n\n// Internal mixin that adds enable classes to the selector if needed.\n@mixin _rfs-media-query-rule {\n\n  @if $rfs-class == enable {\n    @if $rfs-mode == min-media-query {\n      @content;\n    }\n\n    @include _rfs-media-query {\n      .enable-rfs &,\n      &.enable-rfs {\n        @content;\n      }\n    }\n  }\n  @else {\n    @if $rfs-class == disable and $rfs-mode == min-media-query {\n      .disable-rfs &,\n      &.disable-rfs {\n        @content;\n      }\n    }\n    @include _rfs-media-query {\n      @content;\n    }\n  }\n}\n\n// Helper function to get the formatted non-responsive value\n@function rfs-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: \'\';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + \' 0\';\n    }\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == "number", unit($value), false);\n\n      @if $unit == px {\n        // Convert to rem if needed\n        $val: $val + \' \' + if($rfs-unit == rem, #{divide($value, $value * 0 + $rfs-rem-value)}rem, $value);\n      }\n      @else if $unit == rem {\n        // Convert to px if needed\n        $val: $val + \' \' + if($rfs-unit == px, #{divide($value, $value * 0 + 1) * $rfs-rem-value}px, $value);\n      }\n      @else {\n        // If $value isn\'t a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n        $val: $val + \' \' + $value;\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// Helper function to get the responsive value calculated by RFS\n@function rfs-fluid-value($values) {\n  // Convert to list\n  $values: if(type-of($values) != list, ($values,), $values);\n\n  $val: \'\';\n\n  // Loop over each value and calculate value\n  @each $value in $values {\n    @if $value == 0 {\n      $val: $val + \' 0\';\n    }\n\n    @else {\n      // Cache $value unit\n      $unit: if(type-of($value) == "number", unit($value), false);\n\n      // If $value isn\'t a number (like inherit) or $value has a unit (not px or rem, like 1.5em) or $ is 0, just print the value\n      @if not $unit or $unit != px and $unit != rem {\n        $val: $val + \' \' + $value;\n      }\n\n      @else {\n        // Remove unit from $value for calculations\n        $value: divide($value, $value * 0 + if($unit == px, 1, divide(1, $rfs-rem-value)));\n\n        // Only add the media query if the value is greater than the minimum value\n        @if abs($value) <= $rfs-base-value or not $enable-rfs {\n          $val: $val + \' \' +  if($rfs-unit == rem, #{divide($value, $rfs-rem-value)}rem, #{$value}px);\n        }\n        @else {\n          // Calculate the minimum value\n          $value-min: $rfs-base-value + divide(abs($value) - $rfs-base-value, $rfs-factor);\n\n          // Calculate difference between $value and the minimum value\n          $value-diff: abs($value) - $value-min;\n\n          // Base value formatting\n          $min-width: if($rfs-unit == rem, #{divide($value-min, $rfs-rem-value)}rem, #{$value-min}px);\n\n          // Use negative value if needed\n          $min-width: if($value < 0, -$min-width, $min-width);\n\n          // Use `vmin` if two-dimensional is enabled\n          $variable-unit: if($rfs-two-dimensional, vmin, vw);\n\n          // Calculate the variable width between 0 and $rfs-breakpoint\n          $variable-width: #{divide($value-diff * 100, $rfs-breakpoint)}#{$variable-unit};\n\n          // Return the calculated value\n          $val: $val + \' calc(\' + $min-width + if($value < 0, \' - \', \' + \') + $variable-width + \')\';\n        }\n      }\n    }\n  }\n\n  // Remove first space\n  @return unquote(str-slice($val, 2));\n}\n\n// RFS mixin\n@mixin rfs($values, $property: font-size) {\n  @if $values != null {\n    $val: rfs-value($values);\n    $fluidVal: rfs-fluid-value($values);\n\n    // Do not print the media query if responsive & non-responsive values are the same\n    @if $val == $fluidVal {\n      #{$property}: $val;\n    }\n    @else {\n      @include _rfs-rule {\n        #{$property}: if($rfs-mode == max-media-query, $val, $fluidVal);\n\n        // Include safari iframe resize fix if needed\n        min-width: if($rfs-safari-iframe-resize-bug-fix, (0 * 1vw), null);\n      }\n\n      @include _rfs-media-query-rule {\n        #{$property}: if($rfs-mode == max-media-query, $fluidVal, $val);\n      }\n    }\n  }\n}\n\n// Shorthand helper mixins\n@mixin font-size($value) {\n  @include rfs($value);\n}\n\n@mixin padding($value) {\n  @include rfs($value, padding);\n}\n\n@mixin padding-top($value) {\n  @include rfs($value, padding-top);\n}\n\n@mixin padding-right($value) {\n  @include rfs($value, padding-right);\n}\n\n@mixin padding-bottom($value) {\n  @include rfs($value, padding-bottom);\n}\n\n@mixin padding-left($value) {\n  @include rfs($value, padding-left);\n}\n\n@mixin margin($value) {\n  @include rfs($value, margin);\n}\n\n@mixin margin-top($value) {\n  @include rfs($value, margin-top);\n}\n\n@mixin margin-right($value) {\n  @include rfs($value, margin-right);\n}\n\n@mixin margin-bottom($value) {\n  @include rfs($value, margin-bottom);\n}\n\n@mixin margin-left($value) {\n  @include rfs($value, margin-left);\n}\n', '// Bootstrap functions\n//\n// Utility mixins and functions for evaluating source code across our variables, maps, and mixins.\n\n// Ascending\n// Used to evaluate Sass maps like our grid breakpoints.\n@mixin _assert-ascending($map, $map-name) {\n  $prev-key: null;\n  $prev-num: null;\n  @each $key, $num in $map {\n    @if $prev-num == null or unit($num) == "%" or unit($prev-num) == "%" {\n      // Do nothing\n    } @else if not comparable($prev-num, $num) {\n      @warn "Potentially invalid value for #{$map-name}: This map must be in ascending order, but key \'#{$key}\' has value #{$num} whose unit makes it incomparable to #{$prev-num}, the value of the previous key \'#{$prev-key}\' !";\n    } @else if $prev-num >= $num {\n      @warn "Invalid value for #{$map-name}: This map must be in ascending order, but key \'#{$key}\' has value #{$num} which isn\'t greater than #{$prev-num}, the value of the previous key \'#{$prev-key}\' !";\n    }\n    $prev-key: $key;\n    $prev-num: $num;\n  }\n}\n\n// Starts at zero\n// Used to ensure the min-width of the lowest breakpoint starts at 0.\n@mixin _assert-starts-at-zero($map, $map-name: "$grid-breakpoints") {\n  @if length($map) > 0 {\n    $values: map-values($map);\n    $first-value: nth($values, 1);\n    @if $first-value != 0 {\n      @warn "First breakpoint in #{$map-name} must start at 0, but starts at #{$first-value}.";\n    }\n  }\n}\n\n// Internal Bootstrap function to turn maps into its negative variant.\n// It prefixes the keys with `n` and makes the value negative.\n@function negativify-map($map) {\n  $result: ();\n  @each $key, $value in $map {\n    @if $key != 0 {\n      $result: map-merge($result, ("n" + $key: (-$value)));\n    }\n  }\n  @return $result;\n}\n\n// Get multiple keys from a sass map\n@function map-get-multiple($map, $values) {\n  $result: ();\n  @each $key, $value in $map {\n    @if (index($values, $key) != null) {\n      $result: map-merge($result, ($key: $value));\n    }\n  }\n  @return $result;\n}\n\n// Replace `$search` with `$replace` in `$string`\n// Used on our SVG icon backgrounds for custom forms.\n//\n// @author Hugo Giraudel\n// @param {String} $string - Initial string\n// @param {String} $search - Substring to replace\n// @param {String} $replace (\'\') - New value\n// @return {String} - Updated string\n@function str-replace($string, $search, $replace: "") {\n  $index: str-index($string, $search);\n\n  @if $index {\n    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);\n  }\n\n  @return $string;\n}\n\n// See https://codepen.io/kevinweber/pen/dXWoRw\n//\n// Requires the use of quotes around data URIs.\n\n@function escape-svg($string) {\n  @if str-index($string, "data:image/svg+xml") {\n    @each $char, $encoded in $escaped-characters {\n      // Do not escape the url brackets\n      @if str-index($string, "url(") == 1 {\n        $string: url("#{str-replace(str-slice($string, 6, -3), $char, $encoded)}");\n      } @else {\n        $string: str-replace($string, $char, $encoded);\n      }\n    }\n  }\n\n  @return $string;\n}\n\n// Color contrast\n// See https://github.com/twbs/bootstrap/pull/30168\n\n// A list of pre-calculated numbers of pow(divide((divide($value, 255) + .055), 1.055), 2.4). (from 0 to 255)\n// stylelint-disable-next-line scss/dollar-variable-default, scss/dollar-variable-pattern\n$_luminance-list: .0008 .001 .0011 .0013 .0015 .0017 .002 .0022 .0025 .0027 .003 .0033 .0037 .004 .0044 .0048 .0052 .0056 .006 .0065 .007 .0075 .008 .0086 .0091 .0097 .0103 .011 .0116 .0123 .013 .0137 .0144 .0152 .016 .0168 .0176 .0185 .0194 .0203 .0212 .0222 .0232 .0242 .0252 .0262 .0273 .0284 .0296 .0307 .0319 .0331 .0343 .0356 .0369 .0382 .0395 .0409 .0423 .0437 .0452 .0467 .0482 .0497 .0513 .0529 .0545 .0561 .0578 .0595 .0612 .063 .0648 .0666 .0685 .0704 .0723 .0742 .0762 .0782 .0802 .0823 .0844 .0865 .0887 .0908 .0931 .0953 .0976 .0999 .1022 .1046 .107 .1095 .1119 .1144 .117 .1195 .1221 .1248 .1274 .1301 .1329 .1356 .1384 .1413 .1441 .147 .15 .1529 .1559 .159 .162 .1651 .1683 .1714 .1746 .1779 .1812 .1845 .1878 .1912 .1946 .1981 .2016 .2051 .2086 .2122 .2159 .2195 .2232 .227 .2307 .2346 .2384 .2423 .2462 .2502 .2542 .2582 .2623 .2664 .2705 .2747 .2789 .2831 .2874 .2918 .2961 .3005 .305 .3095 .314 .3185 .3231 .3278 .3325 .3372 .3419 .3467 .3515 .3564 .3613 .3663 .3712 .3763 .3813 .3864 .3916 .3968 .402 .4072 .4125 .4179 .4233 .4287 .4342 .4397 .4452 .4508 .4564 .4621 .4678 .4735 .4793 .4851 .491 .4969 .5029 .5089 .5149 .521 .5271 .5333 .5395 .5457 .552 .5583 .5647 .5711 .5776 .5841 .5906 .5972 .6038 .6105 .6172 .624 .6308 .6376 .6445 .6514 .6584 .6654 .6724 .6795 .6867 .6939 .7011 .7084 .7157 .7231 .7305 .7379 .7454 .7529 .7605 .7682 .7758 .7835 .7913 .7991 .807 .8148 .8228 .8308 .8388 .8469 .855 .8632 .8714 .8796 .8879 .8963 .9047 .9131 .9216 .9301 .9387 .9473 .956 .9647 .9734 .9823 .9911 1;\n\n@function color-contrast($background, $color-contrast-dark: $color-contrast-dark, $color-contrast-light: $color-contrast-light, $min-contrast-ratio: $min-contrast-ratio) {\n  $foregrounds: $color-contrast-light, $color-contrast-dark, $white, $black;\n  $max-ratio: 0;\n  $max-ratio-color: null;\n\n  @each $color in $foregrounds {\n    $contrast-ratio: contrast-ratio($background, $color);\n    @if $contrast-ratio > $min-contrast-ratio {\n      @return $color;\n    } @else if $contrast-ratio > $max-ratio {\n      $max-ratio: $contrast-ratio;\n      $max-ratio-color: $color;\n    }\n  }\n\n  @warn "Found no color leading to #{$min-contrast-ratio}:1 contrast ratio against #{$background}...";\n\n  @return $max-ratio-color;\n}\n\n@function contrast-ratio($background, $foreground: $color-contrast-light) {\n  $l1: luminance($background);\n  $l2: luminance(opaque($background, $foreground));\n\n  @return if($l1 > $l2, divide($l1 + .05, $l2 + .05), divide($l2 + .05, $l1 + .05));\n}\n\n// Return WCAG2.0 relative luminance\n// See https://www.w3.org/WAI/GL/wiki/Relative_luminance\n// See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n@function luminance($color) {\n  $rgb: (\n    "r": red($color),\n    "g": green($color),\n    "b": blue($color)\n  );\n\n  @each $name, $value in $rgb {\n    $value: if(divide($value, 255) < .03928, divide(divide($value, 255), 12.92), nth($_luminance-list, $value + 1));\n    $rgb: map-merge($rgb, ($name: $value));\n  }\n\n  @return (map-get($rgb, "r") * .2126) + (map-get($rgb, "g") * .7152) + (map-get($rgb, "b") * .0722);\n}\n\n// Return opaque color\n// opaque(#fff, rgba(0, 0, 0, .5)) => #808080\n@function opaque($background, $foreground) {\n  @return mix(rgba($foreground, 1), $background, opacity($foreground) * 100);\n}\n\n// scss-docs-start color-functions\n// Tint a color: mix a color with white\n@function tint-color($color, $weight) {\n  @return mix(white, $color, $weight);\n}\n\n// Shade a color: mix a color with black\n@function shade-color($color, $weight) {\n  @return mix(black, $color, $weight);\n}\n\n// Shade the color if the weight is positive, else tint it\n@function shift-color($color, $weight) {\n  @return if($weight > 0, shade-color($color, $weight), tint-color($color, -$weight));\n}\n// scss-docs-end color-functions\n\n// Return valid calc\n@function add($value1, $value2, $return-calc: true) {\n  @if $value1 == null {\n    @return $value2;\n  }\n\n  @if $value2 == null {\n    @return $value1;\n  }\n\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\n    @return $value1 + $value2;\n  }\n\n  @if type-of($value1) != number {\n    $value1: unquote("(") + $value1 + unquote(")");\n  }\n\n  @if type-of($value2) != number {\n    $value2: unquote("(") + $value2 + unquote(")");\n  }\n\n  @return if($return-calc == true, calc(#{$value1} + #{$value2}), $value1 + unquote(" + ") + $value2);\n}\n\n@function subtract($value1, $value2, $return-calc: true) {\n  @if $value1 == null and $value2 == null {\n    @return null;\n  }\n\n  @if $value1 == null {\n    @return -$value2;\n  }\n\n  @if $value2 == null {\n    @return $value1;\n  }\n\n  @if type-of($value1) == number and type-of($value2) == number and comparable($value1, $value2) {\n    @return $value1 - $value2;\n  }\n\n  @if type-of($value1) != number {\n    $value1: unquote("(") + $value1 + unquote(")");\n  }\n\n  @if type-of($value2) != number {\n    $value2: unquote("(") + $value2 + unquote(")");\n  }\n\n  @return if($return-calc == true, calc(#{$value1} - #{$value2}), $value1 + unquote(" - ") + $value2);\n}\n\n@function divide($dividend, $divisor, $precision: 10) {\n  $sign: if($dividend > 0 and $divisor > 0 or $dividend < 0 and $divisor < 0, 1, -1);\n  $dividend: abs($dividend);\n  $divisor: abs($divisor);\n  @if $dividend == 0 {\n    @return 0;\n  }\n  @if $divisor == 0 {\n    @error "Cannot divide by 0";\n  }\n  $remainder: $dividend;\n  $result: 0;\n  $factor: 10;\n  @while ($remainder > 0 and $precision >= 0) {\n    $quotient: 0;\n    @while ($remainder >= $divisor) {\n      $remainder: $remainder - $divisor;\n      $quotient: $quotient + 1;\n    }\n    $result: $result * 10 + $quotient;\n    $factor: $factor * .1;\n    $remainder: $remainder * 10;\n    $precision: $precision - 1;\n    @if ($precision < 0 and $remainder >= $divisor * 5) {\n      $result: $result + 1;\n    }\n  }\n  $result: $result * $factor * $sign;\n  $dividend-unit: unit($dividend);\n  $divisor-unit: unit($divisor);\n  $unit-map: (\n    "px": 1px,\n    "rem": 1rem,\n    "em": 1em,\n    "%": 1%\n  );\n  @if ($dividend-unit != $divisor-unit and map-has-key($unit-map, $dividend-unit)) {\n    $result: $result * map-get($unit-map, $dividend-unit);\n  }\n  @return $result;\n}\n', "// stylelint-disable property-disallowed-list\n// Single side border-radius\n\n// Helper function to replace negative values with 0\n@function valid-radius($radius) {\n  $return: ();\n  @each $value in $radius {\n    @if type-of($value) == number {\n      $return: append($return, max($value, 0));\n    } @else {\n      $return: append($return, $value);\n    }\n  }\n  @return $return;\n}\n\n// scss-docs-start border-radius-mixins\n@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {\n  @if $enable-rounded {\n    border-radius: valid-radius($radius);\n  }\n  @else if $fallback-border-radius != false {\n    border-radius: $fallback-border-radius;\n  }\n}\n\n@mixin border-top-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-left-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-top-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-top-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-end-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-right-radius: valid-radius($radius);\n  }\n}\n\n@mixin border-bottom-start-radius($radius: $border-radius) {\n  @if $enable-rounded {\n    border-bottom-left-radius: valid-radius($radius);\n  }\n}\n// scss-docs-end border-radius-mixins\n", '//\n// Headings\n//\n.h1 {\n  @extend h1;\n}\n\n.h2 {\n  @extend h2;\n}\n\n.h3 {\n  @extend h3;\n}\n\n.h4 {\n  @extend h4;\n}\n\n.h5 {\n  @extend h5;\n}\n\n.h6 {\n  @extend h6;\n}\n\n\n.lead {\n  @include font-size($lead-font-size);\n  font-weight: $lead-font-weight;\n}\n\n// Type display classes\n@each $display, $font-size in $display-font-sizes {\n  .display-#{$display} {\n    @include font-size($font-size);\n    font-weight: $display-font-weight;\n    line-height: $display-line-height;\n  }\n}\n\n//\n// Emphasis\n//\n.small {\n  @extend small;\n}\n\n.mark {\n  @extend mark;\n}\n\n//\n// Lists\n//\n\n.list-unstyled {\n  @include list-unstyled();\n}\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled();\n}\n.list-inline-item {\n  display: inline-block;\n\n  &:not(:last-child) {\n    margin-right: $list-inline-padding;\n  }\n}\n\n\n//\n// Misc\n//\n\n// Builds on `abbr`\n.initialism {\n  @include font-size($initialism-font-size);\n  text-transform: uppercase;\n}\n\n// Blockquotes\n.blockquote {\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-font-size);\n\n  > :last-child {\n    margin-bottom: 0;\n  }\n}\n\n.blockquote-footer {\n  margin-top: -$blockquote-margin-y;\n  margin-bottom: $blockquote-margin-y;\n  @include font-size($blockquote-footer-font-size);\n  color: $blockquote-footer-color;\n\n  &::before {\n    content: "\\2014\\00A0"; // em dash, nbsp\n  }\n}\n', "// Lists\n\n// Unstyled keeps list items block level, just removes default browser padding and list-style\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n", "// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n\n@mixin img-fluid {\n  // Part 1: Set a maximum relative to the parent\n  max-width: 100%;\n  // Part 2: Override the height to auto, otherwise images will be stretched\n  // when setting a width and height attribute on the img element.\n  height: auto;\n}\n", "// Responsive images (ensure images don't scale beyond their parents)\n//\n// This is purposefully opt-in via an explicit class rather than being the default for all `<img>`s.\n// We previously tried the \"images are responsive by default\" approach in Bootstrap v2,\n// and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n// which weren't expecting the images within themselves to be involuntarily resized.\n// See also https://github.com/twbs/bootstrap/issues/18178\n.img-fluid {\n  @include img-fluid();\n}\n\n\n// Image thumbnails\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  background-color: $thumbnail-bg;\n  border: $thumbnail-border-width solid $thumbnail-border-color;\n  @include border-radius($thumbnail-border-radius);\n  @include box-shadow($thumbnail-box-shadow);\n\n  // Keep them at most 100% wide\n  @include img-fluid();\n}\n\n//\n// Figures\n//\n\n.figure {\n  // Ensures the caption's text aligns with the image.\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: $spacer * .5;\n  line-height: 1;\n}\n\n.figure-caption {\n  @include font-size($figure-caption-font-size);\n  color: $figure-caption-color;\n}\n", "// Container mixins\n\n@mixin make-container($gutter: $container-padding-x) {\n  width: 100%;\n  padding-right: var(--#{$variable-prefix}gutter-x, #{$gutter});\n  padding-left: var(--#{$variable-prefix}gutter-x, #{$gutter});\n  margin-right: auto;\n  margin-left: auto;\n}\n", '// Breakpoint viewport sizes and media queries.\n//\n// Breakpoints are defined as a map of (name: minimum width), order from small to large:\n//\n//    (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px)\n//\n// The map defined in the `$grid-breakpoints` global variable is used as the `$breakpoints` argument by default.\n\n// Name of the next breakpoint, or null for the last breakpoint.\n//\n//    >> breakpoint-next(sm)\n//    md\n//    >> breakpoint-next(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    md\n//    >> breakpoint-next(sm, $breakpoint-names: (xs sm md lg xl))\n//    md\n@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {\n  $n: index($breakpoint-names, $name);\n  @if not $n {\n    @error "breakpoint `#{$name}` not found in `#{$breakpoints}`";\n  }\n  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);\n}\n\n// Minimum breakpoint width. Null for the smallest (first) breakpoint.\n//\n//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    576px\n@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {\n  $min: map-get($breakpoints, $name);\n  @return if($min != 0, $min, null);\n}\n\n// Maximum breakpoint width.\n// The maximum value is reduced by 0.02px to work around the limitations of\n// `min-` and `max-` prefixes and viewports with fractional widths.\n// See https://www.w3.org/TR/mediaqueries-4/#mq-min-max\n// Uses 0.02px rather than 0.01px to work around a current rounding bug in Safari.\n// See https://bugs.webkit.org/show_bug.cgi?id=178261\n//\n//    >> breakpoint-max(md, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    767.98px\n@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {\n  $max: map-get($breakpoints, $name);\n  @return if($max and $max > 0, $max - .02, null);\n}\n\n// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.\n// Useful for making responsive utilities.\n//\n//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    ""  (Returns a blank string)\n//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))\n//    "-sm"\n@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {\n  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");\n}\n\n// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.\n// Makes the @content apply to the given breakpoint and wider.\n@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($name, $breakpoints);\n  @if $min {\n    @media (min-width: $min) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media of at most the maximum breakpoint width. No query for the largest breakpoint.\n// Makes the @content apply to the given breakpoint and narrower.\n@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {\n  $max: breakpoint-max($name, $breakpoints);\n  @if $max {\n    @media (max-width: $max) {\n      @content;\n    }\n  } @else {\n    @content;\n  }\n}\n\n// Media that spans multiple breakpoint widths.\n// Makes the @content apply between the min and max breakpoints\n@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {\n  $min: breakpoint-min($lower, $breakpoints);\n  $max: breakpoint-max($upper, $breakpoints);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($lower, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($upper, $breakpoints) {\n      @content;\n    }\n  }\n}\n\n// Media between the breakpoint\'s minimum and maximum widths.\n// No minimum for the smallest breakpoint, and no maximum for the largest one.\n// Makes the @content apply only to the given breakpoint, not viewports any wider or narrower.\n@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {\n  $min:  breakpoint-min($name, $breakpoints);\n  $next: breakpoint-next($name, $breakpoints);\n  $max:  breakpoint-max($next);\n\n  @if $min != null and $max != null {\n    @media (min-width: $min) and (max-width: $max) {\n      @content;\n    }\n  } @else if $max == null {\n    @include media-breakpoint-up($name, $breakpoints) {\n      @content;\n    }\n  } @else if $min == null {\n    @include media-breakpoint-down($next, $breakpoints) {\n      @content;\n    }\n  }\n}\n', "// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n@if $enable-grid-classes {\n  // Single container class with breakpoint max-widths\n  .container,\n  // 100% wide container at all breakpoints\n  .container-fluid {\n    @include make-container();\n  }\n\n  // Responsive containers that are 100% wide until a breakpoint\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    .container-#{$breakpoint} {\n      @extend .container-fluid;\n    }\n\n    @include media-breakpoint-up($breakpoint, $grid-breakpoints) {\n      %responsive-container-#{$breakpoint} {\n        max-width: $container-max-width;\n      }\n\n      // Extend each breakpoint which is smaller or equal to the current breakpoint\n      $extend-breakpoint: true;\n\n      @each $name, $width in $grid-breakpoints {\n        @if ($extend-breakpoint) {\n          .container#{breakpoint-infix($name, $grid-breakpoints)} {\n            @extend %responsive-container-#{$breakpoint};\n          }\n\n          // Once the current breakpoint is reached, stop extending\n          @if ($breakpoint == $name) {\n            $extend-breakpoint: false;\n          }\n        }\n      }\n    }\n  }\n}\n", "// Row\n//\n// Rows contain your columns.\n\n@if $enable-grid-classes {\n  .row {\n    @include make-row();\n\n    > * {\n      @include make-col-ready();\n    }\n  }\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@if $enable-grid-classes {\n  @include make-grid-columns();\n}\n", '// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n@mixin make-row($gutter: $grid-gutter-width) {\n  --#{$variable-prefix}gutter-x: #{$gutter};\n  --#{$variable-prefix}gutter-y: 0;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: calc(var(--#{$variable-prefix}gutter-y) * -1); // stylelint-disable-line function-disallowed-list\n  margin-right: calc(var(--#{$variable-prefix}gutter-x) * -.5); // stylelint-disable-line function-disallowed-list\n  margin-left: calc(var(--#{$variable-prefix}gutter-x) * -.5); // stylelint-disable-line function-disallowed-list\n}\n\n@mixin make-col-ready($gutter: $grid-gutter-width) {\n  // Add box sizing if only the grid is loaded\n  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);\n  // Prevent columns from becoming too narrow when at smaller grid tiers by\n  // always setting `width: 100%;`. This works because we set the width\n  // later on to override this initial width.\n  flex-shrink: 0;\n  width: 100%;\n  max-width: 100%; // Prevent `.col-auto`, `.col` (& responsive variants) from breaking out the grid\n  padding-right: calc(var(--#{$variable-prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  padding-left: calc(var(--#{$variable-prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list\n  margin-top: var(--#{$variable-prefix}gutter-y);\n}\n\n@mixin make-col($size: false, $columns: $grid-columns) {\n  @if $size {\n    flex: 0 0 auto;\n    width: percentage(divide($size, $columns));\n\n  } @else {\n    flex: 1 1 0;\n    max-width: 100%;\n  }\n}\n\n@mixin make-col-auto() {\n  flex: 0 0 auto;\n  width: auto;\n}\n\n@mixin make-col-offset($size, $columns: $grid-columns) {\n  $num: divide($size, $columns);\n  margin-left: if($num == 0, 0, percentage($num));\n}\n\n// Row columns\n//\n// Specify on a parent element(e.g., .row) to force immediate children into NN\n// numberof columns. Supports wrapping to new lines, but does not do a Masonry\n// style grid.\n@mixin row-cols($count) {\n  > * {\n    flex: 0 0 auto;\n    width: divide(100%, $count);\n  }\n}\n\n// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {\n  @each $breakpoint in map-keys($breakpoints) {\n    // .row-cols defaults must all appear before .col overrides so they can be overridden.\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      // Provide basic `.col-{bp}` classes for equal-width flexbox columns\n      .col#{$infix} {\n        flex: 1 0 0%; // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      }\n\n      .row-cols#{$infix}-auto > * {\n        @include make-col-auto();\n      }\n\n      @if $grid-row-columns > 0 {\n        @for $i from 1 through $grid-row-columns {\n          .row-cols#{$infix}-#{$i} {\n            @include row-cols($i);\n          }\n        }\n      }\n    }\n  }\n\n  @each $breakpoint in map-keys($breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $breakpoints);\n\n    @include media-breakpoint-up($breakpoint, $breakpoints) {\n      .col#{$infix}-auto {\n        @include make-col-auto();\n      }\n\n      @if $columns > 0 {\n        @for $i from 1 through $columns {\n          .col#{$infix}-#{$i} {\n            @include make-col($i, $columns);\n          }\n        }\n\n        // `$columns - 1` because offsetting by the width of an entire row isn\'t possible\n        @for $i from 0 through ($columns - 1) {\n          @if not ($infix == "" and $i == 0) { // Avoid emitting useless .offset-0\n            .offset#{$infix}-#{$i} {\n              @include make-col-offset($i, $columns);\n            }\n          }\n        }\n      }\n\n      // Gutters\n      //\n      // Make use of `.g-*`, `.gx-*` or `.gy-*` utilities to change spacing between the columns.\n      @each $key, $value in $gutters {\n        .g#{$infix}-#{$key},\n        .gx#{$infix}-#{$key} {\n          --#{$variable-prefix}gutter-x: #{$value};\n        }\n\n        .g#{$infix}-#{$key},\n        .gy#{$infix}-#{$key} {\n          --#{$variable-prefix}gutter-y: #{$value};\n        }\n      }\n    }\n  }\n}\n', "//\n// Basic Bootstrap table\n//\n\n.table {\n  --#{$variable-prefix}table-bg: #{$table-bg};\n  --#{$variable-prefix}table-accent-bg: #{$table-accent-bg};\n  --#{$variable-prefix}table-striped-color: #{$table-striped-color};\n  --#{$variable-prefix}table-striped-bg: #{$table-striped-bg};\n  --#{$variable-prefix}table-active-color: #{$table-active-color};\n  --#{$variable-prefix}table-active-bg: #{$table-active-bg};\n  --#{$variable-prefix}table-hover-color: #{$table-hover-color};\n  --#{$variable-prefix}table-hover-bg: #{$table-hover-bg};\n\n  width: 100%;\n  margin-bottom: $spacer;\n  color: $table-color;\n  vertical-align: $table-cell-vertical-align;\n  border-color: $table-border-color;\n\n  // Target th & td\n  // We need the child combinator to prevent styles leaking to nested tables which doesn't have a `.table` class.\n  // We use the universal selectors here to simplify the selector (else we would need 6 different selectors).\n  // Another advantage is that this generates less code and makes the selector less specific making it easier to override.\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y $table-cell-padding-x;\n    background-color: var(--#{$variable-prefix}table-bg);\n    border-bottom-width: $table-border-width;\n    box-shadow: inset 0 0 0 9999px var(--#{$variable-prefix}table-accent-bg);\n  }\n\n  > tbody {\n    vertical-align: inherit;\n  }\n\n  > thead {\n    vertical-align: bottom;\n  }\n\n  // Highlight border color between thead, tbody and tfoot.\n  > :not(:last-child) > :last-child > * {\n    border-bottom-color: $table-group-separator-color;\n  }\n}\n\n\n//\n// Change placement of captions with a class\n//\n\n.caption-top {\n  caption-side: top;\n}\n\n\n//\n// Condensed table w/ half padding\n//\n\n.table-sm {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    padding: $table-cell-padding-y-sm $table-cell-padding-x-sm;\n  }\n}\n\n\n// Border versions\n//\n// Add or remove borders all around the table and between all the columns.\n//\n// When borders are added on all sides of the cells, the corners can render odd when\n// these borders do not have the same color or if they are semi-transparent.\n// Therefor we add top and border bottoms to the `tr`s and left and right borders\n// to the `td`s or `th`s\n\n.table-bordered {\n  > :not(caption) > * {\n    border-width: $table-border-width 0;\n\n    // stylelint-disable-next-line selector-max-universal\n    > * {\n      border-width: 0 $table-border-width;\n    }\n  }\n}\n\n.table-borderless {\n  // stylelint-disable-next-line selector-max-universal\n  > :not(caption) > * > * {\n    border-bottom-width: 0;\n  }\n}\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  > tbody > tr:nth-of-type(#{$table-striped-order}) {\n    --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-striped-bg);\n    color: var(--#{$variable-prefix}table-striped-color);\n  }\n}\n\n// Active table\n//\n// The `.table-active` class can be added to highlight rows or cells\n\n.table-active {\n  --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-active-bg);\n  color: var(--#{$variable-prefix}table-active-color);\n}\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover {\n    --#{$variable-prefix}table-accent-bg: var(--#{$variable-prefix}table-hover-bg);\n    color: var(--#{$variable-prefix}table-hover-color);\n  }\n}\n\n\n// Table variants\n//\n// Table variants set the table cell backgrounds, border colors\n// and the colors of the striped, hovered & active tables\n\n@each $color, $value in $table-variants {\n  @include table-variant($color, $value);\n}\n\n// Responsive tables\n//\n// Generate series of `.table-responsive-*` classes for configuring the screen\n// size of where your table will overflow.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n  @include media-breakpoint-down($breakpoint) {\n    .table-responsive#{$infix} {\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n    }\n  }\n}\n", "// scss-docs-start table-variant\n@mixin table-variant($state, $background) {\n  .table-#{$state} {\n    $color: color-contrast(opaque($body-bg, $background));\n    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));\n    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));\n    $active-bg: mix($color, $background, percentage($table-active-bg-factor));\n\n    --#{$variable-prefix}table-bg: #{$background};\n    --#{$variable-prefix}table-striped-bg: #{$striped-bg};\n    --#{$variable-prefix}table-striped-color: #{color-contrast($striped-bg)};\n    --#{$variable-prefix}table-active-bg: #{$active-bg};\n    --#{$variable-prefix}table-active-color: #{color-contrast($active-bg)};\n    --#{$variable-prefix}table-hover-bg: #{$hover-bg};\n    --#{$variable-prefix}table-hover-color: #{color-contrast($hover-bg)};\n\n    color: $color;\n    border-color: mix($color, $background, percentage($table-border-factor));\n  }\n}\n// scss-docs-end table-variant\n", "//\n// Labels\n//\n\n.form-label {\n  margin-bottom: $form-label-margin-bottom;\n  @include font-size($form-label-font-size);\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  color: $form-label-color;\n}\n\n// For use with horizontal and inline forms, when you need the label (or legend)\n// text to align with the form controls.\n.col-form-label {\n  padding-top: add($input-padding-y, $input-border-width);\n  padding-bottom: add($input-padding-y, $input-border-width);\n  margin-bottom: 0; // Override the `<legend>` default\n  @include font-size(inherit); // Override the `<legend>` default\n  font-style: $form-label-font-style;\n  font-weight: $form-label-font-weight;\n  line-height: $input-line-height;\n  color: $form-label-color;\n}\n\n.col-form-label-lg {\n  padding-top: add($input-padding-y-lg, $input-border-width);\n  padding-bottom: add($input-padding-y-lg, $input-border-width);\n  @include font-size($input-font-size-lg);\n}\n\n.col-form-label-sm {\n  padding-top: add($input-padding-y-sm, $input-border-width);\n  padding-bottom: add($input-padding-y-sm, $input-border-width);\n  @include font-size($input-font-size-sm);\n}\n", "//\n// Form text\n//\n\n.form-text {\n  margin-top: $form-text-margin-top;\n  @include font-size($form-text-font-size);\n  font-style: $form-text-font-style;\n  font-weight: $form-text-font-weight;\n  color: $form-text-color;\n}\n", '//\n// General form controls (plus a few specific high-level interventions)\n//\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y $input-padding-x;\n  font-family: $input-font-family;\n  @include font-size($input-font-size);\n  font-weight: $input-font-weight;\n  line-height: $input-line-height;\n  color: $input-color;\n  background-color: $input-bg;\n  background-clip: padding-box;\n  border: $input-border-width solid $input-border-color;\n  appearance: none; // Fix appearance for date inputs in Safari\n\n  // Note: This has no effect on <select>s in some browsers, due to the limited stylability of `<select>`s in CSS.\n  @include border-radius($input-border-radius, 0);\n\n  @include box-shadow($input-box-shadow);\n  @include transition($input-transition);\n\n  &[type="file"] {\n    overflow: hidden; // prevent pseudo element button overlap\n\n    &:not(:disabled):not([readonly]) {\n      cursor: pointer;\n    }\n  }\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  &:focus {\n    color: $input-focus-color;\n    background-color: $input-focus-bg;\n    border-color: $input-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($input-box-shadow, $input-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $input-focus-box-shadow;\n    }\n  }\n\n  // Add some height to date inputs on iOS\n  // https://github.com/twbs/bootstrap/issues/23307\n  // TODO: we can remove this workaround once https://bugs.webkit.org/show_bug.cgi?id=198959 is resolved\n  &::-webkit-date-and-time-value {\n    // Multiply line-height by 1em if it has no unit\n    height: if(unit($input-line-height) == "", $input-line-height * 1em, $input-line-height);\n  }\n\n  // Placeholder\n  &::placeholder {\n    color: $input-placeholder-color;\n    // Override Firefox\'s unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.\n    opacity: 1;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won\'t be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don\'t honor that edge case; we style them as disabled anyway.\n  &:disabled,\n  &[readonly] {\n    background-color: $input-disabled-bg;\n    border-color: $input-disabled-border-color;\n    // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.\n    opacity: 1;\n  }\n\n  // File input buttons theming\n  &::file-selector-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::file-selector-button {\n    background-color: $form-file-button-hover-bg;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y $input-padding-x;\n    margin: (-$input-padding-y) (-$input-padding-x);\n    margin-inline-end: $input-padding-x;\n    color: $form-file-button-color;\n    @include gradient-bg($form-file-button-bg);\n    pointer-events: none;\n    border-color: inherit;\n    border-style: solid;\n    border-width: 0;\n    border-inline-end-width: $input-border-width;\n    border-radius: 0; // stylelint-disable-line property-disallowed-list\n    @include transition($btn-transition);\n  }\n\n  &:hover:not(:disabled):not([readonly])::-webkit-file-upload-button {\n    background-color: $form-file-button-hover-bg;\n  }\n}\n\n// Readonly controls as plain text\n//\n// Apply class to a readonly input to make it appear like regular plain\n// text (without any border, background color, focus indicator)\n\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding: $input-padding-y 0;\n  margin-bottom: 0; // match inputs if this class comes on inputs with default margins\n  line-height: $input-line-height;\n  color: $input-plaintext-color;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: $input-border-width 0;\n\n  &.form-control-sm,\n  &.form-control-lg {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// Repeated in `_input_group.scss` to avoid Sass extend issues.\n\n.form-control-sm {\n  min-height: $input-height-sm;\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n\n  &::file-selector-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y-sm $input-padding-x-sm;\n    margin: (-$input-padding-y-sm) (-$input-padding-x-sm);\n    margin-inline-end: $input-padding-x-sm;\n  }\n}\n\n.form-control-lg {\n  min-height: $input-height-lg;\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n\n  &::file-selector-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n\n  &::-webkit-file-upload-button {\n    padding: $input-padding-y-lg $input-padding-x-lg;\n    margin: (-$input-padding-y-lg) (-$input-padding-x-lg);\n    margin-inline-end: $input-padding-x-lg;\n  }\n}\n\n// Make sure textareas don\'t shrink too much when resized\n// https://github.com/twbs/bootstrap/pull/29124\n// stylelint-disable selector-no-qualifying-type\ntextarea {\n  &.form-control {\n    min-height: $input-height;\n  }\n\n  &.form-control-sm {\n    min-height: $input-height-sm;\n  }\n\n  &.form-control-lg {\n    min-height: $input-height-lg;\n  }\n}\n// stylelint-enable selector-no-qualifying-type\n\n.form-control-color {\n  max-width: 3rem;\n  height: auto; // Override fixed browser height\n  padding: $input-padding-y;\n\n  &:not(:disabled):not([readonly]) {\n    cursor: pointer;\n  }\n\n  &::-moz-color-swatch {\n    height: if(unit($input-line-height) == "", $input-line-height * 1em, $input-line-height);\n    @include border-radius($input-border-radius);\n  }\n\n  &::-webkit-color-swatch {\n    height: if(unit($input-line-height) == "", $input-line-height * 1em, $input-line-height);\n    @include border-radius($input-border-radius);\n  }\n}\n', "// stylelint-disable property-disallowed-list\n@mixin transition($transition...) {\n  @if length($transition) == 0 {\n    $transition: $transition-base;\n  }\n\n  @if length($transition) > 1 {\n    @each $value in $transition {\n      @if $value == null or $value == none {\n        @warn \"The keyword 'none' or 'null' must be used as a single argument.\";\n      }\n    }\n  }\n\n  @if $enable-transitions {\n    @if nth($transition, 1) != null {\n      transition: $transition;\n    }\n\n    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {\n      @media (prefers-reduced-motion: reduce) {\n        transition: none;\n      }\n    }\n  }\n}\n", "// Gradients\n\n// scss-docs-start gradient-bg-mixin\n@mixin gradient-bg($color: null) {\n  background-color: $color;\n\n  @if $enable-gradients {\n    background-image: var(--#{$variable-prefix}gradient);\n  }\n}\n// scss-docs-end gradient-bg-mixin\n\n// scss-docs-start gradient-mixins\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);\n}\n\n@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {\n  background-image: linear-gradient($deg, $start-color, $end-color);\n}\n\n@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n}\n\n@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n}\n\n@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n// scss-docs-end gradient-mixins\n", '// Select\n//\n// Replaces the browser default select with a custom one, mostly pulled from\n// https://primer.github.io/.\n\n.form-select {\n  display: block;\n  width: 100%;\n  padding: $form-select-padding-y $form-select-indicator-padding $form-select-padding-y $form-select-padding-x;\n  // stylelint-disable-next-line property-no-vendor-prefix\n  -moz-padding-start: subtract($form-select-padding-x, 3px); // See https://github.com/twbs/bootstrap/issues/32636\n  font-family: $form-select-font-family;\n  @include font-size($form-select-font-size);\n  font-weight: $form-select-font-weight;\n  line-height: $form-select-line-height;\n  color: $form-select-color;\n  background-color: $form-select-bg;\n  background-image: escape-svg($form-select-indicator);\n  background-repeat: no-repeat;\n  background-position: $form-select-bg-position;\n  background-size: $form-select-bg-size;\n  border: $form-select-border-width solid $form-select-border-color;\n  @include border-radius($form-select-border-radius, 0);\n  @include box-shadow($form-select-box-shadow);\n  @include transition($form-select-transition);\n  appearance: none;\n\n  &:focus {\n    border-color: $form-select-focus-border-color;\n    outline: 0;\n    @if $enable-shadows {\n      @include box-shadow($form-select-box-shadow, $form-select-focus-box-shadow);\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: $form-select-focus-box-shadow;\n    }\n  }\n\n  &[multiple],\n  &[size]:not([size="1"]) {\n    padding-right: $form-select-padding-x;\n    background-image: none;\n  }\n\n  &:disabled {\n    color: $form-select-disabled-color;\n    background-color: $form-select-disabled-bg;\n    border-color: $form-select-disabled-border-color;\n  }\n\n  // Remove outline from select box in FF\n  &:-moz-focusring {\n    color: transparent;\n    text-shadow: 0 0 0 $form-select-color;\n  }\n}\n\n.form-select-sm {\n  padding-top: $form-select-padding-y-sm;\n  padding-bottom: $form-select-padding-y-sm;\n  padding-left: $form-select-padding-x-sm;\n  @include font-size($form-select-font-size-sm);\n}\n\n.form-select-lg {\n  padding-top: $form-select-padding-y-lg;\n  padding-bottom: $form-select-padding-y-lg;\n  padding-left: $form-select-padding-x-lg;\n  @include font-size($form-select-font-size-lg);\n}\n', '//\n// Check/radio\n//\n\n.form-check {\n  display: block;\n  min-height: $form-check-min-height;\n  padding-left: $form-check-padding-start;\n  margin-bottom: $form-check-margin-bottom;\n\n  .form-check-input {\n    float: left;\n    margin-left: $form-check-padding-start * -1;\n  }\n}\n\n.form-check-input {\n  width: $form-check-input-width;\n  height: $form-check-input-width;\n  margin-top: ($line-height-base - $form-check-input-width) * .5; // line-height minus check height\n  vertical-align: top;\n  background-color: $form-check-input-bg;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  border: $form-check-input-border;\n  appearance: none;\n  color-adjust: exact; // Keep themed appearance for print\n  @include transition($form-check-transition);\n\n  &[type="checkbox"] {\n    @include border-radius($form-check-input-border-radius);\n  }\n\n  &[type="radio"] {\n    // stylelint-disable-next-line property-disallowed-list\n    border-radius: $form-check-radio-border-radius;\n  }\n\n  &:active {\n    filter: $form-check-input-active-filter;\n  }\n\n  &:focus {\n    border-color: $form-check-input-focus-border;\n    outline: 0;\n    box-shadow: $form-check-input-focus-box-shadow;\n  }\n\n  &:checked {\n    background-color: $form-check-input-checked-bg-color;\n    border-color: $form-check-input-checked-border-color;\n\n    &[type="checkbox"] {\n      @if $enable-gradients {\n        background-image: escape-svg($form-check-input-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-check-input-checked-bg-image);\n      }\n    }\n\n    &[type="radio"] {\n      @if $enable-gradients {\n        background-image: escape-svg($form-check-radio-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-check-radio-checked-bg-image);\n      }\n    }\n  }\n\n  &[type="checkbox"]:indeterminate {\n    background-color: $form-check-input-indeterminate-bg-color;\n    border-color: $form-check-input-indeterminate-border-color;\n\n    @if $enable-gradients {\n      background-image: escape-svg($form-check-input-indeterminate-bg-image), var(--#{$variable-prefix}gradient);\n    } @else {\n      background-image: escape-svg($form-check-input-indeterminate-bg-image);\n    }\n  }\n\n  &:disabled {\n    pointer-events: none;\n    filter: none;\n    opacity: $form-check-input-disabled-opacity;\n  }\n\n  // Use disabled attribute in addition of :disabled pseudo-class\n  // See: https://github.com/twbs/bootstrap/issues/28247\n  &[disabled],\n  &:disabled {\n    ~ .form-check-label {\n      opacity: $form-check-label-disabled-opacity;\n    }\n  }\n}\n\n.form-check-label {\n  color: $form-check-label-color;\n  cursor: $form-check-label-cursor;\n}\n\n//\n// Switch\n//\n\n.form-switch {\n  padding-left: $form-switch-padding-start;\n\n  .form-check-input {\n    width: $form-switch-width;\n    margin-left: $form-switch-padding-start * -1;\n    background-image: escape-svg($form-switch-bg-image);\n    background-position: left center;\n    @include border-radius($form-switch-border-radius);\n    @include transition($form-switch-transition);\n\n    &:focus {\n      background-image: escape-svg($form-switch-focus-bg-image);\n    }\n\n    &:checked {\n      background-position: $form-switch-checked-bg-position;\n\n      @if $enable-gradients {\n        background-image: escape-svg($form-switch-checked-bg-image), var(--#{$variable-prefix}gradient);\n      } @else {\n        background-image: escape-svg($form-switch-checked-bg-image);\n      }\n    }\n  }\n}\n\n.form-check-inline {\n  display: inline-block;\n  margin-right: $form-check-inline-margin-end;\n}\n\n.btn-check {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n\n  &[disabled],\n  &:disabled {\n    + .btn {\n      pointer-events: none;\n      filter: none;\n      opacity: $form-check-btn-check-disabled-opacity;\n    }\n  }\n}\n', "// Range\n//\n// Style range inputs the same across browsers. Vendor-specific rules for pseudo\n// elements cannot be mixed. As such, there are no shared styles for focus or\n// active states on prefixed selectors.\n\n.form-range {\n  width: 100%;\n  height: add($form-range-thumb-height, $form-range-thumb-focus-box-shadow-width * 2);\n  padding: 0; // Need to reset padding\n  background-color: transparent;\n  appearance: none;\n\n  &:focus {\n    outline: 0;\n\n    // Pseudo-elements must be split across multiple rulesets to have an effect.\n    // No box-shadow() mixin for focus accessibility.\n    &::-webkit-slider-thumb { box-shadow: $form-range-thumb-focus-box-shadow; }\n    &::-moz-range-thumb     { box-shadow: $form-range-thumb-focus-box-shadow; }\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    margin-top: ($form-range-track-height - $form-range-thumb-height) * .5; // Webkit specific\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent; // Why?\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent;\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &::-moz-range-thumb {\n    width: $form-range-thumb-width;\n    height: $form-range-thumb-height;\n    @include gradient-bg($form-range-thumb-bg);\n    border: $form-range-thumb-border;\n    @include border-radius($form-range-thumb-border-radius);\n    @include box-shadow($form-range-thumb-box-shadow);\n    @include transition($form-range-thumb-transition);\n    appearance: none;\n\n    &:active {\n      @include gradient-bg($form-range-thumb-active-bg);\n    }\n  }\n\n  &::-moz-range-track {\n    width: $form-range-track-width;\n    height: $form-range-track-height;\n    color: transparent;\n    cursor: $form-range-track-cursor;\n    background-color: $form-range-track-bg;\n    border-color: transparent; // Firefox specific?\n    @include border-radius($form-range-track-border-radius);\n    @include box-shadow($form-range-track-box-shadow);\n  }\n\n  &:disabled {\n    pointer-events: none;\n\n    &::-webkit-slider-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n\n    &::-moz-range-thumb {\n      background-color: $form-range-thumb-disabled-bg;\n    }\n  }\n}\n", ".form-floating {\n  position: relative;\n\n  > .form-control,\n  > .form-select {\n    height: $form-floating-height;\n    line-height: $form-floating-line-height;\n  }\n\n  > label {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%; // allow textareas\n    padding: $form-floating-padding-y $form-floating-padding-x;\n    pointer-events: none;\n    border: $input-border-width solid transparent; // Required for aligning label's text with the input as it affects inner box model\n    transform-origin: 0 0;\n    @include transition($form-floating-transition);\n  }\n\n  // stylelint-disable no-duplicate-selectors\n  > .form-control {\n    padding: $form-floating-padding-y $form-floating-padding-x;\n\n    &::placeholder {\n      color: transparent;\n    }\n\n    &:focus,\n    &:not(:placeholder-shown) {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n    // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n    &:-webkit-autofill {\n      padding-top: $form-floating-input-padding-t;\n      padding-bottom: $form-floating-input-padding-b;\n    }\n  }\n\n  > .form-select {\n    padding-top: $form-floating-input-padding-t;\n    padding-bottom: $form-floating-input-padding-b;\n  }\n\n  > .form-control:focus,\n  > .form-control:not(:placeholder-shown),\n  > .form-select {\n    ~ label {\n      opacity: $form-floating-label-opacity;\n      transform: $form-floating-label-transform;\n    }\n  }\n  // Duplicated because `:-webkit-autofill` invalidates other selectors when grouped\n  > .form-control:-webkit-autofill {\n    ~ label {\n      opacity: $form-floating-label-opacity;\n      transform: $form-floating-label-transform;\n    }\n  }\n  // stylelint-enable no-duplicate-selectors\n}\n", '//\n// Base styles\n//\n\n.input-group {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // For form validation feedback\n  align-items: stretch;\n  width: 100%;\n\n  > .form-control,\n  > .form-select {\n    position: relative; // For focus state\'s z-index\n    flex: 1 1 auto;\n    width: 1%;\n    min-width: 0; // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size\n  }\n\n  // Bring the "active" form control to the top of surrounding elements\n  > .form-control:focus,\n  > .form-select:focus {\n    z-index: 3;\n  }\n\n  // Ensure buttons are always above inputs for more visually pleasing borders.\n  // This isn\'t needed for `.input-group-text` since it shares the same border-color\n  // as our inputs.\n  .btn {\n    position: relative;\n    z-index: 2;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n}\n\n\n// Textual addons\n//\n// Serves as a catch-all element for any text or radio/checkbox input you wish\n// to prepend or append to an input.\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: $input-group-addon-padding-y $input-group-addon-padding-x;\n  @include font-size($input-font-size); // Match inputs\n  font-weight: $input-group-addon-font-weight;\n  line-height: $input-line-height;\n  color: $input-group-addon-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $input-group-addon-bg;\n  border: $input-border-width solid $input-group-addon-border-color;\n  @include border-radius($input-border-radius);\n}\n\n\n// Sizing\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .form-select,\n.input-group-lg > .input-group-text,\n.input-group-lg > .btn {\n  padding: $input-padding-y-lg $input-padding-x-lg;\n  @include font-size($input-font-size-lg);\n  @include border-radius($input-border-radius-lg);\n}\n\n.input-group-sm > .form-control,\n.input-group-sm > .form-select,\n.input-group-sm > .input-group-text,\n.input-group-sm > .btn {\n  padding: $input-padding-y-sm $input-padding-x-sm;\n  @include font-size($input-font-size-sm);\n  @include border-radius($input-border-radius-sm);\n}\n\n.input-group-lg > .form-select,\n.input-group-sm > .form-select {\n  padding-right: $form-select-padding-x + $form-select-indicator-padding;\n}\n\n\n// Rounded corners\n//\n// These rulesets must come after the sizing ones to properly override sm and lg\n// border-radius values when extending. They\'re more specific than we\'d like\n// with the `.input-group >` part, but without it, we cannot override the sizing.\n\n// stylelint-disable-next-line no-duplicate-selectors\n.input-group {\n  &:not(.has-validation) {\n    > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),\n    > .dropdown-toggle:nth-last-child(n + 3) {\n      @include border-end-radius(0);\n    }\n  }\n\n  &.has-validation {\n    > :nth-last-child(n + 3):not(.dropdown-toggle):not(.dropdown-menu),\n    > .dropdown-toggle:nth-last-child(n + 4) {\n      @include border-end-radius(0);\n    }\n  }\n\n  $validation-messages: "";\n  @each $state in map-keys($form-validation-states) {\n    $validation-messages: $validation-messages + ":not(." + unquote($state) + "-tooltip)" + ":not(." + unquote($state) + "-feedback)";\n  }\n\n  > :not(:first-child):not(.dropdown-menu)#{$validation-messages} {\n    margin-left: -$input-border-width;\n    @include border-start-radius(0);\n  }\n}\n', '// This mixin uses an `if()` technique to be compatible with Dart Sass\n// See https://github.com/sass/sass/issues/1873#issuecomment-152293725 for more details\n\n// scss-docs-start form-validation-mixins\n@mixin form-validation-state-selector($state) {\n  @if ($state == "valid" or $state == "invalid") {\n    .was-validated #{if(&, "&", "")}:#{$state},\n    #{if(&, "&", "")}.is-#{$state} {\n      @content;\n    }\n  } @else {\n    #{if(&, "&", "")}.is-#{$state} {\n      @content;\n    }\n  }\n}\n\n@mixin form-validation-state(\n  $state,\n  $color,\n  $icon,\n  $tooltip-color: color-contrast($color),\n  $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity),\n  $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity)\n) {\n  .#{$state}-feedback {\n    display: none;\n    width: 100%;\n    margin-top: $form-feedback-margin-top;\n    @include font-size($form-feedback-font-size);\n    font-style: $form-feedback-font-style;\n    color: $color;\n  }\n\n  .#{$state}-tooltip {\n    position: absolute;\n    top: 100%;\n    z-index: 5;\n    display: none;\n    max-width: 100%; // Contain to parent when possible\n    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;\n    margin-top: .1rem;\n    @include font-size($form-feedback-tooltip-font-size);\n    line-height: $form-feedback-tooltip-line-height;\n    color: $tooltip-color;\n    background-color: $tooltip-bg-color;\n    @include border-radius($form-feedback-tooltip-border-radius);\n  }\n\n  @include form-validation-state-selector($state) {\n    ~ .#{$state}-feedback,\n    ~ .#{$state}-tooltip {\n      display: block;\n    }\n  }\n\n  .form-control {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-image: escape-svg($icon);\n        background-repeat: no-repeat;\n        background-position: right $input-height-inner-quarter center;\n        background-size: $input-height-inner-half $input-height-inner-half;\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  // stylelint-disable-next-line selector-no-qualifying-type\n  textarea.form-control {\n    @include form-validation-state-selector($state) {\n      @if $enable-validation-icons {\n        padding-right: $input-height-inner;\n        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;\n      }\n    }\n  }\n\n  .form-select {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      @if $enable-validation-icons {\n        &:not([multiple]):not([size]),\n        &:not([multiple])[size="1"] {\n          padding-right: $form-select-feedback-icon-padding-end;\n          background-image: escape-svg($form-select-indicator), escape-svg($icon);\n          background-position: $form-select-bg-position, $form-select-feedback-icon-position;\n          background-size: $form-select-bg-size, $form-select-feedback-icon-size;\n        }\n      }\n\n      &:focus {\n        border-color: $color;\n        box-shadow: $focus-box-shadow;\n      }\n    }\n  }\n\n  .form-check-input {\n    @include form-validation-state-selector($state) {\n      border-color: $color;\n\n      &:checked {\n        background-color: $color;\n      }\n\n      &:focus {\n        box-shadow: $focus-box-shadow;\n      }\n\n      ~ .form-check-label {\n        color: $color;\n      }\n    }\n  }\n  .form-check-inline .form-check-input {\n    ~ .#{$state}-feedback {\n      margin-left: .5em;\n    }\n  }\n\n  .input-group .form-control,\n  .input-group .form-select {\n    @include form-validation-state-selector($state) {\n      @if $state == "valid" {\n        z-index: 1;\n      } @else if $state == "invalid" {\n        z-index: 2;\n      }\n      &:focus {\n        z-index: 3;\n      }\n    }\n  }\n}\n// scss-docs-end form-validation-mixins\n', "//\n// Base styles\n//\n\n.btn {\n  display: inline-block;\n  font-family: $btn-font-family;\n  font-weight: $btn-font-weight;\n  line-height: $btn-line-height;\n  color: $body-color;\n  text-align: center;\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: $btn-white-space;\n  vertical-align: middle;\n  cursor: if($enable-button-pointers, pointer, null);\n  user-select: none;\n  background-color: transparent;\n  border: $btn-border-width solid transparent;\n  @include button-size($btn-padding-y, $btn-padding-x, $btn-font-size, $btn-border-radius);\n  @include transition($btn-transition);\n\n  &:hover {\n    color: $body-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    outline: 0;\n    box-shadow: $btn-focus-box-shadow;\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active {\n    @include box-shadow($btn-active-box-shadow);\n\n    &:focus {\n      @include box-shadow($btn-focus-box-shadow, $btn-active-box-shadow);\n    }\n  }\n\n  &:disabled,\n  &.disabled,\n  fieldset:disabled & {\n    pointer-events: none;\n    opacity: $btn-disabled-opacity;\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Alternate buttons\n//\n\n// scss-docs-start btn-variant-loops\n@each $color, $value in $theme-colors {\n  .btn-#{$color} {\n    @include button-variant($value, $value);\n  }\n}\n\n@each $color, $value in $theme-colors {\n  .btn-outline-#{$color} {\n    @include button-outline-variant($value);\n  }\n}\n// scss-docs-end btn-variant-loops\n\n\n//\n// Link buttons\n//\n\n// Make a button look and behave like a link\n.btn-link {\n  font-weight: $font-weight-normal;\n  color: $btn-link-color;\n  text-decoration: $link-decoration;\n\n  &:hover {\n    color: $btn-link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus {\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $btn-link-disabled-color;\n  }\n\n  // No need for an active state here\n}\n\n\n//\n// Button Sizes\n//\n\n.btn-lg {\n  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);\n}\n\n.btn-sm {\n  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);\n}\n", "// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n// scss-docs-start btn-variant-mixin\n@mixin button-variant(\n  $background,\n  $border,\n  $color: color-contrast($background),\n  $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),\n  $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),\n  $hover-color: color-contrast($hover-background),\n  $active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),\n  $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),\n  $active-color: color-contrast($active-background),\n  $disabled-background: $background,\n  $disabled-border: $border,\n  $disabled-color: color-contrast($disabled-background)\n) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n  @include box-shadow($btn-box-shadow);\n\n  &:hover {\n    color: $hover-color;\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    color: $hover-color;\n    @include gradient-bg($hover-background);\n    border-color: $hover-border;\n    @if $enable-shadows {\n      @include box-shadow($btn-box-shadow, 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5));\n    } @else {\n      // Avoid using mixin so we can pass custom focus shadow properly\n      box-shadow: 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5);\n    }\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active,\n  .show > &.dropdown-toggle {\n    color: $active-color;\n    background-color: $active-background;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba(mix($color, $border, 15%), .5);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $disabled-color;\n    background-color: $disabled-background;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n    border-color: $disabled-border;\n  }\n}\n// scss-docs-end btn-variant-mixin\n\n// scss-docs-start btn-outline-variant-mixin\n@mixin button-outline-variant(\n  $color,\n  $color-hover: color-contrast($color),\n  $active-background: $color,\n  $active-border: $color,\n  $active-color: color-contrast($active-background)\n) {\n  color: $color;\n  border-color: $color;\n\n  &:hover {\n    color: $color-hover;\n    background-color: $active-background;\n    border-color: $active-border;\n  }\n\n  .btn-check:focus + &,\n  &:focus {\n    box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n  }\n\n  .btn-check:checked + &,\n  .btn-check:active + &,\n  &:active,\n  &.active,\n  &.dropdown-toggle.show {\n    color: $active-color;\n    background-color: $active-background;\n    border-color: $active-border;\n\n    &:focus {\n      @if $enable-shadows {\n        @include box-shadow($btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5));\n      } @else {\n        // Avoid using mixin so we can pass custom focus shadow properly\n        box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);\n      }\n    }\n  }\n\n  &:disabled,\n  &.disabled {\n    color: $color;\n    background-color: transparent;\n  }\n}\n// scss-docs-end btn-outline-variant-mixin\n\n// scss-docs-start btn-size-mixin\n@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {\n  padding: $padding-y $padding-x;\n  @include font-size($font-size);\n  // Manually declare to provide an override to the browser default\n  @include border-radius($border-radius, 0);\n}\n// scss-docs-end btn-size-mixin\n", ".fade {\n  @include transition($transition-fade);\n\n  &:not(.show) {\n    opacity: 0;\n  }\n}\n\n// scss-docs-start collapse-classes\n.collapse {\n  &:not(.show) {\n    display: none;\n  }\n}\n\n.collapsing {\n  height: 0;\n  overflow: hidden;\n  @include transition($transition-collapse);\n}\n// scss-docs-end collapse-classes\n", "$transition-collapse: height .75s ease;", "// The dropdown wrapper (`<div>`)\n.dropup,\n.dropend,\n.dropdown,\n.dropstart {\n  position: relative;\n}\n\n.dropdown-toggle {\n  white-space: nowrap;\n\n  // Generate the caret automatically\n  @include caret();\n}\n\n// The dropdown menu\n.dropdown-menu {\n  position: absolute;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  min-width: $dropdown-min-width;\n  padding: $dropdown-padding-y $dropdown-padding-x;\n  margin: 0; // Override default margin of ul\n  @include font-size($dropdown-font-size);\n  color: $dropdown-color;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  list-style: none;\n  background-color: $dropdown-bg;\n  background-clip: padding-box;\n  border: $dropdown-border-width solid $dropdown-border-color;\n  @include border-radius($dropdown-border-radius);\n  @include box-shadow($dropdown-box-shadow);\n\n  &[data-bs-popper] {\n    top: 100%;\n    left: 0;\n    margin-top: $dropdown-spacer;\n  }\n}\n\n// scss-docs-start responsive-breakpoints\n// We deliberately hardcode the `bs-` prefix because we check\n// this custom property in JS to determine Popper's positioning\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .dropdown-menu#{$infix}-start {\n      --bs-position: start;\n\n      &[data-bs-popper] {\n        right: auto;\n        left: 0;\n      }\n    }\n\n    .dropdown-menu#{$infix}-end {\n      --bs-position: end;\n\n      &[data-bs-popper] {\n        right: 0;\n        left: auto;\n      }\n    }\n  }\n}\n// scss-docs-end responsive-breakpoints\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n// Just add .dropup after the standard .dropdown class and you're set.\n.dropup {\n  .dropdown-menu[data-bs-popper] {\n    top: auto;\n    bottom: 100%;\n    margin-top: 0;\n    margin-bottom: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(up);\n  }\n}\n\n.dropend {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: auto;\n    left: 100%;\n    margin-top: 0;\n    margin-left: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(end);\n    &::after {\n      vertical-align: 0;\n    }\n  }\n}\n\n.dropstart {\n  .dropdown-menu[data-bs-popper] {\n    top: 0;\n    right: 100%;\n    left: auto;\n    margin-top: 0;\n    margin-right: $dropdown-spacer;\n  }\n\n  .dropdown-toggle {\n    @include caret(start);\n    &::before {\n      vertical-align: 0;\n    }\n  }\n}\n\n\n// Dividers (basically an `<hr>`) within the dropdown\n.dropdown-divider {\n  height: 0;\n  margin: $dropdown-divider-margin-y 0;\n  overflow: hidden;\n  border-top: 1px solid $dropdown-divider-bg;\n}\n\n// Links, buttons, and more within the dropdown menu\n//\n// `<button>`-specific styles are denoted with `// For <button>s`\n.dropdown-item {\n  display: block;\n  width: 100%; // For `<button>`s\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  clear: both;\n  font-weight: $font-weight-normal;\n  color: $dropdown-link-color;\n  text-align: inherit; // For `<button>`s\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap; // prevent links from randomly breaking onto new lines\n  background-color: transparent; // For `<button>`s\n  border: 0; // For `<button>`s\n\n  // Prevent dropdown overflow if there's no padding\n  // See https://github.com/twbs/bootstrap/pull/27703\n  @if $dropdown-padding-y == 0 {\n    &:first-child {\n      @include border-top-radius($dropdown-inner-border-radius);\n    }\n\n    &:last-child {\n      @include border-bottom-radius($dropdown-inner-border-radius);\n    }\n  }\n\n  &:hover,\n  &:focus {\n    color: $dropdown-link-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    @include gradient-bg($dropdown-link-hover-bg);\n  }\n\n  &.active,\n  &:active {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    @include gradient-bg($dropdown-link-active-bg);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $dropdown-link-disabled-color;\n    pointer-events: none;\n    background-color: transparent;\n    // Remove CSS gradients if they're enabled\n    background-image: if($enable-gradients, none, null);\n  }\n}\n\n.dropdown-menu.show {\n  display: block;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: $dropdown-header-padding;\n  margin-bottom: 0; // for use with heading elements\n  @include font-size($font-size-sm);\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Dropdown text\n.dropdown-item-text {\n  display: block;\n  padding: $dropdown-item-padding-y $dropdown-item-padding-x;\n  color: $dropdown-link-color;\n}\n\n// Dark dropdowns\n.dropdown-menu-dark {\n  color: $dropdown-dark-color;\n  background-color: $dropdown-dark-bg;\n  border-color: $dropdown-dark-border-color;\n  @include box-shadow($dropdown-dark-box-shadow);\n\n  .dropdown-item {\n    color: $dropdown-dark-link-color;\n\n    &:hover,\n    &:focus {\n      color: $dropdown-dark-link-hover-color;\n      @include gradient-bg($dropdown-dark-link-hover-bg);\n    }\n\n    &.active,\n    &:active {\n      color: $dropdown-dark-link-active-color;\n      @include gradient-bg($dropdown-dark-link-active-bg);\n    }\n\n    &.disabled,\n    &:disabled {\n      color: $dropdown-dark-link-disabled-color;\n    }\n  }\n\n  .dropdown-divider {\n    border-color: $dropdown-dark-divider-bg;\n  }\n\n  .dropdown-item-text {\n    color: $dropdown-dark-link-color;\n  }\n\n  .dropdown-header {\n    color: $dropdown-dark-header-color;\n  }\n}\n", '// scss-docs-start caret-mixins\n@mixin caret-down {\n  border-top: $caret-width solid;\n  border-right: $caret-width solid transparent;\n  border-bottom: 0;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-up {\n  border-top: 0;\n  border-right: $caret-width solid transparent;\n  border-bottom: $caret-width solid;\n  border-left: $caret-width solid transparent;\n}\n\n@mixin caret-end {\n  border-top: $caret-width solid transparent;\n  border-right: 0;\n  border-bottom: $caret-width solid transparent;\n  border-left: $caret-width solid;\n}\n\n@mixin caret-start {\n  border-top: $caret-width solid transparent;\n  border-right: $caret-width solid;\n  border-bottom: $caret-width solid transparent;\n}\n\n@mixin caret($direction: down) {\n  @if $enable-caret {\n    &::after {\n      display: inline-block;\n      margin-left: $caret-spacing;\n      vertical-align: $caret-vertical-align;\n      content: "";\n      @if $direction == down {\n        @include caret-down();\n      } @else if $direction == up {\n        @include caret-up();\n      } @else if $direction == end {\n        @include caret-end();\n      }\n    }\n\n    @if $direction == start {\n      &::after {\n        display: none;\n      }\n\n      &::before {\n        display: inline-block;\n        margin-right: $caret-spacing;\n        vertical-align: $caret-vertical-align;\n        content: "";\n        @include caret-start();\n      }\n    }\n\n    &:empty::after {\n      margin-left: 0;\n    }\n  }\n}\n// scss-docs-end caret-mixins\n', '// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-flex;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n\n  > .btn {\n    position: relative;\n    flex: 1 1 auto;\n  }\n\n  // Bring the hover, focused, and "active" buttons to the front to overlay\n  // the borders properly\n  > .btn-check:checked + .btn,\n  > .btn-check:focus + .btn,\n  > .btn:hover,\n  > .btn:focus,\n  > .btn:active,\n  > .btn.active {\n    z-index: 1;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n\n  .input-group {\n    width: auto;\n  }\n}\n\n.btn-group {\n  // Prevent double borders when buttons are next to each other\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-left: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-end-radius(0);\n  }\n\n  // The left radius should be 0 if the button is:\n  // - the "third or more" child\n  // - the second child and the previous element isn\'t `.btn-check` (making it the first child visually)\n  // - part of a btn-group which isn\'t the first child\n  > .btn:nth-child(n + 3),\n  > :not(.btn-check) + .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-start-radius(0);\n  }\n}\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n//\n// Split button dropdowns\n//\n\n.dropdown-toggle-split {\n  padding-right: $btn-padding-x * .75;\n  padding-left: $btn-padding-x * .75;\n\n  &::after,\n  .dropup &::after,\n  .dropend &::after {\n    margin-left: 0;\n  }\n\n  .dropstart &::before {\n    margin-right: 0;\n  }\n}\n\n.btn-sm + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-sm * .75;\n  padding-left: $btn-padding-x-sm * .75;\n}\n\n.btn-lg + .dropdown-toggle-split {\n  padding-right: $btn-padding-x-lg * .75;\n  padding-left: $btn-padding-x-lg * .75;\n}\n\n\n// The clickable button for toggling the menu\n// Set the same inset shadow as the :active state\n.btn-group.show .dropdown-toggle {\n  @include box-shadow($btn-active-box-shadow);\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n//\n// Vertical button groups\n//\n\n.btn-group-vertical {\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n\n  > .btn,\n  > .btn-group {\n    width: 100%;\n  }\n\n  > .btn:not(:first-child),\n  > .btn-group:not(:first-child) {\n    margin-top: -$btn-border-width;\n  }\n\n  // Reset rounded corners\n  > .btn:not(:last-child):not(.dropdown-toggle),\n  > .btn-group:not(:last-child) > .btn {\n    @include border-bottom-radius(0);\n  }\n\n  > .btn ~ .btn,\n  > .btn-group:not(:first-child) > .btn {\n    @include border-top-radius(0);\n  }\n}\n', "// Base class\n//\n// Kickstart any navigation component with a set of style resets. Works with\n// `<nav>`s, `<ul>`s or `<ol>`s.\n\n.nav {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: block;\n  padding: $nav-link-padding-y $nav-link-padding-x;\n  @include font-size($nav-link-font-size);\n  font-weight: $nav-link-font-weight;\n  color: $nav-link-color;\n  text-decoration: if($link-decoration == none, null, none);\n  @include transition($nav-link-transition);\n\n  &:hover,\n  &:focus {\n    color: $nav-link-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n\n  // Disabled state lightens text\n  &.disabled {\n    color: $nav-link-disabled-color;\n    pointer-events: none;\n    cursor: default;\n  }\n}\n\n//\n// Tabs\n//\n\n.nav-tabs {\n  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;\n\n  .nav-link {\n    margin-bottom: -$nav-tabs-border-width;\n    background: none;\n    border: $nav-tabs-border-width solid transparent;\n    @include border-top-radius($nav-tabs-border-radius);\n\n    &:hover,\n    &:focus {\n      border-color: $nav-tabs-link-hover-border-color;\n      // Prevents active .nav-link tab overlapping focus outline of previous/next .nav-link\n      isolation: isolate;\n    }\n\n    &.disabled {\n      color: $nav-link-disabled-color;\n      background-color: transparent;\n      border-color: transparent;\n    }\n  }\n\n  .nav-link.active,\n  .nav-item.show .nav-link {\n    color: $nav-tabs-link-active-color;\n    background-color: $nav-tabs-link-active-bg;\n    border-color: $nav-tabs-link-active-border-color;\n  }\n\n  .dropdown-menu {\n    // Make dropdown border overlap tab border\n    margin-top: -$nav-tabs-border-width;\n    // Remove the top rounded corners here since there is a hard edge above the menu\n    @include border-top-radius(0);\n  }\n}\n\n\n//\n// Pills\n//\n\n.nav-pills {\n  .nav-link {\n    background: none;\n    border: 0;\n    @include border-radius($nav-pills-border-radius);\n  }\n\n  .nav-link.active,\n  .show > .nav-link {\n    color: $nav-pills-link-active-color;\n    @include gradient-bg($nav-pills-link-active-bg);\n  }\n}\n\n\n//\n// Justified variants\n//\n\n.nav-fill {\n  > .nav-link,\n  .nav-item {\n    flex: 1 1 auto;\n    text-align: center;\n  }\n}\n\n.nav-justified {\n  > .nav-link,\n  .nav-item {\n    flex-basis: 0;\n    flex-grow: 1;\n    text-align: center;\n  }\n}\n\n.nav-fill,\n.nav-justified {\n  .nav-item .nav-link {\n    width: 100%; // Make sure button will grow\n  }\n}\n\n\n// Tabbable tabs\n//\n// Hide tabbable panes to start, show them when `.active`\n\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n", "// Contents\n//\n// Navbar\n// Navbar brand\n// Navbar nav\n// Navbar text\n// Responsive navbar\n// Navbar position\n// Navbar themes\n\n\n// Navbar\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap; // allow us to do the line break for collapsing content\n  align-items: center;\n  justify-content: space-between; // space out brand from logo\n  padding-top: $navbar-padding-y;\n  padding-right: $navbar-padding-x; // default: null\n  padding-bottom: $navbar-padding-y;\n  padding-left: $navbar-padding-x; // default: null\n  @include gradient-bg();\n\n  // Because flex properties aren't inherited, we need to redeclare these first\n  // few properties so that content nested within behave properly.\n  // The `flex-wrap` property is inherited to simplify the expanded navbars\n  %container-flex-properties {\n    display: flex;\n    flex-wrap: inherit;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  > .container,\n  > .container-fluid {\n    @extend %container-flex-properties;\n  }\n\n  @each $breakpoint, $container-max-width in $container-max-widths {\n    > .container#{breakpoint-infix($breakpoint, $container-max-widths)} {\n      @extend %container-flex-properties;\n    }\n  }\n}\n\n\n// Navbar brand\n//\n// Used for brand, project, or site names.\n\n.navbar-brand {\n  padding-top: $navbar-brand-padding-y;\n  padding-bottom: $navbar-brand-padding-y;\n  margin-right: $navbar-brand-margin-end;\n  @include font-size($navbar-brand-font-size);\n  text-decoration: if($link-decoration == none, null, none);\n  white-space: nowrap;\n\n  &:hover,\n  &:focus {\n    text-decoration: if($link-hover-decoration == underline, none, null);\n  }\n}\n\n\n// Navbar nav\n//\n// Custom navbar navigation (doesn't require `.nav`, but does make use of `.nav-link`).\n\n.navbar-nav {\n  display: flex;\n  flex-direction: column; // cannot use `inherit` to get the `.navbar`s value\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n\n  .nav-link {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .dropdown-menu {\n    position: static;\n  }\n}\n\n\n// Navbar text\n//\n//\n\n.navbar-text {\n  padding-top: $nav-link-padding-y;\n  padding-bottom: $nav-link-padding-y;\n}\n\n\n// Responsive navbar\n//\n// Custom styles for responsive collapsing and toggling of navbar contents.\n// Powered by the collapse Bootstrap JavaScript plugin.\n\n// When collapsed, prevent the toggleable navbar contents from appearing in\n// the default flexbox row orientation. Requires the use of `flex-wrap: wrap`\n// on the `.navbar` parent.\n.navbar-collapse {\n  flex-basis: 100%;\n  flex-grow: 1;\n  // For always expanded or extra full navbars, ensure content aligns itself\n  // properly vertically. Can be easily overridden with flex utilities.\n  align-items: center;\n}\n\n// Button for toggling the navbar when in its collapsed state\n.navbar-toggler {\n  padding: $navbar-toggler-padding-y $navbar-toggler-padding-x;\n  @include font-size($navbar-toggler-font-size);\n  line-height: 1;\n  background-color: transparent; // remove default button style\n  border: $border-width solid transparent; // remove default button style\n  @include border-radius($navbar-toggler-border-radius);\n  @include transition($navbar-toggler-transition);\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  &:focus {\n    text-decoration: none;\n    outline: 0;\n    box-shadow: 0 0 0 $navbar-toggler-focus-width;\n  }\n}\n\n// Keep as a separate element so folks can easily override it with another icon\n// or image file as needed.\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n}\n\n.navbar-nav-scroll {\n  max-height: var(--#{$variable-prefix}scroll-height, 75vh);\n  overflow-y: auto;\n}\n\n// scss-docs-start navbar-expand-loop\n// Generate series of `.navbar-expand-*` responsive classes for configuring\n// where your navbar collapses.\n.navbar-expand {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $next: breakpoint-next($breakpoint, $grid-breakpoints);\n    $infix: breakpoint-infix($next, $grid-breakpoints);\n\n    // stylelint-disable-next-line scss/selector-no-union-class-name\n    &#{$infix} {\n      @include media-breakpoint-up($next) {\n        flex-wrap: nowrap;\n        justify-content: flex-start;\n\n        .navbar-nav {\n          flex-direction: row;\n\n          .dropdown-menu {\n            position: absolute;\n          }\n\n          .nav-link {\n            padding-right: $navbar-nav-link-padding-x;\n            padding-left: $navbar-nav-link-padding-x;\n          }\n        }\n\n        .navbar-nav-scroll {\n          overflow: visible;\n        }\n\n        .navbar-collapse {\n          display: flex !important; // stylelint-disable-line declaration-no-important\n          flex-basis: auto;\n        }\n\n        .navbar-toggler {\n          display: none;\n        }\n      }\n    }\n  }\n}\n// scss-docs-end navbar-expand-loop\n\n\n// Navbar themes\n//\n// Styles for switching between navbars with light or dark background.\n\n// Dark links against a light background\n.navbar-light {\n  .navbar-brand {\n    color: $navbar-light-brand-color;\n\n    &:hover,\n    &:focus {\n      color: $navbar-light-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-light-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-light-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-light-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .nav-link.active {\n      color: $navbar-light-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-light-color;\n    border-color: $navbar-light-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-light-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-light-color;\n\n    a,\n    a:hover,\n    a:focus  {\n      color: $navbar-light-active-color;\n    }\n  }\n}\n\n// White links against a dark background\n.navbar-dark {\n  .navbar-brand {\n    color: $navbar-dark-brand-color;\n\n    &:hover,\n    &:focus {\n      color: $navbar-dark-brand-hover-color;\n    }\n  }\n\n  .navbar-nav {\n    .nav-link {\n      color: $navbar-dark-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-dark-hover-color;\n      }\n\n      &.disabled {\n        color: $navbar-dark-disabled-color;\n      }\n    }\n\n    .show > .nav-link,\n    .nav-link.active {\n      color: $navbar-dark-active-color;\n    }\n  }\n\n  .navbar-toggler {\n    color: $navbar-dark-color;\n    border-color: $navbar-dark-toggler-border-color;\n  }\n\n  .navbar-toggler-icon {\n    background-image: escape-svg($navbar-dark-toggler-icon-bg);\n  }\n\n  .navbar-text {\n    color: $navbar-dark-color;\n    a,\n    a:hover,\n    a:focus {\n      color: $navbar-dark-active-color;\n    }\n  }\n}\n", "//\n// Base styles\n//\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0; // See https://github.com/twbs/bootstrap/pull/22740#issuecomment-305868106\n  height: $card-height;\n  word-wrap: break-word;\n  background-color: $card-bg;\n  background-clip: border-box;\n  border: $card-border-width solid $card-border-color;\n  @include border-radius($card-border-radius);\n\n  > hr {\n    margin-right: 0;\n    margin-left: 0;\n  }\n\n  > .list-group {\n    border-top: inherit;\n    border-bottom: inherit;\n\n    &:first-child {\n      border-top-width: 0;\n      @include border-top-radius($card-inner-border-radius);\n    }\n\n    &:last-child  {\n      border-bottom-width: 0;\n      @include border-bottom-radius($card-inner-border-radius);\n    }\n  }\n\n  // Due to specificity of the above selector (`.card > .list-group`), we must\n  // use a child selector here to prevent double borders.\n  > .card-header + .list-group,\n  > .list-group + .card-footer {\n    border-top: 0;\n  }\n}\n\n.card-body {\n  // Enable `flex-grow: 1` for decks and groups so that card blocks take up\n  // as much space as possible, ensuring footers are aligned to the bottom.\n  flex: 1 1 auto;\n  padding: $card-spacer-y $card-spacer-x;\n  color: $card-color;\n}\n\n.card-title {\n  margin-bottom: $card-title-spacer-y;\n}\n\n.card-subtitle {\n  margin-top: -$card-title-spacer-y * .5;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link {\n  &:hover {\n    text-decoration: none;\n  }\n\n  + .card-link {\n    margin-left: $card-spacer-x;\n  }\n}\n\n//\n// Optional textual caps\n//\n\n.card-header {\n  padding: $card-cap-padding-y $card-cap-padding-x;\n  margin-bottom: 0; // Removes the default margin-bottom of <hN>\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-bottom: $card-border-width solid $card-border-color;\n\n  &:first-child {\n    @include border-radius($card-inner-border-radius $card-inner-border-radius 0 0);\n  }\n}\n\n.card-footer {\n  padding: $card-cap-padding-y $card-cap-padding-x;\n  color: $card-cap-color;\n  background-color: $card-cap-bg;\n  border-top: $card-border-width solid $card-border-color;\n\n  &:last-child {\n    @include border-radius(0 0 $card-inner-border-radius $card-inner-border-radius);\n  }\n}\n\n\n//\n// Header navs\n//\n\n.card-header-tabs {\n  margin-right: -$card-cap-padding-x * .5;\n  margin-bottom: -$card-cap-padding-y;\n  margin-left: -$card-cap-padding-x * .5;\n  border-bottom: 0;\n\n  @if $nav-tabs-link-active-bg != $card-bg {\n    .nav-link.active {\n      background-color: $card-bg;\n      border-bottom-color: $card-bg;\n    }\n  }\n}\n\n.card-header-pills {\n  margin-right: -$card-cap-padding-x * .5;\n  margin-left: -$card-cap-padding-x * .5;\n}\n\n// Card image\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: $card-img-overlay-padding;\n  @include border-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-top,\n.card-img-bottom {\n  width: 100%; // Required because we use flexbox and this inherently applies align-self: stretch\n}\n\n.card-img,\n.card-img-top {\n  @include border-top-radius($card-inner-border-radius);\n}\n\n.card-img,\n.card-img-bottom {\n  @include border-bottom-radius($card-inner-border-radius);\n}\n\n\n//\n// Card groups\n//\n\n.card-group {\n  // The child selector allows nested `.card` within `.card-group`\n  // to display properly.\n  > .card {\n    margin-bottom: $card-group-margin;\n  }\n\n  @include media-breakpoint-up(sm) {\n    display: flex;\n    flex-flow: row wrap;\n    // The child selector allows nested `.card` within `.card-group`\n    // to display properly.\n    > .card {\n      // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4\n      flex: 1 0 0%;\n      margin-bottom: 0;\n\n      + .card {\n        margin-left: 0;\n        border-left: 0;\n      }\n\n      // Handle rounded corners\n      @if $enable-rounded {\n        &:not(:last-child) {\n          @include border-end-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-right-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &:not(:first-child) {\n          @include border-start-radius(0);\n\n          .card-img-top,\n          .card-header {\n            // stylelint-disable-next-line property-disallowed-list\n            border-top-left-radius: 0;\n          }\n          .card-img-bottom,\n          .card-footer {\n            // stylelint-disable-next-line property-disallowed-list\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n    }\n  }\n}\n", '//\n// Base styles\n//\n\n.accordion-button {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: $accordion-button-padding-y $accordion-button-padding-x;\n  @include font-size($font-size-base);\n  color: $accordion-button-color;\n  text-align: left; // Reset button style\n  background-color: $accordion-button-bg;\n  border: 0;\n  @include border-radius(0);\n  overflow-anchor: none;\n  @include transition($accordion-transition);\n\n  &:not(.collapsed) {\n    color: $accordion-button-active-color;\n    background-color: $accordion-button-active-bg;\n    box-shadow: inset 0 ($accordion-border-width * -1) 0 $accordion-border-color;\n\n    &::after {\n      background-image: escape-svg($accordion-button-active-icon);\n      transform: $accordion-icon-transform;\n    }\n  }\n\n  // Accordion icon\n  &::after {\n    flex-shrink: 0;\n    width: $accordion-icon-width;\n    height: $accordion-icon-width;\n    margin-left: auto;\n    content: "";\n    background-image: escape-svg($accordion-button-icon);\n    background-repeat: no-repeat;\n    background-size: $accordion-icon-width;\n    @include transition($accordion-icon-transition);\n  }\n\n  &:hover {\n    z-index: 2;\n  }\n\n  &:focus {\n    z-index: 3;\n    border-color: $accordion-button-focus-border-color;\n    outline: 0;\n    box-shadow: $accordion-button-focus-box-shadow;\n  }\n}\n\n.accordion-header {\n  margin-bottom: 0;\n}\n\n.accordion-item {\n  background-color: $accordion-bg;\n  border: $accordion-border-width solid $accordion-border-color;\n\n  &:first-of-type {\n    @include border-top-radius($accordion-border-radius);\n\n    .accordion-button {\n      @include border-top-radius($accordion-inner-border-radius);\n    }\n  }\n\n  &:not(:first-of-type) {\n    border-top: 0;\n  }\n\n  // Only set a border-radius on the last item if the accordion is collapsed\n  &:last-of-type {\n    @include border-bottom-radius($accordion-border-radius);\n\n    .accordion-button {\n      &.collapsed {\n        @include border-bottom-radius($accordion-inner-border-radius);\n      }\n    }\n\n    .accordion-collapse {\n      @include border-bottom-radius($accordion-border-radius);\n    }\n  }\n}\n\n.accordion-body {\n  padding: $accordion-body-padding-y $accordion-body-padding-x;\n}\n\n\n// Flush accordion items\n//\n// Remove borders and border-radius to keep accordion items edge-to-edge.\n\n.accordion-flush {\n  .accordion-collapse {\n    border-width: 0;\n  }\n\n  .accordion-item {\n    border-right: 0;\n    border-left: 0;\n    @include border-radius(0);\n\n    &:first-child { border-top: 0; }\n    &:last-child { border-bottom: 0; }\n\n    .accordion-button {\n      @include border-radius(0);\n    }\n  }\n}\n', '.breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  padding: $breadcrumb-padding-y $breadcrumb-padding-x;\n  margin-bottom: $breadcrumb-margin-bottom;\n  @include font-size($breadcrumb-font-size);\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  @include border-radius($breadcrumb-border-radius);\n}\n\n.breadcrumb-item {\n  // The separator between breadcrumbs (by default, a forward-slash: "/")\n  + .breadcrumb-item {\n    padding-left: $breadcrumb-item-padding-x;\n\n    &::before {\n      float: left; // Suppress inline spacings and underlining of the separator\n      padding-right: $breadcrumb-item-padding-x;\n      color: $breadcrumb-divider-color;\n      content: var(--#{$variable-prefix}breadcrumb-divider, escape-svg($breadcrumb-divider)) #{"/* rtl:"} var(--#{$variable-prefix}breadcrumb-divider, escape-svg($breadcrumb-divider-flipped)) #{"*/"};\n    }\n  }\n\n  &.active {\n    color: $breadcrumb-active-color;\n  }\n}\n', ".pagination {\n  display: flex;\n  @include list-unstyled();\n}\n\n.page-link {\n  position: relative;\n  display: block;\n  color: $pagination-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $pagination-bg;\n  border: $pagination-border-width solid $pagination-border-color;\n  @include transition($pagination-transition);\n\n  &:hover {\n    z-index: 2;\n    color: $pagination-hover-color;\n    text-decoration: if($link-hover-decoration == underline, none, null);\n    background-color: $pagination-hover-bg;\n    border-color: $pagination-hover-border-color;\n  }\n\n  &:focus {\n    z-index: 3;\n    color: $pagination-focus-color;\n    background-color: $pagination-focus-bg;\n    outline: $pagination-focus-outline;\n    box-shadow: $pagination-focus-box-shadow;\n  }\n}\n\n.page-item {\n  &:not(:first-child) .page-link {\n    margin-left: $pagination-margin-start;\n  }\n\n  &.active .page-link {\n    z-index: 3;\n    color: $pagination-active-color;\n    @include gradient-bg($pagination-active-bg);\n    border-color: $pagination-active-border-color;\n  }\n\n  &.disabled .page-link {\n    color: $pagination-disabled-color;\n    pointer-events: none;\n    background-color: $pagination-disabled-bg;\n    border-color: $pagination-disabled-border-color;\n  }\n}\n\n\n//\n// Sizing\n//\n@include pagination-size($pagination-padding-y, $pagination-padding-x, null, $pagination-border-radius);\n\n.pagination-lg {\n  @include pagination-size($pagination-padding-y-lg, $pagination-padding-x-lg, $font-size-lg, $pagination-border-radius-lg);\n}\n\n.pagination-sm {\n  @include pagination-size($pagination-padding-y-sm, $pagination-padding-x-sm, $font-size-sm, $pagination-border-radius-sm);\n}\n", "// Pagination\n\n// scss-docs-start pagination-mixin\n@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {\n  .page-link {\n    padding: $padding-y $padding-x;\n    @include font-size($font-size);\n  }\n\n  .page-item {\n    @if $pagination-margin-start == (-$pagination-border-width) {\n      &:first-child {\n        .page-link {\n          @include border-start-radius($border-radius);\n        }\n      }\n\n      &:last-child {\n        .page-link {\n          @include border-end-radius($border-radius);\n        }\n      }\n    } @else {\n      //Add border-radius to all pageLinks in case they have left margin\n      .page-link {\n        @include border-radius($border-radius);\n      }\n    }\n  }\n}\n// scss-docs-end pagination-mixin\n", "// Base class\n//\n// Requires one of the contextual, color modifier classes for `color` and\n// `background-color`.\n\n.badge {\n  display: inline-block;\n  padding: $badge-padding-y $badge-padding-x;\n  @include font-size($badge-font-size);\n  font-weight: $badge-font-weight;\n  line-height: 1;\n  color: $badge-color;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  @include border-radius($badge-border-radius);\n  @include gradient-bg();\n\n  // Empty badges collapse automatically\n  &:empty {\n    display: none;\n  }\n}\n\n// Quick fix for badges in buttons\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n", "//\n// Base styles\n//\n\n.alert {\n  position: relative;\n  padding: $alert-padding-y $alert-padding-x;\n  margin-bottom: $alert-margin-bottom;\n  border: $alert-border-width solid transparent;\n  @include border-radius($alert-border-radius);\n}\n\n// Headings for larger alerts\n.alert-heading {\n  // Specified to prevent conflicts of changing $headings-color\n  color: inherit;\n}\n\n// Provide class for links that match alerts\n.alert-link {\n  font-weight: $alert-link-font-weight;\n}\n\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissible {\n  padding-right: $alert-dismissible-padding-r;\n\n  // Adjust close link position\n  .btn-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: $stretched-link-z-index + 1;\n    padding: $alert-padding-y * 1.25 $alert-padding-x;\n  }\n}\n\n\n// scss-docs-start alert-modifiers\n// Generate contextual modifier classes for colorizing the alert.\n\n@each $state, $value in $theme-colors {\n  $alert-background: shift-color($value, $alert-bg-scale);\n  $alert-border: shift-color($value, $alert-border-scale);\n  $alert-color: shift-color($value, $alert-color-scale);\n  @if (contrast-ratio($alert-background, $alert-color) < $min-contrast-ratio) {\n    $alert-color: mix($value, color-contrast($alert-background), abs($alert-color-scale));\n  }\n  .alert-#{$state} {\n    @include alert-variant($alert-background, $alert-border, $alert-color);\n  }\n}\n// scss-docs-end alert-modifiers\n", "// scss-docs-start alert-variant-mixin\n@mixin alert-variant($background, $border, $color) {\n  color: $color;\n  @include gradient-bg($background);\n  border-color: $border;\n\n  .alert-link {\n    color: shade-color($color, 20%);\n  }\n}\n// scss-docs-end alert-variant-mixin\n", "// Disable animation if transitions are disabled\n\n// scss-docs-start progress-keyframes\n@if $enable-transitions {\n  @keyframes progress-bar-stripes {\n    0% { background-position-x: $progress-height; }\n  }\n}\n// scss-docs-end progress-keyframes\n\n.progress {\n  display: flex;\n  height: $progress-height;\n  overflow: hidden; // force rounded corners by cropping it\n  @include font-size($progress-font-size);\n  background-color: $progress-bg;\n  @include border-radius($progress-border-radius);\n  @include box-shadow($progress-box-shadow);\n}\n\n.progress-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  overflow: hidden;\n  color: $progress-bar-color;\n  text-align: center;\n  white-space: nowrap;\n  background-color: $progress-bar-bg;\n  @include transition($progress-bar-transition);\n}\n\n.progress-bar-striped {\n  @include gradient-striped();\n  background-size: $progress-height $progress-height;\n}\n\n@if $enable-transitions {\n  .progress-bar-animated {\n    animation: $progress-bar-animation-timing progress-bar-stripes;\n\n    @if $enable-reduced-motion {\n      @media (prefers-reduced-motion: reduce) {\n        animation: none;\n      }\n    }\n  }\n}\n", '// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  display: flex;\n  flex-direction: column;\n\n  // No need to set list-style: none; since .list-group-item is block level\n  padding-left: 0; // reset padding because ul and ol\n  margin-bottom: 0;\n  @include border-radius($list-group-border-radius);\n}\n\n.list-group-numbered {\n  list-style-type: none;\n  counter-reset: section;\n\n  > li::before {\n    // Increments only this instance of the section counter\n    content: counters(section, ".") ". ";\n    counter-increment: section;\n  }\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive\n// list items. Includes an extra `.active` modifier class for selected items.\n\n.list-group-item-action {\n  width: 100%; // For `<button>`s (anchors become 100% by default though)\n  color: $list-group-action-color;\n  text-align: inherit; // For `<button>`s (anchors inherit)\n\n  // Hover state\n  &:hover,\n  &:focus {\n    z-index: 1; // Place hover/focus items above their siblings for proper border styling\n    color: $list-group-action-hover-color;\n    text-decoration: none;\n    background-color: $list-group-hover-bg;\n  }\n\n  &:active {\n    color: $list-group-action-active-color;\n    background-color: $list-group-action-active-bg;\n  }\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: $list-group-item-padding-y $list-group-item-padding-x;\n  color: $list-group-color;\n  text-decoration: if($link-decoration == none, null, none);\n  background-color: $list-group-bg;\n  border: $list-group-border-width solid $list-group-border-color;\n\n  &:first-child {\n    @include border-top-radius(inherit);\n  }\n\n  &:last-child {\n    @include border-bottom-radius(inherit);\n  }\n\n  &.disabled,\n  &:disabled {\n    color: $list-group-disabled-color;\n    pointer-events: none;\n    background-color: $list-group-disabled-bg;\n  }\n\n  // Include both here for `<a>`s and `<button>`s\n  &.active {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border-color;\n  }\n\n  & + & {\n    border-top-width: 0;\n\n    &.active {\n      margin-top: -$list-group-border-width;\n      border-top-width: $list-group-border-width;\n    }\n  }\n}\n\n\n// Horizontal\n//\n// Change the layout of list group items from vertical (default) to horizontal.\n\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .list-group-horizontal#{$infix} {\n      flex-direction: row;\n\n      > .list-group-item {\n        &:first-child {\n          @include border-bottom-start-radius($list-group-border-radius);\n          @include border-top-end-radius(0);\n        }\n\n        &:last-child {\n          @include border-top-end-radius($list-group-border-radius);\n          @include border-bottom-start-radius(0);\n        }\n\n        &.active {\n          margin-top: 0;\n        }\n\n        + .list-group-item {\n          border-top-width: $list-group-border-width;\n          border-left-width: 0;\n\n          &.active {\n            margin-left: -$list-group-border-width;\n            border-left-width: $list-group-border-width;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n// Flush list items\n//\n// Remove borders and border-radius to keep list group items edge-to-edge. Most\n// useful within other components (e.g., cards).\n\n.list-group-flush {\n  @include border-radius(0);\n\n  > .list-group-item {\n    border-width: 0 0 $list-group-border-width;\n\n    &:last-child {\n      border-bottom-width: 0;\n    }\n  }\n}\n\n\n// scss-docs-start list-group-modifiers\n// List group contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@each $state, $value in $theme-colors {\n  $list-group-variant-bg: shift-color($value, $list-group-item-bg-scale);\n  $list-group-variant-color: shift-color($value, $list-group-item-color-scale);\n  @if (contrast-ratio($list-group-variant-bg, $list-group-variant-color) < $min-contrast-ratio) {\n    $list-group-variant-color: mix($value, color-contrast($list-group-variant-bg), abs($list-group-item-color-scale));\n  }\n\n  @include list-group-item-variant($state, $list-group-variant-bg, $list-group-variant-color);\n}\n// scss-docs-end list-group-modifiers\n', "// List Groups\n\n// scss-docs-start list-group-mixin\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    &.list-group-item-action {\n      &:hover,\n      &:focus {\n        color: $color;\n        background-color: shade-color($background, 10%);\n      }\n\n      &.active {\n        color: $white;\n        background-color: $color;\n        border-color: $color;\n      }\n    }\n  }\n}\n// scss-docs-end list-group-mixin\n", '// transparent background and border properties included for button version.\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href="#"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n.btn-close {\n  box-sizing: content-box;\n  width: $btn-close-width;\n  height: $btn-close-height;\n  padding: $btn-close-padding-y $btn-close-padding-x;\n  color: $btn-close-color;\n  background: transparent escape-svg($btn-close-bg) center / $btn-close-width auto no-repeat; // include transparent for button elements\n  border: 0; // for button elements\n  @include border-radius();\n  opacity: $btn-close-opacity;\n\n  // Override <a>\'s hover style\n  &:hover {\n    color: $btn-close-color;\n    text-decoration: none;\n    opacity: $btn-close-hover-opacity;\n  }\n\n  &:focus {\n    outline: 0;\n    box-shadow: $btn-close-focus-shadow;\n    opacity: $btn-close-focus-opacity;\n  }\n\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    opacity: $btn-close-disabled-opacity;\n  }\n}\n\n.btn-close-white {\n  filter: $btn-close-white-filter;\n}\n', ".toast {\n  width: $toast-max-width;\n  max-width: 100%;\n  @include font-size($toast-font-size);\n  color: $toast-color;\n  pointer-events: auto;\n  background-color: $toast-background-color;\n  background-clip: padding-box;\n  border: $toast-border-width solid $toast-border-color;\n  box-shadow: $toast-box-shadow;\n  @include border-radius($toast-border-radius);\n\n  &:not(.showing):not(.show) {\n    opacity: 0;\n  }\n\n  &.hide {\n    display: none;\n  }\n}\n\n.toast-container {\n  width: max-content;\n  max-width: 100%;\n  pointer-events: none;\n\n  > :not(:last-child) {\n    margin-bottom: $toast-spacing;\n  }\n}\n\n.toast-header {\n  display: flex;\n  align-items: center;\n  padding: $toast-padding-y $toast-padding-x;\n  color: $toast-header-color;\n  background-color: $toast-header-background-color;\n  background-clip: padding-box;\n  border-bottom: $toast-border-width solid $toast-header-border-color;\n  @include border-top-radius(subtract($toast-border-radius, $toast-border-width));\n\n  .btn-close {\n    margin-right: $toast-padding-x * -.5;\n    margin-left: $toast-padding-x;\n  }\n}\n\n.toast-body {\n  padding: $toast-padding-x; // apply to both vertical and horizontal\n  word-wrap: break-word;\n}\n", '// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and stuff\n\n\n// Container that the modal scrolls within\n.modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  display: none;\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n  // We deliberately don\'t use `-webkit-overflow-scrolling: touch;` due to a\n  // gnarly iOS Safari bug: https://bugs.webkit.org/show_bug.cgi?id=158342\n  // See also https://github.com/twbs/bootstrap/issues/17695\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: $modal-dialog-margin;\n  // allow clicks to pass through for custom click handling to close modal\n  pointer-events: none;\n\n  // When fading in the modal, animate it to slide down\n  .modal.fade & {\n    @include transition($modal-transition);\n    transform: $modal-fade-transform;\n  }\n  .modal.show & {\n    transform: $modal-show-transform;\n  }\n\n  // When trying to close, animate focus to scale\n  .modal.modal-static & {\n    transform: $modal-scale-transform;\n  }\n}\n\n.modal-dialog-scrollable {\n  height: subtract(100%, $modal-dialog-margin * 2);\n\n  .modal-content {\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n  .modal-body {\n    overflow-y: auto;\n  }\n}\n\n.modal-dialog-centered {\n  display: flex;\n  align-items: center;\n  min-height: subtract(100%, $modal-dialog-margin * 2);\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  width: 100%; // Ensure `.modal-content` extends the full width of the parent `.modal-dialog`\n  // counteract the pointer-events: none; in the .modal-dialog\n  color: $modal-content-color;\n  pointer-events: auto;\n  background-color: $modal-content-bg;\n  background-clip: padding-box;\n  border: $modal-content-border-width solid $modal-content-border-color;\n  @include border-radius($modal-content-border-radius);\n  @include box-shadow($modal-content-box-shadow-xs);\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: $zindex-modal-backdrop;\n  width: 100vw;\n  height: 100vh;\n  background-color: $modal-backdrop-bg;\n\n  // Fade for backdrop\n  &.fade { opacity: 0; }\n  &.show { opacity: $modal-backdrop-opacity; }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between; // Put modal header elements (title and dismiss) on opposite ends\n  padding: $modal-header-padding;\n  border-bottom: $modal-header-border-width solid $modal-header-border-color;\n  @include border-top-radius($modal-content-inner-border-radius);\n\n  .btn-close {\n    padding: ($modal-header-padding-y * .5) ($modal-header-padding-x * .5);\n    margin: ($modal-header-padding-y * -.5) ($modal-header-padding-x * -.5) ($modal-header-padding-y * -.5) auto;\n  }\n}\n\n// Title text within header\n.modal-title {\n  margin-bottom: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  // Enable `flex-grow: 1` so that the body take up as much space as possible\n  // when there should be a fixed height on `.modal-dialog`.\n  flex: 1 1 auto;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n  align-items: center; // vertically center\n  justify-content: flex-end; // Right align buttons with flex property because text-align doesn\'t work on flex items\n  padding: $modal-inner-padding - $modal-footer-margin-between * .5;\n  border-top: $modal-footer-border-width solid $modal-footer-border-color;\n  @include border-bottom-radius($modal-content-inner-border-radius);\n\n  // Place margin between footer elements\n  // This solution is far from ideal because of the universal selector usage,\n  // but is needed to fix https://github.com/twbs/bootstrap/issues/24800\n  > * {\n    margin: $modal-footer-margin-between * .5;\n  }\n}\n\n// Scale up the modal\n@include media-breakpoint-up(sm) {\n  // Automatically set modal\'s width for larger viewports\n  .modal-dialog {\n    max-width: $modal-md;\n    margin: $modal-dialog-margin-y-sm-up auto;\n  }\n\n  .modal-dialog-scrollable {\n    height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n  }\n\n  .modal-dialog-centered {\n    min-height: subtract(100%, $modal-dialog-margin-y-sm-up * 2);\n  }\n\n  .modal-content {\n    @include box-shadow($modal-content-box-shadow-sm-up);\n  }\n\n  .modal-sm { max-width: $modal-sm; }\n}\n\n@include media-breakpoint-up(lg) {\n  .modal-lg,\n  .modal-xl {\n    max-width: $modal-lg;\n  }\n}\n\n@include media-breakpoint-up(xl) {\n  .modal-xl { max-width: $modal-xl; }\n}\n\n// scss-docs-start modal-fullscreen-loop\n@each $breakpoint in map-keys($grid-breakpoints) {\n  $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n  $postfix: if($infix != "", $infix + "-down", "");\n\n  @include media-breakpoint-down($breakpoint) {\n    .modal-fullscreen#{$postfix} {\n      width: 100vw;\n      max-width: none;\n      height: 100%;\n      margin: 0;\n\n      .modal-content {\n        height: 100%;\n        border: 0;\n        @include border-radius(0);\n      }\n\n      .modal-header {\n        @include border-radius(0);\n      }\n\n      .modal-body {\n        overflow-y: auto;\n      }\n\n      .modal-footer {\n        @include border-radius(0);\n      }\n    }\n  }\n}\n// scss-docs-end modal-fullscreen-loop\n', '// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  margin: $tooltip-margin;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($tooltip-font-size);\n  // Allow breaking very long words so they don\'t overflow the tooltip\'s bounds\n  word-wrap: break-word;\n  opacity: 0;\n\n  &.show { opacity: $tooltip-opacity; }\n\n  .tooltip-arrow {\n    position: absolute;\n    display: block;\n    width: $tooltip-arrow-width;\n    height: $tooltip-arrow-height;\n\n    &::before {\n      position: absolute;\n      content: "";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-tooltip-top {\n  padding: $tooltip-arrow-height 0;\n\n  .tooltip-arrow {\n    bottom: 0;\n\n    &::before {\n      top: -1px;\n      border-width: $tooltip-arrow-height ($tooltip-arrow-width * .5) 0;\n      border-top-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-end {\n  padding: 0 $tooltip-arrow-height;\n\n  .tooltip-arrow {\n    left: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      right: -1px;\n      border-width: ($tooltip-arrow-width * .5) $tooltip-arrow-height ($tooltip-arrow-width * .5) 0;\n      border-right-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-bottom {\n  padding: $tooltip-arrow-height 0;\n\n  .tooltip-arrow {\n    top: 0;\n\n    &::before {\n      bottom: -1px;\n      border-width: 0 ($tooltip-arrow-width * .5) $tooltip-arrow-height;\n      border-bottom-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-start {\n  padding: 0 $tooltip-arrow-height;\n\n  .tooltip-arrow {\n    right: 0;\n    width: $tooltip-arrow-height;\n    height: $tooltip-arrow-width;\n\n    &::before {\n      left: -1px;\n      border-width: ($tooltip-arrow-width * .5) 0 ($tooltip-arrow-width * .5) $tooltip-arrow-height;\n      border-left-color: $tooltip-arrow-color;\n    }\n  }\n}\n\n.bs-tooltip-auto {\n  &[data-popper-placement^="top"] {\n    @extend .bs-tooltip-top;\n  }\n  &[data-popper-placement^="right"] {\n    @extend .bs-tooltip-end;\n  }\n  &[data-popper-placement^="bottom"] {\n    @extend .bs-tooltip-bottom;\n  }\n  &[data-popper-placement^="left"] {\n    @extend .bs-tooltip-start;\n  }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: $tooltip-padding-y $tooltip-padding-x;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  @include border-radius($tooltip-border-radius);\n}\n', "@mixin reset-text {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size or overflow-wrap / word-wrap.\n  font-style: normal;\n  font-weight: $font-weight-normal;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n}\n", '.popover {\n  position: absolute;\n  top: 0;\n  left: 0 #{"/* rtl:ignore */"};\n  z-index: $zindex-popover;\n  display: block;\n  max-width: $popover-max-width;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text();\n  @include font-size($popover-font-size);\n  // Allow breaking very long words so they don\'t overflow the popover\'s bounds\n  word-wrap: break-word;\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: $popover-border-width solid $popover-border-color;\n  @include border-radius($popover-border-radius);\n  @include box-shadow($popover-box-shadow);\n\n  .popover-arrow {\n    position: absolute;\n    display: block;\n    width: $popover-arrow-width;\n    height: $popover-arrow-height;\n\n    &::before,\n    &::after {\n      position: absolute;\n      display: block;\n      content: "";\n      border-color: transparent;\n      border-style: solid;\n    }\n  }\n}\n\n.bs-popover-top {\n  > .popover-arrow {\n    bottom: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      bottom: 0;\n      border-width: $popover-arrow-height ($popover-arrow-width * .5) 0;\n      border-top-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      bottom: $popover-border-width;\n      border-width: $popover-arrow-height ($popover-arrow-width * .5) 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-end {\n  > .popover-arrow {\n    left: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n\n    &::before {\n      left: 0;\n      border-width: ($popover-arrow-width * .5) $popover-arrow-height ($popover-arrow-width * .5) 0;\n      border-right-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      left: $popover-border-width;\n      border-width: ($popover-arrow-width * .5) $popover-arrow-height ($popover-arrow-width * .5) 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-bottom {\n  > .popover-arrow {\n    top: subtract(-$popover-arrow-height, $popover-border-width);\n\n    &::before {\n      top: 0;\n      border-width: 0 ($popover-arrow-width * .5) $popover-arrow-height ($popover-arrow-width * .5);\n      border-bottom-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      top: $popover-border-width;\n      border-width: 0 ($popover-arrow-width * .5) $popover-arrow-height ($popover-arrow-width * .5);\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  // This will remove the popover-header\'s border just below the arrow\n  .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: $popover-arrow-width;\n    margin-left: -$popover-arrow-width * .5;\n    content: "";\n    border-bottom: $popover-border-width solid $popover-header-bg;\n  }\n}\n\n.bs-popover-start {\n  > .popover-arrow {\n    right: subtract(-$popover-arrow-height, $popover-border-width);\n    width: $popover-arrow-height;\n    height: $popover-arrow-width;\n\n    &::before {\n      right: 0;\n      border-width: ($popover-arrow-width * .5) 0 ($popover-arrow-width * .5) $popover-arrow-height;\n      border-left-color: $popover-arrow-outer-color;\n    }\n\n    &::after {\n      right: $popover-border-width;\n      border-width: ($popover-arrow-width * .5) 0 ($popover-arrow-width * .5) $popover-arrow-height;\n      border-left-color: $popover-arrow-color;\n    }\n  }\n}\n\n.bs-popover-auto {\n  &[data-popper-placement^="top"] {\n    @extend .bs-popover-top;\n  }\n  &[data-popper-placement^="right"] {\n    @extend .bs-popover-end;\n  }\n  &[data-popper-placement^="bottom"] {\n    @extend .bs-popover-bottom;\n  }\n  &[data-popper-placement^="left"] {\n    @extend .bs-popover-start;\n  }\n}\n\n// Offset the popover to account for the popover arrow\n.popover-header {\n  padding: $popover-header-padding-y $popover-header-padding-x;\n  margin-bottom: 0; // Reset the default from Reboot\n  @include font-size($font-size-base);\n  color: $popover-header-color;\n  background-color: $popover-header-bg;\n  border-bottom: $popover-border-width solid $popover-border-color;\n  @include border-top-radius($popover-inner-border-radius);\n\n  &:empty {\n    display: none;\n  }\n}\n\n.popover-body {\n  padding: $popover-body-padding-y $popover-body-padding-x;\n  color: $popover-body-color;\n}\n', '// Notes on the classes:\n//\n// 1. .carousel.pointer-event should ideally be pan-y (to allow for users to scroll vertically)\n//    even when their scroll action started on a carousel, but for compatibility (with Firefox)\n//    we\'re preventing all actions instead\n// 2. The .carousel-item-start and .carousel-item-end is used to indicate where\n//    the active slide is heading.\n// 3. .active.carousel-item is the current slide.\n// 4. .active.carousel-item-start and .active.carousel-item-end is the current\n//    slide in its in-transition state. Only one of these occurs at a time.\n// 5. .carousel-item-next.carousel-item-start and .carousel-item-prev.carousel-item-end\n//    is the upcoming slide in transition.\n\n.carousel {\n  position: relative;\n}\n\n.carousel.pointer-event {\n  touch-action: pan-y;\n}\n\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  @include clearfix();\n}\n\n.carousel-item {\n  position: relative;\n  display: none;\n  float: left;\n  width: 100%;\n  margin-right: -100%;\n  backface-visibility: hidden;\n  @include transition($carousel-transition);\n}\n\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block;\n}\n\n/* rtl:begin:ignore */\n.carousel-item-next:not(.carousel-item-start),\n.active.carousel-item-end {\n  transform: translateX(100%);\n}\n\n.carousel-item-prev:not(.carousel-item-end),\n.active.carousel-item-start {\n  transform: translateX(-100%);\n}\n\n/* rtl:end:ignore */\n\n\n//\n// Alternate transitions\n//\n\n.carousel-fade {\n  .carousel-item {\n    opacity: 0;\n    transition-property: opacity;\n    transform: none;\n  }\n\n  .carousel-item.active,\n  .carousel-item-next.carousel-item-start,\n  .carousel-item-prev.carousel-item-end {\n    z-index: 1;\n    opacity: 1;\n  }\n\n  .active.carousel-item-start,\n  .active.carousel-item-end {\n    z-index: 0;\n    opacity: 0;\n    @include transition(opacity 0s $carousel-transition-duration);\n  }\n}\n\n\n//\n// Left/right controls for nav\n//\n\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  // Use flex for alignment (1-3)\n  display: flex; // 1. allow flex styles\n  align-items: center; // 2. vertically center contents\n  justify-content: center; // 3. horizontally center contents\n  width: $carousel-control-width;\n  padding: 0;\n  color: $carousel-control-color;\n  text-align: center;\n  background: none;\n  border: 0;\n  opacity: $carousel-control-opacity;\n  @include transition($carousel-control-transition);\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    color: $carousel-control-color;\n    text-decoration: none;\n    outline: 0;\n    opacity: $carousel-control-hover-opacity;\n  }\n}\n.carousel-control-prev {\n  left: 0;\n  background-image: if($enable-gradients, linear-gradient(90deg, rgba($black, .25), rgba($black, .001)), null);\n}\n.carousel-control-next {\n  right: 0;\n  background-image: if($enable-gradients, linear-gradient(270deg, rgba($black, .25), rgba($black, .001)), null);\n}\n\n// Icons for within\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: $carousel-control-icon-width;\n  height: $carousel-control-icon-width;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100% 100%;\n}\n\n/* rtl:options: {\n  "autoRename": true,\n  "stringMap":[ {\n    "name"    : "prev-next",\n    "search"  : "prev",\n    "replace" : "next"\n  } ]\n} */\n.carousel-control-prev-icon {\n  background-image: escape-svg($carousel-control-prev-icon-bg);\n}\n.carousel-control-next-icon {\n  background-image: escape-svg($carousel-control-next-icon-bg);\n}\n\n// Optional indicator pips/controls\n//\n// Add a container (such as a list) with the following class and add an item (ideally a focusable control,\n// like a button) with data-bs-target for each slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  padding: 0;\n  // Use the .carousel-control\'s width as margin so we don\'t overlay those\n  margin-right: $carousel-control-width;\n  margin-bottom: 1rem;\n  margin-left: $carousel-control-width;\n  list-style: none;\n\n  [data-bs-target] {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: $carousel-indicator-width;\n    height: $carousel-indicator-height;\n    padding: 0;\n    margin-right: $carousel-indicator-spacer;\n    margin-left: $carousel-indicator-spacer;\n    text-indent: -999px;\n    cursor: pointer;\n    background-color: $carousel-indicator-active-bg;\n    background-clip: padding-box;\n    border: 0;\n    // Use transparent borders to increase the hit area by 10px on top and bottom.\n    border-top: $carousel-indicator-hit-area-height solid transparent;\n    border-bottom: $carousel-indicator-hit-area-height solid transparent;\n    opacity: $carousel-indicator-opacity;\n    @include transition($carousel-indicator-transition);\n  }\n\n  .active {\n    opacity: $carousel-indicator-active-opacity;\n  }\n}\n\n\n// Optional captions\n//\n//\n\n.carousel-caption {\n  position: absolute;\n  right: (100% - $carousel-caption-width) * .5;\n  bottom: $carousel-caption-spacer;\n  left: (100% - $carousel-caption-width) * .5;\n  padding-top: $carousel-caption-padding-y;\n  padding-bottom: $carousel-caption-padding-y;\n  color: $carousel-caption-color;\n  text-align: center;\n}\n\n// Dark mode carousel\n\n.carousel-dark {\n  .carousel-control-prev-icon,\n  .carousel-control-next-icon {\n    filter: $carousel-dark-control-icon-filter;\n  }\n\n  .carousel-indicators [data-bs-target] {\n    background-color: $carousel-dark-indicator-active-bg;\n  }\n\n  .carousel-caption {\n    color: $carousel-dark-caption-color;\n  }\n}\n', '// scss-docs-start clearfix\n@mixin clearfix() {\n  &::after {\n    display: block;\n    clear: both;\n    content: "";\n  }\n}\n// scss-docs-end clearfix\n', '//\n// Rotating border\n//\n\n// scss-docs-start spinner-border-keyframes\n@keyframes spinner-border {\n  to { transform: rotate(360deg) #{"/* rtl:ignore */"}; }\n}\n// scss-docs-end spinner-border-keyframes\n\n.spinner-border {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: $spinner-vertical-align;\n  border: $spinner-border-width solid currentColor;\n  border-right-color: transparent;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  animation: $spinner-animation-speed linear infinite spinner-border;\n}\n\n.spinner-border-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n  border-width: $spinner-border-width-sm;\n}\n\n//\n// Growing circle\n//\n\n// scss-docs-start spinner-grow-keyframes\n@keyframes spinner-grow {\n  0% {\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: none;\n  }\n}\n// scss-docs-end spinner-grow-keyframes\n\n.spinner-grow {\n  display: inline-block;\n  width: $spinner-width;\n  height: $spinner-height;\n  vertical-align: $spinner-vertical-align;\n  background-color: currentColor;\n  // stylelint-disable-next-line property-disallowed-list\n  border-radius: 50%;\n  opacity: 0;\n  animation: $spinner-animation-speed linear infinite spinner-grow;\n}\n\n.spinner-grow-sm {\n  width: $spinner-width-sm;\n  height: $spinner-height-sm;\n}\n\n@if $enable-reduced-motion {\n  @media (prefers-reduced-motion: reduce) {\n    .spinner-border,\n    .spinner-grow {\n      animation-duration: $spinner-animation-speed * 2;\n    }\n  }\n}\n', ".offcanvas {\n  position: fixed;\n  bottom: 0;\n  z-index: $zindex-offcanvas;\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  color: $offcanvas-color;\n  visibility: hidden;\n  background-color: $offcanvas-bg-color;\n  background-clip: padding-box;\n  outline: 0;\n  @include box-shadow($offcanvas-box-shadow);\n  @include transition(transform $offcanvas-transition-duration ease-in-out);\n}\n\n.offcanvas-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: $offcanvas-padding-y $offcanvas-padding-x;\n\n  .btn-close {\n    padding: ($offcanvas-padding-y * .5) ($offcanvas-padding-x * .5);\n    margin-top: $offcanvas-padding-y * -.5;\n    margin-right: $offcanvas-padding-x * -.5;\n    margin-bottom: $offcanvas-padding-y * -.5;\n  }\n}\n\n.offcanvas-title {\n  margin-bottom: 0;\n  line-height: $offcanvas-title-line-height;\n}\n\n.offcanvas-body {\n  flex-grow: 1;\n  padding: $offcanvas-padding-y $offcanvas-padding-x;\n  overflow-y: auto;\n}\n\n.offcanvas-start {\n  top: 0;\n  left: 0;\n  width: $offcanvas-horizontal-width;\n  border-right: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateX(-100%);\n}\n\n.offcanvas-end {\n  top: 0;\n  right: 0;\n  width: $offcanvas-horizontal-width;\n  border-left: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateX(100%);\n}\n\n.offcanvas-top {\n  top: 0;\n  right: 0;\n  left: 0;\n  height: $offcanvas-vertical-height;\n  max-height: 100%;\n  border-bottom: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateY(-100%);\n}\n\n.offcanvas-bottom {\n  right: 0;\n  left: 0;\n  height: $offcanvas-vertical-height;\n  max-height: 100%;\n  border-top: $offcanvas-border-width solid $offcanvas-border-color;\n  transform: translateY(100%);\n}\n\n.offcanvas.show {\n  transform: none;\n}\n", "@each $color, $value in $theme-colors {\n  .link-#{$color} {\n    color: $value;\n\n    @if $link-shade-percentage != 0 {\n      &:hover,\n      &:focus {\n        color: if(color-contrast($value) == $color-contrast-light, shade-color($value, $link-shade-percentage), tint-color($value, $link-shade-percentage));\n      }\n    }\n  }\n}\n", '// Credit: Nicolas Gallagher and SUIT CSS.\n\n.ratio {\n  position: relative;\n  width: 100%;\n\n  &::before {\n    display: block;\n    padding-top: var(--#{$variable-prefix}aspect-ratio);\n    content: "";\n  }\n\n  > * {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n@each $key, $ratio in $aspect-ratios {\n  .ratio-#{$key} {\n    --#{$variable-prefix}aspect-ratio: #{$ratio};\n  }\n}\n', "// Shorthand\n\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-fixed;\n}\n\n// Responsive sticky top\n@each $breakpoint in map-keys($grid-breakpoints) {\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    .sticky#{$infix}-top {\n      position: sticky;\n      top: 0;\n      z-index: $zindex-sticky;\n    }\n  }\n}\n", "//\n// Visually hidden\n//\n\n.visually-hidden,\n.visually-hidden-focusable:not(:focus):not(:focus-within) {\n  @include visually-hidden();\n}\n", '// stylelint-disable declaration-no-important\n\n// Hide content visually while keeping it accessible to assistive technologies\n//\n// See: https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/\n// See: https://hugogiraudel.com/2016/10/13/css-hide-and-seek/\n\n@mixin visually-hidden() {\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  padding: 0 !important;\n  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686\n  overflow: hidden !important;\n  clip: rect(0, 0, 0, 0) !important;\n  white-space: nowrap !important;\n  border: 0 !important;\n}\n\n// Use to only display content when it\'s focused, or one of its child elements is focused\n// (i.e. when focus is within the element/container that the class was applied to)\n//\n// Useful for "Skip to main content" links; see https://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n\n@mixin visually-hidden-focusable() {\n  &:not(:focus):not(:focus-within) {\n    @include visually-hidden();\n  }\n}\n', '//\n// Stretched link\n//\n\n.stretched-link {\n  &::#{$stretched-link-pseudo-element} {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: $stretched-link-z-index;\n    content: "";\n  }\n}\n', "// Text truncate\n// Requires inline-block or block for proper styling\n\n@mixin text-truncate() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n", '// Utility generator\n// Used to generate utilities & print utilities\n@mixin generate-utility($utility, $infix, $is-rfs-media-query: false) {\n  $values: map-get($utility, values);\n\n  // If the values are a list or string, convert it into a map\n  @if type-of($values) == "string" or type-of(nth($values, 1)) != "list" {\n    $values: zip($values, $values);\n  }\n\n  @each $key, $value in $values {\n    $properties: map-get($utility, property);\n\n    // Multiple properties are possible, for example with vertical or horizontal margins or paddings\n    @if type-of($properties) == "string" {\n      $properties: append((), $properties);\n    }\n\n    // Use custom class if present\n    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));\n    $property-class: if($property-class == null, "", $property-class);\n\n    // State params to generate pseudo-classes\n    $state: if(map-has-key($utility, state), map-get($utility, state), ());\n\n    $infix: if($property-class == "" and str-slice($infix, 1, 1) == "-", str-slice($infix, 2), $infix);\n\n    // Don\'t prefix if value key is null (eg. with shadow class)\n    $property-class-modifier: if($key, if($property-class == "" and $infix == "", "", "-") + $key, "");\n\n    @if map-get($utility, rfs) {\n      // Inside the media query\n      @if $is-rfs-media-query {\n        $val: rfs-value($value);\n\n        // Do not render anything if fluid and non fluid values are the same\n        $value: if($val == rfs-fluid-value($value), null, $val);\n      }\n      @else {\n        $value: rfs-fluid-value($value);\n      }\n    }\n\n    $is-rtl: map-get($utility, rtl);\n\n    @if $value != null {\n      @if $is-rtl == false {\n        /* rtl:begin:remove */\n      }\n      .#{$property-class + $infix + $property-class-modifier} {\n        @each $property in $properties {\n          #{$property}: $value if($enable-important-utilities, !important, null);\n        }\n      }\n\n      @each $pseudo in $state {\n        .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {\n          @each $property in $properties {\n            #{$property}: $value if($enable-important-utilities, !important, null);\n          }\n        }\n      }\n      @if $is-rtl == false {\n        /* rtl:end:remove */\n      }\n    }\n  }\n}\n', '// Loop over each breakpoint\n@each $breakpoint in map-keys($grid-breakpoints) {\n\n  // Generate media query if needed\n  @include media-breakpoint-up($breakpoint) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    // Loop over each utility property\n    @each $key, $utility in $utilities {\n      // The utility can be disabled with `false`, thus check if the utility is a map first\n      // Only proceed if responsive media queries are enabled or if it\'s the base media query\n      @if type-of($utility) == "map" and (map-get($utility, responsive) or $infix == "") {\n        @include generate-utility($utility, $infix);\n      }\n    }\n  }\n}\n\n// RFS rescaling\n@media (min-width: $rfs-mq-value) {\n  @each $breakpoint in map-keys($grid-breakpoints) {\n    $infix: breakpoint-infix($breakpoint, $grid-breakpoints);\n\n    @if (map-get($grid-breakpoints, $breakpoint) < $rfs-breakpoint) {\n      // Loop over each utility property\n      @each $key, $utility in $utilities {\n        // The utility can be disabled with `false`, thus check if the utility is a map first\n        // Only proceed if responsive media queries are enabled or if it\'s the base media query\n        @if type-of($utility) == "map" and map-get($utility, rfs) and (map-get($utility, responsive) or $infix == "") {\n          @include generate-utility($utility, $infix, true);\n        }\n      }\n    }\n  }\n}\n\n\n// Print utilities\n@media print {\n  @each $key, $utility in $utilities {\n    // The utility can be disabled with `false`, thus check if the utility is a map first\n    // Then check if the utility needs print styles\n    @if type-of($utility) == "map" and map-get($utility, print) == true {\n      @include generate-utility($utility, "-print");\n    }\n  }\n}\n', 'body {\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: Cardo, "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  color: var(--text-color);\r\n  background-color: var(--background-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.content-wrapper {\r\n  flex: 1 0 auto;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-transform: uppercase;\r\n  font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 1px;\r\n}\r\n\r\na {\r\n  color: var(--secondary-color);\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  -moz-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\na:hover,\r\na:focus {\r\n  text-decoration: none;\r\n  color: var(--secondary-color-darkest)\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@-moz-keyframes pulse {\r\n  0% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n\r\n  50% {\r\n    -moz-transform: scale(1.2);\r\n    transform: scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    -moz-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.content-section {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n.content-section h2 small {\r\n  white-space: nowrap;\r\n}\r\n\r\n.map {\r\n  width: 100%;\r\n  height: 400px;\r\n  margin-bottom: 50px;\r\n}\r\n\r\n@media (min-width: 767px) {\r\n  .map {\r\n    height: 600px;\r\n  }\r\n}\r\n\r\n.btn {\r\n  text-transform: uppercase;\r\n  font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;\r\n  font-weight: 400;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  -moz-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.btn-default {\r\n  border: 1px solid var(--secondary-color);\r\n  color: var(--secondary-color);\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus {\r\n  outline: 0;\r\n  color: var(--secondary-text-color);\r\n  background-color: var(--secondary-color);\r\n}\r\n\r\n.btn-primary {\r\n  color: var(--primary-text-color);\r\n  background-color: var(--primary-color);\r\n  border-color: var(--primary-color-darker);\r\n\r\n  &:hover {\r\n    color: var(--primary-text-color-darkest);\r\n    background-color: var(--primary-color-darkest);\r\n    border-color: var(--primary-color-darker);\r\n  }\r\n}\r\n\r\ndd {\r\n  white-space: pre-line;\r\n}\r\n\r\n.thumbnail.thumbnail-hotel {\r\n  padding: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.thumbnail.thumbnail-hotel .caption {\r\n  padding-top: 35px;\r\n}\r\n\r\n.thumbnail.thumbnail-hotel .caption h4 {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.thumbnail.thumbnail-portrait .caption h4 {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.thumbnail.thumbnail-portrait {\r\n  padding: 0;\r\n  border: none;\r\n  margin-bottom: 0;\r\n  img {\r\n    height: 500px;\r\n    object-fit: cover;\r\n  }\r\n}\r\n\r\n.billboard {\r\n  display: table;\r\n  width: 100%;\r\n  height: 300px;\r\n  text-align: center;\r\n  color: #fff;\r\n  text-shadow: black 2px 2px 10px;\r\n  background-color: #000000;\r\n  background-repeat: no-repeat;\r\n  background-position: top center;\r\n  -webkit-background-size: cover;\r\n  -moz-background-size: cover;\r\n  background-size: cover;\r\n  -o-background-size: cover;\r\n  position: relative;\r\n}\r\n\r\n.billboard-header {\r\n  /* Height of nav + 2px bottom border*/\r\n  margin-top: 52px;\r\n  height: 175px;\r\n}\r\n\r\n.billboard-text {\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -0.5em;\r\n  height: 1em;\r\n  text-align: center;\r\n  width: 100%;\r\n  letter-spacing: 0.1em;\r\n  font-size: 40px;\r\n}\r\n\r\n@media (min-width: 767px) {\r\n  .billboard {\r\n    height: 400px;\r\n  }\r\n\r\n  .billboard-header {\r\n    height: 300px;\r\n  }\r\n\r\n  .billboard-text {\r\n    font-size: 80px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  /*\r\n    Only allow background-attachment: fixed for desktop-ish sizes\r\n    https://twitter.com/paul_irish/status/306818591196602368\r\n  */\r\n  .billboard {\r\n    background-attachment: fixed;\r\n  }\r\n  .billboard-header {\r\n    background-attachment: scroll;\r\n  }\r\n}\r\n\r\n@media (min-width: 767px) {\r\n  .billboard-wall {\r\n    background-position: center -170px;\r\n  }\r\n\r\n  .billboard-bridge-walk {\r\n    background-position: center -160px;\r\n  }\r\n\r\n  .billboard-stairs {\r\n    background-position: center -185px;\r\n  }\r\n\r\n  .billboard-ramp-walk {\r\n    background-position: center -190px;\r\n  }\r\n\r\n  .floating-info {\r\n    position: fixed;\r\n    bottom: 40px;\r\n    right: 40px;\r\n  }\r\n\r\n  .floating-button {\r\n    display: block;\r\n    background: white;\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    color: #aaa;\r\n    font-family: Raleway;\r\n    box-shadow: #777 1px 1px 4px;\r\n    opacity: 0.3;\r\n  }\r\n\r\n  .floating-button:hover {\r\n    opacity: 1;\r\n  }\r\n\r\n  .navbar-custom.top-nav-collapse .modal-link.notify a {\r\n    color: #8d5f9e;\r\n  }\r\n\r\n  .modal-link .modal-link--icon {\r\n    display: none;\r\n  }\r\n\r\n  .modal-link.notify .modal-link--icon {\r\n    display: block;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 2px;\r\n  }\r\n}\r\n\r\n.rsvp-form {\r\n  .input-group {\r\n    padding: 10px;\r\n  }\r\n\r\n  .help-text {\r\n    opacity: .8;\r\n  }\r\n}\r\n\r\n.portraits-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n\r\n  .portrait {\r\n    padding: 20px;\r\n    flex: 1 1 0px;\r\n  }\r\n}\r\n\r\n.polaroid {\r\n    border: 1px solid var(--text-color-lighter);\r\n    border-radius: 0.25rem;\r\n    padding: 20px;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    margin: 10px;\r\n    background-color: var(--background-color-lighter);\r\n\r\n    .img-thumbnail {\r\n      border: none;\r\n      background-color: transparent;\r\n      object-fit: cover;\r\n      flex-grow: 1;\r\n    }\r\n  \r\n    img {\r\n        border-radius: 0.9rem;\r\n        max-height: 66vh;\r\n    }\r\n\r\n    .caption {\r\n      h4, h5 {\r\n        font-size: 1.2em;\r\n        margin-bottom: 0;\r\n      }\r\n    }\r\n}\r\n\r\n.add-to-calendar-checkbox {\r\n  border: 1px solid #bfb9b9;\r\n  border-radius: 3px;\r\n  padding: 5px;\r\n  box-shadow: #e4e4e4 2px 2px 2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.wrap-whitespace {\r\n  white-space: normal !important;\r\n}\r\n\r\n.page-content {\r\n  text-align: left;\r\n}\r\n\r\n.live-stream-container {\r\n  width: 100%;\r\n  height: 44vh;\r\n}\r\n', ".under-construction-container {\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.under-construction-content {\n    padding: 6rem;\n    background: #bfbfbf80;\n    border-radius: 11px;\n    background: radial-gradient(ellipse, rgba(255, 239, 239, .91) 0%, rgba(255, 255, 255, .63) 42%, rgba(0, 0, 0, .0) 100%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    h1 {\n        font-size: 5rem;\n    }\n}", '.navbar-custom {\n  margin-bottom: 0;\n  border-bottom: 1px solid var(--secondary-color);\n  text-transform: uppercase;\n  font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;\n  background-color: var(--primary-color);\n}\n\n.navbar-custom .navbar-brand {\n  font-weight: 700;\n}\n\n.navbar-custom .navbar-brand:focus {\n  outline: 0;\n}\n\n.navbar-custom .navbar-brand .navbar-toggler {\n  padding: 4px 6px;\n  font-size: 16px;\n  color: #fff;\n}\n\n.navbar-custom .navbar-brand .navbar-toggler:focus,\n.navbar-custom .navbar-brand .navbar-toggler:active {\n  outline: 0;\n}\n\n.navbar-custom .navbar-toggler {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  color: #fff;\n}\n\n.navbar-custom.top-nav-collapse .navbar-toggler {\n  color: var(--primary-text-color);\n}\n\n.navbar-custom a {\n  color: #fff;\n  /*text-shadow: 0px 0px 1px #B38C00;*/\n}\n\n.navbar-custom ul {\n  font-size: 14px;\n}\n\n.navbar-custom.top-nav-collapse .nav li.active,\n.navbar-custom.is-expanded .nav li.active {\n  outline: none;\n  background-color: var(--primary-color);\n}\n\n.navbar-custom .nav li a {\n  transition: background 0.5s ease-in-out;\n  font-weight: 600;\n}\n\n.navbar-custom .nav li a:hover,\n.navbar-custom .nav li a:focus,\n.navbar-custom .nav li a.active {\n  outline: 0;\n  color: #fff;\n  opacity: .6;\n}\n\n.navbar-custom.top-nav-collapse .nav li a:hover,\n.navbar-custom.top-nav-collapse .nav li a:focus,\n.navbar-custom.top-nav-collapse .nav li a.active {\n  outline: 0;\n  color: var(--primary-text-color);\n}\n\n.navbar-custom {\n  border-bottom: 3px solid var(--accent-color);\n  box-shadow: #888 0px 1px 10px;\n}\n\n.navbar {\n  border-bottom: 0;\n  box-shadow: none;\n  letter-spacing: 1px;\n  background: 0 0;\n  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;\n}\n\n.navbar-custom.is-expanded,\n.top-nav-collapse {\n  padding: 0;\n  background-color: var(--primary-color);\n}\n\n.navbar-custom.is-expanded a,\n.navbar-custom.top-nav-collapse a,\n.navbar-custom.is-expanded .navbar-toggler {\n  color: var(--primary-text-color);\n}\n\n.navbar a {\n  color: #fff;\n}\n.navbar-custom.top-nav-collapse {\n  border-bottom: 3px solid var(--secondary-color);\n  box-shadow: #888 0px 1px 10px;\n}\n', ".intro {\n  display: table;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  color: #fff;\n  text-shadow: black 2px 2px 10px;\n  background: var(--intro-background);\n  background-color: #000000;\n  background-position: var(--intro-background-position);\n  background-size: cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n}\n\n@media (min-width: 992px) {\n  /*\n    Only allow background-attachment: fixed for desktop-ish sizes\n    https://twitter.com/paul_irish/status/306818591196602368\n  */\n  .intro {\n    background-attachment: fixed;\n  }\n}\n\n.intro .intro-body {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.brand-heading {\n  font-size: 40px;\n  letter-spacing: 0.025em;\n}\n\n.intro-text {\n  font-size: 18px;\n}\n\n@media (min-width: 767px) {\n  .intro {\n    padding: 0;\n  }\n\n  .brand-heading {\n    font-size: 100px;\n  }\n\n  .intro-text {\n    font-size: 25px;\n  }\n}", ".faq-question {\n    margin-bottom: .5rem;\n}\n\n.faq-answer {\n    margin-bottom: 2rem;\n}", ".date-subheader {\n  font-size: .6em;\n}", ".people-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(100px, 1fr));\n  grid-template-rows: auto;\n  justify-content: space-evenly;\n\n  @media (max-width: 992px) {\n    grid-template-columns: repeat(1, 100%);\n  }\n}\n", "footer {\n  padding: 50px 0;\n}\n\nfooter p {\n  margin: 0;\n}\n\n.footer-wrapper {\n  flex-shrink: 0;\n}\n\nfooter.site-footer {\n  padding: 5px 10px;\n  background-color: var(--secondary-color);\n  color: var(--secondary-color-text);\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: right;\n  p {\n    font-size: clamp(.65rem, 2.5vw, .8rem);\n  }\n  a {\n    color: var(--secondary-color-text);\n  }\n}\n", ".banner-container {\n    position: fixed;\n    top: 45px;\n    left: 0;\n    right: 0;\n    margin: 0 20px;\n    display: flex;\n    flex-direction: column;\n    z-index: 999;\n\n    .banner {\n        display: flex;\n        justify-content: space-between;\n        flex-direction: row-reverse;\n        align-items: stretch;\n        background-color: var(--accent-color);\n        margin-top: 20px;\n        color: var(--accent-text-color);\n        border-radius: 10px;\n        min-height: 80px;\n\n        a {\n            color: var(--accent-text-color);\n            font-weight: bolder;\n        }\n\n        .close-button {\n            top: 0;\n            right: 0;\n            padding: 10px;\n\n            button.btn-close {\n                color: var(--accent-text-color);\n            }\n        }\n\n        &.hidden {\n            transition: all 1s;\n            opacity: 0;\n        }\n\n        &.closed {\n            display: none;\n        }\n\n        .banner-content {\n            margin: 10px 0 10px 20px;\n            display: flex;\n            align-items: center;\n\n            p {\n                margin: 0;\n            }\n        }\n    }\n}"],
                sourceRoot: ""
            }]);
            const B = r
        }
        ,
        645: n=>{
            n.exports = function(e) {
                var s = [];
                return s.toString = function() {
                    return this.map(function(n) {
                        var t = e(n);
                        return n[2] ? "@media ".concat(n[2], " {").concat(t, "}") : t
                    }).join("")
                }
                ,
                s.i = function(n, t, e) {
                    "string" == typeof n && (n = [[null, n, ""]]);
                    var o = {};
                    if (e)
                        for (var r = 0; r < this.length; r++) {
                            var i = this[r][0];
                            null != i && (o[i] = !0)
                        }
                    for (var a = 0; a < n.length; a++) {
                        var l = [].concat(n[a]);
                        e && o[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] = t),
                        s.push(l))
                    }
                }
                ,
                s
            }
        }
        ,
        15: n=>{
            function r(n, t) {
                return function(n) {
                    if (Array.isArray(n))
                        return n
                }(n) || function(n, t) {
                    var e = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                    if (null != e) {
                        var o, r, i = [], a = !0, l = !1;
                        try {
                            for (e = e.call(n); !(a = (o = e.next()).done) && (i.push(o.value),
                            !t || i.length !== t); a = !0)
                                ;
                        } catch (n) {
                            l = !0,
                            r = n
                        } finally {
                            try {
                                a || null == e.return || e.return()
                            } finally {
                                if (l)
                                    throw r
                            }
                        }
                        return i
                    }
                }(n, t) || function(n, t) {
                    if (n) {
                        if ("string" == typeof n)
                            return o(n, t);
                        var e = Object.prototype.toString.call(n).slice(8, -1);
                        return "Map" === (e = "Object" === e && n.constructor ? n.constructor.name : e) || "Set" === e ? Array.from(n) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? o(n, t) : void 0
                    }
                }(n, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function o(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, o = new Array(t); e < t; e++)
                    o[e] = n[e];
                return o
            }
            n.exports = function(n) {
                var t = r(n, 4)
                  , e = t[1]
                  , o = t[3];
                if (!o)
                    return e;
                if ("function" != typeof btoa)
                    return [e].join("\n");
                n = btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                t = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),
                n = "/*# ".concat(t, " */"),
                t = o.sources.map(function(n) {
                    return "/*# sourceURL=".concat(o.sourceRoot || "").concat(n, " */")
                });
                return [e].concat(t).concat([n]).join("\n")
            }
        }
        ,
        667: n=>{
            n.exports = function(n, t) {
                return t = t || {},
                n && (n = String(n.__esModule ? n.default : n),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                t.hash && (n += t.hash),
                /["'() \t\n]|(%20)/.test(n) || t.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n)
            }
        }
        ,
        379: n=>{
            var d = [];
            function c(n) {
                for (var t = -1, e = 0; e < d.length; e++)
                    if (d[e].identifier === n) {
                        t = e;
                        break
                    }
                return t
            }
            function l(n, t) {
                for (var e = {}, o = [], r = 0; r < n.length; r++) {
                    var i = n[r]
                      , a = t.base ? i[0] + t.base : i[0]
                      , l = e[a] || 0
                      , s = "".concat(a, " ").concat(l);
                    e[a] = l + 1;
                    l = c(s),
                    i = {
                        css: i[1],
                        media: i[2],
                        sourceMap: i[3]
                    };
                    -1 !== l ? (d[l].references++,
                    d[l].updater(i)) : d.push({
                        identifier: s,
                        updater: function(t, n) {
                            var e = n.domAPI(n);
                            return e.update(t),
                            function(n) {
                                n ? n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap || e.update(t = n) : e.remove()
                            }
                        }(i, t),
                        references: 1
                    }),
                    o.push(s)
                }
                return o
            }
            n.exports = function(n, i) {
                var a = l(n = n || [], i = i || {});
                return function(n) {
                    n = n || [];
                    for (var t = 0; t < a.length; t++) {
                        var e = c(a[t]);
                        d[e].references--
                    }
                    for (var n = l(n, i), o = 0; o < a.length; o++) {
                        var r = c(a[o]);
                        0 === d[r].references && (d[r].updater(),
                        d.splice(r, 1))
                    }
                    a = n
                }
            }
        }
        ,
        569: n=>{
            var e = {};
            n.exports = function(n, t) {
                if (!(n = function(n) {
                    if (void 0 === e[n]) {
                        var t = document.querySelector(n);
                        if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
                            try {
                                t = t.contentDocument.head
                            } catch (n) {
                                t = null
                            }
                        e[n] = t
                    }
                    return e[n]
                }(n)))
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                n.appendChild(t)
            }
        }
        ,
        216: n=>{
            n.exports = function(n) {
                var t = document.createElement("style");
                return n.setAttributes(t, n.attributes),
                n.insert(t),
                t
            }
        }
        ,
        565: (n,t,e)=>{
            n.exports = function(n) {
                var t = e.nc;
                t && n.setAttribute("nonce", t)
            }
        }
        ,
        795: n=>{
            n.exports = function(i) {
                var a = i.insertStyleElement(i);
                return {
                    update: function(n) {
                        var t, e, o, r;
                        t = a,
                        e = i,
                        r = (o = n).css,
                        n = o.media,
                        o = o.sourceMap,
                        n ? t.setAttribute("media", n) : t.removeAttribute("media"),
                        o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")),
                        e.styleTagTransform(r, t)
                    },
                    remove: function() {
                        var n;
                        null !== (n = a).parentNode && n.parentNode.removeChild(n)
                    }
                }
            }
        }
        ,
        589: n=>{
            n.exports = function(n, t) {
                if (t.styleSheet)
                    t.styleSheet.cssText = n;
                else {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n))
                }
            }
        }
        ,
        585: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"
        }
        ,
        902: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"
        }
        ,
        646: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"
        }
        ,
        285: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280,0,0,0.25%29%27/%3e%3c/svg%3e"
        }
        ,
        774: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"
        }
        ,
        483: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e"
        }
        ,
        636: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"
        }
        ,
        931: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"
        }
        ,
        719: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"
        }
        ,
        407: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"
        }
        ,
        872: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e"
        }
        ,
        161: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"
        }
        ,
        98: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e"
        }
        ,
        801: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280,0,0,0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"
        }
        ,
        629: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255,255,255,0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"
        }
        ,
        615: n=>{
            n.exports = "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"
        }
    }
      , o = {};
    function d(n) {
        var t = o[n];
        if (void 0 !== t)
            return t.exports;
        t = o[n] = {
            id: n,
            exports: {}
        };
        return e[n](t, t.exports, d),
        t.exports
    }
    d.m = e,
    d.n = n=>{
        var t = n && n.__esModule ? ()=>n.default : ()=>n;
        return d.d(t, {
            a: t
        }),
        t
    }
    ,
    d.d = (n,t)=>{
        for (var e in t)
            d.o(t, e) && !d.o(n, e) && Object.defineProperty(n, e, {
                enumerable: !0,
                get: t[e]
            })
    }
    ,
    d.o = (n,t)=>Object.prototype.hasOwnProperty.call(n, t),
    d.r = n=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }
    ,
    d.b = document.baseURI || self.location.href;
    (()=>{
        var n = d(379)
          , t = d.n(n)
          , e = d(795)
          , o = d.n(e)
          , r = d(569)
          , i = d.n(r)
          , a = d(565)
          , l = d.n(a)
          , n = d(216)
          , e = d.n(n)
          , r = d(589)
          , a = d.n(r)
          , n = d(788)
          , r = {};
        r.styleTagTransform = a(),
        r.setAttributes = l(),
        r.insert = i().bind(null, "head"),
        r.domAPI = o(),
        r.insertStyleElement = e();
        t()(n.Z, r),
        n.Z && n.Z.locals && n.Z.locals,
        d(169);
        var s = d(21);
        d(855),
        d(894),
        window.createAddToCalendarButton = function(e, o) {
            (0,
            s.o)(()=>{
                var n = createCalendar({
                    options: {
                        title: "",
                        class: ""
                    },
                    data: e
                });
                const t = document.getElementById(o);
                t.append(n)
            }
            )
        }
    }
    )()
}
)();
