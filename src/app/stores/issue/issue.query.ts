import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { IssueStore, IssueState } from './issue.store';


@QueryConfig({
    sortBy: 'enteredDate',
    sortByOrder: Order.DESC
})
@Injectable({ providedIn: 'root' })
export class IssueQuery extends QueryEntity<IssueState> {

    constructor(protected store: IssueStore) {
        super(store);
    }

}