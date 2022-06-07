import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'blogs',
        loadChildren: () =>
          import('../blogs/blogs.module').then(
            (m) => m.BlogsPageModule
          ),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then(
            (m) => m.Tab2PageModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../events/events.module').then((m) => m.EventsPageModule),
      },

    ],
  },
  {
    path: '',
    redirectTo: '/tabs/blogs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }

