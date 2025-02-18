import { Pokemon } from './pokemon';

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: Pick<Pokemon, 'name' | 'url'>[];
}
