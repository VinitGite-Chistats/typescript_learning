//  Utility types = Utility types are a set of generic types provided by TypeScript that perform certain operations on types. They are part of the TypeScript type system that helps in constructing new types based on existing ones, often to modify properties or extract information from them.

interface UserRecord{
    name: string;
    age: number;
    email: string
}

// Partial utility type = In this case all properties are not required even if we pass empty data it also get accepted.
const updateUser = (user: Partial<UserRecord>) => {
    console.log(user);
}

updateUser({name: 'Vinit'})
updateUser({ email: 'Vinit@gmail.com' })

type User13 = Partial<UserRecord>
let user13: User13 = {
    name: 'Varun'
}

//  Required utility type = In this case all properties are required

type User14 = Required<UserRecord>;
let user14: User14 = {
    name: "Varun",
    email: 'vinit@gmail.com',
    age: 24
};
user14.age = 19

//  Readonly utility type
type User15 = Readonly<UserRecord>;
let user15: User15 = {
  name: "Varun",
  email: "vinit@gmail.com",
  age: 24,
};

// user15.age = 19 // error

//  Pick utility type = Pick<Type, Keys> is a TypeScript utility type that constructs a new type by picking the specific properties from an existing type. It's great for taking large types and distilling them down into smaller, more focused types.

type UserInfo = Pick<UserRecord, 'name' | 'email'>
const userInfo: UserInfo = {
    name: 'Vinit',
    email: 'vinitgite@gmail.com', 
}

// Omit utility type

type UserWithOutEmail = Omit<UserRecord, 'email'>
const userOmitInfo: UserWithOutEmail = {
  name: "Vinit",
//   email: "vinitgite@gmail.com",
  age: 10
};

// Record
type UserWithRecord = Record<string, number>;
const userRecordInfo: UserWithRecord = {
//   name: "Vinit",
  //   email: "vinitgite@gmail.com",
    age: 10,
    email: 2,
    // age: 30
};

type Role = 'admin' | 'user' | 'guest'

const userRoles: Record<Role, string> = {
    admin: 'Diya',
    user: 'Prem',
    guest: 'Sujal'
}

console.log(userRoles.admin);
