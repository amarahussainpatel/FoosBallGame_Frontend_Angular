import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, TableModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { RegisterTeamComponent } from './register-team/register-team.component';
import { FooseballTeamComponent } from './Teams/fooseball-team/fooseball-team.component';
import { CricketTeamComponent } from './teams/cricket-team/cricket-team.component';
import { RegisterPlayerComponent } from './register-player/register-player.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { SearchPipe } from './search-pipe/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignPlayersComponent } from './assign-players/assign-players.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    RegisterTeamComponent,
    FooseballTeamComponent,
    CricketTeamComponent,
    RegisterPlayerComponent,
    AssignTeamComponent,
    PlayerInfoComponent,
    SearchPipe,
    AssignPlayersComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    Ng2SmartTableModule,
    FontAwesomeModule,
    TableModule,
    TabsModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class PagesModule {
}
