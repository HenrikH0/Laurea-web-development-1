console.log("hello.world!");

const username = "John";
const age = 20;
const favoriteAnimal = "Panda";
console.log("My name is " + username + ", I am " + age + " years old, and my favorite animal is a " + favoriteAnimal);

const visitorName = "John";
console.log ("Hello " + visitorName + ", welcome to JavaScript!");

const age = Number(prompt("Please enter your age:"));
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are under 18.");
}

function greetUser(name) {console.log("Hello " + name + "!")}
greetUser("Jack")