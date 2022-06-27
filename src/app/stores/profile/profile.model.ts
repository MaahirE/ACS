import { ID } from '@datorama/akita';

export interface Profile {
    id: ID;
    category: string;
    subcategory: string;
    uniqueId: string;
    teamMemberId: any;
    members: any;
    wiki: any;
}

export function createProfile(params: Partial<Profile>) {
    return {

    } as Profile;
}