# Image rules

- Prefer AVIF. Fallback to WebP, then JPEG. PNG for graphics, SVG where scalable image makes sense or is smaller.
- Use `fetchpriority="high"` for images in the initial viewport.
- Use `loading="lazy"` for all other images.
- Compress at source.
- Avoid text in images.
- Provide width and height to reserve space.