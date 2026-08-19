Use for form fields — contact forms, document requests, client intake.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" />
<Input label="How can I help?" multiline rows={5} />
<Input label="Phone" error="Enter a valid number" />
```

The label is the brand's tracked uppercase treatment. `multiline` swaps in a
textarea; `error` replaces `hint` and turns the border red.
