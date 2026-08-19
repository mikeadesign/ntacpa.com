import * as React from "react";

/** Tagline and pull-quote treatment: Spectral italic behind a gold rule. */
export interface PullQuoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  tone?: "light" | "inverse";
  /** Tracked uppercase attribution line beneath the quote. */
  attribution?: string;
  children?: React.ReactNode;
}

export function PullQuote(props: PullQuoteProps): React.JSX.Element;
