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
let num: number = 1234_564_5646
let num1: bigint = 123456789n;
console.log(num);
console.log(num1);

let character: string = 'Vinit';
const isAvailable: boolean = true
let user;
console.log(user);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  Object
let obj: object = {
  'fullname': 'Vinit Gite',
  'age': 23,
}
// let obj: {'fullname': string, 'age': number} = {
//   'fullname': 'Vinit Gite',
//   'age': 23,
// }

obj = { ...obj, 'phone': 9373508774 }
console.log(obj);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  any type
let numVal: any
numVal = 1
numVal = 'Vinit'

function testAnyType (val: any) {
  console.log(val);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  Array
let numArray: number[] = [1,2,3,4]
let charArray: string[] = ['Vinit', 'Gite']
let val: undefined = undefined;
let val1: null = null
let valArr: [number, string] = [1, "a"];

// charArray.forEach(v => v.includes('Vinit'))
// numArray.forEach(v => v.toFixed(2))

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Tuple
let arr: [number, string] = [1, 'b'];
let cord: [number, number, number] = [1, 2, 3] // x, y, z axis

// localhost:4200?name=VinitGite&phone=9373508774
let userData: [string, number] = ['VinitGite', 9373508774]
let response: [number, string] = [200, 'success'] // http response

//  drawback of tuple in TS = don't use this
response.push(0)
console.log(response);

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// enum
enum Color {
  // APP_NAME = 'my_app_name',
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

console.log(Color.Blue);
// console.log(Color.APP_NAME);

let color: Color = Color.Green
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
  Large
}


const size: Size = Size.Large
console.log(`Size ${size}`);

// --------------------------------------------------------------------------------------------------------------------------------------------------







