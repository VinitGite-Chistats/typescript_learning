//  keyof Operator = The keyof operator in TypeScript is used to derive new types from an existing object type's keys. It is a TypeScript construct commonly used as a building block in generating advanced types from a source object type.

interface Person12 {
    name: string;
    age: number;
    email: string;
}

type PersonKeys = keyof Person12
let keys: PersonKeys = 'email'
console.log(keys);
