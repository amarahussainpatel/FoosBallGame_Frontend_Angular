import { Component } from '@angular/core';
import {FooseBall} from './Fooseball.model'

@Component({
  selector: 'app-fooseball-team',
  templateUrl: './fooseball-team.component.html',
  styleUrls: ['./fooseball-team.component.scss']
})
export class FooseballTeamComponent {

  fooseball :FooseBall[]=[
    new FooseBall('Super League','Hyder','Irtaza'),
    new FooseBall('Premier League','Syed Aakif','Ali Hyder'),
    new FooseBall('Team Eagle','Syed Aakif','Suraksha'),
    new FooseBall('Team Eagle','Syed Aakif','Suraksha'),
    new FooseBall('Team Eagle','Syed Aakif','Suraksha'),
    new FooseBall('Team Eagle','Syed Aakif','Suraksha')
  ]

}
