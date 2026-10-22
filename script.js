function helloWorld(){
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

    //gerarDinamicamente();
}

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
                pergunta: 'Qual a seleção possui mais títulos da copa do mundo da FIFA?',
                opcoes: ['Alemanha', 'Brasil', 'EUA', 'China'],
                correto: 1
            },
            {
                pergunta: 'Qual jogador é conhecimento mundialmente pelo apelido de "rei do futebol" ?',
                opcoes: ['neymar', 'messi', 'cr7', 'Pelé'],
                correto: 3
            },
            {
                pergunta: 'Em qual país foi sediada a copa do mundo fifa 2014?',
                opcoes: ['south africa', 'russia', 'Brazil', 'germany'],
                correto: 2
            }
        ]
    },
    
}

helloWorld();
