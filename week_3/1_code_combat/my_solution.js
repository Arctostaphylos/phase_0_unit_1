// I worked on this challenge [by myself, with:]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
// move up
// move right x2
// move down

this.moveDown();
this.moveDown();
this.moveRight();

this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

//Grab the mushroom
// move right & pick up mushroom
// move left
// move up
// attack
 
 this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();

this.attackNearbyEnemy();

//Drink Me
// move left
// attack
// move down
// pick up potion
// move up
// move right
// attack
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//taunt the guards
// move right x2
// move left x2

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("something");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

//It's a trap
// move down
// say "hey you"
// move up

/ Taunt the Ogre and run for cover!
this.moveDown();
this.moveDown();
this.say("hey you!");
this.moveUp();
this.moveUp();

//Taunt
//say "hey you!" x4

 this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!
this.say("hey");
this.say("come and get me");
this.say("over here");
this.say("right here");
 
//Cowardly Taunt
//move to 63,20
//say something
//move to 70,10

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.
this.moveXY(63, 25);
// Say something!
this.say("hey you");
// Then run back behind the arrow towers for safety.
this.moveXY(70, 10);
// You can shift+click on the map to insert coordinates.

//commanding followers
//move to the middle of the field
//say follow me
//say attack

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you
this.say("follow");
this.moveXY(69,52);
this.moveXY(60,41);
// Saying anything with "attack" will send nearby troops into
// a battle mode.
this.say("attack");
this.moveXY(75, 63);
// Make sure Tharin is safe!


 
 
// Reflection:
// Write your reflection here.
