'use strict'
// working with variables
let admin
let userName = 'John'
admin = userName
alert(admin)
// giving the right name
let ourPlanetName = 'Earth'
let currentUser = admin
// uppercase const?
// BIRTHDAY can be in uppercase, 
// while age is not known yet, so we use lowercase

// string quotes
// 1) hello 1
// 2) hello name 
// 3) hello Ilya

// a simple page
let visitorName = prompt('What is your name?', 'Kamila')
alert(visitorName)

// the postfix and prefix forms
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

a = 2;
let x = 1 + (a *= 2); //5

// type conversion
"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 // -9 5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 //-2

// fix the addition
a = prompt("First number?", 1);
b = prompt("Second number?", 2);

alert(+a + +b); // 12

// what will be the result for these expressions?
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" // false
null === +"\n0\n" //false

//will alert be shown?
if ("0") {
  alert( 'Hello' );
} // yes

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
let officialName = prompt('What is the "official" name of JavaScript?', '');
(officialName == "ECMAScript") ? alert('Right!') : alert('You don\'t know? "ECMAScript"');

//show the sign
let number = Number(prompt("please enter any number", ''));
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

//rewrite if using ?
let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
(a + b < 4) ? result = 'Below': result = 'Over';
// or
result = (a + b < 4) ? 'Below' : 'Over';

// rewrite 'if...else' into ?
// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let message =(login =='Employee') ? 'Hello'
: (login == 'Director')? 'Greetings'
: (login == '')? 'No login': '';

// what's the result of OR?
alert( null || 2 || undefined ); //2
// What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) );//1 2
// What is the result of AND?
alert( 1 && null && 2 ); //null
// What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); //2 undefined
// The result of OR AND OR
alert( null || 2 && 3 || 4 ); //3
// Write an if condition to check that age is between 14 and 90 inclusively.
// “Inclusively” means that age can reach the edges 14 or 90.
let age;
if(age >= 14 && age <= 90) alert('enjoy your life');
// Check the range outside
// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
if(!(age >= 14 && age <= 90)) alert('');
if(age <14 || age >90) alert('');
// A question about "if"
if (-1 || 0) alert( 'first' );//first
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );//third
// Check the login
let newPassword;
let newUser = prompt("who's there?", '');
if(newUser == 'Admin') {
    newPassword = prompt('please enter your password','');
    if (newPassword == 'TheMaster') alert("Welcome!")
        else if(newPassword == '' || newPassword== null) alert('Canceled')
            else alert('Wrong password');
}
else if(newUser == null ||newUser== '') alert('Canceled');
else alert("I don't know you");

// last loop value
let i = 3;
while (i) {
  alert( i-- );
}
// last value alerted is 1
// Which values does the while loop show?
i = 0;
while (++i < 5) alert( i ); // 1 2 3 4
i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5
// Which values get shown by the "for" loop?
for (let i = 0; i < 5; i++) alert( i );// 0 1 2 3 4 
for (let i = 0; i < 5; ++i) alert( i );// 0 1 2 3 4 
// Output even numbers in the loop
for(let i = 2;i<11;i++){
    if(i%2==0) alert(i);
}
// Replace "for" with "while"
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
i = 0;
while(i<3){
    alert(`number ${i}!`);
    i++;
}
// Repeat until the input is correct
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
while(true){
    let inputNumber = prompt('Enter number greater than 100', '');
    if (inputNumber === null || inputNumber === '') break;
    if (+inputNumber > 100) break;
}
// Output prime numbers
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { 
  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }
  alert( i ); 
}

// Rewrite the "switch" into an "if"
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }
let browser = prompt('enter browser','');
if(browser == 'Edge') alert( "You've got the Edge!" );
else if(browser == 'Chrome' || browser == 'Firefox' ||
    browser=='Safari' || browser =='Opera') alert( 'Okay we support these browsers too' );
    else alert( 'We hope that this page looks ok!' );
// Rewrite "if" into "switch"
// let a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }
a = +prompt('a?', '');
switch(a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// Is "else" required?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}//no difference without else
// Rewrite the function using '?' or '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }
let checkAge = age => (age > 18) || confirm('Did parents allow you?');
// Function min(a, b)
function min(a, b){
    if(a < b) return a;
    return b;
}
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
// Function pow(x,n)
function pow(x, n){
    let result = 1;
    for(let i = 0; i <n; i++){
        result *= x;
    }
    return result;
}

//Rewrite with arrow functions
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );
let ask = (question, yes, no)=>{
    if(confirm(question)) yes();
    else no();
};
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
)
