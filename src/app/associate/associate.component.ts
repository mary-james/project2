import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {
first_name:string;
last_name:string;
taskmembers: any ={};
tasks: any={};
emp_id :number;
n=0;
k=0;
l=0;
m=0;
p=0;
  constructor( private sessionst: SessionStorageService,private taskMembers: UserService,private router:Router) { }

  ngOnInit() {
   this.first_name= this.sessionst.retrieve("first_name");
   this.last_name=this.sessionst.retrieve("last_name");
   this.taskMembers.getTaskMembers().subscribe(data=> this.taskmembers =data );
   this.emp_id=this.sessionst.retrieve("username");
  }

  Details(i){
    this.router.navigate(['tdetails']);
    this.sessionst.store("task",this.taskmembers.data[i].task_name);
    this.sessionst.store("task_id",this.taskmembers.data[i].task_id);

  }

  count(i){
this.k=0;
this.m=0;
this.n=0;
    this.p=i;
    this.l=1;
    while(this.taskmembers.data[this.k]!=undefined){
if(this.taskmembers.data[this.k].task_id == this.taskmembers.data[i].task_id){
  this.n++;
if(this.taskmembers.data[this.k].task_status==1){
  this.m++;
}
}
this.k++;
    }
  }


}
