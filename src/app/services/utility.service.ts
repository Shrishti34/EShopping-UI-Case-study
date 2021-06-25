import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public contactEnable = new BehaviorSubject(false);
  public loggedIn = new BehaviorSubject({username: ''});
  public register = new BehaviorSubject({email: ''});
  
}