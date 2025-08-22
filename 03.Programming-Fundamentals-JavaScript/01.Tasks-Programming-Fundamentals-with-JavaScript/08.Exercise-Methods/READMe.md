# 🧑‍💻 Methods - Exercise – Programming Fundamentals with JavaScript

This folder contains tasks from the **Methods - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

---

## 🔧 Tasks Overview

### 📝 Task 1: Smallest of Three Numbers  
**Description:**  
Create a method that receives three integers and prints the smallest one.

---

### 📝 Task 2: Vowels Count  
**Description:**  
Write a method that takes a string and prints how many vowels it contains.

---

### 📝 Task 3: Characters in Range  
**Description:**  
Create a method that takes two characters and prints all characters between them according to their ASCII codes, all on one line.

> **Note:** If the second character’s ASCII value is smaller than the first, swap them before printing.

---

### 📝 Task 4: Password Validator  
**Description:**  
Write a program that validates a password based on these rules:

- The password length should be between 6 and 10 characters (inclusive).  
- It should contain only letters and digits.  
- It must have at least 2 digits.

If the password is invalid, print the corresponding message:  
- `"Password must be between 6 and 10 characters"`  
- `"Password must consist only of letters and digits"`  
- `"Password must have at least 2 digits"`

---

### 📝 Task 5: Add and Subtract  
**Description:**  
Given three integers, write one method to sum the first two numbers and another method that subtracts the third number from that sum. Return the final result.

---

### 📝 Task 6: Middle Characters  
**Description:**  
Write a method that receives a string and prints its middle character(s).  
If the string length is even, print the two middle characters.

---

### 📝 Task 7: NxN Matrix  
**Description:**  
Create a method that takes an integer `n` and prints an `n x n` matrix filled with the number `n`.

---

### 📝 Task 8: Factorial Division  
**Description:**  
Read two integers, calculate the factorial for each, divide the first factorial by the second, and print the result formatted to two decimal places.

---

### 📝 Task 9: Palindrome Integers  
**Description:**  
Write a program that reads positive integers until it receives the command `"END"`.  
For each number, print whether it’s a palindrome (reads the same backward and forward).

> Examples of palindromes: `323`, `1001`.

---

### 📝 Task 10: Top Number  
**Description:**  
A top number is an integer that:

- Has a sum of digits divisible by 8, **and**  
- Contains at least one odd digit.

Print all top numbers in the range from 1 to `n`.

---

### 📝 Task 11: Array Manipulator  
**Description:**  
You will receive an array of integers and a series of commands to manipulate it.

#### Commands:  
- `exchange {index}` — splits the array after the given index and rearranges it  
  > If the index is invalid, print `"Invalid index"`  
- `max even/odd` — print the index of the max even or odd element (if multiple, print the rightmost)  
- `min even/odd` — print the index of the min even or odd element (if multiple, print the rightmost)  
  > If no matches found, print `"No matches"`  
- `first {count} even/odd` — print the first N even or odd elements  
- `last {count} even/odd` — print the last N even or odd elements  
  > If the count is invalid, print `"Invalid count"`  
  > If fewer elements are available, print all you have  
- `end` — stop receiving commands and print the final array in the format `[element1, element2, ...]`

---

### 📝 Task 12: Data Types  
**Description:**  
Read a value and a data type. Depending on the type:

- If `int` — multiply the number by 2  
- If `real` — multiply the number by 1.5 and print with two decimals  
- If `string` — surround the string with `$` symbols

Print the result.

---

### 📝 Task 13: Center Point  
**Description:**  
Given two points `(X1, Y1)` and `(X2, Y2)`, print the one closest to the origin `(0,0)`.  
If both points are at the same distance, print the first one.

---

### 📝 Task 14: Longer Line  
**Description:**  
You are given coordinates of four points, forming two lines: the first line from points 1 and 2, the second line from points 3 and 4.

Print the longer line in the format `(X1, Y1)(X2, Y2)`, starting with the point closest to the origin `(0,0)`.  
If both lines are the same length, print the first line only.

---

### 📝 Task 15: Multiplication Sign  
**Description:**  
Given three numbers, determine whether their product is `"positive"`, `"negative"`, or `"zero"` **without** actually multiplying them.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
