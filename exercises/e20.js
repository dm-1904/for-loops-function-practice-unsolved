const classSeatsFlattened = [
  "Ben",
  "Emma",
  "Sophia",
  "William",
  "Elijah",
  "James",
  "Lucas",
  "Mason",
  "Mia",
  "Liam",
  "Noah",
  "Oliver",
  "Ethan",
  "Harper",
  "Evelyn",
];


// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

 function separateNamesWithAFromRest(array) {
  let arr1 = []
  let arr2 = []
  for(let i = 0; i < array.length; i++){
    let el = array[i]
    for(let j = 0; j < el.length; j++){
      let ele = el[j]
      if(ele === 'a'){
        arr1.push(el)
      } else {arr2.push(el)}
    }
  }
  console.log([arr1, arr2])
  // return [arr1, arr2]

}

// idk how to solve this without using .includes()

separateNamesWithAFromRest(classSeatsFlattened)


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
