function BMICALC() {
  let weightinput = prompt("Enter your wieght:");
  let heightinput = prompt("Enter your height:");

  let weight = parseFloat(weightinput);
  let height = parseFloat(heightinput);

  let heightcm = height / 100;
  let bmi = weight / (heightcm * heightcm);
  document.getElementById("result").innerHTML = ` Your BMI is :${bmi.toFixed(2)}`;
}
