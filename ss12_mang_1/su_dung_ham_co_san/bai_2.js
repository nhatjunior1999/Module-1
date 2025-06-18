let number = "025468"
let result = [];
for (let i = 0; i < number.length; i ++){
    let before = parseInt(number[i - 1]);
    let current = parseInt(number[i])
    if (before % 2 === 0 && current % 2 === 0) {
        result += "-" + number[i];
    }else {
        result += number[i];
    }
}
console.log(result)
