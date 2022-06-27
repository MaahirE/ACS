import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupsPageRoutingModule } from './groups-routing.module';
import { GroupsPage } from './groups.page';
import { SharedModule } from 'src/app/module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupsPageRoutingModule, SharedModule
  ],
  declarations: [GroupsPage]
})
export class GroupsPageModule { }