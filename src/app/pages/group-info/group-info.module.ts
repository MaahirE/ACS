import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/module/shared.module';
import { GroupInfoPageRoutingModule } from './group-info-routing.module';
import { GroupInfoPage } from './group-info.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GroupInfoPageRoutingModule,
        SharedModule

    ],
    declarations: [GroupInfoPage],
})
export class GroupInfoPageModule { }