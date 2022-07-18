import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.services';
import { NavController } from '@ionic/angular';
import { GroupInfoPage } from '../group-info/group-info.page';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    groups = [];
    group = null;
    message: any;
    subject: any;

    constructor(public httpService: HttpService, public sharedService: SharedService, private navCtrl: NavController, private modalCtrl: ModalController) {
    }

    ionViewDidEnter() {
    }

    ngOnInit() {
    }

    search(event) {
        this.group = null;
        if (event.target.value.length > 2) {
            this.httpService.request('GET', 'profileList', { category: 'groups', query: `title="${event.target.value}"` }).then(result => {
                console.log(result[0].objectList);
                this.groups = result[0].objectList;
            }).catch(error => {
                console.log(error);
            });
        } else {
            this.groups = [];
        }
    }

    async selectGroup(group) {
        this.group = group;
        this.groups = [];
        // this.navCtrl.navigateForward('group-info');

        const modal = await this.modalCtrl.create({
            component: GroupInfoPage,
            componentProps: {
                group: group
            }
        });
        return await modal.present();
    }

    // async sendMessage() {
    //     if (this.message?.trim().length > 0 && this.group) {
    //         await this.sharedService.presentLoading();
    //         console.log(this.group)
    //         this.httpService.request('POST', 'message', {
    //             profile: this.group.uniqueId,
    //             message: this.message,
    //             subject: this.subject?.trim() ? this.subject : 'Private Message'
    //         }).then(result => {
    //             console.log(result);
    //             if (result[0].status.code === 0) {
    //                 this.sharedService.presentToast('Message sent', 'success').finally(() => {
    //                     this.navCtrl.back()
    //                 });
    //             } else {
    //                 this.sharedService.presentToast(result[0].status.errorText, 'danger');
    //             }
    //         }).catch(error => {
    //             console.log(error);
    //             this.sharedService.presentToast('Something wrong happened', 'danger');
    //         }).finally(async () => {
    //             await this.sharedService.dismissLoading();
    //         });
    //     }
    // }

}