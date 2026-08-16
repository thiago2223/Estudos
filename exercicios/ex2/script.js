//Crie uma arrow function que receba dois parâmetros: peso e altura. Calcule o IMC (a fórmula é peso dividido pela altura ao quadrado). Retorne o resultado usando Template Literals: "Seu IMC é de 24.5!".
const calcularIMC = (peso, altura) => console.log(`Seu IMC é de ${peso / (altura*altura)}`);
calcularIMC(60, 1.90);