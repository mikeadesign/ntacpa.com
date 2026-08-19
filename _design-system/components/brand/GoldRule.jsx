import React from "react";

/**
 * The gold divider — the identity's signature line. Vertical between a mark
 * and a wordmark; horizontal as a bridge in stacked configurations or to open
 * a section. Gold on navy and gold on paper are both sanctioned; the rule is
 * never used as an underline for body text.
 */
export function GoldRule({ orientation = "vertical", length = 106, weight = 2, tone = "gold", style, ...rest }) {
  const colors = { gold: "var(--nta-gold)", navy: "var(--nta-navy)", white: "var(--nta-white)", black: "var(--nta-black)" };
  const background = colors[tone] || colors.gold;
  const vertical = orientation === "vertical";
  return (
    <span
      aria-hidden="true"
      style={{
        display: "block",
        flex: "0 0 auto",
        background,
        width: vertical ? weight : length,
        height: vertical ? length : weight,
        ...style,
      }}
      {...rest}
    />
  );
}
