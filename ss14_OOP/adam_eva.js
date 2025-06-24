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
class human{
    #name;
    #gender;
    #weight;
    constructor(name ,gender , weight ) {
        this.#name = name ;
        this.#gender = gender ;
        this.#weight =weight;

    }
}