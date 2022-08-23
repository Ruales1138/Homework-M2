import React from 'react';
import estilo from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  return ( 
    <div className={estilo.contenedor}>
      <button className={estilo.btn} onClick={props.onClose}>X</button>
      <h1>{props.name}</h1>
      <div className={estilo.infoCont}>
        <div>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
    
        <div>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
    
        <img
          src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
          alt="img"
        />
      </div>
    </div>
    );
};