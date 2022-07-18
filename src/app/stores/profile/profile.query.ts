import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProfileStore, ProfileState } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileQuery extends QueryEntity<ProfileState> {
    groupName = this.select((state) => state.data.uniqueId);
    avatar = this.select((state) => state.data.userImageUrl);

    constructor(protected store: ProfileStore) {
        super(store);
    }

}