function convert() {
    const input = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelect").value;

    if (isNaN(input)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    let result;

 switch (unit) {
     case "celsius":
    result = `${input} &deg;C is equal to ${((input * 9/5) + 32).toFixed(2)} &deg;F and ${(input + 273.15).toFixed(2)} K`;
            break;
    case "fahrenheit":
    result = `${input} &deg;F is equal to ${((input - 32) * 5/9).toFixed(2)} &deg;C and ${((input - 32) * 5/9 + 273.15).toFixed(2)} K`;
            break;
    case "kelvin":
    result = `${input} K is equal to ${(input - 273.15).toFixed(2)} &deg;C and ${((input - 273.15) * 9/5 + 32).toFixed(2)} &deg;F`;
            break;
    }

    document.getElementById("result").innerHTML = result;
}

// Initialize the inputs
convert();
