import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  user:User = new User();

  constructor(private loginuserservice: LoginuserService){}

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginuser(this.user).subscribe(data=>{
      alert("vous connecter avec succés ")
    },error=>alert("S’il vous plaît ,entrez le correct nom et mot de passe"));
  }
}


