import React from "react";

/**
 * The tagline and pull-quote treatment: Spectral italic behind a gold rule.
 * This is the only place italic display type appears in the system.
 */
export function PullQuote({ tone = "light", attribution, children, style, ...rest }) {
  const color = tone === "inverse" ? "var(--nta-white)" : "var(--nta-navy)";
  const attrColor = tone === "inverse" ? "var(--nta-on-navy-soft)" : "var(--nta-muted)";
  return (
    <blockquote
      style={{
        margin: 0,
        borderLeft: "3px solid var(--nta-gold)",
        paddingLeft: "var(--space-7)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontStyle: "italic",
          fontSize: "var(--type-quote)",
          lineHeight: "var(--leading-snug)",
          color,
          textWrap: "pretty",
        }}
      >
        {children}
      </span>
      {attribution && (
        <span
          style={{
            fontFamily: "var(--font-text)",
            fontSize: "var(--type-eyebrow)",
            fontWeight: 700,
            letterSpacing: "var(--track-eyebrow)",
            textTransform: "uppercase",
            color: attrColor,
            whiteSpace: "nowrap",
          }}
        >
          {attribution}
        </span>
      )}
    </blockquote>
  );
}
