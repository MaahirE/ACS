import { ID } from '@datorama/akita';

export interface Messages {
    id: ID;
    messages: any;
    reply: {
        conversationId: string
        message: string
        profile: string
    };
}

export function createMessage(params: Partial<Messages>) {
    return {

    } as Messages;
}