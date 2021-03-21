const Task = function (name) {
    this.name = name
    this.completed = false
}

Task.prototype.complete = function () {
    console.log('completing task ' + this.name)
    this.completed = true
}

Task.prototype.save = function () {
    console.log('saving task', this.name)
}

module.exports = Task

// const myTask = new Task('Legacy Task');
// myTask.complete()
// myTask.save()

// //Decorate Task to add functionality by adding methods
// const urgentTask = new Task('Urgent Task')

// urgentTask.priority = 2
// urgentTask.notify = function () {
//     console.log('notifying people on urgent task: ' + this.name);
// }

// // urgentTask.notify()
// urgentTask.complete()

// // Overiding the default save method:
// urgentTask.save = function () {
//     // Calling the original method on the prototype
//     this.notify()
//     Task.prototype.save.call(this)
// }
// urgentTask.save()