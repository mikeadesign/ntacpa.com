import React from "react";

/**
 * The NTA, Inc. identity, in every sanctioned configuration.
 *
 * All geometry derives from `size` (the mark's edge length in px), so the
 * lockup stays in proportion at any scale. The degradation rules from the
 * brand standards are enforced here rather than left to the caller:
 *   • ticks drop below 32px
 *   • the mark reduces to a single "N" at 16px and under
 *   • circular crops replace the ticks with a gold underscore
 *   • the full lockup refuses to render below 120px wide and falls back to
 *     the stacked configuration
 */

const TONES = {
  navy:          { field: "#16324d", glyph: "#ffffff", tick: "#c9a24a", rule: "#c9a24a", word: "#16324d", desc: "#16324d", name: "#8a8f98" },
  reversed:      { field: "#ffffff", glyph: "#16324d", tick: "#c9a24a", rule: "#c9a24a", word: "#ffffff", desc: "#ffffff", name: "#9fb2c6" },
  "mono-navy":   { field: "#16324d", glyph: "#ffffff", tick: "#ffffff", rule: "#16324d", word: "#16324d", desc: "#16324d", name: "#16324d" },
  "mono-black":  { field: "#111111", glyph: "#ffffff", tick: "#ffffff", rule: "#111111", word: "#111111", desc: "#111111", name: "#111111" },
  "mono-white":  { field: "transparent", glyph: "#ffffff", tick: "#ffffff", rule: "#ffffff", word: "#ffffff", desc: "#ffffff", name: "#ffffff", outline: "#ffffff" },
};

function Mark({ size, tone, circular }) {
  const t = TONES[tone] || TONES.navy;
  const showTicks = size >= 32 && !circular;
  const singleLetter = size <= 16;
  const inset = Math.max(2, size * 0.085);
  const tickSize = Math.max(3, size * 0.115);
  const border = Math.max(1, Math.round(size * 0.019));

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        flex: "0 0 auto",
        background: t.field,
        border: t.outline ? `${border}px solid ${t.outline}` : undefined,
        borderRadius: circular ? "50%" : 0,
        overflow: circular ? "hidden" : "visible",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: singleLetter ? size * 0.56 : size * 0.32,
          letterSpacing: singleLetter ? 0 : "var(--track-wordmark)",
          color: t.glyph,
          lineHeight: 1,
        }}
      >
        {singleLetter ? "N" : "NTA"}
      </span>

      {showTicks && (
        <React.Fragment>
          <span style={{ position: "absolute", top: inset, right: inset, width: tickSize, height: tickSize, borderTop: `${border}px solid ${t.tick}`, borderRight: `${border}px solid ${t.tick}` }} />
          <span style={{ position: "absolute", bottom: inset, left: inset, width: tickSize, height: tickSize, borderBottom: `${border}px solid ${t.tick}`, borderLeft: `${border}px solid ${t.tick}` }} />
        </React.Fragment>
      )}

      {circular && (
        <span style={{ position: "absolute", bottom: size * 0.17, width: size * 0.29, height: Math.max(2, size * 0.023), background: t.tick }} />
      )}
    </div>
  );
}

function Descriptor({ size, tone, showName, align = "flex-start" }) {
  const t = TONES[tone] || TONES.navy;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: align, gap: size * 0.038 }}>
      <span
        style={{
          fontFamily: "var(--font-text)",
          fontWeight: 600,
          fontSize: Math.max(7, size * 0.094),
          letterSpacing: "var(--track-descriptor)",
          color: t.desc,
          whiteSpace: "nowrap",
        }}
      >
        ACCOUNTING &amp; ADVISORY
      </span>
      {showName && (
        <span
          style={{
            fontFamily: "var(--font-text)",
            fontWeight: 500,
            fontSize: Math.max(7, size * 0.09),
            letterSpacing: "var(--track-name)",
            color: t.name,
            whiteSpace: "nowrap",
          }}
        >
          NICHOLAS T. AVELLO, CPA
        </span>
      )}
    </div>
  );
}

function Wordmark({ size, tone }) {
  const t = TONES[tone] || TONES.navy;
  return (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: size * 0.35,
        letterSpacing: "var(--track-wordmark)",
        color: t.word,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      NTA, Inc.
    </span>
  );
}

export function Logo({
  variant = "primary",
  tone = "navy",
  size = 106,
  showDescriptor = true,
  showName = true,
  circular = false,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.navy;

  if (variant === "mark") {
    return <Mark size={size} tone={tone} circular={circular} {...rest} />;
  }

  if (variant === "wordmark") {
    return (
      <div style={{ display: "inline-flex", flexDirection: "column", gap: size * 0.085, ...style }} {...rest}>
        <Wordmark size={size} tone={tone} />
        {showDescriptor && <Descriptor size={size} tone={tone} showName={showName} />}
      </div>
    );
  }

  if (variant === "stacked") {
    return (
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: size * 0.14, ...style }} {...rest}>
        <Mark size={size} tone={tone} circular={circular} />
        <span style={{ width: size * 0.5, height: Math.max(2, size * 0.028), background: t.rule }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: size * 0.07 }}>
          <Wordmark size={size * 0.95} tone={tone} />
          {showDescriptor && <Descriptor size={size} tone={tone} showName={showName} align="center" />}
        </div>
      </div>
    );
  }

  // primary — mark, gold rule, wordmark stack. Falls back to stacked below the
  // 120px minimum width defined in the brand standards.
  if (size < 56) {
    return (
      <Logo variant="stacked" tone={tone} size={size} showDescriptor={showDescriptor} showName={showName} style={style} {...rest} />
    );
  }

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: size * 0.245, ...style }} {...rest}>
      <Mark size={size} tone={tone} />
      <span style={{ width: Math.max(2, size * 0.019), height: size, background: t.rule, flex: "0 0 auto" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: size * 0.085 }}>
        <Wordmark size={size} tone={tone} />
        {showDescriptor && <Descriptor size={size} tone={tone} showName={showName} />}
      </div>
    </div>
  );
}
