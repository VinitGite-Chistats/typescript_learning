// Index signature = An index signature in Typescript is used to define types for objects that can have properties of dynamic keys, where the keys are not known in advanced but you still want to enforce the type of the values. Index signature are particularly useful when working with objects that act like dictionaries or maps. 

interface stringArray {
    [index: number]: string
}

let array1: stringArray = ['hii', 'bye', 'tata']
console.log(array1[0]);

interface Fruit {
    [key: string]: string
}

const fruitArray: Fruit = {
    apple: 'A Fruit',
    banana: 'A yellow fruit',
}

console.log(fruitArray['banana']);

