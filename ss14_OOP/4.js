class  pet{
    constructor(name , type , age) {
        this.name =name;
        this.type =type;
        this.age = age
    }
    introduce(){
        console.log(`ten toi la ${this.name} kiểu loại cua tôi là ${this.type}, tuổi của tôi là ${this.age}`);

    }
    birthday(){
        this.age+=1;
        console.log(`chuc mừng ${this.name} vùa thêm tuổi mới và bây giờ là tuổi ${this.age}`)
    }
}
let meo = new pet("miu" , "mèo" , 2);
let cho = new pet("gâu" , "chó " , 5);
meo.introduce()
meo.birthday()
console.log(cho.birthday());
