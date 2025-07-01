// Class đại diện cho 1 sổ tiết kiệm
class SoTietKiem {
    constructor(maSo, loai, hoTen, cmnd, ngayMo, soTien) {
        this.maSo = maSo;
        this.loai = loai;
        this.hoTen = hoTen;
        this.cmnd = cmnd;
        this.ngayMo = ngayMo;
        this.soTien = soTien;
    }
}

// Danh sách tất cả sổ tiết kiệm
let danhSach = [];

// Hàm thêm sổ mới
function themSo() {
    let maSo = document.getElementById("maSo").value;
    let loai = document.getElementById("loaiTietKiem").value;
    let hoTen = document.getElementById("hoTen").value;
    let cmnd = document.getElementById("cmnd").value;
    let ngayMo = document.getElementById("ngayMo").value;
    let soTien = document.getElementById("soTien").value;

    // Tạo đối tượng mới
    let stk = new SoTietKiem(maSo, loai, hoTen, cmnd, ngayMo, Number(soTien));

    // Thêm vào danh sách
    danhSach.push(stk);

    // Hiển thị lại bảng
    hienThiDanhSach();

    // Xóa nội dung trong ô input
    lamMoi();
}

// Hàm xóa sổ theo mã
function xoaSo() {
    let maXoa = prompt("Nhập mã sổ muốn xóa:");
    let danhSachMoi = [];
    let timThay = false; // Cờ kiểm tra có tìm thấy mã không

    for (let so of danhSach) {
        if (so.maSo === maXoa) {
            // Nếu mã trùng, không thêm vào danh sách mới => xóa
            timThay = true; // Đánh dấu là đã tìm thấy để xóa
            console.log("Đã xóa sổ có mã:", maXoa);
        } else {
            // Nếu không trùng mã, thì giữ lại
            danhSachMoi.push(so);
        }
    }

    if (timThay) {
        danhSach = danhSachMoi;
        alert("Đã xóa sổ có mã: " + maXoa);
    } else {
        alert("Không tìm thấy sổ có mã: " + maXoa);
    }

    hienThiDanhSach();
}


// Hàm hiển thị tất cả sổ ra bảng
function hienThiDanhSach() {
    let bang = document.getElementById("bangHienThi");
    bang.innerHTML = "";

    for (let so of danhSach) {
        let row = `
      <tr>
        <td>${so.maSo}</td>
        <td>${so.loai}</td>
        <td>${so.hoTen}</td>
        <td>${so.cmnd}</td>
        <td>${so.ngayMo}</td>
        <td>${so.soTien}</td>
      </tr>
    `;
        bang.innerHTML += row;
    }
}

// Hàm làm trống form nhập
function lamMoi() {
    document.getElementById("maSo").value = "";
    document.getElementById("loaiTietKiem").value = "";
    document.getElementById("hoTen").value = "";
    document.getElementById("cmnd").value = "";
    document.getElementById("ngayMo").value = "";
    document.getElementById("soTien").value = "";
}
