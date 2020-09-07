import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './services/in-memory-data.service';

import { PokemonRoutingModule} from './pokemon-routing.module';
import { PokemonService} from './services/pokemon.service';

import { BorderCardDirectiveDirective } from './border-card-directive.directive';
import { PokemonTypeColorPipe} from './pokemon-type-color-pipePerso.service';

import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { SearchPokemonComponent} from './search-pokemon/search-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BorderCardDirectiveDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    ListPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    PokemonRoutingModule

  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
