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
  turno: 'noite',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

let allLessons = Object.assign({}, {lesson1: lesson1, 
  lesson2: lesson2, lesson3: lesson3});

function getValueByNumber(obj, key) {
  let values = Object.values(obj);
  let value = values[key];
  return value;
}

console.log(getValueByNumber(lesson1, 0));
