import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { DocumentStore, DocumentState } from './document.store';

@Injectable({ providedIn: 'root' })
export class DocumentQuery extends QueryEntity<DocumentState> {

    constructor(protected store: DocumentStore) {
        super(store);
    }

}