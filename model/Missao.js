let missaoNome;
let missaoResposta;


const missoes = [
    missao01 ={
        //e
        pergunta : "1 ^⬜= Verdadeiro" ,
        resposta : 1,
    },
    missao02 ={
        //ou
        pergunta : "0 V⬜= Verdadeiro" ,
        resposta : 1,
    },
    missao03 ={
        //negacao
        pergunta : "0 ~ = Verdadeiro" ,
        resposta : 1,
    },
    missao04 ={
        //condicional
        pergunta : "1 ->⬜ = falso" ,
        resposta : 0,
    },

];




function criarmissao(){
    const indexMissao = parseInt(Math.random() * missoes.length) 
    missaoNome = missoes[indexMissao].pergunta;
    missaoResposta = missoes[indexMissao].resposta;
    console.log(missaoNome);
    console.log(missaoResposta);
    
}

criarmissao();