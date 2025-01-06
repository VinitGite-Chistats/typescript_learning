//  Type guards = Type Guarding is the term where you influence the code flow analysis via code. TypeScript uses existing JavaScript behavior which validates your objects at runtime to influence the code flow.

// typeof
function printID(id: string | number) {
  if (typeof id === "string") {
    console.log(`id is string: ${id}`);
  } else {
    console.log(`id is number: ${id}`);
  }
}

// instanceOf
class Dog1 {
  bark() {
    console.log("Woof!");
  }
}

class Cat1 {
    cat() {
      console.log('Meow!');
  }
}

function handlePet(pet: Dog1 | Cat1) {
    if (pet instanceof Dog1) {
        pet.bark()
    } else {
        pet.cat()
    }
}

// custom type guard = Custom type guards are often used when dealing with data coming from the outside world. This is particularly useful when the TypeScript compiler can't determine the exact type of the data but you, as a developer, have more knowledge about its structure and types.
interface Fish {
    swim(): void
}

interface Bird{
    fly(): void
}

function isFish(pet: Fish | Bird): pet is Fish  {
    return (pet as Fish).swim !== undefined
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet.swim()
    } else {
        pet.fly()
    }
}

const isString = (val: any): val is string => {
    return typeof val === 'string';
}

const checkType = (val: string | number) => {
    if (isString(val)) {
        console.log('Value is String');
    } else {
        console.log('Value is number');
    }
}

checkType('Hii')
checkType(10)