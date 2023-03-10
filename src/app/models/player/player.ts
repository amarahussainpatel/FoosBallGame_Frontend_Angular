import { PlayerSkills } from "../playerskills/player-skills"

export class Player {
    id!: number
    firstName!: String
    lastName!: String
    cnic!: number
    playerSkills!: PlayerSkills
    constructor(){
        this.playerSkills=new PlayerSkills();
    }
}
