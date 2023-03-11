import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-matches',
  templateUrl: './generate-matches.component.html',
  styleUrls: ['./generate-matches.component.scss']
})
export class GenerateMatchesComponent {
  selectedTeam1 = '';
  selectedTeam2 = '';
   teams = ['XYZ','ABC','LTS']
}
