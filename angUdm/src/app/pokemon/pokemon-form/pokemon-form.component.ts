import { Component,Input, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { PokemonService} from '../services/pokemon.service';
import { Pokemon} from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
 @Input() pokemon: Pokemon; // proprieté d'entrée pour un component
  types: Array<string>
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }

  hasType(type: string): boolean {
     let index = this.pokemon.types.indexOf(type);
     if(~index) return  true;
     return false;
  }

  selectType($event: any, type: string): void{
    let checked = $event.target.checked;
    if(checked){
      this.pokemon.types.push(type)
    }else{
      let index = this.pokemon.types.indexOf(type);
      if(~index){
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log("Submit form !");
    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }

 isTypesValid(type: string): boolean {
    if(this.pokemon.types.length >= 3  && !this.hasType(type) ){
      return false;
   }else{
      return true;
   }
  }
}


