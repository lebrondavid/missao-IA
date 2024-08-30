const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Neymar (1992) é um futebolista brasileiro, considerado um dos maiores da história. Ganhou diversos títulos jogando pelo Santos Futebol Clube, onde iniciou sua carreira aos 11 anos de idade. Sua posição é atacante, atuando como ponta-esquerda. Neymar jogou em diversos times.",
        alternativas: [
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Neymar é brasileiro ?",
        alternativas: [
            {
                texto: 
                afirmacao: "afirmacao"
            },
            {
                texto: "Não.",
                afirmacao: "afirmacao"
            }

            ]
        },
        {
        enunciado: "Você considera o Neymar um dos maiores da história do futebol ?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não.",
                afirmacao: "afirmacao"
            }    
            
        ]
    },
    {
        enunciado: "Quantos títulos o Neymar ganhu pelo Santos Futebol Clube ?",
        alternativas: [
            {
                texto: "6",
                afirmacao: "afirmacao"
            },
            {
                texto: "3",
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Com quantos anos Neymar começou sua carreira pelo santos ?",
        alternativas: [
            {
                texto: "11 anos de idade",
                afirmacao: "afirmacao"
            },
            {
                texto: "16 anos de idade",
                afirmacao: "afirmacao"
            }
            
        ]
    },
];

let atual = 0;
let perguntaAtual;
let histtoriaFinal= "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();