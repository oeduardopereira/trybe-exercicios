let saldo = 0.0;

function addSaldo(value){
    saldo += value;
    return saldo;
}


function removeSaldo(value){
    saldo -= value;
    return saldo;
}

function addFee(fee){
    saldo *= fee;
    return saldo;
}

function addSaldo(value){
    saldo += value;
    return saldo;
}

function divideSaldo(value){
    saldo /= value;
    return saldo;
}

addSaldo(3500.65);
removeSaldo(102.90);
addFee(0.17);
divideSaldo(4);

console.log(saldo);