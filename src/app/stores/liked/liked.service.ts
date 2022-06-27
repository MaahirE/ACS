import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LikedStore } from './liked.store';

@Injectable({ providedIn: 'root' })
export class LikedService {
    constructor(private likedStore: LikedStore, private http: HttpService) { }

    async getList() {
        return await this.http
            .request('GET', 'profileList', {
                uniqueId: 'paarl-paarl',
                category: 'businesses',
                list: 'Search',
                format: 'json',
            })
            .then((result) => {
                if (result[0]?.objectList?.length > 0) {
                    const entities = result[0].objectList.filter((business) => business.isActiveMember === 'true');
                    this.likedStore.upsertMany(entities);
                    this.likedStore.remove(
                        (entity) =>
                            !entities.some(
                                (newEntity) => newEntity.id === entity.id
                            )
                    );
                }
            });
    }
} 1