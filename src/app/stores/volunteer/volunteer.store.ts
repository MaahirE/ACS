import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Volunteer } from './volunteer.model';

export interface VolunteerState extends EntityState<Volunteer> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'treatment', idKey: 'wikiId'
})
export class VolunteerStore extends EntityStore<VolunteerState> {

    constructor() {
        super();
    }

}