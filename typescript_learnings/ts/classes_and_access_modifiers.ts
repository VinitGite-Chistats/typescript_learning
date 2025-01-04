//  Class
class UserData3 {
  fname: string;
  age: number;

  // This helps to initialize the properties that are defined in class
  constructor(fname: string, age: number) {
    this.fname = fname;
    this.age = age;
  }

  greetings(): string {
    return `Hello my name is ${this.fname} and my age is ${this.age}`;
  }
}

const new_user = new UserData3('Vinit', 23);
console.log(new_user.fname);
console.log(new_user.greetings());

// ----------------------------------------------------------------------------------------------------------------------------------------------------
// Access modifiers (public, private, protected)
/*
1. public: Accessible from anywhere. This is the default if no modifiers is specified.
2. private: Accessible only with in the class.
3. protected: Accessible with the class and its subclasses
*/


class Car1 {
    make: string;
    private modal: string;
    protected year: number

    constructor(make: string, modal:string, year: number) {
        this.make = make;
        this.modal = modal;
        this.year = year;
    }

    getModal(): string {
        return this.modal
    }
}

const newCar = new Car1('Tesla', 'Modal 10', 2024)

console.log(newCar.getModal());
// console.log(newCar);


// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  Inheritance = This will help to use existing class properties with other class properties using extends
class Animal { // parent
    constructor(public name: string) {
        
    }

    makeSound(): void{
        console.log('Some generic sound...');
    }
}

class Dog extends Animal { // child class
    constructor(name: string) {
      super(name); // The super keyword is used to access properties on an object literal
    }

    // makeSound(): void {
    //     console.log('Woof! woof!');
    // }
}

const dog = new Dog('puppy');
dog.makeSound();
// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  Abstract class = Abstract classes are base classes from which other classes may be derived.

abstract class Shape {
    abstract getArea(): number; // Abstract method, must be implemented by subclasses

    printArea(): void {
        console.log(`The area is ${this.getArea()}`);
        
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    getArea(): number {
        return this.width * this.height
    }
}

const rect = new Rectangle(5, 10)
rect.printArea()

// ----------------------------------------------------------------------------------------------------------------------------------------------------
//  setters and getters = A getter method returns the value of the property's value. A getter is also called an accessor. A setter method updates the property's value. A setter is also known as a mutator.

class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius
    }

    get radius(): number {
        return this._radius
    }

    set radius(value: number) {
        if (value <= 0) {
            throw new Error('Radius must be positive')
        }

        this._radius = value
    }
}

const circle = new Circle(10)
console.log(circle.radius); // get method is called
circle.radius = 30 // set method
console.log(circle.radius);
circle.radius = -5 // error will be thrown
console.log(circle.radius);


