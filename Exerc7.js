let QtdMaçasCompradas = parseFloat(
  prompt('Digite a quantidade de maças compradas')
);
let valorNormalMaça = 0.3;
let valorMaçaDeconto = 0.25;
let resultado = '';

if (QtdMaçasCompradas < 12) {
  resultado = QtdMaçasCompradas * valorNormalMaça;
  document.write('O valor total de maçãs é:' + ' ' + 'R$' + resultado);
} else {
  resultado = QtdMaçasCompradas * valorMaçaDeconto;
  document.write('O valor total de maçãs é:' + ' ' + 'R$' + resultado);
}
