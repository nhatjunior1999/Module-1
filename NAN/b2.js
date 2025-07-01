// Nhập 2 phân số dạng a/b từ người dùng
//
// Kiểm tra xem hai phân số đó có bằng nhau không
//
// So sánh bằng cách nhân chéo: a*d == b*c
function compareNumber(a, b, c, d) {
    if (a * d === b * c) {
        return "2 phân số bằng nhau";
    } else {
        return "2 phân số không bằng nhau";
    }
}
function nhapPhanSo(thuTu){
    let phanSo ;
    let hople =false;
    while (!hople){
        let input = prompt("nhap phan son " +  thuTu +"dạng a/b")
        let tach = input.split("/")// Tách chuỗi thành mảng: ["3", "4"]

        if (tach.length === 2){
            let tu  =  parseInt(tach[0])
            let mau  =  parseInt(tach[1])
            if (!isNaN(tu) && !isNaN(mau) && mau !== 0){
                phanSo = [tu , mau];
                hople = true;
            }else {
                alert("tu va mau phai la so nguyen va mau khac khong ")
            }

        }else {
            alert("sai định dạng hãy nhãy nhập theo dạng a/b")
        }
    }
    return phanSo
}
function kiemTraPhanSo(){
    let ps1 = nhapPhanSo(1);
    let  ps2 = nhapPhanSo(2);
    let ketQua = compareNumber(ps1[0],ps1[1],ps2[0],ps2[1])
    alert(ketQua)

}
kiemTraPhanSo()