let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], contador = 0;

for (let i = 0; i < numbers.length; i++){
    contador += numbers[i];
} 

let avg = contador / numbers.length;
if(avg > 20) console.log("Maior que 20");
else console.log("Menor ou igual a 20"); 