import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { TreatmentStore } from './treatment.store';

@Injectable({ providedIn: 'root' })
export class TreatmentService {
    constructor(private treatmentStore: TreatmentStore, private http: HttpService) { }

    async getWikiList() {
        return await this.http
            .request('GET', 'wikiList', {
                subjectLink: 'Treatment+Resources',
                format: 'json',
            })
            .then((result) => {
                console.log(result);
                if (result[0]?.objectList?.length > 0) {
                    this.treatmentStore.upsertMany(result[0].objectList);
                    this.treatmentStore.remove(
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
                subject: 'Treatment+Resources',
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