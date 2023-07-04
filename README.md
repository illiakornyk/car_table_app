# My Next.js Project

This project is built using the React.js framework and Next.js. Next.js is a powerful framework that provides features such as server-side rendering, static site generation, and API routes. These features make it easy to build fast and scalable web applications.

The project also uses TypeScript to improve code readability and maintainability. TypeScript is a popular superset of JavaScript that adds static typing and other features, making it easier to write robust and scalable code.

For styling, the project uses Tailwind CSS, a utility-first CSS framework that makes it easy to quickly create custom designs.

The project is based on a template that provides a good setup and folder structure. You can find the template here: https://github.com/theodorusclarence/ts-nextjs-tailwind-starter

## Code Structure

The main code for the project is located in the `src` folder.

### API

The `src/pages/api` folder contains server-side functions for getting data from the cars API. These functions are powered by Next.js's API routes feature, which allows you to easily create server-side APIs as part of your Next.js app.

The `src/api` folder contains functions for making API calls from the frontend of the app. These functions call the server-side APIs provided by the `src/pages/api` folder.

### UI

The `src/pages` folder contains the pages of the app. The main page is located in the `index.tsx` file. There are also additional pages for handling 404 errors and other Next.js-specific files.

The UI of the app is composed of reusable components located in the `src/components` folder. These components can be used to build complex layouts and user interfaces.

### Hooks

The `src/hooks` folder contains custom hooks that provide reusable logic for the app.

### Others

The project also includes an `.env` file in the root folder for storing API endpoints and other configuration values.
