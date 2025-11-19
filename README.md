# The Court Room

A courtroom simulation web application that combines a React + Vite front end with a small Python backend. The project is designed as a learning/demo application that models courtroom interactions — evidence management, witness interrogation, juror credibility, and simple agent workflows.

---

**Quick Overview**: A playable courtroom UI built with modern web tooling (Vite + React) and a minimal Python server used for local APIs or mocked backend interactions.

**Repository Layout**:

- **`client/`**: Front-end application (React, Vite). Contains the full SPA source under `client/src` and dev tooling.
- **`server/`**: Minimal Python backend with `requirements.txt` and `app/main.py`.

---

**Features**

- Interactive courtroom UI with HUD, quick actions, witness dialogue and response cards.
- User flows for Agents (login, registration, profile) and viewing cases, messages, and courtroom state.
- Component-based UI (reusable `UI` components and page layouts).

**Tech Stack**

- Frontend: React, Vite, modern JavaScript (JSX).
- Backend: Python (simple app in `server/app/main.py`).
- Tooling: npm, Vite dev server, ESLint.

---

**Local Development — Prerequisites**

- Node.js (v16+ recommended) and npm installed: <https://nodejs.org/>
- Python 3.8+ and `pip` for the backend.
- Git (optional) for cloning and version control.

**Setup — Client (frontend)**

1. Open a terminal and change to the client directory:

```powershell
cd "client"
```

2. Install dependencies:

```powershell
npm install
```

3. Run the development server:

```powershell
npm run dev
```

4. Build for production:

```powershell
npm run build
npm run preview
```

Notes:

- Check `client/package.json` for available scripts (e.g., `dev`, `build`, `preview`).
- Environment variables for the client live in `client/.env`. Typical variables might include `VITE_API_BASE_URL` to point to the backend.

**Setup — Server (backend)**

1. Create and activate a Python virtual environment (recommended):

```powershell
cd "server"
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install requirements:

```powershell
pip install -r requirements.txt
```

3. Run the server (simple local run):

```powershell
python app/main.py
```

Notes:

- The backend in this repo is intentionally small. Inspect `server/app/main.py` for how routes or mocked APIs are exposed.
- If you prefer to run the server as a module, adjust the command accordingly (for example, `python -m app.main` if applicable).

---

**Environment Variables**

- `client/.env`: Frontend-specific vars (prefixed with `VITE_` for Vite to expose them to the client). Example:

```text
VITE_API_BASE_URL=http://localhost:8000
```

- `server/`: If the backend requires runtime configuration, create a `.env` or update `server/app/main.py` to read environment vars.

**Running Full Stack Locally**

1. Start the backend first (so API endpoints are available):

```powershell
cd server; .\.venv\Scripts\Activate.ps1; python app/main.py
```

2. Start the frontend in another terminal:

```powershell
cd client; npm install; npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`) to view the app.

---

**Project Structure (key files & directories)**

- `client/src/Components/`: Reusable UI components and game-specific components (CourtHUD, JuryCredibility, QuickActions, etc.).
- `client/src/Pages/`: Top-level pages (Courtroom, Dashboard, Home, Agent flows).
- `client/src/api/`: Small client-side API wrappers (`client.js`, `courtroom.js`).
- `client/src/Context/`: React context state (gameState, uiState, userState).
- `server/app/main.py`: Entry point for the Python backend.

---

**Coding Standards & Conventions**

- Frontend uses JSX, keep components small and focused.
- Follow ESLint rules configured in `client/eslint.config.js`.

**Testing**

- No formal test suite is included by default. You can add frontend tests with Jest/Testing Library or end-to-end tests with Playwright/Cypress.

**Deployment Notes**

- Frontend: Build static assets with `npm run build` then serve the `dist/` folder using any static host (Netlify, Vercel, GitHub Pages, or a simple static file server).
- Backend: Containerize or deploy to any Python-capable host. Ensure environment variables and allowed origins are configured properly.

**Troubleshooting**

- If the front end cannot reach the backend, verify `VITE_API_BASE_URL` in `client/.env` and CORS configuration in the backend.
- On Windows, if PowerShell blocks script execution for virtual environment activation, run `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` in an elevated PowerShell session.

**Contributing**

- Fork the repo, create a feature branch, and open a pull request with a clear description.
- Keep UI changes component-scoped and add documentation for new public modules.

**License**

- This project is released under the MIT License. Replace or update licensing info as needed.

**Contact / Author**

- Maintainer: Avinash Chaurasiya (repo owner: `webdevavi96`).
- For questions or collaboration, open an issue or PR on the repository.
