import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {

    constructor() {
        super();
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb)
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}
