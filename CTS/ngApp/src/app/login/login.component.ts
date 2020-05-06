import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../authentication.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={
    "email": '',
    "password": ''
  }

  constructor(private login: AuthenticationService,private _router: Router) { }


  ngOnInit(): void {
  }
  loginUser(){
    this.login.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/special'])
      }
        ,
     err => console.log(err)
    )
  }

}
