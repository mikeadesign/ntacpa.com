Use this for the gold divider that hinges the mark to the wordmark, bridges a stacked lockup, or opens a section.

```jsx
<GoldRule length={106} />                              {/* vertical hinge */}
<GoldRule orientation="horizontal" length={120} />     {/* bridge */}
<GoldRule orientation="horizontal" length={90} weight={3} />
```

2px is the brand weight; 3px is the card accent. Never use it as an underline
beneath body text — it reads as the identity, not as decoration.
