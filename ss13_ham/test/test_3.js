function greet(name, age) {
    console.log(`xin chao ${name} ${age}`)
}

// // tham so la : name va age  , doi so la toan va 26
// greet("toan", 26);
// //bai 2
// function showInfo(fullname ,job){
// alert(`xin chao toi la ${fullname} , to lam nghe ${job}`)
// }
// console.log(showInfo("nhat","daubep"));
// // bai 3 :
// function sumThreeNumber(a,b,c){
//     return a + b + c
// }
// console.log(sumThreeNumber(1,2,3))
//
//


function checkEvenodd(number) {
    if (number % 2 === 0) {
        return number + "day la so chan";
    } else {
        return number +
            "day la so le";}

};
alert(
    checkEvenodd(5)
)