
// Declaration statements

let companyName = "CodeBytes";

function greet() {
    console.log("Hello, " + companyName);
}

greet();


// Expression statements

let result = 10 + 5;

console.log(result);


// Conditional statements

let age = 45;

if (age < 18) {
    console.log("You are too young to watch this movie.");
} else {
    console.log("We hope you enjoy this movie.");
}


// Loop statements

for (let i = 1; i <= 6; i++) {
    console.log("Attempt " + i);
}


// Error Handling statements

/*
function nonExistentFunction() {
    console.log("This function exists.");
}
*/

try {
    nonExistentFunction();
} catch(err) {
    console.log(err.message);
}




