for(let i = 1; i <= 5; i++){
    console.log(i);
}

function printNumbersRecursively(current, end){
    if(current > end){
        return;
    }
    console.log(current);
    printNumbersRecursively(current + 1, end);
}
printNumbersRecursively(1, 5);