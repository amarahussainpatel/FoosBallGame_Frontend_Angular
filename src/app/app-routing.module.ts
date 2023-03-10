import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { Title } from 'chart.js';
import { RegisterTeamComponent } from './views/pages/register-team/register-team.component';
import { FooseballTeamComponent } from './views/pages/Teams/fooseball-team/fooseball-team.component';
import { RegisterPlayerComponent } from './views/pages/register-player/register-player.component';
import { AssignTeamComponent } from './views/pages/assign-team/assign-team.component';
import { PlayerInfoComponent } from './views/pages/player-info/player-info.component';
import { AssignPlayersComponent } from './views/pages/assign-players/assign-players.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      // title: 'Home'
    },
    children: [
  
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
       path: 'register-team',
       component: RegisterTeamComponent,
       pathMatch: 'full' 
      },
      {
        path: 'assign-team',
       component: AssignTeamComponent,
       pathMatch: 'full'
      },
      {
        path: 'player-info',
        component: PlayerInfoComponent,
        pathMatch: 'full'
      },
      {
        path: 'register-players',
       component: RegisterPlayerComponent,
       pathMatch: 'full'
      },
      {
        path: 'assign-players',
        component: AssignPlayersComponent,
        pathMatch: 'full'
      }
      //path:'assign-players'

      // {
      //   path: 'theme',
      //   loadChildren: () =>
      //     import('./views/theme/theme.module').then((m) => m.ThemeModule)
      // },
      // {
      //   path: 'base',
      //   loadChildren: () =>
      //     import('./views/base/base.module').then((m) => m.BaseModule)
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: () =>
      //     import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      // },
      // {
      //   path: 'forms',
      //   loadChildren: () =>
      //     import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      // },
      // {
      //   path: 'charts',
      //   loadChildren: () =>
      //     import('./views/charts/charts.module').then((m) => m.ChartsModule)
      // },
      // {
      //   path: 'icons',
      //   loadChildren: () =>
      //     import('./views/icons/icons.module').then((m) => m.IconsModule)
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: () =>
      //     import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: () =>
      //     import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      // },
      ,
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
  
    ]
    
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    },
    
  },

  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
