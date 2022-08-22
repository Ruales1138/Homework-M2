import React from 'react';
import Card from './Card'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  <div>
    {cities?.map((city) => (
      <Card
      name={city.name}
      max={city.main.temp_max}
      min={city.main.temp_max}
      img={city.weather[0].icon}
      key={city.id}
      />
    ))}
  </div>
  );
};