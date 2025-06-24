class Person {
    constructor(firstName, lastName, Age, Gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
        this.Gender = Gender;
        this.interests = interests;
    }

    getBio() {
        console.log(` Ten cua toi la ${this.firstName + this.lastName} tuoi cua toi la ${this.Age} gioi tinh cua toi la ${this.Gender} so thich cua toi ${this.interests}`)
    }

}

class Student extends Person {
    constructor(firstName, lastName, Age, Gender, interests, school) {
        super(firstName, lastName, Age, Gender, interests);
        this.school = school;

    }

    getIntroduce() {
        console.log(`my school is : ${this.school}`)
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, Age, Gender, interests, subject, school) {
        super(firstName, lastName, Age, Gender, interests);
        this.subject = subject;
        this.school = school;

    }

    getIntroduce() {
        console.log(`xin chao toi ten la ${this.lastName} la giao vien cua truong ${this.school} toi day mon ${this.subject} `)

    }


}


let person1 = new Person("to", "longnhat", 26, "male", "music and play game");
person1.getBio()
let person2 = new Person("le", "gianghiem", 28, "male", "study code in the code gym");
person2.getBio()
let sv = new Student("vo", "van thanh ", 24, "male", "play game ", "code gym")
sv.getBio()
sv.getIntroduce()
let teacher = new  Teacher("nguyen","thi hoa",42,"Female","study math","math","code gym" )
teacher.getBio()
teacher.getIntroduce()