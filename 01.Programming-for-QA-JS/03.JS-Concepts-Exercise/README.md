# 📚 JavaScript Exercises – Programming for QA 🧑‍💻

This directory includes programming exercises from the **JavaScript Exercises** module within the **Programming for QA** course at **SoftUni**. Below you will find a summary of each task.

---

## 🔧 Overview of Assignments:

### 📝 Task 1: [Age Group Classification]  
Develop a function that determines a person’s age group based on the following criteria:  
- 0 to 2 years — **baby**  
- 3 to 13 years — **child**  
- 14 to 19 years — **teenager**  
- 20 to 65 years — **adult**  
- 66 years and above — **senior**  
If the input age falls outside these ranges, output "**out of range**".  
Print the category to the console.

---

### 📝 Task 2: [Calculate Group Vacation Price]  
Given the size of a group, the group type, and the day of the week, calculate the total cost of their vacation stay based on the following pricing (per person):

| Group Type | Friday | Saturday | Sunday |
|------------|--------|----------|--------|
| Students   | 8.45   | 9.80     | 10.46  |
| Business   | 10.90  | 15.60    | 16.00  |
| Regular    | 15.00  | 20.00    | 22.50  |

Discounts apply as follows:  
- Groups of students with 30 or more members get 15% off.  
- Business groups of 100 or more people get 10 free tickets.  
- Regular groups between 10 and 20 people (inclusive) receive a 5% discount.

Output the total price formatted to two decimal places:  
**"Total price: {total}"**

---

### 📝 Task 3: [Leap Year Checker]  
Write a function to determine if a given year qualifies as a leap year. Leap years are divisible by 4 but not by 100, except those divisible by 400.  
Print "**yes**" for leap years, otherwise "**no**".

---

### 📝 Task 4: [Print Range and Calculate Sum]  
Receive a starting and ending number, print every number within that range, and then print their cumulative sum.

---

### 📝 Task 5: [Generate Multiplication Table]  
Given an integer, output its multiplication table from 1 through 10. Format each line as:  
`{number} X {multiplier} = {product}`  
Input will be between 1 and 100 inclusive.

---

### 📝 Task 6: [Sum of Number’s Digits]  
Create a function that accepts a number and returns the sum of its digits.

---

### 📝 Task 7: [Rotate Array Elements]  
Implement a function that rotates an array to the right by a given count. Each rotation moves the first element to the array’s end.

---

### 📝 Task 8: [Extract Every N-th Element]  
Given an array of strings and a number N, return a new array consisting of every N-th element from the original array, starting at the first.

---

### 📝 Task 9: [Alternating Sort]  
Sort an array so that elements alternate between the smallest remaining and the largest remaining number, continuing until all elements are reordered. Return the rearranged array.

---

### 📝 Task 10: [Employee List with Personal Numbers]  
Given a list of employee names, assign each a unique personal number equal to the length of their full name (including spaces). Print each employee in the format:  
**"Name: {name} -- Personal Number: {number}"**

---

### 📝 Task 11: [Parse Town Information]  
Given an array where each element is a string describing a town, its latitude, and longitude separated by `" | "`, parse this data into objects. Latitude and longitude should be converted to numbers rounded to two decimals. Print the resulting objects.

---

### 📝 Task 12: [Parking Lot Management]  
Create a function to track cars entering and exiting a parking lot. Input is an array of arrays, each containing a direction (`"IN"` or `"OUT"`) and a license plate.  
At the end, print all license plates currently in the parking lot sorted alphabetically. If none, print:  
"Parking Lot is Empty".

---

> 📝 These exercises are inspired by material from SoftUni and rewritten here for practice and learning purposes.
