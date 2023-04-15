let array = ['java', 'javascript', 'python', 'html', 'css'];
let smaller = array[0], bigger = array[0];

for(let i = 0; i < array.length; i++){
    if (array[i].length > bigger.length ){
        bigger = array[i];
    }else if (array[i].length < smaller.length){
        smaller = array[i];
    }
}

console.log("Smaller: ",smaller);
console.log("Bigger: ", bigger);
