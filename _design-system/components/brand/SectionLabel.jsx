import React from "react";

/**
 * The tracked uppercase eyebrow that opens every section of NTA collateral,
 * optionally numbered. Always Archivo, always nowrap — the wide tracking
 * leaves these lines no slack.
 */
export function SectionLabel({ number, children, tone = "light", style, ...rest }) {
  const color = tone === "inverse" ? "var(--nta-on-navy-muted)" : "var(--nta-slate)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        fontFamily: "var(--font-text)",
        fontSize: "var(--type-eyebrow)",
        fontWeight: 700,
        letterSpacing: "var(--track-eyebrow)",
        textTransform: "uppercase",
        color,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {number != null && <span>{number} ·</span>}
      <span>{children}</span>
    </div>
  );
}
