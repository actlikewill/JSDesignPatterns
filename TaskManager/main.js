const Task = require('./task')
const EnhancedTask = require('./enhancedTask')
const {
     notificationService,
     loggingService,
     auditingService,
     ObservableTask 
    } = require('./observers')

// console.log(Task.all())
// const normalTask = new Task('Make Some tea')
// normalTask.complete()
// normalTask.save()
// const urgent = new UrgentTask('Something Else Urgent', 4)
// urgent.complete()
// urgent.notify()
// urgent.save()

const note = new notificationService()
const log = new loggingService()
const audit = new auditingService()

const enhancedTask = new ObservableTask({name: 'Clean Room', user: "actlikewill", priority: 5})

enhancedTask.addObserver(note.update)
enhancedTask.addObserver(log.update)
enhancedTask.addObserver(audit.update)

enhancedTask.completeSaveAndNotify()
// console.log(Task.all())


