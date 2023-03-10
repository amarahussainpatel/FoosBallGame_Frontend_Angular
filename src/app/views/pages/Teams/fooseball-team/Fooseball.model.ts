export class FooseBall{
    teamName!:string
    captain!: string
    member!: string


    constructor(private Name:string , private Captain:string , private Member:string){
        this.teamName = Name;
        this.captain = Captain;
        this.member = Member
    }
}

