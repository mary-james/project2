import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { User } from '../models/user.module';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-updatep',
  templateUrl: './updatep.component.html',
  styleUrls: ['./updatep.component.css']
})
export class UpdatepComponent implements OnInit {
  private x:number;
  user: User={
    user_id: null,
    first_name: null,
    last_name: null,
    emp_id: null,
    password: null,
    contactPreference: null,
    rpassword:null,
    gender: null,
    isActive: null,
    phoneNumber: null,
    email: '',
  };
  constructor(private http: Http,private sessionst:SessionStorageService,private router:Router) { }

  ngOnInit() {
    this.x=8;
  }
changeP = function(user){
  console.log(this.sessionst.retrieve("username"),btoa(user.newp));
 
  this.userObj = {
    "emp_id" : this.sessionst.retrieve("username"),
    "password": btoa(this.user.password),
    "modified_by" : this.sessionst.retrieve("username")
  }
  if(user.password != user.rpassword){
    window.alert('Passwords Do Not Match')
  }
  
  else{
  this.http.put("http://localhost:8080/changepassword", this.userObj).subscribe((res:Response) => {
    this.router.navigate(['cpmessage'])
})
  }

}
}
