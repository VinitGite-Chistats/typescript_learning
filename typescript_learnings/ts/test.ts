let a1 = 1;
a1 = 10;

function add1(a: number, b: number): number {
  return a + b; // No type checking
}

const result = add1(1, 2);
console.log(result);
