/*JS-08 Introduction to Object Oriented Programming


Exercise #1: A Person Object
Part 1 Javascript
Create a class called Person which accepts the name of a person as a string, and his/her/their age as a number.

The Person class should have a method called Describe which returns a string with the following syntax: "name, age years old".

For example, if Manny is 19 years old the function Describe of his object will return "Manny, 19 years old".*/

class persona {
    constructor(firstName, age){
      this.firstName = firstName;
      this.age = age;
    }

    //   describe(){
    //       console.log( `${this.firstName}, ${this.age} years old.`);
    //   }
    }
  
// persona1.describe();

let persona1 = new persona(prompt("Whats your name?"), prompt("How old are you?"));

document.getElementById("Id").innerHTML = persona1.firstName+', '+persona1.age + ' years old.';