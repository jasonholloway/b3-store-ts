import { Fons, Sink, EventLog, EventReader, EventWriter } from '@woodpigeon/b3-data'
import { expect } from 'chai'


import { ICommand, Command } from '../src/protocol/v100.js'


const eventLog = new EventLog(
                        (m) => Promise.resolve({}), 
                        (m) => Promise.resolve(true));


class TypedSink {

    private sink: Sink;

    constructor(log: EventLog) {
        this.sink = new Sink(log);
    }

    async commit(command: Command) {
        const err = Command.verify(command)
        if(err) throw Error(err);

        const buffer = Command.encodeDelimited(command).finish();
        await this.sink.commit(buffer)
    }

    async flush() {
        await this.sink.flush();
    }

}


describe('updates', () => {

    let sink : Sink
    let fons : Fons
    let log : EventLog

    beforeEach(() => {
        log = new EventLog(null, null);
        sink = new Sink(log)
        fons = new Fons(log)
    });

    it('can be committed', async () => {
        const r = new Uint8Array(8);
        await sink.commit(r);
        expect(sink).to.be.null;
    });

    xit('can be regurgitated', async () => {

    });

});