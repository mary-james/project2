import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { DataService } from '../data.service';

import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-taskuser',
  templateUrl: './taskuser.component.html',
  styleUrls: ['./taskuser.component.css']
})
export class TaskuserComponent implements OnInit {
  private x:number;
  taskDataListing	: any = {};
  constructor(private taskDataList: UserService,private datas : DataService,private http: Http,private sessiont:SessionStorageService) { }
n=0;
  ngOnInit() {
    this.taskDataList.getTaskMembers().subscribe(data => this.taskDataListing = data);
    this.x=this.datas.gettask();
    
  }
  getIndex(i){
  
    this.n=i;
    this.datas.setIndexObj( this.n);
    this.sessiont.store("taskd",this.taskDataListing.data[i]);

  }
  deleteTask = function(i){
  
    this.n=this.taskDataListing.data[i].task_id
    console.log(this.n);
    if(window.confirm("Are you sure to delete ")) {
      
      const url = `${"http://localhost:8080/taskdel1"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.taskDataList.getTaskData().subscribe(data => this.taskDataListing = data);
      })
    }
  }
  
}
