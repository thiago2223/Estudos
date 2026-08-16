//Crie uma função clássica que receba a idade de uma pessoa. Use if e else. Se for maior ou igual a 18, retorne "Entrada liberada". Se for menor, retorne "Entrada bloqueada, volte daqui a X anos" (calcule a diferença e use Template Literals para mostrar o X).
function podeEntrarOuNao(idade) {
    if(idade >= 18) {
        console.log(`Entrada liberada.`);
    } else {
        console.log(`Entrada bloqueada, volte daqui a ${18 - idade} anos.`);
    };
};
podeEntrarOuNao(16);