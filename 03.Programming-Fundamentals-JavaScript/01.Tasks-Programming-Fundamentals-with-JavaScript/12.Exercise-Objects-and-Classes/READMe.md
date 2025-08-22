# Objects and Classes - Exercise – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Objects and Classes - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

---

### 📝 Task 1: Advertisement Message  
**Problem Description:**  
Write a program that creates random fake advertisement messages promoting a product. Each message should consist of four components: phrase + event + author + city. Use the following fixed lists:

- **Phrases:**  
  "Excellent product.", "Such a great product.", "I always use that product.",  
  "Best product in its category.", "Exceptional product.", "I can't live without this product."

- **Events:**  
  "Now I feel great.", "I have achieved success with this product.",  
  "It works wonders. I’m delighted with the results!", "I don’t believe it, but now I feel amazing.",  
  "Try it yourself, I’m very satisfied.", "I feel fantastic!"

- **Authors:**  
  "Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"

- **Cities:**  
  "Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"

**Output Format:**  
`"{phrase} {event} {author} – {city}."`

You will receive the number of messages to generate. Print each generated message on a separate line.

---

### 📝 Task 2: Articles  
**Problem Description:**  
Implement a class named `Article` with the following properties:  
- Title (string)  
- Content (string)  
- Author (string)

The class should support the following methods:  
- `Edit(newContent)` — updates the article content  
- `ChangeAuthor(newAuthor)` — changes the author name  
- `Rename(newTitle)` — modifies the title

Override the `ToString()` method so it returns the article details in this format:  
`"{title} - {content}: {author}"`

**Input:**  
- A single line with article data: `"{title}, {content}, {author}"`  
- An integer `n` indicating the number of commands  
- Next `n` lines with commands, each in one of the formats:  
  - `Edit: {new content}`  
  - `ChangeAuthor: {new author}`  
  - `Rename: {new title}`

Print the final article after all commands are processed.

---

### 📝 Task 3: Articles 2.0  
**Problem Description:**  
Extend the previous task to handle multiple articles.

**Input:**  
- First line: number of articles `N`  
- Next `N` lines: each line contains an article in the format:  
  `"{title}, {content}, {author}"`

Print all articles by invoking their `ToString()` method.

---

### 📝 Task 4: Students  
**Problem Description:**  
Write a program that sorts students based on their grades in descending order.

Each student has:  
- First name (string)  
- Last name (string)  
- Grade (floating-point number)

**Input:**  
- Number of students `N`  
- Next `N` lines: each with `"{first name} {last name} {grade}"`

**Output:**  
Print each student as:  
`"{first name} {last name}: {grade}"` sorted from highest to lowest grade.

---

### 📝 Task 5: Teamwork Projects  
**Problem Description:**  
Create teams and assign members to them based on input commands.

**Input:**  
- Number of teams to create  
- Lines with creator and team name: `"{user}-{team}"`  
- Lines with member joining team: `"{user}-> {team}"`

**Constraints:**  
- Team names must be unique  
- A user can only create one team  
- Users can join only one team  
- Teams without members will be disbanded

**Output:**  
- Print all valid teams sorted by number of members (descending), then by team name (ascending)  
- Print disbanded teams sorted alphabetically

**Output format:**  
`Team {teamName} has been created by {creator}!`
`{teamName}`

`{creator}`
-- `{member1}`
-- `{member2}`


---

### 📝 Task 6: Vehicle Catalogue  
**Problem Description:**  
Continuously read vehicle information until you receive the command `"End"`.

Each vehicle is described as:  
`"{type} {model} {color} {horsepower}"`

Afterwards, read model names to print the details of those vehicles.

When you get the command `"Close the Catalogue"`, print the average horsepower for all Cars and Trucks separately:

`"{type}s have average horsepower of: {averageHorsepower}."`

Format average horsepower to two decimal places.

---

### 📝 Task 7: Order by Age  
**Problem Description:**  
Read information about people in the format:  
`"{name} {ID} {age}"`

If a person with the same ID appears again, update their information.

After the `"End"` command, print all people sorted by age in ascending order:

`"{name} with ID: {ID} is {age} years old."`

---

### 📝 Task 8: Company Roster  
**Problem Description:**  
Define an `Employee` class with:  
- Name  
- Salary  
- Department

Read data for `N` employees.

Identify the department with the highest average salary.

Print employees from that department sorted by salary in descending order:

`"{Name} {Salary}"` — salary formatted to two decimal places.

---

### 📝 Task 9: Oldest Family Member  
**Problem Description:**  
Create two classes:

- `Person` with properties: Name, Age  
- `Family` that contains a collection of `Person` objects, and methods:  
  - `AddMember(Person)`  
  - `GetOldestMember()`

Read `N` people and print the oldest member's name and age.

---

### 📝 Task 10: Speed Racing  
**Problem Description:**  
Manage multiple cars with these properties:  
- Model (unique)  
- FuelAmount  
- FuelConsumptionPerKm  
- TraveledDistance (initially 0)

**Input:**  
- First `N` lines:  
  `"{Model} {FuelAmount} {FuelConsumption}"`
- Then multiple commands until `"End"`:  
  `Drive {Model} {Distance}`

If the car has enough fuel to drive the distance, update its fuel and distance traveled. Otherwise, print:  
`"Insufficient fuel for the drive"`

After all commands, print each car in the format:  
`"{Model} {FuelAmount} {TraveledDistance}"` with fuel formatted to two decimals.

---

### 📝 Task 11: Raw Data  
**Problem Description:**  
Create a `Car` class that contains nested classes for `Engine` and `Cargo`.

Each car has attributes:  
`"{Model} {EngineSpeed} {EnginePower} {CargoWeight} {CargoType}"`

After adding all cars, read a command:

- `"fragile"` — print all cars with cargo type fragile and cargo weight less than 1000  
- `"flamable"` — print all cars with cargo type flamable and engine power greater than 250

Output the selected cars preserving their original order.

---

### 📝 Task 12: Shopping Spree  
**Problem Description:**  
Implement two classes: `Person` and `Product`.

- `Person` includes: name, money, and a list of bought products  
- `Product` includes: name and price

**Input:**  
- First line: people in format `"John=50;Peter=100"`  
- Second line: products in format `"Bread=10;Milk=5"`  
- Then commands: `"{person} buys {product}"`

If the person does not have enough money, print:  
`"{Person} can't afford {Product}"`

At the end, print each person’s purchases or:  
`"{Name} – Nothing bought"`

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
