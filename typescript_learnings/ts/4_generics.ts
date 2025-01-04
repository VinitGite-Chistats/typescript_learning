// Generics = Generics are a way to create components (functions, classes and interfaces) that work with different types without
// losing type safety.

//  Using generics for functions
function genericIdentity<T>(arg: T): T {
  return arg;
}

console.log(genericIdentity<number>(10));
console.log(genericIdentity<string>("Hii"));
console.log(genericIdentity<boolean>(true));

// Using generics for interfaces
interface keyPair<T, U> {
  key: T;
  value: U;
}

let keyPairValue: keyPair<string, number> = {
  key: "pair",
  value: 10,
};

// --------------------------------------------------------------------------------------------------------------------------------------------------
// Generic constraints = Generic Constraints are used to specify limits to the types that can be used with generic type parameters.

function getLength1<T extends {length: number}>(item: T): number {
    return item.length
}

console.log(getLength1('Hello'));
console.log(getLength1([1, 2, 3]));
// console.log(getLength1(123));


// Generic Classes
class Box<T> {
    contents: T

    constructor(value: T) {
        this.contents = value
    }

    getContent(): T {
        return this.contents
    }
}

const numberBox = new Box(100)
console.log(numberBox.getContent());
const stringBox = new Box('Hello')
console.log(stringBox.getContent());

class Stack<T>{
    items: T[] = []

    push(item: T): void {
        this.items.push(item)
    }
    pop(): T | undefined {
        return this.items.pop()
    }
    getStack(): T[]{
        return this.items
    }
}

const numberStack = new Stack<number>()
numberStack.push(10)
numberStack.push(20)
console.log(numberStack.getStack());
console.log(numberStack.pop());
console.log(numberStack.getStack());


