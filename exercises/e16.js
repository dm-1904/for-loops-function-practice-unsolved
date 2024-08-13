// const flatArraysData = [
//   ["Yay", "!", "this"],
//   ["works", "as", "expected", "!"],
// ];


// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

// careful with your pushing and storing/passing of the processed array.
// closure can help

 export function flatArrays(array) {
  // create a new flat array
   // iterate over the input array
   // if the ele is not an array, push
   // if the ele is an array, recurse
    let flattenArray = []

    for(let el of array) {
      if(el === typeof []){
        for(let innerEl of array){
          flattenArray.push(innerEl)
        }
      } else {
        flattenArray.push(el)
      }

    }
    return flattenArray

}

// flatArrays(flatArraysData)


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
