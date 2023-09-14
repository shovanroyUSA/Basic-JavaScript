# Week 2 - JavaScript Assignment
Asynchronous JavaScript Concepts and Error Handling

This assignment will help you solidify your understanding of asynchronous JavaScript and error handling, which are crucial concepts when working with Node.js.

Requirements:

# Part 1: Callbacks - 10

Create a JavaScript function that takes an argument and a callback function.
for example: function can be getUserData and argument can be userId  or getDogBreedInfromation and argument can be dogBreed
Inside the function, simulate fetching user data asynchronously (you can use a setTimeout to simulate a delay).
If the data  is found, call the callback with the user's data (an object with name, email, etc.- for userData function).
If the user is not found, call the callback with an error message.
Create a callback function that handles the user data or error and prints the result.


# Part 2: Promises - 20

Refactor the function function to use Promises instead of callbacks.
Create a Promise that resolves with the user data when found and rejects with an error message when not found.
Use the .then() and .catch() methods to handle the resolved data or errors.

# Part 3: Error Handling - 20

Modify your Promise-based  function to intentionally throw an error (e.g., if the user ID is negative).
Implement error handling in the .catch() block to gracefully handle this error and print a custom error message.
  
# Async/Await  - (do this for extra 50 points)

Rewrite the Promise-based functions using async/await syntax.
Demonstrate how to use try/catch blocks for error handling with async/await.
Submission: Submit your JavaScript code as a single file (index.js) or in a code repository (e.g., GitHub). Include comments explaining your code and demonstrate the functionality of each part in your code.
