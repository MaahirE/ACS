import { Injectable } from '@angular/core';
import { Order, QueryEntity } from '@datorama/akita';
import { TreatmentStore, TreatmentState } from './treatment.store';

@Injectable({ providedIn: 'root' })
export class TreatmentQuery extends QueryEntity<TreatmentState> {

    constructor(protected store: TreatmentStore) {
        super(store);
    }

}