import * as protocol from './protocol/v100.js'
import * as Repo from './Repo'
import { Data } from '@woodpigeon/b3-data'

let d = new Data();

const buffer = new ArrayBuffer(16);
const r = new Int8Array(buffer);
r.fill(13, 0, 4);

d.commit(buffer)
    .then(() => {
        console.log('hello!');
    });

export = {
    ...protocol,
    Repo
};

