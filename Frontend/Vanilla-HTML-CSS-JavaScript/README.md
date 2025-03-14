# Vanilla HTML/CSS/JavaScript Project

Welcome to this vanilla web development project! This README provides all the information you need to understand, set up, and work with this project using just HTML, CSS, and JavaScript - no frameworks or libraries required.

## Project Structure

This project follows a standard structure for web development:

```
project-root/
├── index.html          # Main entry point of the website
├── styles.css          # Main stylesheet for the project
├── script.js           # Main JavaScript file
├── about.html          # About page
├── assets/             # Directory for static assets
│   ├── images/         # Images used in the project
│   ├── fonts/          # Custom fonts (if any)
│   └── icons/          # Icons used in the project
└── README.md           # This file
```

## Getting Started

### Prerequisites

All you need to work on this project is:

- A text editor (VS Code, Sublime Text, Atom, etc.)
- A modern web browser (Chrome, Firefox, Edge, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

No package manager, build tools, or command-line knowledge is required!

### Setting Up the Project

1. **Clone or download** this project to your local machine
2. **Open the project folder** in your preferred text editor
3. That's it! You're ready to start working

## Development Workflow

### Using VS Code with Live Server

The easiest way to develop this project is using Visual Studio Code with the Live Server extension:

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "Live Server"
   - Click Install
3. Open your project folder in VS Code
4. Right-click on `index.html` and select "Open with Live Server"
5. Your project will open in your default browser
6. The page will automatically reload whenever you save changes to any HTML, CSS, or JavaScript file

### Alternative: Using Your Browser Directly

If you prefer not to use VS Code or Live Server:

1. Double-click the `index.html` file to open it in your browser
2. After making changes to your files, save them and refresh the browser page (F5 or Ctrl+R / Cmd+R)

## HTML Basics

The `index.html` file is the main entry point for your website. It includes:

- Document type declaration (`<!DOCTYPE html>`)
- Meta information in the `<head>` section
- Main content in the `<body>` section
- Links to CSS and JavaScript files

Key HTML elements include:

- `<header>` - For the site header/navigation
- `<main>` - For the main content
- `<section>` - For distinct sections of content
- `<footer>` - For the site footer

## CSS Basics

The `styles.css` file contains all the styling for your website:

- You can target elements by tag name, class, or ID
- Use comments (`/* comment */`) to organize your CSS
- Start with a CSS reset or normalize to ensure consistent rendering
- Consider organizing your CSS by components or sections

## JavaScript Basics

The `script.js` file allows you to add interactivity to your website:

- The `defer` attribute in the script tag ensures it loads after HTML parsing
- You can select HTML elements and respond to user events
- Use comments (`// comment` or `/* comment */`) to explain your code
- Consider organizing your code into functions for better maintainability

## Testing

### Browser Testing

Test your project in multiple browsers to ensure compatibility:

- Chrome
- Firefox
- Safari
- Edge

### Responsive Testing

Test your project at different screen sizes:

- Use your browser's developer tools (F12 or Ctrl+Shift+I / Cmd+Option+I)
- Select the device toggle (usually an icon showing a phone and tablet)
- Test with various device presets or customize the dimensions

### Accessibility Testing

Basic accessibility testing:

- Ensure proper heading structure
- Add alt text to images
- Make sure links have descriptive text
- Test keyboard navigation
- Use high contrast colors

## Deployment

To share your project with others, you have several options:

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your project to the repository
3. Go to Settings > Pages
4. Select the branch you want to deploy (usually `main`)
5. Save and wait for the deployment URL

### Netlify or Vercel (Free)

1. Create an account on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)
2. Connect your GitHub repository or upload your files directly
3. Follow the deployment instructions
4. Get a custom subdomain automatically

### Traditional Web Hosting

1. Sign up for a web hosting service
2. Upload your files via FTP
3. Access your website via the provided domain or IP address

## Learning Resources

### HTML

- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)

### CSS

- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)

### JavaScript

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)

## Common Issues and Solutions

### Images Not Loading

- Check file paths (they're case-sensitive)
- Ensure the file extension is correct
- Use relative paths from the HTML file's location

### CSS Not Applying

- Check for typos in selector names
- Verify file linkage in HTML
- Check browser developer tools for errors
- Be mindful of CSS specificity

### JavaScript Not Working

- Check the browser console for errors (F12)
- Verify file linkage in HTML
- Make sure your code runs after the DOM has loaded

---

Happy coding! If you have any questions or feedback about this README, please don't hesitate to reach out.
