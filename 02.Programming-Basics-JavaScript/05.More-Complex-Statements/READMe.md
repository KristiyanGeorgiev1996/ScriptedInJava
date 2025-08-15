# More Complex Statements – Programming Basics with JavaScript 🧑‍💻

This folder contains tasks from the **More Complex Statements** section of the _Programming Basics with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## Tasks Overview

### 📝 Task 1: Identify the Day of the Week  
Create a program that takes an integer input between 1 and 7 and outputs the corresponding day of the week in English. If the input falls outside this range, the program should print "Error".

---

### 📝 Task 2: Distinguish Between Weekday and Weekend  
Develop a program that reads a day name in English. If the day is a weekday (Monday through Friday), output "Working day". If it is a weekend (Saturday or Sunday), output "Weekend". For any invalid input, output "Error".

---

### 📝 Task 3: Determine Animal Class  
Write a program that accepts an animal's name and outputs its category as follows:

- "dog" maps to "mammal"  
- "crocodile", "tortoise", or "snake" map to "reptile"  
- Any other input results in "unknown"

---

### 📝 Task 4: Assign Proper Title Based on Age and Gender  
Design a program that requests the user's age (decimal number) and gender ('m' or 'f'). Based on these inputs, print one of the following titles:

- "Mr." if male and aged 16 or above  
- "Master" if male and younger than 16  
- "Ms." if female and aged 16 or above  
- "Miss" if female and younger than 16

---

### 📝 Task 5: Pricing in a Small Shop  
A business operates small shops in different cities, each having unique prices for several products:

| City    | coffee | water | beer | sweets | peanuts |
|---------|--------|-------|------|--------|---------|
| Sofia   | 0.50   | 0.80  | 1.20 | 1.45   | 1.60    |
| Plovdiv | 0.40   | 0.70  | 1.15 | 1.30   | 1.50    |
| Varna   | 0.45   | 0.70  | 1.10 | 1.35   | 1.55    |

Write a program that inputs a product name, city, and quantity, then calculates and outputs the total cost.

---

### 📝 Task 6: Check if Number Lies Within Range  
Create a program that reads a number and verifies if it falls within the interval [-100, 100], excluding zero. Print "Yes" if true, otherwise print "No".

---

### 📝 Task 7: Office Open Hours Verification  
Write a program to read an hour (integer) and a day of the week (string). Determine if the office is open during that time. Office hours are from 10 AM to 6 PM, Monday through Saturday inclusive.

---

### 📝 Task 8: Cinema Ticket Pricing  
Build a program that takes a day of the week and prints the corresponding ticket price:

- Monday, Tuesday, Friday → 12  
- Wednesday, Thursday → 14  
- Saturday, Sunday → 16

---

### 📝 Task 9: Classify Product as Fruit or Vegetable  
Write a program that accepts a product name and prints whether it is a fruit, a vegetable, or unknown:

- Fruits: banana, apple, kiwi, cherry, lemon, grapes → print "fruit"  
- Vegetables: tomato, cucumber, pepper, carrot → print "vegetable"  
- Others → print "unknown"

---

### 📝 Task 10: Validate Number Range  
A number is valid if it lies between 100 and 200 (inclusive) or if it equals zero. Write a program that reads an integer and outputs "invalid" if the number doesn’t meet these conditions.

---

### 📝 Task 11: Calculate Total Price in Fruit Shop  
A fruit shop sells fruits at prices that differ on weekdays and weekends.

**Weekday pricing:**

| Fruit      | Price |
|------------|-------|
| banana     | 2.50  |
| apple      | 1.20  |
| orange     | 0.85  |
| grapefruit | 1.45  |
| kiwi       | 2.70  |
| pineapple  | 5.50  |
| grapes     | 3.85  |

**Weekend pricing:**

| Fruit      | Price |
|------------|-------|
| banana     | 2.70  |
| apple      | 1.25  |
| orange     | 0.90  |
| grapefruit | 1.60  |
| kiwi       | 3.00  |
| pineapple  | 5.60  |
| grapes     | 4.20  |

The program should accept a fruit, the day of the week, and a quantity, then output the total cost formatted to two decimal places. If any input is invalid, print "error".

---

### 📝 Task 12: Calculate Sales Commission  
A company provides commissions depending on the city and sales volume:

| City    | Sales ≤ 500 | 500 < Sales ≤ 1,000 | 1,000 < Sales ≤ 10,000 | Sales > 10,000 |
|---------|-------------|---------------------|------------------------|----------------|
| Sofia   | 5%          | 7%                  | 8%                     | 12%            |
| Varna   | 4.5%        | 7.5%                | 10%                    | 13%            |
| Plovdiv | 5.5%        | 8%                  | 12%                    | 14.5%          |

Write a program that reads a city and sales amount, calculates the commission, and prints it formatted to two decimals. For invalid input (wrong city or negative sales), print "error".

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
