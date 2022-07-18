import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, ModalController } from '@ionic/angular';
import { group } from 'console';
import { ProfileQuery, ProfileService } from 'src/app/stores/profile';
import { LoginPage } from '../login/login.page';


@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.page.html',
    styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit {
    profile: any;
    segment = 'Profile';
    wiki: any;
    followers: any;
    @Input() group: any;

    constructor(
        public alertCtrl: AlertController,
        public profileQuery: ProfileQuery,
        private profileService: ProfileService,
        public sanitizer: DomSanitizer,
        private modalCtl: ModalController
    ) { }

    ngOnInit() {
        console.log(this.group);
    }

    async ionViewDidEnter() {
        this.wiki = await this.profileService.getWiki(this.group);
        this.followers = await this.profileService.getMemberList(this.group);
        console.log(this.wiki);
    }

    membership() {
        this.profileService.membership(this.group);
    }

    dismiss() {
        this.modalCtl.dismiss();
    }

    async signIn() {
        const modal = await this.modalCtl.create({
            component: LoginPage,
            swipeToClose: true,
            presentingElement: await this.modalCtl.getTop()
        });
        return await modal.present();
    }

}