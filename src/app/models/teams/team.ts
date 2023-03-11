import { Player } from "../player/player"

export class Team {
    id!: number
    name!: String
    player!: Array<Player>
    isAdded!: boolean
   
    constructor(id,name,isAdded){
        this.id = id;
        this.name=name
        this.isAdded=isAdded;
    }
}
