let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurnLesson2(obj, key, value) {
  obj[key] = value;
  console.log(obj);
}

let turno = 'turno';
let noite = 'noite';

addTurnLesson2(lesson2, turno, noite);