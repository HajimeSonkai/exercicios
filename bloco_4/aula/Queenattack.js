let linhaRainha = 4;
let colunaRainha = 4;

let linhaOponente = 4;
let colunaOponente = 7;

let oportunidade = false;

if (linhaRainha === linhaOponente || colunaRainha === colunaOponente) {
  oportunidade = true;
  console.log("Rainha ataca na linha", linhaOponente, ", coluna", colunaOponente);
} else {
  oportunidade = false;
}

console.log(oportunidade);