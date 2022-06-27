import { ID } from '@datorama/akita';

export interface Fundraising {
    recordNumber: any;
    title: string;
    subjectLink: string;
}

export function createFundRaising(params: Partial<Fundraising>) {
    return {} as Fundraising;
}