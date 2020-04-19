"use strict";
function addtionalHandler(n1, n2, sum) {
    const result = n1 + n2;
    sum(result);
}
let combineValues;
let resultValues;
addtionalHandler(30000, 20, (result) => {
    console.log(result);
});
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', () => {
        console.log("clicked");
    });
}
const map = new Map();
