function mostrarQuiz(){
    console.log(quiz_data);
    console.log('txt: ',quiz_data.futebol.questions[0].pergunta )
}

function mudarEstado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';

    buildQuestion()
}
  
function buildQuestion() {
    const elemento = document.getElementById("title1");
    elemento.textContent = quiz_data.futebol.questions[0].pergunta

    const p1op1 = document.getElementById("opcao1");
    p1op1.textContent = quiz_data.futebol.questions[0].opcoes[0]

    const p1op2 = document.getElementById("opcao2");
    p1op2.textContent = quiz_data.futebol.questions[0].opcoes[1]

    const p1op3 = document.getElementById("opcao3");
    p1op3.textContent = quiz_data.futebol.questions[0].opcoes[2]

    const p1op4 = document.getElementById("opcao4");
    p1op4.textContent = quiz_data.futebol.questions[0].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento1 = document.getElementById("title2");
    elemento1.textContent = quiz_data.futebol.questions[1].pergunta

    const p2op1 = document.getElementById("opcao5");
    p2op1.textContent = quiz_data.futebol.questions[1].opcoes[0]

    const p2op2 = document.getElementById("opcao6");
    p2op2.textContent = quiz_data.futebol.questions[1].opcoes[1]

    const p2op3 = document.getElementById("opcao7");
    p2op3.textContent = quiz_data.futebol.questions[1].opcoes[2]

    const p2op4 = document.getElementById("opcao8");
    p2op4.textContent = quiz_data.futebol.questions[1].opcoes[3]

    //---------------------------------------------------------

    const elemento2 = document.getElementById("title3");
    elemento2.textContent = quiz_data.futebol.questions[2].pergunta

    const p3op1 = document.getElementById("opcao9");
    p3op1.textContent = quiz_data.futebol.questions[2].opcoes[0]

    const p3op2 = document.getElementById("opcao10");
    p3op2.textContent = quiz_data.futebol.questions[2].opcoes[1]

    const p3op3 = document.getElementById("opcao11");
    p3op3.textContent = quiz_data.futebol.questions[2].opcoes[2]

    const p3op4 = document.getElementById("opcao12");
    p3op4.textContent = quiz_data.futebol.questions[2].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento3 = document.getElementById("title4");
    elemento3.textContent = quiz_data.futebol.questions[3].pergunta

    const p4op1 = document.getElementById("opcao13");
    p4op1.textContent = quiz_data.futebol.questions[3].opcoes[0]

    const p4op2 = document.getElementById("opcao14");
    p4op2.textContent = quiz_data.futebol.questions[3].opcoes[1]

    const p4op3 = document.getElementById("opcao15");
    p4op3.textContent = quiz_data.futebol.questions[3].opcoes[2]

    const p4op4 = document.getElementById("opcao16");
    p4op4.textContent = quiz_data.futebol.questions[3].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento4 = document.getElementById("title5");
    elemento4.textContent = quiz_data.futebol.questions[4].pergunta

    const p5op1 = document.getElementById("opcao17");
    p5op1.textContent = quiz_data.futebol.questions[4].opcoes[0]

    const p5op2 = document.getElementById("opcao18");
    p5op2.textContent = quiz_data.futebol.questions[4].opcoes[1]

    const p5op3 = document.getElementById("opcao19");
    p5op3.textContent = quiz_data.futebol.questions[4].opcoes[2]

    const p5op4 = document.getElementById("opcao20");
    p5op4.textContent = quiz_data.futebol.questions[4].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento5 = document.getElementById("title6");
    elemento5.textContent = quiz_data.futebol.questions[5].pergunta

    const p6op1 = document.getElementById("opcao21");
    p6op1.textContent = quiz_data.futebol.questions[5].opcoes[0]

    const p6op2 = document.getElementById("opcao22");
    p6op2.textContent = quiz_data.futebol.questions[5].opcoes[1]

    const p6op3 = document.getElementById("opcao23");
    p6op3.textContent = quiz_data.futebol.questions[5].opcoes[2]

    const p6op4 = document.getElementById("opcao24");
    p6op4.textContent = quiz_data.futebol.questions[5].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento6 = document.getElementById("title7");
    elemento6.textContent = quiz_data.futebol.questions[6].pergunta

    const p7op1 = document.getElementById("opcao25");
    p7op1.textContent = quiz_data.futebol.questions[6].opcoes[0]

    const p7op2 = document.getElementById("opcao26");
    p7op2.textContent = quiz_data.futebol.questions[6].opcoes[1]

    const p7op3 = document.getElementById("opcao27");
    p7op3.textContent = quiz_data.futebol.questions[6].opcoes[2]

    const p7op4 = document.getElementById("opcao28");
    p7op4.textContent = quiz_data.futebol.questions[6].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento7 = document.getElementById("title8");
    elemento7.textContent = quiz_data.futebol.questions[7].pergunta

    const p8op1 = document.getElementById("opcao29");
    p8op1.textContent = quiz_data.futebol.questions[7].opcoes[0]

    const p8op2 = document.getElementById("opcao30");
    p8op2.textContent = quiz_data.futebol.questions[7].opcoes[1]

    const p8op3 = document.getElementById("opcao31");
    p8op3.textContent = quiz_data.futebol.questions[7].opcoes[2]

    const p8op4 = document.getElementById("opcao32");
    p8op4.textContent = quiz_data.futebol.questions[7].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento8 = document.getElementById("title9");
    elemento8.textContent = quiz_data.futebol.questions[8].pergunta

    const p9op1 = document.getElementById("opcao33");
    p9op1.textContent = quiz_data.futebol.questions[8].opcoes[0]

    const p9op2 = document.getElementById("opcao34");
    p9op2.textContent = quiz_data.futebol.questions[8].opcoes[1]

    const p9op3 = document.getElementById("opcao35");
    p9op3.textContent = quiz_data.futebol.questions[8].opcoes[2]

    const p9op4 = document.getElementById("opcao36");
    p9op4.textContent = quiz_data.futebol.questions[8].opcoes[3]

    // ------------------------------------------------------------ //

    const elemento9 = document.getElementById("title10");
    elemento9.textContent = quiz_data.futebol.questions[9].pergunta

    const p10op1 = document.getElementById("opcao37");
    p10op1.textContent = quiz_data.futebol.questions[9].opcoes[0]

    const p10op2 = document.getElementById("opcao38");
    p10op2.textContent = quiz_data.futebol.questions[9].opcoes[1]

    const p10op3 = document.getElementById("opcao39");
    p10op3.textContent = quiz_data.futebol.questions[9].opcoes[2]

    const p10op4 = document.getElementById("opcao40");
    p10op4.textContent = quiz_data.futebol.questions[9].opcoes[3]

    // ------------------------------------------------------------ //

}

    //gerarDinamicamente();

