
class Observers {
    constructor() {
        this.observerList = []
    }

    add ( observer ) {
        return this.observerList.push( observer )
    }
    
    get ( index ) {
        if ( index > -1 && index < this.observerList.length ) {
            return this.observerList[ index ]
        }
    }

    count () {
        return this.observerList.length
    }
}

module.exports = Observers