import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-unassign1',
  templateUrl: './unassign1.component.html',
  styleUrls: ['./unassign1.component.css']
})
export class Unassign1Component implements OnInit {
userData:any={};
userData1:any={};
userData2:any={};
userData3:any={};
private x:number;
private y:string;
  constructor(private user:UserService,private datas : DataService,private http:Http,private sessiont:SessionStorageService) { }

  ngOnInit() {
    this.user.getUnassign1().subscribe(data => this.userData3 = data);
    this.user.getUserRoleMap1().subscribe(data => this.userData = data);
    this.user.getAtask().subscribe(data => this.userData1 = data);
    this.user.getmemberlist().subscribe(data => this.userData2 = data);
    this.y="adm";
    this.x=this.datas.gettask1();
  }
  assignTask = function(i){
    console.log(i)
    console.log(this.x)
    this.taskObj ={
   "task_id":  this.x,
   "emp_id" : this.userData1.data[i].emp_id,
  
   }
   window.alert('New Task Assigned'); 
    this.http.post("http://localhost:8080/assigntask", this.taskObj).subscribe((res:Response) => {
         
     })
     
   }
   
}
