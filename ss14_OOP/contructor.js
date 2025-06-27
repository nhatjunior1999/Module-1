class newperson {
    constructor(name) {
        this.name = name;
    }

    getSpeek1() {
        console.log(` ten cua toi la ${this.name}`)
    }
}

class animal extends newperson {
    constructor(name, age, address) {
        super(name);
        this.age = age;
        this.address = address;
    };

    getSpeak2() {
        console.log(`to ten la ${this.name} so tuoi cua toi la ${this.age} dia chi cua toi la ${this.address}`)
    }
}

class student extends animal {
    constructor(name, age, address, school, id) {
        super(name, age, address);
        this.id = id;
        this.school = school;
    }

    getSpeak3() {
        super.getSpeak2();
        console.log(`toi hoc truong ${this.school} va id cua toi la : ${this.id}`)

    }

}

class student2 extends animal {
    constructor(name, age, address, school, id, class1) {
        super(name, age, address, school, id);
        this.class1 = class1;

    }

    getSpeak4() {
        super.getSpeak2();
        console.log(`lop cua toi la ${this.class1}`)
    }

}
let k = new student2("longnhat1",8,"hoa khanh" ,"codegym",1000,"c05");
k.getSpeak4()

// let c = new student("nhat", 85, "can tho ", "code gym ", 100)
// c.getSpeak3()
// console.log("")
// console.log("")
//
// let b = new animal("tolongnhat", 28, "ha noi")
// b.getSpeak2()
//
//
// let a = new newperson("vo van thanh")
// a.getSpeek1()