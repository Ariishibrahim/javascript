class CoffeeMachine {
    #waterLevel = 0
    #power = False

    addWater(amount) {
        this.#waterLevel += amount
        console.log(`Water added. Current  level : ${this.#waterLevel}`)

    }

    #checkPower() {
        if(!this.#power) {
            throw new Error("Machine is off. please turn it on.")
        }
    }
    turnOn() {
        this.#power = true
        console.log("Machine turned on.");
    }

    brew() {
        try{
            this.#checkPower();
            if(this.#waterLevel < 10) {
                throw new Error("Not enough water toe brew coffee!");
            }
            this.#waterLevel -= 10;
            console.log("Brewing coffee...");
        }catch(error) {
            console.error(error.message);
        }
    }
}
const machine = new CoffeeMachine();
machine.turnOn();
machine.addWater(15);
machine.brew();