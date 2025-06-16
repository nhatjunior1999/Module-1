let tienGui = +prompt(" so tien gui cua ban la ");
let laiSuatMotThang = +prompt("so phan tram lai xuat %");
let soThang = +prompt("so thang ma ban muon gui :");
let tienLaiThang = 0 ;
for (let i = 1 ; i <= soThang ; i++){
    tienLaiThang = tienGui * laiSuatMotThang/100;
    tienGui += tienLaiThang;

}
console.log(`tong tien gui sau $${soThang} la ${tienGui}`);