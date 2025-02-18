import './Loading.scss';

export const Loading = () => {
  return (
    <div className='loading-screen'>
      <div className='spinner' />
      <p>Cargando...</p>
    </div>
  );
};
