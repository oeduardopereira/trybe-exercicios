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

function minhasSkills (func1Return) {
    const skills = ['CSS', 'HTML', 'GIT'];
    let phrase = `
    ${func1Return}

    Minhas tres principais habilidades sao:`;
    for (let i = 0; i < skills.length; i += 1) {
        phrase = `${phrase} 
        - ${skills[i]}`;
    }
    return phrase;
}

console.log(minhasSkills(substituaX('Duzao')));

