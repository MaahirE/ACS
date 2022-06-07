import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
})
export class BlogItemComponent implements OnInit {
    @Input() blog: any;
    @Input() color: any;

    constructor(private navCtrl: NavController) { }

    ngOnInit() { }

    goTo(blog) {
        this.navCtrl.navigateForward('blog-details', {
            state: { blog },
        });
    }
}
