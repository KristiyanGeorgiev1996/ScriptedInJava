# Arrays - Exercise – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Arrays - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

### 📝 Task 1: Train Passengers  
**Description:**  
You will receive an integer n representing the number of wagons in a train. On the following n lines, read the number of passengers boarding each wagon. Output the number of passengers in each wagon, followed by the total number of passengers on the train.

---

### 📝 Task 2: Find Common Elements  
**Description:**  
Write a program that prints all elements that appear in both arrays. Compare the elements of the second array against those in the first.

---

### 📝 Task 3: Zig-Zag Arrays  
**Description:**  
Given an integer n, read n pairs of integers. Create two arrays where elements are arranged in a zig-zag manner as illustrated.

---

### 📝 Task 4: Rotate Array  
**Description:**  
Read an array and a number of rotations to perform. Each rotation moves the first element of the array to the end. After completing all rotations, print the final array.

---

### 📝 Task 5: Top Integers  
**Description:**  
Find and print all the "top integers" in an array. A top integer is one that is strictly greater than all the elements to its right.

---

### 📝 Task 6: Equal Sum Element  
**Description:**  
Check if there exists an element in an array where the sum of all elements to its left equals the sum of all elements to its right. Consider sums as 0 if there are no elements on that side. Print the index of such an element or "no" if none exists.

---

### 📝 Task 7: Longest Sequence of Equal Elements  
**Description:**  
Identify the longest consecutive sequence of identical numbers in an integer array. If multiple sequences share the longest length, print the leftmost one.

---

### 📝 Task 8: Magic Sum Pairs  
**Description:**  
Print all unique pairs of numbers from an integer array whose sum equals a given target number.

---

### 📝 Task 9: Kamino Factory DNA  
**Description:**  
You will be given the length of DNA sequences and then multiple DNA samples consisting of 0s and 1s separated by one or more '!' characters. Stop when you receive "Clone them!". Select the best DNA sequence based on:  
- The longest continuous subsequence of 1s,  
- If tied, the one with the earliest starting index of that subsequence,  
- If still tied, the one with the greatest sum of elements.

Print the best sample index, its sum, and the sequence separated by spaces.

---

### 📝 Task 10: Ladybugs  
**Description:**  
Given the size of a field and initial ladybug positions, process movement commands until "end" is received. Each command moves a ladybug left or right by a specified length. If a ladybug tries to land on an occupied cell, it continues flying in the same direction by the same distance. Ladybugs flying outside the field disappear. Print the final field state, using '1' for ladybugs and '0' for empty cells.

---

### 📝 Task 11: Encrypt, Sort, and Print  
**Description:**  
Read a number n, then read n strings. Encrypt each string by summing:  
- The ASCII codes of vowels multiplied by the string length,  
- The ASCII codes of consonants divided by the string length.  
Sort the resulting numbers in ascending order and print them.

---

### 📝 Task 12: Pascal's Triangle  
**Description:**  
Construct Pascal's Triangle with n rows. Each number is the sum of the two numbers directly above it (treat missing numbers as 0). Print each row with numbers separated by spaces.

---

### 📝 Task 13: Recursive Fibonacci  
**Description:**  
Implement a recursive function that returns the nth Fibonacci number, where:  
- Fibonacci(1) = 1  
- Fibonacci(2) = 1  
- Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2) for n > 2  
Input: an integer n (1 ≤ n ≤ 50).  
Output: the nth Fibonacci number.

---

### 📝 Task 14: Fold and Sum  
**Description:**  
Read an array of 4*k integers. Fold the array as shown in the problem description, then print the sum of the folded upper and lower rows, each containing 2*k integers.

---

### 📝 Task 15: Longest Increasing Subsequence (LIS)  
**Description:**  
Given a list of integers, find and print the longest increasing subsequence. If multiple subsequences have the same length, print the leftmost one.

Hints:  
- Track the length of LIS ending at each position.  
- Use backtracking arrays to reconstruct the sequence after processing.

Example:

| Index | 0 | 1  | 2 | 3  | 4  | 5 | 6 | 7 | 8 | 9 | 10 |
|-------|---|----|---|----|----|---|---|---|---|---|----|
| Value | 3 | 14 | 5 | 12 | 15 | 7 | 8 | 9 |11 |10 | 1  |
| Length| 1 | 2  | 2 | 3  | 4  | 3 | 4 | 5 | 6 | 6 | 1  |
| Prev  | -1| 0  | 0 | 2  | 3  | 2 | 5 | 6 | 7 | 7 | -1 |

Possible LIS examples include:  
{3}, {3,14}, {3,5,12,15}, {3,5,7,8,9,11}

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
