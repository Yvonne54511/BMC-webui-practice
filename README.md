# BMC WebUI — Backbone.js Dashboard

A client-side web dashboard for an AI Server Baseboard Management Controller (BMC), built with Backbone.js.

## Features

- **Login page** — credential form with Backbone model binding
- **Power dashboard** — live power consumption chart (Chart.js) and PSU telemetry table
- **Client-side routing** — hash-based navigation via Backbone.Router
- **Sidebar navigation** — highlights the active route

## Tech Stack

| Library | Version | Role |
|---|---|---|
| Backbone.js | 1.6.0 | MVC framework, routing |
| Underscore.js | 1.13.6 | Templating, utilities |
| jQuery | 3.7.1 | DOM manipulation |
| Chart.js | latest | Power consumption chart |

## Project Structure

```
BMC-webui-backbone/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js              # App entry point, router init
    ├── router.js            # Route definitions
    ├── models/
    │   ├── LoginModel.js    # Login credentials model
    │   └── PowerModel.js    # Power telemetry model (PSU data)
    └── views/
        ├── LoginView.js     # Login form view
        └── PowerView.js     # Power chart + telemetry table view
```

## Routes

| Hash | View |
|---|---|
| `#login` | Login page |
| `#power` | Power consumption dashboard |
| anything else | Default welcome page |

## Getting Started

No build step required. Serve the project root with any static file server:

```bash
# Python
python3 -m http.server 3000

# Node (npx)
npx http-server -a 0.0.0.0 -p 3000

# Redfish mock server
npx http-server -a 0.0.0.0 -p 8000
```

Then open `http://127.0.0.1:3000` in your browser.
