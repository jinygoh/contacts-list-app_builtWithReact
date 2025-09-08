# Manual Frontend Verification Instructions

This document provides the steps to manually verify the application after its migration from React to Angular.

## Why is this necessary?

A manual check is crucial to ensure that all features of the original application were successfully re-implemented in Angular and that the visual appearance (the dark theme) has been preserved.

## How to Verify

Please follow these steps to run the application and check the features.

### Step 1: Install Dependencies

If you haven't already, open a terminal in the project root and install the necessary packages:
```bash
npm install
```

### Step 2: Start the Development Server

Run the following command to start the Angular development server:
```bash
ng serve
```
The terminal will output the local URL where the application is running. It will likely be **http://localhost:4200/**.

### Step 3: Open and Verify in Browser

Open the URL from the previous step in your web browser. You should now see the Contact List application with its dark theme.

Please check the following:

1.  **✅ Dark Theme:**
    -   Does the application have a dark background?
    -   Are the contact cards a slightly lighter shade of dark gray?
    -   Is the text white or light gray and easy to read?
    -   Are the buttons and search bar styled consistently with the dark theme?

2.  **✅ Search Functionality:**
    -   Type a name (e.g., "Alice") into the search bar.
    -   Does the list filter correctly to show only the matching contact(s)?
    -   Clear the search bar. Does the full list reappear?

3.  **✅ Sorting Functionality:**
    -   Click the "Name (A-Z)" button. Does the list sort alphabetically?
    -   Click the "Name (Z-A)" button. Does the list sort in reverse alphabetical order?
    -   Click the "Default" button. Does the list return to its original order?

4.  **✅ Click for Details:**
    -   Click on any contact card.
    -   Does a browser alert pop up displaying that contact's name, phone, and email?

If all of these checks pass, the migration to Angular was successful.
