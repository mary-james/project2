import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.module';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { Http } from '../../../node_modules/@angular/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private first_name: string;
  private last_name: string;
  private email1: string;
  private phone_no :number;
  private gender1: string;
  user: User ={
    user_id: null,
    first_name: null,
    last_name: null,
    emp_id: null,
    password: null,
    rpassword: null,
    contactPreference: null,
    
    gender: null,
    isActive: null,
    phoneNumber: null,
    email: '',
  };

  constructor(private userDataList: UserService,private sessionst:SessionStorageService,private http:Http,private router:Router) { }

  ngOnInit() {
this.first_name=this.sessionst.retrieve('first_name');
this.last_name=this.sessionst.retrieve('last_name');
this.email1=this.sessionst.retrieve('email');
this.phone_no=this.sessionst.retrieve('phone_no');
this.gender1=this.sessionst.retrieve('gender');

  }
updateUserP = function(user){
  this.profObj= {
    "emp_id" : this.sessionst.retrieve("username"),
    "first_name" :user.first_name ,
    "last_name" : user.last_name ,
    "phone_no" : user.phoneNumber,
    "Email" : user.email,
    "Gender" : user.gender,
    "modified_by" : this.sessionst.retrieve("username")
  }
  this.http.put("http://localhost:8080/updateprofile", this.profObj).subscribe((res:Response) => {
     this.router.navigate(['profmessage']);
  })
}
}
