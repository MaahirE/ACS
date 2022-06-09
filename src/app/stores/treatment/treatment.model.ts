import { ID } from '@datorama/akita';

export interface Treatment {
    recordNumber: any;
    title: string;
    subjectLink: string;
}

export function createTreatment(params: Partial<Treatment>) {
    return {} as Treatment;
}