import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { StatusStore } from './status.store';

@Injectable({ providedIn: 'root' })
export class StatusService {

    constructor(private statusStore: StatusStore, private http: HttpService) {
    }

    async getStatusList(profile) {
        let params;
        if (profile) {
            params = { profile: profile.uniqueId };
            if (profile.category === 'Groups') {
                params.events = 'broadcast-entry,user-entry,blog,classified';
            }
        }
        this.statusStore.setLoading(true);
        return await this.http.request('GET', 'statusList', params).then(result => {
            this.statusStore.upsertMany(result[0].objectList);
            return result[0].status;
        }).finally(() => {
            this.statusStore.setLoading(false);
        });
    }

}