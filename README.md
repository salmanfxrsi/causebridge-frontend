# CauseBridge - Client Side

CauseBridge is a volunteer management platform that connects individuals to meaningful volunteer opportunities. Users can create, update, and delete volunteer need posts, as well as join others' posts as volunteers. The platform is designed to be user-friendly, secure, and responsive.

## Purpose

The purpose of CauseBridge is to streamline volunteer management and encourage community engagement by providing an intuitive platform for organizing and participating in volunteer initiatives.

## Backend Repository

[Visit CauseBridge Backend Repository](https://github.com/salmanfxrsi/causebridge-backend)

## Live Website

[Visit CauseBridge Live](https://cause-bridge.web.app/)

## Key Features

- **Authentication & Authorization**:

  - Email/password-based registration and login with validation.
  - Google/GitHub social login support.
  - Protected routes using JWT for secure access.

- **CRUD Operations**:

  - Add, update, and delete volunteer need posts.
  - Request to volunteer for others' posts with status management.

- **Search & Sorting**:

  - Search posts by title.
  - Display posts sorted by the nearest deadline.

- **Dynamic UI**:

  - Fully responsive design for mobile, tablet, and desktop.
  - Light and dark theme toggling.
  - Dynamic layout switching between grid and table view.

- **Interactive Elements**:

  - Toast notifications and confirmation modals for CRUD actions.
  - Animations implemented using Framer Motion.

- **Additional Features**:
  - Dynamic page titles based on route.
  - Pagination for better content management.
  - 404 page and loading spinner for improved user experience.

## Pages Overview

1. **Home Page**:

   - Eye-catching banner/slider.
   - "Volunteer Needs Now" section showcasing posts with upcoming deadlines.
   - Extra sections for relevant content.

2. **Add Volunteer Need Post (Private Route)**:

   - Form to add new volunteer opportunities.
   - Automatically captures organizer details.

3. **Volunteer Need Post Details (Private Route)**:

   - Displays detailed information about a specific post.
   - "Be a Volunteer" functionality with form submission.

4. **All Volunteer Need Posts**:

   - View all posts in a searchable and sortable format.

5. **Manage My Posts (Private Route)**:

   - Separate sections for "My Volunteer Need Posts" and "My Volunteer Requests."
   - Edit or delete posts with confirmation.

6. **Authentication**:

   - Login and registration pages with password validation and error handling.

7. **Miscellaneous**:
   - Custom 404 page.
   - Light/Dark theme toggle.

## Tech Stack

- **Frontend**: React, TailwindCSS, Mamba UI, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication, JWT
- **Deployment**: Firebase (client), Vercel (server)

## NPM Packages Used

- `react-router-dom`
- `axios`
- `react-toastify`
- `sweetalert2`
- `jsonwebtoken`
- `react-datepicker`
- `framer-motion`
- `tailwindcss`
- `dotenv`

## Environment Variables

Ensure to configure the following environment variables:

- **Client**:

  - `REACT_APP_FIREBASE_API_KEY`
  - `REACT_APP_FIREBASE_AUTH_DOMAIN`
  - `REACT_APP_FIREBASE_PROJECT_ID`
  - `REACT_APP_FIREBASE_STORAGE_BUCKET`
  - `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`
  - `REACT_APP_FIREBASE_APP_ID`

- **Server**:
  - `MONGODB_URI`
  - `JWT_SECRET`

## Deployment

- **Frontend**: Hosted on Firebase
- **Backend**: Hosted on Vercel
