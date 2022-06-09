import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { VolunteerStore } from './volunteer.store';

@Injectable({ providedIn: 'root' })
export class VolunteerService {
    constructor(private volunteerStore: VolunteerStore, private http: HttpService) { }

    async getWikiList() {
        return await this.http
            .request('GET', 'wikiList', {
                subjectLink: 'To+Volunteer',
                format: 'json',
            })
            .then((result) => {
                console.log(result);
                if (result[0]?.objectList?.length > 0) {
                    this.volunteerStore.upsertMany(result[0].objectList);
                    this.volunteerStore.remove(
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
                subject: 'To+Volunteer',
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