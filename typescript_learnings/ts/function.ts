//  Functions

//  Regular functions
function addNumbers(a: number, b: number): number {
    return a + b
}
console.log(addNumbers(2, 6));

//  function expression
const divide = function (a: number, b: number): number {
    return a / b
}
console.log(divide(8, 2));

//  Arrow function
const multiply = (a: number, b: number): number => {return a * b};
console.log(multiply(8, 2));

//  optional parameter
function greet(username: string, greeting?: string): string {
    return `${greeting} ${username}`;
}

// default parameter
console.log(greet('Vinit'));
function greet1(username: string, greeting: string = 'Hii'): string {
    return `${greeting} ${username}`;
}

console.log(greet1('Vinit'));

//  function overloading
function getLength(value: string): number;
function getLength(value: any): number;
function getLength(value: any): number {
    return value.length
}

console.log(getLength('Vinit'));
console.log(getLength([1, 2, 3]));

//  Rest parameters
const sum = (...numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0)
}

console.log(sum(1, 2, 3, 4));

const greet2 = (greetings: string, ...names: string[]): void => {
    names.forEach((names) => {
        console.log(`${greetings}: ${names}`);
    })
}

console.log(greet2('Hello', 'Vinit', 'Varun', 'Rohit', 'Sujay'));

    






