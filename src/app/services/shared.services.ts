import { Injectable } from '@angular/core';
import { DeviceInfo, Device } from '@capacitor/device';
import { ModalController, IonRouterOutlet, LoadingController, AlertController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    currentModal: any;
    isLoading = false;
    info: DeviceInfo;

    constructor(
        public toastCtrl: ToastController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) {
    }

    getInfo() {
        return this.info;
    }

    async getDeviceInfo() {
        await Device.getInfo().then(result => {
            this.info = result
        })
    }

    async presentModal(routerOutlet: IonRouterOutlet, component) {
        const modal = await this.modalCtrl.create({
            component,
            swipeToClose: true,
            presentingElement: routerOutlet.parentOutlet.nativeEl
        });
        this.currentModal = modal;
        return await modal.present();
    }

    async presentLoading(message?: string) {
        this.isLoading = true;
        return await this.loadingCtrl.create({
            message
        }).then(loading => {
            loading.present().then(() => {
                if (!this.isLoading) {
                    loading.dismiss();
                }
            });
        });
    }

    async presentError(header: string, message: string) {
        const alert = await this.alertCtrl.create({
            header,
            message,
            buttons: [{
                text: 'Dismiss'
            }
            ]
        });

        return await alert.present();
    }

    async presentToast(message: string, color?: string) {
        const toast = await this.toastCtrl.create({
            message,
            color,
            duration: 3000
        });
        toast.present();
    }

    async dismissLoading() {
        this.isLoading = false;
        return await this.loadingCtrl.dismiss();
    }

}