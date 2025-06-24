class Batery {
    constructor(energy) {
        this.energy = energy
    }
    setEnergy (energy){
        this.energy = energy
    }
    getEnergy(){
        return this.energy
    }
    getDecreaseEnergy(){
        if (this.energy > 0 ){
            this.energy--;
        }
    }
}