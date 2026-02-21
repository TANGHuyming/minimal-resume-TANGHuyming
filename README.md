# Minimal Resume App

A tiny Express + Handlebars app that renders a minimal resume from view templates.

Prerequisites
- Node.js v14 or newer

Install
1. Install dependencies:

```bash
npm install
```

Run
- Start the app in development:

```bash
npm start
```

- The server uses the `PORT` environment variable (fallback: `3000`).

Open
- Visit http://localhost:3000/ in your browser.

Configuration
- To override the default port or add env values, create a `.env` file and set `PORT` (the app loads environment variables with `dotenv` if present).

Important files
- `app.js` — Express server and route(s)
- `package.json` — scripts and dependencies
- `views/home.handlebars` — main resume view
- `views/layouts/main.handlebars` — layout wrapper
- `views/partials/experience.handlebars`, `views/partials/education.handlebars`, `views/partials/project.handlebars` — partials

Troubleshooting
- If the port is already in use, set a different `PORT` in your `.env` or start with `PORT=4000 npm start`.
- If dependencies fail to install, ensure your Node.js and npm versions are up-to-date.

License
- No license specified.

