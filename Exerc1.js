let A = 10;
let B = 20;
let X = null;
console.log(`O valor de A é ${A} e de B é ${B}`);

X = A;
A = B;
B = X;

console.log(`O valor de A é ${A} e de B é ${B}`);
