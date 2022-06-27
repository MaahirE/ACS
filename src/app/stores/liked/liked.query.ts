import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { LikedState, LikedStore } from './liked.store';

@Injectable({ providedIn: 'root' })
export class LikedQuery extends QueryEntity<LikedState> {
    list = this.selectAll({
        filterBy: (entity) => entity.category.toLocaleLowerCase() === 'businesses' && ['paarl'].includes(entity.city?.toLocaleLowerCase())
    });

    constructor(protected store: LikedStore) {
        super(store);
    }
}