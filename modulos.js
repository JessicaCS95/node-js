//importando dados de pessoas
/*const executePessoas = require('./pessoas');

console.log(executePessoas);

console.log(executePessoas.pessoas, executePessoas.idade)*/

//Desestruturação
const {pessoas, idade} = require ('./pessoas');
console.log(pessoas, idade);

