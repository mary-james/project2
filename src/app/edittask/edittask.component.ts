import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { Usertask } from '../models/task.module';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';


@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  task: Usertask ={
    task_id: null,
    task_name: null,
    task_description: null,
    task_status: null,
    actual_start_date: null,
    actual_end_date: null,
  };
  private n:number=0;
  data:object = {};
 sampleDataListing	: any = {};
 taskData : any = {};
 tasks:any={};
 p=0;
constructor(private taskDataList: UserService , private dataService:DataService,private http: Http,private router:Router,private sessiont:SessionStorageService) { }

ngOnInit() {
  this.n=this.dataService.getIndexObj();
  this.taskDataList.getTaskData().subscribe(data => this.taskData = data);
  this.tasks=this.sessiont.retrieve("taskd")

  

}

updateTask = function(task){
 
  this.taskObj = {
      "task_id" : this.taskData.data[this.n].task_id,
      "task_name" :task.task_name ,
      "task_description" : task.task_description,

  }
   
  
    this.http.put("http://localhost:8080/updatetask", this.taskObj).subscribe((res:Response) => {
      this.router.navigate(['userupdate'])
  })




}
}
