import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import {tap, delay} from 'rxjs/operators';

@Injectable()
export class AuthService {
  isAuth: boolean = false;
  redirectUrl: string;
  constructor() { }
  login(name: string, password:string):Observable<boolean>{
    let isAuth = (name ==='admin' && password === 'admin');
    return of(true).pipe(
      delay(1000),
      tap(
        (val)=>{
          this.isAuth =isAuth;
        }
      )
    );

  }
  logOut(): void {
    this.isAuth = false;
  }
}
