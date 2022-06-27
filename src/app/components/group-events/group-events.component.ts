import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventQuery, EventService } from 'src/app/stores/event';
import { UserQuery } from 'src/app/stores/user';

@Component({
    selector: 'group-events',
    templateUrl: './group-events.component.html',
    styleUrls: ['./group-events.component.scss'],
})
export class GroupEventComponent implements OnInit {
    constructor(
        private eventService: EventService,
        public eventQuery: EventQuery,
        private navCtrl: NavController,
        public userQuery: UserQuery,
    ) { }

    async ngOnInit() {
        await this.eventService.getList();
    }

    goTo(event) {
        this.navCtrl.navigateForward('event-details', {
            state: { event },
        });
    }

    goToLogin() {
        this.navCtrl.navigateForward('login')
    }
}