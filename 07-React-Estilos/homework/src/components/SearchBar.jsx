import React from 'react';
import estilo from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
    <div className={estilo.contenedor}>
      <input type="text" placeholder="Ciudad..."/>
      <button className={estilo.btn} onClick={() => onSearch("Buscando")}>Agregar</button>
    </div>
    )
};