//Crie três variáveis (nome, idade e cidade). Em seguida, crie uma arrow function chamada apresentarUsuario que pegue essas variáveis e retorne uma frase bonita usando Template Literals (com crases). Ex: "Olá, eu sou o Thiago, tenho 20 anos e moro em São Paulo."
let nome = 'Thiago';
let idade = '13';
let cidade = 'Maceio';
const apresentarUsuario = () => console.log(`Olá, eu sou o ${nome}, tenho ${idade} e moro em ${cidade}`);
apresentarUsuario();
