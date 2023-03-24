import { Component, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Player} from '../../../models/player/player';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.scss']
})
export class RegisterPlayerComponent {
  your_property = false;
  addForm = FormGroup;
  playerObj : Player

  constructor(private router: Router , private service: PlayerService){ //dependency injection -- using service in constructor - private variable makes it accessibe thorugh out the class
    this.playerObj = new Player();
  }

  registerPlayer(){ 
    console.log(JSON.stringify(this.playerObj));
    
    this.service.registerPlayer(this.playerObj).subscribe(res=>{
        alert('Player '+res.firstName+" "+res.lastName+ " added successfully");
      });
      //this.router.navigate(['register-players']);
  }





}
