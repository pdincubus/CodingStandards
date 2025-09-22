# Performance standard

Targets at p75
- LCP ≤ 2500 ms.
- INP ≤ 200 ms.
- CLS ≤ 0.1.

Page weight budgets
- See `/budgets/budgets.json` per page type.

Images
- Use responsive images with proper `sizes`.
- Compress images. Prefer AVIF or WebP.
- Avoid lazy loading above the fold.

Fonts
- Limit families and weights.
- Subset and preload critical subsets.

Scripts
- Audit third parties. Hard caps in policy.
- Defer non-critical code.
- Avoid long tasks.

Measurement
- Use RUM for Web Vitals.
- Track bundle weights in CI.
