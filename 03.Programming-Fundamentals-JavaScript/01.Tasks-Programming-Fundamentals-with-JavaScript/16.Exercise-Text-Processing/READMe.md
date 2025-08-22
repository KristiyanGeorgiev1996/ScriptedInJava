# Text Processing - Exercise – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Text Processing - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

---

### 📝 Task 1: Valid Usernames  
**Description:**  
You will receive a single line containing usernames separated by `", "`. Print only the valid usernames.

**A username is valid if:**  
- Its length is between **3 and 16 characters**  
- It contains only **letters**, **digits**, **hyphens** (`-`), and **underscores** (`_`)

---

### 📝 Task 2: Character Multiplier  
**Description:**  
Create a function that takes two strings and calculates the sum of the products of their characters’ ASCII codes.

- For each index `i`, multiply the ASCII codes of `str1[i]` and `str2[i]` and add to the total sum.  
- If one string is longer, add the ASCII codes of the remaining characters directly to the sum.

---

### 📝 Task 3: Extract File  
**Description:**  
Given a file path, extract and print the file name and its extension.

**Example:**  
Input:  
`C:\Internal\training-internal\Template.pptx`  

Output:  
`File name: Template`
`File extension: pptx`

---

### 📝 Task 4: Caesar Cipher  
**Description:**  
Encrypt a given text by shifting each character **3 positions forward** in the ASCII table.

Example:  
`A` becomes `D`, `B` becomes `E`, and so on.

---

### 📝 Task 5: Multiply Big Number  
**Description:**  
You are given:  
- A very large number (up to 1050 digits)  
- A single-digit number (0–9)  

Write a program to multiply them manually (without using built-in big integer types) and print the result.

---

### 📝 Task 6: Replace Repeating Chars  
**Description:**  
Read a string and replace every sequence of repeating characters with a single instance of that character.

Example:  
Input: `aaaaabbbbbcdddeeeedssaa`  
Output: `abcdedsa`

---

### 📝 Task 7: String Explosion  
**Description:**  
In a string, the character `'>'` triggers an explosion with strength indicated by the following digit. Remove characters accordingly.

- The `'>'` character stays.  
- Explosion strength digits are removed.  
- If another `'>'` is found during an explosion, increase the explosion strength.

---

### 📝 Task 8: Letters Change Numbers  
**Description:**  
You will receive strings like `"A12b"` or `"s17G"`. For each string:

- Modify the number based on the surrounding letters.  
- Sum all the results and print the total rounded to two decimal places.

**Rules:**  
- If the **first letter** is uppercase, divide the number by its position in the alphabet.  
- If lowercase, multiply the number by its position.  
- If the **last letter** is uppercase, subtract its position from the number.  
- If lowercase, add its position to the number.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
