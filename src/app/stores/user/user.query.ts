import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserState, UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
    userName = this.select((state) => state.data.userName);
    avatar = this.select((state) => state.data.userImageUrl);
    isGuest = this.select((state) => state.data.isGuest === 'true');
    profile = this.getValue();
    isUser = this.select((state) => state.data.isGuest === 'false');

    constructor(protected store: UserStore) {
        super(store);
    }
}
