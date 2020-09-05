import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { Pokemon} from '../models/pokemon.model';

import { PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(private  route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {

  }

  ngOnInit(): void {

    const id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);

  }

  goBack(): void {
    this.router.navigate(['/pokemons'])
  }

}
