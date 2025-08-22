# Objects and Classes – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Objects and Classes** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

---

### 📝 Task 1: Randomize Words  
**Problem:**  
You will receive a string of words separated by spaces. Randomize their order and print each word on a new line.

**Hints:**  
- Split the input string into an array of words by spaces.  
- Create a `Random` object named `rnd`.  
- Use a loop to swap each word at positions `0` to `words.Length - 1` with a word at a random position.  
- Use `rnd.Next(minValue, maxValue)` to generate random indices (`minValue` inclusive, `maxValue` exclusive).  
- Print each word on a new line.

---

### 📝 Task 2: Big Factorial  
**Problem:**  
Given an integer `N` in the range `[0…1000]`, calculate and print the factorial of `N`.

---

### 📝 Task 3: Songs  
**Problem:**  
Define a class `Song` with properties:  
- `Type List`  
- `Name`  
- `Time`

**Input:**  
- First, receive the number of songs `N`.  
- Then, read `N` lines in the format:  
  `{typeList}{name}{time}`  
- Finally, read a line containing either a specific `Type List` or the keyword `"all"`.

**Output:**  
- If a `Type List` is provided, print only the names of songs from that list.  
- If `"all"` is provided, print the names of all songs.

---

### 📝 Task 4: Students  
**Problem:**  
Define a class `Student` with these properties:  
- First Name  
- Last Name  
- Age  
- Home Town

**Input:**  
- Read student data until `"end"` is received.  
- Then read a city name.

**Output:**  
- Print all students from the given city in the format:  
  `{firstName} {lastName} is {age} years old.`

---

### 📝 Task 5: Students 2.0  
**Problem:**  
Using the `Student` class from the previous task, if a student with the same first and last name appears again, update their information instead of adding a duplicate.

---

### 📝 Task 6: Store Boxes  
**Problem:**  
Define two classes:  

- `Item` with properties:  
  - Name  
  - Price  

- `Box` with properties:  
  - Serial Number  
  - Item (an `Item` object)  
  - Item Quantity  
  - Price for the Box (calculated as `itemQuantity * itemPrice`)

**Input:**  
- Receive input lines until `"end"` is entered, in the format:  
  `{Serial Number} {Item Name} {Item Quantity} {Item Price}`

**Output:**  
- Print all boxes ordered descending by their price, using the format:
`{Serial Number}`
-- `{Item Name} – ${Item Price}: {Item Quantity}`
-- `${Box Price}`

- Format prices to two decimal places.

---

### 📝 Task 7: Vehicle Catalogue  
**Problem:**  
Create a vehicle catalog containing only Trucks and Cars.

**Classes:**  
- `Truck` with properties: Brand, Model, Weight  
- `Car` with properties: Brand, Model, HorsePower  
- `Catalog` holding collections of trucks and cars.

**Input:**  
- Read lines until `"end"` is received, format:  
  `{type}/{brand}/{model}/{horse power or weight}`

**Output:**  
- Print all vehicles sorted alphabetically by brand in the format:
 
Cars:
`{Brand}: {Model} - {HorsePower}hp`

Trucks:
`{Brand}: {Model} - {Weight}kg`

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
