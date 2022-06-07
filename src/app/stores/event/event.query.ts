import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { EventState, EventStore } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventQuery extends QueryEntity<EventState> {
    list: any = this.selectAll();

    constructor(protected store: EventStore) {
        super(store);
    }
}
