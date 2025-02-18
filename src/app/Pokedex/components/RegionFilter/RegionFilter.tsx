import { PokemonRegion } from '../../domain/pokemon-region.enum';
import './RegionFilter.scss';

interface RegionFilterProps {
  selectedRegion: PokemonRegion;
  onSelectRegion: (region: PokemonRegion) => void;
}

export const RegionFilter = ({ selectedRegion, onSelectRegion }: RegionFilterProps) => {
  return (
    <div className='regionFilter-container'>
      {Object.values(PokemonRegion).map((region) => (
        <button
          type='button'
          key={region}
          onClick={() => onSelectRegion(region)}
          className={`btn ${selectedRegion === region ? 'active' : ''}`}
        >
          {region}
        </button>
      ))}
    </div>
  );
};
