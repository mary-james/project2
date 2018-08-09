import { Component, OnInit , Output,EventEmitter } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { Http, Response,Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
@Component({
  selector: 'app-rolemap',
  templateUrl: './rolemap.component.html',
  styleUrls: ['./rolemap.component.css']
})
export class RolemapComponent implements OnInit {
  @Output() timeEvent = new EventEmitter();
  n:string;
  time:number=10;

roleData : any = {};
  constructor(private ServiceRole: SampleService,private http: Http,private rolemapList:UserService,private sessionst:SessionStorageService) { }
emp_id:number;




  ngOnInit() {
    this.rolemapList.getUserRoleMap().subscribe(data => this.roleData = data);

  }
  
  getIndex(i){
    this.n = i;
    this.sessionst.store("etask",this.roleData.data[i])  ;

    console.log(this.n);
  }

  deleteUser = function(i){
  
    this.n=this.roleData.data[i].role_code
    console.log(this.n);
    if(window.confirm("Are you sure to delete ")) {
      
      const url = `${"http://localhost:8080/userdel3"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.rolemapList.getUserRoleMap().subscribe(data => this.roleData = data);
      })
    }
  }

}
