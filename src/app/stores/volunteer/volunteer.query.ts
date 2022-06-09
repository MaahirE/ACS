import { Injectable } from '@angular/core';
import { Order, QueryEntity } from '@datorama/akita';
import { VolunteerStore, VolunteerState } from './volunteer.store';

@Injectable({ providedIn: 'root' })
export class VolunteerQuery extends QueryEntity<VolunteerState> {

    constructor(protected store: VolunteerStore) {
        super(store);
    }

}