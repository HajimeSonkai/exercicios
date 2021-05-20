let lot = [12, 45, 56, 54, 32, 60, 10, 30, 50, 90];

console.log(lot[3]); 
console.log("tamanho do array, lot é", lot.length);

for (let indexlot = 0; indexlot < lot.length; indexlot+=1) {
  console.log(lot[indexlot])
}

console.log("");

for (lotimprime of lot) {
  console.log(lotimprime);
}