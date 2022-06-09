import { ID } from '@datorama/akita';

export interface Volunteer {
    recordNumber: any;
    title: string;
    subjectLink: string;
}

export function createVolunteer(params: Partial<Volunteer>) {
    return {} as Volunteer;
}