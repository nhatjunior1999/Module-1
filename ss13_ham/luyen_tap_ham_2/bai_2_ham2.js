function dienTichHinhTron(r){
    return Math.PI * r *r
}
function chuViHinhTron(r){
    return 2 * Math.PI * r
}
let inputS = +prompt("moi ban nhap vao ban kinh hinh tron cm²  ");
let resultS = dienTichHinhTron(inputS);
alert(`Dien tich hinh tron la : ${resultS.toFixed(2)} cm²`)
let inputC = +prompt("moi ban  nhap vao ban kinh hinh tron cm² ");
let resultC = chuViHinhTron(inputC);
alert(`chu vi hinh tron la ${resultC.toFixed(2) +"cm²" }`)