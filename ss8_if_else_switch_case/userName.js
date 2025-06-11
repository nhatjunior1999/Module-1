let userName = prompt("nhập tên email của chủ laptop : ");

if (userName == "tolongnhat1999@gmail.com") {
    alert(`welcome`)
}else if (userName == null){
    alert(`không xác định`)
}else {
    alert(` xin mời hãy nhập lại`)
}
let pass = prompt(` hãy nhập mật khẩu của laptop`);
if (pass == "0975918087") {
    alert(` bạn đã đoán đúng`);
} else if (pass == null) {
    alert(` không xác định`)
} else {
        alert(` mời bạn nhập lại`)
}
