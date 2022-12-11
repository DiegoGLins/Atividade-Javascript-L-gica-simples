const salarioFixo = parseFloat(
  prompt('Digite o valor fixo que o vendedor recebe: ')
);
const ComissãoPorCarro = parseFloat(
  prompt('Digite o valor de comissão recebida por cada carro vendido : ')
);
const QtdCarrosVendidos = parseFloat(
  prompt('Digite a quantidade de carros vendidos:')
);
const ValorTotalVendido = parseFloat(
  prompt('Digite o valor total em reais vendido: ')
);
const salarioFinal =
  salarioFixo +
  ValorTotalVendido * 0.05 +
  QtdCarrosVendidos * (ComissãoPorCarro / 100);

alert(`O salário Final do vendedor é: R$${salarioFinal}`);
