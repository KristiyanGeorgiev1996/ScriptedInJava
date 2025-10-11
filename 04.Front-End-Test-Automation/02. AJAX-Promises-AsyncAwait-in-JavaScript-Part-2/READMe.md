# AJAX, Promises, Async/Await in JavaScript – Part 2 🧑💻  

This folder contains tasks from the **AJAX, Promises, Async/Await in JavaScript – Part 2** section of the _Front-End Test Automation_ course at SoftUni.  
All descriptions have been rewritten for clarity and originality while keeping the core meaning of each exercise.  

---

## 🔧 Overview of Tasks  

### 📝 Task 1: Simulating a Network Request  
Create a function `fetchData()` using the **Fetch API** that retrieves information from `https://swapi.dev/api/people/1` and logs the JSON result to the console.  

**Requirements:**  
- Use `fetch()` to make a request to the given URL.  
- Parse the response using `.json()`.  
- Log the parsed data.  

---

### 📝 Task 2: Handling Fetch Errors  
Write a function `fetchDataWithErrorHandling()` using **async/await** and the **Fetch API** to fetch data from `https://swapi.dev/api/people/1`. Handle any errors gracefully with `try/catch`.  

**Requirements:**  
- Fetch data using `fetch()`.  
- Use `try/catch` to handle potential request failures.  
- Log either the JSON result or the caught error message.  

---

### 📝 Task 3: Parallel Fetch Requests  
Create a function `fetchParallel()` that makes **two fetch requests in parallel** to:  
- `https://swapi.dev/api/people/1`  
- `https://swapi.dev/api/people/2`  

Use `Promise.all()` to wait for both responses and log the results together.  

---

### 📝 Task 4: Sequential Fetch Requests  
Write a function `fetchSequential()` using **async/await** that performs **two fetch requests one after the other** to:  
- `https://swapi.dev/api/people/1`  
- `https://swapi.dev/api/people/2`  

Each result should be logged immediately after it’s received, in order.  

---

### 📝 Task 5: Handling Multiple Promises  
Create a function `multiplePromises()` that defines **three promises**:  
- One resolves after 1 second.  
- One resolves after 2 seconds.  
- One rejects after 3 seconds.  

Use `Promise.allSettled()` to log the status and value or error reason for each promise.  

---

### 📝 Task 6: Retrying Failed Promises  
Write a function `startRetry()` using **async/await**, which retries a promise up to **three times** if it fails.  
If it eventually succeeds, log the result; if it fails after all retries, log an error message.  

**Requirements:**  
- Implement a retry mechanism with a max of 3 attempts.  
- Log success or final failure accordingly.  

---

### 📝 Task 7: Throttling Promises  
Develop a function `throttlePromises()` using **async/await** that ensures **only two promises** are executed at the same time.  
When one finishes, the next should start automatically until all are complete.  

**Requirements:**  
- Limit concurrency to two parallel promises.  
- Start new ones as others resolve.  
- Log all final results.  

---

### 📝 Task 8: Timeout for Fetch Requests  
Create a function `fetchWithTimeout()` using **async/await** that fetches data from a URL but cancels (rejects) if it takes longer than a given timeout.  

**Requirements:**  
- Use `Promise.race()` to combine the fetch with a timeout.  
- Reject if the timeout is reached first.  
- Log the data or timeout error.  

---

### 📝 Task 9: Async Queue with Error Handling  
Implement a class `AsyncQueue()` that processes asynchronous tasks **in order**, one at a time.  
Once a task finishes, the next starts automatically.  

**Requirements:**  
- Maintain a queue for async tasks.  
- Process each task sequentially.  
- Log a message after each task completes.  

---

### 📝 Task 10: Combining Async/Await with Generators  
Write a function `startAsyncGenerator()` that integrates **generators** and **async/await** to handle a chain of asynchronous tasks.  

**Requirements:**  
- Combine generator functions with async operations.  
- Ensure each async task runs sequentially.  
- Log each result once it resolves.  

---

## ⚠️ Note  
All exercise descriptions have been **rephrased and reformatted** to comply with copyright rules.  
Original materials are provided by the _Front-End Test Automation_ course at SoftUni.  
