import { Component, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import {Player} from '../../../models/player/player';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.scss']
})
export class RegisterPlayerComponent {
  your_property = false;

  playerObj : Player

  constructor(private service: PlayerService){ //dependency injection -- using service in constructor - private variable makes it accessibe thorugh out the class
    this.playerObj = new Player();
  }

  registerPlayer(){ 
    console.log(JSON.stringify(this.playerObj));
    this.service.registerPlayer(this.playerObj).subscribe(res=>{
        console.log(res);
      });
  }





}
