# 📚 JavaScript Exercises – Programming for QA 🧑‍💻

This directory includes programming exercises from the **JavaScript Exercises** module within the **Programming for QA** course at **SoftUni**. Below you will find a summary of each task.

---

## 🔧 Summary of Tasks:

### 📝 Task 1: [Age Category]  
Create a function that categorizes a person’s age into one of these groups:  
- 0 to 2 years: **baby**  
- 3 to 13 years: **child**  
- 14 to 19 years: **teenager**  
- 20 to 65 years: **adult**  
- 66 years and older: **senior**  
If the age falls outside these ranges, print "**out of range**".  
Output the category on the console.

---

### 📝 Task 2: [Group Vacation Pricing]  
You are given the size of a group, type of group, and the day they are visiting. Calculate the total cost for their stay using the prices below (per person):  

| Group Type | Friday | Saturday | Sunday |
|------------|--------|----------|--------|
| Students   | 8.45   | 9.80     | 10.46  |
| Business   | 10.90  | 15.60    | 16.00  |
| Regular    | 15.00  | 20.00    | 22.50  |

Discount rules:  
- Students get 15% off if the group has 30 or more people.  
- Business groups with 100 or more people get 10 free passes.  
- Regular groups of size 10 to 20 (inclusive) receive a 5% discount.  

Print the total cost formatted to two decimal places:  
**"Total price: {total}"**

---

### 📝 Task 3: [Determine Leap Year]  
Implement a function that checks whether a given year is a leap year. Leap years are divisible by 4 but not by 100, except if divisible by 400.  
Print "**yes**" if the year is leap, otherwise print "**no**".

---

### 📝 Task 4: [Range Print and Sum]  
Given a start and end number, print all numbers in that range and their total sum. Both start and end are inputs.

---

### 📝 Task 5: [Multiplication Table]  
Given an integer number, print its multiplication table from 1 through 10. Format each line as:  
`{number} X {multiplier} = {result}`  
The input number will be between 1 and 100 inclusive.

---

### 📝 Task 6: [Sum of Digits]  
Create a function that takes a number and returns the sum of its digits.

---

### 📝 Task 7: [Rotate Array]  
Write a function that rotates an array to the right by a given number of positions. Each rotation moves the first element to the end.

---

### 📝 Task 8: [Select Every N-th Element]  
Given an array of strings and a number N, return a new array consisting of every N-th element, starting from the first element.

---

### 📝 Task 9: [Custom Number Sorting]  
Sort an array so that the first element is the smallest number, the second is the largest, the third is the second smallest, the fourth is the second largest, etc. Return the resulting array.

---

### 📝 Task 10: [Employee Registry]  
Given a list of employee names, assign each a unique personal number equal to the length of their full name (including spaces). Print the list with the format:  
**"Name: {name} -- Personal Number: {number}"**

---

### 📝 Task 11: [Parse Town Data]  
Given an array of strings where each string represents a town's data with columns separated by `" | "` (town name, latitude, longitude), parse the data into objects. Latitude and longitude should be converted to numbers with two decimal places. Output the created objects.

---

### 📝 Task 12: [Parking Lot Tracker]  
Implement a function that tracks cars entering and leaving a parking lot. Input is an array of commands: `[direction, licensePlate]`, where direction is `"IN"` or `"OUT"`.  
At the end, print all license plates currently parked, sorted alphabetically.  
If no cars are present, print: "**Parking Lot is Empty**".

---
