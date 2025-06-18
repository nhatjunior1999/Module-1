let number = [1, 2, 3, 14, 5, 6, 17, 8, 9, 10];
let max = number[0]
let index = 0 ;
for (let i = 0 ; i < number.length ; i++){
    if( number[i] > max){
        max = number[i]
        index = i
    }
}
console.log(`so lon nhat la ${max} vi tri ${index}`)