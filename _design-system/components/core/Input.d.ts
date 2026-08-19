import * as React from "react";

/** Text input or textarea with the brand's tracked uppercase label. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — replaces `hint` and turns the border red. */
  error?: string;
  /** Render a textarea instead of a single-line input. */
  multiline?: boolean;
  rows?: number;
}

export function Input(props: InputProps): React.JSX.Element;
