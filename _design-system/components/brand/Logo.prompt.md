Use this component when a screen needs the firm's identity: site header, footer, favicon, avatar, letterhead, or an email signature.

```jsx
<Logo variant="primary" size={106} />
<Logo variant="reversed" tone="reversed" size={96} />   {/* on navy */}
<Logo variant="mark" size={32} />                        {/* favicon */}
<Logo variant="mark" size={96} circular />               {/* avatar */}
<Logo variant="stacked" size={72} showName={false} />    {/* mobile header */}
```

`size` is the mark's edge length; every other dimension derives from it, so one
number scales the whole lockup.

The degradation rules are enforced inside the component, not left to the caller:
corner ticks drop below 32px, the mark becomes a single "N" at 16px and under,
`circular` swaps the ticks for a gold underscore, and `variant="primary"` falls
back to `stacked` below 56px (the full lockup's 120px minimum width).

Tones: `navy` (default, on light), `reversed` (on navy), and `mono-navy` /
`mono-black` / `mono-white` for stamps, engraving, fax, and single-plate print.

Set `showName={false}` to drop "NICHOLAS T. AVELLO, CPA" where vertical space is
tight; `showDescriptor={false}` leaves the wordmark alone.
