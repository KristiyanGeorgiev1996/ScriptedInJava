# Conditional Statements - Exercise – Programming Basics with JavaScript 🧑‍💻

This folder contains tasks from the **Conditional Statements - Exercise** section of the _Programming Basics with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

### 📝 Task 1: Total Race Time  
**Description:**  
Three competitors finish a race, each with a recorded time in seconds (ranging from 1 to 50). Create a program that reads these three times and computes their combined duration. Output the total in the format "minutes:seconds", ensuring seconds are always shown with two digits (e.g., 2 → "02", 7 → "07", 35 → "35").

---

### 📝 Task 2: Calculate Bonus Points  
**Description:**  
Given an initial integer score, compute the bonus points based on the following criteria, and then calculate the final score including bonuses:

- If the score is 100 or less, the bonus is 5 points.  
- If the score is greater than 100 but no more than 1000, the bonus is 20% of the initial score.  
- If the score exceeds 1000, the bonus is 10% of the initial score.

Additional bonuses:

- Add 1 extra point if the initial score is even.  
- Add 2 extra points if the score ends with the digit 5.

---

### 📝 Task 3: Add 15 Minutes to Time 
**Description:**  
Write a program that receives the current time in hours and minutes (24-hour format). Calculate and print the time exactly 15 minutes later. Format the output as "hour:minutes", where minutes always have two digits (leading zero if needed). Hours range from 0 to 23, minutes from 0 to 59.

---

### 📝 Task 4: Toy Store Profit  
**Description:**  
Petya runs a toy store and has received a bulk order. She plans to use the profits to fund her holiday. Given the quantities of various toys sold and their prices:

- Puzzle: 2.60 lv. each  
- Talking doll: 3.00 lv. each  
- Teddy bear: 4.10 lv. each  
- Minion: 8.20 lv. each  
- Truck: 2.00 lv. each

If the total number of toys sold is 50 or more, apply a 25% discount on the total price. Then, deduct 10% of the earnings for store rent. Your program should determine if Petya can afford her holiday.

**Input:**

1. Holiday price – real number [1.00 … 10000.00]  
2. Quantity of puzzles – integer [0…1000]  
3. Quantity of talking dolls – integer [0…1000]  
4. Quantity of teddy bears – integer [0…1000]  
5. Quantity of minions – integer [0…1000]  
6. Quantity of trucks – integer [0…1000]  

**Output:**

- If the earnings cover the holiday cost:  
  `Yes! {remaining money} lv left.`  
- Otherwise:  
  `Not enough money! {needed money} lv needed.`

The monetary amounts should be displayed with two decimal places.

---

### 📝 Task 5: Budget Check for Movie Production  
**Description:**  
A movie "Godzilla vs. Kong" is in production. You need to verify if the allocated budget suffices.

- Set decoration costs are 10% of the total budget.  
- If the number of extras exceeds 150, each extra’s costume price gets a 10% discount.

**Input:**

1. Budget – real number [1.00 … 1000000.00]  
2. Number of extras – integer [1 … 500]  
3. Costume price per extra – real number [1.00 … 1000.00]  

**Output:**

- Print if the budget is enough or how much more money is needed.

Format the output numbers to two decimal places.

---

### 📝 Task 6: Breaking the Swimming Record  
**Description:**  
Ivan is trying to beat the world record in long-distance swimming. You will be given:

- The current record time in seconds.  
- The total swimming distance in meters.  
- The time Ivan takes to swim one meter in seconds.

Every 15 meters, Ivan loses an additional 12.5 seconds due to water resistance. Calculate how many such slowdowns occur by rounding down.

**Output:**

- If Ivan breaks the record, print:  
  `Yes, he succeeded! The new world record is {time} seconds.`  
- If not, print:  
  `No, he failed! He was {difference} seconds slower.`

Round all times to two decimal places.

---

### 📝 Task 7: Buying Computer Parts  
**Description:**  
Peter wants to buy a certain number of video cards, processors, and RAM sticks. The prices are as follows:

- Each video card costs 250 lv.  
- Each processor costs 35% of the total price of video cards (per unit).  
- Each RAM stick costs 10% of the total price of video cards (per unit).

If Peter buys more video cards than processors, he gets a 15% discount on the total purchase.

**Input:**

1. Budget – real number [0.0 … 100000.0]  
2. Number of video cards – integer [0 … 100]  
3. Number of processors – integer [0 … 100]  
4. Number of RAM sticks – integer [0 … 100]  

**Output:**

- If budget suffices:  
  `You have {money left} leva left!`  
- Otherwise:  
  `Not enough money! You need {money needed} leva more!`

Results should be formatted to two decimal places.

---

### 📝 Task 8: Series Watching Time  
**Description:**  
During your lunch break, you want to watch an episode of your favorite series. You spend 1/8 of your break eating and 1/4 resting.

Given the series name, episode duration, and break length, determine if you have enough time to watch the episode.

**Input:**

1. Series name – text  
2. Episode duration (minutes) – integer [10 … 90]  
3. Break duration (minutes) – integer [10 … 120]  

**Output:**

- If there’s enough time:  
  `You have enough time to watch {series name} and left with {time left} minutes free time.`  
- Otherwise:  
  `You don't have enough time to watch {series name}, you need {time needed} more minutes.`

Round all time values **up** to the nearest whole number.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
