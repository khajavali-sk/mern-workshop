// function printNumbersInARange(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//     }
// }

// printNumbersInARange(1, 5);

// //some statements

// printNumbersInARange(10, 15);


// i = 0;
// do {
//     console.log("do-while :"+i);
//     i++;
// } while (i < 10);

// for (let j = 0; j < 10; j++) {
//     console.log("for loop :"+j);
// }


// nums = [10,20,30,40,50]
// for ( num of nums){
//     console.log(num);
// }

// for (let i=0; i<nums.length; i++){
//     console.log("using index :"+nums[i]);
// }

obj = {
    name:"abc",
    age:25,
    isStudent:true
}

for ( key in obj){
    console.log(key+" :"+obj[key]);
}

nums = [100,200,300,400,500]
for (num in nums){
    console.log(nums[num]);
}