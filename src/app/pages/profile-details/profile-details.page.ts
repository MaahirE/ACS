import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DocumentService } from 'src/app/stores/document';
import { EventQuery, EventService } from 'src/app/stores/event';
import { ProfileQuery, ProfileService, ProfileStore } from 'src/app/stores/profile';
import { StatusQuery, StatusService } from 'src/app/stores/status';
import { UserQuery } from 'src/app/stores/user';
import { VideoService } from 'src/app/stores/video';
import { Animations } from 'src/app/utils/animations';
import { AssetsPage } from '../assets/assets.page';
import { BlogsPage } from '../blogs/blogs.page';
// import { IssuePage } from '../issue/issue.page';
import { LoginPage } from '../login/login.page';

@UntilDestroy()
@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.page.html',
    styleUrls: ['./profile-details.page.scss'],
    animations: [Animations.stagger, Animations.fadeIn]
})
export class ProfileDetailsPage implements OnInit {
    profile: any;
    segments: any;
    segment: any;

    isBusy = {
        loading: false,
        refreshing: false
    };
    documents: any;
    videos: any;
    user: any;

    constructor(
        private router: Router,
        private userQuery: UserQuery,
        private profileService: ProfileService,
        private profileQuery: ProfileQuery,
        private profileStore: ProfileStore,
        private eventQuery: EventQuery,
        private eventService: EventService,
        private documentService: DocumentService,
        private videoService: VideoService,
        private statusQuery: StatusQuery,
        private statusService: StatusService,
        private modalCtrl: ModalController,
        private navCtrl: NavController,
        public sanitizer: DomSanitizer
    ) {
        this.userQuery.select('data').pipe(untilDestroyed(this)).subscribe(user => {
            this.user = user;
            this.navCtrl.pop();
        });
    }

    ngOnInit() {
        const state = this.router.getCurrentNavigation().extras.state;
        if (state) {
            this.segments = state.segments;
            this.segment = this.segments[0].value;

            this.profileQuery.selectEntity(state.profile.id).pipe(untilDestroyed(this)).subscribe(profile => {
                this.profile = profile;
                console.log(profile)
            });

            this.switchSegment(this.segment);
            this.getDocuments(state.profile.uniqueId);
            this.getMemberList(state.profile);
        }
    }

    getDocuments(profile) {
        this.documentService.getDocumentList({ profile, items: '200' }).then(result => {
            this.documents = result.total;
        });
        this.videoService.getVideoList({ profile, items: '200' }).then(result => {
            this.videos = result.total;
        });
    }

    switchSegment(event) {
        switch (event) {
            case 'status':
                if (!this.statusQuery.hasEntity(({ uniqueId }) => uniqueId === this.profile.uniqueId) || this.isBusy.refreshing) {
                    return this.getStatusList(this.profile);
                }
                break;
            case 'wiki':
                if (!this.profileQuery.hasEntity(
                    ({ uniqueId, wiki }) => uniqueId === this.profile.uniqueId && wiki
                ) || this.isBusy.refreshing) {
                    return this.getWiki(this.profile);
                }
                break;
            case 'photos':
                break;
            case 'events':
                if (!this.eventQuery.hasEntity(({ uniqueId }) => uniqueId === this.profile.uniqueId) || this.isBusy.refreshing) {
                    return this.getEvent(this.profile.uniqueId);
                }
                break;
            case 'members':
                if (!this.profileQuery.hasEntity(
                    ({ uniqueId, members }) => uniqueId === this.profile.uniqueId && members
                ) || this.isBusy.refreshing) {
                    return this.getMemberList(this.profile);
                }
                break;
            default:
                break;
        }
    }

    doRefresh(event) {
        this.isBusy.refreshing = true;
        event.target.disabled = true;
        this.switchSegment(this.segment).finally(() => {
            event.target.complete();
            this.isBusy.refreshing = false;
            event.target.disabled = false;
        });
    }

    getEvent(profile) {
        return this.eventService.getEvent(profile);
    }

    getStatusList(profile) {
        return this.statusService.getStatusList(profile);
    }

    getMemberList(profile) {
        return this.profileService.getMemberList(profile);
    }

    getWiki(profile) {
        return this.profileService.getWiki(profile);
    }

    // async createNewIssue() {
    //     const modal = await this.modalCtrl.create({
    //         component: IssuePage,
    //         componentProps: {
    //             profile: this.profile,
    //             new: true
    //         }
    //     });
    //     return await modal.present();
    // }

    async signIn() {
        const modal = await this.modalCtrl.create({
            component: LoginPage,
            swipeToClose: true,
            presentingElement: await this.modalCtrl.getTop()
        });
        return await modal.present();
    }

    membership() {
        this.profileService.membership(this.profile);
    }

    async openAssets(type) {
        const modal = await this.modalCtrl.create({
            component: AssetsPage,
            componentProps: {
                profile: this.profile,
                type
            }
        });
        return await modal.present();
    }

    async openBlog(event) {
        if (event.type === 'blog') {
            const modal = await this.modalCtrl.create({
                component: BlogsPage,
                componentProps: {
                    blog: event
                }
            });
            return await modal.present();
        }
    }


}