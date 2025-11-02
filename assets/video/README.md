How to add a background video for the home screen
=================================================

Place your MP4 (and optionally WebM) background files here and name them `bg.mp4` (and `bg.webm`).

Recommended files:

- `bg.mp4` — H.264 baseline/LC profile, optimized for web, short loop (10–30s).
- `bg.webm` — optional VP9/VP8 for browsers that prefer WebM.

Usage (already wired in `home.html`):

The page expects the video at `./assets/video/bg.mp4`. If the video cannot load, the page uses `./assets/img/bg/bg1.jpg` as a poster fallback.

Optimization tips:

- Keep video short and lightweight (try < 3–5 MB). Use bitrate ~1–2 Mbps for HD.
- Provide a poster image for slow connections or mobile devices.
- Consider creating a reduced-size mobile-only version and loading it conditionally with JS/CSS.

Licensing:

Only add videos you have the rights to use.

Troubleshooting:

- If the video doesn't autoplay on mobile, ensure `muted` and `playsinline` attributes are present (they are in `home.html`).
- If you prefer to disable video on mobile to save bandwidth, add a small script to pause/remove the `<video>` when the viewport is small.
