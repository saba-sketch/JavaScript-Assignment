
//Assignment1

// Variable and Concatenation
// Q1: Write a program that asks the user for their first and last name. - Combine both names and display "Your full name is: [Full Name]".    

let firstName = prompt("Enter your first name:")
let lastName = prompt("Enter your last name:")
let fullName = firstName + " " + lastName
alert("Your full name is: " + fullName)                             
console.log("Your full name is: " + fullName)

// Q2: Write a program that asks the user for their first name, last name, and age.- Display a message like: "Hello [first name] [last name], you are [age] years old!"

let firstName1 = prompt("Enter your first name")
let lastName1 = prompt("Enter your last name")
let age = prompt("Enter your age")
console.log("Hello" + firstName1 + lastName1 + "you are" + age + "years old!")

// 2. Handling Ambiguity in Math Expressions
// Q3: Consider the following math expression:   let result = 5 + 2 * 3;  - Predict what the result will be and write it down. - Modify the expression by using parentheses to change the order of operations so that addition happens first.
// - Display both results in the console.

let result1 = 5 + 2 * 3
let result2 = (5 + 2) * 3
console.log("without parenthesis:" + result1)
console.log("with parenthesis:" + result2)


// Q4: Given the expression below: let result = 10 / 2 + 4 * 3 - 5; - Predict the result. - Modify it using parentheses to change the order of operations.
// - Display both results in the console.


let result3 = 10 / 2 + 4 * 3 - 5 
let result4 = 10 / (2 + 4) * (3 - 5)
console.log("without parentheses: " + result1)
console.log("with parentheses: " + result2)

// 3. If-Else-Else If
// Q5: Write a program that asks the user to enter a number.- If the number is greater than 0, display "Positive Number".- If the number is less than 0, display "Negative Number".- If the number is 0, display "Zero".

let num = prompt("Enter a number:")
if (num > 0) {
    console.log("Positive Number")
} else if (num < 0) {
    console.log("Negative Number")
} else {
    console.log("Zero")
}


// Q6: Write a program that asks the user to enter their age. - If the age is below 13, display "You are a child."  - If the age is between 13 and 19, display "You are a teenager." 
// - If the age is 20 or above, display "You are an adult."

let age3 = prompt("Enter your age:")
if (age3 < 13) {
    console.log("You are a child.")
} else if (age3 >= 13 && age3 <= 19) {
    console.log("You are a teenager.")
} else {
    console.log("You are an adult.")
}

// Q7: Write a program that asks the user to enter a number. - If the number is even, display "The number is even."  - If the number is odd, display "The number is odd."

let num1 = prompt("Enter a number:")
if (num1%2 == 0) {
    console.log("even")
} 
 else {
    console.log("odd")
}


// Q8: Write a program that asks the user to enter a number. - If the number is divisible by both 3 and 5, display "Divisible by both 3 and 5".
//  - If the number is only divisible by 3, display "Divisible by 3".  - If the number is only divisible by 5, display "Divisible by 5".  - If the number is divisible by neither, display "Divisible by neither".

let num2 = prompt("Enter a number:")
if (num2 % 3 === 0 && num2 % 5 === 0) {
    console.log("Divisible by both 3 and 5")
} else if (num2 % 3 === 0) {
    console.log("Divisible by 3")
} else if (num2 % 5 === 0) {
    console.log("Divisible by 5")
} else {
    console.log("Divisible by neither")
}




//Assignment2

// 1. Nested If
// Write a JavaScript program that:
// 1. Asks the user for their age.
// 2. Uses nested if-else to check: - If they are 18 or older, check further: - If they have a driving license, show 'You can drive.'   - Otherwise, show 'You need a license to drive.'   - If they are younger than 18, show 'You are too young to drive.'

let age4 = prompt("Enter your age:")
if (age4 >= 18) {
    let hasLiscense = prompt("do you havs a Liscense?")
    if (hasLiscense === "yes")
         {
        console.log("You can drive.")
    } 
    else 
    {
        console.log("You need a license to drive.")
    }}
     else {
    console.log("You are too young to drive.")
}


