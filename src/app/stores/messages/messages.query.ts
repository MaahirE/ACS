import { Injectable } from '@angular/core';
import { Order, QueryConfig, QueryEntity } from '@datorama/akita';
import { MessagesStore, MessagesState } from './messages.store';

@QueryConfig({
    sortBy: 'repliedDate',
    sortByOrder: Order.DESC
})
@Injectable({ providedIn: 'root' })
export class MessagesQuery extends QueryEntity<MessagesState> {

    constructor(protected store: MessagesStore) {
        super(store);
    }

}