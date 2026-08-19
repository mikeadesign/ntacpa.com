import * as React from "react";

/** Content surface — sits on tone or a hairline border, never on a shadow. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "sunken" | "inverse";
  /** Adds the brand's 3px gold top rule. */
  accent?: boolean;
  padded?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): React.JSX.Element;
