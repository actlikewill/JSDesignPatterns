
const EnhancedTask = require('../enhancedTask')
const Observers = require('./observers');

class ObservableTask extends EnhancedTask {
    constructor (data) {
    super(data)
    this.observers = new Observers()
    }

    addObserver ( observer ) {
        this.observers.add( observer )
    }

    notifyObservers ( context ) {
        const observerCount = this.observers.count()
        for ( let i = 0; i < observerCount; i++) {
            this.observers.get(i)(context)
        }
    }

    save () {
        this.notifyObservers(this)
        EnhancedTask.prototype.save.call(this)
        console.log(`The task ${this.data.name} is being saved by ${this.data.user}`);
    }

    notify () {
        this.notifyObservers(this)
        EnhancedTask.prototype.notify.call(this)
        console.log(`The task ${this.data.name} is being notified by ${this.data.user}`);
    }

    complete () {
        this.notifyObservers(this)
        EnhancedTask.prototype.complete.call(this)
        console.log(`The task ${this.data.name} is being completed by ${this.data.user}`);
    } 
}

module.exports = ObservableTask