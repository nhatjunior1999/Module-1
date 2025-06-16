let khaiBao;

for (;;){
     khaiBao = +prompt(" nhâp vào số nhiệt độ")
    if (100 <= khaiBao){
        alert(" nhiệt độ quá cao mời bạn nhập lại")
    }else if (khaiBao <= 20) {
        alert(" nhiệt độ thấp mời bạn nhập lại")
    }else {
        alert(` nhiệt độ của bạn đạt chuẩn rồi ${khaiBao}`)
        break
    }

}