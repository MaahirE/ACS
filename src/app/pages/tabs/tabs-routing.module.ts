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
        path: 'groups',
        loadChildren: () =>
          import('../groups/groups.module').then(
            (m) => m.GroupsPageModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../events/events.module').then((m) => m.EventsPageModule),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../messages/messages.module').then((m) => m.MessagesPageModule),
      },

      {
        path: 'fundraising',
        loadChildren: () =>
          import('../fundraising/fundraising.module').then((m) => m.FundraisingPageModule),
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

