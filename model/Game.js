
// var can = document.querySelector('canvas')
// var canvasLarguras = window.getComputedStyle(can);
var play = true;
var fundo = new Fundo(0, 0, 502, 900, "../assets/sky.png")
var fundo2 = new Fundo(500, 0, 502, 900, "../assets/sky.png")

var chao = new Chao(0, 700, 500, 200, "../assets/ground.png")
var chao2 = new Chao(500, 700, 500, 200, "../assets/ground.png")

//60 mudo o tamanho do cano
var cano1 = new Cano(700, 500, 60, 358, "../assets/pipe1.png");
var cano2 = new Cano(700, 0, 60, 358, "../assets/pipe2.png");

var passaro = new Passaro(0, 520, 30, 35, "../assets/bird0.png")

var moeda = new Moeda( Math.random() * (800 - 700) + 735, Math.random() * (645 - 45), 35, 70, "../assets/true0.png");
var moeda2 = new Moeda(Math.random() * (800 - 700) + 700, Math.random() * (645 - 45), 35, 70, "../assets/false0.png");

var moedaIco = new Moeda(5, 740, 35, 70, "../assets/true0.png");
var moedaIco2 = new Moeda(5, 810, 35, 70, "../assets/false0.png");
var moeda_Label = new Texto();
var moeda_Label2 = new Texto();

var moedaResposta = 0;
var respostaMissao = missaoResposta;
var score = 0;
var missaoAtual = missaoNome;

var missao_Label = new Texto();
var missao_texto = new Texto();
var score_texto = new Texto();


var somFly = new Audio("../assets/wing.ogg");
var somcoin = new Audio("../assets/point.ogg");
var somfase = new Audio("../assets/Bubble.mp3");
var sombatercano = new Audio("../assets/UhOh.mp3");
//var birdColision = new Audio("../assets/BirdColision.mp3");
var gamerover = new Texto();

function resposta() {
    let sucesso = false;

    for (const tiporesposta of missaoResposta) {
        if (moedaResposta == tiporesposta) {
            score += 1;
            playSound(somcoin);
            criarmissao();
            respostaMissao = missaoResposta;
            missaoAtual = missaoNome;
            sucesso = true;
        }

    }
    if (!sucesso) {
        if (score > 0) {
            score -= 1;
        }
        playSound(sombatercano)
        criarmissao();
        respostaMissao = missaoResposta;
        missaoAtual = missaoNome;
    }


    // if(moedaResposta === missaoResposta){
    //     score += 1;
    //     playSound(somcoin);
    //     criarmissao();
    //     respostaMissao = missaoResposta;
    //     missaoAtual = missaoNome;
    // }else{
    //     if(score> 0){
    //         score -= 1;
    //     }
    //     playSound(sombatercano)
    //     // criarmissao();
    //     // respostaMissao = missaoResposta;
    //     // missaoAtual = missaoNome;
    // }


}


function colision() {


    if (passaro.Collide(moeda)) {
        if (moeda.set_visible) {
            moeda.set_visible = false;
            moedaResposta = 1;
            resposta();
        }
    }

    if (passaro.Collide(moeda2)) {
        if (moeda2.set_visible) {
            moeda2.set_visible = false;
            moedaResposta = 0;
            resposta();

        }
    }


    if (passaro.Collide(cano1) || passaro.Collide(cano2)) {
        //playSound(birdColision);
        play = false;
        somfase.pause();

        window.location.href = "./game-over";
    }

}

var currentScene = {};

function changeScene(scene) {
    currentScene = scene;
}

var game = {

    draw() {

        fundo.draw();
        fundo2.draw();

        cano1.draw();
        cano2.draw();

        chao.draw();
        chao2.draw();

        passaro.draw();
        moeda.draw();
        moeda2.draw();
        moedaIco.draw();
        moedaIco2.draw();

//         font-family: 'Bakbak One', cursive;
// font-family: 'Roboto Mono', monospace;

        missao_Label.draw_text("Missão:", 20, "Roboto Mono", 10, 40, "white");
        missao_texto.draw_text("", 30, "Roboto Mono", 10, 100, "black");
        score_texto.draw_text("Placar ", 20, "Roboto Mono", 380, 40, "black");

        moeda_Label.draw_text("➔ 1 ➔ Verdadeiro", 25, "Roboto Mono", 40, 785, "black");
        moeda_Label2.draw_text("➔ 0 ➔ Falso", 25, "Roboto Mono", 40, 850, "black");



    },
    update() {
        if (play) {

            fundo.move(1, -500, 0);
            fundo2.move(1, 0, 500);
            playSound(somfase)
            chao.move(2, -500, 0);
            chao2.move(2, 0, 500);

            passaro.move();
            passaro.limiteVoo();
            passaro.animation("bird", 4, 8);

            cano1.move(3, -100, 600, cano2);

            moeda.move(cano1);
            moeda.animation("true", 0, 10);

            moeda2.move(cano1);
            moeda2.animation("false", 0, 8);

            missao_texto.text = missaoAtual;
            score_texto.text = score;

           //colision();

        }


    },

}






function main() {
    canvas.clearRect(0, 0, 500, 900);
    currentScene.draw();
    currentScene.update();
    requestAnimationFrame(main);

}
changeScene(game);
main(); 