// ─── getElementsByTagName ──────────────────────────────────────────────────────────
// const tagList = document.getElementsByTagName('h1');
// for (const love of tagList) {
//     love.style.color = "blue";
// }

// ─── getElementByClassName ──────────────────────────────────────────────────────────

// const classList = document.getElementsByClassName('test');
// for (const value of classList) {
//     value.style.color = "magenta";
//     value.style.textAlign = "center";
// }

// ─── getElementById ──────────────────────────────────────────────────────────


// const myHeading = document.getElementById('heading');
// myHeading.style.textAlign = "center";
// myHeading.style.color = "blue";
// console.log(myHeading.innerText);

// document.getElementById('heading').style.color = "red";
// document.getElementById('heading').style.textAlign = "center";
// document.getElementById('heading').style.marginTop = "300PX";

// const myElement = document.getElementById('first-heading');
// myElement.style.color = "blue";

// ─── querySelector & querySelectorAll ──────────────────────────────────────────────────────────
// const myElement = document.querySelectorAll('.test');
// for (const element of myElement) {
//     console.log(element.innerText);
// }

// const myElement = document.querySelector('#first-heading');
// ─── First Way To Add Class Name ─────────────────────────────────────────────
// myElement.className = "boltu";
// ─── Second Way To Add Class Name ─────────────────────────────────────────────
// myElement.classList.add("montu");
// const myClass = document.getElementsByClassName('montu');
// for (const value of myClass) {
//     value.style.textAlign = 'center';
//     value.style.fontSize = '50px';
//     value.style.backgroundColor = 'black';
// }

const parentContainer = document.getElementById('container-details');
const li = document.createElement('li');
li.innerText = 'Forth';
parentContainer.appendChild(li);
console.log(li);

// Add (element Section, div, heading etc.) On parent
// const container = document.getElementById('container');
// const div = document.createElement('div');
// const h1 = document.createElement('h1');
// h1.innerText = 'This is a new heading';
// h1.style.color = 'blue';
// h1.style.textAlign = 'center';
// const p = document.createElement('p');
// p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
// p.style.textAlign = 'center';
// div.appendChild(h1);
// div.appendChild(p);
// container.appendChild(div);

// ─── setAttribute ────────────────────────────────────────────────────────────
document.getElementById('attribute').setAttribute('class', 'myClass');
document.getElementById('attribute').setAttribute('value', 'myValue');
const myAttribute = document.getElementById('attribute').getAttribute('value');
// console.log(myAttribute);

const compare = document.getElementById('inner');
console.log(compare.textContent);