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
    text("😵‍💫", xJogador2, 160);
    text("🫨", xJogador3, 260);
    text("😮‍💨", xJogador4, 360);
  }
  
  function desenhaLinhaDeChegada() {
    rect(350, 0, 10, 400);
  }
  
  function verificaVencedor() {
    if (xJogador1 > 350) {
      text("Jogador 1 venceu!", 20, 150);
      noLoop();
    }
    if (xJogador2 > 350) {
      text("Jogador 2 venceu!", 20, 150);
      noLoop();
    }
     if (xJogador3 > 350) {
      text("Jogador 3 venceu!", 20, 150);
      noLoop();
     }
     if (xJogador4 > 350) {
      text("Jogador 4 venceu!", 20, 150);
      noLoop();
     }
  }