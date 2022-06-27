import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Status } from './status.model';

export interface StatusState extends EntityState<Status> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'status'
})
export class StatusStore extends EntityStore<StatusState> {

    constructor() {
        super();
    }

}