import { Repo, Update } from '../src/Repo'
import { Command, Nop } from "../src/protocol/v100";

interface IFixture {
    repo: IRepo;
    store: IStore;
}

interface IStore {
    insert(thing: any) : Promise<void>;
    getEntity(id: string) : Promise<any>;
    getEvents(index: number, count: number) : Promise<any[]>;
}

interface IRepo {
    commit(update: Update | Nop) : Promise<any>;
}

class SimpleFixture implements IFixture {
    repo: IRepo;
    store: IStore;

    constructor() {
        this.repo = new Repo(null);

        this.store = {
            insert(a: any) {
                return Promise.resolve();
            },
            getEntity(id: string) {
                return Promise.resolve({});
            },
            getEvents(index: number, count: number) {
                return Promise.resolve([]);
            }
        }
    }
}


export {
     IStore,
     IRepo,
     IFixture,
     SimpleFixture
};
