//Crie um array contendo várias idades misturadas (ex: [12, 18, 25, 10, 30, 16]). Crie uma função que receba esse array e use o método .filter() para retornar um novo array contendo apenas as idades maiores ou iguais a 18.
const idade = {
    lista_idades: [12, 18, 25, 10, 30, 16],
    get maior_que_18() {
        return this.lista_idades.filter(idd => idd > 18);
    },
    get menor_que_18() {
        return this.lista_idades.filter(idd => idd < 18);
    },
    get igual_a_18() {
        return this.lista_idades.filter(idd => idd === 18);
    }
};
console.log(idade.igual_a_18);