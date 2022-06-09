import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UntilDestroy } from '@ngneat/until-destroy';
import { VolunteerQuery, VolunteerService } from 'src/app/stores/volunteer';
import { UserQuery } from 'src/app/stores/user';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'app-volunteer',
    templateUrl: './volunteer.page.html',
    styleUrls: ['./volunteer.page.scss'],
})
export class VolunteerPage implements OnInit {
    treatment: any;
    resources: any;

    constructor(
        private router: Router,
        private volunteerService: VolunteerService,
        private navCtrl: NavController,
        public volunteerQuery: VolunteerQuery,
        public sanitizer: DomSanitizer,
        public userQuery: UserQuery
    ) { }

    async ngOnInit() {
        const { state } = this.router.getCurrentNavigation().extras;
        this.treatment = state.treatment;
        this.resources = await this.volunteerService.getWiki();
        console.log(this.resources);
        // this.treatmentQuery
        //     .selectEntity(this.treatment.subjectLink)
        //     .subscribe((treatment) => {
        //         if (treatment) {
        //             this.treatment = treatment
        //         }
        //     });
    }

    goToLogin() {
        this.navCtrl.navigateForward('login')
    }
}