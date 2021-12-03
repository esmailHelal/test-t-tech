import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiserviceService {
 /*  switch = false; */
  show = true;
  hidden = true;
 change_left_side: any = new BehaviorSubject(true); 
  constructor(private _HttpClient: HttpClient) { }
  public getJSON(): Observable<any> {
    return this._HttpClient.get("./assets/user.json");
}
}
