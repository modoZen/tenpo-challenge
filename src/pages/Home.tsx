import { useEffect } from 'react';
import { PokemonList } from '../components/PokemonList/PokemonList';
import { Loading } from '../components/Loading/Loading';
import { Layout } from '../components/Layout/Layout';
import { useAppDispatch, useAppSelector } from '../store';
import { PokemonThunks } from '../app/Home/store/pokemonThunks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(PokemonThunks.fetchPokemons());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export default Home;
