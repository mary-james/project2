import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { Http } from '../../../node_modules/@angular/http';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  userData	: any = {};
  constructor(private userDataList: UserService,private http: Http,private dataService : DataService,private sessionst:SessionStorageService) { }
  private n: number = 0;
  
  ngOnInit() {
    this.userDataList.getUserRole().subscribe(data => this.userData = data);
    
  }
  deleteUser = function(i){
  
    this.n=this.userData.data[i].role_id
    console.log(this.n);
    if(window.confirm("Are you sure to delete ")) {
      
      const url = `${"http://localhost:8080/userdel2"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.userDataList.getUserRole().subscribe(data => this.userData = data);
      })
    }
  }
  getIndex(i){
  
    this.n=i;
    console.log(this.n);
    this.dataService.setIndexObj( this.n);
    this.dataService.setUserRole(this.userData.data[i])
    this.sessionst.store("role",this.userData.data[i])
  }
}
