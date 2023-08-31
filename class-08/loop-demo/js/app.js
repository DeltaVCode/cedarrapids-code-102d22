"use strict";

console.log('app js is running!');



function getUserName(){
  let userName = prompt('What is your name?');
  console.log(userName);
  
  if(userName === '' || userName === null){
    userName = prompt('What is your name?');
  } 

  console.log('did we get the user name?', userName);
  return document.write(userName);

}//closes getUserName function




function getUserTime() {
// console.log('we got to this function!!!!');

let userTime = prompt('What time is it?');
console.log('user time:', userTime);
let message;

if(userTime <= 11){
  message = 'Good morning';
} else if(userTime <= 18){
  message = 'Good afternoon';
} else if(userTime <= 24){
  message = 'Good Evening';
} else {
  message = 'I dont know what time it is!';
}
// console.log(message)
 return document.write(message);
}




