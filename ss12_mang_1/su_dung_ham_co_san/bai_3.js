let input = prompt("moi nhap vao mot chuoi")
let result = "";
for (let i = 0; i < input.length; i++) {
    let char = input[i]
    if (char >= `a` && char <= `z`) {
        result += char.toUpperCase();
    } else if (char >= `A` && char >= `Z`) {
        result += char.toLowerCase();
    } else {
        result += char;
    }


} console.log(`kqua cua bạn là : ${result}`)