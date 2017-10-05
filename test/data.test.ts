import { Data } from '@woodpigeon/b3-data'
import { expect } from 'chai'


import { ICommand, Command } from '../src/protocol/v100.js'

class TypedData {

    private data : Data;

    constructor(...args) {
        this.data = new Data(...args);
    }

    async commit(command: Command) {
        const err = Command.verify(command)
        if(err) throw Error(err);

        const buffer = Command.encodeDelimited(command).finish();
        await this.data.commit(buffer)
    }

    async flush() {
        await this.data.flush();
    }

}


describe('updates', () => {

    let data : Data;

    beforeEach(() => {
        data = new Data();
    });

    it('can be committed', async () => {
        const r = new Uint8Array(8);
        await data.commit(r);
        expect(data).to.be.null;
    });

    xit('can be regurgitated', async () => {

    });

});