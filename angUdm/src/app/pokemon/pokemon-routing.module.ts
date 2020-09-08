import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { ListPokemonComponent} from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
  {
    path: 'pokemon',
    canActivate: [AuthGuardService],
    children: [
      { path: 'all', component:ListPokemonComponent},
      { path: 'edit/:id', component: EditPokemonComponent, canActivate: [AuthGuardService]},
      { path: ':id', component: DetailPokemonComponent}
    ]
  }

];
@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonRoutingModule { }
