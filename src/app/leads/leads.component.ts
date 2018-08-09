import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {
taskmembers:any={};
first_name:string;
last_name: string;
tasks: any={};
m=0;
n=0;
k=0;
l=0;
p=0;
  constructor(private taskMembers: UserService,private sessiont:SessionStorageService,private router:Router) { }

  ngOnInit() {
    this.taskMembers.getTaskMembers().subscribe(data=> this.taskmembers =data );
    this.first_name=this.sessiont.retrieve("first_name")
    this.last_name=this.sessiont.retrieve("last_name")
    this.taskMembers.getTaskData().subscribe(data=> this.tasks =data );

  }
  count(i){
    this.k=0;
    this.m=0;
    this.n=0;
        this.p=i;
        this.l=1;
        while(this.taskmembers.data[this.k]!=undefined){
    if(this.taskmembers.data[this.k].task_id == this.tasks.data[i].task_id){
      this.n++;
    if(this.taskmembers.data[this.k].task_status==1){
      this.m++;
    }
    }
    this.k++;
        }
      }
    atask(i){
this.sessiont.store("atask",this.tasks.data[i].task_id)
      this.router.navigate(['atask']);   }

}
