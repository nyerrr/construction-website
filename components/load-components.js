// Function to load HTML components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Error loading component: ${response.statusText}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load all components when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load the header
    loadComponent('header', '../components/header.html');
});