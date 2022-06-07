import { ID } from '@datorama/akita';

export interface Event {
    id: ID;
    uniqueId: string;
    description: string;
}

export function createEvent(params: Partial<Event>) {
    return {} as Event;
}