let a = 0;
let b = 1;

for (let i = 2; i < 20; i++) {
    let c = a + b;
    console.log(c)

    a = b
    b = c

}