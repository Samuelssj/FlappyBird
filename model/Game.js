
// var can = document.querySelector('canvas')
// var canvasLarguras = window.getComputedStyle(can);
var play = true;
var fundo = new Fundo(0,0,502,900,"assets/sky.png")
var fundo2 = new Fundo(500,0,502,900,"assets/sky.png")

var chao = new Chao(0 ,700,500,200,"assets/ground.png")
var chao2 = new Chao(500 ,700,500,200,"assets/ground.png")

//60 mudo o tamanho do cano
var cano1 = new Cano(500,500,60,358, "assets/pipe1.png");
var cano2= new Cano(500,0,60,358, "assets/pipe2.png");

var passaro = new Passaro(50,400,30,35,"assets/bird0.png")

var moeda = new Moeda(50,50,45,65, "assets/coin3.png");
var score = 0;
var score_texto = new Texto();


var somFly = new Audio("assets/wing.ogg");
var somcoin = new Audio("assets/point.ogg");
var somfase = new Audio("assets/Bubble.mp3");
var sombatercano= new Audio("assets/UhOh.mp3");
var gamerover = new Texto();

function colision(){

    if(passaro.Collide(moeda)){
        if(moeda.set_visible){
            moeda.set_visible= false;
            score +=1;
            somcoin.play(); 
        }}
        
        if(passaro.Collide(cano1) || passaro.Collide(cano2)){
            play = false;
            sombatercano.play();
            somfase.pause();
         
            }
        
}

function draw(){
   
    fundo.draw();
    fundo2.draw();

    cano1.draw();
    cano2.draw();
    
    chao.draw();
    chao2.draw();
    
    passaro.draw();
    moeda.draw();

    score_texto.draw_text(60,"Arial", 225, 100, "white");
    
}

function update(){
 if(play){
   
    fundo.move(1,-500,0); 
    fundo2.move(1,0,500);
    //somfase.play();
    chao.move(2,-500,0);
    chao2.move(2,0,500);

    passaro.move();
    passaro.limiteVoo(); 
    passaro.animation("bird", 4, 8);

    cano1.move(3,-100,600, cano2);

    moeda.move(cano1);
    moeda.animation("coin", 6,8);
    score_texto.text = score;

//colision();

}


}

function main(){
canvas.clearRect(0,0,500,900);
draw();
update();
requestAnimationFrame(main);

}

main();