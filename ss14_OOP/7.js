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