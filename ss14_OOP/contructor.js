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
class student extends animal{
    constructor(name , age , address , school , id  ) {
        super(name , age , address);
        this.id= id ;
        this.school = school;
    }
    getSpeak3() {
        super.getSpeak2(); console.log(`toi hoc truong ${this.school} va id cua toi la : ${this.id}`)

    }

}
let c = new student("nhat", 85 , "can tho " , "code gym ", 100)
c.getSpeak3()
console.log("")
console.log("")

let b = new animal("tolongnhat" , 28 , "ha noi")
b.getSpeak2()


let a = new newperson("vo van thanh")
a.getSpeek1()