import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {POKEMONS} from '../services/pokemons.service';
import  { Router} from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  public pokemons: Pokemon[] = null;
  public title: string = "La liste des pokemons!";
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  /* onClick() {
     console.log("Le button est cliquer!");
   }

   onKey(value:string) {
     this.value = 'Bonjour ' + value;
   }*/

}
