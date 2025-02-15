import { Header } from '../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <div>
        <h1>Vite + React</h1>
        <div className='card'>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div />
        <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
};

export default Home;
