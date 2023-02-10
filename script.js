const butten = document.querySelector(".send");
const age = document.getElementById("age-component");
const inputE = document.querySelector("#input-ticket");

butten.addEventListener("click", function () {
  const input = document.querySelector("#input-ticket").value;
  if (input < 6) {
    age.textContent = "Free entry";
  } else if (input <= 6) {
    age.textContent = "Price is 4.2$";
  } else if (input >= 16 && input <= 26) {
    age.textContent = "Price is  7.8$";
  } else if (input >= 27 && input <= 63) {
    age.textContent = "Price is 12$";
  } else if (input >= 64) {
    age.textContent = "Price is 6$";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  age.textContent = "";
  inputE.value = "";
});

inputE.addEventListener("change", function () {
  if (inputE.value < 0) {
    inputE.value = 0;
  }
});
