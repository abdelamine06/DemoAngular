import {Injectable} from '@angular/core';
import {Pokemon} from '../models/pokemon.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  public pokemonUrl = 'api/POKEMONS';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error');
      console.log(`${operation} failed: ${error.message}`);


      return of(result as T);
    };
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
      tap(_ => {
        console.log('Pokemon fetched!');
      }),
      catchError(this.handleError('getPokemons', []))
    );
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(() => {
        console.log(`fetched pokemond id = ${id}`);
      }),
      catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
    );
  }

  getPokemonTypes(): string[] {
    return ['Feu', 'Plante', 'Poison', 'Eau', 'Normal', 'Vol', 'Electrik', 'Fée'];
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.pokemonUrl, pokemon, httpOptions).pipe(
      tap(() => {
        console.log(`updated pokemon id=${pokemon.id}`);
      }), catchError(this.handleError<any>('updatePokemon'))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(() => {
        console.log(`deleted pokemon id=${pokemon.id}`);
      }),
      catchError(this.handleError<Pokemon>('deletedPokemon'))
    );
  }
}
