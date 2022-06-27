import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { VideoStore } from './video.store';

@Injectable({ providedIn: 'root' })
export class VideoService {

    constructor(private videoStore: VideoStore, private http: HttpService) {
    }

    async getVideoList(params) {
        this.videoStore.setLoading(true);
        return await this.http.request('GET', 'videoList', params).then(result => {
            this.videoStore.upsertMany(result[0].objectList);
            return result[0].status;
        }).finally(() => {
            this.videoStore.setLoading(false);
        });
    }

}