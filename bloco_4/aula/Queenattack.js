let linhaRainha = 4;
let colunaRainha = 4;

let linhaOponente = 0;
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

// NOTE diagonal inferior esquerda
for (let lInfEsq = 1; lInfEsq < 8; lInfEsq +=1) {
  let linhaAtualRainha = linhaRainha - lInfEsq;
  let colunaAtualRainha = colunaRainha - lInfEsq;

  if(linhaAtualRainha < 1 || colunaAtualRainha < 1) {
    break
  }
  if (linhaOponente === linhaAtualRainha && colunaAtualRainha === colunaAtualRainha) {
oportunidade = true;
console.log("Rainha ataca na linha", linhaOponente, ", coluna", colunaOponente);
  } else {
    oportunidade = false;
  }
}
// fim da diagonal inferior esquerda

if (oportunidade == false) {
}
