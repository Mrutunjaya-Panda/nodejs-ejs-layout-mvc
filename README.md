# Node.js EJS Layout MVC

A Node.js MVC application that fetches user data from a third-party API using Axios and dynamically renders it using EJS with reusable layouts.

---

## Features

- MVC (Model–View–Controller) architecture
- Third-party API integration using Axios
- Dynamic server-side rendering with EJS
- Reusable layout structure for common UI components
- No hardcoded data in HTML views
- Clean and scalable project structure

---

## Tech Stack

- Node.js
- Express.js
- Axios
- EJS (View Engine)
- HTML, CSS

---

## Project Structure

nodejs-ejs-layout-mvc/
│
├── controllers/
│   └── users.controller.js
│
├── models/
│   └── users.model.js
│
├── views/
│   ├── layouts/
│   │   └── layout.ejs
│   ├── index.ejs
│
├── public/
│   └── css/
│
├── app.js
├── package.json
└── README.md


---

## API Used

https://dummyjson.com/users

## 🚀 How It Works (MVC Flow)

1. Route

 ```
   app.get("/users", userController);
 ```

2. Controller
```
  Calls the model to fetch data
  Sends the processed data to the EJS view
```
3. Model
```
  Fetches user data using Axios
  Returns only the users array (not the full response)
```
4. View (EJS)
```
  Dynamically displays user data in a table
  Uses a reusable layout for common UI elements
```

## ▶️ How to Run the Project:-
# Clone the repository
git clone https://github.com/Mrutunjaya-Panda/nodejs-ejs-layout-mvc.git

# Navigate to project directory
cd nodejs-ejs-layout-mvc

# Install dependencies
npm install

# Start the server
npm start


## ♻️ Why Use Layouts in EJS?

Layouts help avoid repetition of common UI components like:
```
Header

Footer

Navigation bar

This improves:

Code reusability

Maintainability

Cleaner view files
```

## 📚 Learning Outcome
```
This project helps understand:

Real-world MVC implementation in Node.js

Server-side rendering using EJS

Fetching and rendering third-party API data

Building scalable and maintainable backend applications
```

## 👤 Author

Mrutunjaya Panda
