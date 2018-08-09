import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SampleService } from '../services/sample-service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sampleDataListing	: any = {};
  private first_name: string;
  private last_name: string;

  constructor(private user: UserService,private sessionst:SessionStorageService) { }

  ngOnInit() {
this.first_name=this.sessionst.retrieve("first_name");
this.last_name=this.sessionst.retrieve("last_name");


    
  }

}
