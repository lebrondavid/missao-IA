const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Neymar (1992) é um futebolista brasileiro, considerado um dos maiores da história. Ganhou diversos títulos jogando pelo Santos Futebol Clube, onde iniciou sua carreira aos 11 anos de idade. Sua posição é atacante, atuando como ponta-esquerda. Neymar jogou em diversos times.",
        alternativas: [
            "Isso é maravilhoso!",
            "Isso é assustador!"
        ]
    },
    {
        enunciado: "Neymar é brasileiro ?",
        alternativas: [
            "Sim.",
            "Não."
        ]
    },
    {
        enunciado: "Você considera o Neymar um dos maiore sda história ?",
        alternativas: [
            "Sim.",
            "Não"
        ]
    },
    {
        enunciado: "Quantos títulos o Neymar ganhu pelo Santos Futebol Clube ?",
        alternativas: [
            "6",
            "3"
        ]
    },
    {
        enunciado: "Com quantos anos Neymar começou sua carreira pelo santos ?",
        alternativas: [
            "11 anos de idade",
            "16 anos de idade"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPergunta. textContent = perguntaAtual.enunciado;
}

mostrarPergunta();
