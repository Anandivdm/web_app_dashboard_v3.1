let alert = document.getElementById('alert');

alert.innerHTML =
`<div>
  <p><strong>Alert!</strong> How an alert message in this box</p>
  <p class="close-button">x</p>
</div>`

alert.addEventListener('click', (e) => {
  if(e.target.classList.contains("close-button")) {
    alert.style.display = "none";
  }
})