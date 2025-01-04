// Literal Type = Literal Types in TypeScript allow you to specify exact values for variables or properties. Unlike regular types that can represent a range of possible values, literal types restrict the value to a specific literal value, providing precise and self-documenting code.

//  String literal
type OrderStatus = "delivered" | "pending" | "cancelled";
let order: OrderStatus = "pending";
let answer: "yes" | "no";
answer = "no";

//  Number Literal
let count: 0 | 1 | 2;
count = 0;

//  Boolean Literal
let visible: true | false;
visible = true;

// Mixed Literal
type LiteralType = "hello" | 2 | "hi" | { name: string; age: number };
type Action = "add" | "update" | "delete";

function takeAction(action: Action) {
  switch (action) {
    case "add":
      console.log("Add function");
      break;
    case "update":
      console.log("Update function");
      break;
    case "delete":
      console.log("delete function");
      break;
    default:
      console.log("none");
      break;
  }
}

function printStatus(status: 'success' | 'error' | 'loading'): void {
    console.log(`Current status is ${status}`);
}

printStatus('success')

interface ButtonConfig {
    size: 'small' | 'medium' | 'large';
    color: 'red' | 'green' | 'blue'
}

const btn: ButtonConfig = {
    size: 'medium',
    color: 'green'
}