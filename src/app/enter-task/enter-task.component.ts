import { Component, OnInit } from '@angular/core';
import { Http, Response } from'@angular/http';
import { Usertask } from '../models/task.module';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css']
})
export class EnterTaskComponent implements OnInit {

  user2: Usertask ={
    task_id: null,
    task_status: null,
    task_name: null,
    task_description: null,
    actual_start_date: null,
    actual_end_date: null
  };
  

   constructor(private http: Http ,private router:Router) { }

    ngOnInit() {
    }
    saveTask = function(user2){
      this.taskObj = {
        
        
        "task_name" : user2.task_name ,
        "task_description" : user2.task_description,
        
        
      }
      
      
        this.http.post("http://localhost:8080/entertask", this.taskObj).subscribe((res:Response) => {
          this.router.navigate(['added'])
      })
      
    }
  
  }