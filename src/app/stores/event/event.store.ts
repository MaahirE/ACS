import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Event } from './event.model';

export interface EventState extends EntityState<Event> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'event'
})
export class EventStore extends EntityStore<EventState> {

    constructor() {
        super();
    }

}