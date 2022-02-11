
var bg = new Bg(0,0,500,900,"assets/images/sky.png")
var bg2 = new Bg(500,0,500,900,"assets/images/sky.png")

var ground = new Ground(0 ,600,500,200,"assets/images/ground.png")
var ground2 = new Ground(500 ,600,500,200,"assets/images/ground.png")

var pipe1 = new Pipe(500,400,96,358, "assets/images/pipe1.png");
var pipe2= new Pipe(500,-100,96,358, "assets/images/pipe2.png");

var bird = new Bird(50,400,63,51,"assets/images/bird0.png")

var coin = new Coin(50,50,45,65, "assets/images/coin3.png");

var score = 0;
var score_texto = new Texto();

var play = true;

var somFly = new Audio("assets/sounds/wing.ogg");
var somcoin = new Audio("assets/sounds/point.ogg");
var somfase = new Audio("assets/sounds/Bubble.mp3");
var sombatercano= new Audio("assets/sounds/UhOh.mp3");
var gamerover = new Texto();

function colision(){

    if(bird.Collide(coin)){
        if(coin.set_visible){
            coin.set_visible= false;
            score +=1;
            somcoin.play(); 
        }
        
        }
        
        if(bird.Collide(pipe1) || bird.Collide(pipe2)){
            sombatercano.play();
            somfase.pause();
            play = false;
         
            

            }
        
}

function draw(){
   
    bg.draw();
    bg2.draw();

    pipe1.draw();
    pipe2.draw();
    
    ground.draw();
    ground2.draw();
    
    bird.draw();
    coin.draw();
    score_texto.draw_text(60,"Arial", 225, 100, "white");
    
}

function update(){
if(play){
bg.move(1,-500,0); 
bg2.move(1,0,500);
somfase.play();
ground.move(2,-500,0);
ground2.move(2,0,500);

bird.move();
bird.limiteVoo(); 
bird.animation("bird", 4, 8);

pipe1.move(3,-100,600, pipe2);

coin.move(pipe1);
coin.animation("coin", 5, 7);

score_texto.text = score;

colision();

}


}

function main(){
canvas.clearRect(0,0,500,900);
draw();

update();
requestAnimationFrame(main);

}

main();