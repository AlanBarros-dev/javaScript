//   ex1     ex2       And(&&),      or(||),        not(!)
/*    T       T          T            T
      F       T          F            T
      T       F          F            T
      F       F          F            F     
*/

const total = 5;
const azuis = 3;
const vermelha = 2;

let ExA = (null);
let ExB = (false);

console.log(total > 6);
console.log(azuis >= 2);

console.log(ExA && ExB);
console.log(ExA || ExB);
console.log(!ExA);


//ex 2: Para uma pessoa viajar para o exterior:
// precisa ser maior de 18 anos ou precisa estar acompanhado pelos pais e
// ter comprado a passagem

/*const idade = 18;
const familia = false ;
const passagem = false;

let pode_viajar =  (idade >= 18 || familia) && passagem;

console.log(`Atende os requerimentos para viajem: ${pode_viajar} `);
*/
