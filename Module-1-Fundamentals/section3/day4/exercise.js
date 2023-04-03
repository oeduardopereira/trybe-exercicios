let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem-vindo, ' + info.personagem);

info['recorrente'] = 'Sim';

console.log();

for (let key in info) {
  console.log(key);
}

console.log();

for (let value in info) {
  console.log(info[value]);
}

console.log();

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let value in info) {
  if (info[value] === 'Sim' && info2[value] === 'Sim'){
    console.log('Ambos recorrentes');
  }
  console.log(info[value] + ' e ' + info2[value]);
}