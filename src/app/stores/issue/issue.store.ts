import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Issue } from './issue.model';

export interface IssueState extends EntityState<Issue>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'issue'
})
export class IssueStore extends EntityStore<IssueState> {

    constructor() {
        super();
    }

}