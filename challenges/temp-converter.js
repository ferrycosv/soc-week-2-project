console.log('tempConverter script has loaded');

// write this function!
function tempConverter(temperature, degrees) {
  if (!isNaN(temperature)) {
    if (degrees === 'fahrenheit') {
      return (temperature*9/5)+32;    
    } else if (degrees === 'celsius') {
      return (temperature-32)*5/9;
    } else {
      return `${degrees} is not supported`;
    } 
  } else {
    return 'Please enter a valid temperature number';
  }
}

// if the user wants to convert to fahrenheit
console.assert(tempConverter(53, 'fahrenheit') === 127.4, 'first');
console.assert(tempConverter(0, 'fahrenheit') === 32, 'second');
console.assert(tempConverter(-40, 'fahrenheit') === -40, 'third');

// if the user wants to convert to celsius
console.assert(tempConverter(32, 'celsius') === 0, 'fourth');
console.assert(tempConverter(140, 'celsius') === 60, 'fifth');
console.assert(tempConverter(14, 'celsius') === -10, 'sixth');

// if the user inputs an invalid degree
console.assert(tempConverter(34, 'toad') === 'toad is not supported', 'seventh');
console.assert(tempConverter(2.5, '') === ' is not supported', 'eighth');
console.assert(tempConverter(500, 'Fahrenheit') === 'Fahrenheit is not supported', 'ninth');


function tempConverterHandler() {
  // prompt the user for a noun, verb and adjective
  const userTempStr = prompt('enter a temperature to convert');
  // cast userDegreesStr to a Number, and assign the value to userDecrees
  const userDegrees = prompt('would you like to convert to fahrenheit or celsius?');
  const userTemp = parseFloat(userTempStr);
  console.assert(typeof userTemp === 'number', "don't forget to cast userDegrees to a string!");

  // perform core logic
  // write this line!
  const result = tempConverter(userTemp, userDegrees);
  // alert result for the user
  // write this line!
  alert(result);
  // log action for the developer
  console.log('\n--- tempConverter ---');
  console.log('userTemp:', '(' + typeof userTemp + '),', userTemp);
  console.log('userDegrees:', '(' + typeof userDegrees + '),', userDegrees);
  console.log('result:', '(' + typeof result + '),', result);
}

document.getElementById('temp-converter-button').addEventListener('click', tempConverterHandler);
