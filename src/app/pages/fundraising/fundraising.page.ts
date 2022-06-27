import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UntilDestroy } from '@ngneat/until-destroy';
import { FundraisingQuery, FundraisingService } from 'src/app/stores/fundraising';
import { UserQuery } from 'src/app/stores/user';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'app-fundraising',
    templateUrl: './fundraising.page.html',
    styleUrls: ['./fundraising.page.scss'],
})
export class FundraisingPage implements OnInit {
    fundraising: any;
    resources: any;

    constructor(
        private router: Router,
        private fundraisingService: FundraisingService,
        private navCtrl: NavController,
        public fundraisingQuery: FundraisingQuery,
        public sanitizer: DomSanitizer,
        public userQuery: UserQuery
    ) { }

    async ngOnInit() {
        const { state } = this.router.getCurrentNavigation().extras;
        this.fundraising = this.fundraising;
        console.log(this.fundraising);
        this.resources = await this.fundraisingService.getWiki();
        console.log(this.resources);
        // this.treatmentQuery
        //     .selectEntity(this.treatment.subjectLink)
        //     .subscribe((treatment) => {
        //         if (treatment) {
        //             this.treatment = treatment
        //         }
        //     });
    }
    ionViewWillEnter() {
        this.fundraisingService.getWiki();
    }

    goToLogin() {
        this.navCtrl.navigateForward('login')
    }
}