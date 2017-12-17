/* var document = $(document).ready(function () {
  console.log('Hello World') 
 }) */

/*
1. Users can deposit money into the checking account
  -Add a click listener to the deposit button (.deposit #checking - class & id )
    -When .deposit is clicked, console.log("[user input]") into the balance box (.balance #checking class)
      *(Determine how to code for unknown "user input"). Will add a static amount for testing purposes through coding process. */

// var checkingBalance = document.querySelector('.checking-balance').innerhtml = div.checking-value

// var checkingDepositAmount = document.querySelectorAll('input')[1]

var checkingBalance = 0
// The original checking balance
var checkingDepositAmount = document.querySelectorAll('input')[1]
// Checking deposit button
checkingDepositAmount.addEventListener('click', function () {
  console.log(document.querySelectorAll('input')[0].value)
  checkingBalance += parseInt(document.querySelectorAll('input')[0].value)
  // When clicked, the amount entered into the input box is added to the checking balance
  // console.log("checking balances" + checkingBalance) - used for testing purposes
  // console.log(document.querySelector('.checking-balance')) - used for testing purposes
  document.querySelector('.checking-balance').innerHTML = '$' + checkingBalance
})

var checkingWithDrawalAmount = document.querySelectorAll('input')[2]
// Pinpointing the checking account withdrawal box
checkingWithDrawalAmount.addEventListener('click', function () {
  console.log(document.querySelectorAll('input')[0].value)
// Clicking the withdrawal button makes the balance go down
  checkingBalance -= parseInt(document.querySelectorAll('input')[0].value)
  document.querySelector('.checking-balance').innerHTML = '$' + checkingBalance
 })

 var savingsBalance = 0
 // The original savings balance
 var savingsDepositAmount = document.querySelectorAll('input')[4]
 // Savings deposit button
 savingsDepositAmount.addEventListener('click', function () {
   console.log(document.querySelectorAll('input')[3].value)
   savingsBalance += parseInt(document.querySelectorAll('input')[3].value)
   // When clicked, the amount entered into the input box is added to the savings balance
   // console.log("savings balances" + savingsBalance) - used for testing purposes
   // console.log(document.querySelector('.savings-balance')) - used for testing purposes
   document.querySelector('.savings-balance').innerHTML = '$' + savingsBalance
 })

 var savingsWithDrawalAmount = document.querySelectorAll('input')[5]
 // Pinpointing the saving account withdrawal box
 savingsWithDrawalAmount.addEventListener('click', function () {
   console.log(document.querySelectorAll('input')[3].value)
 // Clicking the withdrawal button makes the balance go down
   savingsBalance -= parseInt(document.querySelectorAll('input')[3].value)
   document.querySelector('.savings-balance').innerHTML = '$' + savingsBalance
  })



var checkingBalanceLow = 10
//  checkingBalanceLow.addEventListener('click', function () { 
  // console.log(document.querySelectorAll('input')[0].value)
  // checkingBalance -= parseInt(document.querySelectorAll('input')[0].value)
if (checkingBalanceLow <= 10) {
  document.querySelector('#checking').style.backgroundColor = 'red';
// document.getElementsByClassName(#)[0].style.color = 'red'
  }
// ^^ Attempt to get the color to change to red when checking balance reached below 10.

// if the balance goes below 0 the little box needs to turn red

  /* Pseudocode
  a. Users can withdraw money from the checking account
    -Add a click listener to the withdraw button (.withdraw #checking - class & id)
      -When .withdraw is clicked, console.log("[user input]") into the balance box (.balance #checking class)
        *(Determine how to code for unknown "user input"). Will add a static amount for testing purposes through coding process.

  b. The balance must be >= 0.
    -Set #checking .balance limits to prevent it from allowing the .balance to get below 0

  c. If the balance is < 0, then the result is [null]
    -Make #checking .balance null if withdrawal amount is > amount currently in the #cheking account

  d. If the #checking .balance goes below $10, then the background color of the account value turns red - using css .zero

  e. Have the #checking .balance total update when a .deposit is added
    -Insert function that adds user input amount to the existing .balance */

/*
2. Users can deposit money into the .savings account
  -Add a click listener to the deposit button (.deposit #savings - class & id )
    -When .deposit is clicked, console.log("[user input]") into the balance box (.balance #savings class)
      *(Determine how to code for unknown "user input"). Will add a static amount for testing purposes through coding process.
  a. Users can withdraw money from the savings account
      -Add a click listener to the withdraw button (.withdraw #savings - class & id)
        -When .withdraw is clicked, console.log("[user input]") + the existing amount into the balance box (.balance #savings class)
          *(Determine how to code for unknown "user input"). Will add a static amount for testing purposes through coding process.
            *(Determine how to have user input added to the existing balance)
        -Have the #savings .balance total update when a .deposit is added
        -Insert function that adds user input amount to the existing balance

  b. The #savings .balance must be >= 0.
    -Set .balance limits to prevent it from allowing the .balance to get below 0

  c. If the .balance is < 0, then the result is [null]
    -Make .balance null if withdrawal amount is > amount currently in the #savings account
      -Either null or make function not run/cancel itself if the value requested is more than exists

  d.If the .balance goes below $10, then the background color of the account value turns red - using css .zero



Note that these commits are all for the checking account only. Take this one account at a time.

1. Test jQuery is working
  - Make the `<body>`'s background color turn red
- Add a click listener to the **checking account's** "Deposit" button
  - When you click the button it should `console.log("hello")`
- On clicking "Deposit", it should get the user input
  - Just `console.log` it
  - You can save some time by hard-coding a value into the input box: `<input value="something" />`. That way you don't need to type stuff in all the time to test it.
- On clicking "Deposit", it should update the "balance" with the user input
  - Just make the user input show up. Don't worry about actually keeping track of a balance yet.
- On "Deposit", it should get the current "balance"
  - How can you get the content of the "balance" element?
  - The content has a `$` at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
- On "Deposit", it updates the balance
  - Now add the user input to the balance, and make it show up in the "balance" element
- On "Withdraw", it updates the balance
  - Follow the same steps as before, except you're subtracting instead of adding
- Refactor the existing code 
} */ 
