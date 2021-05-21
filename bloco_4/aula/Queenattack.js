let linhaRainha = 4;
let colunaRainha = 4;

let linhaOponente = 9;
let colunaOponente = 9;

let oportunidade = false;

//if (linhaRainha === linhaOponente || colunaRainha === colunaOponente) {
//  oportunidade = true;
//  console.log("Rainha ataca na linha", linhaOponente, ", coluna", colunaOponente);
//} else {
//  oportunidade = false;
//}

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

if (oportunidade == false) {
  console.log("Errou!!!");
}
