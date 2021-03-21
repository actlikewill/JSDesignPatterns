const Task = require('./task')

// Decorator Pattern Urgent Task extends the 
class UrgentTask extends Task {
    constructor(data) {
        super(data)
        this.data.priority = data.priority || 1

    }

    notify() {
        console.log(`Notifying people about: ${this.data.name}`);
    }

}

module.exports = UrgentTask