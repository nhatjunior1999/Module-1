let student = {
    // key + value
    // thuộc tính
    fullName: "Trần Như Nhộng",
    birthYear: 2005,
    address: {
        city: "Hà Nội",
        country: "Việt Nam",
    },
    scores: [8, 9, 10],
    // phương thức
    getAge: function () {
        return 2024 - this.birthYear;
    },

    diemTrungBinh: function () {
        // tính tổng điểm
        sumScores = this.scores.reduce((a, b) => a + b, 0);
        // Trả về dtb
        return sumScores / 3;
    },
};
console.log(student.scores[0])
console.log(student.diemTrungBinh())