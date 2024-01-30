//Reference types
//Arrays
//Objects
//Function

//1. Arrays

//Create using[]
//you can pass anything in array: string, int, array, function;
// let myArray = ["1", 2, [1,2,3], "ram" ];

// Access values
// console.log(myArray[2]);
// console.log(myArray[3][2]);

// console.log(myArray[5]); //undefined

//calculate length
// console.log(myArray.length);
// const lastIndex = myArray.length;
// console.log(lastIndex);


// let fruits = ["apple", "mango", "grapes"];
// const poppedItem = fruits.pop(); // remove from end

// const popped_item = fruits.shift(); // remove form begning

// fruits.push("blueberry"); // add to end
// console.log(popped_item, poppedItem);

// fruits.unshift("blueberry"); // add to begning
 

//push and Pop //Stack
// o(1)

// last in first out

//shift and unshift // queue --> push(o(1)), shift(o(n));
//o(n)

// linked list --> queue ds(shift(o(1)))

//first in first our // queue

// console.log(fruits)



//2. OBJECTS


// array -->ordered collection
//object --> key: value pairs/ unordered
//object --> ref types

const person = {
    firstName : "JOhn",
    lastName  : "doe",
    age : 25,
    "new property" : "unique val"
};
//console.log(person);

// Access properties

//1. dot notation
//console.log(person.firstName);
//console.log(person.new property); // error

//2. bracket notation
//console.log(person["lastName"]);
//console.log(person["new property"])

//check if property exists
// console.log("adresss" in person);

// person.firstName = "jane";
// // person.gender = "female"
// person["gender"] = "female"

// console.log(person);








