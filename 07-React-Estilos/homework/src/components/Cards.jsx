import React from 'react';
import Card from './Card';
import estilo from './Cards.module.css';

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={estilo.contenedor}>
      {cities?.map((city) => (
        <Card
        name={city.name}
        max={city.main.temp_max}
        min={city.main.temp_min}
        img={city.weather[0].icon}
        onClose={() => alert(city.name)}
        key={city.id}
        />
      ))}
    </div>
    );
};