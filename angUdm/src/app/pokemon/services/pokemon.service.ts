import {Injectable} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import { POKEMONS } from '../pokemons-list';

@Injectable()
export class PokemonService {

  constructor() {
  }

  getPokemons(): Pokemon[]{
    return POKEMONS
  }

  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for(let index = 0; index<pokemons.length; index++){
      if(pokemons[index].id == id){
        return pokemons[index];
      }
    }
  }
}
