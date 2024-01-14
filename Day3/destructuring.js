
// const person = {
//     firstName : "john",
//     lastName : "doe",
//     age : 25,
// }

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

//  Object Destructuring;

// const {firstName, lastName, age} = person;
// console.log(firstName, age);

// change variable name;

// const { firstName: fname, age } = person;

// console.log(fname, age);

// Array destructuring

// const fruits = ["Apple", "Mango", "grapes"];

// const fruit1 = fruits[0];
// const fruit2 = fruits[1];
// const fruit3 = fruits[2];

// console.log(fruit1, fruit2, fruit3);

// const [fruit1, fruit2, fruit3] = fruits;

// console.log(fruit1, fruit2, fruit3);

// skip indexes

// const [fruit1, , fruit3] = fruits;

// console.log(fruit1, fruit3);


// function myFunc(properties) {
//   const { firstName, lastName, age } = properties;
//   console.log(firstName, lastName, age);
// }

// function myFunc({ firstName, lastName, age }) {
//   console.log(firstName, lastName, age);
// }

// myFunc({
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// });

// const bigObject = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 25,
//     gender: "male",
//     city: "Ambala",
//     state: "Haryana",
//     country: "India",
//     pincode: "111111",
//     phone: "7878787878",
//   };
  
//   const { firstName, lastName, age } = bigObject;
  
//   const person = {
//     fName: firstName,
//     lName: lastName,
//     age: age,
//   };
  
//   shortcut
//   const person = {
//     firstName,
//     lastName,
//     age,
//     myOwnProp: "myOwnProp",
//     myOwnNestedObj: {
//       prop1: "prop1",
//     },
//   };
  
//   console.log(person);

