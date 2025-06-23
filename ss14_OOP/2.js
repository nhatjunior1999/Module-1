let infor = {
    fullName: "To Long Nhat",
    birthYear: "1999",
    numberPhone: "0975918087",
    address: {
        city: "thanh hoa ",
        country: "viet nam "
    },
    scores: [7, 8, 9, 10, 11, 12, 13111]


};
let input =  prompt(" hãy chọn các mục sau để lấy thông tin của bạn : (fullName , birthYear , numberPhone , address , scores)");
console.log(infor[input])