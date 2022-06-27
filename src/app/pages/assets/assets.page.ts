import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoPage } from '../video/video.page';
import { DocumentQuery } from 'src/app/stores/document';
import { VideoQuery } from 'src/app/stores/video';
import { Browser } from '@capacitor/browser';

@Component({
    selector: 'app-assets',
    templateUrl: './assets.page.html',
    styleUrls: ['./assets.page.scss'],
})
export class AssetsPage implements OnInit {
    @Input() type: string;
    @Input() profile: any;

    videos: any;
    documents: any;

    constructor(
        public modalCtrl: ModalController,
        private videoQuery: VideoQuery,
        private documentQuery: DocumentQuery,
    ) { }

    ngOnInit() {
        if (this.profile) {
            if (this.type === 'videos') {
                this.videos = this.videoQuery.getAll({ filterBy: ({ uniqueId }) => uniqueId === this.profile?.uniqueId });
            } else {
                this.documents = this.documentQuery.getAll({ filterBy: ({ uniqueId }) => uniqueId === this.profile?.uniqueId });
            }
        }
    }

    async openVideo(video) {
        const modal = await this.modalCtrl.create({
            component: VideoPage,
            componentProps: {
                video
            }
        });
        return await modal.present();
    }

    async openDocument(doc) {
        await Browser.open({ url: doc.documentUrl });
    }

    dismiss() {
        this.modalCtrl.dismiss();
    }
}