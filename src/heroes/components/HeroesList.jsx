import { getHerosbyTipo } from '../helpers/getHerosbyTipo';
import { HeroesCard } from './HeroesCard';
import './HeroesList.css';

export const HeroesList = ({ tipo }) => {
  const heroes = getHerosbyTipo(tipo);

  return (
    <>
      <h1>Heroes List</h1>
      <div className="heroes-container">
        {heroes.map((aux) => (
          <HeroesCard key={aux.id} {...aux} />
        ))}
      </div>
    </>
  );
};
