const button = document.querySelector('button')!;

function handler(message: string) {
  console.log('Clicked: ' + message);
}


if (button) {
  button.addEventListener('click', handler.bind(null, 'sleepy'));
}