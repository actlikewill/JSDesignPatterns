const settings = () => {
    let called = 0
    const save = function (data) {
            called++
            console.log(`called: ${called} times from ${data}`)
    }
    console.log('new settings')

    return {
        save: save

        
    }
}

module.exports = settings()