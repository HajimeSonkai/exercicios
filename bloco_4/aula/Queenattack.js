let linhaRainha = 4;
let colunaRainha = 4;

let linhaOponente = 8;
let colunaOponente = 1;

let oportunidade = false;

//if (linhaRainha === linhaOponente || colunaRainha === colunaOponente) {
//  oportunidade = true;
//  console.log("Rainha ataca na linha", linhaOponente, ", coluna", colunaOponente);
//} else {
//  oportunidade = false;
//}

// NOTE diagonal superiror direita
for (let isupdir = 1; isupdir < 8; isupdir +=1) {
  let linhaAtualRainha = linhaRainha + isupdir;
  let colunaAtualRainha = colunaRainha + isupdir;

  if(linhaAtualRainha > 8 || colunaAtualRainha > 8) {
    console.log("erro de tabuleiro");
    break
  }
  if (linhaOponente === linhaAtualRainha && colunaAtualRainha === colunaAtualRainha) {
oportunidade = true;
console.log("Rainha ataca na linha", linhaOponente, ", coluna", colunaOponente);
  } else {
    oportunidade = false;
  }
}
// fim da diagonal superir direita

// NOTE diagonal superiror esquerda
for (let iSupEsq = 1; iSupEsq < 8; iSupEsq +=1) {
  let linhaAtualRainha = linhaRainha + iSupEsq;
  let colunaAtualRainha = colunaRainha - iSupEsq;

  if(linhaAtualRainha > 8 || colunaAtualRainha < 1) {
    console.log("erro de tabuleiro");
    break
  }
  if (linhaOponente === linhaAtualRainha && colunaAtualRainha === colunaAtualRainha) {
oportunidade = true;
console.log("Rainha ataca na linha", linhaOponente, ", coluna", colunaOponente);
  } else {
    oportunidade = false;
  }
}
// fim da diagonal superir direita

if (oportunidade == false) {
  console.log("Errou!!!");
}
