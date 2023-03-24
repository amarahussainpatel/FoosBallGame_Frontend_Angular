import { Component } from '@angular/core';
import { Player } from 'src/app/models/player/player';
import { Team } from 'src/app/models/teams/team';
import { PlayerService } from 'src/app/services/player.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-assign-players',
  templateUrl: './assign-players.component.html',
  styleUrls: ['./assign-players.component.scss']
})
export class AssignPlayersComponent {
  values = ["one","two","three"];
  searchText = '';
  playerObj : Array<Player> = [];
  teamObj: Array<Team> = [];
  selectedTeam : Team;
  
  constructor( private teamService : TeamsService, private service: PlayerService){
  }

  ngOnInit(){
      this.service.getPlayerList().subscribe(players=>{
      this.playerObj = players;
      console.log(this.playerObj);
    });
    this.teamService.getTeamList().subscribe(teams=>{
      this.teamObj = teams;
      console.log(this.teamObj);
    })
    
  }

  myFunc(p){
    console.log(p);
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

  toggleModalAgain(myPlayer) {
    console.log("selectedTeam"+this.selectedTeam)
    if(myPlayer.team == null){
      myPlayer.team = new Team();
      myPlayer.team.name=this.selectedTeam;
    }
    //player.team.name = this.selectedTeam;
    myPlayer.team.name=this.selectedTeam
    this.service.addTeam(myPlayer).subscribe(res =>{
      console.log(res);
      //window.location.reload();
    });
    console.log(myPlayer);
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleModalAgain_close(){
    this.visible = !this.visible;
  }

  
	// onSelected(value:string): void {
	// 	this.selectedTeam = value;
	// }
  
}
