import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreatmentResourcesPage } from './treatment-resources.page';

const routes: Routes = [
    {
        path: '',
        component: TreatmentResourcesPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TreatmentResourcesPageRoutingModule { }