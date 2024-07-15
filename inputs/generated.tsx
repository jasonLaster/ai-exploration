(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push(
  [[134], { 83254: function(e, t, a) {
  "use strict";
  function s(e) {
    let t = {},
      a = null,
      s = 0,
      n = e[0];
    for (let a = 0; a < n; a++) {
      let a = e[++s],
        n = e[++s],
        l = e.slice(s + 1, s + 1 + n).map(e => String.fromCharCode(e)).join("");
      t[a] = l, s += n
    }
    let l = new Map;
    for (; s < e.length - 1; ) {
      let n = "" + e[++s],
        r = "" + e[++s],
        i = e[++s],
        o = e[++s],
        d = 0 !== o ? t[o] : null,
        c = e[++s],
        u = s + c - 1,
        p = {};
      for (; s <= u; ) {
        let a = e[++s],
          n = e[++s],
          l = t[n],
          r = [],
          i = s + a - 2;
        for (; s <= i; ) {
          let a = e[++s],
            n = t[a];
          r.push(n)
        }
        p[l] = r.join(" ")
      }
      let h = n ? l.get(n)??null : null,
        m = {
          attributes: p,
          children: [],
          nodeType: i,
          parentObject: h,
          objectId: r,
          tagName: i !== Node.TEXT_NODE ? d??null : null,
          textContent: i === Node.TEXT_NODE ? d??null : null
        };
      h && h.children.push(m), l.set(r, m), null === a && (a = m)
    }
    return a
  }
  function n(e) {
    let t = 0,
      a = [],
      s = new Map;
    function n(e) {
      if (!e)
        return 0;
      if (s.has(e))
        return s.get(e); {
      let n = ++t;
      s.set(e, n), a.push(n), a.push(e.length);
      for (let t = 0; t < e.length; t++)
        a.push(e.charCodeAt(t));
      return n
    }
    }
    let l = [],
      r = [0, e];
    for (; r.length > 0; ) {
      let e = r.shift(),
        t = r.shift(),
        a = function(e) {
          if ("undefined" != typeof __RECORD_REPLAY_ARGUMENTS__ &&
              null != __RECORD_REPLAY_ARGUMENTS__ &&
              __RECORD_REPLAY_ARGUMENTS__.internal &&
              __RECORD_REPLAY_ARGUMENTS__.internal.registerPlainObject) {
            let t = __RECORD_REPLAY_ARGUMENTS__.internal.registerPlainObject(e);
            if (t)
              return parseInt(t)
          }
          throw Error("Could not find object id")
        }(t),
        { childNodes: s, classList: i, id: o, nodeType: d, tagName: c, textContent: u } = t;
      switch (d) {
        case Node.DOCUMENT_NODE:
          c = "#document";
          break;
        case Node.DOCUMENT_TYPE_NODE:
          c = "<!Doctype>";
          break;
        case Node.TEXT_NODE:
          u = u ? u.trim() : null;
          break;
        default:
          c = c.toLowerCase()
      }
      let p = [];
      if ("function" == typeof t.getAttributeNames) {
        let e = t.getAttributeNames();
        e.sort(), e.forEach(e => {
          let a = t.getAttribute(e);
          a ? (p.push(2), p.push(n(e)), p.push(n("" + a))) : (p.push(1), p.push(n(e)))
        })
      }
      if (l.push(e),
          l.push(a),
          l.push(d),
          l.push(d === Node.TEXT_NODE ? n(u) : n(c)),
          l.push(p.length),
          l.push(...p),
          s)
        for (let e of s)
          switch (e.nodeType) {
            case Node.COMMENT_NODE:
              break;
            case Node.TEXT_NODE:
              e.textContent?.trim() && (r.push(a), r.push(e));
              break;
            default:
              r.push(a), r.push(e)
          }
      d === Node.ELEMENT_NODE &&
      t instanceof HTMLIFrameElement &&
      null != t.contentDocument &&
      (r.push(a), r.push(t.contentDocument))
    }
    return [t, ...a, ...l]
  }
  a.r(t), a.d(t, { deserializeDOM: function() {
    return s
  }, serializeDOM: function() {
    return n
  } })
}, 44134: function(e, t, a) {
  "use strict";
  a.r(t), a.d(t, { default: function() {
    return tm
  } });
  var s = a(67557),
    n = a(89526),
    l = a(4835),
    r = a(2664),
    i = a(94438),
    o = a(35988),
    d = a(6890),
    c = a(26383),
    u = a(16566),
    p = a(70747),
    h = a(58828),
    m = a(84631),
    x = a(84983),
    g = a(94184),
    f = a.n(g),
    b = a(14525);
  function _({ colorSpanClassName: e, colorSwatchClassName: t, value: a }) {
    return (0,
            s.jsxs)(
              "span",
              {
                "data-color": a,
                children: [
                  t
                  ? (0, s.jsx)("span", { className: t, style: { backgroundColor: a } })
                  : null,
                  e ? (0, s.jsx)("span", { className: e, children: a }) : a
                ]
              }
            )
  }
  function N({ fontFamilySpanClassName: e, value: t }) {
    return (0, s.jsx)("span", { className: e, children: t })
  }
  function v({ href: e, value: t }) {
    return (0,
            s.jsx)(
              "a",
              {
                className: "theme-link",
                href: e,
                target: "_blank",
                rel: "noreferrer",
                children: t
              }
            )
  }
  class j extends n.PureComponent {
    render() {
      return this.props.values.map(e => {
        if ("string" == typeof e)
          return e;
        let{ type: t, value: a } = e;
        switch (t) {
          case b.r$:
            return n.createElement(
              _,
              {
                colorSpanClassName: this.props.colorSpanClassName,
                colorSwatchClassName: this.props.colorSwatchClassName,
                key: a,
                value: a
              }
            );
          case b.ut:
            return n.createElement(
              N,
              {
                fontFamilySpanClassName: this.props.fontFamilySpanClassName,
                key: a,
                value: a
              }
            );
          case b.ov:
            return n.createElement(v, { key: a, href: e.href, value: a })
        }
        return a
      })
    }
  }
  var y = a(71346);
  function I(e) {
    let{ selector: t } = e;
    return (0,
            s.jsxs)(
              "div",
              {
                className: t.overridden ? "computed-overridden" : "",
                children: [
                  (0,
                   s.jsx)(
                     "span",
                     {
                       className: "rule-link",
                       children: (0,
                                  s.jsx)(
                                    y.Z,
                                    {
                                      className: "computed-link theme-link",
                                      title: t.stylesheetURL,
                                      tabIndex: 0,
                                      children: t.stylesheet
                                    }
                                  )
                     }
                   ),
                  (0,
                   s.jsxs)(
                     "span",
                     {
                       dir: "ltr",
                       className: "rule-text theme-fg-color3",
                       children: [
                         (0,
                          s.jsx)(
                            "div",
                            { className: "fix-get-selection", children: t.selector }
                          ),
                         (0,
                          s.jsx)(
                            "div",
                            {
                              className: "fix-get-selection computed-other-property-value theme-fg-color1",
                              children: (0,
                                         s.jsx)(
                                           j,
                                           {
                                             colorSpanClassName: "computed-color",
                                             colorSwatchClassName: "computed-colorswatch",
                                             fontFamilySpanClassName: "computed-font-family",
                                             values: t.parsedValue
                                           }
                                         )
                            }
                          )
                       ]
                     }
                   )
                ]
              }
            )
  }
  function E(e) {
    let{ property: t, hidden: a, dark: n, isExpanded: l, toggleExpanded: r } = e,
      i = f()(
        "computed-expander",
        "theme-twisty",
        t.selectors.length > 0 ? "computed-expandable" : void 0,
        l ? "open" : void 0
      );
    return (0,
            s.jsxs)(
              s.Fragment,
              {
                children: [
                  (0,
                   s.jsxs)(
                     "div",
                     {
                       className: a
                                  ? "computed-property-hidden"
                                  : n
                                    ? "computed-property-view row-striped"
                                    : "computed-property-view",
                       onDoubleClick: r,
                       children: [
                         (0,
                          s.jsxs)(
                            "span",
                            {
                              className: "computed-property-name-container",
                              children: [
                                (0, s.jsx)("div", { className: i, onClick: r }),
                                (0,
                                 s.jsxs)(
                                   "span",
                                   {
                                     className: "computed-property-name theme-fg-color3",
                                     tabIndex: void 0,
                                     dir: "ltr",
                                     title: t.name,
                                     children: [
                                       t.name,
                                       (0,
                                        s.jsx)(
                                          "span",
                                          {
                                            className: "visually-hidden",
                                            children: ": "
                                          }
                                        )
                                     ]
                                   }
                                 )
                              ]
                            }
                          ),
                         (0,
                          s.jsxs)(
                            "span",
                            {
                              className: "computed-property-value-container",
                              children: [
                                (0,
                                 s.jsx)(
                                   "span",
                                   {
                                     className: "computed-property-value theme-fg-color1",
                                     tabIndex: void 0,
                                     dir: "ltr",
                                     children: (0,
                                                s.jsx)(
                                                  j,
                                                  {
                                                    colorSpanClassName: "computed-color",
                                                    colorSwatchClassName: "computed-colorswatch",
                                                    fontFamilySpanClassName: "computed-font-family",
                                                    values: t.parsedValue
                                                  }
                                                )
                                   }
                                 ),
                                (0,
                                 s.jsx)(
                                   "span",
                                   { className: "visually-hidden", children: ";" }
                                 )
                              ]
                            }
                          )
                       ]
                     }
                   ),
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: a
                                  ? "computed-property-hidden"
                                  : n
                                    ? "computed-property-content row-striped"
                                    : "computed-property-content",
                       children: (0,
                                  s.jsx)(
                                    "div",
                                    {
                                      className: "matchedselectors",
                                      children: l
                                                ? t.selectors.map(
                                                  (e,
                                                   t) => (0,
                                                          s.jsx)(
                                                            I,
                                                            { selector: e },
                                                            t
                                                          )
                                                )
                                                : null
                                    }
                                  )
                     }
                   )
                ]
              }
            )
  }
  function w({ pauseId: e, selectedNodeId: t }) {
    let a = (0, u.TL)(),
      {
        expandedProperties: l,
        search: d,
        showBrowserStyles: m
      } = (0,
           u.CG)(
             e => ({
               expandedProperties: e.computed.expandedProperties,
               search: e.computed.search,
               showBrowserStyles: e.computed.showBrowserStyles
             }),
             r.wU
           ),
      g = (0, n.useContext)(c.R),
      { value: f, status: b } = (0, i.sS)(o.n, g, e, t),
      _ = "resolved" === b && (0, p.kK)(f.node),
      { value: N, status: v } = (0, i.sS)(h.k3, g, _ ? e : void 0, _ ? t : void 0),
      j = !1,
      y = !0,
      I = ("resolved" === v ? N??[] : []).map(e => {
        let t = function(e, t, a) {
            if (0 === e.selectors.length && !a)
              return !0;
            let s = t.trim().length > 0;
            return !(!s ||
                     e.name.toLowerCase().includes(t) ||
                     e.value.toLowerCase().includes(t))
          }(e, d, m);
        if (t)
          return null;
        j = !j, y = !1;
        let n = l.has(e.name),
          r = () => a((0, x.V_)(e.name, !n));
        return (0,
                s.jsx)(
                  E,
                  { property: e, dark: j, isExpanded: n, toggleExpanded: r },
                  e.name
                )
      });
    return y
           ? (0,
              s.jsx)(
                "div",
                {
                  id: "computed-no-results",
                  className: "devtools-sidepanel-no-result",
                  children: "pending" === v ? "Loading..." : "No CSS properties found"
                }
              )
           : (0,
              s.jsx)(
                "div",
                {
                  id: "computed-property-container",
                  className: "devtools-monospace",
                  tabIndex: 0,
                  dir: "ltr",
                  children: I
                }
              )
  }
  var S = n.memo(function() {
      let{ pauseId: e } = (0, d.x)()??{},
        t = (0, u.CG)(m.y);
      return (0,
              s.jsx)(
                "div",
                {
                  id: "computed-container",
                  children: (0,
                             s.jsx)(
                               "div",
                               {
                                 id: "computed-container-focusable",
                                 tabIndex: -1,
                                 children: e && t
                                           ? (0,
                                              s.jsx)(
                                                w,
                                                { pauseId: e, selectedNodeId: t }
                                              )
                                           : (0,
                                              s.jsx)(
                                                "div",
                                                {
                                                  id: "computed-no-results",
                                                  className: "devtools-sidepanel-no-result",
                                                  children: "No CSS properties found"
                                                }
                                              )
                               }
                             )
                }
              )
    }),
    C = a(23279),
    R = a.n(C),
    M = a(98234),
    L = n.memo(function() {
      let e = (0, u.TL)(),
        t = (0, u.CG)(e => e.computed.showBrowserStyles),
        a = (0, n.useRef)(null),
        l = R()(() => {
          a.current && e((0, x.n)(a.current.value))
        }, 150);
      return (0,
              s.jsxs)(
                "div",
                {
                  id: "computed-toolbar",
                  className: "devtools-toolbar devtools-input-toolbar",
                  children: [
                    (0,
                     s.jsx)(
                       "div",
                       {
                         id: "computed-search",
                         className: "devtools-searchbox text-themeTextFieldColor",
                         children: (0,
                                    s.jsx)(
                                      "input",
                                      {
                                        id: "computed-searchbox",
                                        className: "devtools-filterinput",
                                        type: "input",
                                        autoComplete: "off",
                                        placeholder: "Filter Styles",
                                        ref: a,
                                        onInput: l
                                      }
                                    )
                       }
                     ),
                    (0, s.jsx)("div", { className: "devtools-separator" }),
                    (0,
                     s.jsx)(
                       M.Z,
                       { id: "browser-style-checkbox", onChange: function(t) {
        e((0, x.Fk)(t.currentTarget.checked))
      },
        checked: t }),
        (0,
         s.jsx)(
           "label",
           {
             id: "browser-style-checkbox-label",
             htmlFor: "browser-style-checkbox",
             children: "Browser Styles"
           }
         )] }
      )
    });
  function T() {
    return (0,
            s.jsxs)(
              "div",
              {
                id: "sidebar-panel-computedview",
                className: "theme-sidebar inspector-tabpanel",
                children: [(0, s.jsx)(L, {}), (0, s.jsx)(S, {})]
              }
            )
  }
  var D = a(90454);
  function P({ box: e, direction: t, property: a, textContent: n }) {
    let l = t && ("left" == t || "right" == t) && "position" !== e && n.toString().length > 3,
      r = f()(
        `boxmodel-${e}`,
        t ? `boxmodel-${t}` : `boxmodel-${a}`,
        l ? "boxmodel-rotate" : ""
      );
    return (0,
            s.jsx)(
              "p",
              {
                className: r,
                children: (0,
                           s.jsxs)(
                             "span",
                             {
                               className: "boxmodel-editable",
                               "data-box": e,
                               title: a,
                               children: [n, " "]
                             }
                           )
              }
            )
  }
  let k = e => ({ selectedNodeId: (0, m.y)(e) }),
    O = (0,
         r.$j)(
           k,
           { highlightNode: D.highlightNode, unhighlightNode: D.unhighlightNode }
         );
  class A extends n.PureComponent {
    getBorderOrPaddingValue=e => {
      let{ layout: t } = this.props;
      return t[e] ? parseFloat(t[e]) : "-"
    };
    getContextBox=() => {
      let{ layout: e } = this.props;
      return "content-box" == e["box-sizing"]
    };
    getDisplayPosition=() => {
      let{ layout: e } = this.props;
      return e.position && "static" != e.position
    };
    getHeightValue=e => {
      if (void 0 == e)
        return "-";
      let{ layout: t } = this.props;
      return e -= parseFloat(t["border-top-width"] || "0") +
                  parseFloat(t["border-bottom-width"] || "0") +
                  parseFloat(t["padding-top"] || "0") +
                  parseFloat(t["padding-bottom"] || "0"),
             e = parseFloat(e.toPrecision(6))
    };
    getMarginValue=(e, t) => {
      let{ layout: a } = this.props,
        s = a.autoMargins || {},
        n = "-";
      if (t in s)
        n = s[t];
      else 
        if (a[e]) {
          let t = parseFloat(a[e]);
          n = Number.isNaN(t) ? a[e] : t
        }
      return n
    };
    getPositionValue=e => {
      let{ layout: t } = this.props;
      if (!t[e])
        return "-";
      let a = parseFloat(t[e]);
      return Number.isNaN(a) ? t[e] : a
    };
    getWidthValue=e => {
      if (void 0 == e)
        return "-";
      let{ layout: t } = this.props;
      return e -= parseFloat(t["border-left-width"] || "0") +
                  parseFloat(t["border-right-width"] || "0") +
                  parseFloat(t["padding-left"] || "0") +
                  parseFloat(t["padding-right"] || "0"),
             e = parseFloat(e.toPrecision(6))
    };
    onHideBoxModelHighlighter=() => {
      this.props.unhighlightNode()
    };
    onShowBoxModelHighlighter=() => {
      let{ selectedNodeId: e, highlightNode: t } = this.props;
      e && t(e, !0)
    };
    onHighlightMouseOver=e => {
      let t = e.target,
        a = t.getAttribute("data-box");
      if (!a) {
        let e = t;
        do 
          if ((e = e.parentNode) && e.getAttribute("data-box")) {
            a = e.getAttribute("data-box");
            break
          } while (e.parentNode);
        this.onHideBoxModelHighlighter()
      }
      this.onShowBoxModelHighlighter(), e.preventDefault()
    };
    render() {
      let{ layout: e } = this.props,
        { height: t, width: a } = e,
        n = ["top", "right", "bottom", "left"],
        l = n.map(e => this.getBorderOrPaddingValue(`border-${e}-width`)),
        r = n.map(e => this.getBorderOrPaddingValue(`padding-${e}`)),
        i = n.map(e => this.getPositionValue(e)),
        o = n.map(e => this.getMarginValue(`margin-${e}`, e)),
        d = this.getDisplayPosition(),
        c = (e, t) => n.map((a, n) => {
          let l = `${t}-${a}`;
          return (0, s.jsx)(P, { box: t, direction: a, property: l, textContent: e[n] }, l)
        }),
        u = this.getHeightValue(t),
        p = this.getWidthValue(a),
        h = `${p}\u00D7${u}`,
        m = "content-box" == e["box-sizing"]
            ? (0,
               s.jsxs)(
                 "div",
                 {
                   className: "boxmodel-size",
                   children: [
                     (0,
                      s.jsx)(P, { box: "content", property: "width", textContent: p }),
                     (0, s.jsx)("span", { children: "\xd7" }),
                     (0,
                      s.jsx)(P, { box: "content", property: "height", textContent: u })
                   ]
                 }
               )
            : (0,
               s.jsx)(
                 "p",
                 {
                   className: "boxmodel-size",
                   children: (0, s.jsx)("span", { title: "content", children: h })
                 }
               );
      return (0,
              s.jsxs)(
                "div",
                {
                  className: "boxmodel-main devtools-monospace",
                  "data-box": "position",
                  onMouseOver: this.onHighlightMouseOver,
                  onMouseOut: this.onHideBoxModelHighlighter,
                  children: [
                    d
                    ? (0,
                       s.jsx)(
                         "span",
                         {
                           className: "boxmodel-legend",
                           "data-box": "position",
                           title: "position",
                           children: "position"
                         }
                       )
                    : null,
                    (0,
                     s.jsxs)(
                       "div",
                       {
                         className: "boxmodel-box",
                         children: [
                           (0,
                            s.jsx)(
                              "span",
                              {
                                className: "boxmodel-legend",
                                "data-box": "margin",
                                title: "margin",
                                children: "margin"
                              }
                            ),
                           (0,
                            s.jsxs)(
                              "div",
                              {
                                className: "boxmodel-margins",
                                "data-box": "margin",
                                title: "margin",
                                children: [
                                  (0,
                                   s.jsx)(
                                     "span",
                                     {
                                       className: "boxmodel-legend",
                                       "data-box": "border",
                                       title: "border",
                                       children: "border"
                                     }
                                   ),
                                  (0,
                                   s.jsxs)(
                                     "div",
                                     {
                                       className: "boxmodel-borders",
                                       "data-box": "border",
                                       title: "border",
                                       children: [
                                         (0,
                                          s.jsx)(
                                            "span",
                                            {
                                              className: "boxmodel-legend",
                                              "data-box": "padding",
                                              title: "padding",
                                              children: "padding"
                                            }
                                          ),
                                         (0,
                                          s.jsx)(
                                            "div",
                                            {
                                              className: "boxmodel-paddings",
                                              "data-box": "padding",
                                              title: "padding",
                                              children: (0,
                                                         s.jsx)(
                                                           "div",
                                                           {
                                                             className: "boxmodel-contents",
                                                             "data-box": "content",
                                                             title: "content"
                                                           }
                                                         )
                                            }
                                          )
                                       ]
                                     }
                                   )
                                ]
                              }
                            )
                         ]
                       }
                     ),
                    d ? c(i, "position") : null,
                    c(o, "margin"),
                    c(l, "border"),
                    c(r, "padding"),
                    m
                  ]
                }
              )
    }
  }
  var F = O(A);
  function H({ name: e, value: t }) {
    return (0,
            s.jsxs)(
              "div",
              {
                className: "computed-property-view",
                "data-property-name": e,
                tabIndex: 0,
                children: [
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: "computed-property-name-container",
                       children: (0,
                                  s.jsx)(
                                    "div",
                                    {
                                      className: "computed-property-name theme-fg-color3",
                                      title: e,
                                      children: e
                                    }
                                  )
                     }
                   ),
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: "computed-property-value-container",
                       children: (0,
                                  s.jsx)(
                                    "div",
                                    {
                                      className: "computed-property-value theme-fg-color1",
                                      dir: "ltr",
                                      children: t
                                    }
                                  )
                     }
                   )
                ]
              }
            )
  }
  let $ = ["box-sizing", "display", "float", "line-height", "position", "z-index"];
  function B({ layout: e }) {
    let[t, a] = (0, n.useState)(!0),
      l = e => {
        e.stopPropagation(), a(!t)
      },
      r = $.map(t => (0, s.jsx)(H, { name: t, value: e[t] }, t));
    return (0,
            s.jsxs)(
              "div",
              {
                className: "layout-properties",
                children: [
                  (0,
                   s.jsxs)(
                     "div",
                     {
                       className: "layout-properties-header",
                       onDoubleClick: l,
                       children: [
                         (0,
                          s.jsx)(
                            "span",
                            {
                              className: "layout-properties-expander theme-twisty",
                              onClick: l,
                              style: { transform: t ? "none" : void 0 }
                            }
                          ),
                         "Box Model Properties"
                       ]
                     }
                   ),
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: "layout-properties-wrapper devtools-monospace",
                       hidden: !t,
                       tabIndex: 0,
                       children: r
                     }
                   )
                ]
              }
            )
  }
  function V({ layout: e }) {
    let{ height: t = "-", position: a, width: n = "-" } = e,
      l = `${n}\u00D7${t}`;
    return (0,
            s.jsxs)(
              "div",
              {
                className: "boxmodel-info",
                children: [
                  (0,
                   s.jsx)(
                     "span",
                     { className: "boxmodel-element-size", children: l }
                   ),
                  (0,
                   s.jsx)(
                     "section",
                     {
                       className: "boxmodel-position-group",
                       children: (0,
                                  s.jsx)(
                                    "span",
                                    {
                                      className: "boxmodel-element-position",
                                      children: a
                                    }
                                  )
                     }
                   )
                ]
              }
            )
  }
  function z({ boxModel: e }) {
    let{ layout: t } = e;
    return (0,
            s.jsxs)(
              "div",
              {
                className: "boxmodel-container",
                tabIndex: 0,
                children: [
                  (0, s.jsx)(F, { layout: t }),
                  (0, s.jsx)(V, { layout: t }),
                  (0, s.jsx)(B, { layout: t })
                ]
              }
            )
  }
  var U = n.memo(function() {
      let e = (0, n.useContext)(c.R),
        { pauseId: t } = (0, d.x)()??{},
        { selectedNodeId: a } = (0, u.CG)(e => ({ selectedNodeId: (0, m.y)(e) }), r.wU),
        { value: l, status: o } = (0, i.sS)(h.$, e, t, a),
        p = "resolved" === o && l ? (0, s.jsx)(z, { boxModel: { layout: l } }) : null;
      return (0,
              s.jsx)(
                "div",
                {
                  className: "layout-container",
                  children: (0,
                             s.jsx)(
                               "div",
                               { className: "h-full overflow-y-auto", children: p }
                             )
                }
              )
    }),
    W = a(27596),
    Z = a.n(W),
    G = a(39142),
    Y = a(47242),
    K = a.n(Y);
  function X() {
    return (0,
            s.jsx)(
              "div",
              {
                className: K().Message,
                "data-test-id": "Elements-NotAvailable",
                children: "Elements are not available"
              }
            )
  }
  var Q = a(92461),
    q = a(71397),
    J = a(73120),
    ee = a(71907),
    et = a(71750),
    ea = a(98632),
    es = a(1821),
    en = a.n(es),
    el = a(64393);
  let er = /^data.+base64/;
  function ei({ data: e, index: t, style: a }) {
    let{ itemData: l, listData: r } = e,
      { pauseId: i, replayClient: d } = l,
      c = r.getSelectedIndex(),
      u = r.getItemAtIndex(t),
      {
        attributes: p,
        depth: h,
        displayMode: m,
        nodeType: x,
        objectId: g,
        tagName: f,
        textContent: b
      } = u,
      {
        contextMenu: _,
        onContextMenu: N
      } = function({ elementsListData: e, item: t, pauseId: a, replayClient: n }) {
        let l = async() => {
            let e;
            let{ node: s } = await o.n.readAsync(n, a, t.objectId);
            switch (s.nodeType) {
              case Node.COMMENT_NODE: {
                let t = s.nodeValue??"";
                e = `<!-- ${t = (t = t.trim()).replace(/\n\s+/g, " ")} -->`;
                break
              }
              case Node.DOCUMENT_NODE:
                e = s.nodeName;
                break;
              case Node.DOCUMENT_TYPE_NODE:
                e = `<!DOCTYPE ${s.nodeName}>`;
                break;
              case Node.TEXT_NODE:
                e = (s.nodeValue??"").trim().replace(/[\n\r]/g, "\\n");
                break;
              default: {
                let t = s.nodeName.toLowerCase(),
                  a = s.attributes?.map(({ name: e, value: t }) => `${e}="${t}"`)??[];
                e = 0 === a.length ? `<${t}>` : `<${t} ${a.join(" ")}>`
              }
            }
            (0, ea.v)(e)
          },
          r = "empty" !== t.displayMode,
          i = r && "collapsed" !== t.displayMode,
          d = () => {
            e.toggleNodeExpanded(t.objectId, !i)
          };
        return (0,
                ee.av)(
                  (0,
                   s.jsxs)(
                     s.Fragment,
                     {
                       children: [
                         (0,
                          s.jsx)(
                            ee.Zo,
                            {
                              dataTestId: "ConsoleContextMenu-SetFocusStartButton",
                              onSelect: l,
                              children: (0,
                                         s.jsxs)(
                                           s.Fragment,
                                           {
                                             children: [
                                               (0, s.jsx)(et.Z, { type: "copy" }),
                                               "Copy"
                                             ]
                                           }
                                         )
                            }
                          ),
                         "empty" !== t.displayMode &&
                         (0,
                          s.jsx)(
                            ee.Zo,
                            {
                              dataTestId: "ConsoleContextMenu-SetFocusStartButton",
                              onSelect: d,
                              children: (0,
                                         s.jsxs)(
                                           s.Fragment,
                                           {
                                             children: [
                                               (0,
                                                s.jsx)(
                                                  et.Z,
                                                  {
                                                    className: en().ExpandCollapseIcon,
                                                    type: i ? "collapse" : "expand"
                                                  }
                                                ),
                                               i ? "Collapse" : "Expand"
                                             ]
                                           }
                                         )
                            }
                          )
                       ]
                     }
                   ),
                  { dataTestId: "ConsoleContextMenu" }
                )
      }({ elementsListData: r, item: u, pauseId: i, replayClient: d }),
      v = e => {
        r.setSelectedIndex(t), N(e)
      },
      j = "head" === m || "tail" === m,
      y = "tail" === m,
      I = () => {
        r.toggleNodeExpanded(g, "collapsed" === m)
      },
      E = null;
    switch (x) {
      case Node.DOCUMENT_NODE:
      case Node.DOCUMENT_TYPE_NODE:
        E = f;
        break;
      case Node.TEXT_NODE:
        E = b;
        break;
      default:
        Z()(f), E = (0, s.jsx)(eo, { attributes: p, displayMode: m, displayName: f })
    }
    E = "empty" === m || y
        ? (0,
           s.jsxs)(
             s.Fragment,
             { children: [(0, s.jsx)("div", { className: en().Spacer }), E] }
           )
        : (0,
           s.jsxs)(
             s.Fragment,
             {
               children: [
                 (0,
                  s.jsx)(
                    "span",
                    {
                      className: j ? en().IconContainerRotated : en().IconContainer,
                      "data-is-expanded": j ? "true" : "false",
                      onClick: I,
                      role: "button",
                      children: (0,
                                 s.jsx)(
                                   et.Z,
                                   { className: en().ArrowIcon, type: "arrow" }
                                 )
                    }
                  ),
                 E
               ]
             }
           );
    let w = e => {
        e.preventDefault(), e.stopPropagation(), r.setSelectedIndex(t)
      },
      [S, C] = (0, n.useMemo)(() => {
        if (null == c)
          return [null, null]; {
        let{ depth: e, objectId: t } = r.getItemAtIndex(c);
        return y && g === t ? [e, t] : [r.isNodeInSubTree(g, t) ? e : null, t]
      }
      }, [r, g, y, c]),
      R = "";
    switch (x) {
      case Node.COMMENT_NODE:
        R = "comment";
        break;
      case Node.DOCUMENT_NODE:
        R = "document";
        break;
      case Node.DOCUMENT_TYPE_NODE:
        R = "documentType";
        break;
      case Node.TEXT_NODE:
        R = "text"
    }
    return (0,
            s.jsxs)(
              s.Fragment,
              {
                children: [
                  (0,
                   s.jsxs)(
                     "div",
                     {
                       className: en().Node,
                       "data-list-index": t,
                       "data-selected": t === c || void 0,
                       "data-test-name": "ElementsListItem",
                       "data-type": R,
                       onClick: w,
                       onContextMenu: v,
                       style: {
                         ...a,
                         width: void 0,
                         "--data-depth": null != h ? `${h}rem` : void 0
                       },
                       children: [
                         null != S &&
                         (0,
                          s.jsx)(
                            "div",
                            {
                              className: en().SelectedSubTreeLine,
                              "data-is-selected-node": C === g || void 0,
                              style: { "--data-depth": `${S}rem` }
                            }
                          ),
                         E
                       ]
                     },
                     g
                   ),
                  _
                ]
              }
            )
  }
  function eo({ attributes: e, displayMode: t, displayName: a }) {
    let n = [];
    for (let t in e)
      n.push(" "), n.push((0, s.jsx)(ed, { name: t, value: e[t] }, t));
    switch (t) {
      case"empty":
        return (0,
                s.jsxs)(
                  "span",
                  {
                    className: en().HTMLTag,
                    children: [
                      (0,
                       s.jsx)(
                         "span",
                         { className: en().HTMLBracket, children: "<" }
                       ),
                      a,
                      n,
                      (0,
                       s.jsx)(
                         "span",
                         { className: en().HTMLBracket, children: " />" }
                       )
                    ]
                  }
                );
      case"collapsed":
        return (0,
                s.jsxs)(
                  s.Fragment,
                  {
                    children: [
                      (0,
                       s.jsxs)(
                         "span",
                         {
                           className: en().HTMLTag,
                           children: [
                             (0,
                              s.jsx)(
                                "span",
                                { className: en().HTMLBracket, children: "<" }
                              ),
                             a,
                             n,
                             (0,
                              s.jsx)(
                                "span",
                                { className: en().HTMLBracket, children: ">" }
                              )
                           ]
                         }
                       ),
                      "…",
                      (0,
                       s.jsxs)(
                         "span",
                         {
                           className: en().HTMLTag,
                           children: [
                             (0,
                              s.jsx)(
                                "span",
                                { className: en().HTMLBracket, children: "</" }
                              ),
                             a,
                             (0,
                              s.jsx)(
                                "span",
                                { className: en().HTMLBracket, children: ">" }
                              )
                           ]
                         }
                       )
                    ]
                  }
                );
      case"head":
        return (0,
                s.jsxs)(
                  "span",
                  {
                    className: en().HTMLTag,
                    children: [
                      (0,
                       s.jsx)(
                         "span",
                         { className: en().HTMLBracket, children: "<" }
                       ),
                      a,
                      n,
                      (0,
                       s.jsx)("span", { className: en().HTMLBracket, children: ">" })
                    ]
                  }
                );
      case"tail":
        return (0,
                s.jsxs)(
                  "span",
                  {
                    className: en().HTMLTag,
                    children: [
                      (0,
                       s.jsx)(
                         "span",
                         { className: en().HTMLBracket, children: "</" }
                       ),
                      a,
                      (0,
                       s.jsx)("span", { className: en().HTMLBracket, children: ">" })
                    ]
                  }
                )
    }
  }
  function ed({ name: e, value: t }) {
    let[a, l] = (0, n.useState)(null),
      {
        onClick: r
      } = function({
        interval: e = 100,
        onDoubleClick: t,
        onSingleClick: a,
        onTripleClick: s
      }) {
        let l = (0, n.useRef)(null),
          r = n => {
            n.persist(),
            l.current && clearTimeout(l.current),
            l.current = setTimeout(() => {
              switch (l.current = null, n.detail) {
                case 1:
                  a?.(n);
                  break;
                case 2:
                  t?.(n);
                  break;
                case 3:
                  s?.(n)
              }
            }, e)
          };
        return { onClick: r }
      }({ onDoubleClick: ({ target: e }) => {
        switch (e.getAttribute("data-name")) {
          case"HtmlAttributeName":
            l("name");
            break;
          case"HtmlAttributeValue":
            l("value")
        }
      }, onTripleClick: () => {
        l("all")
      } }),
      i = () => {
        l(null)
      },
      o = s => {
        switch (s.key) {
          case"c":
          case"C":
            if (s.ctrlKey || s.metaKey)
              switch (s.preventDefault(), s.stopPropagation(), a) {
                case"all":
                  (0, ea.v)(`${e}="${t}"`);
                  break;
                case"name":
                  (0, ea.v)(e);
                  break;
                case"value":
                  (0, ea.v)(t)
              }
        }
      },
      d = null;
    return d = t.match(er) ? (0, el.ro)(t, 60, "…") : (0, el.ro)(t, 50, "…"),
           (0,
            s.jsxs)(
              "span",
              {
                className: en().HtmlAttribute,
                "data-selected": "all" === a || void 0,
                onBlur: i,
                onClick: r,
                onKeyDown: o,
                tabIndex: 0,
                title: `${e}="${t}"`,
                children: [
                  (0,
                   s.jsx)(
                     "span",
                     {
                       className: en().HtmlAttributeName,
                       "data-name": "HtmlAttributeName",
                       "data-selected": "name" === a || void 0,
                       children: e
                     }
                   ),
                  t &&
                  (0,
                   s.jsxs)(
                     s.Fragment,
                     {
                       children: [
                         (0,
                          s.jsx)(
                            "span",
                            { className: en().Separator, children: "=" }
                          ),
                         (0,
                          s.jsxs)(
                            "span",
                            {
                              className: en().HtmlAttributeValue,
                              "data-name": "HtmlAttributeValue",
                              "data-selected": "value" === a || void 0,
                              children: ['"', d, '"']
                            }
                          )
                       ]
                     }
                   )
                ]
              }
            )
  }
  var ec = a(44746),
    eu = a.n(ec);
  function ep({
    height: e,
    forwardedRef: t,
    listData: a,
    onSelectionChange: l = null,
    pauseId: r
  }) {
    let i = (0, n.useContext)(c.R),
      o = (0, n.useMemo)(() => ({ pauseId: r, replayClient: i }), [r, i]),
      { cssVariables: d, onItemsRendered: u } = function(e) {
        let t = (0, n.useRef)({ longestLine: 0 }),
          a = () => {
            let a = document.querySelector(`[data-test-id="${e}"]`);
            if (!a) {
              console.warn(
                `Could not find list with selector [data-test-id="${e}"]`
              );
              return
            }
            let s = a.firstElementChild;
            if (s) {
              let e = 0;
              for (let t = 0; t < s.children.length; t++) {
                let a = s.children[t];
                e = Math.max(e, a.clientWidth)
              }
              let n = t.current;
              e > n.longestLine &&
              (n.longestLine = e,
               a.style.setProperty("--longest-line-width", `${e}px`))
            }
          };
        return {
          cssVariables: { "--longest-line-width": `${t.current.longestLine}px` },
          onItemsRendered: a
        }
      }("ElementsList"),
      p = function(e) {
        let t = (0, n.useRef)([-1, -1]),
          a = (0, n.useRef)(null);
        return ({ visibleStartIndex: s, visibleStopIndex: n }) => {
          let l = document.querySelector(`[data-test-id="${e}"]`);
          if (l) {
            let e = l.querySelector("[data-selected]");
            if (e) {
              let s = e.getAttribute("data-list-index");
              if (s) {
                let n = parseInt(s);
                if (a.current !== n) {
                  a.current = n;
                  let[s, r] = t.current;
                  if (s > n || r < n) {
                    let t = getComputedStyle(e),
                      a = parseFloat(t.getPropertyValue("padding-left"));
                    l.scrollLeft = a
                  }
                }
              }
            }
          }
          t.current = [s, n]
        }
      }("ElementsList"),
      h = e => {
        u(), p(e)
      },
      m = (0, n.useRef)(null);
    (0, n.useLayoutEffect)(() => {
      m.current = l
    }), (0, n.useLayoutEffect)(() => a.subscribeToSelectedIndex(e => {
      let t = m.current;
      if (t) {
        let s = null != e ? a.getItemAtIndex(e).objectId : null;
        t(s)
      }
    }), [a]);
    let x = (0,
             n.useSyncExternalStore)(
               a.subscribeToInvalidation,
               a.didError,
               a.didError
             ),
      g = (0,
           n.useSyncExternalStore)(
             a.subscribeToLoading,
             a.getIsLoading,
             a.getIsLoading
           );
    if ((0, n.useImperativeHandle)(t, () => ({ async selectIndex(e) {
      await a.waitUntilLoaded(), a.setSelectedIndex(e)
    }, async selectNode(e) {
      await a.waitUntilLoaded(), a.selectNode(e)
    } }), [a]), (0, n.useEffect)(() => (a.activate(), () => {
      a.destroy()
    }), [a]), x)
      return (0, s.jsx)(Q.e, { style: { height: e } });
    let f = e => {
        let t = a.getSelectedIndex();
        if (null == t)
          return ;
        let s = a.getItemAtIndex(t);
        switch (e.key) {
          case"ArrowLeft":
            switch (e.preventDefault(), e.stopPropagation(), s.displayMode) {
              case"collapsed":
              case"empty": {
                let e = a.getParentItem(s),
                  t = a.getIndexForItem(e);
                a.setSelectedIndex(t);
                break
              }
              case"head":
                a.toggleNodeExpanded(s.objectId, !1);
                break;
              case"tail":
                a.setSelectedIndex(a.getIndexForItem(s))
            }
            break;
          case"ArrowRight":
            switch (e.preventDefault(), e.stopPropagation(), s.displayMode) {
              case"collapsed":
                a.toggleNodeExpanded(s.objectId, !0);
                break;
              case"empty":
                break;
              case"head":
                a.setSelectedIndex(t + 1)
            }
        }
      };
    return (0,
            s.jsxs)(
              "div",
              {
                className: eu().ListWrapper,
                style: { height: e },
                children: [
                  g && (0, s.jsx)(q.p, {}),
                  (0,
                   s.jsx)(
                     J.p,
                     {
                       className: eu().List,
                       dataStatus: g ? "loading" : "loaded",
                       dataTestId: "ElementsList",
                       fallbackForEmptyList: (0, s.jsx)(X, {}),
                       height: e,
                       itemData: o,
                       itemRendererComponent: ei,
                       itemSize: 16,
                       listData: a,
                       onItemsRendered: h,
                       onKeyDown: f,
                       style: d,
                       width: "100%"
                     }
                   )
                ]
              }
            )
  }
  var eh = a(83254),
    em = a(60450),
    ex = a(84725),
    eg = a(54186),
    ef = a(28651);
  let eb = null,
    e_ = null,
    eN = (0,
          ef.zS)(
            {
              config: { immutable: !0 },
              debugLabel: "DOMCache",
              getKey: ([e, t]) => t,
              load: async([e, t]) => {
      null == eb && await ev();
let a = `
      // Guard against minification renaming the functions
      const serializeDOM = ${eb};
      const splitStringToChunks = ${e_};

      const resultsArray = serializeDOM(document);
      const resultsString = JSON.stringify(resultsArray);

      splitStringToChunks(resultsString);
      `,        s = await ex.k.readAsync(e, t, null, a),
        n = s.returned?.object;
      if (null != n) {
        let a = await em.OZ.readAsync(e, t, n, "full");
        if (a?.preview?.properties) {
          let e = (0, eg.joinChunksToString)(a.preview.properties),
            t = JSON.parse(e);
          return (0, eh.deserializeDOM)(t)
        }
      }
      return null
    } });
  async function ev() {
    let e = await Promise.resolve().then(a.bind(a, 83254));
    eb = e.serializeDOM.toString();
    let t = await Promise.resolve().then(a.bind(a, 54186));
    e_ = t.splitStringToChunks.toString()
  }
  var ej = a(88036);
  class ey extends ej.W {
    _destroyed=!1;
    _didError=!1;
    _idToMutableMetadataMap=new Map;
    _rootObjectId=null;
    constructor(e, t, a=null) {
      super(), this._pauseId = t, this._replayClient = e, this.loadDOM(a)
    }
    activate() {
      this._destroyed = !1
    }
    contains(e) {
      return this._idToMutableMetadataMap.has(e)
    }
    destroy() {
      this._destroyed = !0
    }
    didError=() => this._didError;
    getIndexForItemId(e) {
      let t = this.getMutableMetadata(e);
      if (null == t.parentObject)
        return 0;
      let a = -1;
      for (; t; ) {
        let e = this.getParentMutableMetadata(t.objectId);
        if (e) {
          let s = e.children;
          for (let e = 0; e < s.length; e++) {
            let n = s[e],
              l = this.getMutableMetadata(n.objectId);
            if (l === t) {
              a++;
              break
            }
            a += l.weight
          }
          t = e
        } else 
          break
      }
      return a
    }
    getParentItem(e, t=!1) {
      let a = this.getParentMutableMetadata(e.objectId);
      return Z()(a),
             {
               attributes: a.attributes,
               depth: a.depth,
               displayMode: t ? "tail" : a.isExpanded ? "head" : "collapsed",
               nodeType: a.nodeType,
               objectId: a.objectId,
               tagName: a.tagName,
               textContent: a.textContent
             }
    }
    handleLoadingError(e) {
      console.error(e), this._didError = !0, this.invalidate()
    }
    isNodeInSubTree(e, t) {
      let a = this.getParentMutableMetadata(e);
      for (; a; ) {
        if (a.objectId === t)
          return !0;
        a = this.getParentMutableMetadata(a.objectId)
      }
      return !1
    }
    search(e) {
      e = e.toLocaleLowerCase();
      let t = new Set,
        a = this.getItemCount();
      for (let s = 0; s < a; s++) {
        let a = this.getItemAtIndex(s),
          n = this.toStringItem(a).toLocaleLowerCase();
        n.includes(e) && t.add(s)
      }
      return Array.from(t)
    }
    selectNode(e) {
      if (null === e)
        this.setSelectedIndex(null);
      else {
        let t = this.getMutableMetadata(e),
          a = [],
          s = t.parentObject?.objectId;
        for (; s; ) {
          let e = this.getMutableMetadata(s);
          e.isExpanded || a.push(s), s = e.parentObject?.objectId
        }
        for (; a.length > 0; ) {
          let e = a.pop();
          this.toggleNodeExpanded(e, !0)
        }
        let n = this.getIndexForItemId(e);
        this.setSelectedIndex(n)
      }
    }
    toggleNodeExpanded(e, t) {
      let a = this.getMutableMetadata(e),
        s = a.children.length > 0;
      if (s && a.isExpanded !== t) {
        let e = a.weight,
          s = 1;
        if (t) {
          for (let e = 0; e < a.children.length; e++) {
            let t = a.children[e],
              n = this.getMutableMetadata(t.objectId);
            s += n.weight
          }
          a.nodeType !== Node.DOCUMENT_NODE && s++
        }
        a.isExpanded = t, a.weight = s;
        let n = s - e,
          l = this.getParentMutableMetadata(a.objectId);
        for (; null != l && (l.weight = l.weight + n, l.isExpanded); )
          l = this.getParentMutableMetadata(l.objectId);
        this.invalidate()
      }
    }
    toString() {
      let e = this.getItemCountImplementation(),
        t = [];
      for (let a = 0; a < e; a++) {
        let e = this.getItemAtIndex(a);
        t.push(this.toStringItem(e))
      }
      return t.join("\n")
    }
    toStringItem(e) {
      let t;
      let{
        attributes: a,
        depth: s,
        displayMode: n,
        nodeType: l,
        tagName: r,
        textContent: i
      } = e;
      switch (l) {
        case Node.DOCUMENT_NODE:
          t = r;
          break;
        case Node.TEXT_NODE:
          t = i;
          break;
        default: {
          Z()(r);
          let e = "";
          for (let t in a) {
            let s = a[t];
            s ? e += ` ${t}="${s}"` : e += ` ${t}`
          }
          let s = `${r}${e}`;
          switch (n) {
            case"collapsed":
              t = `<${s}>…</${r}>`;
              break;
            case"empty":
              t = `<${s} />`;
              break;
            case"head":
              t = `<${s}>`;
              break;
            case"tail":
              t = `</${r}>`
          }
        }
      }
      let o = "  ".repeat(s);
      return `${o}${t}`
    }
    getIndexForItemImplementation(e) {
      return this.getIndexForItemId(e.objectId)
    }
    getItemAtIndexImplementation(e) {
      Z()(this._rootObjectId);
      let t = this.getMutableMetadata(this._rootObjectId),
        a = t.children,
        s = 0;
      for (; a.length > 0 && s <= e; )
        for (let t = 0; t < a.length; t++) {
          let{
            attributes: n,
            children: l,
            nodeType: r,
            objectId: i,
            tagName: o,
            textContent: d
          } = a[t],
            { depth: c, isExpanded: u, weight: p } = this.getMutableMetadata(i);
          if (s + p > e) {
            if (s === e)
              return {
                attributes: n,
                depth: c,
                displayMode: l.length > 0 ? u ? "head" : "collapsed" : "empty",
                nodeType: r,
                objectId: i,
                tagName: o,
                textContent: d
              };
            if (s + p - 1 === e && r !== Node.DOCUMENT_NODE)
              return {
                attributes: n,
                depth: c,
                displayMode: "tail",
                nodeType: r,
                objectId: i,
                tagName: o,
                textContent: d
              };
            a = l, s++;
            break
          }
          s += p
        }
      throw Error(`Could not find node at index ${e}`)
    }
    getItemCountImplementation() {
      if (this._didError || null === this._rootObjectId)
        return 0;
      let e = this.getMutableMetadata(this._rootObjectId);
      return 0 === e.children.length ? 0 : e.weight - 1
    }
    getMutableMetadata(e) {
      let t = this._idToMutableMetadataMap.get(e);
      return Z()(t, `Could not find metadata for ${e}`), t
    }
    getParentMutableMetadata(e) {
      let t = this.getMutableMetadata(e);
      return t.parentObject
             ? this.getMutableMetadata(t.parentObject.objectId)
             : null
    }
    async loadDOM(e) {
      try {
        if (this.updateIsLoading(!0),
            null == e && (e = await eN.readAsync(this._replayClient, this._pauseId)),
            this._destroyed)
          return ;
        if (e) {
          this._rootObjectId = e.objectId;
          let t = [[-1, e]];
          for (; t.length; ) {
            let[e, a] = t.shift(),
              s = { ...a, depth: e, isExpanded: "head" !== a.tagName, weight: 1 };
            this._idToMutableMetadataMap.set(a.objectId, s);
            let n = 1,
              l = this.getParentMutableMetadata(s.objectId);
            for (; l && l.isExpanded; )
              1 === l.weight && l.nodeType !== Node.DOCUMENT_NODE && n++,
              l.weight += n,
              l = this.getParentMutableMetadata(l.objectId);
            a.children.forEach(a => {
              t.push([e + 1, a])
            })
          }
        }
      } catch (e) {
        console.error(e), this._didError = !0
      }
      this.updateIsLoading(!1), this.invalidate()
    }
  }
  var eI = a(68172);
  let eE = (0,
            i.Df)(
              {
                config: { immutable: !0 },
                debugLabel: "DOMSearchCache",
                getKey: ([e, t, a]) => `${t}:${a}`,
                load: async([e, t, a]) => {
      let{ nodes: s, data: n } = await e.performSearch(t, a);
      if (n) {
        let a = await eI.cO.readAsync(e);
        (0, ex.UW)(e, a, t, n)
      }
      return s
    } });
  var ew = a(74893),
    eS = a(11275),
    eC = a(16026),
    eR = a.n(eC),
    eM = function({ listRefSetter: e, onSelectionChange: t, pauseId: a }) {
      let l = (0, n.useContext)(c.R),
        r = (0, n.useRef)(null),
        i = (0, n.useRef)(null),
        o = (0, n.useCallback)(t => {
          r.current = t, e(t)
        }, [e]),
        d = (0, n.useMemo)(() => a ? new ey(l, a) : null, [a, l]),
        [u, p] = (0, eS.Z)("elementsPanelAdvancedSearch"),
        [h, m] = (0, n.useState)(!1),
        [x, g] = (0, n.useState)(null),
        [f, b] = (0, n.useState)(""),
        _ = e => {
          switch (e.key) {
            case"F":
            case"f":
              if (e.ctrlKey || e.metaKey) {
                e.preventDefault(), e.stopPropagation();
                let t = i.current;
                t && t.focus()
              }
          }
        },
        N = async() => {
          let e;
          if (null != d &&
              null != a &&
              ((m(!0), u) ? (e = [], (await eE.readAsync(l, a, f)).forEach(t => {
            d.contains(t) && e.push(d.getIndexForItemId(t))
          }))
          : (await d.waitUntilLoaded(), e = d.search(f)),
          m(!1),
          g({ advanced: u, index: e.length > 0 ? 0 : -1, indices: e, query: f }),
          e.length > 0)) {
            let t = r.current;
            if (t) {
              let a = e[0];
              t.selectIndex(a)
            }
          }
        },
        v = (0, n.useRef)(a);
      (0, n.useLayoutEffect)(() => {
        let e = v.current;
        v.current = a, e !== a && !h && f && N()
      });
      let j = e => {
          b(e.currentTarget.value)
        },
        y = async e => {
          if (null != a &&
              null !== document.querySelector('[data-test-id="ElementsList"]'))
            switch (e.key) {
              case"Enter":
                if (e.preventDefault(), e.stopPropagation(), Z()(null != d), "" === f)
                  g(null);
                else 
                  if (x?.advanced !== u || x?.query !== f)
                    N();
                  else {
                    if (0 === x.indices.length)
                      return ;
                    let t = x.index;
                    t = e.shiftKey
                        ? t > 0 ? t - 1 : x.indices.length - 1
                        : t < x.indices.length - 1 ? x.index + 1 : 0,
                    g({ ...x, index: t });
                    let a = r.current;
                    if (a) {
                      let e = x.indices[t];
                      a.selectIndex(e)
                    }
                  }
                break;
              case"Escape":
                b(""), g(null)
            }
        },
        I = () => {
          p(!u), i.current?.focus()
        },
        E = "";
      return h || null === x || (E = `${x.index + 1} of ${x.indices.length}`),
             (0,
              s.jsxs)(
                "div",
                {
                  className: eR().Panel,
                  children: [
                    (0,
                     s.jsxs)(
                       "div",
                       {
                         className: eR().SearchRow,
                         children: [
                           (0,
                            s.jsxs)(
                              "label",
                              {
                                className: eR().SearchIconAndInput,
                                children: [
                                  (0,
                                   s.jsx)(
                                     et.Z,
                                     { className: eR().SearchIcon, type: "search" }
                                   ),
                                  (0,
                                   s.jsx)(
                                     "input",
                                     {
                                       className: eR().SearchInput,
                                       "data-search-in-progress": h || void 0,
                                       "data-test-id": "ElementsSearchInput",
                                       disabled: null == d || null == a,
                                       onChange: j,
                                       onKeyDown: y,
                                       placeholder: "Search DOM",
                                       ref: i,
                                       type: "text",
                                       value: f
                                     }
                                   )
                                ]
                              }
                            ),
                           (0,
                            s.jsx)(
                              "button",
                              {
                                className: eR().AdvancedButton,
                                "data-active": u || void 0,
                                "data-test-id": "ElementsPanel-AdvancedSearchButton",
                                onClick: I,
                                title: "Advanced search",
                                children: (0,
                                           s.jsx)(
                                             et.Z,
                                             {
                                               className: eR().AdvancedIcon,
                                               type: "advanced"
                                             }
                                           )
                              }
                            ),
                           h &&
                           (0,
                            s.jsx)(
                              et.Z,
                              {
                                className: eR().SpinnerIcon,
                                "data-test-id": "ElementsPanel-Searching",
                                type: "spinner"
                              }
                            ),
                           !h &&
                           null !== x &&
                           (0,
                            s.jsx)(
                              "div",
                              {
                                className: eR().SearchResults,
                                "data-test-id": "ElementsPanel-SearchResult",
                                title: E,
                                children: E
                              }
                            )
                         ]
                       }
                     ),
                    (0,
                     s.jsx)(
                       "div",
                       {
                         className: eR().ListRow,
                         onKeyDown: _,
                         children: d && a
                                   ? (0,
                                      s.jsx)(
                                        G.ZP,
                                        {
                                          disableWidth: !0,
                                          children: ({ height: e }) => (0,
                                                                        s.jsx)(
                                                                          n.Suspense,
                                                                          {
                                                                            fallback: (0,
                                                                                       s.jsx)(
                                                                                         ew.i,
                                                                                         {
                                                                                           className: eR().PanelLoader,
                                                                                           style: {
                                                                                             height: e
                                                                                           }
                                                                                         }
                                                                                       ),
                                                                            children: (0,
                                                                                       s.jsx)(
                                                                                         ep,
                                                                                         {
                                                                                           height: e,
                                                                                           forwardedRef: o,
                                                                                           listData: d,
                                                                                           onSelectionChange: t,
                                                                                           pauseId: a
                                                                                         },
                                                                                         a
                                                                                       )
                                                                          }
                                                                        )
                                        }
                                      )
                                   : (0,
                                      s.jsx)(ew.i, { className: eR().PanelLoader })
                       }
                     )
                  ]
                }
              )
    };
  function eL() {
    let{ pauseId: e } = (0, d.x)()??{},
      t = (0, u.CG)(m.y),
      a = (0, u.TL)(),
      [l, r] = (0, n.useState)(null),
      i = (0, n.useRef)(null);
    (0, n.useEffect)(() => {
      l && t !== i.current && (i.current = t, l.selectNode(t))
    }, [l, t]);
    let o = e => {
        e !== i.current && (i.current = e, e && a((0, D.selectNode)(e)))
      };
    return (0, s.jsx)(eM, { listRefSetter: r, onSelectionChange: o, pauseId: e??null })
  }
  class eT extends ej.W {
    constructor(e, t) {
      super(), this._rules = e, this._showPseudoElements = t
    }
    getItemAtIndexImplementation(e) {
      let t = null,
        a = null;
      for (let s = 0; s < this._rules.length; s++) {
        let n = this._rules[s];
        if (0 !== n.declarations.filter(e => !e.isInvisible).length) {
          if (!!n.pseudoElement != !!a) {
            if (a = n.pseudoElement, 0 === e)
              return { isPseudoElement: !!n.pseudoElement, type: "pseudo" };
            e--
          }
          if (!n.pseudoElement || this._showPseudoElements) {
            if (n.inheritance?.inheritedSource != null &&
                (n.inheritance?.inheritedNodeId??null) !== t) {
              if (t = n.inheritance?.inheritedNodeId??null, 0 === e)
                return {
                  inheritedSource: n.inheritance.inheritedSource,
                  type: "inheritance"
                };
              e--
            }
            if (0 === e)
              return { rule: n, type: "header" };
            e--;
            for (let t = 0; t < n.declarations.length; t++) {
              if (0 === e)
                return { declaration: n.declarations[t], type: "declaration" };
              e--
            }
            if (0 === e)
              return { rule: n, type: "footer" };
            e--
          }
        }
      }
      throw Error("Could not find data for row")
    }
    getItemCountImplementation() {
      let e = 0,
        t = null,
        a = null;
      for (let s = 0; s < this._rules.length; s++) {
        let n = this._rules[s];
        0 !== n.declarations.filter(e => !e.isInvisible).length &&
        (!!n.pseudoElement != !!a && (e++, a = n.pseudoElement),
         (!n.pseudoElement || this._showPseudoElements) &&
         (n?.inheritance?.inheritedSource != null &&
          (n.inheritance?.inheritedNodeId??null) !== t &&
          (t = n.inheritance?.inheritedNodeId??null, e++),
          e += 2 + n.declarations.length))
      }
      return e
    }
  }
  var eD = a(15839),
    eP = a(32103),
    ek = a.n(eP);
  function eO({ data: e, index: t, style: a }) {
    let{ itemData: n, listData: l } = e,
      { searchText: r, setShowPseudoElements: i, showPseudoElements: o } = n,
      d = l.getItemAtIndex(t);
    return "inheritance" === d.type
           ? (0, s.jsx)(eF, { index: t, inheritedSource: d.inheritedSource, style: a })
           : "header" === d.type || "footer" === d.type
             ? "header" === d.type
               ? (0, s.jsx)(eB, { index: t, rule: d.rule, searchText: r, style: a })
               : (0, s.jsx)(e$, { index: t, style: a })
             : "pseudo" === d.type
               ? (0,
                  s.jsx)(
                    eH,
                    {
                      index: t,
                      isPseudoElement: d.isPseudoElement,
                      setShowPseudoElements: i,
                      showPseudoElements: o,
                      style: a
                    }
                  )
               : (0,
                  s.jsx)(
                    eA,
                    { declaration: d.declaration, index: t, searchText: r, style: a }
                  )
  }
  function eA({ declaration: e, index: t, searchText: a, style: l }) {
    let r = !!a && e.name.includes(a),
      i = !1,
      o = e.name + ": ",
      d = [];
    for (let t = 0; t < e.parsedValue.length; t++) {
      let l = e.parsedValue[t];
      "string" == typeof l
      ? (i ||= !!a && l.includes(a),
         o += l,
         d.push((0, s.jsx)(n.Fragment, { children: l }, d.length)))
      : "color" === l.type
        ? (i ||= !!a && l.value.includes(a),
           o += l.value,
           d.push(
             (0,
              s.jsxs)(
                n.Fragment,
                {
                  children: [
                    (0,
                     s.jsx)(
                       "div",
                       {
                         className: ek().ColorToken,
                         style: { backgroundColor: l.value }
                       }
                     ),
                    l.value
                  ]
                },
                d.length
              )
           ))
        : (i ||= !!a && l.value.includes(a),
           o += l.value,
           d.push((0, s.jsx)(n.Fragment, { children: l.value }, d.length)))
    }
    return o += ";",
           (0,
            s.jsxs)(
              "div",
              {
                className: ek().DeclarationState,
                "data-list-index": t,
                "data-overridden": e.isOverridden || void 0,
                "data-test-name": "RuleListItem-DeclarationState",
                style: l,
                title: o.trim(),
                children: [
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: ek().DeclarationName,
                       "data-highlight": r || void 0,
                       children: e.name
                     }
                   ),
                  ": ",
                  (0,
                   s.jsxs)(
                     "div",
                     {
                       className: ek().DeclarationValue,
                       "data-highlight": i || void 0,
                       children: [d, ";"]
                     }
                   )
                ]
              }
            )
  }
  function eF({ index: e, inheritedSource: t, style: a }) {
    return (0,
            s.jsx)(
              "div",
              {
                className: ek().Inheritance,
                "data-list-index": e,
                style: a,
                children: t
              }
            )
  }
  function eH({
    index: e,
    isPseudoElement: t,
    setShowPseudoElements: a,
    showPseudoElements: n,
    style: l
  }) {
    return (0,
            s.jsx)(
              "div",
              {
                className: ek().PseudoElement,
                "data-list-index": e,
                style: l,
                children: t
                          ? (0,
                             s.jsx)(
                               eD.Z,
                               {
                                 children: null,
                                 defaultOpen: n,
                                 header: (0,
                                          s.jsx)(
                                            "span",
                                            { children: "Pseudo-elements" }
                                          ),
                                 headerClassName: ek().PseudoElementExpandableHeader,
                                 onChange: a
                               }
                             )
                          : "This element"
              }
            )
  }
  function e$({ index: e, style: t }) {
    return (0,
            s.jsx)(
              "div",
              {
                className: ek().RuleStateFooter,
                "data-list-index": e,
                style: t,
                children: "}"
              }
            )
  }
  function eB({ index: e, rule: t, searchText: a, style: n }) {
    let l = !!a && t.selector.selectorText.includes(a);
    return (0,
            s.jsxs)(
              "div",
              {
                className: ek().RuleStateHeader,
                "data-list-index": e,
                "data-test-name": "RuleListItem-RuleState",
                style: n,
                children: [
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: ek().SelectorText,
                       "data-highlight": l || void 0,
                       "data-test-name": "RuleListItem-RuleState-Selector",
                       children: t.selector.selectorText
                     }
                   ),
                  " {",
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: ek().SourceLink,
                       "data-test-name": "RuleListItem-RuleState-Source",
                       children: t.sourceLink.label
                     }
                   )
                ]
              }
            )
  }
  function eV({ height: e, noContentFallback: t, rules: a, searchText: l }) {
    let[r, i] = (0, n.useState)(!0),
      o = (0, n.useMemo)(() => new eT(a, r), [a, r]),
      d = (0,
           n.useMemo)(
             () => ({
               rules: a,
               searchText: l,
               setShowPseudoElements: i,
               showPseudoElements: r
             }),
             [a, r, l]
           );
    return (0,
            s.jsx)(
              J.p,
              {
                dataTestId: "RulesList",
                fallbackForEmptyList: t,
                height: e,
                itemData: d,
                itemRendererComponent: eO,
                itemSize: 20,
                listData: o,
                width: "100%"
              }
            )
  }
  var ez = a(27317),
    eU = a(96136),
    eW = a.n(eU);
  let eZ = [];
  function eG() {
    let e = (0, n.useContext)(c.R),
      { pauseId: t } = (0, d.x)()??{},
      { selectedNodeId: a } = (0, u.CG)(e => ({ selectedNodeId: (0, m.y)(e) }), ez.wU),
      l = (0, n.useDeferredValue)(t),
      r = (0, n.useDeferredValue)(a),
      i = l && r ? o.n.read(e, l, r) : null,
      x = i && (0, p.kK)(i.node),
      g = h.UT.read(e, x ? l : void 0, x ? r : void 0),
      [f, b] = (0, n.useState)("");
    return (0,
            s.jsxs)(
              "div",
              {
                className: eW().RulesPanel,
                "data-test-id": "RulesPanel",
                "data-is-pending": t !== l || a !== r || void 0,
                children: [
                  (0,
                   s.jsxs)(
                     "div",
                     {
                       className: eW().FilterRow,
                       children: [
                         (0,
                          s.jsx)(
                            et.Z,
                            { className: eW().FilterIcon, type: "filter" }
                          ),
                         (0,
                          s.jsx)(
                            "input",
                            {
                              className: eW().FilterInput,
                              onChange: ({ target: e }) => b(e.value),
                              placeholder: "Find Styles",
                              value: f
                            }
                          )
                       ]
                     }
                   ),
                  (0,
                   s.jsx)(
                     "div",
                     {
                       className: eW().ListWrapper,
                       children: (0,
                                  s.jsx)(
                                    G.ZP,
                                    {
                                      disableWidth: !0,
                                      children: ({ height: e }) => (0,
                                                                    s.jsx)(
                                                                      eV,
                                                                      {
                                                                        height: e,
                                                                        noContentFallback: (0,
                                                                                            s.jsx)(
                                                                                              "div",
                                                                                              {
                                                                                                className: eW().NoStyles,
                                                                                                children: a
                                                                                                          ? "No styles to display"
                                                                                                          : "No element selected"
                                                                                              }
                                                                                            ),
                                                                        rules: g?.rules??eZ,
                                                                        searchText: f
                                                                      }
                                                                    )
                                    }
                                  )
                     }
                   )
                ]
              }
            )
  }
  var eY = a(91985),
    eK = a(34889);
  function eX() {
    let e = (0, u.CG)(m.y);
    return (0,
            s.jsx)(
              eY.U,
              {
                name: "RulesPanel",
                resetKey: e??void 0,
                children: (0,
                           s.jsx)(
                             n.Suspense,
                             {
                               fallback: (0, s.jsx)(eK.Z, {}),
                               children: (0, s.jsx)(eG, {})
                             }
                           )
              }
            )
  }
  let eQ = (0,
            i.Df)(
              {
                config: { immutable: !0 },
                debugLabel: "DOMReactCache",
                getKey: ([e, t, a]) => `${t}:${a}`,
                load: async([e, t, a]) => {
let s = `
      {
        const [id, displayName] = (${eq.toString()})(${a});
        JSON.stringify([id, displayName]);
      }
    `,        n = await ex.k.readAsync(e, t, null, s),
        l = n?.returned?.value;
      if (l)
        return JSON.parse(l);
      if (n.returned?.object) {
        let a = await em.OZ.readAsync(e, t, n.returned?.object, "full"),
          s = (0, eg.findProtocolObjectPropertyValue)(a, "message");
        s && console.error(s)
      }
      return [null, null]
    } });
  function eq(e) {
    if ("undefined" != typeof __RECORD_REPLAY__ &&
        null != __RECORD_REPLAY__ &&
        __RECORD_REPLAY__.getObjectFromProtocolId) {
      let t = __RECORD_REPLAY__.getObjectFromProtocolId(e);
      for (let e in t)
        if (e.startsWith("__reactFiber$")) {
          let a = t[e];
          if (a) {
            let e = a._debugOwner;
            if (e &&
                "undefined" != typeof __RECORD_REPLAY_ARGUMENTS__ &&
                null != __RECORD_REPLAY_ARGUMENTS__ &&
                __RECORD_REPLAY_ARGUMENTS__.getPersistentId) {
              let t = __RECORD_REPLAY_ARGUMENTS__.getPersistentId(e);
              if (t) {
                let a = e.type.name??e.type.displayName??null;
                return [t, a]
              }
            }
          }
        }
    }
    return [null, null]
  }
  var eJ = a(41323),
    e0 = a.n(eJ);
  function e1(e) {
    return (0,
            s.jsx)(
              n.Suspense,
              { fallback: (0, s.jsx)(q.p, {}), children: (0, s.jsx)(e4, { ...e }) }
            )
  }
  function e4({ nodeId: e, viewReactComponent: t }) {
    let a = (0, n.useContext)(c.R),
      { pauseId: l } = (0, d.x)()??{},
      [r, i] = l ? eQ.read(a, l, e) : [];
    if (null == r)
      return null;
    let o = () => {
        t(r)
      };
    return (0,
            s.jsxs)(
              "div",
              {
                className: e0().Details,
                onClick: o,
                children: [
                  (0, s.jsx)(et.Z, { className: e0().ReactIcon, type: "react" }),
                  " Rendered by",
                  " ",
                  (0,
                   s.jsx)(
                     "code",
                     { className: e0().ComponentName, children: i??"(anonymous)" }
                   ),
                  " ",
                  (0,
                   s.jsx)(
                     et.Z,
                     {
                       className: e0().ViewComponentIcon,
                       type: "view-component-source"
                     }
                   )
                ]
              }
            )
  }
  var e3 = a(97638),
    e2 = a(5540),
    e6 = a(31724),
    e8 = a(21883);
  function e7({ id: e, text: t, active: a, onClick: n }) {
    return (0,
            s.jsxs)(
              "span",
              {
                className: f()("tabs-menu-item", { "is-active": a }),
                children: [
                  (0, s.jsx)("span", { className: "devtools-tab-line" }),
                  (0,
                   s.jsx)(
                     "button",
                     { id: `${e}-tab`, title: t, role: "tab", onClick: n, children: t }
                   )
                ]
              }
            )
  }
  let e9 = ({
    className: e = "",
    dataTestId: t,
    dropdownButton: a,
    dropdownClassName: l,
    dropdownStyle: r,
    children: i,
    activeIdx: o
  }) => {
      let d = (0, n.useRef)(null),
        c = (0, n.useRef)([]),
        u = (0, n.useRef)(null),
        p = Array.isArray(i) ? i : [i],
        [h, m] = (0, n.useState)(p.length),
        [x, g] = (0, n.useState)(Array.from({ length: p.length }).map((e, t) => t)),
        [b, _] = (0, n.useState)(!1),
        N = (0, n.useCallback)(() => {
          let e = d.current?.clientWidth??0;
          _(!1);
          let t = 0;
          for (let e of c.current)
            t += e?.clientWidth??0;
          if (t <= e) {
            m(p.length), g(Array.from({ length: p.length }).map((e, t) => t));
            return
          }
          let a = u.current?.clientWidth??0,
            s = c.current[o].clientWidth??0,
            n = 1,
            l = [o],
            r = a + s;
          for (let t = 0; t < p.length; t++)
            t !== o &&
            ((r += c.current[t].clientWidth) <= e
             ? (t < o ? l.splice(l.length - 1, 0, t) : l.push(t), n++)
             : l.push(t));
          m(n), g(l)
        }, [o, p.length]);
      (0, n.useEffect)(() => {
        N();
        let e = d.current;
        if (!e)
          return ;
        let t = new ResizeObserver(N);
        return t.observe(e), () => {
          t.unobserve(e)
        }
      }, [N]), (0, n.useEffect)(() => {
        let e = e => {
            u.current && !u.current.contains(e.target) && _(!1)
          };
        return document.addEventListener("click", e), () => {
          document.removeEventListener("click", e)
        }
      }, []);
      let v = x.map(e => p[e]),
        j = h < p.length;
      return (0,
              s.jsxs)(
                "div",
                {
                  className: "relative max-w-full",
                  "data-test-id": t,
                  children: [
                    (0,
                     s.jsx)(
                       "div",
                       {
                         className: f()("flex overflow-hidden", e),
                         ref: d,
                         children: v.map(
                           (e,
                            t) => (0,
                                   s.jsx)(
                                     "span",
                                     {
                                       ref: e => c.current[x[t]] = e,
                                       style: {
                                         pointerEvents: t < h ? "auto" : "none",
                                         opacity: t < h ? 1 : 0
                                       },
                                       children: e
                                     },
                                     e.key
                                   )
                         )
                       }
                     ),
                    j &&
                    (0,
                     s.jsxs)(
                       "span",
                       {
                         onClick: () => _(!b),
                         ref: u,
                         className: f()(
                           "absolute right-0 top-0 flex h-full items-center",
                           l
                         ),
                         children: [
                           a??(0,
                               s.jsx)(
                                 "span",
                                 {
                                   className: "flex h-full cursor-pointer select-none items-center px-1 hover:bg-[color:var(--tab-bgcolor)]",
                                   "data-test-name": "ResponsiveTabsDropDownButton",
                                   children: "\xb7\xb7\xb7"
                                 }
                               ),
                           b &&
                           (0,
                            s.jsx)(
                              "div",
                              {
                                className: "responsive-tabs-dropdown absolute right-0 top-full",
                                style: r,
                                children: v.slice(
                                  h
                                ).map(
                                  e => (0,
                                        s.jsx)(
                                          "div",
                                          {
                                            "data-test-name": "ResponsiveTabsDropDownItem",
                                            children: e
                                          },
                                          e.key
                                        )
                                )
                              }
                            )
                         ]
                       }
                     )
                  ]
                }
              )
    };
  var e5 = a(44942),
    te = a(9952),
    tt = a(99965),
    ta = a(99867),
    ts = a(75279),
    tn = a(33882);
  let tl = new Map,
    tr = ({ header: e, children: t }) => {
      let[a, l] = (0, n.useState)(!1),
        r = t && n.Children.count(t) > 0;
      return (0,
              s.jsxs)(
                "div",
                {
                  children: [
                    (0,
                     s.jsxs)(
                       "div",
                       {
                         className: "grid auto-cols-max grid-flow-col items-center gap-1",
                         children: [
                           (0,
                            s.jsx)(
                              "span",
                              {
                                className: f()(
                                  "theme-twisty bg-center",
                                  { "opacity-0": !r, "cursor-pointer": r, open: a }
                                ),
                                onClick: () => l(!a)
                              }
                            ),
                           (0, s.jsx)("div", { children: e })
                         ]
                       }
                     ),
                    a && r && (0, s.jsx)("div", { className: "pl-3", children: t })
                  ]
                }
              )
    },
    ti = (e, t) => {
      let a = e.preview.node.attributes?.find(e => e.name == t);
      return a?.value
    },
    to = ({ node: e, truncateClasses: t = !0 }) => {
      let{ nodeName: a, pseudoType: n, attributes: l } = e.preview.node,
        r = ti(e, "id"),
        i = ti(e, "class") || "",
        o = i.split(" ").filter(Boolean),
        d = `${a.toLowerCase()}${n ? "::" + n : ""}`,
        c = r ? `#${r}` : "",
        u = [""].concat(o).join(".");
      return t && u.length > 25 && (u = u.slice(0, 25) + "..."),
             (0,
              s.jsxs)(
                "span",
                {
                  children: [
                    (0, s.jsx)("span", { className: "theme-fg-color3", children: d }),
                    c &&
                    (0,
                     s.jsx)(
                       "span",
                       {
                         style: { color: "var(--theme-highlight-purple)" },
                         children: c
                       }
                     ),
                    u &&
                    (0, s.jsx)("span", { className: "theme-fg-color3", children: u })
                  ]
                }
              )
    },
    td = () => {
      let[e, t] = (0, n.useState)([]),
        a = (0, u.CG)(te.en),
        l = (0, u.TL)(),
        { pauseId: r } = (0, d.x)()??{},
        i = (0, n.useContext)(c.R);
      (0, n.useEffect)(() => {
        var e;
        a && l(async(t, s, { replayClient: n, objectCache: l }) => {
          e || (e = await (0, ta.C)(n, s())), tl.has(e) || tl.set(e, new Map);
          let r = tl.get(e),
            i = r.get(a);
          if (i)
            return i;
          s();
          let{ listeners: o, data: d } = await n.getEventListeners(e, a),
            c = await eI.cO.readAsync(n);
          (0, ex.UW)(n, c, e, d);
          let u = await Promise.all(o.map(t => {
              let a = l.getValue(n, e, t.handler, "canOverflow");
              return (0, tn.rT)(n, t.type, a.preview.functionLocation)
            })),
            p = u.filter(Boolean),
            h = await l.readAsync(n, e, a, "canOverflow"),
            { properties: m = [] } = h.preview,
            x = m.find(e => e.name.startsWith(ts.yH) || e.name.startsWith(ts.OJ));
          if (x) {
            let t = await l.readAsync(n, e, x.object, "canOverflow"),
              a = t.preview?.properties?.filter(e => !!e.object)??[];
            if (a.length) {
              let t = await Promise.all(
                a.map(
                  async t => ({
                    name: t.name,
                    value: await l.readAsync(n, e, t.object, "canOverflow")
                  })
                )
              ),
                s = await Promise.all(
                  t.filter(
                    e => "Function" === e.value.className
                  ).map(
                    e => (0,
                          tn.rT)(
                            n,
                            e.name,
                            e.value.preview.functionLocation,
                            "react"
                          )
                  )
                ),
                r = s.filter(Boolean);
              p.push(...r)
            }
          }
          return r.set(a, p), p
        }).then(e => t(e))
      }, [a, l]);
      let o = (0, n.useMemo)(() => {
          let t = {};
          for (let a of e)
            void 0 === t[a.type] && (t[a.type] = []), t[a.type].push(a);
          return Object.entries(t).sort(([e], [t]) => e < t ? -1 : e > t ? 1 : 0)
        }, [e]);
      if (!r || !a)
        return null;
      let p = em.OZ.read(i, r, a, "canOverflow");
      return (0,
              s.jsx)(
                "div",
                {
                  className: "h-full overflow-auto",
                  children: 0 === e.length
                            ? (0,
                               s.jsx)(
                                 "div",
                                 {
                                   className: "devtools-sidepanel-no-result",
                                   children: "No event listeners"
                                 }
                               )
                            : o.map(([e, t]) => {
        let a = t.find(e => !!e.framework)?.framework,
          n = (0,
               s.jsxs)(
                 "div",
                 {
                   className: "flex items-center text-sm",
                   children: [
                     e,
                     (0,
                      s.jsx)("span", { className: `img ml-1 ${a??"javascript"}` })
                   ]
                 }
               );
        return (0,
                s.jsx)(
                  "div",
                  {
                    className: "devtools-monospace",
                    children: (0,
                               s.jsx)(
                                 tr,
                                 {
                                   header: n,
                                   children: t.map(
                                     ({
                                        functionName: e,
                                        functionParameterNames: t,
                                        locationUrl: a,
                                        location: n,
                                        framework: r
                                      },
                                      i) => (0,
                                             s.jsx)(
                                               tr,
                                               {
                                                 header: (0,
                                                          s.jsxs)(
                                                            "div",
                                                            {
                                                              className: "flex flex-col ",
                                                              children: [
                                                                (0,
                                                                 s.jsx)(
                                                                   to,
                                                                   { node: p }
                                                                 ),
                                                                (0,
                                                                 s.jsx)(
                                                                   "div",
                                                                   {
                                                                     children: n &&
                                                                               a
                                                                               ? (0,
                                                                                  s.jsxs)(
                                                                                    "span",
                                                                                    {
                                                                                      className: "cursor-pointer underline hover:text-gray-500",
                                                                                      title: "Open in Debugger",
                                                                                      onClick: () => {
          l(
            (0,
             tt.A)(
               { column: n.column, line: n.line, openSource: !0, sourceId: n.sourceId }
             )
          )
        },
          children: [a.substring(a.lastIndexOf("/") + 1), ":", n.line] })
          : "[native code]" })] }),
          children: (0,
                     s.jsx)(
                       "div",
                       {
                         className: "pl-4",
                         children: (0,
                                    s.jsxs)(
                                      "div",
                                      {
                                        children: [
                                          (0,
                                           s.jsx)(
                                             "span",
                                             {
                                               className: "theme-fg-color3",
                                               children: "handler: "
                                             }
                                           ),
                                          (0,
                                           s.jsx)(
                                             "span",
                                             {
                                               className: "italic",
                                               style: {
                                                 color: "var(--theme-highlight-lightorange)"
                                               },
                                               children: "f"
                                             }
                                           ),
                                          " ",
                                          (0,
                                           s.jsxs)(
                                             "span",
                                             {
                                               className: "italic",
                                               children: [
                                                 e,
                                                 "(",
                                                 t.join(", "),
                                                 ")"
                                               ]
                                             }
                                           )
                                        ]
                                      }
                                    )
                       }
                     ) },
          i)) }) },
          e
        )
      }) })
    };
  var tc = a(78441),
    tu = a.n(tc);
  let tp = {
    ruleview: "Rules",
    computedview: "Computed",
    layoutview: "Layout",
    eventsview: "Event Listeners"
  },
    th = ["ruleview", "layoutview", "computedview", "eventsview"];
  function tm() {
    let e = (0, u.TL)(),
      t = (0, u.CG)(e => e.inspector.activeTab),
      { point: a } = (0, d.x)()??{},
      r = (0, u.CG)(m.y),
      [i, o] = (0, n.useState)(!1),
      [c, p] = (0, n.useState)(!1),
      h = (0, e3.T)(a??null);
    if (!h)
      return (0,
              s.jsxs)(
                "div",
                {
                  className: "inspector-responsive-container bg-bodyBgcolor p-2",
                  children: [
                    "Elements are unavailable because you're paused at a point outside",
                    " ",
                    (0,
                     s.jsx)(
                       "span",
                       {
                         className: "cursor-pointer underline",
                         onClick: () => e((0, e6.enterFocusMode)()),
                         children: "your debugging window"
                       }
                     ),
                    "."
                  ]
                }
              );
    let x = t => {
        e((0, e8.setDefaultSelectedReactElementId)(t)),
        e((0, e2.setSelectedPanel)("react-components"))
      },
      g = tu().ResizeHandle;
    return i
           ? g = tu().ResizeHandleCollapsedLeft
           : c && (g = tu().ResizeHandleCollapsedRight),
           (0,
            s.jsx)(
              "div",
              {
                className: "inspector-responsive-container theme-body inspector",
                children: (0,
                           s.jsx)(
                             "div",
                             {
                               id: "inspector-splitter-box",
                               children: (0,
                                          s.jsxs)(
                                            l.eh,
                                            {
                                              autoSaveId: "App",
                                              className: "inspector-sidebar-splitter",
                                              direction: "horizontal",
                                              children: [
                                                (0,
                                                 s.jsx)(
                                                   l.s_,
                                                   {
                                                     collapsible: !0,
                                                     minSize: 20,
                                                     onCollapse: () => o(!0),
                                                     onExpand: () => o(!1),
                                                     children: (0, s.jsx)(eL, {})
                                                   }
                                                 ),
                                                (0, s.jsx)(l.OT, { className: g }),
                                                (0,
                                                 s.jsx)(
                                                   l.s_,
                                                   {
                                                     collapsible: !0,
                                                     defaultSize: 40,
                                                     minSize: 20,
                                                     onCollapse: () => p(!0),
                                                     onExpand: () => p(!1),
                                                     children: (0,
                                                                s.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className: "devtools-inspector-tab-panel",
                                                                    children: [
                                                                      (0,
                                                                       s.jsx)(
                                                                         "div",
                                                                         {
                                                                           id: "inspector-sidebar-container",
                                                                           children: (0,
                                                                                      s.jsx)(
                                                                                        "div",
                                                                                        {
                                                                                          id: "inspector-sidebar",
                                                                                          children: (0,
                                                                                                     s.jsx)(
                                                                                                       "div",
                                                                                                       {
                                                                                                         className: "devtools-sidebar-tabs",
                                                                                                         children: (0,
                                                                                                                    s.jsxs)(
                                                                                                                      "div",
                                                                                                                      {
                                                                                                                        className: "tabs",
                                                                                                                        children: [
                                                                                                                          (0,
                                                                                                                           s.jsx)(
                                                                                                                             "nav",
                                                                                                                             {
                                                                                                                               className: "tabs-navigation",
                                                                                                                               style: {
                                                                                                                                 borderBottom: "1px solid var(--theme-splitter-color)"
                                                                                                                               },
                                                                                                                               children: (0,
                                                                                                                                          s.jsx)(
                                                                                                                                            e9,
                                                                                                                                            {
                                                                                                                                              activeIdx: th.indexOf(
                                                                                                                                                t
                                                                                                                                              ),
                                                                                                                                              dataTestId: "InspectorTabs",
                                                                                                                                              children: th.map(
                                                                                                                                                a => (0,
                                                                                                                                                      s.jsx)(
                                                                                                                                                        e7,
                                                                                                                                                        {
                                                                                                                                                          id: a,
                                                                                                                                                          active: t ===
                                                                                                                                                                  a,
                                                                                                                                                          text: tp[a],
                                                                                                                                                          onClick: () => e(
                                                                                                                                                            ((0,
                                                                                                                                                              e5.L9)(
                                                                                                                                                                "inspector.select_tab",
                                                                                                                                                                {
                                                                                                                                                                  tab: a
                                                                                                                                                                }
                                                                                                                                                              ),
                                                                                                                                                             {
                                                                                                                                                               type: "set_active_inspector_tab",
                                                                                                                                                               activeTab: a
                                                                                                                                                             })
                                                                                                                                                          )
                                                                                                                                                        },
                                                                                                                                                        a
                                                                                                                                                      )
                                                                                                                                              )
                                                                                                                                            }
                                                                                                                                          )
                                                                                                                             }
                                                                                                                           ),
                                                                                                                          (0,
                                                                                                                           s.jsx)(
                                                                                                                             "div",
                                                                                                                             {
                                                                                                                               className: "panels",
                                                                                                                               children: (0,
                                                                                                                                          s.jsxs)(
                                                                                                                                            "div",
                                                                                                                                            {
                                                                                                                                              className: "tab-panel-box",
                                                                                                                                              role: "tabpanel",
                                                                                                                                              children: [
                                                                                                                                                "computedview" ===
                                                                                                                                                t &&
                                                                                                                                                (0,
                                                                                                                                                 s.jsx)(
                                                                                                                                                   T,
                                                                                                                                                   {}
                                                                                                                                                 ),
                                                                                                                                                "eventsview" ===
                                                                                                                                                t &&
                                                                                                                                                (0,
                                                                                                                                                 s.jsx)(
                                                                                                                                                   td,
                                                                                                                                                   {}
                                                                                                                                                 ),
                                                                                                                                                "layoutview" ===
                                                                                                                                                t &&
                                                                                                                                                (0,
                                                                                                                                                 s.jsx)(
                                                                                                                                                   U,
                                                                                                                                                   {}
                                                                                                                                                 ),
                                                                                                                                                "ruleview" ===
                                                                                                                                                t &&
                                                                                                                                                (0,
                                                                                                                                                 s.jsx)(
                                                                                                                                                   eX,
                                                                                                                                                   {}
                                                                                                                                                 )
                                                                                                                                              ]
                                                                                                                                            }
                                                                                                                                          )
                                                                                                                             }
                                                                                                                           )
                                                                                                                        ]
                                                                                                                      }
                                                                                                                    )
                                                                                                       }
                                                                                                     )
                                                                                        }
                                                                                      )
                                                                         }
                                                                       ),
                                                                      r &&
                                                                      (0,
                                                                       s.jsx)(
                                                                         e1,
                                                                         {
                                                                           nodeId: r,
                                                                           viewReactComponent: x
                                                                         }
                                                                       )
                                                                    ]
                                                                  }
                                                                )
                                                   }
                                                 )
                                              ]
                                            }
                                          )
                             }
                           )
              }
            )
  }
}, 44746: function(e) {
  e.exports = {
    ListWrapper: "ElementList_ListWrapper__lZcHZ",
    List: "ElementList_List__Sa6xj"
  }
}, 41323: function(e) {
  e.exports = {
    Details: "ElementReactDetails_Details__dTloD",
    ComponentName: "ElementReactDetails_ComponentName__PQQHA",
    ReactIcon: "ElementReactDetails_ReactIcon__yWGSK",
    ViewComponentIcon: "ElementReactDetails_ViewComponentIcon__xPEbF"
  }
}, 1821: function(e) {
  e.exports = {
    Node: "ElementsListItem_Node__zXU_v",
    HtmlAttributeName: "ElementsListItem_HtmlAttributeName__pwMeO",
    HtmlAttributeValue: "ElementsListItem_HtmlAttributeValue__3u6a7",
    HtmlAttribute: "ElementsListItem_HtmlAttribute__p42sj",
    HTMLBracket: "ElementsListItem_HTMLBracket__ab11_",
    HTMLTag: "ElementsListItem_HTMLTag__3ogbj",
    Separator: "ElementsListItem_Separator__b6wFK",
    Icon: "ElementsListItem_Icon__rQpJQ",
    SelectedSubTreeLine: "ElementsListItem_SelectedSubTreeLine__PiOVZ",
    Spacer: "ElementsListItem_Spacer__aTDgn",
    IconContainer: "ElementsListItem_IconContainer__2ymuh",
    IconContainerRotated: "ElementsListItem_IconContainerRotated__9uhka",
    LoadingIcon: "ElementsListItem_LoadingIcon__3zidV",
    ArrowIcon: "ElementsListItem_ArrowIcon__eN_xX",
    spin: "ElementsListItem_spin__QREm9",
    ExpandCollapseIcon: "ElementsListItem_ExpandCollapseIcon___DPhj"
  }
}, 16026: function(e) {
  e.exports = {
    Panel: "ElementsPanel_Panel__Xppch",
    PanelLoader: "ElementsPanel_PanelLoader__v6Wp7",
    SearchRow: "ElementsPanel_SearchRow__QDdD9",
    SearchIconAndInput: "ElementsPanel_SearchIconAndInput__papsW",
    AdvancedButton: "ElementsPanel_AdvancedButton__gxna_",
    AdvancedIcon: "ElementsPanel_AdvancedIcon__m_RIA",
    SearchIcon: "ElementsPanel_SearchIcon__2HcX4",
    SearchInput: "ElementsPanel_SearchInput__DnaHq",
    SearchResults: "ElementsPanel_SearchResults__ftZ5L",
    ListRow: "ElementsPanel_ListRow__rN2wP",
    SpinnerIcon: "ElementsPanel_SpinnerIcon__rUdWX",
    spin: "ElementsPanel_spin__wOUgv"
  }
}, 47242: function(e) {
  e.exports = { Message: "NoContentFallback_Message__R2fIG" }
}, 78441: function(e) {
  e.exports = {
    Panel: "App_Panel__MGk9o",
    ResizeHandle: "App_ResizeHandle__dQRPz",
    ResizeHandleCollapsedLeft: "App_ResizeHandleCollapsedLeft__RO6Oz",
    ResizeHandleCollapsedRight: "App_ResizeHandleCollapsedRight__IhMxm"
  }
}, 32103: function(e) {
  e.exports = {
    DeclarationState: "RulesListItem_DeclarationState__czYon",
    Inheritance: "RulesListItem_Inheritance__Oseyj",
    PseudoElement: "RulesListItem_PseudoElement__hZYSU",
    RuleStateFooter: "RulesListItem_RuleStateFooter__S9nIR",
    RuleStateHeader: "RulesListItem_RuleStateHeader__MoYak",
    PseudoElementExpandableHeader: "RulesListItem_PseudoElementExpandableHeader__z1Yus",
    SelectorText: "RulesListItem_SelectorText__NCyz4",
    SourceLink: "RulesListItem_SourceLink__aASoh",
    DeclarationName: "RulesListItem_DeclarationName__RQe5m",
    DeclarationValue: "RulesListItem_DeclarationValue__Dx3Kv",
    ColorToken: "RulesListItem_ColorToken__xbxNY"
  }
}, 96136: function(e) {
  e.exports = {
    RulesPanel: "RulesPanel_RulesPanel__VLDFK",
    FilterRow: "RulesPanel_FilterRow__m0gBm",
    FilterIcon: "RulesPanel_FilterIcon__6U8g5",
    FilterInput: "RulesPanel_FilterInput__KZ3VD",
    ListWrapper: "RulesPanel_ListWrapper__lbIRs",
    NoStyles: "RulesPanel_NoStyles__Hlth6"
  }
} }]);
//# sourceMappingURL=134.e9c6e80e73af09de.js.map