import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Ng2SmartTableModule } from '.../../node_modules/ng2-smart-table';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userDataListing	: any = {};
  constructor(private userDataList: UserService,private http: Http,private dataService : DataService) { }

  ngOnInit() {
    this.userDataList.getUserData().subscribe(data => this.userDataListing = data);
    
  }
  



settings = {
actions:false,
  columns: {
    user_id: {
      title: 'User ID'
      
    },
    emp_id: {
      title: 'Employee Id'
    },
    first_name: {
      title: '  First Name'
    },
    last_name: {
      title: 'Last Name'
    },
    phone_no: {
      title: 'Phone Number'
    },
    email: {
      title: 'Email'
    },
    gender: {
      title: 'Gender'
    }
  }
};
}
