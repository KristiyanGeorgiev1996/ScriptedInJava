# Basic Syntax, Conditional Statements and Loops - Exercise – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Basic Syntax, Conditional Statements and Loops - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

---

## 🔧 Tasks Overview:

### 📝 Task 1: Age Categorization

**Description:**  
Create a program that classifies a person based on their age input.

**Age Groups:**
- 0 to 2 → Baby  
- 3 to 13 → Child  
- 14 to 19 → Teenager  
- 20 to 65 → Adult  
- 66 and above → Elder

All ranges are inclusive.

---

### 📝 Task 2: Divisibility Checker

**Description:**  
Write a program that checks if a given number is divisible (without remainder) by any of the following: 2, 3, 6, 7, or 10.

**Rules:**
- If divisible by multiple values, print the largest one.  
- For example:  
  - Divisible by 2, 3, and 6 → print 6  
  - Divisible by 2 and 10 → print 10  
- If not divisible by any → print `"Not divisible"`  
- Otherwise → `"The number is divisible by {divisor}"`

---

### 📝 Task 3: Vacation Cost Calculator

**Description:**  
Based on group type, size, and day, calculate the total cost of a vacation.

**Group Types:** Students, Business, Regular  
**Days:** Friday, Saturday, Sunday  
**Price table and discounts apply.**

**Discount Rules:**
- Students (30 or more) → 15% off  
- Business (100 or more) → 10 people go free  
- Regular (10–20 people) → 5% off

**Output:**  
`Total price: {amount}`, formatted to two decimals.

---

### 📝 Task 4: Print Numbers and Their Sum

**Description:**  
Read two integers and print all numbers from start to end (inclusive).  
On a new line, print their total sum in format:  
`Sum: {total}`

---

### 📝 Task 5: Login System

**Description:**  
The program reads a username. The correct password is the reversed username.  
Users get 4 attempts.

**Behavior:**
- Wrong password → `"Incorrect password. Try again."`  
- On success → `"User {username} logged in."`  
- On 4th wrong attempt → `"User {username} blocked!"`

---

### 📝 Task 6: Strong Number Validator

**Description:**  
Check if a number is "strong" – i.e., the sum of the factorials of its digits equals the number itself.

**Example:**  
145 → 1! + 4! + 5! = 145 → output `"yes"`  
Otherwise → `"no"`

---

### 📝 Task 7: Vending Machine Simulator

**Description:**  
Simulate coin insertion and product purchases.

**Phase 1:** Accept coins until `"Start"`  
- Only accept: 0.1, 0.2, 0.5, 1, 2  
- Invalid coin → `"Cannot accept {value}"`

**Phase 2:** Accept products until `"End"`  
- Products: Nuts (2.0), Water (0.7), Crisps (1.5), Soda (0.8), Coke (1.0)  
- Invalid product → `"Invalid product"`  
- Not enough money → `"Sorry, not enough money"`  
- Successful → `"Purchased {product}"`

At the end:  
`"Change: {moneyLeft}"`

---

### 📝 Task 8: Triangle Pattern

**Description:**  
Read number `n` and print a triangle made of numbers from 1 to `n`.  
Each line repeats the current number as many times as its value.

---

### 📝 Task 9: Padawan Equipment Budget

**Description:**  
Calculate if John can afford Jedi gear for all students.

**Each student needs:**  
- 1 Lightsaber (buy 10% extra)  
- 1 Robe  
- 1 Belt (every 6th is free)

**Input:** Budget, student count, prices per item  
**Output:**  
- If budget is enough → `"The money is enough - it would cost {total}lv."`  
- Else → `"John will need {difference}lv more."`

---

### 📝 Task 10: Rage Expenses Calculator

**Description:**  
Petar breaks his gear based on how often he loses games.

**Gear Breakdown Rules:**  
- Every 2nd game → headset  
- Every 3rd → mouse  
- Every 2nd headset + mouse → keyboard  
- Every 2nd keyboard → display

Calculate total expenses.

**Output:**  
`Rage expenses: {total} lv.`

---

### 📝 Task 11: Coffee Order Cost

**Description:**  
Read N coffee orders. For each order, calculate its cost using:  
`(days * capsules) * pricePerCapsule`

**Input per order:**  
- pricePerCapsule  
- days  
- capsules count

**Output:**  
- Per order: `"The price for the coffee is: ${price}"`  
- Final: `"Total: $totalPrice"`

---

### 📝 Task 12: Sort Three Numbers

**Description:**  
Receive three real numbers and display them in descending order, one per line.

---

### 📝 Task 13: Last Digit as Word

**Description:**  
Write a function that takes an integer and returns the English word of its last digit.

**Example:**  
512 → output `"two"`

---

### 📝 Task 14: Game Store Simulation

**Description:**  
Simulate a game shop purchase system.

**Available Games and Prices:**  
OutFall 4 ($39.99), CS: OG ($15.99), Zplinter Zell ($19.99),  
Honored 2 ($59.99), RoverWatch ($29.99), RoverWatch Origins Edition ($39.99)

**Behavior:**  
- Invalid game → `"Not Found"`  
- Not enough money → `"Too Expensive"`  
- Success → `"Bought {game}"`  
- If money runs out → `"Out of money!"`  
- On `"Game Time"` → Print total spent and remaining

---

### 📝 Task 15: Reverse a String

**Description:**  
Read a string and print its reverse.

**Example:**  
`hello` → `olleh`

---

### 📝 Task 16: SMS Keypad Typing

**Description:**  
Simulate typing text using an old-school mobile numeric keypad.

**Mapping:**
`1 →
2 → a, b, c
3 → d, e, f
4 → g, h, i
5 → j, k, l
6 → m, n, o
7 → p, q, r, s
8 → t, u, v
9 → w, x, y, z
0 → (space)`

**Input:**  
Sequence of button presses (e.g., `2`, `22`, `222` → `a`, `b`, `c`)

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
