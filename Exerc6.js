let firstNumber = parseFloat(prompt('Informe um número.'));
let secondNumber = parseFloat(prompt('Informe outro número.'));
if (firstNumber == secondNumber) {
  document.write('Os números informados são iguais');
} else {
  if (firstNumber > secondNumber) {
    document.write('O número' + ' ' + firstNumber + ' ' + 'é maior ' + '.<br>');
  } else {
    document.write('O número' + ' ' + secondNumber + '' + 'é maior ' + '.<br>');
  }
}
