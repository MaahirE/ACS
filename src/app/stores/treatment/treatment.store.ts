import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Treatment } from './treatment.model';

export interface TreatmentState extends EntityState<Treatment> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'treatment', idKey: 'wikiId'
})
export class TreatmentStore extends EntityStore<TreatmentState> {

    constructor() {
        super();
    }

}