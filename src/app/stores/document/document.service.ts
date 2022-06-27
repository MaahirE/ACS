import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DocumentStore } from './document.store';

@Injectable({ providedIn: 'root' })
export class DocumentService {

    constructor(private documentStore: DocumentStore, private http: HttpService) {
    }

    async getDocumentList(params) {
        this.documentStore.setLoading(true);
        return await this.http.request('GET', 'documentList', params).then(result => {
            this.documentStore.upsertMany(result[0].objectList);
            return result[0].status;
        }).finally(() => {
            this.documentStore.setLoading(false);
        });
    }

}