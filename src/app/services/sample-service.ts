import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:Http) { }
  
  getListData123(){
   return this.http.get("http://localhost:8080/userList").map((res:Response) => res.json());   
  }

  getListData1234(){
    return this.http.get("http://localhost:8080/rolemap").map((res:Response) => res.json());   
   }
   deleteListData1234(){
    return this.http.delete("http://localhost:8080/rolemap").map((res:Response) => res.json());   
   }
   getListData123a(){
    return this.http.get("http://localhost:8080/userrole").map((res:Response) => res.json());
   }
   getListData123b(){
    return this.http.get("http://localhost:8080/rolemap1").map((res:Response) => res.json());
   }
}
