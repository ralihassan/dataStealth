# Secure Form Integration Project

## Overview

This project is a technical assessment for the Integration Engineer position at DataStealth. The primary objective is to create a secure and accessible web form with client-side validation, styled using CSS, and integrated within a parent page using an iframe. The project demonstrates proficiency in JavaScript, HTML, CSS, and basic Linux file management.

## Project Structure

- **HTML Files**
  - `form.html`: Contains the HTML structure for the user form.
  - `index.html`: The parent HTML file that integrates the form using an iframe.

- **CSS Files**
  - `form-style.css`: Styles the form elements for better usability and appearance.
  - `parent-style.css`: Styles the modal used for displaying messages in the parent page.

- **JavaScript Files**
  - `form-script.js`: Handles form validation and submission logic.
  - `parent-script.js`: Manages message communication between the form and the parent page.

## Features

### Form Validation

The form includes client-side validation to ensure data integrity before submission. The validation checks include:

- **Email Validation**: Ensures the email format is correct.
- **Password Validation**: Checks for a minimum length of 8 characters, including at least one number and one special character.
- **Name Validation**: Ensures the name field is not empty.

### Form Styling

The form is styled to be responsive and user-friendly. Key styling features include:

- Centered form with a maximum width for better readability.
- Clear and bold labels for each input field.
- Consistent padding and margin for form elements.
- Hover effects for the submit button to enhance interactivity.

### Modal Integration

The parent page includes a modal to display success or error messages after form submission. The modal is styled to appear prominently and can be closed by clicking outside or on the close button.

### Accessibility

The form is designed with accessibility in mind, using semantic HTML and ARIA attributes to ensure it is usable by screen readers and other assistive technologies.

### Security and Sandboxing with iframes

The form is integrated into the parent page using an iframe. This approach enhances security by isolating the form's content from the parent page, reducing the risk of cross-site scripting (XSS) attacks. The iframe can be configured with the `sandbox` attribute to further restrict the actions that can be performed within it, such as executing scripts or accessing the parent page's DOM. This ensures that even if the form's content is compromised, the impact on the parent page is minimized.

## Debugging with Chrome DevTools

To effectively debug form submission issues, you can use Chrome DevTools. Here's a step-by-step guide:

1. **Open Chrome DevTools**: Right-click on the page and select "Inspect" or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).

2. **Network Tab**:
   - Navigate to the "Network" tab to monitor network requests.
   - Filter requests to view specific types, such as XHR or Fetch.
   - Inspect request headers, payload, and response to identify issues.
   - Check status codes (e.g., 200 for success, 400 for client error, 500 for server error) to diagnose problems.

3. **Console Tab**:
   - Use the "Console" tab to view JavaScript errors and logs.
   - You can execute JavaScript code directly to test functions or variables.

4. **Sources Tab**:
   - Set breakpoints in your JavaScript code to pause execution and inspect variables.
   - Step through code line-by-line to understand the flow and identify errors.

5. **Application Tab**:
   - Inspect cookies, local storage, and session storage to ensure data is being stored and retrieved correctly.

By using these tools, you can efficiently debug and resolve issues related to form submissions and other client-side functionalities.

## Linux File Management

The command to ensure only the owner can read and write to a file is: chmod 600 filename

### Basic Linux Commands

Here are a few basic Linux commands that are essential for managing files and directories:

- `cd`: Change the current directory.
- `ls`: List the contents of a directory.
- `pwd`: Print the current working directory.
- `chmod`: Change file permissions.
- `touch`: Create an empty file or update the timestamp of an existing file.
- `cp`: Copy files or directories.
- `mv`: Move or rename files or directories.
- `rm`: Remove files or directories.
- `ping`: Check the network connectivity to a host.
- `ifconfig`: Display or configure network interfaces.
- `netstat`: Display network connections, routing tables, and interface statistics.
- `curl`: Transfer data from or to a server using various protocols.

## How to Run

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to view the form within the parent page.
3. Fill out the form and submit to see the validation and modal message in action.
