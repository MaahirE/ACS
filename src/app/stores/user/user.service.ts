import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';
import { UserStore } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserService {
    alertController: any;
    constructor(
        private userStore: UserStore,
        private http: HttpService,
        public navCtrl: NavController
    ) {
        this.userStore.setLoading(false);
    }

    async login(username, password) {
        this.userStore.setLoading(true);
        const ha1 = Md5.hashStr(
            `${username}:${environment.realm}:${password}`
        ).toString();
        this.userStore.update({ username, ha1 });
        return await this.http
            .request('GET', 'site', { format: 'json' })
            .then((result) => {
                const { status, objectList } = result[0];
                if (status.code === 0) {
                    const data = objectList[0];
                    this.userStore.update({ data });
                    return true;
                }
                return false;
            })
            .catch((error) => {
                this.userStore.reset();
                return false;
            })
            .finally(() => {
                this.userStore.setLoading(false);
            });
    }

    presentAlert(errorText) {
        this.alertController.create({
            header: 'Alert',
            subHeader: 'Error registering',
            message: errorText,
            buttons: ['OK']
        }).then(res => {

            res.present();

        });
    }

    async signup(params: any) {
        return await this.http
            .request('POST', 'registration', {
                ...params,
                format: 'json',
            })
            .then(
                (result) => result[0].status.code === 0 && result[0].status.count === 1
            );
    }

    async getInfo(uniqueId) {
        return await this.http
            .request('GET', 'show', {
                uniqueId,
                format: 'json',
            })
            .then((result) => {
                if (result[0]?.objectList?.length > 0) {
                    return result[0].objectList[0];
                }
            });
    }

    logout() {
        this.userStore.reset();
        this.navCtrl.navigateRoot('');
    }

    async getSettings() {
        return await this.http
            .request('GET', 'settings', {
                format: 'json',
            })
            .then((result) => result[0]?.objectList[0]);
    }

    async updateSettings(payload) {
        return await this.http
            .request('POST', 'settings', {
                ...payload,
                format: 'json',
            })
            .then((result) => result[0].status.code === 0);
    }
}