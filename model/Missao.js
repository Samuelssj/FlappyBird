let missaoNome;
let missaoResposta;
let listaDinamica =  []


const missoes = [
    missao01 ={
        //e
        pergunta : "1 ^⬜= Verdadeiro" ,
        resposta : [1]
    },
    missao02 ={
        //ou
        pergunta : "0 V⬜= Verdadeiro" ,
        resposta : [1,2]

    },
    missao03 ={
        //negacao
        pergunta : "0 ~ = Verdadeiro" ,
        resposta : [1]
    },
    missao04 ={
        //condicional
        pergunta : "1 ->⬜ = falso" ,
        resposta : [1]
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