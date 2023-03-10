import { Component } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-assign-players',
  templateUrl: './assign-players.component.html',
  styleUrls: ['./assign-players.component.scss']
})
export class AssignPlayersComponent {
  values = ["one","two","three"];
  searchText = '';
  playerObj : Array<Player> = [];
  userName = "";

  constructor(private service: PlayerService){
  }

  ngOnInit(){
      this.service.getPlayerList().subscribe(players=>{
      this.playerObj = players;
      console.log(this.playerObj);
    });
  }

  playerSingle !: Player;
  
  //for view modal
  public visible = false;

  toggleModal(player) {
    this.visible = !this.visible;
    console.log(player);
    this.playerSingle=player;
    console.log(this.playerSingle)
  }

  toggleModalAgain() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}
}
