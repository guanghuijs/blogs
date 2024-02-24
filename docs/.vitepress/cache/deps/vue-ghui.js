import {
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  mergeProps,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  popScopeId,
  pushScopeId,
  ref,
  render,
  renderSlot,
  toDisplayString,
  unref,
  useCssVars,
  vShow,
  withCtx,
  withDirectives
} from "./chunk-U7M647VG.js";
import "./chunk-ZS7NZCD4.js";

// node_modules/.pnpm/vue-ghui@1.0.4_vite@5.1.4/node_modules/vue-ghui/dist/ghui.mjs
var U = {
  key: 0,
  class: "toast-out"
};
var j = { class: "toast-main" };
var A = defineComponent({
  __name: "toast",
  props: {
    message: {
      type: String,
      default: "轻提示"
    },
    icon: String,
    wait: {
      type: Number,
      default: 2e3
    }
  },
  setup(e) {
    const t = e, n = ref(), o = ref(false);
    return onMounted(() => {
      o.value = true, t.wait !== -1 && (n.value = setTimeout(() => {
        o.value = false;
      }, t.wait));
    }), onUnmounted(() => {
      clearTimeout(unref(n));
    }), (c, p) => (openBlock(), createBlock(Transition, null, {
      default: withCtx(() => [
        o.value ? (openBlock(), createElementBlock("div", U, [
          createBaseVNode("div", j, [
            e.icon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(`iconfont icon-${e.icon}`)
            }, null, 2)) : createCommentVNode("", true),
            createBaseVNode("p", null, toDisplayString(e.message), 1)
          ])
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var l = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, c] of t)
    n[o] = c;
  return n;
};
var M = l(A, [["__scopeId", "data-v-98884258"]]);
var le = (e) => {
  var o;
  (o = document.querySelector("#toast-cont")) == null || o.remove();
  const t = document.createElement("div");
  t.id = "toast-cont";
  const n = createVNode(M, e);
  render(n, t), document.querySelector("#app").appendChild(t);
};
var pe = () => {
  var e;
  (e = document.querySelector("#toast-cont")) == null || e.remove();
};
var O = {
  name: {
    type: String,
    require: true
  },
  size: {
    type: [String, Number],
    default: "20px"
  },
  color: {
    type: String,
    default: "#333"
  }
};
var F = defineComponent({
  name: "HIcon",
  props: O,
  emits: ["iconClick"],
  setup: (e) => ({
    calStyle: computed(() => ({
      fontSize: typeof e.size == "number" ? `${e.size}px` : e.size,
      color: e.color
    }))
  })
});
var G = (e) => (pushScopeId("data-v-8a25a839"), e = e(), popScopeId(), e);
var J = G(() => createBaseVNode("span", null, null, -1));
var K = { class: "badge" };
function L(e, t, n, o, c, p) {
  return openBlock(), createElementBlock("div", {
    class: "icon__cont",
    onClick: t[0] || (t[0] = (m) => e.$emit("iconClick"))
  }, [
    renderSlot(e.$slots, "default", {}, () => [
      createBaseVNode("i", {
        class: normalizeClass(["iconfont", e.name]),
        style: normalizeStyle(e.calStyle)
      }, null, 6)
    ], true),
    J,
    createBaseVNode("div", K, toDisplayString(e.$attrs.badge), 1)
  ]);
}
var Q = l(F, [["render", L], ["__scopeId", "data-v-8a25a839"]]);
var R = {
  open: {
    type: Boolean,
    require: false
  },
  position: {
    type: String,
    default: "bottom"
  },
  width: {
    type: String,
    default: "50vw"
  },
  height: {
    type: String,
    default: "50vh"
  }
};
var f = defineComponent({
  name: "HPopup",
  props: R,
  emits: ["update:open"],
  setup: (e) => ({
    position: e.position
  })
});
var g = () => {
  useCssVars((e) => ({
    "0324f62e": e.height,
    "3abd8bdf": e.width
  }));
};
var h = f.setup;
f.setup = h ? (e, t) => (g(), h(e, t)) : g;
var W = { class: "popup-close" };
function X(e, t, n, o, c, p) {
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createBaseVNode("div", {
      class: "shade",
      onClick: t[0] || (t[0] = (m) => e.$emit("update:open", false))
    }, null, 512), [
      [vShow, e.open]
    ]),
    createVNode(Transition, { name: e.position }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", mergeProps({
          class: ["popup", e.position]
        }, e.$attrs), [
          renderSlot(e.$slots, "closeIcon", {}, () => [
            createBaseVNode("div", W, [
              createBaseVNode("i", {
                onClick: t[1] || (t[1] = (m) => e.$emit("update:open", false)),
                class: "iconfont icon-close"
              })
            ])
          ], true),
          renderSlot(e.$slots, "default", {}, void 0, true)
        ], 16), [
          [vShow, e.open]
        ])
      ]),
      _: 3
    }, 8, ["name"])
  ]);
}
var Y = l(f, [["render", X], ["__scopeId", "data-v-324578f6"]]);
var Z = {
  type: String
};
var x = defineComponent({
  name: "HButton",
  props: Z
});
function ee(e, t, n, o, c, p) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["btn", e.type])
  }, [
    renderSlot(e.$slots, "default", {}, () => [
      createTextVNode("按钮")
    ], true)
  ], 2);
}
var te = l(x, [["render", ee], ["__scopeId", "data-v-61bb14ed"]]);
var oe = {
  title: {
    type: String,
    default: "卡片标题"
  }
};
var ne = defineComponent({
  name: "HCard",
  props: oe
});
var se = { class: "card" };
var ae = { class: "card-title" };
var ce = { class: "card-content" };
function ie(e, t, n, o, c, p) {
  return openBlock(), createElementBlock("div", se, [
    createBaseVNode("div", ae, toDisplayString(e.title), 1),
    createBaseVNode("div", ce, [
      renderSlot(e.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var re = l(ne, [["render", ie], ["__scopeId", "data-v-192dbf33"]]);
var ue = {
  install: (e) => {
    [Q, Y, te, re].forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  te as HButton,
  re as HCard,
  Q as HIcon,
  Y as HPopup,
  ue as default,
  pe as hiddenToast,
  le as toast
};
//# sourceMappingURL=vue-ghui.js.map
