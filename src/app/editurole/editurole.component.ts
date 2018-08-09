import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { SampleService } from '../services/sample-service';
import { Http } from '../../../node_modules/@angular/http';
import {Router} from '@angular/router';
import { Userrole } from '../models/userrole.module';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-editurole',
  templateUrl: './editurole.component.html',
  styleUrls: ['./editurole.component.css']
})
export class EdituroleComponent implements OnInit {
  user1: Userrole ={
    role_id: null,
    role_code: null,
    role_name: null,
    role_description: null
  };
    


  private n:number=0;
  userData	: any = {};
  userRole : any={};
  constructor(private userService: UserService, private dataService:DataService,private http: Http,private router:Router,private sessionst:SessionStorageService) { }

  ngOnInit() {
    this.n=this.dataService.getIndexObj();
    this.userService.getUserRole().subscribe(data => this.userData = data);
this.userRole=this.sessionst.retrieve("role");

  }
  updateRole = function(user1){
    this.userObj = {
      "role_id" : this.userData.data[this.n].role_id,
      "role_code" :user1.role_code ,
      "role_name" : user1.role_name ,

      "role_description" : user1.role_description,
      "modified_by" : this.sessionst.retrieve("username")
     
    }
    
    if(user1.role_id == ""){
      window.alert("Please Enter Role Id")
    }
    else if(user1.role_code == ""){
      window.alert("Please Enter Role Code")
    }
    else if(user1.role == ""){
      window.alert("Please Enter Role  Name")
    }
    else if(user1.role_description == ""){
      window.alert("Please Enter Role Description")
    }
    
    else {
      this.http.put("http://localhost:8080/updateuserr", this.userObj).subscribe((res:Response) => {
        this.router.navigate(['dashboard/userrole']);
        window.alert('Updation successful');
    })
    }
  }
  Cancel(){
    this.router.navigate(['dashboard/userrole'])
  }
}
