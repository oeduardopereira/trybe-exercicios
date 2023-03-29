// resultado esperado:
let n =[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arr = [];

for (let i = 0; i < n.length; i++){
    if(i === n.length - 1){
        arr.push(n[i] * 2);
    }else{
        arr.push(n[i] * n[i + 1]);
    }
}

console.log(arr);
