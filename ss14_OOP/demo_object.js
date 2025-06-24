class Mobile {
    constructor(id , name ) {
        this.id = id;
        this.name = name ;
        this.message = ""
    }
    setMessage(message){
         this.message = message ;
    }
    getMessage(){
        return  this.message;
    }
    SendMessage(message , mobile){
        mobile.setMessage(message)
    }

}
let iphone = new Mobile(1, "iphone15");
let android = new Mobile(2, "samsung");
iphone.SendMessage("longnhat",android)
android.SendMessage("samsung",iphone)
let c = iphone.getMessage()
console.log(c)
let messAge = android.getMessage();
console.log(messAge);