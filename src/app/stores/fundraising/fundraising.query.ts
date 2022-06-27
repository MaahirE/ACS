import { Injectable } from '@angular/core';
import { Order, QueryEntity } from '@datorama/akita';
import { FundraisingStore, FundraisingState } from './fundraising.store';

@Injectable({ providedIn: 'root' })
export class FundraisingQuery extends QueryEntity<FundraisingState> {

    constructor(protected store: FundraisingStore) {
        super(store);
    }

}