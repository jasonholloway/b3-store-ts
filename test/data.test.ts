import { Fons, Sink, InMemoryEventLog, IEventLog } from '@woodpigeon/b3-data'
import { Payload, EventList, Event, AddNote } from '../src/protocol/v100'
import { expect } from 'chai'
import * as Protobuf from 'protobufjs'

describe('updates', () => {

    let sink : Sink
    let fons : Fons
    let log : IEventLog

    beforeEach(() => {
        log = new InMemoryEventLog()
        sink = new Sink(log)
        fons = new Fons(log)
    });

    it('Add Note to NoteList', async () => {
        const payload = new Payload({ eventLists: [
            new EventList({
                ref: '1234',
                events: [
                    new Event({                        
                        version: 0,
                        addNote: new AddNote({ note: 'hello' })
                    })
                ]
            })        
        ]})

        const writer = new Protobuf.BufferWriter();
        Payload.encode(payload, writer);
        const buffer = writer.finish();
        await sink.commit(new Int8Array(buffer));
        await sink.flush();

        const buffer2 = await fons.view('1234', 'Events');

        const eventList = EventList.decode(new Uint8Array(buffer2));

        expect(eventList.events).to.have.length(1);
        expect(eventList.events[0].addNote.note).to.eq('hello');

        //refs need two parts:
        //the stream GUID, and the name of the aggregator
        //EventList is the simplest, obvs
        //then others build on this
    });

    xit('can be regurgitated', async () => {

    });

});