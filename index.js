

var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomnumber2 = Math.floor(Math.random()*6)+1;

// var random_img_num =  Math.floor(Math.random()*2)+1;

document.querySelector(".img1").src = "images/dice"+randomnumber1+".png";

document.querySelector(".img2").src = "images/dice"+randomnumber2+".png";




if (randomnumber1 == randomnumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}
else if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else  {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
