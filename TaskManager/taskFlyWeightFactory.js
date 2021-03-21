function FlyWeight (name, user, priority ) {
    this.name = name
    this.user = user
    this.priority = priority
    this.otherdata = 'hello'
}

const FlyWeightFactory = function () {
    const flyWeights = {}

    const get = function ( name, user, priority ) {
        if(!flyWeights[name+user+priority]) {
            flyWeights[name+user+priority] = 
                new FlyWeight(name, user, priority)
        }
        return flyWeights[name+user+priority]
    }

    const getCount = function () {
        let count = 0
        for (let f in flyWeights) count++
        return count
    }

    return {
        get, getCount
    }
}

module.exports = FlyWeightFactory()