import { ID } from '@datorama/akita';

export interface Issue {
    id: ID;
    uniqueId: string;
}

export function createIssue(params: Partial<Issue>) {
    return {

    } as Issue;
}