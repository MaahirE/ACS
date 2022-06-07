import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { EventStore } from './event.store';

@Injectable({ providedIn: 'root' })
export class EventService {
    constructor(private eventStore: EventStore, private http: HttpService) { }

    async getList() {
        return await this.http
            .request('GET', 'eventList', {
                sort: 'upcoming',
                startDateOffset: '-3600000',
                format: 'json',
            })
            .then((result) => {
                if (result[0]?.objectList?.length > 0) {
                    this.eventStore.upsertMany(result[0].objectList);
                    this.eventStore.remove(
                        (entity) =>
                            !result[0].objectList.some(
                                (newEntity) => newEntity.id === entity.id
                            )
                    );
                }
            });
    }

    async getEvent(id) {
        return await this.http
            .request('GET', `event/${id}`, { format: 'json' })
            .then((result) => {
                this.eventStore.upsertMany(result[0].objectList);
            });
    }
}