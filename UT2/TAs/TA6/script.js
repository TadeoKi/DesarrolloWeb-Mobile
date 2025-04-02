function convertToCelsius(temp){
    let tempToCelsius = (temp - 32)*5/9;
    let redondeoCelsius = tempToCelsius.toFixed(2);
    console.log(redondeoCelsius);
}

function convertToFahrenheit(temp){
    let tempToFahrenheit = (temp*9/5)+32;
    let redondeoFahrenheit = tempToFahrenheit.toFixed(2);
    console.log(redondeoFahrenheit);
}
/*
convertToCelsius(78);
convertToFahrenheit(20);
*/