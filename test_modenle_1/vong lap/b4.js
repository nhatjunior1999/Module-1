let a = 0;
let b = 1;


while (true) {
    let next = a + b;

    if (next % 5 === 0) {
        console.log("Số đầu tiên trong dãy Fibonacci chia hết cho 5 là: " + next)
        break;
    }

    a = b;
    b = next
}