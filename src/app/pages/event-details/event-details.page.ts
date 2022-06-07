import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { EventQuery, EventService } from 'src/app/stores/event';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.page.html',
    styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
    event: any;
    constructor(
        private router: Router,
        private eventService: EventService,
        private eventQuery: EventQuery
    ) {
        const { state } = this.router.getCurrentNavigation().extras;
        this.event = state.event;
        if (this.event) {
            this.eventService.getEvent(this.event.id);
            this.eventQuery
                .selectEntity(this.event.id)
                .subscribe((event) => (this.event = event));
        }
    }

    ngOnInit() { }
}