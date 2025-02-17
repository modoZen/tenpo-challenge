import { PokemonRegion } from './pokemon-region.enum';

export interface Pokemon {
  name: string;
  image: string;
  id: number;
  url: string;
  region: PokemonRegion;
}
