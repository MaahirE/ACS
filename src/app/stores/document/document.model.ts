import { ID } from '@datorama/akita';

export interface Document {
    id: ID;
    uniqueId: string;
}

export function createDocument(params: Partial<Document>) {
    return {

    } as Document;
}