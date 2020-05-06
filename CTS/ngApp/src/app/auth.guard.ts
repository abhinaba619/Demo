import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authentication: AuthenticationService,private _router:Router){}
  canActivate():boolean{
    if( this.authentication.loggedIn()){
      return true
    }else {
      this._router.navigate(['/login'])
      return false;
    }
  }

  


}
