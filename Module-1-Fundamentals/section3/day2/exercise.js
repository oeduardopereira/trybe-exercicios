let n = 10;
let whiteSpace = " ";
let ast = "*";
let result = "";
let x = n;

for (let i = 0; i < n ; i++) {
    for(let j = 0; j < n; j++) {
        if(j < x - 1){
            result += whiteSpace;
        }
        else{
            result += ast;
        }
    }
    x--;
    console.log(result);
    result = "";
}
