var convertFahToCel = function (fahrenheit) {
  var celcius = (fahrenheit - 32) * 5 / 9;
  return celcius;
}

var celsiustemperature = convertFahToCel(75);

document.write(celsiustemperature);
