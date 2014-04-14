// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Kris Shanks
//  2.


// 1. "YOU SIGNED... WHO?!"
// Steve McQueen
// 56
// "Put 'em up!"

var clients = new Object();

clients.steve = {
    name: "Steve McQueen",
    age: 56,
    quote: "Put 'em up!"
};

// 2. "Here they Come!"
clients['adam'] = {
    name: "Adam Sandler",
    age: 47,
    quote: "That's your home! Are you too good for your home?!"
};

clients.kristen = {
    name: "Kristen Bell",
    age: 33,
    quote: "Do you wanna build a snowman?"
};

clients.jim = {
    name: "Jim Carrey",
    age: 52,
    quote:  "...So you're telling me there's a chance? YEAH!"
};


//var clients = [steve, adam, kristen, jim];
// clients.steve = steve;
// clients.adam = adam;
// clients.kristen = kristen;
// clients.jim = jim;

// 3. "TIME IS MONEY!"

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote;
}

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

clients.shooter = shooterMcGavin;

// 4. "SHOW 'EM OFF!"

for (var name in clients){
    console.log(clients[name].name);
    console.log(clients[name].age);
    console.log(clients[name].quote);
};


// ** BONUS **


//  Your Reflection:

The sticky part of this exercise was wrapping my mind around having an object full of objects. I feel
like I have a better handle on creating objects and object constructors now. Object constructors essentially
create a new kind of object whose job it is to create objects. 
Working by myself was not 
as much fun as working through this challenge with someone else. When I had questions, I went back to 
my notes on JS or the WSschools information on JS. 
