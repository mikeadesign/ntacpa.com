import * as React from "react";

/** The gold divider — the identity's signature line. */
export interface GoldRuleProps extends React.HTMLAttributes<HTMLSpanElement> {
  orientation?: "vertical" | "horizontal";
  /** Length along the rule's long axis, in px. */
  length?: number;
  /** Thickness in px. 2 is the brand default. */
  weight?: number;
  tone?: "gold" | "navy" | "white" | "black";
}

export function GoldRule(props: GoldRuleProps): React.JSX.Element;
