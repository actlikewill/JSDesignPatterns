// using the 'new' keyword implicitly returns 'this'
const db = require('./taskDbManager')
class Task {
    constructor( data ) {
        this.data = data
        // this.user = data.user || 'none'
        // this.name = data.name
        // this.completed = false
        // this.isSaved = false
    }

    
    complete() {
        console.log(`Completing Task: ${this.data.name}`);
        this.data.completed = true
    }

    save () {
        return db.save(this)
    }

    static all () {
        return db.all()
    }

}

module.exports = Task