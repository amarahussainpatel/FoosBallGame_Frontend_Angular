import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Player } from '../models/player/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }

  public registerPlayer(player:Player):Observable<any>{
    return this.http.post("http://localhost:8080/api/player/save",player);
  }

  public getPlayerList():Observable<any>{
    return this.http.get("http://localhost:8080/api/player/get");
  }
}
