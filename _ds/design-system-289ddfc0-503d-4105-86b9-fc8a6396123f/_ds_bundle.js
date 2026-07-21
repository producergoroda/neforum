/* @ds-bundle: {"format":4,"namespace":"DesignSystem_289ddf","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"NotchedBadge","sourcePath":"components/brand/NotchedBadge.jsx"},{"name":"PillSticker","sourcePath":"components/social/PillSticker.jsx"},{"name":"PosterCard","sourcePath":"components/social/PosterCard.jsx"},{"name":"StickerCircle","sourcePath":"components/social/StickerCircle.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"2579f96c7f04","components/brand/NotchedBadge.jsx":"516cb62514a0","components/social/PillSticker.jsx":"9a91cc7f65ad","components/social/PosterCard.jsx":"bd7b3faa0869","components/social/StickerCircle.jsx":"0b363ceef695"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_289ddf = window.DesignSystem_289ddf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const wordStyle = (family, weight, tracking) => ({
  fontFamily: family,
  fontWeight: weight,
  letterSpacing: tracking,
  textTransform: "uppercase"
});
function Logo({
  variant = "mark",
  color = "var(--brand-primary)",
  size = 64
}) {
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: size,
        height: size,
        background: color,
        display: "inline-block"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/logo-mark-union.svg",
      alt: "\u041D\u0424",
      style: {
        position: "absolute",
        width: "58%",
        height: "42%",
        left: "20%",
        top: "29%",
        objectFit: "contain"
      }
    }));
  }
  // wordmark lockup: two interlocking boxes reading "не" + "форум"
  const h = size * 0.48;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block",
      width: size,
      height: h,
      fontSize: h * 0.62
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: h * 0.1,
      width: h * 0.72,
      height: h * 0.8,
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...wordStyle("var(--font-serif)", 600, "-0.07em"),
      color: "var(--text-on-brand)"
    }
  }, "\u043D\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: h * 0.52,
      top: 0,
      width: size - h * 0.52,
      height: h,
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...wordStyle("var(--font-sans)", 600, "-0.13em"),
      color: "var(--text-on-brand)"
    }
  }, "\u0444\u043E\u0440\u0443\u043C")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/NotchedBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function notchClipPath(corner, notch) {
  const n = `${notch}px`;
  switch (corner) {
    case "tr":
      return `polygon(0 0, calc(100% - ${n}) 0, 100% ${n}, 100% 100%, 0 100%)`;
    case "bl":
      return `polygon(0 0, 100% 0, 100% 100%, ${n} 100%, 0 calc(100% - ${n}))`;
    case "tr-bl":
      return `polygon(0 0, calc(100% - ${n}) 0, 100% ${n}, 100% 100%, ${n} 100%, 0 calc(100% - ${n}))`;
    default:
      return "none";
  }
}
function NotchedBadge({
  children,
  notch = 16,
  corner = "tr",
  fill = "var(--brand-primary)",
  outline = false,
  textColor,
  style,
  ...rest
}) {
  const base = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--space-5) var(--space-7)",
    clipPath: notchClipPath(corner, notch),
    background: outline ? "transparent" : fill,
    boxShadow: outline ? `inset 0 0 0 var(--stroke-hairline) ${fill}` : "none",
    color: textColor || (outline ? fill : "var(--text-on-brand)"),
    font: "var(--text-label-md)",
    textTransform: "uppercase",
    letterSpacing: "var(--tracking-loose)",
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { NotchedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/NotchedBadge.jsx", error: String((e && e.message) || e) }); }

// components/social/PillSticker.jsx
try { (() => {
function PillSticker({
  children,
  fill = "var(--brand-secondary)",
  textColor = "var(--nf-white)",
  icon,
  rotate = -3
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-5)",
      background: fill,
      borderRadius: "var(--radius-md)",
      padding: "var(--space-6) var(--space-8)",
      transform: `rotate(${rotate}deg)`,
      boxShadow: "var(--shadow-soft)"
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--nf-white)",
      boxShadow: `0 0 0 8px ${fill}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: "60%",
      height: "60%"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-lg)",
      color: textColor,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-loose)",
      whiteSpace: "nowrap"
    }
  }, children));
}
Object.assign(__ds_scope, { PillSticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PillSticker.jsx", error: String((e && e.message) || e) }); }

// components/social/PosterCard.jsx
try { (() => {
function PosterCard({
  image,
  eyebrow,
  titleTop,
  titleBottom,
  dateText,
  bodyText,
  fill = "var(--brand-primary)",
  width = 340
}) {
  const height = width * 1.415; // A4-ish ratio matching source poster frames
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      height,
      background: "var(--nf-white)",
      overflow: "hidden",
      font: "var(--text-body)"
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "6%",
      top: "18%",
      width: "82%",
      height: "58%",
      background: `url(${image}) center/cover no-repeat`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "6%",
      top: "5%",
      right: "6%"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-label-md)",
      color: fill,
      textAlign: "right",
      textTransform: "uppercase"
    }
  }, eyebrow), titleTop && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-md)",
      fontFamily: "var(--font-serif)",
      color: fill,
      textAlign: "right",
      textTransform: "uppercase"
    }
  }, titleTop), titleBottom && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--text-display-md)",
      color: fill,
      textAlign: "right",
      textTransform: "uppercase"
    }
  }, titleBottom)), bodyText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "6%",
      bottom: "16%",
      width: "70%",
      color: fill,
      fontSize: 11
    }
  }, bodyText), dateText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "6%",
      bottom: "4%",
      font: "var(--text-label-lg)",
      fontFamily: "var(--font-serif)",
      color: fill,
      textTransform: "uppercase"
    }
  }, dateText), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "5%",
      top: "3%",
      width: 44,
      height: 30,
      background: fill,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-label-md)",
      fontSize: 12,
      color: "var(--nf-white)",
      fontFamily: "var(--font-serif)"
    }
  }, "\u041D\u0424")));
}
Object.assign(__ds_scope, { PosterCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/PosterCard.jsx", error: String((e && e.message) || e) }); }

// components/social/StickerCircle.jsx
try { (() => {
function StickerCircle({
  image,
  ring = 22,
  ringColor = "var(--nf-white)",
  size = 240,
  caption
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: `0 0 0 ${ring}px ${ringColor}`,
      background: `linear-gradient(180deg, rgba(0,0,0,0) 15%, rgba(0,0,0,0.2) 88%), url(${image}) center/cover no-repeat`
    }
  }), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: ring * 1.4,
      transform: "translateX(-50%)",
      font: "var(--text-label-md)",
      color: "var(--nf-white)",
      textTransform: "uppercase",
      textShadow: "0 2px 6px rgba(0,0,0,0.35)",
      whiteSpace: "nowrap"
    }
  }, caption));
}
Object.assign(__ds_scope, { StickerCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/social/StickerCircle.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.NotchedBadge = __ds_scope.NotchedBadge;

__ds_ns.PillSticker = __ds_scope.PillSticker;

__ds_ns.PosterCard = __ds_scope.PosterCard;

__ds_ns.StickerCircle = __ds_scope.StickerCircle;

})();
