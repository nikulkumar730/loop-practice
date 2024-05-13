let array1 = [10, 12, 15];
let array2 = [10, 12, 15];

// Sum two arrays without using a for loop
// let sum = array1.map((value, index) => value + array2[index]);
// const sum = [...array1,...array2]
// let sum2 = sum.reduce((acc, val) => acc + val, 0);
// console.log(sum2);


// ------------------------without redius-----------------------------
const mergedArray =[...array1,...array2] ;
// Initialize sum variable
let sum = 0;
// Calculate the sum using forEach
mergedArray.forEach(element => {
    sum=sum+element
});
console.log(sum);