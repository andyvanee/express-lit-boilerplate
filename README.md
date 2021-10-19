# express-lit-boilerplate

This is a JavaScript project boilerplate with the following features:

-   ESM (ES6 Modules) for frontend and backend
-   Supports both SPA and SSR
-   Frontend includes `lit`, `esbuild`, `page`
-   Backend includes `express`, `knex`, `sqlite3`

Deployment Notes:

-   Requires a `TOKEN_SECRET` environment variable for session
-   Requires a (optionally blank) database file at `./data/system.db`
