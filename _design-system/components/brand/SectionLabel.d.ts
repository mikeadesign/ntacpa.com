import * as React from "react";

/** Tracked uppercase section eyebrow, optionally numbered. */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Leading number, e.g. "01" — rendered as "01 · LABEL". */
  number?: string | number;
  /** Placement context: `inverse` on navy fields. */
  tone?: "light" | "inverse";
  children?: React.ReactNode;
}

export function SectionLabel(props: SectionLabelProps): React.JSX.Element;
