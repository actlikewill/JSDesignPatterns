const notificationService = function () {
    const message = 'Notifying'
    this.update = function (task) {
        console.log(`${message} ${task.data.user} for task ${task.data.name } `);
    }
}

module.exports = notificationService