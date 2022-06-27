import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { StatusStore, StatusState } from './status.store';

@Injectable({ providedIn: 'root' })
export class StatusQuery extends QueryEntity<StatusState> {

    constructor(protected store: StatusStore) {
        super(store);
    }

}