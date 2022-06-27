import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Document } from './document.model';

export interface DocumentState extends EntityState<Document> { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'document',
    idKey: 'documentId'
})
export class DocumentStore extends EntityStore<DocumentState> {

    constructor() {
        super();
    }

}