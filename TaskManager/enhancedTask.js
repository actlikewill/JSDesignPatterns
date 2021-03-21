const UrgentTask = require('./urgentTask')
const taskFlyWeight = require('./taskFlyWeightFactory')
const Task = require('./task')

// This implements the Facade pattern we have abstracted 
// some functionality into some convinience methods that
// make life a little easier
class EnhancedTask extends UrgentTask {
    constructor(data) {
        const task = taskFlyWeight.get(data.name, data.user, data.priority)
        super(task)
    }

    notifyAndSave () {        
        this.save()
        this.notify()
    }
    completeAndSave () {
        this.complete()
        this.save()
    }
    completeSaveAndNotify() {
        this.complete()
        this.save()
        this.notify()
    }
}

module.exports = EnhancedTask