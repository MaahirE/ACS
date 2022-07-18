import { forEach } from '@angular-devkit/schematics';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ProfileStore } from './profile.store';

@Injectable({ providedIn: 'root' })
export class ProfileService {

    constructor(private profileStore: ProfileStore, private http: HttpService) {
        this.profileStore.setLoading(false);
    }

    async getProfileList(params) {
        this.profileStore.setLoading(true);
        return await this.http.request('GET', 'profileList', params).then(result => {
            console.log(params)
            this.profileStore.upsertMany(result[0].objectList);
            this.profileStore.remove((entity) => entity.category === params.category && !result[0].objectList.some((newEntity) => newEntity.id === entity.id));
            console.log(result);
            return result[0].objectList;
        }).finally(() => {
            this.profileStore.setLoading(false);
        });
    }

    async getMemberList(profile) {
        this.profileStore.setLoading(true);
        return await this.http.request('GET', 'memberList', { profile: profile.uniqueId, items: '200', view: 'all' }).then(result => {
            this.profileStore.update(profile.id, { members: result[0].objectList });
            return result[0].status;
        }).finally(() => {
            this.profileStore.setLoading(false);
        });
    }

    async getWiki(profile) {
        this.profileStore.setLoading(true);
        return await this.http.request('GET', 'wiki', { profile: profile.uniqueId }).then(result => {
            this.profileStore.update(profile.id, { wiki: result[0].objectList });
            return result[0].objectList[0];// returned in the Api
        }).finally(() => {
            this.profileStore.setLoading(false);
        });
    }

    async membership(profile) {
        const action = profile?.teamMemberId ? 'leave' : 'join';
        // console.log(action)
        this.profileStore.setLoading(true);
        return await this.http.request('POST', 'profileMembership', { action, profile: profile.uniqueId }).then(result => {
            if (result[0].status.code === 0 && profile?.teamMemberId) {
                this.profileStore.update(profile.id, { teamMemberId: null });
            }
            this.getProfileList({ profile: profile.uniqueId });
            return result[0].status;
        }).finally(() => {
            this.profileStore.setLoading(false);
        });
    }

    async createGroup(params: any) {
        console.log(params);
        this.profileStore.setLoading(true);
        return await this.http
            .request('POST', 'profile', {
                ...params,
                category: 'Groups'
            })
            .then(
                (result) => result[0].status.code === 0 && result[0].status.count === 1
            )
            .finally(() =>
                this.profileStore.setLoading(false)
            );
    }


}