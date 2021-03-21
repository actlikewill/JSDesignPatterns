
const loggingService = function () {
    const message = 'Logging'
    this.update = function (task) {
        console.log(`${message} ${task.data.user} for task ${task.data.name } `);
    }
}

module.exports = loggingService