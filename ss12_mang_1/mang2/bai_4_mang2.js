let string = "tolongnhat"
let member;
let count = 0;
for (let i = 0; i < string.length; i++) {
    member = string[i]
    if (member >= `a` && member <= `z` || member >= `A` && member >= `z`) {
        count++
    }
}

console.log(`Chuỗi có số ký tự chữ cái là ${count}`);
