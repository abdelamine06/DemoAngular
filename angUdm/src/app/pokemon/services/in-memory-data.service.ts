import { InMemoryDbService} from 'angular-in-memory-web-api';

import { POKEMONS} from '../pokemons-list';

export class InMemoryDataService implements  InMemoryDbService{
  createDb(){
    return { POKEMONS };
  }
}
