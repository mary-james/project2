import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  first_name:string;
  last_name:string;
  constructor(private sessionst:SessionStorageService) { }

  ngOnInit() {
    this.first_name= this.sessionst.retrieve("first_name");
   this.last_name=this.sessionst.retrieve("last_name");
  }

}
