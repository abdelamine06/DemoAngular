import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  { path: 'pokemons', component:ListPokemonComponent},
  { path: 'pokemon/edit/:id', component: EditPokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent}
];
@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonRoutingModule { }
