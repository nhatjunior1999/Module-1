function tamGiac(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";  // tạo dòng rỗng
        for (let j = 1; j <= i; j++) {
            row += "*";  // nối thêm dấu *
        }
        console.log(row);  // in ra dòng sau khi hoàn thành
    }
}
tamGiac(5);
