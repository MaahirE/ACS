import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { PhotoStore } from './photo.store';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private photoStore: PhotoStore, private http: HttpService) {
    }

    async getPhotoList(params) {
        this.photoStore.setLoading(true);
        return await this.http.request('GET', 'photoList', params).then(result => {
            return result[0].objectList;
        }).finally(() => {
            this.photoStore.setLoading(false);
        });
    }

}