# React + Vite

Welcome to this React + Vite project! This README provides all the necessary information to set up, develop, and customize your project.

## Project Structure

This project follows a standard structure for a React + Vite application:

```
project-root/
├── public/               # Static assets (favicons, images, etc.)
├── src/                  # Main source code directory
│   ├── assets/           # Assets not directly accessible via public URL
│   ├── components/       # Reusable React components
│   ├── pages/            # Page components
│   ├── App.jsx           # Root component, used for routing
│   ├── index.css         # Global styles
│   ├── main.jsx          # Entry point
├── .gitignore            # Files to ignore in Git
├── eslint.config.js      # File for lint configuration
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
├── README.md             # This file
└── vite.config.js        # Vite configuration
```

## Getting Started

### Prerequisites

Before starting, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
-   Git (for version control)

### Setting Up the Project

To start a new project using this template, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd <project_name>
    ```
2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
4. Open the provided local URL in your browser to see the running project.

## Initializing Git

To initialize Git for version control, run:

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your_repository_url>
git push -u origin main
```

## Using TypeScript Instead of JavaScript

To use TypeScript instead of JavaScript:

1. Start a new Vite project with TypeScript:
    ```sh
    npm create vite@latest my-app --template react-ts
    ```
2. Install dependencies and start the project:
    ```sh
    cd my-app
    npm install
    npm run dev
    ```
3. Rename `.js` files to `.tsx` and `.ts` where necessary.
4. Ensure `tsconfig.json` is correctly configured for your project.

## Styling

This project is set up using `Tailwind CSS`, however there are other methods of styling you are able to use:

### Tailwind CSS

-   **Good for:** Quick designs, consistent look.
-   **How:** Adds style classes directly in your HTML.
-   **Example:** `<button className="bg-blue-500 p-2">Click</button>`

### CSS Modules

-   **Good for:** Clean, organized component styles.
-   **How:** Styles stay within their component.
-   **Example:** `import styles from './Button.module.css';` `<button className={styles.button}>Click</button>`

### Global Styles

-   **Good for:** Simple, site-wide styles.
-   **How:** Styles affect everything that matches.
-   **Example:** `button { background: blue; }` (in a main CSS file)

## Development Workflow

### Using VS Code with Extensions

For a better development experience, consider using the following extensions in Visual Studio Code:

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite)

To start development with Live Server:

1. Open VS Code.
2. Open the project folder.
3. Run the development server:
    ```sh
    npm run dev
    ```
4. Open `http://localhost:5173/` in your browser.

### Alternative: Running in a Different Browser

If you prefer not to use VS Code:

1. Run the project using `npm run dev`.
2. Open the provided local URL in any browser (Chrome, Firefox, Edge, etc.).

## Expanding the ESLint Configuration

If you are developing a production application, we recommend using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Testing the Project

### Browser Testing

Test your project in multiple browsers to ensure compatibility:

-   Chrome
-   Firefox
-   Safari
-   Edge

### Responsive Testing

Test your project at different screen sizes:

-   Use your browser's developer tools (F12 or Ctrl+Shift+I / Cmd+Option+I).
-   Select the device toggle (phone and tablet icon).
-   Test with various device presets or customize the dimensions.

### Accessibility Testing

Basic accessibility testing:

-   Ensure proper heading structure.
-   Add alt text to images.
-   Make sure links have descriptive text.
-   Test keyboard navigation.
-   Use high contrast colors.

## Deployment

To share your project with others, you have several options:

### GitHub Pages (Free)

1. Create a GitHub repository.
2. Push your project to the repository.
3. Install `gh-pages`:
    ```sh
    npm install gh-pages --save-dev
    ```
4. Add the following script to `package.json`:
    ```json
    "scripts": {
      "deploy": "gh-pages -d dist"
    }
    ```
5. Deploy the project:
    ```sh
    npm run build
    npm run deploy
    ```

### Netlify or Vercel (Free)

1. Create an account on Netlify or Vercel.
2. Connect your GitHub repository or upload your files directly.
3. Follow the deployment instructions.
4. Get a custom subdomain automatically.

### Traditional Web Hosting

1. Sign up for a web hosting service.
2. Upload your files via FTP.
3. Access your website via the provided domain or IP address.

## Learning Resources

### React

-   [React Docs](https://react.dev/learn)

### Vite

-   [Vite Documentation](https://vitejs.dev/)

### TypeScript

-   [TypeScript Docs](https://www.typescriptlang.org/docs/)

### Tailwind

-   [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

## Common Issues and Solutions

### Project Not Running

-   Ensure all dependencies are installed (`npm install`).
-   Check if Vite is installed (`npm list vite`).
-   Restart your terminal and development server (`npm run dev`).

### Styles Not Applying

-   Verify Tailwind is properly configured in `vite.config.js`
-   Verify the CSS file is imported in `main.jsx` or `App.jsx`.
-   Check browser developer tools for errors.

### JavaScript Errors

-   Open the browser console (`F12` > Console tab) for error messages.
-   Ensure all imports and paths are correct.
-   Check for missing or extra brackets and semicolons.

---

Happy coding! If you have any questions or feedback about this README, please don't hesitate to reach out.
