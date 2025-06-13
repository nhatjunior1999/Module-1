let diemKiemTra = +prompt("Nhap diem kiem tra từ 1 - 10 điểm");
let diemGiuaKi = +prompt("Nhap diem giua ki từ 1 đến 10 điểm");
let diemCuoiKi = +prompt("Nhap diem cuoi ki từ 1 đến 10 điểm");
let tongDiem = (diemKiemTra + diemGiuaKi + diemCuoiKi) / 3;

if (tongDiem >= 0 && tongDiem <= 10) {
    if (tongDiem >= 9) {
        alert("bạn được học sinh xuất sắc" + tongDiem.toFixed(2))
    } else if (tongDiem > 8) {
        alert(" bạn được học sinh giỏi" + tongDiem.toFixed(2))
    } else if (tongDiem >= 6.5) {
        alert("học sinh trung bình khá" + " " + tongDiem.toFixed(5))
    } else {
        alert("học sinh kém " + tongDiem.toFixed(2))
    }
} else {
    alert(" điểm của bạn đã quá mời nhập lại")
}