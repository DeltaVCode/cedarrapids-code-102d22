"use strict";

console.log('app js is running!');

// prompt() is it allows us to ask the user a question in a prompt window 
// prompt('What is your name?'); 
// lets create a variable to hold the users Response. 

let userName = prompt('What is your name?');

// console.log('identifier', value); 
console.log('user name:', userName);

//use console logs to see our input in the code. 
//single line comment

/** 
 * multiline comments
 * add more comments
 * 
 */

//Methods
// 1. prompt() 

let userTime = prompt('What time is it?');
console.log('user time:', userTime);

//lets respond to our user using some conditions

// if(){}

// if(some condition is true ){
  //then we will do some code stuff here
// }
//this create a variable to hold a value later.
let message;
11
if(userTime <= 11){
  message = 'good morning';
} else if(userTime <= 18){
  message = 'good afternoon';
} else if(userTime <= 24){
  message = 'Good Evening';
} else {
  message = 'I dont know what time it is!';
}

console.log('user response',message);

// our if conditions will run if the condition is true. 


// .write()  is another method. 

document.write('Hello, ' + userName + ' ' + message);