  class Manager {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    execute(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }

    subtract(addValue) {
        this.value + addValue; 
    }
}


class Add {
    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }
    execute(currentValue) {
        return currentValue + this.valueToAdd
    }

    undo (currentValue) {
        return currentValue - this.valueToAdd;
    }
}

class Subtract {
    constructor(valueToSubtract) {
        this.valueToSubtract = valueToSubtract;
    }
    execute(currentValue) {
        return currentValue - this.valueToSubtract
    }

    undo (currentValue) {
        return currentValue + this.valueToSubtract;
    }
}


const manager = new Manager();
manager.execute(new Add(5));
manager.execute(new Add(5));
manager.execute(new Subtract(5));
manager.undo(new Add(5));
console.log(manager.value);
