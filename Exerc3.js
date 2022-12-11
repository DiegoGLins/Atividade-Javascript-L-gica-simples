// O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

const custodeFabrica = parseFloat(prompt('Digite o custo de fábrica do carro'));
const custoNewcar = 0;
const distribuidor = 0.28;
const impostos = 0.45;
const custodistribuidor = custodeFabrica * distribuidor;
const custoimpostos = custodeFabrica * impostos;
const totalNewcar = custodeFabrica + custodistribuidor + custoimpostos;

alert(`O custo total do novo carro é de: ${totalNewcar}`);
