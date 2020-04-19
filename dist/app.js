"use strict";
const button = document.querySelector('button');
function handler(message) {
    console.log('Clicked: ' + message);
}
if (button) {
    button.addEventListener('click', handler.bind(null, 'sleepy'));
}
//# sourceMappingURL=app.js.map