import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SharedService } from 'src/app/services/shared.services';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-new',
    templateUrl: './new.page.html',
    styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
    people = [];
    user = null;
    message: any;
    subject: any;

    constructor(public httpService: HttpService, public sharedService: SharedService, private navCtrl: NavController) {
    }

    ionViewDidEnter() {
    }

    ngOnInit() {
    }

    search(event) {
        this.user = null;
        if (event.target.value.length > 2) {
            this.httpService.request('GET', 'profileList', { category: 'people', query: `title="${event.target.value}"` }).then(result => {
                console.log(result[0].objectList);
                this.people = result[0].objectList;
            }).catch(error => {
                console.log(error);
            });
        } else {
            this.people = [];
        }
    }

    selectUser(user) {
        this.user = user;
        this.people = [];
    }

    async sendMessage() {
        if (this.message?.trim().length > 0 && this.user) {
            await this.sharedService.presentLoading();
            console.log(this.user)
            this.httpService.request('POST', 'message', {
                profile: this.user.uniqueId,
                message: this.message,
                subject: this.subject?.trim() ? this.subject : 'Private Message'
            }).then(result => {
                console.log(result);
                if (result[0].status.code === 0) {
                    this.sharedService.presentToast('Message sent', 'success').finally(() => {
                        this.navCtrl.back()
                    });
                } else {
                    this.sharedService.presentToast(result[0].status.errorText, 'danger');
                }
            }).catch(error => {
                console.log(error);
                this.sharedService.presentToast('Something wrong happened', 'danger');
            }).finally(async () => {
                await this.sharedService.dismissLoading();
            });
        }
    }

}