import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-message-item',
    templateUrl: './message-item.component.html',
    styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent implements OnInit {
    @Input() messages: any;
    @Input() color: any;

    constructor(private navCtrl: NavController) { }

    ngOnInit() { }

    // goTo(blog) {
    //     this.navCtrl.navigateForward('blog-details', {
    //         state: { blog },
    //     });
    // }
}