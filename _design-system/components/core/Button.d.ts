import * as React from "react";

/**
 * Square-cornered button in the NTA palette.
 *
 * @startingPoint section="Core" subtitle="Button variants and sizes" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** `primary` navy fill, `secondary` navy hairline, `ghost` text-only, `inverse` for navy fields. */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element;
