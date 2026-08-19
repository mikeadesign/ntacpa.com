import React from "react";

/**
 * Content surface. Cards sit on tone or a hairline border — not on a shadow.
 * `accent` adds the brand's top gold rule; `tone="inverse"` inverts to navy.
 */
export function Card({ tone = "light", accent = false, padded = true, children, style, ...rest }) {
  const tones = {
    light:   { background: "var(--surface-card)", color: "var(--text-body)", border: "1px solid var(--border-hairline)" },
    sunken:  { background: "var(--surface-sunken)", color: "var(--text-body)", border: "1px solid var(--border-hairline)" },
    inverse: { background: "var(--surface-inverse)", color: "var(--text-inverse-soft)", border: "1px solid var(--nta-navy)" },
  };

  return (
    <div
      style={{
        borderRadius: "var(--radius-none)",
        borderTop: accent ? "3px solid var(--nta-gold)" : undefined,
        padding: padded ? "var(--space-6) var(--space-7)" : 0,
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
