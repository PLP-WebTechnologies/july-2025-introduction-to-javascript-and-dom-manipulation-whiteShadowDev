// ----------------------------------------
//  Part 1: JavaScript Basics
// ----------------------------------------

// Variable declarations and conditionals
let userName = "Alex";
let age = 20;

let message;

if (age >= 18) {
  message = `Hello, ${userName}. You are eligible to vote.`;
} else {
  message = `Sorry, ${userName}. You must be 18+ to vote.`;
}

document.getElementById("basic-output").textContent = message;

// ----------------------------------------
//  Part 2: Functions
// ----------------------------------------

// Function 1: Show greeting
function showGreeting() {
  const name = prompt("What is your name?");
  const greeting = `Nice to meet you, ${name}!`;
  document.getElementById("greeting").textContent = greeting;
}

// Function 2: Calculate total
function calculateTotal(a, b) {
  const total = a + b;
  document.getElementById("total-output").textContent = `Total is: ${total}`;
}

// ----------------------------------------
//  Part 3: Loops
// ----------------------------------------

// Loop 1: Iterate through array
function listFruits() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const list = document.getElementById("fruit-list");
  list.innerHTML = ""; // Clear old list

  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// Loop 2: Countdown using for loop
function countDown() {
  const output = document.getElementById("countdown-output");
  output.innerHTML = ""; // Clear old output

  for (let i = 5; i > 0; i--) {
    const p = document.createElement("p");
    p.textContent = i;
    output.appendChild(p);
  }

  const done = document.createElement("p");
  done.textContent = "Done!";
  output.appendChild(done);
}

// ----------------------------------------
//  Part 4: DOM Manipulation
// ----------------------------------------

// DOM interaction 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// DOM interaction 2 & 3: Toggle text visibility
document.getElementById("toggleTextBtn").addEventListener("click", () => {
  const text = document.getElementById("toggle-text");
  text.style.display = text.style.display === "none" ? "block" : "none";
});
