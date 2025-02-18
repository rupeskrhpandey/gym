// Get the modal
var modal = document.getElementById("bmi-modal");

// Get the button that opens the modal
var btn = document.getElementById("calculate-bmi-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Calculate BMI
document.getElementById("calculate").onclick = function() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    var bmi = weight / (height * height);
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
