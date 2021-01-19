let formBtn = document.getElementById("form-btn");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

formBtn.addEventListener("click", () => {
  name.value = "";
  email.value = "";
  message.value = "";
  //   console.log("button clicked");
});
