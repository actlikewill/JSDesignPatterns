const auditingService = function () {
    const message = 'Auditing'
    this.update = function (task) {
        console.log(`${message} ${task.data.user} for task ${task.data.name } `);
    }
}

module.exports = auditingService