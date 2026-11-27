// TODO: Create a function called ‘multiply’ that will take in 3 parameter andmultiplyall 3 numbers together. Note: The argument passed must NOT be the same number
function multiply(a,b,c){
    return a * b* c
}
 console.log(multiply(2, 3, 4));
// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Donotuse a console.log() inside of the function***
const convertToSeconds = function(minutes){
    return minutes *60;
}
console.log(convertToSeconds(5));
// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32)* 5/9;
}
console.log(fahrenheitToCelsius(100));
// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. ***Do not use a console.log() inside of the function ***
function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("Javascript"));

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not useaconsole.log() inside of the function***
function countVowels(sentence) {
    let count = 0;

    for (let letter of sentence) {
        if ("aeiou".includes(letter.toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript"));

// TODO: Create a “isPrime” function that takes a number as a parameter andreturnstrue if the number is prime, and false otherwise. Make sure to test your codewith4numbers
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Test with 4 numbers
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(8));
console.log(isPrime(11));