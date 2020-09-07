import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable,Subject, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { PokemonService} from '../services/pokemon.service';
import { Pokemon} from '../models/pokemon.model';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  private searchTerms = new Subject<string>();
  pokemons$: Observable<Pokemon[]>;
  constructor(private pokemonService: PokemonService,
              private router: Router) { }
  /*ajoute un term de recherche dans le flux de l'observable 'searchterms"*/
  search(term:string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=>
        this.pokemonService.searchPokemons(term)
      )
    );
  }
  gotoDetail(pokemon:Pokemon):void{
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
