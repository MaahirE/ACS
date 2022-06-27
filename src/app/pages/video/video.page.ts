import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-video',
    templateUrl: './video.page.html',
    styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
    @Input() video: any;
    frame: any

    constructor(public modalCtrl: ModalController, public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.frame = this.video.embedCode.replace('width="400"', 'width="100%"')
    }

    dismiss() {
        this.modalCtrl.dismiss()
    }
}