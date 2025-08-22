# Basic Syntax, Conditional Statements and Loops – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Basic Syntax, Conditional Statements and Loops** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

---

## 🔧 Tasks Overview

### 📝 Task 1: Student Info Summary

**Description:**  
Write a program that takes three lines of input: a student’s name, their age, and their average grade.  
Display the data using the following format:  
`Name: {student name}, Age: {student age}, Grade: {student grade}`

---

### 📝 Task 2: Grade Check

**Description:**  
Create a program that reads a single floating-point number and checks if it is greater than or equal to 3.00.  
If it is, print `"Passed!"`.

**Note:**  
If the value is less than 3.00, the program should not print anything.

---

### 📝 Task 3: Pass or Fail

**Description:**  
Modify the previous task to also handle the failing case.

**Output Rules:**  
- If the grade is 3.00 or higher → print `"Passed!"`  
- If it's lower than 3.00 → print `"Failed!"`

---

### 📝 Task 4: Time After 30 Minutes

**Description:**  
Read the current time as two integers: hour and minutes.  
Add 30 minutes to the given time and print the result in format `hh:mm`.

**Formatting Notes:**  
- Hours may be one or two digits.  
- Minutes should always have two digits (e.g., `04`, `09`).

---

### 📝 Task 5: Month Name Printer

**Description:**  
Build a program that reads an integer from 1 to 12 and prints the corresponding month name.  
If the number is outside this range, print `"Error!"`.

---

### 📝 Task 6: Spoken Language by Country

**Description:**  
Write a program that receives a country name and prints the main spoken language based on predefined rules.

**Rules:**  
- For "England" or "USA" → output `"English"`  
- For "Spain", "Argentina", or "Mexico" → output `"Spanish"`  
- For any other country → output `"unknown"`

---

### 📝 Task 7: Theatre Ticket Price Calculator

**Description:**  
Create a program that determines the price of a theatre ticket based on the day and the customer's age.

**Pricing Table:**

| Day      | 0–18 yrs | 19–64 yrs | 65–122 yrs |
|----------|----------|-----------|------------|
| Weekday  | $12      | $18       | $12        |
| Weekend  | $15      | $20       | $15        |
| Holiday  | $5       | $12       | $10        |

**Input:**  
- First line: day type (`Weekday`, `Weekend`, `Holiday`)  
- Second line: age of the customer

**Output:**  
Print the ticket price or `"Error!"` if the age is outside the valid range (0–122).

---

### 📝 Task 8: Numbers Divisible by 3

**Description:**  
Write a program that prints all numbers between 1 and 100 that are divisible by 3.  
Use a single `for` loop.  
No input is required.

---

### 📝 Task 9: Sum of Odd Numbers

**Description:**  
Read a number `n` and print the first `n` odd numbers starting from 1.  
At the end, print the sum of those numbers.

**Example Output:**  
`1`
`3`
`5`
`Sum: 9`

---

### 📝 Task 10: Basic Multiplication Table

**Description:**  
Receive an integer input and display its multiplication table from 1 to 10.

**Format for each line:**  
`{number} X {multiplier} = {product}`

---

### 📝 Task 11: Extended Multiplication Table

**Description:**  
Modify the previous task to receive both the number and the starting multiplier.

**Rules:**  
- If multiplier ≤ 10 → print the table from that multiplier to 10  
- If multiplier > 10 → print just one multiplication line

---

### 📝 Task 12: Even Number Reader

**Description:**  
Keep reading numbers from the user until an **even number** is entered.

**Rules:**  
- If the number is odd → print: `"Please write an even number."` and repeat  
- If the number is even → print: `"The number is: {number}"` and stop

---

### 📝 Task 13: Debugging – Count Holidays Between Two Dates

**Description:**  
You are provided with a faulty program that calculates how many non-working days (Saturdays and Sundays) fall between two given dates.

**What to do:**  
Use a debugger to identify and fix logical errors in the code.

**Input Format:**  
Start and end dates in format: `day.month.year` (e.g. `01.05.2015` to `15.05.2015`)

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
