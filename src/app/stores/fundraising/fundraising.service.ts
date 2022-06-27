import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { FundraisingStore } from './fundraising.store';

@Injectable({ providedIn: 'root' })
export class FundraisingService {
    constructor(private fundraisingStore: FundraisingStore, private http: HttpService) { }

    async getWikiList() {
        return await this.http
            .request('GET', 'wikiList', {
                subjectLink: 'FundRaising',
                format: 'json',
            })
            .then((result) => {
                console.log(result);
                if (result[0]?.objectList?.length > 0) {
                    this.fundraisingStore.upsertMany(result[0].objectList);
                    this.fundraisingStore.remove(
                        (entity) =>
                            !result[0].objectList.some(
                                (newEntity) => newEntity.id === entity.id
                            )
                    );
                }
            })
            .catch(error => console.log(error));

    }

    async getWiki() {
        // const subjectLink = 'Treatment+Resources';
        return await this.http
            .request('GET', 'wiki', {
                profile: 'main-profile',
                subject: 'FundRaising',
                format: 'json',
            })
            .then((result) => {
                console.log(result);
                if (result[0]?.objectList?.length > 0) {
                    return result[0]?.objectList[0];
                }
            });
    }
}