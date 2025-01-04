// let a1 = 1;
// a1 = 10;

// function add1(a: number, b: number): number {
//   return a + b; // No type checking
// }

// const result = add1(1, a1);
// console.log(result);

// a1 = result
// console.log(a1);

// --------------------------------------------------------------------------------------------------------------------------------------------------
//  Basic Types
let num: number = 1234_564_5646;
let num1: bigint = 123456789n;
console.log(num);
console.log(num1);

let character: string = "Vinit";
const isAvailable: boolean = true;
let user;
console.log(user);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  Object
let obj: object = {
  fullname: "Vinit Gite",
  age: 23,
};
// let obj: {'fullname': string, 'age': number} = {
//   'fullname': 'Vinit Gite',
//   'age': 23,
// }

obj = { ...obj, phone: 9373508774 };
console.log(obj);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  any type
let numVal: any;
numVal = 1;
numVal = "Vinit";

function testAnyType(val: any) {
  console.log(val);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  Array
let numArray: number[] = [1, 2, 3, 4];
let charArray: string[] = ["Vinit", "Gite"];
let val: undefined = undefined;
let val1: null = null;
let valArr: [number, string] = [1, "a"];

// charArray.forEach(v => v.includes('Vinit'))
// numArray.forEach(v => v.toFixed(2))

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Tuple
let arr: [number, string] = [1, "b"];
let cord: [number, number, number] = [1, 2, 3]; // x, y, z axis

// localhost:4200?name=VinitGite&phone=9373508774
let userData: [string, number] = ["VinitGite", 9373508774];
let response: [number, string] = [200, "success"]; // http response

//  drawback of tuple in TS = don't use this
response.push(0);
console.log(response);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// enum
enum Color {
  // APP_NAME = 'my_app_name',
  Red = "red",
  Green = "green",
  Blue = "blue",
}

console.log(Color.Blue);
// console.log(Color.APP_NAME);

let color: Color = Color.Green;
console.log(color);

// const Small = 1
// const Medium = 2
// const Large = 3

// const size = Medium

//  enum Size {
//   Small = 1,
//   Medium,
//   Large
// }

const enum Size {
  Small = 1,
  Medium,
  Large,
}

const size: Size = Size.Large;
console.log(`Size ${size}`);

// --------------------------------------------------------------------------------------------------------------------------------------------------
//  Unknown type
const notSure: unknown = "a";

if (typeof notSure === "number") {
  notSure.toFixed(2);
} else if (typeof notSure === "string") {
  notSure.length;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------
//  Never type
function infiniteLoop(): never {
  while (true) {
    console.log("1");
  }
}

// infiniteLoop()

function throwError(message: string): never {
  throw new Error(message);
}

// throwError('Something went wrong')

// --------------------------------------------------------------------------------------------------------------------------------------------------
//  void type

function logMessage(message: string): void {
  console.log(message);
  // return undefined
}

logMessage("This is the testing message");

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Type inference and type assertions
//  Type inference
let username = "Nikhil"; // Type infers the type as string

// Type assertions
let value: any = "Hello World";
// let strLength: number = value.length
let strLength: number = (value as string).length;
console.log(strLength);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Union Types
let id: string | number; // Id can either be string or a number
id = "abc";
id = 1;

function printID(id: string | number) {
  console.log(`id: ${id}`);
}

// printID('abc')
// printID(101)

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Type narrowing
function printIDFn(id: string | number) {
  if (typeof id === "string") {
    console.log(`id is a string: ${id.toUpperCase()}`);
  } else {
    console.log(`id is a number: ${id}`);
  }
}

printIDFn("abc");
printIDFn(101);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Interface = Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have. 

interface Person {
  name: String;
  age: number;
  greet(): void;
}

// let person: { name: string, age: number } = {
//   name: 'Vinit',
//   age: 23
// }
let person: Person = {
  name: "Vinit",
  age: 23,
  greet() {
    console.log("hi");
  },
};

person.greet();

interface MathOp {
  (a: number, b: number): number;
}

const add: MathOp = (x, y) => x + y;
const sub: MathOp = (x, y) => x - y;

console.log(`Add two number: ${add(5, 4)}`);
console.log(`Subtract two number: ${sub(5, 4)}`);

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Type alias = TypeScript type aliases improve code readability and maintainability by providing custom names for types.

// type AliasName = TypeDefinition
type UserID = string;
let userID: UserID = "abc";

type Person1 = {
  name: string;
  age: number;
};

let person1: Person1 = {
  name: "Vinit",
  age: 12,
};

console.log(person1.name);

//  Advanced
type ID = string | number;
let userID1 = "abc";
let orderID = 101;

//  Interface vs. Type alias
interface User {
  name: string;
  phone?: number;
}
type Vehicle = {
  name: string;
  model?: string; // with optional property
};

//  Using one interface to another another interface
// Interface we can duplicate the properties
//  ex.
// interface User{
//   location: String
// }

// let myCustomer: Customer = {
//   name: "x",
//   phone: 20,
//   address: "abc",
//   location: "Pune",
// };

interface Customer extends User {
  address: string;
}

let myCustomer: Customer = {
  name: "x",
  phone: 20,
  address: "abc",
};

//  Using types in one another
// In Types we can't duplicate it
//  & -> intersection types
type Car = Vehicle & {
  isElectric: boolean;
};

let myCar: Car = {
  name: "Toyota",
  model: "Etios Liva",
  isElectric: true,
};

type MathOp1 = {
  (a: number, b: number): number;
};

let add1: MathOp1 = (x, y) => x + y;
console.log(`Using Type math function ${add1(1, 3)}`);

// Main use of Type = When union intersection
type Status = "active" | "inactive" | "pending";
let userStatus: Status = "active";

type Tree = {
  value: string;
  children?: Tree[];
};

let tree: Tree = {
  value: "root",
  children: [
    {
      value: "root",
      children: [{ value: "grandChild", children: [] }],
    },
  ],
};

// Intersection Types
let config: {
  server: string;
  port: number;
} & {
  secure: boolean;
  timeout: number;
} = {
  server: "localhost",
  port: 8000,
  secure: true,
  timeout: 5000,
};

// --------------------------------------------------------------------------------------------------------------------------------------------------


