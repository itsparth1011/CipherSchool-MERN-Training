// wait till promise resolve / reject

// promises --> pending , fullfulled / reject
// import friedRicePromise from "./myPromises.js";
const friedRicePromise = require("./myPromises.js");

async function handlePromise() {
  try {
    const promiseResult = await friedRicePromise();
    console.log(promiseResult);
    return "something";
  } catch (error) {
    console.log("inside catch");
    console.log(error);
  }
}

// handlePromise();


// what this async function returns ?

async function oneMoreFunc() {
  const result = await handlePromise();
  console.log(result);
}
oneMoreFunc();

// handlePromise().then((val) => console.log(val));
