const Task = require('./task')

const UrgentTask = function (name, user, priority) {
    Task.call(this, name, user)
    this.priority = priority
}

const ut = new UrgentTask('This is urgent', 1)
console.log(ut);