function validation() {
    var num = document.querySelector("#value");
    var value = parseInt(num.value); 
    var result = document.querySelector("#result");

    if (value >= 80 && value <= 100) {
        result.textContent = "GPA:A+";
    } else if (value >= 70 && value <= 79) {
        result.textContent = "GPA:A";
    } else if (value >= 60 && value <= 69) {
        result.textContent = "GPA:A-";
    } else if (value >= 50 && value <= 59) {
        result.textContent = "GPA:B";
    } else if (value >= 40 && value <= 49) {
        result.textContent = "GPA:C";
    } else if (value >= 33 && value <= 39) {
        result.textContent = "GPA:D";
    } else if (value >= 0 && value <= 32) {
        result.textContent = "GPA:F";
    } else {
        result.textContent = "Invalid input";
    }
}

