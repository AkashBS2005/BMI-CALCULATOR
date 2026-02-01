function BMICALC() {
  let weightinput = prompt("Enter your wieght in kg:");
  let heightinput = prompt("Enter your height in cm:");

  let weight = parseFloat(weightinput);
  let height = parseFloat(heightinput);

  let heightcm = height / 100;
  let bmi = weight / (heightcm * heightcm);
  document.getElementById("result").innerHTML = ` Your BMI is :${bmi.toFixed(2)}`;
  document.getElementById("para").innerHTML =
    `Body Mass Index (BMI) is a standard measurement used to evaluate whether a person has a healthy body weight based on their height. It provides a simple numeric value that helps identify potential weight-related health problems.`;

  }
 
