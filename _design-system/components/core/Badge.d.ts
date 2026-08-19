import * as React from "react";

/** Small tracked uppercase label for credentials, service tags, and statuses. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `gold` uses Deep Gold text so it clears AA on light fields. */
  tone?: "navy" | "outline" | "gold" | "inverse";
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): React.JSX.Element;
