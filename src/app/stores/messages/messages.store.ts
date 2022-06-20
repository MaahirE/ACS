import { Injectable } from '@angular/core';
import { EntityState, ActiveState, EntityStore, StoreConfig } from '@datorama/akita';
import { Messages } from './messages.model';

export interface MessagesState extends EntityState<Messages>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'messages'
})
export class MessagesStore extends EntityStore<MessagesState> {

    constructor() {
        super();
    }

}