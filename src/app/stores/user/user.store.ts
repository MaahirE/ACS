import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
    username: string;
    ha1: string;
    data: {
        recordNumber: number;
        recordName: string;
        title: string;
        description: string;
        logoUrl: string;
        theme: string;
        colorScheme: string;
        userName: string;
        firstName: string;
        lastName: string;
        userUniqueId: string;
        userImageUrl: string;
        userImageWidth: string;
        userImageHeight: string;
        userLanguage: string;
        isGuest: string;
        canAddProfiles: string;
        canAddProjects: string;
        canInviteByEmail: string;
        canPostActivity: string;
        canPostEvents: string;
        canPostPhotos: string;
        canPostTopics: string;
        canCreateNotifications: string;
        lastCheckInDate: string;
        lastLocation: string;
    };
}

export const createInitialState = (): UserState => ({
    username: 'guest',
    ha1: '6252d95e2bd664cb2fc04c7252449a62',
    data: {
        recordNumber: 1,
        recordName: 'site',
        title: 'Zire 2',
        description: '',
        logoUrl:
            'https://zire2.connectmobiles24.com/image/2009030915-0-5500-300x100/logo.png',
        theme: 'f5app',
        colorScheme: 'placeholder',
        userName: 'Guest User',
        firstName: 'Guest',
        lastName: 'User',
        userUniqueId: 'guest-user',
        userImageUrl: 'https://static.thenounproject.com/png/1730084-200.png',
        userImageWidth: '45',
        userImageHeight: '45',
        userLanguage: 'en_US',
        isGuest: 'true',
        canAddProfiles: 'false',
        canAddProjects: 'false',
        canInviteByEmail: 'true',
        canPostActivity: 'false',
        canPostEvents: 'false',
        canPostPhotos: 'false',
        canPostTopics: 'false',
        canCreateNotifications: 'false',
        lastCheckInDate: '',
        lastLocation: '',
    },
});

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {
    constructor() {
        super(createInitialState());
    }
}
