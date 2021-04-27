const userInputs = document.querySelectorAll(".form-inputs");
console.log(userInputs);
const btnSubmit = document.querySelector("#submit");
const phoneNumber = document.querySelector("#phoneNumber");

const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// console.log(phoneNumber);

phoneNumber.addEventListener("keypress", function (e) {
  if (isNaN(e.key) || phoneNumber.value.length > 9) {
    e.preventDefault();
  } else if (phoneNumber.value.length <= 0) {
    if (e.key != 0) {
      e.preventDefault();
    }
  }
  //   console.log(phoneNumber);
});

btnSubmit.addEventListener("click", () => {
  //   alert("I am connected");
  let myFirstName = userInputs[0].value;
  let myLastName = userInputs[1].value;
  let phoneNum = userInputs[2].value;
  let emailValue = userInputs[3].value;

  if (myFirstName == "" || myLastName == "" || phoneNum == "" || emailValue == "") {
    alert("Fields can not be left empty");
  } else if (!emailValue.match(email)) {
    alert("Please provide a valid email");
  } else {
      alert("First Name: " + myFirstName + "\n" + "Last Name: " + myLastName + "\n" + "Phone Number: " + phoneNum + "\n" + "Email: " + emailValue); 
  }
});

