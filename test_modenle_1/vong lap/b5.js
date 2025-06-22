let a = 0
let b = 1
let sum = 0;
for (let i = 2; i < 20; i++) {
    let next = a + b;
    sum += next;
    a = b
    b = next
}
console.log(sum)