class Pet{
    constructor(id, name , species , age ,weight) {
        this.id= id ;
        this.name = name;
        this.species =species;
        this.age = age;
        this.weight;
        this.vaccines = [];
    }
    addVaccine(vaccine){
        this.vaccines.push(vaccine)
    }
    updateInfo(name,species,age,weight){
        this.name=name;
        this.species=species;
        this.age=age;
        this.weight= weight;
    }
    getInfoHTML(){
        return ` 
    <p>Name : ${this.name}</p>
    <p>Age : ${this.age}</p>
    <p>species : ${this.species}</p>
    <p>weight :  ${this.weight} kg</p>
  `
    }
    getVaccinesHTMl(){

    }
}