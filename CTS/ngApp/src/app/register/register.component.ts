import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    name:'',
    email: '',
    password: '',
    contact:''
  }

  constructor(private authentication: AuthenticationService, private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.authentication.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
      this._router.navigate(['/login'])}
        ,
      err=>console.log(err)
    )
  }

}
