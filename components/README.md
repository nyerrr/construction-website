# Implementing Shared Header Component

To implement the shared header component across all pages, follow these steps:

1. Remove the existing navigation code from your HTML file
2. Add the following code in the `<head>` section of your HTML:
   ```html
   <link rel="stylesheet" href="../style2.css">
   <!-- Add any other page-specific stylesheets here -->
   <title>Page Title</title>
   </head>
   ```

3. Add this code right after the `<body>` tag:
   ```html
   <!-- Header component will be loaded here -->
   <div id="header"></div>

   <!-- Include the component loader -->
   <script src="../components/load-components.js"></script>
   ```

4. Update any page-specific paths as needed (ensure they're relative to the page's location)

## Important Notes:
- All image paths in shared components use `../assets/` prefix
- All page links are relative to the current page's location
- The header will be loaded automatically when the page loads
- Make sure Bootstrap and other required CSS/JS files are included

## Troubleshooting:
If the header doesn't load:
1. Check browser console for errors
2. Verify file paths are correct
3. Ensure all required scripts are loaded
4. Check network tab for failed requests