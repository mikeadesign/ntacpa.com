import * as React from "react";

/**
 * The NTA, Inc. identity in every sanctioned configuration.
 *
 * @startingPoint section="Brand" subtitle="Logo lockups, tones, and degradation rules" viewport="700x300"
 */
export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Lockup configuration. `primary` falls back to `stacked` below 56px. */
  variant?: "primary" | "stacked" | "mark" | "wordmark";
  /** Colour treatment. Use `reversed` on navy, `mono-*` for one-colour print. */
  tone?: "navy" | "reversed" | "mono-navy" | "mono-black" | "mono-white";
  /** The mark's edge length in px. All other geometry derives from it. */
  size?: number;
  /** Show "ACCOUNTING & ADVISORY". */
  showDescriptor?: boolean;
  /** Show "NICHOLAS T. AVELLO, CPA" beneath the descriptor. */
  showName?: boolean;
  /** Circular crop for avatars — replaces the corner ticks with a gold underscore. */
  circular?: boolean;
}

export function Logo(props: LogoProps): React.JSX.Element;
