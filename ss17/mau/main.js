class Pet{
    constructor(name, species , age ,weight) {
        this.name = name ;
        this.species =species;
        this.age = age;
        this.weight = weight;
        this.vaccinations = []
    }
    // them 1 ngay tiem phong vao danh sach
    addVaccination(date){
        this.vaccinations.push(date)
    }
    // cap nhap lai ten tuoi va can nang
    updateInfo(newName , newAge , newWeight){
        this.name = newName;
        this.age = newAge;
        this.weight =newWeight;
    }

}
class PetManager{
    constructor() {
        this.petList = this.loadFromStorage();
    }
    saveToStorage(){
       let data = JSON.stringify(this.petList)
        localStorage.setItem("petData",data);
    }
    loadFromStorage(){
      let data =localStorage.getItem("petData")


    }


}