// 2. Mathematical Operations (Nested If-Else)
// Write a JavaScript program that:
// 1. Asks the user to enter two numbers using prompt().
// 2. Asks the user to enter a mathematical operator (+, -, *, /).
// 3. Uses nested if-else statements to perform the corresponding mathematical operation:  - If the operator is '+', add the numbers.   - If the operator is '-', subtract the numbers.  - If the operator is '*', multiply the numbers.  - If the operator is '/', check further:    - If the second number is 0, display 'Error: Division by zero is not allowed.'
// (Input: num1 = 20, num2 = 0, operator =   Output: 'Error: Division by zero is not allowed.')   - Otherwise, perform the division and show the result.
// Bonus 4. If the user enters an invalid operator, display 'Invalid operator! Please enter +, -, *, or /.'

let num3 = prompt("Enter the first number:")
let num4 = prompt("Enter the second number:")
let operator = prompt("Enter a mathematical operator (+, -, *, /):")

if (operator === "+") {
    console.log("Result:" + num3 + num4)
} else if (operator === "-") {
    console.log("Result:" + num3 - num4)
} else if (operator === "*") {
    console.log("Result:" + num3 * num4)
} else if (operator === "/") {
    if (num4 === 0) {
        console.log("Error: Division by zero is not allowed.")
    } else {
        console.log("Result:" + num3 / num4)
    }
} else {
    console.log("Invalid operator! Please enter +, -, *, or /.")
}


// 3. Array Declaration & Access
// Write a JavaScript program that:  1. Declares an array with five different colors.  2. Asks the user for an index number (0-4).  3. Displays the color present at that index.

let colors6 = ["Red", "Blue", "Green", "Yellow", "Purple"]
let index1 = prompt("Enter an index number (0-4):")
if (index1 >= 0 && index1 < colors.length) {
    console.log("The color at index" + index1 + "is:" + colors6[index1])
} else {
    console.log("Invalid index! Please enter a number between 0 and 4.")
}


// 4)Array Operations (Push & Pop)
// 1) Create an array with the values [1, 2, 3, 4]. -Use push() to add the number 5 at the end of the array. -Use pop() to remove the last element. -Print the array after each step.

let numbers = [1, 2, 3, 4]
console.log("Initial array:" + numbers)
numbers.push(5)
console.log("After push(5):" + numbers)
numbers.pop()
console.log("After pop():" + numbers)

// 2) Start with an empty array [].
// -Use push() to add the numbers 10, 20, and 30 to the array one by one.
// -Then use pop() to remove the last element from the array.
// -Print the array after each push() and pop().

let arr = []
console.log("Initial array:" + arr)
arr.push(10)
console.log("After push(10):" + arr)
arr.push(20)
console.log("After push(20):" + arr)
arr.push(30)
console.log("After push(30):" + arr)
arr.pop()
console.log("After pop():" + arr)

// 3) Write a JavaScript program that:
// -. Creates an empty array called cart.
// - Asks the user if they want to add or remove an item using prompt().
//    - If they enter "add", ask for an item name and add it using push().
//    - If they enter 'remove', remove the last item using pop().
// -Display the updated cart using console.log(cart).

let cart = []
let action = prompt("Do you want to add or remove an item?")
if (action === "add") {
    let item = prompt("Enter the item name:")
    cart.push(item)
    console.log(item + "added to cart.")
} else if (action === "remove") {
    if (cart.length > 0) {
        let removedItem = cart.pop()
        console.log(removedItem + "removed from cart.")
    } else {
        console.log("The cart is already empty.")
    }
} else {
    console.log("Please enter 'add' or 'remove'.")
}


// JavaScript Questions- Arrays and Loops
//  Chapter 15: Arrays [Use index number]
//  1. Q1:Declare anarray named`fruits` and display the third fruit.
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]
console.log("Third fruit:" + fruits[2])

//  2. Q2:Define an array of cities and display the first and last city.
let cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]
console.log("First city:" + cities[0])
console.log("Last city:" + cities[4])

//  3. Q3:Declare an array with mixed data types and display each element.
let mixedArray = ["Hello", 42, true, [1, 2, 3]]
console.log("Mixed data types:")
for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i])
}


//  Chapter 16: Adding and Removing Elements in Arrays
//  4. Q1:Declare an empty array and add five student names.
let students = []
students.push("Ali", "Ahmed", "Sara", "Ayesha", "Hassan")
console.log("Students:" + students)

//  5. Q2: Declare an array of colors. Use `push()` to add two colors at the end of an array
let colors = ["Red", "Blue", "Green"]
colors.push("Yellow", "Purple")
console.log("added colors:" + colors)

//  6. Q3:Declare an array with five numbers and add a new number at the end.
let num5 = [10, 20, 30, 40, 50]
numbers.push(60)
console.log("added numbers:" + num5)

