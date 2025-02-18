import { type FC } from 'react';
import { PokemonListContainer } from './PokemonList.styled';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Pokemon } from '../../domain/pokemon';

interface PokemonListProps {
  pokemons: Pokemon[];
}

export const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
  if (pokemons.length === 0) {
    return <div style={{ minHeight: '80vh' }} />;
  }

  return (
    <PokemonListContainer>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </PokemonListContainer>
  );
};
