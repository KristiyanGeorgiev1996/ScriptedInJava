# Regular Expressions – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Regular Expressions** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

---

### 📝 Task 1: Match Full Name  
**Problem Statement:**  
Write a C# program that extracts full names from a list and prints them to the console.

**Requirements for the Regular Expression:**  
Create a regex pattern to match valid full names based on the following rules:

- The full name consists of **exactly two words**.  
- Each word starts with a **capital letter**.  
- After the first letter, the word contains only **lowercase letters**.  
- Each word must be at least **two letters long**.  
- The two words are separated by a **single space**.

**How to build the regex:**  
1. Use a regex tester like [regex101.com](https://regex101.com/).  
2. Use character classes with square brackets `[]`.  
3. Specify two words separated by a space (`' '`).  
4. Each word starts with an uppercase letter `[A-Z]`.  
5. Followed by one or more lowercase letters `[a-z]+`.  
6. Use `\b` at the start and end to denote word boundaries.

**Test your regex with these samples:**

| Should Match                 | Should NOT Match                                  |
|-----------------------------|--------------------------------------------------|
| Bethany Taylor              | John Smith Bethany Taylor, Oliver miller         |
| John Smith                  | sophia Johnson, SARah Wilson, John Smith, Sam Smith |

---

### 📝 Task 2: Match Phone Number  
**Problem Statement:**  
Create a regex pattern that matches valid Sofia phone numbers. After extracting all valid numbers, print them separated by `", "`.

**Phone number requirements:**  
- Starts with `+359`.  
- Followed by the area code `2`.  
- Then the local number split into two groups: 3 digits and 4 digits.  
- Parts are separated either by spaces or hyphens (`-`).  
- Use a **capturing group** for the delimiter to ensure consistency (only spaces or only hyphens).  
- Add a **word boundary** at the end.  
- Before the plus sign (`+`), there must be either a space or the start of the string.

**Test your regex with:**

| Should Match               | Should NOT Match                                  |
|---------------------------|-------------------------------------------------|
| +359 2 222 2222           | 359-2-222-2222, +359/2/222/2222, +359-2 222 2222|
| +359-2-222-2222           | +359 2-222-2222, +359-2-222-222, +359-2-222-22222 |

---

### 📝 Task 3: Match Dates  
**Problem Statement:**  
Write a program to find dates in the format `dd{separator}MMM{separator}yyyy` using **named capturing groups**.

**Date format rules:**  
- `dd`: exactly two digits for the day.  
- `MMM`: a three-letter month abbreviation, with the first letter uppercase and the next two lowercase (e.g., Jan, Mar).  
- `yyyy`: exactly four digits for the year.  
- The day, month, and year are separated by the **same** separator symbol (`.`, `-`, or `/`).  
- Use a **backreference** to ensure the separator is consistent throughout the date.

**Test your regex with:**

| Should Match               | Should NOT Match                             |
|---------------------------|---------------------------------------------|
| 13/Jul/1928               | 01/Jan-1951                                |
| 10-Nov-1934               | 23/sept/1973                               |
| 25.Dec.1937               | 1/Feb/2016                                 |

---

**Use named groups to capture:**  
- `day`  
- `month`  
- `year`

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
