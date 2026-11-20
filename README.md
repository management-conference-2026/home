# Air Astana Group Management Conference — Midnight

Selected design of the XVIII Management Conference website, 3 December 2026.
Includes a responsive timeline, speaker dialogs with full job titles, and white information sections.

The timeline highlights sessions while they are running on 3 December 2026 in Almaty (UTC+5),
independently of the visitor's device timezone. It refreshes every second and when the tab becomes visible.
Overlapping sessions in the supplied programme are both highlighted while they are running.

Add the installation video URL to `kcAppVideoUrl` in `data/siteConfig.ts` when the file is supplied.
Until then, the installation instructions disclosure explains that the video is forthcoming.

## Run locally

```sh
npm ci
npm run dev
```

## GitHub Pages

The included workflow builds a Next.js static export and deploys it with GitHub Actions.
The repository name supplies the Pages base path automatically.

Update confirmed links and forthcoming copy in `data/siteConfig.ts`.
The 14:00 quiz and 14:15 panel overlap is retained from the supplied agenda.
Brand asset sources are recorded in `public/fonts/SOURCES.txt`.
