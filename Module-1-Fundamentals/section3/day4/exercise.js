let student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  let student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Sexo',
  };

  function print(obj) {
    for (let key in obj) {
        console.log(key + ': ' + obj[key]);
    }
  };
let std3 = [];
  print(student1);
  console.log("");
  console.log(Object.keys(student2));
  console.log(Object.values(student2));
  console.log();

  console.log(Object.entries(student1));
  
  console.log();
  Object.assign(std3, student2);
  console.log(std3);