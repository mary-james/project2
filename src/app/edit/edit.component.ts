import { Component, OnInit, Input } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { Http, Response,Headers } from '@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  roleData : any = {};
  tasks:any={};
  
  
  constructor(private ServiceRole: SampleService,private http: Http,private sessionst:SessionStorageService) { }
 
  ngOnInit() {
    this.ServiceRole.getListData1234().subscribe(data => this.roleData = data);
    this.tasks=this.sessionst.retrieve("etask")
  }
  saveUser = function(i){
    console.log(i.emp_id)
    this.productObj = {
      
      "emp_id": i.emp_id,
      "role_code" : i.role_code
      
    }
    this.http.put("http://localhost:8080/updatemapping", this.productObj).subscribe((res:Response) => {
      
    })
    
   

  }
  

}
