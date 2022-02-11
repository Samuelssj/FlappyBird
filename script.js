
var bg = new Bg(0,0,500,900,"assets/images/sky.png")
var bg2 = new Bg(500,0,500,900,"assets/images/sky.png")

var ground = new Ground(0 ,600,500,200,"assets/images/ground.png")
var ground2 = new Ground(500 ,600,500,200,"assets/images/ground.png")

var pipe1 = new Pipe(300,400,96,358, "assets/images/pipe1.png");
var pipe2= new Pipe(300,-100,96,358, "assets/images/pipe2.png");

var bird = new Bird(50,400,63,51,"assets/images/bird0.png")

var coin = new Coin(50,50,45,65, "assets/images/coin3.png");

function draw(){
   
    bg.draw();
    bg2.draw();

    pipe1.draw();
    pipe2.draw();
    
    ground.draw();
    ground2.draw();
    
    bird.draw();
    coin.draw();
    

}

function update(){
bg.move(1,-500,0); 
bg2.move(1,0,500);

ground.move(2,-500,0);
ground2.move(2,0,500);

bird.move();
bird.limiteVoo(); 
bird.animation("bird", 4, 8);

pipe1.move(5,-100,600, pipe2);

coin.move(pipe1);
coin.animation("coin", 5, 7);


if(bird.Collide(coin)){

    coin.set_visible= false;
}



}

function main(){
canvas.clearRect(0,0,500,900);
draw();
update();
requestAnimationFrame(main);

}

main();