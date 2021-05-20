let onen = Math.ceil(Math.random() * 60);
let twon = Math.ceil(Math.random() * 60);
let tren = Math.ceil(Math.random() * 60);
let fourn = Math.ceil(Math.random() * 60);
let fiven = Math.ceil(Math.random() * 60);
let sixn = Math.ceil(Math.random() * 60);

let lot = [onen, twon, tren, fourn, fiven, sixn];

console.log(onen);
console.log(twon);
console.log(tren);
console.log(fourn);
console.log(fiven);
console.log(sixn);

let game = [13, 32, 45, 8, 20, 19];

console.log("old P:"); 
console.log("tamanho do array, lot é", lot.length);

for (let indexlot = 0; indexlot < lot.length; indexlot+=1) {
  console.log("numero:", indexlot+1)
  console.log(lot[indexlot])
  console.log(game[indexlot])
  console.log("...")
  if (lot[indexlot] == game[0] || lot[indexlot] == game[1] || lot[indexlot] == game[2] | lot[indexlot] == game[3] | lot[indexlot] == game[4] | lot[indexlot] == game[5]) {
    console.log("acertou");
  }
}
