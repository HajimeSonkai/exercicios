// NOTE programa 1
let ap1 = 2;
let bp1 = 2;

console.log(ap1 + "+" + bp1 + "=" + (ap1 + bp1));

console.log(ap1 + "-" + bp1 + "=" + (ap1 - bp1));

console.log(ap1 + "x" + bp1 + "=" + ap1 * bp1);

console.log(ap1 + "/" + bp1 + "=" + ap1 / bp1);

console.log(ap1 + "/" + bp1 + " resta:" + (ap1 % bp1));

console.log("");

// NOTE programa 2
let ap2 = 2
let bp2 = 4

if(ap2 > bp2) {
    console.log("o maior entre " + ap2 + " e " + bp2 + " é: " + ap2);
} else {
    console.log("o maior entre " + ap2 + " e " + bp2 + " é: " + bp2);
}

console.log("");

// NOTE progama 3
let ap3 = 8;
let bp3 = 12;
let cp3 = 6;

if (ap3 > bp3 && ap3 > cp3) {
  console.log("o maior entre " + ap3 + " e " + bp3 + " e " + cp3 + " é: " + ap3);
} else if (bp3 > ap3 && bp3 > cp3) {
  console.log("o maior entre " + ap3 + " e " + bp3 + " e " + cp3 + " é: " + bp3);
} else {
    console.log("o maior entre " + ap3 + " e " + bp3 + " e " + cp3 + " é: " + cp3);
}

console.log("");

// NOTE programa 4 Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let ap4 = -10

if (ap4 >= 1) {
  console.log("o numero " + ap4 + " é positivo");
} else if (ap4 < 0) {
  console.log("o numero " + ap4 + " é negativo");
} else {
  console.log("o numero " + ap4 + " é zero");
}

console.log("");

// NOTE Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus. Um ângulo será considerado inválido se não tiver um valor positivo.

let angulo1 = 90;
let angulo2 = 80;
let angulo3 = 10;
let angulosSoma = (angulo1+angulo2+angulo3)

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  switch (angulosSoma) {
    case 180:
      console.log("triangulo");
      break;
    default:
      console.log("não triangulo");
      break;
  }
} else {
  console.log("angulos invalidos");
}

