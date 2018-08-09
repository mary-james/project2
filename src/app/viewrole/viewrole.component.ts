import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from '.../../node_modules/ng2-smart-table';
import { UserService } from '../user.service';
@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {
  userDataListing	: any = {};
  constructor(private userDataList: UserService) { }

  ngOnInit() {
    this.userDataList.getUserRole().subscribe(data => this.userDataListing = data);
  }
  settings = {
    actions:false,
      columns: {
        role_id: {
          title: 'Role ID'
          
        },
        role_code: {
          title: 'Role Code'
        },
        role_name: {
          title: '  Role Name'
        },
        role_description: {
          title: 'Role Description'
        }
       
      }
    };
}
