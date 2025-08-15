# First steps in coding - Exercise – Programming Basics with JavaScript 🧑‍💻

This folder contains tasks from the **First steps in coding - Exercise** section of the _Programming Basics with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

---

## 🔧 Tasks Overview:

### 📝 Task 1: Currency Exchange: USD to BGN 
**Task Description:**  
Develop a program that converts an input amount in US dollars to Bulgarian lev using a fixed exchange rate of 1 USD equals 1.79549 BGN.

---

### 📝 Task 2: Radians to Degrees Conversion  
**Task Description:**  
Create a program that accepts an angle value in radians (floating-point) and calculates its equivalent in degrees. Use the conversion formula: degrees = radians × 180 ÷ π.  
In C#, you can access the constant π through `Math.PI`.

---

### 📝 Task 3: Interest Calculation for Deposit  
**Task Description:**  
Implement a program that computes the final amount after a deposit period based on the initial deposited sum, deposit duration in months, and annual interest rate.  
Use the formula:  
final amount = deposited sum + deposit duration × ((deposited sum × annual interest rate) / 12)

**Input Details:**  
The program reads three lines:  
1. Initial deposit (real number between 100.00 and 10,000.00)  
2. Duration in months (integer between 1 and 12)  
3. Annual interest rate as a percentage (real number between 0.00 and 100.00)

**Output:**  
Print the resulting amount after applying interest for the full term.

---

### 📝 Task 4: Reading Time Estimator  
**Task Description:**  
George has a fixed number of pages to read over his summer break. Since he prefers spending time with friends, calculate how many hours per day he must allocate to finish the book in the given timeframe.

**Input Details:**  
The program receives three inputs:  
1. Total pages in the book (integer between 1 and 1000)  
2. Number of pages George can read per hour (integer between 1 and 1000)  
3. Number of days to finish reading (integer between 1 and 1000)

**Output:**  
Display the number of hours per day George needs to dedicate to reading.

---

### 📝 Task 5: Calculating School Supplies Cost  
**Task Description:**  
At the start of the school year, Annie, the class representative, must purchase supplies: pens, markers, and board cleaner. A discount applies to the total purchase price.  
Calculate the final amount Annie will need to pay after applying the discount.

**Price List:**  
- Pack of pens: 5.80 BGN  
- Pack of markers: 7.20 BGN  
- Board cleaner (per liter): 1.20 BGN

**Input Details:**  
The program reads four values:  
- Number of pen packs (integer from 0 to 100)  
- Number of marker packs (integer from 0 to 100)  
- Liters of board cleaner (integer from 0 to 50)  
- Discount percentage (integer from 0 to 100)

**Output:**  
Print the total cost after discount deduction.

---

### 📝 Task 6: Paint Job Cost Calculation  
**Task Description:**  
Rumen plans to repaint his living room and has hired workers to help. Calculate the overall expense covering materials and labor.

**Materials Pricing:**  
- Nylon (per sq.m.): 1.50 BGN  
- Paint (per liter): 14.50 BGN  
- Paint thinner (per liter): 5.00 BGN

**Additional Instructions:**  
- Add 10% more paint to the needed amount  
- Add 2 sq.m. extra nylon for safety  
- Include a fixed 0.40 BGN cost for bags  
- Labor cost is 30% of the total material costs, multiplied by the number of hours worked

**Input Details:**  
The program reads four lines:  
1. Nylon area required in sq.m. (integer 1–100)  
2. Paint amount needed in liters (integer 1–100)  
3. Paint thinner quantity in liters (integer 1–30)  
4. Number of work hours (integer 1–9)

**Output:**  
Print the total expense (materials + labor + extras).

---

### 📝 Task 7: Meal Order Total Price  
**Task Description:**  
A restaurant offers three fixed-price meal options: chicken, fish, and vegetarian. The group plans to order some meals and dessert. Dessert costs 20% of the meal total price (excluding delivery), and delivery has a fixed fee.

**Prices:**  
- Chicken menu: 10.35 BGN  
- Fish menu: 12.40 BGN  
- Vegetarian menu: 8.15 BGN  
- Delivery fee: 2.50 BGN

**Input Details:**  
The program reads three integers representing the quantities ordered:  
- Chicken menus (0–99)  
- Fish menus (0–99)  
- Vegetarian menus (0–99)

**Output:**  
Print the final total amount payable.

---

### 📝 Task 8: Basketball Equipment Budget 
**Task Description:**  
Jessie wants to buy basketball equipment based on her annual training fee. Calculate the total cost including shoes, kit, ball, and accessories, with each item's price adjusted relative to the training fee.

**Price Breakdown:**  
- Shoes cost 40% less than the training fee  
- Kit costs 20% less than the shoes price  
- Ball costs 25% of the kit price  
- Accessories cost 20% of the ball price

**Input Details:**  
A single integer indicating the annual training fee (0–9999).

**Output:**  
Output the total amount Jessie will need to pay to purchase all equipment.

---

### 📝 Task 9: Aquarium Water Capacity  
**Task Description:**  
Lyubomir received a rectangular aquarium as a gift. Calculate how many liters of water it can hold, taking into account the volume occupied by decorations.

Note: 1 liter corresponds to 1 cubic decimeter (dm³).

**Input Details:**  
The program reads four values:  
1. Aquarium length in centimeters (10–500)  
2. Aquarium width in centimeters (10–300)  
3. Aquarium height in centimeters (10–200)  
4. Percentage of volume taken by decorations (floating-point between 0.000 and 100.000)

**Output:**  
Print the volume of water in liters that can be filled in the aquarium.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
