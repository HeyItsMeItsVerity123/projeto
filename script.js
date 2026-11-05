function mostrarQuiz(){
    console.log(quiz_data);
}

function mudarEstado(el) {  //essa é a função que faz o quiz aparecer, se na hora que a função ativar o display estiver bloqueado, o bloqueio sai e o quiz aparece. Vice-versa, se o quiz nao estiver com bloqueio na hora que a função ativa dnv, o bloqueio ativa e o quiz some
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';

    buildQuestion();
}
  
function buildQuestion() {        //escreve as perguntas depois de clicar no botão, o comando que faz essa função acontecer esta no final da que ativa quando clica no botao começar quiz          
    const questoes = quiz_data.futebol.questions;

    for (let i = 0; i < questoes.length; i++) {
        let num = i + 1;
        
        const elemento = document.getElementById("title" + num);
        if (elemento) {
            elemento.textContent = questoes[i].pergunta;
        }

        for (let j = 0; j < 4; j++) {
            let idLabel = (i * 4) + j + 1;
            const op = document.getElementById("opcao" + idLabel); //é meio confuso, a label dos index estao registrados como "opcao",todas, esse for percorre as labels e vai escrevendo as perguntas no codigo abaixo:
            if (op) {                                                         //ex: opcao + 1 = opcao1
                op.textContent = questoes[i].opcoes[j]; //nesse, aqui começa a escrever as perguntas, pegando direto o numero e o que ta escrito pelo objeto
            }
        }
    }
}

function finalizarJogo() {
    const questoes = quiz_data.futebol.questions;
    let acertos = 0;

    for (let i = 0; i < questoes.length; i++) {         
        let numeroPergunta = i + 1;
        
        const radioMarcado = document.querySelector(`input[name="question${numeroPergunta}"]:checked`); //ve se os radio estao todos marcados, se nao estiver:
//aparece esse aviso:
        if (!radioMarcado) {
            alert(`OPS! Você precisa responder todas as perguntas. A pergunta ${numeroPergunta} ficou em branco.`);
            return; 
        }


        //todos os radios tem um valor de 0 a 3, esta linha faz com que esses valores se tornem um numero inteiro que o js consiga usar para fazer operações
        const indiceEscolhido = parseInt(radioMarcado.value);

        //o questoes[i] percorre todas as perguntas no objeto de perguntas
        if (indiceEscolhido === questoes[i].correto) {      //aqui ele compara se o que o usuario escolheu está registrado como resposta certa no onjeto
            acertos++;
        }
    }

    alert(`Fim de jogo! Você acertou ${acertos} de ${questoes.length} perguntas.`);
}

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
    }
};

mostrarQuiz();
