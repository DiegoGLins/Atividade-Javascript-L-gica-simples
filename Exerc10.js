const birthYear = parseInt(prompt('Digite o ano de nascimento:'));

let data = new Date();
let year = data.getFullYear();
let = year - birthYear;
const idade = year - birthYear;
if (idade >= 16) {
  document.write('Você já está apto a votar');
} else {
  document.write('Desculpe você não está apto a votar');
}
