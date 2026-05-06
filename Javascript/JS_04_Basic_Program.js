// 3. Simple Function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Hello, Alice!
// 4. If-Else Condition
let number = 10;
if (number > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}
// 5. For Loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1, 2, 3, 4, 5
// 6. Array & Loop
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 7. Simple Calculator
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
console.log(add(5, 3));      // 8
console.log(subtract(5, 3)); // 2
// 8. Object Example
let person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person.name); // John