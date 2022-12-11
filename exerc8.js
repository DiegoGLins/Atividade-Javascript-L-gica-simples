const nome = prompt('Digite seu nome: ');
const idade = parseInt(prompt('Digite a sua idade: '));
let data = new Date();
let year = data.getFullYear();
let birthYear = year - idade;

document.write(`${nome} ,  ${nome.length} letras`);
document.write('<br /.>');
document.write(`Sua idade é: ${idade} e você nasceu em ${birthYear}`);
