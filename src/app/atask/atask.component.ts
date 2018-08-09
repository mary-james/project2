import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-atask',
  templateUrl: './atask.component.html',
  styleUrls: ['./atask.component.css']
})
export class AtaskComponent implements OnInit {
userData:any={};
userData1:any={};
userData2:any={};
private x:number;
private y:string;
  constructor(private user:UserService,private datas : DataService,private http:Http,private sessiont:SessionStorageService) { }

  ngOnInit() {
    this.user.getTaskassign().subscribe(data => this.userData = data);
    
    this.user.getTaskMembers().subscribe(data => this.userData1 = data);
    this.user.getmemberlist().subscribe(data => this.userData2 = data);
    this.y="adm";
    this.x=this.datas.gettask();
    console.log(this.x)
  }
  assignTask = function(i){
    
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
