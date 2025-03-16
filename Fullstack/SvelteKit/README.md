# SvelteKit

Welcome to this SvelteKit project! This README provides all the necessary information to set up, develop, and customize your project.

## Getting Started

### Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) for the database
- [Git](https://git-scm.com/) for version control

### Setting Up the Project

To start a new project using this template, follow these steps:

1. Clone the repository:

   ```sh
   git clone <repository_url>
   cd <project_name>
   ```

2. Initialize a Git repository (if not done already):

   ```sh
   git init
   ```

3. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file based on `.env.example` and configure your database and JWT secret:

5. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
6. Open the provided local URL in your browser to see the running project.

## Configuring the Project

### Changing the Database

To switch to your preferred database, you'll need to adjust the database connection settings in `src/lib/db.ts`.

1. Install your database's required package. For example, if using MySQL:
   ```sh
   npm install mysql2
   ```
2. Modify the `db.ts` file to connect to your preferred database.

### Changing to JavaScript

If you prefer to use JavaScript instead of TypeScript, follow these steps:

1. Rename .ts files to .js in src/lib and src/routes/api.
2. Remove or rename app.d.ts (TypeScript definitions).
3. Install Babel or another transpiler to handle JavaScript, and update package.json scripts accordingly.

### Changing Styling

By default, this project uses Tailwind CSS for styling. If you want to change the styling method, here are a few options:

1. **Tailwind CSS (default)**

   - _Best for:_ Quick, responsive designs with utility-first styling.
   - _How to use:_ Ensure that Tailwind is properly set up in your `src/app.css` by including the `@tailwind` directives.

2. **Plain CSS**

   - _Best for:_ Simpler designs where you have direct control over the styles.
   - _How to use:_
     - Remove the `@tailwind` directives from `src/app.css`.
     - Write your CSS in `src/app.css` or any other CSS file.
     - Update your components to use standard CSS classes.

3. **CSS Modules**

   - _Best for:_ Scoped styles for individual components.
   - _How to use:_

     - Install and configure Svelte’s CSS Modules.
     - Use local styles within your `.svelte` components:

       ```html
       <style module>
       	.button {
       		background-color: blue;
       		padding: 10px;
       	}
       </style>
       ```

## Development Workflow

### Using VS Code with Extensions

For a better development experience, consider using the following extensions in Visual Studio Code:

- ESLint
- Prettier
- Svelte for VSCode

### Running the Development Server

To start the development server, run:

```sh
npm run dev
```

or

```sh
yarn dev
```

## Endpoint Compatibility

Please note that the API endpoints provided in this project are purely examples and may not be fully compatible with each other or production-ready. They are designed to showcase basic functionality and may require customization or adjustments to meet specific requirements.

### Example: `/api/user` Endpoint

The `/api/user` endpoint includes a method for creating a new user. However, this example does **not** include password handling, and the structure may not be suitable for a real-world authentication flow.

#### Recommended Action:

- **Remove the `/api/user` endpoint** if you're implementing your own authentication flow.
- **Create a `signup` endpoint** to handle user creation, which should include password validation and hashing (e.g., using bcrypt).
- If you're not implementing login functionality, **remove any login-related code** from this project and adjust the routes accordingly.

Ensure that any user-related endpoints adhere to security best practices, such as password hashing and secure authentication mechanisms.

## Learning Resources

- **SvelteKit**
  - [SvelteKit Docs](https://kit.svelte.dev/docs)
- **PostgreSQL**

  - [PostgreSQL Docs](https://www.postgresql.org/docs/)

- **JWT Authentication**
  - [JWT.io Introduction](https://jwt.io/introduction/)

## Expanding the JWT Authentication

This template includes JWT-based authentication to secure routes:

`src/lib/auth.ts` handles the JWT creation and validation.
`src/lib/middleware.ts` provides the function to apply the authentication middleware to protect specific routes.

Modify `auth.ts` to adjust the JWT secret or change the algorithm (default is HS256).

### Using Your Own JWT Secret

Update the JWT_SECRET in your .env file:

`JWT_SECRET=your_jwt_secret`

### Using Authentication Middleware

To protect any route, use the auth middleware:

```typescript
import { authenticate } from '$lib/server/middleware';
```

```
const authResult = await authenticate(event);

if (authResult) {
	return authResult;
}
```

## Testing the Project

### Browser Testing

Test your project in multiple browsers to ensure compatibility:

- Chrome
- Firefox
- Safari
- Edge

### Responsive Testing

Test your project at different screen sizes:

- Use your browser's developer tools (F12 or Ctrl+Shift+I / Cmd+Option+I).
- Select the device toggle (phone and tablet icon).
- Test with various device presets or customize the dimensions.

### Accessibility Testing

Basic accessibility testing:

- Ensure proper heading structure.
- Add alt text to images.
- Make sure links have descriptive text.
- Test keyboard navigation.
- Use high contrast colors.

## Endpoint Testing

### Tools to Use

- **Postman**: GUI tool to test API requests.
- **Insomnia**: Another GUI tool for API testing.
- **cURL**: Command-line tool for sending requests.

## Performance Testing

### Tools to Use

- **Artillery**: A tool for load testing and benchmarking.
- **Apache JMeter**: Another tool for load and performance testing.
- **Locust**: A Python-based load testing tool.

## Deployment

To share your project with others, you have several options:

### Netlify or Vercel (Free)

1. Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
2. Connect your GitHub repository or upload your SvelteKit project files directly.
3. Follow the deployment instructions provided.
   - For **Vercel**, it will automatically detect the SvelteKit framework and configure the build settings for you.
   - For **Netlify**, you may need to specify the build command as `npm run build` or `yarn build` and set the publish directory to `build/`.
4. Get a custom subdomain automatically, or connect your own domain.

### Traditional Web Hosting

1. Sign up for a web hosting service that supports Node.js, like DigitalOcean or Bluehost.
2. Upload your files via FTP or use SSH to deploy the SvelteKit build.
3. Configure the server (e.g., Nginx, Apache) to serve your app.
4. Access your website via the provided domain or IP address.

### AWS (Amazon Web Services)

1. **Set up an AWS account**: Create an account at [AWS](https://aws.amazon.com/).
2. **Deploy with Elastic Beanstalk** (ideal for Node.js apps):
   - Create a new Elastic Beanstalk application.
   - Select the Node.js environment.
   - Package your app with `npm run build` or `yarn build`.
   - Deploy the app using the Elastic Beanstalk CLI or AWS Management Console.
3. **Use S3 and CloudFront** for static sites:
   - Build your app with `npm run build` or `yarn build`.
   - Upload the static assets (in the `build` folder) to an S3 bucket.
   - Set up CloudFront as a CDN to serve your site globally.
4. **Set up a custom domain** using Route 53 or your existing domain registrar.

### Google Cloud Platform (GCP)

1. **Set up a Google Cloud account**: Create an account at [Google Cloud](https://cloud.google.com/).
2. **Deploy with Google App Engine** (ideal for Node.js apps):
   - Create a new App Engine project.
   - Define the app’s runtime in an `app.yaml` file.
   - Build your project with `npm run build` or `yarn build`.
   - Deploy using the `gcloud app deploy` command.
3. **Use Firebase Hosting** for static sites:
   - Initialize Firebase with `firebase init`.
   - Build your app with `npm run build` or `yarn build`.
   - Deploy with `firebase deploy`.
4. **Set up a custom domain** with Firebase Hosting or use Google Cloud DNS.

### Microsoft Azure

1. **Create an Azure account**: Sign up at [Azure](https://azure.microsoft.com/).
2. **Deploy using Azure App Service**:
   - Create an Azure App Service instance for Node.js.
   - Push your code to Azure from GitHub or your local repository.
   - Configure the build pipeline in Azure (set `npm run build` as the build command).
3. **Use Azure Storage for static websites**:
   - Upload your static files (in the `build` directory) to an Azure Blob Storage account.
   - Enable static website hosting and access your site via the provided URL or a custom domain.

## Common Problems

### 1. **JWT Authentication Not Working**

- Ensure that the `JWT_SECRET` in your `.env` file matches the one used in your application.
- Check the JWT decoding logic in the `src/lib/auth.ts` file.
- **Invalid JWT Token**: Make sure the token is being generated correctly in the login process. Test by manually decoding the token using [JWT.io](https://jwt.io/).
- **Token Expiration**: If you're using token expiration, ensure your logic handles expired tokens properly.
- **Check Authentication Middleware**: Ensure that the authentication middleware (`src/lib/middleware.ts`) is being correctly applied to routes.

### 2. **PostgreSQL Connection Issues**

- Double-check your database URL in `.env` and verify the PostgreSQL server is running.
- Test the connection using a PostgreSQL client like pgAdmin or psql.
- **Firewall/Port Configuration**: Ensure your PostgreSQL server’s port (default 5432) is not blocked by a firewall if connecting remotely.
- **Database Permissions**: Ensure the user specified in the connection string has the correct permissions to access the database.
- **Missing Database**: If you’re using a fresh PostgreSQL setup, ensure you have created the database. You might need to create the database manually or use migrations if they are part of your setup.

### 3. **Tailwind CSS Not Working**

- **Missing Tailwind Directives**: Double-check that the `@tailwind` directives are present in `src/app.css`.
- **Purge Configuration**: If Tailwind is not picking up your classes, ensure your `tailwind.config.cjs` includes a proper `purge` configuration, especially if you're using production mode.

### 4. **Development Server Not Starting**

- Check for any errors in the console. The logs usually provide useful error messages that can point to the problem.
- Ensure all dependencies are installed by running `npm install` or `yarn install` again.
- **Port Conflicts**: If another application is using the same port, try changing the port by setting the `PORT` variable in your `.env` file.
- **Missing Node Modules**: Sometimes `node_modules` might not have installed correctly. Try deleting the `node_modules` folder and running `npm install` or `yarn install` again.

### 5. **Missing Environment Variables**

- Ensure your `.env` file is correctly configured.
- If you're missing any variables, create them based on the example provided in `.env.example`.
- **.env Not Loaded**: If the environment variables are not being loaded, ensure that your environment is set to load `.env` at runtime. For example, some hosting environments might need specific configurations to load `.env` files properly.

### 6. **Database Migrations Not Running**

- **Migrations Not Applied**: If you’ve changed your database schema or added new migrations, ensure that migrations have been applied. This can typically be done using a database migration tool like [TypeORM](https://typeorm.io/) or [Prisma](https://www.prisma.io/), if you're using one.
- **Check for Pending Migrations**: Sometimes migrations might be stuck or not applied properly. Check for any pending migrations in your database tool.
- **Database Schema Mismatch**: Ensure that the database schema matches the model structure in your application. If there's a mismatch, you may need to re-sync or recreate the schema.

### 7. **Static Assets Not Loading**

- **Check Asset Paths**: Ensure that your static assets (images, styles, etc.) are correctly referenced in your components. The path to static files should be correct relative to your app's public folder.
- **Browser Cache**: If your assets have changed, clear your browser cache or open the app in an incognito window to ensure you are loading the latest files.
- **Server Configuration**: If deploying to a server, ensure the server is configured to serve static assets properly (e.g., correct MIME types).

### 8. **CORS Issues**

- If your application makes API requests to a different domain, ensure your API server includes the proper CORS headers.
- **Allow Cross-Origin Requests**: In your API, configure CORS to allow requests from your frontend domain.

---

Happy coding! If you have any questions or feedback about this README, please don't hesitate to reach out.
