import { useEffect, useState } from 'react';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { Loading } from '../../../common/components/Loading/Loading';
import { Layout } from '../../../common/components/Layout/Layout';
import { useAppDispatch, useAppSelector } from '../../../store';
import { PokemonThunks } from '../store/pokemonThunks';
import { PokemonRegion } from '../domain/pokemon-region.enum';
import { RegionFilter } from '../components/RegionFilter/RegionFilter';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector((state) => state.pokemon);
  const [selectedRegion, setSelectedRegion] = useState<PokemonRegion>(PokemonRegion.All);

  const filteredPokemons =
    selectedRegion === PokemonRegion.All
      ? pokemons
      : pokemons.filter(({ region }) => region === selectedRegion);

  useEffect(() => {
    dispatch(PokemonThunks.fetchPokemons());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <RegionFilter selectedRegion={selectedRegion} onSelectRegion={setSelectedRegion} />
      <PokemonList pokemons={filteredPokemons} />
    </Layout>
  );
};

export default Home;
