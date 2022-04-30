var canvas = document.getElementById('canvas').getContext("2d");

document.addEventListener("click", function(e) {
  if(play){
     //vel fica no lugagor do y do passaro                       
      passaro.vel-=13;
      somFly.play();

  }
});

document.addEventListener("keydown", function name(e) {
  if(play){
  
    passaro.vel-=13;
    somFly.play();
}
  
})