let x = 10;

x += 5;
x *=2;

console.log(x);

function isEven(x) {
    if (x % 2 === 0) {
        return true 
    } else{
        return false
    }
}

console.log(isEven(10));
console.log(isEven(9));

let colors = ["red", "green", "blue"];

let newColors = colors.push("yellow");
let removeColors = colors.shift();

console.log(colors);

let sum = 0;
for (let i = 0; i <= 10; i++) {

    sum += i;
}

console.log(sum);


function gradeCheck(grade) {
    if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80 && grade <= 89) {
        return "B";
    } else if (grade >= 70 && grade <= 79) {
        return "C";
    } else {
        return "Fail";
    }
}

console.log(gradeCheck(98));
console.log(gradeCheck(85));
console.log(gradeCheck(78));
console.log(gradeCheck(69));

// Logical Operator

let a = true;
let b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);


let numbers = [2, 4, 6, 8, 10, 12];

// Double each value and filter out values greater than 10
let result = numbers
    .map(num => num * 2)      // Double each value
    .filter(num => num <= 10); // Keep values less than or equal to 10

// Print the final array
console.log(result);

// Outer loop for rows
for (let i = 1; i <= 3; i++) {
    // Inner loop for columns
    let row = ''; // Initialize an empty string for the row
    for (let j = 1; j <= 3; j++) {
        row += j + ' '; // Append each number in the row
    }
    console.log(row); // Print the row after the inner loop
}

function maskString(num) {
    // Convert the number to a string if it's not already
    num = num.toString();
    
    // Get the last 4 digits
    const lastFour = num.slice(-4);

    // Pad the rest of the string with '*' and return
    return lastFour.padStart(num.length, '*');
}

console.log(maskString(12398879)); // Expected output: "****8879"

const person = {
    name : "John",
    age : 25,
    isStudent : true,
}

console.log(person);

person.hobby = "reading";

console.log(person);







