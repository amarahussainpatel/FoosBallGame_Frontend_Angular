import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from 'src/app/models/teams/team';
import {TeamsService} from '../../../services/teams.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent {
  values = ["one","two","three"];
  count = 0;
  checkProperty = false;
  isRegistered = false;

  teamObj : Team

  constructor(private teamService: TeamsService, private router: Router ){
    this.teamObj=new Team();
  }

  registerTeams(){
    console.log(JSON.stringify(this.teamObj));
    this.teamService.registerTeam(this.teamObj).subscribe(res =>{
      console.log(res);
      this.isRegistered = true;
      this.router.navigate(['register-team']);
      //window.location.reload();
    });
    
  }

}
