import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Profile } from './profile.model';

export interface ProfileState extends EntityState<Profile>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
    name: 'profile'
})
export class ProfileStore extends EntityStore<ProfileState> {

    constructor() {
        super();
    }

}