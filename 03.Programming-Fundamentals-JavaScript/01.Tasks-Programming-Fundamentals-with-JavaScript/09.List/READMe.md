# 🧑‍💻 List – Programming Fundamentals with JavaScript

This folder contains tasks from the **List** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

---

## 🔧 Tasks Overview

### 📝 Task 1: Sum Adjacent Equal Numbers  
**Description:**  
Write a program that sums all adjacent equal numbers in a list of decimal numbers, moving from left to right.

- When two adjacent numbers are summed, the result might be equal to one of its neighbors, so keep summing them as well.  
- Always sum the **leftmost** pair of equal neighbors first if there are multiple.

---

### 📝 Task 2: Gauss' Trick  
**Description:**  
Create a program that sums numbers in a list by pairing the first with the last, the second with the second-last, and so on.

- Continue this process until all numbers are summed.

---

### 📝 Task 3: Merging Lists  
**Description:**  
You will get two lists of numbers. Create a new list by alternating elements from each list:

- Take the first element from the first list,  
- Then the first element from the second list,  
- Then the second element from the first list, and so on.

If one list is longer, append its remaining elements to the end.

---

### 📝 Task 4: List of Products  
**Description:**  
Read a number `n`, then read `n` product names (strings).  
Print a numbered list of all products sorted in alphabetical order.

---

### 📝 Task 5: Remove Negatives and Reverse  
**Description:**  
Read a list of integers, remove all negative numbers, then print the remaining numbers in reversed order.

- If the resulting list is empty, print `"empty"`.

---

### 📝 Task 6: List Manipulation Basics  
**Description:**  
Start by reading a list of integers. Then, until the command `"end"` is received, execute commands to modify the list:

- `Add {number}` – add the number to the end of the list  
- `Remove {number}` – remove the first occurrence of the number  
- `RemoveAt {index}` – remove the number at the given index  
- `Insert {number} {index}` – insert the number at the given index  

All indices will be valid.  
At the end, print the final list elements separated by spaces.

---

### 📝 Task 7: List Manipulation Advanced  
**Description:**  
Build on the previous task by adding more commands. Keep reading commands until `"end"`.

Available commands:

- `Contains {number}` – print `"Yes"` if the number is in the list, otherwise print `"No such number"`  
- `PrintEven` – print all even numbers in the list  
- `PrintOdd` – print all odd numbers in the list  
- `GetSum` – print the sum of all elements  
- `Filter {condition} {number}` – print all elements that satisfy the condition (`<`, `>`, `>=`, `<=`)  

After `"end"`, print the final list **only if it was changed** by commands from Task 6.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
