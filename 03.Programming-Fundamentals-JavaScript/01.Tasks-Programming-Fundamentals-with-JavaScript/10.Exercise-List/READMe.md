# 🧑‍💻 List - Exercise – Programming Fundamentals with JavaScript

This folder contains tasks from the **List - Exercise** section of the _Programming Fundamentals with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below is a summary of the tasks with brief descriptions.

---

## 🔧 Tasks Overview

### 📝 Task 1: Train  
Simulate a passenger train where each wagon has a limited capacity. Process commands to either add new wagons or fit passengers into existing ones, starting from the first wagon with available space.

**Commands:**  
- `Add {passengers}` – add a new wagon with the specified passengers  
- `{passengers}` – fit the passengers into the first wagon that can accommodate them  

---

### 📝 Task 2: Change List  
You have a list of integers. Modify it with these commands:  
- `Delete {element}` – remove all occurrences of the given element  
- `Insert {element} {position}` – insert the element at the specified index  
The program ends when the command `"end"` is received.

---

### 📝 Task 3: House Party  
Track guests attending a party. Print error messages if a guest tries to come twice or leave without being on the list.

Output examples:  
- `{name} is going!`  
- `{name} is not going!`

---

### 📝 Task 4: List Operations  
Perform operations on a list with commands like:  
- `Add {number}`, `Insert {number} {index}`, `Remove {number}`, `Shift left {count}`, `Shift right {count}`  
If an index is invalid, print `"Invalid index"`.

---

### 📝 Task 5: Bomb Numbers  
Given a list of numbers, a special "bomb" number, and its "power":  
For each occurrence of the bomb number, remove it along with `power` numbers to its left and right. Print the sum of the remaining numbers.

---

### 📝 Task 6: Cards Game  
Simulate a two-player card game where each player has a deck.  
Compare the top cards from each deck:  
- The player with the higher card takes both cards and puts them at the bottom of their deck.  
- If cards are equal, both are discarded.  
The game ends when one player runs out of cards.

---

### 📝 Task 7: Append Arrays  
You will receive input strings like:  
`1 2 3 |4 5 6 | 7 8`  
Append arrays from **right to left** and flatten them into a single list.

---

### 📝 Task 8: Anonymous Threat  
Simulate a virus that manipulates a list of strings with commands:  
- `merge {startIndex} {endIndex}` – concatenate all strings in the given range  
- `divide {index} {partitions}` – split the string at the given index into equal parts  
Input ends with `"3:1"`.

---

### 📝 Task 9: Pokemon Don’t Go  
Simulate catching pokemons by removing elements from a list by index.  
Adjust remaining elements:  
- If removed value is greater or equal, subtract it from each remaining element.  
- Otherwise, add it to each remaining element.  
Handle out-of-range indexes as described.

---

### 📝 Task 10: SoftUni Course Planning  
Manage a course schedule with commands:  
- `Add {lessonTitle}`  
- `Insert {lessonTitle} {index}`  
- `Remove {lessonTitle}`  
- `Swap {lessonTitle1} {lessonTitle2}`  
- `Exercise {lessonTitle}` – add an exercise to the lesson  
End input with `"course start"` and print the final schedule with numbering.

---

### 📝 Task 11: Messaging  
Given a list of numbers and a string, extract a hidden message by:  
- Summing the digits of each number to get an index  
- Using the index to pick characters from the string  
- Removing used characters from the string after each pick

---

### 📝 Task 12: Car Race  
Two racers start from opposite ends of a list of track segments.  
- If a segment is `0`, the racer’s time for that segment is reduced by 20%.  
Print the winner and their total time formatted to two decimal places.

---

### 📝 Task 13: Take/Skip Rope  
Decrypt a message by:  
- Extracting all digits and letters separately from the input  
- Using digits to create `take` and `skip` lists  
- Taking and skipping letters accordingly to build the decrypted message

---

### 📝 Task 14: Mixed Up Lists  
Given two lists, mix them by taking one element from the start of the first list and one from the end of the second list alternately.  
Use the remaining two elements to define a range and filter the mixed list within this range.  
Print the filtered list sorted.

---

### 📝 Task 15: Drum Set  
Simulate a drummer's practice with a drum set.  
- Drums wear out by the power of hits.  
- When a drum breaks, it is replaced if the drummer has enough money.  
Print the final state of the drum set and the money left.

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
