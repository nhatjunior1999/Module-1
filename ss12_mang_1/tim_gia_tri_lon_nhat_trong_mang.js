let number = [-3, 5, 1, 3, 2, 10];
let max = number[0];
let value = 0;
for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
        value = i
    }
}document.write(`so lon nhat la ${max} tai index ${value}`)