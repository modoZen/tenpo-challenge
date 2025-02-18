import styled from 'styled-components';

export const PokemonListContainer = styled.div`
  margin: 0 auto;
  padding: 1.25rem 1rem;
  max-width: 1700px;

  display: grid;
  grid-template-columns: repeat(auto-fill, 15.625rem);
  column-gap: 1.25rem;
  row-gap: 2rem;
  justify-content: center;

  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: all;
  transition-duration: 0.5s;
`;
