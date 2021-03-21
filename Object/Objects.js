const task = {
    title: "TASK TITLE",
    description: "MY DESCRIPTION"
}

Object.defineProperty(task, 'string', {
    value: () => { return (this.prototype)},
    writable: false,
    enumerable: false,
    configurable: true
})

console.log(task.string())