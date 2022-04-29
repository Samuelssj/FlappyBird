var canvas = document.getElementById('canvas').getContext("2d");

document.addEventListener("click" || "keyup", function(e) {
  if(play){
      //apagar essa linah 6 inrelevante
      passaro.y-=13;
     
      passaro.vel-=13;
      somFly.play();

  }


});