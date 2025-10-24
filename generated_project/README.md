# TodoApp

## Overview
A simple web‑based Todo application that lets users add, delete, and mark tasks as completed. The app stores the todo list in the browser's **localStorage**, so data persists across page reloads.

## Features
- Add new todo items.
- Delete existing items.
- Toggle completion status with a checkbox.
- Persistent storage using `localStorage`.
- Responsive layout that works on desktop and mobile devices.

## Tech Stack
- **HTML** – Structure of the application.
- **CSS** – Styling with CSS custom properties for easy theming and responsive design.
- **JavaScript** – Core functionality, DOM manipulation, and data persistence.

## Setup
1. Clone or download the repository.
2. Open `index.html` in any modern web browser (no server required).

## Usage
1. **Add a task**: Type a description into the input field and click **Add** (or press Enter).
2. **Complete a task**: Click the checkbox next to a task; completed items are shown with a strikethrough.
3. **Delete a task**: Click the ✖️ button on the right side of a task.
4. All changes are saved automatically to `localStorage`, so the list remains after closing or refreshing the browser.

## Development
- **File structure**:
  - `index.html` – Markup and entry point.
  - `styles.css` – Styling, variables, and responsive rules.
  - `app.js` – JavaScript logic for handling UI interactions and storage.
- To modify the UI, edit `index.html` and `styles.css`.
- To change behavior or add new features, update `app.js`.
- The project uses plain JavaScript without any build tools, making it easy to extend.
