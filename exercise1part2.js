/*Part 2 HTML
Create an HTML page that has 2 input boxes: one for name and another for age. When someone enters a name and age, the page will show a list of "{Name}, {x} years old".*/

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

let persona1 = new persona(prompt("Whats the first name?"), prompt("How old are?"));
let persona2 = new persona(prompt("Whats second name?"), prompt("How old are?"));
let persona3 = new persona(prompt("Whats third name?"), prompt("How old are?"));

document.getElementById("name1").innerHTML = persona1.firstName;
document.getElementById("age1").innerHTML = persona1.age + " years old";

document.getElementById("name2").innerHTML = persona2.firstName;
document.getElementById("age2").innerHTML = persona2.age + " years old";

document.getElementById("name3").innerHTML = persona3.firstName;
document.getElementById("age3").innerHTML = persona3.age + " years old";