import axios from 'axios'
import {Command, PutProduct, PutStock, PutImage} from './protocol/v100.js'
import * as protobuf from 'protobufjs'

export type Update = PutProduct | PutStock | PutImage;

export class Repo {
    private store: any;

    events: Map<string, Update[]>
    //but, but...
    //we surely don't want to store the entire database all at once
    //instead - say if we were viewing a set of products, an index would show them
    //as a view, a projection.

    //but then, a single update is made to a single product - then its projection must be altered
    //if the projection is stored as one giant document, then this involves loading and re-saving lots of data
    //at once. But if the projection were partitioned... then there'd be more to read all at once.
    //Each projection partition would be re-written however. And the data to re-write it would all have to be summoned.

    //One product is changed... say we have a projection that counts available products...
    //Instead of scanning the entire set of products, such an aggregation should be created and update incrementally.

    //Maybe other aggregations are the same. A view of all products should receive an update event, with which it will
    //correct its own data precisely for that one product.

    //Or... it will save an event to its own state. Derived entities are also made from events, can also be simplified, etc.
    //Derived aggregations are distinct from first-order events - their updates will be stored similarly but separately.

    //So, to see a view, we will simply view an entity. This entity will be updated by the engine as and when needed.
    //basically, on every update, a bank of listeners should be consulted. But this is to be done in Scala.

    //Here, in TS, we receive updates, pass them to the engine (which also exposes entities), and persist them.
    //We should only persist events if the engine has happily swallowed them.

    //Persistence is to be done here? There's the question. 


    constructor(store: any) {
        this.store = store;
    }

    commit(update: any) : Promise<boolean> {
        const id = 'uuid';
        return Promise.resolve(true);
    }

    flush() : Promise<void> {
        return Promise.resolve();
    }

    retrieve(index: number, count: number) : Promise<any[]> {
        return Promise.resolve([]);
    }

}
