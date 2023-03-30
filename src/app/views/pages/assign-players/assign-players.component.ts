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
  Team1 : Team
  
  constructor( private teamService : TeamsService, private service: PlayerService){
    this.selectedTeam=new Team();
    this.Team1 = new Team();
    // // this.Team1.id=1;
    // // this.Team1.name="Karachi Kings"
    // this.Team1 = new Team().setID(1).setName("Karachi Kings");
    // this.teamObj.push(this.Team1);
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

  myFunc(selTeam : Team){
    console.log(selTeam);
  }

  playerSingle !: Player;
  //for view modal
  public visible = false;

  toggleModal(player: Player) {
    this.visible = !this.visible;
    console.log(player);
    this.playerSingle=player;
    console.log(this.playerSingle)
  }

  toggleModalAgain(myPlayer : Player) {
    console.log("selectedTeam"+this.selectedTeam.name)

    if(myPlayer.team == null){
      myPlayer.team = new Team();
      myPlayer.team=this.selectedTeam;
    }
    console.log(myPlayer);
    this.service.addTeam(myPlayer).subscribe(res =>{
    console.log(res);
    });
    console.log(myPlayer);
    this.visible = !this.visible; //for modal
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  toggleModalAgain_close(){
    this.visible = !this.visible;
  }
  
}
