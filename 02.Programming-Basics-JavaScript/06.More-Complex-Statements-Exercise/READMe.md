# More Complex Statements - Exercise – Programming Basics with JavaScript 🧑‍💻

This folder contains tasks from the **More Complex Statements - Exercise** section of the _Programming Basics with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

### 📝 Task 1: Cinema  
**Description:**  
A cinema hall has a rectangular seating arrangement defined by r rows and c columns. There are three ticket types, each with a different price:

- Premiere screening: 12.00 leva per ticket  
- Normal screening: 7.50 leva per ticket  
- Discount screening (for children, students): 5.00 leva per ticket  

Write a program that takes as input the screening type (string), the number of rows, and columns (integers). Calculate and output the total income from selling tickets if all seats are occupied. Display the result with two decimal places.

---

### 📝 Task 2: Summer Clothing  
**Description:**  
Viktor needs your help deciding what to wear on a summer day with unpredictable weather. Based on the temperature and time of day, your program should recommend an outfit and shoes according to the table below.

Input two values from the user:

- Temperature (integer between 10 and 42)  
- Time of day ("Morning", "Afternoon", or "Evening")  

| Time of Day | 10-18 °C           | 19-24 °C          | 25+ °C           |
|-------------|--------------------|-------------------|------------------|
| Morning     | Sweatshirt, Sneakers | Shirt, Moccasins  | Shirt, Moccasins |
| Afternoon   | Shirt, Moccasins    | T-Shirt, Sandals  | Shirt, Moccasins |
| Evening     | Shirt, Moccasins    | Shirt, Moccasins  | Shirt, Moccasins |

Print the sentence:  
`"It's {temperature} degrees, get your {outfit} and {shoes}."`

---

### 📝 Task 3: New House  
**Description:**  
Marin and Neli plan to buy a house near Sofia and want to plant flowers. Neli is very fond of flowers and asks for a program that calculates the total cost based on flower type and quantity, and checks if the budget is sufficient.

Prices per flower type:

| Flower    | Price (leva) |
|-----------|--------------|
| Rose      | 5.00         |
| Dahlia    | 3.80         |
| Tulip     | 2.80         |
| Narcissus | 3.00         |
| Gladiolus | 2.50         |

Discounts and surcharges:

- Over 80 Roses: 10% discount  
- Over 90 Dahlias: 15% discount  
- Over 80 Tulips: 15% discount  
- Less than 120 Narcissus: price increases by 15%  
- Less than 80 Gladioluses: price increases by 20%  

Output:

- If budget suffices:  
  `"Hey, you have a great garden with {count} {flower} and {remaining} leva left."`  
- Otherwise:  
  `"Not enough money, you need {needed} leva more."`

---

### 📝 Task 4: Fishing Boat  
**Description:**  
Toni and friends want to rent a fishing boat. The rental cost depends on the season and the number of fishermen.

Rental prices:

- Spring: 3000 leva  
- Summer & Autumn: 4200 leva  
- Winter: 2600 leva  

Group discounts based on group size:

- Up to 6 people: 10% off  
- 7 to 11 people: 15% off  
- 12 or more: 25% off  

Additional discount:

- If the group has an even number of people and it's not Autumn, apply extra 5% off.

Output:

- If money is enough:  
  `"Yes! You have {remaining} leva left."`  
- If insufficient:  
  `"Not enough money! You need {needed} leva."`

---

### 📝 Task 5: Trip 
**Description:**  
A young programmer plans a vacation with a fixed budget during a given season. The destination and accommodation depend on the budget and season.

Destinations by budget:

- ≤ 100 leva: Bulgaria  
- ≤ 1000 leva: Balkans  
- > 1000 leva: Europe  

Accommodation type:

- Summer: camp  
- Winter: hotel  
- In Europe: always hotel regardless of season  

Spending percentages of budget:

| Destination | Summer | Winter |
|-------------|--------|--------|
| Bulgaria    | 30%    | 70%    |
| Balkans     | 40%    | 80%    |
| Europe      | 90%    | 90%    |

Output:

- `"Somewhere in {destination}"`
- `"{vacation_type} - {spent_amount}"`

---

### 📝 Task 6: Operations between Numbers  
**Description:**  
Create a program that reads two integers and an operator symbol (+, -, *, /, %). Perform the operation accordingly:

- For addition, subtraction, multiplication: print the result and specify if it’s even or odd.  
- For division: print the result with two decimal places.  
- For modulus: print the remainder.  
- If dividing by zero, print `"Cannot divide {N1} by zero"`.

Format output as follows:

- Division: `"{N1} / {N2} = {result}"`  
- Modulus: `"{N1} % {N2} = {remainder}"`

---

### 📝 Task 7: Hotel Room  
**Description:**  
Calculate the total price for a hotel stay in a studio or apartment depending on the month and number of nights.

Prices per night:

| Month           | Studio (leva) | Apartment (leva) |
|-----------------|---------------|------------------|
| May, October    | 50.00         | 65.00            |
| June, September | 75.20         | 68.70            |
| July, August    | 76.00         | 77.00            |

Discounts:

- Studio:  
  - > 7 nights in May/October: 5% discount  
  - > 14 nights in May/October: 30% discount  
  - > 14 nights in June/September: 20% discount  
- Apartment:  
  - > 14 nights any month: 10% discount  

Print:

- `"Apartment: {total} leva."`  
- `"Studio: {total} leva."`

---

### 📝 Task 8: On Time for the Exam  
**Description:**  
A student arrives at an exam hall. Determine if they are late, on time, or early compared to the exam start time.

Definitions:

- Late: arrives after exam start  
- On time: arrives exactly at exam start or up to 30 minutes before  
- Early: arrives more than 30 minutes before exam start  

Output messages:

- `"Late"`  
- `"On time"`  
- `"Early"`  

If late or early, also print time difference:

- If delay/early time less than 1 hour:  
  `"{minutes} minutes after/before the start"`  
- If delay/early time 1 hour or more:  
  `"{hours}:{minutes} hours after/before the start"`

---

### 📝 Task 9: Ski Vacation  
**Description:**  
Atanas plans a ski vacation in Bansko. Depending on the room type and length of stay, discounts apply.

Room prices per night:

- "room for one person": 18.00 leva  
- "apartment": 25.00 leva  
- "president apartment": 35.00 leva  

Discounts based on length of stay:

| Room Type           | < 10 days | 10-15 days | > 15 days |
|---------------------|-----------|------------|-----------|
| room for one person  | no discount | no discount | no discount |
| apartment           | 30% off    | 35% off    | 50% off    |
| president apartment | 10% off    | 15% off    | 20% off    |

After the discount, the evaluation affects the final price:

- Positive evaluation: add 25% to the price  
- Negative evaluation: subtract 10% from the price  

Print the final amount formatted to two decimals.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
