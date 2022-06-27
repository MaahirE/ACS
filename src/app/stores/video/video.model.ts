import { ID } from '@datorama/akita';

export interface Video {
    id: ID;
    uniqueId: string;
}

export function createVideo(params: Partial<Video>) {
    return {

    } as Video;
}