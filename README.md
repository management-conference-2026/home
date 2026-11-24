# Air Astana Group Management Conference — Midnight

Selected design of the XVIII Management Conference website, 3 December 2026.
Includes a responsive timeline, speaker dialogs with full job titles, and white information sections.

The timeline highlights sessions while they are running on 3 December 2026 in Almaty (UTC+5),
independently of the visitor's device timezone. It refreshes every second and when the tab becomes visible.
Overlapping sessions in the supplied programme are both highlighted while they are running.
At the start, the hero countdown changes to the current session title and Almaty time,
with a direct link to its timeline row. Breaks and overlapping sessions are included.
After the final session, it shows a thank-you message. Schedule gaps show the next session.

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
Kahoot runs from 14:00 to 14:15, followed immediately by Panel #2 from 14:15 to 15:15.
Brand asset sources are recorded in `public/fonts/SOURCES.txt`.
