// Calculate BMI
document.getElementById("calculate").onclick = function() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  
  if (isNaN(weight) || isNaN(height)) {
      alert('Please enter valid numbers for weight and height.');
      return;
  }

  var bmi = weight / (height * height);

  // Determine if the person is healthy based on BMI
  var isHealthy = bmi >= 18.5 && bmi <= 24.9;

  // Redirect to result page with parameter indicating health status
  window.location.href = "bmi1.html?healthy=" + isHealthy;
}
