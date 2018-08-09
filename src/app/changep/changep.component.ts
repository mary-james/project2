import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../models/user.module';

import { Form } from '../form'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})

export class ChangepComponent implements OnInit {
  rForm: FormGroup;                   
  password:string = '';
  userData	: any = {};
  user: User={
    user_id: null,
    first_name: null,
    last_name: null,
    emp_id: null,
    password: null,
    contactPreference: null,
    rpassword:null,
    gender: null,
    isActive: null,
    phoneNumber: null,
    email: '',
  };
  constructor(private userDataList: UserService, private router:Router,private fb: FormBuilder,private sessionst:SessionStorageService) {this.rForm = fb.group({
    'password':  [null, Validators.required],
    'validate' : ''
  }); }

  ngOnInit() {
    this.userDataList.getUserData().subscribe(data => this.userData = data);

}
checkP(e){
     console.log(e);
     var password = btoa(this.user.password);
     
     if(this.sessionst.retrieve("password") == password){
        this.router.navigate(['updatep'])
     }
     else{
       window.alert('Wrong Password')
     }
     if(password=="")
   {
     window.alert('Please enter old password')
   }
}


}
