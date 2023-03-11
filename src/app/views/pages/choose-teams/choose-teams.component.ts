import { Component } from '@angular/core';
import { Team } from 'src/app/models/teams/team';

@Component({
  selector: 'app-choose-teams',
  templateUrl: './choose-teams.component.html',
  styleUrls: ['./choose-teams.component.scss']
})
export class ChooseTeamsComponent {
  selectedTeam1 = '';
  selectedTeam2 = '';
  team1 : Team
  team2 : Team
  team3 : Team
  team4 : Team
  teams : Array<Team> = []
  isAdded = false
  searchText = ''

  constructor(){
    this.team1=new Team(1,"XYZ",true)
    this.team2=new Team(2,"ABC",true)
    this.team3=new Team(3,"FGH",true)
    this.team4=new Team(4,"UIX",true)
    this.teams.push(this.team1,this.team2,this.team3,this.team4)
  }

  teamAdded(t){
    console.log(t);
    t.isAdded=!t.isAdded;
  }
}
