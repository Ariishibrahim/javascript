class CoffeeMachine {
    constructor() {
        this.waterLevel = 0;
        this.power = false;
    }

    addWater() {
        this.waterLevel += amount;
        console.log(`Water added. Current Level: ${this.waterLevel}`);
    }

    turnOn() {
        this.power = true;
        console.log('Machine turned on');
    }

    brew() {
        if(!this.power){
            console.log("Error: Turn on the machine first!")
            return;
        }
        if(this.waterLevel < 10) {
            console.log("Error: Not enough water!");
            return;
        }
        this.waterLevel -= 10;
        console.log("Brewing coffee...");
        }
    
}

const machine = new CoffeeMachine();
machine.turnOn();
machine.addWater(15);
machine.brew();
machine.waterLevel = -10;
