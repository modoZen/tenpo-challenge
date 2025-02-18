import { type FC } from 'react';
import { Pokemon } from '../../domain/pokemon';

import {
  PokemonCardContainer,
  PokemonCardImg,
  PokemonCardImgWrapper,
  PokemonCardName,
  PokemonCardNumber,
} from './PokemonCard.styled';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const { name, image, id } = pokemon;

  return (
    <PokemonCardContainer>
      <PokemonCardNumber>{`#${id}`}</PokemonCardNumber>
      <PokemonCardName>{name}</PokemonCardName>
      <PokemonCardImgWrapper>
        <PokemonCardImg src={image} alt={name} />
      </PokemonCardImgWrapper>
    </PokemonCardContainer>
  );
};
