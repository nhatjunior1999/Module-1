let number = [3, 7, 4, 6, 9, 10, 15];
let sum = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
        sum += number[i];
    }

}
document.write(`tong cac so chan trong mang la` + sum)
//
//
// Đếm có bao nhiêu số âm trong mảng [5, -1, 3, -7, 0, -2, 9]
//
// In ra số lượng đó bằng document.write

let number = [5, -1, 3, -7, 0, -2, 9];
let count = 0 ;
let result = "" ;
for (let i = 0 ; i <number.length; i++){
    if (0 > number[i]){
        count++
        result+=number[i]
    }
}
document.write(`so luong so am trong mang la ${count}`)