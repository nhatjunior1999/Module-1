class Apple {
    #weight;

    constructor() {
        this.#weight = 10;
    }

    decrease() {
        if (this.#weight > 0) {
            this.#weight--;
        }
    }

    isEmpty() {
        return this.#weight <= 0;
    }

    getWeight() {
        return this.#weight;
    }
}

class Human {
    #name;
    #gender;
    #weight;

    constructor(name, gender, weight) {
        this.#name = name;
        this.#gender = gender;
        this.#weight = weight;
    }

    isMale() {
        return this.#gender
    }

    setGender(gender) {
        this.#gender = gender;
    }

    checkApple(apple) {
        return !apple.isEmpty()

    }

    eat(apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.#weight++
            console.log(`${this.#name}  da an toa va can nang tang ${this.#weight}`)

        } else {
            console.log(`${this.#name} muon an nhung tao da het`)
        }
    }
    say(something){
         console.log(`${this.#name} noi ${something}`)
    }
    getName(){
        return this.#name
    }
    getWeight(){
        return this.#weight
    }
    setWeight(weight){
        this.#weight = weight;
    }
}
let apple =  new Apple();
let adam = new Human("adam",true,60)
let eva = new Human("eva",false,60)
adam.isMale()
adam.say("xin chào tôi laf adam");codegym,
eva.say("xin chào tôi laf eva");