// function gerarDinamicamente(){
//     const elemento = document.getElementById("title2");
//     elemento.textContent = quiz_data.futebol.questions[0].pergunta
    
//     let nomes = quiz_data.futebol.questions[0].opcoes;
//     let lista = document.getElementById('lista');
//     for(var i = 0; i < nomes.length; i++){
//         let item = document.createElement('input');
//         item.type = "radio";
//         item.name = "test";

//         item.appendChild(document.createTextNode(nomes[i]));
//         lista.appendChild(item);
//     }
// }

var showQuestions = false;

const quiz_data = {
    futebol: {
        titulo: 'futebol',
        questions: [
            {
                pergunta: 'Qual seleção possui mais títulos da Copa do Mundo da FIFA?',
                opcoes: ['Alemanha', 'Brasil', 'Argentina', 'Itália'],
                correto: 1
            },
            {
                pergunta: 'Qual jogador é conhecido mundialmente pelo apelido de "Rei do Futebol"?',
                opcoes: ['Neymar', 'Messi', 'Cristiano Ronaldo', 'Pelé'],
                correto: 3
            },
            {
                pergunta: 'Em qual país foi sediada a Copa do Mundo FIFA de 2014?',
                opcoes: ['África do Sul', 'Rússia', 'Brasil', 'Alemanha'],
                correto: 2
            },
            {
                pergunta: 'Qual seleção venceu a Copa do Mundo de 2010?',
                opcoes: ['Holanda', 'Espanha', 'Brasil', 'Alemanha'],
                correto: 1
            },
            {
                pergunta: 'Qual clube brasileiro venceu a Libertadores de 1999?',
                opcoes: ['Corinthians', 'São Paulo', 'Palmeiras', 'Flamengo'],
                correto: 2
            },
            {
                pergunta: 'Qual jogador ficou conhecido como "Fenômeno"?',
                opcoes: ['Ronaldo Nazário', 'Ronaldinho Gaúcho', 'Romário', 'Rivaldo'],
                correto: 0
            },
            {
                pergunta: 'Quantos jogadores de cada equipe começam uma partida de futebol em campo?',
                opcoes: ['9', '10', '11', '12'],
                correto: 2
            },
            {
                pergunta: 'Qual clube venceu a Champions League de 2023?',
                opcoes: ['Real Madrid', 'Manchester City', 'Inter de Milão', 'Liverpool'],
                correto: 1
            },
            {
                pergunta: 'Qual país venceu a Copa do Mundo FIFA de 2002?',
                opcoes: ['França', 'Croácia', 'Brasil', 'Argentina'],
                correto: 2
            },
            {
                pergunta: 'Qual é o maior rival do Palmeiras no clássico conhecido como Derby Paulista?',
                opcoes: ['Santos', 'São Paulo', 'Corinthians', 'Flamengo'],
                correto: 2
            }
        ]
    },
    
}

mostrarQuiz();
