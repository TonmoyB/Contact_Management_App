# Contact Management Web App

This is a simple Contact Management Web App built with HTML, CSS, and JavaScript. It allows users to create, view, edit, and delete contact information. The app uses the browser's local storage to save contact data, so contacts are retained between sessions on the same browser.

---

## Live Demo

You can try out the app live at the following link:

[Contact Management Web App on Vercel](https://tonmoyb-js-basics.vercel.app/)

---

## Features

- **Add New Contacts**: Users can enter and save contact details, including name, phone number, email, and address.
- **View Contacts**: Contacts are displayed dynamically on the page, with options to edit or delete each contact.
- **Search Contacts**: A search feature with debounce is included, allowing users to search contacts by name or phone number.
- **Edit & Delete Contacts**: Users can update or delete contacts as needed.
- **Local Storage**: Contacts are saved in local storage, so they persist even after the browser is closed.

---

## File Structure

### HTML - `index.html`

This file contains the structure and layout of the web app, including:
- A form to add and edit contacts.
- A display section to show all saved contacts.
- A search input field to filter contacts by name or phone number.

### CSS - `styles.css`

This file styles the form, contact display area, and buttons. Key styles include:
- `.form-body` and `.form-controll` for form layout.
- `.data-controll` and `.showData` for the contact display area.
- `.editButton` and `.deleteButton` are used to style the Edit and Delete buttons.

### JavaScript - `script.js`

This file handles the core functionality of the app:
- **Adding/Updating Contacts**: Form submission is captured to either add a new contact or update an existing one.
- **Deleting Contacts**: The `dlt` function deletes a contact by filtering it from the saved contact list in local storage.
- **Editing Contacts**: The `edit` function loads contact details back into the form for editing.
- **Display Contacts**: The `showData` function displays contacts and includes a debounce feature to optimize the search functionality.

---

## How to Run the App

1. Download all the files in this repository.
2. Open the `index.html` file in any web browser.
3. Add contacts using the form on the page.
4. Use the "Enter Name / Phone..." search box to search contacts.
5. Use the Edit and Delete buttons to manage existing contacts.

---

## Functions Overview

- **showData**: Loads and displays contacts from local storage.
- **debounce**: Optimizes the search function to reduce the number of queries while typing.
- **showDataWithDebounce**: Calls `showData` with a debounce delay to improve performance.
- **Contact Form Submission**: Saves new or updated contact data to local storage.
- **dlt**: Deletes a contact by its ID.
- **edit**: Loads contact data into the form for editing.

---

## Dependencies

No external libraries are required; only basic HTML, CSS, and JavaScript are used.

---

## Future Improvements

- Add form validation for email and phone number formats.
- Include a more robust search and sorting functionality.
- Implement categories or tags to organize contacts.

---

## License

This project is open-source and available under the MIT License.

---

Enjoy using the [Contact Management Web App](https://tonmoyb-js-basics.vercel.app/)!
