# Auth Starter

A full-stack authentication starter project designed for professional developers. This template provides a solid foundation for building modern web applications with secure user authentication. It includes both a client-side (React) and a server-side (Node.js) implementation.

To install dependencies:

```bash
bun install
```

To run:

```bash
npm run dev:client
npm run dev:server
```

This project was created using `bun init` in bun v1.0.0. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Interesting Techniques

- **React Router DOM:** Utilizes [React Router DOM](https://reactrouter.com/en/main) for declarative routing in the client application, enabling navigation between different views and components.
- **Drizzle ORM:** Employs [Drizzle ORM](https://orm.drizzle.team/) for type-safe database interactions on the server, providing a more robust and maintainable data access layer.
- **Lucide React:** Uses [Lucide React](https://lucide.dev/) for consistent and scalable icons.
- **Intersection Observer API:** The project might use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for lazy loading images or triggering animations when elements enter the viewport. Check the components in the `client/src/components/` directory.
- **CSS Modules:** Leverages CSS Modules to scope CSS styles locally to components, preventing naming conflicts and improving maintainability. See the CSS files in `client/src/`.

## Technologies and Libraries

- **React:** A JavaScript library for building user interfaces. [https://react.dev/](https://react.dev/)
- **TypeScript:** A superset of JavaScript that adds static typing. [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- **Vite:** A fast build tool for modern web development. [https://vitejs.dev/](https://vitejs.dev/)
- **Radix UI:** A set of unstyled, accessible UI primitives. [https://www.radix-ui.com/](https://www.radix-ui.com/)
- **Tailwind CSS:** A utility-first CSS framework. [https://tailwindcss.com/](https://tailwindcss.com/)
- **Drizzle ORM:** A TypeScript ORM designed for type-safe database access. [https://orm.drizzle.team/](https://orm.drizzle.team/)
- **SQLite:** A self-contained, serverless, zero-configuration, transactional SQL database engine. [https://www.sqlite.org/index.html](https://www.sqlite.org/index.html)
- **Lucide React:** A library of beautiful and consistent icons. [https://lucide.dev/](https://lucide.dev/)
- **Sonner:** An opinionated toast component for React. [https://sonner.emilkowalski.com/](https://sonner.emilkowalski.com/)

## Fonts

- The project uses fonts provided by Radix UI and Tailwind CSS. Check their respective documentations for details.

## Project Structure

```
.
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── routes/
│   │   └── index.css
│   ├── components.json
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── server/
│   ├── drizzle/
│   ├── src/
│   │   ├── db/
│   │   ├── emails/
│   │   └── lib/
│   ├── drizzle.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── sqlite.db
│   └── tsconfig.json
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

- `client/`: Contains the React-based client-side application. The entry point is `client/src/main.tsx`.
- `server/`: Contains the Node.js-based server-side application. The entry point is `server/src/index.ts`.
- `client/src/components/`: Houses reusable React components, including UI elements and blocks.
- `client/src/routes/`: Defines the application's routes and page components.
- `server/src/db/`: Contains the database schema and related files for Drizzle ORM.
- `server/src/emails/`: Stores email templates for user verification and password reset.
- `server/src/lib/`: Includes server-side authentication logic and utility functions.
