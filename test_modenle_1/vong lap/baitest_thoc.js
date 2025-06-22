let a = +prompt("oi nghap so");
let s = 0 ;
if(a %2 ===0){
    for (let i = 0; i <= a; i+= 2) {
        s+=i
    }
    alert("tong cac so chan t 0 den " + a + "la "+ s)
}else {
    alert("so le")
}
