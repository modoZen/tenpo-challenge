import styled from 'styled-components';

export const PokemonCardContainer = styled.div`
  content-visibility: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  max-height: 100%;
  padding: 0.625rem 0.825rem;
  cursor: pointer;
  border-style: solid;
  border-color: currentColor;
  border-radius: 0.75rem;
  transform: scale(1);
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-width: 1px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const PokemonCardNumber = styled.div`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
`;

export const PokemonCardImgWrapper = styled.div`
  width: 50%;
  border-style: solid;
  border-color: currentColor;
  border-width: 0;
  border-radius: 9999px;
`;

export const PokemonCardImg = styled.img`
  width: 100%;
  object-fit: cover;
  transform: scale(1.1);
`;

export const PokemonCardName = styled.p`
  text-align: center;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.25rem;
  min-height: 3.25rem;
  display: flex;
  align-items: center;
  margin: 0;
  ${PokemonCardContainer}:hover & {
    font-weight: 700;
  }
`;

export const PokemonCardTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
