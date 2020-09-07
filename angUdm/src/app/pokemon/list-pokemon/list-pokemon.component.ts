import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {Router} from '@angular/router';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  public pokemons: Pokemon[] = null;

  constructor(private router: Router, private pokemonService: PokemonService) {

  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons()
      .subscribe((pokemons) => {
        this.pokemons = pokemons;
      });
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }


}
