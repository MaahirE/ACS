import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/module/shared.module';
import { VolunteerPageRoutingModule } from './volunteer-routing.module';
import { VolunteerPage } from './volunteer.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        VolunteerPageRoutingModule,
        SharedModule,
    ],
    declarations: [VolunteerPage],
})
export class VolunteerPageModule { }