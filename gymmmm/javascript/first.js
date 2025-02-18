console.log("hello");
document.getElementById('calculate-bmi-btn').addEventListener('click', function() {
  // Prompt user to enter weight in kg
  var weight = parseFloat(prompt('Enter your weight in kilograms (kg):'));

  // Prompt user to enter height in meters
  var height = parseFloat(prompt('Enter your height in meters (m):'));

  // Check if weight and height are valid numbers
  if (isNaN(weight) || isNaN(height)) {
      alert('Please enter valid numbers for weight and height.');
      return; // Exit the function if invalid input
  }

  // Calculate BMI
  var bmi = weight / (height * height);

  // Display the calculated BMI
  alert('Your BMI is: ' + bmi.toFixed(2));
});
