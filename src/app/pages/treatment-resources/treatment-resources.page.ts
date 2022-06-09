import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TreatmentQuery, TreatmentService } from 'src/app/stores/treatment';
import { UserQuery } from 'src/app/stores/user';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'app-treatment-resources',
    templateUrl: './treatment-resources.page.html',
    styleUrls: ['./treatment-resources.page.scss'],
})
export class TreatmentResourcesPage implements OnInit {
    treatment: any;
    resources: any;

    constructor(
        private router: Router,
        private treatmentService: TreatmentService,
        private navCtrl: NavController,
        public treatmentQuery: TreatmentQuery,
        public sanitizer: DomSanitizer,
        public userQuery: UserQuery
    ) { }

    async ngOnInit() {
        const { state } = this.router.getCurrentNavigation().extras;
        this.treatment = state.treatment;
        this.resources = await this.treatmentService.getWiki();
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