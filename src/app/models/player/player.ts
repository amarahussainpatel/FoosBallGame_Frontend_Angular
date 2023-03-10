import { PlayerSkills } from "../playerskills/player-skills"
import { Team } from "../teams/team"

export class Player {
    id!: number
    firstName!: String
    lastName!: String
    cnic!: number
    playerSkills!: PlayerSkills
    team!: Team
    constructor(){
        this.playerSkills=new PlayerSkills();
    }
}
