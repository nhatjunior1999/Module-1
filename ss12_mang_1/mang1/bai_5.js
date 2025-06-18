let number = [1,-2,3,-4,-5,6,-7,8,-9];
let count = 0;
for (let i = 0 ; i < number.length; i++){
    if (number[i] < 0){
        count++
    }

}
console.log(" số phần tử âm là :  " + count)
