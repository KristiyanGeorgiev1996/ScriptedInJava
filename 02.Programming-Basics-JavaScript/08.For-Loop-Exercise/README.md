# For Loop - Exercise – Programming Basics with JavaScript 🧑‍💻

This folder contains tasks from the **For Loop - Exercise** section of the _Programming Basics with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Overview of Programming Tasks

### 📝 Task 1: Numbers Ending with 7 Between 1 and 1000  
**Task:**  
Create a program that outputs all integers from 1 up to 1000 that end with the digit 7.

---

### 📝 Task 2: Check for Element Equal to Sum of Others  
**Task:**  
Write a program that takes `n` integers from the user and determines if any of these numbers equals the sum of all the others combined.

- If such a number exists, output "Yes" and on the following line "Sum = [value]".
- If no such number exists, output "No" and then "Diff = [absolute difference between the largest number and the sum of the remaining numbers]".

---

### 📝 Task 3: Number Distribution Histogram  
**Task:**  
Given `n` integers (each between 1 and 1000), calculate the percentage of numbers falling into the following ranges:

- Below 200
- From 200 to 399
- From 400 to 599
- From 600 to 799
- 800 or above

The program should output the percentage for each category formatted to two decimal places.

Example input and distribution:

| Range   | Numbers in the range                 | Count | Percentage    |
|---------|------------------------------------|-------|---------------|
| < 200   | 53, 7, 56, 180, 12, 7, 150, 2 ... | 12    | 60.00%        |
| 200-399 | 250, 200                           | 2     | 10.00%        |
| 400-599 | 450                               | 1     | 5.00%         |
| 600-799 | 680, 600, 799                     | 3     | 15.00%        |
| ≥ 800   | 920, 800                         | 2     | 10.00%        |

---

### 📝 Task 4: Lily's Birthday Savings  
**Task:**  
Lily is `N` years old and receives gifts each birthday.

- For odd-numbered birthdays, she gets toys.
- For even-numbered birthdays, she receives money starting from 10 lv at age 2, increasing by 10 lv for each subsequent even birthday.

Each time Lily gets money, her brother takes 1 lv from the amount. She sells all her toys at a fixed price `P` and adds the money to her savings. Given the price of a washing machine `X`, determine if Lily has enough money to buy it and how much money she will have left or how much more she needs.

Input includes Lily’s age, washing machine price, and toy price.

Output either:

- "Yes! {remaining amount}" if she can afford it, or
- "No! {amount needed}" if she cannot.

Both amounts should be formatted with two decimals.

---

### 📝 Task 5: Employee Salary Deductions  
**Task:**  
A company is monitoring employees’ browsing habits and applies fines when certain distracting websites are found open.

- Facebook → 150 lv fine
- Instagram → 100 lv fine
- Reddit → 50 lv fine

Input consists of the number of open browser tabs and the starting salary. For each tab, the website name is provided. The program should deduct fines accordingly and print either:

- "You have lost your salary." if the salary reaches zero or below, or
- The remaining salary as an integer otherwise.

---

### 📝 Task 6: Oscar Points Calculation  
**Task:**  
An actor starts with an initial number of points given by the academy. Then, several reviewers give their scores. For each reviewer, the actor gains points calculated by multiplying the length of the reviewer’s name by their score and dividing by two.

If at any point the actor's total points surpass 1250.5, the program should immediately stop and congratulate the actor with a nomination message.

Input includes the actor’s name, initial points, number of reviewers, and for each reviewer, their name and score.

Output either:

- "Congratulations, {actor name} got a nominee for leading role with {points}!" or
- "Sorry, {actor name} you need {points needed} more!"

Numbers should be formatted to one decimal place.

---

### 📝 Task 7: Climbing Group Distribution  
**Task:**  
Groups of climbers are categorized by size and assigned to different mountains:

- Up to 5 people → Musala
- 6 to 12 → Mont Blanc
- 13 to 25 → Kilimanjaro
- 26 to 40 → K2
- 41 or more → Everest

Given the number of groups and their sizes, calculate and display the percentage of climbers for each mountain.

Output percentages should be formatted with two decimal places.

---

### 📝 Task 8: Tennis Ranking Points  
**Task:**  
Grigor Dimitrov plays a series of tournaments, earning points depending on the stage reached:

- Winner (W): 2000 points
- Finalist (F): 1200 points
- Semi-finalist (SF): 720 points

Given the initial ranking points and tournament results, calculate:

- Total points after all tournaments
- Average points earned per tournament (rounded down)
- Percentage of tournaments won (to two decimals)

Print the results accordingly.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
