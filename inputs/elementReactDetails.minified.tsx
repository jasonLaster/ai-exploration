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