import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderCardDirectiveDirective } from './border-card-directive.directive';
import { PokemonTypeColorPipe} from './services/pokemon-type-color-pipePerso.service';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirectiveDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
