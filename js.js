let buttons = document.getElementById("tinh");

buttons.addEventListener("click", () => {
  let weight = +document.getElementById("weight").value;
  let height = +document.getElementById("height").value;
  if (height > 3) {
    height /= 100;
  }
  let bmi = weight / Math.pow(height, 2);
  if (bmi < 18.5) alert("Underweight");
  else if (bmi < 25) alert("Normal");
  else if (bmi < 30) alert("Overweight");
  else alert("Obese");
  console.log(bmi.toFixed(1));
});
