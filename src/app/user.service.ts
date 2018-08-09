import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SessionStorageService } from '../../node_modules/ngx-webstorage';

interface myData{
  success:boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggenIn= JSON.parse(sessionStorage.getItem('UserLoggenIn') || 'false');
  private username;

  constructor(private http:Http,private sessionst:SessionStorageService) {
    this.isUserLoggenIn = false;
   }
   getUserData(){
    return this.http.get("http://localhost:8080/userList").map((res:Response) => res.json()) ;   
   }
   getUserRole(){
    return this.http.get("http://localhost:8080/userrole").map((res:Response) => res.json());
   }
   getUserRoleMap(){
    return this.http.get("http://localhost:8080/roleMapping").map((res:Response) => res.json());
   }
   getmemberlist(){
    return this.http.get("http://localhost:8080/memberlist").map((res:Response) => res.json());
   }
   getUserRoleMap1(){
    return this.http.get("http://localhost:8080/roleMapping1").map((res:Response) => res.json());
   }
   getUnassign1(){
    return this.http.get("http://localhost:8080/unassign").map((res:Response) => res.json());
   }
   getTaskData(){
    return this.http.get("http://localhost:8080/tasklist").map((res:Response) => res.json());   
   }
   getTaskassign(){
    return this.http.get("http://localhost:8080/atask1").map((res:Response) => res.json());   
   }
   getAtask(){
    return this.http.get("http://localhost:8080/assign2").map((res:Response) => res.json());   
   }
   getTaskDatahead(){
    return this.http.get("http://localhost:8080/headtask").map((res:Response) => res.json());   
   }
   getTaskData1(){
    return this.http.get("http://localhost:8080/taskcapture").map((res:Response) => res.json());   
   }
   getTaskMembers(){
    return this.http.get("http://localhost:8080/taskMembers").map((res:Response) => res.json());   
   }
   setUserLoggenIn(){
     this.isUserLoggenIn = true;
     
   }

   getUserLoggedIn(){
     return this.sessionst.retrieve("logdata");
   }
}
