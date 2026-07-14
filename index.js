let sentence = "I love coding every day.";

let start = sentence.indexOf("coding"); //7

let word = sentence.slice(start, start + 6);

word = word.toUpperCase();

let message = sentence.slice(0, 7) + word + "!";

console.log(message);