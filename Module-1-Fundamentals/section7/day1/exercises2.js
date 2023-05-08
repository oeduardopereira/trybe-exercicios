// Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5,
// recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const checkNumber = (guess, number) => guess === number;

const validateGuess = (guess, callback) => {
    const number = Math.floor((Math.random() * 5 + 1));
    return callback(guess, number) ? 'Congratulations you win!!!' : 'try again! :( ' + number;
};

console.log(validateGuess(3, checkNumber));