# Third-party scripts policy

Goals
- Useful insights and ads without breaking speed and privacy.

Caps at page level
- Third-party transfer size under 160 KB on PDP and PLP. Under 120 KB on others.
- Max two synchronous tags in the head.
- All others load late and with consent.

Rules
- Owner and purpose in a registry. Renewal every quarter.
- Lazy load where safe. Respect consent choices.
- Remove tags with no clear outcome.

Audit
- Track size and impact in CI.
- Block PRs which exceed budgets.
