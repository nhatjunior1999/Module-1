// bài 1
let physics = Number(prompt(" nhập vào điểm môn vật lý của bạn : "));
let chemistry = Number(prompt(" nhập vào điểm môm sinh học của bạn "));
let biology = Number(prompt("nhập vào điểm môn hóa học của bạn"));
let tbt = (physics + chemistry + biology);
let average = tbt / 3;

document.write("điểm Tổng ba môn của bạn là : " + tbt + " điểm")
document.write("<br>")
document.write("điểm Trung bình  ba môn của bạn là : " + average.toFixed(2) + " điểm")

