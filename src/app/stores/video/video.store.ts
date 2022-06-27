import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Video } from './video.model';

export interface VideoState extends EntityState<Video> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'video'
})
export class VideoStore extends EntityStore<VideoState> {

    constructor() {
        super();
    }

}