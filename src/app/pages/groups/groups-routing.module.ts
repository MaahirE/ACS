import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupsPage } from './groups.page';

const routes: Routes = [
  {
    path: '',
    component: GroupsPage
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile-details/profile-details.module').then(m => m.ProfileDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsPageRoutingModule { }