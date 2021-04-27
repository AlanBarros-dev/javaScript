
//ex 2: Para uma pessoa viajar para o exterior:
// precisa ser maior de 18 anos ou precisa estar acompanhado pelos pais
// ter comprado a passagem

let tabelaP = ` precos: 50.00, 100.,00`;
let idade = 12;
let PaisPresentes = true;
let passagem = false;
const pode_viajar =  (idade >= 18 || PaisPresentes) && passagem;



if(idade >= 18){console.log(`Ola, cliente X sua idade e: ${idade}, por favor escaneie  seu codigo de barras da passagem...`)
    if(passagem === true){console.log(`Muito Obrigado agradecemos, e boa viagem :)`)}
    else{console.log(`Cliente X nao possui passagem por favor escolha uma de nossas promocoes ${tabelaP}`)}
}
else{console.log(`Opa cliente X voce possui idade ${idade}, por favor mostre sua permissao de viagem ou apresente seus pais`)
    if(PaisPresentes === true){console.log(`Boa noite familia apresente suas passagens e boa viagem :)`)}
    if(PaisPresentes === false){console.log(`Nao podera viajar desculpe`)}
    if(passagem === true){console.log(` obrigado familia boa viagem`)}
    else{console.log(`por favor escolham qual sera a promocao de hoje ${tabelaP}`)}

}

console.log(`Atende os requerimentos para viajem: ${pode_viajar} `);

/*
4 alunos  A       B      C         
notas   10| 8    6|9    3|7     

faca um programa que contabilize as medias e diga se o aluno reprouvou quando a nota for 5 ou abaixo
da pra recuperar quando for 6 e passou 7 a cima 
*/

let n1a = 5;
let n2a = 5;
const mediaA =(n1a + n2a)/2;

let n1b = 6;
let n2b = 6;
const mediaB = (n1b + n2b)/2;

let n1c = 7;
let n2c = 8;
const mediaC = (n1c + n2c)/2;

if(mediaA <= 5){console.log(`nota1 ${ n1a}, nota2 ${n2a}, media: ${mediaA} aluno reprovado`)}
if(mediaA === 6){console.log(`nota1 ${ n1a}, nota2 ${n2a}, media: ${mediaA} aluno pode conseguir passar em recuperacao`)}
else{console.log(`nota1 ${ n1a}, nota2 ${n2a}, media: ${mediaA} aluno aprovado com exito`)}

if(mediaB <= 5){console.log(`nota1 ${ n1b}, nota2 ${n2b}, media: ${mediaB} aluno reprovado`)}
if(mediaB === 6){console.log(`nota1 ${ n1b}, nota2 ${n2b}, media: ${mediaB} aluno pode conseguir passar em recuperacao`)}
else{console.log(`nota1 ${ n1b}, nota2 ${n2b}, media: ${mediaB} aluno aprovado com exito`)}

if(mediaC <= 5){console.log(`nota1 ${ n1c}, nota2 ${n2c}, media: ${mediaC} aluno reprovado`)}
if(mediaC === 6){console.log(`nota1 ${ n1c}, nota2 ${n2c}, media: ${mediaC} aluno pode conseguir passar em recuperacao`)}
else{console.log(`nota1 ${ n1c}, nota2 ${n2c}, media: ${mediaC} aluno aprovado com exito`)}

// operador quternario formula
let maiorde18anos = (idade >= 18) ? `true `: `false`

console.log(maiorde18anos)