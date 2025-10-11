# AJAX, Promises, Async/Await in JavaScript – Part 1 🧑💻

This folder contains tasks from the **AJAX, Promises, Async/Await in JavaScript – Part 1** section of the _Front-End Test Automation_ course at SoftUni. All task descriptions have been rewritten to avoid copyright issues.  

## 🔧 Overview of Tasks

### 📝 Task 1: Hello World with Delay  
Create a function `helloWorld()` using `setTimeout` and callbacks that logs two messages to the console. The first message should appear immediately, and the second message after a 2-second delay.  

**Requirements:**  
- Log `"Hello"` immediately.  
- Log `"World"` exactly 2 seconds after `"Hello"`.  

---

### 📝 Task 2: Chained Messages  
Write a function `chainedPromises()` using `setTimeout` to log a sequence of messages with increasing delays: `"Start"` immediately, `"1"` after 1 second, `"2"` after 2 seconds, and `"3"` after 3 seconds.  

---

### 📝 Task 3: Simple Promise  
Create a function `simplePromise()` that returns a promise resolving to `"Success!"` after 2 seconds and logs the result to the console.  

---

### 📝 Task 4: Promise Rejection  
Write a function `promiseRejection()` that returns a promise rejecting with the error message `"Something went wrong!"` after 1 second and logs the error.  

---

### 📝 Task 5: Promise with Multiple Handlers  
Create a function `promiseWithMultipleHandlers()` that returns a promise resolving to `"Hello World"` after 2 seconds and logs the result twice using multiple `.then` handlers.  

---

### 📝 Task 6: Promise.all  
Write a function `allPromise()` that creates three promises resolving after 1, 2, and 3 seconds respectively, and logs all results together once all promises have resolved.  

---

### 📝 Task 7: Promise.race  
Create a function `racePromise()` that creates three promises resolving after 1, 2, and 3 seconds, and logs the first resolved result.  

---

### 📝 Task 8: Async Function with Await  
Write an async function `simplePromiseAsync()` that waits 2 seconds and then logs `"Async/Await is awesome!"`.  

---

### 📝 Task 9: Async Function with Error Handling  
Create an async function `promiseRejectionAsync()` that throws an error, catches it, and logs the error message.  

---

### 📝 Task 10: Chained Async/Await  
Write an async function `chainedPromisesAsync()` that waits for three promises with delays of 1, 2, and 3 seconds respectively and logs the results in order.  

---

### 📝 Task 11: Simple Quiz Game  
Create a console-based quiz game that asks a series of questions, accepts user input, and provides feedback on correctness. The game should tally the score and display it at the end. Use Promises and async/await to handle asynchronous operations.  

---

### 📝 Task 12: Simple Stopwatch  
Create a stopwatch that starts counting elapsed seconds when the "Start Stopwatch" button is clicked and stops when "Stop Stopwatch" is clicked. Use a promise to simulate saving the elapsed time every 5 seconds.  

---

### 📝 Task 13: Countdown Timer  
Create a countdown timer that starts from n seconds when the "Start Countdown" button is clicked, logging the remaining time every second. The timer stops when it reaches zero and asynchronously "saves" the remaining time.  

---

### 📝 Task 14: Simple Text Adventure Game  
Create a simple text-based adventure game where the player makes choices via prompts. The game responds based on the choices and simulates delays using `setTimeout` and promises. Allow the player to restart or end the game based on their input.  

---

## ⚠️ Note  
All task descriptions have been **rephrased and reformatted** to avoid copyright issues. Original exercises are provided by SoftUni's _Front-End Test Automation_ course.  
