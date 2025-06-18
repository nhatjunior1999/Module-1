let number = [10, 8, 9, 7, 5, 12, 15];
let max = number[0];
let sum = 0;
let tb;
for (let i = 0; i < number.length; i++) {

    sum += number[i]// cọng tất cả các số baass kì số nào nêu để trong if thì nó sẽ cộng những s

    if (max < number[i]) {
        max = number[i]
    }
}
tb = (sum / number.length)

console.log(`gia tri lon nhat ${max}`)
console.log(`gia tri trung binh ${tb}`)