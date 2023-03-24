import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Team } from '../models/teams/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http:HttpClient) { }

  public registerTeam(team: Team):Observable<any>{
    return this.http.post("http://localhost:8080/api/team/add",team);
  }

  public getTeamList():Observable<any>{
    return this.http.get("http://localhost:8080/api/team/get");
  }
}
