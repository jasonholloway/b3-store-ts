import * as protocol from './protocol/v100.js'
import * as Repo from './Repo'
import { Data } from '@woodpigeon/b3-data'

let d = new Data();

const r = new Uint8Array(8);
r.fill(13, 0, 4);

d.commit(r)
    .then(() => {
        console.log('hello!');
    });

export = {
    ...protocol,
    Repo
};

