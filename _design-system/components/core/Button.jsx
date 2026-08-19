import React from "react";

/**
 * Square-cornered button in the NTA palette. Primary is navy; secondary is a
 * navy hairline; ghost is text-only. Gold is deliberately NOT a button fill —
 * white text on gold is 2.1:1 and fails AA.
 */
export function Button({ variant = "primary", size = "medium", disabled = false, children, style, ...rest }) {
  const sizes = {
    small:  { padding: "8px 16px",  fontSize: "var(--type-small)" },
    medium: { padding: "13px 26px", fontSize: "var(--type-body)" },
    large:  { padding: "17px 34px", fontSize: "var(--type-lead)" },
  };

  const variants = {
    primary:   { background: "var(--nta-navy)", color: "var(--nta-white)", border: "1px solid var(--nta-navy)" },
    secondary: { background: "transparent", color: "var(--nta-navy)", border: "1px solid var(--nta-navy)" },
    ghost:     { background: "transparent", color: "var(--nta-slate)", border: "1px solid transparent" },
    inverse:   { background: "var(--nta-white)", color: "var(--nta-navy)", border: "1px solid var(--nta-white)" },
  };

  return (
    <button
      disabled={disabled}
      style={{
        fontFamily: "var(--font-text)",
        fontWeight: 600,
        letterSpacing: "0.3px",
        borderRadius: "var(--radius-none)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        transition: "background var(--transition-base), color var(--transition-base)",
        ...sizes[size],
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
