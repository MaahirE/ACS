import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDetailsPageRoutingModule } from './profile-details-routing.module';

import { ProfileDetailsPage } from './profile-details.page';
import { SharedModule } from 'src/app/module/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProfileDetailsPageRoutingModule,
        SharedModule,

    ],
    declarations: [ProfileDetailsPage]
})
export class ProfileDetailsPageModule { }