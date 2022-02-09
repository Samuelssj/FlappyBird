
var bg = new Bg(0,0,500,900,"assets/images/sky.png")
var bg2 = new Bg(500,0,500,900,"assets/images/sky.png")

var ground = new Ground(0 ,600,500,200,"assets/images/ground.png")
var ground2 = new Ground(500 ,600,500,200,"assets/images/ground.png")

var pipecima = new Obj(300,-100,96,358, "assets/images/pipe2.png");
var pipebaixo = new Obj(300,400,96,358, "assets/images/pipe1.png");



var bird = new Bird(50,400,63,51,"assets/images/bird0.png")

function draw(){
   
    bg.draw();
    bg2.draw();
    pipecima.draw();
    pipebaixo.draw();
    ground.draw();
    ground2.draw();
    bird.draw();
    

}

function update(){
bg.move(1,-500,0); 
bg2.move(1,0,500);
ground.move(2,-500,0);
ground2.move(2,0,500);
bird.move();
bird.limiteVoo(); 
bird.animation("bird", 4, 8)

}

function main(){
canvas.clearRect(0,0,500,900);
draw();
update();
requestAnimationFrame(main);

}

main();