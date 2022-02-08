var canvas = document.getElementById('canvas').getContext("2d");

var bg = new Bg(0,0,500,900,"assets/images/sky.png")
var bg2 = new Bg(500,0,500,900,"assets/images/sky.png")

var ground = new Ground(0 ,700,500,200,"assets/images/ground.png")
var ground2 = new Ground(500 ,700,500,200,"assets/images/ground.png")


function draw(){
   
    bg.draw();
    bg2.draw();
    ground.draw();
    ground2.draw();

}

function update(){
bg.move(2,-500,0); 
bg2.move(2,0,500);
ground.move(4,-500,0);
ground2.move(4,0,500);

}

function main(){
canvas.clearRect(0,0,500,900);
draw();
update();

}

setInterval(main, 100);