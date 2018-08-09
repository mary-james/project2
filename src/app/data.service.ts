import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private i: number;
  private q: number;

  private user: {};
  private userRole:{};
  private task:{};
  constructor() {
    this.i = 0;
    this.q=0;

   }

   public setIndexObj(val: number) {
    this.i = val;
}

public getIndexObj(): number {
    return this.i;
}
public setUser(val: object) {
  this.user = val;
}
public getUser(): object {
  return this.user;
}
public setUserRole(val: object) {
  this.userRole = val;
}
public getUserRole(): object {
  return this.userRole;
}
public settask(val: number) {
  this.q = val;
}
public gettask(): number {
  return this.q;
}
public settask1(val: number) {
  this.q = val;
}
public gettask1(): number {
  return this.q;
}
}
