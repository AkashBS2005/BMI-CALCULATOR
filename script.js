function BMICALC() {
  let weightinput = prompt("Enter your wieght in kg:");
  let heightinput = prompt("Enter your height in cm:");

  let weight = parseFloat(weightinput);
  let height = parseFloat(heightinput);

  let heightcm = height / 100;
  let bmi = weight / (heightcm * heightcm);
  document.getElementById("para").innerHTML =
    ``;


if (bmi >=1 && bmi<=18.5) {
  document.getElementById("result").innerHTML =
    ` Your BMI is :${bmi.toFixed(2)}`;
    document.getElementById("result1").innerHTML = `You are Underweight`;
      document.getElementById("result2").innerHTML =
        ` Tips: Eat nutrient-rich foods, increase calorie intake, and include strength training.`;
} else if (bmi >= 18.6 && bmi <= 24.9) {
  document.getElementById("result").innerHTML =
    ` Your BMI is :${bmi.toFixed(2)}`;
   document.getElementById("result1").innerHTML =
     ` You are Normal - Healthy`;
       document.getElementById("result2").innerHTML =
         `Tips: Maintain a balanced diet, exercise regularly, stay hydrated, and get enough sleep. `;
} else if (bmi >= 25 && bmi <= 29.9) {
  document.getElementById("result").innerHTML =
    ` Your BMI is :${bmi.toFixed(2)}`;
    document.getElementById("result1").innerHTML =
      `You are Overweight`;
      document.getElementById("result2").innerHTML =
        `Tips: Reduce junk food, exercise daily, control portion sizes, and stay active. `;
} else if (bmi>=30 && bmi<=99.9){
  document.getElementById("result").innerHTML =
    ` Your BMI is :${bmi.toFixed(2)}`;
   document.getElementById("result1").innerHTML = ` Obese`;
   document.getElementById("result2").innerHTML =
     ` Tips: Follow a healthy diet plan, do regular physical activity, avoid sugary foods, and consult a doctor.`;
}
else{
  document.getElementById("result1").innerHTML='';
}

  }
 
