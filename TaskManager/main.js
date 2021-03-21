// function hideAway () {
const Task = require('./task')
const UrgentTask = require('./urgentTask')
const EnhancedTask = require('./enhancedTask')
// console.log(Task.all())

// const normalTask = new Task('Make Some tea')
// normalTask.complete()
// normalTask.save()

// const urgent = new UrgentTask('Something Else Urgent', 4)
// urgent.complete()
// urgent.notify()
// urgent.save()

const enhancedTask = new EnhancedTask({name: 'Clean Room', priority: 5})
enhancedTask.notifyAndSave()
console.log(Task.all())
// }


