import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PhotoStore, PhotoState } from './photo.store';

@Injectable({ providedIn: 'root' })
export class PhotoQuery extends QueryEntity<PhotoState> {

    constructor(protected store: PhotoStore) {
        super(store);
    }

}