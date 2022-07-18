import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateGroupPage } from './create-group.page';

const routes: Routes = [
    {
        path: '',
        component: CreateGroupPage
    },
    {
        path: 'groups',
        loadChildren: () =>
            import('../groups/groups.module').then(
                (m) => m.GroupsPageModule
            ),
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CreateGroupPageRoutingModule { }