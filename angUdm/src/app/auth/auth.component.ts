import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService} from '../pokemon/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  message: string = 'Connectez-vous!';
  public name: string;
  public password:string;

  constructor(public  authService: AuthService, private router: Router) {}

  // informe l'utilisateur sur son authentication

  setMessage(){
    this.message = this.authService.isAuth ? "Vous etes bien connecté!!" : "Identifiant ou mot de passe oublié";
    console.log(this.message);
  }
  //Connecte l'utilisteur aupres de guard
  login(){
    this.message = 'Tentative de connexion en cours ...';
    this.authService.login(this.name, this.password).subscribe(
      ()=>{
        this.setMessage();
        if(this.authService.isAuth){
        //  recupere l'url de redirect depuis authService
        //  Si aucune redirection n'a été définis, redirege l'user vers la liste des poekmons
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/pokemon/all';
          this.router.navigate([redirect]);
        }else{
          this.password ='';
        }
      }
    )
  }
  logout(){
    this.authService.logOut();
    this.setMessage();
  }
  ngOnInit(): void {
  }

}
