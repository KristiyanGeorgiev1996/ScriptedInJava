# Regular Expressions - Exercise – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Regular Expressions - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

---

### 📝 Task 1: Furniture  
**Problem Statement:**  
Create a program to calculate the total cost of various furniture items.  
You will receive input lines until you get the command `"Purchase"`.

A valid line has the format:  
`>>{furniture name}<<{price}!{quantity}`

- The price can be an integer or a floating-point number.
- Store the furniture names and keep track of the total spent.

At the end, print:  
`Bought furniture:`
`{furniture name 1}`
`{furniture name 2}`
`...`
`Total money spend: {total amount}`

*(The total amount should be formatted to two decimal places)*

---

### 📝 Task 2: Race  
**Problem Statement:**  
Write a program to track a race.

- First line: participants’ names separated by `", "`.
- Next lines: strings containing mixed characters (e.g. `"G!32e%o7r#32g$235@!2e"`).
- Extract letters to form the racer’s name and sum all digits to get distance.
- Add the distance only if the racer is in the participants list.

At the end, print the top three racers:  
`1st place: {name}`
`2nd place: {name}`
`3rd place: {name}`


---

### 📝 Task 3: SoftUni Bar Income  
**Problem Statement:**  
Process input lines representing customer orders until `"end of shift"`.

Valid orders have the format:  
`%CustomerName%<Product>|Quantity|Price$`

- Customer name starts with a capital letter followed by lowercase letters.
- Product is enclosed in `< >`.
- Quantity is an integer enclosed in `| |`.
- Price is a number ending with `$`.

Only process valid orders.

Print each order:  
`{customerName}: {product} - {totalPrice}`

At the end, print total income:  
`Total income: {income}`  
*(rounded to 2 decimal places)*

---

### 📝 Task 4: Star Enigma  
**Problem Statement:**  
Decrypt messages using a STAR letter count shift.

- Count all letters `s, t, a, r` (case-insensitive) in the message.
- Subtract this count from the ASCII value of each character to get decrypted message.

Valid decrypted messages contain:  
- `@planet`  
- `:population`  
- `!attackType!` (either `"A"` for attacked or `"D"` for destroyed)  
- `->soldierCount`

Input:  
- First line: number of messages  
- Next n lines: encrypted messages

Output:  
`Attacked planets: {count}`
`-> {planetName}`
`Destroyed planets: {count}`
`-> {planetName}`

Planets should be printed in alphabetical order.

---

### 📝 Task 5: Nether Realms  
**Problem Statement:**  
For each demon name (from a comma-separated list):

- Calculate health by summing the ASCII values of all characters except digits, `+`, `-`, `*`, `/`, `.`  
- Calculate damage by summing all numbers (including signed), then apply multiplication and division operators in order.

Print each demon with:  
`{demon name} - {health} health, {damage} damage`

Sort demons alphabetically.

---

### 📝 Task 6: Extract Emails  
**Problem Statement:**  
Extract valid emails from a text line.

Valid emails format: `<user>@<host>`

- User: letters and digits, may contain `.`, `-`, `_` in between.
- Host: two or more words made of letters (and optional `-`), separated by dots.

Examples of valid emails:  
- info@softuni-bulgaria.org  
- kiki@hotmail.co.uk  
- no-reply@github.com

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
