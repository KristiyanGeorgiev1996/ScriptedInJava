# 🎮 Rock - Paper - Scissors Game (JavaScript)

![Rock Paper Scissors](../Images/0_3oJdSb7B26rt3xjJ.png)

## 📋 Description

A JS console application that recreates the classic **Rock–Paper–Scissors** game.  
The player faces off against the computer by choosing between rock 🪨, paper 📄, or scissors ✂️.

---

## 📖 Game Rules

- 🪨 **Rock** crushes ✂️ **Scissors**
- ✂️ **Scissors** cut 📄 **Paper**
- 📄 **Paper** wraps 🪨 **Rock**

If both participants pick the same symbol, the round ends in a draw.

---

## 🎯 Features & Requirements

- **Flexible Input:** Player can type either a single character (`r`, `p`, `s`) or the full move name (`rock`, `paper`, `scissors`).
- **Random Opponent:** The computer’s choice is generated randomly each round.
- **Result Calculation:** The program determines the winner by comparing moves according to the rules.
- **Scoreboard:** Keeps track of total wins, losses, and draws throughout the session.
- **Replay Option:** After each round, the player can choose to continue or quit.
- **Input Validation:** If an invalid entry is made, the player is prompted again.
- **Visual Feedback:** Console colors indicate result — 🟢 win, 🔴 loss, 🟡 draw.
- **Continuous Play:** The game runs in a loop until the player opts to stop.

---

## 🛠 Core Components

- **Player Input Handler** – Reads and validates the player’s move.
- **Computer Move Generator** – Produces a random choice for the computer.
- **Winner Evaluator** – Compares both moves and decides the outcome.
- **Score Tracker** – Stores and updates game statistics.
- **User Interface** – Displays clear instructions and colored results.
- **Main Loop** – Keeps the game active until the user ends it.

---

## ▶️ How to Start

1. Download or clone the repository.  
2. Open the solution in Visual Studio or another C# IDE.  
3. Build and run the program.  
4. Follow the console prompts to play.

---

## 📂 Method Overview

- `GetPlayerMove()` → Reads and validates the player’s choice.  
- `GetComputerMove()` → Returns a random move for the computer.  
- `DetermineWinner(player, computer)` → Determines if it’s a win, loss, or draw.  
- `DisplayResult(result)` → Shows the outcome with corresponding color.  
- `PrintScore()` → Outputs the current score table.

---

## 🖥 Example Session
`==== Current Score ====`

`Player: 3`

`Computer: 2`

`Draws: 1`


`Enter your move [r]ock / [p]aper / [s]cissors: r`

`Computer chose: paper`

`You lose! 🔴`


`Play another round? (y/n): n`

`Thanks for playing!`

---

## 📜 License

This project is released under the **MIT License**.

