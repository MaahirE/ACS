import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Liked } from './liked.model';

export interface LikedState extends EntityState<Liked> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'liked'
})
export class LikedStore extends EntityStore<LikedState> {

    constructor() {
        super();
    }

}