import { ID } from '@datorama/akita';

export interface Status {
    id: ID;
    uniqueId: string;
    recordName: string;
}

export function createStatus(params: Partial<Status>) {
    return {

    } as Status;
}