//  7. Q4:Use`pop()` to remove the last element from an array
let items = ["Pen", "Book", "Laptop", "Mouse", "Phone"]
items.pop()
console.log("After pop:" + items)


// Chapter 17: Removing, Inserting, and Extracting Elements
// 8. Q1:Declare anarray named`animals ` Use `unshift()` to add an animal at the start of an
// array.
let animals = ["Dog", "Cat", "Elephant"]
animals.unshift("Lion")
console.log("animals:" + animals)

// 9. Q2:Use`shift()` to remove the first element of an array.
let fruits1 = ["Mango", "Apple", "Banana", "Grapes"]
fruits.shift()
console.log(fruits1)

// 10. Q3: Copy the first three elements from an array of sports into a new array. [Use slice
// method]
let sports = ["Cricket", "Football", "Tennis", "Hockey", "Basketball"]
let selectedSports = sports.slice(0, 3)
console.log(selectedSports)

// 11. Q4: Use `slice()` to extract and copy the last three elements of an array.hint(use negative
// index)
let cities1 = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"]
let lastThreeCities = cities1.slice(-3)
console.log(lastThreeCities)

// 12. Q5: Use `splice()` to remove two elements from index 2 in an array.
let numbers2 = [10, 20, 30, 40, 50]
console.log(numbers2.splice(2, 2))
console.log(numbers2)

// 13. Q6: Use `splice()` to add two cities at index 3 of an array.
let cities2 = ["Karachi", "Lahore", "Islamabad", "Kamra"]
cities2.splice(3, 0, "Peshawar", "Multan")
console.log(cities2)

// 14. Q7: Use `slice()` to extract and copy the last three elements of an array.
let colors3= ["Red", "Blue", "Green", "Yellow", "Purple"]
let lastThreeColors = colors3.slice(2)
console.log(lastThreeColors)

// 15. Q8: Use `splice()` to replace two elements in an array.
let gadgets = ["Mobile", "TV", "Camera", "Watch"]
gadgets.splice(1, 2, "Laptop", "Tablet")
console.log(gadgets)

// 16. Q9: Remove a subject from an subject array using `splice()` after taking index number
// from user
let subjects = ["Math", "Physics", "Chemistry", "Biology", "English"]
let index = parseInt(prompt("Enter the index of the subject to remove:"))
if (index >= 0 && index < subjects.length) {
    subjects.splice(index, 1)
    console.log(subjects)
} else {
    console.log("Invalid index! Please enter a valid index.")
}

// 17. Q10: Insert 'Laptop' and 'Tablet' at index 2 in an array of gadgets. [Use splice method]
let gadgets1 = ["Mobile", "TV", "Camera", "Watch"]
gadgets1.splice(2, 0, "Laptop", "Tablet")
console.log(gadgets1)


// Chapter 18: For Loops
// 18. Q1: Print numbers 1 to 10using aloop.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
// 19. Q2: Display subjects stored in an array using a loop.
let subjects3 = ["Math", "Physics", "Chemistry", "Biology", "English"]
for (let i = 0; i < subjects3.length; i++) {
    console.log(subjects3[i])
}

// 20. Q3: Print the multiplication table of 5 using a loop.
for (let i = 1; i <= 10; i++) {
    console.log("5" + "x" + i + "=" + 5 * i)
}

// 21. Q4: Countdownfrom10to1usingaloop.
for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// 22. Q5: Take five colors as user input, store them in an array, and display in the console.
let colors4 = []
for (let i = 0; i < 5; i++) {
    let color = prompt("Enter color" )
    colors4.push(color)
}
console.log(colors4)


// 23. Q6:Declare an array of five numbers and display each number in the console. [ for loop]
let numbers6 = [10, 20, 30, 40, 50]
for (let i = 0; i < numbers6.length; i++) {
    console.log(numbers6[i])
}

// 24. Q7: Declare an array of five numbers and calculate their sum. Formula(sum += i)
let numbers7 = [5, 10, 15, 20, 25]
let sum = 0
for (let i = 0; i < numbers7.length; i++) {
    sum += numbers7[i]
}
console.log(sum)

// bonus
// 25. Q8: Find the largest number in an array
let numbers5 = [15, 42, 89, 7, 56]
let largest = numbers5[0]

for (let i = 1; i < numbers5.length; i++) {
    if (numbers5[i] > largest) {
        largest = numbers5[i]
    }
}
console.log(largest)
