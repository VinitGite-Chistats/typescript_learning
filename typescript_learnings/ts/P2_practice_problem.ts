// Q.1. Create a bank account class: Write a bankAccount class with the following properties
/*
    accountNumbers: string,
    balance: number (private)
    
    The class should have some methods
    deposit(amount: number): void = (to add the amount into balance)
    withDraw(amount: number): void = (to subtract the amount from balance)
    getBalance(): number = (to return current balance)
*/
/*
class Bank {
  accountNumber: number;
  private balance: number;

  constructor(accountNumber: number, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number): void {
    console.log(
      `The amount (${amount} Rs.) has been deposited successfully to account number ${
        this.accountNumber
      }. The current balance is ${this.balance + amount} Rs.`
    );
    this.balance = this.balance + amount;
  }

  withDraw(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      throw new Error(`Insufficient balance to withdraw`);
    } else {
      console.log(
        `The amount (${amount} Rs.) has been withdraw successfully from account number ${
          this.accountNumber
        }. The current balance is ${this.balance - amount}`
      );
      this.balance = this.balance - amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const userDetails = new Bank(111222333, 4000);
console.log(userDetails.getBalance());
userDetails.deposit(5000);
userDetails.withDraw(9000);
console.log(userDetails.getBalance());

*/

// Q.2. Create an Employee class with inheritance
/*
    Define an employee class with properties name and salary
    Create a subclass manager that adds a department property
    Both classes should have a getDetails method that returns a string with the employee's details    
*/

class Employee {
  //  Readonly property = It does not allow to change the data in class (except for constructor)
  readonly greetings: string = 'hi'
  constructor(public name: string, public salary: number) {
    this.greetings = "Vinit"; // It will allow
  }
  getDetails(): string {
    // this.greetings = "Vinit"; // error 
    return `Employees ${this.name}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, public department: string) {
    super(name, salary);
  }

  // getDetails(): string {
  //     return `Manager: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
  // }
}

const emp = new Employee("Vinit", 50000);
const mgr = new Manager("Shiv", 60000, "IT");

console.log(emp.getDetails());
console.log(mgr.getDetails());
