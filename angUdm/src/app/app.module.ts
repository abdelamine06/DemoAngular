import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule} from './pokemon/pokemon.module';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent} from './auth/auth.component';
import {AuthService} from './pokemon/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
