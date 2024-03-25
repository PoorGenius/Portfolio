# React + Vite Template

This template offers a streamlined setup for utilizing React within the Vite ecosystem, enhanced with Hot Module Replacement (HMR) and a set of ESLint configurations for code quality assurance.

## Official Plugins
Two official plugins are supported to enable Fast Refresh, a feature that updates modules in the browser without refreshing the whole page:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md):** Utilizes [Babel](https://babeljs.io/) to offer Fast Refresh capabilities.
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc):** Leverages [SWC](https://swc.rs/) as the JavaScript compiler to achieve Fast Refresh.

## Proposed Changes and Fixes

As part of ongoing enhancements and fixes, the following changes are slated for implementation:

### Card Design Overhaul
- Redesign the cards for mobile viewing to enhance visual appeal. This includes modifying the text, height, and width of all elements within the cards.

### Selected Works Display
- On mobile devices, resize the cards under "Selected Works" (e.g., Instagram clone, chat app) to prevent them from being excessively wide.

### Form Behavior
- Modify the form's animation to only fade in once upon initial viewing, preventing the current continuous fade in and out effect when navigating away and back to the form.

### Social Media Links
- Ensure the LinkedIn and Instagram icons in the footer are properly linked to the corresponding profiles.
