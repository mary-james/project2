import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private sessionst:SessionStorageService) { }

  ngOnInit() {
  }
changep(){
  this.router.navigate(['dashboard/changep']);
  
}
logout(){
  this.sessionst.clear("first_name");
  this.sessionst.clear("last_name");
  this.sessionst.clear("password");
  this.sessionst.clear("username");
  this.sessionst.clear("email");
  this.sessionst.clear("phone_no");
  this.sessionst.clear("gender");
  this.sessionst.clear("user");
  this.sessionst.clear("role");
  this.sessionst.clear("task");
  this.sessionst.store("logdata",false);

  this.router.navigate(['']);

}
updatep(){
  this.router.navigate(['uprofile']);
}
Home(){
  if(this.sessionst.retrieve("role")=="asso")
  {
    this.router.navigate(['associate']);
  }
  if(this.sessionst.retrieve("role")=="head")
  {
    this.router.navigate(['head']);
  }
  if(this.sessionst.retrieve("role")=="lead")
  {
    this.router.navigate(['lead']);
  }
  if(this.sessionst.retrieve("role")=="adm")
  {
    this.router.navigate(['admin']);
  }

}
}
