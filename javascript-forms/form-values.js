var contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var messageData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };
  console.log('messageData', messageData);
  document.getElementById('contact-form').reset();
});
