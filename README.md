# Corrida-
function setup() {
  createCanvas(400, 400);
}

let xJogador1 = 0;
let xJogador2 = 0;
let xJogador3 = 0;
let xJogador4 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("#F0F2EC");
  } else {
    background("#242F6A");
  }
}

function desenhaJogadores() {
  textSize(40);
  text("🤒", xJogador1, 60);