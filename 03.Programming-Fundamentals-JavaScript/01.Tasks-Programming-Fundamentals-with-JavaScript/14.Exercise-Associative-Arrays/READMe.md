# Associative Arrays - Exercise – Programming Fundamentals with JavaScript 🧑💻

This folder contains tasks from the **Associative Arrays - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview:

---

### 📝 Task 1: Count Chars in a String  
**Problem Description:**  
Write a program that counts the occurrences of each character in a string, ignoring spaces.

**Output Format:**  
`"{char} -> {occurrences}"`

---

### 📝 Task 2: A Miner Task  
**Problem Description:**  
Read input lines where odd lines are resource names and even lines are their quantities. Aggregate total quantities per resource.

**Output Format:**  
`"{resource} -> {quantity}"`

---

### 📝 Task 3: Orders  
**Problem Description:**  
Track product orders by name, price, and quantity. Update the product’s price and accumulate quantity if it appears again.

**Input Format:**  
Lines of `"{productName} {price} {quantity}"` until `"buy"` is received.

**Output Format:**  
`"{productName} -> {totalPrice}"`  
*Total price formatted to two decimals.*

---

### 📝 Task 4: SoftUni Parking  
**Problem Description:**  
Implement a parking registration system with commands to register and unregister users with license plates.

**Commands:**
- `"register {username} {licensePlateNumber}"`
- `"unregister {username}"`

**Final Output:**  
Print all registered users as:  
`"{username} => {licensePlateNumber}"`

---

### 📝 Task 5: Courses  
**Problem Description:**  
Collect students for different courses until `"end"` command is given.

**Input Format:**  
`"{courseName} : {studentName}"`

**Output Format:**
- `"{courseName}: {registeredStudents}"`
- `"-- {studentName}"` for each student

---

### 📝 Task 6: Student Academy  
**Problem Description:**  
Read students’ names and grades, calculate their average grades, and print those with average ≥ 4.50.

**Output Format:**  
`"{name} -> {averageGrade}"`  
*Average grade formatted to two decimals.*

---

### 📝 Task 7: Company Users  
**Problem Description:**  
Store company names and their employee IDs, ensuring no duplicates.

**Input Format:**  
`"{companyName} -> {employeeId}"` until `"End"`

**Output Format:**
- `"{companyName}"`
- `"-- {employeeId}"` for each employee

---

### 📝 Task 8: Ranking  
**Problem Description:**  
Manage contests with passwords and user submissions. Track points and identify the best candidate.

**Input:**
- Contests and passwords in format `"{contest}:{password}"` until `"end of contests"`
- Submissions in format `"{contest}=>{password}=>{username}=>{points}"` until `"end of submissions"`

**Output Format:**
- `"Best candidate is {username} with total {totalPoints} points."`
- Then print all participants and their points per contest.

---

### 📝 Task 9: Judge  
**Problem Description:**  
Keep contest rankings by participants and points, and also print individual total standings.

**Input Format:**  
`"{username} -> {contest} -> {points}"` until `"no more time"`

**Output Format:**
- `"{contest}: {participantCount} participants"`
- Listing participants in order with points:  
`"{position}. {username} <::> {points}"`
- Then individual standings:  
`"Individual standings:"`  
`"{position}. {username} -> {totalPoints}"`

---

### 📝 Task 10: MOBA Challenger  
**Problem Description:**  
Track players, their positions, and skills. Simulate battles, update skills, and remove players if needed.

**Input Format:**
- `"{player} -> {position} -> {skill}"`
- `"{player} vs {player}"`
- End input with `"Season end"`

**Output Format:**
- For each player:  
`"{player}: {totalSkill} skill"`
- For each position:  
`"- {position} <::> {skill}"`

---

### 📝 Task 11: Snowwhite  
**Problem Description:**  
Store dwarfs identified by name and hat color, keeping only the highest physics value per unique dwarf.

**Input Format:**  
`"{dwarfName} <:> {hatColor} <:> {dwarfPhysics}"` until `"Once upon a time"`

**Output Format:**  
`"({hatColor}) {dwarfName} <-> {physics}"`

---

### 📝 Task 12: Dragon Army  
**Problem Description:**  
Manage dragons by type, name, and stats. Replace stats if a dragon with the same name and type appears.

**Input Format:**  
`"{type} {name} {damage} {health} {armor}"`  
*If any stat is `"null"`, replace it with default values:*  
- damage = 45  
- health = 250  
- armor = 10

**Output Format:**
- For each dragon type:  
`"{Type}::({avgDamage}/{avgHealth}/{avgArmor})"`
- For each dragon:  
`"-{Name} -> damage: {damage}, health: {health}, armor: {armor}"`

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
