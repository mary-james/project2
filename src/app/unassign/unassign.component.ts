import { Component, OnInit } from '@angular/core';

import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

import { UserService } from '../user.service';

import { Router } from '../../../node_modules/@angular/router';

import { Http, Response,Headers } from '@angular/http';
import { DataService } from '../data.service';



@Component({

selector: 'app-unassign',

templateUrl: './unassign.component.html',

styleUrls: ['./unassign.component.css']

})

export class UnassignComponent implements OnInit {
private r:number;
first_name:string;

last_name:string;

taskmembers: any ={};

taskmembers1: any ={};

tasks: any={};
task: string;

emp_id :number;
n=0;

k=0;

l=0;

m=0;

p=0;

constructor( private sessionst: SessionStorageService, private datas: DataService,private http: Http,private taskMembers: UserService,private router:Router) { }



ngOnInit() {

this.first_name= this.sessionst.retrieve("first_name");

this.last_name=this.sessionst.retrieve("last_name");

this.taskMembers. getTaskDatahead().subscribe(data=> this.taskmembers =data );

this.taskMembers.getTaskData1().subscribe(data=> this.taskmembers1 =data );

this.emp_id=this.sessionst.retrieve("username");



}

assign = function(i){
  
  console.log(this.taskmembers.data)
  
  this.r=this.taskmembers.data[i].task_id;
  this.datas.settask1(this.r); 
  
  this.router.navigate(['unassign1']);
 
 

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
