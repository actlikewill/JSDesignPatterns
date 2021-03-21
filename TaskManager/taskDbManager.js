const tasks = require('./taskDb.json')
const fs = require('fs')
const path = require('path')
// This is essentially a singleton. This one instance does not 
// change no matter how many times you require it across modules.
// The require keyword implements caching making this possible
const db = () => {

    const  get = (id) => {
            console.log(`Getting Task: ${id}`)
            return tasks[id]
            }
    const  save = (task) =>  {
            const length = Object.entries(tasks).length
            const id = length+1
            task.id = id
            task.isSaved = true
            tasks[id] = task
            console.log(`Saving Task: ${task.data.name}`)
            fs.writeFile(path.join(__dirname, 'taskDb.json'), JSON.stringify(tasks), (err) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log("OK");
                }
            })
            return task;
        }

    const all = () => tasks;

    // Revealing module pattern
    return {
            get,
            save,
            all
        }
    }
module.exports = db()