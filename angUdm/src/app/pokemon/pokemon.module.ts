import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule} from './pokemon-routing.module';

import { BorderCardDirectiveDirective } from './border-card-directive.directive';
import { PokemonTypeColorPipe} from './services/pokemon-type-color-pipePerso.service';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

@NgModule({
  declarations: [
    BorderCardDirectiveDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
