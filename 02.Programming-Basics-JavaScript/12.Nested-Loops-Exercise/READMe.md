# Nested Loops - Exercise – Programming Basics with JavaScript 🧑‍💻

This folder contains tasks from the **Nested Loops - Exercise** section of the _Programming Basics with C#_ course at SoftUni. The original tasks were part of the C# curriculum, but here they are reimplemented in JavaScript as a way to practice and master the language. Below are the tasks with brief descriptions.

## 🔧 Tasks Overview

### 📝 Task 1: Number Pyramid  
**Description:**  
Create a program that takes an integer n as input and prints a pyramid of numbers. Each line starts at 1 and counts up to the line number, forming a number pyramid with n rows. Each row should be printed on a new line, as shown in the examples.

**Examples:**  
- Input: 7  
  Output:  
  1  
  1 2  
  1 2 3  
  1 2 3 4  
  1 2 3 4 5  
  1 2 3 4 5 6  
  1 2 3 4 5 6 7

- Input: 10  
  Output:  
  1  
  1 2  
  1 2 3  
  ...  
  1 2 3 4 5 6 7 8 9 10

---

### 📝 Task 2: Equal Sums of Even and Odd Positions  
**Description:**  
Write a program that reads two six-digit numbers between 100000 and 300000 (inclusive). The first number is always smaller than the second. Your program should print all numbers in this range where the sum of the digits in even positions equals the sum of the digits in odd positions. If no such numbers exist, print nothing.

---

### 📝 Task 3: Sum of Prime and Non-Prime Numbers  
**Description:**  
Develop a program that continuously reads integers until the command "stop" is received. It should calculate the sum of all prime numbers and the sum of all non-prime numbers separately. If a negative number is entered, print "Number is negative." and disregard that number (do not add it to any sum).

**Output:**  
- "Sum of all prime numbers is: {sum of prime numbers}"  
- "Sum of all non prime numbers is: {sum of non-prime numbers}"

---

### 📝 Task 4: Train the Trainers  
**Description:**  
The "Train the Trainers" course is coming to an end, and the jury needs to evaluate the presentations. Write a program that calculates the average grade for each presentation based on jury scores, and finally computes the overall average grade for all presentations.

**Input:**  
- First, read the number of jury members n (integer between 1 and 20).  
- Then, repeatedly read the presentation name.  
- For each presentation, read n grades (real numbers between 2.00 and 6.00).

When the input "Finish" is received instead of a presentation name, the program should print the final average grade across all presentations.

**Output:**  
- After each presentation: "{presentation name} - {average grade}."  
- At the end: "Student's final assessment is {final average grade}."

All grades should be formatted to two decimal places.

---

### 📝 Task 5: Special Numbers  
**Description:**  
Write a program that reads an integer N and finds all "special" numbers between 1111 and 9999. A number is considered special if N is evenly divisible by each of its digits.

**Example:**  
For N = 16, the number 2418 is special because 16 divides evenly by 2, 4, 1, and 8.

**Input:**  
One integer N in the range [1 … 600000].

**Output:**  
Print all special numbers separated by spaces.

---

### 📝 Task 6: Cinema Tickets  
**Description:**  
Write a program to track ticket sales for multiple movie screenings. For each screening, you will read the movie name, the number of free seats, and then the type of each ticket sold ("student", "standard", or "kid") until the hall is full or "End" is entered.

Your program should calculate and display the percentage of seats filled for each movie, as well as the overall statistics on ticket types sold after all movies are processed.

**Input:**  
- Movie name (string)  
- Number of free seats in the cinema hall (integer between 1 and 100)  
- For each ticket sold, the ticket type as a string  
- Input ends when "Finish" is entered instead of a movie name

**Output:**  
- After each movie: "{movie name} - {percentage filled}% full."  
- After all movies:  
  - "Total tickets: {total number of tickets sold}"  
  - "{percentage}% student tickets."  
  - "{percentage}% standard tickets."  
  - "{percentage}% kids tickets."

---

**Note:** The tasks are adapted from the SoftUni course and have been reformulated to present clearer and more illustrative descriptions of each exercise.
