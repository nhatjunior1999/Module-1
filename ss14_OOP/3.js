function student(id , name , address){
    this.id = id;
    this.name =  name ;
    this.address = address;
    this.infor = function (){
        return "id : " + this.id + " name : " + this.name + " addrees : "+ this.address
    }
}
let student1 = new student(1 , "tolongnhat" , "hanoi");
let student2 = new student(2  ,"" ,"sai gon");
console.log(student1.infor());
console.log(student2.infor());
// ***********************************//
let student3 = {
    name: "nhat",
    id : 2,
    geting : function (){
        return this.name + " vaf " + this.id
    }
}
console.log(student3.geting())
console.log(student3.name)
//-------------------
let person = {
    id : 1 ,
    name : "tolongnhat",
    birthYear : 1999,
    music : [`con mua ngang qua` , `tinh em la dai duong`],
    getTing : function (){
        return `ten toi la ${this.name} sinh nam ${this.birthYear} va toi la so ${this.id}  va toi thich nghe nhac bai : ${this.music[1]}`
    }

}
person.birthYear = 2000
person.music[1] ="doi cho la hanh phuc";
person.inFormation = function (){
    return ` ${this.name} cao 1 m 8`
}
console.log(person.music[1]);
console.log(person.getTing());
console.log(person.inFormation())
//-------------
class loveYou{
    constructor(id , name ) {
        this.id = id;
        this.name = name;
    }
    
}
let a  = new loveYou(1,"nhat")
console.log(a.name)
console.log()
