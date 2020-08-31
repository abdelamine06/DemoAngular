import {Component, OnInit} from '@angular/core';
import {Pokemon} from './models/pokemon.model';
import {POKEMONS} from './services/pokemons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pokemons: Pokemon[] = null;
  public title: string = "La liste des pokemons!";

/*
  age = 20;
 values: '';
  public value: string = '';
*/

  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert('Vous avez cliquer sur' + pokemon.name);
  }

 /* onClick() {
    console.log("Le button est cliquer!");
  }

  onKey(value:string) {
    this.value = 'Bonjour ' + value;
  }*/
}




