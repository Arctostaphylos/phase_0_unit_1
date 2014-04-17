// I worked [with:Scott Jason] on this challenge

// Your mission description:
// The objects need to be manipulated in the following ways:

//1. Position
//2. Health function that includes alive or dead, plus numbers don't reveal alive; but < 1 === dead
//3. Use Math.random between 0 and 1 toInteger() to make to integer to determine damage and health
//4. Present result in console
// 
// 

// Pseudocode
// var hero = {
/*    id: "hero",
    health: 10,
    position: {
        x: 10,
        y: 10
    }
    };
    
var villain = {
    id: "villain",
    health: 10,
    position: {
        x: 5,
        y: 15
    }
    };

fight function {
generate two different random numbers (damage) for villain and hero
health of each is their own health minus the damage ( damage is random number
of opponent)
compare relative health of villain and hero (which is now affected by the 
damge value)
who won is the object with the larger health score
};
*/
// 
// 
// 
// 

// Initial Code

<!DOCTYPE html>
<html>
<head>
  <script>
  var hero = {
    id: "Most Amazing Person",
    health: 10,
    strength: 10,
    position: {
        x: 1,
        y: 151
      }
    };
 
  var heroNot = {
    id: "Worst Person Ever",
    health: 10,
    strength: 10,
    position: {
      x: 150,
      y: 300
    }
  };

  function callToBattle(){
    if (hero.position.y > 250){
      fight();
    }
    else{
      alert("Get closer!")
    }
  };
  
  function fight(){

    var heroDamageReceived =  Math.floor(Math.random() * 10);
    var heroNotDamageReceived= Math.floor(Math.random() * 10);
   //future versions would take into account the strength of hero and villain
    hero.health = (hero.health - heroDamageReceived);
    heroNot.health = (heroNot.health - heroNotDamageReceived);
    if (hero.health >= heroNot.health){
      document.getElementById("image").src="https://dl.dropboxusercontent.com/u/7084808/hero_win.png";
     }
    else {
      document.getElementById("image").src="https://dl.dropboxusercontent.com/u/7084808/villain.png";
    }

  };   

  function moveOk(direction){
    x = hero.position.x;
    y = hero.position.y;
    //fix the conditional to be the position will move to
    if (direction == 'right' && x+50 < 400 && (y >150 && y < 250)){
      move(direction);
    }
    else if (direction == 'left' && x-50 >= 0 && (y >150 && y < 250)) {
      move(direction);
    }
    else if (direction == 'up' && y - 50 >=0 && (x >150 && x < 250)){
      move(direction);
    }
    else if (direction == 'down' && y+50 <= 400 && (x >150 && x < 250)){
      move(direction);
    }
    else{
      console.log("can't move");
    }
  };

  function move(direction){
      var elem = document.getElementById("hero");
      elem.style.position = "absolute";
      switch(direction){
        case 'left':
          moveLeft(elem);
          break;
        case 'right':
          moveRight(elem);
          break;
        case 'up':
          moveUp(elem);
          break;
        case 'down':
          moveDown(elem);
          break;
        default:
          console.log("movement buggered")       
      }
  };

  function moveRight(elem){
    hero.position.x += 50;
    elem.style.left = hero.position.x +"px";
    elem.src = "images/hero_go_right.png"
  };

  function moveLeft(elem){
    hero.position.x -= 50;
    elem.style.left = hero.position.x +"px";
    elem.src = "images/hero_go_left.png";
  };

  function moveUp(elem){
    hero.position.y -= 50;
    elem.style.top = hero.position.y +"px";
    elem.src = "images/hero_go_up.png";
  };

  function moveDown(elem){
    hero.position.y += 50;
    elem.style.top = hero.position.y +"px";
    elem.src = "images/hero_go_down.png";
  };
  
  </script>
  
  <STYLE TYPE="text/css">
    #container{
      position: relative;
    }
    .wall{
      width: 150px;
      height: 150px;
      background-color: brown;
      position: absolute;
    }
    .wall:nth-child(2){
      left: 250px;
    }
    .wall:nth-child(3){
      left: 0px;
      top: 250px;
    }
    .wall:nth-child(4){
      left: 250px;
      top: 250px;
    }
    #hero {
      position: absolute;
      top: 151px;
    
    }

    #villian {
      position: absolute;
      top: 300px;
      left: 155px;

    }
    #image {
      float: right;
    }
  </STYLE>
  
</head>
<body>
  
  
  <button onclick="moveOk('left');">Left</button>
  <button onclick="moveOk('right');">Right</button>
  <button onclick="moveOk('up');">Up</button>
  <button onclick="moveOk('down');">Down</button>
  <button onclick="callToBattle()">Fight</button>
  <div id="container">
    <div class="wall"></div>
    <div class="wall"></div>
    
    <div class="wall"></div>
    <div class="wall"></div>
    <p><img id="hero"src="images/hero_go_right.png"></p>
    <p id="villian"><img src="images/bad_guy.jpg"></p>
  </div>  
  <p><img id="image" src="#"></p>
</body>
</html>




// Refactored Code

//I refactored a couple of functions as I added the new functions callToBattle and moveOk. Specifically I 
//moved the assignment of the variable elem to moveOk rather than repeating it in each move function, and then
//passed the elem variable as a parameter to the different move functions.




// Reflection
// I learned a ton of stuff in this challenge. 
// 
// 
// 
// 
// 
// 
// 
