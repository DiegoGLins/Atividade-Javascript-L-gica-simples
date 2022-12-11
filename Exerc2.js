const Totaleleitores = prompt('Digite o número total de eleitores:');
const VotosBrancos = prompt('Digite o número de votos brancos');
const VotosNulos = prompt('Digite o número de votos nulos');
const VotosValidos = Totaleleitores - VotosBrancos - VotosNulos;

const msg = 'O número de eleteitores válidos é:';

alert(`${msg} ${VotosValidos}`);

const PercentVotosValidos = (VotosValidos / Totaleleitores) * 100;
const PercentVotosNulos = (VotosNulos / Totaleleitores) * 100;
const PercentVotosBrancos = (VotosBrancos / Totaleleitores) * 100;

alert(
  `O percentual de votos válidos é de: ${PercentVotosValidos.toFixed(2)}${'%'}`
);
alert(
  `O percentual de votos nulos é de: ${PercentVotosNulos.toFixed(2)}${'%'}`
);
alert(
  `O percentual de votos brancos é de: ${PercentVotosBrancos.toFixed(2)}${'%'}`
);
