function sayHello(){
    console.log("Hello, World!");
}

function sayHelloTo(name){
    console.log("Hello, " + name + "!");
}

// function addNumbers(a, b){
//     console.log(a+b);
// }


function addNumbersAndReturn(a,b=0) {
    return a + b;
}

console.log("addNumbersAndReturn function:", addNumbersAndReturn(10,20));



// sayHello()
// sayHelloTo()
// sum = addNumbers(10,20)
// console.log("without return:"+sum)
// sum = addNumbersAndReturn(10,20)
// console.log("without return:"+sum)

// fn = addNumbersAndReturn
// console.log("o/p of func ref:"+fn(10,20))

// console.log("multiply of 2 nums:"+multiply(10,20));

// let multiply = function(a,b){
//     return a*b;
// }

// sum = addNumbers(10,20,30,40,50);
// console.log("sum of 2 nums:"+sum);

// function addNumbers( ...moreNumbers){
//     let sum = 0;
//     for (let num of moreNumbers){
//         sum += num;
//     }
//     return sum;
// }




    