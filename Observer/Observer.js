let pubsub = {};

(function (q) {
    let topics = {},
    subUid = -1;

    q.publish = (topic, args) => {
        if(!topics[topic]) {
            return false;
        }
        let subscribers = topics[topic],
                    len = subscribers ? subscribers.length : 0;
        while(len--) {
            subscribers[len].func(topic, args);
        };        
        return this;
    }

    q.subscribe = (topic, func) => {
        if(!topics[topic]) {
            topics[topic] = [];
        };
        let token = (++subUid).toString();
        topics[topic].push({token, func});
        return token;    
    };
    q.unsubscribe = (token) => {
        for (let m in topics) {
            if (topics[m]) {
                for (let i = 0, j = topics[m].length; i < j; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }  
        return this;
    };
}(pubsub));

const testHandler = (topics, data) => {
    console.log(topics + " " + data);};

const testSubscription = pubsub.subscribe('example1', testHandler)

pubsub.publish('example2', 'helloWorld');
pubsub.publish('example1', ['test', 1, 2, 3]);

