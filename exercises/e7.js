// const bankAccounts = [
//   {
//     id: 1,
//     name: "Susan",
//     balance: 100.32,
//     deposits: [150, 30, 221],
//     withdrawals: [110, 70.68, 120],
//   },
//   { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
//   {
//     id: 3,
//     name: "Joshua",
//     balance: 18456.57,
//     deposits: [4000, 5000, 6000, 9200, 256.57],
//     withdrawals: [1500, 1400, 1500, 1500],
//   },
//   { id: 4, name: "Candy", balance: 0.0 },
//   { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
// ];


// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

 export function getClientWithLeastPositiveBalance(array) {
  let account = Infinity
  let obj
  let arr = []
  for(let i = 1; i < array.length; i++) {
    let el = array[i]
    if((el.balance < account) && (el.balance > 0)) {
      obj = el
    }
  }
  if(obj != undefined) {
    arr.push(obj)
    console.log(arr)
    return arr
  } else {
    arr.push(obj)
  console.log(arr)
  return arr
  }
  }




// getClientWithLeastPositiveBalance(bankAccounts)


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
