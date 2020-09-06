import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule} from './pokemon-routing.module';

import { BorderCardDirectiveDirective } from './border-card-directive.directive';
import { PokemonTypeColorPipe} from './pokemon-type-color-pipePerso.service';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonService} from './services/pokemon.service';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BorderCardDirectiveDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule

  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
