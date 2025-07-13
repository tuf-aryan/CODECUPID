# Express.js Routes Practice
. 📚 Learning Note: Today I practiced the basics of Express.js, focusing on creating routes, using multiple route handlers, and understanding how  Express middleware works.

# 🚀 What I Learned
. Setting up a basic Express server

. Creating simple routes (GET, POST)

. Passing multiple route handlers (middleware)

. Sending responses in JSON or plain text

. Understanding the next() function


## 📚 What is Middleware in Express?

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application’s request-response cycle. These functions can:

. Execute any code
. Modify the `req` and `res` objects
. End the request-response cycle
. Call the next middleware in the stack
. In this i practice the use of **Express.js middleware** to handle basic user authentication. Middleware is a core concept in Express and is widely used for logging, error handling, request parsing, and—importantly—**authorization and authentication**.
