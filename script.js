// select the elements from the page
var btn = document.getElementById('btn');
var msg = document.getElementById('msg');
var user = document.getElementById('user');
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var phone = document.getElementById('phone');
var country = document.getElementById('country');

// submit form function
btn.onclick = function() {
  //remove all previous messages
  msg.innerHTML = '';
  msg.style.color = 'red';
  // rule- username must be over 5 characters
  var name = user.value;
  if (name.length < 5) {
    msg.innerHTML =
      'The supplied username is too short, try again using 5 or more characters';
  }
  // rule- password must be over 6 characters
  if (pass1.value.length < 6 || pass1.value.length === 0) {
    msg.innerHTML =
    '<br>The supplied password is too short or empty, try again using 6 or more characters';
  }
  // rule- Make sure both passwords are the same
  if (pass1.value !== pass2.value) {
    msg.innerHTML += '<br>The supplied passwords do NOT match!';
  }
  // rule- Validate Country
  if (country.value.toUpperCase() !== 'ISRAEL' && country.value.toUpperCase() !== 'USA') {
    msg.innerHTML += '<br>Country can be only Israel or USA';
  }
  // rule- phone number must be less than 15 characters
  if (phone.value.length > 15 || phone.value.length === 0) {
    msg.innerHTML +=
    '<br>The supplied phone number is too long or empty, try again using less than 15 characters';
  }

  // If all inputs are valid
  if (!msg.textContent) {
    msg.innerHTML = '';
    msg.innerHTML = 'Thank you ' + name + '!';
    msg.style.color = 'green';
  }
};


