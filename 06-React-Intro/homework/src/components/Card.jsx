import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <div>
      <button onClick={props.onClose}>x</button>
      <h1>{props.name}</h1>
    </div>

    <div>
      <p>Min</p>
      <p>{props.min}</p>
    </div>

    <div>
      <p>Max</p>
      <p>{props.max}</p>
    </div>

    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img"/>
  </div>
  );
};