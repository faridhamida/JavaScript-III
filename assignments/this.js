/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When a function is contained in global scope the value of this inside that function will be the window object.
* 2. Everything to the left of the dot in a function is what this is refering too
* 3. When you call an object it will immediatley invoke the function
* 4. New binding you create a new keyword for a new object and points to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayAge () {
    console.log(`My age is ${this.age}`)
}

const user = {
    name: "Farid",
    age:25
}
sayAge();
// Principle 2

// code example for Implicit Binding
let myCat = {
    name: "Meowth",
    speech: "English",
    cat: function () {
        console.log(this.speech);
    }
}
myCat.cat();

// Principle 3

// code example for New Binding
function Dog(saying) {
    this.phase = saying;
}

let myDog = new Dog("Woof Woof");

console.log(myDog.phase);
// Principle 4

// code example for Explicit Binding
function pokemon() {
    console.log(this.type);
}

let myPokemon = {
    name: "Charmander",
    type: "Fire",
}
pokemon.call(myPokemon);