import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Photo } from './photo.model';

export interface PhotoState extends EntityState<Photo> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'photo'
})
export class PhotoStore extends EntityStore<PhotoState> {

    constructor() {
        super();
    }

}