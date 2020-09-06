import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Pokemon} from '../models/pokemon.model';
import { PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon = null;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);
  }


}
