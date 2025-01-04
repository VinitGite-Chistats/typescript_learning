// Q.1 Write a function to calculate the factorial of a number with proper type annotation
/*
const factorial = (a: number): number => {
    if (a === 0 || a === 1) return 1
    return a * factorial(a-1)
}
console.log(factorial(4));
*/

// Q.2. Define a function that accepts a user object (with name, age, and email) and returns the formatted string
/*
interface userInfo {
    name: string,
    age: number,
    email: string
}

const userData1 = (user: userInfo ): string => {
    return `hello ${user.name}, your age is ${user.age} and email is ${user.email}`
}

let userData2: userInfo = {
    name: 'Vinit',
    email: 'vinit@gmail.com',
    age: 23
}

console.log(userData1(userData2));
*/

// Q.3. Calculate Total Price: Write a function that calculate the total price of an array of product objects. Each products has price and quantity
/*
interface Product {
  product: number;
  quantity: number;
}

const totalPrice = (products: Product[]): number => {
  return products.reduce(
    (total, prod) => total + prod.product * prod.quantity,
    0
  );
};

let cart: Product[] = [
    {
        product: 100,
        quantity: 2
    },
    {
        product: 200,
        quantity: 1
    },
]

console.log(totalPrice(cart));
*/

// Q.4. Define a union type for a vehicle that can either be car or bike with different properties. Write a function to log details based on the vehicle type.
/*
type car1 = {
    type : 'car',
    company: string,
    modal: string,
    year: number
}

type bike = {
    type : 'bike',
    company: string,
    modal: string,
    cc: number,
    year: number
}

type vehicle = bike | car1

const getVehicleDetail = (vehicle: vehicle): void => {
    if (vehicle.type === 'car') {
        console.log(`It's a car of company ${vehicle.company} and the modal is ${vehicle.modal} and it's a ${vehicle.type} type. The car is purchased on ${vehicle.year}`);
    } else {
        console.log(`It's a bike of company ${vehicle.company} and the modal is ${vehicle.modal} and it has a cc of ${vehicle.cc}. The bike is purchased on ${vehicle.year}`); 
    }
}

const userBike: vehicle = {
    type: 'bike',
    company: 'Royal Enfield',
    modal: 'Meteor Stellar black',
    cc: 350,
    year: 2023
}
const userCar: vehicle = {
    type: 'car',
    company: 'Hyundai',
    modal: 'Creta',
    year: 2017
}

getVehicleDetail(userBike);
getVehicleDetail(userCar);
*/