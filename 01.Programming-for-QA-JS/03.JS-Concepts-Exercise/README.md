# 📚 **JS Concepts Exercise** – **Programming for QA** 🧑‍💻

This folder contains tasks from the **JS Concepts Exercise** section of the **Programming for QA** course at **SoftUni**. Below are the tasks with brief descriptions.

---

## 🔧 **Tasks Overview:**

### 📝 **Task 1: [Ages]**
**Problem Statement:**  
Write a function that determines whether based on the given age a person is: **baby**, **child**, **teenager**, **adult**, **elder**.  
The input comes as a single number parameter. The age boundaries are:
- 0-2 – **baby**
- 3-13 – **child**
- 14-19 – **teenager**
- 20-65 – **adult**
- >=66 – **elder**
- In all other cases print – "**out of bounds**".

The output should be printed to the console.

---

### 📝 **Task 2: [Vacation]**
**Problem Statement:**  
You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information, calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person.  
The output should look like this: "**Total price: {price}**". The price should be formatted to the second decimal point.

|           | **Friday** | **Saturday** | **Sunday** |
|-----------|------------|--------------|------------|
| **Students** | 8.45       | 9.80         | 10.46      |
| **Business** | 10.90      | 15.60        | 16.00      |
| **Regular**  | 15.00      | 20.00        | 22.50      |

There are also discounts based on some conditions:
- **Students** – if the group is bigger than or equal to 30 people, you should reduce the total price by 15%;
- **Business** – if the group is bigger than or equal to 100 people, 10 of them can stay for free;
- **Regular** – if the group is bigger than or equal to 10 and less than or equal to 20, reduce the total price by 5%.

---

### 📝 **Task 3: [Leap Year]**
**Problem Statement:**  
Write a function to check whether a year is a **leap year**. Leap years are either divisible by 4, but not by 100, or are divisible by 400.  
The output should be as follows:
- If the year is a leap, print: **yes**
- Otherwise, print: **no**

---

### 📝 **Task 4: [Print and Sum]**
**Problem Statement:**  
Write a function that displays numbers from the given start to the given end and their sum. The input comes as two number parameters.

---

### 📝 **Task 5: [Multiplication Table]**
**Problem Statement:**  
You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.  
**Output:**  
Print every row of the table in the following format:  
`{number} X {times} = {product}`  
**Constraints:**  
- The number will be an integer in the interval [1…100].

---

### 📝 **Task 6: [Sum Digits]**
**Problem Statement:**  
Write a function, which will be given a single number. Your task is to find the sum of its digits.

---

### 📝 **Task 7: [Array Rotation]**
**Problem Statement:**  
Write a function that receives an array and the number of rotations you have to perform.  
**Note:** Depending on the number of rotations, the first element goes to the end.

---

### 📝 **Task 8: [Print Every N-th Element from an Array]**
**Problem Statement:**  
The input comes as two parameters – an array of strings and a number. The second parameter is N – the step.  
The output is every element on the N-th step starting from the first one. If the step is 3, you need to return the 1st, the 4th, the 7th … and so on, until you reach the end of the array.  
The output is the return value of your function and must be an array.

---

### 📝 **Task 9: [Sorting Numbers]**
**Problem Statement:**  
Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one, and so on.  
Return the resulting array.

---

### 📝 **Task 10: [Employees]**
**Problem Statement:**  
You're tasked to create a list of employees and their personal numbers.  
You will receive an array of strings. Each string is an employee name and to assign them a personal number, you have to find the length of the name (whitespace included).  
At the end, print all the list of employees in the following format:  
**"Name: {employeeName} -- Personal Number: {personalNum}"**

---

### 📝 **Task 11: [Towns]**
**Problem Statement:**  
You're tasked to create and print objects from a text table.  
You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes " | " and spaces.  
The table will consist of exactly 3 columns: "**Town**", "**Latitude**", and "**Longitude**". The latitude and longitude columns will always contain valid numbers.  
The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

---

### 📝 **Task 12: [Piccolo]**
**Problem Statement:**  
Write a function that:
- Records a car number for every car that enters the parking lot
- Removes a car number when the car goes out
- The input will be an array of strings in the format [direction, carNumber]  
Print the output with all car numbers which are in the parking lot sorted in ascending order by number.  
If the parking lot is empty, print: "**Parking Lot is Empty**".

---
