import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'blog-details',
    loadChildren: () =>
      import('./pages/blog-details/blog-details.module').then(
        (m) => m.BlogDetailsPageModule
      ),
  },
  {
    path: 'treatment-resources',
    loadChildren: () =>
      import('./pages/treatment-resources/treatment-resources.module').then(
        (m) => m.TreatmentResourcesPageModule
      ),
  },
  {
    path: 'volunteer',
    loadChildren: () =>
      import('./pages/volunteer/volunteer.module').then(
        (m) => m.VolunteerPageModule
      ),
  },
  {
    path: 'event-details',
    loadChildren: () =>
      import('./pages/event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('./pages/messages/messages.module').then(
        (m) => m.MessagesPageModule
      ),
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/messages/new/new.module').then(m => m.NewPageModule)
  },
  {
    path: 'conversation',
    loadChildren: () => import('./pages/messages/conversation/conversation.module').then(m => m.ConversationPageModule)
  },
  {
    path: 'profile-details',
    loadChildren: () => import('./pages/profile-details/profile-details.module').then(m => m.ProfileDetailsPageModule)
  },

  {
    path: 'fundraising',
    loadChildren: () => import('./pages/fundraising/fundraising.module').then(m => m.FundraisingPageModule)
  },

  {
    path: 'create-group',
    loadChildren: () => import('./pages/create-group/create-group.module').then(m => m.CreateGroupPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }