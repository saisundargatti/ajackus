# Ajackus User Management App

A simple React-based application for managing users, with features like viewing, adding, editing, and deleting users. It also includes a pagination system for better navigation and usability.

## Features

1. **User List View**  
   Displays a paginated list of users, showing their name, email, and department details.

2. **Add User**  
   Allows users to add a new user through a dedicated form. Once added, the user is instantly displayed on the list.

3. **Edit User**  
   Provides an edit feature to update user information directly from the list view.

4. **Delete User**  
   Users can delete a specific user from the list. The change is reflected immediately.

5. **Pagination**  
   Supports a paginated view, displaying five users per page. Users can navigate between pages seamlessly.

## Technologies Used
**React**: For building the user interface.

**CSS**: For styling the components.

**React Icons**: For using icons like edit (FaEdit) and delete (MdDelete).

**JavaScript**: Core programming language for functionality

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/saisundargatti/ajackus.git
cd ajakus-user-management-app
```
## Install Dependencies
```bash
npm install
```
## Run the application
```bash
npm run dev
```
The app will run on http://localhost:3000/

## How It Works

### 1. Viewing Users
- Users are fetched via an API call (`fetchUsers`).
- The list is paginated to show 5 users per page.

### 2. Adding Users
- Clicking on the "Add User" button displays a form.
- On form submission, the new user is added to the list dynamically.

### 3. Editing Users
- Clicking the edit icon on a user opens an inline edit form.
- Changes are saved when the user submits the form.

### 4. Deleting Users
- Clicking the delete icon removes the user from the list.

### 5. Pagination
- Pagination buttons allow users to navigate through the list.
- The active page is visually highlighted.

---

## Folder Highlights

### API Calls
- **get.js**: Contains the logic for fetching users.
- **post js**: Contains the logic for adding a user 
- **put.js**: Contains the logic for editing users.
- **delete.js**: Provides functionality for deleting users via an API call.

### Components
- **AddUser**: Handles the form for adding new users.
- **EditUser**: Handles inline editing of user details.


## Possible Improvements
- Enable filtering and searching users by name or email.
- Enhance the UI for better accessibility and design.



