import React from "react";

/**
 * Small tracked uppercase label for credentials, service tags, and statuses.
 * The gold variant uses Deep Gold for its text so it clears AA on light fields.
 */
export function Badge({ tone = "navy", children, style, ...rest }) {
  const tones = {
    navy:    { background: "var(--nta-navy)", color: "var(--nta-white)", border: "1px solid var(--nta-navy)" },
    outline: { background: "transparent", color: "var(--nta-navy)", border: "1px solid var(--border-cool)" },
    gold:    { background: "rgba(201, 162, 74, 0.14)", color: "var(--nta-gold-deep)", border: "1px solid rgba(201, 162, 74, 0.5)" },
    inverse: { background: "rgba(255, 255, 255, 0.12)", color: "var(--nta-white)", border: "1px solid rgba(255, 255, 255, 0.32)" },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "var(--font-text)",
        fontSize: "var(--type-fine)",
        fontWeight: 600,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: "var(--radius-none)",
        whiteSpace: "nowrap",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
