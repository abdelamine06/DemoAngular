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
    this.pokemonService.getPokemon(id)
      .subscribe((pokemon)=>{
        this.pokemon = pokemon;
    });

  }
  delete(pokemon: Pokemon): void{
    this.pokemonService.deletePokemon(pokemon)
      .subscribe(()=>{
        this.goBack();
      })
  }
  goBack(): void {
    this.router.navigate(['/pokemon/all'])
  }

  goEdit(pokemon: Pokemon): void{
    this.router.navigate(['/pokemon/edit', pokemon.id]);
  }

}
