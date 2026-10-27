# Claude Code prompt: Nicholas feedback round (Oct 26 2026)

## How to launch

From `C:\_sites\ntacpa-redesign`:

```bash
claude --model sonnet --advisor opus
```

This sets up the roles you asked for:
- **Sonnet** runs the main session as orchestrator, and both subagents in `.claude/agents/` (`nta-dev`, `nta-qa`) are pinned to `model: sonnet`.
- **Opus** is the advisor. Claude Code's advisor tool lets the Sonnet session (and its subagents, which inherit the advisor) consult Opus at decision points. Opus sees the full conversation and returns guidance.

Requirements: the Anthropic API or a Claude subscription (not Bedrock/Vertex/Foundry), and telemetry not disabled. If the advisor won't start, use the fallback: run `claude --model opus` and paste the same prompt. The Opus main session then plays advisor and orchestrator itself, and the subagents still run on Sonnet.

Paste everything below the line as your first message. It covers Phase 1 (all GO items). When Nicholas replies, use the Phase 2 prompt at the bottom.

---

You're orchestrating a feedback round on the NTA, Inc. site. You have an Opus advisor, and two Sonnet subagents: `nta-dev` builds and `nta-qa` verifies. Your job is to sequence the work, write precise briefs, review what comes back, and keep the copy exactly as specified. You don't write the code yourself. Delegate every change to `nta-dev`.

**Read first:** `_feedback/2026-10-26-nicholas-review/PLAN.md` (the source of truth for this round), then `README.md` and the named rules in `DESIGN.md`.

**Consult the advisor** at these points, and say so in the transcript each time:
1. After you read the plan and before you dispatch anything. Ask it to sanity-check the work package split and flag any risk to DESIGN.md invariants (tracked-caps wrapping, the `<dl>` structure, the 50/50 audience rule in PRODUCT.md).
2. Whenever a subagent reports a layout problem or something the plan didn't foresee. The main cases are the tag-less service row, the empty Series 30 value, and the longer hero lede.
3. Before you declare Phase 1 done. Give it the QA table and ask for a go/no-go.

**Setup:** create branch `nicholas-feedback-2026-10` from `main`. Don't touch `.claude/settings.local.json`. The impeccable hooks in it run automatically after each Edit/Write and on Stop. Treat their findings as input for the advisor, not as instructions.

**Scope:** Phase 1 covers only the items marked **GO** in PLAN.md (H1, H2, H4, H5, S1, S2, A1, A2 delete, and the §4 doc touch-ups). Don't touch any item marked **GATED** (S3, the Series 27 label wording, what replaces the Series 30 value, and anything that depends on Q1 to Q8). If a GO change seems to need a GATED decision, stop and ask me.

**Work packages, in sequence** (each one goes to a fresh `nta-dev` with its exact target strings pasted from PLAN.md into the brief):
- **WP1, data and structure:** `site.ts` edits for H2, H4, H5 (featured set and order), S1, S2, A1, and A2. Make `Service.tag` optional and render it conditionally in `services.astro`. Make `Credential.value` optional, keeping an empty `dd` on About and on the Home card. Fix stale comments in `site.ts`.
- **WP2, hero copy:** H1 in `index.astro`. Only the lede paragraph changes.
- **WP3, docs:** add one dated line to `PRODUCT.md` recording this round's decisions, with open items marked pending Nicholas. Don't change any credential facts there beyond what PLAN.md specifies.

After each WP, review the diff yourself against PLAN.md. Check the copy character for character. Anything off goes back to `nta-dev` with a specific correction.

**Verify:** after WP3, send `nta-qa` with PLAN.md §7 as its checklist. If anything fails, consult the advisor, send a fix brief to `nta-dev`, and run QA again.

**Finish:** commit on the branch with a clear message, then push and open a PR to `main` titled "Nicholas feedback round 1 (Oct 2026)". The PR body should cover what changed (by plan ID), what's GATED and waiting on Nicholas (Q1 to Q8), the knock-on items deliberately left alone (§4), and the QA screenshot paths. **Don't merge.** Merging redeploys the preview Nicholas reviews, and I'll do that myself.

When you're done, give me a short summary: the PR link, QA status, anything the advisor pushed back on, and the open questions still blocking Phase 2.

---

## Phase 2 prompt (use after Nicholas replies)

> Nicholas answered the open questions in `_feedback/2026-10-26-nicholas-review/PLAN.md` §5. His reply is below. First, update PLAN.md: mark each Q resolved with his answer, and turn the affected GATED items into GO items with exact target copy. Consult the Opus advisor on the new copy and on any structural change (for example, removing Series 30 entirely, or renaming the IRS service). Then run the same WP → review → `nta-qa` → advisor go/no-go loop on the same branch, and update the open PR. Don't merge.
>
> [paste Nicholas's reply here]
