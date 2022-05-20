let missaoNome;
let missaoResposta;
let listaDinamica =  []


const missoes = [
    missao01 ={
        //e
        pergunta :"1\"^\"⬜=Verdadeiro" ,
        resposta : [1]
    },
    missao02 ={
        //ou
        pergunta :"0\"V\"⬜=Verdadeiro" ,
        resposta : [1,0]

    },
    missao03 ={
        //negacao
        pergunta :"0\"~\"=⬜" ,
        resposta : [1]
    },
    missao04 ={
        //condicional
        pergunta :"1\"➔\"⬜=Falso" ,
        resposta : [0]
    },
    missao05 ={
        //condicional
        pergunta :"1\"➔\"⬜=Verdadeiro" ,
        resposta : [1]
    },
    missao06 ={
        //negacao
        pergunta :"0\"Negação\"=⬜" ,
        resposta : [1]
    },
    missao07 ={
        //negacao
        pergunta :"1\"Negação\"=⬜" ,
        resposta : [0]
    },
    missao08 ={
        //e
        pergunta :"1\"E\"⬜=Verdadeiro" ,
        resposta : [1]
    },
    missao09 ={
        //e
        pergunta :"1\"E\"⬜=Falso" ,
        resposta : [0]
    },
    missao10 ={
        //condicional
        pergunta :"1\"Condicional\"1=⬜" ,
        resposta : [1]
    },
    missao11 ={
        //condicional
        pergunta :"1\"Condicional\"0=⬜" ,
        resposta : [0]
    },
];




function criarmissao(){
    const indexMissao = parseInt(Math.random() * missoes.length) 
    missaoNome = missoes[indexMissao].pergunta;
    missaoResposta = missoes[indexMissao].resposta;
   // console.log(missaoNome);
   // console.log(missaoResposta);

    
}

criarmissao();