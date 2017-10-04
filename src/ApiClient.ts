import axios from 'axios'
import {Command, PutProduct, PutStock, PutImage} from './protocol/v100.js'
import * as protobuf from 'protobufjs'

export type Update = PutProduct | PutStock | PutImage;

export class ApiClient {

    commit(update: Update) : Promise<boolean> {
        const id = 'uuid';
        return Promise.resolve(true);
    }

}
