import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Fundraising } from './fundraising.model';

export interface FundraisingState extends EntityState<Fundraising> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'fundraising', idKey: 'wikiId'
})
export class FundraisingStore extends EntityStore<FundraisingState> {

    constructor() {
        super();
    }

}