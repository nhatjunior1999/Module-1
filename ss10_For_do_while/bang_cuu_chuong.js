let bangCuuChuong;
let i;
let j;
bangCuuChuong = "<table border = '1' width = '450' cellspacing = '0'  cellpadding='10' >  "
for (i = 1; i <= 10; i++) {
    // lặp 10 dòng tr
    bangCuuChuong = bangCuuChuong + "<tr>"
    for (j = 2; j <= 10; j++) {
        // lặp 10 ô td trong 1 tr
        bangCuuChuong = bangCuuChuong + "<td>" + j + "x" + i + "=" + j * i + "</td>";
    }
    // đóng thẻ tr
    bangCuuChuong = bangCuuChuong + "</tr>"
}
bangCuuChuong = bangCuuChuong + "</table>"
document .write(bangCuuChuong)

/* tạo ra các hàng <tr> sau đó trong mỗi <tr> lặp 10 <td >
lưu ý :  đóng mở thẻ <table> và đóng table tương tự mở thẻ tr đóng thẻ tr bên ngoài td
 */




















