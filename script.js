function BMICALC() {
  let weightinput = prompt("Enter your wieght in kg:");
  let heightinput = prompt("Enter your height in cm:");

  let weight = parseFloat(weightinput);
  let height = parseFloat(heightinput);

  let heightcm = height / 100;
  let bmi = weight / (heightcm * heightcm);
  document.getElementById("result").innerHTML = ` Your BMI is :${bmi.toFixed(2)}`;
  document.getElementById("para").innerHTML =
    `Body Mass Index (BMI) is a simple numerical value used to assess whether a person’s body weight is appropriate for their height. It is calculated by dividing a person’s weight in kilograms by the square of their height in meters (kg/m²). BMI helps categorize individuals into underweight, normal weight, overweight, or obese groups. It is widely used as a basic health screening tool to identify potential risks related to being underweight or overweight, such as malnutrition, heart disease, diabetes, and other lifestyle-related conditions. Although BMI is easy to calculate and useful for large populations, it does not directly measure body fat and may not be fully accurate for athletes, children, or elderly individuals. Therefore, BMI is best used along with other health assessments.`;


if (bmi < 18.5) {
    document.getElementById("result1").innerHTML = `You are Underweight`;
      document.getElementById("result2").innerHTML =
        ` Tips: Eat nutrient-rich foods, increase calorie intake, and include strength training.`;
} else if (bmi >= 18.5 && bmi <= 24.9) {
   document.getElementById("result1").innerHTML =
     ` You are Normal - Healthy`;
} else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("result1").innerHTML =
      `You are Overweight`;
} else {
   document.getElementById("result1").innerHTML = ` Obese`;
}

  }
 
