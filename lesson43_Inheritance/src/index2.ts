
type Handler = () => any;

type Listener = {
    [eventname: string]: Handler[]
};

class EventEmitter {

    private listeners: Listener = {

    };

    constructor() {
        this.listeners = {};
    }

    public addEventListener(eventName: string, handler: Handler) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }

        this.listeners[eventName].push(handler)
    }

    public dispatch(eventName: string) {
        this.listeners[eventName].forEach((handler => handler()))
    }
}

const eventEmitter = new EventEmitter();

eventEmitter.addEventListener('hoida', () => {
    console.log('Кремль горить! Кремль алає!!!')
})

eventEmitter.addEventListener('hoida', () => {
    console.log('Кремль горить! Кремль алає!!!')
})

setInterval(() => {
    eventEmitter.dispatch('hoida');
}, 2000)