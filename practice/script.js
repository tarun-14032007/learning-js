/*let firstEl = document.querySelector("p");
let allEl = document.querySelectorAll("p");

console.log(firstEl);
console.log(allEl);
*/

let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";


document.querySelector("body").prepend(newBtn);
