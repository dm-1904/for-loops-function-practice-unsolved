
// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

 export function getClientWithLeastPositiveBalance(array) {
  let account = Infinity
  let obj
  let arr = []
  for(let i = 0; i < array.length; i++) {
    let el = array[i]
    if((el.balance < account) && (el.balance > 0)) {
      account = el.balance
      obj = el
    }
  }
  if(obj === undefined) {
    return arr
  } else {
    arr.push(obj)
    return arr
  }
}




// getClientWithLeastPositiveBalance(bankAccounts)
// getClientWithLeastPositiveBalance(bankAccountsNoPositiveBalance)



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
