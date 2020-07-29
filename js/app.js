let alertMessage = document.getElementById('alert');
let user = document.getElementById('user');
let message = document.getElementById('message');
let send = document.getElementById('send');

alertMessage.innerHTML =
`<div>
  <p><strong>Alert!</strong> How an alert message in this box</p>
  <p class="close-button">x</p>
</div>`

alertMessage.addEventListener('click', (e) => {
  if(e.target.classList.contains("close-button")) {
    alertMessage.style.display = "none";
  }
});

send.addEventListener('click', () => {
  if(user.value === "" && message.value === "") {
    alert("Please select a user and enter a message before sending");
  } else if (user.value === "") {
    alert("Please select a user before sending");
  } else if (message.value === "") {
    alert("Please add a message before sending");
  } else {
    alert("Your message has been sent!");
  }
});