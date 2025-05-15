import Dt from "react";
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ye(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function bi(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function s() {
      return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(s) {
    var n = Object.getOwnPropertyDescriptor(e, s);
    Object.defineProperty(i, s, n.get ? n : {
      enumerable: !0,
      get: function() {
        return e[s];
      }
    });
  }), i;
}
var kt = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jt;
function An() {
  if (Jt) return Qe;
  Jt = 1;
  var e = Dt, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, r = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(f, l, _) {
    var c, m = {}, x = null, T = null;
    _ !== void 0 && (x = "" + _), l.key !== void 0 && (x = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (c in l) s.call(l, c) && !r.hasOwnProperty(c) && (m[c] = l[c]);
    if (f && f.defaultProps) for (c in l = f.defaultProps, l) m[c] === void 0 && (m[c] = l[c]);
    return { $$typeof: t, type: f, key: x, ref: T, props: m, _owner: n.current };
  }
  return Qe.Fragment = i, Qe.jsx = u, Qe.jsxs = u, Qe;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qt;
function zn() {
  return Qt || (Qt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Dt, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), E = Symbol.iterator, z = "@@iterator";
    function o(A) {
      if (A === null || typeof A != "object")
        return null;
      var j = E && A[E] || A[z];
      return typeof j == "function" ? j : null;
    }
    var a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(A) {
      {
        for (var j = arguments.length, K = new Array(j > 1 ? j - 1 : 0), Q = 1; Q < j; Q++)
          K[Q - 1] = arguments[Q];
        h("error", A, K);
      }
    }
    function h(A, j, K) {
      {
        var Q = a.ReactDebugCurrentFrame, ce = Q.getStackAddendum();
        ce !== "" && (j += "%s", K = K.concat([ce]));
        var ue = K.map(function(oe) {
          return String(oe);
        });
        ue.unshift("Warning: " + j), Function.prototype.apply.call(console[A], console, ue);
      }
    }
    var g = !1, b = !1, p = !1, v = !1, C = !1, y;
    y = Symbol.for("react.module.reference");
    function w(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === s || A === r || C || A === n || A === _ || A === c || v || A === T || g || b || p || typeof A == "object" && A !== null && (A.$$typeof === x || A.$$typeof === m || A.$$typeof === u || A.$$typeof === f || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === y || A.getModuleId !== void 0));
    }
    function M(A, j, K) {
      var Q = A.displayName;
      if (Q)
        return Q;
      var ce = j.displayName || j.name || "";
      return ce !== "" ? K + "(" + ce + ")" : K;
    }
    function S(A) {
      return A.displayName || "Context";
    }
    function k(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case r:
          return "Profiler";
        case n:
          return "StrictMode";
        case _:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case f:
            var j = A;
            return S(j) + ".Consumer";
          case u:
            var K = A;
            return S(K._context) + ".Provider";
          case l:
            return M(A, A.render, "ForwardRef");
          case m:
            var Q = A.displayName || null;
            return Q !== null ? Q : k(A.type) || "Memo";
          case x: {
            var ce = A, ue = ce._payload, oe = ce._init;
            try {
              return k(oe(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, D = 0, U, I, H, P, B, F, N;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function L() {
      {
        if (D === 0) {
          U = console.log, I = console.info, H = console.warn, P = console.error, B = console.group, F = console.groupCollapsed, N = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        D++;
      }
    }
    function O() {
      {
        if (D--, D === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, A, {
              value: U
            }),
            info: R({}, A, {
              value: I
            }),
            warn: R({}, A, {
              value: H
            }),
            error: R({}, A, {
              value: P
            }),
            group: R({}, A, {
              value: B
            }),
            groupCollapsed: R({}, A, {
              value: F
            }),
            groupEnd: R({}, A, {
              value: N
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = a.ReactCurrentDispatcher, Z;
    function X(A, j, K) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (ce) {
            var Q = ce.stack.trim().match(/\n( *(at )?)/);
            Z = Q && Q[1] || "";
          }
        return `
` + Z + A;
      }
    }
    var q = !1, $;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      $ = new G();
    }
    function ee(A, j) {
      if (!A || q)
        return "";
      {
        var K = $.get(A);
        if (K !== void 0)
          return K;
      }
      var Q;
      q = !0;
      var ce = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = Y.current, Y.current = null, L();
      try {
        if (j) {
          var oe = function() {
            throw Error();
          };
          if (Object.defineProperty(oe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(oe, []);
            } catch (ke) {
              Q = ke;
            }
            Reflect.construct(A, [], oe);
          } else {
            try {
              oe.call();
            } catch (ke) {
              Q = ke;
            }
            A.call(oe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ke) {
            Q = ke;
          }
          A();
        }
      } catch (ke) {
        if (ke && Q && typeof ke.stack == "string") {
          for (var se = ke.stack.split(`
`), Ee = Q.stack.split(`
`), _e = se.length - 1, be = Ee.length - 1; _e >= 1 && be >= 0 && se[_e] !== Ee[be]; )
            be--;
          for (; _e >= 1 && be >= 0; _e--, be--)
            if (se[_e] !== Ee[be]) {
              if (_e !== 1 || be !== 1)
                do
                  if (_e--, be--, be < 0 || se[_e] !== Ee[be]) {
                    var Be = `
` + se[_e].replace(" at new ", " at ");
                    return A.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", A.displayName)), typeof A == "function" && $.set(A, Be), Be;
                  }
                while (_e >= 1 && be >= 0);
              break;
            }
        }
      } finally {
        q = !1, Y.current = ue, O(), Error.prepareStackTrace = ce;
      }
      var $e = A ? A.displayName || A.name : "", Fe = $e ? X($e) : "";
      return typeof A == "function" && $.set(A, Fe), Fe;
    }
    function ie(A, j, K) {
      return ee(A, !1);
    }
    function ne(A) {
      var j = A.prototype;
      return !!(j && j.isReactComponent);
    }
    function le(A, j, K) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return ee(A, ne(A));
      if (typeof A == "string")
        return X(A);
      switch (A) {
        case _:
          return X("Suspense");
        case c:
          return X("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case l:
            return ie(A.render);
          case m:
            return le(A.type, j, K);
          case x: {
            var Q = A, ce = Q._payload, ue = Q._init;
            try {
              return le(ue(ce), j, K);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Se = {}, ae = a.ReactDebugCurrentFrame;
    function me(A) {
      if (A) {
        var j = A._owner, K = le(A.type, A._source, j ? j.type : null);
        ae.setExtraStackFrame(K);
      } else
        ae.setExtraStackFrame(null);
    }
    function de(A, j, K, Q, ce) {
      {
        var ue = Function.call.bind(fe);
        for (var oe in A)
          if (ue(A, oe)) {
            var se = void 0;
            try {
              if (typeof A[oe] != "function") {
                var Ee = Error((Q || "React class") + ": " + K + " type `" + oe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[oe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              se = A[oe](j, oe, Q, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_e) {
              se = _e;
            }
            se && !(se instanceof Error) && (me(ce), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", K, oe, typeof se), me(null)), se instanceof Error && !(se.message in Se) && (Se[se.message] = !0, me(ce), d("Failed %s type: %s", K, se.message), me(null));
          }
      }
    }
    var He = Array.isArray;
    function ye(A) {
      return He(A);
    }
    function Ae(A) {
      {
        var j = typeof Symbol == "function" && Symbol.toStringTag, K = j && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return K;
      }
    }
    function xe(A) {
      try {
        return re(A), !1;
      } catch {
        return !0;
      }
    }
    function re(A) {
      return "" + A;
    }
    function Ge(A) {
      if (xe(A))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(A)), re(A);
    }
    var Me = a.ReactCurrentOwner, Te = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, Ce;
    function ve(A) {
      if (fe.call(A, "ref")) {
        var j = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function We(A) {
      if (fe.call(A, "key")) {
        var j = Object.getOwnPropertyDescriptor(A, "key").get;
        if (j && j.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Ze(A, j) {
      typeof A.ref == "string" && Me.current;
    }
    function Oe(A, j) {
      {
        var K = function() {
          ge || (ge = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        K.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: K,
          configurable: !0
        });
      }
    }
    function Je(A, j) {
      {
        var K = function() {
          Ce || (Ce = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", j));
        };
        K.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: K,
          configurable: !0
        });
      }
    }
    var yn = function(A, j, K, Q, ce, ue, oe) {
      var se = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: A,
        key: j,
        ref: K,
        props: oe,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return se._store = {}, Object.defineProperty(se._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(se, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(se, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.freeze && (Object.freeze(se.props), Object.freeze(se)), se;
    };
    function Cn(A, j, K, Q, ce) {
      {
        var ue, oe = {}, se = null, Ee = null;
        K !== void 0 && (Ge(K), se = "" + K), We(j) && (Ge(j.key), se = "" + j.key), ve(j) && (Ee = j.ref, Ze(j, ce));
        for (ue in j)
          fe.call(j, ue) && !Te.hasOwnProperty(ue) && (oe[ue] = j[ue]);
        if (A && A.defaultProps) {
          var _e = A.defaultProps;
          for (ue in _e)
            oe[ue] === void 0 && (oe[ue] = _e[ue]);
        }
        if (se || Ee) {
          var be = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          se && Oe(oe, be), Ee && Je(oe, be);
        }
        return yn(A, se, Ee, ce, Q, Me.current, oe);
      }
    }
    var yt = a.ReactCurrentOwner, qt = a.ReactDebugCurrentFrame;
    function qe(A) {
      if (A) {
        var j = A._owner, K = le(A.type, A._source, j ? j.type : null);
        qt.setExtraStackFrame(K);
      } else
        qt.setExtraStackFrame(null);
    }
    var Ct;
    Ct = !1;
    function wt(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function $t() {
      {
        if (yt.current) {
          var A = k(yt.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function wn(A) {
      return "";
    }
    var jt = {};
    function xn(A) {
      {
        var j = $t();
        if (!j) {
          var K = typeof A == "string" ? A : A.displayName || A.name;
          K && (j = `

Check the top-level render call using <` + K + ">.");
        }
        return j;
      }
    }
    function Yt(A, j) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var K = xn(j);
        if (jt[K])
          return;
        jt[K] = !0;
        var Q = "";
        A && A._owner && A._owner !== yt.current && (Q = " It was passed a child from " + k(A._owner.type) + "."), qe(A), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, Q), qe(null);
      }
    }
    function Xt(A, j) {
      {
        if (typeof A != "object")
          return;
        if (ye(A))
          for (var K = 0; K < A.length; K++) {
            var Q = A[K];
            wt(Q) && Yt(Q, j);
          }
        else if (wt(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var ce = o(A);
          if (typeof ce == "function" && ce !== A.entries)
            for (var ue = ce.call(A), oe; !(oe = ue.next()).done; )
              wt(oe.value) && Yt(oe.value, j);
        }
      }
    }
    function En(A) {
      {
        var j = A.type;
        if (j == null || typeof j == "string")
          return;
        var K;
        if (typeof j == "function")
          K = j.propTypes;
        else if (typeof j == "object" && (j.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        j.$$typeof === m))
          K = j.propTypes;
        else
          return;
        if (K) {
          var Q = k(j);
          de(K, A.props, "prop", Q, A);
        } else if (j.PropTypes !== void 0 && !Ct) {
          Ct = !0;
          var ce = k(j);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ce || "Unknown");
        }
        typeof j.getDefaultProps == "function" && !j.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sn(A) {
      {
        for (var j = Object.keys(A.props), K = 0; K < j.length; K++) {
          var Q = j[K];
          if (Q !== "children" && Q !== "key") {
            qe(A), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), qe(null);
            break;
          }
        }
        A.ref !== null && (qe(A), d("Invalid attribute `ref` supplied to `React.Fragment`."), qe(null));
      }
    }
    var Kt = {};
    function Gt(A, j, K, Q, ce, ue) {
      {
        var oe = w(A);
        if (!oe) {
          var se = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (se += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = wn();
          Ee ? se += Ee : se += $t();
          var _e;
          A === null ? _e = "null" : ye(A) ? _e = "array" : A !== void 0 && A.$$typeof === t ? (_e = "<" + (k(A.type) || "Unknown") + " />", se = " Did you accidentally export a JSX literal instead of a component?") : _e = typeof A, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _e, se);
        }
        var be = Cn(A, j, K, ce, ue);
        if (be == null)
          return be;
        if (oe) {
          var Be = j.children;
          if (Be !== void 0)
            if (Q)
              if (ye(Be)) {
                for (var $e = 0; $e < Be.length; $e++)
                  Xt(Be[$e], A);
                Object.freeze && Object.freeze(Be);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xt(Be, A);
        }
        if (fe.call(j, "key")) {
          var Fe = k(A), ke = Object.keys(j).filter(function(Rn) {
            return Rn !== "key";
          }), xt = ke.length > 0 ? "{key: someKey, " + ke.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Kt[Fe + xt]) {
            var Bn = ke.length > 0 ? "{" + ke.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xt, Fe, Bn, Fe), Kt[Fe + xt] = !0;
          }
        }
        return A === s ? Sn(be) : En(be), be;
      }
    }
    function Tn(A, j, K) {
      return Gt(A, j, K, !0);
    }
    function kn(A, j, K) {
      return Gt(A, j, K, !1);
    }
    var Ln = kn, Nn = Tn;
    et.Fragment = s, et.jsx = Ln, et.jsxs = Nn;
  }()), et;
}
process.env.NODE_ENV === "production" ? kt.exports = An() : kt.exports = zn();
var Mn = kt.exports, ft = {}, Ht = {};
const vi = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const i = e.context;
    i.blockquote = {
      targetButton: t,
      tag: e.util.createElement("BLOCKQUOTE")
    };
  },
  /**
   * @Override core
   */
  active: function(e) {
    if (!e)
      this.util.removeClass(this.context.blockquote.targetButton, "active");
    else if (/blockquote/i.test(e.nodeName))
      return this.util.addClass(this.context.blockquote.targetButton, "active"), !0;
    return !1;
  },
  /**
   * @Override core
   */
  action: function() {
    const e = this.util.getParentElement(this.getSelectionNode(), "blockquote");
    e ? this.detachRangeFormatElement(e, null, null, !1, !1) : this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(!1));
  }
}, yi = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, s = e.context;
    s.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: i.align_justify,
        left: i.align_left,
        right: i.align_right,
        center: i.align_center
      }
    };
    let n = this.setSubmenu(e), r = s.align._itemMenu = n.querySelector("ul");
    r.addEventListener("click", this.pickup.bind(e)), s.align._alignList = r.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, r = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV"), n = e.options.alignItems;
    let r = "";
    for (let u = 0, f, l; u < n.length; u++)
      f = n[u], l = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], r += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + l + '" aria-label="' + l + '"><span class="se-list-icon">' + i["align_" + f] + "</span>" + l + "</button></li>";
    return s.className = "se-submenu se-list-layer se-list-align", s.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + r + "</ul></div>", s;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, i = t.targetButton, s = i.firstElementChild;
    if (!e)
      this.util.changeElement(s, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const n = e.style.textAlign;
      if (n)
        return this.util.changeElement(s, t.icons[n] || t.icons[t.defaultDir]), i.setAttribute("data-focus", n), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let s = 0, n = t.length; s < n; s++)
        i === t[s].getAttribute("data-value") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), s = t.querySelector('[data-value="right"]');
    if (i && s) {
      const n = i.parentElement, r = s.parentElement;
      n.appendChild(s), r.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const s = this.context.align.defaultDir, n = this.getSelectedElements();
    for (let r = 0, u = n.length; r < u; r++)
      this.util.setStyle(n[r], "textAlign", i === s ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Ci = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let s = this.setSubmenu(e);
    s.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = s.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let s, n, r, u, f = e.options.font, l = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (r = 0, u = f.length; r < u; r++)
      s = f[r], n = s.split(",")[0], l += '<li><button type="button" class="se-btn-list" data-value="' + s + '" data-txt="' + n + '" title="' + n + '" aria-label="' + n + '" style="font-family:' + s + ';">' + n + "</button></li>";
    return l += "</ul></div>", i.innerHTML = l, i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const s = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, s), this.util.changeTxt(i, this.lang.toolbar.font + " (" + s + ")"), !0;
      }
    } else {
      const s = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, s), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (s ? " (" + s + ")" : "") : s);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let s = 0, n = t.length; s < n; s++)
        i === (t[s].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentFont = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    let t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      /[\s\d\W]/.test(t) && !/^['"].*['"]$/.test(t) && (t = '"' + t + '"'), i.style.fontFamily = t, this.nodeChange(i, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, wi = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer se-list-font-size";
    const n = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, f = t.fontSizeUnit, l = n.length, _; u < l; u++)
      _ = n[u], r += '<li><button type="button" class="se-btn-list" data-value="' + _ + f + '" title="' + _ + f + '" aria-label="' + _ + f + '" style="font-size:' + _ + f + ';">' + _ + "</button></li>";
    return r += "</ul></div>", s.innerHTML = r, s;
  },
  /**
  * @Override core
  */
  active: function(e) {
    if (!e)
      this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this._convertFontSize.call(this, this.options.fontSizeUnit, this.wwComputedStyle.fontSize) : this.lang.toolbar.fontSize);
    else if (e.style && e.style.fontSize.length > 0)
      return this.util.changeTxt(this.context.fontSize.targetText, this._convertFontSize.call(this, this.options.fontSizeUnit, e.style.fontSize)), !0;
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.fontSize, t = e._sizeList, i = e.targetText.textContent;
    if (i !== e.currentSize) {
      for (let s = 0, n = t.length; s < n; s++)
        i === t[s].getAttribute("data-value") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentSize = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      i.style.fontSize = t, this.nodeChange(i, ["font-size"], null, null);
    } else
      this.nodeChange(null, ["font-size"], ["span"], !0);
    this.submenuOff();
  }
}, xi = {
  name: "colorPicker",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.colorPicker = {
      colorListHTML: "",
      _colorInput: "",
      _defaultColor: "#000",
      _styleProperty: "color",
      _currentColor: "",
      _colorList: []
    }, t.colorPicker.colorListHTML = this.createColorList(e, this._makeColorList);
  },
  /**
   * @description Create color list
   * @param {Object} core Core object 
   * @param {Function} makeColor this._makeColorList
   * @returns {String} HTML string
   */
  createColorList: function(e, t) {
    const i = e.options, s = e.lang, n = !i.colorList || i.colorList.length === 0 ? [
      "#ff0000",
      "#ff5e00",
      "#ffe400",
      "#abf200",
      "#00d8ff",
      "#0055ff",
      "#6600ff",
      "#ff00dd",
      "#000000",
      "#ffd8d8",
      "#fae0d4",
      "#faf4c0",
      "#e4f7ba",
      "#d4f4fa",
      "#d9e5ff",
      "#e8d9ff",
      "#ffd9fa",
      "#f1f1f1",
      "#ffa7a7",
      "#ffc19e",
      "#faed7d",
      "#cef279",
      "#b2ebf4",
      "#b2ccff",
      "#d1b2ff",
      "#ffb2f5",
      "#bdbdbd",
      "#f15f5f",
      "#f29661",
      "#e5d85c",
      "#bce55c",
      "#5cd1e5",
      "#6699ff",
      "#a366ff",
      "#f261df",
      "#8c8c8c",
      "#980000",
      "#993800",
      "#998a00",
      "#6b9900",
      "#008299",
      "#003399",
      "#3d0099",
      "#990085",
      "#353535",
      "#670000",
      "#662500",
      "#665c00",
      "#476600",
      "#005766",
      "#002266",
      "#290066",
      "#660058",
      "#222222"
    ] : i.colorList;
    let r = [], u = '<div class="se-list-inner">';
    for (let f = 0, l = n.length, _; f < l; f++)
      _ = n[f], _ && (typeof _ == "string" && (r.push(_), f < l - 1) || (r.length > 0 && (u += '<div class="se-selector-color">' + t(r) + "</div>", r = []), typeof _ == "object" && (u += '<div class="se-selector-color">' + t(_) + "</div>")));
    return u += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + s.dialogBox.submitButton + '" aria-label="' + s.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + s.toolbar.removeFormat + '" aria-label="' + s.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", u;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let i = 0, s = e.length, n; i < s; i++)
      n = e[i], typeof n == "string" && (t += '<li><button type="button" data-value="' + n + '" title="' + n + '" aria-label="' + n + '" style="background-color:' + n + ';"></button></li>');
    return t += "</ul>", t;
  },
  /**
   * @description Displays or resets the currently selected color at color list.
   * @param {Node} node Current Selected node
   * @param {String|null} color Color value
   */
  init: function(e, t) {
    const i = this.plugins.colorPicker;
    let s = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    s = i.isHexColor(s) ? s : i.rgb2hex(s) || s;
    const n = this.context.colorPicker._colorList;
    if (n)
      for (let r = 0, u = n.length; r < u; r++)
        s.toLowerCase() === n[r].getAttribute("data-value").toLowerCase() ? this.util.addClass(n[r], "active") : this.util.removeClass(n[r], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, s));
  },
  /**
   * @description Store color values
   * @param {String} hexColorStr Hax color value
   */
  setCurrentColor: function(e) {
    this.context.colorPicker._currentColor = e, this.context.colorPicker._colorInput.style.borderColor = e;
  },
  /**
   * @description Set color at input element
   * @param {String} hexColorStr Hax color value
   */
  setInputText: function(e) {
    e = /^#/.test(e) ? e : "#" + e, this.context.colorPicker._colorInput.value = e, this.plugins.colorPicker.setCurrentColor.call(this, e);
  },
  /**
   * @description Gets color value at color property of node
   * @param {Node} node Selected node 
   * @returns {String}
   */
  getColorInNode: function(e) {
    let t = "";
    const i = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[i] && (t = e.style[i]), e = e.parentNode;
    return t;
  },
  /**
   * @description Function to check hex format color
   * @param {String} str Color value
   */
  isHexColor: function(e) {
    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(e);
  },
  /**
   * @description Function to convert hex format to a rgb color
   * @param {String} rgb RGB color format
   * @returns {String}
   */
  rgb2hex: function(e) {
    const t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return t && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
  },
  /**
   * @description Converts color values of other formats to hex color values and returns.
   * @param {String} colorName Color value
   * @returns {String}
   */
  colorName2hex: function(e) {
    if (/^#/.test(e)) return e;
    var t = this.util.createElement("div");
    t.style.display = "none", t.style.color = e;
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(s) {
      return parseInt(s, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, Ei = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([xi]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let s = this.setSubmenu(e);
    i.fontColor.colorInput = s.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), s.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), s.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), s.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.color;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  /**
  * @Override _colorPicker
  */
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.fontColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e) return;
    const t = this.util.createElement("SPAN");
    t.style.color = e, this.nodeChange(t, ["color"], null, null), this.submenuOff();
  }
}, Si = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([xi]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let s = this.setSubmenu(e);
    i.hiliteColor.colorInput = s.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), s.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), s.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), s.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.backgroundColor;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  /**
  * @Override _colorPicker
  */
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["background-color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e) return;
    const t = this.util.createElement("SPAN");
    t.style.backgroundColor = e, this.nodeChange(t, ["background-color"], null, null), this.submenuOff();
  }
}, Ti = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let i = this.setSubmenu(e);
    i.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, i), i = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let n = "";
    for (let r = 0, u = s.length; r < u; r++)
      n += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + s[r].class + '" title="' + s[r].name + '" aria-label="' + s[r].name + '"><hr' + (s[r].class ? ' class="' + s[r].class + '"' : "") + (s[r].style ? ' style="' + s[r].style + '"' : "") + "/></button></li>";
    return i.className = "se-submenu se-list-layer se-list-line", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + n + "</ul></div>", i;
  },
  active: function(e) {
    if (!e)
      this.util.hasClass(this.context.horizontalRule.currentHR, "on") && this.controllersOff();
    else if (/HR/i.test(e.nodeName))
      return this.context.horizontalRule.currentHR = e, this.util.hasClass(e, "on") || (this.util.addClass(e, "on"), this.controllersOn("hr", this.util.removeClass.bind(this.util, e, "on"))), !0;
    return !1;
  },
  appendHr: function(e) {
    return this.focus(), this.insertComponent(e.cloneNode(!1), !1, !0, !1);
  },
  horizontalRulePick: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = t.getAttribute("data-command");
    for (; !i && !/UL/i.test(t.tagName); )
      t = t.parentNode, i = t.getAttribute("data-command");
    if (!i) return;
    const s = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    s && (this.setRange(s, 0, s, 0), this.submenuOff());
  }
}, ki = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.list._list = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, s = this.util;
    if (s.isList(e)) {
      const n = e.nodeName;
      return t.setAttribute("data-focus", n), s.addClass(t, "active"), /UL/i.test(n) ? s.changeElement(i, this.context.list.icons.bullets) : s.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), s.changeElement(i, this.context.list.icons.number), s.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let s = 0, n = t.length; s < n; s++)
        i === t[s].getAttribute("data-command") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let s = this.getRange(), n = t || this.getSelectedElementsAndComponents(!1);
    if (n.length === 0 && (t || (s = this.getRange_addLine(s, null), n = this.getSelectedElementsAndComponents(!1), n.length === 0)))
      return;
    const r = this.util;
    r.sortByDepth(n, !0);
    let u = n[0], f = n[n.length - 1], l = (r.isListCell(u) || r.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, _ = (r.isListCell(f) || r.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const c = s.collapsed, m = {
      sc: s.startContainer,
      so: s.startContainer === s.endContainer && r.onlyZeroWidthSpace(s.startContainer) && s.startOffset === 0 && s.endOffset === 1 ? s.endOffset : s.startOffset,
      ec: s.endContainer,
      eo: s.endOffset
    };
    let x = null, T = !0;
    for (let E = 0, z = n.length; E < z; E++)
      if (!r.isList(r.getRangeFormatElement(n[E], (function(o) {
        return this.getRangeFormatElement(o) && o !== n[E];
      }).bind(r)))) {
        T = !1;
        break;
      }
    if (T && (!l || u.tagName !== l.tagName || e !== l.tagName.toUpperCase()) && (!_ || f.tagName !== _.tagName || e !== _.tagName.toUpperCase())) {
      if (i) {
        for (let h = 0, g = n.length; h < g; h++)
          for (let b = h - 1; b >= 0; b--)
            if (n[b].contains(n[h])) {
              n.splice(h, 1), h--, g--;
              break;
            }
      }
      const E = r.getRangeFormatElement(u), z = E && E.tagName === e;
      let o, a;
      const d = (function(h) {
        return !this.isComponent(h);
      }).bind(r);
      z || (a = r.createElement(e));
      for (let h = 0, g = n.length, b, p; h < g; h++)
        p = r.getRangeFormatElement(n[h], d), !(!p || !r.isList(p)) && (b ? b !== p ? (i && r.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, o.f) : x = this.detachRangeFormatElement(o.f[0].parentNode, o.f, a, !1, !0), p = n[h].parentNode, z || (a = r.createElement(e)), b = p, o = { r: b, f: [r.getParentElement(n[h], "LI")] }) : o.f.push(r.getParentElement(n[h], "LI")) : (b = p, o = { r: b, f: [r.getParentElement(n[h], "LI")] }), h === g - 1 && (i && r.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, o.f) : x = this.detachRangeFormatElement(o.f[0].parentNode, o.f, a, !1, !0)));
    } else {
      const E = l && l.parentNode, z = _ && _.parentNode;
      l = E && !r.isWysiwygDiv(E) && E.nodeName === e ? E : l, _ = z && !r.isWysiwygDiv(z) && z.nodeName === e ? z : _;
      const o = l && l.tagName === e, a = _ && _.tagName === e;
      let d = o ? l : r.createElement(e), h = null, g = null, b = null;
      const p = (function(v) {
        return !this.isComponent(v) && !this.isList(v);
      }).bind(r);
      for (let v = 0, C = n.length, y, w, M, S, k, R, D, U, I; v < C; v++) {
        if (w = n[v], w.childNodes.length === 0 && !r._isIgnoreNodeChange(w)) {
          r.removeItem(w);
          continue;
        }
        if (S = n[v + 1], k = w.parentNode, R = S ? S.parentNode : null, M = r.isListCell(w), I = r.isRangeFormatElement(k) ? k : null, D = M && !r.isWysiwygDiv(k) ? k.parentNode : k, U = M && !r.isWysiwygDiv(k) ? !S || r.isListCell(D) ? k : k.nextSibling : w.nextSibling, y = r.createElement("LI"), r.copyFormatAttributes(y, w), v === 0 && m.sc === w && (m.sc = y), v === C - 1 && m.ec === w && (m.ec = y), r.isComponent(w)) {
          const H = /^HR$/i.test(w.nodeName);
          H || (y.innerHTML = "<br>"), y.innerHTML += w.outerHTML, H && (y.innerHTML += "<br>");
        } else {
          const H = w.childNodes;
          for (; H[0]; )
            y.appendChild(H[0]);
        }
        d.appendChild(y), (!S || D !== R || r.isRangeFormatElement(U)) && (h || (h = d), (!o || !S || D !== R) && !(S && r.isList(R) && R === k) && d.parentNode !== D && D.insertBefore(d, U)), r.removeItem(w), o && g === null && (g = d.children.length - 1), S && (r.getRangeFormatElement(R, p) !== r.getRangeFormatElement(k, p) || r.isList(R) && r.isList(k) && r.getElementDepth(R) !== r.getElementDepth(k)) && (d = r.createElement(e)), I && I.children.length === 0 && r.removeItem(I);
      }
      g && (h = h.children[g]), a && (b = d.children.length - 1, d.innerHTML += _.innerHTML, d.children[b], r.removeItem(_));
    }
    return this.effectNode = null, c && x || m;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], s = i.nextElementSibling, n = t.parentNode, r = n.parentNode.nextElementSibling, u = n.parentNode.parentNode;
    for (let l = 0, _ = e.length; l < _; l++)
      u.insertBefore(e[l], r);
    if (s && n.children.length > 0) {
      const l = n.cloneNode(!1), _ = n.childNodes, c = this.util.getPositionIndex(s);
      for (; _[c]; )
        l.appendChild(_[c]);
      i.appendChild(l);
    }
    n.children.length === 0 && this.util.removeItem(n), this.util.mergeSameTags(u);
    const f = this.util.getEdgeChildNodes(t, i);
    return {
      cc: t.parentNode,
      sc: f.sc,
      ec: f.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter((function(u) {
      return this.isListCell(u);
    }).bind(this.util));
    const i = t.length;
    if (i === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[i - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[i - 1],
        eo: 1
      };
    let s = t[0].parentNode, n = t[i - 1], r = null;
    if (e) {
      if (s !== n.parentNode && this.util.isList(n.parentNode.parentNode) && n.nextElementSibling)
        for (n = n.nextElementSibling; n; )
          t.push(n), n = n.nextElementSibling;
      r = this.plugins.list.editList.call(this, s.nodeName.toUpperCase(), t, !0);
    } else {
      let u = this.util.createElement(s.nodeName), f = t[0].previousElementSibling, l = n.nextElementSibling;
      const _ = { s: null, e: null, sl: s, el: s };
      for (let x = 0, T = i, E; x < T; x++)
        E = t[x], E.parentNode !== s && (this.plugins.list._insiedList.call(this, s, u, f, l, _), s = E.parentNode, u = this.util.createElement(s.nodeName)), f = E.previousElementSibling, l = E.nextElementSibling, u.appendChild(E);
      this.plugins.list._insiedList.call(this, s, u, f, l, _);
      const c = this.util.getNodeFromPath(_.s, _.sl), m = this.util.getNodeFromPath(_.e, _.el);
      r = {
        sc: c,
        so: 0,
        ec: m,
        eo: m.textContent.length
      };
    }
    return r;
  },
  _insiedList: function(e, t, i, s, n) {
    let r = !1;
    if (i && t.tagName === i.tagName) {
      const u = t.children;
      for (; u[0]; )
        i.appendChild(u[0]);
      t = i, r = !0;
    }
    if (s && t.tagName === s.tagName) {
      const u = s.children;
      for (; u[0]; )
        t.appendChild(u[0]);
      const f = s.nextElementSibling;
      s.parentNode.removeChild(s), s = f;
    }
    if (!r) {
      this.util.isListCell(i) && (e = i, s = null), e.insertBefore(t, s), n.s || (n.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), n.sl = e);
      const u = e.contains(n.sl) ? this.util.getNodePath(n.sl, e) : null;
      n.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), n.el = e, this.util.mergeSameTags(e, [n.s, n.e, u], !1), this.util.mergeNestedTags(e), u && (n.sl = this.util.getNodeFromPath(u, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i) return;
    const s = this.plugins.list.editList.call(this, i, null, !1);
    s && this.setRange(s.sc, s.so, s.ec, s.eo), this.submenuOff(), this.history.push(!1);
  }
}, Li = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let s = i.table = {
      _element: null,
      _tdElement: null,
      _trElement: null,
      _trElements: null,
      _tableXY: [],
      _maxWidth: !0,
      _fixedColumn: !1,
      _rtl: e.options.rtl,
      cellControllerTop: e.options.tableCellControllerPosition === "top",
      resizeText: null,
      headerButton: null,
      mergeButton: null,
      splitButton: null,
      splitMenu: null,
      maxText: e.lang.controller.maxSize,
      minText: e.lang.controller.minSize,
      _physical_cellCnt: 0,
      _logical_cellCnt: 0,
      _rowCnt: 0,
      _rowIndex: 0,
      _physical_cellIndex: 0,
      _logical_cellIndex: 0,
      _current_colSpan: 0,
      _current_rowSpan: 0,
      icons: {
        expansion: e.icons.expansion,
        reduction: e.icons.reduction
      }
    }, n = this.setSubmenu(e), r = n.querySelector(".se-controller-table-picker");
    s.tableHighlight = n.querySelector(".se-table-size-highlighted"), s.tableUnHighlight = n.querySelector(".se-table-size-unhighlighted"), s.tableDisplay = n.querySelector(".se-table-size-display"), e.options.rtl && (s.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let u = this.setController_table(e);
    s.tableController = u, s.resizeButton = u.querySelector("._se_table_resize"), s.resizeText = u.querySelector("._se_table_resize > span > span"), s.columnFixedButton = u.querySelector("._se_table_fixed_column"), s.headerButton = u.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, s.cellControllerTop);
    s.resizeDiv = f, s.splitMenu = f.querySelector(".se-btn-group-sub"), s.mergeButton = f.querySelector("._se_table_merge_button"), s.splitButton = f.querySelector("._se_table_split_button"), s.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), s.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), r.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, s)), r.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), u.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, n), i.element.relative.appendChild(f), i.element.relative.appendChild(u), n = null, r = null, f = null, u = null, s = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV");
    return s.className = "se-controller se-controller-table", s.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", s;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, s = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-table-cell", n.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + s.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + s.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + s.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + s.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + s.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + s.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + s.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + s.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", n;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let s = this.context.table._tableXY[1], n = "<tbody>";
    for (; s > 0; )
      n += "<tr>" + t.call(this, "td", i) + "</tr>", --s;
    if (n += "</tbody>", e.innerHTML = n, this.insertComponent(e, !1, !0, !1)) {
      const u = e.querySelector("td div");
      this.setRange(u, 0, u, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
      const s = this.util.createElement(e);
      return s.innerHTML = "<div><br></div>", s;
    } else {
      let s = "";
      for (; t > 0; )
        s += "<" + e + "><div><br></div></" + e + ">", t--;
      return s;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let i = this._w.Math.ceil(t.offsetX / 18), s = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, s = s < 1 ? 1 : s, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = s + "em", this.util.changeTxt(e.tableDisplay, i + " x " + s), e._tableXY = [i, s];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight) return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const i = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let s = 0, n = i.length; s < n; s++)
        this.util.removeClass(i[s], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  /** table edit controller */
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, i = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const s = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(s, "se-table-size-100") || s.style.width === "100%" || !s.style.width && !this.util.hasClass(s, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(s, "se-table-layout-fixed") || s.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, s), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, s = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(s, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(s, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, s = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(s.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const n = i._trElements = s.rows, r = e.cellIndex;
      let u = 0;
      for (let c = 0, m = n[0].cells, x = n[0].cells.length; c < x; c++)
        u += m[c].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = n.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = u, i._physical_cellIndex = r, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[r].rowSpan - 1;
      let l = [], _ = [];
      for (let c = 0, m, x; c <= f; c++) {
        m = n[c].cells, x = 0;
        for (let T = 0, E = m.length, z, o, a, d; T < E; T++) {
          if (z = m[T], o = z.colSpan - 1, a = z.rowSpan - 1, d = T + x, _.length > 0)
            for (let h = 0, g; h < _.length; h++)
              g = _[h], !(g.row > c) && (d >= g.index ? (x += g.cs, d += g.cs, g.rs -= 1, g.row = c + 1, g.rs < 1 && (_.splice(h, 1), h--)) : T === E - 1 && (g.rs -= 1, g.row = c + 1, g.rs < 1 && (_.splice(h, 1), h--)));
          if (c === f && T === r) {
            i._logical_cellIndex = d;
            break;
          }
          a > 0 && l.push({
            index: d,
            cs: o + 1,
            rs: a,
            row: -1
          }), x += o;
        }
        _ = _.concat(l).sort(function(T, E) {
          return T.index - E.index;
        }), l = [];
      }
      l = null, _ = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, s = this.context.table, n = s._element, r = e === "row";
    if (r) {
      const u = s._trElement.parentNode;
      if (/^THEAD$/i.test(u.nodeName)) {
        if (t === "up")
          return;
        if (!u.nextElementSibling || !/^TBODY$/i.test(u.nextElementSibling.nodeName)) {
          n.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", s._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const u = s._tdElement, f = i._selectedCells;
      if (r)
        if (t)
          i.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), i.editRow.call(this, t, u);
        else {
          let l = f[0].parentNode;
          const _ = [f[0]];
          for (let c = 1, m = f.length, x; c < m; c++)
            x = f[c], l !== x.parentNode && (_.push(x), l = x.parentNode);
          for (let c = 0, m = _.length; c < m; c++)
            i.setCellInfo.call(this, _[c], !0), i.editRow.call(this, t);
        }
      else {
        const l = f[0].parentNode;
        if (t) {
          let _ = null;
          for (let c = 0, m = f.length - 1; c < m; c++)
            if (l !== f[c + 1].parentNode) {
              _ = f[c];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? f[0] : _ || f[0], !0), i.editCell.call(this, t, u);
        } else {
          const _ = [f[0]];
          for (let c = 1, m = f.length, x; c < m && (x = f[c], l === x.parentNode); c++)
            _.push(x);
          for (let c = 0, m = _.length; c < m; c++)
            i.setCellInfo.call(this, _[c], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[r ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const u = n.children;
      for (let f = 0; f < u.length; f++)
        u[f].children.length === 0 && (this.util.removeItem(u[f]), f--);
      n.children.length === 0 && this.util.removeItem(n);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, s = !e, n = e === "up", r = i._rowIndex, u = s || n ? r : r + i._current_rowSpan + 1, f = s ? -1 : 1, l = i._trElements;
    let _ = i._logical_cellCnt;
    for (let c = 0, m = r + (s ? -1 : 0), x; c <= m; c++) {
      if (x = l[c].cells, x.length === 0) return;
      for (let T = 0, E = x.length, z, o; T < E; T++)
        z = x[T].rowSpan, o = x[T].colSpan, !(z < 2 && o < 2) && z + c > u && u > c && (x[T].rowSpan = z + f, _ -= o);
    }
    if (s) {
      const c = l[r + 1];
      if (c) {
        const m = [];
        let x = l[r].cells, T = 0;
        for (let E = 0, z = x.length, o, a; E < z; E++)
          o = x[E], a = E + T, T += o.colSpan - 1, o.rowSpan > 1 && (o.rowSpan -= 1, m.push({ cell: o.cloneNode(!1), index: a }));
        if (m.length > 0) {
          let E = m.shift();
          x = c.cells, T = 0;
          for (let z = 0, o = x.length, a, d; z < o && (a = x[z], d = z + T, T += a.colSpan - 1, !(d >= E.index && (z--, T--, T += E.cell.colSpan - 1, c.insertBefore(E.cell, a), E = m.shift(), !E))); z++)
            ;
          if (E) {
            c.appendChild(E.cell);
            for (let z = 0, o = m.length; z < o; z++)
              c.appendChild(m[z].cell);
          }
        }
      }
      i._element.deleteRow(u);
    } else {
      const c = i._element.insertRow(u);
      c.innerHTML = this.plugins.table.createCells.call(this, "td", _, !1);
    }
    s ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, s = this.util, n = !e, r = e === "left", u = i._current_colSpan, f = n || r ? i._logical_cellIndex : i._logical_cellIndex + u + 1, l = i._trElements;
    let _ = [], c = [], m = 0;
    const x = [], T = [];
    for (let E = 0, z = i._rowCnt, o, a, d, h, g, b; E < z; E++) {
      o = l[E], a = f, g = !1, d = o.cells, b = 0;
      for (let p = 0, v, C = d.length, y, w, M; p < C && (v = d[p], !!v); p++)
        if (y = v.rowSpan - 1, w = v.colSpan - 1, n) {
          if (M = p + b, c.length > 0) {
            const S = !d[p + 1];
            for (let k = 0, R; k < c.length; k++)
              R = c[k], !(R.row > E) && (M >= R.index ? (b += R.cs, M = p + b, R.rs -= 1, R.row = E + 1, R.rs < 1 && (c.splice(k, 1), k--)) : S && (R.rs -= 1, R.row = E + 1, R.rs < 1 && (c.splice(k, 1), k--)));
          }
          y > 0 && _.push({
            rs: y,
            cs: w + 1,
            index: M,
            row: -1
          }), M >= a && M + w <= a + u ? x.push(v) : M <= a + u && M + w >= a ? v.colSpan -= s.getOverlapRangeAtIndex(f, f + u, M, M + w) : y > 0 && (M < a || M + w > a + u) && T.push({
            cell: v,
            i: E,
            rs: E + y
          }), b += w;
        } else {
          if (p >= a) break;
          if (w > 0) {
            if (m < 1 && w + p >= a) {
              v.colSpan += 1, a = null, m = y + 1;
              break;
            }
            a -= w;
          }
          if (!g) {
            for (let S = 0, k; S < c.length; S++)
              k = c[S], a -= k.cs, k.rs -= 1, k.rs < 1 && (c.splice(S, 1), S--);
            g = !0;
          }
        }
      if (c = c.concat(_).sort(function(p, v) {
        return p.index - v.index;
      }), _ = [], !n) {
        if (m > 0) {
          m -= 1;
          continue;
        }
        a !== null && d.length > 0 && (h = this.plugins.table.createCells.call(this, d[0].nodeName, 0, !0), h = o.insertBefore(h, d[a]));
      }
    }
    if (n) {
      let E, z;
      for (let o = 0, a = x.length, d; o < a; o++)
        d = x[o].parentNode, s.removeItem(x[o]), d.cells.length === 0 && (E || (E = s.getArrayIndex(l, d)), z = s.getArrayIndex(l, d), s.removeItem(d));
      for (let o = 0, a = T.length, d; o < a; o++)
        d = T[o], d.cell.rowSpan = s.getOverlapRangeAtIndex(E, z, d.i, d.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = (function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }).bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, i = e === "vertical", s = this.context.table, n = s._tdElement, r = s._trElements, u = s._trElement, f = s._logical_cellIndex, l = s._rowIndex, _ = this.plugins.table.createCells.call(this, n.nodeName, 0, !0);
    if (i) {
      const c = n.colSpan;
      if (_.rowSpan = n.rowSpan, c > 1)
        _.colSpan = this._w.Math.floor(c / 2), n.colSpan = c - _.colSpan, u.insertBefore(_, n.nextElementSibling);
      else {
        let m = [], x = [];
        for (let T = 0, E = s._rowCnt, z, o; T < E; T++) {
          z = r[T].cells, o = 0;
          for (let a = 0, d = z.length, h, g, b, p; a < d; a++) {
            if (h = z[a], g = h.colSpan - 1, b = h.rowSpan - 1, p = a + o, x.length > 0)
              for (let v = 0, C; v < x.length; v++)
                C = x[v], !(C.row > T) && (p >= C.index ? (o += C.cs, p += C.cs, C.rs -= 1, C.row = T + 1, C.rs < 1 && (x.splice(v, 1), v--)) : a === d - 1 && (C.rs -= 1, C.row = T + 1, C.rs < 1 && (x.splice(v, 1), v--)));
            if (p <= f && b > 0 && m.push({
              index: p,
              cs: g + 1,
              rs: b,
              row: -1
            }), h !== n && p <= f && p + g >= f + c - 1) {
              h.colSpan += 1;
              break;
            }
            if (p > f) break;
            o += g;
          }
          x = x.concat(m).sort(function(a, d) {
            return a.index - d.index;
          }), m = [];
        }
        u.insertBefore(_, n.nextElementSibling);
      }
    } else {
      const c = n.rowSpan;
      if (_.colSpan = n.colSpan, c > 1) {
        _.rowSpan = this._w.Math.floor(c / 2);
        const m = c - _.rowSpan, x = [], T = t.getArrayIndex(r, u) + m;
        for (let a = 0, d, h; a < T; a++) {
          d = r[a].cells, h = 0;
          for (let g = 0, b = d.length, p, v, C; g < b && (C = g + h, !(C >= f)); g++)
            p = d[g], v = p.rowSpan - 1, v > 0 && v + a >= T && C < f && x.push({
              index: C,
              cs: p.colSpan
            }), h += p.colSpan - 1;
        }
        const E = r[T], z = E.cells;
        let o = x.shift();
        for (let a = 0, d = z.length, h = 0, g, b, p, v; a < d; a++) {
          if (p = a + h, g = z[a], b = g.colSpan - 1, v = p + b + 1, o && v >= o.index && (h += o.cs, v += o.cs, o = x.shift()), v >= f || a === d - 1) {
            E.insertBefore(_, g.nextElementSibling);
            break;
          }
          h += b;
        }
        n.rowSpan = m;
      } else {
        _.rowSpan = n.rowSpan;
        const m = t.createElement("TR");
        m.appendChild(_);
        for (let E = 0, z; E < l; E++) {
          if (z = r[E].cells, z.length === 0) return;
          for (let o = 0, a = z.length; o < a; o++)
            E + z[o].rowSpan - 1 >= l && (z[o].rowSpan += 1);
        }
        const x = s._physical_cellIndex, T = u.cells;
        for (let E = 0, z = T.length; E < z; E++)
          E !== x && (T[E].rowSpan += 1);
        u.parentNode.insertBefore(m, u.nextElementSibling);
      }
    }
    this.focusEdge(n), this.plugins.table.setPositionControllerDiv.call(this, n, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, s = e._ref, n = e._selectedCells, r = n[0];
    let u = null, f = null, l = s.ce - s.cs + 1, _ = s.re - s.rs + 1, c = "", m = null;
    for (let x = 1, T = n.length, E, z; x < T; x++) {
      E = n[x], m !== E.parentNode && (m = E.parentNode), z = E.children;
      for (let o = 0, a = z.length; o < a; o++)
        i.isFormatElement(z[o]) && i.onlyZeroWidthSpace(z[o].textContent) && i.removeItem(z[o]);
      c += E.innerHTML, i.removeItem(E), m.cells.length === 0 && (u ? f = m : u = m, _ -= 1);
    }
    if (u) {
      const x = t._trElements, T = i.getArrayIndex(x, u), E = i.getArrayIndex(x, f || u), z = [];
      for (let o = 0, a; o <= E; o++) {
        if (a = x[o].cells, a.length === 0) {
          z.push(x[o]);
          continue;
        }
        for (let d = 0, h = a.length, g, b; d < h; d++)
          g = a[d], b = g.rowSpan - 1, b > 0 && o + b >= T && (g.rowSpan -= i.getOverlapRangeAtIndex(T, E, o, o + b));
      }
      for (let o = 0, a = z.length; o < a; o++)
        i.removeItem(z[o]);
    }
    r.innerHTML += c, r.colSpan = l, r.rowSpan = _, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, r), i.addClass(r, "se-table-selected-cell"), this.focusEdge(r);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), s = this.context.table._element;
    if (i)
      e.removeItem(s.querySelector("thead"));
    else {
      const n = e.createElement("THEAD");
      n.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", s.insertBefore(n, s.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let s, n, r, u;
    e.indexOf("width") > -1 && (s = t.resizeButton.firstElementChild, n = t.resizeText, t._maxWidth ? (r = t.icons.reduction, u = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (r = t.icons.expansion, u = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(s, r), this.util.changeTxt(n, u)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const i = this.context.table;
    /^TH$/i.test(e.nodeName) ? (i.insertRowAboveButton.setAttribute("disabled", !0), i.insertRowBelowButton.setAttribute("disabled", !0)) : (i.insertRowAboveButton.removeAttribute("disabled"), i.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (i.splitButton.removeAttribute("disabled"), i.mergeButton.setAttribute("disabled", !0)) : (i.splitButton.setAttribute("disabled", !0), i.mergeButton.removeAttribute("disabled"));
  },
  // multi selecte
  _bindOnSelect: null,
  _bindOffSelect: null,
  _bindOffShift: null,
  _selectedCells: null,
  _shift: !1,
  _fixedCell: null,
  _fixedCellName: null,
  _selectedCell: null,
  _selectedTable: null,
  _ref: null,
  _toggleEditor: function(e) {
    this.context.element.wysiwyg.setAttribute("contenteditable", e), e ? this.util.removeClass(this.context.element.wysiwyg, "se-disabled") : this.util.addClass(this.context.element.wysiwyg, "se-disabled");
  },
  _offCellMultiSelect: function(e) {
    e.stopPropagation();
    const t = this.plugins.table;
    t._shift ? t._initBind && (this._wd.removeEventListener("touchmove", t._initBind), t._initBind = null) : (t._removeEvents.call(this), t._toggleEditor.call(this, !0)), !(!t._fixedCell || !t._selectedTable) && (t.setActiveButton.call(this, t._fixedCell, t._selectedCell), t.call_controller_tableEdit.call(this, t._selectedCell || t._fixedCell), t._selectedCells = t._selectedTable.querySelectorAll(".se-table-selected-cell"), t._selectedCell && t._fixedCell && this.focusEdge(t._selectedCell), t._shift || (t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null));
  },
  _onCellMultiSelect: function(e) {
    this._antiBlur = !0;
    const t = this.plugins.table, i = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      i === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (i === t._fixedCell) return;
      t._toggleEditor.call(this, !1);
    }
    !i || i === t._selectedCell || t._fixedCellName !== i.nodeName || t._selectedTable !== this.util.getParentElement(i, "TABLE") || (t._selectedCell = i, t._setMultiCells.call(this, t._fixedCell, i));
  },
  _setMultiCells: function(e, t) {
    const i = this.plugins.table, s = i._selectedTable.rows, n = this.util, r = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let c = 0, m = r.length; c < m; c++)
      n.removeClass(r[c], "se-table-selected-cell");
    if (e === t && (n.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let u = !0, f = [], l = [];
    const _ = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let c = 0, m = s.length, x, T; c < m; c++) {
      x = s[c].cells, T = 0;
      for (let E = 0, z = x.length, o, a, d, h; E < z; E++) {
        if (o = x[E], d = o.colSpan - 1, h = o.rowSpan - 1, a = E + T, f.length > 0)
          for (let g = 0, b; g < f.length; g++)
            b = f[g], !(b.row > c) && (a >= b.index ? (T += b.cs, a += b.cs, b.rs -= 1, b.row = c + 1, b.rs < 1 && (f.splice(g, 1), g--)) : E === z - 1 && (b.rs -= 1, b.row = c + 1, b.rs < 1 && (f.splice(g, 1), g--)));
        if (u) {
          if ((o === e || o === t) && (_.cs = _.cs !== null && _.cs < a ? _.cs : a, _.ce = _.ce !== null && _.ce > a + d ? _.ce : a + d, _.rs = _.rs !== null && _.rs < c ? _.rs : c, _.re = _.re !== null && _.re > c + h ? _.re : c + h, _._i += 1), _._i === 2) {
            u = !1, f = [], l = [], c = -1;
            break;
          }
        } else if (n.getOverlapRangeAtIndex(_.cs, _.ce, a, a + d) && n.getOverlapRangeAtIndex(_.rs, _.re, c, c + h)) {
          const g = _.cs < a ? _.cs : a, b = _.ce > a + d ? _.ce : a + d, p = _.rs < c ? _.rs : c, v = _.re > c + h ? _.re : c + h;
          if (_.cs !== g || _.ce !== b || _.rs !== p || _.re !== v) {
            _.cs = g, _.ce = b, _.rs = p, _.re = v, c = -1, f = [], l = [];
            break;
          }
          n.addClass(o, "se-table-selected-cell");
        }
        h > 0 && l.push({
          index: a,
          cs: d + 1,
          rs: h,
          row: -1
        }), T += o.colSpan - 1;
      }
      f = f.concat(l).sort(function(E, z) {
        return E.index - z.index;
      }), l = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const i = this.plugins.table;
    i._removeEvents.call(this), this.controllersOff(), i._shift = t, i._fixedCell = e, i._fixedCellName = e.nodeName, i._selectedTable = this.util.getParentElement(e, "TABLE");
    const s = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let n = 0, r = s.length; n < r; n++)
      this.util.removeClass(s[n], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), s = t.getAttribute("data-value"), n = t.getAttribute("data-option"), r = this.plugins.table;
    if (typeof r._closeSplitMenu == "function" && (r._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const u = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        r.editTable.call(this, s, n);
        break;
      case "header":
        r.toggleHeader.call(this);
        break;
      case "onsplit":
        r.openSplitMenu.call(this);
        break;
      case "split":
        r.splitCells.call(this, s);
        break;
      case "merge":
        r.mergeCells.call(this);
        break;
      case "resize":
        u._maxWidth = !u._maxWidth, r.setTableStyle.call(this, "width"), r.setPositionControllerTop.call(this, u._element), r.setPositionControllerDiv.call(this, u._tdElement, r._shift);
        break;
      case "layout":
        u._fixedColumn = !u._fixedColumn, r.setTableStyle.call(this, "column"), r.setPositionControllerTop.call(this, u._element), r.setPositionControllerDiv.call(this, u._tdElement, r._shift);
        break;
      case "remove":
        const f = u._element.parentNode;
        this.util.removeItem(u._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(l) {
          return l.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Ni = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let s = this.setSubmenu(e);
    s.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer se-list-format";
    const n = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], r = !t.formats || t.formats.length === 0 ? n : t.formats;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, l = r.length, _, c, m, x, T, E, z; f < l; f++)
      _ = r[f], typeof _ == "string" && n.indexOf(_) > -1 ? (c = _.toLowerCase(), m = c === "blockquote" ? "range" : c === "pre" ? "free" : "replace", T = /^h/.test(c) ? c.match(/\d+/)[0] : "", x = i["tag_" + (T ? "h" : c)] + T, z = "", E = "") : (c = _.tag.toLowerCase(), m = _.command, x = _.name || c, z = _.class, E = z ? ' class="' + z + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + m + '" data-value="' + c + '" data-class="' + z + '" title="' + x + '" aria-label="' + x + '"><' + c + E + ">" + x + "</" + c + "></button></li>";
    return u += "</ul></div>", s.innerHTML = u, s;
  },
  /**
  * @Override core
  */
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const i = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(i, t);
    else if (this.util.isFormatElement(e)) {
      const n = this.context.formatBlock._formatList, r = e.nodeName.toLowerCase(), u = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, l = n.length, _; f < l; f++)
        if (_ = n[f], r === _.getAttribute("data-value") && u === _.getAttribute("data-class")) {
          t = _.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", r), i.setAttribute("data-class", u), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, s = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (s !== e.currentFormat) {
      for (let n = 0, r = t.length, u; n < r; n++)
        u = t[n], s === u.getAttribute("data-value") + u.getAttribute("data-class") ? this.util.addClass(u, "active") : this.util.removeClass(u, "active");
      e.currentFormat = s;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, s = null, n = null, r = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), s = t.getAttribute("data-value"), r = t.getAttribute("data-class"), i) {
        n = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (i) {
      if (i === "range") {
        const u = n.cloneNode(!1);
        this.applyRangeFormatElement(u);
      } else {
        let u = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (u = this.getRange_addLine(u, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const l = u.startOffset, _ = u.endOffset, c = this.util;
        let m = f[0], x = f[f.length - 1];
        const T = c.getNodePath(u.startContainer, m, null, null), E = c.getNodePath(u.endContainer, x, null, null), z = this.detachList(f, !1);
        z.sc && (m = z.sc), z.ec && (x = z.ec), this.setRange(c.getNodeFromPath(T, m), l, c.getNodeFromPath(E, x), _);
        const o = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const a = o.length - 1;
          let d = o[a].parentNode, h = n.cloneNode(!1);
          const g = h;
          for (let b = a, p, v, C, y, w, M, S = !0; b >= 0; b--)
            if (p = o[b], p !== (o[b + 1] ? o[b + 1].parentNode : null)) {
              if (M = c.isComponent(p), v = M ? "" : p.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = c.getParentElement(p, function(k) {
                return k.parentNode === d;
              }), (d !== p.parentNode || M) && (c.isFormatElement(d) ? (d.parentNode.insertBefore(h, d.nextSibling), d = d.parentNode) : (d.insertBefore(h, C ? C.nextSibling : null), d = p.parentNode), y = h.nextSibling, y && h.nodeName === y.nodeName && c.isSameAttributes(h, y) && (h.innerHTML += "<BR>" + y.innerHTML, c.removeItem(y)), h = n.cloneNode(!1), S = !0), w = h.innerHTML, h.innerHTML = (S || !v || !w || /<br>$/i.test(v) ? v : v + "<BR>") + w, b === 0) {
                d.insertBefore(h, p), y = p.nextSibling, y && h.nodeName === y.nodeName && c.isSameAttributes(h, y) && (h.innerHTML += "<BR>" + y.innerHTML, c.removeItem(y));
                const k = h.previousSibling;
                k && h.nodeName === k.nodeName && c.isSameAttributes(h, k) && (k.innerHTML += "<BR>" + h.innerHTML, c.removeItem(h));
              }
              M || c.removeItem(p), v && (S = !1);
            }
          this.setRange(g, 0, g, 0);
        } else {
          for (let a = 0, d = o.length, h, g; a < d; a++)
            h = o[a], (h.nodeName.toLowerCase() !== s.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== r) && !c.isComponent(h) && (g = n.cloneNode(!1), c.copyFormatAttributes(g, h), g.innerHTML = h.innerHTML, h.parentNode.replaceChild(g, h)), a === 0 && (m = g || h), a === d - 1 && (x = g || h), g = null;
          this.setRange(c.getNodeFromPath(T, m), l, c.getNodeFromPath(E, x), _);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Bi = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer";
    const n = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, f = n.length, l; u < f; u++)
      l = n[u], r += '<li><button type="button" class="se-btn-list" data-value="' + l.value + '" title="' + l.text + '" aria-label="' + l.text + '">' + l.text + "</button></li>";
    return r += "</ul></div>", s.innerHTML = r, s;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), s = i ? i.style.lineHeight + "" : "";
    if (s !== e.currentSize) {
      for (let n = 0, r = t.length; n < r; n++)
        s === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentSize = s;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let s = 0, n = i.length; s < n; s++)
      i[s].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Ri = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let s = this.setSubmenu(e);
    s.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let s = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let n = 0, r = t.length, u; n < r; n++)
      u = t[n], s += '<li><button type="button" class="se-btn-list" data-value="' + n + '" title="' + u.name + '" aria-label="' + u.name + '">' + u.name + "</button></li>";
    return s += "</ul></div>", i.innerHTML = s, i;
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation(), this.context.template.selectedIndex = e.target.getAttribute("data-value") * 1;
    const t = this.options.templates[this.context.template.selectedIndex];
    if (t.html)
      this.setContents(t.html);
    else
      throw this.submenuOff(), Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
    this.submenuOff();
  }
}, Ai = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let s = this.setSubmenu(e);
    s.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const s = e.lang.menu, n = {
      spaced: {
        name: s.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: s.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: s.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, r = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, l = r.length, _, c, m, x; f < l; f++) {
      if (_ = r[f], typeof _ == "string") {
        const T = n[_.toLowerCase()];
        if (!T) continue;
        _ = T;
      }
      c = _.name, m = _.class ? ' class="' + _.class + '"' : "", x = _._class, u += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-value="' + _.class + '" title="' + c + '" aria-label="' + c + '"><div' + m + ">" + c + "</div></button></li>";
    }
    return u += "</ul></div>", i.innerHTML = u, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let s = 0, n = t.length; s < n; s++)
      this.util.hasClass(i, t[s].getAttribute("data-value")) ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i) return;
    let s = this.getSelectedElements();
    if (s.length === 0 && (this.getRange_addLine(this.getRange(), null), s = this.getSelectedElements(), s.length === 0))
      return;
    const n = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let r = 0, u = s.length; r < u; r++)
      n(s[r], i);
    this.submenuOff(), this.history.push(!1);
  }
}, zi = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const s = {
      code: {
        name: e.lang.menu.code,
        class: "__se__t-code",
        tag: "code"
      },
      translucent: {
        name: e.lang.menu.translucent,
        style: "opacity: 0.5;",
        tag: "span"
      },
      shadow: {
        name: e.lang.menu.shadow,
        class: "__se__t-shadow",
        tag: "span"
      }
    }, n = t.textStyles ? t.textStyles : e._w.Object.keys(s);
    let r = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let u = 0, f = n.length, l, _, c, m, x, T, E; u < f; u++) {
      if (l = n[u], m = "", T = "", x = [], typeof l == "string") {
        const z = s[l.toLowerCase()];
        if (!z) continue;
        l = z;
      }
      c = l.name, _ = l.tag || "span", E = l._class, l.style && (m += ' style="' + l.style + '"', T += l.style.replace(/:[^;]+(;|$)\s*/g, ","), x.push("style")), l.class && (m += ' class="' + l.class + '"', T += "." + l.class.trim().replace(/\s+/g, ",."), x.push("class")), T = T.replace(/,$/, ""), r += '<li><button type="button" class="se-btn-list' + (E ? " " + E : "") + '" data-command="' + _ + '" data-value="' + T + '" title="' + c + '" aria-label="' + c + '"><' + _ + m + ">" + c + "</" + _ + "></button></li>";
    }
    return r += "</ul></div>", i.innerHTML = r, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, s = this.getSelectionNode();
    for (let n = 0, r = i.length, u, f, l; n < r; n++) {
      u = i[n], f = u.getAttribute("data-value").split(",");
      for (let _ = 0, c, m; _ < f.length; _++) {
        for (c = s, l = !1; c && !e.isFormatElement(c) && !e.isComponent(c); ) {
          if (c.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (m = f[_], /^\./.test(m) ? e.hasClass(c, m.replace(/^\./, "")) : c.style[m])) {
            l = !0;
            break;
          }
          c = c.parentNode;
        }
        if (!l) break;
      }
      l ? e.addClass(u, "active") : e.removeClass(u, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, s = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        s = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i) return;
    const n = s.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    n.pop();
    const r = s.classList;
    for (let l = 0, _ = r.length; l < _; l++)
      n.push("." + r[l]);
    const u = this.util.hasClass(t, "active") ? null : s.cloneNode(!1), f = u ? null : [s.nodeName];
    this.nodeChange(u, n, f, !0), this.submenuOff();
  }
};
var Mi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : he, function(t, i) {
    const s = {
      name: "dialog",
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(n) {
        const r = n.context;
        r.dialog = {
          kind: "",
          updateModal: !1,
          _closeSignal: !1
        };
        let u = n.util.createElement("DIV");
        u.className = "se-dialog sun-editor-common";
        let f = n.util.createElement("DIV");
        f.className = "se-dialog-back", f.style.display = "none";
        let l = n.util.createElement("DIV");
        l.className = "se-dialog-inner", l.style.display = "none", u.appendChild(f), u.appendChild(l), r.dialog.modalArea = u, r.dialog.back = f, r.dialog.modal = l, r.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(n)), r.dialog.modal.addEventListener("click", this._onClick_dialog.bind(n)), r.element.relative.appendChild(u), u = null, f = null, l = null;
      },
      /**
       * @description Event to control the behavior of closing the dialog
       * @param {MouseEvent} e Event object
       * @private
       */
      _onMouseDown_dialog: function(n) {
        /se-dialog-inner/.test(n.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
      },
      /**
       * @description Event to close the window when the outside area of the dialog or close button is click
       * @param {MouseEvent} e Event object
       * @private
       */
      _onClick_dialog: function(n) {
        (/close/.test(n.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
      },
      /**
       * @description Open a Dialog plugin
       * @param {String} kind Dialog plugin name
       * @param {Boolean} update Whether it will open for update ('image' === this.currentControllerName)
       */
      open: function(n, r) {
        if (this.modalForm) return !1;
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
          /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = r, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = n, this.modalForm = this.context[n].modal;
        const u = this.context[n].focusElement;
        typeof this.plugins[n].on == "function" && this.plugins[n].on.call(this, r), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", u && u.focus();
      },
      _bindClose: null,
      /**
       * @description Close a Dialog plugin
       * The plugin's "init" method is called.
       */
      close: function() {
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
        const n = this.context.dialog.kind;
        this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[n].init == "function" && this.plugins[n].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: s
    })), s;
  });
})(Mi);
var On = Mi.exports;
const lt = /* @__PURE__ */ Ye(On), Dn = {
  name: "selectMenu",
  add: function(e) {
    e.context.selectMenu = {
      caller: {},
      callerContext: null
    };
  },
  setForm: function() {
    return '<div class="se-select-list"></div>';
  },
  createList: function(e, t, i) {
    e.form.innerHTML = "<ul>" + i + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const i = t.querySelector(".se-select-list"), s = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, s)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, s));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const i = t.target.getAttribute("data-index");
    i && (e.index = i * 1);
  },
  onClick_list: function(e, t) {
    const i = t.target.getAttribute("data-index");
    i && e.clickMethod.call(this, e.items[i]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const i = e.menus, s = i.length, n = e.index = t >= s ? 0 : t < 0 ? s - 1 : t;
    for (let r = 0; r < s; r++)
      r === n ? this.util.addClass(i[r], "active") : this.util.removeClass(i[r], "active");
    e.item = e.items[n];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const i = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = i, i.clickMethod = t, i.callerName = e;
  },
  open: function(e, t) {
    const i = e.form;
    i.style.visibility = "hidden", i.style.display = "block", t(i), i.style.visibility = "";
  },
  close: function(e) {
    e.form.style.display = "none", e.items = [], e.menus = [], e.index = -1, e.item = null;
  },
  init: function(e) {
    e && (e.items = [], e.menus = [], e.index = -1, e.item = null, e.callerName = "", this.context.selectMenu.callerContext = null);
  }
}, Oi = {
  name: "anchor",
  add: function(e) {
    e.addModule([Dn]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, s = (e.options.linkRelDefault.default || "").split(" "), n = e.icons, r = e.util.createElement("DIV");
    let u = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + n.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + n.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + n.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      u += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, l = i.length, _; f < l; f++)
        _ = i[f], u += '<li><button type="button" class="se-btn-list' + (s.indexOf(_) > -1 ? " se-checked" : "") + '" data-command="' + _ + '" title="' + _ + '" aria-label="' + _ + '"><span class="se-svg">' + n.checked + "</span>" + _ + "</button></li>";
      u += "</ul></div></div></div>";
    }
    return u += "</div></div>", r.innerHTML = u, r;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, s = this.context.anchor.caller[e] = {
      modal: t,
      urlInput: null,
      linkDefaultRel: this.options.linkRelDefault,
      defaultRel: this.options.linkRelDefault.default || "",
      currentRel: [],
      linkAnchor: null,
      linkValue: "",
      _change: !1,
      callerName: e
    };
    typeof s.linkDefaultRel.default == "string" && (s.linkDefaultRel.default = s.linkDefaultRel.default.trim()), typeof s.linkDefaultRel.check_new_window == "string" && (s.linkDefaultRel.check_new_window = s.linkDefaultRel.check_new_window.trim()), typeof s.linkDefaultRel.check_bookmark == "string" && (s.linkDefaultRel.check_bookmark = s.linkDefaultRel.check_bookmark.trim()), s.urlInput = t.querySelector(".se-input-url"), s.anchorText = t.querySelector("._se_anchor_text"), s.newWindowCheck = t.querySelector("._se_anchor_check"), s.downloadCheck = t.querySelector("._se_anchor_download"), s.download = t.querySelector("._se_anchor_download_icon"), s.preview = t.querySelector(".se-link-preview"), s.bookmark = t.querySelector("._se_anchor_bookmark_icon"), s.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const n = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (s.relButton = t.querySelector(".se-anchor-rel-btn"), s.relList = t.querySelector(".se-list-layer"), s.relPreview = t.querySelector(".se-anchor-rel-preview"), s.relButton.addEventListener("click", i.onClick_relButton.bind(this, s)), s.relList.addEventListener("click", i.onClick_relList.bind(this, s))), s.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, s)), s.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, s)), s.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, s)), s.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, s)), s.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, n)), s.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, s, n)), s.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, n)), s.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, s));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const s = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, s) ? s.substr(s.lastIndexOf("#")) : s, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, i.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), i.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
  },
  selfPathBookmark: function(e) {
    const t = this._w.location.href.replace(/\/$/, "");
    return e.indexOf("#") === 0 || e.indexOf(t) === 0 && e.indexOf("#") === (t.indexOf("#") === -1 ? t.length : t.substr(0, t.indexOf("#")).length);
  },
  _closeRelMenu: null,
  toggleRelList: function(e, t) {
    if (!t)
      this.plugins.anchor._closeRelMenu && this.plugins.anchor._closeRelMenu();
    else {
      const i = e.relButton, s = e.relList;
      this.util.addClass(i, "active"), s.style.visibility = "hidden", s.style.display = "block", this.options.rtl ? s.style.left = i.offsetLeft - s.offsetWidth - 1 + "px" : s.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", s.style.top = i.offsetTop + i.offsetHeight / 2 - s.offsetHeight / 2 + "px", s.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(n, r, u) {
        u && (n.relButton.contains(u.target) || n.relList.contains(u.target)) || (this.util.removeClass(r, "active"), n.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, s = i.getAttribute("data-command");
    if (!s) return;
    const n = e.currentRel, r = this.util.toggleClass(i, "se-checked"), u = n.indexOf(s);
    r ? u === -1 && n.push(s) : u > -1 && n.splice(u, 1), e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, s = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const n = i.querySelectorAll("button");
    for (let r = 0, u = n.length, f; r < u; r++)
      f = n[r].getAttribute("data-command"), s.indexOf(f) > -1 ? this.util.addClass(n[r], "se-checked") : this.util.removeClass(n[r], "se-checked");
    e.relPreview.title = e.relPreview.textContent = s.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const s = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (s.length === 0) return;
    const n = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), r = [];
    let u = "";
    for (let f = 0, l = s.length, _; f < l; f++)
      _ = s[f], n.test(_.textContent) && (r.push(_), u += '<li class="se-select-item" data-index="' + f + '">' + _.textContent + "</li>");
    r.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, r, u), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
  },
  _setMenuListPosition: function(e, t) {
    t.style.top = e.urlInput.offsetHeight + 1 + "px";
  },
  onKeyDownUrlInput: function(e, t) {
    switch (t.keyCode) {
      case 38:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, -1);
        break;
      case 40:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, 1);
        break;
      case 13:
        e.index > -1 && (t.preventDefault(), t.stopPropagation(), this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(e, null)));
        break;
    }
  },
  setHeaderBookmark: function(e) {
    const t = this.context.anchor.callerContext, i = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = i, t.urlInput.value = "#" + i, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const i = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, i), this.plugins.anchor.selfPathBookmark.call(this, i) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, i) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const i = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, i) && this.plugins.anchor.createHeaderList.call(this, e, t, i);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const i = e.preview, s = this.options.linkProtocol, n = this.options.linkNoPrefix, r = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(s) === 0, u = s ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, s.length))).test(s) : !1;
    t = e.linkValue = i.textContent = t ? n ? t : s && !r && !u ? s + t : r ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, s, n) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && s.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), s.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const r = s.currentRel.join(" ");
    r ? e.rel = r : e.removeAttribute("rel"), e.href = t, n ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, s = e.anchorText, n = s.value.length === 0 ? i : s.value, r = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, r, i, n, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", r;
  },
  onClick_bookmarkButton: function(e) {
    let t = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, t) ? (t = t.substr(1), e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext)) : (t = "#" + t, e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active"), e.downloadCheck.checked = !1, e.download.style.display = "none", this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, t)), e.urlInput.value = t, this.plugins.anchor.setLinkPreview.call(this, e, t), e.urlInput.focus();
  },
  onChange_newWindowCheck: function(e, t) {
    typeof e.linkDefaultRel.check_new_window == "string" && (t.target.checked ? this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_new_window)) : this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_new_window)));
  },
  onChange_downloadCheck: function(e, t) {
    t.target.checked ? (e.download.style.display = "block", e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), e.linkValue = e.preview.textContent = e.urlInput.value = e.urlInput.value.replace(/^\#+/, ""), typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_bookmark))) : (e.download.style.display = "none", typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_bookmark)));
  },
  _relMerge: function(e, t) {
    const i = e.currentRel;
    if (!t) return i.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const s = t.split(" ");
    for (let n = 0, r = s.length, u; n < r; n++)
      u = i.indexOf(s[n]), u === -1 && i.push(s[n]);
    return i.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t) return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const i = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = i.split(" "), i;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, Di = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([lt, Oi]);
    const t = e.context, i = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let s = this.setDialog(e);
    i.modal = s;
    let n = this.setController_LinkButton(e);
    i.linkController = n, s.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(s), t.element.relative.appendChild(n), e.plugins.anchor.initEvent.call(e, "link", s), i.focusElement = t.anchor.caller.link.urlInput, s = null, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let n = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + s.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = n, i;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV");
    return s.className = "se-controller se-controller-link", s.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", s;
  },
  /**
   * @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "link", this.currentControllerName === "link");
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    try {
      const t = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, !1);
      if (t === null) return;
      if (this.context.dialog.updateModal) {
        const i = this.context.link._linkAnchor.childNodes[0];
        this.setRange(i, 0, i, i.textContent.length);
      } else {
        const i = this.getSelectedElements();
        if (i.length > 1) {
          const s = this.util.createElement(i[0].nodeName);
          if (s.appendChild(t), !this.insertNode(s, null, !0)) return;
        } else if (!this.insertNode(t, null, !0)) return;
        this.setRange(t.childNodes[0], 0, t.childNodes[0], t.textContent.length);
      }
    } finally {
      this.plugins.dialog.close.call(this), this.closeLoading(), this.history.push(!1);
    }
    return !1;
  },
  /**
   * @Override core
   */
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.link.linkController) > -1 && this.controllersOff();
    else if (this.util.isAnchor(e) && e.getAttribute("data-image-link") === null)
      return this.controllerArray.indexOf(this.context.link.linkController) < 0 && this.plugins.link.call_controller.call(this, e), !0;
    return !1;
  },
  /**
   * @Override dialog
   */
  on: function(e) {
    this.plugins.anchor.on.call(this, this.context.anchor.caller.link, e);
  },
  call_controller: function(e) {
    this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = e;
    const t = this.context.link.linkController, i = t.querySelector("a");
    i.href = e.href, i.title = e.textContent, i.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const i = this.util.getChildElement(this.context.link._linkAnchor, function(n) {
          return n.childNodes.length === 0 || n.nodeType === 3;
        }, !1), s = this.util.getChildElement(this.context.link._linkAnchor, function(n) {
          return n.childNodes.length === 0 || n.nodeType === 3;
        }, !0);
        this.setRange(i, 0, s, s.textContent.length), this.nodeChange(null, null, ["A"], !1);
      } else
        this.util.removeItem(this.context.link._linkAnchor), this.context.anchor.caller.link.linkAnchor = null, this.focus(), this.history.push(!1);
      this.controllersOff();
    }
  },
  /**
   * @Override dialog
   */
  init: function() {
    this.context.link.linkController.style.display = "none", this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
  }
};
var Hi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : he, function(t, i) {
    const s = {
      name: "component",
      /**
       * @description Create a container for the resizing component and insert the element.
       * @param {Element} cover Cover element (FIGURE)
       * @param {String} className Class name of container (fixed: se-component)
       * @returns {Element} Created container element
       */
      set_container: function(n, r) {
        const u = this.util.createElement("DIV");
        return u.className = "se-component " + r, u.appendChild(n), u;
      },
      /**
       * @description Cover the target element with a FIGURE element.
       * @param {Element} element Target element
       */
      set_cover: function(n) {
        const r = this.util.createElement("FIGURE");
        return r.appendChild(n), r;
      },
      /**
       * @description Return HTML string of caption(FIGCAPTION) element
       * @returns {String}
       */
      create_caption: function() {
        const n = this.util.createElement("FIGCAPTION");
        return n.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", n;
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: s
    })), s;
  });
})(Hi);
var Hn = Hi.exports;
const It = /* @__PURE__ */ Ye(Hn);
var Ii = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : he, function(t, i) {
    const s = {
      name: "resizing",
      /**
       * @description Constructor
       * Require context properties when resizing module
          inputX: Element,
          inputY: Element,
          _container: null,
          _cover: null,
          _element: null,
          _element_w: 1,
          _element_h: 1,
          _element_l: 0,
          _element_t: 0,
          _defaultSizeX: 'auto',
          _defaultSizeY: 'auto',
          _origin_w: core.options.imageWidth === 'auto' ? '' : core.options.imageWidth,
          _origin_h: core.options.imageHeight === 'auto' ? '' : core.options.imageHeight,
          _proportionChecked: true,
          // -- select function --
          _resizing: core.options.imageResizing,
          _resizeDotHide: !core.options.imageHeightShow,
          _rotation: core.options.imageRotation,
          _onlyPercentage: core.options.imageSizeOnlyPercentage,
          _ratio: false,
          _ratioX: 1,
          _ratioY: 1
          _captionShow: true,
          // -- when used caption (_captionShow: true) --
          _caption: null,
          _captionChecked: false,
          captionCheckEl: null,
       * @param {Object} core Core object 
       */
      add: function(n) {
        const r = n.icons, u = n.context;
        u.resizing = {
          _resizeClientX: 0,
          _resizeClientY: 0,
          _resize_plugin: "",
          _resize_w: 0,
          _resize_h: 0,
          _origin_w: 0,
          _origin_h: 0,
          _rotateVertical: !1,
          _resize_direction: "",
          _move_path: null,
          _isChange: !1,
          alignIcons: {
            basic: r.align_justify,
            left: r.align_left,
            right: r.align_right,
            center: r.align_center
          }
        };
        let f = this.setController_resize(n);
        u.resizing.resizeContainer = f, u.resizing.resizeDiv = f.querySelector(".se-modal-resize"), u.resizing.resizeDot = f.querySelector(".se-resize-dot"), u.resizing.resizeDisplay = f.querySelector(".se-resize-display");
        let l = this.setController_button(n);
        u.resizing.resizeButton = l;
        let _ = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
        u.resizing.resizeButtonGroup = l.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = l.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = l.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = l.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = l.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = l.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = l.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(c) {
          c.preventDefault();
        }), _[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), _[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), l.addEventListener("click", this.onClick_resizeButton.bind(n)), u.element.relative.appendChild(f), u.element.relative.appendChild(l), f = null, l = null, _ = null;
      },
      /** resize controller, button (image, iframe, video) */
      setController_resize: function(n) {
        const r = n.util.createElement("DIV");
        return r.className = "se-controller se-resizing-container", r.style.display = "none", r.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', r;
      },
      setController_button: function(n) {
        const r = n.lang, u = n.icons, f = n.util.createElement("DIV");
        return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + u.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + u.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + u.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + u.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + u.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + u.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + u.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + u.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + u.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + u.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + u.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + u.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.remove + "</span></span></button></div>", f;
      },
      /**
       * @description Gets the width size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeX: function(n, r, u, f) {
        return r || (r = n._element), u || (u = n._cover), f || (f = n._container), r ? /%$/.test(r.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : r.style.width : "";
      },
      /**
       * @description Gets the height size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeY: function(n, r, u, f) {
        return r || (r = n._element), u || (u = n._cover), f || (f = n._container), !f || !u ? r && r.style.height || "" : this.util.getNumber(u.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? u.style.height : !/%$/.test(r.style.height) || !/%$/.test(r.style.width) ? r.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
      },
      /**
       * @description Called at the "openModify" to put the size of the current target into the size input element.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Object} pluginObj Plugin object
       */
      _module_setModifyInputSize: function(n, r) {
        const u = n._onlyPercentage && this.context.resizing._rotateVertical;
        n.proportion.checked = n._proportionChecked = n._element.getAttribute("data-proportion") !== "false";
        let f = u ? "" : this.plugins.resizing._module_getSizeX.call(this, n);
        if (f === n._defaultSizeX && (f = ""), n._onlyPercentage && (f = this.util.getNumber(f, 2)), n.inputX.value = f, r.setInputSize.call(this, "x"), !n._onlyPercentage) {
          let l = u ? "" : this.plugins.resizing._module_getSizeY.call(this, n);
          l === n._defaultSizeY && (l = ""), n._onlyPercentage && (l = this.util.getNumber(l, 2)), n.inputY.value = l;
        }
        n.inputX.disabled = !!u, n.inputY.disabled = !!u, n.proportion.disabled = !!u, r.setRatio.call(this);
      },
      /**
       * @description It is called in "setInputSize" (input tag keyupEvent), 
       * checks the value entered in the input tag, 
       * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {String} xy 'x': width, 'y': height
       */
      _module_setInputSize: function(n, r) {
        if (n._onlyPercentage) {
          r === "x" && n.inputX.value > 100 && (n.inputX.value = 100);
          return;
        }
        if (n.proportion.checked && n._ratio && /\d/.test(n.inputX.value) && /\d/.test(n.inputY.value)) {
          const u = n.inputX.value.replace(/\d+|\./g, "") || n.sizeUnit, f = n.inputY.value.replace(/\d+|\./g, "") || n.sizeUnit;
          if (u !== f) return;
          const l = u === "%" ? 2 : 0;
          r === "x" ? n.inputY.value = this.util.getNumber(n._ratioY * this.util.getNumber(n.inputX.value, l), l) + f : n.inputX.value = this.util.getNumber(n._ratioX * this.util.getNumber(n.inputY.value, l), l) + u;
        }
      },
      /**
       * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
       * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_setRatio: function(n) {
        const r = n.inputX.value, u = n.inputY.value;
        if (n.proportion.checked && /\d+/.test(r) && /\d+/.test(u)) {
          const f = r.replace(/\d+|\./g, "") || n.sizeUnit, l = u.replace(/\d+|\./g, "") || n.sizeUnit;
          if (f !== l)
            n._ratio = !1;
          else if (!n._ratio) {
            const _ = this.util.getNumber(r, 0), c = this.util.getNumber(u, 0);
            n._ratio = !0, n._ratioX = _ / c, n._ratioY = c / _;
          }
        } else
          n._ratio = !1;
      },
      /**
       * @description Revert size of element to origin size (plugin._origin_w, plugin._origin_h)
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_sizeRevert: function(n) {
        n._onlyPercentage ? n.inputX.value = n._origin_w > 100 ? 100 : n._origin_w : (n.inputX.value = n._origin_w, n.inputY.value = n._origin_h);
      },
      /**
       * @description Save the size data (element.setAttribute("data-size"))
       * Used at the "setSize" method
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_saveCurrentSize: function(n) {
        const r = this.plugins.resizing._module_getSizeX.call(this, n), u = this.plugins.resizing._module_getSizeY.call(this, n);
        n._element.setAttribute("width", r.replace("px", "")), n._element.setAttribute("height", u.replace("px", "")), n._element.setAttribute("data-size", r + "," + u), n._videoRatio && (n._videoRatio = u);
      },
      /**
       * @description Call the resizing module
       * @param {Element} targetElement Resizing target element
       * @param {string} plugin Plugin name
       * @returns {Object} Size of resizing div {w, h, t, l}
       */
      call_controller_resize: function(n, r) {
        const u = this.context.resizing, f = this.context[r];
        u._resize_plugin = r;
        const l = u.resizeContainer, _ = u.resizeDiv, c = this.util.getOffset(n, this.context.element.wysiwygFrame), m = u._rotateVertical = /^(90|270)$/.test(Math.abs(n.getAttribute("data-rotate")).toString()), x = m ? n.offsetHeight : n.offsetWidth, T = m ? n.offsetWidth : n.offsetHeight, E = c.top, z = c.left - this.context.element.wysiwygFrame.scrollLeft;
        l.style.top = E + "px", l.style.left = z + "px", l.style.width = x + "px", l.style.height = T + "px", _.style.top = "0px", _.style.left = "0px", _.style.width = x + "px", _.style.height = T + "px";
        let o = n.getAttribute("data-align") || "basic";
        o = o === "none" ? "basic" : o;
        const a = this.util.getParentElement(n, this.util.isComponent), d = this.util.getParentElement(n, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, n, d, a) || "auto", g = f._onlyPercentage && r === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, n, d, a) || "auto");
        this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[o] + " (" + h + g + ")"), u.resizeButtonGroup.style.display = f._resizing ? "" : "none";
        const b = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", p = u.resizeHandles;
        for (let S = 0, k = p.length; S < k; S++)
          p[S].style.display = b;
        if (f._resizing) {
          const S = u.rotationButtons;
          S[0].style.display = S[1].style.display = f._rotation ? "" : "none";
        }
        if (f._alignHide)
          u.alignButton.style.display = "none";
        else {
          u.alignButton.style.display = "";
          const S = u.alignMenuList;
          this.util.changeElement(u.alignButton.firstElementChild, u.alignIcons[o]);
          for (let k = 0, R = S.length; k < R; k++)
            S[k].getAttribute("data-value") === o ? this.util.addClass(S[k], "on") : this.util.removeClass(S[k], "on");
        }
        const v = u.percentageButtons, C = /%$/.test(n.style.width) && /%$/.test(a.style.width) ? this.util.getNumber(a.style.width, 0) / 100 + "" : "";
        for (let S = 0, k = v.length; S < k; S++)
          v[S].getAttribute("data-value") === C ? this.util.addClass(v[S], "active") : this.util.removeClass(v[S], "active");
        f._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(n.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), f._captionChecked = !1)) : u.captionButton.style.display = "none", l.style.display = "block";
        const y = { left: 0, top: 50 };
        this.options.iframe && (y.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, y.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, l, "bottom", y);
        const w = function() {
          this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
        };
        this.controllersOn(l, u.resizeButton, w.bind(this), n, r), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = x, u._resize_h = T;
        const M = (n.getAttribute("origin-size") || "").split(",");
        return u._origin_w = M[0] || n.naturalWidth, u._origin_h = M[1] || n.naturalHeight, {
          w: x,
          h: T,
          t: E,
          l: z
        };
      },
      _closeAlignMenu: null,
      /**
       * @description Open align submenu of module
       */
      openAlignMenu: function() {
        const n = this.context.resizing.alignButton;
        this.util.addClass(n, "on"), this.context.resizing.alignMenu.style.top = n.offsetTop + n.offsetHeight + "px", this.context.resizing.alignMenu.style.left = n.offsetLeft - n.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = (function() {
          this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
        }).bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
      },
      /**
       * @description Click event of resizing toolbar
       * Performs the action of the clicked toolbar button.
       * @param {MouseEvent} e Event object
       */
      onClick_resizeButton: function(n) {
        n.stopPropagation();
        const r = n.target, u = r.getAttribute("data-command") || r.parentNode.getAttribute("data-command");
        if (!u) return;
        const f = r.getAttribute("data-value") || r.parentNode.getAttribute("data-value"), l = this.context.resizing._resize_plugin, _ = this.context[l], c = _._element, m = this.plugins[l];
        if (n.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
          switch (u) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, c), m.setAutoSize.call(this), this.selectComponent(c, l);
              break;
            case "percent":
              let x = this.plugins.resizing._module_getSizeY.call(this, _);
              if (this.context.resizing._rotateVertical) {
                const b = c.getAttribute("data-percentage");
                b && (x = b.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, c), m.setPercentSize.call(this, f * 100, this.util.getNumber(x, 0) === null || !/%$/.test(x) ? "" : x), this.selectComponent(c, l);
              break;
            case "mirror":
              const T = c.getAttribute("data-rotate") || "0";
              let E = c.getAttribute("data-rotateX") || "", z = c.getAttribute("data-rotateY") || "";
              f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? z = z ? "" : "180" : E = E ? "" : "180", c.setAttribute("data-rotateX", E), c.setAttribute("data-rotateY", z), this.plugins.resizing._setTransForm(c, T, E, z);
              break;
            case "rotate":
              const o = this.context.resizing, a = c.getAttribute("data-rotate") * 1 + f * 1, d = this._w.Math.abs(a) >= 360 ? 0 : a;
              c.setAttribute("data-rotate", d), o._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(d).toString()), this.plugins.resizing.setTransformSize.call(this, c, null, null), this.selectComponent(c, l);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const h = f === "basic" ? "none" : f;
              m.setAlign.call(this, h, null, null, null), this.selectComponent(c, l);
              break;
            case "caption":
              const g = !_._captionChecked;
              if (m.openModify.call(this, !0), _._captionChecked = _.captionCheckEl.checked = g, m.update_image.call(this, !1, !1, !1), g) {
                const b = this.util.getChildElement(_._caption, function(p) {
                  return p.nodeType === 3;
                });
                b ? this.setRange(b, 0, b, b.textContent.length) : _._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(c, l), m.openModify.call(this, !0);
              break;
            case "revert":
              m.setOriginSize.call(this), this.selectComponent(c, l);
              break;
            case "update":
              m.openModify.call(this), this.controllersOff();
              break;
            case "delete":
              m.destroy.call(this);
              break;
          }
          this.history.push(!1);
        }
      },
      /**
       * @description Initialize the transform style (rotation) of the element.
       * @param {Element} element Target element
       */
      resetTransform: function(n) {
        const r = (n.getAttribute("data-size") || n.getAttribute("data-origin") || "").split(",");
        this.context.resizing._rotateVertical = !1, n.style.maxWidth = "", n.style.transform = "", n.style.transformOrigin = "", n.setAttribute("data-rotate", ""), n.setAttribute("data-rotateX", ""), n.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, r[0] ? r[0] : "auto", r[1] ? r[1] : "", !0);
      },
      /**
       * @description Set the transform style (rotation) of the element.
       * @param {Element} element Target element
       * @param {Number|null} width Element's width size
       * @param {Number|null} height Element's height size
       */
      setTransformSize: function(n, r, u) {
        let f = n.getAttribute("data-percentage");
        const l = this.context.resizing._rotateVertical, _ = n.getAttribute("data-rotate") * 1;
        let c = "";
        if (f && !l)
          f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
        else {
          const m = this.util.getParentElement(n, "FIGURE"), x = r || n.offsetWidth, T = u || n.offsetHeight, E = (l ? T : x) + "px", z = (l ? x : T) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, x + "px", T + "px", !0), m.style.width = E, m.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : z, l) {
            let o = x / 2 + "px " + x / 2 + "px 0", a = T / 2 + "px " + T / 2 + "px 0";
            c = _ === 90 || _ === -270 ? a : o;
          }
        }
        n.style.transformOrigin = c, this.plugins.resizing._setTransForm(n, _.toString(), n.getAttribute("data-rotateX") || "", n.getAttribute("data-rotateY") || ""), l ? n.style.maxWidth = "none" : n.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, n);
      },
      _setTransForm: function(n, r, u, f) {
        let l = (n.offsetWidth - n.offsetHeight) * (/-/.test(r) ? 1 : -1), _ = "";
        if (/[1-9]/.test(r) && (u || f))
          switch (_ = u ? "Y" : "X", r) {
            case "90":
              _ = u && f ? "X" : f ? _ : "";
              break;
            case "270":
              l *= -1, _ = u && f ? "Y" : u ? _ : "";
              break;
            case "-90":
              _ = u && f ? "Y" : u ? _ : "";
              break;
            case "-270":
              l *= -1, _ = u && f ? "X" : f ? _ : "";
              break;
            default:
              _ = "";
          }
        r % 180 === 0 && (n.style.maxWidth = ""), n.style.transform = "rotate(" + r + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (_ ? " translate" + _ + "(" + l + "px)" : "");
      },
      /**
       * @description The position of the caption is set automatically.
       * @param {Element} element Target element (not caption element)
       */
      setCaptionPosition: function(n) {
        const r = this.util.getChildElement(this.util.getParentElement(n, "FIGURE"), "FIGCAPTION");
        r && (r.style.marginTop = (this.context.resizing._rotateVertical ? n.offsetWidth - n.offsetHeight : 0) + "px");
      },
      /**
       * @description Mouse down event of resize handles
       * @param {MouseEvent} e Event object 
       */
      onMouseDown_resize_handle: function(n) {
        n.stopPropagation(), n.preventDefault();
        const r = this.context.resizing, u = r._resize_direction = n.target.classList[0];
        r._resizeClientX = n.clientX, r._resizeClientY = n.clientY, this.context.element.resizeBackground.style.display = "block", r.resizeButton.style.display = "none", r.resizeDiv.style.float = /l/.test(u) ? "right" : /r/.test(u) ? "left" : "none";
        const f = (function(c) {
          if (c.type === "keydown" && c.keyCode !== 27) return;
          const m = r._isChange;
          r._isChange = !1, this.removeDocEvent("mousemove", l), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), c.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), m && this.history.push(!1));
        }).bind(this), l = this.plugins.resizing.resizing_element.bind(this, r, u, this.context[r._resize_plugin]);
        this.addDocEvent("mousemove", l), this.addDocEvent("mouseup", f), this.addDocEvent("keydown", f);
      },
      /**
       * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
       * The size of the module's "div" is adjusted according to the mouse move event.
       * @param {Object} contextResizing "core.context.resizing" object (binding argument)
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
       * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
       * @param {MouseEvent} e Event object
       */
      resizing_element: function(n, r, u, f) {
        const l = f.clientX, _ = f.clientY;
        let c = u._element_w, m = u._element_h;
        const x = u._element_w + (/r/.test(r) ? l - n._resizeClientX : n._resizeClientX - l), T = u._element_h + (/b/.test(r) ? _ - n._resizeClientY : n._resizeClientY - _), E = u._element_h / u._element_w * x;
        /t/.test(r) && (n.resizeDiv.style.top = u._element_h - (/h/.test(r) ? T : E) + "px"), /l/.test(r) && (n.resizeDiv.style.left = u._element_w - x + "px"), /r|l/.test(r) && (n.resizeDiv.style.width = x + "px", c = x), /^(t|b)[^h]$/.test(r) ? (n.resizeDiv.style.height = E + "px", m = E) : /^(t|b)h$/.test(r) && (n.resizeDiv.style.height = T + "px", m = T), n._resize_w = c, n._resize_h = m, this.util.changeTxt(n.resizeDisplay, this._w.Math.round(c) + " x " + this._w.Math.round(m)), n._isChange = !0;
      },
      /**
       * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
       * Called at the mouse-up event registered in "onMouseDown_resize_handle".
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
       */
      cancel_controller_resize: function(n) {
        const r = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let u = this._w.Math.round(r ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(r ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!r && !/%$/.test(u)) {
          const c = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(u, 0) > c && (f = this._w.Math.round(f / u * c), u = c);
        }
        const l = this.context.resizing._resize_plugin;
        this.plugins[l].setSize.call(this, u, f, !1, n), r && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, u, f), this.selectComponent(this.context[l]._element, l);
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: s
    })), s;
  });
})(Ii);
var In = Ii.exports;
const Fi = /* @__PURE__ */ Ye(In);
var Pi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : he, function(t, i) {
    const s = {
      name: "fileManager",
      _xmlHttp: null,
      _checkMediaComponent: function(n) {
        return /IMG/i.test(n) ? !/FIGURE/i.test(n.parentElement.nodeName) || !/FIGURE/i.test(n.parentElement.parentElement.nodeName) : !0;
      },
      /**
       * @description Upload the file to the server.
       * @param {String} uploadUrl Upload server url
       * @param {Object|null} uploadHeader Request header
       * @param {FormData} formData FormData in body
       * @param {Function|null} callBack Success call back function
       * @param {Function|null} errorCallBack Error call back function
       * @example this.plugins.fileManager.upload.call(this, imageUploadUrl, this.options.imageUploadHeader, formData, this.plugins.image.callBack_imgUpload.bind(this, info), this.functions.onImageUploadError);
       */
      upload: function(n, r, u, f, l) {
        this.showLoading();
        const _ = this.plugins.fileManager, c = _._xmlHttp = this.util.getXMLHttpRequest();
        if (c.onreadystatechange = _._callBackUpload.bind(this, c, f, l), c.open("post", n, !0), r !== null && typeof r == "object" && this._w.Object.keys(r).length > 0)
          for (let m in r)
            c.setRequestHeader(m, r[m]);
        c.send(u);
      },
      _callBackUpload: function(n, r, u) {
        if (n.readyState === 4)
          if (n.status === 200)
            try {
              r(n);
            } catch (f) {
              throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + f.message + '"');
            } finally {
              this.closeLoading();
            }
          else {
            this.closeLoading();
            const f = n.responseText ? JSON.parse(n.responseText) : n;
            if (typeof u != "function" || u("", f, this)) {
              const l = "[SUNEDITOR.fileManager.upload.serverException] status: " + n.status + ", response: " + (f.errorMessage || n.responseText);
              throw this.functions.noticeOpen(l), Error(l);
            }
          }
      },
      /**
       * @description Checke the file's information and modify the tag that does not fit the format.
       * @param {String} pluginName Plugin name
       * @param {Array} tagNames Tag array to check
       * @param {Function|null} uploadEventHandler Event handler to process updated file info after checking (used in "setInfo")
       * @param {Function} modifyHandler A function to modify a tag that does not fit the format (Argument value: Tag element)
       * @param {Boolean} resizing True if the plugin is using a resizing module
       * @example 
       * const modifyHandler = function (tag) {
       *      imagePlugin.onModifyMode.call(this, tag, null);
       *      imagePlugin.openModify.call(this, true);
       *      imagePlugin.update_image.call(this, true, false, true);
       *  }.bind(this);
       *  this.plugins.fileManager.checkInfo.call(this, 'image', ['img'], this.functions.onImageUpload, modifyHandler, true);
       */
      checkInfo: function(n, r, u, f, l) {
        let _ = [];
        for (let a = 0, d = r.length; a < d; a++)
          _ = _.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(r[a] + ':not([data-se-embed="true"])')));
        const c = this.plugins.fileManager, m = this.context[n], x = m._infoList, T = c.setInfo.bind(this);
        if (_.length === x.length)
          if (this._componentsInfoReset) {
            for (let a = 0, d = _.length; a < d; a++)
              T(n, _[a], u, null, l);
            return;
          } else {
            let a = !1;
            for (let d = 0, h = x.length, g; d < h; d++)
              if (g = x[d], _.filter(function(b) {
                return g.src === b.src && g.index.toString() === b.getAttribute("data-index");
              }).length === 0) {
                a = !0;
                break;
              }
            if (!a) return;
          }
        const E = l ? this.context.resizing._resize_plugin : "";
        l && (this.context.resizing._resize_plugin = n);
        const z = [], o = [];
        for (let a = 0, d = x.length; a < d; a++)
          o[a] = x[a].index;
        for (m.__updateTags = _; _.length > 0; ) {
          const a = _.shift();
          !this.util.getParentElement(a, this.util.isMediaComponent) || !c._checkMediaComponent(a) ? (z.push(m._infoIndex), f(a)) : !a.getAttribute("data-index") || o.indexOf(a.getAttribute("data-index") * 1) < 0 ? (z.push(m._infoIndex), a.removeAttribute("data-index"), T(n, a, u, null, l)) : z.push(a.getAttribute("data-index") * 1);
        }
        for (let a = 0, d; a < x.length; a++)
          d = x[a].index, !(z.indexOf(d) > -1) && (x.splice(a, 1), typeof u == "function" && u(null, d, "delete", null, 0, this), a--);
        l && (this.context.resizing._resize_plugin = E);
      },
      /**
       * @description Create info object of file and add it to "_infoList" (this.context[pluginName]._infoList[])
       * @param {String} pluginName Plugin name 
       * @param {Element} element 
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       * @param {Object|null} file 
       * @param {Boolean} resizing True if the plugin is using a resizing module
       * @example 
       * uploadCallBack {.. file = { name: fileList[i].name, size: fileList[i].size };
       * this.plugins.fileManager.setInfo.call(this, 'image', oImg, this.functions.onImageUpload, file, true);
       */
      setInfo: function(n, r, u, f, l) {
        const _ = l ? this.context.resizing._resize_plugin : "";
        l && (this.context.resizing._resize_plugin = n);
        const c = this.plugins[n], m = this.context[n], x = m._infoList;
        let T = r.getAttribute("data-index"), E = null, z = "";
        if (f || (f = {
          name: r.getAttribute("data-file-name") || (typeof r.src == "string" ? r.src.split("/").pop() : ""),
          size: r.getAttribute("data-file-size") || 0
        }), !T || this._componentsInfoInit)
          z = "create", T = m._infoIndex++, r.setAttribute("data-index", T), r.setAttribute("data-file-name", f.name), r.setAttribute("data-file-size", f.size), E = {
            src: r.src,
            index: T * 1,
            name: f.name,
            size: f.size
          }, x.push(E);
        else {
          z = "update", T *= 1;
          for (let o = 0, a = x.length; o < a; o++)
            if (T === x[o].index) {
              E = x[o];
              break;
            }
          E || (T = m._infoIndex++, E = { index: T }, x.push(E)), E.src = r.src, E.name = r.getAttribute("data-file-name"), E.size = r.getAttribute("data-file-size") * 1;
        }
        if (E.element = r, E.delete = c.destroy.bind(this, r), E.select = (function(o) {
          o.scrollIntoView(!0), this._w.setTimeout(c.select.bind(this, o));
        }).bind(this, r), l) {
          if (!r.getAttribute("origin-size") && r.naturalWidth && r.setAttribute("origin-size", r.naturalWidth + "," + r.naturalHeight), !r.getAttribute("data-origin")) {
            const o = this.util.getParentElement(r, this.util.isMediaComponent), a = this.util.getParentElement(r, "FIGURE"), d = this.plugins.resizing._module_getSizeX.call(this, m, r, a, o), h = this.plugins.resizing._module_getSizeY.call(this, m, r, a, o);
            r.setAttribute("data-origin", d + "," + h), r.setAttribute("data-size", d + "," + h);
          }
          if (!r.style.width) {
            const o = (r.getAttribute("data-size") || r.getAttribute("data-origin") || "").split(",");
            c.onModifyMode.call(this, r, null), c.applySize.call(this, o[0], o[1]);
          }
          this.context.resizing._resize_plugin = _;
        }
        typeof u == "function" && u(r, T, z, E, --m._uploadFileLength < 0 ? 0 : m._uploadFileLength, this);
      },
      /**
       * @description Delete info object at "_infoList"
       * @param {String} pluginName Plugin name 
       * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      deleteInfo: function(n, r, u) {
        if (r >= 0) {
          const f = this.context[n]._infoList;
          for (let l = 0, _ = f.length; l < _; l++)
            if (r === f[l].index) {
              f.splice(l, 1), typeof u == "function" && u(null, r, "delete", null, 0, this);
              return;
            }
        }
      },
      /**
       * @description Reset info object and "_infoList = []", "_infoIndex = 0"
       * @param {String} pluginName Plugin name 
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      resetInfo: function(n, r) {
        const u = this.context[n];
        if (typeof r == "function") {
          const f = u._infoList;
          for (let l = 0, _ = f.length; l < _; l++)
            r(null, f[l].index, "delete", null, 0, this);
        }
        u._infoList = [], u._infoIndex = 0;
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: s
    })), s;
  });
})(Pi);
var Fn = Pi.exports;
const Ft = /* @__PURE__ */ Ye(Fn), Vi = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([lt, Oi, It, Fi, Ft]);
    const t = e.options, i = e.context, s = i.image = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      sizeUnit: t._imageSizeUnit,
      _linkElement: "",
      _altText: "",
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _v_src: { _linkValue: "" },
      svgDefaultSize: "30%",
      base64RenderIndex: 0,
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null,
      // @Override resizing properties
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "auto",
      _defaultSizeY: "auto",
      _origin_w: t.imageWidth === "auto" ? "" : t.imageWidth,
      _origin_h: t.imageHeight === "auto" ? "" : t.imageHeight,
      _proportionChecked: !0,
      _resizing: t.imageResizing,
      _resizeDotHide: !t.imageHeightShow,
      _rotation: t.imageRotation,
      _alignHide: !t.imageAlignShow,
      _onlyPercentage: t.imageSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !0,
      _captionChecked: !1,
      _caption: null,
      captionCheckEl: null
    };
    let n = this.setDialog(e);
    s.modal = n, s.imgInputFile = n.querySelector("._se_image_file"), s.imgUrlFile = n.querySelector("._se_image_url"), s.focusElement = s.imgInputFile || s.imgUrlFile, s.altText = n.querySelector("._se_image_alt"), s.captionCheckEl = n.querySelector("._se_image_check_caption"), s.previewSrc = n.querySelector("._se_tab_content_image .se-link-preview"), n.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), n.querySelector("form").addEventListener("submit", this.submit.bind(e)), s.imgInputFile && n.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(s.imgInputFile, s.imgUrlFile, s.previewSrc)), s.imgUrlFile && s.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(s.previewSrc, s._v_src, t.linkProtocol)), s.imgInputFile && s.imgUrlFile && s.imgInputFile.addEventListener("change", this._fileInputChange.bind(s));
    const r = n.querySelector(".__se__gallery");
    r && r.addEventListener("click", this._openGallery.bind(e)), s.proportion = {}, s.inputX = {}, s.inputY = {}, t.imageResizing && (s.proportion = n.querySelector("._se_image_check_proportion"), s.inputX = n.querySelector("._se_image_size_x"), s.inputY = n.querySelector("._se_image_size_y"), s.inputX.value = t.imageWidth, s.inputY.value = t.imageHeight, s.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), s.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), s.inputX.addEventListener("change", this.setRatio.bind(e)), s.inputY.addEventListener("change", this.setRatio.bind(e)), s.proportion.addEventListener("change", this.setRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), e.plugins.anchor.initEvent.call(e, "image", n.querySelector("._se_tab_content_url")), s.anchorCtx = e.context.anchor.caller.image, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content se-dialog-image", s.style.display = "none";
    let n = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const r = t.imageSizeOnlyPercentage, u = r ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      n += '<div class="se-dialog-form">', r || !t.imageHeightShow ? n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", n += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (r ? ' type="number" min="1"' : 'type="text"') + (r ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (r ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + u + (r ? ' max="100"' : "") + f + "/><label" + u + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return n += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = n, s;
  },
  _fileInputChange: function() {
    this.imgInputFile.value ? (this.imgUrlFile.setAttribute("disabled", !0), this.previewSrc.style.textDecoration = "line-through") : (this.imgUrlFile.removeAttribute("disabled"), this.previewSrc.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _openGallery: function() {
    this.callPlugin("imageGallery", this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
  },
  _setUrlInput: function(e) {
    this.altText.value = e.alt, this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = e.getAttribute("data-value") || e.src, this.imgUrlFile.focus();
  },
  _onLinkPreview: function(e, t, i) {
    const s = i.target.value.trim();
    e._linkValue = this.textContent = s ? t && s.indexOf("://") === -1 && s.indexOf("#") !== 0 ? t + s : s.indexOf("://") === -1 ? "/" + s : s : "";
  },
  /**
   * @Override @Required fileManager
   */
  fileTags: ["img"],
  /**
   * @Override core, fileManager, resizing
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.image.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "image"));
  },
  /**
   * @Override fileManager, resizing
   */
  destroy: function(e) {
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, s = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, i, s, this) === !1) return;
    let n = i.previousElementSibling || i.nextElementSibling;
    const r = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), r !== this.context.element.wysiwyg && this.util.removeItemAllParents(r, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "image", s, this.functions.onImageUpload), this.history.push(!1);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.image;
    e ? t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.imageWidth === t._defaultSizeX ? "" : this.options.imageWidth, t.inputY.value = t._origin_h = this.options.imageHeight === t._defaultSizeY ? "" : this.options.imageHeight, t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.setAttribute("multiple", "multiple")), this.plugins.anchor.on.call(this, t.anchorCtx, e);
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "image", this.currentControllerName === "image");
  },
  openTab: function(e) {
    const t = this.context.image.modal, i = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(i.tagName))
      return !1;
    const s = i.getAttribute("data-tab-link"), n = "_se_tab_content";
    let r, u, f;
    for (u = t.getElementsByClassName(n), r = 0; r < u.length; r++)
      u[r].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), r = 0; r < f.length; r++)
      this.util.removeClass(f[r], "active");
    return t.querySelector("." + n + "_" + s).style.display = "block", this.util.addClass(i, "active"), s === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : s === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (s) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + s.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let f = 0, l = e.length; f < l; f++)
      /image/i.test(e[f].type) && (i.push(e[f]), t += e[f].size);
    const s = this.options.imageUploadSizeLimit;
    if (s > 0) {
      let f = 0;
      const l = this.context.image._infoList;
      for (let _ = 0, c = l.length; _ < c; _++)
        f += l[_].size * 1;
      if (t + f > s) {
        this.closeLoading();
        const _ = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + s / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(_, { limitSize: s, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(_);
        return;
      }
    }
    const n = this.context.image;
    n._uploadFileLength = i.length;
    const u = {
      anchor: this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0),
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      alt: n._altText,
      element: n._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const f = this.functions.onImageUploadBefore(i, u, this, (function(l) {
        l && this._w.Array.isArray(l.result) ? this.plugins.image.register.call(this, u, l) : this.plugins.image.upload.call(this, u, l);
      }).bind(this));
      if (typeof f > "u") return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (i = f);
    }
    this.plugins.image.upload.call(this, u, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.image.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.image.error.call(this, t, null);
      return;
    }
    const i = this.options.imageUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let r = 0; r < s; r++)
        n.append("file-" + r, t[r]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, n, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, s, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.image.error.call(this, i.errorMessage, i) : this.plugins.image.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let s = 0, n = i.length, r; s < n; s++)
      if (r = { name: i[s].name, size: i[s].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[s].url, e.element, r);
        break;
      } else
        this.plugins.image.create_image.call(this, i[s].url, e.anchor, e.inputWidth, e.inputHeight, e.align, r, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, s, n, r, u, f) {
    try {
      if (u === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = u;
      const l = this._w.FileReader, _ = [u];
      this.context.image.inputX.value = i, this.context.image.inputY.value = s;
      for (let c = 0, m, x; c < u; c++)
        m = new l(), x = e[c], m.onload = (function(T, E, z, o, a) {
          _[a] = { result: T.result, file: o }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, E, _, z, t, i, s, n, r), this.closeLoading());
        }).bind(this, m, f, this.context.image._element, x, c), m.readAsDataURL(x);
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + l.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, s, n, r, u, f) {
    const l = this.plugins.image.update_src, _ = this.plugins.image.create_image;
    for (let c = 0, m = t.length; c < m; c++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[c].file.name), this.context.image._element.setAttribute("data-file-size", t[c].file.size), l.call(this, t[c].result, i, t[c].file)) : _.call(this, t[c].result, s, n, r, u, t[c].file, f);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e) return !1;
    const t = this.context.image;
    try {
      const i = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, i) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, i, t._altText);
    } catch (i) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + i.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  onRender_link: function(e, t) {
    return t ? (t.setAttribute("data-image-link", "image"), e.setAttribute("data-image-link", t.href), t.appendChild(e), t) : e;
  },
  /**
   * @Override resizing
   * @param {String} xy 'x': width, 'y': height
   * @param {KeyboardEvent} e Event object
   */
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    this.plugins.resizing._module_setInputSize.call(this, this.context.image, e);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.image);
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    const e = this.plugins.image, t = this.context.image, i = (function(s) {
      e.onModifyMode.call(this, s, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const n = this.util.getFormatElement(s);
      n && (t._align = n.style.textAlign || n.style.float), this.util.isAnchor(s.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, s, n, r, u) {
    const f = this.plugins.image, l = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let _ = this.util.createElement("IMG");
    _.src = e, _.alt = u, _.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, _, t ? t.cloneNode(!1) : null), l._resizing && _.setAttribute("data-proportion", l._proportionChecked);
    const c = this.plugins.component.set_cover.call(this, t), m = this.plugins.component.set_container.call(this, c, "se-image-container");
    l._captionChecked && (l._caption = this.plugins.component.create_caption.call(this), c.appendChild(l._caption)), l._element = _, l._cover = c, l._container = m, f.applySize.call(this, i, s), f.setAlign.call(this, n, _, c, m), _.onload = f._image_create_onload.bind(this, _, l.svgDefaultSize, m), this.insertComponent(m, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", _, this.functions.onImageUpload, r, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const s = this.appendFormatTag(i, null);
      s && this.setRange(s, 0, s, 0);
    }
    this.history.push(!1);
  },
  update_image: function(e, t, i) {
    const s = this.context.image;
    let n = s._element, r = s._cover, u = s._container, f = !1;
    r === null && (f = !0, n = s._element.cloneNode(!0), r = this.plugins.component.set_cover.call(this, n)), u === null ? (r = r.cloneNode(!0), n = r.querySelector("img"), f = !0, u = this.plugins.component.set_container.call(this, r, "se-image-container")) : f && (u.innerHTML = "", u.appendChild(r), s._cover = r, s._element = n, f = !1);
    let l;
    const _ = this.util.isNumber(s.inputX.value) ? s.inputX.value + s.sizeUnit : s.inputX.value, c = this.util.isNumber(s.inputY.value) ? s.inputY.value + s.sizeUnit : s.inputY.value;
    /%$/.test(n.style.width) ? l = _ !== u.style.width || c !== u.style.height : l = _ !== n.style.width || c !== n.style.height, n.alt = s._altText;
    let m = !1;
    s._captionChecked ? s._caption || (s._caption = this.plugins.component.create_caption.call(this), r.appendChild(s._caption), m = !0) : s._caption && (this.util.removeItem(s._caption), s._caption = null, m = !0);
    let x = null;
    const T = this.plugins.anchor.createAnchor.call(this, s.anchorCtx, !0);
    if (T)
      s._linkElement !== T || f && !u.contains(T) ? (s._linkElement = T.cloneNode(!1), r.insertBefore(this.plugins.image.onRender_link.call(this, n, s._linkElement), s._caption), x = s._element) : s._linkElement.setAttribute("data-image-link", "image");
    else if (s._linkElement !== null) {
      const z = n;
      if (z.setAttribute("data-image-link", ""), r.contains(s._linkElement)) {
        const o = z.cloneNode(!0);
        r.removeChild(s._linkElement), r.insertBefore(o, s._caption), s._element = n = o;
      }
    }
    let E = null;
    if (f) {
      if (E = this.util.isRangeFormatElement(s._element.parentNode) || this.util.isWysiwygDiv(s._element.parentNode) ? s._element : this.util.isAnchor(s._element.parentNode) ? s._element.parentNode : this.util.getFormatElement(s._element) || s._element, this.util.getParentElement(s._element, this.util.isNotCheckingNode))
        E = x ? T : s._element, E.parentNode.replaceChild(u, E);
      else if (this.util.isListCell(E)) {
        const z = this.util.getParentElement(s._element, function(o) {
          return o.parentNode === E;
        });
        E.insertBefore(u, z), this.util.removeItem(s._element), this.util.removeEmptyNode(z, null, !0);
      } else if (this.util.isFormatElement(E)) {
        const z = this.util.getParentElement(s._element, function(o) {
          return o.parentNode === E;
        });
        E = this.util.splitElement(E, z), E.parentNode.insertBefore(u, E), this.util.removeItem(s._element), this.util.removeEmptyNode(E, null, !0), E.children.length === 0 && (E.innerHTML = this.util.htmlRemoveWhiteSpace(E.innerHTML));
      } else if (this.util.isFormatElement(E.parentNode)) {
        const z = E.parentNode;
        z.parentNode.insertBefore(u, E.previousSibling ? z.nextElementSibling : z), s.__updateTags.map(function(o) {
          return E.contains(o);
        }).length === 0 && this.util.removeItem(E);
      } else
        E = this.util.isFigures(E.parentNode) ? E.parentNode : E, E.parentNode.replaceChild(u, E);
      n = u.querySelector("img"), s._element = n, s._cover = r, s._container = u;
    }
    x && (f ? (this.util.removeItem(x), this.util.getListChildren(T, function(z) {
      return /IMG/i.test(z.tagName);
    }).length === 0 && this.util.removeItem(T)) : this.util.removeItem(T)), (m || !s._onlyPercentage && l) && !e && (/\d+/.test(n.style.height) || this.context.resizing._rotateVertical && s._captionChecked) && (/%$/.test(s.inputX.value) || /%$/.test(s.inputY.value) ? this.plugins.resizing.resetTransform.call(this, n) : this.plugins.resizing.setTransformSize.call(this, n, this.util.getNumber(s.inputX.value, 0), this.util.getNumber(s.inputY.value, 0))), s._resizing && (n.setAttribute("data-proportion", s._proportionChecked), l && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, n, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", n, this.functions.onImageUpload, null, !0), t && this.selectComponent(n, "image"), i || this.history.push(!1);
  },
  update_src: function(e, t, i) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, i, !0)), this.selectComponent(t, "image");
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    if (!e) return;
    const i = this.context.image;
    i._linkElement = i.anchorCtx.linkAnchor = this.util.isAnchor(e.parentNode) ? e.parentNode : null, i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._caption = this.util.getChildElement(i._cover, "FIGCAPTION"), i._align = e.getAttribute("data-align") || e.style.float || "none", e.style.float = "", this.plugins.anchor.setCtx(i._linkElement, i.anchorCtx), t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let s = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, r;
    s ? (s = s.split(","), n = s[0], r = s[1]) : t && (n = t.w, r = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = r || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.image;
    t.imgUrlFile && (t._v_src._linkValue = t.previewSrc.textContent = t.imgUrlFile.value = t._element.src), t._altText = t.altText.value = t._element.alt, (t.modal.querySelector('input[name="suneditor_image_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = !0, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked = !!t._caption, t._resizing && this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.image), e || this.plugins.dialog.open.call(this, "image", !0);
  },
  /**
   * @Override fileManager
   */
  applySize: function(e, t) {
    const i = this.context.image;
    return e || (e = i.inputX.value || this.options.imageWidth), t || (t = i.inputY.value || this.options.imageHeight), i._onlyPercentage && e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
  },
  /**
   * @Override resizing
   */
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
  },
  /**
   * @Override resizing
   */
  setSize: function(e, t, i, s) {
    const n = this.context.image, r = /^(rw|lw)$/.test(s) && /\d+/.test(n._element.style.height);
    /^(th|bh)$/.test(s) && /\d+/.test(n._element.style.width) || (n._element.style.width = this.util.isNumber(e) ? e + n.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), r || (n._element.style.height = this.util.isNumber(t) ? t + n.sizeUnit : /%$/.test(t) ? "" : t), n._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
  },
  /**
   * @Override resizing
   */
  setAutoSize: function() {
    const e = this.context.image;
    e._caption && (e._caption.style.marginTop = ""), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this), e._element.style.maxWidth = "", e._element.style.width = "", e._element.style.height = "", e._cover.style.width = "", e._cover.style.height = "", this.plugins.image.setAlign.call(this, null, null, null, null), e._element.setAttribute("data-percentage", "auto,auto"), this.plugins.resizing._module_saveCurrentSize.call(this, e);
  },
  /**
   * @Override resizing
   */
  setOriginSize: function() {
    const e = this.context.image;
    e._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this);
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], s = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(s) || !/\d/.test(s)) ? this.plugins.image.setPercentSize.call(this, i, s) : this.plugins.image.setSize.call(this, i, s), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const s = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = s ? t : "", i._element.style.width = "100%", i._element.style.height = s ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  /**
   * @Override resizing
   */
  cancelPercentAttr: function() {
    const e = this.context.image;
    e._cover.style.width = "", e._cover.style.height = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.image._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null);
  },
  /**
   * @Override resizing
   */
  setAlign: function(e, t, i, s) {
    const n = this.context.image;
    e || (e = n._align), t || (t = n._element), i || (i = n._cover), s || (s = n._container), /%$/.test(t.style.width) && e === "center" ? (s.style.minWidth = "100%", i.style.width = s.style.width) : (s.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(s, "__se__float-" + e) || (this.util.removeClass(s, n._floatClassRegExp), this.util.addClass(s, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, Ui = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([lt, It, Fi, Ft]);
    const t = e.options, i = e.context, s = i.video = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      sizeUnit: t._videoSizeUnit,
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _youtubeQuery: t.youtubeQuery,
      _vimeoQuery: t.vimeoQuery,
      _videoRatio: t.videoRatio * 100 + "%",
      _defaultRatio: t.videoRatio * 100 + "%",
      _linkValue: "",
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null,
      // @Override resizing properties
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "100%",
      _defaultSizeY: t.videoRatio * 100 + "%",
      _origin_w: t.videoWidth === "100%" ? "" : t.videoWidth,
      _origin_h: t.videoHeight === "56.25%" ? "" : t.videoHeight,
      _proportionChecked: !0,
      _resizing: t.videoResizing,
      _resizeDotHide: !t.videoHeightShow,
      _rotation: t.videoRotation,
      _alignHide: !t.videoAlignShow,
      _onlyPercentage: t.videoSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !1
    };
    let n = this.setDialog(e);
    s.modal = n, s.videoInputFile = n.querySelector("._se_video_file"), s.videoUrlFile = n.querySelector(".se-input-url"), s.focusElement = s.videoUrlFile || s.videoInputFile, s.preview = n.querySelector(".se-link-preview"), n.querySelector("form").addEventListener("submit", this.submit.bind(e)), s.videoInputFile && n.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(s.videoInputFile, s.videoUrlFile, s.preview)), s.videoInputFile && s.videoUrlFile && s.videoInputFile.addEventListener("change", this._fileInputChange.bind(s)), s.videoUrlFile && s.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(s.preview, s, t.linkProtocol)), s.proportion = {}, s.videoRatioOption = {}, s.inputX = {}, s.inputY = {}, t.videoResizing && (s.proportion = n.querySelector("._se_video_check_proportion"), s.videoRatioOption = n.querySelector(".se-video-ratio"), s.inputX = n.querySelector("._se_video_size_x"), s.inputY = n.querySelector("._se_video_size_y"), s.inputX.value = t.videoWidth, s.inputY.value = t.videoHeight, s.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), s.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), s.inputX.addEventListener("change", this.setRatio.bind(e)), s.inputY.addEventListener("change", this.setRatio.bind(e)), s.proportion.addEventListener("change", this.setRatio.bind(e)), s.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content", s.style.display = "none";
    let n = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const r = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, f = t.videoSizeOnlyPercentage, l = f ? ' style="display: none !important;"' : "", _ = t.videoHeightShow ? "" : ' style="display: none !important;"', c = t.videoRatioShow ? "" : ' style="display: none !important;"', m = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      n += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + _ + ">" + i.dialogBox.height + '</label><label class="size-h"' + c + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + m + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + _ + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + c + ">", _ || (n += '<option value=""> - </option>');
      for (let x = 0, T = r.length; x < T; x++)
        n += '<option value="' + r[x].value + '"' + (u.toString() === r[x].value.toString() ? " selected" : "") + ">" + r[x].name + "</option>";
      n += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + l + m + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return n += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = n, s;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const s = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(s) ? (e._linkValue = s, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = s ? t && s.indexOf("://") === -1 && s.indexOf("#") !== 0 ? t + s : s.indexOf("://") === -1 ? "/" + s : s : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (t)
      for (let i in t)
        this.util.hasOwn(t, i) && e.setAttribute(i, t[i]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (t)
      for (let i in t)
        this.util.hasOwn(t, i) && e.setAttribute(i, t[i]);
  },
  createIframeTag: function() {
    const e = this.util.createElement("IFRAME");
    return this.plugins.video._setIframeAttrs.call(this, e), e;
  },
  /**
   * @Override @Required fileManager
   */
  fileTags: ["iframe", "video"],
  /**
   * @Override core, resizing, fileManager
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.video.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "video"));
  },
  /**
   * @Override fileManager, resizing
   */
  destroy: function(e) {
    const t = e || this.context.video._element, i = this.context.video._container, s = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, i, s, this) === !1) return;
    let n = i.previousElementSibling || i.nextElementSibling;
    const r = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), r !== this.context.element.wysiwyg && this.util.removeItemAllParents(r, function(u) {
      return u.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "video", s, this.functions.onVideoUpload), this.history.push(!1);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.video;
    e ? t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.videoWidth === t._defaultSizeX ? "" : this.options.videoWidth, t.inputY.value = t._origin_h = this.options.videoHeight === t._defaultSizeY ? "" : this.options.videoHeight, t.proportion.disabled = !0, t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.setAttribute("multiple", "multiple")), t._resizing && this.plugins.video.setVideoRatioSelect.call(this, t._origin_h || t._defaultRatio);
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "video", this.currentControllerName === "video");
  },
  setVideoRatio: function(e) {
    const t = this.context.video, i = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = i ? i * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = i ? i * 100 + "%" : "", t.inputY.value = "";
  },
  /**
   * @Override resizing
   * @param {String} xy 'x': width, 'y': height
   * @param {KeyboardEvent} e Event object
   */
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    const i = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, i, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || i._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, i = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), i.setup_url.call(this, t._linkValue));
    } catch (s) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + s.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let u = 0, f = e.length; u < f; u++)
      /video/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const s = this.options.videoUploadSizeLimit;
    if (s > 0) {
      let u = 0;
      const f = this.context.video._infoList;
      for (let l = 0, _ = f.length; l < _; l++)
        u += f[l].size * 1;
      if (t + u > s) {
        this.closeLoading();
        const l = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + s / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(l, { limitSize: s, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(l);
        return;
      }
    }
    const n = this.context.video;
    n._uploadFileLength = i.length;
    const r = {
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const u = this.functions.onVideoUploadBefore(i, r, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, r, f) : this.plugins.video.upload.call(this, r, f);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (i = u);
    }
    this.plugins.video.upload.call(this, r, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.video.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.video.error.call(this, t, null);
      return;
    }
    const i = this.options.videoUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let r = 0; r < s; r++)
        n.append("file-" + r, t[r]);
      this.plugins.fileManager.upload.call(this, i, this.options.videoUploadHeader, n, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.video.error.call(this, i.errorMessage, i) : this.plugins.video.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result, s = this.plugins.video.createVideoTag.call(this);
    for (let n = 0, r = i.length, u; n < r; n++)
      u = { name: i[n].name, size: i[n].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : s.cloneNode(!1), i[n].url, e.inputWidth, e.inputHeight, e.align, u, e.isUpdate);
    this.closeLoading();
  },
  setup_url: function(e) {
    try {
      const t = this.context.video;
      if (e || (e = t._linkValue), !e || /^<iframe.*\/iframe>$/.test(e) && (e = new this._w.DOMParser().parseFromString(e, "text/html").querySelector("iframe").src, e.length === 0))
        return !1;
      if (/youtu\.?be/.test(e)) {
        if (/^http/.test(e) || (e = "https://" + e), e = e.replace("watch?v=", ""), /^\/\/.+\/embed\//.test(e) || (e = e.replace(e.match(/\/\/.+\//)[0], "//www.youtube.com/embed/").replace("&", "?&")), t._youtubeQuery.length > 0)
          if (/\?/.test(e)) {
            const i = e.split("?");
            e = i[0] + "?" + t._youtubeQuery + "&" + i[1];
          } else
            e += "?" + t._youtubeQuery;
      } else if (/vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1), t._vimeoQuery.length > 0))
        if (/\?/.test(e)) {
          const i = e.split("?");
          e = i[0] + "?" + t._vimeoQuery + "&" + i[1];
        } else
          e += "?" + t._vimeoQuery;
      this.plugins.video.create_video.call(this, this.plugins.video[!/embed|iframe|player|\/e\/|\.php|\.html?/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, i, s, n, r, u) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let l = null, _ = null, c = !1;
    if (u) {
      if (e = f._element, e.src !== t) {
        c = !0;
        const z = /youtu\.?be/.test(t), o = /vimeo\.com/.test(t);
        if ((z || o) && !/^iframe$/i.test(e.nodeName)) {
          const a = this.plugins.video.createIframeTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), f._element = e = a;
        } else if (!z && !o && !/^video$/i.test(e.nodeName)) {
          const a = this.plugins.video.createVideoTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), f._element = e = a;
        } else
          e.src = t;
      }
      _ = f._container, l = this.util.getParentElement(e, "FIGURE");
    } else
      c = !0, e.src = t, f._element = e, l = this.plugins.component.set_cover.call(this, e), _ = this.plugins.component.set_container.call(this, l, "se-video-container");
    f._cover = l, f._container = _;
    const m = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (s || f._videoRatio), x = !u || m;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let T = !1;
    x && (T = this.plugins.video.applySize.call(this)), T && n === "center" || this.plugins.video.setAlign.call(this, null, e, l, _);
    let E = !0;
    if (u)
      f._resizing && this.context.resizing._rotateVertical && x && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (E = this.insertComponent(_, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const z = this.appendFormatTag(_, null);
      z && this.setRange(z, 0, z, 0);
    }
    E && (c && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, r, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const s = e;
    t._element = e = e.cloneNode(!0);
    const n = t._cover = this.plugins.component.set_cover.call(this, e), r = t._container = this.plugins.component.set_container.call(this, n, "se-video-container");
    try {
      const u = i.querySelector("figcaption");
      let f = null;
      u && (f = this.util.createElement("DIV"), f.innerHTML = u.innerHTML, this.util.removeItem(u));
      const l = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, l[0] || s.style.width || s.width || "", l[1] || s.style.height || s.height || "");
      const _ = this.util.getFormatElement(s);
      if (_ && (t._align = _.style.textAlign || _.style.float), this.plugins.video.setAlign.call(this, null, e, n, r), this.util.getParentElement(s, this.util.isNotCheckingNode))
        s.parentNode.replaceChild(r, s);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(s, function(m) {
          return m.parentNode === i;
        });
        i.insertBefore(r, c), this.util.removeItem(s), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(s, function(m) {
          return m.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(r, i), this.util.removeItem(s), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(r, i);
      f && i.parentNode.insertBefore(f, r.nextElementSibling);
    } catch (u) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", u);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    const i = this.context.video;
    i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let s = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, r;
    s ? (s = s.split(","), n = s[0], r = s[1]) : t && (n = t.w, r = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = r || e.style.height || e.height || "";
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const i = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, i) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(i, 2) : i);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const i = this.context.video, s = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let n = 0, r = s.length; n < r; n++)
      s[n].value === e ? (t = s[n].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : s[n].selected = !1;
    return t;
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "video", ["iframe", "video"], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "video", this.functions.onVideoUpload);
  },
  /**
   * @Override fileManager
   */
  applySize: function(e, t) {
    const i = this.context.video;
    return e || (e = i.inputX.value || this.options.videoWidth), t || (t = i.inputY.value || this.options.videoHeight), i._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(i._videoRatio) ? i._videoRatio : i._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || i._videoRatio || i._defaultRatio, !1), !1);
  },
  /**
   * @Override resizing
   */
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
  },
  /**
   * @Override resizing
   */
  setSize: function(e, t, i, s) {
    const n = this.context.video, r = /^(rw|lw)$/.test(s), u = /^(th|bh)$/.test(s);
    u || (e = this.util.getNumber(e, 0)), r || (t = this.util.isNumber(t) ? t + n.sizeUnit : t || ""), e = e ? e + n.sizeUnit : "", u || (n._element.style.width = e), r || (n._cover.style.paddingBottom = n._cover.style.height = t), !u && !/%$/.test(e) && (n._cover.style.width = e, n._container.style.width = ""), !r && !/%$/.test(t) ? n._element.style.height = t : n._element.style.height = "", i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
  },
  /**
   * @Override resizing
   */
  setAutoSize: function() {
    this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
  },
  /**
   * @Override resizing
   */
  setOriginSize: function(e) {
    const t = this.context.video;
    t._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, t._element), this.plugins.video.cancelPercentAttr.call(this);
    const i = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (i) {
      const s = i[0], n = i[1];
      t._onlyPercentage || /%$/.test(s) && (/%$/.test(n) || !/\d/.test(n)) ? this.plugins.video.setPercentSize.call(this, s, n) : this.plugins.video.setSize.call(this, s, n), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.video;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || i._defaultRatio, i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = t, i._cover.style.paddingBottom = t, i._element.style.width = "100%", i._element.style.height = "100%", i._element.style.maxWidth = "", i._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  /**
   * @Override resizing
   */
  cancelPercentAttr: function() {
    const e = this.context.video;
    e._cover.style.width = "", e._cover.style.height = "", e._cover.style.paddingBottom = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.video._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null);
  },
  /**
   * @Override resizing
   */
  setAlign: function(e, t, i, s) {
    const n = this.context.video;
    e || (e = n._align), t || (t = n._element), i || (i = n._cover), s || (s = n._container), /%$/.test(t.style.width) && e === "center" ? (s.style.minWidth = "100%", i.style.width = s.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (s.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(s, "__se__float-" + e) || (this.util.removeClass(s, n._floatClassRegExp), this.util.addClass(s, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, Wi = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([lt, It, Ft]);
    const t = e.context, i = t.audio = {
      _infoList: [],
      // @Override fileManager
      _infoIndex: 0,
      // @Override fileManager
      _uploadFileLength: 0,
      // @Override fileManager
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      targetSelect: null,
      _origin_w: e.options.audioWidth,
      _origin_h: e.options.audioHeight,
      _linkValue: "",
      // @require @Override component
      _element: null,
      _cover: null,
      _container: null
    };
    let s = this.setDialog(e);
    i.modal = s, i.audioInputFile = s.querySelector("._se_audio_files"), i.audioUrlFile = s.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = s.querySelector(".se-link-preview");
    let n = this.setController(e);
    i.controller = n, s.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && s.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), n.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(s), t.element.relative.appendChild(n), s = null, n = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content", s.style.display = "none";
    let n = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = n, s;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV");
    return s.className = "se-controller se-controller-link", s.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", s;
  },
  // Disable url input when uploading files
  _fileInputChange: function() {
    this.audioInputFile.value ? (this.audioUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.audioUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  // Disable url input when uploading files
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  // create new audio tag
  _createAudioTag: function() {
    const e = this.util.createElement("AUDIO");
    this.plugins.audio._setTagAttrs.call(this, e);
    const t = this.context.audio._origin_w, i = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + i), e.style.cssText = (t ? "width:" + t + "; " : "") + (i ? "height:" + i + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (t)
      for (let i in t)
        this.util.hasOwn(t, i) && e.setAttribute(i, t[i]);
  },
  _onLinkPreview: function(e, t, i) {
    const s = i.target.value.trim();
    e._linkValue = this.textContent = s ? t && s.indexOf("://") === -1 && s.indexOf("#") !== 0 ? t + s : s.indexOf("://") === -1 ? "/" + s : s : "";
  },
  /**
   * @Required @Override fileManager
   */
  fileTags: ["audio"],
  /**
   * @Override core, fileManager, resizing
   * @description It is called from core.selectComponent.
   * @param {Element} element Target element
   */
  select: function(e) {
    this.plugins.audio.onModifyMode.call(this, e);
  },
  /**
   * @Override fileManager, resizing 
   */
  destroy: function(e) {
    e = e || this.context.audio._element;
    const t = this.util.getParentElement(e, this.util.isComponent) || e, i = e.getAttribute("data-index") * 1;
    if (typeof this.functions.onAudioDeleteBefore == "function" && this.functions.onAudioDeleteBefore(e, t, i, this) === !1) return;
    const s = t.previousElementSibling || t.nextElementSibling, n = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), n !== this.context.element.wysiwyg && this.util.removeItemAllParents(n, function(r) {
      return r.childNodes.length === 0;
    }, null), this.focusEdge(s), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
  },
  /**
   * @Override fileManager
   */
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "audio", ["audio"], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), !1);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "audio", this.functions.onAudioUpload);
  },
  /**
   * @Required @Override dialog
   */
  on: function(e) {
    const t = this.context.audio;
    e ? t._element ? (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src, t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple")) : t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple") : (this.plugins.audio.init.call(this), t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.setAttribute("multiple", "multiple"));
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "audio", this.currentControllerName === "audio");
  },
  submit: function(e) {
    const t = this.context.audio;
    e.preventDefault(), e.stopPropagation();
    try {
      t.audioInputFile && t.audioInputFile.files.length > 0 ? (this.showLoading(), this.plugins.audio.submitAction.call(this, t.audioInputFile.files)) : t.audioUrlFile && t._linkValue.length > 0 && (this.showLoading(), this.plugins.audio.setupUrl.call(this, t._linkValue));
    } catch (i) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + i.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let u = 0, f = e.length; u < f; u++)
      /audio/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const s = this.options.audioUploadSizeLimit;
    if (s > 0) {
      let u = 0;
      const f = this.context.audio._infoList;
      for (let l = 0, _ = f.length; l < _; l++)
        u += f[l].size * 1;
      if (t + u > s) {
        this.closeLoading();
        const l = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + s / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(l, { limitSize: s, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(l);
        return;
      }
    }
    const n = this.context.audio;
    n._uploadFileLength = i.length;
    const r = {
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const u = this.functions.onAudioUploadBefore(i, r, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, r, f) : this.plugins.audio.upload.call(this, r, f);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (i = u);
    }
    this.plugins.audio.upload.call(this, r, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.audio.exception] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.audio.error.call(this, t, null);
      return;
    }
    const i = this.options.audioUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length, n = new FormData();
    for (let r = 0; r < s; r++)
      n.append("file-" + r, t[r]);
    this.plugins.fileManager.upload.call(this, i, this.options.audioUploadHeader, n, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.audio.error.call(this, i.errorMessage, i) : this.plugins.audio.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let s = 0, n = i.length, r, u; s < n; s++)
      e.isUpdate ? u = e.element : u = this.plugins.audio._createAudioTag.call(this), r = { name: i[s].name, size: i[s].size }, this.plugins.audio.create_audio.call(this, u, i[s].url, r, e.isUpdate);
    this.closeLoading();
  },
  setupUrl: function(e) {
    try {
      if (e.length === 0) return !1;
      this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), e, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_audio: function(e, t, i, s) {
    const n = this.context.audio;
    if (s)
      if (n._element && (e = n._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const r = this.plugins.component.set_cover.call(this, e), u = this.plugins.component.set_container.call(this, r, "");
      if (!this.insertComponent(u, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const f = this.appendFormatTag(u, null);
        f && this.setRange(f, 0, f, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), s && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const s = e;
    t._element = e = e.cloneNode(!1);
    const n = this.plugins.component.set_cover.call(this, e), r = this.plugins.component.set_container.call(this, n, "se-audio-container");
    try {
      if (this.util.getParentElement(s, this.util.isNotCheckingNode))
        s.parentNode.replaceChild(r, s);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(s, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(r, u), this.util.removeItem(s), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(s, function(f) {
          return f.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(r, i), this.util.removeItem(s), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(r, i);
    } catch (u) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", u);
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, null, !1), this.plugins.audio.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e) {
    const t = this.context.audio;
    this.setControllerPosition(t.controller, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t.controller, e, this.plugins.audio.onControllerOff.bind(this, e), "audio"), this.util.addClass(e, "active"), t._element = e, t._cover = this.util.getParentElement(e, "FIGURE"), t._container = this.util.getParentElement(e, this.util.isComponent);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  openModify: function(e) {
    if (this.context.audio.audioUrlFile) {
      const t = this.context.audio;
      t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src;
    }
    e || this.plugins.dialog.open.call(this, "audio", !0);
  },
  onClick_controller: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command");
    t && (e.preventDefault(), /update/.test(t) ? this.plugins.audio.openModify.call(this, !1) : this.plugins.audio.destroy.call(this, this.context.audio._element), this.controllersOff());
  },
  onControllerOff: function(e) {
    this.util.removeClass(e, "active"), this.context.audio.controller.style.display = "none";
  },
  /**
   * @Required @Override dialog
   */
  init: function() {
    if (this.context.dialog.updateModal) return;
    const e = this.context.audio;
    e.audioInputFile && (e.audioInputFile.value = ""), e.audioUrlFile && (e._linkValue = e.preview.textContent = e.audioUrlFile.value = ""), e.audioInputFile && e.audioUrlFile && (e.audioUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._element = null;
  }
}, ei = "https://katex.org/docs/supported.html", Zi = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([lt]);
    const t = e.context;
    t.math = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      previewElement: null,
      fontSizeElement: null,
      defaultFontSize: "",
      _mathExp: null
    };
    let i = this.setDialog(e);
    t.math.modal = i, t.math.focusElement = i.querySelector(".se-math-exp"), t.math.previewElement = i.querySelector(".se-math-preview"), t.math.fontSizeElement = i.querySelector(".se-math-size"), t.math.focusElement.addEventListener("paste", function(n) {
      typeof e.functions.onPasteMath == "function" && e.functions.onPasteMath(n, e);
    }, !1), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", (function(n) {
      this.fontSize = n.target.value;
    }).bind(t.math.previewElement.style), !1);
    let s = this.setController_MathButton(e);
    t.math.mathController = s, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), s.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(s), i = null, s = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.options.mathFontSize;
    let n = s[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let r = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + ei + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let u = 0, f = s.length, l; u < f; u++)
      l = s[u], l.default && (n = l.value), r += '<option value="' + l.value + '"' + (l.default ? " selected" : "") + ">" + l.text + "</option>";
    return r += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = n, i.innerHTML = r, i;
  },
  /** modify controller button */
  setController_MathButton: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-controller se-controller-link", i.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", i;
  },
  /**
   * @Required @Override dialog
   */
  open: function() {
    this.plugins.dialog.open.call(this, "math", this.currentControllerName === "math");
  },
  /**
   * @Override core - managedTagsInfo
   */
  managedTags: function() {
    return {
      className: "katex",
      method: function(e) {
        if (!e.getAttribute("data-exp") || !this.options.katex) return;
        const t = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(e.getAttribute("data-exp"))));
        e.innerHTML = t.querySelector(".katex").innerHTML, e.setAttribute("contenteditable", !1);
      }
    };
  },
  _renderer: function(e) {
    let t = "";
    try {
      this.util.removeClass(this.context.math.focusElement, "se-error"), t = this.options.katex.src.renderToString(e, { throwOnError: !0, displayMode: !0 });
    } catch (i) {
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + ei + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
    }
    return t;
  },
  _renderMathExp: function(e, t) {
    e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t.target.value);
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    const t = (function() {
      if (this.context.math.focusElement.value.trim().length === 0) return !1;
      const i = this.context.math, s = i.focusElement.value, n = i.previewElement.querySelector(".katex");
      if (!n) return !1;
      if (n.className = "__se__katex " + n.className, n.setAttribute("contenteditable", !1), n.setAttribute("data-exp", this.util.HTMLEncoder(s)), n.setAttribute("data-font-size", i.fontSizeElement.value), n.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const r = this.util.getParentElement(i._mathExp, ".katex");
        r.parentNode.replaceChild(n, r), this.setRange(n, 0, n, 1);
      } else {
        const r = this.getSelectedElements();
        if (r.length > 1) {
          const f = this.util.createElement(r[0].nodeName);
          if (f.appendChild(n), !this.insertNode(f, null, !0)) return !1;
        } else if (!this.insertNode(n, null, !0)) return !1;
        const u = this.util.createTextNode(this.util.zeroWidthSpace);
        n.parentNode.insertBefore(u, n.nextSibling), this.setRange(n, 0, n, 1);
      }
      return i.focusElement.value = "", i.fontSizeElement.value = "1em", i.previewElement.style.fontSize = "1em", i.previewElement.innerHTML = "", !0;
    }).bind(this);
    try {
      t() && (this.plugins.dialog.close.call(this), this.history.push(!1));
    } catch {
      this.plugins.dialog.close.call(this);
    } finally {
      this.closeLoading();
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.math.mathController) > -1 && this.controllersOff();
    else if (e.getAttribute("data-exp"))
      return this.controllerArray.indexOf(this.context.math.mathController) < 0 && (this.setRange(e, 0, e, 1), this.plugins.math.call_controller.call(this, e)), !0;
    return !1;
  },
  on: function(e) {
    if (!e)
      this.plugins.math.init.call(this);
    else {
      const t = this.context.math;
      if (t._mathExp) {
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), s = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = s, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = s;
      }
    }
  },
  call_controller: function(e) {
    this.context.math._mathExp = e;
    const t = this.context.math.mathController;
    this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "math");
  },
  onClick_mathController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    t && (e.preventDefault(), /update/.test(t) ? (this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute("data-exp")), this.plugins.dialog.open.call(this, "math", !0)) : (this.util.removeItem(this.context.math._mathExp), this.context.math._mathExp = null, this.focus(), this.history.push(!1)), this.controllersOff());
  },
  init: function() {
    const e = this.context.math;
    e.mathController.style.display = "none", e._mathExp = null, e.focusElement.value = "", e.previewElement.innerHTML = "";
  }
};
var qi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : he, function(t, i) {
    const s = {
      name: "fileBrowser",
      _xmlHttp: null,
      _loading: null,
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(n) {
        const r = n.context;
        r.fileBrowser = {
          _closeSignal: !1,
          area: null,
          header: null,
          tagArea: null,
          body: null,
          list: null,
          tagElements: null,
          items: [],
          selectedTags: [],
          selectorHandler: null,
          contextPlugin: "",
          columnSize: 4
        };
        let u = n.util.createElement("DIV");
        u.className = "se-file-browser sun-editor-common";
        let f = n.util.createElement("DIV");
        f.className = "se-file-browser-back";
        let l = n.util.createElement("DIV");
        l.className = "se-file-browser-inner", l.innerHTML = this.set_browser(n), u.appendChild(f), u.appendChild(l), this._loading = u.querySelector(".se-loading-box"), r.fileBrowser.area = u, r.fileBrowser.header = l.querySelector(".se-file-browser-header"), r.fileBrowser.titleArea = l.querySelector(".se-file-browser-title"), r.fileBrowser.tagArea = l.querySelector(".se-file-browser-tags"), r.fileBrowser.body = l.querySelector(".se-file-browser-body"), r.fileBrowser.list = l.querySelector(".se-file-browser-list"), r.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(n)), r.fileBrowser.list.addEventListener("click", this.onClickFile.bind(n)), l.addEventListener("mousedown", this._onMouseDown_browser.bind(n)), l.addEventListener("click", this._onClick_browser.bind(n)), r.element.relative.appendChild(u), u = null, f = null, l = null;
      },
      set_browser: function(n) {
        const r = n.lang;
        return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + r.dialogBox.close + '" aria-label="' + r.dialogBox.close + '">' + n.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
      },
      /**
       * @description Event to control the behavior of closing the browser
       * @param {MouseEvent} e Event object
       * @private
       */
      _onMouseDown_browser: function(n) {
        /se-file-browser-inner/.test(n.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
      },
      /**
       * @description Event to close the window when the outside area of the browser or close button is click
       * @param {MouseEvent} e Event object
       * @private
       */
      _onClick_browser: function(n) {
        n.stopPropagation(), (/close/.test(n.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
      },
      /**
       * @description Open a file browser plugin
       * @param {String} pluginName Plugin name using the file browser
       * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
       */
      open: function(n, r) {
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(_) {
          /27/.test(_.keyCode) && this.plugins.fileBrowser.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const u = this.context.fileBrowser;
        u.contextPlugin = n, u.selectorHandler = r;
        const f = this.context[n], l = f.listClass;
        this.util.hasClass(u.list, l) || (u.list.className = "se-file-browser-list " + l), this.options.popupDisplay === "full" ? u.area.style.position = "fixed" : u.area.style.position = "absolute", u.titleArea.textContent = f.title, u.area.style.display = "block", this.context[n].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[n].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[n].url, this.context[n].header);
      },
      _bindClose: null,
      /**
       * @description Close a fileBrowser plugin
       * The plugin's "init" method is called.
       */
      close: function() {
        const n = this.plugins.fileBrowser;
        n._xmlHttp && n._xmlHttp.abort(), n._bindClose && (this._d.removeEventListener("keydown", n._bindClose), n._bindClose = null);
        const r = this.context.fileBrowser;
        r.area.style.display = "none", r.selectorHandler = null, r.selectedTags = [], r.items = [], r.list.innerHTML = r.tagArea.innerHTML = r.titleArea.textContent = "", typeof this.plugins[r.contextPlugin].init == "function" && this.plugins[r.contextPlugin].init.call(this), r.contextPlugin = "";
      },
      /**
       * @description Show file browser loading box
       */
      showBrowserLoading: function() {
        this._loading.style.display = "block";
      },
      /**
       * @description Close file browser loading box
       */
      closeBrowserLoading: function() {
        this._loading.style.display = "none";
      },
      _drawFileList: function(n, r) {
        const u = this.plugins.fileBrowser, f = u._xmlHttp = this.util.getXMLHttpRequest();
        if (f.onreadystatechange = u._callBackGet.bind(this, f), f.open("get", n, !0), r !== null && typeof r == "object" && this._w.Object.keys(r).length > 0)
          for (let l in r)
            f.setRequestHeader(l, r[l]);
        f.send(null), this.plugins.fileBrowser.showBrowserLoading();
      },
      _callBackGet: function(n) {
        if (n.readyState === 4) {
          if (this.plugins.fileBrowser._xmlHttp = null, n.status === 200)
            try {
              const r = JSON.parse(n.responseText);
              r.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, r.result, !0) : r.nullMessage && (this.context.fileBrowser.list.innerHTML = r.nullMessage);
            } catch (r) {
              throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + r.message + '"');
            } finally {
              this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
            }
          else if (this.plugins.fileBrowser.closeBrowserLoading(), n.status !== 0) {
            const r = n.responseText ? JSON.parse(n.responseText) : n, u = "[SUNEDITOR.fileBrowser.get.serverException] status: " + n.status + ", response: " + (r.errorMessage || n.responseText);
            throw Error(u);
          }
        }
      },
      _drawListItem: function(n, r) {
        const u = this.context.fileBrowser, f = this.context[u.contextPlugin], l = [], _ = n.length, c = f.columnSize || u.columnSize, m = c <= 1 ? 1 : Math.round(_ / c) || 1, x = f.itemTemplateHandler;
        let T = "", E = '<div class="se-file-item-column">', z = 1;
        for (let o = 0, a, d; o < _; o++)
          if (a = n[o], d = a.tag ? typeof a.tag == "string" ? a.tag.split(",") : a.tag : [], d = a.tag = d.map(function(h) {
            return h.trim();
          }), E += x(a), (o + 1) % m === 0 && z < c && o + 1 < _ && (z++, E += '</div><div class="se-file-item-column">'), r && d.length > 0)
            for (let h = 0, g = d.length, b; h < g; h++)
              b = d[h], b && l.indexOf(b) === -1 && (l.push(b), T += '<a title="' + b + '" aria-label="' + b + '">' + b + "</a>");
        E += "</div>", u.list.innerHTML = E, r && (u.items = n, u.tagArea.innerHTML = T, u.tagElements = u.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(n) {
        const r = n.target;
        if (!this.util.isAnchor(r)) return;
        const u = r.textContent, f = this.plugins.fileBrowser, l = this.context.fileBrowser, _ = l.tagArea.querySelector('a[title="' + u + '"]'), c = l.selectedTags, m = c.indexOf(u);
        m > -1 ? (c.splice(m, 1), this.util.removeClass(_, "on")) : (c.push(u), this.util.addClass(_, "on")), f._drawListItem.call(
          this,
          c.length === 0 ? l.items : l.items.filter(function(x) {
            return x.tag.some(function(T) {
              return c.indexOf(T) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(n) {
        n.preventDefault(), n.stopPropagation();
        const r = this.context.fileBrowser, u = r.list;
        let f = n.target, l = null;
        if (f === u) return;
        for (; u !== f.parentNode && (l = f.getAttribute("data-command"), !l); )
          f = f.parentNode;
        if (!l) return;
        (r.selectorHandler || this.context[r.contextPlugin].selectorHandler)(f, f.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: s
    })), s;
  });
})(qi);
var Pn = qi.exports;
const Vn = /* @__PURE__ */ Ye(Pn), $i = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([Vn]);
    const t = e.context;
    t.imageGallery = {
      title: e.lang.toolbar.imageGallery,
      // @Required @Override fileBrowser - File browser window title.
      directData: e.options.imageGalleryData,
      // @option @Override fileBrowser - Direct JSON data without making server requests.
      url: e.options.imageGalleryUrl,
      // @option @Override fileBrowser - File server url.
      header: e.options.imageGalleryHeader,
      // @Required @Override fileBrowser - File server http header.
      listClass: "se-image-list",
      // @Required @Override fileBrowser - Class name of list div.
      itemTemplateHandler: this.drawItems,
      // @Required @Override fileBrowser - Function that defines the HTML of an file item.
      selectorHandler: this.setImage.bind(e),
      // @Required @Override fileBrowser - Function that action when item click.
      columnSize: 4
      // @Option @Override fileBrowser - Number of "div.se-file-item-column" to be created (default: 4)
    };
  },
  /**
   * @Required @Override fileBrowser
   * @description Open a file browser.
   * @param {Function|null} selectorHandler When the function comes as an argument value, it substitutes "context.selectorHandler".
   */
  open: function(e) {
    this.plugins.fileBrowser.open.call(this, "imageGallery", e);
  },
  /**
   * @Required @Override fileBrowser
   * @description Define the HTML of the item to be put in "div.se-file-item-column".
   * Format: [
   *      { src: "image src", name: "name(@option)", alt: "image alt(@option)", tag: "tag name(@option)" }
   * ]
   * @param {Object} item Item of the response data's array
   */
  drawItems: function(e) {
    const t = e.src.split("/").pop();
    return '<div class="se-file-item-img"><img src="' + (e.thumbnail || e.src) + '" alt="' + (e.alt || t) + '" data-command="pick" data-value="' + (e.src || e.thumbnail) + '"><div class="se-file-img-name se-file-name-back"></div><div class="se-file-img-name __se__img_name">' + (e.name || t) + "</div></div>";
  },
  setImage: function(e, t) {
    this.callPlugin("image", (function() {
      const i = { name: t, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", i, e.alt);
    }).bind(this), null);
  }
}, Un = { blockquote: vi, align: yi, font: Ci, fontSize: wi, fontColor: Ei, hiliteColor: Si, horizontalRule: Ti, list: ki, table: Li, formatBlock: Ni, lineHeight: Bi, template: Ri, paragraphStyle: Ai, textStyle: zi, link: Di, image: Vi, video: Ui, audio: Wi, math: Zi, imageGallery: $i }, Wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  align: yi,
  audio: Wi,
  blockquote: vi,
  default: Un,
  font: Ci,
  fontColor: Ei,
  fontSize: wi,
  formatBlock: Ni,
  hiliteColor: Si,
  horizontalRule: Ti,
  image: Vi,
  imageGallery: $i,
  lineHeight: Bi,
  link: Di,
  list: ki,
  math: Zi,
  paragraphStyle: Ai,
  table: Li,
  template: Ri,
  textStyle: zi,
  video: Ui
}, Symbol.toStringTag, { value: "Module" })), Zn = /* @__PURE__ */ bi(Wn), ti = {
  // rtl icon
  rtl: {
    italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.5 15.8" xml:space="preserve"><g><path d="M0.3,0.1c0.3,0,0.5,0,0.7,0c1,0.1,1.7,0.1,2.2,0.1H4L7.2,0l0.2,1.1H7c-0.5,0-1,0.1-1.5,0.3v0.4l0.3,1.9L6,4.4L6.3,6 l0.1,0.4l0.1,0.5c0.1,0.2,0.1,0.4,0.2,0.7s0.1,0.6,0.2,0.9L7,9.1l0.6,2.8l0.3,1.4c0.1,0.4,0.2,0.7,0.4,1c0.4,0.2,0.8,0.3,1.2,0.4 l0.8,0.2l0.2,0.9l-1.1,0c-0.9-0.1-1.5-0.1-1.8-0.1h-2c-0.9,0.1-1.4,0.2-1.5,0.2c-0.1,0-0.2,0-0.3,0H3.4c-0.1,0-0.2,0-0.2,0 l-0.1-0.4c0-0.2-0.1-0.4-0.1-0.6l0.7-0.1c0.4,0,0.8-0.1,1.2-0.2c0-0.1,0-0.2,0-0.3l-0.1-0.5l-0.4-2.4L4,9.6L3.4,6.4 C3.2,5.7,3,4.7,2.7,3.3c0-0.3-0.1-0.5-0.1-0.8C2.5,2.1,2.4,1.9,2.3,1.6C2,1.4,1.6,1.3,1.3,1.2C0.9,1.2,0.5,1.1,0.2,0.9L0,0.4L0,0 L0.3,0.1L0.3,0.1z"/></g></svg>',
    indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M13.1,3.5L15.7,6c0.1,0.1,0.1,0.3,0,0.4l-2.5,2.5C13.1,9,13,9,12.9,9c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V3.7 c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C13,3.4,13.1,3.4,13.1,3.5z"/></g></svg>',
    outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><g><path d="M15.5,10.1L15.5,10.1c0.1,0,0.3,0.1,0.3,0.3v1.7c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1l-15.2,0 c-0.1,0-0.1,0-0.2-0.1C0,12.2,0,12.2,0,12.1l0-1.7c0-0.1,0-0.1,0.1-0.2c0.1-0.1,0.1-0.1,0.2-0.1C0.3,10.1,15.5,10.1,15.5,10.1z M9.8,6.7c0.1,0,0.1,0,0.2,0.1C10.1,6.9,10.1,7,10.1,7v1.7c0,0.1,0,0.2-0.1,0.2C10,9,9.9,9,9.8,9L0.3,9C0.2,9,0.1,9,0.1,8.9 C0,8.9,0,8.8,0,8.7V7C0,7,0,6.9,0.1,6.8c0.1-0.1,0.1-0.1,0.2-0.1C0.3,6.7,9.8,6.7,9.8,6.7z M0.3,3.4h9.6h0c0.1,0,0.3,0.1,0.3,0.3 v1.7v0c0,0.1-0.1,0.3-0.3,0.3H0.3c-0.1,0-0.1,0-0.2-0.1C0,5.5,0,5.4,0,5.3V3.6c0-0.1,0-0.1,0.1-0.2C0.1,3.4,0.2,3.4,0.3,3.4 L0.3,3.4z M0.3,0l15.2,0c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2V2c0,0.1,0,0.2-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1H0.3 c-0.1,0-0.1,0-0.2-0.1C0,2.1,0,2,0,2l0-1.7c0-0.1,0-0.1,0.1-0.2C0.1,0,0.2,0,0.3,0z"/></g><path d="M15.5,3.4c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2v5.1c0,0.1,0,0.1-0.1,0.2C15.6,9,15.5,9,15.5,9 c-0.1,0-0.1,0-0.2-0.1l-2.5-2.5c-0.1-0.1-0.1-0.3,0-0.4l2.5-2.5C15.3,3.4,15.4,3.4,15.5,3.4z"/></g></svg>',
    list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 12.4" xml:space="preserve"><g><path d="M12.4,10.7c0,0.9,0.8,1.7,1.7,1.7c0.9,0,1.7-0.8,1.7-1.7C15.7,9.8,15,9,14.1,9c-0.4,0-0.9,0.2-1.2,0.5 C12.5,9.8,12.4,10.2,12.4,10.7C12.4,10.7,12.4,10.7,12.4,10.7z M12.4,6.2c0,0.9,0.8,1.7,1.7,1.7c0.4,0,0.9-0.2,1.2-0.5 c0.3-0.3,0.4-0.7,0.4-1.1c0-0.9-0.7-1.7-1.6-1.7C13.1,4.6,12.4,5.3,12.4,6.2C12.4,6.2,12.4,6.2,12.4,6.2z M0,9.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1l10.7,0c0,0,0,0,0,0c0.1,0,0.3-0.1,0.3-0.3V9.8c0-0.1,0-0.1-0.1-0.2 C11.1,9.6,11,9.6,11,9.6l-10.7,0c-0.1,0-0.1,0-0.2,0.1C0,9.7,0,9.8,0,9.8L0,9.8z M12.9,2.9c0.3,0.3,0.7,0.5,1.2,0.5 c0.4,0,0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.7,0-2.4C14.9,0.2,14.5,0,14.1,0c-0.4,0-0.9,0.2-1.2,0.5c-0.3,0.3-0.5,0.7-0.5,1.2 C12.4,2.1,12.5,2.6,12.9,2.9z M0,5.3V7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.1,0,0.2-0.1 c0.1-0.1,0.1-0.1,0.1-0.2V5.3c0,0,0,0,0,0c0-0.1-0.1-0.3-0.3-0.3H0.3c-0.1,0-0.1,0-0.2,0.1C0,5.2,0,5.3,0,5.3L0,5.3z M0,0.8v1.7 c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1h10.7c0.1,0,0.1,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2V0.8c0-0.1,0-0.1-0.1-0.2 c0-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.1,0-0.2,0.1C0,0.7,0,0.8,0,0.8L0,0.8z"/></g></svg>',
    list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M0,11.5l0,1.7c0,0.1,0,0.1,0.1,0.2c0.1,0.1,0.1,0.1,0.2,0.1H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2v-1.7 c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1H0.3c-0.1,0-0.2,0-0.2,0.1C0,11.4,0,11.4,0,11.5L0,11.5z M0,8.7c0,0.1,0,0.1,0.1,0.2 C0.1,8.9,0.2,9,0.3,9H11c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V7c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.1-0.2-0.1l-10.7,0 c-0.1,0-0.2,0-0.2,0.1C0,6.8,0,6.9,0,7C0,7,0,8.7,0,8.7z M0,2.5v1.7c0,0.1,0,0.1,0.1,0.2c0,0,0.1,0.1,0.2,0.1l10.7,0 c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.1,0.1-0.2V2.4c0-0.1,0-0.1-0.1-0.2c-0.1,0-0.1,0-0.2,0H0.3c-0.1,0-0.1,0-0.2,0 C0,2.3,0,2.4,0,2.5L0,2.5z"/></g><path d="M15.6,14.2c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.4-0.4-0.7-0.4l0.9-1v-0.8h-2.9v1.3h0.9v-0.5h0.9l0,0c-0.1,0.1-0.2,0.2-0.3,0.3 s-0.2,0.3-0.4,0.5l-0.3,0.3l0.2,0.5c0.6,0,0.9,0.1,0.9,0.5c0,0.1-0.1,0.3-0.2,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0-0.7-0.1-0.9-0.3 l-0.5,0.8c0.4,0.4,0.9,0.6,1.5,0.6c0.4,0,0.9-0.1,1.2-0.4C15.5,15.1,15.6,14.7,15.6,14.2z"/><path d="M15.6,8.7h-0.9v0.5h-1.1c0-0.2,0.2-0.4,0.4-0.5c0.2-0.2,0.4-0.3,0.7-0.4c0.3-0.2,0.5-0.3,0.7-0.6c0.2-0.2,0.3-0.5,0.3-0.8 c0-0.4-0.2-0.8-0.5-1c-0.6-0.4-1.4-0.5-2-0.1c-0.3,0.2-0.5,0.4-0.6,0.7L13.3,7c0.1-0.3,0.4-0.5,0.7-0.5c0.1,0,0.3,0,0.3,0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.2-0.1,0.3-0.2,0.4c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.2-0.4,0.4-0.5,0.6 c-0.1,0.2-0.2,0.5-0.2,0.8c0,0.2,0,0.3,0,0.5h3.2L15.6,8.7L15.6,8.7z"/><path d="M15.6,3.6h-1V0h-0.9l-1.2,1.1l0.6,0.7c0.2-0.1,0.3-0.3,0.4-0.5l0,0v2.2h-0.9v0.9h3L15.6,3.6L15.6,3.6z"/></svg>',
    link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M7.4,9.9l3.1,3.1c0.3,0.3,0.8,0.5,1.3,0.5c0.5,0,0.9-0.2,1.3-0.5c0,0,0,0,0,0c0.7-0.7,0.7-1.9,0-2.6L9.9,7.3 c0-0.1,0-0.2,0-0.3C9.9,7,10,7,10.1,7l2.2-0.2c0.1,0,0.1,0,0.2,0.1l2.1,2.1c0.4,0.4,0.7,0.8,0.9,1.3c0.2,0.5,0.3,1,0.3,1.5 c0,0.5-0.1,1-0.3,1.5c-0.8,2-3.2,3-5.2,2.2c-0.5-0.2-0.9-0.5-1.3-0.9l-2.1-2.1c-0.1,0-0.1-0.1-0.1-0.2L7,10.1C7,10,7,9.9,7.1,9.9 C7.2,9.8,7.3,9.9,7.4,9.9z M1.2,1.1C1.6,0.7,2,0.4,2.5,0.3c1-0.4,2.1-0.4,3.1,0C6,0.4,6.5,0.7,6.8,1.1L9,3.2C9,3.3,9.1,3.3,9,3.4 L8.8,5.6c0,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.2,0.1-0.3,0L5.3,2.7C5,2.3,4.5,2.1,4,2.1c-0.5,0-0.9,0.2-1.3,0.5c0,0,0,0,0,0 C2,3.4,2,4.5,2.7,5.2l3.1,3.2c0.1,0.1,0.1,0.2,0,0.3c0,0.1-0.1,0.1-0.2,0.1L3.5,9C3.4,9,3.4,9,3.3,8.9L1.2,6.8c0,0,0,0,0,0 C-0.4,5.2-0.4,2.7,1.2,1.1L1.2,1.1z M14.3,6h-2.6c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.2,0.1-0.3l2.5-0.7 c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.2l0.1,0.8c0,0.1,0,0.1-0.1,0.2C14.5,6,14.4,6,14.3,6L14.3,6z M10.2,4.1 c0,0.1-0.1,0.2-0.2,0.2l0,0c0,0,0,0,0,0C9.8,4.2,9.7,4.1,9.8,4L9.7,1.4c0-0.1,0-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0h0.8 c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1,0,0.2L10.2,4.1L10.2,4.1z M1.5,9.7h1.3h1.3c0.1,0,0.2,0.1,0.2,0.2c0,0.1,0,0.2-0.1,0.3l-2.5,0.6 H1.6c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.1-0.2L1.2,9.9c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1L1.5,9.7z M5.6,11.6 C5.6,11.6,5.6,11.6,5.6,11.6c0-0.1,0.1-0.2,0.3-0.1c0,0,0,0,0,0c0.1,0,0.2,0.1,0.2,0.2v2.6c0,0.1,0,0.1-0.1,0.2 c0,0-0.1,0.1-0.2,0.1L5,14.5c-0.1,0-0.1,0-0.2-0.1c0-0.1,0-0.1,0-0.2L5.6,11.6L5.6,11.6z"/></g></svg>',
    unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.7" xml:space="preserve"><g><path d="M14.6,14.6c1.6-1.6,1.6-4.1,0-5.7l0,0l-3.1-3.1l-1.2,1.6l2.9,2.9c0.4,0.4,0.6,0.9,0.6,1.5c0,1.1-0.9,2.1-2.1,2.1l0,0 c-0.6,0-1.1-0.2-1.5-0.6l-0.4-0.4l-1.7,1l0.8,0.8C10.4,16.2,13,16.2,14.6,14.6L14.6,14.6L14.6,14.6z M3.6,6C3,5.9,2.6,5.5,2.3,5 S1.9,4,2.1,3.4C2.3,2.9,2.6,2.5,3,2.2C3.5,2,4.1,1.9,4.6,2l3.3,1.4l0.5-2L5.1,0.1C4-0.1,2.9,0,2,0.5C1.1,1.1,0.4,1.9,0.2,3 C-0.1,4,0,5.1,0.6,6C1.1,6.9,1.9,7.6,3,7.8l5.4,2l0.5-2L6.2,6.9L3.6,6z"/></g></svg>'
  },
  // common, ltr icon
  redo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M11.58,18.48a6.84,6.84,0,1,1,6.85-6.85s0,.26,0,.67a8,8,0,0,1-.22,1.44l.91-.55a.51.51,0,0,1,.36,0,.45.45,0,0,1,.29.22.47.47,0,0,1,.06.36.45.45,0,0,1-.22.29L17.42,15.3l-.12,0h-.25l-.12-.06-.09-.09-.06-.07,0-.06-.87-2.12a.43.43,0,0,1,0-.37.49.49,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26l.44,1.09a6.51,6.51,0,0,0,.24-1.36,4.58,4.58,0,0,0,0-.64,5.83,5.83,0,0,0-1.73-4.17,5.88,5.88,0,0,0-8.34,0,5.9,5.9,0,0,0,4.17,10.06.51.51,0,0,1,.33.15.48.48,0,0,1,0,.68.53.53,0,0,1-.33.12Z" transform="translate(-4.48 -4.54)"/></g></svg>',
  undo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.59 14.18"><g><path d="M5,14a.43.43,0,0,1-.22-.29.46.46,0,0,1,.06-.36.43.43,0,0,1,.29-.22.56.56,0,0,1,.36,0l.91.55a8.27,8.27,0,0,1-.22-1.45,5.07,5.07,0,0,1,0-.67A6.85,6.85,0,1,1,13,18.47a.44.44,0,0,1-.33-.13.48.48,0,0,1,0-.68.51.51,0,0,1,.33-.15A5.89,5.89,0,0,0,17.15,7.45a5.88,5.88,0,0,0-8.33,0,5.84,5.84,0,0,0-1.73,4.17s0,.25,0,.65a6.49,6.49,0,0,0,.24,1.37l.44-1.09a.57.57,0,0,1,.27-.26.41.41,0,0,1,.36,0,.53.53,0,0,1,.27.26.43.43,0,0,1,0,.37L7.82,15l0,.09-.09.09-.1.07-.06,0H7.28l-.13,0-1.09-.63c-.65-.36-1-.57-1.1-.63Z" transform="translate(-4.49 -4.53)"/></g></svg>',
  bold: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.76 15.75"><g><path d="M6.4,3.76V19.5h6.76a5.55,5.55,0,0,0,2-.32,4.93,4.93,0,0,0,1.52-1,4.27,4.27,0,0,0,1.48-3.34,3.87,3.87,0,0,0-.69-2.37,5.74,5.74,0,0,0-.71-.83,3.44,3.44,0,0,0-1.1-.65,3.6,3.6,0,0,0,1.58-1.36,3.66,3.66,0,0,0,.53-1.93,3.7,3.7,0,0,0-1.21-2.87,4.65,4.65,0,0,0-3.25-1.1H6.4Zm2.46,6.65V5.57h3.52a4.91,4.91,0,0,1,1.36.15,2.3,2.3,0,0,1,.85.45,2.06,2.06,0,0,1,.74,1.71,2.3,2.3,0,0,1-.78,1.92,2.54,2.54,0,0,1-.86.46,4.7,4.7,0,0,1-1.32.15H8.86Zm0,7.27V12.15H12.7a4.56,4.56,0,0,1,1.38.17,3.43,3.43,0,0,1,.95.49,2.29,2.29,0,0,1,.92,2,2.73,2.73,0,0,1-.83,2.1,2.66,2.66,0,0,1-.83.58,3.25,3.25,0,0,1-1.26.2H8.86Z" transform="translate(-6.4 -3.75)"/></g></svg>',
  underline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.78 15.74"><g><path d="M14.64,3.76h2.52v7.72a4.51,4.51,0,0,1-.59,2.31,3.76,3.76,0,0,1-1.71,1.53,6.12,6.12,0,0,1-2.64.53,5,5,0,0,1-3.57-1.18,4.17,4.17,0,0,1-1.27-3.24V3.76H9.9v7.3a3,3,0,0,0,.55,2,2.3,2.3,0,0,0,1.83.65,2.26,2.26,0,0,0,1.8-.65,3.09,3.09,0,0,0,.55-2V3.76Zm2.52,13.31V19.5H7.39V17.08h9.77Z" transform="translate(-7.38 -3.76)"/></g></svg>',
  italic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 15.76"><g><path d="M17.16,3.79l.37,0-.06.38-.14.52A10,10,0,0,1,16.21,5a9.37,9.37,0,0,0-1,.32,6.68,6.68,0,0,0-.25.89c-.06.31-.11.59-.14.85-.3,1.36-.52,2.41-.68,3.14l-.61,3.18L13.1,15l-.43,2.4-.12.46a.62.62,0,0,0,0,.28c.44.1.85.17,1.23.22l.68.11a4.51,4.51,0,0,1-.08.6l-.09.42a.92.92,0,0,0-.23,0l-.43,0a1.37,1.37,0,0,1-.29,0c-.13,0-.63-.08-1.49-.16l-2,0c-.28,0-.87,0-1.78.12L7,19.5l.17-.88.8-.2A6.61,6.61,0,0,0,9.19,18,2.62,2.62,0,0,0,9.61,17l.28-1.41.58-2.75.12-.66c.05-.3.11-.58.17-.86s.12-.51.17-.69l.12-.48.12-.43.31-1.6.15-.65.31-1.91V5.14a3.86,3.86,0,0,0-1.48-.29l-.38,0,.2-1.06,3.24.14.75,0c.45,0,1.18,0,2.18-.09.23,0,.46,0,.71,0Z" transform="translate(-7.04 -3.76)"/></g></svg>',
  strike: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.9"><g><path d="M12.94,13a4.27,4.27,0,0,1,1.32.58,1.46,1.46,0,0,1,.55,1.2,1.87,1.87,0,0,1-.88,1.64,4.17,4.17,0,0,1-2.35.59,4.44,4.44,0,0,1-2.74-.71,2.72,2.72,0,0,1-1-2.17H5.57a4.56,4.56,0,0,0,1.55,3.7,7,7,0,0,0,4.47,1.23,6,6,0,0,0,4.07-1.3,4.24,4.24,0,0,0,1.52-3.37,4,4,0,0,0-.26-1.4h-4ZM6.37,10.24A3.27,3.27,0,0,1,6,8.68a4,4,0,0,1,1.48-3.3,5.92,5.92,0,0,1,3.88-1.21,5.58,5.58,0,0,1,3.91,1.24,4.36,4.36,0,0,1,1.45,3.17H14.44a2.12,2.12,0,0,0-.91-1.81,4.45,4.45,0,0,0-2.44-.55,3.69,3.69,0,0,0-2,.51A1.64,1.64,0,0,0,8.3,8.22a1.3,1.3,0,0,0,.48,1.11,7,7,0,0,0,2.1.78l.28.06.28.08H6.37Zm13.09.68a.73.73,0,0,1,.49.21.66.66,0,0,1,.2.48.64.64,0,0,1-.2.48.71.71,0,0,1-.49.19H5.1a.67.67,0,0,1-.49-.19.66.66,0,0,1-.2-.48.64.64,0,0,1,.2-.48.73.73,0,0,1,.49-.21H19.46Z" transform="translate(-4.41 -4.17)"/></g></svg>',
  subscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 14.61"><g><path d="M15.38,4.33H12.74L11.19,7c-.28.46-.51.87-.69,1.21L10.07,9h0l-.44-.8c-.22-.4-.45-.81-.71-1.23L7.34,4.33H4.68L8.26,10,4.4,16.08H7.1l1.69-2.83c.38-.63.72-1.22,1-1.78l.25-.46h0l.49.92c.24.45.48.89.74,1.32L13,16.08h2.61L11.84,10l1.77-2.84,1.77-2.85Zm4.77,13.75H17v-.15c0-.4.05-.64.16-.72a4.42,4.42,0,0,1,1.16-.31,3.3,3.3,0,0,0,1.54-.56A1.84,1.84,0,0,0,20.15,15a1.78,1.78,0,0,0-.44-1.41A2.8,2.8,0,0,0,18,13.25a2.71,2.71,0,0,0-1.69.37,1.83,1.83,0,0,0-.44,1.43v.23H17v-.23q0-.63.18-.78a1.62,1.62,0,0,1,.88-.15,1.59,1.59,0,0,1,.88.15q.18.15.18.75t-.18.75a3.58,3.58,0,0,1-1.18.33,3.33,3.33,0,0,0-1.52.51,1.57,1.57,0,0,0-.32,1.18v1.15h4.27v-.86Z" transform="translate(-4.4 -4.33)"/></g></svg>',
  superscript: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.42"><g><path d="M12,13.14l3.61-5.81H12.94L11.33,10c-.28.46-.51.88-.69,1.25l-.45.83h0l-.45-.85c-.22-.41-.45-.82-.71-1.24L7.4,7.33H4.68l3.66,5.81L4.4,19.33H7.14l1.74-2.87q.58-1,1-1.83l.25-.48h0l.51.94.75,1.37,1.72,2.87h2.67l-1.92-3.09c-1.12-1.8-1.76-2.83-1.92-3.1Zm4.84-4.41h0l0,.15h3.27v.86H15.77V8.58a1.66,1.66,0,0,1,.33-1.22,3.51,3.51,0,0,1,1.56-.51,3.68,3.68,0,0,0,1.21-.34c.13-.1.19-.36.19-.77S19,5.07,18.87,5A1.63,1.63,0,0,0,18,4.8a1.58,1.58,0,0,0-.91.17c-.13.11-.19.38-.19.8V6H15.78V5.76a1.87,1.87,0,0,1,.45-1.47A2.84,2.84,0,0,1,18,3.91a2.8,2.8,0,0,1,1.72.38,1.84,1.84,0,0,1,.45,1.44,1.91,1.91,0,0,1-.34,1.35,3.24,3.24,0,0,1-1.58.57A3.69,3.69,0,0,0,17,8c-.12.1-.17.35-.17.76Z" transform="translate(-4.4 -3.91)"/></g></svg>',
  erase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.76"><g><path d="M13.69,17.2h6.46v1.31H8.56L4.41,14.37,14,4.75l6.06,6.06L16.89,14l-3.2,3.19Zm-4.61,0h2.77L14.09,15,9.88,10.75,6.25,14.38l1.41,1.41c.84.82,1.31,1.29,1.42,1.41Z" transform="translate(-4.41 -4.75)"/></g></svg>',
  indent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M4.68,14.45a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V9.1a.27.27,0,0,1,.08-.19.28.28,0,0,1,.2-.08.25.25,0,0,1,.19.07l2.54,2.54a.29.29,0,0,1,0,.4L4.88,14.36a.24.24,0,0,1-.2.09Zm15.19,1.12a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87Zm0-3.38a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm0-3.37a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm.2-3.29a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  outdent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.36"><g><path d="M19.87,15.57a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.25.25,0,0,1-.08-.19V15.84a.27.27,0,0,1,.27-.27H19.87ZM7.5,14.45a.25.25,0,0,1-.2-.09L4.76,11.84a.29.29,0,0,1,0-.4L7.3,8.9a.29.29,0,0,1,.4,0,.31.31,0,0,1,.07.2v5.06a.32.32,0,0,1-.08.21.26.26,0,0,1-.19.08ZM19.87,8.82a.27.27,0,0,1,.19.08.25.25,0,0,1,.08.19v1.69a.27.27,0,0,1-.08.19.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.27-.27V9.1a.27.27,0,0,1,.27-.27h9.56Zm0,3.37a.27.27,0,0,1,.19.08.28.28,0,0,1,.08.21v1.68a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H10.31a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V12.48a.32.32,0,0,1,.08-.21.24.24,0,0,1,.19-.08h9.56Zm.2-6.66a.28.28,0,0,1,.08.2V7.41a.32.32,0,0,1-.08.21.25.25,0,0,1-.19.08H4.68a.27.27,0,0,1-.19-.08.3.3,0,0,1-.08-.21V5.73a.32.32,0,0,1,.08-.21.25.25,0,0,1,.19-.08H19.87a.28.28,0,0,1,.2.09Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  expansion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M11.8,13.06l-5.1,5.1H9.51V19.5H4.41V14.4H5.75v2.81L8.3,14.66q2.25-2.23,2.55-2.55Zm8.35-9.3v5.1H18.81V6.05l-5.1,5.1-1-1,5.1-5.1H15.05V3.76Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  reduction: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.91,10h2.87v1.38H12.55V6.12h1.38V9l5.24-5.24.48.49.49.48ZM6.77,11.92H12v5.23H10.62V14.26L5.37,19.5l-1-1L9.63,13.3H6.77Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  code_view: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 11.8"><g><path d="M8.09,7.94a.76.76,0,0,1,.53.22.72.72,0,0,1,.21.52.76.76,0,0,1-.22.54L6.18,11.63l2.43,2.44a.69.69,0,0,1,.2.51.66.66,0,0,1-.21.51.75.75,0,0,1-.51.22.63.63,0,0,1-.51-.21h0L4.63,12.15a.7.7,0,0,1-.22-.53.67.67,0,0,1,.25-.55L7.57,8.16a.82.82,0,0,1,.52-.22Zm12.05,3.69a.7.7,0,0,1-.23.52L17,15.1h0a.66.66,0,0,1-.51.21.73.73,0,0,1-.51-.22.75.75,0,0,1-.22-.51.63.63,0,0,1,.21-.51l2.43-2.44L15.92,9.22a.73.73,0,0,1-.22-.53A.74.74,0,0,1,17,8.18h0l2.91,2.91a.67.67,0,0,1,.27.54Zm-5.9-5.9a.73.73,0,0,1,.61.32.71.71,0,0,1,.07.68L11,17a1,1,0,0,1-.22.32.6.6,0,0,1-.35.16.75.75,0,0,1-.69-.26.69.69,0,0,1-.12-.72L13.56,6.23a.75.75,0,0,1,.26-.35.74.74,0,0,1,.42-.15Z" transform="translate(-4.41 -5.73)"/></g></svg>',
  preview: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.65 15.66"><g><path d="M16.19,14.43l2.49,2.49a.73.73,0,0,1,.21.52.67.67,0,0,1-.22.51.7.7,0,0,1-.52.22.69.69,0,0,1-.51-.21l-2.49-2.48a5.17,5.17,0,0,1-1.34.69,4.64,4.64,0,0,1-1.48.24,4.78,4.78,0,1,1,0-9.56,4.79,4.79,0,0,1,1.84.36,4.9,4.9,0,0,1,1.56,1,4.77,4.77,0,0,1,.46,6.18ZM10,14a3.3,3.3,0,0,0,2.34.93A3.37,3.37,0,0,0,14.7,14a3.3,3.3,0,0,0-1.08-5.41,3.47,3.47,0,0,0-2.56,0A3,3,0,0,0,10,9.28,3.31,3.31,0,0,0,10,14ZM16,4a3.86,3.86,0,0,1,2.77,1.14A3.9,3.9,0,0,1,20,7.85v4a.77.77,0,0,1-.22.53.7.7,0,0,1-.52.21.72.72,0,0,1-.74-.74v-4a2.46,2.46,0,0,0-.72-1.73A2.37,2.37,0,0,0,16,5.45H8.53A2.42,2.42,0,0,0,6.08,7.89v7.52a2.41,2.41,0,0,0,.71,1.73,2.46,2.46,0,0,0,1.74.72h4.08a.73.73,0,0,1,0,1.46H8.53a3.85,3.85,0,0,1-2.78-1.14A3.93,3.93,0,0,1,4.6,15.4V7.87A3.94,3.94,0,0,1,5.76,5.09,3.88,3.88,0,0,1,8.54,4H16Z" transform="translate(-4.45 -3.8)"/></g></svg>',
  print: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.05 16.04"><g><path d="M19.76,15.84a1.29,1.29,0,0,0,.39-.92V8.35A2.05,2.05,0,0,0,19.57,7a1.93,1.93,0,0,0-1.38-.57H6.37a1.95,1.95,0,0,0-2,2v6.56a1.23,1.23,0,0,0,.38.92,1.35,1.35,0,0,0,.93.38h2V14.9l-2,0V8.35a.67.67,0,0,1,.18-.47.62.62,0,0,1,.48-.19H18.18a.6.6,0,0,1,.46.19.66.66,0,0,1,.18.47V14.9h-2v1.32h2A1.35,1.35,0,0,0,19.76,15.84ZM17.52,7.69V5.06a1.31,1.31,0,0,0-.38-.92,1.34,1.34,0,0,0-.94-.38H8.34A1.3,1.3,0,0,0,7,5.06V7.69H8.34V5.06h7.87V7.69h1.31ZM8.34,12.93h7.87l0,5.26H8.34V12.93Zm7.87,5.26v0Zm.65,1.31a.6.6,0,0,0,.46-.19.72.72,0,0,0,.2-.47V12.29a.74.74,0,0,0-.2-.47.6.6,0,0,0-.46-.19H7.68a.6.6,0,0,0-.46.19.72.72,0,0,0-.2.47v6.55a.74.74,0,0,0,.2.47.6.6,0,0,0,.46.19h9.18ZM16.67,9.28a.7.7,0,0,0-.94,0,.63.63,0,0,0-.18.46.67.67,0,0,0,.18.47.68.68,0,0,0,.94,0,.66.66,0,0,0,.18-.47A.58.58,0,0,0,16.67,9.28Z" transform="translate(-4.25 -3.61)"/></g></svg>',
  template: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.27 15.64"><g><path d="M18.18,19.16a1,1,0,0,0,1-1V5.73a1,1,0,0,0-1-1h-2v1h2V18.19H6.37V5.73h2v-1h-2A.94.94,0,0,0,5.68,5a1,1,0,0,0-.29.7V18.18a.94.94,0,0,0,.29.69,1,1,0,0,0,.69.29H18.18ZM9.82,10.31h4.92a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H9.82a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15Zm5.9,4.92H8.83a.49.49,0,0,0-.35.15.47.47,0,0,0-.15.35.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h6.89a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.51.51,0,0,0-.5-.5ZM7.36,12.77a.49.49,0,0,0,.15.35.47.47,0,0,0,.35.15h8.85a.49.49,0,0,0,.35-.15.47.47,0,0,0,.15-.35.49.49,0,0,0-.15-.35.47.47,0,0,0-.35-.15H7.85a.49.49,0,0,0-.35.15.52.52,0,0,0-.14.35Z" transform="translate(-5.14 -3.77)"/><path d="M14.24,6.71a1,1,0,0,0,1-1,1,1,0,0,0-1-1,1,1,0,0,0-1-1h-2a.94.94,0,0,0-.69.28,1,1,0,0,0-.29.7A.94.94,0,0,0,9.62,5a.91.91,0,0,0-.29.69,1,1,0,0,0,.29.7,1,1,0,0,0,.69.29h3.93Z" transform="translate(-5.14 -3.77)"/></g></svg>',
  line_height: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 13.56"><g><path d="M4.4,4.88V8.26a2,2,0,0,0,.5.39s.1,0,.18-.12a.62.62,0,0,0,.17-.28c.06-.19.13-.44.21-.74s.14-.52.19-.66a.58.58,0,0,1,.21-.3,2.41,2.41,0,0,1,.63-.21,3.83,3.83,0,0,1,.88-.12,9.15,9.15,0,0,1,1.31.06.16.16,0,0,1,.11,0,.26.26,0,0,1,.06.14,4,4,0,0,1,0,.49v2l.05,3.77c0,1.41,0,2.68-.05,3.81a1.79,1.79,0,0,1-.11.49,10.68,10.68,0,0,1-1.4.45,1.12,1.12,0,0,0-.69.43v.31l0,.22.61,0c.85-.08,1.54-.12,2.06-.12a19.76,19.76,0,0,1,2.09.08,15.08,15.08,0,0,0,1.64.08,1.4,1.4,0,0,0,.29,0,1.58,1.58,0,0,0,0-.26l-.05-.43a2.26,2.26,0,0,0-.43-.17l-.77-.22-.15,0a2.55,2.55,0,0,1-.78-.28,2.56,2.56,0,0,1-.11-.75l0-1.29,0-3.15V7.53a10.51,10.51,0,0,1,.06-1.2,3.83,3.83,0,0,1,.6,0l1.88,0a2.18,2.18,0,0,1,.38,0,.45.45,0,0,1,.23.17.9.9,0,0,1,.05.25c0,.16.06.35.1.58a3.33,3.33,0,0,0,.14.55A6.39,6.39,0,0,0,15,9a2.91,2.91,0,0,0,.6-.15,2.77,2.77,0,0,0,0-.46l0-.51,0-2.95-.25,0-.38,0L15,4.94a.71.71,0,0,1-.18.15.45.45,0,0,1-.25.07l-.29,0H8.75l-.15,0H7.45a17,17,0,0,1-1.86,0L5.36,5l-.25-.13ZM19.75,16.14h-.69v-9h.69A.4.4,0,0,0,20.13,7c.06-.11,0-.24-.1-.39L18.92,5.15a.52.52,0,0,0-.86,0L17,6.58c-.12.15-.16.28-.1.39s.18.16.38.16h.69v9h-.69a.4.4,0,0,0-.38.16c-.06.11,0,.24.1.39l1.11,1.43a.52.52,0,0,0,.86,0L20,16.69c.12-.15.16-.28.1-.39a.4.4,0,0,0-.38-.16Z" transform="translate(-4.4 -4.86)"/></g></svg>',
  paragraph_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"/></g></svg>',
  text_style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.76 15.74"><g><path d="M17.68,6.71a2.22,2.22,0,0,0,1.06-.22.74.74,0,0,0,.42-.7.73.73,0,0,0-.08-.33.67.67,0,0,0-.17-.22,1,1,0,0,0-.31-.15L18.26,5l-.45-.09A15.27,15.27,0,0,0,13.26,5V4.74c0-.66-.63-1-1.92-1-.24,0-.43.15-.59.46a4,4,0,0,0-.36,1.14h0v0a26.45,26.45,0,0,1-3.5.35A2,2,0,0,0,5.77,6a.84.84,0,0,0-.37.79,2.14,2.14,0,0,0,.41,1.29,1.23,1.23,0,0,0,1.05.63,16.62,16.62,0,0,0,3.29-.45l-.34,3.35c-.16,1.61-.29,2.9-.37,3.86s-.12,1.66-.12,2.09l0,.65a5.15,5.15,0,0,0,.05.6,1.28,1.28,0,0,0,.16.54.34.34,0,0,0,.28.18,1.16,1.16,0,0,0,.79-.46,3.66,3.66,0,0,0,.68-1,22.08,22.08,0,0,0,1-4.33q.49-3.1.78-6.15a24.69,24.69,0,0,1,4.62-.84Z" transform="translate(-5.4 -3.76)"/></g></svg>',
  save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  blockquote: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.082 475.081"><g><path d="M164.45,219.27h-63.954c-7.614,0-14.087-2.664-19.417-7.994c-5.327-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.416-51.678c14.276-14.272,31.503-21.411,51.678-21.411h18.271c4.948,0,9.229-1.809,12.847-5.424c3.616-3.617,5.424-7.898,5.424-12.847V54.819c0-4.948-1.809-9.233-5.424-12.85c-3.617-3.612-7.898-5.424-12.847-5.424h-18.271c-19.797,0-38.684,3.858-56.673,11.563c-17.987,7.71-33.545,18.132-46.68,31.267c-13.134,13.129-23.553,28.688-31.262,46.677C3.855,144.039,0,162.931,0,182.726v200.991c0,15.235,5.327,28.171,15.986,38.834c10.66,10.657,23.606,15.985,38.832,15.985h109.639c15.225,0,28.167-5.328,38.828-15.985c10.657-10.663,15.987-23.599,15.987-38.834V274.088c0-15.232-5.33-28.168-15.994-38.832C192.622,224.6,179.675,219.27,164.45,219.27z"/><path d="M459.103,235.256c-10.656-10.656-23.599-15.986-38.828-15.986h-63.953c-7.61,0-14.089-2.664-19.41-7.994c-5.332-5.33-7.994-11.801-7.994-19.417v-9.132c0-20.177,7.139-37.401,21.409-51.678c14.271-14.272,31.497-21.411,51.682-21.411h18.267c4.949,0,9.233-1.809,12.848-5.424c3.613-3.617,5.428-7.898,5.428-12.847V54.819c0-4.948-1.814-9.233-5.428-12.85c-3.614-3.612-7.898-5.424-12.848-5.424h-18.267c-19.808,0-38.691,3.858-56.685,11.563c-17.984,7.71-33.537,18.132-46.672,31.267c-13.135,13.129-23.559,28.688-31.265,46.677c-7.707,17.987-11.567,36.879-11.567,56.674v200.991c0,15.235,5.332,28.171,15.988,38.834c10.657,10.657,23.6,15.985,38.828,15.985h109.633c15.229,0,28.171-5.328,38.827-15.985c10.664-10.663,15.985-23.599,15.985-38.834V274.088C475.082,258.855,469.76,245.92,459.103,235.256z"/></g></svg>',
  arrow_down: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 8.67"><g><path d="M18.79,7.52a.8.8,0,0,1,.56-.23.82.82,0,0,1,.79.79.8.8,0,0,1-.23.56l-7.07,7.07a.79.79,0,0,1-.57.25.77.77,0,0,1-.57-.25h0L4.64,8.65a.8.8,0,0,1-.23-.57.82.82,0,0,1,.79-.79.8.8,0,0,1,.56.23L12.28,14l3.26-3.26,3.25-3.26Z" transform="translate(-4.41 -7.29)"/></g></svg>',
  align_justify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm0,5.9H20.15v-2H4.41v2Zm0,3.94H20.15v-2H4.41v2Zm0,3.93h7.87v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm11.8,3.94H4.41v2H16.22v-2Zm-11.8,5.9H18.18v-2H4.41v2Zm0,3.93h9.84v-2H4.41v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm3.93,5.9H20.15v-2H8.34v2Zm-2,3.94H20.14v-2H6.37v2Zm3.94,3.93h9.84v-2H10.31v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  align_center: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.77"><g><path d="M4.41,4.74v2H20.15v-2H4.41Zm2,3.94v2H18.18v-2H6.37Zm-1,5.9H19.16v-2H5.39v2Zm2,3.93H17.2v-2H7.36v2Z" transform="translate(-4.41 -4.74)"/></g></svg>',
  font_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.61"><g><path d="M18.5,15.57,14.28,4.32h-3.4L6.65,15.57h3l.8-2.26h4.23l.8,2.26h3ZM14,11.07H11.14L12.54,7,13.25,9c.41,1.18.64,1.86.7,2ZM4.41,16.69v2.24H20.15V16.69H4.41Z" transform="translate(-4.41 -4.32)"/></g></svg>',
  highlight_color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.74"><g><path d="M12.32,9.31,13.38,13H11.21l.52-1.83q.46-1.61.54-1.83ZM4.44,3.76H20.1V19.5H4.44V3.76ZM14.71,17.32h2.63L13.7,6H10.89L7.26,17.32H9.89l.63-2.24h3.55l.32,1.12c.18.65.29,1,.32,1.12Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  list_bullets: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 12.37"><g><path d="M7.77,16.12a1.59,1.59,0,0,0-.49-1.18,1.62,1.62,0,0,0-1.19-.49,1.68,1.68,0,1,0,0,3.36,1.67,1.67,0,0,0,1.68-1.69Zm0-4.48A1.67,1.67,0,0,0,6.09,10,1.68,1.68,0,0,0,4.9,12.82a1.62,1.62,0,0,0,1.19.49,1.67,1.67,0,0,0,1.68-1.67Zm12.38,3.64a.27.27,0,0,0-.08-.19.28.28,0,0,0-.2-.09H9.19a.28.28,0,0,0-.2.08.29.29,0,0,0-.08.19V17a.27.27,0,0,0,.28.28H19.87a.27.27,0,0,0,.19-.08.24.24,0,0,0,.08-.2V15.28ZM7.77,7.13a1.63,1.63,0,0,0-.49-1.2,1.61,1.61,0,0,0-1.19-.49,1.61,1.61,0,0,0-1.19.49,1.71,1.71,0,0,0,0,2.4,1.62,1.62,0,0,0,1.19.49,1.61,1.61,0,0,0,1.19-.49,1.63,1.63,0,0,0,.49-1.2Zm12.38,3.66a.28.28,0,0,0-.08-.2.29.29,0,0,0-.19-.08H9.19a.27.27,0,0,0-.28.28v1.69a.27.27,0,0,0,.08.19.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08.25.25,0,0,0,.08-.19V10.79Zm0-4.5a.27.27,0,0,0-.08-.19A.25.25,0,0,0,19.88,6H9.19A.28.28,0,0,0,9,6.1a.26.26,0,0,0-.08.19V8A.27.27,0,0,0,9,8.17a.24.24,0,0,0,.2.08H19.87a.27.27,0,0,0,.19-.08A.25.25,0,0,0,20.14,8V6.29Z" transform="translate(-4.41 -5.44)"/></g></svg>',
  list_number: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.69 15.74"><g><path d="M7.66,18a1.24,1.24,0,0,0-.26-.78,1.17,1.17,0,0,0-.72-.42l.85-1V15H4.58v1.34h.94v-.46l.85,0h0c-.11.11-.22.23-.32.35s-.23.27-.37.47L5.39,17l.23.51c.61-.05.92.11.92.49a.42.42,0,0,1-.18.37.79.79,0,0,1-.45.12A1.41,1.41,0,0,1,5,18.15l-.51.77A2.06,2.06,0,0,0,6,19.5a1.8,1.8,0,0,0,1.2-.41A1.38,1.38,0,0,0,7.66,18Zm0-5.54H6.75V13H5.63A.72.72,0,0,1,6,12.51a5.45,5.45,0,0,1,.66-.45,2.71,2.71,0,0,0,.67-.57,1.19,1.19,0,0,0,.31-.81,1.29,1.29,0,0,0-.45-1,1.86,1.86,0,0,0-2-.11,1.51,1.51,0,0,0-.62.7l.74.52A.87.87,0,0,1,6,10.28a.51.51,0,0,1,.35.12.42.42,0,0,1,.13.33.55.55,0,0,1-.21.4,3,3,0,0,1-.5.38c-.19.13-.39.27-.58.42a2,2,0,0,0-.5.6,1.63,1.63,0,0,0-.21.81,3.89,3.89,0,0,0,.05.48h3.2V12.44Zm12.45,2.82a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2V17a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V15.26ZM7.69,7.32h-1V3.76H5.8L4.6,4.88l.63.68a1.85,1.85,0,0,0,.43-.48h0l0,2.24H4.74V8.2h3V7.32Zm12.43,3.42a.27.27,0,0,0-.08-.19.28.28,0,0,0-.21-.08H9.1a.32.32,0,0,0-.21.08.24.24,0,0,0-.08.2v1.71a.27.27,0,0,0,.08.19.3.3,0,0,0,.21.08H19.83a.32.32,0,0,0,.21-.08.25.25,0,0,0,.08-.19V10.74Zm0-4.52A.27.27,0,0,0,20,6,.28.28,0,0,0,19.83,6H9.1A.32.32,0,0,0,8.89,6a.24.24,0,0,0-.08.19V7.93a.27.27,0,0,0,.08.19.32.32,0,0,0,.21.08H19.83A.32.32,0,0,0,20,8.12a.26.26,0,0,0,.08-.2V6.22Z" transform="translate(-4.43 -3.76)"/></g></svg>',
  table: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M4.41,8.05V3.76H8.7V8.05H4.41Zm5.71,0V3.76h4.3V8.05h-4.3Zm5.74-4.29h4.29V8.05H15.86V3.76Zm-11.45,10V9.48H8.7v4.3H4.41Zm5.71,0V9.48h4.3v4.3h-4.3Zm5.74,0V9.48h4.29v4.3H15.86ZM4.41,19.5V15.21H8.7V19.5H4.41Zm5.71,0V15.21h4.3V19.5h-4.3Zm5.74,0V15.21h4.29V19.5H15.86Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  horizontal_rule: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 2.24"><g><path d="M20.15,12.75V10.51H4.41v2.24H20.15Z" transform="translate(-4.41 -10.51)"/></g></svg>',
  show_blocks: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.66 15.67"><g><path d="M19.72,5.58a1.64,1.64,0,0,0-1.64-1.64H6.23a1.62,1.62,0,0,0-1.16.48,1.63,1.63,0,0,0-.48,1.16V9.63a1.6,1.6,0,0,0,.48,1.16,1.62,1.62,0,0,0,1.16.47H18.09a1.67,1.67,0,0,0,1.16-.47,1.62,1.62,0,0,0,.48-1.16V5.58Zm-.94,4.05a.68.68,0,0,1-.7.7H6.23a.66.66,0,0,1-.48-.2.74.74,0,0,1-.21-.5V5.58a.66.66,0,0,1,.2-.48.71.71,0,0,1,.48-.21H18.08a.74.74,0,0,1,.5.21.66.66,0,0,1,.2.48ZM6.48,7.72a.21.21,0,0,0,.17-.07.22.22,0,0,0,.07-.17V7.06a1.27,1.27,0,0,1,.11-.52.37.37,0,0,1,.36-.23H8.77A.25.25,0,0,0,9,6.17a.19.19,0,0,0,0-.23.27.27,0,0,0-.2-.12H7.19a.88.88,0,0,0-.72.39,1.51,1.51,0,0,0-.23.85v.42a.24.24,0,0,0,.24.24Zm-.19.81a.21.21,0,0,0,.17-.07.26.26,0,0,0,.07-.17.24.24,0,0,0-.24-.24.2.2,0,0,0-.16.09.2.2,0,0,0-.07.16.22.22,0,0,0,.07.17.23.23,0,0,0,.16.06Zm8.46,5.1a1.63,1.63,0,0,0-.47-1.16A1.61,1.61,0,0,0,13.12,12H6.23a1.6,1.6,0,0,0-1.16.46,1.62,1.62,0,0,0-.48,1.16v4.05a1.64,1.64,0,0,0,1.64,1.64h6.89a1.6,1.6,0,0,0,1.16-.48,1.62,1.62,0,0,0,.47-1.16Zm-.94,4a.7.7,0,0,1-.2.49.65.65,0,0,1-.5.2H6.23a.66.66,0,0,1-.48-.2.75.75,0,0,1-.21-.49v-4a.74.74,0,0,1,.21-.5.66.66,0,0,1,.48-.2h6.89a.68.68,0,0,1,.7.7v4Zm6.15,0v-4a1.6,1.6,0,0,0-.48-1.16A1.67,1.67,0,0,0,18.32,12H17.1a1.63,1.63,0,0,0-1.16.47,1.61,1.61,0,0,0-.47,1.16v4a1.67,1.67,0,0,0,.47,1.16,1.62,1.62,0,0,0,1.16.48h1.22A1.64,1.64,0,0,0,20,17.68Zm-.94-4v4a.75.75,0,0,1-.21.49.62.62,0,0,1-.48.2H17.11a.69.69,0,0,1-.5-.2.7.7,0,0,1-.2-.49v-4a.68.68,0,0,1,.7-.7h1.22a.66.66,0,0,1,.48.2.72.72,0,0,1,.21.5Z" transform="translate(-4.44 -3.79)"/></g></svg>',
  cancel: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M14.15,11.63l5.61,5.61a1.29,1.29,0,0,1,.38.93,1.27,1.27,0,0,1-.4.93,1.25,1.25,0,0,1-.92.4,1.31,1.31,0,0,1-.94-.4l-5.61-5.61L6.67,19.1a1.31,1.31,0,0,1-.94.4,1.24,1.24,0,0,1-.92-.4,1.27,1.27,0,0,1-.4-.93,1.33,1.33,0,0,1,.38-.93l5.61-5.63L4.79,6a1.26,1.26,0,0,1-.38-.93,1.22,1.22,0,0,1,.4-.92,1.28,1.28,0,0,1,.92-.39,1.38,1.38,0,0,1,.94.38l5.61,5.61,5.61-5.61a1.33,1.33,0,0,1,.94-.38,1.26,1.26,0,0,1,.92.39,1.24,1.24,0,0,1,.4.92,1.29,1.29,0,0,1-.39.93L17,8.81l-2.8,2.82Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"/></g></svg>',
  video: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.55"><g><path d="M20.15,10.26V18.9l-3.94-1.57v1.2H4.41V10.66H16.22v1.23l2-.81,2-.82ZM14.64,17h0V12.54h0v-.31H6V17h8.67Zm3.94-.37v-4l-2.37,1v2l1.18.48,1.19.48ZM7.94,9.86A2.77,2.77,0,0,1,5.19,7.11a2.76,2.76,0,0,1,5.51,0A2.78,2.78,0,0,1,7.94,9.86Zm0-3.93a1.21,1.21,0,0,0-.83.35,1.15,1.15,0,0,0-.34.84A1.09,1.09,0,0,0,7.11,8,1.15,1.15,0,0,0,8,8.28,1.13,1.13,0,0,0,9.11,7.12,1.16,1.16,0,0,0,7.94,5.93Zm5.9,3.93a2.34,2.34,0,0,1-1.67-.68,2.3,2.3,0,0,1-.68-1.67,2.35,2.35,0,0,1,4-1.67,2.37,2.37,0,0,1,0,3.34,2.33,2.33,0,0,1-1.68.68Zm0-3.14a.75.75,0,1,0,.55.22.73.73,0,0,0-.55-.22Z" transform="translate(-4.41 -4.35)"/></g></svg>',
  link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M13.05,13.63a.24.24,0,0,1,.15.22L13.42,16a.19.19,0,0,1-.08.18l-2.12,2.14a4.08,4.08,0,0,1-1.29.85A4,4,0,0,1,4.71,17a3.92,3.92,0,0,1-.3-1.52A4,4,0,0,1,4.71,14a3.91,3.91,0,0,1,.87-1.3L7.7,10.56a.25.25,0,0,1,.2-.06l2.17.22a.21.21,0,0,1,.19.15.24.24,0,0,1,0,.25L7.12,14.23a1.81,1.81,0,0,0,0,2.58,1.78,1.78,0,0,0,1.29.52,1.74,1.74,0,0,0,1.28-.52L12.8,13.7a.24.24,0,0,1,.25-.07ZM19,4.92a4,4,0,0,1,0,5.66L16.86,12.7a.25.25,0,0,1-.17.08l-2.2-.23a.21.21,0,0,1-.19-.15.22.22,0,0,1,0-.25L17.44,9a1.81,1.81,0,0,0,0-2.58,1.78,1.78,0,0,0-1.29-.52,1.74,1.74,0,0,0-1.28.52L11.76,9.57a.21.21,0,0,1-.25,0,.24.24,0,0,1-.16-.21l-.22-2.17a.19.19,0,0,1,.08-.18l2.12-2.14a4.08,4.08,0,0,1,1.29-.85,4.05,4.05,0,0,1,3.06,0,3.85,3.85,0,0,1,1.3.85ZM5.84,9.82a.25.25,0,0,1-.18-.08.19.19,0,0,1-.07-.19l.11-.77a.2.2,0,0,1,.11-.17.24.24,0,0,1,.2,0l2.5.72a.25.25,0,0,1,.15.27.22.22,0,0,1-.23.21l-2.59,0Zm4.12-2-.73-2.5a.27.27,0,0,1,0-.2A.21.21,0,0,1,9.41,5L10.19,5a.25.25,0,0,1,.19,0,.23.23,0,0,1,.08.18l-.05,2.61a.2.2,0,0,1-.19.23h0A.22.22,0,0,1,10,7.85Zm8.76,5.58a.25.25,0,0,1,.18.08.23.23,0,0,1,.06.2l-.11.77a.25.25,0,0,1-.11.17.21.21,0,0,1-.12,0l-.08,0L16,14a.25.25,0,0,1-.15-.27.22.22,0,0,1,.22-.21l1.29,0,1.33,0Zm-4.12,2,.74,2.51a.28.28,0,0,1,0,.2.23.23,0,0,1-.18.11l-.8.11a.23.23,0,0,1-.17-.07.25.25,0,0,1-.08-.18l0-2.61a.22.22,0,0,1,.22-.22.21.21,0,0,1,.26.15Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  math: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.73"><g><path d="M17.19,5.73a1,1,0,0,0,.71-.29,1,1,0,0,0,.28-.7,1,1,0,0,0-1-1H7.35a1,1,0,0,0-1,1,.77.77,0,0,0,.13.47h0l4.58,6.43L6.68,17.81a1.25,1.25,0,0,0-.29.71.94.94,0,0,0,.28.7.92.92,0,0,0,.69.28H17.2a1,1,0,0,0,.71-.28,1,1,0,0,0,0-1.39.92.92,0,0,0-.71-.29H9.26l3.87-5.43a.86.86,0,0,0,0-.95L9.26,5.73h7.93Z" transform="translate(-6.38 -3.77)"/></g></svg>',
  unlink: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.72"><g><path d="M19,18.32a4,4,0,0,0,0-5.68L15.85,9.5l-1.17,1.55L17.57,14a2,2,0,0,1,.61,1.47,2.08,2.08,0,0,1-2.09,2.09,2,2,0,0,1-1.47-.61l-.38-.37-1.74,1,.8.78a4,4,0,0,0,5.68,0ZM8,9.77a2,2,0,0,1-1.27-1,1.89,1.89,0,0,1-.21-1.57A2.1,2.1,0,0,1,7.45,6,2,2,0,0,1,9,5.76L12.27,7.2l.49-2L9.48,3.9a4,4,0,0,0-3.06.41A3.82,3.82,0,0,0,4.56,6.73a3.8,3.8,0,0,0,.4,3A3.78,3.78,0,0,0,7.39,11.6l5.38,2,.49-2-2.64-.94L8,9.77Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  table_header: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M17,19.5v-.78H15.5v.78H17Zm-3,0v-.78H12.5v.78H14Zm-3,0v-.78H9.53v.78H11Zm-3,0v-.78H6.53v.78H8Zm10.55,0a1.73,1.73,0,0,0,.85-.35,1.67,1.67,0,0,0,.56-.76l-.71-.31a1.21,1.21,0,0,1-.35.4,1.34,1.34,0,0,1-.53.23l.08.38c.06.24.09.38.1.41Zm-13.7-.63.55-.55A.77.77,0,0,1,5.25,18a1.31,1.31,0,0,1-.06-.38v-.38H4.41v.38a2,2,0,0,0,.12.68,1.6,1.6,0,0,0,.35.57Zm15.27-2.12V15.26h-.78v1.49h.78Zm-15-1V14.23H4.41v1.49h.78Zm15-2V12.26h-.78v1.49h.78Zm-15-1V11.22H4.41v1.51h.78Zm15-2V9.26h-.78v1.51h.78Zm-15-1V8.17H4.41V9.74h.78Zm15-2V6.28h-.78V7.77h.78Zm-15-1.11V5.33L4.48,5.1a.77.77,0,0,0-.07.27,2.72,2.72,0,0,0,0,.28v1h.79ZM19.21,5l.63-.4A1.62,1.62,0,0,0,19.16,4a1.94,1.94,0,0,0-.91-.22v.78a1.31,1.31,0,0,1,.56.12.88.88,0,0,1,.4.36ZM6,4.54H7.78V3.76H6a.82.82,0,0,0-.28.06l.12.35c.07.21.1.33.11.36Zm10.8,0V3.76H15.28v.78h1.49Zm-3,0V3.76H12.28v.78h1.49Zm-3,0V3.76H9.28v.78h1.51ZM6,10.84h12.6V6.91H6Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  merge_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 15.74"><g><path d="M18.92,13.5h1.23v4.15A1.84,1.84,0,0,1,18.3,19.5H14V18.27H18.3a.6.6,0,0,0,.44-.18.59.59,0,0,0,.18-.44V13.5ZM18.3,3.76a1.84,1.84,0,0,1,1.85,1.85V9.82H18.92V5.6a.6.6,0,0,0-.18-.44A.59.59,0,0,0,18.3,5H14V3.76H18.3Zm1.85,8.51H15.6L17.26,14l-.86.86-3.14-3.17L16.4,8.51l.86.86L15.62,11h4.54v1.24Zm-13.9,6h4.27V19.5H6.25A1.84,1.84,0,0,1,4.4,17.65V13.5H5.63v4.15a.61.61,0,0,0,.62.62Zm0-14.51h4.27V5H6.25a.6.6,0,0,0-.44.18.57.57,0,0,0-.17.43V9.81H4.41V5.6A1.83,1.83,0,0,1,6.25,3.76Zm5,7.9L8.15,14.83,7.3,14,9,12.27H4.41V11H8.94L7.3,9.38,7.73,9l.43-.43Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  split_cell: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.74"><g><path d="M10.37,12.25H6.74L8.4,13.94l-.87.86L4.41,11.63,7.53,8.5l.87.86L6.74,11h3.62v1.23Zm9.78-.61L17,14.81,16.13,14l1.66-1.69H14.16V11h3.63L16.13,9.37l.43-.43A5.24,5.24,0,0,1,17,8.51ZM18.9,8.22V5.61a.57.57,0,0,0-.18-.43A.65.65,0,0,0,18.29,5H12.88V18.28h5.41a.7.7,0,0,0,.44-.18.57.57,0,0,0,.18-.43V15h1.23v2.64a1.84,1.84,0,0,1-1.85,1.83h-12A1.84,1.84,0,0,1,4.94,19a1.81,1.81,0,0,1-.54-1.29V15H5.63v2.64a.57.57,0,0,0,.18.43.67.67,0,0,0,.44.18h5.41V5H6.25a.7.7,0,0,0-.44.18.56.56,0,0,0-.17.43V8.22H4.41V5.61A1.8,1.8,0,0,1,5,4.31a1.91,1.91,0,0,1,1.31-.55h12a1.89,1.89,0,0,1,1.31.55,1.8,1.8,0,0,1,.54,1.3V8.23H18.9Z" transform="translate(-4.4 -3.76)"/></g></svg>',
  caption: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 13.79"><g><path d="M4.41,18.52H20.15v-2H4.41ZM20,4.73H18.07V6h.65v.65H20V4.73ZM17,6V4.73H14.55V6H17ZM13.49,6V4.73H11V6h2.47ZM10,6V4.73H7.5V6H10ZM5.79,6h.65V4.73H4.5V6.67H5.8V6ZM4.5,11.34H5.79V8.48H4.5ZM6.44,13.8H5.79v-.65H4.5v1.94H6.44ZM17,15.09V13.8H14.55v1.29H17Zm-3.52,0V13.8H11v1.29h2.47Zm-3.53,0V13.8H7.5v1.29H10ZM20,13.16H18.72v.65h-.65V15.1H20Zm-1.29-1.82H20V8.48h-1.3v2.86Z" transform="translate(-4.41 -4.73)"/></g></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.73"><g><path d="M7.51,5.68h6l1.52-1.57H6.94a2.4,2.4,0,0,0-1.79.82A2.8,2.8,0,0,0,4.41,6.8V17a2.55,2.55,0,0,0,.75,1.8A2.48,2.48,0,0,0,7,19.5H17.22a2.57,2.57,0,0,0,1.83-.74,2.52,2.52,0,0,0,.77-1.8V8.83l-1.58,1.54v6a1.54,1.54,0,0,1-1.53,1.53H7.51A1.54,1.54,0,0,1,6,16.41V7.21A1.52,1.52,0,0,1,7.51,5.68Zm5.63,7.47h0L10.7,10.74l-1,3.38,1.71-.48,1.7-.49Zm.34-.34h0l5.36-5.32L16.4,5.08,11,10.4l1.23,1.21,1.21,1.2ZM19.93,6.4a.82.82,0,0,0,.22-.48A.54.54,0,0,0,20,5.47L18.45,4A.67.67,0,0,0,18,3.77a.7.7,0,0,0-.48.21l-.74.72,2.44,2.43.37-.37.35-.36Z" transform="translate(-4.41 -3.77)"/></g></svg>',
  delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.74"><g><path d="M19.16,6.71a.94.94,0,0,0,.69-.28.91.91,0,0,0,.29-.68A1,1,0,0,0,19.85,5a.93.93,0,0,0-.69-.3H14.24A.94.94,0,0,0,14,4.06a.92.92,0,0,0-.7-.3h-2a1,1,0,0,0-.7.3.93.93,0,0,0-.28.68H5.39A.92.92,0,0,0,4.7,5a1,1,0,0,0-.29.71.91.91,0,0,0,.29.68,1,1,0,0,0,.69.28H19.16Zm-12.79,1a1,1,0,0,0-.7.3.94.94,0,0,0-.28.69v8.85A1.88,1.88,0,0,0,6,18.93a1.9,1.9,0,0,0,1.39.57H17.2a1.87,1.87,0,0,0,1.39-.58,1.91,1.91,0,0,0,.58-1.39V8.68A1,1,0,0,0,18.88,8a.89.89,0,0,0-.7-.29,1,1,0,0,0-.69.29.92.92,0,0,0-.29.68v7.87a1,1,0,0,1-1,1H8.34a.94.94,0,0,1-.69-.28,1,1,0,0,1-.29-.71V8.68a1,1,0,0,0-1-1Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  modify: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.7 15.74"><g><path d="M19.79,15.23a.66.66,0,0,1,.3.38.59.59,0,0,1-.07.48l-.8,1.38a.66.66,0,0,1-.38.3.59.59,0,0,1-.48-.07l-.68-.38a4.55,4.55,0,0,1-1.34.77v.78a.64.64,0,0,1-.18.45.61.61,0,0,1-.45.18h-1.6a.6.6,0,0,1-.44-.18.66.66,0,0,1-.19-.45v-.78a4.36,4.36,0,0,1-1.32-.77l-.69.38a.58.58,0,0,1-.48.07.66.66,0,0,1-.38-.3l-.38-.66h.83a1.77,1.77,0,0,0,1.23-.52,1.72,1.72,0,0,0,.51-1.23v-.18a3,3,0,0,0,.49-.28l.15.09a1.83,1.83,0,0,0,.88.23A1.75,1.75,0,0,0,15.84,14l.88-1.52a1.7,1.7,0,0,0,.17-1.32,1.66,1.66,0,0,0-.3-.61,1.84,1.84,0,0,0-.51-.45l-.15-.09,0-.29,0-.28.15-.09a1,1,0,0,0,.26-.18l0,.06v.78a4.34,4.34,0,0,1,1.34.77l.68-.38a.68.68,0,0,1,.48-.06.64.64,0,0,1,.38.29l.8,1.38a.58.58,0,0,1,.07.48.63.63,0,0,1-.3.38l-.68.4a3.84,3.84,0,0,1,.08.76,4.13,4.13,0,0,1-.08.78l.34.18.32.2ZM10.17,7.86a1.9,1.9,0,0,1,1.35,3.23,1.85,1.85,0,0,1-1.35.55A1.9,1.9,0,0,1,8.83,8.41a1.92,1.92,0,0,1,1.34-.55Zm1.58,7.2a.73.73,0,0,1-.21.49.66.66,0,0,1-.48.2H9.29a.68.68,0,0,1-.69-.69V14.2a4.75,4.75,0,0,1-1.48-.86l-.75.45a.73.73,0,0,1-.7,0,.63.63,0,0,1-.25-.26L4.54,12a.67.67,0,0,1-.08-.53.71.71,0,0,1,.32-.42l.75-.43a4.8,4.8,0,0,1-.08-.85,4.71,4.71,0,0,1,.08-.85l-.74-.44a.71.71,0,0,1-.32-.42.65.65,0,0,1,.07-.54L5.42,6a.66.66,0,0,1,.42-.32l.18,0a.73.73,0,0,1,.35.09l.75.43A4.68,4.68,0,0,1,8.6,5.33V4.45a.68.68,0,0,1,.69-.69h1.77a.64.64,0,0,1,.48.2.73.73,0,0,1,.21.49v.88a4.75,4.75,0,0,1,1.48.85L14,5.75a.67.67,0,0,1,.34-.09l.18,0a.71.71,0,0,1,.42.32l.89,1.54a.67.67,0,0,1,.06.52.73.73,0,0,1-.32.43l-.75.42a4.8,4.8,0,0,1,.08.85,4.71,4.71,0,0,1-.08.85l.75.43a.66.66,0,0,1,.32.42.73.73,0,0,1-.06.54l-.89,1.52a.69.69,0,0,1-.25.26.7.7,0,0,1-.35.09.64.64,0,0,1-.34-.09l-.75-.45a4.87,4.87,0,0,1-1.48.86v.87ZM7.23,9.75a3,3,0,0,0,.86,2.08,2.94,2.94,0,1,0,4.16-4.16,3,3,0,0,0-2.08-.85A2.94,2.94,0,0,0,7.23,9.75Z" transform="translate(-4.44 -3.76)"/></g></svg>',
  revert: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 14.69"><g><path d="M18.26,15V12.3l1.89-2V15a2.58,2.58,0,0,1-.24,1c-.2.58-.75.92-1.65,1H7.56v2L4.41,15.63,7.56,13v2h10.7ZM6.3,8.28V11L4.41,13V8.28a2.58,2.58,0,0,1,.24-1c.2-.58.75-.92,1.65-1H17v-2l3.15,3.34L17,10.3v-2H6.3Z" transform="translate(-4.4 -4.28)"/></g></svg>',
  auto_size: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M6.71,17.19,6.89,16l1.21-.15A6,6,0,0,1,6.81,13.9a5.78,5.78,0,0,1-.45-2.27A6,6,0,0,1,8.1,7.45a5.83,5.83,0,0,1,4.17-1.73l1-1-1-1A7.89,7.89,0,0,0,5,14.64a7.73,7.73,0,0,0,1.71,2.55Zm5.57,2.31h0A7.86,7.86,0,0,0,17.85,6.07L17.67,7.3l-1.21.15a5.9,5.9,0,0,1,1.29,1.92,5.81,5.81,0,0,1,.45,2.26,5.91,5.91,0,0,1-5.9,5.9l-1,1,.49.49.47.5Z" transform="translate(-4.41 -3.76)"/></g></svg>',
  insert_row_below: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M15.7,1.3c-0.1-0.1-0.1-0.2-0.2-0.2L15.3,1H0.4L0.3,1.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1L0,1.4v7.7l0.1,0.1c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h2.3V9.3l0.1-0.5L3,8.5l0.1-0.2c-0.1,0-0.2,0-0.3,0H1.2v-6h13.3v6h-1.6c-0.1,0-0.2,0-0.3,0l0.1,0.2l0.2,0.4C12.9,9,13,9.2,13,9.3v0.1h2.3l0.2-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1V1.4L15.7,1.3z"/><path d="M10.5,7.5C9.9,7.1,9.3,6.8,8.6,6.7c-0.2,0-0.5-0.1-0.7,0c-0.2,0-0.5,0-0.7,0C6.6,6.7,6.1,6.9,5.6,7.3C5.2,7.6,4.7,8,4.4,8.4C4.3,8.6,4.2,8.8,4.2,8.9C4.1,9.1,4,9.3,3.9,9.4C3.9,9.6,3.8,9.7,3.8,9.9c0,0.2-0.1,0.3-0.1,0.5v-0.1c-0.1,0.8,0.1,1.6,0.5,2.4c0.4,0.7,1,1.3,1.7,1.7c0.3,0.2,0.6,0.3,0.9,0.3c0.3,0.1,0.7,0.1,1,0.1c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.3c0.5-0.3,0.9-0.6,1.3-1c0.3-0.4,0.6-0.8,0.8-1.3c0.1-0.4,0.2-0.9,0.2-1.4c0-0.5-0.1-1-0.3-1.4C11.5,8.6,11.1,8,10.5,7.5z M10.1,11.3H8.5v1.6H8H7.9H7.3v0v-0.1v-1.4H5.7v-0.4v-0.2v-0.6h0h1.5V8.5h1.2v1.6h1.6V11.3z"/></g></svg>',
  insert_row_above: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.1,14.5c0.1,0.1,0.1,0.2,0.2,0.2l0.1,0.1h14.9l0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1l0.1-0.1V6.7l-0.1-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1-0.1h-2.3v0.1l-0.1,0.5l-0.2,0.4l-0.1,0.2c0.1,0,0.2,0,0.3,0h1.6v6H1.3v-6h1.6c0.1,0,0.2,0,0.3,0L3.1,7.3L2.9,6.9C2.8,6.8,2.8,6.6,2.7,6.5V6.3H0.4L0.3,6.4c-0.1,0-0.1,0.1-0.2,0.2L0,6.7v7.7L0.1,14.5z"/><path d="M5.3,8.3c0.6,0.5,1.2,0.8,1.9,0.9c0.2,0,0.5,0.1,0.7,0c0.2,0,0.5,0,0.7,0c0.6-0.1,1.1-0.3,1.6-0.6c0.5-0.3,0.9-0.7,1.2-1.2c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4C12,5.8,12,5.6,12,5.4v0.1c0.1-0.8-0.1-1.6-0.5-2.4c-0.4-0.7-1-1.3-1.7-1.7C9.5,1.3,9.2,1.2,8.9,1.1C8.5,1,8.2,1,7.9,1c-0.3,0-0.7,0-1,0.1C6.6,1.2,6.3,1.3,6,1.4C5.5,1.7,5.1,2,4.7,2.4C4.4,2.8,4.1,3.3,3.9,3.8C3.8,4.2,3.7,4.7,3.7,5.2c0,0.5,0.1,1,0.3,1.4C4.3,7.2,4.7,7.8,5.3,8.3z M5.7,4.5h1.6V2.9h0.5h0.1h0.6v0v0.1v1.4H10v0.4v0.2v0.6h0H8.5v1.6H7.3V5.7H5.7V4.5z"/></g></svg>',
  insert_column_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M14.5,15.7c0.1-0.1,0.2-0.1,0.2-0.2l0.1-0.1V0.4l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1L14.4,0H6.7L6.6,0.1c-0.1,0-0.1,0.1-0.2,0.2L6.3,0.4v2.3h0.1l0.5,0.1L7.3,3l0.2,0.1c0-0.1,0-0.2,0-0.3V1.2h6v13.3h-6v-1.6c0-0.1,0-0.2,0-0.3l-0.2,0.1l-0.4,0.2C6.7,12.9,6.6,13,6.4,13H6.3v2.3l0.1,0.2c0,0.1,0.1,0.1,0.2,0.2l0.1,0.1h7.7L14.5,15.7z"/><path d="M8.3,10.5C8.7,10,9,9.3,9.1,8.6c0-0.2,0.1-0.5,0-0.7c0-0.2,0-0.5,0-0.7C9,6.7,8.8,6.1,8.5,5.7C8.2,5.2,7.8,4.8,7.3,4.5C7.2,4.4,7,4.3,6.9,4.2C6.7,4.1,6.5,4,6.4,4C6.2,3.9,6.1,3.9,5.9,3.8c-0.2,0-0.3-0.1-0.5-0.1h0.1C4.7,3.7,3.8,3.9,3.1,4.3C2.4,4.7,1.8,5.3,1.4,6C1.3,6.3,1.2,6.6,1.1,6.9C1,7.2,1,7.6,1,7.9c0,0.3,0,0.7,0.1,1c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.5,0.6,0.9,1,1.3c0.4,0.3,0.8,0.6,1.3,0.8C4.2,12,4.7,12.1,5.1,12c0.5,0,1-0.1,1.4-0.3C7.2,11.5,7.8,11.1,8.3,10.5zM4.5,10.1V8.5H2.9V8V7.9V7.3h0H3h1.4V5.7h0.4h0.2h0.6v0v1.5h1.6v1.2H5.7v1.6H4.5z"/></g></svg>',
  insert_column_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M1.3,0.1C1.2,0.2,1.1,0.2,1.1,0.3L1,0.4v14.9l0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1l0.1,0.1h7.7l0.1-0.1c0.1,0,0.1-0.1,0.2-0.2l0.1-0.1v-2.3H9.3l-0.5-0.1l-0.4-0.2l-0.2-0.1c0,0.1,0,0.2,0,0.3v1.6h-6V1.3h6v1.6c0,0.1,0,0.2,0,0.3l0.2-0.1l0.4-0.2C9,2.9,9.2,2.8,9.3,2.8h0.1V0.5L9.4,0.3c0-0.1-0.1-0.1-0.2-0.2L9.1,0H1.4L1.3,0.1z"/><path d="M7.5,5.3C7,5.8,6.7,6.5,6.6,7.2c0,0.2-0.1,0.5,0,0.7c0,0.2,0,0.5,0,0.7c0.1,0.6,0.3,1.1,0.6,1.6c0.3,0.5,0.7,0.9,1.2,1.2c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.5,0.2c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3,0.1,0.5,0.1h-0.1c0.8,0.1,1.6-0.1,2.4-0.5c0.7-0.4,1.3-1,1.7-1.7c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.7,0.1-1c0-0.3,0-0.7-0.1-1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.3-0.5-0.6-0.9-1-1.3C13,4.4,12.5,4.2,12,4c-0.4-0.1-0.9-0.2-1.4-0.2c-0.5,0-1,0.1-1.4,0.2C8.5,4.3,7.9,4.7,7.5,5.3z M11.3,5.7v1.6h1.6v0.5v0.1v0.6h0h-0.1h-1.4v1.6h-0.4h-0.2h-0.6v0V8.5H8.5V7.3h1.6V5.7H11.3z"/></g></svg>',
  delete_row: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 13.83"><g><path d="M4.7,18.46l.12.08H19.73l.12-.08a.58.58,0,0,0,.22-.22l.08-.12,0-7.69-.08-.11a.77.77,0,0,0-.18-.18l-.11-.08-2.31,0-.08.28-.1.29a1.58,1.58,0,0,1-.12.29l-.14.34s0,0,.18,0H18.9v6H5.64v-6H7.35c.14,0,.2,0,.18,0l-.14-.34a2.85,2.85,0,0,1-.12-.29l-.1-.29-.07-.27-2.31,0-.11.08a.77.77,0,0,0-.18.18l-.08.11,0,7.69.08.12a.47.47,0,0,0,.09.12l.13.09ZM12.11,13a4,4,0,0,0,1.46-.21,4.51,4.51,0,0,0,1.31-.71A4,4,0,0,0,16.26,10a4.32,4.32,0,0,0-.08-2.54,4.34,4.34,0,0,0-1-1.52,4.15,4.15,0,0,0-1.54-1,4.34,4.34,0,0,0-1.35-.22A4.07,4.07,0,0,0,11,4.93,3.94,3.94,0,0,0,9.24,6.07,3.92,3.92,0,0,0,8.15,8.88a3.91,3.91,0,0,0,.12.95A4.16,4.16,0,0,0,12.11,13Zm2.35-4.14v.58H10.09V8.27h4.37v.58Z" transform="translate(-4.4 -4.71)"/></g></svg>',
  delete_column: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.81 15.74"><g><path d="M5.66,19.42l.12.08,7.69,0,.11-.08a.77.77,0,0,0,.18-.18l.08-.11,0-2.32-.15,0-.45-.15-.42-.18-.17-.07a1,1,0,0,0,0,.27v1.63h-6V5h6V6.62a.9.9,0,0,0,0,.26l.17-.07.42-.17a3.91,3.91,0,0,1,.45-.15l.15,0,0-2.32L13.75,4a.77.77,0,0,0-.18-.18l-.11-.08H5.79l-.13.07a.63.63,0,0,0-.21.22l-.08.12V19.08l.08.12a.47.47,0,0,0,.09.12.35.35,0,0,0,.12.1Zm9-3.67a4.16,4.16,0,0,0,2.36-.51,4.08,4.08,0,0,0,1.67-1.72,4,4,0,0,0,.35-.91,3.79,3.79,0,0,0,.1-1,4.71,4.71,0,0,0-.11-1,5,5,0,0,0-.3-.87,4.25,4.25,0,0,0-1-1.25,4.49,4.49,0,0,0-1.34-.81A4.26,4.26,0,0,0,15,7.48a3.88,3.88,0,0,0-1.41.25A4.32,4.32,0,0,0,11.86,9,4,4,0,0,0,11,10.94a4.4,4.4,0,0,0-.05.68,4.5,4.5,0,0,0,.05.68,3.93,3.93,0,0,0,.61,1.57,4.22,4.22,0,0,0,1.18,1.2,4.59,4.59,0,0,0,.48.27c.2.1.37.17.5.22a2.44,2.44,0,0,0,.45.12,4.61,4.61,0,0,0,.5.07Zm2.54-4.12v.58H12.87V11h4.37v.59Z" transform="translate(-5.37 -3.76)"/></g></svg>',
  fixed_column_width: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,5H18A1,1 0 0,1 19,6A1,1 0 0,1 18,7H6A1,1 0 0,1 5,6A1,1 0 0,1 6,5M21,2V4H3V2H21M15,8H17V22H15V8M7,8H9V22H7V8M11,8H13V22H11V8Z" /></svg>',
  rotate_left: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M0.5,10.2c0,0.1,0,0.2,0,0.3v0.2l0,0c0.1,0.3,0.3,0.6,0.4,0.9l0,0C1,11.8,1.3,12,1.5,11.9h0.1h0.2h0.1c0.1-0.1,0.3-0.3,0.4-0.5v-0.2c0-0.1,0-0.2-0.1-0.3l0,0c-0.2-0.2-0.3-0.4-0.3-0.7l0,0C1.8,10,1.7,9.9,1.5,9.8c-0.1,0-0.2,0-0.3,0H0.9C0.7,9.9,0.6,10,0.5,10.2L0.5,10.2z"/><path d="M2.2,11.5L2.2,11.5L2.2,11.5z"/><path d="M5.9,3.6L5.9,3.6L5.9,3.6z"/><path d="M0.1,7.9c0,0.3,0,0.6,0,0.9l0,0l0,0l0,0l0,0c0,0.2,0.1,0.3,0.2,0.4l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0l0,0c0.2,0,0.4-0.1,0.5-0.3l0,0c0-0.1,0.1-0.3,0.1-0.4V8.6l0,0c0-0.2,0-0.5,0-0.7l0,0c0-0.2-0.1-0.4-0.2-0.5C1.1,7.3,0.9,7.2,0.7,7.2S0.3,7.3,0.2,7.4C0.1,7.5,0,7.7,0.1,7.9z"/><path d="M1.9,12.7L1.9,12.7c0,0.2,0,0.4,0.2,0.5l0,0l0.2,0.3l0,0c0.2,0.1,0.3,0.2,0.5,0.4l0,0l0,0l0,0l0,0C2.9,14,3,14.1,3.2,14.1s0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5v-0.1c0-0.2-0.1-0.4-0.2-0.5l0,0l-0.4-0.4l-0.2-0.2l0,0C3,12.1,2.8,12,2.6,12l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0C2,12.3,1.9,12.5,1.9,12.7z"/><path d="M6.6,15c0,0.2,0.1,0.4,0.2,0.5c0.1,0.1,0.2,0.2,0.4,0.3l0,0c0.3,0,0.5,0,0.7,0h0.3l0,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5l0,0l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0H7.9c-0.1,0-0.3,0-0.5,0l0,0H7.3c-0.2-0.1-0.3,0-0.5,0.1l0,0C6.7,14.6,6.6,14.8,6.6,15L6.6,15L6.6,15L6.6,15z"/><path d="M4.2,7.4C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0C11.5,7.3,11,6.7,10,5.8l0,0L8.4,4.2l0,0C8.3,4.1,8.1,4,7.9,4S7.5,4.1,7.4,4.2L4.2,7.4L4.2,7.4z M6.8,9L5.7,7.9l2.2-2.2l2.3,2.2l-2.3,2.2C7.7,9.9,7.3,9.5,6.8,9L6.8,9z"/><path d="M4.1,14.1C4,14.2,4,14.3,4,14.4v0.2l0,0c0.1,0.1,0.2,0.3,0.4,0.4l0,0c0.3,0.1,0.6,0.2,0.9,0.4h0.1h0.1l0,0c0.2,0,0.3-0.1,0.5-0.1l0,0c0.2-0.1,0.3-0.3,0.3-0.4l0,0l0,0l0,0l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3l0,0C6.1,14.2,6,14.1,5.8,14l0,0c-0.3-0.1-0.5-0.2-0.8-0.2l0,0c-0.1-0.1-0.2-0.1-0.3-0.1H4.5C4.3,13.7,4.2,13.9,4.1,14.1z"/><path d="M9.3,14.4c0,0.1-0.1,0.3,0,0.4V15l0,0c0,0.1,0.1,0.3,0.5,0.4c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1l0,0c0.3-0.1,0.6-0.2,0.9-0.3l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0.1-0.3c0-0.1-0.1-0.2-0.1-0.3l0,0c-0.1-0.2-0.2-0.3-0.4-0.4l0,0h-0.3c-0.1,0-0.2,0-0.3,0l0,0c-0.2,0.1-0.5,0.2-0.8,0.3l0,0C9.5,14.1,9.4,14.2,9.3,14.4L9.3,14.4z"/><path d="M11.4,14.7L11.4,14.7L11.4,14.7z"/><path d="M9.5,15.3L9.5,15.3L9.5,15.3z"/><path d="M15.9,7.9c0-1-0.2-2-0.6-3l0,0c-0.4-1-1-1.9-1.7-2.6C12.8,1.6,12,1,11,0.6l0,0C10.1,0.2,9,0,8,0C7.3,0,6.5,0.1,5.8,0.3l0,0C5.2,0.5,4.6,0.8,4,1.1L3.1,0.2l0,0C2.9,0.1,2.8,0,2.6,0H2.4l0,0C2.2,0,2,0.2,1.9,0.4l0,0L0.1,4.9l0,0C0,5,0,5.1,0,5.2c0,0.2,0.1,0.4,0.2,0.5l0,0c0.2,0.1,0.3,0.2,0.5,0.2h0.1H1l0,0l4.7-1.8l0,0C5.9,4,6.1,3.8,6.1,3.6V3.4C6.1,3.2,6,3,5.9,2.9l0,0L5.1,2.1c0.4-0.2,0.8-0.4,1.3-0.5c0.5-0.1,1.1-0.2,1.7-0.2c0.9,0,1.7,0.2,2.5,0.5l0,0c0.8,0.3,1.5,0.8,2.1,1.4c0.6,0.6,1.1,1.3,1.4,2.1l0,0c0.3,0.8,0.5,1.6,0.5,2.5s-0.2,1.7-0.5,2.5l0,0c-0.3,0.8-0.8,1.5-1.4,2.1c-0.2,0.2-0.4,0.3-0.6,0.5l0,0c-0.2,0.1-0.3,0.3-0.3,0.5v0.1c0,0.1,0,0.3,0.1,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0c0.1,0,0.3-0.1,0.4-0.2l0,0l0,0l0,0l0,0c0.2-0.2,0.5-0.4,0.7-0.6l0,0l0,0l0,0l0,0c0.7-0.8,1.3-1.6,1.7-2.6C15.6,10,15.8,9,15.9,7.9z M1.9,4C2,3.8,2.1,3.5,2.3,3.1l0,0L2.7,2l1.2,1.2L1.9,4z"/><path d="M6.8,15.5L6.8,15.5L6.8,15.5z"/></g></svg>',
  rotate_right: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.8 15.8"><g><path d="M9.9,15.3L9.9,15.3L9.9,15.3z"/><path d="M6.9,15.1L6.9,15.1c0,0.1,0.1,0.3,0.2,0.4l0,0c0.1,0.2,0.3,0.3,0.5,0.3l0,0h0.3c0.2,0,0.4,0,0.7,0l0,0c0.2-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.2-0.2,0.2-0.4V15c0-0.2-0.1-0.4-0.2-0.4c-0.2-0.1-0.3-0.2-0.5-0.2H8.4l0,0c-0.1,0-0.3,0-0.5,0H7.6l0,0c-0.2,0-0.4,0.1-0.5,0.2C7,14.7,6.9,14.9,6.9,15.1z"/><path d="M6.5,14.4L6.5,14.4L6.5,14.4z"/><path d="M5.8,5.8L5.8,5.8c-1,0.9-1.5,1.5-1.7,1.6l0,0C4,7.5,4,7.7,4,7.9c0,0.2,0,0.4,0.2,0.5l0,0l3.2,3.2l0,0c0.2,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l3.2-3.2l0,0c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5l0,0L8.4,4.2C8.3,4.1,8.1,4,7.9,4C7.7,4,7.5,4.1,7.4,4.2l0,0L5.8,5.8z M5.6,7.9l2.3-2.2l2.2,2.2L9,9l0,0l0,0l0,0l0,0c-0.5,0.6-0.9,0.9-1.1,1.1L5.6,7.9z"/><path d="M9,15.5L9,15.5L9,15.5z"/><path d="M9.6,14.7v0.2l0,0l0,0l0,0l0,0c0.1,0.2,0.1,0.3,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1l0,0h0.1h0.1c0.3-0.1,0.6-0.3,0.9-0.4l0,0c0.1-0.1,0.2-0.2,0.3-0.4l0,0v-0.2c0-0.1,0-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4H11c-0.1,0-0.2,0.1-0.3,0.1l0,0c-0.2,0.1-0.4,0.2-0.7,0.3l0,0l0,0c-0.1,0.1-0.3,0.2-0.4,0.4C9.6,14.5,9.6,14.6,9.6,14.7z"/><path d="M9,14.5L9,14.5L9,14.5z"/><path d="M9.6,14.4L9.6,14.4L9.6,14.4z"/><path d="M11.7,14L11.7,14L11.7,14z"/><path d="M15.6,7.4L15.6,7.4L15.6,7.4z"/><path d="M15,9.4c0.2,0,0.4,0,0.6-0.2l0,0c0.1-0.1,0.2-0.2,0.2-0.4l0,0l0,0l0,0l0,0c0-0.3,0-0.6,0-0.9c0-0.2-0.1-0.4-0.2-0.5c-0.1-0.1-0.3-0.2-0.5-0.2s-0.4,0.1-0.5,0.2c-0.1,0.1-0.2,0.3-0.2,0.5l0,0c0,0.2,0,0.4,0,0.7l0,0v0.1c0,0.1,0,0.3,0.1,0.4l0,0C14.6,9.3,14.8,9.4,15,9.4L15,9.4L15,9.4z"/><path d="M14,12h0.1h0.2h0.1c0.2,0,0.5-0.2,0.6-0.4l0,0c0.2-0.3,0.3-0.6,0.4-0.9l0,0v-0.2c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.3-0.4-0.4h-0.3c-0.1,0-0.2,0-0.3,0C14.2,9.9,14,10,14,10.3l0,0c-0.1,0.2-0.2,0.5-0.3,0.7l0,0c-0.1,0.1-0.1,0.2-0.1,0.3v0.2l0,0l0,0C13.6,11.6,13.8,11.8,14,12z"/><path d="M14.6,7.4L14.6,7.4L14.6,7.4z"/><path d="M4.4,14.2c-0.1,0.1-0.1,0.2-0.1,0.3l0.1,0.2c0,0.2,0.2,0.3,0.3,0.4l0,0c0.3,0.1,0.6,0.3,1.1,0.4l0,0h0.1l0,0c0.1,0,0.2-0.1,0.4-0.2c0.1,0,0.2-0.2,0.3-0.3l0,0v-0.2c0-0.1-0.1-0.3-0.2-0.4c-0.1-0.1-0.2-0.2-0.4-0.3l0,0c-0.2-0.1-0.5-0.2-0.7-0.3l0,0c-0.1,0-0.2,0-0.3,0H4.7l0,0C4.6,13.9,4.4,14,4.4,14.2L4.4,14.2z"/><path d="M11.9,13.3c0,0.2,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2l0,0l0,0l0,0l0,0c0.1-0.1,0.3-0.3,0.4-0.4l0,0l0.2-0.3l0,0c0.1-0.2,0.2-0.3,0.2-0.5l0,0c0-0.2-0.1-0.4-0.2-0.5l0,0c-0.1-0.1-0.3-0.2-0.5-0.2l0,0c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.2,0.2l-0.4,0.4l0,0C12,13,11.9,13.1,11.9,13.3L11.9,13.3z"/><path d="M12.1,13.8L12.1,13.8L12.1,13.8z"/><path d="M11.9,13.3L11.9,13.3L11.9,13.3z"/><path d="M15.9,5.2c0-0.1-0.1-0.2-0.1-0.3l0,0L14,0.4l0,0C13.9,0.2,13.7,0,13.5,0l0,0l0,0h-0.2c-0.2,0-0.4,0.1-0.5,0.2l0,0l-0.9,0.9c-0.5-0.3-1.1-0.6-1.8-0.8l0,0C9.4,0.1,8.7,0,7.9,0c-1,0-2,0.2-3,0.6S3,1.6,2.3,2.3C1.6,3.1,1,3.9,0.6,4.9l0,0C0.2,5.8,0,6.8,0,7.9c0,1,0.2,2,0.6,3s0.9,1.8,1.7,2.6l0,0l0,0l0,0l0,0c0.2,0.2,0.5,0.4,0.7,0.6l0,0l0,0l0,0l0,0c0.2,0.1,0.3,0.2,0.5,0.2l0,0c0.2,0,0.4-0.1,0.6-0.3l0,0c0.1-0.1,0.1-0.3,0.1-0.4v-0.1l0,0C4.1,13.3,4,13.1,3.9,13l0,0c-0.2-0.1-0.4-0.3-0.6-0.5c-0.6-0.6-1.1-1.3-1.4-2.1l0,0C1.6,9.6,1.4,8.8,1.4,7.9s0.2-1.7,0.5-2.5l0,0c0.3-0.8,0.8-1.5,1.4-2.1c0.6-0.6,1.3-1.1,2.1-1.4l0,0C6.2,1.6,7,1.4,7.9,1.4c0.6,0,1.1,0.1,1.7,0.2c0.5,0.1,0.9,0.3,1.3,0.5l-0.8,0.8l0,0C10,3.1,9.9,3.2,9.9,3.4v0.2l0,0l0,0c0,0.2,0.2,0.4,0.4,0.5l0,0l4.5,1.8l0,0H15h0.1c0.2,0,0.4-0.1,0.5-0.2l0,0C15.7,5.6,15.8,5.4,15.9,5.2z M11.8,3.2L13,2l0.4,1.1l0,0c0.2,0.4,0.3,0.7,0.4,0.9L11.8,3.2z"/></g></svg>',
  mirror_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.75 15.74"><g><path d="M13.75,3.76l5.9,15.74h-5.9V3.76ZM4.9,19.5,10.8,3.76V19.5H4.9Z" transform="translate(-4.9 -3.76)"/></g></svg>',
  mirror_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 14.75"><g><path d="M20.15,13.1,4.41,19V13.1H20.15ZM4.41,4.25l15.74,5.9H4.41V4.25Z" transform="translate(-4.41 -4.25)"/></g></svg>',
  checked: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 12.1"><g><path d="M4.59,12.23l.12.18L9.43,17.5a.58.58,0,0,0,.84,0L20,7.45h0a.58.58,0,0,0,0-.84l-.85-.85a.58.58,0,0,0-.84,0H18.2l-8.12,8.41a.29.29,0,0,1-.42,0l-3.4-3.63a.58.58,0,0,0-.84,0l-.85.85a.6.6,0,0,0-.14.21.51.51,0,0,0,0,.44c.05.06.1.13.16.19Z" transform="translate(-4.38 -5.58)"/></g></svg>',
  line_break: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/></svg>',
  audio: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>',
  image_gallery: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="30 30 150 150"><g><path d="M152.775,120.548V51.651c0-12.271-9.984-22.254-22.254-22.254H43.727c-12.271,0-22.254,9.983-22.254,22.254v68.896c0,12.27,9.983,22.254,22.254,22.254h86.795C142.791,142.802,152.775,132.817,152.775,120.548z M36.394,51.651c0-4.042,3.291-7.333,7.333-7.333h86.795c4.042,0,7.332,3.291,7.332,7.333v23.917l-14.938-17.767c-1.41-1.678-3.487-2.649-5.68-2.658h-0.029c-2.184,0-4.255,0.954-5.674,2.613L76.709,98.519l-9.096-9.398c-1.427-1.474-3.392-2.291-5.448-2.273c-2.052,0.025-4.004,0.893-5.396,2.4L36.394,111.32V51.651z M41.684,127.585l20.697-22.416l9.312,9.622c1.461,1.511,3.489,2.334,5.592,2.27c2.101-0.066,4.075-1.013,5.44-2.612l34.436-40.308l20.693,24.613v21.794c0,4.042-3.29,7.332-7.332,7.332H43.727C43.018,127.88,42.334,127.775,41.684,127.585z M182.616,152.5V75.657c0-4.12-3.34-7.46-7.461-7.46c-4.119,0-7.46,3.34-7.46,7.46V152.5c0,4.112-3.347,7.46-7.461,7.46h-94c-4.119,0-7.46,3.339-7.46,7.459c0,4.123,3.341,7.462,7.46,7.462h94C172.576,174.881,182.616,164.841,182.616,152.5z"/></g></svg>',
  bookmark: '<svg viewBox="0 0 24 24"><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" /></svg>',
  dir_ltr: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2H9C6.79 2 5 3.79 5 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zm0 12v3H5v2h12v3l4-4-4-4z"/></svg>',
  dir_rtl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2V2zM8 14l-4 4 4 4v-3h12v-2H8v-3z"/></svg>',
  // Error
  alert_outline: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" /></svg>',
  // More icons
  more_text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M49.711,142.188h49.027c2.328,0.002,4.394,1.492,5.129,3.699l9.742,29.252c0.363,1.092,1.385,1.828,2.537,1.83l15.883,0.01c0.859,0,1.667-0.412,2.17-1.109s0.641-1.594,0.37-2.41l-16.625-50.045L86.503,28.953c-0.36-1.097-1.383-1.839-2.537-1.842H64.532c-1.153-0.001-2.178,0.736-2.542,1.831L13.847,173.457c-0.271,0.816-0.135,1.713,0.369,2.412c0.503,0.697,1.311,1.109,2.171,1.109h15.872c1.151,0,2.173-0.736,2.537-1.828l9.793-29.287C45.325,143.66,47.39,142.18,49.711,142.188L49.711,142.188z M53.493,119.098l15.607-46.9c0.744-2.196,2.806-3.674,5.125-3.674s4.381,1.478,5.125,3.674l15.607,46.904c0.537,1.621,0.263,3.402-0.736,4.789c-1.018,1.408-2.649,2.24-4.386,2.24H58.615c-1.736,0-3.368-0.832-4.386-2.24C53.23,122.504,52.956,120.721,53.493,119.098L53.493,119.098z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_paragraph: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 180 180"><g><path d="M128.39,28.499H63.493c-25.558,0-46.354,20.796-46.354,46.354c0,25.559,20.796,46.353,46.354,46.353h9.271v55.625h18.542V47.04h9.271V176.83h18.543V47.04h9.271V28.499z M72.764,102.664h-9.271c-15.337,0-27.813-12.475-27.813-27.812c0-15.336,12.476-27.813,27.813-27.813h9.271V102.664z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.633,190.465,66.178,190.465,63.32L190.465,63.32z M190.465,101.994c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.887,1.026,5.352,3.056,7.395c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.994L190.465,101.994z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="35 30 140 140"><g><path d="M137.215,102.045c0,3.498-2.835,6.332-6.333,6.332H24.549c-3.498,0-6.334-2.834-6.334-6.332l0,0c0-3.498,2.836-6.333,6.334-6.333h106.333C134.38,95.711,137.215,98.547,137.215,102.045L137.215,102.045z M77.715,161.545c-3.498,0-6.333-2.836-6.333-6.334V48.878c0-3.498,2.836-6.333,6.333-6.333l0,0c3.498,0,6.334,2.835,6.334,6.333v106.333C84.049,158.709,81.213,161.545,77.715,161.545L77.715,161.545z M190.465,63.32c0-2.919-1.015-5.396-3.059-7.428c-2.029-2.031-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.016-7.388,3.047c-2.029,2.032-3.056,4.498-3.056,7.386c0,2.889,1.026,5.354,3.056,7.385c2.032,2.032,4.499,3.059,7.388,3.059c2.887,0,5.354-1.026,7.383-3.059C189.45,68.632,190.465,66.177,190.465,63.32L190.465,63.32z M190.465,101.993c0-2.858-1.015-5.313-3.059-7.333c-2.029-2.042-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.005-7.388,3.047c-2.029,2.021-3.056,4.486-3.056,7.376c0,2.888,1.026,5.353,3.056,7.396c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,107.389,190.465,104.914,190.465,101.993L190.465,101.993z M190.465,140.76c0-2.918-1.015-5.395-3.059-7.438c-2.029-2.041-4.496-3.047-7.383-3.047c-2.889,0-5.355,1.006-7.388,3.047c-2.029,2.043-3.056,4.52-3.056,7.438c0,2.922,1.026,5.398,3.056,7.439c2.032,2.021,4.499,3.047,7.388,3.047c2.887,0,5.354-1.025,7.383-3.047C189.45,146.158,190.465,143.682,190.465,140.76L190.465,140.76z"/></g></svg>',
  more_horizontal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.76 3.58"><g><path d="M4.64,10.73a1.84,1.84,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0A1.79,1.79,0,0,1,8,11.63a1.84,1.84,0,0,1-.25.9,1.69,1.69,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2.08,2.08,0,0,1,4.64,10.73Zm6.09,0a1.84,1.84,0,0,1,.65-.65,1.78,1.78,0,0,1,2.67,1.55,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.76,1.76,0,0,1-1.79,0,1.79,1.79,0,0,1-.64-2.44Zm6.08,0a1.69,1.69,0,0,1,.65-.65,1.76,1.76,0,0,1,1.79,0,1.79,1.79,0,0,1,.9,1.54,1.73,1.73,0,0,1-.24.9,1.84,1.84,0,0,1-.65.65,1.8,1.8,0,0,1-2.69-1.55A2,2,0,0,1,16.81,10.73Z" transform="translate(-4.39 -9.84)"/></g></svg>',
  more_vertical: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.94 15.75"><g><path d="M12.28,7.69a1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,2,2,0,0,1,1.39-.58,1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58Zm0,2a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39A1.92,1.92,0,0,1,13.67,13a2,2,0,0,1-1.39.58A1.92,1.92,0,0,1,10.89,13a2,2,0,0,1-.58-1.39,2,2,0,0,1,2-2Zm0,5.9a1.92,1.92,0,0,1,1.39.58,2,2,0,0,1,.58,1.39,1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39,1.92,1.92,0,0,1,.58-1.39,1.94,1.94,0,0,1,1.39-.58Z" transform="translate(-10.31 -3.75)"/></g></svg>',
  // Not currently used
  attachment: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.38 15.68"><g><path d="M15.23,6h1v9.78a3.88,3.88,0,0,1-1.31,2.45,4,4,0,0,1-6.57-2.45V7A3,3,0,0,1,9.2,4.89a3,3,0,0,1,5,2.09v8.31a1.92,1.92,0,0,1-.58,1.39,2,2,0,0,1-1.39.58,1.92,1.92,0,0,1-1.39-.58,2,2,0,0,1-.58-1.39V8h1v7.32a1,1,0,0,0,.29.69,1,1,0,0,0,.69.28A.9.9,0,0,0,13,16a1,1,0,0,0,.29-.69V7a1.92,1.92,0,0,0-.58-1.39A2,2,0,0,0,11.27,5a1.92,1.92,0,0,0-1.39.58A2,2,0,0,0,9.33,7v8.31a3,3,0,1,0,5.9,0V6Z" transform="translate(-8.08 -3.78)"/></g></svg>',
  map: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.7 15.62"><g><path d="M12.05,12.42a2.93,2.93,0,1,1,2.07-5A2.88,2.88,0,0,1,15,9.49a3,3,0,0,1-.86,2.07,2.89,2.89,0,0,1-2.07.86Zm0-5.36a2.43,2.43,0,0,0-1.72,4.16,2.48,2.48,0,0,0,1.72.72,2.44,2.44,0,0,0,0-4.88Zm0-3.3A5.84,5.84,0,0,1,17.9,9.62a9.94,9.94,0,0,1-1.73,5A33.59,33.59,0,0,1,12.84,19a1.52,1.52,0,0,1-.23.2,1,1,0,0,1-.55.2h0a1,1,0,0,1-.55-.2,1.52,1.52,0,0,1-.23-.2,33.59,33.59,0,0,1-3.33-4.32,9.93,9.93,0,0,1-1.72-5,5.84,5.84,0,0,1,5.85-5.86ZM12,18.34l.08.05.06-.06a35.58,35.58,0,0,0,3.06-3.93,9.35,9.35,0,0,0,1.74-4.77,4.88,4.88,0,0,0-4.88-4.88A4.79,4.79,0,0,0,8.6,6.17,4.84,4.84,0,0,0,7.17,9.62,9.29,9.29,0,0,0,8.91,14.4,36,36,0,0,0,12,18.34Z" transform="translate(-6.2 -3.76)"/></g></svg>',
  magic_stick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.73 15.75"><g><path d="M19.86,19.21a1,1,0,0,0,.28-.68,1,1,0,0,0-.28-.7L13,10.93a1,1,0,0,0-.7-.28,1,1,0,0,0-.68,1.65l6.9,6.9a1,1,0,0,0,.69.29.93.93,0,0,0,.69-.28ZM9.19,8.55a3,3,0,0,0,1.68,0,14.12,14.12,0,0,0,1.41-.32A11.26,11.26,0,0,0,10.8,7.06c-.56-.36-.86-.56-.91-.58S10,5.91,10,5.11s0-1.26-.15-1.37a4.35,4.35,0,0,0-1.19.71c-.53.4-.81.62-.87.68a9,9,0,0,0-2-.6,6.84,6.84,0,0,0-.76-.09s0,.27.08.77a8.6,8.6,0,0,0,.61,2q-.09.09-.69.87a3.59,3.59,0,0,0-.68,1.17c.12.17.57.23,1.36.15S7,9.26,7.15,9.23s.21.36.57.91a10.49,10.49,0,0,0,1.14,1.48c0-.1.14-.57.31-1.4a3,3,0,0,0,0-1.67Z" transform="translate(-4.41 -3.74)"/></g></svg>',
  empty_file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.78 15.75"><g><path d="M14.73,3.76,18.67,7.7v9.84a2,2,0,0,1-2,2H7.84a1.89,1.89,0,0,1-1.38-.58,2,2,0,0,1-.57-1.39V5.73a1.93,1.93,0,0,1,.57-1.38,2,2,0,0,1,1.38-.58h6.62l.26,0v0Zm2.95,4.92h-2a1.93,1.93,0,0,1-1.38-.57,2,2,0,0,1-.58-1.4V6.17c0-.36,0-.84,0-1.43H7.85a1,1,0,0,0-.7.29,1,1,0,0,0-.29.7V17.54a1,1,0,0,0,.29.69,1,1,0,0,0,.69.29h8.85a1,1,0,0,0,.71-.29.92.92,0,0,0,.28-.69Zm0-1L14.73,4.74v2A1,1,0,0,0,15,7.4a1,1,0,0,0,.69.29Z" transform="translate(-5.89 -3.76)"/></g></svg>'
};
var ji = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : he, function(t, i) {
    const s = {
      code: "en",
      toolbar: {
        default: "Default",
        save: "Save",
        font: "Font",
        formats: "Formats",
        fontSize: "Size",
        bold: "Bold",
        underline: "Underline",
        italic: "Italic",
        strike: "Strike",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "Remove Format",
        fontColor: "Font Color",
        hiliteColor: "Highlight Color",
        indent: "Indent",
        outdent: "Outdent",
        align: "Align",
        alignLeft: "Align left",
        alignRight: "Align right",
        alignCenter: "Align center",
        alignJustify: "Align justify",
        list: "List",
        orderList: "Ordered list",
        unorderList: "Unordered list",
        horizontalRule: "Horizontal line",
        hr_solid: "Solid",
        hr_dotted: "Dotted",
        hr_dashed: "Dashed",
        table: "Table",
        link: "Link",
        math: "Math",
        image: "Image",
        video: "Video",
        audio: "Audio",
        fullScreen: "Full screen",
        showBlocks: "Show blocks",
        codeView: "Code view",
        undo: "Undo",
        redo: "Redo",
        preview: "Preview",
        print: "print",
        tag_p: "Paragraph",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Quote",
        tag_pre: "Code",
        template: "Template",
        lineHeight: "Line height",
        paragraphStyle: "Paragraph style",
        textStyle: "Text style",
        imageGallery: "Image gallery",
        dir_ltr: "Left to right",
        dir_rtl: "Right to left",
        mention: "Mention"
      },
      dialogBox: {
        linkBox: {
          title: "Insert Link",
          url: "URL to link",
          text: "Text to display",
          newWindowCheck: "Open in new window",
          downloadLinkCheck: "Download link",
          bookmark: "Bookmark"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Mathematical Notation",
          fontSizeLabel: "Font Size",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "Insert image",
          file: "Select from files",
          url: "Image URL",
          altText: "Alternative text"
        },
        videoBox: {
          title: "Insert Video",
          file: "Select from files",
          url: "Media embed URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Insert Audio",
          file: "Select from files",
          url: "Audio URL"
        },
        browser: {
          tags: "Tags",
          search: "Search"
        },
        caption: "Insert description",
        close: "Close",
        submitButton: "Submit",
        revertButton: "Revert",
        proportion: "Constrain proportions",
        basic: "Basic",
        left: "Left",
        right: "Right",
        center: "Center",
        width: "Width",
        height: "Height",
        size: "Size",
        ratio: "Ratio"
      },
      controller: {
        edit: "Edit",
        unlink: "Unlink",
        remove: "Remove",
        insertRowAbove: "Insert row above",
        insertRowBelow: "Insert row below",
        deleteRow: "Delete row",
        insertColumnBefore: "Insert column before",
        insertColumnAfter: "Insert column after",
        deleteColumn: "Delete column",
        fixedColumnWidth: "Fixed column width",
        resize100: "Resize 100%",
        resize75: "Resize 75%",
        resize50: "Resize 50%",
        resize25: "Resize 25%",
        autoSize: "Auto size",
        mirrorHorizontal: "Mirror, Horizontal",
        mirrorVertical: "Mirror, Vertical",
        rotateLeft: "Rotate left",
        rotateRight: "Rotate right",
        maxSize: "Max size",
        minSize: "Min size",
        tableHeader: "Table header",
        mergeCells: "Merge cells",
        splitCells: "Split Cells",
        HorizontalSplit: "Horizontal split",
        VerticalSplit: "Vertical split"
      },
      menu: {
        spaced: "Spaced",
        bordered: "Bordered",
        neon: "Neon",
        translucent: "Translucent",
        shadow: "Shadow",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: s
    })), s;
  });
})(ji);
var qn = ji.exports;
const $n = /* @__PURE__ */ Ye(qn), J = {
  _d: null,
  _w: null,
  isIE: null,
  isIE_Edge: null,
  isOSX_IOS: null,
  isChromium: null,
  isMobile: null,
  isResizeObserverSupported: null,
  _propertiesInit: function() {
    this._d || (this._d = document, this._w = window, this.isIE = navigator.userAgent.indexOf("Trident") > -1, this.isIE_Edge = navigator.userAgent.indexOf("Trident") > -1 || navigator.appVersion.indexOf("Edge") > -1, this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform), this.isChromium = !!window.chrome, this.isResizeObserverSupported = typeof ResizeObserver == "function", this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "ontouchstart" in window);
  },
  _allowedEmptyNodeList: ".se-component, pre, blockquote, hr, li, table, img, iframe, video, audio, canvas",
  /**
   * @description HTML Reserved Word Converter.
   * @param {String} contents 
   * @returns {String} HTML string
   * @private
   */
  _HTMLConvertor: function(e) {
    const t = { "&": "&amp;", " ": "&nbsp;", "'": "&apos;", '"': "&quot;", "<": "&lt;", ">": "&gt;" };
    return e.replace(/&|\u00A0|'|"|<|>/g, function(i) {
      return typeof t[i] == "string" ? t[i] : i;
    });
  },
  /**
   * @description Unicode Character 'ZERO WIDTH SPACE' (\u200B)
   */
  zeroWidthSpace: "​",
  /**
   * @description Regular expression to find 'zero width space' (/\u200B/g)
   */
  zeroWidthRegExp: new RegExp("​", "g"),
  /**
   * @description Regular expression to find only 'zero width space' (/^\u200B+$/)
   */
  onlyZeroWidthRegExp: new RegExp("^​+$"),
  fontValueMap: {
    "xx-small": 1,
    "x-small": 2,
    small: 3,
    medium: 4,
    large: 5,
    "x-large": 6,
    "xx-large": 7
  },
  /**
   * @description A method that checks If the text is blank or to see if it contains 'ZERO WIDTH SPACE' or empty (util.zeroWidthSpace)
   * @param {String|Node} text String value or Node
   * @returns {Boolean}
   */
  onlyZeroWidthSpace: function(e) {
    return e == null ? !1 : (typeof e != "string" && (e = e.textContent), e === "" || this.onlyZeroWidthRegExp.test(e));
  },
  /**
   * @description Gets XMLHttpRequest object
   * @returns {XMLHttpRequest|ActiveXObject}
   */
  getXMLHttpRequest: function() {
    if (this._w.ActiveXObject)
      try {
        return new ActiveXObject("Msxml2.XMLHTTP");
      } catch {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP");
        } catch {
          return null;
        }
      }
    else return this._w.XMLHttpRequest ? new XMLHttpRequest() : null;
  },
  /**
   * @description Object.values
   * @param {Object|null} obj Object parameter.
   * @returns {Array}
   */
  getValues: function(e) {
    return e ? this._w.Object.keys(e).map(function(t) {
      return e[t];
    }) : [];
  },
  /**
   * @description Convert the CamelCase To the KebabCase.
   * @param {String|Array} param [Camel string]
   * @returns {String|Array}
   */
  camelToKebabCase: function(e) {
    return typeof e == "string" ? e.replace(/[A-Z]/g, function(t) {
      return "-" + t.toLowerCase();
    }) : e.map(function(t) {
      return J.camelToKebabCase(t);
    });
  },
  /**
   * @description Convert the KebabCase To the CamelCase.
   * @param {String|Array} param [KebabCase string]
   * @returns {String|Array}
   */
  kebabToCamelCase: function(e) {
    return typeof e == "string" ? e.replace(/-[a-zA-Z]/g, function(t) {
      return t.replace("-", "").toUpperCase();
    }) : e.map(function(t) {
      return J.camelToKebabCase(t);
    });
  },
  /**
   * @description Create Element node
   * @param {String} elementName Element name
   * @returns {Element}
   */
  createElement: function(e) {
    return this._d.createElement(e);
  },
  /**
   * @description Create text node
   * @param {String} text text contents
   * @returns {Node}
   */
  createTextNode: function(e) {
    return this._d.createTextNode(e || "");
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * When using an attribute with "<" or ">", use "HTMLEncoder" to save. (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLEncoder: function(e) {
    const t = { "<": "$lt;", ">": "$gt;" };
    return e.replace(/<|>/g, function(i) {
      return typeof t[i] == "string" ? t[i] : i;
    });
  },
  /**
   * @description The editor checks tags by string.
   * If there is "<" or ">" in the attribute of tag, HTML is broken when checking the tag.
   * Decoder of data stored as "HTMLEncoder" (ex: math(katex))
   * @param {String} contents HTML or Text string
   * @returns {String}
   */
  HTMLDecoder: function(e) {
    const t = { "$lt;": "<", "$gt;": ">" };
    return e.replace(/\$lt;|\$gt;/g, function(i) {
      return typeof t[i] == "string" ? t[i] : i;
    });
  },
  /**
   * @description This method run Object.prototype.hasOwnProperty.call(obj, key)
   * @param {Object} obj Object
   * @param {String} key obj.key
   * @returns {Boolean}
   */
  hasOwn: function(e, t) {
    return this._hasOwn.call(e, t);
  },
  _hasOwn: Object.prototype.hasOwnProperty,
  /**
   * @deprecated
   * @description Get the the tag path of the arguments value
   * If not found, return the first found value
   * @param {Array} nameArray File name array
   * @param {String} extension js, css
   * @returns {String}
   */
  getIncludePath: function(e, t) {
    let i = "";
    const s = [], n = t === "js" ? "script" : "link", r = t === "js" ? "src" : "href";
    let u = "(?:";
    for (let _ = 0, c = e.length; _ < c; _++)
      u += e[_] + (_ < c - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), l = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let _ = this._d.getElementsByTagName(n), c = 0; c < _.length; c++)
      l.test(_[c][r]) && s.push(_[c]);
    for (let _ = 0; _ < s.length; _++) {
      let c = s[_][r].match(f);
      if (c) {
        i = c[0];
        break;
      }
    }
    if (i === "" && (i = s.length > 0 ? s[0][r] : ""), i.indexOf(":/") === -1 && i.slice(0, 2) !== "//" && (i = i.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + i : location.href.match(/^[^\?]*\/(?:)/)[0] + i), !i) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
    return i;
  },
  /**
   * @deprecated
   * @description Returns the CSS text that has been applied to the current page.
   * @param {Document|null} doc To get the CSS text of an document(core._wd). If null get the current document.
   * @returns {String} Styles string
   */
  getPageStyle: function(e) {
    let t = "";
    const i = (e || this._d).styleSheets;
    for (let s = 0, n = i.length, r; s < n; s++) {
      try {
        r = i[s].cssRules;
      } catch {
        continue;
      }
      if (r)
        for (let u = 0, f = r.length; u < f; u++)
          t += r[u].cssText;
    }
    return t;
  },
  /**
   * @description Get the argument iframe's document object
   * @param {Element} iframe Iframe element (context.element.wysiwygFrame)
   * @returns {Document}
   */
  getIframeDocument: function(e) {
    let t = e.contentWindow || e.contentDocument;
    return t.document && (t = t.document), t;
  },
  /**
   * @description Get attributes of argument element to string ('class="---" name="---" ')
   * @param {Element} element Element object
   * @param {Array|null} exceptAttrs Array of attribute names to exclude from the result
   * @returns {String}
   */
  getAttributesToString: function(e, t) {
    if (!e.attributes) return "";
    const i = e.attributes;
    let s = "";
    for (let n = 0, r = i.length; n < r; n++)
      t && t.indexOf(i[n].name) > -1 || (s += i[n].name + '="' + i[n].value + '" ');
    return s;
  },
  /**
   * @descriptionGets Get the length in bytes of a string.
   * referencing code: "https://github.com/shaan1974/myrdin/blob/master/expressions/string.js#L11"
   * @param {String} text String text
   * @returns {Number}
   */
  getByteLength: function(e) {
    if (!e || !e.toString) return 0;
    e = e.toString();
    const t = this._w.encodeURIComponent;
    let i, s;
    return this.isIE_Edge ? (s = this._w.unescape(t(e)).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), s + i) : (s = new this._w.TextEncoder("utf-8").encode(e).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), s + i);
  },
  /**
   * @description It is judged whether it is the edit region top div element or iframe's body tag.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isWysiwygDiv: function(e) {
    return e && e.nodeType === 1 && (this.hasClass(e, "se-wrapper-wysiwyg") || /^BODY$/i.test(e.nodeName));
  },
  /**
   * @description It is judged whether it is the contenteditable property is false.
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNonEditable: function(e) {
    return e && e.nodeType === 1 && e.getAttribute("contenteditable") === "false";
  },
  /**
   * @description It is judged whether it is a node related to the text style.
   * (strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isTextStyleElement: function(e) {
    return e && e.nodeType !== 3 && /^(strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)$/i.test(e.nodeName);
  },
  /**
   * @description It is judged whether it is the input element (INPUT, TEXTAREA)
   * @param {Node} element The node to check
   * @returns 
   */
  isInputElement: function(e) {
    return e && e.nodeType === 1 && /^(INPUT|TEXTAREA)$/i.test(e.nodeName);
  },
  /**
   * @description It is judged whether it is the format element (P, DIV, H[1-6], PRE, LI | class="__se__format__replace_xxx")
   * Format element also contain "free format Element"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(P|DIV|H[1-6]|PRE|LI|TH|TD|DETAILS)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__replace_.+(\\s|$)|(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e);
  },
  /**
   * @description It is judged whether it is the range format element. (BLOCKQUOTE, OL, UL, FIGCAPTION, TABLE, THEAD, TBODY, TR, TH, TD | class="__se__format__range_xxx")
   * Range format element is wrap the "format element" and "component"
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isRangeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(BLOCKQUOTE|OL|UL|FIGCAPTION|TABLE|THEAD|TBODY|TR|TH|TD|DETAILS)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the closure range format element. (TH, TD | class="__se__format__range__closure_xxx")
   * Closure range format elements is included in the range format element.
   *  - Closure range format element is wrap the "format element" and "component"
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureRangeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^(TH|TD)$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__range__closure_.+(\\s|$)"));
  },
  /**
   * @description It is judged whether it is the free format element. (PRE | class="__se__format__free_xxx")
   * Free format elements is included in the format element.
   * Free format elements's line break is "BR" tag.
   * ※ Entering the Enter key in the space on the last line ends "Free Format" and appends "Format".
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isFreeFormatElement: function(e) {
    return e && e.nodeType === 1 && (/^PRE$/i.test(e.nodeName) || this.hasClass(e, "(\\s|^)__se__format__free_.+(\\s|$)")) && !this.isComponent(e) && !this.isWysiwygDiv(e);
  },
  /**
   * @description It is judged whether it is the closure free format element. (class="__se__format__free__closure_xxx")
   * Closure free format elements is included in the free format element.
   *  - Closure free format elements's line break is "BR" tag.
   * ※ You cannot exit this format with the Enter key or Backspace key.
   * ※ Use it only in special cases. ([ex] format of table cells)
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isClosureFreeFormatElement: function(e) {
    return e && e.nodeType === 1 && this.hasClass(e, "(\\s|^)__se__format__free__closure_.+(\\s|$)");
  },
  /**
   * @description It is judged whether it is the component[img, iframe, video, audio, table] cover(class="se-component") and table, hr
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isComponent: function(e) {
    return e && (/se-component/.test(e.className) || /^(TABLE|HR)$/.test(e.nodeName));
  },
  /**
   * @description Checks for "__se__uneditable" in the class list.
   * Components with class "__se__uneditable" cannot be modified.
   * @param {Element} element The element to check
   * @returns {Boolean}
   */
  isUneditableComponent: function(e) {
    return e && this.hasClass(e, "__se__uneditable");
  },
  /**
   * @description It is judged whether it is the component [img, iframe] cover(class="se-component")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isMediaComponent: function(e) {
    return e && /se-component/.test(e.className);
  },
  /**
   * @description It is judged whether it is the not checking node. (class="katex", "__se__tag")
   * @param {Node} element The node to check
   * @returns {Boolean}
   */
  isNotCheckingNode: function(e) {
    return e && /katex|__se__tag/.test(e.className);
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isRangeFormatElement(e) && e.firstElementChild, this.isFormatElement(e) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a format node (util.isRangeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getRangeFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isRangeFormatElement(e) && !/^(THEAD|TBODY|TR)$/i.test(e.nodeName) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a free format node (util.isFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getFreeFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isFreeFormatElement(e) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description If a parent node that contains an argument node finds a closure free format node (util.isClosureFreeFormatElement), it returns that node.
   * @param {Node} element Reference node.
   * @param {Function|null} validation Additional validation function.
   * @returns {Element|null}
   */
  getClosureFreeFormatElement: function(e, t) {
    if (!e) return null;
    for (t || (t = function() {
      return !0;
    }); e; ) {
      if (this.isWysiwygDiv(e)) return null;
      if (this.isClosureFreeFormatElement(e) && t(e)) return e;
      e = e.parentNode;
    }
    return null;
  },
  /**
   * @description Add style and className of copyEl to originEl
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   * @param {Array|null} blacklist Blacklist array(LowerCase)
   */
  copyTagAttributes: function(e, t, i) {
    if (t.style.cssText) {
      const n = t.style;
      for (let r = 0, u = n.length; r < u; r++)
        e.style[n[r]] = n[n[r]];
    }
    const s = t.attributes;
    for (let n = 0, r = s.length, u; n < r; n++)
      u = s[n].name.toLowerCase(), i && i.indexOf(u) > -1 || !s[n].value ? e.removeAttribute(u) : u !== "style" && e.setAttribute(s[n].name, s[n].value);
  },
  /**
   * @description Copy and apply attributes of format tag that should be maintained. (style, class) Ignore "__se__format__" class
   * @param {Element} originEl Origin element
   * @param {Element} copyEl Element to copy
   */
  copyFormatAttributes: function(e, t) {
    t = t.cloneNode(!1), t.className = t.className.replace(/(\s|^)__se__format__[^\s]+/g, ""), this.copyTagAttributes(e, t);
  },
  /**
   * @description Get the item from the array that matches the condition.
   * @param {Array|HTMLCollection|NodeList} array Array to get item
   * @param {Function|null} validation Conditional function
   * @param {Boolean} multi If true, returns all items that meet the criteria otherwise, returns an empty array.
   * If false, returns only one item that meet the criteria otherwise return null.
   * @returns {Array|Node|null}
   */
  getArrayItem: function(e, t, i) {
    if (!e || e.length === 0) return null;
    t = t || function() {
      return !0;
    };
    const s = [];
    for (let n = 0, r = e.length, u; n < r; n++)
      if (u = e[n], t(u))
        if (i) s.push(u);
        else return u;
    return i ? s : null;
  },
  /**
   * @description Check if an array contains an element 
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to check for
   * @returns {Boolean}
   */
  arrayIncludes: function(e, t) {
    for (let i = 0; i < e.length; i++)
      if (e[i] === t)
        return !0;
    return !1;
  },
  /**
   * @description Get the index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} element The element to find index
   * @returns {Number}
   */
  getArrayIndex: function(e, t) {
    let i = -1;
    for (let s = 0, n = e.length; s < n; s++)
      if (e[s] === t) {
        i = s;
        break;
      }
    return i;
  },
  /**
   * @description Get the next index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  nextIdx: function(e, t) {
    let i = this.getArrayIndex(e, t);
    return i === -1 ? -1 : i + 1;
  },
  /**
   * @description Get the previous index of the argument value in the element array
   * @param {Array|HTMLCollection|NodeList} array Element array
   * @param {Node} item The element to find index
   * @returns {Number}
   */
  prevIdx: function(e, t) {
    let i = this.getArrayIndex(e, t);
    return i === -1 ? -1 : i - 1;
  },
  /**
   * @description Returns the index compared to other sibling nodes.
   * @param {Node} node The Node to find index
   * @returns {Number}
   */
  getPositionIndex: function(e) {
    let t = 0;
    for (; e = e.previousSibling; )
      t += 1;
    return t;
  },
  /**
   * @description Returns the position of the "node" in the "parentNode" in a numerical array.
   * ex) <p><span>aa</span><span>bb</span></p> : getNodePath(node: "bb", parentNode: "<P>") -> [1, 0]
   * @param {Node} node The Node to find position path
   * @param {Node|null} parentNode Parent node. If null, wysiwyg div area
   * @param {Object|null} _newOffsets If you send an object of the form "{s: 0, e: 0}", the text nodes that are attached together are merged into one, centered on the "node" argument.
   * "_newOffsets.s" stores the length of the combined characters after "node" and "_newOffsets.e" stores the length of the combined characters before "node".
   * Do not use unless absolutely necessary.
   * @returns {Array}
   */
  getNodePath: function(e, t, i) {
    const s = [];
    let n = !0;
    return this.getParentElement(e, (function(r) {
      if (r === t && (n = !1), n && !this.isWysiwygDiv(r)) {
        if (i && r.nodeType === 3) {
          let u = null, f = null;
          i.s = i.e = 0;
          let l = r.previousSibling;
          for (; l && l.nodeType === 3; )
            f = l.textContent.replace(this.zeroWidthRegExp, ""), i.s += f.length, r.textContent = f + r.textContent, u = l, l = l.previousSibling, this.removeItem(u);
          let _ = r.nextSibling;
          for (; _ && _.nodeType === 3; )
            f = _.textContent.replace(this.zeroWidthRegExp, ""), i.e += f.length, r.textContent += f, u = _, _ = _.nextSibling, this.removeItem(u);
        }
        s.push(r);
      }
      return !1;
    }).bind(this)), s.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(e, t) {
    let i = t, s;
    for (let n = 0, r = e.length; n < r && (s = i.childNodes, s.length !== 0); n++)
      s.length <= e[n] ? i = s[s.length - 1] : i = s[e[n]];
    return i;
  },
  /**
   * @description Compares the style and class for equal values.
   * Returns true if both are text nodes.
   * @param {Node} a Node to compare
   * @param {Node} b Node to compare
   * @returns {Boolean}
   */
  isSameAttributes: function(e, t) {
    if (e.nodeType === 3 && t.nodeType === 3) return !0;
    if (e.nodeType === 3 || t.nodeType === 3) return !1;
    const i = e.style, s = t.style;
    let n = 0;
    for (let _ = 0, c = i.length; _ < c; _++)
      i[i[_]] === s[i[_]] && n++;
    const r = e.classList, u = t.classList, f = this._w.RegExp;
    let l = 0;
    for (let _ = 0, c = r.length; _ < c; _++)
      f("(s|^)" + r[_] + "(s|$)").test(u.value) && l++;
    return n === s.length && n === i.length && l === u.length && l === r.length;
  },
  /**
   * @description Check the line element(util.isFormatElement) is empty.
   * @param {Element} element Format element node
   * @returns {Boolean}
   */
  isEmptyLine: function(e) {
    return !e || !e.parentNode || !e.querySelector("IMG, IFRAME, AUDIO, VIDEO, CANVAS, TABLE") && e.children.length === 0 && this.onlyZeroWidthSpace(e.textContent);
  },
  /**
   * @description Check the span's attributes are empty.
   * @param {Element|null} element Element node
   * @returns {Boolean}
   */
  isSpanWithoutAttr: function(e) {
    return !!e && e.nodeType === 1 && /^SPAN$/i.test(e.nodeName) && !e.className && !e.style.cssText;
  },
  /**
   * @description Check the node is a list (ol, ul)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isList: function(e) {
    return e && /^(OL|UL)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a list cell (li)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isListCell: function(e) {
    return e && /^LI$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a table (table, thead, tbody, tr, th, td)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isTable: function(e) {
    return e && /^(TABLE|THEAD|TBODY|TR|TH|TD)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a table cell (td, th)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isCell: function(e) {
    return e && /^(TD|TH)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a break node (BR)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isBreak: function(e) {
    return e && /^BR$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a anchor node (A)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isAnchor: function(e) {
    return e && /^A$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a media node (img, iframe, audio, video, canvas)
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isMedia: function(e) {
    return e && /^(IMG|IFRAME|AUDIO|VIDEO|CANVAS)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Check the node is a figure tag or util.isMedia()
   * @param {Node|String} node The element or element name to check
   * @returns {Boolean}
   */
  isFigures: function(e) {
    return e && (this.isMedia(e) || /^(FIGURE)$/i.test(typeof e == "string" ? e : e.nodeName));
  },
  /**
   * @description Checks for numeric (with decimal point).
   * @param {String|Number} text Text string or number
   * @returns {Boolean}
   */
  isNumber: function(e) {
    return !!e && /^-?\d+(\.\d+)?$/.test(e + "");
  },
  /**
   * @description Get a number.
   * @param {String|Number} text Text string or number
   * @param {Number} maxDec Maximum number of decimal places (-1 : Infinity)
   * @returns {Number}
   */
  getNumber: function(e, t) {
    if (!e) return 0;
    let i = (e + "").match(/-?\d+(\.\d+)?/);
    return !i || !i[0] ? 0 : (i = i[0], t < 0 ? i * 1 : t === 0 ? this._w.Math.round(i * 1) : (i * 1).toFixed(t) * 1);
  },
  /**
   * @description Get all "children" of the argument value element (Without text nodes)
   * @param {Element} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildren: function(e, t) {
    const i = [];
    return !e || !e.children || e.children.length === 0 || (t = t || function() {
      return !0;
    }, function s(n) {
      if (e !== n && t(n) && i.push(n), n.children)
        for (let r = 0, u = n.children.length; r < u; r++)
          s(n.children[r]);
    }(e)), i;
  },
  /**
   * @description Get all "childNodes" of the argument value element (Include text nodes)
   * @param {Node} element element to get child node
   * @param {Function|null} validation Conditional function
   * @returns {Array}
   */
  getListChildNodes: function(e, t) {
    const i = [];
    return !e || e.childNodes.length === 0 || (t = t || function() {
      return !0;
    }, function s(n) {
      e !== n && t(n) && i.push(n);
      for (let r = 0, u = n.childNodes.length; r < u; r++)
        s(n.childNodes[r]);
    }(e)), i;
  },
  /**
   * @description Returns the number of parents nodes.
   * "0" when the parent node is the WYSIWYG area.
   * "-1" when the element argument is the WYSIWYG area.
   * @param {Node} element The element to check
   * @returns {Number}
   */
  getElementDepth: function(e) {
    if (!e || this.isWysiwygDiv(e)) return -1;
    let t = 0;
    for (e = e.parentNode; e && !this.isWysiwygDiv(e); )
      t += 1, e = e.parentNode;
    return t;
  },
  /**
   * @description Compares two elements to find a common ancestor, and returns the order of the two elements.
   * @param {Node} a Node to compare.
   * @param {Node} b Node to compare.
   * @returns {Object} { ancesstor, a, b, result: (a > b ? 1 : a < b ? -1 : 0) };
   */
  compareElements: function(e, t) {
    let i = e, s = t;
    for (; i && s && i.parentNode !== s.parentNode; )
      i = i.parentNode, s = s.parentNode;
    if (!i || !s) return { ancestor: null, a: e, b: t, result: 0 };
    const n = i.parentNode.childNodes, r = this.getArrayIndex(n, i), u = this.getArrayIndex(n, s);
    return {
      ancestor: i.parentNode,
      a: i,
      b: s,
      result: r > u ? 1 : r < u ? -1 : 0
    };
  },
  /**
   * @description Get the parent element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getParentElement: function(e, t) {
    let i;
    if (typeof t == "function")
      i = t;
    else {
      let s;
      /^\./.test(t) ? (s = "className", t = t.split(".")[1]) : /^#/.test(t) ? (s = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (s = "name", t = "^" + t.split(":")[1] + "$") : (s = "nodeName", t = "^" + t + "$");
      const n = new this._w.RegExp(t, "i");
      i = function(r) {
        return n.test(r[s]);
      };
    }
    for (; e && !i(e); ) {
      if (this.isWysiwygDiv(e))
        return null;
      e = e.parentNode;
    }
    return e;
  },
  /**
   * @description Gets the previous sibling last child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getPreviousDeepestNode: function(e, t) {
    let i = e.previousSibling;
    if (!i) {
      for (let s = e.parentNode; s; s = s.parentNode) {
        if (s === t) return null;
        if (s.previousSibling) {
          i = s.previousSibling;
          break;
        }
      }
      if (!i) return null;
    }
    for (; i.lastChild; ) i = i.lastChild;
    return i;
  },
  /**
   * @description Gets the next sibling first child. If there is no sibling, then it'll take it from the closest ancestor with child
   * Returns null if not found.
   * @param {Node} node Reference element
   * @param {Node|null} ceiling Highest boundary allowed
   * @returns {Node|null}
   */
  getNextDeepestNode: function(e, t) {
    let i = e.nextSibling;
    if (!i) {
      for (let s = e.parentNode; s; s = s.parentNode) {
        if (s === t) return null;
        if (s.nextSibling) {
          i = s.nextSibling;
          break;
        }
      }
      if (!i) return null;
    }
    for (; i.firstChild; ) i = i.firstChild;
    return i;
  },
  /**
   * @description Get the child element of the argument value.
   * A tag that satisfies the query condition is imported.
   * Returns null if not found.
   * @param {Node} element Reference element
   * @param {String|Function} query Query String (nodeName, .className, #ID, :name) or validation function.
   * @param {Boolean} last If true returns the last node among the found child nodes. (default: first node)
   * Not use it like jquery.
   * Only one condition can be entered at a time.
   * @returns {Element|null}
   */
  getChildElement: function(e, t, i) {
    let s;
    if (typeof t == "function")
      s = t;
    else {
      let r;
      /^\./.test(t) ? (r = "className", t = t.split(".")[1]) : /^#/.test(t) ? (r = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (r = "name", t = "^" + t.split(":")[1] + "$") : (r = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const u = new this._w.RegExp(t, "i");
      s = function(f) {
        return u.test(f[r]);
      };
    }
    const n = this.getListChildNodes(e, function(r) {
      return s(r);
    });
    return n[i ? n.length - 1 : 0];
  },
  /**
   * @description 1. The first node of all the child nodes of the "first" element is returned.
   * 2. The last node of all the child nodes of the "last" element is returned.
   * 3. When there is no "last" element, the first and last nodes of all the children of the "first" element are returned.
   * { sc: "first", ec: "last" }
   * @param {Node} first First element
   * @param {Node|null} last Last element
   * @returns {Object}
   */
  getEdgeChildNodes: function(e, t) {
    if (e) {
      for (t || (t = e); e && e.nodeType === 1 && e.childNodes.length > 0 && !this.isBreak(e); ) e = e.firstChild;
      for (; t && t.nodeType === 1 && t.childNodes.length > 0 && !this.isBreak(t); ) t = t.lastChild;
      return {
        sc: e,
        ec: t || e
      };
    }
  },
  /**
   * @description Returns the position of the left and top of argument. {left:0, top:0}
   * @param {Node} element Target node
   * @param {Element|null} wysiwygFrame When use iframe option, iframe object should be sent (context.element.wysiwygFrame)
   * @returns {Object}
   */
  getOffset: function(e, t) {
    let i = 0, s = 0, n = e.nodeType === 3 ? e.parentElement : e;
    const r = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; n && !this.hasClass(n, "se-container") && n !== r; )
      i += n.offsetLeft, s += n.offsetTop, n = n.offsetParent;
    const u = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (u ? t.parentElement.offsetLeft : 0),
      top: s - (r ? r.scrollTop : 0) + (u ? t.parentElement.offsetTop : 0)
    };
  },
  /**
   * @description It compares the start and end indexes of "a" and "b" and returns the number of overlapping indexes in the range.
   * ex) 1, 5, 4, 6 => "2" (4 ~ 5)
   * @param {Number} aStart Start index of "a"
   * @param {Number} aEnd End index of "a"
   * @param {Number} bStart Start index of "b"
   * @param {Number} bEnd Start index of "b"
   * @returns {Number}
   */
  getOverlapRangeAtIndex: function(e, t, i, s) {
    if (e <= s ? t < i : t > i) return 0;
    const n = (e > i ? e : i) - (t < s ? t : s);
    return (n < 0 ? n * -1 : n) + 1;
  },
  /**
   * @description Set the text content value of the argument value element
   * @param {Node} element Element to replace text content
   * @param {String} txt Text to be applied
   */
  changeTxt: function(e, t) {
    !e || !t || (e.textContent = t);
  },
  /**
   * @description Replace element
   * @param {Element} element Target element
   * @param {String|Element} newElement String or element of the new element to apply
   */
  changeElement: function(e, t) {
    if (typeof t == "string")
      if (e.outerHTML)
        e.outerHTML = t;
      else {
        const i = this.createElement("DIV");
        i.innerHTML = t, t = i.firstChild, e.parentNode.replaceChild(t, e);
      }
    else t.nodeType === 1 && e.parentNode.replaceChild(t, e);
  },
  /**
   * @description Set style, if all styles are deleted, the style properties are deleted.
   * @param {Element} element Element to set style
   * @param {String} styleName Style attribute name (marginLeft, textAlign...)
   * @param {String|Number} value Style value
   */
  setStyle: function(e, t, i) {
    e.style[t] = i, !i && !e.style.cssText && e.removeAttribute("style");
  },
  /**
   * @description Determine whether any of the matched elements are assigned the given class
   * @param {Element} element Elements to search class name
   * @param {String} className Class name to search for
   * @returns {Boolean}
   */
  hasClass: function(e, t) {
    if (e)
      return new this._w.RegExp(t).test(e.className);
  },
  /**
   * @description Append the className value of the argument value element
   * @param {Element} element Elements to add class name
   * @param {String} className Class name to be add
   */
  addClass: function(e, t) {
    !e || new this._w.RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className) || (e.className += (e.className.length > 0 ? " " : "") + t);
  },
  /**
   * @description Delete the className value of the argument value element
   * @param {Element} element Elements to remove class name
   * @param {String} className Class name to be remove
   */
  removeClass: function(e, t) {
    if (!e) return;
    const i = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    e.className = e.className.replace(i, " ").trim(), e.className.trim() || e.removeAttribute("class");
  },
  /**
   * @description Argument value If there is no class name, insert it and delete the class name if it exists
   * @param {Element} element Elements to replace class name
   * @param {String} className Class name to be change
   * @returns {Boolean|undefined}
   */
  toggleClass: function(e, t) {
    if (!e) return;
    let i = !1;
    const s = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return s.test(e.className) ? e.className = e.className.replace(s, " ").trim() : (e.className += " " + t, i = !0), e.className.trim() || e.removeAttribute("class"), i;
  },
  /**
   * @description Checks if element can't be easily enabled
   * @param {Element} element Element to check for
   */
  isImportantDisabled: function(e) {
    return e.hasAttribute("data-important-disabled");
  },
  /**
   * @description In the predefined code view mode, the buttons except the executable button are changed to the 'disabled' state.
   * core.codeViewDisabledButtons (An array of buttons whose class name is not "se-code-view-enabled")
   * core.resizingDisabledButtons (An array of buttons whose class name is not "se-resizing-enabled")
   * @param {Boolean} disabled Disabled value
   * @param {Array|HTMLCollection|NodeList} buttonList Button array
   * @param {Boolean} important If priveleged mode should be used (Necessary to switch importantDisabled buttons)
   */
  setDisabledButtons: function(e, t, i) {
    for (let s = 0, n = t.length; s < n; s++) {
      let r = t[s];
      (i || !this.isImportantDisabled(r)) && (r.disabled = e), i && (e ? r.setAttribute("data-important-disabled", "") : r.removeAttribute("data-important-disabled"));
    }
  },
  /**
   * @description Delete argumenu value element
   * @param {Node} item Node to be remove
   */
  removeItem: function(e) {
    e && (typeof e.remove == "function" ? e.remove() : e.parentNode && e.parentNode.removeChild(e));
  },
  /**
   * @description Delete all parent nodes that match the condition.
   * Returns an {sc: previousSibling, ec: nextSibling}(the deleted node reference) or null.
   * @param {Node} item Node to be remove
   * @param {Function|null} validation Validation function. default(Deleted if it only have breakLine and blanks)
   * @param {Element|null} stopParent Stop when the parent node reaches stopParent
   * @returns {Object|null} {sc: previousSibling, ec: nextSibling}
   */
  removeItemAllParents: function(e, t, i) {
    if (!e) return null;
    let s = null;
    return t || (t = (function(n) {
      if (n === i || this.isComponent(n)) return !1;
      const r = n.textContent.trim();
      return r.length === 0 || /^(\n|\u200B)+$/.test(r);
    }).bind(this)), function n(r) {
      if (!J.isWysiwygDiv(r)) {
        const u = r.parentNode;
        u && t(r) && (s = {
          sc: r.previousElementSibling,
          ec: r.nextElementSibling
        }, J.removeItem(r), n(u));
      }
    }(e), s;
  },
  /**
   * @description Detach Nested all nested lists under the "baseNode".
   * Returns a list with nested removed.
   * @param {Node} baseNode Element on which to base.
   * @param {Boolean} all If true, it also detach all nested lists of a returned list.
   * @returns {Element}
   */
  detachNestedList: function(e, t) {
    const i = this._deleteNestedList(e);
    let s, n;
    if (i) {
      s = i.cloneNode(!1), n = i.childNodes;
      const u = this.getPositionIndex(e);
      for (; n[u]; )
        s.appendChild(n[u]);
    } else
      s = e;
    let r;
    if (t)
      r = this.getListChildren(s, (function(u) {
        return this.isListCell(u) && !u.previousElementSibling;
      }).bind(this));
    else {
      const u = this.getElementDepth(e) + 2;
      r = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === u;
      }).bind(this));
    }
    for (let u = 0, f = r.length; u < f; u++)
      this._deleteNestedList(r[u]);
    return i && (i.parentNode.insertBefore(s, i.nextSibling), n && n.length === 0 && this.removeItem(i)), s === e ? s.parentNode : s;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, s = i.parentNode, n, r, u, f, l;
    for (; this.isListCell(s); ) {
      for (f = this.getPositionIndex(e), n = s.nextElementSibling, r = s.parentNode, u = i; u; ) {
        if (i = i.nextSibling, this.isList(u)) {
          for (l = u.childNodes; l[f]; )
            r.insertBefore(l[f], n);
          l.length === 0 && this.removeItem(u);
        } else
          r.appendChild(u);
        u = i;
      }
      i = r, s = r.parentNode;
    }
    return t.children.length === 0 && this.removeItem(t), r;
  },
  /**
   * @description Split all tags based on "baseNode"
   * Returns the last element of the splited tag.
   * @param {Node} baseNode Element or text node on which to base
   * @param {Number|Node|null} offset Text offset of "baseNode" (Only valid when "baseNode" is a text node)
   * @param {Number} depth The nesting depth of the element being split. (default: 0)
   * @returns {Element}
   */
  splitElement: function(e, t, i) {
    if (this.isWysiwygDiv(e)) return e;
    if (t && !this.isNumber(t)) {
      const x = e.childNodes;
      let T = this.getPositionIndex(t);
      const E = e.cloneNode(!1), z = e.cloneNode(!1);
      for (let o = 0, a = x.length; o < a; o++) {
        if (o < T) E.appendChild(x[o]);
        else if (o > T) z.appendChild(x[o]);
        else continue;
        o--, a--, T--;
      }
      return E.childNodes.length > 0 && e.parentNode.insertBefore(E, e), z.childNodes.length > 0 && e.parentNode.insertBefore(z, e.nextElementSibling), e;
    }
    const s = e.parentNode;
    let n = 0, r = 1, u = !0, f, l, _;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (n = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const x = this.getNodeFromPath([n + 1], s);
        this.onlyZeroWidthSpace(x) && (x.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const x = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(x, e), e = x;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (u = !1);
    }
    e.nodeType === 1 && (r = 0);
    let c = e;
    for (; this.getElementDepth(c) > i; )
      for (n = this.getPositionIndex(c) + r, c = c.parentNode, _ = f, f = c.cloneNode(!1), l = c.childNodes, _ && (this.isListCell(f) && this.isList(_) && _.firstElementChild ? (f.innerHTML = _.firstElementChild.innerHTML, J.removeItem(_.firstElementChild), _.children.length > 0 && f.appendChild(_)) : f.appendChild(_)); l[n]; )
        f.appendChild(l[n]);
    c.childNodes.length <= 1 && (!c.firstChild || c.firstChild.textContent.length === 0) && (c.innerHTML = "<br>");
    const m = c.parentNode;
    return u && (c = c.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(x) {
      return this.isList(x);
    }).bind(this)), f.childNodes.length > 0 ? m.insertBefore(f, c) : f = c, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), s.childNodes.length === 0 && this.removeItem(s), f) : c;
  },
  /**
   * @description Use with "npdePath (util.getNodePath)" to merge the same attributes and tags if they are present and modify the nodepath.
   * If "offset" has been changed, it will return as much "offset" as it has been modified.
   * An array containing change offsets is returned in the order of the "nodePathArray" array.
   * @param {Element} element Element
   * @param {Array|null} nodePathArray Array of NodePath object ([util.getNodePath(), ..])
   * @param {Boolean} onlyText If true, non-text nodes(!util._isIgnoreNodeChange) like 'span', 'strong'.. are ignored.
   * @returns {Array} [offset, ..]
   */
  mergeSameTags: function(e, t, i) {
    const s = this, n = t ? t.length : 0;
    let r = null;
    return n && (r = this._w.Array.apply(null, new this._w.Array(n)).map(this._w.Number.prototype.valueOf, 0)), function u(f, l, _) {
      const c = f.childNodes;
      for (let m = 0, x = c.length, T, E; m < x && (T = c[m], E = c[m + 1], !!T); m++)
        if (!(s.isBreak(T) || s.isMedia(T) || s.isInputElement(T))) {
          if (i && s._isIgnoreNodeChange(T) || !i && (s.isTable(T) || s.isListCell(T) || s.isFormatElement(T) && !s.isFreeFormatElement(T))) {
            (s.isTable(T) || s.isListCell(T)) && u(T, l + 1, m);
            continue;
          }
          if (x === 1 && f.nodeName === T.nodeName && f.parentNode) {
            if (n) {
              let z, o, a, d, h;
              for (let g = 0; g < n; g++)
                if (z = t[g], z && z[l] === m) {
                  for (o = T, a = f, d = l, h = !0; d >= 0; ) {
                    if (s.getArrayIndex(a.childNodes, o) !== z[d]) {
                      h = !1;
                      break;
                    }
                    o = T.parentNode, a = o.parentNode, d--;
                  }
                  h && (z.splice(l, 1), z[l] = m);
                }
            }
            s.copyTagAttributes(T, f), f.parentNode.insertBefore(T, f), s.removeItem(f);
          }
          if (!E) {
            T.nodeType === 1 && u(T, l + 1, m);
            break;
          }
          if (T.nodeName === E.nodeName && s.isSameAttributes(T, E) && T.href === E.href) {
            const z = T.childNodes;
            let o = 0;
            for (let g = 0, b = z.length; g < b; g++)
              z[g].textContent.length > 0 && o++;
            const a = T.lastChild, d = E.firstChild;
            let h = 0;
            if (a && d) {
              const g = a.nodeType === 3 && d.nodeType === 3;
              h = a.textContent.length;
              let b = a.previousSibling;
              for (; b && b.nodeType === 3; )
                h += b.textContent.length, b = b.previousSibling;
              if (o > 0 && a.nodeType === 3 && d.nodeType === 3 && (a.textContent.length > 0 || d.textContent.length > 0) && o--, n) {
                let p = null;
                for (let v = 0; v < n; v++)
                  if (p = t[v], p && p[l] > m) {
                    if (l > 0 && p[l - 1] !== _) continue;
                    p[l] -= 1, p[l + 1] >= 0 && p[l] === m && (p[l + 1] += o, g && a && a.nodeType === 3 && d && d.nodeType === 3 && (r[v] += h));
                  }
              }
            }
            if (T.nodeType === 3) {
              if (h = T.textContent.length, T.textContent += E.textContent, n) {
                let g = null;
                for (let b = 0; b < n; b++)
                  if (g = t[b], g && g[l] > m) {
                    if (l > 0 && g[l - 1] !== _) continue;
                    g[l] -= 1, g[l + 1] >= 0 && g[l] === m && (g[l + 1] += o, r[b] += h);
                  }
              }
            } else
              T.innerHTML += E.innerHTML;
            s.removeItem(E), m--;
          } else T.nodeType === 1 && u(T, l + 1, m);
        }
    }(e, 0, 0), r;
  },
  /**
   * @description Remove nested tags without other child nodes.
   * @param {Element} element Element object
   * @param {Function|String|null} validation Validation function / String("tag1|tag2..") / If null, all tags are applicable.
   */
  mergeNestedTags: function(e, t) {
    typeof t == "string" ? t = (function(i) {
      return this.test(i.tagName);
    }).bind(new this._w.RegExp("^(" + (t || ".+") + ")$", "i")) : typeof t != "function" && (t = function() {
      return !0;
    }), function i(s) {
      let n = s.children;
      if (n.length === 1 && n[0].nodeName === s.nodeName && t(s)) {
        const r = n[0];
        for (n = r.children; n[0]; )
          s.appendChild(n[0]);
        s.removeChild(r);
      }
      for (let r = 0, u = s.children.length; r < u; r++)
        i(s.children[r]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, i) {
    const s = this;
    t && (t = s.getParentElement(t, function(n) {
      return e === n.parentElement;
    })), function n(r) {
      if (s._notTextNode(r) || r === t || s.isNonEditable(r)) return 0;
      if (r !== e && s.onlyZeroWidthSpace(r.textContent) && (!r.firstChild || !s.isBreak(r.firstChild)) && !r.querySelector(s._allowedEmptyNodeList)) {
        if (r.parentNode)
          return r.parentNode.removeChild(r), -1;
      } else {
        const u = r.children;
        for (let f = 0, l = u.length, _ = 0; f < l; f++)
          !u[f + _] || s.isComponent(u[f + _]) || (_ += n(u[f + _]));
      }
      return 0;
    }(e), e.childNodes.length === 0 && (i ? this.removeItem(e) : e.innerHTML = "<br>");
  },
  /**
   * @description Remove whitespace between tags in HTML string.
   * @param {String} html HTML string
   * @returns {String}
   */
  htmlRemoveWhiteSpace: function(e) {
    return e ? e.trim().replace(/<\/?(?!strong|span|font|b|var|i|em|u|ins|s|strike|del|sub|sup|mark|a|label|code|summary)[^>^<]+>\s+(?=<)/ig, function(t) {
      return t.replace(/\n/g, "").replace(/\s+/, " ");
    }) : "";
  },
  /**
   * @description HTML code compression
   * @param {string} html HTML string
   * @returns {string} HTML string
   */
  htmlCompress: function(e) {
    return e.replace(/\n/g, "").replace(/(>)(?:\s+)(<)/g, "$1$2");
  },
  /**
   * @description Sort a element array by depth of element.
   * @param {Array} array Array object
   * @param {Boolean} des true: descending order / false: ascending order
   */
  sortByDepth: function(e, t) {
    const i = t ? 1 : -1, s = i * -1;
    e.sort((function(n, r) {
      return !this.isListCell(n) || !this.isListCell(r) ? 0 : (n = this.getElementDepth(n), r = this.getElementDepth(r), n > r ? i : n < r ? s : 0);
    }).bind(this));
  },
  /**
   * @description Escape a string for safe use in regular expressions.
   * @param {String} string String to escape
   * @returns {String}
   */
  escapeStringRegexp: function(e) {
    if (typeof e != "string")
      throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  },
  _isExcludeSelectionElement: function(e) {
    return !/FIGCAPTION/i.test(e.nodeName) && (this.isComponent(e) || /FIGURE/i.test(e.nodeName));
  },
  /**
   * @description Nodes that need to be added without modification when changing text nodes
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isIgnoreNodeChange: function(e) {
    return e && e.nodeType !== 3 && (this.isNonEditable(e) || !this.isTextStyleElement(e));
  },
  /**
   * @description Nodes that must remain undetached when changing text nodes (A, Label, Code, Span:font-size)
   * @param {Node|String} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isMaintainedNode: function(e) {
    return e && e.nodeType !== 3 && /^(a|label|code|summary)$/i.test(typeof e == "string" ? e : e.nodeName);
  },
  /**
   * @description Node with font-size style
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _isSizeNode: function(e) {
    return e && e.nodeType !== 3 && this.isTextStyleElement(e) && !!e.style.fontSize;
  },
  /**
   * @description Nodes without text
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _notTextNode: function(e) {
    return e && e.nodeType !== 3 && (this.isComponent(e) || /^(br|input|select|canvas|img|iframe|audio|video)$/i.test(typeof e == "string" ? e : e.nodeName));
  },
  /**
   * @deprecated
   * @description Check disallowed tags
   * @param {Node} element Element to check
   * @returns {Boolean}
   * @private
   */
  _disallowedTags: function(e) {
    return /^(meta|script|link|style|[a-z]+\:[a-z]+)$/i.test(e.nodeName);
  },
  /**
   * @description Create whitelist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?!" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsWhitelist: function(e) {
    return new RegExp("<\\/?\\b(?!\\b" + (e || "").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Create blacklist RegExp object.
   * Return RegExp format: new RegExp("<\\/?\\b(?:" + list + ")\\b[^>^<]*+>", "gi")
   * @param {String} list Tags list ("br|p|div|pre...")
   * @returns {RegExp}
   */
  createTagsBlacklist: function(e) {
    return new RegExp("<\\/?\\b(?:\\b" + (e || "^").replace(/\|/g, "\\b|\\b") + "\\b)[^>]*>", "gi");
  },
  /**
   * @description Fix tags that do not fit the editor format.
   * @param {Element} documentFragment Document fragment "DOCUMENT_FRAGMENT_NODE" (nodeType === 11)
   * @param {RegExp} htmlCheckWhitelistRegExp Editor tags whitelist (core._htmlCheckWhitelistRegExp)
   * @param {RegExp} htmlCheckBlacklistRegExp Editor tags blacklist (core._htmlCheckBlacklistRegExp)
   * @param {Function} classNameFilter Class name filter function
   * @param {Function} strictHTMLValidation Enforces strict HTML validation based on the editor`s policy
   * @private
   */
  _consistencyCheckOfHTML: function(e, t, i, s, n) {
    const r = [], u = [], f = [], l = [], _ = this.getListChildNodes(e, (function(m) {
      if (m.nodeType !== 1)
        return this.isList(m.parentElement) && r.push(m), !1;
      if (i.test(m.nodeName) || !t.test(m.nodeName) && m.childNodes.length === 0 && this.isNotCheckingNode(m))
        return r.push(m), !1;
      const x = !this.getParentElement(m, this.isNotCheckingNode);
      if (!this.isTable(m) && !this.isListCell(m) && !this.isAnchor(m) && (this.isFormatElement(m) || this.isRangeFormatElement(m) || this.isTextStyleElement(m)) && m.childNodes.length === 0 && x)
        return u.push(m), !1;
      if (this.isList(m.parentNode) && !this.isList(m) && !this.isListCell(m))
        return f.push(m), !1;
      if (this.isCell(m)) {
        const E = m.firstElementChild;
        if (!this.isFormatElement(E) && !this.isRangeFormatElement(E) && !this.isComponent(E))
          return l.push(m), !1;
      }
      if (x && m.className) {
        const E = new this._w.Array(m.classList).map(s).join(" ").trim();
        E ? m.className = E : m.removeAttribute("class");
      }
      return n && m.parentNode !== e && x && (this.isListCell(m) && !this.isList(m.parentNode) || (this.isFormatElement(m) || this.isComponent(m)) && !this.isRangeFormatElement(m.parentNode) && !this.getParentElement(m, this.isComponent));
    }).bind(this));
    for (let m = 0, x = r.length; m < x; m++)
      this.removeItem(r[m]);
    const c = [];
    for (let m = 0, x = _.length, T, E; m < x; m++)
      if (T = _[m], E = T.parentNode, !(!E || !E.parentNode))
        if (this.getParentElement(T, this.isListCell)) {
          const z = T.childNodes;
          for (let o = z.length - 1; x >= 0; o--)
            E.insertBefore(T, z[o]);
          c.push(T);
        } else
          E.parentNode.insertBefore(T, E), c.push(E);
    for (let m = 0, x = c.length, T; m < x; m++)
      T = c[m], this.onlyZeroWidthSpace(T.textContent.trim()) && this.removeItem(T);
    for (let m = 0, x = u.length; m < x; m++)
      this.removeItem(u[m]);
    for (let m = 0, x = f.length, T, E, z, o; m < x; m++)
      if (T = f[m], o = T.parentNode, !!o)
        if (E = this.createElement("LI"), this.isFormatElement(T)) {
          for (z = T.childNodes; z[0]; )
            E.appendChild(z[0]);
          o.insertBefore(E, T), this.removeItem(T);
        } else
          T = T.nextSibling, E.appendChild(f[m]), o.insertBefore(E, T);
    for (let m = 0, x = l.length, T, E; m < x; m++)
      T = l[m], E = this.createElement("DIV"), E.innerHTML = T.textContent.trim().length === 0 && T.children.length === 0 ? "<br>" : T.innerHTML, T.innerHTML = E.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let s = "", n = "", r = "";
    t = i + t;
    const u = t.split(";");
    for (let f = 0, l = u.length, _; f < l; f++)
      if (_ = u[f].trim(), !!_) {
        if (/^(min-|max-)?width\s*:/.test(_) || /^(z-index|position)\s*:/.test(_)) {
          s += _ + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(_)) {
          /^height/.test(_) && _.split(":")[1].trim() === "auto" && (e.height = "auto"), n += _ + ";";
          continue;
        }
        r += _ + ";";
      }
    return {
      top: s,
      frame: n,
      editor: r
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let s = "";
    for (let n = 0, r = t.length, u; n < r; n++) {
      if (u = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[n]))
        u.push(t[n]);
      else {
        const f = new i("(^|.*[\\/])" + t[n] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let l = document.getElementsByTagName("link"), _ = 0, c = l.length, m; _ < c; _++)
          m = l[_].href.match(f), m && u.push(m[0]);
      }
      if (!u || u.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, l = u.length; f < l; f++)
        s += '<link href="' + u[f] + '" rel="stylesheet">';
    }
    return s + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Lt = {
  /**
   * @description document create
   * @param {Element} element Textarea
   * @param {Object} options Options
   * @returns {Object}
   */
  init: function(e, t) {
    typeof t != "object" && (t = {});
    const i = document;
    this._initOptions(e, t);
    const s = i.createElement("DIV");
    s.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (s.id = "suneditor_" + e.id);
    const n = i.createElement("DIV");
    n.className = "se-container";
    const r = this._createToolBar(i, t.buttonList, t.plugins, t), u = r.element.cloneNode(!1);
    u.className += " se-toolbar-shadow", r.element.style.visibility = "hidden", r.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = i.createElement("DIV");
    f.className = "se-arrow";
    const l = i.createElement("DIV");
    l.className = "se-toolbar-sticky-dummy";
    const _ = i.createElement("DIV");
    _.className = "se-wrapper";
    const c = this._initElements(t, s, r.element, f), m = c.bottomBar, x = c.wysiwygFrame, T = c.placeholder;
    let E = c.codeView;
    const z = m.resizingBar, o = m.navigation, a = m.charWrapper, d = m.charCounter, h = i.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const g = i.createElement("DIV");
    g.className = "se-line-breaker", g.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const b = i.createElement("DIV");
    b.className += "se-line-breaker-component";
    const p = b.cloneNode(!0);
    b.innerHTML = p.innerHTML = t.icons.line_break;
    const v = i.createElement("DIV");
    v.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const y = t.toolbarContainer;
    y && (y.appendChild(r.element), y.appendChild(u));
    const w = t.resizingBarContainer;
    return z && w && w.appendChild(z), _.appendChild(E), T && _.appendChild(T), y || (n.appendChild(r.element), n.appendChild(u)), n.appendChild(l), n.appendChild(_), n.appendChild(v), n.appendChild(h), n.appendChild(g), n.appendChild(b), n.appendChild(p), n.appendChild(C), z && !w && n.appendChild(z), s.appendChild(n), E = this._checkCodeMirror(t, E), {
      constructed: {
        _top: s,
        _relative: n,
        _toolBar: r.element,
        _toolbarShadow: u,
        _menuTray: r._menuTray,
        _editorArea: _,
        _wysiwygArea: x,
        _codeArea: E,
        _placeholder: T,
        _resizingBar: z,
        _navigation: o,
        _charWrapper: a,
        _charCounter: d,
        _loading: h,
        _lineBreaker: g,
        _lineBreaker_t: b,
        _lineBreaker_b: p,
        _resizeBack: v,
        _stickyDummy: l,
        _arrow: f,
        _focusTemp: C
      },
      options: t,
      plugins: r.plugins,
      pluginCallButtons: r.pluginCallButtons,
      _responsiveButtons: r.responsiveButtons
    };
  },
  /**
   * @description Check the CodeMirror option to apply the CodeMirror and return the CodeMirror element.
   * @param {Object} options options
   * @param {Element} textarea textarea element
   * @private
   */
  _checkCodeMirror: function(e, t) {
    if (e.codeMirror) {
      const i = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(n, r) {
        for (let u in r)
          J.hasOwn(r, u) && (n[u] = r[u]);
        return n;
      }, {});
      e.height === "auto" && (i.viewportMargin = 1 / 0, i.height = "auto");
      const s = e.codeMirror.src.fromTextArea(t, i);
      s.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = s, t = s.display.wrapper, t.className += " se-wrapper-code-mirror";
    }
    return t;
  },
  /**
   * @description Check for a katex object.
   * @param {Object} katex katex object
   * @private
   */
  _checkKatexMath: function(e) {
    if (!e) throw Error('[SUNEDITOR.create.fail] To use the math button you need to add a "katex" object to the options.');
    const t = [{
      throwOnError: !1
    }, e.options || {}].reduce(function(i, s) {
      for (let n in s)
        J.hasOwn(s, n) && (i[n] = s[n]);
      return i;
    }, {});
    e.options = t;
  },
  /**
   * @description Add or reset options
   * @param {Object} mergeOptions New options property
   * @param {Object} context Context object of core
   * @param {Object} originOptions Origin options
   * @returns {Object} pluginCallButtons
   * @private
   */
  _setOptions: function(e, t, i) {
    this._initOptions(t.element.originElement, e);
    const s = t.element, n = s.relative, r = s.editorArea, u = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, f = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || u, l = this._createToolBar(document, f ? e.buttonList : i.buttonList, e.plugins, e);
    l.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const _ = document.createElement("DIV");
    _.className = "se-arrow", f && (l.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(l.element), s.toolbar.parentElement.removeChild(s.toolbar)) : s.toolbar.parentElement.replaceChild(l.element, s.toolbar), s.toolbar = l.element, s._menuTray = l._menuTray, s._arrow = _);
    const c = this._initElements(e, s.topArea, f ? l.element : s.toolbar, _), m = c.bottomBar, x = c.wysiwygFrame, T = c.placeholder;
    let E = c.codeView;
    return s.resizingBar && J.removeItem(s.resizingBar), m.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(m.resizingBar) : n.appendChild(m.resizingBar)), r.innerHTML = "", r.appendChild(E), T && r.appendChild(T), E = this._checkCodeMirror(e, E), s.resizingBar = m.resizingBar, s.navigation = m.navigation, s.charWrapper = m.charWrapper, s.charCounter = m.charCounter, s.wysiwygFrame = x, s.code = E, s.placeholder = T, e.rtl ? J.addClass(s.topArea, "se-rtl") : J.removeClass(s.topArea, "se-rtl"), {
      callButtons: l.pluginCallButtons,
      plugins: l.plugins,
      toolbar: l
    };
  },
  /**
   * @description Initialize property of suneditor elements
   * @param {Object} options Options
   * @param {Element} topDiv Suneditor top div
   * @param {Element} toolBar Tool bar
   * @param {Element} toolBarArrow Tool bar arrow (balloon editor)
   * @returns {Object} Bottom bar elements (resizingBar, navigation, charWrapper, charCounter)
   * @private
   */
  _initElements: function(e, t, i, s) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (i.className += " se-toolbar-inline", i.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (i.className += " se-toolbar-balloon", i.style.width = e.toolbarWidth, i.appendChild(s));
    const n = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (n.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      n.allowFullscreen = !0, n.frameBorder = 0, n.style.cssText = e._editorStyles.frame, n.className += e.className;
    else {
      n.setAttribute("contenteditable", !0), n.setAttribute("autocorrect", "off"), n.setAttribute("scrolling", "auto");
      for (let m in e.iframeAttributes)
        n.setAttribute(m, e.iframeAttributes[m]);
      n.className += " " + e._editableClass, n.style.cssText = e._editorStyles.frame + e._editorStyles.editor, n.className += e.className;
    }
    const r = document.createElement("TEXTAREA");
    r.className = "se-wrapper-inner se-wrapper-code" + e.className, r.style.cssText = e._editorStyles.frame, r.style.display = "none", e.height === "auto" && (r.style.overflow = "hidden");
    let u = null, f = null, l = null, _ = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", u.appendChild(f), e.charCounter)) {
      if (l = document.createElement("DIV"), l.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const m = document.createElement("SPAN");
        m.className = "se-char-label", m.textContent = e.charCounterLabel, l.appendChild(m);
      }
      if (_ = document.createElement("SPAN"), _.className = "se-char-counter", _.textContent = "0", l.appendChild(_), e.maxCharCount > 0) {
        const m = document.createElement("SPAN");
        m.textContent = " / " + e.maxCharCount, l.appendChild(m);
      }
      u.appendChild(l);
    }
    let c = null;
    return e.placeholder && (c = document.createElement("SPAN"), c.className = "se-placeholder", c.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: u,
        navigation: f,
        charWrapper: l,
        charCounter: _
      },
      wysiwygFrame: n,
      codeView: r,
      placeholder: c
    };
  },
  /**
   * @description Initialize options
   * @param {Element} element Options object
   * @param {Object} options Options object
   * @private
   */
  _initOptions: function(e, t) {
    const i = {};
    if (t.plugins) {
      const r = t.plugins, u = r.length ? r : Object.keys(r).map(function(f) {
        return r[f];
      });
      for (let f = 0, l = u.length, _; f < l; f++)
        _ = u[f].default || u[f], i[_.name] = _;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || $n, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new J._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const s = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(r, u) {
      for (let f in u)
        r[f] = u[f];
      return r;
    }, {});
    t._textTagsMap = {
      strong: s.bold.toLowerCase(),
      b: s.bold.toLowerCase(),
      u: s.underline.toLowerCase(),
      ins: s.underline.toLowerCase(),
      em: s.italic.toLowerCase(),
      i: s.italic.toLowerCase(),
      del: s.strike.toLowerCase(),
      strike: s.strike.toLowerCase(),
      s: s.strike.toLowerCase(),
      sub: s.sub.toLowerCase(),
      sup: s.sup.toLowerCase()
    }, t._defaultCommand = {
      bold: t.textTags.bold,
      underline: t.textTags.underline,
      italic: t.textTags.italic,
      strike: t.textTags.strike,
      subscript: t.textTags.sub,
      superscript: t.textTags.sup
    }, t.__allowedScriptTag = t.__allowedScriptTag === !0;
    const n = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : n) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? J.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? J.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? J.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = J.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? J.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (J.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (J.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? J.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (J.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (J.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? J.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? J.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? J.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !J.getNumber(t.videoWidth, 0) ? "" : J.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !J.getNumber(t.videoHeight, 0) ? "" : J.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = J.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? J.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? J.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? J.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? J.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? ti : [ti, t.icons].reduce(function(r, u) {
      for (let f in u)
        J.hasOwn(u, f) && (r[f] = u[f]);
      return r;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(r, u) {
      for (let f in u)
        J.hasOwn(u, f) && (r[f] = u[f]);
      return r;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = J._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let i = 0, s = t.length, n; i < s; i++)
      n = e.indexOf(t[i]), n > -1 && e.splice(n, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, i = e.lang, s = J.isOSX_IOS ? "⌘" : "CTRL", n = J.isOSX_IOS ? "⇧" : "+SHIFT", r = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (r.indexOf("bold") > -1 ? "" : s + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (r.indexOf("underline") > -1 ? "" : s + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (r.indexOf("italic") > -1 ? "" : s + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (r.indexOf("strike") > -1 ? "" : s + n + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (r.indexOf("indent") > -1 ? "" : s + '+<span class="se-shortcut-key">' + u[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (r.indexOf("indent") > -1 ? "" : s + '+<span class="se-shortcut-key">' + u[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (r.indexOf("undo") > -1 ? "" : s + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (r.indexOf("undo") > -1 ? "" : s + '+<span class="se-shortcut-key">Y</span> / ' + s + n + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", i.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", i.toolbar.print, "print", "", t.print],
      dir: ["", i.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", i.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", i.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", i.toolbar.save + '<span class="se-shortcut">' + (r.indexOf("save") > -1 ? "" : s + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
      /** plugins - command */
      blockquote: ["", i.toolbar.tag_blockquote, "blockquote", "command", t.blockquote],
      /** plugins - submenu */
      font: ["se-btn-select se-btn-tool-font", i.toolbar.font, "font", "submenu", '<span class="txt">' + i.toolbar.font + "</span>" + t.arrow_down],
      formatBlock: ["se-btn-select se-btn-tool-format", i.toolbar.formats, "formatBlock", "submenu", '<span class="txt">' + i.toolbar.formats + "</span>" + t.arrow_down],
      fontSize: ["se-btn-select se-btn-tool-size", i.toolbar.fontSize, "fontSize", "submenu", '<span class="txt">' + i.toolbar.fontSize + "</span>" + t.arrow_down],
      fontColor: ["", i.toolbar.fontColor, "fontColor", "submenu", t.font_color],
      hiliteColor: ["", i.toolbar.hiliteColor, "hiliteColor", "submenu", t.highlight_color],
      align: ["se-btn-align", i.toolbar.align, "align", "submenu", e.rtl ? t.align_right : t.align_left],
      list: ["", i.toolbar.list, "list", "submenu", t.list_number],
      horizontalRule: ["btn_line", i.toolbar.horizontalRule, "horizontalRule", "submenu", t.horizontal_rule],
      table: ["", i.toolbar.table, "table", "submenu", t.table],
      lineHeight: ["", i.toolbar.lineHeight, "lineHeight", "submenu", t.line_height],
      template: ["", i.toolbar.template, "template", "submenu", t.template],
      paragraphStyle: ["", i.toolbar.paragraphStyle, "paragraphStyle", "submenu", t.paragraph_style],
      textStyle: ["", i.toolbar.textStyle, "textStyle", "submenu", t.text_style],
      /** plugins - dialog */
      link: ["", i.toolbar.link, "link", "dialog", t.link],
      image: ["", i.toolbar.image, "image", "dialog", t.image],
      video: ["", i.toolbar.video, "video", "dialog", t.video],
      audio: ["", i.toolbar.audio, "audio", "dialog", t.audio],
      math: ["", i.toolbar.math, "math", "dialog", t.math],
      /** plugins - fileBrowser */
      imageGallery: ["", i.toolbar.imageGallery, "imageGallery", "fileBrowser", t.image_gallery]
    };
  },
  /**
   * @description Create a group div containing each module
   * @returns {Object}
   * @private
   */
  _createModuleGroup: function() {
    const e = J.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = J.createElement("UL");
    return t.className = "se-menu-list", e.appendChild(t), {
      div: e,
      ul: t
    };
  },
  /**
   * @description Create a button element
   * @param {string} buttonClass className in button
   * @param {string} title Title in button
   * @param {string} dataCommand The data-command property of the button
   * @param {string} dataDisplay The data-display property of the button ('dialog', 'submenu', 'command')
   * @param {string} innerHTML Html in button
   * @param {string} _disabled Button disabled
   * @param {Object} _icons Icons
   * @returns {Object}
   * @private
   */
  _createButton: function(e, t, i, s, n, r, u) {
    const f = J.createElement("LI"), l = J.createElement("BUTTON"), _ = t || i;
    return l.setAttribute("type", "button"), l.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), l.setAttribute("data-command", i), l.setAttribute("data-display", s), l.setAttribute("aria-label", _.replace(/<span .+<\/span>/, "")), l.setAttribute("tabindex", "-1"), n || (n = '<span class="se-icon-text">!</span>'), /^default\./i.test(n) && (n = u[n.replace(/^default\./i, "")]), /^text\./i.test(n) && (n = n.replace(/^text\./i, ""), l.className += " se-btn-more-text"), n += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + _ + "</span></span>", r && l.setAttribute("disabled", !0), l.innerHTML = n, f.appendChild(l), {
      li: f,
      button: l
    };
  },
  /**
   * @description Create editor HTML
   * @param {Array} doc document object
   * @param {Array} buttonList option.buttonList
   * @param {Object|null} plugins Plugins
   * @param {Array} options options
   * @returns {Object} { element: (Element) Toolbar element, plugins: (Array|null) Plugins Array, pluginCallButtons: (Object), responsiveButtons: (Array) }
   * @private
   */
  _createToolBar: function(e, t, i, s) {
    const n = e.createElement("DIV");
    n.className = "se-toolbar-separator-vertical";
    const r = e.createElement("DIV");
    r.className = "se-toolbar sun-editor-common";
    const u = e.createElement("DIV");
    u.className = "se-btn-tray", r.appendChild(u), t = JSON.parse(JSON.stringify(t));
    const f = s.icons, l = this._defaultButtons(s), _ = {}, c = [];
    let m = null, x = null, T = null, E = null, z = "", o = !1;
    const a = J.createElement("DIV");
    a.className = "se-toolbar-more-layer";
    e:
      for (let g = 0, b, p, v, C, y; g < t.length; g++)
        if (b = !1, y = "", C = t[g], T = this._createModuleGroup(), typeof C == "object") {
          for (let w = 0, M; w < C.length; w++) {
            if (x = C[w], M = !1, /^\%\d+/.test(x) && w === 0) {
              C[0] = x.replace(/[^\d]/g, ""), c.push(C), t.splice(g--, 1);
              continue e;
            }
            if (typeof x == "object")
              typeof x.add == "function" ? (z = x.name, m = l[z], i[z] = x) : (z = x.name, m = [x.buttonClass, x.title, x.name, x.dataDisplay, x.innerHTML, x._disabled]);
            else {
              if (/^\-/.test(x)) {
                y = x.substr(1), T.div.className += " module-float-" + y;
                continue;
              }
              if (/^\#/.test(x)) {
                x.substr(1) === "fix" && (T.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(x)) {
                M = !0;
                const S = x.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                v = "__se__" + S[1].trim();
                const k = S[2].trim(), R = S[3].trim();
                m = ["se-btn-more", k, v, "MORE", R];
              } else
                m = l[x];
              if (z = x, !m) {
                const S = i[z];
                if (!S) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + z + "]");
                m = [S.buttonClass, S.title, S.name, S.display, S.innerHTML, S._disabled];
              }
            }
            E = this._createButton(m[0], m[1], m[2], m[3], m[4], m[5], f), (b ? p : T.ul).appendChild(E.li), i[z] && (_[z] = E.button), M && (b = !0, p = J.createElement("DIV"), p.className = "se-more-layer " + v, p.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (y ? ' style="float: ' + y + ';"' : "") + "></ul></div>", a.appendChild(p), p = p.firstElementChild.firstElementChild);
          }
          if (o) {
            const w = n.cloneNode(!1);
            u.appendChild(w);
          }
          u.appendChild(T.div), o = !0;
        } else if (/^\/$/.test(C)) {
          const w = e.createElement("DIV");
          w.className = "se-btn-module-enter", u.appendChild(w), o = !1;
        }
    switch (u.children.length) {
      case 0:
        u.style.display = "none";
        break;
      case 1:
        J.removeClass(u.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (s.rtl) {
          const g = n.cloneNode(!1);
          g.style.float = u.lastElementChild.style.float, u.appendChild(g);
        }
    }
    c.length > 0 && c.unshift(t), a.children.length > 0 && u.appendChild(a);
    const d = e.createElement("DIV");
    d.className = "se-menu-tray", r.appendChild(d);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", r.appendChild(h), s.hideToolbar && (r.style.display = "none"), {
      element: r,
      plugins: i,
      pluginCallButtons: _,
      responsiveButtons: c,
      _menuTray: d,
      _buttonTray: u
    };
  }
}, Nt = function(e, t, i) {
  return {
    element: {
      originElement: e,
      topArea: t._top,
      relative: t._relative,
      toolbar: t._toolBar,
      _toolbarShadow: t._toolbarShadow,
      _buttonTray: t._toolBar.querySelector(".se-btn-tray"),
      _menuTray: t._menuTray,
      resizingBar: t._resizingBar,
      navigation: t._navigation,
      charWrapper: t._charWrapper,
      charCounter: t._charCounter,
      editorArea: t._editorArea,
      wysiwygFrame: t._wysiwygArea,
      wysiwyg: t._wysiwygArea,
      // if (options.iframe) cons._wysiwygArea.contentDocument.body
      code: t._codeArea,
      placeholder: t._placeholder,
      loading: t._loading,
      lineBreaker: t._lineBreaker,
      lineBreaker_t: t._lineBreaker_t,
      lineBreaker_b: t._lineBreaker_b,
      resizeBackground: t._resizeBack,
      _stickyDummy: t._stickyDummy,
      _arrow: t._arrow,
      _focusTemp: t._focusTemp
    },
    tool: {
      cover: t._toolBar.querySelector(".se-toolbar-cover"),
      bold: t._toolBar.querySelector('[data-command="bold"]'),
      underline: t._toolBar.querySelector('[data-command="underline"]'),
      italic: t._toolBar.querySelector('[data-command="italic"]'),
      strike: t._toolBar.querySelector('[data-command="strike"]'),
      sub: t._toolBar.querySelector('[data-command="SUB"]'),
      sup: t._toolBar.querySelector('[data-command="SUP"]'),
      undo: t._toolBar.querySelector('[data-command="undo"]'),
      redo: t._toolBar.querySelector('[data-command="redo"]'),
      save: t._toolBar.querySelector('[data-command="save"]'),
      outdent: t._toolBar.querySelector('[data-command="outdent"]'),
      indent: t._toolBar.querySelector('[data-command="indent"]'),
      fullScreen: t._toolBar.querySelector('[data-command="fullScreen"]'),
      showBlocks: t._toolBar.querySelector('[data-command="showBlocks"]'),
      codeView: t._toolBar.querySelector('[data-command="codeView"]'),
      dir: t._toolBar.querySelector('[data-command="dir"]'),
      dir_ltr: t._toolBar.querySelector('[data-command="dir_ltr"]'),
      dir_rtl: t._toolBar.querySelector('[data-command="dir_rtl"]')
    },
    options: i,
    option: i
  };
};
function jn(e, t) {
  const i = e._w, s = e.util, n = e.options.historyStackDelayTime;
  let r = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, l = null, _ = 0, c = [];
  function m() {
    const T = c[_];
    r.wysiwyg.innerHTML = T.contents, e.setRange(s.getNodeFromPath(T.s.path, r.wysiwyg), T.s.offset, s.getNodeFromPath(T.e.path, r.wysiwyg), T.e.offset), e.focus(), c.length <= 1 ? (u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : _ === 0 ? (u && u.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : _ === c.length - 1 ? (u && u.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function x() {
    e._checkComponents();
    const T = r.wysiwyg.innerHTML;
    if (!T || c[_] && T === c[_].contents) return;
    _++;
    const E = e._variable._range;
    c.length > _ && (c = c.slice(0, _), f && f.setAttribute("disabled", !0)), E ? c[_] = {
      contents: T,
      s: {
        path: s.getNodePath(E.startContainer, null, null),
        offset: E.startOffset
      },
      e: {
        path: s.getNodePath(E.endContainer, null, null),
        offset: E.endOffset
      }
    } : c[_] = {
      contents: T,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, _ === 1 && u && u.removeAttribute("disabled"), e._setCharCount(), t();
  }
  return {
    /**
     * @description History stack
     */
    stack: c,
    /**
     * @description Saving the current status to the history object stack
     * If "delay" is true, it will be saved after (options.historyStackDelayTime || 400) miliseconds
     * If the function is called again with the "delay" argument true before it is saved, the delay time is renewal
     * You can specify the delay time by sending a number.
     * @param {Boolean|Number} delay If true, Add stack without delay time.
     */
    push: function(T) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const E = typeof T == "number" ? T > 0 ? T : 0 : T ? n : 0;
      if ((!E || l) && (i.clearTimeout(l), !E)) {
        x();
        return;
      }
      l = i.setTimeout(function() {
        i.clearTimeout(l), l = null, x();
      }, E);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      _ > 0 && (_--, m());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      c.length - 1 > _ && (_++, m());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(T) {
      _ = T < 0 ? c.length - 1 : T, m();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return _;
    },
    /**
     * @description Reset the history object
     */
    reset: function(T) {
      u && u.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), c.splice(0), _ = 0, c[_] = {
        contents: e.getContents(!0),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      }, T || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      r = e.context.element, u = e.context.tool.undo, f = e.context.tool.redo, _ === 0 ? (u && u.setAttribute("disabled", !0), f && _ === c.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : _ === c.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      l && i.clearTimeout(l), c = null;
    }
  };
}
const ii = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let i = e.util.createElement("DIV"), s = e.util.createElement("SPAN"), n = e.util.createElement("BUTTON");
    i.className = "se-notice", n.className = "close", n.setAttribute("aria-label", "Close"), n.setAttribute("title", e.lang.dialogBox.close), n.innerHTML = e.icons.cancel, i.appendChild(s), i.appendChild(n), t.notice.modal = i, t.notice.message = s, n.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(i), i = null;
  },
  /**
   * @description Event when clicking the cancel button
   * @param {MouseEvent} e Event object
   */
  onClick_cancel: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.notice.close.call(this);
  },
  /**
   * @description  Open the notice panel
   * @param {String} text Notice message
   */
  open: function(e) {
    this.context.notice.message.textContent = e, this.context.notice.modal.style.display = "block";
  },
  /**
   * @description  Open the notice panel
   */
  close: function() {
    this.context.notice.modal.style.display = "none";
  }
};
function Yn(e, t, i, s, n, r) {
  const u = e.element.originElement.ownerDocument || document, f = u.defaultView || window, l = J, _ = n.icons, c = {
    _d: u,
    _w: f,
    _parser: new f.DOMParser(),
    _prevRtl: n.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: n.__listCommonStyle,
    _listKebab: l.camelToKebabCase(n.__listCommonStyle),
    __focusTemp: e.element._focusTemp,
    /**
     * @description Document object of the iframe if created as an iframe || _d
     * @private
     */
    _wd: null,
    /**
     * @description Window object of the iframe if created as an iframe || _w
     * @private
     */
    _ww: null,
    /**
     * @description Closest ShadowRoot to editor if found
     * @private
     */
    _shadowRoot: null,
    /**
     * @description Block controller mousedown events in "shadowRoot" environment
     * @private
     */
    _shadowRootControllerEventTarget: null,
    /**
     * @description Util object
     */
    util: l,
    /**
     * @description Functions object
     */
    functions: null,
    /**
     * @description Editor options
     */
    options: null,
    /**
     * @description Computed style of the wysiwyg area (window.getComputedStyle(context.element.wysiwyg))
     */
    wwComputedStyle: null,
    /**
     * @description Notice object
     */
    notice: ii,
    /**
     * @description Default icons object
     */
    icons: _,
    /**
     * @description History object for undo, redo
     */
    history: null,
    /**
     * @description Elements and user options parameters of the suneditor
     */
    context: e,
    /**
     * @description Plugin buttons
     */
    pluginCallButtons: t,
    /**
     * @description Loaded plugins
     */
    plugins: i || {},
    /**
     * @description Whether the plugin is initialized
     */
    initPlugins: {},
    /**
     * @description Object for managing submenu elements
     * @private
     */
    _targetPlugins: {},
    /**
     * @description Save rendered submenus and containers
     * @private
     */
    _menuTray: {},
    /**
     * @description loaded language
     */
    lang: s,
    /**
     * @description The selection node (core.getSelectionNode()) to which the effect was last applied
     */
    effectNode: null,
    /**
     * @description submenu element
     */
    submenu: null,
    /**
     * @description container element
     */
    container: null,
    /**
     * @description current subment name
     * @private
     */
    _submenuName: "",
    /**
     * @description binded submenuOff method
     * @private
     */
    _bindedSubmenuOff: null,
    /**
     * @description binded containerOff method
     * @private
     */
    _bindedContainerOff: null,
    /**
     * @description active button element in submenu
     */
    submenuActiveButton: null,
    /**
     * @description active button element in container
     */
    containerActiveButton: null,
    /**
     * @description The elements array to be processed unvisible when the controllersOff function is executed (resizing, link modified button, table controller)
     */
    controllerArray: [],
    /**
     * @description The name of the plugin that called the currently active controller
     */
    currentControllerName: "",
    /**
     * @description The target element of current controller
     */
    currentControllerTarget: null,
    /**
     * @description The file component object of current selected file tag (getFileComponent)
     */
    currentFileComponentInfo: null,
    /**
     * @description An array of buttons whose class name is not "se-code-view-enabled"
     */
    codeViewDisabledButtons: [],
    /**
     * @description An array of buttons whose class name is not "se-resizing-enabled"
     */
    resizingDisabledButtons: [],
    /**
     * @description active more layer element in submenu
     * @private
     */
    _moreLayerActiveButton: null,
    /**
     * @description Tag whitelist RegExp object used in "_consistencyCheckOfHTML" method
     * ^(options._editorTagsWhitelist)$
     * @private
     */
    _htmlCheckWhitelistRegExp: null,
    /**
     * @description Tag blacklist RegExp object used in "_consistencyCheckOfHTML" method
     * @private
     */
    _htmlCheckBlacklistRegExp: null,
    /**
     * @description RegExp when using check disallowd tags. (b, i, ins, strike, s)
     * @private
     */
    _disallowedTextTagsRegExp: null,
    /**
     * @description Editor tags whitelist (RegExp object)
     * util.createTagsWhitelist(options._editorTagsWhitelist)
     */
    editorTagsWhitelistRegExp: null,
    /**
     * @description Editor tags blacklist (RegExp object)
     * util.createTagsBlacklist(options.tagsBlacklist)
     */
    editorTagsBlacklistRegExp: null,
    /**
     * @description Tag whitelist when pasting (RegExp object)
     * util.createTagsWhitelist(options.pasteTagsWhitelist)
     */
    pasteTagsWhitelistRegExp: null,
    /**
     * @description Tag blacklist when pasting (RegExp object)
     * util.createTagsBlacklist(options.pasteTagsBlacklist)
     */
    pasteTagsBlacklistRegExp: null,
    /**
     * @description Boolean value of whether the editor has focus
     */
    hasFocus: !1,
    /**
     * @description Boolean value of whether the editor is disabled
     */
    isDisabled: !1,
    /**
     * @description Boolean value of whether the editor is readOnly
     */
    isReadOnly: !1,
    /**
     * @description Attributes whitelist used by the cleanHTML method
     * @private
     */
    _attributesWhitelistRegExp: null,
    _attributesWhitelistRegExp_all_data: null,
    /**
     * @description Attributes blacklist used by the cleanHTML method
     * @private
     */
    _attributesBlacklistRegExp: null,
    /**
     * @description Attributes of tags whitelist used by the cleanHTML method
     * @private
     */
    _attributesTagsWhitelist: null,
    /**
     * @description Attributes of tags blacklist used by the cleanHTML method
     * @private
     */
    _attributesTagsBlacklist: null,
    /**
     * @description binded controllersOff method
     * @private
     */
    _bindControllersOff: null,
    /**
     * @description Is inline mode?
     * @private
     */
    _isInline: null,
    /**
     * @description Is balloon|balloon-always mode?
     * @private
     */
    _isBalloon: null,
    /**
     * @description Is balloon-always mode?
     * @private
     */
    _isBalloonAlways: null,
    /**
     * @description Required value when using inline mode to sticky toolbar
     * @private
     */
    _inlineToolbarAttr: { top: "", width: "", isShow: !1 },
    /**
     * @description Variable that controls the "blur" event in the editor of inline or balloon mode when the focus is moved to submenu
     * @private
     */
    _notHideToolbar: !1,
    /**
     * @description Variable value that sticky toolbar mode
     * @private
     */
    _sticky: !1,
    /**
     * @description Variables for controlling focus and blur events
     * @private
     */
    _antiBlur: !1,
    /**
     * @description Component line breaker element
     * @private
     */
    _lineBreaker: null,
    _lineBreakerButton: null,
    /**
     * @description If true, (initialize, reset) all indexes of image, video information
     * @private
     */
    _componentsInfoInit: !0,
    _componentsInfoReset: !1,
    /**
     * @description Plugins array with "active" method.
     * "activePlugins" runs the "add" method when creating the editor.
     */
    activePlugins: null,
    /**
     * @description Information of tags that should maintain HTML structure, style, class name, etc. (In use by "math" plugin)
     * When inserting "html" such as paste, it is executed on the "html" to be inserted. (core.cleanHTML)
     * Basic Editor Actions:
     * 1. All classes not starting with "__se__" or "se-" in the editor are removed.
     * 2. The style of all tags except the "span" tag is removed from the editor.
     * "managedTagsInfo" structure ex:
     * managedTagsInfo: {
     *   query: '.__se__xxx, se-xxx'
     *   map: {
     *     '__se__xxx': method.bind(core),
     *     'se-xxx': method.bind(core),
     *   }
     * }
     * @example
     * Define in the following return format in the "managedTagInfo" function of the plugin.
     * managedTagInfo() => {
     *  return {
     *    className: 'string', // Class name to identify the tag. ("__se__xxx", "se-xxx")
     *    // Change the html of the "element". ("element" is the element found with "className".)
     *    // "method" is executed by binding "core".
     *    method: function (element) {
     *      // this === core
     *      element.innerHTML = // (rendered html);
     *    }
     *  }
     * }
     */
    managedTagsInfo: null,
    /**
     * @description cashing: options.charCounterType === 'byte-html'
     * @private
     */
    _charTypeHTML: !1,
    /**
     * @description Array of "checkFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "fileInfoPlugins" runs the "add" method when creating the editor.
     * "checkFileInfo" method is always call just before the "change" event.
     * @private
     */
    _fileInfoPluginsCheck: null,
    /**
     * @description Array of "resetFileInfo" functions with the core bound
     * (Plugins with "checkFileInfo" and "resetFileInfo" methods)
     * "checkFileInfo" method is always call just before the "functions.setOptions" method.
     * @private
     */
    _fileInfoPluginsReset: null,
    /**
     * @description Variables for file component management
     * @private
     */
    _fileManager: {
      tags: null,
      regExp: null,
      queryString: null,
      pluginRegExp: null,
      pluginMap: null
    },
    /**
     * @description Elements that need to change text or className for each selection change
     * After creating the editor, "activePlugins" are added.
     * @property {Element} STRONG bold button
     * @property {Element} U underline button
     * @property {Element} EM italic button
     * @property {Element} DEL strike button
     * @property {Element} SUB subscript button
     * @property {Element} SUP superscript button
     * @property {Element} OUTDENT outdent button
     * @property {Element} INDENT indent button
     */
    commandMap: {},
    /**
     * @description CSS properties related to style tags 
     * @private
     */
    _commandMapStyles: {
      STRONG: ["font-weight"],
      U: ["text-decoration"],
      EM: ["font-style"],
      DEL: ["text-decoration"]
    },
    /**
     * @description Style button related to edit area
     * @property {Element} fullScreen fullScreen button element
     * @property {Element} showBlocks showBlocks button element
     * @property {Element} codeView codeView button element
     * @private
     */
    _styleCommandMap: null,
    /**
     * @private
     */
    _cleanStyleRegExp: {
      div: new f.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new f.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new f.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new f.RegExp("\\d+" + n.fontSizeUnit + "$", "i")
    },
    /**
     * @description Variables used internally in editor operation
     * @property {Boolean} isCodeView State of code view
     * @property {Boolean} isFullScreen State of full screen
     * @property {Number} innerHeight_fullScreen InnerHeight in editor when in full screen
     * @property {Number} resizeClientY Remember the vertical size of the editor before resizing the editor (Used when calculating during resize operation)
     * @property {Number} tabSize Indent size of tab (4)
     * @property {Number} codeIndent Indent size of Code view mode (2)
     * @property {Number} minResizingSize Minimum size of editing area when resized {Number} (.se-wrapper-inner {min-height: 65px;} || 65)
     * @property {Array} currentNodes  An array of the current cursor's node structure
     * @private
     */
    _variable: {
      isChanged: !1,
      isCodeView: !1,
      isFullScreen: !1,
      innerHeight_fullScreen: 0,
      resizeClientY: 0,
      tabSize: 4,
      codeIndent: 2,
      minResizingSize: l.getNumber(e.element.wysiwygFrame.style.minHeight || "65", 0),
      currentNodes: [],
      currentNodesMap: [],
      _range: null,
      _selectionNode: null,
      _originCssText: e.element.topArea.style.cssText,
      _bodyOverflow: "",
      _editorAreaOriginCssText: "",
      _wysiwygOriginCssText: "",
      _codeOriginCssText: "",
      _fullScreenAttrs: { sticky: !1, balloon: !1, inline: !1 },
      _lineBreakComp: null,
      _lineBreakDir: ""
    },
    /**
     * @description Temp variable for set line attrs
     * @private
     */
    _formatAttrsTemp: null,
    /**
     * @description Save the current buttons states to "allCommandButtons" object
     * @private
     */
    _saveButtonStates: function() {
      this.allCommandButtons || (this.allCommandButtons = {});
      const o = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let a = 0, d, h; a < o.length; a++)
        d = o[a], h = d.getAttribute("data-command"), this.allCommandButtons[h] = d;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const o = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let a = 0, d, h, g; a < o.length; a++)
          d = o[a], h = d.getAttribute("data-command"), g = this.allCommandButtons[h], g && (d.parentElement.replaceChild(g, d), this.context.tool[h] && (this.context.tool[h] = g));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(o, a, d) {
      if (d = d || t[o], this.plugins[o])
        this.initPlugins[o] ? typeof this._targetPlugins[o] == "object" && d && this.initMenuTarget(o, d, this._targetPlugins[o]) : (this.plugins[o].add(this, d), this.initPlugins[o] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + o + '")');
      this.plugins[o].active && !this.commandMap[o] && d && (this.commandMap[o] = d, this.activePlugins.push(o)), typeof a == "function" && a();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(o) {
      for (let a = 0, d = o.length, h; a < d; a++)
        h = o[a].name, this.plugins[h] || (this.plugins[h] = o[a]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let o = 0, a = 0, d = e.element.topArea;
      for (; d; )
        o += d.scrollTop, a += d.scrollLeft, d = d.parentElement;
      for (d = this._shadowRoot ? this._shadowRoot.host : null; d; )
        o += d.scrollTop, a += d.scrollLeft, d = d.parentElement;
      return {
        top: o,
        left: a
      };
    },
    /**
     * @description Method for managing submenu element.
     * You must add the "submenu" element using the this method at custom plugin.
     * @param {String} pluginName Plugin name
     * @param {Element|null} target Target button
     * @param {Element} menu Submenu element
     */
    initMenuTarget: function(o, a, d) {
      a ? (e.element._menuTray.appendChild(d), this._targetPlugins[o] = !0, this._menuTray[a.getAttribute("data-command")] = d) : this._targetPlugins[o] = d;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(o) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const a = this._submenuName = o.getAttribute("data-command"), d = this.submenu = this._menuTray[a];
      this.submenuActiveButton = o, this._setMenuPosition(o, d), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable submenu
     */
    submenuOff: function() {
      this.removeDocEvent("mousedown", this._bindedSubmenuOff), this._bindedSubmenuOff = null, this.submenu && (this._submenuName = "", this.submenu.style.display = "none", this.submenu = null, l.removeClass(this.submenuActiveButton, "on"), this.submenuActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Disable more layer
     */
    moreLayerOff: function() {
      if (this._moreLayerActiveButton) {
        const o = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        o.style.display = "none", l.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(o) {
      this._bindedContainerOff && this._bindedContainerOff();
      const a = this._containerName = o.getAttribute("data-command"), d = this.container = this._menuTray[a];
      this.containerActiveButton = o, this._setMenuPosition(o, d), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable container
     */
    containerOff: function() {
      this.removeDocEvent("mousedown", this._bindedContainerOff), this._bindedContainerOff = null, this.container && (this._containerName = "", this.container.style.display = "none", this.container = null, l.removeClass(this.containerActiveButton, "on"), this.containerActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Set the menu position. (submenu, container)
     * @param {*} element Button element
     * @param {*} menu Menu element
     * @private
     */
    _setMenuPosition: function(o, a) {
      a.style.visibility = "hidden", a.style.display = "block", a.style.height = "", l.addClass(o, "on");
      const d = this.context.element.toolbar, h = d.offsetWidth, g = m._getEditorOffsets(e.element.toolbar), b = a.offsetWidth, p = o.parentElement.offsetLeft + 3;
      if (n.rtl) {
        const R = o.offsetWidth, D = b > R ? b - R : 0, U = D > 0 ? 0 : R - b;
        a.style.left = p - D + U + "px", g.left > m._getEditorOffsets(a).left && (a.style.left = "0px");
      } else {
        const R = h <= b ? 0 : h - (p + b);
        R < 0 ? a.style.left = p + R + "px" : a.style.left = p + "px";
      }
      let v = 0, C = o;
      for (; C && C !== d; )
        v += C.offsetTop, C = C.offsetParent;
      const y = v;
      this._isBalloon ? v += d.offsetTop + o.offsetHeight : v -= o.offsetHeight;
      const w = g.top, M = a.offsetHeight, S = this.getGlobalScrollOffset().top, k = f.innerHeight - (w - S + y + o.parentElement.offsetHeight);
      if (k < M) {
        let R = -1 * (M - y + 3);
        const D = w - S + R, U = M + (D < 0 ? D : 0);
        U > k ? (a.style.height = U + "px", R = -1 * (U - y + 3)) : (a.style.height = k + "px", R = y + o.parentElement.offsetHeight), a.style.top = R + "px";
      } else
        a.style.top = y + o.parentElement.offsetHeight + "px";
      a.style.visibility = "";
    },
    /**
     * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
     * @param {*} arguments controller elements, functions..
     */
    controllersOn: function() {
      this._bindControllersOff && this._bindControllersOff(), this.controllerArray = [];
      for (let o = 0, a; o < arguments.length; o++)
        if (a = arguments[o], !!a) {
          if (typeof a == "string") {
            this.currentControllerName = a;
            continue;
          }
          if (typeof a == "function") {
            this.controllerArray.push(a);
            continue;
          }
          if (!l.hasClass(a, "se-controller")) {
            this.currentControllerTarget = a, this.currentFileComponentInfo = this.getFileComponent(a);
            continue;
          }
          a.style && (a.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(a) === -1 && (a.addEventListener("mousedown", function(d) {
            d.preventDefault(), d.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(a))), this.controllerArray.push(a);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof x.showController == "function" && x.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(o) {
      this._lineBreaker.style.display = "none";
      const a = this.controllerArray.length;
      if (o && o.target && a > 0) {
        for (let d = 0; d < a; d++)
          if (typeof this.controllerArray[d].contains == "function" && this.controllerArray[d].contains(o.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && o && o.type === "keydown" && o.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, a > 0) {
          for (let d = 0; d < a; d++)
            typeof this.controllerArray[d] == "function" ? this.controllerArray[d]() : this.controllerArray[d].style.display = "none";
          this.controllerArray = [];
        }
        this._antiBlur = !1;
      }
    },
    /**
     * @description Specify the position of the controller.
     * @param {Element} controller Controller element.
     * @param {Element} referEl Element that is the basis of the controller's position.
     * @param {String} position Type of position ("top" | "bottom")
     * When using the "top" position, there should not be an arrow on the controller.
     * When using the "bottom" position there should be an arrow on the controller.
     * @param {Object} addOffset These are the left and top values that need to be added specially. 
     * This argument is required. - {left: 0, top: 0}
     * Please enter the value based on ltr mode.
     * Calculated automatically in rtl mode.
     */
    setControllerPosition: function(o, a, d, h) {
      n.rtl && (h.left *= -1);
      const g = l.getOffset(a, e.element.wysiwygFrame);
      o.style.visibility = "hidden", o.style.display = "block";
      const b = d === "top" ? -(o.offsetHeight + 2) : a.offsetHeight + 12;
      o.style.top = g.top + b + h.top + "px";
      const p = g.left - e.element.wysiwygFrame.scrollLeft + h.left, v = o.offsetWidth, C = a.offsetWidth, y = l.hasClass(o.firstElementChild, "se-arrow") ? o.firstElementChild : null;
      if (n.rtl) {
        const w = v > C ? v - C : 0, M = w > 0 ? 0 : C - v;
        o.style.left = p - w + M + "px", w > 0 && y && (y.style.left = (v - 14 < 10 + w ? v - 14 : 10 + w) + "px");
        const S = e.element.wysiwygFrame.offsetLeft - o.offsetLeft;
        S > 0 && (o.style.left = "0px", y && (y.style.left = S + "px"));
      } else {
        o.style.left = p + "px";
        const w = e.element.wysiwygFrame.offsetWidth - (o.offsetLeft + v);
        w < 0 ? (o.style.left = o.offsetLeft + w + "px", y && (y.style.left = 20 - w + "px")) : y && (y.style.left = "20px");
      }
      o.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(o, a, d) {
      this._wd.execCommand(o, a, o === "formatBlock" ? "<" + d + ">" : d), this.history.push(!0);
    },
    /**
     * @description Focus to wysiwyg area using "native focus function"
     */
    nativeFocus: function() {
      this.__focus(), this._editorRange();
    },
    /**
     * @description Focus method
     * @private
     */
    __focus: function() {
      const o = l.getParentElement(this.getSelectionNode(), "figcaption");
      o ? o.focus() : e.element.wysiwyg.focus();
    },
    /**
     * @description Focus to wysiwyg area
     */
    focus: function() {
      if (e.element.wysiwygFrame.style.display !== "none") {
        if (n.iframe)
          this.nativeFocus();
        else
          try {
            const o = this.getRange();
            if (o.startContainer === o.endContainer && l.isWysiwygDiv(o.startContainer)) {
              const a = o.commonAncestorContainer.children[o.startOffset];
              if (!l.isFormatElement(a) && !l.isComponent(a)) {
                const d = l.createElement(n.defaultTag), h = l.createElement("BR");
                d.appendChild(h), e.element.wysiwyg.insertBefore(d, a), this.setRange(h, 0, h, 0);
                return;
              }
            }
            this.setRange(o.startContainer, o.startOffset, o.endContainer, o.endOffset);
          } catch {
            this.nativeFocus();
          }
        m._applyTagEffects(), this._isBalloon && m._toggleToolbarBalloon();
      }
    },
    /**
     * @description If "focusEl" is a component, then that component is selected; if it is a format element, the last text is selected
     * If "focusEdge" is null, then selected last element
     * @param {Element|null} focusEl Focus element
     */
    focusEdge: function(o) {
      o || (o = e.element.wysiwyg.lastElementChild);
      const a = this.getFileComponent(o);
      a ? this.selectComponent(a.target, a.pluginName) : o ? (o = l.getChildElement(o, function(d) {
        return d.childNodes.length === 0 || d.nodeType === 3;
      }, !0), o ? this.setRange(o, o.textContent.length, o, o.textContent.length) : this.nativeFocus()) : this.focus();
    },
    /**
     * @description Focusout to wysiwyg area (.blur())
     */
    blur: function() {
      n.iframe ? e.element.wysiwygFrame.blur() : e.element.wysiwyg.blur();
    },
    /**
     * @description Set current editor's range object and return.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @returns {Object} Range object.
     */
    setRange: function(o, a, d, h) {
      if (!o || !d) return;
      a > o.textContent.length && (a = o.textContent.length), h > d.textContent.length && (h = d.textContent.length), l.isFormatElement(o) && (o = o.childNodes[a] || o.childNodes[a - 1] || o, a = a > 0 ? o.nodeType === 1 ? 1 : o.textContent ? o.textContent.length : 0 : 0), l.isFormatElement(d) && (d = d.childNodes[h] || d.childNodes[h - 1] || d, h = h > 0 ? d.nodeType === 1 ? 1 : d.textContent ? d.textContent.length : 0 : 0);
      const g = this._wd.createRange();
      try {
        g.setStart(o, a), g.setEnd(d, h);
      } catch (p) {
        console.warn("[SUNEDITOR.core.focus.error] " + p), this.nativeFocus();
        return;
      }
      const b = this.getSelection();
      return b.removeAllRanges && b.removeAllRanges(), b.addRange(g), this._rangeInfo(g, this.getSelection()), n.iframe && this.__focus(), g;
    },
    /**
     * @description Remove range object and button effect
     */
    removeRange: function() {
      this._variable._range = null, this._variable._selectionNode = null, this.hasFocus && this.getSelection().removeAllRanges(), this._setKeyEffect([]);
    },
    /**
     * @description Get current editor's range object
     * @returns {Object}
     */
    getRange: function() {
      const o = this._variable._range || this._createDefaultRange(), a = this.getSelection();
      if (o.collapsed === a.isCollapsed || !e.element.wysiwyg.contains(a.focusNode)) return o;
      if (a.rangeCount > 0)
        return this._variable._range = a.getRangeAt(0), this._variable._range;
      {
        const d = a.anchorNode, h = a.focusNode, g = a.anchorOffset, b = a.focusOffset, p = l.compareElements(d, h), v = p.ancestor && (p.result === 0 ? g <= b : p.result > 1);
        return this.setRange(
          v ? d : h,
          v ? g : b,
          v ? h : d,
          v ? b : g
        );
      }
    },
    /**
     * @description If the "range" object is a non-editable area, add a line at the top of the editor and update the "range" object.
     * Returns a new "range" or argument "range".
     * @param {Object} range core.getRange()
     * @param {Element|null} container If there is "container" argument, it creates a line in front of the container.
     * @returns {Object} range
     */
    getRange_addLine: function(o, a) {
      if (this._selectionVoid(o)) {
        const d = e.element.wysiwyg, h = l.createElement(n.defaultTag);
        h.innerHTML = "<br>", d.insertBefore(h, a && a !== d ? a.nextElementSibling : d.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), o = this._variable._range;
      }
      return o;
    },
    /**
     * @description Get window selection obejct
     * @returns {Object}
     */
    getSelection: function() {
      const o = this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection();
      return !this._variable._range && !e.element.wysiwyg.contains(o.focusNode) && (o.removeAllRanges(), o.addRange(this._createDefaultRange())), o;
    },
    /**
     * @description Get current select node
     * @returns {Node}
     */
    getSelectionNode: function() {
      if (e.element.wysiwyg.contains(this._variable._selectionNode) || this._editorRange(), !this._variable._selectionNode) {
        const o = l.getChildElement(e.element.wysiwyg.firstChild, function(a) {
          return a.childNodes.length === 0 || a.nodeType === 3;
        }, !1);
        if (!o)
          this._editorRange();
        else
          return this._variable._selectionNode = o, o;
      }
      return this._variable._selectionNode;
    },
    /**
     * @description Saving the range object and the currently selected node of editor
     * @private
     */
    _editorRange: function() {
      const o = this._wd.activeElement;
      if (l.isInputElement(o))
        return this._variable._selectionNode = o, o;
      const a = this.getSelection();
      if (!a) return null;
      let d = null;
      a.rangeCount > 0 ? d = a.getRangeAt(0) : d = this._createDefaultRange(), this._rangeInfo(d, a);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(o, a) {
      let d = null;
      this._variable._range = o, o.collapsed ? l.isWysiwygDiv(o.commonAncestorContainer) ? d = o.commonAncestorContainer.children[o.startOffset] || o.commonAncestorContainer : d = o.commonAncestorContainer : d = a.extentNode || a.anchorNode, this._variable._selectionNode = d;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const o = e.element.wysiwyg, a = this._wd.createRange();
      let d = o.firstElementChild, h = null;
      return d ? (h = d.firstChild, h || (h = l.createElement("BR"), d.appendChild(h))) : (d = l.createElement(n.defaultTag), h = l.createElement("BR"), d.appendChild(h), o.appendChild(d)), a.setStart(h, 0), a.setEnd(h, 0), a;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(o) {
      const a = o.commonAncestorContainer;
      return l.isWysiwygDiv(o.startContainer) && l.isWysiwygDiv(o.endContainer) || /FIGURE/i.test(a.nodeName) || this._fileManager.regExp.test(a.nodeName) || l.isMediaComponent(a);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const o = this.getRange();
      if (this._selectionVoid(o)) return !1;
      const a = o.collapsed;
      let d = o.startContainer, h = o.startOffset, g = o.endContainer, b = o.endOffset, p, v, C;
      if (l.isFormatElement(d))
        for (d.childNodes[h] ? (d = d.childNodes[h] || d, h = 0) : (d = d.lastChild || d, h = d.textContent.length); d && d.nodeType === 1 && d.firstChild; )
          d = d.firstChild || d, h = 0;
      if (l.isFormatElement(g)) {
        for (g = g.childNodes[b] || g.lastChild || g; g && g.nodeType === 1 && g.lastChild; )
          g = g.lastChild;
        b = a ? 0 : g.textContent.length;
      }
      if (p = l.isWysiwygDiv(d) ? e.element.wysiwyg.firstChild : d, v = h, l.isBreak(p) || p.nodeType === 1 && p.childNodes.length > 0) {
        const y = l.isBreak(p);
        if (!y) {
          for (; p && !l.isBreak(p) && p.nodeType === 1; )
            p = p.childNodes[v] || p.nextElementSibling || p.nextSibling, v = 0;
          let w = l.getFormatElement(p, null);
          w === l.getRangeFormatElement(w, null) && (w = l.createElement(l.getParentElement(p, l.isCell) ? "DIV" : n.defaultTag), p.parentNode.insertBefore(w, p), w.appendChild(p));
        }
        if (l.isBreak(p)) {
          const w = l.createTextNode(l.zeroWidthSpace);
          p.parentNode.insertBefore(w, p), p = w, y && d === g && (g = p, b = 1);
        }
      }
      if (d = p, h = v, p = l.isWysiwygDiv(g) ? e.element.wysiwyg.lastChild : g, v = b, l.isBreak(p) || p.nodeType === 1 && p.childNodes.length > 0) {
        const y = l.isBreak(p);
        if (!y) {
          for (; p && !l.isBreak(p) && p.nodeType === 1 && (C = p.childNodes, C.length !== 0); )
            p = C[v > 0 ? v - 1 : v] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : p.previousElementSibling || p.previousSibling || d, v = v > 0 ? p.textContent.length : v;
          let w = l.getFormatElement(p, null);
          w === l.getRangeFormatElement(w, null) && (w = l.createElement(l.isCell(w) ? "DIV" : n.defaultTag), p.parentNode.insertBefore(w, p), w.appendChild(p));
        }
        if (l.isBreak(p)) {
          const w = l.createTextNode(l.zeroWidthSpace);
          p.parentNode.insertBefore(w, p), p = w, v = 1, y && !p.previousSibling && l.removeItem(g);
        }
      }
      return g = p, b = v, this.setRange(d, h, g, b), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(o) {
      if (!this._resetRangeToTextNode()) return [];
      let a = this.getRange();
      if (l.isWysiwygDiv(a.startContainer)) {
        const R = e.element.wysiwyg.children;
        if (R.length === 0) return [];
        this.setRange(R[0], 0, R[R.length - 1], R[R.length - 1].textContent.trim().length), a = this.getRange();
      }
      const d = a.startContainer, h = a.endContainer, g = a.commonAncestorContainer, b = l.getListChildren(g, function(R) {
        return o ? o(R) : l.isFormatElement(R);
      });
      if (!l.isWysiwygDiv(g) && !l.isRangeFormatElement(g) && b.unshift(l.getFormatElement(g, null)), d === h || b.length === 1) return b;
      let p = l.getFormatElement(d, null), v = l.getFormatElement(h, null), C = null, y = null;
      const w = function(R) {
        return l.isTable(R) ? /^TABLE$/i.test(R.nodeName) : !0;
      };
      let M = l.getRangeFormatElement(p, w), S = l.getRangeFormatElement(v, w);
      l.isTable(M) && l.isListCell(M.parentNode) && (M = M.parentNode), l.isTable(S) && l.isListCell(S.parentNode) && (S = S.parentNode);
      const k = M === S;
      for (let R = 0, D = b.length, U; R < D; R++) {
        if (U = b[R], p === U || !k && U === M) {
          C = R;
          continue;
        }
        if (v === U || !k && U === S) {
          y = R;
          break;
        }
      }
      return C === null && (C = 0), y === null && (y = b.length - 1), b.slice(C, y + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(o) {
      const a = this.getRange().commonAncestorContainer, d = l.getParentElement(a, l.isComponent), h = l.isTable(a) ? this.getSelectedElements(null) : this.getSelectedElements((function(g) {
        const b = this.getParentElement(g, this.isComponent);
        return this.isFormatElement(g) && (!b || b === d) || this.isComponent(g) && !this.getFormatElement(g);
      }).bind(l));
      if (o) {
        for (let g = 0, b = h.length; g < b; g++)
          for (let p = g - 1; p >= 0; p--)
            if (h[p].contains(h[g])) {
              h.splice(g, 1), g--, b--;
              break;
            }
      }
      return h;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("start": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(o, a, d) {
      return o.nodeType === 1 && !o.textContent.length ? !0 : d !== "end" && a === 0 || (!d || d !== "start") && !o.nodeValue && a === 1 || (!d || d === "end") && !!o.nodeValue && a === o.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(o, a, d) {
      if (!this.isEdgePoint(o, a, d)) return !1;
      const h = [];
      for (d = d === "start" ? "previousSibling" : "nextSibling"; o && !l.isFormatElement(o) && !l.isWysiwygDiv(o); )
        if (!o[d] || l.isBreak(o[d]) && !o[d][d])
          o.nodeType === 1 && h.push(o.cloneNode(!1)), o = o.parentNode;
        else
          return null;
      return h;
    },
    /**
     * @description Show loading box
     */
    showLoading: function() {
      e.element.loading.style.display = "block";
    },
    /**
     * @description Close loading box
     */
    closeLoading: function() {
      e.element.loading.style.display = "none";
    },
    /**
     * @description Append format element to sibling node of argument element.
     * If the "formatNodeName" argument value is present, the tag of that argument value is inserted,
     * If not, the currently selected format tag is inserted.
     * @param {Element} element Insert as siblings of that element
     * @param {String|Element|null} formatNode Node name or node obejct to be inserted
     * @returns {Element}
     */
    appendFormatTag: function(o, a) {
      if (!o || !o.parentNode) return null;
      const d = l.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!l.isFormatElement(o) && l.isFreeFormatElement(d || o.parentNode))
        h = l.createElement("BR");
      else {
        const g = a ? typeof a == "string" ? a : a.nodeName : l.isFormatElement(d) && !l.isRangeFormatElement(d) && !l.isFreeFormatElement(d) ? d.nodeName : n.defaultTag;
        h = l.createElement(g), h.innerHTML = "<br>", (a && typeof a != "string" || !a && l.isFormatElement(d)) && l.copyTagAttributes(h, a || d, ["id"]);
      }
      return l.isCell(o) ? o.insertBefore(h, o.nextElementSibling) : o.parentNode.insertBefore(h, o.nextElementSibling), h;
    },
    /**
     * @description The method to insert a element and return. (used elements : table, hr, image, video)
     * If "element" is "HR", insert and return the new line.
     * @param {Element} element Element to be inserted
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} notSelect If true, Do not automatically select the inserted component.
     * @returns {Element}
     */
    insertComponent: function(o, a, d, h) {
      if (this.isReadOnly || d && !this.checkCharCount(o, null))
        return null;
      const g = this.removeNode();
      this.getRange_addLine(this.getRange(), g.container);
      let b = null, p = this.getSelectionNode(), v = l.getFormatElement(p, null);
      if (l.isListCell(v))
        this.insertNode(o, p === v ? null : g.container.nextSibling, !1), o.nextSibling || o.parentNode.appendChild(l.createElement("BR"));
      else {
        if (this.getRange().collapsed && (g.container.nodeType === 3 || l.isBreak(g.container))) {
          const C = l.getParentElement(g.container, (function(y) {
            return this.isRangeFormatElement(y);
          }).bind(l));
          b = l.splitElement(g.container, g.offset, C ? l.getElementDepth(C) + 1 : 0), b && (v = b.previousSibling);
        }
        this.insertNode(o, l.isRangeFormatElement(v) ? null : v, !1), v && l.onlyZeroWidthSpace(v) && l.removeItem(v);
      }
      if (!h) {
        this.setRange(o, 0, o, 0);
        const C = this.getFileComponent(o);
        C ? this.selectComponent(C.target, C.pluginName) : b && (b = l.getEdgeChildNodes(b, null).sc || b, this.setRange(b, 0, b, 0));
      }
      return a || this.history.push(1), b || o;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(o) {
      if (!this._fileManager.queryString || !o) return null;
      let a, d;
      return (/^FIGURE$/i.test(o.nodeName) || /se-component/.test(o.className)) && (a = o.querySelector(this._fileManager.queryString)), !a && o.nodeName && this._fileManager.regExp.test(o.nodeName) && (a = o), a && (d = this._fileManager.pluginMap[a.nodeName.toLowerCase()], d) ? {
        target: a,
        component: l.getParentElement(a, l.isComponent),
        pluginName: d
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(o, a) {
      if (l.isUneditableComponent(l.getParentElement(o, l.isComponent)) || l.isUneditableComponent(o)) return !1;
      this.hasFocus || this.focus();
      const d = this.plugins[a];
      d && f.setTimeout((function() {
        typeof d.select == "function" && this.callPlugin(a, d.select.bind(this, o), null), this._setComponentLineBreaker(o);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(o) {
      this._lineBreaker.style.display = "none";
      const a = l.getParentElement(o, l.isComponent), d = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, g = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : o, b = l.isListCell(a.parentNode);
      let p, v, C;
      (b ? !a.previousSibling : !l.isFormatElement(a.previousElementSibling)) ? (this._variable._lineBreakComp = a, v = e.element.wysiwyg.scrollTop, p = l.getOffset(o, e.element.wysiwygFrame).top + v, C = g.offsetWidth / 2 / 2, d.top = p - v - 12 + "px", d.left = l.getOffset(g).left + C + "px", d.display = "block") : d.display = "none", (b ? !a.nextSibling : !l.isFormatElement(a.nextElementSibling)) ? (p || (this._variable._lineBreakComp = a, v = e.element.wysiwyg.scrollTop, p = l.getOffset(o, e.element.wysiwygFrame).top + v, C = g.offsetWidth / 2 / 2), h.top = p + g.offsetHeight - v - 12 + "px", h.left = l.getOffset(g).left + g.offsetWidth - C - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(o, a) {
      (function d(h) {
        c._dupleCheck(h, a);
        const g = h.childNodes;
        for (let b = 0, p = g.length; b < p; b++)
          d(g[b]);
      })(o);
    },
    _dupleCheck: function(o, a) {
      if (!l.isTextStyleElement(o)) return;
      const d = (o.style.cssText.match(/[^;]+;/g) || []).map(function(b) {
        return b.trim();
      }), h = o.nodeName;
      if (/^span$/i.test(h) && d.length === 0) return o;
      let g = !1;
      return function b(p) {
        if (!(l.isWysiwygDiv(p) || !l.isTextStyleElement(p))) {
          if (p.nodeName === h) {
            g = !0;
            const v = p.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, y = v.length, w; C < y; C++)
              (w = d.indexOf(v[C].trim())) > -1 && d.splice(w, 1);
            for (let C = 0, y = p.classList.length; C < y; C++)
              o.classList.remove(p.classList[C]);
          }
          b(p.parentElement);
        }
      }(a), g && ((o.style.cssText = d.join(" ")) || (o.setAttribute("style", ""), o.removeAttribute("style")), o.attributes.length || o.setAttribute("data-se-duple", "true")), o;
    },
    /**
     * @description Delete selected node and insert argument value node and return.
     * If the "afterNode" exists, it is inserted after the "afterNode"
     * Inserting a text node merges with both text nodes on both sides and returns a new "{ container, startOffset, endOffset }".
     * @param {Node} oNode Element to be inserted
     * @param {Node|null} afterNode If the node exists, it is inserted after the node
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @returns {Object|Node|null}
     */
    insertNode: function(o, a, d) {
      if (this.isReadOnly || d && !this.checkCharCount(o, null))
        return null;
      let h = null, g = this.getRange(), b = l.isListCell(g.commonAncestorContainer) ? g.commonAncestorContainer : l.getFormatElement(this.getSelectionNode(), null), p = l.isListCell(b) && (l.isListCell(o) || l.isList(o)), v, C, y, w = null;
      const M = l.isFreeFormatElement(b), S = !M && (l.isFormatElement(o) || l.isRangeFormatElement(o)) || l.isComponent(o);
      if (p && (y = a || l.isList(o) ? b.lastChild : b.nextElementSibling, w = l.isList(o) ? b : (y || b).parentNode), !a && (S || l.isComponent(o) || l.isMedia(o))) {
        const P = this.isEdgePoint(g.endContainer, g.endOffset, "end"), B = this.removeNode(), F = B.container, N = F === B.prevContainer && g.collapsed ? null : B.prevContainer;
        if (p && N)
          if (w = N.nodeType === 3 ? N.parentNode : N, w.contains(F)) {
            let V = !0;
            for (y = F; y.parentNode && y.parentNode !== w; )
              y = y.parentNode, V = !1;
            V && F === N && (y = y.nextSibling);
          } else
            y = null;
        else if (p && l.isListCell(F) && !b.parentElement)
          b = l.createElement("LI"), w.appendChild(b), F.appendChild(w), y = null;
        else if (F.nodeType === 3 || l.isBreak(F) || p) {
          const V = l.getParentElement(F, (function(L) {
            return this.isRangeFormatElement(L) || this.isListCell(L);
          }).bind(l));
          if (a = l.splitElement(F, B.offset, V ? l.getElementDepth(V) + 1 : 0), !a)
            y = a = b;
          else if (p) {
            if (b.contains(F)) {
              const L = l.isList(b.lastElementChild);
              let O = null;
              P || (O = b.cloneNode(!1), O.appendChild(a.textContent.trim() ? a : l.createTextNode(l.zeroWidthSpace))), L && (O || (O = b.cloneNode(!1), O.appendChild(l.createTextNode(l.zeroWidthSpace))), O.appendChild(b.lastElementChild)), O && (b.parentNode.insertBefore(O, b.nextElementSibling), y = a = O);
            }
          } else
            a = a.previousSibling;
        }
      }
      g = !a && !S ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const k = g.commonAncestorContainer, R = g.startOffset, D = g.endOffset, U = g.startContainer === k && l.isFormatElement(k), I = U && (k.childNodes[R] || k.childNodes[0]) || g.startContainer, H = U && (k.childNodes[D] || k.childNodes[k.childNodes.length - 1]) || g.endContainer;
      if (!p)
        if (a)
          v = a.parentNode, a = a.nextSibling, C = !0;
        else if (v = I, I.nodeType === 3 && (v = I.parentNode), g.collapsed)
          if (k.nodeType === 3)
            k.textContent.length > D ? a = k.splitText(D) : a = k.nextSibling;
          else if (l.isBreak(v))
            a = v, v = v.parentNode;
          else {
            let P = v.childNodes[R];
            const B = P && P.nodeType === 3 && l.onlyZeroWidthSpace(P) && l.isBreak(P.nextSibling) ? P.nextSibling : P;
            B ? !B.nextSibling && l.isBreak(B) ? (v.removeChild(B), a = null) : a = l.isBreak(B) && !l.isBreak(o) ? B : B.nextSibling : a = null;
          }
        else if (I === H) {
          this.isEdgePoint(H, D) ? a = H.nextSibling : a = H.splitText(D);
          let B = I;
          this.isEdgePoint(I, R) || (B = I.splitText(R)), v.removeChild(B), v.childNodes.length === 0 && S && (v.innerHTML = "<br>");
        } else {
          const B = this.removeNode(), F = B.container, N = B.prevContainer;
          if (F && F.childNodes.length === 0 && S && (l.isFormatElement(F) ? F.innerHTML = "<br>" : l.isRangeFormatElement(F) && (F.innerHTML = "<" + n.defaultTag + "><br></" + n.defaultTag + ">")), l.isListCell(F) && o.nodeType === 3)
            v = F, a = null;
          else if (!S && N)
            if (v = N.nodeType === 3 ? N.parentNode : N, v.contains(F)) {
              let V = !0;
              for (a = F; a.parentNode && a.parentNode !== v; )
                a = a.parentNode, V = !1;
              V && F === N && (a = a.nextSibling);
            } else
              a = null;
          else l.isWysiwygDiv(F) && !l.isFormatElement(o) ? (v = F.appendChild(l.createElement(n.defaultTag)), a = null) : (a = S ? H : F === N ? F.nextSibling : F, v = !a || !a.parentNode ? k : a.parentNode);
          for (; a && !l.isFormatElement(a) && a.parentNode !== k; )
            a = a.parentNode;
        }
      try {
        if (!p) {
          if ((l.isWysiwygDiv(a) || v === e.element.wysiwyg.parentNode) && (v = e.element.wysiwyg, a = null), l.isFormatElement(o) || l.isRangeFormatElement(o) || !l.isListCell(v) && l.isComponent(o)) {
            const P = v;
            if (l.isList(a))
              v = a, a = null;
            else if (l.isListCell(a))
              v = a.previousElementSibling || a;
            else if (!C && !a) {
              const B = this.removeNode(), F = B.container.nodeType === 3 ? l.isListCell(l.getFormatElement(B.container, null)) ? B.container : l.getFormatElement(B.container, null) || B.container.parentNode : B.container, N = l.isWysiwygDiv(F) || l.isRangeFormatElement(F);
              v = N ? F : F.parentNode, a = N ? null : F.nextSibling;
            }
            P.childNodes.length === 0 && v !== P && l.removeItem(P);
          }
          if (S && !M && !l.isRangeFormatElement(v) && !l.isListCell(v) && !l.isWysiwygDiv(v) && (a = v.nextElementSibling, v = v.parentNode), l.isWysiwygDiv(v) && (o.nodeType === 3 || l.isBreak(o))) {
            const P = l.createElement(n.defaultTag);
            P.appendChild(o), h = o, o = P;
          }
        }
        if (p ? w.parentNode ? (v = w, a = y) : (v = e.element.wysiwyg, a = null) : a = v === a ? v.lastChild : a, l.isListCell(o) && !l.isList(v)) {
          if (l.isListCell(v))
            a = v.nextElementSibling, v = v.parentNode;
          else {
            const P = l.createElement("ol");
            v.insertBefore(P, a), v = P, a = null;
          }
          p = !0;
        }
        if (this._checkDuplicateNode(o, v), v.insertBefore(o, a), p)
          if (l.onlyZeroWidthSpace(b.textContent.trim()))
            l.removeItem(b), o = o.lastChild;
          else {
            const P = l.getArrayItem(b.children, l.isList);
            P && (o !== P ? (o.appendChild(P), o = P.previousSibling) : (v.appendChild(o), o = v), l.onlyZeroWidthSpace(b.textContent.trim()) && l.removeItem(b));
          }
      } catch (P) {
        v.appendChild(o), console.warn("[SUNEDITOR.insertNode.warn] " + P);
      } finally {
        h && (o = h);
        const P = v.querySelectorAll("[data-se-duple]");
        if (P.length > 0)
          for (let B = 0, F = P.length, N, V, L, O; B < F; B++) {
            for (N = P[B], L = N.childNodes, O = N.parentNode; L[0]; )
              V = L[0], O.insertBefore(V, N);
            N === o && (o = V), l.removeItem(N);
          }
        if ((l.isFormatElement(o) || l.isComponent(o)) && I === H) {
          const B = l.getFormatElement(k, null);
          B && B.nodeType === 1 && l.isEmptyLine(B) && l.removeItem(B);
        }
        if (M && (l.isFormatElement(o) || l.isRangeFormatElement(o)) && (o = this._setIntoFreeFormat(o)), !l.isComponent(o)) {
          let B = 1;
          if (o.nodeType === 3)
            B = o.textContent.length, this.setRange(o, B, o, B);
          else if (!l.isBreak(o) && !l.isListCell(o) && l.isFormatElement(v)) {
            let F = null;
            (!o.previousSibling || l.isBreak(o.previousSibling)) && (F = l.createTextNode(l.zeroWidthSpace), o.parentNode.insertBefore(F, o)), (!o.nextSibling || l.isBreak(o.nextSibling)) && (F = l.createTextNode(l.zeroWidthSpace), o.parentNode.insertBefore(F, o.nextSibling)), l._isIgnoreNodeChange(o) && (o = o.nextSibling, B = 0);
          }
          this.setRange(o, B, o, B);
        }
        return o;
      }
    },
    _setIntoFreeFormat: function(o) {
      const a = o.parentNode;
      let d, h;
      for (; l.isFormatElement(o) || l.isRangeFormatElement(o); ) {
        for (d = o.childNodes, h = null; d[0]; ) {
          if (h = d[0], l.isFormatElement(h) || l.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !o.parentNode) break;
            d = o.childNodes;
            continue;
          }
          a.insertBefore(h, o);
        }
        o.childNodes.length === 0 && l.removeItem(o), o = l.createElement("BR"), a.insertBefore(o, h.nextSibling);
      }
      return o;
    },
    /**
     * @description Delete the currently selected nodes and reset selection range
     * Returns {container: "the last element after deletion", offset: "offset", prevContainer: "previousElementSibling Of the deleted area"}
     * @returns {Object}
     */
    removeNode: function() {
      this._resetRangeToTextNode();
      const o = this.getRange();
      if (o.startContainer === o.endContainer) {
        const B = l.getParentElement(o.startContainer, l.isMediaComponent);
        if (B) {
          const F = l.createElement("BR"), N = l.createElement(n.defaultTag);
          return N.appendChild(F), l.changeElement(B, N), c.setRange(N, 0, N, 0), this.history.push(!0), {
            container: N,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const a = o.startOffset === 0, d = c.isEdgePoint(o.endContainer, o.endOffset, "end");
      let h = null, g = null, b = null;
      a && (g = l.getFormatElement(o.startContainer), g && (h = g.previousElementSibling, g = h)), d && (b = l.getFormatElement(o.endContainer), b = b && b.nextElementSibling);
      let p, v = 0, C = o.startContainer, y = o.endContainer, w = o.startOffset, M = o.endOffset;
      const S = o.commonAncestorContainer.nodeType === 3 && o.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : o.commonAncestorContainer;
      if (S === C && S === y && (C = S.children[w], y = S.children[M], w = M = 0), !C || !y) return {
        container: S,
        offset: 0
      };
      if (C === y && o.collapsed && C.textContent && l.onlyZeroWidthSpace(C.textContent.substr(w)))
        return {
          container: C,
          offset: w,
          prevContainer: C && C.parentNode ? C : null
        };
      let k = null, R = null;
      const D = l.getListChildNodes(S, null);
      let U = l.getArrayIndex(D, C), I = l.getArrayIndex(D, y);
      if (D.length > 0 && U > -1 && I > -1) {
        for (let B = U + 1, F = C; B >= 0; B--)
          D[B] === F.parentNode && D[B].firstChild === F && w === 0 && (U = B, F = F.parentNode);
        for (let B = I - 1, F = y; B > U; B--)
          D[B] === F.parentNode && D[B].nodeType === 1 && (D.splice(B, 1), F = F.parentNode, --I);
      } else {
        if (D.length === 0) {
          if (l.isFormatElement(S) || l.isRangeFormatElement(S) || l.isWysiwygDiv(S) || l.isBreak(S) || l.isMedia(S))
            return {
              container: S,
              offset: 0
            };
          if (S.nodeType === 3)
            return {
              container: S,
              offset: M
            };
          D.push(S), C = y = S;
        } else if (C = y = D[0], l.isBreak(C) || l.onlyZeroWidthSpace(C))
          return {
            container: l.isMedia(S) ? S : C,
            offset: 0
          };
        U = I = 0;
      }
      for (let B = U; B <= I; B++) {
        const F = D[B];
        if (F.length === 0 || F.nodeType === 3 && F.data === void 0) {
          this._nodeRemoveListItem(F);
          continue;
        }
        if (F === C) {
          if (C.nodeType === 1) {
            if (l.isComponent(C)) continue;
            k = l.createTextNode(C.textContent);
          } else
            F === y ? (k = l.createTextNode(C.substringData(0, w) + y.substringData(M, y.length - M)), v = w) : k = l.createTextNode(C.substringData(0, w));
          if (k.length > 0 ? C.data = k.data : this._nodeRemoveListItem(C), F === y) break;
          continue;
        }
        if (F === y) {
          if (y.nodeType === 1) {
            if (l.isComponent(y)) continue;
            R = l.createTextNode(y.textContent);
          } else
            R = l.createTextNode(y.substringData(M, y.length - M));
          R.length > 0 ? y.data = R.data : this._nodeRemoveListItem(y);
          continue;
        }
        this._nodeRemoveListItem(F);
      }
      const H = l.getParentElement(y, "ul"), P = l.getParentElement(C, "li");
      if (H && P && P.contains(H) ? (p = H.previousSibling, v = p.textContent.length) : (p = y && y.parentNode ? y : C && C.parentNode ? C : o.endContainer || o.startContainer, v = !a && !d ? v : d ? p.textContent.length : 0), !l.isWysiwygDiv(p) && p.childNodes.length === 0) {
        const B = l.removeItemAllParents(p, null, null);
        B && (p = B.sc || B.ec || e.element.wysiwyg);
      }
      return !l.getFormatElement(p) && !(C && C.parentNode) && (b ? (p = b, v = 0) : g && (p = g, v = 1)), this.setRange(p, v, p, v), this.history.push(!0), {
        container: p,
        offset: v,
        prevContainer: h
      };
    },
    _nodeRemoveListItem: function(o) {
      const a = l.getFormatElement(o, null);
      l.removeItem(o), l.isListCell(a) && (l.removeItemAllParents(a, null, null), a && l.isList(a.firstChild) && a.insertBefore(l.createTextNode(l.zeroWidthSpace), a.firstChild));
    },
    /**
     * @description Appended all selected format Element to the argument element and insert
     * @param {Element} rangeElement Element of wrap the arguments (BLOCKQUOTE...)
     */
    applyRangeFormatElement: function(o) {
      this.getRange_addLine(this.getRange(), null);
      const a = this.getSelectedElementsAndComponents(!1);
      if (!a || a.length === 0) return;
      e:
        for (let M = 0, S = a.length, k, R, D, U, I, H; M < S; M++)
          if (k = a[M], !!l.isListCell(k) && (R = k.lastElementChild, R && l.isListCell(k.nextElementSibling) && a.indexOf(k.nextElementSibling) > -1 && (U = R.lastElementChild, a.indexOf(U) > -1))) {
            let P = null;
            for (; P = U.lastElementChild; )
              if (l.isList(P))
                if (a.indexOf(P.lastElementChild) > -1)
                  U = P.lastElementChild;
                else
                  continue e;
            D = R.firstElementChild, I = a.indexOf(D), H = a.indexOf(U), a.splice(I, H - I + 1), S = a.length;
            continue;
          }
      let d = a[a.length - 1], h, g, b;
      l.isRangeFormatElement(d) || l.isFormatElement(d) ? h = d : h = l.getRangeFormatElement(d, null) || l.getFormatElement(d, null), l.isCell(h) ? (g = null, b = h) : (g = h.nextSibling, b = h.parentNode);
      let p = l.getElementDepth(h), v = null;
      const C = [], y = function(M, S, k) {
        let R = null;
        if (M !== S && !l.isTable(S)) {
          if (S && l.getElementDepth(M) === l.getElementDepth(S)) return k;
          R = l.removeItemAllParents(S, null, M);
        }
        return R ? R.ec : k;
      };
      for (let M = 0, S = a.length, k, R, D, U, I, H, P; M < S; M++)
        if (k = a[M], R = k.parentNode, !(!R || o.contains(R)))
          if (D = l.getElementDepth(k), l.isList(R)) {
            if (v === null && (H ? (v = H, P = !0, H = null) : v = R.cloneNode(!1)), C.push(k), I = a[M + 1], M === S - 1 || I && I.parentNode !== R) {
              I && k.contains(I.parentNode) && (H = I.parentNode.cloneNode(!1));
              let B = R.parentNode, F;
              for (; l.isList(B); )
                F = l.createElement(B.nodeName), F.appendChild(v), v = F, B = B.parentNode;
              const N = this.detachRangeFormatElement(R, C, null, !0, !0);
              p >= D ? (p = D, b = N.cc, g = y(b, R, N.ec), g && (b = g.parentNode)) : b === N.cc && (g = N.ec), b !== N.cc && (U = y(b, N.cc, U), U !== void 0 ? g = U : g = N.cc);
              for (let V = 0, L = N.removeArray.length; V < L; V++)
                v.appendChild(N.removeArray[V]);
              P || o.appendChild(v), H && N.removeArray[N.removeArray.length - 1].appendChild(H), v = null, P = !1;
            }
          } else
            p >= D && (p = D, b = R, g = k.nextSibling), o.appendChild(k), b !== R && (U = y(b, R), U !== void 0 && (g = U));
      if (this.effectNode = null, l.mergeSameTags(o, null, !1), l.mergeNestedTags(o, (function(M) {
        return this.isList(M);
      }).bind(l)), g && l.getElementDepth(g) > 0 && (l.isList(g.parentNode) || l.isList(g.parentNode.parentNode))) {
        const M = l.getParentElement(g, (function(k) {
          return this.isRangeFormatElement(k) && !this.isList(k);
        }).bind(l)), S = l.splitElement(g, null, M ? l.getElementDepth(M) + 1 : 0);
        S.parentNode.insertBefore(o, S);
      } else
        b.insertBefore(o, g), y(o, g);
      const w = l.getEdgeChildNodes(o.firstElementChild, o.lastElementChild);
      a.length > 1 ? this.setRange(w.sc, 0, w.ec, w.ec.textContent.length) : this.setRange(w.ec, w.ec.textContent.length, w.ec, w.ec.textContent.length), this.history.push(!1);
    },
    /**
     * @description The elements of the "selectedFormats" array are detached from the "rangeElement" element. ("LI" tags are converted to "P" tags)
     * When "selectedFormats" is null, all elements are detached and return {cc: parentNode, sc: nextSibling, ec: previousSibling, removeArray: [Array of removed elements]}.
     * @param {Element} rangeElement Range format element (PRE, BLOCKQUOTE, OL, UL...)
     * @param {Array|null} selectedFormats Array of format elements (P, DIV, LI...) to remove.
     * If null, Applies to all elements and return {cc: parentNode, sc: nextSibling, ec: previousSibling}
     * @param {Element|null} newRangeElement The node(rangeElement) to replace the currently wrapped node.
     * @param {Boolean} remove If true, deleted without detached.
     * @param {Boolean} notHistoryPush When true, it does not update the history stack and the selection object and return EdgeNodes (util.getEdgeChildNodes)
     * @returns {Object}
     */
    detachRangeFormatElement: function(o, a, d, h, g) {
      const b = this.getRange();
      let p = b.startOffset, v = b.endOffset, C = l.getListChildNodes(o, function(N) {
        return N.parentNode === o;
      }), y = o.parentNode, w = null, M = null, S = o.cloneNode(!1);
      const k = [], R = l.isList(d);
      let D = !1, U = !1, I = !1;
      function H(N, V, L, O) {
        if (l.onlyZeroWidthSpace(V) && (V.innerHTML = l.zeroWidthSpace, p = v = 1), V.nodeType === 3)
          return N.insertBefore(V, L), V;
        const Y = (I ? V : O).childNodes;
        let Z = V.cloneNode(!1), X = null, q = null;
        for (; Y[0]; )
          q = Y[0], l._notTextNode(q) && !l.isBreak(q) && !l.isListCell(Z) ? (Z.childNodes.length > 0 && (X || (X = Z), N.insertBefore(Z, L), Z = V.cloneNode(!1)), N.insertBefore(q, L), X || (X = q)) : Z.appendChild(q);
        if (Z.childNodes.length > 0) {
          if (l.isListCell(N) && l.isListCell(Z) && l.isList(L))
            if (R) {
              for (X = L; L; )
                Z.appendChild(L), L = L.nextSibling;
              N.parentNode.insertBefore(Z, N.nextElementSibling);
            } else {
              const $ = O.nextElementSibling, G = l.detachNestedList(O, !1);
              if (o !== G || $ !== O.nextElementSibling) {
                const ee = Z.childNodes;
                for (; ee[0]; )
                  O.appendChild(ee[0]);
                o = G, U = !0;
              }
            }
          else
            N.insertBefore(Z, L);
          X || (X = Z);
        }
        return X;
      }
      for (let N = 0, V = C.length, L, O, Y; N < V; N++)
        if (L = C[N], !(L.nodeType === 3 && l.isList(S)))
          if (I = !1, h && N === 0 && (!a || a.length === V || a[0] === L ? w = o.previousSibling : w = S), a && (O = a.indexOf(L)), a && O === -1)
            S || (S = o.cloneNode(!1)), S.appendChild(L);
          else {
            if (a && (Y = a[O + 1]), S && S.children.length > 0 && (y.insertBefore(S, o), S = null), !R && l.isListCell(L))
              if (Y && l.getElementDepth(L) !== l.getElementDepth(Y) && (l.isListCell(y) || l.getArrayItem(L.children, l.isList, !1))) {
                const Z = L.nextElementSibling, X = l.detachNestedList(L, !1);
                (o !== X || Z !== L.nextElementSibling) && (o = X, U = !0);
              } else {
                const Z = L;
                L = l.createElement(h ? Z.nodeName : l.isList(o.parentNode) || l.isListCell(o.parentNode) ? "LI" : l.isCell(o.parentNode) ? "DIV" : n.defaultTag);
                const X = l.isListCell(L), q = Z.childNodes;
                for (; q[0] && !(l.isList(q[0]) && !X); )
                  L.appendChild(q[0]);
                l.copyFormatAttributes(L, Z), I = !0;
              }
            else
              L = L.cloneNode(!1);
            if (!U && (h ? (k.push(L), l.removeItem(C[N])) : (d ? (D || (y.insertBefore(d, o), D = !0), L = H(d, L, null, C[N])) : L = H(y, L, o, C[N]), U || (a ? (M = L, w || (w = L)) : w || (w = M = L))), U)) {
              U = I = !1, C = l.getListChildNodes(o, function(Z) {
                return Z.parentNode === o;
              }), S = o.cloneNode(!1), y = o.parentNode, N = -1, V = C.length;
              continue;
            }
          }
      const P = o.parentNode;
      let B = o.nextSibling;
      S && S.children.length > 0 && P.insertBefore(S, B), d ? w = d.previousSibling : w || (w = o.previousSibling), B = o.nextSibling !== S ? o.nextSibling : S ? S.nextSibling : null, o.children.length === 0 || o.textContent.length === 0 ? l.removeItem(o) : l.removeEmptyNode(o, null, !1);
      let F = null;
      if (h)
        F = {
          cc: P,
          sc: w,
          so: p,
          ec: B,
          eo: v,
          removeArray: k
        };
      else {
        w || (w = M), M || (M = w);
        const N = l.getEdgeChildNodes(w, M.parentNode ? w : M);
        F = {
          cc: (N.sc || N.ec).parentNode,
          sc: N.sc,
          so: p,
          ec: N.ec,
          eo: v,
          removeArray: null
        };
      }
      if (this.effectNode = null, g) return F;
      !h && F && (a ? this.setRange(F.sc, p, F.ec, v) : this.setRange(F.sc, 0, F.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(o, a) {
      let d = {}, h = !1, g = !1, b = null, p = null;
      const v = (function(C) {
        return !this.isComponent(C);
      }).bind(l);
      for (let C = 0, y = o.length, w, M, S, k; C < y; C++) {
        if (S = C === y - 1, M = l.getRangeFormatElement(o[C], v), k = l.isList(M), !w && k)
          w = M, d = { r: w, f: [l.getParentElement(o[C], "LI")] }, C === 0 && (h = !0);
        else if (w && k)
          if (w !== M) {
            const R = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, a, !0);
            M = o[C].parentNode, h && (b = R.sc, h = !1), S && (p = R.ec), k ? (w = M, d = { r: w, f: [l.getParentElement(o[C], "LI")] }, S && (g = !0)) : w = null;
          } else
            d.f.push(l.getParentElement(o[C], "LI")), S && (g = !0);
        if (S && l.isList(w)) {
          const R = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, a, !0);
          (g || y === 1) && (p = R.ec), h && (b = R.sc || p);
        }
      }
      return {
        sc: b,
        ec: p
      };
    },
    /**
     * @description Add, update, and delete nodes from selected text.
     * 1. If there is a node in the "appendNode" argument, a node with the same tags and attributes as "appendNode" is added to the selection text.
     * 2. If it is in the same tag, only the tag's attributes are changed without adding a tag.
     * 3. If the "appendNode" argument is null, the node of the selection is update or remove without adding a new node.
     * 4. The same style as the style attribute of the "styleArray" argument is deleted.
     *    (Styles should be put with attribute names from css. ["background-color"])
     * 5. The same class name as the class attribute of the "styleArray" argument is deleted.
     *    (The class name is preceded by "." [".className"])
     * 6. Use a list of styles and classes of "appendNode" in "styleArray" to avoid duplicate property values.
     * 7. If a node with all styles and classes removed has the same tag name as "appendNode" or "removeNodeArray", or "appendNode" is null, that node is deleted.
     * 8. Regardless of the style and class of the node, the tag with the same name as the "removeNodeArray" argument value is deleted.
     * 9. If the "strictRemove" argument is true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     *10. It won't work if the parent node has the same class and same value style.
     *    However, if there is a value in "removeNodeArray", it works and the text node is separated even if there is no node to replace.
     * @param {Element|null} appendNode The element to be added to the selection. If it is null, only delete the node.
     * @param {Array|null} styleArray The style or className attribute name Array to check (['font-size'], ['.className'], ['font-family', 'color', '.className']...])
     * @param {Array|null} removeNodeArray An array of node names to remove types from, remove all formats when "appendNode" is null and there is an empty array or null value. (['span'], ['strong', 'em'] ...])
     * @param {Boolean|null} strictRemove If true, only nodes with all styles and classes removed from the nodes of "removeNodeArray" are removed.
     */
    nodeChange: function(o, a, d, h) {
      this._resetRangeToTextNode();
      let g = this.getRange_addLine(this.getRange(), null);
      a = a && a.length > 0 ? a : !1, d = d && d.length > 0 ? d : !1;
      const b = !o, p = b && !d && !a;
      let v = g.startContainer, C = g.startOffset, y = g.endContainer, w = g.endOffset;
      if (p && g.collapsed && l.isFormatElement(v.parentNode) || v === y && v.nodeType === 1 && l.isNonEditable(v)) {
        const q = v.parentNode;
        if (!l.isListCell(q) || !l.getValues(q.style).some((function($) {
          return this._listKebab.indexOf($) > -1;
        }).bind(this))) return;
      }
      if (g.collapsed && !p && v.nodeType === 1 && !l.isBreak(v) && !l.isComponent(v)) {
        let q = null;
        const $ = v.childNodes[C];
        $ && ($.nextSibling ? q = l.isBreak($) ? $ : $.nextSibling : q = null);
        const G = l.createTextNode(l.zeroWidthSpace);
        v.insertBefore(G, q), this.setRange(G, 1, G, 1), g = this.getRange(), v = g.startContainer, C = g.startOffset, y = g.endContainer, w = g.endOffset;
      }
      l.isFormatElement(v) && (v = v.childNodes[C] || v.firstChild, C = 0), l.isFormatElement(y) && (y = y.childNodes[w] || y.lastChild, w = y.textContent.length), b && (o = l.createElement("DIV"));
      const M = f.RegExp, S = o.nodeName;
      if (!p && v === y && !d && o) {
        let q = v, $ = 0;
        const G = [], ee = o.style;
        for (let ne = 0, le = ee.length; ne < le; ne++)
          G.push(ee[ne]);
        const ie = o.classList;
        for (let ne = 0, le = ie.length; ne < le; ne++)
          G.push("." + ie[ne]);
        if (G.length > 0) {
          for (; !l.isFormatElement(q) && !l.isWysiwygDiv(q); ) {
            for (let ne = 0; ne < G.length; ne++)
              if (q.nodeType === 1) {
                const le = G[ne], fe = /^\./.test(le) ? new M("\\s*" + le.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Se = b ? !!q.style[le] : !!q.style[le] && !!o.style[le] && q.style[le] === o.style[le], ae = fe === !1 ? !1 : b ? !!q.className.match(fe) : !!q.className.match(fe) && !!o.className.match(fe);
                (Se || ae) && $++;
              }
            q = q.parentNode;
          }
          if ($ >= G.length) return;
        }
      }
      let k = {}, R = {}, D, U = "", I = "", H = "";
      if (a) {
        for (let q = 0, $ = a.length, G; q < $; q++)
          G = a[q], /^\./.test(G) ? I += (I ? "|" : "\\s*(?:") + G.replace(/^\./, "") : U += (U ? "|" : "(?:;|^|\\s)(?:") + G;
        U && (U += ")\\s*:[^;]*\\s*(?:;|$)", U = new M(U, "ig")), I && (I += ")(?=\\s+|$)", I = new M(I, "ig"));
      }
      if (d) {
        H = "^(?:" + d[0];
        for (let q = 1; q < d.length; q++)
          H += "|" + d[q];
        H += ")$", H = new M(H, "i");
      }
      const P = f.Boolean, B = { v: !1 }, F = function(q) {
        const $ = q.cloneNode(!1);
        if ($.nodeType === 3 || l.isBreak($)) return $;
        if (p) return null;
        const G = !H && b || H && H.test($.nodeName);
        if (G && !h)
          return B.v = !0, null;
        const ee = $.style.cssText;
        let ie = "";
        U && ee.length > 0 && (ie = ee.replace(U, "").trim(), ie !== ee && (B.v = !0));
        const ne = $.className;
        let le = "";
        return I && ne.length > 0 && (le = ne.replace(I, "").trim(), le !== ne && (B.v = !0)), b && (I || !ne) && (U || !ee) && !ie && !le && G ? (B.v = !0, null) : ie || le || $.nodeName !== S || P(U) !== P(ee) || P(I) !== P(ne) ? (U && ee.length > 0 && ($.style.cssText = ie), $.style.cssText || $.removeAttribute("style"), I && ne.length > 0 && ($.className = le.trim()), $.className.trim() || $.removeAttribute("class"), !$.style.cssText && !$.className && ($.nodeName === S || G) ? (B.v = !0, null) : $) : (B.v = !0, null);
      }, N = this.getSelectedElements(null);
      g = this.getRange(), v = g.startContainer, C = g.startOffset, y = g.endContainer, w = g.endOffset, l.getFormatElement(v, null) || (v = l.getChildElement(N[0], function(q) {
        return q.nodeType === 3;
      }, !1), C = 0), l.getFormatElement(y, null) || (y = l.getChildElement(N[N.length - 1], function(q) {
        return q.nodeType === 3;
      }, !1), w = y.textContent.length);
      const V = l.getFormatElement(v, null) === l.getFormatElement(y, null), L = N.length - (V ? 0 : 1);
      D = o.cloneNode(!1);
      const O = p || b && function(q) {
        for (let $ = 0, G = q.length; $ < G; $++)
          if (l._isMaintainedNode(q[$]) || l._isSizeNode(q[$])) return !0;
        return !1;
      }(d), Y = b || l._isSizeNode(D), Z = this._util_getMaintainedNode.bind(l, O, Y), X = this._util_isMaintainedNode.bind(l, O, Y);
      if (V) {
        this._resetCommonListCell(N[0], a) && (g = this.setRange(v, C, y, w));
        const q = this._nodeChange_oneLine(N[0], D, F, v, C, y, w, p, b, g.collapsed, B, Z, X);
        k.container = q.startContainer, k.offset = q.startOffset, R.container = q.endContainer, R.offset = q.endOffset, k.container === R.container && l.onlyZeroWidthSpace(k.container) && (k.offset = R.offset = 1), this._setCommonListStyle(q.ancestor, null);
      } else {
        let q = !1;
        L > 0 && this._resetCommonListCell(N[L], a) && (q = !0), this._resetCommonListCell(N[0], a) && (q = !0), q && this.setRange(v, C, y, w), L > 0 && (D = o.cloneNode(!1), R = this._nodeChange_endLine(N[L], D, F, y, w, p, b, B, Z, X));
        for (let $ = L - 1, G; $ > 0; $--)
          this._resetCommonListCell(N[$], a), D = o.cloneNode(!1), G = this._nodeChange_middleLine(N[$], D, F, p, b, B, R.container), G.endContainer && G.ancestor.contains(G.endContainer) && (R.ancestor = null, R.container = G.endContainer), this._setCommonListStyle(G.ancestor, null);
        D = o.cloneNode(!1), k = this._nodeChange_startLine(N[0], D, F, v, C, p, b, B, Z, X, R.container), k.endContainer && (R.ancestor = null, R.container = k.endContainer), L <= 0 ? R = k : R.container || (R.ancestor = null, R.container = k.container, R.offset = k.container.textContent.length), this._setCommonListStyle(k.ancestor, null), this._setCommonListStyle(R.ancestor || l.getFormatElement(R.container), null);
      }
      this.controllersOff(), this.setRange(k.container, k.offset, R.container, R.offset), this.history.push(!1);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(o, a) {
      if (!l.isListCell(o)) return;
      a || (a = this._listKebab);
      const d = l.getArrayItem(o.childNodes, function(M) {
        return !l.isBreak(M);
      }, !0), h = o.style, g = [], b = [], p = l.getValues(h);
      for (let M = 0, S = this._listKebab.length; M < S; M++)
        p.indexOf(this._listKebab[M]) > -1 && a.indexOf(this._listKebab[M]) > -1 && (g.push(this._listCamel[M]), b.push(this._listKebab[M]));
      if (!g.length) return;
      const v = l.createElement("SPAN");
      for (let M = 0, S = g.length; M < S; M++)
        v.style[g[M]] = h[b[M]], h.removeProperty(b[M]);
      let C = v.cloneNode(!1), y = null, w = !1;
      for (let M = 0, S = d.length, k, R; M < S; M++)
        k = d[M], !n._textTagsMap[k.nodeName.toLowerCase()] && (R = l.getValues(k.style), R.length === 0 || g.some(function(D) {
          return R.indexOf(D) === -1;
        }) && R.some(function(D) {
        }) ? (y = k.nextSibling, C.appendChild(k)) : C.childNodes.length > 0 && (o.insertBefore(C, y), C = v.cloneNode(!1), y = null, w = !0));
      return C.childNodes.length > 0 && (o.insertBefore(C, y), w = !0), h.length || o.removeAttribute("style"), w;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(o, a) {
      if (!l.isListCell(o)) return;
      const d = l.getArrayItem((a || o).childNodes, function(C) {
        return !l.isBreak(C);
      }, !0);
      if (a = d[0], !a || d.length > 1 || a.nodeType !== 1) return;
      const h = a.style, g = o.style, b = a.nodeName.toLowerCase();
      let p = !1;
      n._textTagsMap[b] === n._defaultCommand.bold.toLowerCase() && (g.fontWeight = "bold"), n._textTagsMap[b] === n._defaultCommand.italic.toLowerCase() && (g.fontStyle = "italic");
      const v = l.getValues(h);
      if (v.length > 0)
        for (let C = 0, y = this._listCamel.length; C < y; C++)
          v.indexOf(this._listKebab[C]) > -1 && (g[this._listCamel[C]] = h[this._listCamel[C]], h.removeProperty(this._listKebab[C]), p = !0);
      if (this._setCommonListStyle(o, a), !!p && !h.length) {
        const C = a.childNodes, y = a.parentNode, w = a.nextSibling;
        for (; C.length > 0; )
          y.insertBefore(C[0], w);
        l.removeItem(a);
      }
    },
    /**
     * @description Strip remove node
     * @param {Node} removeNode The remove node
     * @private
     */
    _stripRemoveNode: function(o) {
      const a = o.parentNode;
      if (!o || o.nodeType === 3 || !a) return;
      const d = o.childNodes;
      for (; d[0]; )
        a.insertBefore(d[0], o);
      a.removeChild(o);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(o, a, d) {
      return !d || o ? null : this.getParentElement(d, this._isMaintainedNode.bind(this)) || (a ? null : this.getParentElement(d, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(o, a, d) {
      if (!d || o || d.nodeType !== 1) return !1;
      const h = this._isMaintainedNode(d);
      return this.getParentElement(d, this._isMaintainedNode.bind(this)) ? h : h || (a ? !1 : this._isSizeNode(d));
    },
    /**
     * @description wraps text nodes of line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Boolean} collapsed range.collapsed
     * @returns {{ancestor: *, startContainer: *, startOffset: *, endContainer: *, endOffset: *}}
     * @private
     */
    _nodeChange_oneLine: function(o, a, d, h, g, b, p, v, C, y, w, M, S) {
      let k = h.parentNode;
      for (; !k.nextSibling && !k.previousSibling && !l.isFormatElement(k.parentNode) && !l.isWysiwygDiv(k.parentNode) && k.nodeName !== a.nodeName; )
        k = k.parentNode;
      if (!C && k === b.parentNode && k.nodeName === a.nodeName && l.onlyZeroWidthSpace(h.textContent.slice(0, g)) && l.onlyZeroWidthSpace(b.textContent.slice(p))) {
        const ae = k.childNodes;
        let me = !0;
        for (let de = 0, He = ae.length, ye, Ae, xe, re; de < He; de++) {
          if (ye = ae[de], re = !l.onlyZeroWidthSpace(ye), ye === h) {
            Ae = !0;
            continue;
          }
          if (ye === b) {
            xe = !0;
            continue;
          }
          if (!Ae && re || Ae && xe && re) {
            me = !1;
            break;
          }
        }
        if (me)
          return l.copyTagAttributes(k, a), {
            ancestor: o,
            startContainer: h,
            startOffset: g,
            endContainer: b,
            endOffset: p
          };
      }
      w.v = !1;
      const R = o, D = [a], U = o.cloneNode(!1), I = h === b;
      let H = h, P = g, B = b, F = p, N = !1, V = !1, L, O, Y, Z, X;
      const q = f.RegExp;
      function $(ae) {
        const me = new q("(?:;|^|\\s)(?:" + Z + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let de = "";
        return me && ae.style.cssText.length > 0 && (de = me.test(ae.style.cssText)), !de;
      }
      if (function ae(me, de) {
        const He = me.childNodes;
        for (let ye = 0, Ae = He.length, xe; ye < Ae; ye++) {
          let re = He[ye];
          if (!re) continue;
          let Ge = de, Me;
          if (!N && re === H) {
            let Te = U;
            X = M(re);
            const ge = l.createTextNode(H.nodeType === 1 ? "" : H.substringData(0, P)), Ce = l.createTextNode(
              H.nodeType === 1 ? "" : H.substringData(
                P,
                I && F >= P ? F - P : H.data.length - P
              )
            );
            if (X) {
              const Ze = M(de);
              if (Ze && Ze.parentNode !== Te) {
                let Oe = Ze, Je = null;
                for (; Oe.parentNode !== Te; ) {
                  for (de = Je = Oe.parentNode.cloneNode(!1); Oe.childNodes[0]; )
                    Je.appendChild(Oe.childNodes[0]);
                  Oe.appendChild(Je), Oe = Oe.parentNode;
                }
                Oe.parentNode.appendChild(Ze);
              }
              X = X.cloneNode(!1);
            }
            l.onlyZeroWidthSpace(ge) || de.appendChild(ge);
            const ve = M(de);
            for (ve && (X = ve), X && (Te = X), O = re, L = [], Z = ""; O !== Te && O !== R && O !== null; )
              xe = S(O) ? null : d(O), xe && O.nodeType === 1 && $(O) && (L.push(xe), Z += O.style.cssText.substr(0, O.style.cssText.indexOf(":")) + "|"), O = O.parentNode;
            const We = L.pop() || Ce;
            for (Y = O = We; L.length > 0; )
              O = L.pop(), Y.appendChild(O), Y = O;
            if (a.appendChild(We), Te.appendChild(a), X && !M(B) && (a = a.cloneNode(!1), U.appendChild(a), D.push(a)), H = Ce, P = 0, N = !0, O !== Ce && O.appendChild(H), !I) continue;
          }
          if (!V && re === B) {
            X = M(re);
            const Te = l.createTextNode(B.nodeType === 1 ? "" : B.substringData(F, B.length - F)), ge = l.createTextNode(I || B.nodeType === 1 ? "" : B.substringData(0, F));
            if (X ? X = X.cloneNode(!1) : S(a.parentNode) && !X && (a = a.cloneNode(!1), U.appendChild(a), D.push(a)), !l.onlyZeroWidthSpace(Te)) {
              O = re, Z = "", L = [];
              const ve = [];
              for (; O !== U && O !== R && O !== null; )
                O.nodeType === 1 && $(O) && (S(O) ? ve.push(O.cloneNode(!1)) : L.push(O.cloneNode(!1)), Z += O.style.cssText.substr(0, O.style.cssText.indexOf(":")) + "|"), O = O.parentNode;
              for (L = L.concat(ve), Me = Y = O = L.pop() || Te; L.length > 0; )
                O = L.pop(), Y.appendChild(O), Y = O;
              U.appendChild(Me), O.textContent = Te.data;
            }
            if (X && Me) {
              const ve = M(Me);
              ve && (X = ve);
            }
            for (O = re, L = [], Z = ""; O !== U && O !== R && O !== null; )
              xe = S(O) ? null : d(O), xe && O.nodeType === 1 && $(O) && (L.push(xe), Z += O.style.cssText.substr(0, O.style.cssText.indexOf(":")) + "|"), O = O.parentNode;
            const Ce = L.pop() || ge;
            for (Y = O = Ce; L.length > 0; )
              O = L.pop(), Y.appendChild(O), Y = O;
            X ? (a = a.cloneNode(!1), a.appendChild(Ce), X.insertBefore(a, X.firstChild), U.appendChild(X), D.push(a), X = null) : a.appendChild(Ce), B = ge, F = ge.data.length, V = !0, !v && y && (a = ge, ge.textContent = l.zeroWidthSpace), O !== ge && O.appendChild(B);
            continue;
          }
          if (N) {
            if (re.nodeType === 1 && !l.isBreak(re)) {
              l._isIgnoreNodeChange(re) ? (U.appendChild(re.cloneNode(!0)), y || (a = a.cloneNode(!1), U.appendChild(a), D.push(a))) : ae(re, re);
              continue;
            }
            O = re, L = [], Z = "";
            const Te = [];
            for (; O.parentNode !== null && O !== R && O !== a; )
              xe = V ? O.cloneNode(!1) : d(O), O.nodeType === 1 && !l.isBreak(re) && xe && $(O) && (S(O) ? X || Te.push(xe) : L.push(xe), Z += O.style.cssText.substr(0, O.style.cssText.indexOf(":")) + "|"), O = O.parentNode;
            L = L.concat(Te);
            const ge = L.pop() || re;
            for (Y = O = ge; L.length > 0; )
              O = L.pop(), Y.appendChild(O), Y = O;
            if (S(a.parentNode) && !S(ge) && !l.onlyZeroWidthSpace(a) && (a = a.cloneNode(!1), U.appendChild(a), D.push(a)), !V && !X && S(ge)) {
              a = a.cloneNode(!1);
              const Ce = ge.childNodes;
              for (let ve = 0, We = Ce.length; ve < We; ve++)
                a.appendChild(Ce[ve]);
              ge.appendChild(a), U.appendChild(ge), D.push(a), a.children.length > 0 ? de = O : de = a;
            } else ge === re ? V ? de = U : de = a : V ? (U.appendChild(ge), de = O) : (a.appendChild(ge), de = O);
            if (X && re.nodeType === 3)
              if (M(re)) {
                const Ce = l.getParentElement(de, (function(ve) {
                  return this._isMaintainedNode(ve.parentNode) || ve.parentNode === U;
                }).bind(l));
                X.appendChild(Ce), a = Ce.cloneNode(!1), D.push(a), U.appendChild(a);
              } else
                X = null;
          }
          Me = re.cloneNode(!1), de.appendChild(Me), re.nodeType === 1 && !l.isBreak(re) && (Ge = Me), ae(re, Ge);
        }
      }(o, U), C && !v && !w.v)
        return {
          ancestor: o,
          startContainer: h,
          startOffset: g,
          endContainer: b,
          endOffset: p
        };
      if (v = v && C, v)
        for (let ae = 0; ae < D.length; ae++) {
          let me = D[ae], de, He, ye;
          if (y)
            de = l.createTextNode(l.zeroWidthSpace), U.replaceChild(de, me);
          else {
            const Ae = me.childNodes;
            for (He = Ae[0]; Ae[0]; )
              ye = Ae[0], U.insertBefore(ye, me);
            l.removeItem(me);
          }
          ae === 0 && (y ? H = B = de : (H = He, B = ye));
        }
      else {
        if (C)
          for (let ae = 0; ae < D.length; ae++)
            this._stripRemoveNode(D[ae]);
        y && (H = B = a);
      }
      l.removeEmptyNode(U, a, !1), y && (P = H.textContent.length, F = B.textContent.length);
      const G = v || B.textContent.length === 0;
      !l.isBreak(B) && B.textContent.length === 0 && (l.removeItem(B), B = H), F = G ? B.textContent.length : F;
      const ee = { s: 0, e: 0 }, ie = l.getNodePath(H, U, ee), ne = !B.parentNode;
      ne && (B = H);
      const le = { s: 0, e: 0 }, fe = l.getNodePath(B, U, !ne && !G ? le : null);
      P += ee.s, F = y ? P : ne ? H.textContent.length : G ? F + ee.s : F + le.s;
      const Se = l.mergeSameTags(U, [ie, fe], !0);
      return o.parentNode.replaceChild(U, o), H = l.getNodeFromPath(ie, U), B = l.getNodeFromPath(fe, U), {
        ancestor: U,
        startContainer: H,
        startOffset: P + Se[0],
        endContainer: B,
        endOffset: F + Se[1]
      };
    },
    /**
     * @description wraps first line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} startCon The startContainer property of the selection object.
     * @param {Number} startOff The startOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {null|Node} If end container is renewed, returned renewed node
     * @returns {Object} { ancestor, container, offset, endContainer }
     * @private
     */
    _nodeChange_startLine: function(o, a, d, h, g, b, p, v, C, y, w) {
      let M = h.parentNode;
      for (; !M.nextSibling && !M.previousSibling && !l.isFormatElement(M.parentNode) && !l.isWysiwygDiv(M.parentNode) && M.nodeName !== a.nodeName; )
        M = M.parentNode;
      if (!p && M.nodeName === a.nodeName && !l.isFormatElement(M) && !M.nextSibling && l.onlyZeroWidthSpace(h.textContent.slice(0, g))) {
        let N = !0, V = h.previousSibling;
        for (; V; ) {
          if (!l.onlyZeroWidthSpace(V)) {
            N = !1;
            break;
          }
          V = V.previousSibling;
        }
        if (N)
          return l.copyTagAttributes(M, a), {
            ancestor: o,
            container: h,
            offset: g
          };
      }
      v.v = !1;
      const S = o, k = [a], R = o.cloneNode(!1);
      let D = h, U = g, I = !1, H, P, B, F;
      if (function N(V, L) {
        const O = V.childNodes;
        for (let Y = 0, Z = O.length, X, q; Y < Z; Y++) {
          const $ = O[Y];
          if (!$) continue;
          let G = L;
          if (I && !l.isBreak($)) {
            if ($.nodeType === 1) {
              if (l._isIgnoreNodeChange($)) {
                if (a = a.cloneNode(!1), q = $.cloneNode(!0), R.appendChild(q), R.appendChild(a), k.push(a), w && $.contains(w)) {
                  const le = l.getNodePath(w, $);
                  w = l.getNodeFromPath(le, q);
                }
              } else
                N($, $);
              continue;
            }
            P = $, H = [];
            const ee = [];
            for (; P.parentNode !== null && P !== S && P !== a; )
              X = d(P), P.nodeType === 1 && X && (y(P) ? F || ee.push(X) : H.push(X)), P = P.parentNode;
            H = H.concat(ee);
            const ie = H.length > 0, ne = H.pop() || $;
            for (B = P = ne; H.length > 0; )
              P = H.pop(), B.appendChild(P), B = P;
            if (y(a.parentNode) && !y(ne) && (a = a.cloneNode(!1), R.appendChild(a), k.push(a)), !F && y(ne)) {
              a = a.cloneNode(!1);
              const le = ne.childNodes;
              for (let fe = 0, Se = le.length; fe < Se; fe++)
                a.appendChild(le[fe]);
              ne.appendChild(a), R.appendChild(ne), L = y(P) ? a : P, k.push(a);
            } else ie ? (a.appendChild(ne), L = P) : L = a;
            if (F && $.nodeType === 3)
              if (C($)) {
                const le = l.getParentElement(L, (function(fe) {
                  return this._isMaintainedNode(fe.parentNode) || fe.parentNode === R;
                }).bind(l));
                F.appendChild(le), a = le.cloneNode(!1), k.push(a), R.appendChild(a);
              } else
                F = null;
          }
          if (!I && $ === D) {
            let ee = R;
            F = C($);
            const ie = l.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, U)), ne = l.createTextNode(D.nodeType === 1 ? "" : D.substringData(U, D.length - U));
            if (F) {
              const Se = C(L);
              if (Se && Se.parentNode !== ee) {
                let ae = Se, me = null;
                for (; ae.parentNode !== ee; ) {
                  for (L = me = ae.parentNode.cloneNode(!1); ae.childNodes[0]; )
                    me.appendChild(ae.childNodes[0]);
                  ae.appendChild(me), ae = ae.parentNode;
                }
                ae.parentNode.appendChild(Se);
              }
              F = F.cloneNode(!1);
            }
            l.onlyZeroWidthSpace(ie) || L.appendChild(ie);
            const le = C(L);
            for (le && (F = le), F && (ee = F), P = L, H = []; P !== ee && P !== null; )
              X = d(P), P.nodeType === 1 && X && H.push(X), P = P.parentNode;
            const fe = H.pop() || L;
            for (B = P = fe; H.length > 0; )
              P = H.pop(), B.appendChild(P), B = P;
            fe !== L ? (a.appendChild(fe), L = P) : L = a, l.isBreak($) && a.appendChild($.cloneNode(!1)), ee.appendChild(a), D = ne, U = 0, I = !0, L.appendChild(D);
            continue;
          }
          X = I ? d($) : $.cloneNode(!1), X && (L.appendChild(X), $.nodeType === 1 && !l.isBreak($) && (G = X)), N($, G);
        }
      }(o, R), p && !b && !v.v)
        return {
          ancestor: o,
          container: h,
          offset: g,
          endContainer: w
        };
      if (b = b && p, b)
        for (let N = 0; N < k.length; N++) {
          let V = k[N];
          const L = V.childNodes, O = L[0];
          for (; L[0]; )
            R.insertBefore(L[0], V);
          l.removeItem(V), N === 0 && (D = O);
        }
      else if (p) {
        a = a.firstChild;
        for (let N = 0; N < k.length; N++)
          this._stripRemoveNode(k[N]);
      }
      if (!b && R.childNodes.length === 0)
        o.childNodes ? D = o.childNodes[0] : (D = l.createTextNode(l.zeroWidthSpace), o.appendChild(D));
      else {
        l.removeEmptyNode(R, a, !1), l.onlyZeroWidthSpace(R.textContent) && (D = R.firstChild, U = 0);
        const N = { s: 0, e: 0 }, V = l.getNodePath(D, R, N);
        U += N.s;
        const L = l.mergeSameTags(R, [V], !0);
        o.parentNode.replaceChild(R, o), D = l.getNodeFromPath(V, R), U += L[0];
      }
      return {
        ancestor: R,
        container: D,
        offset: U,
        endContainer: w
      };
    },
    /**
     * @description wraps mid lines selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @param {Node} _endContainer Offset node of last line already modified (end.container)
     * @returns {Object} { ancestor, endContainer: "If end container is renewed, returned renewed node" }
     * @private
     */
    _nodeChange_middleLine: function(o, a, d, h, g, b, p) {
      if (!g) {
        let w = null;
        p && o.contains(p) && (w = l.getNodePath(p, o));
        const M = o.cloneNode(!0), S = a.nodeName, k = a.style.cssText, R = a.className;
        let D = M.childNodes, U = 0, I = D.length;
        for (let H; U < I && (H = D[U], H.nodeType !== 3); U++)
          if (H.nodeName === S)
            H.style.cssText += k, l.addClass(H, R);
          else {
            if (!l.isBreak(H) && l._isIgnoreNodeChange(H))
              continue;
            if (I === 1) {
              D = H.childNodes, I = D.length, U = -1;
              continue;
            } else
              break;
          }
        if (I > 0 && U === I)
          return o.innerHTML = M.innerHTML, {
            ancestor: o,
            endContainer: w ? l.getNodeFromPath(w, o) : null
          };
      }
      b.v = !1;
      const v = o.cloneNode(!1), C = [a];
      let y = !0;
      if (function w(M, S) {
        const k = M.childNodes;
        for (let R = 0, D = k.length, U, I; R < D; R++) {
          let H = k[R];
          if (!H) continue;
          let P = S;
          if (!l.isBreak(H) && l._isIgnoreNodeChange(H)) {
            if (a.childNodes.length > 0 && (v.appendChild(a), a = a.cloneNode(!1)), I = H.cloneNode(!0), v.appendChild(I), v.appendChild(a), C.push(a), S = a, p && H.contains(p)) {
              const B = l.getNodePath(p, H);
              p = l.getNodeFromPath(B, I);
            }
            continue;
          } else
            U = d(H), U && (y = !1, S.appendChild(U), H.nodeType === 1 && (P = U));
          l.isBreak(H) || w(H, P);
        }
      }(o, a), y || g && !h && !b.v) return { ancestor: o, endContainer: p };
      if (v.appendChild(a), h && g)
        for (let w = 0; w < C.length; w++) {
          let M = C[w];
          const S = M.childNodes;
          for (; S[0]; )
            v.insertBefore(S[0], M);
          l.removeItem(M);
        }
      else if (g) {
        a = a.firstChild;
        for (let w = 0; w < C.length; w++)
          this._stripRemoveNode(C[w]);
      }
      return l.removeEmptyNode(v, a, !1), l.mergeSameTags(v, null, !0), o.parentNode.replaceChild(v, o), { ancestor: v, endContainer: p };
    },
    /**
     * @description wraps last line selected text.
     * @param {Element} element The node of the line that contains the selected text node.
     * @param {Element} newInnerNode The dom that will wrap the selected text area
     * @param {Function} validation Check if the node should be stripped.
     * @param {Node} endCon The endContainer property of the selection object.
     * @param {Number} endOff The endOffset property of the selection object.
     * @param {Boolean} isRemoveFormat Is the remove all formats command?
     * @param {Boolean} isRemoveNode "newInnerNode" is remove node?
     * @returns {Object} { ancestor, container, offset }
     * @private
     */
    _nodeChange_endLine: function(o, a, d, h, g, b, p, v, C, y) {
      let w = h.parentNode;
      for (; !w.nextSibling && !w.previousSibling && !l.isFormatElement(w.parentNode) && !l.isWysiwygDiv(w.parentNode) && w.nodeName !== a.nodeName; )
        w = w.parentNode;
      if (!p && w.nodeName === a.nodeName && !l.isFormatElement(w) && !w.previousSibling && l.onlyZeroWidthSpace(h.textContent.slice(g))) {
        let F = !0, N = h.nextSibling;
        for (; N; ) {
          if (!l.onlyZeroWidthSpace(N)) {
            F = !1;
            break;
          }
          N = N.nextSibling;
        }
        if (F)
          return l.copyTagAttributes(w, a), {
            ancestor: o,
            container: h,
            offset: g
          };
      }
      v.v = !1;
      const M = o, S = [a], k = o.cloneNode(!1);
      let R = h, D = g, U = !1, I, H, P, B;
      if (function F(N, V) {
        const L = N.childNodes;
        for (let O = L.length - 1, Y; 0 <= O; O--) {
          const Z = L[O];
          if (!Z) continue;
          let X = V;
          if (U && !l.isBreak(Z)) {
            if (Z.nodeType === 1) {
              if (l._isIgnoreNodeChange(Z)) {
                a = a.cloneNode(!1);
                const ee = Z.cloneNode(!0);
                k.insertBefore(ee, V), k.insertBefore(a, ee), S.push(a);
              } else
                F(Z, Z);
              continue;
            }
            H = Z, I = [];
            const q = [];
            for (; H.parentNode !== null && H !== M && H !== a; )
              Y = d(H), Y && H.nodeType === 1 && (y(H) ? B || q.push(Y) : I.push(Y)), H = H.parentNode;
            I = I.concat(q);
            const $ = I.length > 0, G = I.pop() || Z;
            for (P = H = G; I.length > 0; )
              H = I.pop(), P.appendChild(H), P = H;
            if (y(a.parentNode) && !y(G) && (a = a.cloneNode(!1), k.insertBefore(a, k.firstChild), S.push(a)), !B && y(G)) {
              a = a.cloneNode(!1);
              const ee = G.childNodes;
              for (let ie = 0, ne = ee.length; ie < ne; ie++)
                a.appendChild(ee[ie]);
              G.appendChild(a), k.insertBefore(G, k.firstChild), S.push(a), a.children.length > 0 ? V = H : V = a;
            } else $ ? (a.insertBefore(G, a.firstChild), V = H) : V = a;
            if (B && Z.nodeType === 3)
              if (C(Z)) {
                const ee = l.getParentElement(V, (function(ie) {
                  return this._isMaintainedNode(ie.parentNode) || ie.parentNode === k;
                }).bind(l));
                B.appendChild(ee), a = ee.cloneNode(!1), S.push(a), k.insertBefore(a, k.firstChild);
              } else
                B = null;
          }
          if (!U && Z === R) {
            B = C(Z);
            const q = l.createTextNode(R.nodeType === 1 ? "" : R.substringData(D, R.length - D)), $ = l.createTextNode(R.nodeType === 1 ? "" : R.substringData(0, D));
            if (B) {
              B = B.cloneNode(!1);
              const ee = C(V);
              if (ee && ee.parentNode !== k) {
                let ie = ee, ne = null;
                for (; ie.parentNode !== k; ) {
                  for (V = ne = ie.parentNode.cloneNode(!1); ie.childNodes[0]; )
                    ne.appendChild(ie.childNodes[0]);
                  ie.appendChild(ne), ie = ie.parentNode;
                }
                ie.parentNode.insertBefore(ee, ie.parentNode.firstChild);
              }
              B = B.cloneNode(!1);
            } else y(a.parentNode) && !B && (a = a.cloneNode(!1), k.appendChild(a), S.push(a));
            for (l.onlyZeroWidthSpace(q) || V.insertBefore(q, V.firstChild), H = V, I = []; H !== k && H !== null; )
              Y = y(H) ? null : d(H), Y && H.nodeType === 1 && I.push(Y), H = H.parentNode;
            const G = I.pop() || V;
            for (P = H = G; I.length > 0; )
              H = I.pop(), P.appendChild(H), P = H;
            G !== V ? (a.insertBefore(G, a.firstChild), V = H) : V = a, l.isBreak(Z) && a.appendChild(Z.cloneNode(!1)), B ? (B.insertBefore(a, B.firstChild), k.insertBefore(B, k.firstChild), B = null) : k.insertBefore(a, k.firstChild), R = $, D = $.data.length, U = !0, V.insertBefore(R, V.firstChild);
            continue;
          }
          Y = U ? d(Z) : Z.cloneNode(!1), Y && (V.insertBefore(Y, V.firstChild), Z.nodeType === 1 && !l.isBreak(Z) && (X = Y)), F(Z, X);
        }
      }(o, k), p && !b && !v.v)
        return {
          ancestor: o,
          container: h,
          offset: g
        };
      if (b = b && p, b)
        for (let F = 0; F < S.length; F++) {
          let N = S[F];
          const V = N.childNodes;
          let L = null;
          for (; V[0]; )
            L = V[0], k.insertBefore(L, N);
          l.removeItem(N), F === S.length - 1 && (R = L, D = L.textContent.length);
        }
      else if (p) {
        a = a.firstChild;
        for (let F = 0; F < S.length; F++)
          this._stripRemoveNode(S[F]);
      }
      if (!b && k.childNodes.length === 0)
        o.childNodes ? R = o.childNodes[0] : (R = l.createTextNode(l.zeroWidthSpace), o.appendChild(R));
      else {
        if (!p && a.textContent.length === 0)
          return l.removeEmptyNode(k, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        l.removeEmptyNode(k, a, !1), l.onlyZeroWidthSpace(k.textContent) ? (R = k.firstChild, D = R.textContent.length) : l.onlyZeroWidthSpace(R) && (R = a, D = 1);
        const F = { s: 0, e: 0 }, N = l.getNodePath(R, k, F);
        D += F.s;
        const V = l.mergeSameTags(k, [N], !0);
        o.parentNode.replaceChild(k, o), R = l.getNodeFromPath(N, k), D += V[0];
      }
      return {
        ancestor: k,
        container: R,
        offset: R.nodeType === 1 && D === 1 ? R.childNodes.length : D
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(o, a, d) {
      if (a) {
        if (/more/i.test(a)) {
          if (d !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + o);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = d, h.style.display = "block", m._showToolbarBalloon(), m._showToolbarInline()), l.addClass(d, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), m._showToolbarBalloon(), m._showToolbarInline());
          return;
        }
        if (/container/.test(a) && (this._menuTray[o] === null || d !== this.containerActiveButton)) {
          this.callPlugin(o, this.containerOn.bind(this, d), d);
          return;
        }
        if (this.isReadOnly && l.arrayIncludes(this.resizingDisabledButtons, d)) return;
        if (/submenu/.test(a) && (this._menuTray[o] === null || d !== this.submenuActiveButton)) {
          this.callPlugin(o, this.submenuOn.bind(this, d), d);
          return;
        } else if (/dialog/.test(a)) {
          this.callPlugin(o, this.plugins[o].open.bind(this), d);
          return;
        } else /command/.test(a) ? this.callPlugin(o, this.plugins[o].action.bind(this), d) : /fileBrowser/.test(a) && this.callPlugin(o, this.plugins[o].open.bind(this, null), d);
      } else o && this.commandHandler(d, o);
      /submenu/.test(a) ? this.submenuOff() : /command/.test(a) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(o, a) {
      if (!(c.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(a)))
        switch (a) {
          case "copy":
          case "cut":
            this.execCommand(a);
            break;
          case "paste":
            break;
          case "selectAll":
            this.containerOff();
            const d = e.element.wysiwyg;
            let h = l.getChildElement(d.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || d.firstChild, g = l.getChildElement(d.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || d.lastChild;
            if (!h || !g) return;
            if (l.isMedia(h)) {
              const C = this.getFileComponent(h), y = l.createElement("BR"), w = l.createElement(n.defaultTag);
              w.appendChild(y), h = C ? C.component : h, h.parentNode.insertBefore(w, h), h = y;
            }
            if (l.isMedia(g)) {
              const C = l.createElement("BR"), y = l.createElement(n.defaultTag);
              y.appendChild(C), d.appendChild(y), g = C;
            }
            m._showToolbarBalloon(this.setRange(h, 0, g, g.textContent.length));
            break;
          case "codeView":
            this.toggleCodeView();
            break;
          case "fullScreen":
            this.toggleFullScreen(o);
            break;
          case "indent":
          case "outdent":
            this.indent(a);
            break;
          case "undo":
            this.history.undo();
            break;
          case "redo":
            this.history.redo();
            break;
          case "removeFormat":
            this.removeFormat(), this.focus();
            break;
          case "print":
            this.print();
            break;
          case "preview":
            this.preview();
            break;
          case "showBlocks":
            this.toggleDisplayBlocks();
            break;
          case "dir":
            this.setDir(n.rtl ? "ltr" : "rtl");
            break;
          case "dir_ltr":
            this.setDir("ltr");
            break;
          case "dir_rtl":
            this.setDir("rtl");
            break;
          case "save":
            if (typeof n.callBackSave == "function")
              n.callBackSave(this.getContents(!1), this._variable.isChanged);
            else if (this._variable.isChanged && typeof x.save == "function")
              x.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            a = n._defaultCommand[a.toLowerCase()] || a, this.commandMap[a] || (this.commandMap[a] = o);
            const b = this._variable.currentNodesMap, p = b.indexOf(a) > -1 ? null : l.createElement(a);
            let v = a;
            /^SUB$/i.test(a) && b.indexOf("SUP") > -1 ? v = "SUP" : /^SUP$/i.test(a) && b.indexOf("SUB") > -1 && (v = "SUB"), this.nodeChange(p, this._commandMapStyles[a] || null, [v], !1), this.focus();
        }
    },
    /**
     * @description Remove format of the currently selected range
     */
    removeFormat: function() {
      this.nodeChange(null, null, null, null);
    },
    /**
     * @description This method implements indentation to selected range.
     * Setted "margin-left" to "25px" in the top "P" tag of the parameter node.
     * @param {String} command Separator ("indent" or "outdent")
     */
    indent: function(o) {
      const a = this.getRange(), d = this.getSelectedElements(null), h = [], g = o !== "indent", b = n.rtl ? "marginRight" : "marginLeft";
      let p = a.startContainer, v = a.endContainer, C = a.startOffset, y = a.endOffset;
      for (let w = 0, M = d.length, S, k; w < M; w++)
        S = d[w], !l.isListCell(S) || !this.plugins.list ? (k = /\d+/.test(S.style[b]) ? l.getNumber(S.style[b], 0) : 0, g ? k -= 25 : k += 25, l.setStyle(S, b, k <= 0 ? "" : k + "px")) : (g || S.previousElementSibling) && h.push(S);
      h.length > 0 && this.plugins.list.editInsideList.call(this, g, h), this.effectNode = null, this.setRange(p, C, v, y), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const o = e.element.wysiwyg;
      l.toggleClass(o, "se-show-block"), l.hasClass(o, "se-show-block") ? l.addClass(this._styleCommandMap.showBlocks, "active") : l.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const o = this._variable.isCodeView;
      this.controllersOff(), l.setDisabledButtons(!o, this.codeViewDisabledButtons), o ? (l.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(n.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, m._hideToolbar())), this.nativeFocus(), l.removeClass(this._styleCommandMap.codeView, "active"), l.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), n.codeMirrorEditor && n.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, m._showToolbarInline())), this._variable._range = null, e.element.code.focus(), l.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && l.setDisabledButtons(!0, this.resizingDisabledButtons), typeof x.toggleCodeView == "function" && x.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const o = this._getCodeView();
      if (n.fullPage) {
        const a = this._parser.parseFromString(o, "text/html");
        if (!this.options.__allowedScriptTag) {
          const g = a.head.children;
          for (let b = 0, p = g.length; b < p; b++)
            /^script$/i.test(g[b].tagName) && (a.head.removeChild(g[b]), b--, p--);
        }
        let d = a.head.innerHTML;
        (!a.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !a.head.querySelector("style")) && (d += l._setIframeCssTags(this.options)), this._wd.head.innerHTML = d, this._wd.body.innerHTML = this.convertContentsForEditor(a.body.innerHTML);
        const h = a.body.attributes;
        for (let g = 0, b = h.length; g < b; g++)
          h[g].name !== "contenteditable" && this._wd.body.setAttribute(h[g].name, h[g].value);
        if (!l.hasClass(this._wd.body, "sun-editor-editable")) {
          const g = n._editableClass.split(" ");
          for (let b = 0; b < g.length; b++)
            l.addClass(this._wd.body, n._editableClass[b]);
        }
      } else
        e.element.wysiwyg.innerHTML = o.length > 0 ? this.convertContentsForEditor(o) : "<" + n.defaultTag + "><br></" + n.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const o = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let a = "";
      if (n.fullPage) {
        const d = l.getAttributesToString(this._wd.body, null);
        a = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + d + `>
` + o + `</body>
</html>`;
      } else
        a = o;
      e.element.code.style.display = "block", e.element.wysiwygFrame.style.display = "none", this._setCodeView(a);
    },
    /**
     * @description Changes to full screen or default screen
     * @param {Element|null} element full screen button
     */
    toggleFullScreen: function(o) {
      const a = e.element.topArea, d = e.element.toolbar, h = e.element.editorArea, g = e.element.wysiwygFrame, b = e.element.code, p = this._variable;
      this.controllersOff();
      const v = d.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      p.isFullScreen ? (p.isFullScreen = !1, g.style.cssText = p._wysiwygOriginCssText, b.style.cssText = p._codeOriginCssText, d.style.cssText = "", h.style.cssText = p._editorAreaOriginCssText, a.style.cssText = p._originCssText, u.body.style.overflow = p._bodyOverflow, n.height === "auto" && !n.codeMirrorEditor && m._codeViewAutoHeight(), n.toolbarContainer && n.toolbarContainer.appendChild(d), n.stickyToolbar > -1 && l.removeClass(d, "se-toolbar-sticky"), p._fullScreenAttrs.sticky && !n.toolbarContainer && (p._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", l.addClass(d, "se-toolbar-sticky")), this._isInline = p._fullScreenAttrs.inline, this._isBalloon = p._fullScreenAttrs.balloon, this._isInline && m._showToolbarInline(), n.toolbarContainer && l.removeClass(d, "se-toolbar-balloon"), m.onScroll_window(), o && l.changeElement(o.firstElementChild, _.expansion), e.element.topArea.style.marginTop = "", l.removeClass(this._styleCommandMap.fullScreen, "active")) : (p.isFullScreen = !0, p._fullScreenAttrs.inline = this._isInline, p._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), n.toolbarContainer && e.element.relative.insertBefore(d, h), a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.maxWidth = "100%", a.style.height = "100%", a.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (p._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", l.removeClass(d, "se-toolbar-sticky")), p._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", p._editorAreaOriginCssText = h.style.cssText, p._wysiwygOriginCssText = g.style.cssText, p._codeOriginCssText = b.style.cssText, h.style.cssText = d.style.cssText = "", g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + n._editorStyles.editor, b.style.cssText = (b.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], d.style.width = g.style.height = b.style.height = "100%", d.style.position = "relative", d.style.display = "block", p.innerHeight_fullScreen = f.innerHeight - d.offsetHeight, h.style.height = p.innerHeight_fullScreen - n.fullScreenOffset + "px", o && l.changeElement(o.firstElementChild, _.reduction), n.iframe && n.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = n.fullScreenOffset + "px", l.addClass(this._styleCommandMap.fullScreen, "active")), v && x.toolbar.hide(), typeof x.toggleFullScreen == "function" && x.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const o = l.createElement("IFRAME");
      o.style.display = "none", u.body.appendChild(o);
      const a = n.printTemplate ? n.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), d = l.getIframeDocument(o), h = this._wd;
      if (n.iframe) {
        const g = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? l.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        d.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + g + ">" + a + "</body></html>"
        );
      } else {
        const g = u.head.getElementsByTagName("link"), b = u.head.getElementsByTagName("style");
        let p = "";
        for (let v = 0, C = g.length; v < C; v++)
          p += g[v].outerHTML;
        for (let v = 0, C = b.length; v < C; v++)
          p += b[v].outerHTML;
        d.write(
          "<!DOCTYPE html><html><head>" + p + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '">' + a + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (o.focus(), l.isIE_Edge || l.isChromium || u.documentMode || f.StyleMedia)
            try {
              o.contentWindow.document.execCommand("print", !1, null);
            } catch {
              o.contentWindow.print();
            }
          else
            o.contentWindow.print();
        } catch (g) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + g);
        } finally {
          c.closeLoading(), l.removeItem(o);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      c.submenuOff(), c.containerOff(), c.controllersOff();
      const o = n.previewTemplate ? n.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), a = f.open("", "_blank");
      a.mimeType = "text/html";
      const d = this._wd;
      if (n.iframe) {
        const h = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? l.getAttributesToString(d.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        a.document.write(
          "<!DOCTYPE html><html><head>" + d.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + o + "</body></html>"
        );
      } else {
        const h = u.head.getElementsByTagName("link"), g = u.head.getElementsByTagName("style");
        let b = "";
        for (let p = 0, v = h.length; p < v; p++)
          b += h[p].outerHTML;
        for (let p = 0, v = g.length; p < v; p++)
          b += g[p].outerHTML;
        a.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + s.toolbar.preview + "</title>" + b + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + o + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(o) {
      const a = o === "rtl", d = this._prevRtl !== a;
      this._prevRtl = n.rtl = a, d && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && l.changeElement(e.tool.indent.firstElementChild, _.indent), e.tool.outdent && l.changeElement(e.tool.outdent.firstElementChild, _.outdent));
      const h = e.element;
      a ? (l.addClass(h.topArea, "se-rtl"), l.addClass(h.wysiwygFrame, "se-rtl")) : (l.removeClass(h.topArea, "se-rtl"), l.removeClass(h.wysiwygFrame, "se-rtl"));
      const g = l.getListChildren(h.wysiwyg, function(p) {
        return l.isFormatElement(p) && (p.style.marginRight || p.style.marginLeft || p.style.textAlign);
      });
      for (let p = 0, v = g.length, C, y, w; p < v; p++)
        C = g[p], w = C.style.marginRight, y = C.style.marginLeft, (w || y) && (C.style.marginRight = y, C.style.marginLeft = w), w = C.style.textAlign, w === "left" ? C.style.textAlign = "right" : w === "right" && (C.style.textAlign = "left");
      const b = e.tool;
      b.dir && (l.changeTxt(b.dir.querySelector(".se-tooltip-text"), s.toolbar[n.rtl ? "dir_ltr" : "dir_rtl"]), l.changeElement(b.dir.firstElementChild, _[n.rtl ? "dir_ltr" : "dir_rtl"])), b.dir_ltr && (a ? l.removeClass(b.dir_ltr, "active") : l.addClass(b.dir_ltr, "active")), b.dir_rtl && (a ? l.addClass(b.dir_rtl, "active") : l.removeClass(b.dir_rtl, "active"));
    },
    /**
     * @description Sets the HTML string
     * @param {String|undefined} html HTML string
     */
    setContents: function(o) {
      this.removeRange();
      const a = o == null ? "" : this.convertContentsForEditor(o, null, null);
      if (!this._variable.isCodeView)
        e.element.wysiwyg.innerHTML = a, this._resetComponents(), this.history.push(!1);
      else {
        const d = this.convertHTMLForCodeView(a, !1);
        this._setCodeView(d);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(o) {
      if (!n.iframe) return !1;
      o.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? o.head : o.head.replace(this.__scriptTagRegExp, "")), o.body && (this._wd.body.innerHTML = this.convertContentsForEditor(o.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(o) {
      const a = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), d = l.createElement("DIV");
      d.innerHTML = a;
      const h = l.getListChildren(d, function(g) {
        return g.hasAttribute("contenteditable");
      });
      for (let g = 0, b = h.length; g < b; g++)
        h[g].removeAttribute("contenteditable");
      if (n.fullPage && !o) {
        const g = l.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + g + ">" + d.innerHTML + "</body></html>";
      } else
        return d.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(o) {
      return '<div class="sun-editor-editable' + (n.rtl ? " se-rtl" : "") + '">' + this.getContents(o) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(o, a) {
      const d = n.defaultTag;
      if (o.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(o.nodeName)) return "";
        if (/__se__tag/.test(o.className)) return o.outerHTML;
        const h = l.getListChildNodes(o, function(g) {
          return l.isSpanWithoutAttr(g) && !l.getParentElement(g, l.isNotCheckingNode);
        }) || [];
        for (let g = h.length - 1; g >= 0; g--)
          h[g].outerHTML = h[g].innerHTML;
        return !a || l.isFormatElement(o) || l.isRangeFormatElement(o) || l.isComponent(o) || l.isFigures(o) || l.isAnchor(o) && l.isMedia(o.firstElementChild) ? l.isSpanWithoutAttr(o) ? o.innerHTML : o.outerHTML : "<" + d + ">" + (l.isSpanWithoutAttr(o) ? o.innerHTML : o.outerHTML) + "</" + d + ">";
      }
      if (o.nodeType === 3) {
        if (!a) return l._HTMLConvertor(o.textContent);
        const h = o.textContent.split(/\n/g);
        let g = "";
        for (let b = 0, p = h.length, v; b < p; b++)
          v = h[b].trim(), v.length > 0 && (g += "<" + d + ">" + l._HTMLConvertor(v) + "</" + d + ">");
        return g;
      }
      return o.nodeType === 8 && this._allowHTMLComments ? "<!--" + o.textContent.trim() + "-->" : "";
    },
    /**
     * @description Removes attribute values such as style and converts tags that do not conform to the "html5" standard.
     * @param {String} text 
     * @returns {String} HTML string
     * @private
     */
    _tagConvertor: function(o) {
      if (!this._disallowedTextTagsRegExp) return o;
      const a = n._textTagsMap;
      return o.replace(this._disallowedTextTagsRegExp, function(d, h, g, b) {
        return h + (typeof a[g] == "string" ? a[g] : g) + (b ? " " + b : "");
      });
    },
    /**
     * @description Delete disallowed tags
     * @param {String} html HTML string
     * @returns {String}
     * @private
     */
    _deleteDisallowedTags: function(o) {
      return o = o.replace(this.__disallowedTagsRegExp, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, ""), /\bfont\b/i.test(this.options._editorTagsWhitelist) || (o = o.replace(/(<\/?)font(\s?)/gi, "$1span$2")), o.replace(this.editorTagsWhitelistRegExp, "").replace(this.editorTagsBlacklistRegExp, "");
    },
    _convertFontSize: function(o, a) {
      const d = this._w.Math, h = a.match(/(\d+(?:\.\d+)?)(.+)/), g = h ? h[1] * 1 : l.fontValueMap[a], b = h ? h[2] : "rem";
      let p = g;
      switch (/em/.test(b) ? p = d.round(g / 0.0625) : b === "pt" ? p = d.round(g * 1.333) : b === "%" && (p = g / 100), o) {
        case "em":
        case "rem":
        case "%":
          return (p * 0.0625).toFixed(2) + o;
        case "pt":
          return d.floor(p / 1.333) + o;
        default:
          return p + o;
      }
    },
    _cleanStyle: function(o, a, d) {
      let h = (o.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(d) && !h && (o.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const g = (o.match(/\ssize="([^"]+)"/i) || [])[1], b = (o.match(/\sface="([^"]+)"/i) || [])[1], p = (o.match(/\scolor="([^"]+)"/i) || [])[1];
        (g || b || p) && (h = 'style="' + (g ? "font-size:" + this.util.getNumber(g / 3.333, 1) + "rem;" : "") + (b ? "font-family:" + b + ";" : "") + (p ? "color:" + p + ";" : "") + '"');
      }
      if (h) {
        a || (a = []);
        const g = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[d]);
        if (g) {
          const b = [];
          for (let p = 0, v = g.length, C; p < v; p++)
            if (C = g[p].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const y = l.kebabToCamelCase(C[1].trim()), w = this.wwComputedStyle[y] ? this.wwComputedStyle[y].replace(/"/g, "") : "", M = C[3].trim();
              switch (y) {
                case "fontFamily":
                  if (!n.plugins.font || n.font.indexOf(M) === -1) continue;
                  break;
                case "fontSize":
                  if (!n.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, n.fontSizeUnit)));
                  break;
                case "color":
                  if (!n.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
                case "backgroundColor":
                  if (!n.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
              }
              w !== M && b.push(C[0]);
            }
          b.length > 0 && a.push('style="' + b.join(";") + '"');
        }
      }
      return a;
    },
    /**
     * @description Tag and tag attribute check RegExp function. (used by "cleanHTML" and "convertContentsForEditor")
     * @param {Boolean} lowLevelCheck Row level check
     * @param {String} m RegExp value
     * @param {String} t RegExp value
     * @returns {String}
     * @private
     */
    _cleanTags: function(o, a, d) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(a)) return a;
      let h = null;
      const g = d.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), b = this._attributesTagsBlacklist[g];
      a = a.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), b ? a = a.replace(b, "") : a = a.replace(this._attributesBlacklistRegExp, "");
      const p = this._attributesTagsWhitelist[g];
      if (p ? h = a.match(p) : h = a.match(o ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), o || g === "span" || g === "li" || this._cleanStyleRegExp[g])
        if (g === "a") {
          const v = a.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          v && (h || (h = []), h.push(v[0]));
        } else (!h || !/style=/i.test(h.toString())) && ((g === "span" || g === "li") && (h = this._cleanStyle(a, h, "span")), this._cleanStyleRegExp[g] ? h = this._cleanStyle(a, h, g) : /^(P|DIV|H[1-6]|PRE)$/i.test(g) && (h = this._cleanStyle(a, h, "format")));
      else {
        const v = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        v && !h ? h = [v[0]] : v && !h.some(function(C) {
          return /^style/.test(C.trim());
        }) && h.push(v[0]);
      }
      if (l.isFigures(g)) {
        const v = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        h || (h = []), v && h.push(v[0]);
      }
      if (h)
        for (let v = 0, C = h.length, y; v < C; v++)
          y = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[v].trim()) ? "" : h[v], d += (/^\s/.test(y) ? "" : " ") + y;
      return d;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(o) {
      let a = "", d;
      const h = o.childNodes;
      for (let g = 0, b = h.length, p; g < b; g++)
        p = h[g], p.nodeType === 8 ? a += "<!-- " + p.textContent + " -->" : !l.isFormatElement(p) && !l.isRangeFormatElement(p) && !l.isComponent(p) && !/meta/i.test(p.nodeName) ? (d || (d = l.createElement(n.defaultTag)), d.appendChild(p), g--, b--) : (d && (a += d.outerHTML, d = null), a += p.outerHTML);
      return d && (a += d.outerHTML), u.createRange().createContextualFragment(a);
    },
    _convertListCell: function(o) {
      let a = "";
      for (let d = 0, h = o.length, g; d < h; d++)
        g = o[d], g.nodeType === 1 ? l.isList(g) ? a += g.innerHTML : l.isListCell(g) ? a += g.outerHTML : l.isFormatElement(g) ? a += "<li>" + (g.innerHTML.trim() || "<br>") + "</li>" : l.isRangeFormatElement(g) && !l.isTable(g) ? a += this._convertListCell(g) : a += "<li>" + g.outerHTML + "</li>" : a += "<li>" + (g.textContent || "<br>") + "</li>";
      return a;
    },
    _isFormatData: function(o) {
      let a = !1;
      for (let d = 0, h = o.length, g; d < h; d++)
        if (g = o[d], g.nodeType === 1 && !l.isTextStyleElement(g) && !l.isBreak(g) && !this.__disallowedTagNameRegExp.test(g.nodeName)) {
          a = !0;
          break;
        }
      return a;
    },
    /**
     * @description Gets the clean HTML code for editor
     * @param {String} html HTML string
     * @param {String|RegExp|null} whitelist Regular expression of allowed tags.
     * RegExp object is create by util.createTagsWhitelist method. (core.pasteTagsWhitelistRegExp)
     * @param {String|RegExp|null} blacklist Regular expression of disallowed tags.
     * RegExp object is create by util.createTagsBlacklist method. (core.pasteTagsBlacklistRegExp)
     * @returns {String}
     */
    cleanHTML: function(o, a, d) {
      if (!n.strictMode) return l.htmlCompress(o);
      o = this._deleteDisallowedTags(this._parser.parseFromString(l.htmlCompress(o), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = u.createRange().createContextualFragment(o);
      try {
        l._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (v) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + v);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const v = h.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, y = v.length, w, M; C < y; C++) {
          M = [].slice.call(v[C].classList);
          for (let S = 0, k = M.length; S < k; S++)
            if (w = this.managedTagsInfo.map[M[S]], w) {
              w(v[C]);
              break;
            }
        }
      }
      let g = h.childNodes, b = "";
      const p = this._isFormatData(g);
      p && (g = this._editFormat(h).childNodes);
      for (let v = 0, C = g.length, y; v < C; v++) {
        if (y = g[v], this.__allowedScriptRegExp.test(y.nodeName)) {
          b += y.outerHTML;
          continue;
        }
        b += this._makeLine(y, p);
      }
      return b = l.htmlRemoveWhiteSpace(b), b ? (a && (b = b.replace(typeof a == "string" ? l.createTagsWhitelist(a) : a, "")), d && (b = b.replace(typeof d == "string" ? l.createTagsBlacklist(d) : d, ""))) : b = o, this._tagConvertor(b);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(o) {
      if (!n.strictMode) return l.htmlCompress(o);
      o = this._deleteDisallowedTags(this._parser.parseFromString(l.htmlCompress(o), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const a = u.createRange().createContextualFragment(o);
      try {
        l._consistencyCheckOfHTML(a, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (b) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + b);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const b = a.querySelectorAll(this.managedTagsInfo.query);
        for (let p = 0, v = b.length, C, y; p < v; p++) {
          y = [].slice.call(b[p].classList);
          for (let w = 0, M = y.length; w < M; w++)
            if (C = this.managedTagsInfo.map[y[w]], C) {
              C(b[p]);
              break;
            }
        }
      }
      const d = a.childNodes;
      let h = "", g = null;
      for (let b = 0, p; b < d.length; b++) {
        if (p = d[b], this.__allowedScriptRegExp.test(p.nodeName)) {
          h += p.outerHTML;
          continue;
        }
        if (!l.isFormatElement(p) && !l.isRangeFormatElement(p) && !l.isComponent(p) && !l.isFigures(p) && p.nodeType !== 8 && !/__se__tag/.test(p.className)) {
          if (g || (g = l.createElement(n.defaultTag)), g.appendChild(p), b--, d[b + 1] && !l.isFormatElement(d[b + 1]))
            continue;
          p = g, g = null;
        }
        g && (h += this._makeLine(g, !0), g = null), h += this._makeLine(p, !0);
      }
      return g && (h += this._makeLine(g, !0)), h.length === 0 ? "<" + n.defaultTag + "><br></" + n.defaultTag + ">" : (h = l.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(o, a) {
      let d = "";
      const h = f.RegExp, g = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), b = typeof o == "string" ? u.createRange().createContextualFragment(o) : o, p = (function(y) {
        return this.isFormatElement(y) || this.isComponent(y);
      }).bind(l), v = a ? "" : `
`;
      let C = a ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function y(w, M) {
        const S = w.childNodes, k = g.test(w.nodeName), R = k ? M : "";
        for (let D = 0, U = S.length, I, H, P, B, F, N; D < U; D++) {
          if (I = S[D], B = g.test(I.nodeName), H = B ? v : "", P = p(I) && !k && !/^(TH|TD)$/i.test(w.nodeName) ? v : "", I.nodeType === 8) {
            d += `
<!-- ` + I.textContent.trim() + " -->" + H;
            continue;
          }
          if (I.nodeType === 3) {
            l.isList(I.parentElement) || (d += l._HTMLConvertor(/^\n+$/.test(I.data) ? "" : I.data));
            continue;
          }
          if (I.childNodes.length === 0) {
            d += (/^HR$/i.test(I.nodeName) ? v : "") + (/^PRE$/i.test(I.parentElement.nodeName) && /^BR$/i.test(I.nodeName) ? "" : R) + I.outerHTML + H;
            continue;
          }
          I.outerHTML ? (F = I.nodeName.toLowerCase(), N = R || B ? M : "", d += (P || (k ? "" : H)) + N + I.outerHTML.match(h("<" + F + "[^>]*>", "i"))[0] + H, y(I, M + C), d += (/\n$/.test(d) ? N : "") + "</" + F + ">" + (P || H || k || /^(TH|TD)$/i.test(I.nodeName) ? v : "")) : d += new f.XMLSerializer().serializeToString(I);
        }
      }(b, ""), d.trim() + v;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(o, a, d) {
      u.addEventListener(o, a, d), n.iframe && this._wd.addEventListener(o, a);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(o, a) {
      u.removeEventListener(o, a), n.iframe && this._wd.removeEventListener(o, a);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(o) {
      const a = n.maxCharCount, d = n.charCounterType;
      let h = 0;
      if (o && (h = this.getCharLength(o, d)), this._setCharCount(), a > 0) {
        let g = !1;
        const b = x.getCharCount(d);
        if (b > a) {
          if (g = !0, h > 0) {
            this._editorRange();
            const p = this.getRange(), v = p.endOffset - 1, C = this.getSelectionNode().textContent, y = p.endOffset - (b - a);
            this.getSelectionNode().textContent = C.slice(0, y < 0 ? 0 : y) + C.slice(p.endOffset, C.length), this.setRange(p.endContainer, v, p.endContainer, v);
          }
        } else b + h > a && (g = !0);
        if (g && (this._callCounterBlink(), h > 0))
          return !1;
      }
      return !0;
    },
    /**
     * @description When "element" is added, if it is greater than "options.maxCharCount", false is returned.
     * @param {Node|String} element Element node or String.
     * @param {String|null} charCounterType charCounterType. If it is null, the options.charCounterType
     * @returns {Boolean}
     */
    checkCharCount: function(o, a) {
      if (n.maxCharCount) {
        const d = a || n.charCounterType, h = this.getCharLength(typeof o == "string" ? o : this._charTypeHTML && o.nodeType === 1 ? o.outerHTML : o.textContent, d);
        if (h > 0 && h + x.getCharCount(d) > n.maxCharCount)
          return this._callCounterBlink(), !1;
      }
      return !0;
    },
    /**
     * @description Get the length of the content.
     * Depending on the option, the length of the character is taken. (charCounterType)
     * @param {String} content Content to count
     * @param {String} charCounterType options.charCounterType
     * @returns {Number}
     */
    getCharLength: function(o, a) {
      return /byte/.test(a) ? l.getByteLength(o) : o.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      c.controllersOff();
      const o = m._responsiveButtonSize;
      if (o) {
        let a = 0;
        (c._isBalloon || c._isInline) && n.toolbarWidth === "auto" ? a = e.element.topArea.offsetWidth : a = e.element.toolbar.offsetWidth;
        let d = "default";
        for (let h = 1, g = o.length; h < g; h++)
          if (a < o[h]) {
            d = o[h] + "";
            break;
          }
        m._responsiveCurrentSize !== d && (m._responsiveCurrentSize = d, x.setToolbarButtons(m._responsiveButtons[d]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(o, a) {
        this.textContent && o && (this.textContent = o.getCharCount(a.charCounterType));
      }).bind(e.element.charCounter, x, n), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const o = e.element.charWrapper;
      o && !l.hasClass(o, "se-blink") && (l.addClass(o, "se-blink"), f.setTimeout(function() {
        l.removeClass(o, "se-blink");
      }, 600));
    },
    /**
     * @description Check the components such as image and video and modify them according to the format.
     * @private
     */
    _checkComponents: function() {
      for (let o = 0, a = this._fileInfoPluginsCheck.length; o < a; o++)
        this._fileInfoPluginsCheck[o]();
    },
    /**
     * @description Initialize the information of the components.
     * @private
     */
    _resetComponents: function() {
      for (let o = 0, a = this._fileInfoPluginsReset.length; o < a; o++)
        this._fileInfoPluginsReset[o]();
    },
    /**
     * @description Set method in the code view area
     * @param {String} value HTML string
     * @private
     */
    _setCodeView: function(o) {
      n.codeMirrorEditor ? n.codeMirrorEditor.getDoc().setValue(o) : e.element.code.value = o;
    },
    /**
     * @description Get method in the code view area
     * @private
     */
    _getCodeView: function() {
      return n.codeMirrorEditor ? n.codeMirrorEditor.getDoc().getValue() : e.element.code.value;
    },
    /**
     * @description remove class, display text.
     * @param {Array|null} ignoredList Igonred button list
     */
    _setKeyEffect: function(o) {
      const a = this.commandMap, d = this.activePlugins;
      for (let h in a)
        o.indexOf(h) > -1 || !l.hasOwn(a, h) || (d.indexOf(h) > -1 ? i[h].active.call(this, null) : a.OUTDENT && /^OUTDENT$/i.test(h) ? l.isImportantDisabled(a.OUTDENT) || a.OUTDENT.setAttribute("disabled", !0) : a.INDENT && /^INDENT$/i.test(h) ? l.isImportantDisabled(a.INDENT) || a.INDENT.removeAttribute("disabled") : l.removeClass(a[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(o, a) {
      const d = f.RegExp;
      this._ww = n.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = u, this._charTypeHTML = n.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = l.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + l.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(B) {
        return this.test(B) ? B : "";
      }).bind(n.allowedClassNames);
      const h = n.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new d("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new d("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new d("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new d("^" + (n.__allowedScriptTag ? "script" : "") + "$", "i"), !n.iframe && typeof f.ShadowRoot == "function") {
        let B = e.element.wysiwygFrame;
        for (; B; ) {
          if (B.shadowRoot) {
            this._shadowRoot = B.shadowRoot;
            break;
          } else if (B instanceof f.ShadowRoot) {
            this._shadowRoot = B;
            break;
          }
          B = B.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const g = f.Object.keys(n._textTagsMap), b = n.addTagsWhitelist ? n.addTagsWhitelist.split("|").filter(function(B) {
        return /b|i|ins|s|strike/i.test(B);
      }) : [];
      for (let B = 0; B < b.length; B++)
        g.splice(g.indexOf(b[B].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = g.length === 0 ? null : new d("(<\\/?)(" + g.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const p = function(B, F) {
        return B ? B === "*" ? "[a-z-]+" : F ? B + "|" + F : B : "^";
      }, y = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", w = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = n._editorTagsWhitelist.indexOf("//") > -1 || n._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new d("^(" + p(n._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new d("^(" + (n.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = l.createTagsWhitelist(p(n._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = l.createTagsBlacklist(n.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = l.createTagsWhitelist(p(n.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = l.createTagsBlacklist(n.pasteTagsBlacklist);
      const M = '\\s*=\\s*(")[^"]*\\1', S = n.attributesWhitelist;
      let k = {}, R = "";
      if (S)
        for (let B in S)
          !l.hasOwn(S, B) || /^on[a-z]+$/i.test(S[B]) || (B === "all" ? R = p(S[B], y) : k[B] = new d("\\s(?:" + p(S[B], "") + ")" + M, "ig"));
      this._attributesWhitelistRegExp = new d("\\s(?:" + (R || y + "|" + w) + ")" + M, "ig"), this._attributesWhitelistRegExp_all_data = new d("\\s(?:" + ((R || y) + "|data-[a-z0-9\\-]+") + ")" + M, "ig"), this._attributesTagsWhitelist = k;
      const D = n.attributesBlacklist;
      if (k = {}, R = "", D)
        for (let B in D)
          l.hasOwn(D, B) && (B === "all" ? R = p(D[B], "") : k[B] = new d("\\s(?:" + p(D[B], "") + ")" + M, "ig"));
      this._attributesBlacklistRegExp = new d("\\s(?:" + (R || "^") + ")" + M, "ig"), this._attributesTagsBlacklist = k, this._isInline = /inline/i.test(n.mode), this._isBalloon = /balloon|balloon-always/i.test(n.mode), this._isBalloonAlways = /balloon-always/i.test(n.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const U = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let I = [], H, P;
      for (let B in i)
        if (l.hasOwn(i, B)) {
          if (H = i[B], P = t[B], (H.active || H.action) && P && this.callPlugin(B, null, P), typeof H.checkFileInfo == "function" && typeof H.resetFileInfo == "function" && (this.callPlugin(B, null, P), this._fileInfoPluginsCheck.push(H.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(H.resetFileInfo.bind(this))), f.Array.isArray(H.fileTags)) {
            const F = H.fileTags;
            this.callPlugin(B, null, P), this._fileManager.tags = this._fileManager.tags.concat(F), I.push(B);
            for (let N = 0, V = F.length; N < V; N++)
              this._fileManager.pluginMap[F[N].toLowerCase()] = B;
          }
          if (H.managedTags) {
            const F = H.managedTags();
            U.push("." + F.className), this.managedTagsInfo.map[F.className] = F.method.bind(this);
          }
        }
      this.managedTagsInfo.query = U.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new d("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new d("^(" + (I.length === 0 ? "^" : I.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = jn(this, this._onChange_historyStack.bind(this)), this.addModule([ii]), n.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, n._editorStyles.editor && (e.element.wysiwyg.style.cssText = n._editorStyles.editor), n.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(o, a);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const o = e.tool, a = this.commandMap;
      a.INDENT = o.indent, a.OUTDENT = o.outdent, a[n.textTags.bold.toUpperCase()] = o.bold, a[n.textTags.underline.toUpperCase()] = o.underline, a[n.textTags.italic.toUpperCase()] = o.italic, a[n.textTags.strike.toUpperCase()] = o.strike, a[n.textTags.sub.toUpperCase()] = o.subscript, a[n.textTags.sup.toUpperCase()] = o.superscript, this._styleCommandMap = {
        fullScreen: o.fullScreen,
        showBlocks: o.showBlocks,
        codeView: o.codeView
      }, this._saveButtonStates();
    },
    /**
     * @description Initializ wysiwyg area (Only called from core._init)
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _initWysiwygArea: function(o, a) {
      e.element.wysiwyg.innerHTML = o ? a : this.convertContentsForEditor((typeof a == "string" ? a : /^TEXTAREA$/i.test(e.element.originElement.nodeName) ? e.element.originElement.value : e.element.originElement.innerHTML) || "");
    },
    /**
     * @description Called when there are changes to tags in the wysiwyg region.
     * @private
     */
    _resourcesStateChange: function() {
      this._iframeAutoHeight(), this._checkPlaceholder();
    },
    /**
     * @description Called when after execute "history.push"
     * @private
     */
    _onChange_historyStack: function() {
      this.hasFocus && m._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), x.onChange && x.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && m._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const o = c._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = o + "px", l.isResizeObserverSupported || c.__callResizeFunction(o, null);
      }) : l.isResizeObserverSupported || c.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(o, a) {
      o = o === -1 ? a.borderBoxSize && a.borderBoxSize[0] ? a.borderBoxSize[0].blockSize : a.contentRect.height + this._editorHeightPadding : o, this._editorHeight !== o && (typeof x.onResizeEditor == "function" && x.onResizeEditor(o, this._editorHeight, c, a), this._editorHeight = o);
    },
    /**
     * @description Set display property when there is placeholder.
     * @private
     */
    _checkPlaceholder: function() {
      if (this._placeholder) {
        if (this._variable.isCodeView) {
          this._placeholder.style.display = "none";
          return;
        }
        const o = e.element.wysiwyg;
        !l.onlyZeroWidthSpace(o.textContent) || o.querySelector(l._allowedEmptyNodeList) || (o.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
      }
    },
    /**
     * @description If there is no default format, add a format and move "selection".
     * @param {String|null} formatName Format tag name (default: 'P')
     * @returns {undefined|null}
     * @private
     */
    _setDefaultFormat: function(o) {
      if (this._fileManager.pluginRegExp.test(this.currentControllerName)) return;
      const a = this.getRange(), d = a.commonAncestorContainer, h = a.startContainer, g = l.getRangeFormatElement(d, null);
      let b, p, v;
      const C = l.getParentElement(d, l.isComponent);
      if (!(C && !l.isTable(C))) {
        if (d.nodeType === 1 && d.getAttribute("data-se-embed") === "true") {
          let y = d.nextElementSibling;
          l.isFormatElement(y) || (y = this.appendFormatTag(d, n.defaultTag)), this.setRange(y.firstChild, 0, y.firstChild, 0);
          return;
        }
        if (!((l.isRangeFormatElement(h) || l.isWysiwygDiv(h)) && (l.isComponent(h.children[a.startOffset]) || l.isComponent(h.children[a.startOffset - 1])))) {
          if (l.getParentElement(d, l.isNotCheckingNode)) return null;
          if (g) {
            v = l.createElement(o || n.defaultTag), v.innerHTML = g.innerHTML, v.childNodes.length === 0 && (v.innerHTML = l.zeroWidthSpace), g.innerHTML = v.outerHTML, v = g.firstChild, b = l.getEdgeChildNodes(v, null).sc, b || (b = l.createTextNode(l.zeroWidthSpace), v.insertBefore(b, v.firstChild)), p = b.textContent.length, this.setRange(b, p, b, p);
            return;
          }
          if (l.isRangeFormatElement(d) && d.childNodes.length <= 1) {
            let y = null;
            d.childNodes.length === 1 && l.isBreak(d.firstChild) ? y = d.firstChild : (y = l.createTextNode(l.zeroWidthSpace), d.appendChild(y)), this.setRange(y, 1, y, 1);
            return;
          }
          try {
            if (d.nodeType === 3 && (v = l.createElement(o || n.defaultTag), d.parentNode.insertBefore(v, d), v.appendChild(d)), l.isBreak(v.nextSibling) && l.removeItem(v.nextSibling), l.isBreak(v.previousSibling) && l.removeItem(v.previousSibling), l.isBreak(b)) {
              const y = l.createTextNode(l.zeroWidthSpace);
              b.parentNode.insertBefore(y, b), b = y;
            }
          } catch {
            this.execCommand("formatBlock", !1, o || n.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (v && (l.isBreak(v.nextSibling) && l.removeItem(v.nextSibling), l.isBreak(v.previousSibling) && l.removeItem(v.previousSibling), l.isBreak(b))) {
            const y = l.createTextNode(l.zeroWidthSpace);
            b.parentNode.insertBefore(y, b), b = y;
          }
          this.effectNode = null, h ? this.setRange(h, 1, h, 1) : this.nativeFocus();
        }
      }
    },
    /**
     * @description Initialization after "setOptions"
     * @param {Object} el context.element
     * @param {String} _initHTML Initial html string
     * @private
     */
    _setOptionsInit: function(o, a) {
      this.context = e = Nt(o.originElement, this._getConstructed(o), n), this._componentsInfoReset = !0, this._editorInit(!0, a);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(o, a) {
      this._init(o, a), m._addEvent(), this._setCharCount(), m._offStickyToolbar(), m.onResize_window(), e.element.toolbar.style.visibility = "";
      const d = n.frameAttrbutes;
      for (let h in d)
        e.element.wysiwyg.setAttribute(h, d[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof c._resourcesStateChange == "function" && (m._resizeObserver && m._resizeObserver.observe(e.element.wysiwygFrame), m._toolbarObserver && m._toolbarObserver.observe(e.element._toolbarShadow), c._resourcesStateChange(), typeof x.onload == "function" && x.onload(c, o));
      });
    },
    /**
     * @description Create and return an object to cache the new context.
     * @param {Element} contextEl context.element
     * @returns {Object}
     * @private
     */
    _getConstructed: function(o) {
      return {
        _top: o.topArea,
        _relative: o.relative,
        _toolBar: o.toolbar,
        _toolbarShadow: o._toolbarShadow,
        _menuTray: o._menuTray,
        _editorArea: o.editorArea,
        _wysiwygArea: o.wysiwygFrame,
        _codeArea: o.code,
        _placeholder: o.placeholder,
        _resizingBar: o.resizingBar,
        _navigation: o.navigation,
        _charCounter: o.charCounter,
        _charWrapper: o.charWrapper,
        _loading: o.loading,
        _lineBreaker: o.lineBreaker,
        _lineBreaker_t: o.lineBreaker_t,
        _lineBreaker_b: o.lineBreaker_b,
        _resizeBack: o.resizeBackground,
        _stickyDummy: o._stickyDummy,
        _arrow: o._arrow
      };
    }
  }, m = {
    _IEisComposing: !1,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
    _deleteKeyCode: new f.RegExp("^(8|46)$"),
    _cursorMoveKeyCode: new f.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new f.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new f.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new f.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new f.RegExp("^(" + f.Object.keys(n._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new f.RegExp(l.zeroWidthSpace + "+", ""),
    _keyCodeShortcut: {
      65: "A",
      66: "B",
      83: "S",
      85: "U",
      73: "I",
      89: "Y",
      90: "Z",
      219: "[",
      221: "]"
    },
    _shortcutCommand: function(o, a) {
      let d = null;
      const h = m._keyCodeShortcut[o];
      switch (h) {
        case "A":
          d = "selectAll";
          break;
        case "B":
          n.shortcutsDisable.indexOf("bold") === -1 && (d = "bold");
          break;
        case "S":
          a && n.shortcutsDisable.indexOf("strike") === -1 ? d = "strike" : !a && n.shortcutsDisable.indexOf("save") === -1 && (d = "save");
          break;
        case "U":
          n.shortcutsDisable.indexOf("underline") === -1 && (d = "underline");
          break;
        case "I":
          n.shortcutsDisable.indexOf("italic") === -1 && (d = "italic");
          break;
        case "Z":
          n.shortcutsDisable.indexOf("undo") === -1 && (a ? d = "redo" : d = "undo");
          break;
        case "Y":
          n.shortcutsDisable.indexOf("undo") === -1 && (d = "redo");
          break;
        case "[":
          n.shortcutsDisable.indexOf("indent") === -1 && (d = n.rtl ? "indent" : "outdent");
          break;
        case "]":
          n.shortcutsDisable.indexOf("indent") === -1 && (d = n.rtl ? "outdent" : "indent");
          break;
      }
      return d ? (c.commandHandler(c.commandMap[d], d), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (l.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let o = c.getSelectionNode();
      if (o === c.effectNode) return;
      c.effectNode = o;
      const a = n.rtl ? "marginRight" : "marginLeft", d = c.commandMap, h = m._onButtonsCheck, g = [], b = [], p = c.activePlugins, v = p.length;
      let C = "";
      for (; o.firstChild; )
        o = o.firstChild;
      for (let y = o; !l.isWysiwygDiv(y) && y; y = y.parentNode)
        if (!(y.nodeType !== 1 || l.isBreak(y))) {
          if (C = y.nodeName.toUpperCase(), b.push(C), !c.isReadOnly)
            for (let w = 0, M; w < v; w++)
              M = p[w], g.indexOf(M) === -1 && i[M].active.call(c, y) && g.push(M);
          if (l.isFormatElement(y)) {
            g.indexOf("OUTDENT") === -1 && d.OUTDENT && !l.isImportantDisabled(d.OUTDENT) && (l.isListCell(y) || y.style[a] && l.getNumber(y.style[a], 0) > 0) && (g.push("OUTDENT"), d.OUTDENT.removeAttribute("disabled")), g.indexOf("INDENT") === -1 && d.INDENT && !l.isImportantDisabled(d.INDENT) && (g.push("INDENT"), l.isListCell(y) && !y.previousElementSibling ? d.INDENT.setAttribute("disabled", !0) : d.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(C) && (g.push(C), l.addClass(d[C], "active"));
        }
      c._setKeyEffect(g), c._variable.currentNodes = b.reverse(), c._variable.currentNodesMap = g, n.showPathLabel && (e.element.navigation.textContent = c._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(o) {
      let a = o.target;
      if (c._bindControllersOff && o.stopPropagation(), /^(input|textarea|select|option)$/i.test(a.nodeName) ? c._antiBlur = !1 : o.preventDefault(), l.getParentElement(a, ".se-submenu"))
        o.stopPropagation(), c._notHideToolbar = !0;
      else {
        let d = a.getAttribute("data-command"), h = a.className;
        for (; !d && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          a = a.parentNode, d = a.getAttribute("data-command"), h = a.className;
        (d === c._submenuName || d === c._containerName) && o.stopPropagation();
      }
    },
    addGlobalEvent: function(o, a, d) {
      return n.iframe && c._ww.addEventListener(o, a, d), c._w.addEventListener(o, a, d), {
        type: o,
        listener: a,
        useCapture: d
      };
    },
    removeGlobalEvent: function(o, a, d) {
      o && (typeof o == "object" && (a = o.listener, d = o.useCapture, o = o.type), n.iframe && c._ww.removeEventListener(o, a, d), c._w.removeEventListener(o, a, d));
    },
    onClick_toolbar: function(o) {
      let a = o.target, d = a.getAttribute("data-display"), h = a.getAttribute("data-command"), g = a.className;
      for (c.controllersOff(); a.parentNode && !h && !/se-menu-list/.test(g) && !/se-toolbar/.test(g); )
        a = a.parentNode, h = a.getAttribute("data-command"), d = a.getAttribute("data-display"), g = a.className;
      !h && !d || a.disabled || c.actionCall(h, d, a);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(o) {
      if (c.isReadOnly || l.isNonEditable(e.element.wysiwyg)) return;
      if (l._isExcludeSelectionElement(o.target)) {
        o.preventDefault();
        return;
      }
      if (m.removeGlobalEvent(m.__selectionSyncEvent), m.__selectionSyncEvent = m.addGlobalEvent("mouseup", function() {
        c && c._editorRange(), m.removeGlobalEvent(m.__selectionSyncEvent);
      }), typeof x.onMouseDown == "function" && x.onMouseDown(o, c) === !1) return;
      const a = l.getParentElement(o.target, l.isCell);
      if (a) {
        const d = c.plugins.table;
        d && a !== d._fixedCell && !d._shift && c.callPlugin("table", function() {
          d.onTableCellMultiSelect.call(c, a, !1);
        }, null);
      }
      c._isBalloon && m._hideToolbar();
    },
    onClick_wysiwyg: function(o) {
      const a = o.target;
      if (c.isReadOnly)
        return o.preventDefault(), l.isAnchor(a) && f.open(a.href, a.target), !1;
      if (l.isNonEditable(e.element.wysiwyg) || typeof x.onClick == "function" && x.onClick(o, c) === !1) return;
      const d = c.getFileComponent(a);
      if (d) {
        o.preventDefault(), c.selectComponent(d.target, d.pluginName);
        return;
      }
      const h = l.getParentElement(a, "FIGCAPTION");
      if (h && l.isNonEditable(h) && (o.preventDefault(), h.focus(), c._isInline && !c._inlineToolbarAttr.isShow)) {
        m._showToolbarInline();
        const y = function() {
          m._hideToolbar(), h.removeEventListener("blur", y);
        };
        h.addEventListener("blur", y);
      }
      if (c._editorRange(), o.detail === 3) {
        let y = c.getRange();
        l.isFormatElement(y.endContainer) && y.endOffset === 0 && (y = c.setRange(y.startContainer, y.startOffset, y.startContainer, y.startContainer.length), c._rangeInfo(y, c.getSelection()));
      }
      const g = c.getSelectionNode(), b = l.getFormatElement(g, null), p = l.getRangeFormatElement(g, null);
      let v = g;
      for (; v && v.firstChild; ) v = v.firstChild;
      const C = c.getFileComponent(v);
      if (C) {
        const y = c.getRange();
        !p && y.startContainer === y.endContainer && c.selectComponent(C.target, C.pluginName);
      } else c.currentFileComponentInfo && c.controllersOff();
      if (!b && !l.isNonEditable(a) && !l.isList(p)) {
        const y = c.getRange();
        if (l.getFormatElement(y.startContainer) === l.getFormatElement(y.endContainer))
          if (l.isList(p)) {
            o.preventDefault();
            const w = l.createElement("LI"), M = g.nextElementSibling;
            w.appendChild(g), p.insertBefore(w, M), c.focus();
          } else !l.isWysiwygDiv(g) && !l.isComponent(g) && (!l.isTable(g) || l.isCell(g)) && c._setDefaultFormat(l.isRangeFormatElement(p) ? "DIV" : n.defaultTag) !== null ? (o.preventDefault(), c.focus()) : m._applyTagEffects();
      } else
        m._applyTagEffects();
      c._isBalloon && f.setTimeout(m._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      m._balloonDelay && f.clearTimeout(m._balloonDelay), m._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(m), 350);
    },
    _toggleToolbarBalloon: function() {
      if (c) {
        c._editorRange();
        const o = c.getRange();
        c._bindControllersOff || !c._isBalloonAlways && o.collapsed ? m._hideToolbar() : m._showToolbarBalloon(o);
      }
    },
    _showToolbarBalloon: function(o) {
      if (!c._isBalloon) return;
      const a = o || c.getRange(), d = e.element.toolbar, h = e.element.topArea, g = c.getSelection();
      let b;
      if (c._isBalloonAlways && a.collapsed)
        b = !0;
      else if (g.focusNode === g.anchorNode)
        b = g.focusOffset < g.anchorOffset;
      else {
        const H = l.getListChildNodes(a.commonAncestorContainer, null);
        b = l.getArrayIndex(H, g.focusNode) < l.getArrayIndex(H, g.anchorNode);
      }
      let p = a.getClientRects();
      p = p[b ? 0 : p.length - 1];
      const v = c.getGlobalScrollOffset();
      let C = v.left, y = v.top;
      const w = h.offsetWidth, M = m._getEditorOffsets(null), S = M.top, k = M.left;
      if (d.style.top = "-10000px", d.style.visibility = "hidden", d.style.display = "block", !p) {
        const H = c.getSelectionNode();
        if (l.isFormatElement(H)) {
          const P = l.createTextNode(l.zeroWidthSpace);
          c.insertNode(P, null, !1), c.setRange(P, 1, P, 1), c._editorRange(), p = c.getRange().getClientRects(), p = p[b ? 0 : p.length - 1];
        }
        if (!p) {
          const P = l.getOffset(H, e.element.wysiwygFrame);
          p = {
            left: P.left,
            top: P.top,
            right: P.left,
            bottom: P.top + H.offsetHeight,
            noText: !0
          }, C = 0, y = 0;
        }
        b = !0;
      }
      const R = f.Math.round(e.element._arrow.offsetWidth / 2), D = d.offsetWidth, U = d.offsetHeight, I = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (I && (p = {
        left: p.left + I.left,
        top: p.top + I.top,
        right: p.right + I.right - I.width,
        bottom: p.bottom + I.bottom - I.height
      }), m._setToolbarOffset(b, p, d, k, w, C, y, S, R), (D !== d.offsetWidth || U !== d.offsetHeight) && m._setToolbarOffset(b, p, d, k, w, C, y, S, R), n.toolbarContainer) {
        const H = h.parentElement;
        let P = n.toolbarContainer, B = P.offsetLeft, F = P.offsetTop;
        for (; !P.parentElement.contains(H) || !/^(BODY|HTML)$/i.test(P.parentElement.nodeName); )
          P = P.offsetParent, B += P.offsetLeft, F += P.offsetTop;
        d.style.left = d.offsetLeft - B + h.offsetLeft + "px", d.style.top = d.offsetTop - F + h.offsetTop + "px";
      }
      d.style.visibility = "";
    },
    _setToolbarOffset: function(o, a, d, h, g, b, p, v, C) {
      const w = d.offsetWidth, M = a.noText && !o ? 0 : d.offsetHeight, S = (o ? a.left : a.right) - h - w / 2 + b, k = S + w - g;
      let R = (o ? a.top - M - C : a.bottom + C) - (a.noText ? 0 : v) + p, D = S < 0 ? 1 : k < 0 ? S : S - k - 1 - 1, U = !1;
      const I = R + (o ? m._getEditorOffsets(null).top : d.offsetHeight - e.element.wysiwyg.offsetHeight);
      !o && I > 0 && m._getPageBottomSpace() < I ? (o = !0, U = !0) : o && u.documentElement.offsetTop > I && (o = !1, U = !0), U && (R = (o ? a.top - M - C : a.bottom + C) - (a.noText ? 0 : v) + p), d.style.left = f.Math.floor(D) + "px", d.style.top = f.Math.floor(R) + "px", o ? (l.removeClass(e.element._arrow, "se-arrow-up"), l.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = M + "px") : (l.removeClass(e.element._arrow, "se-arrow-down"), l.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const H = f.Math.floor(w / 2 + (S - D));
      e.element._arrow.style.left = (H + C > d.offsetWidth ? d.offsetWidth - C : H < C ? C : H) + "px";
    },
    _showToolbarInline: function() {
      if (!c._isInline) return;
      const o = e.element.toolbar;
      n.toolbarContainer ? o.style.position = "relative" : o.style.position = "absolute", o.style.visibility = "hidden", o.style.display = "block", c._inlineToolbarAttr.width = o.style.width = n.toolbarWidth, c._inlineToolbarAttr.top = o.style.top = (n.toolbarContainer ? 0 : -1 - o.offsetHeight) + "px", typeof x.showInline == "function" && x.showInline(o, e, c), m.onScroll_window(), c._inlineToolbarAttr.isShow = !0, o.style.visibility = "";
    },
    _hideToolbar: function() {
      !c._notHideToolbar && !c._variable.isFullScreen && (e.element.toolbar.style.display = "none", c._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(o) {
      if (/AUDIO/.test(o.target.nodeName)) return !1;
      if (c.isReadOnly || c.isDisabled)
        return o.preventDefault(), o.stopPropagation(), c.history.go(c.history.getCurrentIndex()), !1;
      const a = c.getRange(), d = c.getSelectionNode(), h = l.getFormatElement(d, null);
      if (!h && a.collapsed && !l.isComponent(d) && !l.isList(d)) {
        const b = l.getRangeFormatElement(h, null);
        c._setDefaultFormat(l.isRangeFormatElement(b) ? "DIV" : n.defaultTag);
      }
      c._editorRange();
      const g = (o.data === null ? "" : o.data === void 0 ? " " : o.data) || "";
      if (!c._charCount(g))
        return o.preventDefault(), o.stopPropagation(), !1;
      typeof x.onInput == "function" && x.onInput(o, c) === !1 || c.history.push(!0);
    },
    _isUneditableNode: function(o, a) {
      const d = a ? o.startContainer : o.endContainer, h = a ? o.startOffset : o.endOffset, g = a ? "previousSibling" : "nextSibling", b = d.nodeType === 1;
      let p;
      return b ? (p = m._isUneditableNode_getSibling(d.childNodes[h], g, d), p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false") : (p = m._isUneditableNode_getSibling(d, g, d), c.isEdgePoint(d, h, a ? "start" : "end") && p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(o, a, d) {
      if (!o) return null;
      let h = o[a];
      if (!h)
        if (h = l.getFormatElement(d), h = h ? h[a] : null, h && !l.isComponent(h)) h = a === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(o) {
      let a = c.getSelectionNode();
      if (l.isInputElement(a)) return;
      const d = o.keyCode, h = o.shiftKey, g = o.ctrlKey || o.metaKey || d === 91 || d === 92 || d === 224, b = o.altKey;
      if (m._IEisComposing = d === 229, !g && c.isReadOnly && !m._cursorMoveKeyCode.test(d))
        return o.preventDefault(), !1;
      if (c.submenuOff(), c._isBalloon && m._hideToolbar(), typeof x.onKeyDown == "function" && x.onKeyDown(o, c) === !1) return;
      if (g && m._shortcutCommand(d, h))
        return m._onShortcutKey = !0, o.preventDefault(), o.stopPropagation(), !1;
      m._onShortcutKey && (m._onShortcutKey = !1), d === 13 && l.isFormatElement(c.getRange().startContainer) && (c._resetRangeToTextNode(), a = c.getSelectionNode());
      const p = c.getRange(), v = !p.collapsed || p.startContainer !== p.endContainer, C = c._fileManager.pluginRegExp.test(c.currentControllerName) ? c.currentControllerName : "";
      let y = l.getFormatElement(a, null) || a, w = l.getRangeFormatElement(y, null);
      if (!(/37|38|39|40/.test(o.keyCode) && m._onKeyDown_wysiwyg_arrowKey(o) === !1)) {
        switch (d) {
          case 8:
            if (!v && C) {
              o.preventDefault(), o.stopPropagation(), c.plugins[C].destroy.call(c);
              break;
            }
            if (v && m._hardDelete()) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if (!l.isFormatElement(y) && !e.element.wysiwyg.firstElementChild && !l.isComponent(a) && c._setDefaultFormat(n.defaultTag) !== null)
              return o.preventDefault(), o.stopPropagation(), !1;
            if (!v && !y.previousElementSibling && p.startOffset === 0 && !a.previousSibling && !l.isListCell(y) && l.isFormatElement(y) && (!l.isFreeFormatElement(y) || l.isClosureFreeFormatElement(y))) {
              if (l.isClosureRangeFormatElement(y.parentNode))
                return o.preventDefault(), o.stopPropagation(), !1;
              if (l.isWysiwygDiv(y.parentNode) && y.childNodes.length <= 1 && (!y.firstChild || l.onlyZeroWidthSpace(y.textContent))) {
                if (o.preventDefault(), o.stopPropagation(), y.nodeName.toUpperCase() === n.defaultTag.toUpperCase()) {
                  y.innerHTML = "<br>";
                  const N = y.attributes;
                  for (; N[0]; )
                    y.removeAttribute(N[0].name);
                } else {
                  const N = l.createElement(n.defaultTag);
                  N.innerHTML = "<br>", y.parentElement.replaceChild(N, y);
                }
                return c.nativeFocus(), !1;
              }
            }
            const S = p.startContainer;
            if (y && !y.previousElementSibling && p.startOffset === 0 && S.nodeType === 3 && !l.isFormatElement(S.parentNode)) {
              let N = S.parentNode.previousSibling;
              const V = S.parentNode.nextSibling;
              N || (V ? N = V : (N = l.createElement("BR"), y.appendChild(N)));
              let L = S;
              for (; y.contains(L) && !L.previousSibling; )
                L = L.parentNode;
              if (!y.contains(L)) {
                S.textContent = "", l.removeItemAllParents(S, null, y);
                break;
              }
            }
            if (m._isUneditableNode(p, !0)) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            !v && c._isEdgeFormat(p.startContainer, p.startOffset, "start") && l.isFormatElement(y.previousElementSibling) && (c._formatAttrsTemp = y.previousElementSibling.attributes);
            const k = p.commonAncestorContainer;
            if (y = l.getFormatElement(p.startContainer, null), w = l.getRangeFormatElement(y, null), w && y && !l.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
              if (l.isListCell(y) && l.isList(w) && (l.isListCell(w.parentNode) || y.previousElementSibling) && (a === y || a.nodeType === 3 && (!a.previousSibling || l.isList(a.previousSibling))) && (l.getFormatElement(p.startContainer, null) !== l.getFormatElement(p.endContainer, null) ? w.contains(p.startContainer) : p.startOffset === 0 && p.collapsed)) {
                if (p.startContainer !== p.endContainer)
                  o.preventDefault(), c.removeNode(), p.startContainer.nodeType === 3 && c.setRange(p.startContainer, p.startContainer.textContent.length, p.startContainer, p.startContainer.textContent.length), c.history.push(!0);
                else {
                  let N = y.previousElementSibling || w.parentNode;
                  if (l.isListCell(N)) {
                    o.preventDefault();
                    let V = N;
                    if (!N.contains(y) && l.isListCell(V) && l.isList(V.lastElementChild)) {
                      for (V = V.lastElementChild.lastElementChild; l.isListCell(V) && l.isList(V.lastElementChild); )
                        V = V.lastElementChild && V.lastElementChild.lastElementChild;
                      N = V;
                    }
                    let L = N === w.parentNode ? w.previousSibling : N.lastChild;
                    L || (L = l.createTextNode(l.zeroWidthSpace), w.parentNode.insertBefore(L, w.parentNode.firstChild));
                    const O = L.nodeType === 3 ? L.textContent.length : 1, Y = y.childNodes;
                    let Z = L, X = Y[0];
                    for (; X = Y[0]; )
                      N.insertBefore(X, Z.nextSibling), Z = X;
                    l.removeItem(y), w.children.length === 0 && l.removeItem(w), c.setRange(L, O, L, O), c.history.push(!0);
                  }
                }
                break;
              }
              if (!v && p.startOffset === 0) {
                let N = !0, V = k;
                for (; V && V !== w && !l.isWysiwygDiv(V); ) {
                  if (V.previousSibling && (V.previousSibling.nodeType === 1 || !l.onlyZeroWidthSpace(V.previousSibling.textContent.trim()))) {
                    N = !1;
                    break;
                  }
                  V = V.parentNode;
                }
                if (N && w.parentNode) {
                  o.preventDefault(), c.detachRangeFormatElement(w, l.isListCell(y) ? [y] : null, null, !1, !1), c.history.push(!0);
                  break;
                }
              }
            }
            if (!v && y && (p.startOffset === 0 || a === y && y.childNodes[p.startOffset])) {
              const N = a === y ? y.childNodes[p.startOffset] : a, V = y.previousSibling, L = (k.nodeType === 3 || l.isBreak(k)) && !k.previousSibling && p.startOffset === 0;
              if (N && !N.previousSibling && (k && l.isComponent(k.previousSibling) || L && l.isComponent(V))) {
                const O = c.getFileComponent(V);
                O ? (o.preventDefault(), o.stopPropagation(), y.textContent.length === 0 && l.removeItem(y), c.selectComponent(O.target, O.pluginName) === !1 && c.blur()) : l.isComponent(V) && (o.preventDefault(), o.stopPropagation(), l.removeItem(V));
                break;
              }
              if (N && l.isNonEditable(N.previousSibling)) {
                o.preventDefault(), o.stopPropagation(), l.removeItem(N.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              o.preventDefault(), o.stopPropagation(), c.plugins[C].destroy.call(c);
              break;
            }
            if (v && m._hardDelete()) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if (!v && c._isEdgeFormat(p.endContainer, p.endOffset, "end") && !y.nextSibling) {
              o.preventDefault(), o.stopPropagation();
              return;
            }
            if (m._isUneditableNode(p, !1)) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if ((l.isFormatElement(a) || a.nextSibling === null || l.onlyZeroWidthSpace(a.nextSibling) && a.nextSibling.nextSibling === null) && p.startOffset === a.textContent.length) {
              const N = y.nextElementSibling;
              if (!N) break;
              if (l.isComponent(N)) {
                if (o.preventDefault(), l.onlyZeroWidthSpace(y) && (l.removeItem(y), l.isTable(N))) {
                  let L = l.getChildElement(N, l.isCell, !1);
                  L = L.firstElementChild || L, c.setRange(L, 0, L, 0);
                  break;
                }
                const V = c.getFileComponent(N);
                V ? (o.stopPropagation(), c.selectComponent(V.target, V.pluginName) === !1 && c.blur()) : l.isComponent(N) && (o.stopPropagation(), l.removeItem(N));
                break;
              }
            }
            if (!v && (c.isEdgePoint(p.endContainer, p.endOffset) || a === y && y.childNodes[p.startOffset])) {
              const N = a === y && y.childNodes[p.startOffset] || a;
              if (N && l.isNonEditable(N.nextSibling)) {
                o.preventDefault(), o.stopPropagation(), l.removeItem(N.nextSibling);
                break;
              } else if (l.isComponent(N)) {
                o.preventDefault(), o.stopPropagation(), l.removeItem(N);
                break;
              }
            }
            if (!v && c._isEdgeFormat(p.endContainer, p.endOffset, "end") && l.isFormatElement(y.nextElementSibling) && (c._formatAttrsTemp = y.attributes), y = l.getFormatElement(p.startContainer, null), w = l.getRangeFormatElement(y, null), l.isListCell(y) && l.isList(w) && (a === y || a.nodeType === 3 && (!a.nextSibling || l.isList(a.nextSibling)) && (l.getFormatElement(p.startContainer, null) !== l.getFormatElement(p.endContainer, null) ? w.contains(p.endContainer) : p.endOffset === a.textContent.length && p.collapsed))) {
              p.startContainer !== p.endContainer && c.removeNode();
              let N = l.getArrayItem(y.children, l.isList, !1);
              if (N = N || y.nextElementSibling || w.parentNode.nextElementSibling, N && (l.isList(N) || l.getArrayItem(N.children, l.isList, !1))) {
                o.preventDefault();
                let V, L;
                if (l.isList(N)) {
                  const O = N.firstElementChild;
                  for (L = O.childNodes, V = L[0]; L[0]; )
                    y.insertBefore(L[0], N);
                  l.removeItem(O);
                } else {
                  for (V = N.firstChild, L = N.childNodes; L[0]; )
                    y.appendChild(L[0]);
                  l.removeItem(N);
                }
                c.setRange(V, 0, V, 0), c.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || n.tabDisable || (o.preventDefault(), g || b || l.isWysiwygDiv(a))) break;
            const R = !p.collapsed || c.isEdgePoint(p.startContainer, p.startOffset), D = c.getSelectedElements(null);
            a = c.getSelectionNode();
            const U = [];
            let I = [], H = l.isListCell(D[0]), P = l.isListCell(D[D.length - 1]), B = { sc: p.startContainer, so: p.startOffset, ec: p.endContainer, eo: p.endOffset };
            for (let N = 0, V = D.length, L; N < V; N++)
              if (L = D[N], l.isListCell(L)) {
                if (!L.previousElementSibling && !h)
                  continue;
                U.push(L);
              } else
                I.push(L);
            if (U.length > 0 && R && c.plugins.list)
              B = c.plugins.list.editInsideList.call(c, h, U);
            else {
              const N = l.getParentElement(a, l.isCell);
              if (N && R) {
                const V = l.getParentElement(N, "table"), L = l.getListChildren(V, l.isCell);
                let O = h ? l.prevIdx(L, N) : l.nextIdx(L, N);
                O === L.length && !h && (O = 0), O === -1 && h && (O = L.length - 1);
                let Y = L[O];
                if (!Y) break;
                Y = Y.firstElementChild || Y, c.setRange(Y, 0, Y, 0);
                break;
              }
              I = I.concat(U), H = P = null;
            }
            if (I.length > 0)
              if (h) {
                const N = I.length - 1;
                for (let O = 0, Y; O <= N; O++) {
                  Y = I[O].childNodes;
                  for (let Z = 0, X = Y.length, q; Z < X && (q = Y[Z], !!q); Z++)
                    if (!l.onlyZeroWidthSpace(q)) {
                      /^\s{1,4}$/.test(q.textContent) ? l.removeItem(q) : /^\s{1,4}/.test(q.textContent) && (q.textContent = q.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const V = l.getChildElement(I[0], "text", !1), L = l.getChildElement(I[N], "text", !0);
                !H && V && (B.sc = V, B.so = 0), !P && L && (B.ec = L, B.eo = L.textContent.length);
              } else {
                const N = l.createTextNode(new f.Array(c._variable.tabSize + 1).join(" "));
                if (I.length === 1) {
                  if (!c.insertNode(N, null, !0)) return !1;
                  H || (B.sc = N, B.so = N.length), P || (B.ec = N, B.eo = N.length);
                } else {
                  const V = I.length - 1;
                  for (let Y = 0, Z; Y <= V; Y++)
                    Z = I[Y].firstChild, Z && (l.isBreak(Z) ? I[Y].insertBefore(N.cloneNode(!1), Z) : Z.textContent = N.textContent + Z.textContent);
                  const L = l.getChildElement(I[0], "text", !1), O = l.getChildElement(I[V], "text", !0);
                  !H && L && (B.sc = L, B.so = 0), !P && O && (B.ec = O, B.eo = O.textContent.length);
                }
              }
            c.setRange(B.sc, B.so, B.ec, B.eo), c.history.push(!1);
            break;
          case 13:
            const F = l.getFreeFormatElement(a, null);
            if (c._charTypeHTML) {
              let N = "";
              if (!h && F || h ? N = "<br>" : N = "<" + y.nodeName + "><br></" + y.nodeName + ">", !c.checkCharCount(N, "byte-html"))
                return o.preventDefault(), !1;
            }
            if (!h && !C) {
              const N = c._isEdgeFormat(p.endContainer, p.endOffset, "end"), V = c._isEdgeFormat(p.startContainer, p.startOffset, "start");
              if (N && (/^H[1-6]$/i.test(y.nodeName) || /^HR$/i.test(y.nodeName))) {
                m._enterPrevent(o);
                let L = null;
                const O = c.appendFormatTag(y, n.defaultTag);
                if (N && N.length > 0) {
                  L = N.pop();
                  const Y = L;
                  for (; N.length > 0; )
                    L = L.appendChild(N.pop());
                  O.appendChild(Y);
                }
                if (L = L ? L.appendChild(O.firstChild) : O.firstChild, l.isBreak(L)) {
                  const Y = l.createTextNode(l.zeroWidthSpace);
                  L.parentNode.insertBefore(Y, L), c.setRange(Y, 1, Y, 1);
                } else
                  c.setRange(L, 0, L, 0);
                break;
              } else if (w && y && !l.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
                const L = c.getRange();
                if (c.isEdgePoint(L.endContainer, L.endOffset) && l.isList(a.nextSibling)) {
                  m._enterPrevent(o);
                  const O = l.createElement("LI"), Y = l.createElement("BR");
                  O.appendChild(Y), y.parentNode.insertBefore(O, y.nextElementSibling), O.appendChild(a.nextSibling), c.setRange(Y, 1, Y, 1);
                  break;
                }
                if ((L.commonAncestorContainer.nodeType !== 3 || !L.commonAncestorContainer.nextElementSibling) && l.onlyZeroWidthSpace(y.innerText.trim()) && !l.isListCell(y.nextElementSibling)) {
                  m._enterPrevent(o);
                  let O = null;
                  if (l.isListCell(w.parentNode)) {
                    const Y = y.parentNode.parentNode;
                    w = Y.parentNode;
                    const Z = l.createElement("LI");
                    Z.innerHTML = "<br>", l.copyTagAttributes(Z, y, n.lineAttrReset), O = Z, w.insertBefore(O, Y.nextElementSibling);
                  } else {
                    const Y = l.isCell(w.parentNode) ? "DIV" : l.isList(w.parentNode) ? "LI" : l.isFormatElement(w.nextElementSibling) && !l.isRangeFormatElement(w.nextElementSibling) ? w.nextElementSibling.nodeName : l.isFormatElement(w.previousElementSibling) && !l.isRangeFormatElement(w.previousElementSibling) ? w.previousElementSibling.nodeName : n.defaultTag;
                    O = l.createElement(Y), l.copyTagAttributes(O, y, n.lineAttrReset);
                    const Z = c.detachRangeFormatElement(w, [y], null, !0, !0);
                    Z.cc.insertBefore(O, Z.ec);
                  }
                  O.innerHTML = "<br>", l.removeItemAllParents(y, null, null), c.setRange(O, 1, O, 1);
                  break;
                }
              }
              if (F) {
                m._enterPrevent(o);
                const L = a === F, O = c.getSelection(), Y = a.childNodes, Z = O.focusOffset, X = a.previousElementSibling, q = a.nextSibling;
                if (!l.isClosureFreeFormatElement(F) && Y && (L && p.collapsed && Y.length - 1 <= Z + 1 && l.isBreak(Y[Z]) && (!Y[Z + 1] || (!Y[Z + 2] || l.onlyZeroWidthSpace(Y[Z + 2].textContent)) && Y[Z + 1].nodeType === 3 && l.onlyZeroWidthSpace(Y[Z + 1].textContent)) && Z > 0 && l.isBreak(Y[Z - 1]) || !L && l.onlyZeroWidthSpace(a.textContent) && l.isBreak(X) && (l.isBreak(X.previousSibling) || !l.onlyZeroWidthSpace(X.previousSibling.textContent)) && (!q || !l.isBreak(q) && l.onlyZeroWidthSpace(q.textContent)))) {
                  L ? l.removeItem(Y[Z - 1]) : l.removeItem(a);
                  const $ = c.appendFormatTag(F, l.isFormatElement(F.nextElementSibling) && !l.isRangeFormatElement(F.nextElementSibling) ? F.nextElementSibling : null);
                  l.copyFormatAttributes($, F), c.setRange($, 1, $, 1);
                  break;
                }
                if (L) {
                  x.insertHTML(p.collapsed && l.isBreak(p.startContainer.childNodes[p.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let $ = O.focusNode;
                  const G = O.focusOffset;
                  F === $ && ($ = $.childNodes[G - Z > 1 ? G - 1 : G]), c.setRange($, 1, $, 1);
                } else {
                  const $ = O.focusNode.nextSibling, G = l.createElement("BR");
                  c.insertNode(G, null, !1);
                  const ee = G.previousSibling, ie = G.nextSibling;
                  !l.isBreak($) && !l.isBreak(ee) && (!ie || l.onlyZeroWidthSpace(ie)) ? (G.parentNode.insertBefore(G.cloneNode(!1), G), c.setRange(G, 1, G, 1)) : c.setRange(ie, 0, ie, 0);
                }
                m._onShortcutKey = !0;
                break;
              }
              if (p.collapsed && (V || N)) {
                m._enterPrevent(o);
                const L = l.createElement("BR"), O = l.createElement(y.nodeName);
                l.copyTagAttributes(O, y, n.lineAttrReset);
                let Y = L;
                do {
                  if (!l.isBreak(a) && a.nodeType === 1) {
                    const Z = a.cloneNode(!1);
                    Z.appendChild(Y), Y = Z;
                  }
                  a = a.parentNode;
                } while (y !== a && y.contains(a));
                O.appendChild(Y), y.parentNode.insertBefore(O, V && !N ? y : y.nextElementSibling), N && c.setRange(L, 1, L, 1);
                break;
              }
              if (y) {
                o.stopPropagation();
                let L, O = 0;
                if (p.collapsed)
                  l.onlyZeroWidthSpace(y) ? L = c.appendFormatTag(y, y.cloneNode(!1)) : L = l.splitElement(p.endContainer, p.endOffset, l.getElementDepth(y));
                else {
                  const Y = l.getFormatElement(p.startContainer, null) !== l.getFormatElement(p.endContainer, null), Z = y.cloneNode(!1);
                  Z.innerHTML = "<br>";
                  const X = p.commonAncestorContainer, q = X === p.startContainer && X === p.endContainer && l.onlyZeroWidthSpace(X) ? p : c.removeNode();
                  if (L = l.getFormatElement(q.container, null), !L) {
                    l.isWysiwygDiv(q.container) && (m._enterPrevent(o), e.element.wysiwyg.appendChild(Z), L = Z, l.copyTagAttributes(L, y, n.lineAttrReset), c.setRange(L, O, L, O));
                    break;
                  }
                  const $ = l.getRangeFormatElement(q.container);
                  if (L = L.contains($) ? l.getChildElement($, l.getFormatElement.bind(l)) : L, Y) {
                    if (N && !V)
                      L.parentNode.insertBefore(Z, !q.prevContainer || q.container === q.prevContainer ? L.nextElementSibling : L), L = Z, O = 0;
                    else if (O = q.offset, V) {
                      const G = L.parentNode.insertBefore(Z, L);
                      N && (L = G, O = 0);
                    }
                  } else
                    N && V ? (L.parentNode.insertBefore(Z, q.prevContainer && q.container === q.prevContainer ? L.nextElementSibling : L), L = Z, O = 0) : L = l.splitElement(q.container, q.offset, l.getElementDepth(y));
                }
                m._enterPrevent(o), l.copyTagAttributes(L, y, n.lineAttrReset), c.setRange(L, O, L, O);
                break;
              }
            }
            if (v) break;
            if (w && l.getParentElement(w, "FIGCAPTION") && l.getParentElement(w, l.isList) && (m._enterPrevent(o), y = c.appendFormatTag(y, null), c.setRange(y, 0, y, 0)), C) {
              o.preventDefault(), o.stopPropagation(), c.containerOff(), c.controllersOff();
              const N = e[C], V = N._container, L = V.previousElementSibling || V.nextElementSibling;
              let O = null;
              l.isListCell(V.parentNode) ? O = l.createElement("BR") : (O = l.createElement(l.isFormatElement(L) && !l.isRangeFormatElement(L) ? L.nodeName : n.defaultTag), O.innerHTML = "<br>"), h ? V.parentNode.insertBefore(O, V) : V.parentNode.insertBefore(O, V.nextElementSibling), c.callPlugin(C, function() {
                c.selectComponent(N._element, C) === !1 && c.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return o.preventDefault(), o.stopPropagation(), c.controllersOff(), !1;
            break;
        }
        if (h && d === 16) {
          o.preventDefault(), o.stopPropagation();
          const S = c.plugins.table;
          if (S && !S._shift && !S._ref) {
            const k = l.getParentElement(y, l.isCell);
            if (k) {
              S.onTableCellMultiSelect.call(c, k, !0);
              return;
            }
          }
        } else if (h && (l.isOSX_IOS ? b : g) && d === 32) {
          o.preventDefault(), o.stopPropagation();
          const S = c.insertNode(l.createTextNode(" "));
          if (S) {
            c.setRange(S, S.length, S, S.length);
            return;
          }
        }
        if (l.isIE && !g && !b && !v && !m._nonTextKeyCode.test(d) && l.isBreak(p.commonAncestorContainer)) {
          const S = l.createTextNode(l.zeroWidthSpace);
          c.insertNode(S, null, !1), c.setRange(S, 1, S, 1);
        }
        m._directionKeyCode.test(d) && (f.setTimeout(c._editorRange.bind(c), 0), m._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(o) {
      if (o.shiftKey) return;
      let a = c.getSelectionNode();
      const d = function(b, p) {
        if (p || (p = 0), o.preventDefault(), o.stopPropagation(), !b) return;
        let v = c.getFileComponent(b);
        v ? c.selectComponent(v.target, v.pluginName) : (c.setRange(b, p, b, p), c.controllersOff());
      }, h = l.getParentElement(a, "table");
      if (h) {
        const b = l.getParentElement(a, "tr"), p = l.getParentElement(a, "td");
        let v = p, C = p;
        if (p) {
          for (; v && v.firstChild; ) v = v.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let y = a;
        for (; y && y.firstChild; ) y = y.firstChild;
        const w = y === v, M = y === C;
        let S = null, k = 0;
        if (o.keyCode === 38 && w) {
          const R = b && b.previousElementSibling;
          for (R ? S = R.children[p.cellIndex] : S = l.getPreviousDeepestNode(h, c.context.element.wysiwyg); S && S.lastChild; ) S = S.lastChild;
          S && (k = S.textContent.length);
        } else if (o.keyCode === 40 && M) {
          const R = b && b.nextElementSibling;
          for (R ? S = R.children[p.cellIndex] : S = l.getNextDeepestNode(h, c.context.element.wysiwyg); S && S.firstChild; ) S = S.firstChild;
        }
        if (S)
          return d(S, k), !1;
      }
      const g = c.getFileComponent(a);
      if (g) {
        const b = /37|38/.test(o.keyCode), p = /39|40/.test(o.keyCode);
        if (b) {
          const v = l.getPreviousDeepestNode(g.target, c.context.element.wysiwyg);
          d(v, v && v.textContent.length);
        } else if (p) {
          const v = l.getNextDeepestNode(g.target, c.context.element.wysiwyg);
          d(v);
        }
      }
    },
    onKeyUp_wysiwyg: function(o) {
      if (m._onShortcutKey) return;
      c._editorRange();
      const a = o.keyCode, d = o.ctrlKey || o.metaKey || a === 91 || a === 92 || a === 224, h = o.altKey;
      if (c.isReadOnly) {
        !d && m._cursorMoveKeyCode.test(a) && m._applyTagEffects();
        return;
      }
      const g = c.getRange();
      let b = c.getSelectionNode();
      if (c._isBalloon && (c._isBalloonAlways && a !== 27 || !g.collapsed))
        if (c._isBalloonAlways)
          a !== 27 && m._showToolbarBalloonDelay();
        else {
          m._showToolbarBalloon();
          return;
        }
      let p = b;
      for (; p && p.firstChild; ) p = p.firstChild;
      const v = c.getFileComponent(p);
      if (!(o.keyCode === 16 || o.shiftKey) && v ? c.selectComponent(v.target, v.pluginName) : c.currentFileComponentInfo && c.controllersOff(), a === 8 && l.isWysiwygDiv(b) && b.textContent === "" && b.children.length === 0) {
        o.preventDefault(), o.stopPropagation(), b.innerHTML = "";
        const S = l.createElement(l.isFormatElement(c._variable.currentNodes[0]) ? c._variable.currentNodes[0] : n.defaultTag);
        S.innerHTML = "<br>", b.appendChild(S), c.setRange(S, 0, S, 0), m._applyTagEffects(), c.history.push(!1);
        return;
      }
      const C = l.getFormatElement(b, null), y = l.getRangeFormatElement(b, null), w = c._formatAttrsTemp;
      if (w) {
        for (let S = 0, k = w.length; S < k; S++) {
          if (a === 13 && /^id$/i.test(w[S].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(w[S].name, w[S].value);
        }
        c._formatAttrsTemp = null;
      }
      if (!C && g.collapsed && !l.isComponent(b) && !l.isList(b) && c._setDefaultFormat(l.isRangeFormatElement(y) ? "DIV" : n.defaultTag) !== null && (b = c.getSelectionNode()), !d && !h && !m._nonTextKeyCode.test(a) && b.nodeType === 3 && l.zeroWidthRegExp.test(b.textContent) && !(o.isComposing !== void 0 ? o.isComposing : m._IEisComposing)) {
        let S = g.startOffset, k = g.endOffset;
        const R = (b.textContent.substring(0, k).match(m._frontZeroWidthReg) || "").length;
        S = g.startOffset - R, k = g.endOffset - R, b.textContent = b.textContent.replace(l.zeroWidthRegExp, ""), c.setRange(b, S < 0 ? 0 : S, b, k < 0 ? 0 : k);
      }
      m._deleteKeyCode.test(a) && C && l.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", c.setRange(C, 0, C, 0)), c._charCount(""), !(typeof x.onKeyUp == "function" && x.onKeyUp(o, c) === !1) && !d && !h && !m._historyIgnoreKeyCode.test(a) && c.history.push(!0);
    },
    onScroll_wysiwyg: function(o) {
      c.controllersOff(), c._isBalloon && m._hideToolbar(), typeof x.onScroll == "function" && x.onScroll(o, c);
    },
    onFocus_wysiwyg: function(o) {
      c._antiBlur || (c.hasFocus = !0, f.setTimeout(m._applyTagEffects), c._isInline && m._showToolbarInline(), typeof x.onFocus == "function" && x.onFocus(o, c));
    },
    onBlur_wysiwyg: function(o) {
      c._antiBlur || c._variable.isCodeView || (c.hasFocus = !1, c.effectNode = null, c.controllersOff(), (c._isInline || c._isBalloon) && m._hideToolbar(), c._setKeyEffect([]), c._variable.currentNodes = [], c._variable.currentNodesMap = [], n.showPathLabel && (e.element.navigation.textContent = ""), typeof x.onBlur == "function" && x.onBlur(o, c, this));
    },
    onMouseDown_resizingBar: function(o) {
      o.stopPropagation(), c.submenuOff(), c.controllersOff(), c._variable.resizeClientY = o.clientY, e.element.resizeBackground.style.display = "block";
      function a() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", m._resize_editor), u.removeEventListener("mouseup", a);
      }
      u.addEventListener("mousemove", m._resize_editor), u.addEventListener("mouseup", a);
    },
    _resize_editor: function(o) {
      const a = e.element.editorArea.offsetHeight + (o.clientY - c._variable.resizeClientY), d = a < c._variable.minResizingSize ? c._variable.minResizingSize : a;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = d + "px", c._variable.resizeClientY = o.clientY, l.isResizeObserverSupported || c.__callResizeFunction(d, null);
    },
    onResize_window: function() {
      l.isResizeObserverSupported || c.resetResponsiveToolbar();
      const o = e.element.toolbar, a = o.style.display === "none" || c._isInline && !c._inlineToolbarAttr.isShow;
      if (!(o.offsetWidth === 0 && !a)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), c.submenuActiveButton && c.submenu && c._setMenuPosition(c.submenuActiveButton, c.submenu), c._variable.isFullScreen) {
          c._variable.innerHeight_fullScreen += f.innerHeight - o.offsetHeight - c._variable.innerHeight_fullScreen, e.element.editorArea.style.height = c._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (c._variable.isCodeView && c._isInline) {
          m._showToolbarInline();
          return;
        }
        c._iframeAutoHeight(), c._sticky && (o.style.width = e.element.topArea.offsetWidth - 2 + "px", m.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (c._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || n.stickyToolbar < 0) return;
      const o = e.element, a = o.editorArea.offsetHeight, d = (this.scrollY || u.documentElement.scrollTop) + n.stickyToolbar, h = m._getEditorOffsets(n.toolbarContainer).top - (c._isInline ? o.toolbar.offsetHeight : 0), g = c._isInline && d - h > 0 ? d - h - e.element.toolbar.offsetHeight : 0;
      d < h ? m._offStickyToolbar() : d + c._variable.minResizingSize >= a + h ? (c._sticky || m._onStickyToolbar(g), o.toolbar.style.top = g + a + h + n.stickyToolbar - d - c._variable.minResizingSize + "px") : d >= h && m._onStickyToolbar(g);
    },
    _getEditorOffsets: function(o) {
      let a = o || e.element.topArea, d = 0, h = 0, g = 0;
      for (; a; )
        d += a.offsetTop, h += a.offsetLeft, g += a.scrollTop, a = a.offsetParent;
      return {
        top: d,
        left: h,
        scroll: g
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (m._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(o) {
      const a = e.element;
      !c._isInline && !n.toolbarContainer && (a._stickyDummy.style.height = a.toolbar.offsetHeight + "px", a._stickyDummy.style.display = "block"), a.toolbar.style.top = n.stickyToolbar + o + "px", a.toolbar.style.width = c._isInline ? c._inlineToolbarAttr.width : a.toolbar.offsetWidth + "px", l.addClass(a.toolbar, "se-toolbar-sticky"), c._sticky = !0;
    },
    _offStickyToolbar: function() {
      const o = e.element;
      o._stickyDummy.style.display = "none", o.toolbar.style.top = c._isInline ? c._inlineToolbarAttr.top : "", o.toolbar.style.width = c._isInline ? c._inlineToolbarAttr.width : "", o.editorArea.style.marginTop = "", l.removeClass(o.toolbar, "se-toolbar-sticky"), c._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      c._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const o = c.getRange(), a = o.startContainer, d = o.endContainer, h = l.getRangeFormatElement(a), g = l.getRangeFormatElement(d), b = l.isCell(h), p = l.isCell(g), v = o.commonAncestorContainer;
      if ((b && !h.previousElementSibling && !h.parentElement.previousElementSibling || p && !g.nextElementSibling && !g.parentElement.nextElementSibling) && h !== g)
        if (!b)
          l.removeItem(l.getParentElement(g, function(w) {
            return v === w.parentNode;
          }));
        else if (!p)
          l.removeItem(l.getParentElement(h, function(w) {
            return v === w.parentNode;
          }));
        else
          return l.removeItem(l.getParentElement(h, function(w) {
            return v === w.parentNode;
          })), c.nativeFocus(), !0;
      const C = a.nodeType === 1 ? l.getParentElement(a, ".se-component") : null, y = d.nodeType === 1 ? l.getParentElement(d, ".se-component") : null;
      return C && l.removeItem(C), y && l.removeItem(y), !1;
    },
    onPaste_wysiwyg: function(o) {
      const a = l.isIE ? f.clipboardData : o.clipboardData;
      return a ? m._dataTransferAction("paste", o, a) : !0;
    },
    _setClipboardComponent: function(o, a, d) {
      o.preventDefault(), o.stopPropagation(), d.setData("text/html", a.component.outerHTML);
    },
    onCopy_wysiwyg: function(o) {
      const a = l.isIE ? f.clipboardData : o.clipboardData;
      if (typeof x.onCopy == "function" && x.onCopy(o, a, c) === !1)
        return o.preventDefault(), o.stopPropagation(), !1;
      const d = c.currentFileComponentInfo;
      d && !l.isIE && (m._setClipboardComponent(o, d, a), l.addClass(d.component, "se-component-copy"), f.setTimeout(function() {
        l.removeClass(d.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(o) {
      if (typeof x.onSave == "function") {
        x.onSave(o, c);
        return;
      }
    },
    onCut_wysiwyg: function(o) {
      const a = l.isIE ? f.clipboardData : o.clipboardData;
      if (typeof x.onCut == "function" && x.onCut(o, a, c) === !1)
        return o.preventDefault(), o.stopPropagation(), !1;
      const d = c.currentFileComponentInfo;
      d && !l.isIE && (m._setClipboardComponent(o, d, a), l.removeItem(d.component), c.controllersOff()), f.setTimeout(function() {
        c.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(o) {
      if (c.isReadOnly || l.isIE)
        return o.preventDefault(), o.stopPropagation(), !1;
      const a = o.dataTransfer;
      return a ? (m._setDropLocationSelection(o), c.removeNode(), document.body.contains(c.currentControllerTarget) || c.controllersOff(), m._dataTransferAction("drop", o, a)) : !0;
    },
    _setDropLocationSelection: function(o) {
      const a = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let d = null;
      if (o.rangeParent ? (a.startContainer = o.rangeParent, a.startOffset = o.rangeOffset, a.endContainer = o.rangeParent, a.endOffset = o.rangeOffset) : c._wd.caretRangeFromPoint ? d = c._wd.caretRangeFromPoint(o.clientX, o.clientY) : d = c.getRange(), d && (a.startContainer = d.startContainer, a.startOffset = d.startOffset, a.endContainer = d.endContainer, a.endOffset = d.endOffset), a.startContainer === a.endContainer) {
        const h = l.getParentElement(a.startContainer, l.isComponent);
        h && (a.startContainer = h, a.startOffset = 0, a.endContainer = h, a.endOffset = 0);
      }
      c.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
    },
    _dataTransferAction: function(o, a, d) {
      let h, g;
      if (l.isIE) {
        h = d.getData("Text");
        const b = c.getRange(), p = l.createElement("DIV"), v = {
          sc: b.startContainer,
          so: b.startOffset,
          ec: b.endContainer,
          eo: b.endOffset
        };
        return p.setAttribute("contenteditable", !0), p.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(p), p.focus(), f.setTimeout(function() {
          g = p.innerHTML, l.removeItem(p), c.setRange(v.sc, v.so, v.ec, v.eo), m._setClipboardData(o, a, h, g, d);
        }), !0;
      } else if (h = d.getData("text/plain"), g = d.getData("text/html"), m._setClipboardData(o, a, h, g, d) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
    },
    _setClipboardData: function(o, a, d, h, g) {
      const b = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = l._HTMLConvertor(d).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), b && (h = h.replace(/\n/g, " "), d = d.replace(/\n/g, " ")), h = c.cleanHTML(h, c.pasteTagsWhitelistRegExp, c.pasteTagsBlacklistRegExp));
      const v = c._charCount(c._charTypeHTML ? h : d);
      if (o === "paste" && typeof x.onPaste == "function") {
        const y = x.onPaste(a, h, v, c);
        if (y === !1)
          return !1;
        if (typeof y == "string") {
          if (!y) return !1;
          h = y;
        }
      }
      if (o === "drop" && typeof x.onDrop == "function") {
        const y = x.onDrop(a, h, v, c);
        if (y === !1)
          return !1;
        if (typeof y == "string") {
          if (!y) return !1;
          h = y;
        }
      }
      const C = g.files;
      if (C.length > 0 && !b)
        return /^image/.test(C[0].type) && c.plugins.image && x.insertImage(C), !1;
      if (!v)
        return !1;
      if (h)
        return x.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(o) {
      if (c.isDisabled || c.isReadOnly) return !1;
      const a = l.getParentElement(o.target, l.isComponent), d = c._lineBreaker.style;
      if (a && !c.currentControllerName) {
        const h = e.element;
        let g = 0, b = h.wysiwyg;
        do
          g += b.scrollTop, b = b.parentElement;
        while (b && !/^(BODY|HTML)$/i.test(b.nodeName));
        const p = h.wysiwyg.scrollTop, v = m._getEditorOffsets(null), C = l.getOffset(a, h.wysiwygFrame).top + p, y = o.pageY + g + (n.iframe && !n.toolbarContainer ? h.toolbar.offsetHeight : 0), w = C + (n.iframe ? g : v.top), M = l.isListCell(a.parentNode);
        let S = "", k = "";
        if ((M ? !a.previousSibling : !l.isFormatElement(a.previousElementSibling)) && y < w + 20)
          k = C, S = "t";
        else if ((M ? !a.nextSibling : !l.isFormatElement(a.nextElementSibling)) && y > w + a.offsetHeight - 20)
          k = C + a.offsetHeight, S = "b";
        else {
          d.display = "none";
          return;
        }
        c._variable._lineBreakComp = a, c._variable._lineBreakDir = S, d.top = k - p + "px", c._lineBreakerButton.style.left = l.getOffset(a).left + a.offsetWidth / 2 - 15 + "px", d.display = "block";
      } else d.display !== "none" && (d.display = "none");
    },
    _enterPrevent: function(o) {
      o.preventDefault(), l.isMobile && c.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(o) {
      o.preventDefault();
    },
    _onLineBreak: function(o) {
      o.preventDefault();
      const a = c._variable._lineBreakComp, d = this ? this : c._variable._lineBreakDir, h = l.isListCell(a.parentNode), g = l.createElement(h ? "BR" : l.isCell(a.parentNode) ? "DIV" : n.defaultTag);
      if (h || (g.innerHTML = "<br>"), c._charTypeHTML && !c.checkCharCount(g.outerHTML, "byte-html")) return;
      a.parentNode.insertBefore(g, d === "t" ? a : a.nextSibling), c._lineBreaker.style.display = "none", c._variable._lineBreakComp = null;
      const b = h ? g : g.firstChild;
      c.setRange(b, 1, b, 1), c.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const o = n.iframe ? c._ww : e.element.wysiwyg;
      l.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(a) {
        c.__callResizeFunction(-1, a[0]);
      })), e.element.toolbar.addEventListener("mousedown", m._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", m._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", m.onClick_toolbar, !1), o.addEventListener("mousedown", m.onMouseDown_wysiwyg, !1), o.addEventListener("click", m.onClick_wysiwyg, !1), o.addEventListener(l.isIE ? "textinput" : "input", m.onInput_wysiwyg, !1), o.addEventListener("keydown", m.onKeyDown_wysiwyg, !1), o.addEventListener("keyup", m.onKeyUp_wysiwyg, !1), o.addEventListener("paste", m.onPaste_wysiwyg, !1), o.addEventListener("copy", m.onCopy_wysiwyg, !1), o.addEventListener("cut", m.onCut_wysiwyg, !1), o.addEventListener("drop", m.onDrop_wysiwyg, !1), o.addEventListener("scroll", m.onScroll_wysiwyg, !1), o.addEventListener("focus", m.onFocus_wysiwyg, !1), o.addEventListener("blur", m.onBlur_wysiwyg, !1), m._lineBreakerBind = { a: m._onLineBreak.bind(""), t: m._onLineBreak.bind("t"), b: m._onLineBreak.bind("b") }, o.addEventListener("mousemove", m.onMouseMove_wysiwyg, !1), c._lineBreakerButton.addEventListener("mousedown", m._onMouseDown_lineBreak, !1), c._lineBreakerButton.addEventListener("click", m._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", m._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", m._lineBreakerBind.b, !1), o.addEventListener("touchstart", m.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), o.addEventListener("touchend", m.onClick_wysiwyg, { passive: !0, useCapture: !1 }), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.addEventListener("keydown", m._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", m._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", m._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(n.height) && n.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", m.onMouseDown_resizingBar, !1) : l.addClass(e.element.resizingBar, "se-resizing-none")), m._setResponsiveToolbar(), l.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(c.resetResponsiveToolbar)), f.addEventListener("resize", m.onResize_window, !1), n.stickyToolbar > -1 && f.addEventListener("scroll", m.onScroll_window, !1);
    },
    _removeEvent: function() {
      const o = n.iframe ? c._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", m._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", m._buttonsEventHandler), e.element.toolbar.removeEventListener("click", m.onClick_toolbar), o.removeEventListener("mousedown", m.onMouseDown_wysiwyg), o.removeEventListener("click", m.onClick_wysiwyg), o.removeEventListener(l.isIE ? "textinput" : "input", m.onInput_wysiwyg), o.removeEventListener("keydown", m.onKeyDown_wysiwyg), o.removeEventListener("keyup", m.onKeyUp_wysiwyg), o.removeEventListener("paste", m.onPaste_wysiwyg), o.removeEventListener("copy", m.onCopy_wysiwyg), o.removeEventListener("cut", m.onCut_wysiwyg), o.removeEventListener("drop", m.onDrop_wysiwyg), o.removeEventListener("scroll", m.onScroll_wysiwyg), o.removeEventListener("mousemove", m.onMouseMove_wysiwyg), c._lineBreakerButton.removeEventListener("mousedown", m._onMouseDown_lineBreak), c._lineBreakerButton.removeEventListener("click", m._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", m._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", m._lineBreakerBind.b), m._lineBreakerBind = null, o.removeEventListener("touchstart", m.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), o.removeEventListener("touchend", m.onClick_wysiwyg, { passive: !0, useCapture: !1 }), o.removeEventListener("focus", m.onFocus_wysiwyg), o.removeEventListener("blur", m.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", m._codeViewAutoHeight), e.element.code.removeEventListener("keyup", m._codeViewAutoHeight), e.element.code.removeEventListener("paste", m._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", m.onMouseDown_resizingBar), m._resizeObserver && (m._resizeObserver.unobserve(e.element.wysiwygFrame), m._resizeObserver = null), m._toolbarObserver && (m._toolbarObserver.unobserve(e.element._toolbarShadow), m._toolbarObserver = null), f.removeEventListener("resize", m.onResize_window), f.removeEventListener("scroll", m.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (r.length === 0) {
        r = null;
        return;
      }
      m._responsiveCurrentSize = "default";
      const o = m._responsiveButtonSize = [], a = m._responsiveButtons = { default: r[0] };
      for (let d = 1, h = r.length, g, b; d < h; d++)
        b = r[d], g = b[0] * 1, o.push(g), a[g] = b[1];
      o.sort(function(d, h) {
        return d - h;
      }).unshift("default");
    }
  }, x = {
    /**
     * @description Core, Util object
     */
    core: c,
    util: l,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     */
    onload: null,
    onScroll: null,
    onMouseDown: null,
    onClick: null,
    onInput: null,
    onKeyDown: null,
    onKeyUp: null,
    onCopy: null,
    onCut: null,
    onFocus: null,
    /**
     * @description Event functions
     * @param {Object} e Event Object
     * @param {Object} core Core object
     * @param {String} contents Current contents
     */
    onBlur: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onChange: null,
    /**
     * @description Event functions
     * @param {String} contents Current contents
     * @param {Object} core Core object
     */
    onSave: null,
    /**
     * @description Event functions (drop, paste)
     * When false is returned, the default behavior is stopped.
     * If the string is returned, the cleanData value is modified to the return value.
     * @param {Object} e Event object.
     * @param {String} cleanData HTML string modified for editor format.
     * @param {Boolean} maxChartCount option (true if max character is exceeded)
     * @param {Object} core Core object
     * @returns {Boolean|String}
     */
    onDrop: null,
    onPaste: null,
    /**
     * @description Called just before the inline toolbar is positioned and displayed on the screen.
     * @param {Element} toolbar Toolbar Element
     * @param {Object} context The editor's context object (editor.getContext())
     * @param {Object} core Core object
     */
    showInline: null,
    /**
     * @description Called just after the controller is positioned and displayed on the screen.
     * controller - editing elements displayed on the screen [image resizing, table editor, link editor..]]
     * @param {String} name The name of the plugin that called the controller
     * @param {Array} controllers Array of Controller elements
     * @param {Object} core Core object
     */
    showController: null,
    /**
     * @description An event when toggling between code view and wysiwyg view.
     * @param {Boolean} isCodeView Whether the current code view mode
     * @param {Object} core Core object
     */
    toggleCodeView: null,
    /**
     * @description An event when toggling full screen.
     * @param {Boolean} isFullScreen Whether the current full screen mode
     * @param {Object} core Core object
     */
    toggleFullScreen: null,
    /**
     * @description It replaces the default callback function of the image upload
     * @param {Object} response Response object
     * @param {Object} info Input information
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * @param {Object} core Core object
     */
    imageUploadHandler: null,
    /**
     * @description It replaces the default callback function of the video upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * @param core Core object
     */
    videoUploadHandler: null,
    /**
     * @description It replaces the default callback function of the audio upload
     * @param xmlHttp xmlHttpRequest object
     * @param info Input information
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * @param core Core object
     */
    audioUploadHandler: null,
    /**
     * @description Called before the image is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no image upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - linkValue: Link url value
     * - linkNewWindow: Open in new window Check Value
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update image if true, create image if false
     * - element: If isUpdate is true, the currently selected image.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "imageUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onImageUploadBefore: null,
    /**
     * @description Called before the video is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no video(iframe, video) upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - inputWidth: Value of width input
     * - inputHeight: Value of height input
     * - align: Align Check Value
     * - isUpdate: Update video if true, create video if false
     * - element: If isUpdate is true, the currently selected video.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "videoUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onVideoUploadBefore: null,
    /**
     * @description Called before the audio is uploaded
     * If true is returned, the internal upload process runs normally.
     * If false is returned, no audio upload is performed.
     * If new fileList are returned,  replaced the previous fileList
     * If undefined is returned, it waits until "uploadHandler" is executed.
     * @param {Array} files Files array
     * @param {Object} info info: {
     * - isUpdate: Update audio if true, create audio if false
     * - element: If isUpdate is true, the currently selected audio.
     * }
     * @param {Object} core Core object
     * @param {Function} uploadHandler If undefined is returned, it waits until "uploadHandler" is executed.
     *                "uploadHandler" is an upload function with "core" and "info" bound.
     *                [upload files] : uploadHandler(files or [new File(...),])
     *                [error]        : uploadHandler("Error message")
     *                [Just finish]  : uploadHandler()
     *                [directly register] : uploadHandler(response) // Same format as "audioUploadUrl" response
     *                                   ex) {
     *                                      // "errorMessage": "insert error message",
     *                                      "result": [ { "url": "...", "name": "...", "size": "999" }, ]
     *                                   }
     * @returns {Boolean|Array|undefined}
     */
    onAudioUploadBefore: null,
    /**
     * @description Called when the image is uploaded, updated, deleted
     * @param {Element} targetElement Target element
     * @param {Number} index Uploaded index
     * @param {String} state Upload status ('create', 'update', 'delete')
     * @param {Object} info Image info object
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {Number} remainingFilesCount Count of remaining files to upload (0 when added as a url)
     * @param {Object} core Core object
     */
    onImageUpload: null,
    /**
    * @description Called when the video(iframe, video) is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onVideoUpload: null,
    /**
    * @description Called when the audio is is uploaded, updated, deleted
    * -- arguments is same "onImageUpload" --
    */
    onAudioUpload: null,
    /**
     * @description Called when the image is upload failed
     * @param {String} errorMessage Error message
     * @param {Object} result Response Object
     * @param {Object} core Core object
     * @returns {Boolean}
     */
    onImageUploadError: null,
    /**
     * @description Called when the video(iframe, video) upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onVideoUploadError: null,
    /**
     * @description Called when the audio upload failed
     * -- arguments is same "onImageUploadError" --
     */
    onAudioUploadError: null,
    /**
     * @description Called when the editor is resized using the bottom bar
     */
    onResizeEditor: null,
    /**
     * @description Called after the "setToolbarButtons" invocation.
     * Can be used to tweak buttons properties (useful for custom buttons)
     * @param {Array} buttonList Button list 
     * @param {Object} core Core object
     */
    onSetToolbarButtons: null,
    /**
     * @description Reset the buttons on the toolbar. (Editor is not reloaded)
     * You cannot set a new plugin for the button.
     * @param {Array} buttonList Button list 
     */
    setToolbarButtons: function(o) {
      c.submenuOff(), c.containerOff(), c.moreLayerOff();
      const a = Lt._createToolBar(u, o, c.plugins, n);
      r = a.responsiveButtons, m._setResponsiveToolbar(), e.element.toolbar.replaceChild(a._buttonTray, e.element._buttonTray);
      const d = Nt(e.element.originElement, c._getConstructed(e.element), n);
      e.element = d.element, e.tool = d.tool, n.iframe && (e.element.wysiwyg = c._wd.body), c._recoverButtonStates(), c._cachingButtons(), c.history._resetCachingButton(), c.effectNode = null, c.hasFocus && m._applyTagEffects(), c.isReadOnly && l.setDisabledButtons(!0, c.resizingDisabledButtons), typeof x.onSetToolbarButtons == "function" && x.onSetToolbarButtons(a._buttonTray.querySelectorAll("button"), c);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(o) {
      m._removeEvent(), c._resetComponents(), l.removeClass(c._styleCommandMap.showBlocks, "active"), l.removeClass(c._styleCommandMap.codeView, "active"), c._variable.isCodeView = !1, c._iframeAuto = null, c.plugins = o.plugins || c.plugins;
      const a = [n, o].reduce(function(b, p) {
        for (let v in p)
          if (l.hasOwn(p, v))
            if (v === "plugins" && p[v] && b[v]) {
              let C = b[v], y = p[v];
              C = C.length ? C : f.Object.keys(C).map(function(w) {
                return C[w];
              }), y = y.length ? y : f.Object.keys(y).map(function(w) {
                return y[w];
              }), b[v] = y.filter(function(w) {
                return C.indexOf(w) === -1;
              }).concat(C);
            } else
              b[v] = p[v];
        return b;
      }, {}), d = e.element, h = d.wysiwyg.innerHTML, g = Lt._setOptions(a, e, n);
      g.callButtons && (t = g.callButtons, c.initPlugins = {}), g.plugins && (c.plugins = i = g.plugins), d._menuTray.children.length === 0 && (this._menuTray = {}), r = g.toolbar.responsiveButtons, c.options = n = a, c.lang = s = n.lang, n.iframe && d.wysiwygFrame.addEventListener("load", function() {
        l._setIframeDocument(this, n), c._setOptionsInit(d, h);
      }), d.editorArea.appendChild(d.wysiwygFrame), n.iframe || c._setOptionsInit(d, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(o) {
      const a = n._editorStyles = l._setDefaultOptionStyle(n, o), d = e.element;
      d.topArea.style.cssText = a.top, d.code.style.cssText = n._editorStyles.frame, d.code.style.display = "none", n.height === "auto" ? d.code.style.overflow = "hidden" : d.code.style.overflow = "", n.iframe ? (d.wysiwygFrame.style.cssText = a.frame, d.wysiwyg.style.cssText = a.editor) : d.wysiwygFrame.style.cssText = a.frame + a.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(o) {
      c.notice.open.call(c, o);
    },
    /**
     * @description Close a notice area
     */
    noticeClose: function() {
      c.notice.close.call(c);
    },
    /**
     * @description Copying the contents of the editor to the original textarea and execute onSave callback
     * * not working during enabled codeView mode
     */
    save: function() {
      const o = c.getContents(!1);
      e.element.originElement.value = o, m.onSave_wysiwyg(o, c);
    },
    /**
     * @description Gets the suneditor's context object. Contains settings, plugins, and cached element objects
     * @returns {Object}
     */
    getContext: function() {
      return e;
    },
    /**
     * @description Gets the contents of the suneditor
     * * not working during enabled codeView mode
     * @param {Boolean} onlyContents - Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getContents: function(o) {
      return c.getContents(o);
    },
    /**
     * @description Gets only the text of the suneditor contents
     * * not working during enabled codeView mode
     * @returns {String}
     */
    getText: function() {
      return e.element.wysiwyg.textContent;
    },
    /**
     * @description Get the editor's number of characters or binary data size.
     * You can use the "charCounterType" option format.
     * @param {String|null} charCounterType options - charCounterType ('char', 'byte', 'byte-html')
     * If argument is no value, the currently set "charCounterType" option is used.
     * @returns {Number}
     */
    getCharCount: function(o) {
      return o = typeof o == "string" ? o : n.charCounterType, c.getCharLength(c._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, o);
    },
    /**
     * @description Gets uploaded images informations
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @returns {Array}
     */
    getImagesInfo: function() {
      return e.image ? e.image._infoList : [];
    },
    /**
     * @description Gets uploaded files(plugin using fileManager) information list.
     * image: [img], video: [video, iframe], audio: [audio]
     * When the argument value is 'image', it is the same function as "getImagesInfo".
     * - index: data index
     * - name: file name
     * - size: file size
     * - select: select function
     * - delete: delete function
     * - element: target element
     * - src: src attribute of tag
     * @param {String} pluginName Plugin name (image, video, audio)
     * @returns {Array}
     */
    getFilesInfo: function(o) {
      return e[o] ? e[o]._infoList : [];
    },
    /**
     * @description Upload images using image plugin
     * @param {FileList} files FileList
     */
    insertImage: function(o) {
      !c.plugins.image || !o || (c.initPlugins.image ? c.plugins.image.submitAction.call(c, o) : c.callPlugin("image", c.plugins.image.submitAction.bind(c, o), null), c.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(o, a, d, h) {
      if (e.element.wysiwygFrame.contains(c.getSelection().focusNode) || c.focus(), typeof o == "string") {
        a || (o = c.cleanHTML(o, null, null));
        try {
          if (l.isListCell(l.getFormatElement(c.getSelectionNode(), null))) {
            const k = u.createRange().createContextualFragment(o).childNodes;
            c._isFormatData(k) && (o = c._convertListCell(k));
          }
          const b = u.createRange().createContextualFragment(o).childNodes;
          if (d) {
            const S = c._charTypeHTML ? "outerHTML" : "textContent";
            let k = "";
            for (let R = 0, D = b.length; R < D; R++)
              k += b[R][S];
            if (!c.checkCharCount(k, null)) return;
          }
          let p, v, C, y, w;
          for (; p = b[0]; ) {
            if (y && y.nodeType === 3 && v && v.nodeType === 1 && l.isBreak(p)) {
              y = p, l.removeItem(p);
              continue;
            }
            C = c.insertNode(p, v, !1), v = C.container || C, w || (w = C), y = p;
          }
          y.nodeType === 3 && v.nodeType === 1 && (v = y);
          const M = v.nodeType === 3 ? C.endOffset || v.textContent.length : v.childNodes.length;
          h ? c.setRange(w.container || w, w.startOffset || 0, v, M) : c.setRange(v, M, v, M);
        } catch (g) {
          if (c.isDisabled || c.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + g), c.execCommand("insertHTML", !1, o);
        }
      } else if (l.isComponent(o))
        c.insertComponent(o, !1, d, !1);
      else {
        let g = null;
        (l.isFormatElement(o) || l.isMedia(o)) && (g = l.getFormatElement(c.getSelectionNode(), null)), c.insertNode(o, g, d);
      }
      c.effectNode = null, c.focus(), c.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(o) {
      c.setContents(o);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(o) {
      const a = c.convertContentsForEditor(o);
      if (c._variable.isCodeView)
        c._setCodeView(c._getCodeView() + `
` + c.convertHTMLForCodeView(a, !1));
      else {
        const d = l.createElement("DIV");
        d.innerHTML = a;
        const h = e.element.wysiwyg, g = d.children;
        for (let b = 0, p = g.length; b < p; b++)
          g[b] && h.appendChild(g[b]);
      }
      c.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(o) {
      c.isReadOnly = o, l.setDisabledButtons(!!o, c.resizingDisabledButtons), o ? (c.controllersOff(), c.submenuActiveButton && c.submenuActiveButton.disabled && c.submenuOff(), c._moreLayerActiveButton && c._moreLayerActiveButton.disabled && c.moreLayerOff(), c.containerActiveButton && c.containerActiveButton.disabled && c.containerOff(), c.modalForm && c.plugins.dialog.close.call(c), e.element.code.setAttribute("readOnly", "true"), l.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), l.removeClass(e.element.wysiwygFrame, "se-read-only")), n.codeMirrorEditor && n.codeMirrorEditor.setOption("readOnly", !!o);
    },
    /**
     * @description Disable the suneditor
     */
    disable: function() {
      this.toolbar.disable(), this.wysiwyg.disable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    disabled: function() {
      this.disable();
    },
    /**
     * @description Enable the suneditor
     */
    enable: function() {
      this.toolbar.enable(), this.wysiwyg.enable();
    },
    /**
     * @description Provided for backward compatibility and will be removed in 3.0.0 version
     */
    enabled: function() {
      this.enable();
    },
    /**
     * @description Show the suneditor
     */
    show: function() {
      const o = e.element.topArea.style;
      o.display === "none" && (o.display = n.display);
    },
    /**
     * @description Hide the suneditor
     */
    hide: function() {
      e.element.topArea.style.display = "none";
    },
    /**
     * @description Destroy the suneditor
     */
    destroy: function() {
      c.submenuOff(), c.containerOff(), c.controllersOff(), c.notice && c.notice.close.call(c), c.modalForm && c.plugins.dialog.close.call(c), c.history._destroy(), m._removeEvent(), l.removeItem(e.element.toolbar), l.removeItem(e.element.topArea);
      for (let o in c.functions)
        l.hasOwn(c, o) && delete c.functions[o];
      for (let o in c)
        l.hasOwn(c, o) && delete c[o];
      for (let o in m)
        l.hasOwn(m, o) && delete m[o];
      for (let o in e)
        l.hasOwn(e, o) && delete e[o];
      for (let o in t)
        l.hasOwn(t, o) && delete t[o];
      for (let o in this)
        l.hasOwn(this, o) && delete this[o];
    },
    /**
     * @description Toolbar methods
     */
    toolbar: {
      /**
       * @description Disable the toolbar
       */
      disable: function() {
        c.submenuOff(), c.moreLayerOff(), c.containerOff(), e.tool.cover.style.display = "block";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      disabled: function() {
        this.disable();
      },
      /**
       * @description Enable the toolbar
       */
      enable: function() {
        e.tool.cover.style.display = "none";
      },
      /**
       * @description Provided for backward compatibility and will be removed in 3.0.0 version
       */
      enabled: function() {
        this.enable();
      },
      /**
       * @description Show the toolbar
       */
      show: function() {
        c._isInline ? m._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), m.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        c._isInline ? m._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), m.onResize_window();
      }
    },
    /**
     * @description Wysiwyg methods
     */
    wysiwyg: {
      /**
       * @description Disable the wysiwyg area
       */
      disable: function() {
        c.controllersOff(), c.modalForm && c.plugins.dialog.close.call(c), e.element.wysiwyg.setAttribute("contenteditable", !1), c.isDisabled = !0, n.codeMirrorEditor ? n.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), c.isDisabled = !1, n.codeMirrorEditor ? n.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  c.functions = x, c.options = n;
  let T = e.element, E = T.originElement, z = T.topArea;
  return E.style.display = "none", z.style.display = "block", n.iframe && T.wysiwygFrame.addEventListener("load", function() {
    l._setIframeDocument(this, n), c._editorInit(!1, n.value), n.value = null;
  }), typeof E.nextElementSibling == "object" ? E.parentNode.insertBefore(z, E.nextElementSibling) : E.parentNode.appendChild(z), T.editorArea.appendChild(T.wysiwygFrame), T = E = z = null, n.iframe || (c._editorInit(!1, n.value), n.value = null), x;
}
const Xn = {
  /**
   * @description Returns the create function with preset options.
   * If the options overlap, the options of the 'create' function take precedence.
   * @param {Json} options Initialization options
   * @returns {Object}
   */
  init: function(e) {
    return {
      create: (function(t, i) {
        return this.create(t, i, e);
      }).bind(this)
    };
  },
  /**
   * @description Create the suneditor
   * @param {String|Element} idOrElement textarea Id or textarea element
   * @param {JSON|Object} options user options
   * @returns {Object}
   */
  create: function(e, t, i) {
    J._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(r, u) {
      for (let f in u)
        if (J.hasOwn(u, f))
          if (f === "plugins" && u[f] && r[f]) {
            let l = r[f], _ = u[f];
            l = l.length ? l : Object.keys(l).map(function(c) {
              return l[c];
            }), _ = _.length ? _ : Object.keys(_).map(function(c) {
              return _[c];
            }), r[f] = _.filter(function(c) {
              return l.indexOf(c) === -1;
            }).concat(l);
          } else
            r[f] = u[f];
      return r;
    }, {}));
    const s = typeof e == "string" ? document.getElementById(e) : e;
    if (!s)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const n = Lt.init(s, t);
    if (n.constructed._top.id && document.getElementById(n.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + n.constructed._top.id + '")');
    return Yn(Nt(s, n.constructed, n.options), n.pluginCallButtons, n.plugins, n.options.lang, t, n._responsiveButtons);
  }
}, Kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xn
}, Symbol.toStringTag, { value: "Module" })), Gn = /* @__PURE__ */ bi(Kn);
function Jn(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
var Qn = function(e) {
  switch (typeof e) {
    case "object":
      return e;
    case "string":
      return Jn("suneditor/src/lang/".concat(e, ".js"));
    default:
      return;
  }
};
Pt.default = Qn;
var je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
je.uploadBeforeEvents = je.events = void 0;
je.events = [
  "onMouseDown",
  "onScroll",
  "onInput",
  "onClick",
  "onKeyUp",
  "onKeyDown",
  "onFocus",
  "onImageUpload",
  "onAudioUpload",
  "onVideoUpload",
  "onImageUploadError",
  "onVideoUploadError",
  "onAudioUploadError",
  "onSave",
  "onSetToolbarButtons",
  "imageUploadHandler",
  "toggleCodeView",
  "toggleFullScreen",
  "showInline",
  "showController",
  "onCopy",
  "onCut",
  "onDrop",
  "onPaste"
];
je.uploadBeforeEvents = [
  "onImageUploadBefore",
  "onVideoUploadBefore",
  "onAudioUploadBefore"
];
var it = he && he.__assign || function() {
  return it = Object.assign || function(e) {
    for (var t, i = 1, s = arguments.length; i < s; i++) {
      t = arguments[i];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, it.apply(this, arguments);
}, el = he && he.__createBinding || (Object.create ? function(e, t, i, s) {
  s === void 0 && (s = i);
  var n = Object.getOwnPropertyDescriptor(t, i);
  (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return t[i];
  } }), Object.defineProperty(e, s, n);
} : function(e, t, i, s) {
  s === void 0 && (s = i), e[s] = t[i];
}), tl = he && he.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), il = he && he.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && el(t, e, i);
  return tl(t, e), t;
}, Vt = he && he.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ht, "__esModule", { value: !0 });
var Re = il(Dt), nl = Vt(Zn), ll = Vt(Gn), ni = Vt(Pt), li = je, sl = function(e) {
  var t = e.name, i = e.lang, s = e.setOptions, n = s === void 0 ? {} : s, r = e.placeholder, u = e.width, f = u === void 0 ? "100%" : u, l = e.height, _ = e.defaultValue, c = e.setContents, m = e.setDefaultStyle, x = e.getSunEditorInstance, T = e.appendContents, E = e.setAllPlugins, z = E === void 0 ? !0 : E, o = e.disable, a = o === void 0 ? !1 : o, d = e.readOnly, h = d === void 0 ? !1 : d, g = e.hide, b = g === void 0 ? !1 : g, p = e.hideToolbar, v = p === void 0 ? !1 : p, C = e.disableToolbar, y = C === void 0 ? !1 : C, w = e.onChange, M = e.autoFocus, S = e.onBlur, k = e.onLoad, R = (0, Re.useRef)(null), D = (0, Re.useRef)(null), U = (0, Re.useRef)(!0);
  return (0, Re.useEffect)(function() {
    var I, H = it(it({}, n), { lang: i ? (0, ni.default)(i) : n.lang, width: f ?? n.width, placeholder: r ?? n.placeholder, plugins: (I = n.plugins) !== null && I !== void 0 ? I : z ? nl.default : void 0, height: l ?? n.height, value: _ ?? n.value, defaultStyle: m ?? n.defaultStyle });
    return t && H.value && (R.current.value = H.value), D.current = ll.default.create(R.current, H), x && x(D.current), D.current.onload = function(P, B) {
      return B || (c && (D.current.setContents(c), D.current.core.focusEdge(null)), T && D.current.appendContents(T), D.current.util.isIE && D.current.core._createDefaultRange(), a && D.current.disable(), h && D.current.readOnly(!0), b && D.current.hide(), v && D.current.toolbar.hide(), y && D.current.toolbar.disable(), M === !1 ? D.current.core.context.element.wysiwyg.blur() : M && D.current.core.context.element.wysiwyg.focus()), k == null ? void 0 : k(B);
    }, D.current.onChange = function(P) {
      t && R.current && (R.current.value = P), w && w(P);
    }, S && (D.current.onBlur = function(P) {
      return S(P, D.current.getContents(!0));
    }), li.uploadBeforeEvents.forEach(function(P) {
      var B = e[P];
      D.current && B && (D.current[P] = function(F, N, V, L) {
        return B(F, N, L);
      });
    }), li.events.forEach(function(P) {
      var B = e[P];
      B && D.current && (D.current[P] = B);
    }), function() {
      D.current && D.current.destroy(), D.current = null;
    };
  }, []), (0, Re.useEffect)(function() {
    var I;
    U.current || (I = D.current) === null || I === void 0 || I.setOptions({
      lang: (0, ni.default)(i)
    });
  }, [i]), (0, Re.useEffect)(function() {
    var I;
    U.current || (I = D.current) === null || I === void 0 || I.setOptions({
      placeholder: r,
      height: l,
      width: f
    });
  }, [r, l, f]), (0, Re.useEffect)(function() {
    var I;
    m && !U.current && ((I = D.current) === null || I === void 0 || I.setDefaultStyle(m));
  }, [m]), (0, Re.useEffect)(function() {
    var I, H;
    !U.current && c !== void 0 && !(!((I = D.current) === null || I === void 0) && I.core.hasFocus) && ((H = D.current) === null || H === void 0 || H.setContents(c));
  }, [c]), (0, Re.useEffect)(function() {
    var I, H, P;
    !U.current && T !== void 0 && !(!((I = D.current) === null || I === void 0) && I.core.hasFocus) && ((H = D.current) === null || H === void 0 || H.appendContents(T), (P = D.current) === null || P === void 0 || P.core.focusEdge(null));
  }, [T]), (0, Re.useEffect)(function() {
    var I, H, P, B, F, N, V, L, O;
    U.current || ((I = D.current) === null || I === void 0 || I.readOnly(h), v ? (H = D.current) === null || H === void 0 || H.toolbar.hide() : (P = D.current) === null || P === void 0 || P.toolbar.show(), y ? (B = D.current) === null || B === void 0 || B.toolbar.disable() : (F = D.current) === null || F === void 0 || F.toolbar.enable(), a ? (N = D.current) === null || N === void 0 || N.disable() : (V = D.current) === null || V === void 0 || V.enable(), b ? (L = D.current) === null || L === void 0 || L.hide() : (O = D.current) === null || O === void 0 || O.show());
  }, [a, v, y, b, h]), (0, Re.useEffect)(function() {
    U.current = !1;
  }, []), Re.default.createElement("textarea", it({ style: { visibility: "hidden" }, ref: R }, { name: t }));
};
Ht.default = sl;
var Ie = {};
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.formatting = Ie.complex = Ie.basic = void 0;
Ie.basic = [
  ["font", "fontSize"],
  ["fontColor"],
  ["horizontalRule"],
  ["link", "image"]
];
Ie.complex = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["removeFormat"],
  "/",
  ["fontColor", "hiliteColor"],
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "table"],
  ["link", "image", "video"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["save", "template"]
];
Ie.formatting = [
  ["undo", "redo"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["removeFormat"],
  ["outdent", "indent"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"]
];
var ol = he && he.__createBinding || (Object.create ? function(e, t, i, s) {
  s === void 0 && (s = i);
  var n = Object.getOwnPropertyDescriptor(t, i);
  (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return t[i];
  } }), Object.defineProperty(e, s, n);
} : function(e, t, i, s) {
  s === void 0 && (s = i), e[s] = t[i];
}), al = he && he.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), rl = he && he.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var i in e) i !== "default" && Object.prototype.hasOwnProperty.call(e, i) && ol(t, e, i);
  return al(t, e), t;
}, cl = he && he.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ft, "__esModule", { value: !0 });
ft.buttonList = void 0;
var ul = cl(Ht);
ft.buttonList = rl(Ie);
var dl = ft.default = ul.default;
function Yi(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: fl } = Object.prototype, { getPrototypeOf: Ut } = Object, { iterator: ht, toStringTag: Xi } = Symbol, gt = /* @__PURE__ */ ((e) => (t) => {
  const i = fl.call(t);
  return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ze = (e) => (e = e.toLowerCase(), (t) => gt(t) === e), pt = (e) => (t) => typeof t === e, { isArray: Xe } = Array, nt = pt("undefined");
function hl(e) {
  return e !== null && !nt(e) && e.constructor !== null && !nt(e.constructor) && Le(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Ki = ze("ArrayBuffer");
function gl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ki(e.buffer), t;
}
const pl = pt("string"), Le = pt("function"), Gi = pt("number"), mt = (e) => e !== null && typeof e == "object", ml = (e) => e === !0 || e === !1, at = (e) => {
  if (gt(e) !== "object")
    return !1;
  const t = Ut(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Xi in e) && !(ht in e);
}, _l = ze("Date"), bl = ze("File"), vl = ze("Blob"), yl = ze("FileList"), Cl = (e) => mt(e) && Le(e.pipe), wl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Le(e.append) && ((t = gt(e)) === "formdata" || // detect form-data instance
  t === "object" && Le(e.toString) && e.toString() === "[object FormData]"));
}, xl = ze("URLSearchParams"), [El, Sl, Tl, kl] = ["ReadableStream", "Request", "Response", "Headers"].map(ze), Ll = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function st(e, t, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let s, n;
  if (typeof e != "object" && (e = [e]), Xe(e))
    for (s = 0, n = e.length; s < n; s++)
      t.call(null, e[s], s, e);
  else {
    const r = i ? Object.getOwnPropertyNames(e) : Object.keys(e), u = r.length;
    let f;
    for (s = 0; s < u; s++)
      f = r[s], t.call(null, e[f], f, e);
  }
}
function Ji(e, t) {
  t = t.toLowerCase();
  const i = Object.keys(e);
  let s = i.length, n;
  for (; s-- > 0; )
    if (n = i[s], t === n.toLowerCase())
      return n;
  return null;
}
const Pe = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Qi = (e) => !nt(e) && e !== Pe;
function Bt() {
  const { caseless: e } = Qi(this) && this || {}, t = {}, i = (s, n) => {
    const r = e && Ji(t, n) || n;
    at(t[r]) && at(s) ? t[r] = Bt(t[r], s) : at(s) ? t[r] = Bt({}, s) : Xe(s) ? t[r] = s.slice() : t[r] = s;
  };
  for (let s = 0, n = arguments.length; s < n; s++)
    arguments[s] && st(arguments[s], i);
  return t;
}
const Nl = (e, t, i, { allOwnKeys: s } = {}) => (st(t, (n, r) => {
  i && Le(n) ? e[r] = Yi(n, i) : e[r] = n;
}, { allOwnKeys: s }), e), Bl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Rl = (e, t, i, s) => {
  e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), i && Object.assign(e.prototype, i);
}, Al = (e, t, i, s) => {
  let n, r, u;
  const f = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), r = n.length; r-- > 0; )
      u = n[r], (!s || s(u, e, t)) && !f[u] && (t[u] = e[u], f[u] = !0);
    e = i !== !1 && Ut(e);
  } while (e && (!i || i(e, t)) && e !== Object.prototype);
  return t;
}, zl = (e, t, i) => {
  e = String(e), (i === void 0 || i > e.length) && (i = e.length), i -= t.length;
  const s = e.indexOf(t, i);
  return s !== -1 && s === i;
}, Ml = (e) => {
  if (!e) return null;
  if (Xe(e)) return e;
  let t = e.length;
  if (!Gi(t)) return null;
  const i = new Array(t);
  for (; t-- > 0; )
    i[t] = e[t];
  return i;
}, Ol = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ut(Uint8Array)), Dl = (e, t) => {
  const s = (e && e[ht]).call(e);
  let n;
  for (; (n = s.next()) && !n.done; ) {
    const r = n.value;
    t.call(e, r[0], r[1]);
  }
}, Hl = (e, t) => {
  let i;
  const s = [];
  for (; (i = e.exec(t)) !== null; )
    s.push(i);
  return s;
}, Il = ze("HTMLFormElement"), Fl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, s, n) {
    return s.toUpperCase() + n;
  }
), si = (({ hasOwnProperty: e }) => (t, i) => e.call(t, i))(Object.prototype), Pl = ze("RegExp"), en = (e, t) => {
  const i = Object.getOwnPropertyDescriptors(e), s = {};
  st(i, (n, r) => {
    let u;
    (u = t(n, r, e)) !== !1 && (s[r] = u || n);
  }), Object.defineProperties(e, s);
}, Vl = (e) => {
  en(e, (t, i) => {
    if (Le(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const s = e[i];
    if (Le(s)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, Ul = (e, t) => {
  const i = {}, s = (n) => {
    n.forEach((r) => {
      i[r] = !0;
    });
  };
  return Xe(e) ? s(e) : s(String(e).split(t)), i;
}, Wl = () => {
}, Zl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function ql(e) {
  return !!(e && Le(e.append) && e[Xi] === "FormData" && e[ht]);
}
const $l = (e) => {
  const t = new Array(10), i = (s, n) => {
    if (mt(s)) {
      if (t.indexOf(s) >= 0)
        return;
      if (!("toJSON" in s)) {
        t[n] = s;
        const r = Xe(s) ? [] : {};
        return st(s, (u, f) => {
          const l = i(u, n + 1);
          !nt(l) && (r[f] = l);
        }), t[n] = void 0, r;
      }
    }
    return s;
  };
  return i(e, 0);
}, jl = ze("AsyncFunction"), Yl = (e) => e && (mt(e) || Le(e)) && Le(e.then) && Le(e.catch), tn = ((e, t) => e ? setImmediate : t ? ((i, s) => (Pe.addEventListener("message", ({ source: n, data: r }) => {
  n === Pe && r === i && s.length && s.shift()();
}, !1), (n) => {
  s.push(n), Pe.postMessage(i, "*");
}))(`axios@${Math.random()}`, []) : (i) => setTimeout(i))(
  typeof setImmediate == "function",
  Le(Pe.postMessage)
), Xl = typeof queueMicrotask < "u" ? queueMicrotask.bind(Pe) : typeof process < "u" && process.nextTick || tn, Kl = (e) => e != null && Le(e[ht]), W = {
  isArray: Xe,
  isArrayBuffer: Ki,
  isBuffer: hl,
  isFormData: wl,
  isArrayBufferView: gl,
  isString: pl,
  isNumber: Gi,
  isBoolean: ml,
  isObject: mt,
  isPlainObject: at,
  isReadableStream: El,
  isRequest: Sl,
  isResponse: Tl,
  isHeaders: kl,
  isUndefined: nt,
  isDate: _l,
  isFile: bl,
  isBlob: vl,
  isRegExp: Pl,
  isFunction: Le,
  isStream: Cl,
  isURLSearchParams: xl,
  isTypedArray: Ol,
  isFileList: yl,
  forEach: st,
  merge: Bt,
  extend: Nl,
  trim: Ll,
  stripBOM: Bl,
  inherits: Rl,
  toFlatObject: Al,
  kindOf: gt,
  kindOfTest: ze,
  endsWith: zl,
  toArray: Ml,
  forEachEntry: Dl,
  matchAll: Hl,
  isHTMLForm: Il,
  hasOwnProperty: si,
  hasOwnProp: si,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: en,
  freezeMethods: Vl,
  toObjectSet: Ul,
  toCamelCase: Fl,
  noop: Wl,
  toFiniteNumber: Zl,
  findKey: Ji,
  global: Pe,
  isContextDefined: Qi,
  isSpecCompliantForm: ql,
  toJSONObject: $l,
  isAsyncFn: jl,
  isThenable: Yl,
  setImmediate: tn,
  asap: Xl,
  isIterable: Kl
};
function te(e, t, i, s, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), i && (this.config = i), s && (this.request = s), n && (this.response = n, this.status = n.status ? n.status : null);
}
W.inherits(te, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: W.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const nn = te.prototype, ln = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ln[e] = { value: e };
});
Object.defineProperties(te, ln);
Object.defineProperty(nn, "isAxiosError", { value: !0 });
te.from = (e, t, i, s, n, r) => {
  const u = Object.create(nn);
  return W.toFlatObject(e, u, function(l) {
    return l !== Error.prototype;
  }, (f) => f !== "isAxiosError"), te.call(u, e.message, t, i, s, n), u.cause = e, u.name = e.name, r && Object.assign(u, r), u;
};
const Gl = null;
function Rt(e) {
  return W.isPlainObject(e) || W.isArray(e);
}
function sn(e) {
  return W.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function oi(e, t, i) {
  return e ? e.concat(t).map(function(n, r) {
    return n = sn(n), !i && r ? "[" + n + "]" : n;
  }).join(i ? "." : "") : t;
}
function Jl(e) {
  return W.isArray(e) && !e.some(Rt);
}
const Ql = W.toFlatObject(W, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function _t(e, t, i) {
  if (!W.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), i = W.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(z, o) {
    return !W.isUndefined(o[z]);
  });
  const s = i.metaTokens, n = i.visitor || c, r = i.dots, u = i.indexes, l = (i.Blob || typeof Blob < "u" && Blob) && W.isSpecCompliantForm(t);
  if (!W.isFunction(n))
    throw new TypeError("visitor must be a function");
  function _(E) {
    if (E === null) return "";
    if (W.isDate(E))
      return E.toISOString();
    if (!l && W.isBlob(E))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return W.isArrayBuffer(E) || W.isTypedArray(E) ? l && typeof Blob == "function" ? new Blob([E]) : Buffer.from(E) : E;
  }
  function c(E, z, o) {
    let a = E;
    if (E && !o && typeof E == "object") {
      if (W.endsWith(z, "{}"))
        z = s ? z : z.slice(0, -2), E = JSON.stringify(E);
      else if (W.isArray(E) && Jl(E) || (W.isFileList(E) || W.endsWith(z, "[]")) && (a = W.toArray(E)))
        return z = sn(z), a.forEach(function(h, g) {
          !(W.isUndefined(h) || h === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? oi([z], g, r) : u === null ? z : z + "[]",
            _(h)
          );
        }), !1;
    }
    return Rt(E) ? !0 : (t.append(oi(o, z, r), _(E)), !1);
  }
  const m = [], x = Object.assign(Ql, {
    defaultVisitor: c,
    convertValue: _,
    isVisitable: Rt
  });
  function T(E, z) {
    if (!W.isUndefined(E)) {
      if (m.indexOf(E) !== -1)
        throw Error("Circular reference detected in " + z.join("."));
      m.push(E), W.forEach(E, function(a, d) {
        (!(W.isUndefined(a) || a === null) && n.call(
          t,
          a,
          W.isString(d) ? d.trim() : d,
          z,
          x
        )) === !0 && T(a, z ? z.concat(d) : [d]);
      }), m.pop();
    }
  }
  if (!W.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), t;
}
function ai(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
    return t[s];
  });
}
function Wt(e, t) {
  this._pairs = [], e && _t(e, this, t);
}
const on = Wt.prototype;
on.append = function(t, i) {
  this._pairs.push([t, i]);
};
on.toString = function(t) {
  const i = t ? function(s) {
    return t.call(this, s, ai);
  } : ai;
  return this._pairs.map(function(n) {
    return i(n[0]) + "=" + i(n[1]);
  }, "").join("&");
};
function es(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function an(e, t, i) {
  if (!t)
    return e;
  const s = i && i.encode || es;
  W.isFunction(i) && (i = {
    serialize: i
  });
  const n = i && i.serialize;
  let r;
  if (n ? r = n(t, i) : r = W.isURLSearchParams(t) ? t.toString() : new Wt(t, i).toString(s), r) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + r;
  }
  return e;
}
class ri {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, i, s) {
    return this.handlers.push({
      fulfilled: t,
      rejected: i,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    W.forEach(this.handlers, function(s) {
      s !== null && t(s);
    });
  }
}
const rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ts = typeof URLSearchParams < "u" ? URLSearchParams : Wt, is = typeof FormData < "u" ? FormData : null, ns = typeof Blob < "u" ? Blob : null, ls = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ts,
    FormData: is,
    Blob: ns
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zt = typeof window < "u" && typeof document < "u", At = typeof navigator == "object" && navigator || void 0, ss = Zt && (!At || ["ReactNative", "NativeScript", "NS"].indexOf(At.product) < 0), os = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", as = Zt && window.location.href || "http://localhost", rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zt,
  hasStandardBrowserEnv: ss,
  hasStandardBrowserWebWorkerEnv: os,
  navigator: At,
  origin: as
}, Symbol.toStringTag, { value: "Module" })), we = {
  ...rs,
  ...ls
};
function cs(e, t) {
  return _t(e, new we.classes.URLSearchParams(), Object.assign({
    visitor: function(i, s, n, r) {
      return we.isNode && W.isBuffer(i) ? (this.append(s, i.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function us(e) {
  return W.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ds(e) {
  const t = {}, i = Object.keys(e);
  let s;
  const n = i.length;
  let r;
  for (s = 0; s < n; s++)
    r = i[s], t[r] = e[r];
  return t;
}
function cn(e) {
  function t(i, s, n, r) {
    let u = i[r++];
    if (u === "__proto__") return !0;
    const f = Number.isFinite(+u), l = r >= i.length;
    return u = !u && W.isArray(n) ? n.length : u, l ? (W.hasOwnProp(n, u) ? n[u] = [n[u], s] : n[u] = s, !f) : ((!n[u] || !W.isObject(n[u])) && (n[u] = []), t(i, s, n[u], r) && W.isArray(n[u]) && (n[u] = ds(n[u])), !f);
  }
  if (W.isFormData(e) && W.isFunction(e.entries)) {
    const i = {};
    return W.forEachEntry(e, (s, n) => {
      t(us(s), n, i, 0);
    }), i;
  }
  return null;
}
function fs(e, t, i) {
  if (W.isString(e))
    try {
      return (t || JSON.parse)(e), W.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (i || JSON.stringify)(e);
}
const ot = {
  transitional: rn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, i) {
    const s = i.getContentType() || "", n = s.indexOf("application/json") > -1, r = W.isObject(t);
    if (r && W.isHTMLForm(t) && (t = new FormData(t)), W.isFormData(t))
      return n ? JSON.stringify(cn(t)) : t;
    if (W.isArrayBuffer(t) || W.isBuffer(t) || W.isStream(t) || W.isFile(t) || W.isBlob(t) || W.isReadableStream(t))
      return t;
    if (W.isArrayBufferView(t))
      return t.buffer;
    if (W.isURLSearchParams(t))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let f;
    if (r) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return cs(t, this.formSerializer).toString();
      if ((f = W.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return _t(
          f ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return r || n ? (i.setContentType("application/json", !1), fs(t)) : t;
  }],
  transformResponse: [function(t) {
    const i = this.transitional || ot.transitional, s = i && i.forcedJSONParsing, n = this.responseType === "json";
    if (W.isResponse(t) || W.isReadableStream(t))
      return t;
    if (t && W.isString(t) && (s && !this.responseType || n)) {
      const u = !(i && i.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (f) {
        if (u)
          throw f.name === "SyntaxError" ? te.from(f, te.ERR_BAD_RESPONSE, this, null, this.response) : f;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: we.classes.FormData,
    Blob: we.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
W.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ot.headers[e] = {};
});
const hs = W.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gs = (e) => {
  const t = {};
  let i, s, n;
  return e && e.split(`
`).forEach(function(u) {
    n = u.indexOf(":"), i = u.substring(0, n).trim().toLowerCase(), s = u.substring(n + 1).trim(), !(!i || t[i] && hs[i]) && (i === "set-cookie" ? t[i] ? t[i].push(s) : t[i] = [s] : t[i] = t[i] ? t[i] + ", " + s : s);
  }), t;
}, ci = Symbol("internals");
function tt(e) {
  return e && String(e).trim().toLowerCase();
}
function rt(e) {
  return e === !1 || e == null ? e : W.isArray(e) ? e.map(rt) : String(e);
}
function ps(e) {
  const t = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = i.exec(e); )
    t[s[1]] = s[2];
  return t;
}
const ms = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Et(e, t, i, s, n) {
  if (W.isFunction(s))
    return s.call(this, t, i);
  if (n && (t = i), !!W.isString(t)) {
    if (W.isString(s))
      return t.indexOf(s) !== -1;
    if (W.isRegExp(s))
      return s.test(t);
  }
}
function _s(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, i, s) => i.toUpperCase() + s);
}
function bs(e, t) {
  const i = W.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(e, s + i, {
      value: function(n, r, u) {
        return this[s].call(this, t, n, r, u);
      },
      configurable: !0
    });
  });
}
let Ne = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, i, s) {
    const n = this;
    function r(f, l, _) {
      const c = tt(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const m = W.findKey(n, c);
      (!m || n[m] === void 0 || _ === !0 || _ === void 0 && n[m] !== !1) && (n[m || l] = rt(f));
    }
    const u = (f, l) => W.forEach(f, (_, c) => r(_, c, l));
    if (W.isPlainObject(t) || t instanceof this.constructor)
      u(t, i);
    else if (W.isString(t) && (t = t.trim()) && !ms(t))
      u(gs(t), i);
    else if (W.isObject(t) && W.isIterable(t)) {
      let f = {}, l, _;
      for (const c of t) {
        if (!W.isArray(c))
          throw TypeError("Object iterator must return a key-value pair");
        f[_ = c[0]] = (l = f[_]) ? W.isArray(l) ? [...l, c[1]] : [l, c[1]] : c[1];
      }
      u(f, i);
    } else
      t != null && r(i, t, s);
    return this;
  }
  get(t, i) {
    if (t = tt(t), t) {
      const s = W.findKey(this, t);
      if (s) {
        const n = this[s];
        if (!i)
          return n;
        if (i === !0)
          return ps(n);
        if (W.isFunction(i))
          return i.call(this, n, s);
        if (W.isRegExp(i))
          return i.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, i) {
    if (t = tt(t), t) {
      const s = W.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!i || Et(this, this[s], s, i)));
    }
    return !1;
  }
  delete(t, i) {
    const s = this;
    let n = !1;
    function r(u) {
      if (u = tt(u), u) {
        const f = W.findKey(s, u);
        f && (!i || Et(s, s[f], f, i)) && (delete s[f], n = !0);
      }
    }
    return W.isArray(t) ? t.forEach(r) : r(t), n;
  }
  clear(t) {
    const i = Object.keys(this);
    let s = i.length, n = !1;
    for (; s--; ) {
      const r = i[s];
      (!t || Et(this, this[r], r, t, !0)) && (delete this[r], n = !0);
    }
    return n;
  }
  normalize(t) {
    const i = this, s = {};
    return W.forEach(this, (n, r) => {
      const u = W.findKey(s, r);
      if (u) {
        i[u] = rt(n), delete i[r];
        return;
      }
      const f = t ? _s(r) : String(r).trim();
      f !== r && delete i[r], i[f] = rt(n), s[f] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const i = /* @__PURE__ */ Object.create(null);
    return W.forEach(this, (s, n) => {
      s != null && s !== !1 && (i[n] = t && W.isArray(s) ? s.join(", ") : s);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...i) {
    const s = new this(t);
    return i.forEach((n) => s.set(n)), s;
  }
  static accessor(t) {
    const s = (this[ci] = this[ci] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function r(u) {
      const f = tt(u);
      s[f] || (bs(n, u), s[f] = !0);
    }
    return W.isArray(t) ? t.forEach(r) : r(t), this;
  }
};
Ne.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
W.reduceDescriptors(Ne.prototype, ({ value: e }, t) => {
  let i = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(s) {
      this[i] = s;
    }
  };
});
W.freezeMethods(Ne);
function St(e, t) {
  const i = this || ot, s = t || i, n = Ne.from(s.headers);
  let r = s.data;
  return W.forEach(e, function(f) {
    r = f.call(i, r, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), r;
}
function un(e) {
  return !!(e && e.__CANCEL__);
}
function Ke(e, t, i) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, i), this.name = "CanceledError";
}
W.inherits(Ke, te, {
  __CANCEL__: !0
});
function dn(e, t, i) {
  const s = i.config.validateStatus;
  !i.status || !s || s(i.status) ? e(i) : t(new te(
    "Request failed with status code " + i.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
function vs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function ys(e, t) {
  e = e || 10;
  const i = new Array(e), s = new Array(e);
  let n = 0, r = 0, u;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const _ = Date.now(), c = s[r];
    u || (u = _), i[n] = l, s[n] = _;
    let m = r, x = 0;
    for (; m !== n; )
      x += i[m++], m = m % e;
    if (n = (n + 1) % e, n === r && (r = (r + 1) % e), _ - u < t)
      return;
    const T = c && _ - c;
    return T ? Math.round(x * 1e3 / T) : void 0;
  };
}
function Cs(e, t) {
  let i = 0, s = 1e3 / t, n, r;
  const u = (_, c = Date.now()) => {
    i = c, n = null, r && (clearTimeout(r), r = null), e.apply(null, _);
  };
  return [(..._) => {
    const c = Date.now(), m = c - i;
    m >= s ? u(_, c) : (n = _, r || (r = setTimeout(() => {
      r = null, u(n);
    }, s - m)));
  }, () => n && u(n)];
}
const ut = (e, t, i = 3) => {
  let s = 0;
  const n = ys(50, 250);
  return Cs((r) => {
    const u = r.loaded, f = r.lengthComputable ? r.total : void 0, l = u - s, _ = n(l), c = u <= f;
    s = u;
    const m = {
      loaded: u,
      total: f,
      progress: f ? u / f : void 0,
      bytes: l,
      rate: _ || void 0,
      estimated: _ && f && c ? (f - u) / _ : void 0,
      event: r,
      lengthComputable: f != null,
      [t ? "download" : "upload"]: !0
    };
    e(m);
  }, i);
}, ui = (e, t) => {
  const i = e != null;
  return [(s) => t[0]({
    lengthComputable: i,
    total: e,
    loaded: s
  }), t[1]];
}, di = (e) => (...t) => W.asap(() => e(...t)), ws = we.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (i) => (i = new URL(i, we.origin), e.protocol === i.protocol && e.host === i.host && (t || e.port === i.port)))(
  new URL(we.origin),
  we.navigator && /(msie|trident)/i.test(we.navigator.userAgent)
) : () => !0, xs = we.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, i, s, n, r) {
      const u = [e + "=" + encodeURIComponent(t)];
      W.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), W.isString(s) && u.push("path=" + s), W.isString(n) && u.push("domain=" + n), r === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Es(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ss(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function fn(e, t, i) {
  let s = !Es(t);
  return e && (s || i == !1) ? Ss(e, t) : t;
}
const fi = (e) => e instanceof Ne ? { ...e } : e;
function Ue(e, t) {
  t = t || {};
  const i = {};
  function s(_, c, m, x) {
    return W.isPlainObject(_) && W.isPlainObject(c) ? W.merge.call({ caseless: x }, _, c) : W.isPlainObject(c) ? W.merge({}, c) : W.isArray(c) ? c.slice() : c;
  }
  function n(_, c, m, x) {
    if (W.isUndefined(c)) {
      if (!W.isUndefined(_))
        return s(void 0, _, m, x);
    } else return s(_, c, m, x);
  }
  function r(_, c) {
    if (!W.isUndefined(c))
      return s(void 0, c);
  }
  function u(_, c) {
    if (W.isUndefined(c)) {
      if (!W.isUndefined(_))
        return s(void 0, _);
    } else return s(void 0, c);
  }
  function f(_, c, m) {
    if (m in t)
      return s(_, c);
    if (m in e)
      return s(void 0, _);
  }
  const l = {
    url: r,
    method: r,
    data: r,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: f,
    headers: (_, c, m) => n(fi(_), fi(c), m, !0)
  };
  return W.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const m = l[c] || n, x = m(e[c], t[c], c);
    W.isUndefined(x) && m !== f || (i[c] = x);
  }), i;
}
const hn = (e) => {
  const t = Ue({}, e);
  let { data: i, withXSRFToken: s, xsrfHeaderName: n, xsrfCookieName: r, headers: u, auth: f } = t;
  t.headers = u = Ne.from(u), t.url = an(fn(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), f && u.set(
    "Authorization",
    "Basic " + btoa((f.username || "") + ":" + (f.password ? unescape(encodeURIComponent(f.password)) : ""))
  );
  let l;
  if (W.isFormData(i)) {
    if (we.hasStandardBrowserEnv || we.hasStandardBrowserWebWorkerEnv)
      u.setContentType(void 0);
    else if ((l = u.getContentType()) !== !1) {
      const [_, ...c] = l ? l.split(";").map((m) => m.trim()).filter(Boolean) : [];
      u.setContentType([_ || "multipart/form-data", ...c].join("; "));
    }
  }
  if (we.hasStandardBrowserEnv && (s && W.isFunction(s) && (s = s(t)), s || s !== !1 && ws(t.url))) {
    const _ = n && r && xs.read(r);
    _ && u.set(n, _);
  }
  return t;
}, Ts = typeof XMLHttpRequest < "u", ks = Ts && function(e) {
  return new Promise(function(i, s) {
    const n = hn(e);
    let r = n.data;
    const u = Ne.from(n.headers).normalize();
    let { responseType: f, onUploadProgress: l, onDownloadProgress: _ } = n, c, m, x, T, E;
    function z() {
      T && T(), E && E(), n.cancelToken && n.cancelToken.unsubscribe(c), n.signal && n.signal.removeEventListener("abort", c);
    }
    let o = new XMLHttpRequest();
    o.open(n.method.toUpperCase(), n.url, !0), o.timeout = n.timeout;
    function a() {
      if (!o)
        return;
      const h = Ne.from(
        "getAllResponseHeaders" in o && o.getAllResponseHeaders()
      ), b = {
        data: !f || f === "text" || f === "json" ? o.responseText : o.response,
        status: o.status,
        statusText: o.statusText,
        headers: h,
        config: e,
        request: o
      };
      dn(function(v) {
        i(v), z();
      }, function(v) {
        s(v), z();
      }, b), o = null;
    }
    "onloadend" in o ? o.onloadend = a : o.onreadystatechange = function() {
      !o || o.readyState !== 4 || o.status === 0 && !(o.responseURL && o.responseURL.indexOf("file:") === 0) || setTimeout(a);
    }, o.onabort = function() {
      o && (s(new te("Request aborted", te.ECONNABORTED, e, o)), o = null);
    }, o.onerror = function() {
      s(new te("Network Error", te.ERR_NETWORK, e, o)), o = null;
    }, o.ontimeout = function() {
      let g = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const b = n.transitional || rn;
      n.timeoutErrorMessage && (g = n.timeoutErrorMessage), s(new te(
        g,
        b.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        o
      )), o = null;
    }, r === void 0 && u.setContentType(null), "setRequestHeader" in o && W.forEach(u.toJSON(), function(g, b) {
      o.setRequestHeader(b, g);
    }), W.isUndefined(n.withCredentials) || (o.withCredentials = !!n.withCredentials), f && f !== "json" && (o.responseType = n.responseType), _ && ([x, E] = ut(_, !0), o.addEventListener("progress", x)), l && o.upload && ([m, T] = ut(l), o.upload.addEventListener("progress", m), o.upload.addEventListener("loadend", T)), (n.cancelToken || n.signal) && (c = (h) => {
      o && (s(!h || h.type ? new Ke(null, e, o) : h), o.abort(), o = null);
    }, n.cancelToken && n.cancelToken.subscribe(c), n.signal && (n.signal.aborted ? c() : n.signal.addEventListener("abort", c)));
    const d = vs(n.url);
    if (d && we.protocols.indexOf(d) === -1) {
      s(new te("Unsupported protocol " + d + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    o.send(r || null);
  });
}, Ls = (e, t) => {
  const { length: i } = e = e ? e.filter(Boolean) : [];
  if (t || i) {
    let s = new AbortController(), n;
    const r = function(_) {
      if (!n) {
        n = !0, f();
        const c = _ instanceof Error ? _ : this.reason;
        s.abort(c instanceof te ? c : new Ke(c instanceof Error ? c.message : c));
      }
    };
    let u = t && setTimeout(() => {
      u = null, r(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
    }, t);
    const f = () => {
      e && (u && clearTimeout(u), u = null, e.forEach((_) => {
        _.unsubscribe ? _.unsubscribe(r) : _.removeEventListener("abort", r);
      }), e = null);
    };
    e.forEach((_) => _.addEventListener("abort", r));
    const { signal: l } = s;
    return l.unsubscribe = () => W.asap(f), l;
  }
}, Ns = function* (e, t) {
  let i = e.byteLength;
  if (i < t) {
    yield e;
    return;
  }
  let s = 0, n;
  for (; s < i; )
    n = s + t, yield e.slice(s, n), s = n;
}, Bs = async function* (e, t) {
  for await (const i of Rs(e))
    yield* Ns(i, t);
}, Rs = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: i, value: s } = await t.read();
      if (i)
        break;
      yield s;
    }
  } finally {
    await t.cancel();
  }
}, hi = (e, t, i, s) => {
  const n = Bs(e, t);
  let r = 0, u, f = (l) => {
    u || (u = !0, s && s(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: _, value: c } = await n.next();
        if (_) {
          f(), l.close();
          return;
        }
        let m = c.byteLength;
        if (i) {
          let x = r += m;
          i(x);
        }
        l.enqueue(new Uint8Array(c));
      } catch (_) {
        throw f(_), _;
      }
    },
    cancel(l) {
      return f(l), n.return();
    }
  }, {
    highWaterMark: 2
  });
}, bt = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gn = bt && typeof ReadableStream == "function", As = bt && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), pn = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, zs = gn && pn(() => {
  let e = !1;
  const t = new Request(we.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), gi = 64 * 1024, zt = gn && pn(() => W.isReadableStream(new Response("").body)), dt = {
  stream: zt && ((e) => e.body)
};
bt && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !dt[t] && (dt[t] = W.isFunction(e[t]) ? (i) => i[t]() : (i, s) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, s);
    });
  });
})(new Response());
const Ms = async (e) => {
  if (e == null)
    return 0;
  if (W.isBlob(e))
    return e.size;
  if (W.isSpecCompliantForm(e))
    return (await new Request(we.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (W.isArrayBufferView(e) || W.isArrayBuffer(e))
    return e.byteLength;
  if (W.isURLSearchParams(e) && (e = e + ""), W.isString(e))
    return (await As(e)).byteLength;
}, Os = async (e, t) => {
  const i = W.toFiniteNumber(e.getContentLength());
  return i ?? Ms(t);
}, Ds = bt && (async (e) => {
  let {
    url: t,
    method: i,
    data: s,
    signal: n,
    cancelToken: r,
    timeout: u,
    onDownloadProgress: f,
    onUploadProgress: l,
    responseType: _,
    headers: c,
    withCredentials: m = "same-origin",
    fetchOptions: x
  } = hn(e);
  _ = _ ? (_ + "").toLowerCase() : "text";
  let T = Ls([n, r && r.toAbortSignal()], u), E;
  const z = T && T.unsubscribe && (() => {
    T.unsubscribe();
  });
  let o;
  try {
    if (l && zs && i !== "get" && i !== "head" && (o = await Os(c, s)) !== 0) {
      let b = new Request(t, {
        method: "POST",
        body: s,
        duplex: "half"
      }), p;
      if (W.isFormData(s) && (p = b.headers.get("content-type")) && c.setContentType(p), b.body) {
        const [v, C] = ui(
          o,
          ut(di(l))
        );
        s = hi(b.body, gi, v, C);
      }
    }
    W.isString(m) || (m = m ? "include" : "omit");
    const a = "credentials" in Request.prototype;
    E = new Request(t, {
      ...x,
      signal: T,
      method: i.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: s,
      duplex: "half",
      credentials: a ? m : void 0
    });
    let d = await fetch(E);
    const h = zt && (_ === "stream" || _ === "response");
    if (zt && (f || h && z)) {
      const b = {};
      ["status", "statusText", "headers"].forEach((y) => {
        b[y] = d[y];
      });
      const p = W.toFiniteNumber(d.headers.get("content-length")), [v, C] = f && ui(
        p,
        ut(di(f), !0)
      ) || [];
      d = new Response(
        hi(d.body, gi, v, () => {
          C && C(), z && z();
        }),
        b
      );
    }
    _ = _ || "text";
    let g = await dt[W.findKey(dt, _) || "text"](d, e);
    return !h && z && z(), await new Promise((b, p) => {
      dn(b, p, {
        data: g,
        headers: Ne.from(d.headers),
        status: d.status,
        statusText: d.statusText,
        config: e,
        request: E
      });
    });
  } catch (a) {
    throw z && z(), a && a.name === "TypeError" && /Load failed|fetch/i.test(a.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, E),
      {
        cause: a.cause || a
      }
    ) : te.from(a, a && a.code, e, E);
  }
}), Mt = {
  http: Gl,
  xhr: ks,
  fetch: Ds
};
W.forEach(Mt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pi = (e) => `- ${e}`, Hs = (e) => W.isFunction(e) || e === null || e === !1, mn = {
  getAdapter: (e) => {
    e = W.isArray(e) ? e : [e];
    const { length: t } = e;
    let i, s;
    const n = {};
    for (let r = 0; r < t; r++) {
      i = e[r];
      let u;
      if (s = i, !Hs(i) && (s = Mt[(u = String(i)).toLowerCase()], s === void 0))
        throw new te(`Unknown adapter '${u}'`);
      if (s)
        break;
      n[u || "#" + r] = s;
    }
    if (!s) {
      const r = Object.entries(n).map(
        ([f, l]) => `adapter ${f} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = t ? r.length > 1 ? `since :
` + r.map(pi).join(`
`) : " " + pi(r[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return s;
  },
  adapters: Mt
};
function Tt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ke(null, e);
}
function mi(e) {
  return Tt(e), e.headers = Ne.from(e.headers), e.data = St.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mn.getAdapter(e.adapter || ot.adapter)(e).then(function(s) {
    return Tt(e), s.data = St.call(
      e,
      e.transformResponse,
      s
    ), s.headers = Ne.from(s.headers), s;
  }, function(s) {
    return un(s) || (Tt(e), s && s.response && (s.response.data = St.call(
      e,
      e.transformResponse,
      s.response
    ), s.response.headers = Ne.from(s.response.headers))), Promise.reject(s);
  });
}
const _n = "1.9.0", vt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  vt[e] = function(s) {
    return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const _i = {};
vt.transitional = function(t, i, s) {
  function n(r, u) {
    return "[Axios v" + _n + "] Transitional option '" + r + "'" + u + (s ? ". " + s : "");
  }
  return (r, u, f) => {
    if (t === !1)
      throw new te(
        n(u, " has been removed" + (i ? " in " + i : "")),
        te.ERR_DEPRECATED
      );
    return i && !_i[u] && (_i[u] = !0, console.warn(
      n(
        u,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), t ? t(r, u, f) : !0;
  };
};
vt.spelling = function(t) {
  return (i, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function Is(e, t, i) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(e);
  let n = s.length;
  for (; n-- > 0; ) {
    const r = s[n], u = t[r];
    if (u) {
      const f = e[r], l = f === void 0 || u(f, r, e);
      if (l !== !0)
        throw new te("option " + r + " must be " + l, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new te("Unknown option " + r, te.ERR_BAD_OPTION);
  }
}
const ct = {
  assertOptions: Is,
  validators: vt
}, De = ct.validators;
let Ve = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new ri(),
      response: new ri()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, i) {
    try {
      return await this._request(t, i);
    } catch (s) {
      if (s instanceof Error) {
        let n = {};
        Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
        const r = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? r && !String(s.stack).endsWith(r.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + r) : s.stack = r;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(t, i) {
    typeof t == "string" ? (i = i || {}, i.url = t) : i = t || {}, i = Ue(this.defaults, i);
    const { transitional: s, paramsSerializer: n, headers: r } = i;
    s !== void 0 && ct.assertOptions(s, {
      silentJSONParsing: De.transitional(De.boolean),
      forcedJSONParsing: De.transitional(De.boolean),
      clarifyTimeoutError: De.transitional(De.boolean)
    }, !1), n != null && (W.isFunction(n) ? i.paramsSerializer = {
      serialize: n
    } : ct.assertOptions(n, {
      encode: De.function,
      serialize: De.function
    }, !0)), i.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? i.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : i.allowAbsoluteUrls = !0), ct.assertOptions(i, {
      baseUrl: De.spelling("baseURL"),
      withXsrfToken: De.spelling("withXSRFToken")
    }, !0), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let u = r && W.merge(
      r.common,
      r[i.method]
    );
    r && W.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (E) => {
        delete r[E];
      }
    ), i.headers = Ne.concat(u, r);
    const f = [];
    let l = !0;
    this.interceptors.request.forEach(function(z) {
      typeof z.runWhen == "function" && z.runWhen(i) === !1 || (l = l && z.synchronous, f.unshift(z.fulfilled, z.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(z) {
      _.push(z.fulfilled, z.rejected);
    });
    let c, m = 0, x;
    if (!l) {
      const E = [mi.bind(this), void 0];
      for (E.unshift.apply(E, f), E.push.apply(E, _), x = E.length, c = Promise.resolve(i); m < x; )
        c = c.then(E[m++], E[m++]);
      return c;
    }
    x = f.length;
    let T = i;
    for (m = 0; m < x; ) {
      const E = f[m++], z = f[m++];
      try {
        T = E(T);
      } catch (o) {
        z.call(this, o);
        break;
      }
    }
    try {
      c = mi.call(this, T);
    } catch (E) {
      return Promise.reject(E);
    }
    for (m = 0, x = _.length; m < x; )
      c = c.then(_[m++], _[m++]);
    return c;
  }
  getUri(t) {
    t = Ue(this.defaults, t);
    const i = fn(t.baseURL, t.url, t.allowAbsoluteUrls);
    return an(i, t.params, t.paramsSerializer);
  }
};
W.forEach(["delete", "get", "head", "options"], function(t) {
  Ve.prototype[t] = function(i, s) {
    return this.request(Ue(s || {}, {
      method: t,
      url: i,
      data: (s || {}).data
    }));
  };
});
W.forEach(["post", "put", "patch"], function(t) {
  function i(s) {
    return function(r, u, f) {
      return this.request(Ue(f || {}, {
        method: t,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: r,
        data: u
      }));
    };
  }
  Ve.prototype[t] = i(), Ve.prototype[t + "Form"] = i(!0);
});
let Fs = class bn {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(r) {
      i = r;
    });
    const s = this;
    this.promise.then((n) => {
      if (!s._listeners) return;
      let r = s._listeners.length;
      for (; r-- > 0; )
        s._listeners[r](n);
      s._listeners = null;
    }), this.promise.then = (n) => {
      let r;
      const u = new Promise((f) => {
        s.subscribe(f), r = f;
      }).then(n);
      return u.cancel = function() {
        s.unsubscribe(r);
      }, u;
    }, t(function(r, u, f) {
      s.reason || (s.reason = new Ke(r, u, f), i(s.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(t);
    i !== -1 && this._listeners.splice(i, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), i = (s) => {
      t.abort(s);
    };
    return this.subscribe(i), t.signal.unsubscribe = () => this.unsubscribe(i), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new bn(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
};
function Ps(e) {
  return function(i) {
    return e.apply(null, i);
  };
}
function Vs(e) {
  return W.isObject(e) && e.isAxiosError === !0;
}
const Ot = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ot).forEach(([e, t]) => {
  Ot[t] = e;
});
function vn(e) {
  const t = new Ve(e), i = Yi(Ve.prototype.request, t);
  return W.extend(i, Ve.prototype, t, { allOwnKeys: !0 }), W.extend(i, t, null, { allOwnKeys: !0 }), i.create = function(n) {
    return vn(Ue(e, n));
  }, i;
}
const pe = vn(ot);
pe.Axios = Ve;
pe.CanceledError = Ke;
pe.CancelToken = Fs;
pe.isCancel = un;
pe.VERSION = _n;
pe.toFormData = _t;
pe.AxiosError = te;
pe.Cancel = pe.CanceledError;
pe.all = function(t) {
  return Promise.all(t);
};
pe.spread = Ps;
pe.isAxiosError = Vs;
pe.mergeConfig = Ue;
pe.AxiosHeaders = Ne;
pe.formToJSON = (e) => cn(W.isHTMLForm(e) ? new FormData(e) : e);
pe.getAdapter = mn.getAdapter;
pe.HttpStatusCode = Ot;
pe.default = pe;
const {
  Axios: js,
  AxiosError: Ys,
  CanceledError: Xs,
  isCancel: Ks,
  CancelToken: Gs,
  VERSION: Js,
  all: Qs,
  Cancel: eo,
  isAxiosError: to,
  spread: io,
  toFormData: no,
  AxiosHeaders: lo,
  HttpStatusCode: so,
  formToJSON: oo,
  getAdapter: ao,
  mergeConfig: ro
} = pe, Us = async (e) => {
  const { files: t, upload: i, baseUrl: s, prefixUrl: n = "", notification: r } = e, u = new FormData();
  u.append("file", t[0]);
  try {
    const l = (await pe.post(
      s,
      u,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )).data;
    l.file_path ? (i({
      errorMessage: "",
      result: [
        {
          url: n + l.file_path,
          name: t[0].name,
          size: t[0].size
        }
      ]
    }), r == null || r("Upload successful!")) : r == null || r("Upload failed!");
  } catch {
    r == null || r("Upload failed!");
  }
}, Ws = async (e) => {
  const { files: t, upload: i, baseUrl: s, prefixUrl: n = "", notification: r } = e, u = new FormData();
  u.append("file", t[0]);
  try {
    const l = (await pe.post(s, u, {
      headers: { "Content-Type": "multipart/form-data" }
    })).data;
    l.file_path ? i({
      result: [{
        url: n + l.file_path,
        // hoặc `${prefix}${data.file_path}` nếu cần
        name: t[0].name,
        size: t[0].size
      }],
      errorMessage: ""
    }) : r == null || r("Upload video failed!");
  } catch {
    r == null || r("Upload video error!");
  }
};
function co({
  value: e,
  onChange: t,
  placeholder: i = "Enter some text...",
  readOnly: s = !1,
  imageConfig: n,
  videoConfig: r,
  ...u
}) {
  return /* @__PURE__ */ Mn.jsx(
    dl,
    {
      onImageUploadBefore: (f, l, _) => (n != null && n.baseUrl && Us({
        ...n || {},
        files: (n == null ? void 0 : n.files) || f,
        upload: _
      }), !0),
      onVideoUploadBefore: (f, l, _) => (r != null && r.baseUrl && Ws({
        ...r,
        files: (r == null ? void 0 : r.files) || f,
        upload: _
      }), !0),
      setContents: e,
      onChange: t,
      placeholder: i,
      disable: s,
      height: "300px",
      setOptions: {
        buttonList: [
          // default
          ["undo", "redo"],
          ["font", "fontSize", "formatBlock"],
          ["paragraphStyle", "blockquote"],
          ["bold", "underline", "italic", "strike", "subscript", "superscript"],
          ["fontColor", "hiliteColor", "textStyle"],
          ["removeFormat"],
          ["outdent", "indent"],
          ["align", "horizontalRule", "list", "lineHeight"],
          ["table", "link", "image", "video"],
          ["fullScreen", "showBlocks", "codeView"],
          ["preview"],
          ["save"],
          // responsive
          ["%1161", [
            ["undo", "redo"],
            [":p-Formats-default.more_paragraph", "font", "fontSize", "formatBlock", "paragraphStyle", "blockquote"],
            ["bold", "underline", "italic", "strike", "subscript", "superscript"],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["-right", "save"],
            ["-right", ":i-Etc-default.more_vertical", "fullScreen", "showBlocks", "codeView", "preview"],
            ["-right", ":r-Table&Media-default.more_plus", "table", "link", "image", "video"]
          ]],
          ["%893", [
            ["undo", "redo"],
            [":p-Formats-default.more_paragraph", "font", "fontSize", "formatBlock", "paragraphStyle", "blockquote"],
            ["bold", "underline", "italic", "strike"],
            [":t-Fonts-default.more_text", "subscript", "superscript", "fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["-right", "save"],
            ["-right", ":i-Etc-default.more_vertical", "fullScreen", "showBlocks", "codeView", "preview"],
            ["-right", ":r-Table&Media-default.more_plus", "table", "link", "image", "video"]
          ]],
          ["%855", [
            ["undo", "redo"],
            [":p-Formats-default.more_paragraph", "font", "fontSize", "formatBlock", "paragraphStyle", "blockquote"],
            [":t-Fonts-default.more_text", "bold", "underline", "italic", "strike", "subscript", "superscript", "fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            [":r-Table&Media-default.more_plus", "table", "link", "image", "video"],
            ["-right", "save"],
            ["-right", ":i-Etc-default.more_vertical", "fullScreen", "showBlocks", "codeView", "preview"]
          ]],
          ["%563", [
            ["undo", "redo"],
            [":p-Formats-default.more_paragraph", "font", "fontSize", "formatBlock", "paragraphStyle", "blockquote"],
            [":t-Fonts-default.more_text", "bold", "underline", "italic", "strike", "subscript", "superscript", "fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            [":e-List&Line-default.more_horizontal", "align", "horizontalRule", "list", "lineHeight"],
            [":r-Table&Media-default.more_plus", "table", "link", "image", "video"],
            ["-right", "save"],
            ["-right", ":i-Etc-default.more_vertical", "fullScreen", "showBlocks", "codeView", "preview"]
          ]],
          ["%458", [
            ["undo", "redo"],
            [":p-Formats-default.more_paragraph", "font", "fontSize", "formatBlock", "paragraphStyle", "blockquote"],
            [":t-Fonts-default.more_text", "bold", "underline", "italic", "strike", "subscript", "superscript", "fontColor", "hiliteColor", "textStyle", "removeFormat"],
            [":e-List&Line-default.more_horizontal", "outdent", "indent", "align", "horizontalRule", "list", "lineHeight"],
            [":r-Table&Media-default.more_plus", "table", "link", "image", "video"],
            ["-right", "save"],
            ["-right", ":i-Etc-default.more_vertical", "fullScreen", "showBlocks", "codeView", "preview"]
          ]]
        ],
        font: [
          "Manrope",
          "Arial",
          "Tahoma",
          "Courier New",
          "Times New Roman",
          "Verdana",
          "Roboto",
          // Thêm font bạn muốn
          "Montserrat"
        ],
        defaultStyle: "font-family: Manrope, Roboto, Arial, sans-serif; font-size: 14px;",
        videoFileInput: !0
      },
      ...u
    }
  );
}
export {
  co as Editor,
  Us as uploadHandler,
  Ws as uploadVideoHandler
};
