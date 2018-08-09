import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private x:string;
  private y:string;
  private z:string;
  private m:string;
  private n:string;
  constructor(private router:Router,private sessiont:SessionStorageService) { }

  ngOnInit() {
    this.x=this.sessiont.retrieve("role");
    this.y="adm";
    this.z="asso";
    this.n="head";
    this.m="lead";
  }
view(){
  this.router.navigate(['dashboard/user'])
}
addu(){
  this.router.navigate(['dashboard/adduser'])
}
endu(){
  this.router.navigate(['dashboard/userrole'])
}
addu1(){
  this.router.navigate(['dashboard/enterrole'])
}
rolem(){
  this.router.navigate(['dashboard/rolemap'])
}
edu(){
  this.router.navigate(['editdeluser'])
}
viewu(){
  this.router.navigate(['viewuserrole'])
}
view1(){
  this.router.navigate(['tasklist'])
}
addu2(){
  this.router.navigate(['entertask'])

}
unassign(){
  this.router.navigate(['unassign'])
}

viewtm(){
  this.router.navigate(['viewtaskmem'])
}
viewtr(){
  this.router.navigate(['viewtaskr'])
}
assign(){
  this.router.navigate(['assign1'])
}
report(){
  this.router.navigate(['taskreport'])
}

}
