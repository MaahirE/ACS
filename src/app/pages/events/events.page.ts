import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventQuery, EventService } from 'src/app/stores/event';
import { UserQuery } from 'src/app/stores/user';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
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