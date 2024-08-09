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

// EXERCISE 11
// Return an array of withdrawal sums of each bank account.
// If the account doesn't have withdrawals, it's sum is 0.
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 0, 43242.34, 0, 23432]

 export function getAllWithdrawals(array) {
  let arr = []

  for(let i = 0; i < array.length; i++) {
    let el = array[i]
    let withdraw = el.withdrawals
    // console.log(withdraw)
    if(withdraw === undefined) {
      arr.push(0)
    } else {
      let sum = 0
      for(let j = 0; j < withdraw.length; j++){
        let ele = withdraw[j]
        sum+=ele
      }
      arr.push(sum)
    }


  }
  console.log(arr)
  return arr
}

// getAllWithdrawals(bankAccounts)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
