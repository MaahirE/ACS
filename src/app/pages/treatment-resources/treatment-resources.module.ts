import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/module/shared.module';
import { TreatmentResourcesPageRoutingModule } from './treatment-resources-routing.module';
import { TreatmentResourcesPage } from './treatment-resources.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TreatmentResourcesPageRoutingModule,
        SharedModule,
    ],
    declarations: [TreatmentResourcesPage],
})
export class TreatmentResourcesPageModule { }