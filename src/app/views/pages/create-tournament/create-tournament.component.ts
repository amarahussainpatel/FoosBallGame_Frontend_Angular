import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Tournament} from '../../../models/tournament/tournament';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent {
  cities = ['Karachi','Lahore','Islamabad']

  tournament : Tournament
  constructor(private router: Router){
    this.tournament=new Tournament();
  }

  registerTournament(){
    console.log(this.tournament);
    this.router.navigate(['choose-team']);
  }
}
