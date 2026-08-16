//Crie um array contendo os nomes de 3 filmes que você gosta. Crie uma função chamada adicionarFilme que recebe o nome de um filme novo e usa o .push() para colocá-lo na lista. Imprima a lista atualizada.
let favFilms = ['filme 1', 'filme 2', 'filme 3'];
console.log(favFilms);
const adicionarFilme = (nomeDoFilme) => favFilms.push(nomeDoFilme);
adicionarFilme('filme 4');
console.log(favFilms);
