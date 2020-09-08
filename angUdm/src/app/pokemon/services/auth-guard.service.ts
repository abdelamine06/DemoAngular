import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor() { }

  canActivate() {
   console.log("le Guard a bien été appelé!");
   return true;
  }
}
