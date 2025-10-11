# DOM and Events – Front-End Test Automation 🧑💻  

This folder contains exercises from the **DOM and Events** section of the _Front-End Test Automation_ course at SoftUni.  
All task descriptions have been rewritten for originality while preserving their educational intent and structure.  

---

## 🔧 Overview of Tasks  

### 📝 Task 1: Subtraction  
Create a function that calculates the difference between two numbers taken from input fields with IDs `"firstNumber"` and `"secondNumber"`.  
The result should be displayed in a `<div>` element with the ID `"result"`.  

**Requirements:**  
- Read the values from both input fields and convert them to numbers.  
- Subtract the second number from the first.  
- Display the result inside the `div#result` element.  
- Ensure it works correctly for any valid numeric input.  

---

### 📝 Task 2: Pascal or Camel Case  
Write a function that receives two strings as input.  
The first string contains words separated by spaces, and the second string specifies the desired case format — either `"Camel Case"` or `"Pascal Case"`.  

**Requirements:**  
- Convert the first string according to the specified format.  
- If the case type is invalid, display `"Error!"`.  
- The converted result should be displayed inside a `<span>` element.  

---

### 📝 Task 3: Accordion  
Build a simple accordion component that shows and hides extra content when a button is clicked.  

**Requirements:**  
- When the **[More]** button is clicked, reveal hidden content and change the button text to **[Less]**.  
- When clicked again, hide the content and revert the button label back to **[More]**.  
- The toggle functionality should work indefinitely.  

---

### 📝 Task 4: Search in List  
Implement a search function that highlights list items containing text from a search input field.  

**Requirements:**  
- Match items should be bolded and underlined.  
- Display the number of matches found in the format:  
  ```${matches} matches found```  
- Clear any previous search highlights before each new search.  

---

### 📝 Task 5: Sections  
You’ll receive an array of strings. For each string:  
- Create a `<div>` containing a `<p>` element with the text from the string.  
- Hide the paragraph by default (`display: none`).  
- Add a click event listener to each `<div>` to toggle the visibility of its paragraph.  
- Append all created `<div>` elements to the element with ID `"content"`.  

---

### 📝 Task 6: Time Converter  
Develop a time conversion tool that converts between days, hours, minutes, and seconds.  

**Requirements:**  
- Add event listeners to all **[Convert]** buttons.  
- When a button is clicked, read the input value and convert it to the other three time units.  
- Display all converted results in their corresponding input fields.  

---

### 📝 Task 7: Locked Profile  
Create a feature that allows showing or hiding additional user information, depending on whether a profile is locked or unlocked.  

**Requirements:**  
- Clicking **[Show more]** should reveal hidden content only if the profile is unlocked.  
- If a profile is locked, no action should be taken.  
- When the profile is locked again, **[Hide it]** should not function.  
- When unlocked, **[Hide it]** should toggle the content back to hidden.  

---

### 📝 Task 8: Fill Dropdown  
Create functionality that allows adding new `<option>` elements to a `<select>` dropdown menu.  

**Requirements:**  
- Read values from input fields with IDs `"newItemText"` and `"newItemValue"`.  
- Create a new `<option>` element using those values.  
- Append the new option to the `<select>` element with ID `"menu"`.  
- Clear both input fields after adding the option.  

---

### 📝 Task 9: Encode and Decode Messages  
Create two functionalities: one for encoding messages and another for decoding them.  

**Requirements:**  
- When **[Encode and send it]** is clicked, take the message from the first textarea and encode it by increasing each character’s ASCII code by 1.  
- Clear the sender’s textarea and place the encoded message into the receiver’s textarea.  
- When **[Decode and read it]** is clicked, decode the message by reversing the process (subtract 1 from each ASCII code) and display the readable message.  

---

### 📝 Task 10: Furniture  
You will receive furniture data as an array of objects, each containing a name, price, and decoration factor.  

**Requirements:**  
- When **[Generate]** is clicked, display each furniture item in a new table row, showing its image, name, price, and decoration factor.  
- When **[Buy]** is clicked, get all checked furniture and display:  
  - A list of bought items  
  - The total price (formatted to two decimal places)  
  - The average decoration factor  

**Example Input:**  
```json
[
  {
    "name": "Sofa",
    "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg",
    "price": 150,
    "decFactor": 1.2
  }
]
```

