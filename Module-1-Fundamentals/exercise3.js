// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (right, students) => {
    let points = 0;
    for (let index = 0; index < right.length; index += 1) {
        if (students[index] === 'N.A') { 
            points += 0; 
        }
        if ((right[index] !== students[index]) && (students[index] !== 'N.A')) {
            points -= 0.5;
        } 
        if (right[index] === students[index]) {
            points += 1;
        }
    }
    return points;
};

const getPoints = (RIGHT_ANSWERS, STUDENT_ANSWERS, callback) => {
    return callback(RIGHT_ANSWERS, STUDENT_ANSWERS);
};

console.log(getPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));