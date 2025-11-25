# Imaigal Foundation Student Management System

A modern React application for managing student data, built with Vite, React, and Tailwind CSS.

## Features

- **Dashboard**: Overview with summary cards and recent students
- **Student Management**: Add, edit, view, and delete student records
- **Search & Filter**: Find students by name, email, or grade
- **Responsive Design**: Works on desktop and mobile devices
- **Clean Architecture**: Organized folder structure with reusable components

## Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── Input.jsx
│   ├── Table.jsx
│   ├── Modal.jsx
│   └── Card.jsx
├── pages/           # Page components
│   └── Dashboard.jsx
├── layouts/         # Layout components
│   └── DashboardLayout.jsx
├── features/        # Feature-specific components
│   └── students/
│       ├── StudentList.jsx
│       ├── StudentForm.jsx
│       ├── StudentDetails.jsx
│       ├── hooks/
│       │   └── useStudents.js
│       └── services/
├── routes/          # Routing configuration
│   └── AppRoutes.jsx
├── context/         # React Context for state management
│   └── StudentContext.jsx
├── services/        # API services
│   └── mockApi.js
├── utils/           # Utility functions
│   ├── validation.js
│   └── export.js
└── styles/          # Global styles
    └── globals.css
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Student Data Fields

The application manages the following student information:

### Personal Information
- First Name
- Last Name
- Email
- Phone
- Date of Birth

### Address
- Street Address
- City
- State
- ZIP Code

### Guardian Information
- Guardian Name
- Guardian Phone

### Academic Information
- School
- Grade (9-12)
- GPA
- Interests

## Key Components

### Dashboard
- Summary cards showing total students, average GPA, etc.
- Quick actions for common tasks
- Recent students list

### Student List
- Searchable and filterable table
- Actions for view, edit, delete
- Responsive design

### Student Form
- Comprehensive form with validation
- Supports both add and edit modes
- Organized into logical sections

### Student Details
- Complete view of student information
- Export functionality (placeholder)
- Edit and navigation options

## State Management

The application uses React Context API for state management:
- `StudentContext`: Manages student data and operations
- `useStudents` hook: Provides easy access to student operations

## Mock API

The application includes a mock API service (`mockApi.js`) that simulates:
- Fetching students
- Creating new students
- Updating existing students
- Deleting students

## Future Enhancements

- Google Forms integration for data import
- PDF export functionality
- Advanced filtering and sorting
- Student photo uploads
- Email notifications
- Data backup and restore

## Technologies Used

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router DOM**: Client-side routing
- **Context API**: State management

## Development Guidelines

- Use functional components with hooks
- Follow the established folder structure
- Create reusable components
- Implement proper error handling
- Add form validation
- Maintain responsive design
- Write clean, readable code