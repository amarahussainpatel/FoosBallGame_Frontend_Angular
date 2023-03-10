import { Component } from '@angular/core';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.scss']
})
export class RegisterTeamComponent {
  values = ["one","two","three"];
  count = 0;
  checkProperty = false;

}
