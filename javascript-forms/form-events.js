function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('the blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.value);
}

var inputName = document.querySelector("input[name ='name']");
var inputEmail = document.querySelector("input[name='email']");
var textAreaMessage = document.querySelector("textarea[name='message']");

inputName.addEventListener('focus', handleFocus);
inputName.addEventListener('blur', handleBlur);
inputName.addEventListener('input', handleInput);

inputEmail.addEventListener('focus', handleFocus);
inputEmail.addEventListener('blur', handleBlur);
inputEmail.addEventListener('input', handleInput);

textAreaMessage.addEventListener('focus', handleFocus);
textAreaMessage.addEventListener('blur', handleBlur);
textAreaMessage.addEventListener('input', handleInput);
