import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  const myRef = useRef(null);

  function agregaSegundos() {
    // `current` apunta al elemento de entrada de texto montado
    let ref = myRef.current.value
    setSegundos(ref)
}

  useEffect(() => {
    let interval = null;

    if(activo && tipo === 'Contador') {
      interval = setInterval(() => {
        setSegundos(segundos => segundos + 1)
      }, 1000)
    }

    if (activo && tipo === 'Cuenta Regresiva') {
      interval = setInterval(() => {
        setSegundos(segundos => segundos - 1);
      }, 1000);
    }

    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(interval);
    }

    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [activo, segundos, tipo])

  function toggle() {
    setActivo(!activo);
  };

  function reset() {
    setSegundos(0);
    setActivo(false);
  };

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva');
    if(tipo === 'Cuenta Regresiva') setTipo('Contador');
  }

  return (
    <div className="app">
      <div className="time">{segundos}s</div>
      <div className="row">
        <button 
          className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`} 
          onClick={toggle}>
          {activo? 'Pausa' : 'Inicio'}
        </button>
        <button className="button" onClick={reset}>Reset</button>
      </div>
      <button className="button" onClick={cambioTipo}>{tipo}</button>
      {tipo === 'Cuenta Regresiva' && 
      <input type="number" ref={myRef} onChange={agregaSegundos} placeholder="Ingresa Segundos" autoComplete="off"/>}
    </div>
  );
};

export default Timer;
