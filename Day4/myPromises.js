

//Promises --> future value;

// Promises ---> future value

// 3 states

// Pending
// Fullfiled
// or
// Reject

// Fried Rice

// const kitchenStuff = ["vegetables", "salt", "water", "rice"]

// const friedRicePromise = new Promise((resolve, reject) => {
//   const isMaterialForFriedRiceAvailable = false;
//   if (isMaterialForFriedRiceAvailable) {
//     resolve("Fried Rice...");
//   } else {
//     reject("Could not fullfiled");
//   }
// });

function friedRicePromise() {
  return new Promise((resolve, reject) => {
    const isMaterialForFriedRiceAvailable = true;
    if (isMaterialForFriedRiceAvailable) {
      resolve("resolved !!! , Fried Rice...");
    } else {
      reject("Could not fullfiled");
    }
  });
}

export default friedRicePromise;

// consume a promise
// console.log(friedRicePromise);