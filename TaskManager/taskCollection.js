const Task = require('./enhancedTask')
const flyWeightFactory = require('./taskFlyWeightFactory')

class TaskCollection  {
    constructor() {
        this.tasks = {}
        this.count = 0
        
    }
    
    add  ({ id, name, data,priority })  {
        this.tasks[id] = new Task({name, data, priority})
        this.count++
    }
    
    get (name) {
        return tasks[name]
    }

    getCount () {
        return this.count
    }
}


const tasks = new TaskCollection()

const taskNames = ['eat', 'sleep', 'rave', 'repeat']
const priority = [1, 2, 3, 4, 5]
const users = ['Jon', 'Erica', 'Amanda', 'Nathan', 'Michael']

const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 100000; i++) {
    tasks.add({
        id: `task ${i}`,
        name: taskNames[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 5)],
        priority: priority[Math.floor(Math.random() * 5)]
        })
}
 const afterMemory = process.memoryUsage().heapUsed;



 console.log(`used memory: ${(afterMemory - initialMemory) / 1000000} MB`)
 console.log(tasks.getCount());
 console.log(`flyweight count: ${flyWeightFactory.getCount()}`)