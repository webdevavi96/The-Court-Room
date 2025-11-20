# The Court Room — Client

This folder contains the frontend single-page application for The Court Room project. It is built with React and Vite and implements the interactive courtroom UI, agent flows, and game-like components (HUD, witness dialogue, juror credibility, etc.).

## Quickstart

1. Open a terminal and change to the `client` directory:

```bash
cd "client"
```

1. Install dependencies:

```bash
npm install
```

1. Start the dev server:

```bash
npm run dev
```

1. Build for production:

```bash
npm run build
npm run preview
```

## Available NPM scripts

- `dev` — Start Vite dev server.
- `build` — Build the production bundle.
- `preview` — Preview the production build locally.
- `lint` — Run ESLint (if configured in this project).

Check `package.json` for the exact scripts defined in this repository.

## Environment variables

Place frontend environment variables in `client/.env`. Vite exposes variables to the browser only if they are prefixed with `VITE_`.

Example:

```text
VITE_API_BASE_URL=http://localhost:8000
```

## Project structure (important folders)

- `src/` — Application source code.
  - `src/Components/` — Reusable UI and game components.
    - `Game/` — Court-specific game components (e.g., `CourtHUD.jsx`, `JuryCredibility.jsx`, `QuickActions.jsx`, `ResponseCard.jsx`, `WitnessDialogue.jsx`).
    - `Layout/` — Layout components (`Topbar`, `Sidebar`, `Footer`, `Layout`).
    - `UI/` — Generic UI elements (`Button`, `Card`, `Badge`, `Loader`, `Progressbar`, `Tabs`, `AddEvidence`).
  - `src/Pages/` — Route pages (e.g., `Courtroom.jsx`, `Dashboard.jsx`, `Home.jsx`, `AgentLogin.jsx`).
  - `src/Context/` — React context providers for app state (`gameState.js`, `uiState.js`, `userState.js`).
  - `src/api/` — Client-side API wrappers (`client.js`, `courtroom.js`).

## Components & State

- The app follows a component-driven approach: UI atoms (in `UI/`) are composed into larger feature components (in `Game/` and `Layout/`).

- Global state is handled with React Contexts located in `src/Context/`. There are separate contexts for user state, UI state, and game state to keep responsibilities separated and testable.

## API integration

- Client API calls are wrapped in `src/api/client.js` and `src/api/courtroom.js`. Configure `VITE_API_BASE_URL` to point to your backend during development.

## Coding and linting

- ESLint config is provided in `eslint.config.js`. Follow its rules when editing code and run the linter before committing changes.

## Testing

- There are no tests included by default. Recommended additions:

- Unit tests: React Testing Library + Jest.
- Integration / e2e: Playwright or Cypress.

## Common tasks

- Add a new component: create the file under `src/Components/`, export it, and import it into the page or parent component where it is used.
- Add a new page: add a file under `src/Pages/` and add a route in `src/routes/Routes.jsx` or the project routing file.

## Troubleshooting

- Dev server failing to start: ensure Node.js and npm are installed and that no other process is occupying the configured port.
- Frontend cannot reach backend: verify `VITE_API_BASE_URL` points to the running backend and confirm CORS settings server-side.

## Contributing

- Fork the repo, branch from `main`, implement your change, and open a pull request with a clear description.
- Keep changes component-scoped and add documentation for new public modules.

## License

This project uses the same license as the repository root. Update or replace license details here if needed.

## Contact

- Developer: Avinash Chaurasiya (`webdevavi96`). Open issues or PRs for questions and contributions.

