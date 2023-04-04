const substituaX = (name) => {
    const phrase = 'Tryber x aqui!';
    let phraseSplited = phrase.split(' ');
    for (let i = 0; i < phraseSplited.length; i += 1) {
        if (phraseSplited[i] === 'x') {
            phraseSplited[i] = name;
            break;
        }
    }
    let phraseJoinned = phraseSplited.join(' ');
    return phraseJoinned;
}

let eu = 'Eduardo Pereira Filho';
console.log(substituaX(eu));
