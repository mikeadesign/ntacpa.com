import React from "react";

/**
 * Text input with the brand's tracked uppercase label. Square corners, hairline
 * border, navy focus. Multi-line switches the field to a textarea.
 */
export function Input({ label, hint, error, multiline = false, rows = 4, id, style, ...rest }) {
  const fieldId = id || (label ? `nta-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const Field = multiline ? "textarea" : "input";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", ...style }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: "var(--font-text)",
            fontSize: "var(--type-eyebrow)",
            fontWeight: 700,
            letterSpacing: "var(--track-eyebrow)",
            textTransform: "uppercase",
            color: "var(--nta-navy)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </label>
      )}
      <Field
        id={fieldId}
        rows={multiline ? rows : undefined}
        style={{
          fontFamily: "var(--font-text)",
          fontSize: "var(--type-body)",
          color: "var(--nta-body)",
          background: "var(--nta-white)",
          padding: "13px 15px",
          border: `1px solid ${error ? "var(--nta-danger)" : "var(--border-cool)"}`,
          borderRadius: "var(--radius-none)",
          outline: "none",
          resize: multiline ? "vertical" : undefined,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span
          style={{
            fontFamily: "var(--font-text)",
            fontSize: "var(--type-small)",
            color: error ? "var(--nta-danger)" : "var(--nta-muted)",
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
