# Calculator App Documentation

## Project Overview

This project is a simple web‑based calculator application. It provides a clean, responsive user interface that allows users to perform basic arithmetic operations directly in the browser without any server‑side components.

## Tech Stack

- **HTML** – Structure of the application and layout of the calculator UI.
- **CSS** – Styling for visual appearance, responsive design, and button states.
- **JavaScript** – Core logic handling button clicks, keyboard input, calculations, and error handling.

## Features

- **User Interface**: A grid of buttons for digits (0‑9), decimal point, basic operators (`+`, `-`, `*`, `/`), clear (`C`), backspace (`←`), and equals (`=`).
- **Operations**: Supports addition, subtraction, multiplication, division, and chaining of multiple operations.
- **Responsive Design**: Layout adapts to different screen sizes, making it usable on desktops, tablets, and mobile devices.
- **Keyboard Support**: Users can type numbers and operators on the keyboard; `Enter` triggers calculation, `Esc` clears, and `Backspace` deletes the last entry.
- **Error Handling**: Detects division by zero and malformed expressions, displaying a clear error message in the display area.

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/calculator-app.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd calculator-app
   ```
3. **Open the application**
   - Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
   - No additional build steps or server configuration are required.

## Usage Guide

- **Button Layout**
  - The top row contains `C` (clear) and `←` (backspace).
  - Digits are arranged in a 3×3 grid with `0` centered at the bottom.
  - Operators (`+`, `-`, `*`, `/`) are placed on the right side of the grid.
  - The `=` button spans two rows at the bottom right to execute the calculation.
- **Keyboard Shortcuts**
  - Numbers `0`‑`9` and the decimal point `.` input the corresponding characters.
  - `+`, `-`, `*`, `/` input the respective operators.
  - `Enter` or `=` performs the calculation.
  - `Esc` clears the display (same as the `C` button).
  - `Backspace` removes the last character (same as the `←` button).
- **Error Messages**
  - If a division by zero is attempted, the display shows `Error: Division by zero`.
  - For any other invalid expression, the display shows `Error`.

## Development Notes

- **Main Files**
  - `index.html` – Contains the markup for the calculator layout.
  - `styles.css` – Provides styling, including responsive grid definitions and button aesthetics.
  - `script.js` – Implements the calculator logic: handling clicks, keyboard events, parsing expressions, and updating the display.
- **Code Organization**
  - The HTML file defines a container `<div id="calculator">` with child elements for the display and buttons.
  - CSS uses Flexbox/Grid to ensure the calculator scales nicely across devices.
  - JavaScript attaches event listeners to each button and the document for keyboard input, processes the input string, and safely evaluates arithmetic expressions using a custom parser to avoid `eval`.

---

Feel free to explore the source code, modify the styling, or extend the functionality (e.g., adding scientific operations). Contributions are welcome!
