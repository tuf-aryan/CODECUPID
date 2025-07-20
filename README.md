# 🌟 MERN Stack Learning Project

Welcome to my **MERN (MongoDB, Express, React, Node.js)** learning project!  
This repository is dedicated to practicing **backend development** while building a complete MERN stack application.

---

## 🚀 Project Goal

The goal of this project is to learn and apply **backend development** concepts by:

- Building a real-world server using Node.js and Express  
- Connecting to a MongoDB database  
- Creating RESTful APIs for CRUD operations  
- Securing routes with middleware for authentication  
- Integrating with a React frontend (planned in next steps)

---

## 📚 About the MERN Stack

**MERN** stands for:  
- **MongoDB** – NoSQL database for storing JSON-like documents  
- **Express.js** – Backend web application framework for Node.js  
- **React.js** – Frontend library for building user interfaces  
- **Node.js** – Runtime environment for running JavaScript on the server  

---

## 🏗️ Current Project Status

- Setup Node.js and Express server  
- Connect to MongoDB database  
- Create REST APIs (GET, POST, PUT, DELETE)  
- Implement basic middleware for authentication  

---

# 📆 What I Learn Day by Day?

## 📌 Express.js Routes Practice

📚 **Learning Note:**  
Today I practiced the basics of Express.js, focusing on creating routes, using multiple route handlers, and understanding how Express middleware works.

---

## 🚀 What I Learned

- Setting up a basic Express server
- Creating simple routes (GET, POST)
- Passing multiple route handlers (middleware)
- Sending responses in JSON or plain text
- Understanding the `next()` function

---

## 📚 What is Middleware in Express?

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. These functions can:

- Execute any code
- Modify the `req` and `res` objects
- End the request-response cycle
- Call the next middleware in the stack

In this, I practiced the use of **Express.js middleware** to handle basic user authentication. Middleware is a core concept in Express and is widely used for logging, error handling, request parsing, and—importantly—**authorization and authentication**.

---

# 🛡️ Express.js Error Handling Practice

This project demonstrates **error handling in Express.js**, focusing on:

✅ Using `try/catch` in asynchronous controllers  
✅ Centralized error-handling middleware  
✅ Wildcard 404 "Not Found" route handling  

It’s designed as a learning exercise for writing clean, robust, production-ready Express.js backends.

---

## 📚 Why Error Handling Matters

Error handling is essential in web development. It:

- Prevents server crashes
- Sends meaningful error responses to clients
- Helps with debugging
- Improves security by controlling what info is exposed

Express.js provides a powerful mechanism for **centralized error handling** using middleware.

---

# 🚀 Mongoose + MongoDB 

This project documents my learning on how to:

✅ Initialize Mongoose in a Node.js project  
✅ Connect to a MongoDB Atlas cluster  
✅ Create a schema and model  
✅ Build a simple POST API to insert data into the database using Postman  
✅ View and explore data using MongoDB Compass

---

# 🚀 Dynamic User Creation API

This project demonstrates how to create a **dynamic user** object using Express.js, parse it with `express.json()` middleware, and test it with Postman.

---

## 📚 Features

✅ Uses `express.json()` middleware to parse JSON requests  
✅ POST endpoint to create a user dynamically  
✅ GET endpoint to list all users  
✅ Tested via Postman  

---

# 📘 Getting Data from Database Using Mongoose

This README describes what I learned about **fetching data** from a MongoDB database model using Mongoose in Node.js.

---

## ✅ 1️⃣ Using `find()`
- `find()` is used to **retrieve multiple documents** from the database.
- It returns an **array** of all records that match the filter.
- It's useful when I want to get a full list of users or apply filters to see many results.

---

## ✅ 2️⃣ Using `findOne()`
- `findOne()` is used to **retrieve a single document** that matches the filter.
- It returns **one object** or **null** if nothing is found.
- Ideal for finding a specific user by email or any unique field.

---

## ✅ 3️⃣ Key Differences
- `find()` ➜ multiple results (array of documents).
- `findOne()` ➜ single result (object or null).

---

## ✅ 4️⃣ Why This Is Important
- Helps build API endpoints that can return lists or details of one item.
- Supports features like search, login, and listing data.
- Makes database querying flexible and powerful.

---

⭐ In summary, I learned how to **get data from my database model** using Mongoose's `find()` to fetch many records and `findOne()` to fetch a single record.


# 📌 Today What I Learn

- How to update a user in MongoDB using Mongoose.
- How to delete a user from the database.

---

## ✅ Use of `findByIdAndUpdate` and `findByIdAndDelete`

- **findByIdAndUpdate**: Used to find a document by its ID and update its fields in one step.
- **findByIdAndDelete**: Used to find a document by its ID and remove it from the database.


# Today I learn 

- How to add validation in your schema's
- How to add timestamps in your schema's
- How to use Validate fxn and how to inable this validate in also update
- use the trim ,min,minlength,max, maxlength,lowercase,default,required,uniqure and other's
- use How to do Api level data Sanitizaiton
- Add validator library -npm i validator
- Add so many validator in user schema ex-email,password,url
- Install bcrypt pacakage
- create passwordHash using bcrypt.hash & save the user with hash pass in db
- create Login api
- compare email and pass with db and login sucessfully


# Today I learn


- Install cookie-parser
- send dummy cookie to user
- create get/profile api and check if you u get cokkie back
- Install jsonwebtoken
- In login Api After email and password validation ,create a JWT Token and send it to user  inside cookie
-  read the cookie inside your profile and find the logged in user
- userAuth middlware
- Set the expire of JWT and cookies for 7 days
- create userSchema method to get jwt token and compare password


# Today I learn

- Do logical sepration of api using expressRouter
- index in Mongoose 
- compound index 
- pre Schema method
- learn about enum
- ref and populate() use

