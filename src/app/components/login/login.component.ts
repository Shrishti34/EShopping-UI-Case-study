import { Component, OnInit } from '@angular/core';
import { Router,Route  } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private _service: UtilityService, private router: Router) { }

  ngOnInit(): void {
  }

  //login(){
  //  console.log(this.model)
  //}

  login(username){
    this._service.loggedIn.next({username: username.value})
    this.router.navigate(['/shop']);
    console.log(this.model)
  }
}
