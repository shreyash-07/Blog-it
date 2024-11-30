# Blog It - Blog Application

A simple yet powerful blog application where users can create, read, and comment on blog posts. The application uses **Node.js**, **Express.js**, **React.js**, **MongoDB**, and **EJS** for a smooth and interactive user experience.

---

## Features

- **User Authentication**: Secure login and signup functionality to ensure that only authenticated users can create, edit, and comment on posts.
- **Create and Manage Posts**: Users can create new blog posts, edit existing ones, and delete them.
- **Comment System**: Allows users to comment on posts and engage in discussions.
- **Responsive UI**: The frontend is designed using HTML, CSS, and JS to ensure a responsive and smooth experience across devices.
- **Database Integration**: MongoDB is used for storing blog posts, user data, and comments.
- **Optimized Database Queries**: Efficient queries are implemented to handle large amounts of data and ensure fast response times.

---

## Technologies Used

- **Frontend**: 
  - HTML, CSS, JavaScript
  - React.js (for dynamic interaction)
  
- **Backend**: 
  - Node.js
  - Express.js
  
- **Database**: 
  - MongoDB (Mongoose ODM for object data modeling)
  
- **Template Engine**: 
  - EJS (Embedded JavaScript templating for dynamic HTML rendering)

---

## Installation and Setup

### 1. Clone the repository:

```bash
git clone https://github.com/shreyash-07/Blog-it.git
cd Blog-it
```

### 2. Install dependencies:

```bash
npm install
```
### 3. Set up environment variables:
You need to set up the environment variables in index.js

```bash
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REACT_APP_API_URL=http://localhost:8000/api
```

### 4. Start the server

```bash
npm run dev
```

### 5. Open the app in browser (http://localhost:8000)