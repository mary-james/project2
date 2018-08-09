import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  b=0;
  c=0;
  rForm: FormGroup;                    // A property for our submitted form
  password:string = '';
  emp_id:string = '';
  
  userData	: any = {};
  userData1: any = {};
  public data:any=[];
  
  constructor(
              private router:Router,private user:UserService,
              private fb: FormBuilder,private sessionst:SessionStorageService, private datas:DataService) {
                this.rForm = fb.group({
                  'emp_id': [null, Validators.required],
                  'password':  [null, Validators.required],
                  'validate' : ''
                });
            
               }
               
	 ngOnInit() {
		this.user.getUserData().subscribe(data => this.userData = data);
    this.sessionst.store("logdata",false);
    this.user.getUserRoleMap().subscribe(data => this.userData1= data);
  }
  
  
  n=0;
   loginUser(e){
    
     this.n=0;
     this.b=0;
     this.c=0;
     e.preventDefault();
     console.log(e);
     
     var username = e.target.elements[0].value;
     
     var password =btoa(e.target.elements[1].value);

     var role = e.target.elements[2].value;
     
    
     while(this.userData.data[this.n] != undefined)
    {
     if(username == this.userData.data[this.n].emp_id && password == this.userData.data[this.n].password ){
    
     while(this.userData1.data[this.b] != undefined){
     if(this.userData1.data[this.b].emp_id==username ){
       this.c=1;
       
      if(this.userData1.data[this.b].role_code!=role ) 
         
      {
      window.alert('As per records,you are not assigned to this role' );
      this.router.navigate(['']);
      
      }
else{
  this.user.setUserLoggenIn();
  this.sessionst.store("username",this.userData.data[this.n].emp_id);
  this.sessionst.store("first_name",this.userData.data[this.n].first_name);
  this.sessionst.store("last_name",this.userData.data[this.n].last_name);
  this.sessionst.store("password",this.userData.data[this.n].password);
  this.sessionst.store("email",this.userData.data[this.n].email);
  this.sessionst.store("phone_no",this.userData.data[this.n].phone_no);
  this.sessionst.store("gender",this.userData.data[this.n].gender);
  this.sessionst.store("logdata",true);
  this.sessionst.store("Role",role);

  if(role=="adm")
  {
   this.router.navigate(['admin']) 
  }
  if(role=="asso")
  {
   this.router.navigate(['associate']) 
  }
  if(role=="lead")
  {
   this.router.navigate(['lead']) 
  }
  if(role=="head")
  {
   this.router.navigate(['head']) 
  }
  
}

    }

    this.b++;

  }
  
    
     
      
      break;
      
    }
    
    
    this.n++;
   }
   if(username=="")
   {
     window.alert('Please enter Employee Id')
   }
   else if(password==""){
    window.alert('Please enter Password')
   }


   else if(this.userData.data[this.n] == undefined){
     window.alert('Wrong Id/Password');
   }
   
 else if(this.c==0){
   window.alert('You have not been mapped to any role yet');
 }
  


  }
   }